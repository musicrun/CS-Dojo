export function normalizeTheme(theme) {
  return theme === "reham" ? "reham" : "regular";
}

export function toggleTheme(theme) {
  return normalizeTheme(theme) === "reham" ? "regular" : "reham";
}

export function getThemeView(theme) {
  if (normalizeTheme(theme) === "reham") {
    return {
      siteName: "Reham Dojo",
      subtitle: "The Trial by Fire",
      toggleLabel: "Exit Reham Mode",
      title: "Reham Dojo | Trial by Fire",
      resetLabel: "Burn All Answers",
      exportLabel: "Export for Judgment",
      navLabel: "The Descent",
      saveLabel: "Saved in the ashes",
    };
  }
  return {
    siteName: "Revision Dojo",
    subtitle: "Computer Science HL Practice",
    toggleLabel: "Reham Mode",
    title: "Revision Dojo | CS HL Practice",
    resetLabel: "Reset Answers",
    exportLabel: "Export Answers",
    navLabel: "Paper Navigator",
    saveLabel: "Saved",
  };
}
