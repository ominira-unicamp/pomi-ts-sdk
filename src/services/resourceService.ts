import type { AuthData, ClientType } from "../client.js";
import {
	forbiddenError,
	notFoundError,
	serverError,
	unauthorizedError,
	unknownError,
	validationError,
	type PomiError,
} from "../errors.js";
import { ResultErr, type Result } from "../result.js";

export default class ResourceService {
	constructor(
		protected client: ClientType,
		protected authData: AuthData
	) {}

	protected defaultError<T>(response: Response | undefined, error: unknown): Result<T, PomiError> {
		if (!response) {
			return ResultErr(unknownError("No response received from server", { originalError: error }));
		}

		switch (response.status) {
			case 400:
				return ResultErr(validationError(error as any, { originalError: error, response }));
			case 401:
				return ResultErr(unauthorizedError("Unauthorized access", { originalError: error, response }));
			case 403:
				return ResultErr(forbiddenError("Forbidden access", { originalError: error, response }));
			case 404:
				return ResultErr(notFoundError("Resource not found", { originalError: error, response }));
			case 500:
				return ResultErr(serverError("Server error occurred", { originalError: error, response }));
			default:
				return ResultErr(unknownError("An unknown error occurred", { originalError: error, response }));
		}
	}
}
