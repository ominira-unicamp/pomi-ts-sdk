import z from "zod";

type ValidationErrorField = {
    path: PropertyKey[];
    message: string;
};
const ErrorCodeSchema = z
    .enum([
        "UNIQUE_VIOLATION",
        "INVALID_TYPE",
        "INVALID_VALUE",
        "REQUIRED",
        "REFERENCE_NOT_FOUND",
        "ALREADY_EXISTS",
        "REFERENCE_EXISTS"
    ]);

const ErrorFieldSchema = z
    .object({
        code: ErrorCodeSchema,
        path: z.array(z.string()),
        message: z.string()
    });

const ApiErrorSchema = z
    .object({
        message: z.string(), // Mensagem resumida geral
        errors: z.array(ErrorFieldSchema)
    });

export type ErrorFieldType = z.infer<typeof ErrorFieldSchema>;
type ValidationErrorType = z.infer<typeof ApiErrorSchema>;
type ErrorCode = z.infer<typeof ErrorCodeSchema>;

type PathPrefix = ["query" | "path" | "body" | "header", ...string[]] | [];

// Mapeia código do Zod para nosso ErrorCode
function zodCodeToErrorCode(
    issue: z.core.$ZodIssue
): z.infer<typeof ErrorCodeSchema> {
    switch (issue.code) {
        case "invalid_type":
            return "INVALID_TYPE";
        case "custom":
            return issue.params?.code || "INVALID_VALUE";
        default:
            return "INVALID_VALUE";
    }
}

function ZodToApiError(
    zodError: z.ZodError | undefined,
    prefix: PathPrefix = []
): z.infer<typeof ErrorFieldSchema>[] {
    if (!zodError) {
        return [];
    }
    return zodError.issues.map((issue) => ({
        code: zodCodeToErrorCode(issue),
        path: [...prefix, ...issue.path.map(String)],
        message: issue.message
    }));
}

const ValidationErrorSchema = ApiErrorSchema;

class ApiError implements ValidationErrorType {
    constructor(
        public errors: ErrorFieldType[] = [],
        public message: string = "Validation error"
    ) {}
    addError(error: ErrorFieldType) {
        this.errors.push(error);
    }
    addErrors(newErrors: ErrorFieldType[]) {
        this.errors.push(...newErrors);
    }
}

export {
    ApiError as ValidationError,
    ValidationErrorSchema,
    ZodToApiError as ZodToApiError
};
export type { ErrorCode, ValidationErrorField, ValidationErrorType };
