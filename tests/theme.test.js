import test from "node:test";
import assert from "node:assert/strict";
import { getThemeView, normalizeTheme, toggleTheme } from "../theme.js";

test("regular mode is the safe default", () => {
  assert.equal(normalizeTheme(null), "regular");
  assert.equal(normalizeTheme("unknown"), "regular");
});

test("theme toggles between regular and reham modes", () => {
  assert.equal(toggleTheme("regular"), "reham");
  assert.equal(toggleTheme("reham"), "regular");
});

test("theme view changes site identity and toggle label", () => {
  assert.deepEqual(getThemeView("regular"), {
    siteName: "Revision Dojo",
    subtitle: "Computer Science HL Practice",
    toggleLabel: "Reham Mode",
    title: "Revision Dojo | CS HL Practice",
    resetLabel: "Reset Answers",
    exportLabel: "Export Answers",
    navLabel: "Paper Navigator",
    saveLabel: "Saved",
  });
  assert.equal(getThemeView("reham").toggleLabel, "Exit Reham Mode");
  assert.equal(getThemeView("reham").siteName, "Reham Dojo");
  assert.equal(getThemeView("reham").resetLabel, "Burn All Answers");
});
