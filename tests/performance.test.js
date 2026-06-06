import test from "node:test";
import assert from "node:assert/strict";
import { changedAnswerState, shouldRenderRail } from "../performance.js";

test("typing does not require rebuilding the question rail", () => {
  assert.equal(
    shouldRenderRail(
      { currentId: "q1", filter: "all", answer: "" },
      { currentId: "q1", filter: "all", answer: "a" },
    ),
    false,
  );
});

test("navigation or filtering requires rebuilding the question rail", () => {
  assert.equal(shouldRenderRail({ currentId: "q1", filter: "all" }, { currentId: "q2", filter: "all" }), true);
  assert.equal(shouldRenderRail({ currentId: "q1", filter: "all" }, { currentId: "q1", filter: "A" }), true);
});

test("rail completion state changes only when an answer crosses empty boundary", () => {
  assert.equal(changedAnswerState("", "a"), true);
  assert.equal(changedAnswerState("a", "ab"), false);
  assert.equal(changedAnswerState("a", "  "), true);
});
