import { describe, expect, it } from "vitest";
import { isPollElement, Poll } from "./polls";

describe("Poll", () => {
  it("creates a PollElement with all fields", () => {
    const poll = Poll({
      id: "fav-color",
      question: "What's your favorite color?",
      options: ["Red", "Blue", "Green"],
    });

    expect(poll).toEqual({
      type: "poll",
      id: "fav-color",
      question: "What's your favorite color?",
      options: ["Red", "Blue", "Green"],
    });
  });

  it("creates a PollElement with two options", () => {
    const poll = Poll({
      id: "yes-no",
      question: "Do you agree?",
      options: ["Yes", "No"],
    });

    expect(poll.type).toBe("poll");
    expect(poll.id).toBe("yes-no");
    expect(poll.question).toBe("Do you agree?");
    expect(poll.options).toEqual(["Yes", "No"]);
  });
});

describe("isPollElement", () => {
  it("returns true for PollElement", () => {
    const poll = Poll({
      id: "test",
      question: "Q?",
      options: ["A", "B"],
    });
    expect(isPollElement(poll)).toBe(true);
  });

  it("returns false for non-poll objects", () => {
    expect(isPollElement("hello")).toBe(false);
    expect(isPollElement(null)).toBe(false);
    expect(isPollElement(undefined)).toBe(false);
    expect(isPollElement(42)).toBe(false);
    expect(isPollElement({ type: "card" })).toBe(false);
    expect(isPollElement({ type: "text" })).toBe(false);
  });
});
