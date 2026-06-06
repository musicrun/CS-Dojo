export const STORAGE_VERSION = 1;

export function createInitialState(questions) {
  return { version: STORAGE_VERSION, currentId: questions[0]?.id ?? null, answers: {} };
}

export function parseStoredState(raw, questions) {
  const initial = createInitialState(questions);
  if (!raw) return initial;

  try {
    const parsed = JSON.parse(raw);
    const ids = new Set(questions.map(({ id }) => id));
    const answers = {};
    if (parsed?.answers && typeof parsed.answers === "object") {
      for (const [id, answer] of Object.entries(parsed.answers)) {
        if (ids.has(id) && typeof answer === "string") answers[id] = answer;
      }
    }
    return {
      version: STORAGE_VERSION,
      currentId: ids.has(parsed?.currentId) ? parsed.currentId : initial.currentId,
      answers,
    };
  } catch {
    return initial;
  }
}

export function getProgress(questions, answers, knownTotalMarks) {
  const completed = questions.filter(({ id }) => answers[id]?.trim());
  const totalMarks = knownTotalMarks ?? questions.reduce((sum, { marks }) => sum + marks, 0);
  return {
    answered: completed.length,
    total: questions.length,
    percent: questions.length ? Math.round((completed.length / questions.length) * 100) : 0,
    answeredMarks: completed.reduce((sum, { marks }) => sum + marks, 0),
    totalMarks,
  };
}

export function questionLabel(question) {
  if (!question.part) return `Question ${question.number}`;
  const nested = question.part.match(/^([a-z])\((i+)\)$/);
  const part = nested ? `(${nested[1]})(${nested[2]})` : `(${question.part})`;
  return `Question ${question.number}${part}`;
}

export function buildTextExport(questions, answers) {
  const lines = [
    "REHAM DOJO",
    "Computer Science Higher Level - Paper 1",
    "Combined Revision Mock - Theme A",
    "AI MARKING COPY",
    "=".repeat(64),
    "",
  ];

  let activeSection = null;
  for (const question of questions) {
    if (question.section !== activeSection) {
      activeSection = question.section;
      lines.push(`SECTION ${activeSection}`, "-".repeat(64), "");
    }
    lines.push(
      `${questionLabel(question).toUpperCase()} [${question.marks} ${question.marks === 1 ? "mark" : "marks"}]`,
      `Source: ${question.source}`,
    );
    if (question.scenario) lines.push("", `Context: ${question.scenario}`);
    lines.push("", question.prompt, "", "ANSWER:", answers[question.id]?.trim() || "[No answer provided]", "", "=".repeat(64), "");
  }
  return lines.join("\n");
}
