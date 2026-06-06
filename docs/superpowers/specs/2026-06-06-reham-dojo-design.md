# Reham Dojo Design

## Purpose

Reham Dojo is a static study website for the Computer Science HL Paper 1 Combined Revision Mock. It lets a student answer every question in a focused interface, keeps work after refreshes, and exports a complete text document suitable for AI-assisted marking.

## Scope

- Display question text only, not PDF page images.
- Include all 32 numbered questions and 58 answerable parts from the 145-mark paper.
- Treat each sub-question as its own answer screen while retaining its parent scenario.
- Auto-save answers in browser local storage after each edit.
- Export the complete paper as a TXT file containing every full question, mark allocation, and answer.
- Work on desktop and mobile without a backend or account.
- Deploy as a public static website.

## Experience

The site opens with an exam dashboard showing the title, total marks, answered-part progress, and section navigation. A persistent question rail groups entries into Section A and Section B, visually distinguishing unanswered, current, and completed parts.

The main workspace presents one answerable part at a time. It includes the question number, source tag, shared scenario where applicable, exact prompt, mark allocation, and a large multiline answer field. Previous and next controls support sequential work, while the rail supports direct navigation.

Answers save automatically. A status indicator confirms when the current text has been stored. Refreshing or reopening the site restores the last selected question and all answers.

The export action downloads `reham-dojo-paper-1-answers.txt`. The document includes paper metadata followed by each full question and its answer. Unanswered items are explicitly labeled `[No answer provided]`.

A reset action requires explicit confirmation before clearing stored work.

## Visual Direction

The visual language is theatrical and infernal rather than graphic or disturbing: near-black stone, deep oxblood panels, ember-orange highlights, scorched gold rules, animated heat haze, drifting ash, and subtle flame-like gradients. The masthead reads `REHAM DOJO` with the subtitle `Paper I: The Trial by Fire`.

Typography pairs a sharp gothic display face with a highly readable serif body face. Answer fields remain calm and legible despite the maximalist frame. Motion respects `prefers-reduced-motion`.

## Architecture

The app uses plain HTML, CSS, and JavaScript:

- `index.html` contains the semantic shell and templates.
- `styles.css` owns responsive layout, theme, and animation.
- `questions.js` contains the verified paper data.
- `app.js` owns rendering, navigation, persistence, progress, reset, and TXT export.

Data is stored under one versioned local-storage key. The application validates parsed storage and falls back to a clean state if stored data is corrupt.

## Data Model

Each answerable part has:

- Stable ID such as `q10-b`
- Section, question number, and optional part label
- Source-paper tag
- Optional shared scenario
- Full prompt
- Mark allocation

The saved state contains an answers map keyed by stable ID and the currently selected ID.

## Verification

- Validate that the dataset contains 58 parts and totals 145 marks.
- Unit-test pure state, progress, and export helpers with Node's built-in test runner.
- Verify keyboard navigation, local persistence, reset confirmation, responsive layout, and TXT download in a real browser.
- Compare all question text and marks against the supplied PDF.
- Deploy the verified static directory and smoke-test the public URL.

## Exclusions

- No integrated AI marking.
- No accounts, cloud synchronization, timers, model answers, or PDF upload.
- No recreation of Revision Dojo branding or proprietary assets.
