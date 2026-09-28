import mongoose from "mongoose";
import { env } from "./env";

export const connectDB = async () => {
    try {
        await mongoose.connect(env.DATABASE_URL, {
            dbName: "elysia_auth",
        });
        console.log("MongoDB connected!");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};
