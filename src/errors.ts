type ErrorBasic = {
	message: string;
	originalError?: any;
	response?: Response;
}
type InvalidParamError = {
	path: string[];
	message: string;
}
type PomiError = ({
	code: "INVALID_PARAM"
	parameters?: InvalidParamError[];
} | {
	code: "SERVER_ERROR"
} | {
	code: "UNKNOWN_ERROR"
}) & {
	message: string;
	originalError?: any;
	response?: Response;
}
type ErrorOptions = {
	originalError?: any;
	response?: Response;
}
function invalidParamError(message: string, parameters: InvalidParamError[], { originalError, response }: ErrorOptions = {}): PomiError {
	return { code: "INVALID_PARAM", parameters, message, originalError, response };
}
function serverError(message: string, { originalError, response }: ErrorOptions = {}): PomiError {
	return { code: "SERVER_ERROR", message, originalError, response };
}
function unknownError(message: string, { originalError, response }: ErrorOptions = {}): PomiError {
	return { code: "UNKNOWN_ERROR", message, originalError, response };
}


export { invalidParamError, serverError, unknownError }
export type { PomiError }