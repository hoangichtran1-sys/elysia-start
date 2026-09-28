import { Schema, model } from "mongoose";

interface IUser {
    _id: string;
    name: string;
    email: string;
    emailVerifiedAt?: Date;
    password: string;
}

const userSchema = new Schema<IUser>(
    {
        _id: {
            type: String,
            required: true,
        },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        emailVerifiedAt: { type: Date },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await Bun.password.hash(this.password);
    next();
});

export const User = model("User", userSchema);
