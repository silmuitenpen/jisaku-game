# Story Japanese Workpack: Session 1

This workpack extracts only session 1 prose, prompt text, and explanation text from the existing public JSON files.
Use it as source material for a separate ChatGPT-side Japanese visual novel rewrite pass.

## Source Files

- `generated/data/scenario.json`
- `generated/data/prompts.json`
- `generated/data/session-plan.json`

## Session Metadata

- session id: `session_01`
- session title: Qualifier: The Space Before the Answer
- source refs:
  - `ref_ch1_framework`
  - `ref_ch1_oscillator`
  - `ref_ch1_density`

## Session Plan Cross-Check

- session-plan title: Qualifier: The Space Before the Answer
- prompt count: 7
- official briefing safe topic: state vectors, operators, and density operators
- official briefing safe caution: Do not treat non-commuting operators like ordinary algebraic variables.

## Opening Scene Text

- `narration`: The regional hall smelled like chalk dust, polished floor wax, and the kind of silence that made every page turn sound official.
- `haru`: If I do not understand the notation, I am going to say so. Even if everyone hears me.
- `minori`: Good. A wrong silence costs more than a wrong answer.

## Official Briefing

- speaker: `Senior Examiner`
- topic: state vectors, operators, and density operators
- text: This foundation round tests the language of quantum mechanics: vector spaces, basis expansion, observables as operators, oscillator algebra, and density operators. Do not assume a symbol is a number just because it fits on one line. Ask what space it acts on, what basis is being used, and whether a subsystem has been separated from something unobserved.
- what_not_to_assume: Do not treat non-commuting operators like ordinary algebraic variables.

## Mid Scene Reaction

- `rikka`: The answer is short. The missing reason is not.
- `haru`: Then I want the reason. If we cannot say it, we do not have it yet.

## Rival Pressure Scene

- `natsuki`: Sakuraba is slower this year.
- `minori`: Sakuraba is naming its assumptions this year.

## Breakthrough Scene

- `haru`: A state is not just an answer waiting to be read. It is a promise about what measurements can mean.
- `sayo`: That is the first page of the notebook I wanted to leave behind.

## Notebook Update

Haru writes: name the space, then the basis, then what the operator is allowed to do.

## Next Hook

Seiran's captain smiles at the oscillator board as if the next round has already begun.

## Session 1 Prompt List

### Prompt 1: `p01_ket`

- prompt id: `p01_ket`
- round: Foundation Round
- stage_label: Quick Problem
- question: In Dirac notation, |psi> is called what kind of vector?
- gate type: `term_blank`
- options labels:
(no options)
- open_question: Explain why the ket alone is not yet a measurement result.
- model_answer: A ket represents a state vector in the system's Hilbert space. Measurement results come from observables and probabilities, not from the symbol alone.
- teammate_whisper: Haru whispers: start with the name before the meaning.
- judge_criteria:
  - Names ket correctly
  - Separates state representation from measurement outcome
- retry_policy: Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer.

### Prompt 2: `p02_hermitian`

- prompt id: `p02_hermitian`
- round: Foundation Round
- stage_label: Quick Problem
- question: True or false: Hermitian operators representing observables have real eigenvalues.
- gate type: `true_false`
- options labels:
(no options)
- open_question: Why does the story care that observables are Hermitian?
- model_answer: Real eigenvalues allow operator eigenvalues to represent possible measurement outcomes. That is why the formal condition matters physically.
- teammate_whisper: Minori taps the desk: possible result, not pretty notation.
- judge_criteria:
  - Connects Hermitian property to real outcomes
- retry_policy: Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer.

### Prompt 3: `p03_commutator`

- prompt id: `p03_commutator`
- round: Foundation Round
- stage_label: Formula Blank
- question: Fill the oscillator algebra blank: [a, a^dagger] = __.
- gate type: `formula_blank`
- options labels:
(no options)
- open_question: What does this commutator warn you not to do?
- model_answer: It warns that the ladder operators do not commute like ordinary numbers; changing order changes the result and the state ladder.
- teammate_whisper: Rikka says too quickly: order is part of the answer.
- judge_criteria:
  - Gives the commutator
  - Explains non-commuting order
- retry_policy: Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer.

### Prompt 4: `p04_ground_energy`

- prompt id: `p04_ground_energy`
- round: Foundation Round
- stage_label: Numeric Gate
- question: For the harmonic oscillator, the ground-state energy is what number times hbar omega?
- gate type: `numeric`
- options labels:
(no options)
- open_question: Why is the ground state not zero energy in this model?
- model_answer: The oscillator spectrum is hbar omega (n + 1/2), so even n=0 has zero-point energy, tied to the quantum operator structure.
- teammate_whisper: Sayo: the quietest state still has structure.
- judge_criteria:
  - Answers 0.5
  - Mentions zero-point energy
- retry_policy: Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer.

### Prompt 5: `p05_density_pure`

- prompt id: `p05_density_pure`
- round: Explanation Round
- stage_label: Board Explanation
- question: For a pure state density operator rho = |psi><psi|, fill the identity: rho^2 = __.
- gate type: `term_blank`
- options labels:
(no options)
- open_question: What changes when the system is mixed or reduced from a larger system?
- model_answer: For a pure state rho is idempotent, but a mixed or reduced density operator may not satisfy the same purity relation and can encode loss of subsystem coherence.
- teammate_whisper: Haru circles rho twice and waits for it to mean something.
- judge_criteria:
  - Gives rho
  - Contrasts pure with mixed/reduced state
- retry_policy: Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer.

### Prompt 6: `p05_transfer_basis_change`

- prompt id: `p05_transfer_basis_change`
- round: Transfer Round
- stage_label: Transfer Challenge
- question: A state is expanded in one basis and then rewritten in another. What kind of matrix changes the components between bases?
- gate type: `short_keyword`
- options labels:
(no options)
- open_question: Why does changing basis preserve the state while changing the coordinates used to describe it?
- model_answer: The state vector is the same physical object, while a basis change rewrites its components through a transformation matrix, often unitary for orthonormal quantum bases.
- teammate_whisper: Rikka: the coordinates move; the state does not have to.
- judge_criteria:
  - Names the transformation idea
  - Separates the state from its coordinates
- retry_policy: Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer only after self-assessment.

### Prompt 7: `p06_partial_trace`

- prompt id: `p06_partial_trace`
- round: Cross-Examination Round
- stage_label: Cross-Examination
- question: What operation obtains a subsystem density operator by tracing over the other subsystem?
- gate type: `short_keyword`
- options labels:
(no options)
- open_question: Why would a team lose points for ignoring this operation?
- model_answer: If a subsystem is entangled with what is ignored, the subsystem is described by a reduced density operator, not by a standalone pure state vector.
- teammate_whisper: Mio is not here yet, but the question already sounds like her.
- judge_criteria:
  - Names partial trace
  - Explains why ignored systems matter
- retry_policy: Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer.
## Rewrite Constraints

- Do not change `id`.
- Do not change `gate.answer` / `gate.answers` / `gate.options[].value`.
- Do not change `source_refs`.
- Do not reveal the core answer before the prompt.
- Do not include spoilers.
- Handle Japanese as UTF-8.
- Treat any accidental `?????` replacement in rewritten prose as failure.
- Do not use or expose `generated/data/sealed/` content.
