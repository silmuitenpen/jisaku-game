# Prompt Quality Workpack: Session 1

Purpose: redesign the seven existing session 1 prompts into stronger four-choice science olympiad style prompts in a later pass.

Scope:

* Target session: `session_01`
* Source data read only:
  * `generated/data/prompts.json`
  * `generated/data/scenario.json`
  * `generated/data/session-plan.json`
  * `notes/workpacks/story_japanese_session_1.md`
  * `notes/workpacks/story_japanese_session_1_rewrite.md`
* Do not edit existing generated JSON in this workpack.
* Do not finalize new prompt prose here.
* Do not expose sealed spoiler content.

Design constraints for the next rewrite pass:

* Keep `id`, `session_id`, and `source_refs`.
* Preserve current `gate.answer` / `gate.answers` where possible by assigning the correct option the same answer value.
* If preserving the current gate value is unnatural, mark the prompt as `要確認`.
* Do not leak the answer in pre-problem banter.
* Use LaTeX as stored text; UI rendering belongs to a later target.

## Session Context

Session title: `Qualifier: The Space Before the Answer`

Current safe story direction:

* The official briefing frames session 1 as a test of quantum-mechanics language.
* The team must name spaces, bases, operators, and subsystem assumptions before rushing.
* A recurring safe motif is: short answers are dangerous when the reason is missing.
* Rival pressure should reinforce precision under time pressure without exposing hidden arc details.

## Prompt: `p01_ket`

### prompt_id

`p01_ket`

### current_summary

* Current question: Dirac notation `|\psi\rangle` is called what kind of vector.
* Current gate: `term_blank`
* Current correct values: `ket`, `ket vector`
* Current open answer: explain why a ket alone is not a measurement result.
* Current explanation: a ket is a state vector in Hilbert space; measurement results require an observable and probabilities.
* Current hint: start with the name, then do not let the meaning escape.

### current_problem_issues

* Too close to terminology recall.
* The machine gate only checks naming, while the interesting concept is state versus measurement.
* No distractors tied to typical misconceptions.
* Formula support is minimal.
* The hint is story-flavored but not a strong conceptual hint.
* As a tournament problem, it lacks a trap or decision point.

### target_concept

Bra/ket notation, state vector as an element of Hilbert space, and the distinction between a state and a measurement result.

### recommended_problem_type

分類型, with a measurement-interpretation trap.

### wrong_intuition

The player may treat `|\psi\rangle` as an answer, probability, measurement value, or ordinary number because it appears as a compact symbol.

### proposed_question_direction

Ask the player to classify what `|\psi\rangle` is and what it is not, using a short setting where another team treats the symbol as if it already gives an observed value. The correct choice should say that it is a ket/state vector in Hilbert space; measurement probabilities require choosing an observable or measurement basis.

Do not write the final question yet. The second-draft writer should turn this into a compact four-choice problem with one small trap: "name alone" versus "measurement meaning."

### option_design

Preferred correct value to preserve: `ket`

| slot | value | role | intended_content | distractor_reason |
| --- | --- | --- | --- | --- |
| A | `probability` | distractor | "`|\psi\rangle` is already the probability of an outcome." | Confuses state vector with measurement probability. |
| B | `ket` | correct | "`|\psi\rangle` is a ket, a state vector in Hilbert space; measurement meaning comes after specifying an observable/basis." | Correct value preserves current `gate.answers[0]`. |
| C | `operator` | distractor | "`|\psi\rangle` is an observable/operator that acts on states." | Confuses state with operator. |
| D | `eigenvalue` | distractor | "`|\psi\rangle` is the value obtained after measurement." | Confuses state with possible measurement result. |

### answer_reveal_design

* correct_option: `ket`
* short_reason: `|\psi\rangle` is a state vector; probabilities or values appear only after a measurement setting is specified.

### explanation_design

* one_line: A ket names a state, not the measurement result itself.
* formula_needed: show state membership and one probability formula.
* why_correct: The ket is an element of the system Hilbert space, and outcome probabilities depend on projecting it onto a measurement basis.
* why_wrong_options: Probability, operator, and eigenvalue are different mathematical or physical objects.
* common_misconception: Compact notation makes the state look like a ready-made answer.
* story_callback_hint: Connect to Haru saying she will name what she does not understand before running.
* next_focus: Distinguish ket, bra, scalar inner product, and operator outer product.

### formula_explanation

* `\( |\psi\rangle \in \mathcal{H} \)`
* `\( P(a)=|\langle a|\psi\rangle|^2 \)` after choosing a measurement basis.

### character_hints_design

* 主人公: "名前は分かっても、まだ何を測ったかが決まっていない" 方向の素直な疑問。
* 天才一年: 記号の型を見るように促す。短く、状態と数を切る。
* 穏やかな先輩: "それはどこに住んでいる記号かな" という空間への問い。
* 厳しい二年生: 測定結果と状態を混ぜると減点、という採点目線の警告。

### scenario_gag_hook

* wrong_intuition と同型の日常ギャグ: 名札を見ただけで本人の今日の得点まで分かった気になる。
* gag_reference_type: 名札/受付票の見間違い。
* character_owner: 主人公。
* problem_turn: 問題直前の軽い掛け合い。
* callback: 正解後、「名札は本人そのものではなく、まして得点表でもない」と回収する。

### rewrite_request_for_chatgpt

`p01_ket` を、単なる用語確認ではなく「ket/state vector と measurement result を混同しない」強い4択にする。正解値はできれば `ket` を保ち、誤答は probability/operator/eigenvalue の混同に割り当てる。問題前の会話では答えを言わない。

## Prompt: `p02_hermitian`

### prompt_id

`p02_hermitian`

### current_summary

* Current question: true/false: eigenvalues of a Hermitian operator representing an observable are real.
* Current gate: `true_false`
* Current correct value: `true`
* Current open answer: explain why the round cares about observables being Hermitian.
* Current explanation: Hermitian operators have real eigenvalues, which can be interpreted as measurement values.
* Current hint: it is not about a pretty formula, but about values that are safe to measure.

### current_problem_issues

* True/false is too shallow for the intended concept.
* The current prompt does not test the difference between eigenvalue, expectation value, and arbitrary state.
* It does not expose the common misconception that Hermitian means "all entries are real."
* No distractor design exists.
* Formula support is too light.

### target_concept

Hermitian operators, real eigenvalues, real expectation values, and the distinction between arbitrary states and eigenstates.

### recommended_problem_type

反例型 or 測定解釈型.

### wrong_intuition

The player may think Hermitian means every matrix entry is real, or that applying a Hermitian operator to any state automatically returns a measurement eigenvalue.

### proposed_question_direction

Use a plausible rival or teammate claim: "If an operator is Hermitian, any state you plug in just gives a real eigenvalue." Ask for the best correction. The correct option should distinguish eigenvalues/eigenstates from expectation values while preserving the real-measurement motivation.

Do not finalize wording here. This needs a later prompt rewrite because the current true/false gate value does not naturally map to a four-choice answer value.

### option_design

要確認：現在の `gate.answer` は boolean `true` であり、強い4択に移す場合、現在の `gate.answer` を保つと問題設計が不自然になる可能性あり。

| slot | value | role | intended_content | distractor_reason |
| --- | --- | --- | --- | --- |
| A | `real_entries_only` | distractor | "Hermitian means every matrix component is real." | Confuses Hermitian with real symmetric matrices. |
| B | `eigenvalues_real` | correct | "Hermitian observables have real eigenvalues; arbitrary states give expectation values, while eigenvalues arise on eigenstates." | Stronger correct content, but does not preserve boolean `true`. |
| C | `all_states_eigenstates` | distractor | "Every state becomes an eigenstate of a Hermitian operator." | Confuses arbitrary state with eigenstate. |
| D | `expectation_complex` | distractor | "Hermitian expectation values are generally complex." | Reverses the key measurement property. |

### answer_reveal_design

* correct_option: `eigenvalues_real`
* short_reason: Hermitian observables have real eigenvalues, but an arbitrary state is not automatically an eigenstate.

### explanation_design

* one_line: Hermitian guarantees real measurement values, not that every vector is already an eigenvector.
* formula_needed: show `A=A^\dagger`, eigenvalue equation, and expectation value reality.
* why_correct: Eigenvalues of a Hermitian operator are real; expectation values in normalized states are also real.
* why_wrong_options: Real entries are not required in every basis; arbitrary states are not automatically eigenstates; Hermitian expectation values are not generally complex.
* common_misconception: "Hermitian" gets flattened into "real-looking matrix."
* story_callback_hint: Connect to a joke about judging a team only by its neatly aligned uniforms.
* next_focus: Separate eigenvalue equations from expectation values.

### formula_explanation

* `\( A=A^\dagger \)`
* `\( A|a_n\rangle=a_n|a_n\rangle,\quad a_n\in\mathbb{R} \)`
* `\( \langle\psi|A|\psi\rangle\in\mathbb{R} \)` for Hermitian `\(A\)` and normalized `\(|\psi\rangle\)`.

### character_hints_design

* 主人公: "実数が出るのは分かる気がするけど、どの状態でも固有値になるのかな" という迷い。
* 天才一年: 固有状態と任意状態を分けろ、と短く切る。
* 穏やかな先輩: 測ったときに出る値と、平均として計算する値の違いを考えさせる。
* 厳しい二年生: "エルミート=全部実数" と書くと落ちる、という警告。

### scenario_gag_hook

* wrong_intuition と同型の日常ギャグ: 制服がきれいにそろっているから全員同じ性格だと決めつける。
* gag_reference_type: 制服/整列/見た目判断。
* character_owner: 厳しい二年生。
* problem_turn: 公式ブリーフィング後の緊張緩和。
* callback: 見た目の整い方と、実際に測って出る性質は違うと回収する。

### rewrite_request_for_chatgpt

`p02_hermitian` を true/false から、Hermitian・実固有値・期待値・固有状態の違いを問う強い4択へ設計する。現在の boolean gate は4択に不向きなので要確認扱い。誤答は「全成分が実数」「任意状態が固有状態」「期待値が複素数」を使う。

## Prompt: `p03_commutator`

### prompt_id

`p03_commutator`

### current_summary

* Current question: fill the blank in `[a, a^\dagger] = __`.
* Current gate: `formula_blank`
* Current correct values: `1`, `I`, `identity`
* Current open answer: explain what premature assumption this commutation relation warns against.
* Current explanation: `a` and `a^\dagger` do not commute like ordinary numbers; order matters.
* Current hint: do not drop the order; it is part of the answer.

### current_problem_issues

* It is mostly recall of a standard identity.
* It does not force the player to distinguish `aa^\dagger` from `a^\dagger a`.
* Distractors are not explicit.
* Formula explanation should show why the sign/order matters.
* The current form can be answered by memorization without understanding.

### target_concept

Commutator definition, noncommutativity, and the specific oscillator relation `\([a,a^\dagger]=1\)`.

### recommended_problem_type

一手選択型.

### wrong_intuition

The player may treat `a` and `a^\dagger` like ordinary algebraic letters and cancel or reorder them freely.

### proposed_question_direction

Give a short line where another answer swaps `a` and `a^\dagger` as if they commute. Ask which correction is the right first move or which relation must be used before simplifying. This keeps the answer short but forces the noncommuting-order idea.

### option_design

Preferred correct value to preserve: `1`

| slot | value | role | intended_content | distractor_reason |
| --- | --- | --- | --- | --- |
| A | `0` | distractor | "`[a,a^\dagger]=0`, so they commute." | Treats operators as ordinary variables. |
| B | `1` | correct | "`[a,a^\dagger]=1`, so order cannot be ignored." | Preserves current answer value. |
| C | `-1` | distractor | "The sign is reversed." | Uses `[a^\dagger,a]` instead of `[a,a^\dagger]`. |
| D | `a^dagger a` | distractor | "The commutator is just the number operator." | Confuses commutator with one ordered product. |

### answer_reveal_design

* correct_option: `1`
* short_reason: The oscillator ladder operators satisfy `\([a,a^\dagger]=1\)`, so their order changes the result.

### explanation_design

* one_line: The order of ladder operators is part of the physics.
* formula_needed: commutator definition and oscillator relation.
* why_correct: `aa^\dagger-a^\dagger a=1`, not zero.
* why_wrong_options: Zero assumes commutativity; `-1` reverses the order; `a^\dagger a` is the number operator, not the commutator.
* common_misconception: Operators are manipulated like ordinary letters.
* story_callback_hint: Connect to a gag where two people swapping seats is not "the same arrangement" to the strict senior.
* next_focus: Use operator order when deriving energy levels.

### formula_explanation

* `\( [A,B]=AB-BA \)`
* `\( [a,a^\dagger]=aa^\dagger-a^\dagger a=1 \)`
* `\( [a^\dagger,a]=-1 \)`

### character_hints_design

* 主人公: "順番を入れ替えたら、同じに見えて同じじゃないのかな" という疑問。
* 天才一年: `AB-BA` を見ろ、と最短で促す。
* 穏やかな先輩: どちらを先に作用させるかを考えさせる。
* 厳しい二年生: 順序を落とす答案は一発で減点、という警告。

### scenario_gag_hook

* wrong_intuition と同型の日常ギャグ: 座席順を入れ替えても同じ集合だからいい、と主人公が言いかけて実里に止められる。
* gag_reference_type: 席順/整列順。
* character_owner: 厳しい二年生。
* problem_turn: 調和振動子の問題に入る直前。
* callback: "同じ二人でも順番が違えば意味が違う" と式の順序へつなげる。

### rewrite_request_for_chatgpt

`p03_commutator` を、単なる空欄補充ではなく「演算子の順序を普通の文字式として扱わない」4択にする。正解値は `1` を保つ。誤答は `0`, `-1`, `a^\dagger a` に対応する誤解として設計する。

## Prompt: `p04_ground_energy`

### prompt_id

`p04_ground_energy`

### current_summary

* Current question: ground-state energy of the harmonic oscillator is what multiple of `\(\hbar\omega\)`.
* Current gate: `numeric`
* Current correct value: `0.5`
* Current open answer: explain why the ground-state energy is not zero.
* Current explanation: `\(E_n=\hbar\omega(n+1/2)\)`, so `\(E_0=(1/2)\hbar\omega\)`, the zero-point energy.
* Current hint: even the quietest state has a shape that cannot be erased.

### current_problem_issues

* Numeric answer is short and can be guessed from memorization.
* The current gate does not test why zero is wrong.
* Distractors are absent.
* It should connect to the ladder-operator structure from the previous prompt.
* Formula explanation exists but should be placed directly in answer feedback.

### target_concept

Quantum harmonic oscillator spectrum and zero-point energy.

### recommended_problem_type

条件変更型.

### wrong_intuition

The player may import the classical intuition that the lowest energy should be zero at the bottom of the potential.

### proposed_question_direction

Present a scoreboard-style situation: the classical-looking minimum tempts the team to answer zero, but the quantum formula has the `1/2` offset. Ask which coefficient of `\(\hbar\omega\)` belongs to the ground state and why the zero answer fails.

### option_design

Preferred correct value to preserve: `0.5`

| slot | value | role | intended_content | distractor_reason |
| --- | --- | --- | --- | --- |
| A | `0` | distractor | "Ground state means zero energy." | Classical minimum intuition; ignores zero-point energy. |
| B | `0.5` | correct | "`\(E_0=(1/2)\hbar\omega\)`." | Preserves current numeric answer. |
| C | `1` | distractor | "The first quantum level is one full `\(\hbar\omega\)`." | Confuses spacing with ground offset. |
| D | `n` | distractor | "The answer is just the quantum number `n`." | Confuses level label with energy coefficient. |

### answer_reveal_design

* correct_option: `0.5`
* short_reason: Put `\(n=0\)` into `\(E_n=\hbar\omega(n+1/2)\)`.

### explanation_design

* one_line: Quantum ground state does not mean zero energy.
* formula_needed: harmonic oscillator spectrum.
* why_correct: The `1/2` offset remains when `n=0`.
* why_wrong_options: `0` is classical intuition; `1` is level spacing confusion; `n` is only the label.
* common_misconception: Lowest possible state means all energy vanishes.
* story_callback_hint: Connect to a gag about "quietest person in the room" still making tiny pencil noises.
* next_focus: Connect the energy ladder to creation and annihilation operators.

### formula_explanation

* `\( E_n=\hbar\omega\left(n+\frac{1}{2}\right) \)`
* `\( E_0=\frac{1}{2}\hbar\omega \)`

### character_hints_design

* 主人公: "一番下ならゼロって言いたくなるけど、式にまだ半分残ってる" 方向。
* 天才一年: `n=0` を代入して終わり、と鋭く促す。
* 穏やかな先輩: 静かさとゼロは同じではない、と問いを渡す。
* 厳しい二年生: 古典的な底と量子の基底を混ぜるな、という警告。

### scenario_gag_hook

* wrong_intuition と同型の日常ギャグ: "一番静かな人" を決めるはずが、全員のペン先が少しずつ鳴っている。
* gag_reference_type: 静寂/ペン音/会場の空気。
* character_owner: 穏やかな先輩。
* problem_turn: 前問の順序ミス注意から、調和振動子のエネルギーへ切り替わる場面。
* callback: "静かでもゼロではない" を零点エネルギーの短い解説へ戻す。

### rewrite_request_for_chatgpt

`p04_ground_energy` を、古典的なゼロ直感を罠にした4択へ設計する。正解値は `0.5` を保つ。式 `E_n=\hbar\omega(n+1/2)` を解説に必ず入れ、誤答は `0`, `1`, `n` の混同として整理する。

## Prompt: `p05_density_pure`

### prompt_id

`p05_density_pure`

### current_summary

* Current question: for pure-state density operator `\(\rho=|\psi\rangle\langle\psi|\)`, fill `\(\rho^2=__\)`.
* Current gate: `term_blank`
* Current correct values: `rho`, `ρ`
* Current open answer: explain what changes for mixed states or reduced subsystem states.
* Current explanation: pure-state density operators are idempotent; mixed or reduced density operators generally are not.
* Current hint: look at what the expression returns to after being multiplied twice.

### current_problem_issues

* It is close to formula recall.
* It does not force the normalization assumption.
* Distractors are absent.
* It should expose the difference between pure, mixed, and reduced states more sharply.
* Formula explanation should show the multiplication step.

### target_concept

Density operator for a pure state and idempotency `\(\rho^2=\rho\)` under normalization.

### recommended_problem_type

条件変更型.

### wrong_intuition

The player may treat any density operator like a pure-state projector, or forget that `\(\langle\psi|\psi\rangle=1\)` is needed for the simple idempotency calculation.

### proposed_question_direction

Frame the question around a teammate who squares `\(\rho\)` and either turns it into `1`, leaves it as a generic mixed state, or forgets the inner product step. Ask which result is valid for a normalized pure state and why it would fail for a generic mixed/reduced state.

### option_design

Preferred correct value to preserve: `rho`

| slot | value | role | intended_content | distractor_reason |
| --- | --- | --- | --- | --- |
| A | `1` | distractor | "`\(\rho^2=1\)` because projectors are like identity." | Confuses a rank-one projector with the identity. |
| B | `rho` | correct | "`\(\rho^2=\rho\)` for a normalized pure state." | Preserves current answer value. |
| C | `trace_rho` | distractor | "`\(\rho^2=\mathrm{Tr}(\rho)\)`." | Confuses trace condition with operator equality. |
| D | `mixed_state` | distractor | "Squaring always turns it into a mixed state." | Confuses purity test with state evolution. |

### answer_reveal_design

* correct_option: `rho`
* short_reason: For a normalized pure state, `\(\rho^2=|\psi\rangle\langle\psi|\psi\rangle\langle\psi|=\rho\)`.

### explanation_design

* one_line: Pure-state density operators are projectors, so squaring returns the same operator.
* formula_needed: projector multiplication and normalization.
* why_correct: The middle inner product is `1` for a normalized state.
* why_wrong_options: Identity, trace, and mixed-state claims confuse different properties.
* common_misconception: Every density operator behaves like a pure projector.
* story_callback_hint: Connect to a gag about copying a notebook page twice and expecting it to become the whole notebook.
* next_focus: Use `\(\mathrm{Tr}(\rho^2)\)` to distinguish pure and mixed states.

### formula_explanation

* `\( \rho=|\psi\rangle\langle\psi| \)`
* `\( \rho^2=|\psi\rangle\langle\psi|\psi\rangle\langle\psi|=|\psi\rangle\langle\psi|=\rho \)` when `\( \langle\psi|\psi\rangle=1 \)`.

### character_hints_design

* 主人公: "真ん中の `\(\langle\psi|\psi\rangle\)` は何になるんだろう" と止まる。
* 天才一年: 正規化を見ろ、と短く指す。
* 穏やかな先輩: 二回重ねても同じものに戻る条件を考えさせる。
* 厳しい二年生: 純粋状態の話を混合状態へ勝手に広げるな、という警告。

### scenario_gag_hook

* wrong_intuition と同型の日常ギャグ: 同じプリントを二枚重ねたら情報量も二倍になる、と主人公が言いかける。
* gag_reference_type: プリント/ノート/コピー。
* character_owner: 主人公。
* problem_turn: 説明ラウンド前。
* callback: 二回かけても同じに戻るものと、増えるものは違うと回収する。

### rewrite_request_for_chatgpt

`p05_density_pure` を、純粋状態の密度演算子の冪等性を問う4択へ設計する。正解値は `rho` を保つ。正規化条件と `\rho^2=\rho` の式変形を解説に含め、混合状態との混同を誤答にする。

## Prompt: `p05_transfer_basis_change`

### prompt_id

`p05_transfer_basis_change`

### current_summary

* Current question: when rewriting a state from one basis to another, what kind of matrix transforms the components.
* Current gate: `short_keyword`
* Current correct values: `transformation matrix`, `unitary transformation`, `unitary matrix`
* Current open answer: explain why changing basis preserves the state but changes coordinates/components.
* Current explanation: the physical state remains the same; components change via a transformation matrix, often unitary for orthonormal bases.
* Current hint: coordinates move, but do not decide the state itself moved.

### current_problem_issues

* It asks for a name rather than a decision.
* It does not test basis representation versus physical state.
* Distractors are absent.
* It should connect to measurement in a changed basis.
* Formula explanation should show component transformation.

### target_concept

Basis change, unitary transformation, and distinction between state and coordinates/components.

### recommended_problem_type

一手選択型 or 等価性判定型.

### wrong_intuition

The player may think changing coordinates changes the physical state, or that measurement in a new basis can be handled by taking absolute values in the old basis.

### proposed_question_direction

Use a transfer challenge: the state is written in one basis, but the match asks about another basis. Ask for the correct first move. The correct choice should be to transform/re-expand the components using a change-of-basis matrix, unitary for orthonormal quantum bases.

### option_design

Preferred correct value to preserve: `unitary matrix`

| slot | value | role | intended_content | distractor_reason |
| --- | --- | --- | --- | --- |
| A | `unitary matrix` | correct | "Use a unitary change-of-basis matrix to rewrite the components while preserving the state." | Preserves one current correct answer value. |
| B | `absolute values` | distractor | "Replace all coefficients by absolute values." | Confuses probabilities with amplitudes/components. |
| C | `state changes` | distractor | "The physical state becomes a different state whenever the basis changes." | Confuses representation with object. |
| D | `hamiltonian diagonalization` | distractor | "Always diagonalize the Hamiltonian first." | Imports an unrelated procedure. |

### answer_reveal_design

* correct_option: `unitary matrix`
* short_reason: A basis change rewrites components; for orthonormal quantum bases the transformation is unitary.

### explanation_design

* one_line: Coordinates change; the state does not have to.
* formula_needed: component transformation under unitary change of basis.
* why_correct: A unitary matrix preserves inner products and probabilities while changing representation.
* why_wrong_options: Absolute values lose phase; state-change wording confuses representation; Hamiltonian diagonalization is not always the first move.
* common_misconception: A different coordinate list means a different physical state.
* story_callback_hint: Connect to a gag about changing seating charts without changing the students.
* next_focus: Measurement probabilities depend on components in the measurement basis.

### formula_explanation

* `\( |\psi\rangle=\sum_i c_i|e_i\rangle=\sum_j c'_j|f_j\rangle \)`
* `\( \mathbf{c}'=U^\dagger\mathbf{c} \)` for a unitary basis transformation convention.
* `\( U^\dagger U=I \)`

### character_hints_design

* 主人公: "座席表を変えたら本人まで変わるのかな" という日常疑問で入る。
* 天才一年: 状態と成分を切れ、と短く促す。
* 穏やかな先輩: 何が同じで、何が書き換わったのかを問いにする。
* 厳しい二年生: 位相や基底を落とすと別問題になる、という警告。

### scenario_gag_hook

* wrong_intuition と同型の日常ギャグ: 席替え表を見て、主人公が人格まで入れ替わったように扱ってしまう。
* gag_reference_type: 席替え/座標表。
* character_owner: 天才一年。
* problem_turn: 転用ラウンド導入。
* callback: 席順は変わるが本人は同じ、というギャグを基底変換へ戻す。

### rewrite_request_for_chatgpt

`p05_transfer_basis_change` を、基底変換で「状態そのもの」と「成分」がどう違うかを問う4択へ設計する。正解値は `unitary matrix` を優先して保つ。誤答は絶対値化、状態そのものが変わる、無関係な対角化にする。

## Prompt: `p06_partial_trace`

### prompt_id

`p06_partial_trace`

### current_summary

* Current question: what operation obtains one subsystem density operator by tracing over the other subsystem.
* Current gate: `short_keyword`
* Current correct values: `partial trace`, `trace over`, `reduced trace`
* Current open answer: explain why ignoring this operation loses points.
* Current explanation: if the ignored subsystem is entangled, the subsystem is described by a reduced density operator, obtained by partial trace.
* Current hint: do not treat what is unseen as nonexistent.

### current_problem_issues

* It is mainly a name recall question.
* It should force the player to distinguish whole-system state from subsystem state.
* Distractors are absent.
* It should make "deleting labels" an explicit wrong intuition.
* Formula explanation should show trace-over notation.

### target_concept

Partial trace, reduced density operator, and subsystem description for composite systems.

### recommended_problem_type

一手選択型, with measurement-interpretation framing.

### wrong_intuition

The player may think obtaining subsystem `A` simply means erasing the `B` label, selecting the `A` coefficients by eye, or treating the whole pure state as a pure state of the subsystem.

### proposed_question_direction

Use a cross-examination setup: the team sees a bipartite density operator and must describe subsystem `A` only. Ask which operation is legitimate. The correct option should be partial trace over `B`, and the wrong options should map to label deletion, full trace, coefficient picking, and pure-state overclaim.

### option_design

Preferred correct value to preserve: `partial trace`

| slot | value | role | intended_content | distractor_reason |
| --- | --- | --- | --- | --- |
| A | `delete label` | distractor | "Erase the `B` label and keep the rest." | Treats partial trace as text editing. |
| B | `partial trace` | correct | "Take the partial trace over the unobserved subsystem." | Preserves current answer value. |
| C | `full trace` | distractor | "Trace over the whole density operator." | Produces a scalar normalization, not a subsystem state. |
| D | `pure ket` | distractor | "Use the original composite ket as subsystem `A`'s pure state." | Confuses whole-system and subsystem states. |

### answer_reveal_design

* correct_option: `partial trace`
* short_reason: To describe subsystem `A`, trace over the unobserved subsystem `B`.

### explanation_design

* one_line: Unseen does not mean nonexistent; it must be traced out.
* formula_needed: reduced density operator definition.
* why_correct: The reduced state keeps all effects of correlations with `B` that matter for `A`.
* why_wrong_options: Deleting labels is not an operation; full trace gives a scalar; the whole pure state is not generally a pure state for `A`.
* common_misconception: Partial trace is mistaken for throwing away a label.
* story_callback_hint: Connect to a gag about leaving a teammate out of the seating chart but still being affected by their bag on the chair.
* next_focus: Distinguish pure composite states from mixed reduced states.

### formula_explanation

* `\( \rho_A=\mathrm{Tr}_B(\rho_{AB}) \)`
* `\( \rho_{AB}=|\Psi\rangle_{AB}\langle\Psi| \)`
* In entangled cases, `\(\rho_A\)` need not be a pure-state projector.

### character_hints_design

* 主人公: "見ていないなら消していい、とは違うんだよね" と不安に気づく。
* 天才一年: 消すな、跡を取れ、と短く指示する。
* 穏やかな先輩: 見ない側との関係が何を残すかを考えさせる。
* 厳しい二年生: ラベル削除で済ませる答案は危険、という採点目線。

### scenario_gag_hook

* wrong_intuition と同型の日常ギャグ: その場にいない人の荷物を名簿から消せば席問題も消える、と主人公が思いかける。
* gag_reference_type: 名簿/荷物/席。
* character_owner: 主人公。
* problem_turn: 反対尋問ラウンド導入。
* callback: 見ていないものをなかったことにしない、という現在のヒントを数式へ戻す。

### rewrite_request_for_chatgpt

`p06_partial_trace` を、部分系の状態を得る正しい操作を選ぶ強い4択へ設計する。正解値は `partial trace` を保つ。誤答はラベル削除、全トレース、複合系の純粋状態をそのまま部分系に使う誤解に割り当てる。

## Prompt: `p05_transfer_basis_change` Ordering Note

The generated prompt order places `p05_density_pure`, then `p05_transfer_basis_change`, then `p06_partial_trace`. The future rewrite should preserve prompt IDs and session membership even if the displayed round names change.

## Prompt: `p05_density_pure` / `p06_partial_trace` Connection Note

Density-operator prompts should be staged so the player first learns pure-state idempotency, then sees why subsystem reduction can break the pure-state shortcut. Do not leak the partial-trace answer before `p06_partial_trace`.

## Prompt: `p05_transfer_basis_change` / Earlier Session Connection Note

Basis-change prompts should reuse the session motif "state versus representation" without repeating the exact ket definition from `p01_ket`.

## 要確認 Summary

* `p02_hermitian`: current `gate.answer` is boolean `true`; converting it into a strong four-choice prompt while preserving that exact answer value is unnatural. A future generated-data target should confirm the new choice value and gate migration.

No other prompt currently requires changing the core correct value if future choice options use semantic values such as `ket`, `1`, `0.5`, `rho`, `unitary matrix`, or `partial trace`.

## Recommended Next Target

`regen_target: prompt_schema_session_1`

Purpose: create optional prompt fields for session 1 only, using this workpack as source material, without changing unrelated sessions.
