import { t } from "elysia";
import type { JWTOption } from "@elysiajs/jwt";
import { env } from "@/configs/env";

const payloadSchema = t.Object({ userId: t.String() });

const jwtConfig: JWTOption<"jwt", typeof payloadSchema> = {
    name: "jwt",
    schema: payloadSchema,
    secret: env.JWT_SECRET,
    exp: env.JWT_EXPIRED,
};

export { jwtConfig };
