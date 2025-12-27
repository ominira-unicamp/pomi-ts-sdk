import type { ClientType } from "../client.js";
import { invalidParamError, serverError, unknownError, type PomiError } from "../errors.js";
import type { ClassEntitySchema } from "../models.js";
import type { paths } from "../openapi/specs.js";
import { ResultErr, ResultOK, type Result } from "../result.js";

type ListFilters = paths["/classes"]["get"]["parameters"]["query"];

class ClassService {
	constructor(private client: ClientType) { }
	async get(classId: number): Promise<Result<ClassEntitySchema | null, PomiError>> {
		const { data, error, response } = await this.client.GET(`/classes/{id}`, {
			params: {
				path: {
					id: classId,
				}
			}
		});
		if (error) {
			if (response?.status === 404)
				return ResultOK(null);
			if (response?.status === 400)
				return ResultErr(invalidParamError("Invalid class ID", [
					{ path: ["classId"], message: "Must be a positive integer" }
				], { originalError: error, response }));
			if (response?.status === 500)
				return ResultErr(serverError("Server error occurred", { originalError: error, response }));
			return ResultErr(unknownError("An unknown error occurred", { originalError: error, response }));
		}
		return ResultOK(data ?? null);
	}
	async list(listFilters?: ListFilters): Promise<Result<ClassEntitySchema[], PomiError>> {
		const { data, error, response } = await this.client.GET(`/classes`, {
			params: {
				query: listFilters,
			}
		});
		if (error) {
			if (response?.status === 400)
				return ResultErr(invalidParamError("Invalid query parameters", error.errors ?? [], { originalError: error, response }));
			if (response?.status === 500)
				return ResultErr(serverError("Server error occurred", { originalError: error, response }));
			return ResultErr(unknownError("An unknown error occurred", { originalError: error, response }));
		}
		return ResultOK(data ?? []);
	}
}

export default ClassService
export type { ListFilters as ClassListFilters }