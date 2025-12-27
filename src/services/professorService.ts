import type { ClientType } from "../client.js";
import { invalidParamError, serverError, unknownError, type PomiError } from "../errors.js";
import type { ProfessorEntitySchema } from "../models.js";
import type { paths } from "../openapi/specs.js";
import { ResultErr, ResultOK, type Result } from "../result.js";

type ListFilters = paths["/professors"]["get"]["parameters"]["query"];

class ProfessorService {
	constructor(private client: ClientType) { }
	async get(professorId: number): Promise<Result<ProfessorEntitySchema | null, PomiError>> {
		const { data, error, response } = await this.client.GET(`/professors/{id}`, {
			params: {
				path: {
					id: professorId,
				}
			}
		});
		if (error) {
			if (response?.status === 404)
				return ResultOK(null);
			if (response?.status === 400)
				return ResultErr(invalidParamError("Invalid professor ID", error.errors ?? [
					{ path: ["professorId"], message: "Must be a positive integer" }
				], { originalError: error, response }));
			if (response?.status === 500)
				return ResultErr(serverError("Server error occurred", { originalError: error, response }));
			return ResultErr(unknownError("An unknown error occurred", { originalError: error, response }));
		}
		return ResultOK(data ?? null);
	}
	async list(listFilters?: ListFilters): Promise<Result<ProfessorEntitySchema[], PomiError>> {
		const { data, error, response } = await this.client.GET(`/professors`, {
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

export default ProfessorService
export type { ListFilters as ProfessorListFilters }