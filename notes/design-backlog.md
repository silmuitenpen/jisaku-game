# Design Backlog

> 日本語コメント：
> このファイルは、初回生成後に改善するための設計メモである。
> いま全部を仕様化しすぎると一度も生成できないので、懸念点をここに退避する。
> 初回生成物を見てから、必要なものを `spec.md` や将来の `spec/` 分割ファイルに昇格させる。

---

## 1. Narrative Writing Quality

Current concern:
The story direction is specified, but the detailed writing craft is not yet strict enough.

Future additions:

* scene-level writing rules
* dialogue style guide
* silence and tension rules
* how to write emotional pressure
* how to avoid generic anime dialogue
* how to make scientific turning points feel dramatic
* how to handle character distance and recognition
* how to write rival-school sympathy without stealing focus from protagonist team
* how to avoid exposition-heavy scenes
* how to make Official Briefings feel like tournament pressure rather than textbook lectures

---

## 2. Rival School Arc Depth

Current concern:
Rival schools are required to have stories, but the structure may still be too shallow.

Future additions:

* rival-school arc templates
* internal team relationship patterns
* rival school pre-match / match / post-match structure
* how to make the player want to support rival schools
* how to show another school's inheritance theme without overexplaining
* how to make rival schools feel like they could be protagonists of another story
* how to prevent rival schools from becoming shallow villains
* how to connect each school style to PDF-derived scientific concepts

---

## 3. Official Briefing Quality

Current concern:
Official Briefings may become dry exposition.

Future additions:

* briefing voice patterns
* judge / announcer / guest researcher character roles
* how to explain without giving away answers
* how to use briefing to raise tournament pressure
* how to introduce vocabulary without killing momentum
* how to make the player feel prepared, not spoiled

---

## 4. Prompt and Story Integration

Current concern:
Prompts may feel like interruptions to the story.

Future additions:

* stronger rules for prompt-to-scene payoff
* how to make each round unlock a specific emotional or relational movement
* how to connect wrong answers and retries to protagonist hesitation
* how to make notebook entries feel like story artifacts
* how to make Show Answer penalties narratively meaningful without feeling punitive

---

## 5. Character Consistency and Attachment

Current concern:
The protagonist team and rivals may not become lovable enough in the first version.

Future additions:

* recurring speech patterns
* relationship progression rules
* teammate recognition scenes
* rival recognition scenes
* small non-plot character habits
* emotional callback rules
* how to preserve character consistency across PDFs

---

## 6. Spoiler-Safe Workflow

Current concern:
The user is also the player, so full intermediate review can spoil the story.

Future additions:

* stricter spoiler-safe report format
* redaction rules
* sealed artifact warning convention
* how to compare sealed diffs without reading content
* optional blind mode workflow
* generated filenames that clearly warn about spoilers

---

## 7. Spec Directory Split

Current concern:
`spec.md` may become too large.

Future split candidate:

```text
spec/
├── 00-mission.md
├── 01-repository.md
├── 02-generation-workflow.md
├── 03-source-and-knowledge.md
├── 04-narrative-direction.md
├── 05-character-team.md
├── 06-rival-schools.md
├── 07-drama-beats.md
├── 08-session-and-prompts.md
├── 09-evaluation.md
├── 10-visual-assets.md
├── 11-browser-app.md
├── 12-spoiler-control.md
└── 13-qa.md
```

Keep `spec.md` as the entry point that links to these files.

---

## 8. First Generation Review Questions

After the first generated game, check:

* Did the game run locally?
* Were the prompts actually derived from the PDF?
* Did the Official Briefings help without spoiling answers?
* Did the protagonist team feel emotionally distinct?
* Did rival schools feel worth supporting?
* Did the story make me want to continue?
* Did the prompts feel integrated into the story?
* Did spoiler-safe review actually avoid major spoilers?
* Was `generated/data/sealed/` useful or annoying?
* What should be promoted from this backlog into `spec.md`?

---

## 9. First Generated MVP Follow-Ups (2026-06-18)

* Split the generated character sheet into individual portrait assets and add expression variants.
* Add optional visual figure rounds after extracting selected PDF figures safely.
* Consider a post-completion in-app spoiler unlock that reads sealed final-route data only after the player clears all sessions.
* Expand the final implementation session with more physical-platform comparison prompts.
* Add keyboard shortcuts and richer accessibility labels in the next app pass.
