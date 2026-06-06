import z, { ZodObject, ZodType, type ZodRawShape } from "zod";
import {
    ValidationError,
    ValidationErrorSchema,
    ZodToApiError
} from "./Validation.js";

import { type PathSegment } from "./PathSegment.js";

export const Methods = {
    GET: "get",
    POST: "post",
    PATCH: "patch",
    DELETE: "delete"
} as const;
export type InputSchemaTypes<
    PT extends z.ZodType,
    Q extends z.ZodType,
    B extends z.ZodType
> = z.ZodObject<{
    path?: PT;
    query?: Q;
    body?: B;
}>;

export type outputSchemaType = z.ZodObject<{
    [key: number]: z.ZodOptional<z.ZodType>;
}>;

export type HandlerFn<T extends { input: z.ZodType; output: z.ZodType }> = (
    ctx: any,
    input: z.infer<T["input"]>
) => Promise<z.infer<T["output"]>>;

export class OutputBuilder<
    A extends { [key: number]: z.ZodOptional<z.ZodType> }
> {
    response: A = {} as A;

    internalServerError(): OutputBuilder<
        A & { 500: z.ZodOptional<z.ZodType> }
    > {
        this.response[500] = z
            .object({
                message: z.string().default("Internal server error")
            })
            .optional()
            .meta({ description: "Internal server error" });
        return this as unknown as OutputBuilder<
            A & { 500: z.ZodOptional<z.ZodType> }
        >;
    }
    ok<Z extends ZodType>(
        schema: Z,
        description: string
    ): OutputBuilder<A & { 200: z.ZodOptional<Z> }> {
        this.response[200] = schema
            .optional()
            .meta({ description: description });
        return this as unknown as OutputBuilder<A & { 200: z.ZodOptional<Z> }>;
    }
    created<Z extends ZodType>(
        schema: Z,
        description: string
    ): OutputBuilder<A & { 201: z.ZodOptional<Z> }> {
        this.response[201] = schema
            .optional()
            .meta({ description: description });
        return this as unknown as OutputBuilder<A & { 201: z.ZodOptional<Z> }>;
    }
    noContent(
        description?: string
    ): OutputBuilder<A & { 204: z.ZodOptional<z.ZodNull> }> {
        this.response[204] = z
            .null()
            .optional()
            .openapi({
                description: description || "No content",
                type: "string"
            });
        return this as unknown as OutputBuilder<
            A & { 204: z.ZodOptional<z.ZodNull> }
        >;
    }
    badRequest(): OutputBuilder<
        A & { 400: z.ZodOptional<typeof ValidationErrorSchema> }
    > {
        this.response[400] = ValidationErrorSchema.optional().meta({
            description: "Bad request"
        });
        return this as unknown as OutputBuilder<
            A & { 400: z.ZodOptional<typeof ValidationErrorSchema> }
        >;
    }
    notFound(): OutputBuilder<
        A & {
            404: z.ZodOptional<
                z.ZodObject<{ description: z.ZodDefault<z.ZodString> }>
            >;
        }
    > {
        this.response[404] = z
            .object({
                description: z.string().default("Not found")
            })
            .optional()
            .meta({ description: "Not found" });
        return this as unknown as OutputBuilder<
            A & {
                404: z.ZodOptional<
                    z.ZodObject<{ description: z.ZodDefault<z.ZodString> }>
                >;
            }
        >;
    }
    unauthorized(): OutputBuilder<A & { 401: z.ZodOptional<z.ZodString> }> {
        this.response[401] = z.string().length(0).optional().openapi({
            description: "Unauthorized - authentication required",
            type: "string"
        });

        return this as unknown as OutputBuilder<
            A & { 401: z.ZodOptional<z.ZodString> }
        >;
    }
    build(): z.ZodObject<A> {
        return z.object(this.response);
    }
    statusCode(
        statusCode: number,
        schema: ZodType,
        description: string
    ): OutputBuilder<A & { [key in typeof statusCode]: ZodType }> {
        this.response[statusCode] = schema
            .optional()
            .meta({ message: description });
        return this as unknown as OutputBuilder<
            A & { [key in typeof statusCode]: ZodType }
        >;
    }
}
export type SpecsType = {
    method: "get" | "post" | "patch" | "delete";
    path: PathSegment[];
    tags: string[];
};
export type IO = {
    specs: SpecsType;
    input: InputSchemaTypes<
        ZodObject<ZodRawShape>,
        ZodObject<ZodRawShape>,
        ZodObject<ZodRawShape>
    >;
    output: outputSchemaType;
};