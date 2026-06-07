import test from "node:test";
import assert from "node:assert/strict";
import { getThemeView, normalizeTheme, toggleDarkMode, toggleTheme } from "../theme.js";

test("regular mode is the safe default", () => {
  assert.equal(normalizeTheme(null), "regular");
  assert.equal(normalizeTheme("unknown"), "regular");
});

test("theme toggles between regular and reham modes", () => {
  assert.equal(toggleTheme("regular"), "reham");
  assert.equal(toggleTheme("reham"), "regular");
});

test("dark mode toggles independently of reham mode", () => {
  assert.equal(toggleDarkMode("light"), "dark");
  assert.equal(toggleDarkMode("dark"), "light");
  assert.equal(toggleDarkMode("weird"), "dark");
});

test("theme view changes site identity and toggle label", () => {
  assert.deepEqual(getThemeView("regular", "light"), {
    siteName: "Revision Dojo",
    subtitle: "Computer Science HL Practice",
    toggleLabel: "Reham Mode",
    darkToggleLabel: "Dark Mode",
    title: "Revision Dojo | CS HL Practice",
    resetLabel: "Reset Answers",
    exportLabel: "Export Answers",
    navLabel: "Paper Navigator",
    saveLabel: "Saved",
  });
  assert.equal(getThemeView("regular", "dark").darkToggleLabel, "Light Mode");
  assert.equal(getThemeView("reham", "dark").toggleLabel, "Exit Reham Mode");
  assert.equal(getThemeView("reham", "dark").siteName, "Reham Dojo");
  assert.equal(getThemeView("reham", "dark").resetLabel, "Burn All Answers");
});
