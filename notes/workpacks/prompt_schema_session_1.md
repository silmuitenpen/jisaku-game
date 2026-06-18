# Session 1 Prompt Schema Migration Workpack

## Goal

This workpack records the current `gate` schema for the seven session 1 prompts and proposes the smallest migration policy for unifying them into single-answer A/B/C/D choice gates.

This is planning only:

* Do not edit `generated/data/prompts.json` in this target.
* Do not edit `generated/src/data.js` in this target.
* Do not rewrite prompt text in this target.
* Do not implement UI, MathJax, answer reveal, or character hints in this target.

Final target schema for future generated data:

```json
{
  "gate": {
    "type": "single_choice",
    "answer": "B",
    "options": [
      { "value": "A", "label": "..." },
      { "value": "B", "label": "..." },
      { "value": "C", "label": "..." },
      { "value": "D", "label": "..." }
    ]
  }
}
```

## Current gate inventory

### p01_ket

* session_id: `session_01`
* current `gate.type`: `term_blank`
* current `gate.answer`: none
* current `gate.answers`:
  * `ket`
  * `ket vector`
* current `gate.options[].value`: none
* current `gate.options[].label`: none
* 4-choice migrated: no
* true/false type: no
* other special structure: open text answer is locked behind a term-blank gate.

Migration note:

* Future `single_choice` should choose one A/B/C/D value as the answer.
* The semantic correct content should preserve "ket / ket vector" as the correct concept, but the future gate answer should become an option value such as `"B"`.

### p02_hermitian

* session_id: `session_01`
* current `gate.type`: `true_false`
* current `gate.answer`: `true`
* current `gate.answers`: none
* current `gate.options[].value`: none
* current `gate.options[].label`: none
* 4-choice migrated: no
* true/false type: yes
* other special structure: the only session 1 prompt whose current gate answer is boolean.

Migration note:

* This is the clearest schema break.
* Do not force `true` to remain the future answer value.
* Future `single_choice` should use A/B/C/D values and store the previous answer separately in migration notes if needed.

### p03_commutator

* session_id: `session_01`
* current `gate.type`: `formula_blank`
* current `gate.answer`: none
* current `gate.answers`:
  * `1`
  * `I`
  * `identity`
* current `gate.options[].value`: none
* current `gate.options[].label`: none
* 4-choice migrated: no
* true/false type: no
* other special structure: accepts multiple textual representations of the identity.

Migration note:

* Future options should include a correct A/B/C/D choice whose label represents the identity result.
* Keep alternate accepted spellings only as migration context, not as the new machine answer.

### p04_ground_energy

* session_id: `session_01`
* current `gate.type`: `numeric`
* current `gate.answer`: `0.5`
* current `gate.answers`: none
* current `gate.options[].value`: none
* current `gate.options[].label`: none
* 4-choice migrated: no
* true/false type: no
* other special structure: current gate has `tolerance: 0.001`.

Migration note:

* Future `single_choice` does not need numeric tolerance.
* Preserve the correct concept as the option label or explanation, while the future answer becomes an A/B/C/D value.

### p05_density_pure

* session_id: `session_01`
* current `gate.type`: `term_blank`
* current `gate.answer`: none
* current `gate.answers`:
  * `rho`
  * `ρ`
* current `gate.options[].value`: none
* current `gate.options[].label`: none
* 4-choice migrated: no
* true/false type: no
* other special structure: accepts both ASCII and Greek rho.

Migration note:

* Future options should express `\(\rho^2=\rho\)` as the correct choice.
* The answer value should become A/B/C/D; the rho spelling variants can be retained only in migration notes or explanation.

### p05_transfer_basis_change

* session_id: `session_01`
* current `gate.type`: `short_keyword`
* current `gate.answer`: none
* current `gate.answers`:
  * `transformation matrix`
  * `unitary transformation`
  * `unitary matrix`
* current `gate.options[].value`: none
* current `gate.options[].label`: none
* 4-choice migrated: no
* true/false type: no
* other special structure: accepts several related keyword answers.

Migration note:

* Future `single_choice` should make the correct option label specific enough for the intended concept.
* If the prompt emphasizes orthonormal quantum bases, `unitary matrix` is the cleaner correct label.
* If the prompt remains broader, `transformation matrix` may be safer.

### p06_partial_trace

* session_id: `session_01`
* current `gate.type`: `short_keyword`
* current `gate.answer`: none
* current `gate.answers`:
  * `partial trace`
  * `trace over`
  * `reduced trace`
* current `gate.options[].value`: none
* current `gate.options[].label`: none
* 4-choice migrated: no
* true/false type: no
* other special structure: accepts several English keyword variants.

Migration note:

* Future `single_choice` should make `partial trace` the explicit correct option label.
* Other accepted phrases can appear in explanation but should not remain separate machine-accepted answers.

## Migration policy

All seven session 1 prompts should migrate to `single_choice` gates in a future generated-data target.

Recommended future gate shape:

```json
{
  "type": "single_choice",
  "answer": "B",
  "options": [
    { "value": "A", "label": "..." },
    { "value": "B", "label": "..." },
    { "value": "C", "label": "..." },
    { "value": "D", "label": "..." }
  ]
}
```

Migration principles:

* Use exactly four options unless the user explicitly requests a different gate.
* Use values `A`, `B`, `C`, `D` for runtime simplicity.
* Store the correct scientific expression in `options[].label`, not in `gate.answer`.
* Put the chosen correct value in `gate.answer`.
* Preserve the old gate type, old answer, and old accepted answers in a workpack or migration note if useful, but do not keep them as active gate fields after migration unless the runtime explicitly supports legacy fields.
* Add future `distractor_reason` fields only if the UI/data loader can ignore unknown option fields safely.
* Do not change prompt IDs or session membership.
* Apply the migration one session at a time.

Suggested answer placement:

| prompt id | old gate type | future gate type | suggested future correct value | note |
| --- | --- | --- | --- | --- |
| `p01_ket` | `term_blank` | `single_choice` | `B` | Use the correct option for ket/state-vector classification. |
| `p02_hermitian` | `true_false` | `single_choice` | `B` candidate | Requires explicit migration decision; do not preserve boolean `true` as the answer value. |
| `p03_commutator` | `formula_blank` | `single_choice` | `B` | Correct option can represent `\([a,a^\dagger]=1\)`. |
| `p04_ground_energy` | `numeric` | `single_choice` | `B` | Correct option can represent `\(0.5\)` or `\(\frac{1}{2}\)`. |
| `p05_density_pure` | `term_blank` | `single_choice` | `B` | Correct option can represent `\(\rho\)`. |
| `p05_transfer_basis_change` | `short_keyword` | `single_choice` | `A` or `B` candidate | Choose after deciding whether the prompt says `unitary matrix` or broader `transformation matrix`. |
| `p06_partial_trace` | `short_keyword` | `single_choice` | `B` | Correct option can represent `partial trace`. |

The suggested letters are not final prompt text. They are layout candidates for the next drafting target.

## p02_hermitian decision point

Current gate:

```json
{
  "type": "true_false",
  "answer": true
}
```

Recommended future migration note:

```json
{
  "old_gate_answer": true,
  "new_gate_answer": "B",
  "migration_reason": "true/false では誤答選択肢の設計、誤解修正型解説、キャラ別ヒント、答えを見る機能と相性が悪いため、単一正解4択へ統一する"
}
```

Recommended handling:

* Treat `p02_hermitian` as a required 4-choice migration target.
* Do not try to encode `true` as an option value.
* The future correct option should state the scientifically precise version: Hermitian observables have real eigenvalues, and arbitrary states should not be confused with eigenstates.
* Good distractor directions:
  * Hermitian means every matrix entry is real.
  * Every state is automatically an eigenstate.
  * Hermitian expectation values are generally complex.
  * Measurement reality follows from appearance or notation rather than operator property.

Decision still needed in the next target:

* Which A/B/C/D slot should hold the correct option after the actual question draft is written.
* Whether the prompt emphasizes real eigenvalues, real expectation values, or the contrast between them.
* Whether any migration metadata should be kept in generated JSON or only in public workpacks.

## Compatibility risks

* Changing `gate.answer` changes machine grading behavior.
* Changing `gate.options[].value` can affect existing UI state, answer checking, retry tracking, localStorage, and future answer reveal logic.
* `generated/src/data.js` must be synchronized with `generated/data/prompts.json` in the same future apply target.
* `prompts.json` and `data.js` must never drift after a generated-data migration.
* `generated/src/data.js` currently embeds data under `window.SCIO_DATA`, so the sync tool for future edits should preserve that runtime format.
* If `session-plan.json` or runtime code references prompt IDs, those IDs must remain unchanged.
* Existing `teammate_whisper` should remain as a fallback until `character_hints` is implemented.
* Existing `model_answer` should remain as a fallback until structured `explanation` and `answer_reveal` are implemented.
* Existing `judge_criteria` and `retry_policy` should remain available until the new answer reveal flow is implemented.
* The numeric tolerance on `p04_ground_energy` becomes obsolete after `single_choice`; do not remove it until the actual migration target edits generated data.
* Multiple accepted free-text answers should be converted into one correct option plus explanation notes, not multiple correct machine values.
* This workpack is design only; actual values must change only in a future generated-data target.

## Recommended next targets

Recommended order:

1. `regen_target: prompt_rewrite_session_1_draft`
   * Prepare a concise prompt for another ChatGPT pass to draft seven strong A/B/C/D problems.
   * Use `notes/workpacks/prompt_quality_session_1_workpack.md` and this schema workpack.
   * Do not edit generated JSON yet.

2. `regen_target: apply_prompt_rewrite_session_1`
   * Apply the completed second-draft prompt data to `generated/data/prompts.json`.
   * Convert the seven gates to `single_choice`.
   * Sync `generated/src/data.js`.
   * Preserve prompt IDs and session IDs.

3. `regen_target: character_hints_schema`
   * Add or standardize `character_hints` after the new prompt content is stable.
   * Keep `teammate_whisper` as fallback until UI migration.

4. `regen_target: answer_reveal_schema`
   * Add structured `answer_reveal`, `explanation`, and optional `cleared_by` planning fields.
   * Keep existing `model_answer`, `judge_criteria`, and `retry_policy` as fallback fields.

5. `regen_target: latex_rendering`
   * Implement MathJax or equivalent formula rendering in the browser UI.
   * Do not change prompt science in this target.

Not recommended as the immediate next target:

* `apply_prompt_rewrite_session_1`, unless the seven completed second-draft prompt texts already exist.
* `latex_rendering`, because it fixes display but not prompt schema or prompt quality.
