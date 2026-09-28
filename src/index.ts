import fs from "fs";
import { Elysia } from "elysia";
import { cors } from "@elysia/cors";
import { serverTiming } from "@elysia/server-timing";
import { openapi } from "@elysia/openapi";

import { app } from "@/app";
import { connectDB } from "@/configs/db";
import { env } from "@/configs/env";
import { logDir, logger } from "@/configs/logger";
import { globalRateLimit } from "@/plugins/rate-limit";
import { cleanRefreshToken } from "./plugins/cleanup-refresh-token";

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

new Elysia()
    .use(serverTiming())
    .use(openapi())
    .use(
        cors({
            origin: env.CORS_ORIGIN,
            credentials: true,
        }),
    )
    .use(globalRateLimit)
    .use(cleanRefreshToken)
    .use(app)
    .listen(env.PORT, async (server) => {
        await connectDB();

        console.timeEnd("⌛ Startup Time");
        console.log(`🌱 NODE_ENV: ${env.NODE_ENV || "development"}`);
        console.log(`🍙 Bun Version: ${Bun.version}`);
        console.log(`🦊 Elysia.js Version: ${require("elysia/package.json").version}`);
        console.log(`🚀 Server is running at ${server.url}`);
        console.log("--------------------------------------------------");
        logger.info(`Server (${env.NODE_ENV}) running on port http://${env.HOST}:${env.PORT}`);
    });
