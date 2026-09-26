export declare const userSelectSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>;
export declare const userUpdateSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
