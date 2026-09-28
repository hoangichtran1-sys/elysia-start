import { type TSchema, type Static } from "elysia";
import { Value } from "@sinclair/typebox/value";
import { ApiError } from "./api-error";

export function safeParse<T extends TSchema>(schema: T, data: unknown) {
    const validatorData = Value.Default(schema, data);
    const isValid = Value.Check(schema, validatorData);

    if (!isValid) {
        const errors = [...Value.Errors(schema, validatorData)];
        console.error("❌ Invalid environment variables:", errors);
        throw ApiError.badRequest("Invalid data!", errors);
    }

    const parseData = validatorData as Static<typeof schema>;

    return parseData;
}
