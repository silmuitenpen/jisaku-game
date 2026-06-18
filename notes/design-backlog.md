# Design Backlog

This file tracks design concerns that should become small, targeted follow-up work. It is not a request to regenerate everything at once.

Use `spec.md` and `docs/workflow.md` as the authoritative rules. Keep future work split by one `regen_target` per Codex execution.

---

## 1. Already Covered By Existing Spec

These concerns were already present before the current `regen_target: spec` pass:

* PDF-derived learning units must be traceable through `knowledge-map.json` and `source-refs.json`.
* Official Briefing scenes must appear before Foundation Rounds and must not reveal prompt answers.
* Prompts must gate story progression.
* The protagonist team must be fixed and reused through `characters/base-team.json`.
* Rival schools must have serious arcs and must not be disposable opponents.
* Spoiler-heavy artifacts belong under `generated/data/sealed/`.
* Spoiler-safe review files belong under `generated/data/public-review/`.
* `generated/data/sealed/` is intentionally Git-tracked.
* The MVP must run locally with HTML, CSS, and Vanilla JavaScript.

---

## 2. Promoted To Spec In This Pass

The following backlog items were promoted during the 2026-06-18 `regen_target: spec` pass:

* Narrative Writing Quality:
  * Japanese game text must be written directly as natural Japanese visual-novel prose.
  * Translation-flavored Japanese is forbidden.
  * Dialogue must use `「」`.
  * Emotion should be shown through silence, gaze, pauses, and hand movement.
  * Scientific explanations must remain accurate without becoming lecture dialogue.
  * Character voices must stay distinct.

* Official Briefing Quality:
  * Briefings should feel like tournament pressure, not textbook lectures.
  * Judges, announcers, guest researchers, and examiners should have distinct briefing roles.
  * Briefings should orient the player without solving prompts.

* Prompt and Story Integration:
  * Scenes before a prompt must not reveal the correct answer, decisive assumption, final equation step, or hidden turning point.
  * Retries and answer reveals should be treated as learning state, not punitive story failure.

* Character Consistency and Attachment:
  * The app specification now includes a spoiler-safe character profile screen available during play.
  * Character profiles should emphasize visual identification and avoid hidden motivations or major story spoilers.

* Character Image Generation:
  * The image pipeline now specifies Character Bible, design sheet, base standing sprite, expression variants, optional outfit variants, and event illustrations.
  * `fixed_visual_traits` and `variable_visual_traits` are now required planning concepts.
  * AI-looking gloss, visual noise, broken hands, extra fingers, and inconsistent accessories are explicitly forbidden.

* Spoiler-Safe Workflow:
  * `AGENTS.md` now records execution guardrails and sealed-artifact handling.
  * Normal status reports must not expose sealed spoiler details.

* Usage Reduction And Split Execution:
  * `regen_target: all` is no longer the normal default for follow-up work.
  * One Codex execution should handle one `regen_target`.
  * Browser Agent and automated browser verification are banned in the normal split workflow.
  * Manual browser QA is the default.

---

## 3. Still In Backlog

Do not mark these complete yet:

* Actual Japanese scenario rewriting for game prose, UI labels, prompts, and explanations.
* Actual character profile UI implementation in HTML/CSS/JavaScript.
* Actual character data additions for profile display.
* Actual image regeneration or asset splitting.
* Rival school arc depth improvements.
* Rival-school pre-match, match, and post-match structure templates.
* Spec directory split.
* Visual figure rounds using PDF figures.
* Post-completion spoiler unlock inside the app.
* Keyboard shortcuts and stronger accessibility labels.
* Final-session content expansion.
* Safer sealed-diff review workflow that does not reveal spoiler text.

---

## 4. Recommended Next `regen_target`

1. `regen_target: story_japanese`
   * Rewrite scenario, prompt, session, and UI-facing text into natural Japanese visual-novel prose.
   * Do not reread the PDF, regenerate assets, or rewrite browser architecture.

2. `regen_target: character_ui`
   * Add spoiler-safe character profile fields and the in-game `登場人物` UI.
   * Do not regenerate scenario text, assets, or knowledge files.

3. `regen_target: assets`
   * Create a character art guideline file and plan individual sprite/expression assets.
   * Do not edit scenario or prompt logic.

4. `regen_target: qa`
   * Refresh public-review files and generation logs after the above narrow passes.
   * Do not perform full regeneration.

5. Later targets:
   * `regen_target: knowledge` only when the PDF extraction itself needs correction.
   * `regen_target: app` only when browser implementation architecture needs a focused pass.
