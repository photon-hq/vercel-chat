/**
 * Poll elements for cross-platform voting.
 *
 * Provides a builder API for creating polls that automatically
 * convert to platform-specific formats:
 * - iMessage (remote): Native polls via advanced-imessage-kit
 *
 * Supports both function-call and JSX syntax:
 *
 * @example Function API
 * ```ts
 * import { Poll } from "chat";
 *
 * await thread.post(
 *   Poll({ id: "fav-color", question: "Favorite color?", options: ["Red", "Blue", "Green"] })
 * );
 * ```
 *
 * @example JSX API (requires jsxImportSource: "chat" in tsconfig)
 * ```tsx
 * /** @jsxImportSource chat *\/
 * import { Poll } from "chat";
 *
 * await thread.post(
 *   <Poll id="fav-color" question="Favorite color?" options={["Red", "Blue", "Green"]} />
 * );
 * ```
 */

// ============================================================================
// Poll Element Types
// ============================================================================

export interface PollElement {
  type: "poll";
  /** Unique identifier, used as actionId for vote callbacks */
  id: string;
  /** The poll question */
  question: string;
  /** List of options to vote on */
  options: string[];
}

// ============================================================================
// Type Guards
// ============================================================================

export function isPollElement(value: unknown): value is PollElement {
  return (
    typeof value === "object" &&
    value !== null &&
    "type" in value &&
    (value as PollElement).type === "poll"
  );
}

// ============================================================================
// Builder Function
// ============================================================================

export interface PollOptions {
  /** Unique identifier, used as actionId for vote callbacks */
  id: string;
  /** The poll question */
  question: string;
  /** List of options to vote on */
  options: string[];
}

export function Poll(options: PollOptions): PollElement {
  return {
    type: "poll",
    id: options.id,
    question: options.question,
    options: options.options,
  };
}
