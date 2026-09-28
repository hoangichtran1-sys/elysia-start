import { Schema, model } from "mongoose";

interface IRefreshToken {
    _id: string;
    userId: string;
    token: string;
    revoked: boolean;
    expiresAt: Date;
    replaced_by: string | null;
}

const refreshTokenSchema = new Schema<IRefreshToken>(
    {
        _id: { type: String, required: true },
        userId: { type: String, required: true },
        token: { type: String, required: true, unique: true },
        revoked: { type: Boolean, default: false },
        expiresAt: { type: Date, required: true },
        replaced_by: { type: String, default: null },
    },
    {
        timestamps: true,
    },
);

export const RefreshToken = model("RefreshToken", refreshTokenSchema, "refresh_tokens");
