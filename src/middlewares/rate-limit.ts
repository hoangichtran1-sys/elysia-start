import { rateLimit } from "elysia-rate-limit";
import { StatusCodes } from "http-status-codes";
import { ApiError } from "@/utils/api-error";

export const specificRateLimit = rateLimit({
    duration: 900000, // 15 phút
    max: 1,
    errorResponse: "Too many registration attempts, try again later.",
});

export const globalRateLimit = rateLimit({
    duration: 900000, // 15 phút
    max: 1000,
    errorResponse: new ApiError(
        StatusCodes.TOO_MANY_REQUESTS,
        "Too many requests, please try again later.",
    ),
});
