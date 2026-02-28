import { after } from "next/server";
import { getBot } from "@/lib/bot";

export const maxDuration = 800;

const DURATION_MS = 600_000; // 10 minutes

/**
 * iMessage Gateway listener.
 *
 * Maintains a persistent socket.io connection to the remote iMessage server.
 * Invoked by a Vercel cron job every 9 minutes to keep the connection alive.
 */
export async function GET(request: Request): Promise<Response> {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return new Response("Unauthorized", { status: 401 });
    }
  }

  const bot = getBot();
  await bot.initialize();

  const imessage = bot.getAdapter("imessage");
  if (!imessage) {
    return new Response("iMessage adapter not configured", { status: 404 });
  }

  return imessage.startGatewayListener(
    { waitUntil: (task: Promise<unknown>) => after(() => task) },
    DURATION_MS
  );
}
