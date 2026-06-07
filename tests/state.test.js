import test from "node:test";
import assert from "node:assert/strict";
import {
  buildTextExport,
  createInitialState,
  getProgress,
  parseStoredState,
  questionLabel,
} from "../state.js";

const sampleQuestions = [
  { id: "q1", section: "A", number: 1, source: "Mock", prompt: "Define a core.", marks: 1 },
  { id: "q2-a", section: "A", number: 2, part: "a", source: "Mock", scenario: "A CPU runs code.", prompt: "State its role.", marks: 2 },
];

test("initial state selects the first question", () => {
  assert.deepEqual(createInitialState(sampleQuestions), {
    version: 1,
    currentId: "q1",
    answers: {},
  });
});

test("nested sub-question labels use conventional parentheses", () => {
  assert.equal(questionLabel({ number: 23, part: "b(ii)" }), "Question 23(b)(ii)");
});

test("stored state is recovered safely", () => {
  assert.deepEqual(parseStoredState("{nope", sampleQuestions), createInitialState(sampleQuestions));
  assert.deepEqual(
    parseStoredState('{"version":1,"currentId":"missing","answers":{"q1":"  answer  ","bad":"x"}}', sampleQuestions),
    { version: 1, currentId: "q1", answers: { q1: "  answer  " } },
  );
});

test("progress counts only non-empty answers", () => {
  assert.deepEqual(getProgress(sampleQuestions, { q1: "yes", "q2-a": "   " }), {
    answered: 1,
    total: 2,
    percent: 50,
    answeredMarks: 1,
    totalMarks: 3,
  });
});

test("export contains full questions, scenarios, marks, and missing answer labels", () => {
  const text = buildTextExport(sampleQuestions, { q1: "A processing unit." });
  assert.match(text, /Computer Science Higher Level - Paper 2/);
  assert.match(text, /QUESTION 1 \[1 mark\]/);
  assert.match(text, /Define a core\./);
  assert.match(text, /ANSWER:\nA processing unit\./);
  assert.match(text, /QUESTION 2\(A\) \[2 marks\]/);
  assert.match(text, /A CPU runs code\./);
  assert.match(text, /\[No answer provided\]/);
});
