import { Elysia } from "elysia";
import { cron, Patterns } from "@elysia/cron";
import { subDays } from "date-fns";

import { logger } from "@/configs/logger";
import { RefreshToken } from "@/models/refresh-token.model";

export const cleanRefreshToken = new Elysia().use(
    cron({
        name: "heartbeat",
        pattern: Patterns.EVERY_12_HOURS,
        async run() {
            try {
                console.log("🧹 Starting refresh token db cleanup...");

                const oneDayAgo = subDays(new Date(), 1);

                const results = await RefreshToken.deleteMany({
                    $or: [{ revoked: true }, { expiresAt: { $lt: oneDayAgo } }],
                });

                console.log(`✅ Cleanup finished. Removed ${results.deletedCount} records.`);
                logger.info(`✅ Cleanup finished. Removed ${results.deletedCount} records.`);
            } catch (error) {
                console.error("❌ Cleanup job failed:", error);
                logger.error(error, "❌ Cleanup job failed");
            }
        },
    }),
);
