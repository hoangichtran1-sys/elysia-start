import { Elysia } from "elysia";
import { StatusCodes } from "http-status-codes";

import { ApiError } from "./utils/api-error";
import { ApiResponse } from "@/utils/api-response";
import { healthRouter } from "@/modules/health-check/health.router";
import { authRouter } from "@/modules/auth/auth.router";

export const app = new Elysia({ prefix: "/api/v1", name: "base" })
    .error({
        API_ERROR: ApiError,
    })
    .onError(({ code, error, status }) => {
        switch (code) {
            case "API_ERROR": {
                const apiResponse = ApiResponse.failure(error.message, null, error.statusCode);
                return status(apiResponse.statusCode, { ...apiResponse });
            }
            case "VALIDATION": {
                const apiResponse = ApiResponse.failure(
                    error.message,
                    null,
                    StatusCodes.UNPROCESSABLE_ENTITY,
                );
                return status(apiResponse.statusCode, { ...apiResponse });
            }
            case "NOT_FOUND": {
                const apiResponse = ApiResponse.failure(error.message, null, StatusCodes.NOT_FOUND);
                return status(apiResponse.statusCode, { ...apiResponse });
            }
            default: {
                const apiResponse = ApiResponse.failure(
                    "Something went wrong",
                    null,
                    StatusCodes.INTERNAL_SERVER_ERROR,
                );
                return status(apiResponse.statusCode, { ...apiResponse });
            }
        }
    })
    .use(healthRouter)
    .use(authRouter);

export type App = typeof app;
