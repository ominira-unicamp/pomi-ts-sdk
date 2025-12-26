import type { ClientType } from "../client";
import { invalidParamError, serverError, unknownError, type PomiError } from "../errors";
import type { CourseOfferingEntitySchema } from "../models";
import type { paths } from "../openapi/specs";
import { ResultErr, ResultOK, type Result } from "../result";

type ListFilters = paths["/course-offerings"]["get"]["parameters"]["query"];

class CourseOfferingService {
	constructor(private client: ClientType) { }
	async get(courseOfferingId: number): Promise<Result<CourseOfferingEntitySchema | null, PomiError>> {
		const { data, error, response } = await this.client.GET(`/course-offerings/{id}`, {
			params: {
				path: {
					id: courseOfferingId,
				}
			}
		});
		if (error) {
			if (response?.status === 404)
				return ResultOK(null);
			if (response?.status === 400)
				return ResultErr(invalidParamError("Invalid course offering ID", [
					{ path: ["courseOfferingId"], message: "Must be a positive integer" }
				], { originalError: error, response }));
			if (response?.status === 500)
				return ResultErr(serverError("Server error occurred", { originalError: error, response }));
			return ResultErr(unknownError("An unknown error occurred", { originalError: error, response }));
		}
		return ResultOK(data ?? null);
	}
	async list(listFilters?: ListFilters): Promise<Result<CourseOfferingEntitySchema[], PomiError>> {
		const { data, error, response } = await this.client.GET(`/course-offerings`, {
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

export default CourseOfferingService
export type { ListFilters as CourseOfferingListFilters }