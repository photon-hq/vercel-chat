import type {
  Adapter,
  AdapterPostableMessage,
  ChatInstance,
  EmojiValue,
  FetchOptions,
  FetchResult,
  FormattedContent,
  RawMessage,
  ThreadInfo,
  WebhookOptions,
} from "chat";
import { type Message, NotImplementedError } from "chat";

export interface IMessageAdapterConfig {
  userName?: string;
}

export class IMessageAdapter implements Adapter {
  readonly name = "imessage";
  readonly userName: string;

  constructor(config: IMessageAdapterConfig = {}) {
    this.userName = config.userName ?? "iMessage Bot";
  }

  async initialize(_chat: ChatInstance): Promise<void> {
    throw new NotImplementedError(
      "initialize is not implemented",
      "initialize"
    );
  }

  async handleWebhook(
    _request: Request,
    _options?: WebhookOptions
  ): Promise<Response> {
    throw new NotImplementedError(
      "handleWebhook is not implemented",
      "handleWebhook"
    );
  }

  async postMessage(
    _threadId: string,
    _message: AdapterPostableMessage
  ): Promise<RawMessage> {
    throw new NotImplementedError(
      "postMessage is not implemented",
      "postMessage"
    );
  }

  async editMessage(
    _threadId: string,
    _messageId: string,
    _message: AdapterPostableMessage
  ): Promise<RawMessage> {
    throw new NotImplementedError(
      "editMessage is not implemented",
      "editMessage"
    );
  }

  async deleteMessage(_threadId: string, _messageId: string): Promise<void> {
    throw new NotImplementedError(
      "deleteMessage is not implemented",
      "deleteMessage"
    );
  }

  parseMessage(_raw: unknown): Message {
    throw new NotImplementedError(
      "parseMessage is not implemented",
      "parseMessage"
    );
  }

  async fetchMessages(
    _threadId: string,
    _options?: FetchOptions
  ): Promise<FetchResult> {
    throw new NotImplementedError(
      "fetchMessages is not implemented",
      "fetchMessages"
    );
  }

  async fetchThread(_threadId: string): Promise<ThreadInfo> {
    throw new NotImplementedError(
      "fetchThread is not implemented",
      "fetchThread"
    );
  }

  async addReaction(
    _threadId: string,
    _messageId: string,
    _emoji: EmojiValue | string
  ): Promise<void> {
    throw new NotImplementedError(
      "addReaction is not implemented",
      "addReaction"
    );
  }

  async removeReaction(
    _threadId: string,
    _messageId: string,
    _emoji: EmojiValue | string
  ): Promise<void> {
    throw new NotImplementedError(
      "removeReaction is not implemented",
      "removeReaction"
    );
  }

  async startTyping(_threadId: string, _status?: string): Promise<void> {
    throw new NotImplementedError(
      "startTyping is not implemented",
      "startTyping"
    );
  }

  renderFormatted(_content: FormattedContent): string {
    throw new NotImplementedError(
      "renderFormatted is not implemented",
      "renderFormatted"
    );
  }

  encodeThreadId(_platformData: unknown): string {
    throw new NotImplementedError(
      "encodeThreadId is not implemented",
      "encodeThreadId"
    );
  }

  decodeThreadId(_threadId: string): unknown {
    throw new NotImplementedError(
      "decodeThreadId is not implemented",
      "decodeThreadId"
    );
  }
}
