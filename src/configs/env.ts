import { t, type Static } from "elysia";
import { Value } from "@sinclair/typebox/value";
import dotenv from "dotenv";

dotenv.config();

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
});

const filledEnv = Value.Default(envSchema, process.env);

const isValid = Value.Check(envSchema, filledEnv);

if (!isValid) {
    const errors = [...Value.Errors(envSchema, filledEnv)];
    console.error("❌ Invalid environment variables:", errors);
    throw new Error("Invalid environment variables");
}

type Env = Static<typeof envSchema>;
const parsedEnv = filledEnv as Env;

export const env = {
    ...parsedEnv,
    isDevelopment: parsedEnv.NODE_ENV === "development",
    isProduction: parsedEnv.NODE_ENV === "production",
    isTest: parsedEnv.NODE_ENV === "test",
};
