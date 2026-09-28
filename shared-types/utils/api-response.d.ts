import { type TSchema } from "elysia";
export declare class ApiResponse<T = null> {
    readonly success: boolean;
    readonly message: string;
    readonly data: T;
    readonly statusCode: number;
    private constructor();
    toJSON(): {
        success: boolean;
        message: string;
        data: T;
        statusCode: number;
    };
    static success<T>(message: string, data: T, statusCode?: number): ApiResponse<T>;
    static failure<T>(message: string, data: T, statusCode?: number): ApiResponse<T>;
}
export declare const ApiResponseSchema: <T extends TSchema>(dataSchema: T) => import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TBoolean;
    message: import("@sinclair/typebox").TString;
    data: T;
    statusCode: import("@sinclair/typebox").TNumber;
}>;
