import { describe, expect, it } from "vitest";
import { IMessageAdapter } from "./index";

describe("IMessageAdapter", () => {
  it("should have the correct name", () => {
    const adapter = new IMessageAdapter();
    expect(adapter.name).toBe("imessage");
  });

  it("should use default userName", () => {
    const adapter = new IMessageAdapter();
    expect(adapter.userName).toBe("iMessage Bot");
  });

  it("should accept custom userName", () => {
    const adapter = new IMessageAdapter({ userName: "Custom Bot" });
    expect(adapter.userName).toBe("Custom Bot");
  });
});
