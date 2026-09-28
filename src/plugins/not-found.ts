import { StatusCodes } from "http-status-codes";
import { Elysia } from "elysia";
import { ApiResponse } from "@/utils/api-response";

export const notFound = new Elysia({ name: "not-found" }).get("*", ({ set, request }) => {
    const apiResponse = ApiResponse.failure(
        `Route ${request.method} ${request.url} not found`,
        null,
        StatusCodes.NOT_FOUND,
    );

    set.status = apiResponse.statusCode;

    return apiResponse.toJSON();
});
