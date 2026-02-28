import { createiMessageAdapter } from "@chat-adapter/imessage";
import { createRedisState } from "@chat-adapter/state-redis";
import { gateway, generateText } from "ai";
import { Chat } from "chat";

function createBot() {
  const state = createRedisState({
    url: process.env.REDIS_URL,
    keyPrefix: "imessage-chat",
  });

  const adapters = {
    imessage: createiMessageAdapter({ local: false }),
  };

  const bot = new Chat({
    userName: process.env.BOT_USERNAME || "imessage-bot",
    adapters,
    state,
    logger: "debug",
  });

  // Reply to every incoming DM with a ChatGPT response
  bot.onNewMention(async (thread, message) => {
    await thread.startTyping();

    // Fetch recent history for context
    let history: { role: "user" | "assistant"; content: string }[] = [];
    try {
      const result = await thread.adapter.fetchMessages(thread.id, {
        limit: 20,
      });
      history = result.messages
        .filter((m) => m.text.trim())
        .map((m) => ({
          role: m.author.isMe ? ("assistant" as const) : ("user" as const),
          content: m.text,
        }));
    } catch {
      history = [{ role: "user", content: message.text }];
    }

    const { text } = await generateText({
      model: gateway("openai/gpt-5.2-chat-latest"),
      system:
        "You are a helpful assistant responding via iMessage. Keep responses concise.",
      messages: history,
    });

    await thread.post(text);
  });

  return bot;
}

let _bot: ReturnType<typeof createBot> | undefined;

export function getBot() {
  if (!_bot) {
    _bot = createBot();
  }
  return _bot;
}
