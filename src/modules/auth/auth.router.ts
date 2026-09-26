import { Elysia, t } from "elysia";
import jwt from "@elysia/jwt";

import { jwtConfig } from "@/configs/jwt";
import { ApiResponse, ApiResponseSchema } from "@/utils/api-response";
import { authResData } from "./auth.schema";
import { ApiError } from "@/utils/api-error";

export const authRouter = new Elysia({ prefix: "/auth", name: "auth-route" })
    .use(jwt(jwtConfig))
    .get(
        "/login/:name",
        async ({ jwt, params: { name }, set }) => {
            if (name === "hoang") {
                throw ApiError.badRequest("Bad request");
            }
            const data = { name };
            const value = await jwt.sign(data);

            set.status = 200;

            return ApiResponse.success("Login success", {
                token: value,
                exp: "1d",
            });
        },
        {
            response: {
                200: ApiResponseSchema(authResData),
                400: ApiResponseSchema(t.Null()),
            },
        },
    );
