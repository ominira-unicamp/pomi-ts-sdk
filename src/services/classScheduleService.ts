import type { ClientType } from "../client";
import { invalidParamError as invalidParamError, serverError, unknownError, type PomiError } from "../errors";
import type { ClassScheduleEntitySchema } from "../models";
import type { paths } from "../openapi/specs";
import { ResultErr, ResultOK, type Result } from "../result";

type ListFilters = paths["/class-schedules"]["get"]["parameters"]["query"];

class ClassScheduleService {
	constructor(private client: ClientType) { }
	async get(classScheduleId: number): Promise<Result<ClassScheduleEntitySchema | null, PomiError>> {
		if (false && !Number.isInteger(classScheduleId) || classScheduleId <= 0) {
			return ResultErr(invalidParamError("Invalid class schedule ID", [
				{ path: ["classScheduleId"], message: "Must be a positive integer" }
			]))
		}
		const { data, error, response } = await this.client.GET(`/class-schedules/{id}`, {
			params: {
				path: {
					id: classScheduleId,
				}
			}
		});
		if (error) {
			if (response?.status === 404)
				return ResultOK(null);
			if (response?.status === 400)
				return ResultErr(invalidParamError("Invalid class schedule ID", error.errors ?? [
					{ path: ["classScheduleId"], message: "Must be a positive integer" }
				], { originalError: error, response }));
			if (response?.status === 500)
				return ResultErr(serverError("Server error occurred", { originalError: error, response }));
			return ResultErr(unknownError("An unknown error occurred", { originalError: error, response }));
		}
		return ResultOK(data ?? null);
	}
	async list(listFilters?: ListFilters): Promise<Result<ClassScheduleEntitySchema[], PomiError>> {
		const { data, error, response } = await this.client.GET(`/class-schedules`, {
			params: {
				query: listFilters,
			}
		});
		if (response?.status === 400 )
			return ResultErr(invalidParamError("Invalid query parameters", error?.errors ?? [], { originalError: error, response }));
		if (response?.status != 200) {
			if (response?.status === 500)
				return ResultErr(serverError("Server error occurred", { originalError: error, response }));
			return ResultErr(unknownError("An unknown error occurred", { originalError: error, response }));
		}
		return ResultOK(data ?? []);
	}
}

export default ClassScheduleService
export type { ListFilters as ClassScheduleListFilters }
