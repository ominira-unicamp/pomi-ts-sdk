import type { ClientType } from "../client";
import { invalidParamError, serverError, unknownError, type PomiError } from "../errors";
import type { CourseEntitySchema } from "../models";
import { ResultErr, ResultOK, type Result } from "../result";

class CourseService {
	constructor(private client: ClientType) { }
	async get(courseId: number): Promise<Result<CourseEntitySchema | null, PomiError>> {
		const { data, error, response } = await this.client.GET(`/courses/{id}`, {
			params: {
				path: {
					id: courseId,
				}
			}
		});
		if (error) {
			if (response?.status === 404)
				return ResultOK(null);
			if (response?.status === 400)
				return ResultErr(invalidParamError("Invalid course ID", [
					{ path: ["courseId"], message: "Must be a positive integer" }
				], { originalError: error, response }));
			if (response?.status === 500)
				return ResultErr(serverError("Server error occurred", { originalError: error, response }));
			return ResultErr(unknownError("An unknown error occurred", { originalError: error, response }));
		}
		return ResultOK(data ?? null);
	}
	async list(): Promise<Result<CourseEntitySchema[], PomiError>> {
		const { data, error, response } = await this.client.GET(`/courses`, {});
		if (error) {
			if (response?.status === 500)
				return ResultErr(serverError("Server error occurred", { originalError: error, response }));
			return ResultErr(unknownError("An unknown error occurred", { originalError: error, response }));
		}
		return ResultOK(data ?? []);
	}
}

export default CourseService