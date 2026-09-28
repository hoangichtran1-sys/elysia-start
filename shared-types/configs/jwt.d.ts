import type { JWTOption } from "@elysiajs/jwt";
declare const payloadSchema: import("@sinclair/typebox").TObject<{
    userId: import("@sinclair/typebox").TString;
}>;
declare const jwtConfig: JWTOption<"jwt", typeof payloadSchema>;
export { jwtConfig };
