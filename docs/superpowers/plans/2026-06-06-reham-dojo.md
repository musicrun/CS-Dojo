# Reham Dojo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publicly deploy a static infernal-themed exam-answering website containing every answerable part of the supplied CS HL Paper 1 mock.

**Architecture:** Plain HTML, CSS, and browser JavaScript render a structured question dataset. Pure helper functions provide testable persistence, progress, and export behavior; browser-specific code binds those helpers to local storage and the DOM.

**Tech Stack:** HTML5, CSS3, JavaScript ES modules, Node built-in test runner, Vercel static hosting

---

### Task 1: Encode and validate the paper

**Files:**
- Create: `questions.js`
- Create: `tests/questions.test.js`
- Create: `package.json`

- [ ] Add a test asserting there are 58 answerable parts, 145 total marks, unique IDs, and both sections.
- [ ] Run `npm test` and confirm the dataset test fails because `questions.js` does not exist.
- [ ] Encode every question and sub-question from the PDF with stable IDs, source tags, scenarios, prompts, and marks.
- [ ] Run `npm test` and confirm the dataset test passes.

### Task 2: Implement state and export helpers

**Files:**
- Create: `state.js`
- Create: `tests/state.test.js`

- [ ] Add tests for clean-state creation, corrupt-state recovery, completion counting, and full-question TXT export.
- [ ] Run `npm test` and confirm the new tests fail.
- [ ] Implement `createInitialState`, `parseStoredState`, `getProgress`, and `buildTextExport`.
- [ ] Run `npm test` and confirm all helper tests pass.

### Task 3: Build the semantic application shell

**Files:**
- Create: `index.html`
- Create: `app.js`

- [ ] Add the masthead, progress summary, section filters, question rail, answer workspace, navigation controls, export button, reset dialog, and noscript message.
- [ ] Implement rendering, direct and sequential navigation, answer updates, debounced persistence, state restoration, export download, and reset confirmation.
- [ ] Add accessible labels, live save status, focus handling, and keyboard-safe controls.
- [ ] Run `npm test` and confirm no regression in pure behavior.

### Task 4: Apply the infernal responsive design

**Files:**
- Create: `styles.css`

- [ ] Define the black, oxblood, ember, and scorched-gold theme using CSS custom properties.
- [ ] Add atmospheric ash, heat, glow, texture, and controlled entrance animation without external image assets.
- [ ] Style the two-column desktop workspace and compact mobile navigation.
- [ ] Add clear focus states, high-contrast answer text, reduced-motion handling, and print-safe fallback rules.

### Task 5: Verify the complete experience

**Files:**
- Modify as defects require: `index.html`
- Modify as defects require: `styles.css`
- Modify as defects require: `app.js`
- Modify as defects require: `questions.js`

- [ ] Run `npm test` and require all tests to pass.
- [ ] Serve the site locally and inspect it at desktop and mobile widths.
- [ ] Enter answers, refresh, and verify persistence and current-question restoration.
- [ ] Export TXT and verify every full question, mark value, answer, and unanswered label.
- [ ] Trigger reset, cancel once, then confirm and verify storage is cleared.
- [ ] Compare the rendered question list and total marks with the supplied PDF.

### Task 6: Deploy publicly

**Files:**
- Create: `vercel.json`

- [ ] Add a minimal static deployment configuration with clean caching behavior.
- [ ] Deploy the project to Vercel production.
- [ ] Open the public URL and smoke-test question navigation, answer entry, persistence, and TXT export.
- [ ] Record the final public URL in the completion response.
