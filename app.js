import { questions } from "./questions.js";
import {
  buildTextExport,
  createInitialState,
  getProgress,
  parseStoredState,
  questionLabel,
} from "./state.js";
import { getThemeView, normalizeTheme, toggleTheme } from "./theme.js";
import { changedAnswerState } from "./performance.js";

const STORAGE_KEY = "cs-dojo-paper-2-v1";
const THEME_KEY = "cs-dojo-theme-v1";
const elements = Object.fromEntries(
  [
    "answer", "cancel-reset", "confirm-reset", "export-button", "marks-label",
    "next-button", "position-label", "previous-button", "progress-bar",
    "progress-count", "progress-marks", "prompt", "question-label",
    "question-list", "rail-toggle", "reset-button", "reset-dialog",
    "save-state", "scenario", "section-label", "source-label",
    "site-name", "site-subtitle", "theme-toggle", "nav-label",
  ].map((id) => [id, document.getElementById(id)]),
);

let state = parseStoredState(localStorage.getItem(STORAGE_KEY), questions);
let theme = normalizeTheme(localStorage.getItem(THEME_KEY));
let activeFilter = "all";
let saveTimer;
let progressFrame;
const questionIndexById = new Map(questions.map((question, index) => [question.id, index]));
const totalMarks = questions.reduce((sum, question) => sum + question.marks, 0);

function currentIndex() {
  return questionIndexById.get(state.currentId) ?? 0;
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  elements["save-state"].textContent = getThemeView(theme).saveLabel;
}

function applyTheme() {
  const view = getThemeView(theme);
  document.body.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme === "reham" ? "dark" : "light";
  document.querySelector('meta[name="theme-color"]').content = theme === "reham" ? "#100604" : "#f4f7fb";
  elements["site-name"].textContent = view.siteName;
  elements["site-subtitle"].textContent = view.subtitle;
  elements["theme-toggle"].textContent = view.toggleLabel;
  elements["reset-button"].textContent = view.resetLabel;
  elements["export-button"].textContent = view.exportLabel;
  elements["nav-label"].textContent = view.navLabel;
  elements["save-state"].textContent = view.saveLabel;
  document.title = view.title;
}

function renderProgress() {
  const progress = getProgress(questions, state.answers, totalMarks);
  elements["progress-count"].textContent = `${progress.answered} / ${progress.total} answered`;
  elements["progress-marks"].textContent = `${progress.answeredMarks} / ${progress.totalMarks} marks attempted`;
  elements["progress-bar"].style.width = `${progress.percent}%`;
}

function scheduleProgressRender() {
  if (progressFrame) return;
  progressFrame = requestAnimationFrame(() => {
    progressFrame = null;
    renderProgress();
  });
}

function updateCurrentRailState(answered) {
  const button = elements["question-list"].querySelector(`[data-id="${state.currentId}"]`);
  if (button) button.classList.toggle("answered", answered);
}

function renderRail() {
  const fragment = document.createDocumentFragment();
  let lastSection;
  questions.forEach((question) => {
    if (activeFilter !== "all" && question.section !== activeFilter) return;
    if (question.section !== lastSection) {
      lastSection = question.section;
      const heading = document.createElement("p");
      heading.className = "rail-section";
      heading.textContent = `Section ${lastSection}`;
      fragment.append(heading);
    }
    const button = document.createElement("button");
    const answered = Boolean(state.answers[question.id]?.trim());
    button.type = "button";
    button.className = `question-link${answered ? " answered" : ""}${question.id === state.currentId ? " current" : ""}`;
    button.dataset.id = question.id;
    button.innerHTML = `<span>${questionLabel(question).replace("Question ", "")}</span><small>${question.marks}m</small>`;
    button.setAttribute("aria-current", question.id === state.currentId ? "step" : "false");
    button.addEventListener("click", () => selectQuestion(question.id));
    fragment.append(button);
  });
  elements["question-list"].replaceChildren(fragment);
}

function renderQuestion({ focus = false } = {}) {
  const index = currentIndex();
  const question = questions[index];
  elements["section-label"].textContent = `Section ${question.section}`;
  elements["source-label"].textContent = question.source;
  elements["question-label"].textContent = questionLabel(question);
  elements["marks-label"].textContent = `${question.marks} ${question.marks === 1 ? "mark" : "marks"}`;
  elements.prompt.textContent = question.prompt;
  elements.scenario.textContent = question.scenario || "";
  elements.scenario.hidden = !question.scenario;
  elements.answer.value = state.answers[question.id] || "";
  elements["position-label"].textContent = `Part ${index + 1} of ${questions.length}`;
  elements["previous-button"].disabled = index === 0;
  elements["next-button"].textContent = index === questions.length - 1 ? "Export →" : "Next →";
  renderProgress();
  renderRail();
  if (focus) elements.answer.focus();
}

function selectQuestion(id, focus = true) {
  state.currentId = id;
  persist();
  renderQuestion({ focus });
  if (window.innerWidth < 850) {
    elements["question-list"].classList.remove("open");
    elements["rail-toggle"].setAttribute("aria-expanded", "false");
    elements["rail-toggle"].textContent = "Open";
  }
}

function move(offset) {
  const target = currentIndex() + offset;
  if (target >= 0 && target < questions.length) selectQuestion(questions[target].id);
}

function downloadExport() {
  persist();
  const blob = new Blob([buildTextExport(questions, state.answers)], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "cs-dojo-paper-2-answers.txt";
  link.click();
  URL.revokeObjectURL(url);
}

elements.answer.addEventListener("input", () => {
  const previousAnswer = state.answers[state.currentId] || "";
  state.answers[state.currentId] = elements.answer.value;
  elements["save-state"].textContent = "Binding answer...";
  scheduleProgressRender();
  if (changedAnswerState(previousAnswer, elements.answer.value)) {
    updateCurrentRailState(Boolean(elements.answer.value.trim()));
  }
  clearTimeout(saveTimer);
  saveTimer = setTimeout(persist, 250);
});
elements["previous-button"].addEventListener("click", () => move(-1));
elements["next-button"].addEventListener("click", () => {
  if (currentIndex() === questions.length - 1) downloadExport();
  else move(1);
});
elements["export-button"].addEventListener("click", downloadExport);
elements["theme-toggle"].addEventListener("click", () => {
  theme = toggleTheme(theme);
  localStorage.setItem(THEME_KEY, theme);
  applyTheme();
});
elements["reset-button"].addEventListener("click", () => elements["reset-dialog"].showModal());
elements["cancel-reset"].addEventListener("click", () => elements["reset-dialog"].close());
elements["confirm-reset"].addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  state = createInitialState(questions);
  elements["reset-dialog"].close();
  renderQuestion({ focus: true });
});
elements["rail-toggle"].addEventListener("click", () => {
  const open = elements["question-list"].classList.toggle("open");
  elements["rail-toggle"].setAttribute("aria-expanded", String(open));
  elements["rail-toggle"].textContent = open ? "Close" : "Open";
});
document.querySelectorAll(".section-tab").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.section;
    document.querySelectorAll(".section-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
    renderRail();
  });
});
document.addEventListener("keydown", (event) => {
  if (event.altKey && event.key === "ArrowLeft") move(-1);
  if (event.altKey && event.key === "ArrowRight") move(1);
});
window.addEventListener("beforeunload", persist);
document.addEventListener("visibilitychange", () => {
  document.body.classList.toggle("page-hidden", document.hidden);
});

applyTheme();
renderQuestion();
