# Agent Guardrails

Treat `spec.md` and `docs/workflow.md` as the top-level project rules.

This repository generates and maintains a local Japanese visual novel science olympiad learning game. Player-facing prose should be natural Japanese written directly as Japanese, not translation-flavored text.

Execution rules:

* Use only one `regen_target` per Codex execution by default.
* Do not use `regen_target: all` except for an explicitly requested first full generation.
* Do not run Browser Agent, automated browser verification, or Playwright-style checks unless explicitly requested for a later target.
* Do not mix PDF rereading, image generation, scenario regeneration, and browser implementation in the same execution.
* Do not overwrite existing files broadly; inspect current state first.
* Respect any `manual_locked: true` marker.
* Keep normal status reports spoiler-safe.

For `regen_target: update_story_ui_design_spec_from_feedback`, edit documentation only:

* `spec.md`
* `docs/workflow.md`
* `notes/design-backlog.md`
* `AGENTS.md`

Do not edit `generated/`, `characters/`, `assets/`, `source/textbook.pdf`, or sealed artifacts during that target.


For `regen_target: update_prompt_answer_quality_spec`, edit documentation only:

* `spec.md`
* `docs/workflow.md`
* `notes/design-backlog.md`
* `AGENTS.md`

Do not edit `generated/`, prompt body data, scenario text, UI implementation files, `characters/`, `assets/`, `source/textbook.pdf`, or sealed artifacts during that target. Document prompt-quality policy only. If actual prompt correctness, unique-answer judgment, or gate alignment is uncertain, stop and ask instead of rewriting the science.

Stop instead of continuing autonomously when:

* existing structure does not clearly match the requested target
* a non-allowed file would need editing
* a text encoding problem appears
* generated data, UI implementation, scenario rewriting, PDF rereading, image generation, or browser verification becomes necessary outside the requested target
* prompt correctness is uncertain
* extra research or more than about 5 minutes of exploration would be needed

When stopping, report only the stopping reason, relevant file, ambiguity, two options, a recommendation, and the question for the user.

Spoiler rules:

* `generated/data/sealed/` may contain major spoilers and is intentionally tracked by Git.
* Do not quote or summarize sealed spoiler details in normal reports.
* Do not expose rival school twists, hidden motivations, final results, ending routes, decisive dialogue, or final scientific turning points in normal reports.
