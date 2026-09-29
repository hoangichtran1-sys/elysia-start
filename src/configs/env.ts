import { t } from "elysia";
import { safeParse } from "@/utils/safe-parse";

const envSchema = t.Object({
    NODE_ENV: t.Union([t.Literal("production"), t.Literal("development"), t.Literal("test")], {
        default: "development",
    }),

    HOST: t.String({ minLength: 1, default: "localhost" }),
    PORT: t.Integer({ minimum: 1, default: 5000 }),

    APP_URL: t.String({
        minLength: 1,
        format: "uri",
        default: "http://localhost:5000",
    }),

    CORS_ORIGIN: t.String({
        minLength: 1,
        format: "uri",
        default: "http://localhost:3000",
    }),

    DATABASE_URL: t.String({ minLength: 1, format: "uri" }),

    JWT_SECRET: t.String({ minLength: 10 }),
    JWT_EXPIRED: t.Union([t.String(), t.Number()]),

    COOKIE_SECRET: t.String({ minLength: 6 }),
});

const parsedEnv = safeParse(envSchema, Bun.env);

export const env = {
    ...parsedEnv,
    isDevelopment: parsedEnv.NODE_ENV === "development",
    isProduction: parsedEnv.NODE_ENV === "production",
    isTest: parsedEnv.NODE_ENV === "test",
};
