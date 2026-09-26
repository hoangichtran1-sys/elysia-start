import { t } from "elysia";

export const loginSchema = t.Object({
    email: t.String({ format: "email" }),
    password: t.String({ minLength: 6 }),
});

export const registerSchema = t.Object({
    name: t.String({ minLength: 1, maxLength: 255 }),
    email: t.String({ format: "email" }),
    password: t.String({ minLength: 6 }),
});

export const authResData = t.Object({
    token: t.String(),
    exp: t.Union([t.String(), t.Number()]),
});
