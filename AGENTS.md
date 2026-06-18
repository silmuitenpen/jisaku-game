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

Spoiler rules:

* `generated/data/sealed/` may contain major spoilers and is intentionally tracked by Git.
* Do not quote or summarize sealed spoiler details in normal reports.
* Do not expose rival school twists, hidden motivations, final results, ending routes, decisive dialogue, or final scientific turning points in normal reports.
