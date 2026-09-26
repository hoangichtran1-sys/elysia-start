import type { JWTOption } from "@elysiajs/jwt";
import { env } from "@/configs/env";

const jwtConfig: JWTOption = {
    name: "jwt",
    secret: env.JWT_SECRET,
    exp: env.JWT_EXPIRED,
};

export { jwtConfig };
