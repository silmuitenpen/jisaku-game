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

---

## 5. Play Feedback Promoted To Spec On 2026-06-19

The following user feedback was promoted into `spec.md`, `docs/workflow.md`, and `AGENTS.md` during `regen_target: update_story_ui_design_spec_from_feedback`:

* Story needs more entertainment value, not only serious tournament mood.
* Future scenes should include kirara-style daily clubroom energy, light comedy, small punchlines, misunderstandings, teasing, and character banter.
* Long cold opens should appear before problems, with enough reading texture to make the player care before the prompt.
* Character appearance, habits, voice, props, and gestures should be introduced naturally through the protagonist's viewpoint.
* Healthy affection, closeness, teasing, trust, embarrassment, and name usage are allowed.
* Sexualized description, explicit romance, and adultized fanservice remain forbidden because the characters are minors.
* Science scenes should shift from daily comedy into serious competition.
* Problem cards must not be preceded by scenes that leak the answer.
* Post-answer explanations should be concise and formula-backed where relevant.
* UI direction should move from educational HTML toward ADV / visual novel presentation.
* LaTeX should not remain as raw player-facing text; future UI work should render formulas.
* Prompt quality must be checked before regeneration or edits.
* If prompt correctness or file-scope mapping is unclear, Codex should stop and ask rather than silently fixing.

---

## 6. New Backlog From Play Feedback

These items are not implemented yet:

* Rewrite future sessions with 800-1500 character long cold opens.
* Add title-call data for session title, tournament round, opponent school, and theme.
* Add pre-problem character banter blocks of 4-8 exchanges.
* Add character-specific hint data instead of one generic hint string.
* Add correct and incorrect feedback data with character reactions.
* Add concise formula-backed explanations to prompts.
* Add prompt-quality QA that checks answer uniqueness, gate alignment, wrong-option quality, and answer leakage.
* Redesign the browser UI into ADV style with text box, speaker name, sprite area, background panel, problem card, hint bubbles, and notebook update presentation.
* Add MathJax or equivalent LaTeX rendering.
* Consider vendoring MathJax for complete offline play.
* Review existing prompts that may not be solvable or may not match their gate values.

Recommended future targets:

1. `regen_target: story_session_structure`
   * Add long cold open, title call, banter, and notebook beat structure to one session at a time.
   * Do not edit UI or assets.

2. `regen_target: prompt_quality`
   * Audit prompt wording, gate alignment, answer uniqueness, options, and explanations.
   * Stop and ask if a prompt's science is ambiguous.

3. `regen_target: adv_ui`
   * Redesign the browser presentation as an ADV-style game interface.
   * Do not regenerate scenario content during this target.

4. `regen_target: latex_rendering`
   * Add MathJax or equivalent local-compatible rendering for formulas.
   * Decide separately whether CDN or vendored offline assets are required.
