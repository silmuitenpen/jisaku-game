# Workflow

> 日本語コメント：
> このファイルは、Codexに実際の作業手順を伝えるための運用メモである。
> `spec.md` が仕様書、`docs/workflow.md` が実行手順という位置づけ。

---

## 1. Goal

Generate a local browser-based science olympiad scenario learning game from:

```text
source/textbook.pdf
```

Use:

```text
spec.md
```

as the main generation specification.

The game must be:

* local
* browser-based
* visual-novel-style
* grounded in the PDF
* spoiler-controlled
* suitable for GitHub management

---

## 2. Recommended Configuration

Use this configuration for normal personal use:

```json
{
  "review_mode": true,
  "spoiler_mode": "safe",
  "regen_target": "all",
  "review_knowledge": true,
  "review_story_core": true,
  "review_rival_school_arcs": false,
  "review_drama_beats": "safe_summary_only",
  "review_session_plan": "safe_summary_only",
  "review_scenario": false,
  "review_assets": true,
  "review_technical": true
}
```

This preserves the player experience while still allowing quality checks.

Use `regen_target: all` only for a deliberate first full generation. For follow-up work, choose one narrow `regen_target`.

---

## 3. Phase 1: Source Analysis

Read:

```text
source/textbook.pdf
context/references.md
```

`context/references.md` is optional.

Generate:

```text
generated/data/knowledge-map.json
generated/data/source-refs.json
```

Requirements:

* extract concepts
* extract definitions
* extract equations
* extract derivations
* extract assumptions
* extract limitations
* extract figures and captions where possible
* label content as `source_pdf`, `external_context`, or `model_inference`

In spoiler-safe mode, also generate:

```text
generated/data/public-review/coverage-report.json
```

---

## 4. Phase 2: Story Core

Generate:

```text
generated/data/story-core.json
```

The Story Core must include:

* scientific_core_question
* emotional_core
* previous_failure_connection
* inheritance_question
* final_conflict
* likely_rival_styles
* possible_scientific_turning_points

The Story Core connects:

* the PDF's central issue
* the previous year's unresolved defeat
* the protagonist team's inheritance theme
* the final session

---

## 5. Phase 3: Rival School Arcs

Generate rival schools with heavy story backgrounds.

Generate public and sealed versions:

```text
generated/data/rival-school-arcs.json
generated/data/sealed/rival-school-arcs.full.json
```

Each major rival school should have:

* school identity
* history
* inherited pressure
* current goal
* internal tension
* scientific style
* key members
* reason the player may want to support them
* PDF content connection

In safe mode:

* do not reveal exact backstory twists
* do not reveal hidden motivations
* do not reveal payoff scenes
* summarize only whether each school has a serious arc

---

## 6. Phase 4: Drama Beat Plan

Generate:

```text
generated/data/drama-beat-plan.json
generated/data/sealed/drama-beat-plan.full.json
```

Each major drama beat must include:

* beat_id
* beat_type
* scene_id
* story_function
* emotional_function
* content_connection
* related_character_or_relationship

Required:

* at least one original PDF-specific drama beat
* required drama beats
* optional beats selected from the pool
* content connection for major beats

In safe mode:

* expose only the existence and quality of beats
* hide exact emotional payoffs and twists

---

## 7. Phase 5: Session and Prompt Planning

Generate:

```text
generated/data/session-plan.json
generated/data/prompts.json
generated/data/sealed/session-plan.full.json
```

Each session should include:

1. Opening Scene
2. Official Briefing
3. Foundation Round
4. Mid-scene Reaction
5. Explanation Round
6. Rival Pressure Scene
7. Transfer Round
8. Cross-Examination Round
9. Breakthrough Scene
10. Notebook Update
11. Next Hook

Important:

* Official Briefing comes before Foundation Round
* Official Briefing explains the topic clearly
* Official Briefing must not reveal prompt answers
* prompts must gate story progression

Prompt types:

* numeric input
* formula blank
* unit check
* term blank
* symbol input
* ordering
* matching
* multiple selection
* true / false
* short keyword answer
* open answer after gate

---

## 8. Phase 6: Character and Asset Planning

Load or create:

```text
characters/base-team.json
characters/rivals.json
```

Generate or update:

* Character Bibles
* anchor portraits
* standing portraits
* expression variants
* reusable backgrounds
* important event illustrations

Character image consistency is more important than quantity.

The protagonist team must have four recurring girls:

1. first-year protagonist
2. first-year genius
3. gentle upperclassman
4. strict second-year

---

## 9. Phase 7: Scenario Drafting

Generate:

```text
generated/data/scenario.json
generated/data/sealed/scenario.full.json
```

Rules:

* visual-novel style
* no key insight before prompt clear
* story progression gated by prompts
* protagonist grows through questioning, not sudden genius
* rivals and rival schools are respectable
* final session synthesizes the PDF

In safe mode:

* do not expose full scenario text in normal review
* store full scenario under sealed
* expose only spoiler-safe status summary

---

## 10. Phase 8: Browser Game Implementation

Generate:

```text
generated/index.html
generated/styles.css
generated/src/main.js
generated/src/state.js
generated/src/engine.js
generated/src/evaluator.js
generated/src/renderer.js
generated/src/storage.js
```

Requirements:

* run locally
* load generated JSON data
* show visual-novel scenes
* show prompt rounds
* block story progression until required prompts are cleared
* implement machine-graded gates
* implement answer locking
* implement retry tracking
* implement notebook / review screen
* save progress with localStorage

No backend required.

No AI API required.

---

## 11. Phase 9: Spoiler-Safe Review

Generate:

```text
generated/data/public-review/spoiler-safe-report.md
generated/data/public-review/coverage-report.json
generated/data/public-review/qa-summary.json
```

The spoiler-safe report should show:

* source coverage quality
* number of sessions
* whether Official Briefings exist
* whether rival schools have serious arcs
* whether drama beats have content connections
* whether original drama beat exists
* whether final synthesis exists
* technical warnings
* asset warnings

The spoiler-safe report must hide:

* rival twists
* hidden motivations
* final result
* exact final scientific turning point
* ending route
* decisive scene dialogue

---

## 12. Phase 10: QA

Run QA checks for:

* source grounding
* story quality
* rival school depth
* spoiler control
* prompt evaluation
* browser execution
* character consistency
* GitHub tracking assumptions

Write results to:

```text
notes/generation-log.md
```

---

## 13. Normal Human Review Procedure

When using `spoiler_mode: safe`, review these first:

```text
generated/data/public-review/spoiler-safe-report.md
generated/data/public-review/coverage-report.json
generated/data/public-review/qa-summary.json
notes/generation-log.md
```

Do not open these unless you want spoilers:

```text
generated/data/sealed/
```

---

## 13A. Feedback-To-Spec Update Procedure

Use `regen_target: update_story_ui_design_spec_from_feedback` when the user gives play feedback that should change future generation rules.

This target is documentation-only.

May update:

* `spec.md`
* `docs/workflow.md`
* `notes/design-backlog.md`
* `AGENTS.md`

Must not update:

* `generated/`
* `characters/`
* `assets/`
* `source/textbook.pdf`
* `generated/data/sealed/`

Classify feedback into:

* story writing rules
* session structure rules
* prompt quality rules
* UI direction rules
* formula rendering rules
* backlog items for later implementation

Do not regenerate story text, prompts, UI, or assets in this target.

---

## 14. Partial Regeneration

Use `regen_target` to regenerate only part of the project.

Possible values:

```text
all
spec
update_story_ui_design_spec_from_feedback
update_prompt_answer_quality_spec
knowledge
story
story_japanese
sessions
scenario
characters
character_ui
assets
app
qa
```

Normal rule:

* Use one `regen_target` per Codex execution.
* Do not use `regen_target: all` except for a deliberate first full generation.
* Do not run Browser Agent, automated browser verification, or Playwright-style checks in the normal split workflow.
* The user performs real browser QA manually by opening `generated/index.html`.
* Do not mix PDF rereading, scenario rewriting, image generation, and browser implementation in the same execution.
* Check current files before editing, and do not overwrite `manual_locked: true` files.
* Keep normal reports spoiler-safe.

Target scopes:

| regen_target | May touch | Must not touch |
| --- | --- | --- |
| `spec` | `spec.md`, `docs/workflow.md`, `notes/design-backlog.md`, `AGENTS.md` | `generated/`, `characters/`, `assets/`, `source/textbook.pdf` |
| `update_story_ui_design_spec_from_feedback` | `spec.md`, `docs/workflow.md`, `notes/design-backlog.md`, `AGENTS.md` | `generated/`, `characters/`, `assets/`, `source/textbook.pdf`, sealed artifacts |
| `update_prompt_answer_quality_spec` | `spec.md`, `docs/workflow.md`, `notes/design-backlog.md`, `AGENTS.md` | `generated/`, `characters/`, `assets/`, `source/textbook.pdf`, sealed artifacts, prompt body data, UI implementation |
| `story_session_structure` | `docs/workflow.md`, `notes/design-backlog.md`, and `spec.md` only if the field proposal must become normative | `generated/`, `characters/`, `assets/`, `source/textbook.pdf`, sealed artifacts, UI implementation |
| `knowledge` | `generated/data/knowledge-map.json`, `generated/data/source-refs.json`, public-review coverage, generation log | browser app files, scenario prose, assets, character art |
| `story_japanese` | `generated/data/scenario.json`, `generated/data/session-plan.json`, `generated/data/prompts.json`, synced embedded data only if needed | PDF extraction, image assets, browser implementation rewrites, sealed spoilers in normal report |
| `character_ui` | character profile fields, `generated/data/characters.json`, UI code and CSS needed for the profile screen | story regeneration, PDF rereading, image generation |
| `assets` | character-art guidelines, asset manifest, generated asset files | scenario text, prompt data, PDF extraction, browser app architecture |
| `qa` | `generated/data/public-review/*`, `notes/generation-log.md`, small documentation warnings | full regeneration, browser automation, image generation, sealed spoiler exposure |

Stop rules for usage savings:

* Stop if the requested target does not clearly map to existing files.
* Stop if `generated/` edits become necessary during a spec/backlog-only target.
* Stop if implementation work, scenario regeneration, PDF rereading, image generation, or browser verification becomes tempting outside the current target.
* Stop if prompt correctness cannot be judged confidently from existing data.
* Stop if additional research or more than about 5 minutes of exploration would be needed.
* Stop if a non-allowed file would need editing.

When stopping, report only:

* stopping reason
* relevant file
* ambiguity
* option A
* option B
* recommendation
* question for the user

Examples:

```json
{
  "regen_target": "scenario"
}
```

Regenerate scenario while preserving knowledge and prompt data.

```json
{
  "regen_target": "assets"
}
```

Regenerate images and asset manifests.

```json
{
  "regen_target": "app"
}
```

Regenerate browser app code while preserving data.

---

## 14A. Story Session Structure Planning

Use `regen_target: story_session_structure` to inspect the current public data shape and propose the smallest compatible schema additions for richer story sessions.

This target is planning-only unless the user explicitly asks to apply a migration. Do not edit `generated/` during this target.

Current public data shape:

* `generated/data/scenario.json`
  * Stores session `title`, `source_refs`, `opening_scene`, `official_briefing`, `mid_scene_reaction`, `rival_pressure_scene`, `breakthrough_scene`, `notebook_update`, and `next_hook`.
  * Scene lines currently use `{ speaker, text }`.
* `generated/data/prompts.json`
  * Stores prompt `round`, `stage_label`, `question`, `gate`, `open_question`, `model_answer`, `teammate_whisper`, `judge_criteria`, and `retry_policy`.
* `generated/data/session-plan.json`
  * Stores public-safe session summaries, prompt counts, drama beat ids, and safe inheritance progress.
* `generated/src/data.js`
  * Embeds runtime data.
  * Current runtime uses a scenario-shaped `sessionPlan` object, so future generated-data changes must keep `data.js` synchronized carefully.

Existing fields can cover:

* short opening scene
* official briefing
* simple problem card through `question` and `gate`
* one generic hint through `teammate_whisper`
* model answer and judge criteria
* notebook update

Existing fields do not cleanly cover:

* 800-1500 character long cold open
* title call with round, opponent school, and theme
* prompt-specific pre-problem banter
* character-specific hints
* separate correct / incorrect feedback
* concise formula explanation as structured LaTeX plus prose
* MathJax rendering metadata
* prompt-quality audit status

Minimum compatible field proposal:

```json
{
  "sessions": [
    {
      "id": "session_01",
      "long_cold_open": {
        "setting": "venue | clubroom | waiting_room | hallway | transit",
        "lines": [{ "speaker": "narration", "text": "..." }],
        "comedy_beat": "...",
        "character_focus": ["haru", "rikka"],
        "transition_to_problem": "..."
      },
      "title_call": {
        "round": "...",
        "opponent_school": "...",
        "theme": "...",
        "display_title": "..."
      }
    }
  ]
}
```

```json
{
  "prompts": [
    {
      "id": "p01_ket",
      "pre_problem_banter": [
        { "speaker": "haru", "text": "..." }
      ],
      "problem_card": {
        "stem": "...",
        "latex": ["\\( ... \\)"],
        "display_note": "Render LaTeX in UI"
      },
      "character_hints": [
        { "character_id": "haru", "speaker": "Haru", "text": "...", "tone": "honest_confusion" },
        { "character_id": "rikka", "speaker": "Rikka", "text": "...", "tone": "sharp" },
        { "character_id": "sayo", "speaker": "Sayo", "text": "...", "tone": "soft_question" },
        { "character_id": "minori", "speaker": "Minori", "text": "...", "tone": "strict_warning" }
      ],
      "answer_feedback": {
        "correct": {
          "speaker": "haru",
          "text": "...",
          "formula_explanation": { "latex": "\\( ... \\)", "plain_text": "..." }
        },
        "incorrect": [
          { "speaker": "minori", "text": "...", "mistake": "...", "reason": "..." }
        ]
      }
    }
  ]
}
```

Compatibility rules:

* Add fields as optional.
* Do not remove or rename existing fields.
* Keep `question`, `gate`, `open_question`, `model_answer`, `teammate_whisper`, and `judge_criteria` as fallbacks until the UI supports the richer fields.
* Do not change `id`, `session_id`, `source_refs`, `gate.type`, `gate.answer`, `gate.answers`, or `gate.options[].value`.
* Update `generated/src/data.js` only during a future apply target that edits generated data.
* If prompt validity or answer alignment is unclear, stop and ask the user.

Recommended next implementation targets:

1. `regen_target: apply_story_session_structure_session_1`
   * Add optional session and prompt structure fields for session 1 only.
   * Do not rewrite all sessions.
2. `regen_target: prompt_quality_session_1`
   * Audit whether each session 1 prompt is solvable, unique, and aligned with its gate.
3. `regen_target: adv_ui_schema_support`
   * Teach the browser app to display the optional new fields, without changing story text.

---

## 14B. Prompt And Answer Quality Spec Updates

Use `regen_target: update_prompt_answer_quality_spec` to update only the prompt, answer, hint, and explanation policies in documentation.

This target may document future data fields, but it must not edit `generated/`, rewrite prompt bodies, judge existing prompt correctness, implement answer reveal, or implement LaTeX rendering.

Prompt design rule:

```text
public reference pattern -> abstract misconception or first-step trap -> original four-choice prompt -> formula-backed short explanation -> character reaction
```

The prompt may be inspired by public graduate entrance exams, physics qualifying exams, concept-inventory research, standard textbook problems, lecture notes, or `source/textbook.pdf`, but only at the abstract design level. Do not copy external wording, values, or distinctive settings.

For future generated data, consider these optional fields one session at a time:

* `gate.options[].distractor_reason`
* `character_hints`
* `answer_reveal`
* `explanation.one_line`
* `explanation.formula`
* `explanation.why_correct`
* `explanation.why_wrong`
* `explanation.common_misconception`
* `explanation.story_callback`
* `explanation.next_focus`
* `cleared_by`

Compatibility rules:

* Keep existing `question`, `gate`, `open_question`, `model_answer`, `teammate_whisper`, `judge_criteria`, and `retry_policy` until the runtime migrates.
* Do not change `gate.answer`, `gate.answers`, or `gate.options[].value` in a documentation-only target.
* Stop and ask if a prompt's science correctness, unique answer, or gate alignment is uncertain.

Recommended next implementation targets:

1. `regen_target: prompt_quality_session_1`
   * Audit session 1 prompts for unique answer, gate alignment, meaningful distractors, and formula-backed explanation needs.
   * Stop on ambiguous science.
2. `regen_target: prompt_schema_session_1`
   * Add optional distractor, hint, reveal, and explanation fields for session 1 only.
   * Sync `generated/src/data.js` only in that future generated-data target.
3. `regen_target: latex_rendering`
   * Render stored LaTeX in the browser UI without changing prompt science.

---

## 15. Manual Locking

If a file contains:

```json
{
  "_meta": {
    "manual_locked": true
  }
}
```

do not overwrite it unless explicitly instructed.

Use this especially for:

* `characters/base-team.json`
* reviewed character bibles
* corrected prompt data
* reviewed source references
* manually edited scenario scenes

---

## 16. Git Workflow

Recommended commands:

```bash
git init
git add README.md spec.md .gitignore docs/ source/README.md notes/design-backlog.md
git commit -m "Initial project specification"
```

After generation:

```bash
git status
git add generated/ characters/ assets/ notes/ context/ docs/
git commit -m "Generate first local scenario game"
```

Source PDFs are ignored by default:

```text
source/*.pdf
```

`generated/data/sealed/` is intentionally tracked.

---

## 17. Codex Execution Prompt Template

Use this prompt when asking Codex to generate the game:

`regen_target: all` is shown here only for a deliberate first full generation. For follow-up work, choose one narrow target such as `spec`, `story_japanese`, `character_ui`, `assets`, or `qa`.

```text
Read spec.md and docs/workflow.md.

Use source/textbook.pdf as the main learning source.

Use context/references.md only if it exists.

Generate a local browser-based science olympiad scenario learning game under generated/.

Use the recommended configuration:

review_mode: true
spoiler_mode: safe
regen_target: all
review_knowledge: true
review_story_core: true
review_rival_school_arcs: false
review_drama_beats: safe_summary_only
review_session_plan: safe_summary_only
review_scenario: false
review_assets: true
review_technical: true

Preserve spoiler control.
Do not expose rival school twists, final result, ending route, or decisive scene dialogue in normal review.
Save spoiler-heavy artifacts under generated/data/sealed/.
Save spoiler-safe review files under generated/data/public-review/.
Do not ignore generated/data/sealed/ in Git.

The game must run locally with HTML, CSS, and Vanilla JavaScript.

After generation, write a concise status report listing:
- generated files
- whether the game runs locally
- where to open the game
- where the spoiler-safe report is
- any unresolved issues
```
