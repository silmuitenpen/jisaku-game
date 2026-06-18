# Science Olympiad Scenario Game Generation Spec

> 日本語コメント：
> この仕様書は、教材PDFをもとに「科学オリンピック青春シナリオゲーム」を生成するためのCodex向け仕様書である。
> 主目的はIT学習ではなく、プレイヤーが続きの物語を読みたくなり、その結果としてPDF学習に長く没入するゲームを作ることである。
> 今回は最初の実験版なので、細かい文体仕様やspec分割は後回しにし、まず一回ローカルで動くものを作る。

---

## 0. Mission

> 日本語コメント：
> 最上位目的を固定する。
> 失敗例は「PDFからクイズを作っただけの学習アプリ」になること。
> 成功条件は「続きが読みたいから問題を解く」状態を作ること。

Generate a local browser-based scenario game from a source PDF.

The primary goal is to make the player spend more time learning by making narrative continuation emotionally rewarding.

The generated game should feel like a science olympiad youth tournament story with:

* cute high school girls
* team dynamics
* rival schools
* unresolved past defeats
* senior-junior inheritance
* scientific pressure
* emotionally intense discussions
* visual-novel-style progression

The game must not feel like:

* a generic quiz app
* a flashcard app
* a shallow educational game with decorative characters

The player advances by clearing learning prompts derived from the PDF.

The main reward is narrative progression.

---

## 1. Directory Contract

> 日本語コメント：
> Codexがどこを読み、どこへ出力するかを固定する。
> `notes/design-backlog.md` も管理対象にする。
> GitHub管理・部分再生成・レビュー・ネタバレ制御を成立させるため、ディレクトリ構成を契約として扱う。

Expected project structure:

```text
project/
├── README.md
├── spec.md
├── .gitignore
├── source/
│   ├── README.md
│   └── textbook.pdf
├── context/
│   └── references.md
├── characters/
│   ├── base-team.json
│   └── rivals.json
├── assets/
│   ├── characters/
│   └── backgrounds/
├── generated/
│   ├── index.html
│   ├── styles.css
│   ├── README.md
│   ├── src/
│   └── data/
│       ├── public-review/
│       └── sealed/
├── notes/
│   ├── design-backlog.md
│   └── generation-log.md
└── docs/
    └── workflow.md
```

The required source PDF must be placed at:

```text
source/textbook.pdf
```

Optional external context may be placed at:

```text
context/references.md
```

Generated browser game files must be written under:

```text
generated/
```

Generation logs must be written under:

```text
notes/generation-log.md
```

Future design concerns must be written under:

```text
notes/design-backlog.md
```

---

## 2. Generation Configuration

> 日本語コメント：
> 最初の通常運用設定。
> 制作者本人がプレイヤーになるため、ネタバレを避けつつ品質確認できる `spoiler_mode: safe` を推奨する。

Recommended default configuration:

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

This full configuration is for an intentional first generation. For follow-up work, choose one narrow `regen_target` and do not use `all` by default.

Supported `spoiler_mode` values:

* `full`
* `safe`
* `blind`

Supported `regen_target` values:

* `all`
* `knowledge`
* `story`
* `sessions`
* `scenario`
* `characters`
* `assets`
* `app`

---

## 3. Source and Context Policy

> 日本語コメント：
> PDF本文と外部情報を明確に分ける。
> PDF習熟が主目的なので、本編の必須問題はPDF由来を基本にする。

The source PDF is the core learning material.

If `context/references.md` exists, use it as the preferred source of external context.

If `context/references.md` does not exist, external research may be used only when useful for:

* modern context
* related research
* historical follow-up
* contemporary applications
* known limitations of the PDF's treatment

All extracted or generated content must be labeled as one of:

* `source_pdf`
* `external_context`
* `model_inference`

Main session prompts should primarily test PDF-derived content.

External context should mainly appear in:

* post-session dialogue
* advanced sessions
* epilogue
* rival comments
* judge commentary after a session

External context must never be presented as if it were contained in the PDF.

---

## 4. Knowledge Extraction

> 日本語コメント：
> PDFを単なる要約ではなく、ゲーム化できる細かい学習単位に分解する。

Extract fine-grained learning units from the PDF.

Do not merely summarize the PDF.

Extract and structure:

* major concepts
* definitions
* equations
* derivations
* assumptions
* approximations
* validity conditions
* examples
* figures and captions
* claims and arguments
* limitations
* common misconceptions

Output required artifacts:

```text
generated/data/knowledge-map.json
generated/data/source-refs.json
```

Every major learning unit and prompt must be traceable to its source.

---

## 5. Story Core Extraction

> 日本語コメント：
> シナリオをいきなり書かず、まずPDFの中心問題を物語の核に変換する。
> 科学的中心問い・去年の因縁・継承される問い・決勝の対立を対応させる。

Before writing the scenario, extract a Story Core from the PDF.

Output:

```text
generated/data/story-core.json
```

The Story Core must include:

* `scientific_core_question`
* `emotional_core`
* `previous_failure_connection`
* `inheritance_question`
* `final_conflict`
* `likely_rival_styles`
* `possible_scientific_turning_points`

The Story Core must connect:

* the PDF's central scientific problem
* the protagonist team's previous unresolved defeat
* the upperclassman's inheritance theme
* the strict second-year's fear of repeating failure
* the final session's decisive question

Do not write a tournament story that is only loosely connected to the PDF.

---

## 6. Narrative Direction

> 日本語コメント：
> 表面体験は「科学オリンピック青春シナリオゲーム」。
> 内部には学習設計があるが、ユーザーに見せる体験は部活・大会・因縁・継承・ライバル校群像劇にする。

The generated game should feel closer to a bishoujo visual novel and tournament sports manga than to a quiz app.

The cast should consist of cute high school girls.

The emotional intensity should resemble a serious youth sports story:

* serious matches
* rival respect
* pressure under competition
* personal reasons to win
* senior-junior inheritance
* unresolved rivalry
* growth through discussion
* breakthrough moments
* team and school arcs

Do not foreground labels such as:

* Recall
* Explain
* Apply
* Critique
* Rubric
* Card
* Mastery

Translate these into story events.

Player-facing translations:

* Recall → Quick Problem / foundation check
* Explain → Board Explanation / oral defense
* Apply → Transfer Challenge
* Critique → Cross-Examination
* Mastery Check → Final Statement
* Hint → teammate whisper / remembered phrase
* Rubric → judge criteria
* Card → notebook entry

---

## 6A. Japanese Visual Novel Writing Policy

Write the playable game as a Japanese visual novel from the beginning.

Generate all player-facing text directly in Japanese, including:

* story text
* dialogue
* narration
* UI labels
* prompt text
* explanations
* notebook entries
* spoiler-safe summaries that discuss prose quality

Do not write in English first and translate into Japanese.

Dialogue must use Japanese corner brackets:

```text
「……まだ、分かったとは言えません」
```

Narration should be short, paced, and visual. Show emotion through:

* silence
* eye contact
* looking away
* hand movements
* notes, chalk, score sheets, instruments, or other objects
* small pauses before or after a line

Scientific explanations must be accurate, but they must not become unnatural lecture dialogue.

Before the player solves a prompt, the protagonist, senior students, and rivals must not reveal the core answer, decisive assumption, or final reasoning step. They may notice tension, ask partial questions, or point to what kind of reasoning is needed.

Character voices must be distinct:

* The protagonist asks honestly when she does not understand.
* The genius character is sharp, but not magically good at explaining everything.
* The gentle upperclassman gives questions, not answers.
* The strict second-year is not a cold exposition machine; write her as someone with responsibility, urgency, and fear of repeating failure.

Avoid:

* translated-sounding Japanese
* every character speaking in the same voice
* explanation dialogue that sounds like a textbook app
* meta lines such as `この概念を学ぶことは重要です`
* conversations that reveal the correct answer or core insight before the prompt

---

## 6B. Daily Clubroom Comedy And Character Attachment Policy

Future scenario writing should move beyond a serious tournament outline and include the air of a kirara-style daily club activity story.

The game should still be a science olympiad learning game, but the moment-to-moment reading experience should include:

* small jokes
* quick character banter
* harmless misunderstandings
* teasing among teammates
* a small punchline or comic release before tension rises
* clubroom, waiting room, hallway, travel, or venue slice-of-life scenes
* character habits, props, gestures, voice impressions, and visual details seen through the protagonist's eyes

Before a problem begins, include a readable introduction scene rather than jumping directly into a quiz. The introduction should make the player want to spend time with the characters before the scientific pressure arrives.

The protagonist's closeness with the girls may be shown through:

* name usage
* eye contact
* shy pauses
* mutual teasing
* encouragement
* small favors
* trust built through shared confusion
* healthy affection and emotional closeness

Because the characters are minors, do not use sexualized description, explicit romance, erotic framing, or adultized fanservice. Keep intimacy healthy: fondness, trust, embarrassment, admiration, and playful distance.

Character appearance and charm should be introduced naturally through action:

* hair, eyes, uniform, accessories, and posture
* the way a character holds a pencil, notebook, timer, ribbon, bag, or lab item
* characteristic speech rhythm
* a recurring tiny habit
* a joke where the character lightly teases her own strength, weakness, or visual motif

Science scenes should often shift from daily comedy into serious competition:

```text
small joke -> character banter -> strange detail -> official pressure -> problem
```

The joke must not reveal the answer. It may introduce mood, stakes, character relationships, or a misleading everyday analogy, but the decisive scientific idea must remain gated behind the prompt.

After the player answers, explanations should be concise and may use formulas. Avoid long lectures.

---

## 7. Official Briefing Before Foundation Round

> 日本語コメント：
> Foundation Round に入る前に、大会運営・審査員・司会がテーマをわかりやすく説明する。
> これはプレイヤーへの足場かけであり、答えを先に言う場面ではない。
> 問題に入る前に「何を考えるべきか」を明確にする。

Before each Foundation Round, insert an Official Briefing scene.

The Official Briefing should be delivered by one or more of:

* tournament host
* judge
* problem committee member
* announcer
* guest researcher
* senior examiner

The briefing should include:

* what topic will be tested
* why the topic matters
* what kind of reasoning will be needed
* minimal prerequisite explanation
* key vocabulary orientation
* what not to assume too quickly
* why the topic can become controversial or subtle

The briefing must not reveal the answers to the prompts.

It should prepare the player to think, not solve the round for them.

The briefing should feel like tournament pressure, not a textbook lecture.

Use the voice of the speaker:

* a judge frames what will be evaluated
* an announcer raises match pressure
* a guest researcher gives context without solving the prompt
* a senior examiner warns against common assumptions

Keep briefings concise. They should introduce vocabulary, stakes, and reasoning direction while preserving the player's discovery.

---

## 8. Fixed Protagonist Team

> 日本語コメント：
> 主人公チームはシリーズの芯なので、PDFごとに変えない。
> 名前や見た目は初回生成してよいが、構造・関係性・テーマは固定する。

The protagonist team must consist of four recurring girls.

If `characters/base-team.json` exists, load and reuse it.

If it does not exist, generate the base team once and save it to:

```text
characters/base-team.json
```

The team must include:

1. First-year protagonist

   * inexperienced
   * ordinary compared with others
   * refuses to pretend she understands
   * grows by asking simple but essential questions
   * must not win through sudden genius

2. First-year genius

   * fast and sharp
   * contrasts with the protagonist
   * may be lonely, impatient, or bad at explaining

3. Gentle upperclassman

   * carries the inheritance theme
   * has an unresolved past defeat or question
   * passes on a question, not an answer

4. Strict second-year

   * harsh but not cruel
   * strictness comes from responsibility and fear of repeating last year's failure
   * eventually recognizes the protagonist

---

## 9. Backstory and Inheritance

> 日本語コメント：
> 物語の背骨として、去年の敗北と未解決の科学的問いを置く。
> 単なる復讐ではなく、先輩が答えきれなかった問いを後輩が受け取り直す物語にする。

The protagonist team has an unresolved rivalry from the previous year.

Last year, the team lost to a powerhouse school.

The loss was not caused simply by lack of knowledge or calculation speed.

They lost because, in the final discussion, they could not answer a question about:

* assumptions
* limitations
* validity conditions
* scope of a theory
* what changes when conditions are altered

Inheritance must not mean copying the senior's answers.

Inheritance means receiving an unresolved question and responding to it in one's own way.

The past rivalry must correspond to the source PDF's conceptual structure.

The final session should return to this question.

---

## 10. Rival School Story Policy

> 日本語コメント：
> 他校は単なる敵ではなく、応援したくなる別主人公チームとして描く。
> 咲やスポ根もののように、相手校にも歴史・事情・継承・弱さ・勝ちたい理由を持たせる。

Rival schools must not be disposable opponents.

Each major rival school should feel like it could be the protagonist of another story.

For each major rival school, generate:

* school name
* region or background
* team identity
* team history
* current goal
* internal tension
* key members
* reason to win
* what they inherited
* what they are trying to overcome
* relationship to the protagonist team
* why the player might want to support them

Rival schools should have emotionally valid reasons to compete.

The player should sometimes feel:

```text
I want the protagonist team to win, but I also understand why this rival school cannot afford to lose.
```

Output:

```text
generated/data/rival-school-arcs.json
generated/data/sealed/rival-school-arcs.full.json
```

Possible rival school motifs:

* Fallen Powerhouse
* New Elite School
* Small Rural School
* One-Genius Team
* Last-Year Revenge Team
* Research Legacy School
* Experimentalist School
* Formalist School
* Intuition School
* Skeptic School
* Host School

Each major rival school should have its own inheritance theme.

---

## 11. Rival Character Generation

> 日本語コメント：
> ライバル校の中に、主要ライバル個人を作る。
> それぞれ異なる科学的思考スタイルと勝ちたい理由を持つ女子キャラとして生成する。

Generate PDF-specific rival girls.

Each major rival should embody a distinct intellectual style:

* `calculation_style`
* `intuition_style`
* `experiment_style`
* `skeptical_style`
* `synthesis_style`
* `historical_context_style`
* `modern_research_style`

Each major rival must have:

* name
* school or team
* visual motif
* intellectual style
* strength
* weakness
* emotional motivation
* relationship to protagonist or protagonist team
* signature phrase
* first impression
* hidden vulnerability
* growth moment

Rivals must not be mere quiz enemies.

They should feel like heroines in a tournament ensemble story.

---

## 12. Drama Beat System

> 日本語コメント：
> 「熱いシナリオ」を偶然任せにしない。
> 固定プロットではなく、固定テーマ + 可変背景 + PDF固有の新規ビートで構成する。

Use a flexible drama beat system.

The game must not follow a rigid fixed plot.

Each generated game must include:

* required drama beats
* optional drama beats
* at least one original drama beat specific to the current PDF

Output:

```text
generated/data/drama-beat-plan.json
generated/data/sealed/drama-beat-plan.full.json
```

Required drama functions:

* Outsider Entry
* Genius Contrast
* Strict Pressure
* Gentle Inheritance
* First Recognition
* Rival Demonstration
* Rival School Sympathy
* Scientific Turning Point
* Past Failure Callback
* Team Reinterpretation
* Final Statement

For every generated game, invent at least one original drama beat that is not directly copied from the Drama Beat Pool.

The original beat must:

* be specific to the PDF's content
* connect to the Story Core
* involve at least one protagonist-team relationship or rival relationship
* create emotional pressure, recognition, reversal, inheritance, or scientific tension
* not reveal the key scientific answer before the player clears the required prompts
* be recovered in a later scene or final session

Each major drama beat must include a `content_connection`.

---

## 13. Definition of Emotional Intensity

> 日本語コメント：
> 「熱い」を、叫びや涙や大げさなセリフではなく、圧力・本気の理由・科学的転換点・承認・再挑戦で定義する。

A scene is emotionally intense when:

* each contestant has a personal reason to care about the problem
* the rival's strength is shown respectfully before the protagonist responds
* the protagonist advances through persistence, questions, and careful reasoning rather than sudden genius
* the scientific content itself changes the emotional direction of the scene
* a previous failure, phrase, or concept is later revisited and overcome
* success leads not only to victory, but to recognition, respect, or a changed relationship

Avoid:

* generic shouting unrelated to scientific content
* making rivals foolish
* giving the protagonist sudden unexplained genius
* revealing the key answer before the player clears the prompt
* making every session end in full victory

---

## 14. Tournament Progression and Outcomes

> 日本語コメント：
> 物語は必ず決勝まで進む。
> 途中で負けても、敗者復活・チーム総合点・推薦枠などで決勝へ進める。
> 勝敗は多様化し、負けても意味のある展開にする。

Every generated game should progress to a final match or final session.

Use varied routes:

* undefeated_route
* narrow_qualification
* comeback_route
* repechage_route
* team_score_route
* judge_recommendation_route
* special_challenge_route

Use varied outcomes:

* complete_win
* narrow_win
* meaningful_loss
* relay_success
* unresolved_rivalry

The final match result may use weighted randomness.

Even if the protagonist team loses the final, the ending must provide emotional closure and intellectual growth.

---

## 15. Session Structure

> 日本語コメント：
> 1セッションは複数ラウンド制。
> Foundation Round の前に Official Briefing を必ず入れる。
> 問題は物語の邪魔ではなく、物語を進める条件として機能する。

Each session is divided into several rounds.

Recommended structure:

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

Recommended prompt counts:

* Foundation Round: 5-10 prompts
* Explanation Round: 2-4 prompts
* Transfer Round: 1-2 prompts
* Cross-Examination Round: 1-2 prompts

Do not use a fixed prompt count for every session.

---

## 15A. Future Standard Session Structure

For future scenario regeneration, each session should use this structure unless the user explicitly requests a smaller patch:

1. Long cold open

   * 800-1500 Japanese characters.
   * Set in a venue, clubroom, waiting room, hallway, train, bus, lodging space, or other lived-in place.
   * Include character appearance, gestures, relationship texture, small comedy, and a small punchline.
   * End with a subtle oddity, pressure, or observation that leads naturally into the scientific topic.

2. Title call

   * Show the session title.
   * Show tournament round, opponent school, and scientific theme.

3. Official briefing

   * Short and solemn.
   * State what kind of reasoning will be tested.
   * Do not give the answer.

4. Character banter before problem

   * 4-8 dialogue exchanges.
   * Include a misunderstanding, joke, tease, or tension release.
   * End by handing the question to the player.
   * Do not leak the answer.

5. Problem card

   * Present the prompt clearly.
   * Store formulas as LaTeX where useful.
   * Assume the UI will render formulas rather than showing raw LaTeX forever.

6. Character-specific hints

   * Do not use one generic hint line for every prompt.
   * The protagonist, genius first-year, gentle upperclassman, and strict second-year should hint in different voices.

7. Answer feedback

   * Correct answers trigger a character reaction plus a short formula-based explanation where relevant.
   * Wrong answers trigger a short character-specific reaction and a reason the answer fails.
   * Keep explanations concise.

8. Notebook update

   * Record today's learning.
   * Record the question carried forward.
   * Include a small character reaction or punchline.

This structure is a future generation target. Do not retrofit all existing generated data in an unrelated target.

---

## 16. Prompt and Evaluation Policy

> 日本語コメント：
> MVPはローカル動作なのでAI採点は必須にしない。
> ただし、将来AI採点に差し替えられるように評価器を抽象化する。
> 自由記述だけではなく、機械採点ゲートと回答ロックを組み合わせる。

The MVP must run locally and must not require an AI API.

Use hybrid evaluation:

1. Machine-Graded Gate
2. Open Answer Lock
3. Model Answer / Rubric Reveal
4. Self-Assessment
5. Retry Tracking

All evaluation must go through an evaluator abstraction.

Examples of machine-gradable gates:

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

If the player fails the gate, the model answer for the open-ended part must remain hidden.

If the player views the full answer, mark the prompt as:

* `cleared_with_answer`
* `unresolved`

The player can remove this mark only by answering correctly without viewing the answer.

---

## 16A. Prompt Quality Gate

Before editing or regenerating prompts, check every prompt for:

* whether the prompt can be solved from the prompt text alone
* whether the correct answer is unique enough for the gate type
* whether `gate.answer` / `gate.answers` matches the prompt wording
* whether each wrong option is clearly wrong
* whether required formulas appear in the explanation
* whether LaTeX formulas are intended for UI rendering
* whether pre-problem story text leaks the answer

If a prompt appears invalid, ambiguous, or mismatched with its gate, Codex must stop and ask the user instead of silently rewriting the science.

When explanations need formulas, prefer concise formula-backed explanations over long prose. Example:

```text
E_n = \hbar\omega(n + 1/2), so n = 0 gives E_0 = (1/2)\hbar\omega.
```

Do not use a single generic hint for every prompt. Hints should be character-specific:

* protagonist: honest confusion and a basic question
* genius first-year: compressed, sharp clue
* gentle upperclassman: a soft question that points to the missing assumption
* strict second-year: precise warning about what loses points


## 16B. Strong Multiple-Choice Prompt Policy

New MVP science gate prompts should normally be single-answer, four-option choice questions unless the current target explicitly needs another machine-gradable gate. They must not be simple vocabulary checks.

Weak prompt pattern, forbidden for tournament gates:

```text
What does |psi> represent?
A. state vector
B. probability
C. energy
D. time
```

This only asks whether the player recognizes a term. It is too thin for a science olympiad game.

Strong prompt pattern:

```text
setting -> trap-bearing first step -> four choices -> short formula explanation -> character reaction
```

Good compressed example:

```text
For \( |\psi\rangle=(|0\rangle+i|1\rangle)/\sqrt{2} \), which expression is \( \langle\psi| \)?
A. \( (\langle0|+i\langle1|)/\sqrt{2} \)
B. \( (\langle0|-i\langle1|)/\sqrt{2} \)
C. \( (|0\rangle-i|1\rangle)/\sqrt{2} \)
D. \( (\langle0|+\langle1|)/\sqrt{2} \)
```

The correct answer is B. A forgets complex conjugation, C confuses bra and ket type, and D drops the coefficient structure.

Problem-design references may include public graduate entrance exams, public physics qualifying exams, quantum mechanics concept-inventory or misconception research, standard textbook and lecture-note problems, and the current `source/textbook.pdf`. Do not copy exact wording, numbers, settings, or distinctive phrasing from external references. Extract only abstract design elements: concept target, subproblem order, misconception trap, amount of algebra, physical interpretation, and the decisive first step.

Recommended prompt patterns:

* misconception diagnosis: choose the best correction to a plausible wrong claim
* classification: identify ket, bra, scalar, operator, state, observable, or subsystem object
* changed condition: reuse a familiar shape while changing a condition that invalidates the old shortcut
* counterexample or generalization check: judge whether a character's broad claim is valid
* first-step selection: choose the first useful move before calculation
* equivalence judgment: decide when two expressions represent the same physical state
* type judgment: ask what kind of mathematical object an expression produces
* measurement interpretation: connect a formula to probability, expectation value, or observable meaning
* commutator meaning: distinguish commutativity from equality or zero expectation value
* partial trace / reduced-state judgment: distinguish whole-system and subsystem descriptions

Wrong choices must be purposeful distractors, not random false statements. Prefer common misconceptions such as:

* treating a bra as only a left-facing ket
* forgetting complex conjugation
* confusing inner product and outer product
* confusing scalar and operator
* confusing eigenstate and arbitrary state
* confusing eigenvalue and expectation value
* forgetting normalization
* confusing basis representation and physical state
* treating global phase as a physical difference
* misunderstanding commutativity and simultaneous eigenstates
* treating Hermitian as meaning every matrix element is real
* reusing the previous method after a condition changes
* confusing subsystem state with whole-system state
* treating partial trace as merely deleting an unused label

When the data format allows it, each choice may carry a design-only `distractor_reason` explaining the misconception.

Prompt quality checklist:

* one unique correct answer
* solvable from the prompt text alone
* options have the same type and granularity
* wrong options map to concrete misconceptions
* choices alone do not reveal the answer
* no partly correct distractor unless the question explicitly asks for the best answer
* avoid `all of the above` / `none of the above` by default
* traps test reasoning, not decorative wording
* calculation is short, but conceptual judgment is meaningful
* pre-problem scenario does not leak the answer
* explanation includes the needed formulas
* `gate.answer` / `gate.answers` / `gate.options[].value` align with the prompt

If prompt validity, answer uniqueness, or gate alignment is uncertain, Codex must stop and ask the user instead of silently rewriting the science.

---

## 16C. Explanation, Hint, And Answer Reveal Policy

Explanations should correct misconceptions, not merely restate the answer. The default explanation order is:

1. correct answer
2. one-line takeaway
3. formula check
4. why the correct answer works
5. why the other options fail
6. common misconception
7. connection to the scene joke, trap, or character reaction
8. next point to watch

Formula-backed explanations should be concise. Store formulas as LaTeX and render them later in the UI rather than showing raw source as final player-facing text.

Future answer reveal should prevent player dead-ends without turning the game into a skip button. Use this learning flow:

```text
think first
-> light hint
-> character-specific hint
-> one solution step
-> answer reveal
-> full explanation
-> retry with a similar check
```

Future prompt data may add optional fields such as:

```json
{
  "answer_reveal": {
    "correct_option": "B",
    "short_reason": "Taking the bra requires complex conjugation, so i becomes -i."
  },
  "explanation": {
    "one_line": "A bra is a conjugate transpose, not only a left-facing ket.",
    "formula": [
      "\\[|\\psi\\rangle=\\frac{|0\\rangle+i|1\\rangle}{\\sqrt{2}}\\]",
      "\\[\\langle\\psi|=\\frac{\\langle0|-i\\langle1|}{\\sqrt{2}}\\]"
    ],
    "why_correct": "Coefficients are complex-conjugated when converting ket to bra.",
    "why_wrong": {
      "A": "Forgets complex conjugation.",
      "C": "Keeps the expression as a ket, so the type is wrong.",
      "D": "Drops the coefficient structure."
    },
    "common_misconception": "Judging bra/ket only by visual direction.",
    "story_callback": "Pays off a scene joke about trusting appearances too quickly.",
    "next_focus": "Compare inner products with outer products."
  },
  "cleared_by": "solved | used_hint | revealed_answer"
}
```

`cleared_by` is not a punishment marker. It records whether the player solved independently, used help, or revealed the answer so the notebook can keep the learning state honest.

Hints must not be one generic shared line. Future prompt data should prefer `character_hints` over a single `teammate_whisper`, while keeping the old field as a fallback until the UI migrates.

---

## 17. Story and Prompt Connection

> 日本語コメント：
> 物語と問題は分離しない。
> プレイヤーが答える前に主人公が核心を言ってはいけない。
> 問題突破後に主人公の発言・承認・展開が解放される。

The story must not advance to a breakthrough scene until all required prompts in the session are cleared.

Before player input, the protagonist may:

* hesitate
* notice tension
* ask simple questions
* remember partial clues
* feel pressure from rivals

After player success, the protagonist may:

* explain clearly
* respond to a rival
* connect concepts
* gain confidence
* unlock a story breakthrough

Important insights must occur only after the player clears the relevant prompts.

Prompt setup scenes must not leak the answer. Before the prompt, dialogue may show confusion, pressure, or partial orientation, but must not state the correct conclusion, decisive assumption, final equation step, or hidden turning point.

Retries and answer reveals should be treated as part of the protagonist's learning state. They may create notebook marks or unresolved feelings, but must not punish the player with story failure.

---

## 18. Scenario Data Model

> 日本語コメント：
> シナリオはHTMLに直書きせず、JSONで管理する。
> ブラウザ側はJSONを読み、背景・キャラ・表情・セリフを表示する。

Output:

```text
generated/data/scenario.json
generated/data/sealed/scenario.full.json
```

Recommended scene shape:

```json
{
  "id": "scene_001_opening",
  "title": "Regional Qualifier Opening",
  "background": "regional_hall",
  "characters": ["protagonist", "strict_second_year", "rival_001"],
  "lines": [
    {
      "type": "narration",
      "text": "The regional hall was quieter than she expected."
    },
    {
      "type": "dialogue",
      "speaker": "protagonist",
      "expression": "nervous",
      "text": "I still don't know if I belong here."
    }
  ],
  "next": "session_001_foundation"
}
```

Use visual-novel-style writing.

---

## 19. Notebook / Review System

> 日本語コメント：
> カード収集は主役にしない。
> 代わりに主人公のノートを更新し、学習成果と物語の継承を表現する。

Use a protagonist notebook or review screen.

Notebook entries may include:

* what the protagonist understood
* what still feels unresolved
* phrases from teammates or rivals
* scientific turning points
* previous failure callbacks
* retry prompts
* modern context notes

The notebook should function as:

* review aid
* story record
* inheritance symbol
* retry list

---

## 20. Character Image Policy

> 日本語コメント：
> MVPでも画像生成を入れる。
> ただし、キャラ一貫性が最重要。
> Character Bible と基準画像を使う。

The game should include generated character images in the MVP.

Character consistency is a hard requirement.

Use this pipeline:

1. Character Bible
2. Anchor portrait
3. Standing portrait
4. Expression variants
5. Event illustrations for major emotional scenes only

Do not generate the same character from scratch for every scene.

Character Bible fields must include:

* id
* name
* school
* role
* age impression
* height impression
* body build
* face shape
* hair color
* hair style
* eye color
* signature accessory
* uniform description
* color motif
* personality
* insecurity
* speech style
* reason to compete
* relationship to protagonist

Visual generation must avoid images that are obviously AI-generated.

Aim for the naturalness of a human-drawn bishoujo visual novel standing sprite.

Prioritize:

* clear character readability
* stable silhouette
* consistent face, hair, eyes, uniform structure, and key accessories
* emotionally useful expression variants over sheer image quantity

Avoid:

* excessive saturation
* excessive gloss
* meaningless tiny details
* meaningless accessories
* random ribbons
* inconsistent hair ornaments
* broken hands
* extra fingers
* warped eyes
* asymmetrical pupils
* plastic texture
* AI-like glossy skin
* over-sharpened highlights
* hyper-detailed visual noise

Use this image production order:

1. Character Bible
2. character design sheet
3. base standing sprite
4. expression variants
5. outfit variants only if necessary
6. event illustration only for major scenes

Each character bible should separate:

* `fixed_visual_traits`
* `variable_visual_traits`

When generating variants, preserve:

* hairstyle
* eye shape and eye color
* face outline
* uniform structure
* major accessories
* character-specific silhouette

---

## 21. Browser Game Requirements

> 日本語コメント：
> MVPはローカルで動くブラウザゲーム。
> 複雑なフレームワークより、HTML/CSS/Vanilla JSで確実に動かすことを優先する。

The MVP should use:

* HTML
* CSS
* Vanilla JavaScript

The game must run locally in the browser.

No backend, database, login, or AI API is required for the MVP.

Use `localStorage` for local progress saving.

The app should support:

* title screen
* story scene screen
* prompt / answer screen
* notebook / review screen
* retry list
* character profile screen available during play
* progress persistence

The character profile screen should show spoiler-safe visual identification details, such as:

* name
* school
* grade
* role
* hairstyle
* hair color
* eyes
* uniform
* small accessories
* quick recognition cue

Do not show hidden motivations, decisive relationships, final results, ending routes, or unintroduced spoiler-heavy facts in character profiles.

---

## 21A. ADV UI And Formula Rendering Direction

Future UI work should move away from educational HTML page styling and toward an ADV / visual novel game interface.

Required future UI elements:

* ADV-style text box
* speaker name display
* character standing-sprite area, with placeholders allowed at first
* background panel, using color, gradient, venue name, or simple illustration placeholder if needed
* progress bar
* tournament round, opponent school, and theme display
* problem card
* character-specific hint bubbles
* correct / incorrect feedback panels
* notebook update animation or transition
* LaTeX formula rendering support

Problem cards and explanations may store formulas as LaTeX:

* `\( ... \)`
* `\[ ... \]`
* `$$ ... $$`

Do not treat raw LaTeX strings as the final player-facing display. The browser app should render formulas with MathJax or a similar local-compatible renderer.

Because local execution is important, keep MathJax implementation in the backlog first. If full offline support is required, consider vendoring MathJax under a local vendor directory rather than depending on a CDN.

---

## 22. Spoiler Control and Player-Safe Review

> 日本語コメント：
> 制作者本人がプレイヤーになるため、中間成果物の確認でライバル校・決勝展開・感情的回収をネタバレしすぎないようにする。
> ただし、再現性とGitHubの差分管理を重視するため、ネタバレを含む sealed/ もGit管理対象にする。

Supported spoiler modes:

* `full`
* `safe`
* `blind`

Recommended normal mode:

```text
spoiler_mode: safe
```

When `spoiler_mode` is `safe`, generate full intermediate artifacts internally, but expose only spoiler-safe summaries for review.

Hide:

* rival backstory twists
* exact rival emotional reveals
* original drama beat payoff
* final match result
* final scientific turning point
* ending route
* hidden rival motivations
* decisive scene dialogue

Show:

* source coverage quality
* whether rival schools have serious arcs
* whether rival schools have inheritance themes
* whether drama beats have content connections
* whether the final session synthesizes the PDF
* warnings and missing elements
* technical implementation status

Spoiler-safe review files must be written under:

```text
generated/data/public-review/
```

Spoiler-heavy artifacts must be written under:

```text
generated/data/sealed/
```

Files under `generated/data/sealed/` must include or be accompanied by a warning:

```text
Do not open unless you want story spoilers.
```

The generator must create:

```text
generated/data/sealed/README.md
```

Unlike source PDFs, `generated/data/sealed/` should be tracked by Git by default.

---

## 23. Required Output Files

> 日本語コメント：
> Codexが最終的に何を出力すべきかを明示する。
> コード・データ・画像・ログを分けて保存する。

Required generated structure:

```text
generated/
├── index.html
├── styles.css
├── README.md
├── src/
│   ├── main.js
│   ├── state.js
│   ├── engine.js
│   ├── evaluator.js
│   ├── renderer.js
│   └── storage.js
└── data/
    ├── metadata.json
    ├── knowledge-map.json
    ├── source-refs.json
    ├── story-core.json
    ├── drama-beat-plan.json
    ├── rival-school-arcs.json
    ├── session-plan.json
    ├── prompts.json
    ├── scenario.json
    ├── characters.json
    ├── public-review/
    │   ├── spoiler-safe-report.md
    │   ├── coverage-report.json
    │   └── qa-summary.json
    └── sealed/
        ├── README.md
        ├── rival-school-arcs.full.json
        ├── drama-beat-plan.full.json
        ├── session-plan.full.json
        ├── scenario.full.json
        ├── ending-plan.json
        └── final-result-plan.json
```

Required additional files:

```text
characters/base-team.json
characters/rivals.json
notes/generation-log.md
notes/design-backlog.md
```

---

## 24. Regeneration Policy

> 日本語コメント：
> PDFごとに作り直す方針だが、常に全部を再生成すると不便。
> シナリオだけ、画像だけ、アプリだけなど、部分再生成できるようにする。

Supported regeneration targets:

* `all`
* `spec`
* `update_prompt_answer_quality_spec`
* `knowledge`
* `story`
* `story_japanese`
* `sessions`
* `scenario`
* `characters`
* `character_ui`
* `assets`
* `app`
* `qa`

Usage reduction rules:

* Do not use `regen_target: all` by default.
* Use only one `regen_target` per Codex execution.
* Prefer small, reviewable changes over broad regeneration.
* Do not mix PDF rereading, scenario rewriting, image generation, and browser implementation in the same execution.
* Do not run Browser Agent or automated browser verification as part of normal generation.
* The user performs real browser QA manually by opening `generated/index.html`.
* Do not overwrite existing generated files without checking current state first.
* Do not overwrite any file marked with `manual_locked: true`.
* Normal reports must remain spoiler-safe.

Stop instead of continuing autonomously when:

* mapping between existing structure and the requested target is ambiguous
* editing `generated/` would be needed during a spec/backlog-only target
* implementation work starts to become necessary
* session prose regeneration becomes tempting during a planning-only target
* prompt correctness is uncertain
* extra research or PDF rereading would be needed
* the work appears likely to exceed 5 minutes
* editing a non-allowed file appears necessary

When stopping, report only:

* stopping reason
* relevant file
* ambiguity
* option A
* option B
* recommendation
* question for the user

Recommended target order:

1. `regen_target: spec`
2. `regen_target: knowledge`
3. `regen_target: story_japanese`
4. `regen_target: character_ui`
5. `regen_target: assets`
6. `regen_target: qa`

Avoid overwriting manually reviewed files unless explicitly requested.

If a generated data file contains:

```json
{
  "_meta": {
    "manual_locked": true
  }
}
```

the generator must not overwrite it unless explicitly requested.

---

## 25. GitHub Repository Policy

> 日本語コメント：
> このプロジェクトはGitHubで管理する。
> 教材PDFは著作権やサイズの都合があるため、原則としてGit管理しない。
> 一方、sealed/ はネタバレを含むが、再現性と差分管理のためGit管理対象にする。

Track:

* `spec.md`
* `README.md`
* `.gitignore`
* `docs/*.md`
* `context/references.md`
* `characters/*.json`
* `generated/data/*.json`
* `generated/data/public-review/*`
* `generated/data/sealed/*`
* `generated/src/*.js`
* `generated/index.html`
* `generated/styles.css`
* `notes/generation-log.md`
* `notes/design-backlog.md`

Do not track source PDFs by default.

Ignore:

```text
source/*.pdf
```

Do not ignore:

```text
generated/data/sealed/
```

Sealed spoiler artifacts are intentionally tracked.

---

## 26. QA Checklist

> 日本語コメント：
> 生成後に自己検査する。
> 特に「PDF内容と物語が対応しているか」「問題突破後に熱い展開が出るか」「他校にも応援したくなる物語があるか」「ネタバレ制御が守られているか」を確認する。

Run QA for:

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

## 27. WBS

> 日本語コメント：
> Codexに実際の作業順序を与える。
> 大きな作業を段階分けし、中間成果物を残しながら進める。

### Phase 1: Source Analysis

* Read `source/textbook.pdf`.
* Read optional `context/references.md`.
* Generate `knowledge-map.json`.
* Generate `source-refs.json`.

### Phase 2: Story Planning

* Generate `story-core.json`.
* Generate `drama-beat-plan.json`.
* Generate `rival-school-arcs.json`.
* Invent at least one original PDF-specific drama beat.

### Phase 3: Session and Prompt Planning

* Generate `session-plan.json`.
* Generate `prompts.json`.
* Insert Official Briefing before each Foundation Round.
* Add machine-gradable gates.
* Add open-answer prompts.
* Add retry tracking.

### Phase 4: Scenario Drafting

* Generate `scenario.json`.
* Generate sealed full scenario if spoiler control is enabled.
* Keep key insights locked behind prompts.
* Ensure final session synthesizes the PDF.

### Phase 5: Character and Asset Planning

* Load or generate `characters/base-team.json`.
* Generate PDF-specific rivals.
* Generate rival school arcs.
* Generate Character Bibles.
* Generate or plan anchor portraits and expression variants.

### Phase 6: Browser Game Implementation

* Generate local browser game under `generated/`.
* Use HTML, CSS, and Vanilla JavaScript.
* Implement scenario rendering.
* Implement prompt rendering.
* Implement evaluator abstraction.
* Implement localStorage persistence.

### Phase 7: Spoiler-Safe Review Output

* Generate `public-review/spoiler-safe-report.md`.
* Generate `coverage-report.json`.
* Generate `qa-summary.json`.
* Generate sealed artifacts under `generated/data/sealed/`.

### Phase 8: QA and Logging

* Run QA.
* Write results to `notes/generation-log.md`.

---

## 28. Final Instruction to Generator

> 日本語コメント：
> Codexが迷ったときの優先順位。
> 最優先は「続きが読みたい」こと。
> ただし、PDF理解との対応を崩してはいけない。

When uncertain, prioritize in this order:

1. The story must make the player want to continue.
2. The story must be grounded in the source PDF.
3. Scientific prompts must unlock meaningful narrative progression.
4. The protagonist must grow through persistence and questioning, not sudden genius.
5. Rival schools must be sympathetic, heavy, and worthy of support.
6. Official Briefings must help the player prepare without giving away answers.
7. Character consistency is more important than image quantity.
8. Spoiler-safe review must preserve the player's story experience.
9. The game must run locally and remain simple.
10. Intermediate artifacts must be saved for review and regeneration.

Do not produce a generic quiz app.

Do not produce a story that merely decorates unrelated questions.

The correct target is:

```text
A local bishoujo visual-novel-style science olympiad scenario game where clearing PDF-derived learning prompts unlocks emotionally intense tournament story progression, including protagonist-team growth, rival-school arcs, inheritance, and scientific turning points.
```
