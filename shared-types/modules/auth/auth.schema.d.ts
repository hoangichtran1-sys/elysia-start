export declare const loginSchema: import("@sinclair/typebox").TObject<{
    email: import("@sinclair/typebox").TString;
    password: import("@sinclair/typebox").TString;
}>;
export declare const registerSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
    password: import("@sinclair/typebox").TString;
}>;
export declare const authResData: import("@sinclair/typebox").TObject<{
    accessToken: import("@sinclair/typebox").TString;
    exp: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
}>;
export declare const cookieSchema: import("@sinclair/typebox").TObject<{
    refresh: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
