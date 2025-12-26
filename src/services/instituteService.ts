import { type ClientType } from "../client";
import { invalidParamError, serverError, unknownError, type PomiError } from "../errors";
import type { InstituteEntitySchema } from "../models";
import { ResultErr, ResultOK, type Result } from "../result";

class InstituteService {
	constructor(private client: ClientType) { }
	async get(instituteId: number): Promise<Result<InstituteEntitySchema | null, PomiError>> {
		const { data, error, response } = await this.client.GET(`/institutes/{id}`, {
			params: {
				path: {
					id: instituteId,
				}
			}
		});
		if (error) {
			if (response?.status === 404)
				return ResultOK(null);
			if (response?.status === 400)
				return ResultErr(invalidParamError("Invalid institute ID", [
					{ path: ["instituteId"], message: "Must be a positive integer" }
				], { originalError: error, response }));
			if (response?.status === 500)
				return ResultErr(serverError("Server error occurred", { originalError: error, response }));
			return ResultErr(unknownError("An unknown error occurred", { originalError: error, response }));
		}
		return ResultOK(data ?? null);
	}
	async list(): Promise<Result<InstituteEntitySchema[], PomiError>> {
		const { data, error, response } = await this.client.GET(`/institutes`, {});
		if (error) {
			if (response?.status === 500)
				return ResultErr(serverError("Server error occurred", { originalError: error, response }));
			return ResultErr(unknownError("An unknown error occurred", { originalError: error, response }));
		}
		return ResultOK(data ?? []);
	}
}

export default InstituteService