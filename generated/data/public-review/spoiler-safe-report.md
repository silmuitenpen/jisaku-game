# Spoiler-Safe Generation Report

Generated: 2026-06-18

## Source Coverage

- Primary source: `Fundamentals of Quantum Optics and Quantum Information` by Peter Lambropoulos, David Petrosyan
- PDF text extraction: successful
- Optional context: `context/references.md` existed but was empty
- Coverage mode: broad source spine across quantum mechanics, quantum optics, quantum information, algorithms, and physical implementations
- Prompt grounding: all 31 prompts cite `source_pdf` references

## Game Shape

- Sessions: 5
- Prompts: 31
- Required Official Briefings: present before every Foundation Round
- Learning flow: machine-graded gate -> open answer lock -> model answer reveal -> self-assessment -> retry tracking
- Main story reward: visual-novel tournament progression after clearing required prompts

## Story And Rival Safety

- Protagonist team: four recurring girls with fixed Character Bible entries
- Rival schools: serious arcs exist and each has a source-connected intellectual style
- Original PDF-specific drama beat: present
- Final synthesis: present, tied to physical implementation conditions

## Spoiler Control

Normal review intentionally hides:

- rival school twists
- hidden rival motivations
- final result
- ending route
- decisive scene dialogue

Spoiler-heavy artifacts are under:

```text
generated/data/sealed/
```

Do not open sealed files unless you want story spoilers.

## Asset Status

- MVP character asset: one generated protagonist-team character sheet
- Deferred: individual portrait crops, expression variants, event CGs, and richer backgrounds

## Technical Status

- Runtime: local browser, HTML/CSS/Vanilla JavaScript
- Persistence: `localStorage`
- No backend, database, login, or AI API required
- Data JSON is written for review; app also has embedded generated data for direct local file opening



## Continue Resume Fixes

- Added missing Chapter 7 grounding for reversible-computation material.
- Tightened public wording around late-game synthesis and PDF-specific turning points.
- Updated prompt evaluation so model-answer reveal does not clear a prompt by itself.
- Added clean retry support for prompts cleared after viewing an answer.
