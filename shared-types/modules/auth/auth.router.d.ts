import { Elysia } from "elysia";
export declare const authRouter: Elysia<"/auth", {
    decorator: {
        jwt: {
            sign(signValue: {
                [x: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | {
                    [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined;
                nbf?: string | number | undefined;
                exp?: string | number | undefined;
                iat?: boolean | undefined;
                iss?: string | undefined;
                sub?: string | undefined;
                aud?: string | string[] | undefined;
                jti?: string | undefined;
            }): Promise<string>;
            verify(jwt?: string, options?: import("jose").JWTVerifyOptions): Promise<false | ({
                [x: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | {
                    [key: string]: string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined)[] | {
                    [key: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | /*elided*/ any | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined)[] | /*elided*/ any | null | undefined;
                } | null | undefined;
            } & Omit<import("@elysia/jwt").JWTPayloadSpec, never>)>;
        };
    };
    store: {};
    derive: {};
    resolve: {};
}, {
    typebox: {};
    error: {};
} & {
    typebox: {};
    error: {};
}, {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
} & {
    schema: {};
    standaloneSchema: {};
    macro: {};
    macroFn: {};
    parser: {};
    response: {};
}, {
    auth: {};
} & {
    auth: {
        login: {
            ":name": {
                get: {
                    body: unknown;
                    params: {
                        name: string;
                    } & {};
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            success: boolean;
                            message: string;
                            data: {
                                exp: string | number;
                                token: string;
                            };
                            statusCode: import("http-status-codes").StatusCodes;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
    standaloneSchema: {};
    response: {};
}>;
