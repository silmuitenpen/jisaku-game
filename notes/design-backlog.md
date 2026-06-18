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

---

## 7. Story Session Structure Design Check

Recorded during `regen_target: story_session_structure`.

Current structure inspected:

* `generated/data/scenario.json`
  * Session fields: `id`, `title`, `source_refs`, `opening_scene`, `official_briefing`, `mid_scene_reaction`, `rival_pressure_scene`, `breakthrough_scene`, `notebook_update`, `next_hook`.
  * Scene lines are currently `{ speaker, text }`.
* `generated/data/session-plan.json`
  * Public-safe summary fields exist, but not the richer playable scene structure.
* `generated/data/prompts.json`
  * Prompt fields include `question`, `gate`, `open_question`, `model_answer`, `teammate_whisper`, `judge_criteria`, and `retry_policy`.
* `generated/src/data.js`
  * Embedded runtime data is synchronized with public JSON.
  * Runtime `sessionPlan` is currently scenario-shaped, so future migrations must be careful.

Enough for current MVP:

* basic session title
* source refs
* short opening scene
* official briefing
* mid-scene and rival-pressure inserts
* problem text and machine-graded gate
* one generic hint line
* model answer
* judge criteria
* notebook update

Not enough for the new direction:

* no dedicated `long_cold_open`
* no `title_call`
* no prompt-specific `pre_problem_banter`
* no character-specific hints
* no structured correct / incorrect answer feedback
* no structured formula explanation field
* no LaTeX render metadata
* no prompt-quality audit result field

Minimum proposed optional fields:

* session-level:
  * `long_cold_open`
  * `title_call`
* prompt-level:
  * `pre_problem_banter`
  * `problem_card`
  * `character_hints`
  * `answer_feedback`
  * `formula_explanation`
  * `quality_audit`

Compatibility policy:

* Add new fields as optional only.
* Keep all current fields as fallbacks.
* Do not rename or remove current fields until the UI is migrated.
* Do not change gate machine values.
* Apply migration one session at a time.
* After editing generated JSON in a future target, sync `generated/src/data.js`.
* Stop and ask the user if a prompt appears scientifically ambiguous or not aligned with its gate.

Recommended next target:

1. `regen_target: apply_story_session_structure_session_1`
   * Add the optional fields for session 1 only.
   * Use existing text as placeholders unless the user provides rewrite material.
   * Do not implement UI.

2. `regen_target: prompt_quality_session_1`
   * Check session 1 prompt validity, answer uniqueness, and gate alignment.
   * Stop on ambiguous science rather than silently rewriting.

3. `regen_target: adv_ui_schema_support`
   * Render the optional fields in an ADV-like UI.
   * Do not change scenario prose during this target.

---

## 8. Prompt Answer Quality Spec Update

Promoted during `regen_target: update_prompt_answer_quality_spec`:

* Gate prompts should become strong single-answer four-option questions by default, not thin vocabulary checks.
* Strong prompts should compress upper-level physics or entrance-exam style reasoning into one trap-bearing decision.
* External and textbook references may inform concept, misconception, and algebra depth, but exact wording, values, and settings must not be copied.
* Distractors should correspond to common misconceptions and may later carry `distractor_reason`.
* Explanations should be misconception correction: answer, one-line takeaway, formula check, why correct, why wrong, common misconception, story callback, and next focus.
* Future answer reveal should move through hint, character-specific hint, one solution step, answer reveal, full explanation, and retry.
* Future progress state may track `cleared_by` as learning state, not punishment.

Still backlog, not implemented yet:

* Audit existing generated prompts for answer uniqueness, gate alignment, meaningful distractors, and solvability from prompt text alone.
* Add optional `distractor_reason`, `answer_reveal`, structured `explanation`, `character_hints`, and `cleared_by` fields to generated prompt data one session at a time.
* Keep old fields as fallbacks until the UI supports the richer schema.
* Add answer reveal UI and notebook tracking.
* Render LaTeX with MathJax or a local-compatible renderer.
* Rewrite weak prompts only in a future generated-data target after user approval if scientific correctness is unclear.

Recommended future targets:

1. `regen_target: prompt_quality_session_1`
   * Audit existing session 1 prompts without rewriting uncertain science.
2. `regen_target: prompt_schema_session_1`
   * Add optional hint, distractor, reveal, and explanation fields for session 1.
3. `regen_target: latex_rendering`
   * Render formulas in UI without changing scenario or prompt content.
