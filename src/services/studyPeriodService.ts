import type { ClientType } from "../client.js";
import { invalidParamError, serverError, unknownError, type PomiError } from "../errors.js";
import type { StudyPeriodEntitySchema } from "../models.js";
import { ResultErr, ResultOK, type Result } from "../result.js";

class StudyPeriodService {
	constructor(private client: ClientType) { }
	async get(studyPeriodId: number): Promise<Result<StudyPeriodEntitySchema | null, PomiError>> {
		const { data, error, response } = await this.client.GET(`/study-periods/{id}`, {
			params: {
				path: {
					id: studyPeriodId,
				}
			}
		});
		if (error) {
			if (response?.status === 404)
				return ResultOK(null);
			if (response?.status === 400)
				return ResultErr(invalidParamError("Invalid study period ID", [
					{ path: ["studyPeriodId"], message: "Must be a positive integer" }
				], { originalError: error, response }));
			if (response?.status === 500)
				return ResultErr(serverError("Server error occurred", { originalError: error, response }));
			return ResultErr(unknownError("An unknown error occurred", { originalError: error, response }));
		}
		return ResultOK(data ?? null);
	}
	async list(): Promise<Result<StudyPeriodEntitySchema[], PomiError>> {
		const { data, error, response } = await this.client.GET(`/study-periods`, {});
		if (error) {
			if (response?.status === 500)
				return ResultErr(serverError("Server error occurred", { originalError: error, response }));
			return ResultErr(unknownError("An unknown error occurred", { originalError: error, response }));
		}
		return ResultOK(data ?? []);
	}
}

export default StudyPeriodService