import { t } from "elysia";

export const userSelectSchema = t.Object({
    _id: t.String({ minLength: 1 }),
    name: t.String({ minLength: 1, maxLength: 255 }),
    email: t.String({ format: "email" }),
    emailVerifiedAt: t.Optional(t.Date()),
});

export const userUpdateSchema = t.Object({
    name: t.Optional(t.String({ minLength: 1, maxLength: 255 })),
    password: t.Optional(t.String({ minLength: 6 })),
});
