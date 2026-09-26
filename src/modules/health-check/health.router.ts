import { Elysia, t } from "elysia";
import { ApiResponse, ApiResponseSchema } from "@/utils/api-response";

export const healthRouter = new Elysia({ prefix: "/health", name: "health-route" }).get(
    "/",
    ({ set }) => {
        set.status = 200;
        return ApiResponse.success("Service is healthy", {
            status: "healthy",
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
        });
    },
    {
        response: ApiResponseSchema(t.Any()),
    },
);
