import { rateLimit } from "elysia-rate-limit";
import { StatusCodes } from "http-status-codes";
import { ApiError } from "@/utils/api-error";

export const registerRateLimit = rateLimit({
    scoping: "scoped",
    duration: 900000, // 15 phút
    max: 1,
    errorResponse: new ApiError(
        StatusCodes.TOO_MANY_REQUESTS,
        "Too many registration attempts, try again later.",
    ),
});

export const loginRateLimit = rateLimit({
    scoping: "scoped",
    duration: 900000, // 15 phút
    max: 5,
    errorResponse: new ApiError(
        StatusCodes.TOO_MANY_REQUESTS,
        "Too many login attempts, try again later.",
    ),
});

export const globalRateLimit = rateLimit({
    duration: 900000, // 15 phút
    max: 1000,
    errorResponse: new ApiError(
        StatusCodes.TOO_MANY_REQUESTS,
        "Too many requests, please try again later.",
    ),
});
