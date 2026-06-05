import { z } from "zod";
import { defaultError } from "./defaultErr.js";
import { unknownError, validationError, type PomiError } from "./errors.js";
import { ResultErr, ResultOK, type Result } from "./result.js";
import { ValidationError, ZodToApiError, type ErrorFieldType } from "./Validation.js";
import type { SpecsType } from "./BuildHandler.js";
import type { Fetcher } from "./client.js";

export type InputSchemaTypes<
	PT extends z.ZodObject<{ [key: string]: z.ZodType }>,
	Q extends z.ZodType,
	B extends z.ZodType
> = z.ZodObject<{
	path?: PT;
	query?: Q;
	body?: B;
}>;

export type PathSegment =
	| { type: "literal"; value: string }
	| { type: "param"; name: string };

export type PathTemplate = PathSegment[];

export type InterfaceSpec<
	I extends z.ZodType,
	O extends OutputSchemaType
> = {
	specs: SpecsType 
	input: I;
	output: O;
}
export type CommandInstruction<
	SucessStatus extends keyof z.infer<O>,
	I extends z.ZodType,
	O extends OutputSchemaType
> = {
	interface: InterfaceSpec<I, O>;
	successStatus: SucessStatus;	
}
type Flatten<T> = {
  [K in keyof T]: T[K];
};
export type Command<Path, Query, Body> = Flatten<
   ([Path] extends [never] ? {} : { path: Path })
  & ([Query] extends [never] ? {} : { query: Query })
  & ([Body] extends [never] ? {} : { body: Body })>;


export type InputSchemaType = z.ZodObject<{
	path?: z.ZodType;
	query?: z.ZodType;
	body?: z.ZodType;
}>;

export type OutputSchemaType = z.ZodObject<{
	[key: number]: z.ZodOptional<z.ZodType>;
}>;


export type CommandExecutor<
	C ,
	Return,
> = (
	fetcher: Fetcher,
	command: C
) => Promise<Result<Return, PomiError>>;

type CommandExecutorOfSpec<
	SucessStatus extends keyof z.infer<O>,
	I extends InputSchemaType,
	O extends OutputSchemaType
> = CommandExecutor<
		z.infer<I>,
		NonNullable<z.infer<O>[SucessStatus]>
	>;

type BuildCommandExecutorType = <
	SucessStatus extends number,
	I extends InputSchemaType,
	O extends OutputSchemaType
>(
	instructions: CommandInstruction<SucessStatus, I, O>,
) => CommandExecutorOfSpec<SucessStatus, I, O>;

const buildQueryString = (query: Record<string, unknown> | undefined): string => {
	if (!query)
		return "";

	const params = new URLSearchParams();
	for (const [key, value] of Object.entries(query)) {
		if (value === undefined || value === null)
			continue;
		if (Array.isArray(value)) {
			for (const item of value)
				params.append(key, String(item));
			continue;
		}
		params.append(key, String(value));
	}

	const queryString = params.toString();
	return queryString.length ? `?${queryString}` : "";
};

const buildPathFromTemplate = (
	pathTemplate: PathTemplate,
	pathParams: Record<string, unknown> | undefined
): { path: string; missing: ErrorFieldType[] } => {
	const missing: ErrorFieldType[] = [];
	const path = pathTemplate
		.map((segment) => {
			if (segment.type === "literal")
				return segment.value;
			const value = pathParams?.[segment.name];
			if (value === undefined || value === null || value === "") {
				missing.push({
					code: "REQUIRED",
					path: ["path", segment.name],
					message: "Required"
				});
				return "";
			}
			return encodeURIComponent(String(value));
		})
		.join("");

	return { path, missing };
};

export const buildCommandExecutor: BuildCommandExecutorType = <
	SucessStatus extends number,
	I extends InputSchemaType,
	O extends OutputSchemaType
>(
	instructions : CommandInstruction<SucessStatus, I, O>,
) : CommandExecutorOfSpec<SucessStatus, I, O> => {
	return async (fetcher, command) => {
		const parsedInput = instructions.interface.input.safeParse(command);
		if (!parsedInput.success) {
			const apiError = new ValidationError(ZodToApiError(parsedInput.error));
			return ResultErr(validationError(apiError, { originalError: parsedInput.error }));
		}

		const { path: pathParams, query, body } = parsedInput.data as {
			path?: Record<string, unknown>;
			query?: Record<string, unknown>;
			body?: unknown;
		};

		const pathTemplate = instructions.interface.specs.path;
		const { path, missing } = buildPathFromTemplate(pathTemplate, pathParams);
		if (missing.length) {
			const apiError = new ValidationError(missing);
			return ResultErr(validationError(apiError));
		}

		const url = `${path}${buildQueryString(query)}`;
		const requestInit: RequestInit = {
			method: instructions.interface.specs.method.toUpperCase()
		};

		if (body !== undefined) {
			requestInit.body = JSON.stringify(body);
			requestInit.headers = {
				"content-type": "application/json"
			};
		}

		let response: Response | undefined;
		let responseBody: unknown;
		try {
			response = await fetcher(url, requestInit);
			if (response.status !== 204) {
				const contentType = response.headers.get("content-type") || "";
				if (contentType.includes("application/json")) {
					responseBody = await response.json().catch(() => undefined);
				} else {
					responseBody = await response.text().catch(() => undefined);
				}
			}
		} catch (error) {
			return ResultErr(unknownError("Network error", { originalError: error }));
		}

		if (!response) {
			return ResultErr(unknownError("No response received"));
		}

		const shape = (instructions.interface.output as z.ZodObject<any>).shape ??
			(instructions.interface.output as z.ZodObject<any>)._def.shape();
		const statusSchema = (shape as Record<string, z.ZodOptional<z.ZodType> | undefined>)[
			response.status
		];

		if (!statusSchema) {
			return defaultError(response, responseBody);
		}

		if (response.status === instructions.successStatus) {
			return ResultOK(
				responseBody as NonNullable<z.infer<O>[SucessStatus]>
			);
		}

		return defaultError(response, responseBody);
	};
};

export function buildinstructions<
	SucessStatus extends keyof z.infer<O>,
	I extends z.ZodType,
	O extends OutputSchemaType
>(
	inter: InterfaceSpec<I, O>,
	successStatus: SucessStatus
): CommandInstruction<SucessStatus, I, O> {
	return {
		interface: inter,
		successStatus
	};
}