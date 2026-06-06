import test from "node:test";
import assert from "node:assert/strict";
import { questions } from "../questions.js";

test("paper data contains every answerable part and mark", () => {
  assert.equal(questions.length, 58);
  assert.equal(questions.reduce((sum, question) => sum + question.marks, 0), 145);
  assert.equal(new Set(questions.map(({ id }) => id)).size, questions.length);
  assert.deepEqual(new Set(questions.map(({ section }) => section)), new Set(["A", "B"]));
});

test("every question has the fields needed by the interface and export", () => {
  for (const question of questions) {
    assert.match(question.id, /^q\d+(?:-[a-z]\d*)?$/);
    assert.ok(Number.isInteger(question.number));
    assert.ok(question.source.length > 0);
    assert.ok(question.prompt.length > 0);
    assert.ok(question.marks > 0);
  }
});
