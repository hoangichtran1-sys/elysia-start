import { Elysia } from "elysia";
import { nanoid } from "nanoid";
import jwt from "@elysia/jwt";
import { addDays, isAfter, addMinutes } from "date-fns";
import { StatusCodes } from "http-status-codes";

import { authMacro } from "@/plugins/auth-macro";
import { jwtConfig } from "@/configs/jwt";
import { env } from "@/configs/env";
import { ApiResponse, ApiResponseSchema } from "@/utils/api-response";
import { ApiError } from "@/utils/api-error";
import { User } from "@/models/user.model";
import { RefreshToken } from "@/models/refresh-token.model";
import { authResData, cookieSchema, loginSchema, registerSchema } from "./auth.schema";
import { userSelectSchema } from "../user/user.schema";

export const authRouter = new Elysia({ prefix: "/auth", name: "auth-route" })
    .use(jwt(jwtConfig))
    .use(authMacro)
    .post(
        "/register",
        async ({ jwt, set, body, cookie: { refresh } }) => {
            const { name, email, password } = body;

            const existingUser = await User.findOne({ email });
            if (existingUser) {
                throw ApiError.conflict("User already exists");
            }

            const newUser = new User({ name, email, password, _id: nanoid() });
            await newUser.save();

            const accessToken = await jwt.sign({ userId: newUser._id });
            const refreshToken = Bun.randomUUIDv7("hex");

            await RefreshToken.create({
                _id: nanoid(),
                userId: newUser._id,
                token: refreshToken,
                expiresAt: addDays(new Date(), 7),
            });

            const apiResponse = ApiResponse.success(
                "Register successfully",
                { accessToken, exp: "15m" },
                StatusCodes.CREATED,
            );

            set.status = apiResponse.statusCode;

            refresh.set({
                value: refreshToken,
                httpOnly: true,
                maxAge: 7 * 86400,
                path: "/",
                secure: env.NODE_ENV === "production",
                domain: env.HOST,
            });

            return apiResponse.toJSON();
        },
        {
            body: registerSchema,
            cookie: cookieSchema,
            response: {
                200: ApiResponseSchema(authResData),
            },
        },
    )
    .post(
        "/login",
        async ({ jwt, set, body, cookie: { refresh } }) => {
            const { email, password } = body;

            const user = await User.findOne({ email });
            if (!user) {
                throw ApiError.notFound("User not found");
            }

            const isValidPassword = await Bun.password.verify(password, user.password);

            if (!isValidPassword) {
                throw ApiError.unauthorized("Invalid credentials");
            }

            const accessToken = await jwt.sign({ userId: user._id });
            const refreshToken = Bun.randomUUIDv7("hex");

            await RefreshToken.create({
                _id: nanoid(),
                userId: user._id,
                token: refreshToken,
                expiresAt: addDays(new Date(), 7),
            });

            const apiResponse = ApiResponse.success("Login successfully", {
                accessToken,
                exp: "15m",
            });

            set.status = apiResponse.statusCode;

            refresh.set({
                value: refreshToken,
                httpOnly: true,
                maxAge: 7 * 86400,
                path: "/",
                secure: env.NODE_ENV === "production",
                domain: env.HOST,
            });

            return apiResponse;
        },
        {
            body: loginSchema,
            cookie: cookieSchema,
            response: {
                200: ApiResponseSchema(authResData),
            },
        },
    )
    .post(
        "/logout",
        async ({ set, user, cookie: { refresh } }) => {
            const now = new Date();

            await RefreshToken.updateMany(
                { userId: user._id, revoked: false, expiresAt: { $gt: now } },
                { revoked: true, expiresAt: now },
            );

            refresh.remove();

            set.status = StatusCodes.NO_CONTENT;
        },
        {
            isAuth: true,
            cookie: cookieSchema,
        },
    )
    .get(
        "/current",
        async ({ set, user }) => {
            const apiResponse = ApiResponse.success("Get current user", user);

            set.status = apiResponse.statusCode;

            return apiResponse;
        },
        {
            isAuth: true,
            response: {
                200: ApiResponseSchema(userSelectSchema),
            },
        },
    )
    .get(
        "/refresh",
        async ({ set, cookie: { refresh }, jwt }) => {
            const now = new Date();
            const refreshToken = refresh.value;

            if (!refreshToken) {
                throw ApiError.unauthorized("Missing refresh token");
            }

            const refreshTokenData = await RefreshToken.findOne({ token: refreshToken });

            if (!refreshTokenData) {
                throw ApiError.notFound("Refresh token data not found");
            }

            if (refreshTokenData.revoked || isAfter(now, refreshTokenData.expiresAt)) {
                throw ApiError.unauthorized("Refresh token has expired or is revoke");
            }

            // Grace Period Time
            // if (isAfter(refreshTokenData.expiresAt, now) && !!refreshTokenData.replaced_by) {
            //     const graceRefreshToken = await RefreshToken.findById(refreshTokenData.replaced_by);
            //     if (graceRefreshToken) {
            //         await RefreshToken.updateOne(
            //             { _id: refreshTokenData._id },
            //             { revoked: true, expiresAt: now },
            //         );
            //         const newRefreshToken = graceRefreshToken.token;
            //         const newAccessToken = await jwt.sign({ userId: graceRefreshToken.userId });

            //         const apiResponse = ApiResponse.success("Refresh token success", {
            //             accessToken: newAccessToken,
            //             exp: "15m",
            //         });

            //         set.status = apiResponse.statusCode;

            //         refresh.set({
            //             value: newRefreshToken,
            //             httpOnly: true,
            //             maxAge: 7 * 86400,
            //             path: "/",
            //             secure: env.NODE_ENV === "production",
            //             domain: env.HOST,
            //         });

            //         return apiResponse;
            //     }
            // }

            const newRefreshToken = Bun.randomUUIDv7("hex");
            const newRefreshTokenData = await RefreshToken.create({
                _id: nanoid(),
                userId: refreshTokenData.userId,
                token: newRefreshToken,
                expiresAt: addDays(now, 7),
            });

            await RefreshToken.updateOne(
                { _id: refreshTokenData._id },
                {
                    expiresAt: addMinutes(now, 3),
                    replaced_by: newRefreshTokenData._id,
                    revoked: true,
                },
            );

            const newAccessToken = await jwt.sign({ userId: newRefreshTokenData.userId });

            const apiResponse = ApiResponse.success("Refresh token success", {
                accessToken: newAccessToken,
                exp: "15m",
            });

            set.status = apiResponse.statusCode;

            refresh.set({
                value: newRefreshToken,
                httpOnly: true,
                maxAge: 7 * 86400,
                path: "/",
                secure: env.NODE_ENV === "production",
                domain: env.HOST,
            });

            return apiResponse;
        },
        {
            cookie: cookieSchema,
            response: {
                200: ApiResponseSchema(authResData),
            },
        },
    );
