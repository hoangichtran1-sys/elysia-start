import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser {
    _id: string;
    name: string;
    email: string;
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
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

export const User = model("User", userSchema);
