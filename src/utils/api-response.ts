import { StatusCodes } from "http-status-codes";
import { type TSchema, t } from "elysia";

export class ApiResponse<T = null> {
    readonly success: boolean;
    readonly message: string;
    readonly data: T;
    readonly statusCode: number;

    private constructor(success: boolean, message: string, data: T, statusCode: number) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.statusCode = statusCode;
    }

    toJSON() {
        return {
            success: this.success,
            message: this.message,
            data: this.data,
            statusCode: this.statusCode,
        };
    }

    static success<T>(message: string, data: T, statusCode: number = StatusCodes.OK) {
        return new ApiResponse(true, message, data, statusCode);
    }

    static failure<T>(message: string, data: T, statusCode: number = StatusCodes.BAD_REQUEST) {
        return new ApiResponse(false, message, data, statusCode);
    }
}

export const ApiResponseSchema = <T extends TSchema>(dataSchema: T) =>
    t.Object({
        success: t.Boolean(),
        message: t.String(),
        data: dataSchema,
        statusCode: t.Number(t.Enum(StatusCodes)),
    });
