import { Elysia } from "elysia";
import { bearer } from "@elysia/bearer";
import jwt from "@elysia/jwt";

import { jwtConfig } from "@/configs/jwt";
import { ApiError } from "@/utils/api-error";
import { User } from "@/models/user.model";
import { safeParse } from "@/utils/safe-parse";
import { userSelectSchema } from "@/modules/user/user.schema";

export const authMacro = new Elysia({ name: "auth-macro" })
    .use(bearer())
    .use(jwt(jwtConfig))
    .macro({
        isAuth: {
            resolve: async ({ bearer, jwt }) => {
                // const authHeader = headers["authorization"];
                // const accessToken = authHeader && authHeader.split(" ")[1];
                const accessToken = bearer;
                if (!accessToken) {
                    throw ApiError.unauthorized("Missing access token");
                }

                const payload = await jwt.verify(accessToken);

                if (!payload) {
                    throw ApiError.unauthorized("Access token has expired or is invalid");
                }

                const user = await User.findById(payload.userId);

                return {
                    user: safeParse(userSelectSchema, user),
                };
            },
        },
    });
