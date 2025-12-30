import type { components } from "./openapi/specs.js";


export type ApiError = components["schemas"]["ApiError"];
export type ApiErrorCode = components["schemas"]["ErrorCode"];
export type ApiErrorField = components["schemas"]["ErrorField"];


export type PomiErrorCode =
	| "SERVER_ERROR"
	| "VALIDATION_ERROR"
	| "UNKNOWN_ERROR"
	| "FORBIDDEN"
	| "UNAUTHORIZED"
	| "NOT_FOUND";

export type PomiErrorDetail = {
	code: ApiErrorCode;
	path: string[];
	message: string;
};

export type PomiError = {
	code: PomiErrorCode;
	message: string;
	details: PomiErrorDetail[];
	raw?: ApiError;
	response: Response | undefined;
};

type ErrorOptions = {
	originalError?: unknown;
	response?: Response;
};


export function validationError(
	apiError: ApiError,
	{ originalError, response }: ErrorOptions = {}
): PomiError {
	return {
		code: "VALIDATION_ERROR",
		message: apiError.message,
		details: apiError.errors.map((err) => ({
			code: err.code,
			path: err.path,
			message: err.message,
		})),
		raw: originalError as ApiError,
		response,
	};
}

export function serverError(
	message: string,
	{ originalError, response }: ErrorOptions = {}
): PomiError {
	return {
		code: "SERVER_ERROR",
		message,
		details: [],
		raw: originalError as ApiError,
		response,
	};
}

export function unauthorizedError(
	message: string,
	{ originalError, response }: ErrorOptions = {}
): PomiError {
	return {
		code: "UNAUTHORIZED",
		message,
		details: [],
		raw: originalError as ApiError,
		response,
	};
}

export function forbiddenError(
	message: string,
	{ originalError, response }: ErrorOptions = {}
): PomiError {
	return {
		code: "FORBIDDEN",
		message,
		details: [],
		raw: originalError as ApiError,
		response,
	};
}

export function notFoundError(
	message: string,
	{ originalError, response }: ErrorOptions = {}
): PomiError {
	return {
		code: "NOT_FOUND",
		message,
		details: [],
		raw: originalError as ApiError,
		response,
	};
}

export function unknownError(
	message: string,
	{ originalError, response }: ErrorOptions = {}
): PomiError {
	return {
		code: "UNKNOWN_ERROR",
		message,
		details: [],
		raw: originalError as ApiError,
		response,
	};
}
