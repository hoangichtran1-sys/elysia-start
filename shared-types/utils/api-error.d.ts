import { StatusCodes } from "http-status-codes";
export declare class ApiError extends Error {
    readonly statusCode: StatusCodes;
    readonly isOperational: boolean;
    readonly errors?: unknown;
    constructor(statusCode: StatusCodes, message: string, errors?: unknown, isOperational?: boolean);
    static badRequest(message?: string, errors?: unknown): ApiError;
    static unauthorized(message?: string): ApiError;
    static forbidden(message?: string): ApiError;
    static notFound(message?: string): ApiError;
    static conflict(message?: string): ApiError;
    static server(message?: string): ApiError;
}
