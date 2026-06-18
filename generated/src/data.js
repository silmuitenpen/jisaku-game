window.SCIO_DATA = {
  "metadata": {
    "_meta": {
      "generated_at": "2026-06-18",
      "generation_kind": "metadata",
      "review_mode": true,
      "spoiler_mode": "safe",
      "source_policy": "PDF-derived learning content; story structure and characters are model_inference."
    },
    "title": "Photon Relay: The Question Sayo Left Behind",
    "configuration": {
      "review_mode": true,
      "spoiler_mode": "safe",
      "regen_target": "continue",
      "review_knowledge": true,
      "review_story_core": true,
      "review_rival_school_arcs": false,
      "review_drama_beats": "safe_summary_only",
      "review_session_plan": "safe_summary_only",
      "review_scenario": false,
      "review_assets": true,
      "review_technical": true
    },
    "source": {
      "id": "textbook_pdf",
      "label": "source_pdf",
      "title": "Fundamentals of Quantum Optics and Quantum Information",
      "authors": [
        "Peter Lambropoulos",
        "David Petrosyan"
      ],
      "file": "source/textbook.pdf",
      "pdf_pages": 326,
      "notes": "Text extracted locally with Poppler pdftotext. Optional context/references.md existed but was empty."
    },
    "counts": {
      "knowledge_units": 13,
      "sessions": 5,
      "prompts": 31,
      "rival_schools": 4,
      "base_team_characters": 4,
      "rivals": 4
    },
    "spoiler_control": {
      "public_review_dir": "generated/data/public-review/",
      "sealed_dir": "generated/data/sealed/",
      "normal_review_hides": [
        "rival school twists",
        "final result",
        "ending route",
        "hidden rival motivations",
        "decisive scene dialogue"
      ]
    }
  },
  "knowledgeMap": {
    "_meta": {
      "generated_at": "2026-06-18",
      "generation_kind": "knowledge_map",
      "review_mode": true,
      "spoiler_mode": "safe",
      "source_policy": "PDF-derived learning content; story structure and characters are model_inference."
    },
    "source_summary": {
      "label": "source_pdf",
      "central_thread": "The book builds from quantum-mechanical state language to quantum optics and then to physical quantum-information processing.",
      "coverage_strategy": "Five game sessions sample the book's main spine rather than attempting exhaustive coverage of all 326 PDF pages.",
      "coverage_strategy_label": "model_inference"
    },
    "learning_units": [
      {
        "id": "ku_01_state_language",
        "title": "Quantum states live in vector spaces",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch1_framework"
        ],
        "major_concepts": [
          "complex vector spaces",
          "basis decomposition",
          "tensor-product spaces",
          "Dirac ket/bra notation"
        ],
        "definitions": [
          "A basis lets a state be decomposed into coefficients on basis vectors.",
          "Tensor-product spaces describe compound systems and set up the language of entanglement."
        ],
        "equations": [
          "|phi> = sum_i c_i |e_i>",
          "<e_i|e_j> = delta_ij"
        ],
        "assumptions": [
          "The physical state space is linear and supports a scalar product."
        ],
        "validity_conditions": [
          "Basis expansion requires a complete orthonormal basis for the relevant space."
        ],
        "limitations": [
          "Vector-space notation predicts measurement statistics but does not by itself explain measurement philosophy."
        ],
        "common_misconceptions": [
          "A vector component is not automatically a measured value; probabilities come from amplitudes and operators."
        ],
        "figures_or_captions": [],
        "prompt_ids": [
          "p01_ket",
          "p02_hermitian",
          "p25_reversible"
        ],
        "limitations_label": "model_inference",
        "common_misconceptions_label": "model_inference",
        "equations_label": "source_pdf"
      },
      {
        "id": "ku_02_observables",
        "title": "Observables are operators, and commutators matter",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch1_framework",
          "ref_ch1_oscillator"
        ],
        "major_concepts": [
          "Hermitian operators",
          "eigenvalues",
          "commutators",
          "measurement probabilities"
        ],
        "definitions": [
          "Hermitian observables have real eigenvalues.",
          "Non-commuting observables encode measurement limits and incompatible descriptions."
        ],
        "equations": [
          "[A,B] = AB - BA",
          "[Q,P] = i hbar I"
        ],
        "assumptions": [
          "Physical observables are represented by Hermitian operators."
        ],
        "validity_conditions": [
          "Operator domains and basis choices must match the physical system."
        ],
        "limitations": [
          "Treating operators as ordinary numbers hides ordering effects."
        ],
        "common_misconceptions": [
          "Changing the order of non-commuting operators is harmless."
        ],
        "figures_or_captions": [],
        "prompt_ids": [
          "p01_ket",
          "p02_hermitian",
          "p03_commutator",
          "p04_ground_energy",
          "p07_modes",
          "p09_coherent_eigen",
          "p25_reversible"
        ],
        "limitations_label": "model_inference",
        "common_misconceptions_label": "model_inference",
        "equations_label": "source_pdf"
      },
      {
        "id": "ku_03_harmonic_oscillator",
        "title": "The harmonic oscillator is a reusable quantum building block",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch1_oscillator"
        ],
        "major_concepts": [
          "Hamiltonian",
          "ladder operators",
          "number states",
          "coherent states"
        ],
        "definitions": [
          "Creation and annihilation operators raise and lower number states.",
          "Coherent states are eigenstates of the annihilation operator and approximate classical fields."
        ],
        "equations": [
          "H = hbar omega (N + 1/2)",
          "[a,a^dagger] = 1",
          "a|alpha> = alpha|alpha>"
        ],
        "assumptions": [
          "The oscillator Hamiltonian is quadratic in position and momentum."
        ],
        "validity_conditions": [
          "The number-state ladder relies on the oscillator algebra."
        ],
        "limitations": [
          "Coherent states are not number states and do not have definite photon number."
        ],
        "common_misconceptions": [
          "A coherent state is simply a large-number Fock state."
        ],
        "figures_or_captions": [
          "Fig. 1.1: harmonic-oscillator amplitudes and uncertainties for coherent/squeezed states."
        ],
        "prompt_ids": [
          "p03_commutator",
          "p04_ground_energy",
          "p07_modes",
          "p09_coherent_eigen"
        ],
        "limitations_label": "model_inference",
        "common_misconceptions_label": "model_inference",
        "equations_label": "source_pdf"
      },
      {
        "id": "ku_04_density_operator",
        "title": "Density operators handle mixtures and subsystems",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch1_density"
        ],
        "major_concepts": [
          "pure states",
          "mixed states",
          "reduced density operator",
          "partial trace"
        ],
        "definitions": [
          "A pure state can be written rho = |psi><psi|.",
          "The reduced density operator of a subsystem is obtained by tracing over the other subsystem."
        ],
        "equations": [
          "rho = |psi><psi|",
          "<A> = Tr(rho A)",
          "rho_A = Tr_B(rho)"
        ],
        "assumptions": [
          "Subsystems may be entangled with unobserved degrees of freedom."
        ],
        "validity_conditions": [
          "A subsystem description must use the reduced density operator when the full state is inseparable."
        ],
        "limitations": [
          "A mixed density matrix is not just ignorance in every physical context; it can arise from entanglement."
        ],
        "common_misconceptions": [
          "If the whole system is pure, every subsystem must also be pure."
        ],
        "figures_or_captions": [],
        "prompt_ids": [
          "p05_density_pure",
          "p06_partial_trace",
          "p18_reduced_state"
        ],
        "limitations_label": "model_inference",
        "common_misconceptions_label": "model_inference",
        "equations_label": "source_pdf"
      },
      {
        "id": "ku_05_quantized_radiation",
        "title": "Radiation modes quantize like oscillators",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch2_radiation"
        ],
        "major_concepts": [
          "field quantization",
          "cavity modes",
          "number states",
          "coherent states",
          "correlation functions"
        ],
        "definitions": [
          "A field mode can be represented by oscillator-like creation and annihilation operators.",
          "Photon counting and correlation functions reveal quantum statistical properties of light."
        ],
        "equations": [
          "E-field mode energy resembles hbar omega (n + 1/2)",
          "G^(1), G^(2) correlation functions"
        ],
        "assumptions": [
          "Mode decomposition and boundary conditions define the field degrees of freedom."
        ],
        "validity_conditions": [
          "Cavity and open-space quantization use different mode structures."
        ],
        "limitations": [
          "Classical intensity language misses photon statistics and field-state distinctions."
        ],
        "common_misconceptions": [
          "All bright light can be treated as a classical wave without loss of relevant information."
        ],
        "figures_or_captions": [
          "Fig. 2.1: cubic quantization volume with periodic boundary conditions.",
          "Fig. 2.2: one-dimensional optical cavity.",
          "Fig. 2.3: photon probability distributions for coherent and chaotic fields.",
          "Fig. 2.4: photon detection schemes."
        ],
        "prompt_ids": [
          "p07_modes",
          "p08_number_state",
          "p09_coherent_eigen",
          "p12_coherent_vs_number"
        ],
        "limitations_label": "model_inference",
        "common_misconceptions_label": "model_inference",
        "equations_label": "source_pdf"
      },
      {
        "id": "ku_06_atom_field",
        "title": "Atom-field interaction turns spectral structure into dynamics",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch3_atom_field"
        ],
        "major_concepts": [
          "two-level atom",
          "Rabi frequency",
          "detuning",
          "Jaynes-Cummings model",
          "three-level atoms"
        ],
        "definitions": [
          "Rabi frequency sets the coherent oscillation rate driven by a near-resonant field.",
          "The Jaynes-Cummings model treats a two-level atom coupled to a quantized mode."
        ],
        "equations": [
          "Omega = dipole_field_coupling / hbar",
          "|e,n> <-> |g,n+1> exchange"
        ],
        "assumptions": [
          "Near-resonance and rotating-wave style approximations are used for tractable two-level dynamics."
        ],
        "validity_conditions": [
          "The two-level approximation must be justified by transition selection and detuning."
        ],
        "limitations": [
          "Strong fields may be treated classically, but few-photon effects need quantized-field treatment."
        ],
        "common_misconceptions": [
          "A classical drive and a quantized single mode always predict the same atom behavior."
        ],
        "figures_or_captions": [
          "Fig. 3.1: two-level atom interacting with a monochromatic field.",
          "Fig. 3.2: Rabi population dynamics.",
          "Fig. 3.3: inversion dynamics for quantized-field cases.",
          "Fig. 3.6: three-level atom configurations.",
          "Fig. 3.7: simulated Raman adiabatic passage."
        ],
        "prompt_ids": [
          "p10_rabi",
          "p11_jc_exchange"
        ],
        "limitations_label": "model_inference",
        "common_misconceptions_label": "model_inference",
        "equations_label": "source_pdf"
      },
      {
        "id": "ku_07_open_systems",
        "title": "Reservoir coupling makes approximation conditions decisive",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch4_reservoir"
        ],
        "major_concepts": [
          "reservoir",
          "Born-Markov approximation",
          "master equation",
          "quantum stochastic wavefunctions"
        ],
        "definitions": [
          "A master equation evolves the reduced density operator of a small system coupled to a reservoir.",
          "Quantum jumps simulate dissipative evolution as stochastic pure-state trajectories."
        ],
        "equations": [
          "d rho_S / dt = master_equation_terms",
          "H_eff = H - i loss_terms"
        ],
        "assumptions": [
          "Weak coupling, short reservoir memory, and limited back-action on the reservoir."
        ],
        "validity_conditions": [
          "Markovian models require reservoir correlation times short compared with system evolution."
        ],
        "limitations": [
          "The approximation can fail when the environment has memory or strong structured coupling."
        ],
        "common_misconceptions": [
          "Adding decay is only a numerical detail, not a conceptual change."
        ],
        "figures_or_captions": [
          "Fig. 4.1: driven two-level atom populations under decay and detuning.",
          "Fig. 4.2-Fig. 4.3: Monte-Carlo quantum trajectories and ensemble averages."
        ],
        "prompt_ids": [
          "p13_reservoir",
          "p14_born_markov",
          "p15_decoherence",
          "p18_reduced_state",
          "p30_final_synthesis"
        ],
        "limitations_label": "model_inference",
        "common_misconceptions_label": "model_inference",
        "equations_label": "model_inference"
      },
      {
        "id": "ku_08_cavity_qed",
        "title": "Cavity QED exposes the competition between coherent exchange and loss",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch5_cavity"
        ],
        "major_concepts": [
          "cavity damping",
          "vacuum Rabi oscillation",
          "strong coupling",
          "single-photon generation"
        ],
        "definitions": [
          "Vacuum Rabi oscillations exchange an excitation between atom and cavity mode.",
          "Single photons on demand require timing and loss control, not just emission."
        ],
        "equations": [
          "g compared with kappa and Gamma",
          "coherent-state amplitude decays under damping"
        ],
        "assumptions": [
          "A single relevant cavity mode and controlled atom-cavity coupling."
        ],
        "validity_conditions": [
          "Strong-coupling behavior requires coherent exchange faster than loss."
        ],
        "limitations": [
          "Damping can hide coherent oscillations even when the underlying coupling exists."
        ],
        "common_misconceptions": [
          "A cavity automatically preserves a photon just because it confines a mode."
        ],
        "figures_or_captions": [
          "Fig. 5.1: two-level atom in a cavity.",
          "Fig. 5.2: damped atom-cavity dynamics.",
          "Fig. 5.3-Fig. 5.5: single-photon source and intracavity STIRAP schemes."
        ],
        "prompt_ids": [
          "p16_cavity_loss"
        ],
        "limitations_label": "model_inference",
        "common_misconceptions_label": "model_inference",
        "equations_label": "source_pdf"
      },
      {
        "id": "ku_09_media",
        "title": "Propagation in media depends on coupled field-atom evolution",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch6_media"
        ],
        "major_concepts": [
          "slowly varying field",
          "two-level medium",
          "three-level medium",
          "EIT",
          "slow light"
        ],
        "definitions": [
          "The field and atomic medium must be evolved self-consistently.",
          "Three-level media can support transparency and pulse slowing under controlled driving."
        ],
        "equations": [
          "Maxwell-Bloch style coupled equations",
          "group velocity controlled by coupling fields"
        ],
        "assumptions": [
          "Weak probe fields and slowly varying envelopes are typical simplifying conditions."
        ],
        "validity_conditions": [
          "Adiabatic following and resonance conditions matter for EIT-like behavior."
        ],
        "limitations": [
          "Turning off a drive too fast or leaving resonance can destroy the intended propagation effect."
        ],
        "common_misconceptions": [
          "A medium is just a passive index of refraction in quantum optical propagation."
        ],
        "figures_or_captions": [
          "Fig. 6.1: two-level medium absorption and dispersion spectra.",
          "Fig. 6.2: electromagnetically induced transparency scheme.",
          "Fig. 6.3: three-level medium absorption and dispersion spectra."
        ],
        "prompt_ids": [
          "p17_eit"
        ],
        "limitations_label": "model_inference",
        "common_misconceptions_label": "model_inference",
        "equations_label": "model_inference"
      },
      {
        "id": "ku_10_qubits_entanglement",
        "title": "Qubits make information physical",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch8_qubits",
          "ref_ch8_entanglement"
        ],
        "major_concepts": [
          "qubits",
          "gates",
          "measurement",
          "no-cloning",
          "Bell states",
          "teleportation"
        ],
        "definitions": [
          "A qubit is a two-state quantum system used as a memory and processing unit.",
          "No-cloning forbids an operation that copies an arbitrary unknown quantum state."
        ],
        "equations": [
          "|psi> = alpha|0> + beta|1>",
          "Bell states as entangled two-qubit states"
        ],
        "assumptions": [
          "Quantum information protocols rely on coherent control and well-defined measurement bases."
        ],
        "validity_conditions": [
          "Cloning restrictions apply to arbitrary unknown states, not known classical labels."
        ],
        "limitations": [
          "Entanglement enables protocols but is fragile under decoherence."
        ],
        "common_misconceptions": [
          "Teleportation transmits matter or a usable signal faster than light."
        ],
        "figures_or_captions": [
          "Fig. 8.1-Fig. 8.4: one-, two-, and three-qubit gate circuits.",
          "Fig. 8.5-Fig. 8.6: measurement symbol and observable-measurement circuit.",
          "Fig. 8.7 and following figures: single-photon interference and protocol circuits."
        ],
        "prompt_ids": [
          "p15_decoherence",
          "p19_qubit",
          "p20_no_cloning",
          "p21_bell",
          "p22_measurement",
          "p23_protocol_match",
          "p24_bell_limit",
          "p28_error_correction"
        ],
        "limitations_label": "model_inference",
        "common_misconceptions_label": "model_inference",
        "equations_label": "source_pdf"
      },
      {
        "id": "ku_10a_classical_reversible",
        "title": "Classical reversible computation sets up quantum circuit constraints",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch7_classical_computation"
        ],
        "major_concepts": [
          "bits",
          "circuits",
          "computational resources",
          "reversible computation"
        ],
        "definitions": [
          "Classical computation is framed as data processing through wires, gates, and memory.",
          "Reversible computation prepares the conceptual bridge to unitary quantum gates."
        ],
        "equations": [],
        "equations_label": "source_pdf",
        "assumptions": [
          "The computation model is expressed in terms of discrete data and gate operations."
        ],
        "validity_conditions": [
          "Reversible logic must preserve enough information to reconstruct the input from the output."
        ],
        "limitations": [
          "This unit is a bridge; quantum speedup claims require the later quantum-computation chapters."
        ],
        "limitations_label": "model_inference",
        "common_misconceptions": [
          "Reversibility is not the same as making a computation faster."
        ],
        "common_misconceptions_label": "model_inference",
        "figures_or_captions": [],
        "prompt_ids": [
          "p25_reversible"
        ]
      },
      {
        "id": "ku_11_algorithms_error",
        "title": "Quantum computation wins only under careful structure and protection",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch7_classical_computation",
          "ref_ch9_computation"
        ],
        "major_concepts": [
          "Deutsch algorithm",
          "Deutsch-Jozsa algorithm",
          "Grover search",
          "QFT",
          "quantum error correction"
        ],
        "definitions": [
          "Grover search provides a quadratic speedup for unstructured search.",
          "Quantum error correction diagnoses error syndromes without reading the encoded quantum information directly."
        ],
        "equations": [
          "Hadamard-oracle-Hadamard patterns",
          "QFT maps amplitudes through phase structure"
        ],
        "assumptions": [
          "Algorithms require coherent gates and a suitable oracle or problem encoding."
        ],
        "validity_conditions": [
          "A speedup claim depends on the problem model and available oracle assumptions."
        ],
        "limitations": [
          "Error correction adds overhead and depends on noise assumptions."
        ],
        "common_misconceptions": [
          "A quantum computer makes every computational task exponentially faster."
        ],
        "figures_or_captions": [
          "Chapter 9 circuit figures: Deutsch, Deutsch-Jozsa, Grover, QFT, and error-correction examples."
        ],
        "prompt_ids": [
          "p25_reversible",
          "p26_grover",
          "p27_qft",
          "p28_error_correction",
          "p30_final_synthesis"
        ],
        "limitations_label": "model_inference",
        "common_misconceptions_label": "model_inference",
        "equations_label": "model_inference"
      },
      {
        "id": "ku_12_implementation",
        "title": "Physical implementation ties the whole book together",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch10_implementation"
        ],
        "major_concepts": [
          "implementation requirements",
          "cavity QED",
          "ion traps",
          "optical quantum computing",
          "quantum dots"
        ],
        "definitions": [
          "A physical quantum computer needs scalable qubits, initialization, gate control, long coherence, and readout.",
          "Quantum optics supplies many proof-of-principle platforms for quantum information processing."
        ],
        "equations": [
          "gate time much shorter than decoherence time",
          "error probability thresholds as design targets"
        ],
        "assumptions": [
          "The abstract circuit model must be mapped to a controllable physical platform."
        ],
        "validity_conditions": [
          "Implementation claims need both coherent dynamics and quantified loss/error channels."
        ],
        "limitations": [
          "A beautiful Hamiltonian is insufficient if initialization, readout, or decoherence control fail."
        ],
        "common_misconceptions": [
          "Any observed entanglement is already a scalable quantum computer."
        ],
        "figures_or_captions": [
          "Chapter 10 implementation figures: cavity, ion-trap, optical, and quantum-dot implementation schemes."
        ],
        "prompt_ids": [
          "p29_requirements",
          "p30_final_synthesis"
        ],
        "limitations_label": "model_inference",
        "common_misconceptions_label": "model_inference",
        "equations_label": "model_inference"
      }
    ]
  },
  "sourceRefs": {
    "_meta": {
      "generated_at": "2026-06-18",
      "generation_kind": "source_refs",
      "review_mode": true,
      "spoiler_mode": "safe",
      "source_policy": "PDF-derived learning content; story structure and characters are model_inference."
    },
    "primary_source": {
      "id": "textbook_pdf",
      "label": "source_pdf",
      "title": "Fundamentals of Quantum Optics and Quantum Information",
      "authors": [
        "Peter Lambropoulos",
        "David Petrosyan"
      ],
      "file": "source/textbook.pdf",
      "pdf_pages": 326,
      "notes": "Text extracted locally with Poppler pdftotext. Optional context/references.md existed but was empty."
    },
    "refs": [
      {
        "id": "ref_ch1_framework",
        "label": "source_pdf",
        "chapter": 1,
        "book_page_range": "5-18",
        "pdf_page_start": 15,
        "title": "Quantum mechanical background: vector spaces, bases, operators",
        "anchor_terms": [
          "complex vector space",
          "basis",
          "linear operator",
          "Hermitian operator"
        ],
        "pdf_page_end": 27
      },
      {
        "id": "ref_ch1_oscillator",
        "label": "source_pdf",
        "chapter": 1,
        "book_page_range": "18-36",
        "pdf_page_start": 28,
        "title": "Observables, harmonic oscillator, ladder operators, coherent states",
        "anchor_terms": [
          "Hamiltonian",
          "commutator",
          "annihilation operator",
          "coherent states"
        ],
        "pdf_page_end": 45
      },
      {
        "id": "ref_ch1_density",
        "label": "source_pdf",
        "chapter": 1,
        "book_page_range": "36-42",
        "pdf_page_start": 46,
        "title": "Density operator, pure and mixed states, reduced density operator",
        "anchor_terms": [
          "density operator",
          "pure state",
          "mixed state",
          "partial trace"
        ],
        "pdf_page_end": 53
      },
      {
        "id": "ref_ch2_radiation",
        "label": "source_pdf",
        "chapter": 2,
        "book_page_range": "45-71",
        "pdf_page_start": 54,
        "title": "Quantum theory of radiation and field states",
        "anchor_terms": [
          "field quantization",
          "cavity",
          "number state",
          "correlation functions"
        ],
        "pdf_page_end": 81
      },
      {
        "id": "ref_ch3_atom_field",
        "label": "source_pdf",
        "chapter": 3,
        "book_page_range": "73-116",
        "pdf_page_start": 82,
        "title": "Atom in an external radiation field; Rabi and Jaynes-Cummings models",
        "anchor_terms": [
          "two-level atom",
          "Rabi frequency",
          "Jaynes-Cummings model",
          "three-level atom"
        ],
        "pdf_page_end": 126
      },
      {
        "id": "ref_ch4_reservoir",
        "label": "source_pdf",
        "chapter": 4,
        "book_page_range": "119-149",
        "pdf_page_start": 127,
        "title": "System-reservoir interaction and master equation",
        "anchor_terms": [
          "master equation",
          "Born approximation",
          "Markov approximation",
          "reduced density operator",
          "quantum jumps"
        ],
        "pdf_page_end": 157
      },
      {
        "id": "ref_ch5_cavity",
        "label": "source_pdf",
        "chapter": 5,
        "book_page_range": "151-176",
        "pdf_page_start": 158,
        "title": "Cavity QED, damped cavities, and single photons on demand",
        "anchor_terms": [
          "cavity field",
          "damped cavity",
          "vacuum Rabi",
          "single photons"
        ],
        "pdf_page_end": 184
      },
      {
        "id": "ref_ch6_media",
        "label": "source_pdf",
        "chapter": 6,
        "book_page_range": "179-197",
        "pdf_page_start": 185,
        "title": "Field propagation in atomic media",
        "anchor_terms": [
          "slowly varying electric field",
          "two-level medium",
          "three-level medium",
          "EIT"
        ],
        "pdf_page_end": 205
      },
      {
        "id": "ref_ch7_classical_computation",
        "label": "source_pdf",
        "chapter": 7,
        "book_page_range": "203-210",
        "pdf_page_start": 206,
        "pdf_page_end": 213,
        "title": "Elements of classical computation, circuits, resources, and reversible computation",
        "anchor_terms": [
          "bits and memory",
          "wires and gates",
          "computational resources",
          "reversible computation"
        ]
      },
      {
        "id": "ref_ch8_qubits",
        "label": "source_pdf",
        "chapter": 8,
        "book_page_range": "211-227",
        "pdf_page_start": 214,
        "title": "Qubits, quantum circuits, no-cloning, physical qubits",
        "anchor_terms": [
          "qubit",
          "quantum gates",
          "measurement",
          "no-cloning"
        ],
        "pdf_page_end": 228
      },
      {
        "id": "ref_ch8_entanglement",
        "label": "source_pdf",
        "chapter": 8,
        "book_page_range": "226-248",
        "pdf_page_start": 229,
        "title": "Entanglement, teleportation, cryptography, Bell inequality, entropy",
        "anchor_terms": [
          "Bell states",
          "teleportation",
          "BB84",
          "Bell's inequality",
          "entropy"
        ],
        "pdf_page_end": 252
      },
      {
        "id": "ref_ch9_computation",
        "label": "source_pdf",
        "chapter": 9,
        "book_page_range": "251-279",
        "pdf_page_start": 253,
        "title": "Quantum algorithms, simulation, and error correction",
        "anchor_terms": [
          "Deutsch algorithm",
          "Grover algorithm",
          "Quantum Fourier Transform",
          "error correction"
        ],
        "pdf_page_end": 281
      },
      {
        "id": "ref_ch10_implementation",
        "label": "source_pdf",
        "chapter": 10,
        "book_page_range": "281-309",
        "pdf_page_start": 282,
        "title": "Physical implementations and DiVincenzo-style requirements",
        "anchor_terms": [
          "physical implementations",
          "ion-trap",
          "cavity QED",
          "optical quantum computer"
        ],
        "pdf_page_end": 310
      }
    ]
  },
  "storyCore": {
    "_meta": {
      "generated_at": "2026-06-18",
      "generation_kind": "story_core",
      "review_mode": true,
      "spoiler_mode": "safe",
      "source_policy": "PDF-derived learning content; story structure and characters are model_inference."
    },
    "scientific_core_question": {
      "label": "model_inference",
      "text": "When can a quantum-information claim survive contact with the physical conditions of quantum optics: basis choice, measurement, approximations, dissipation, and implementation limits?",
      "source_refs": [
        "ref_ch1_framework",
        "ref_ch4_reservoir",
        "ref_ch10_implementation"
      ]
    },
    "emotional_core": {
      "label": "model_inference",
      "text": "A first-year protagonist refuses to pretend she understands; the team learns that careful questions about assumptions can matter more than fast recitation."
    },
    "previous_failure_connection": {
      "label": "model_inference",
      "safe_summary": "Last year's team lost after giving a brilliant calculation without stating the regime in which it was valid.",
      "source_refs": [
        "ref_ch3_atom_field",
        "ref_ch4_reservoir",
        "ref_ch5_cavity"
      ]
    },
    "inheritance_question": {
      "label": "model_inference",
      "text": "The senior passes down not an answer, but a habit: name the space, name the approximation, and name what would break it."
    },
    "final_conflict": {
      "label": "model_inference",
      "safe_summary": "The final session asks the team to synthesize quantum-state language, light-matter dynamics, decoherence, and implementation requirements without overclaiming.",
      "spoiler_control": "Final result and decisive dialogue are sealed."
    },
    "likely_rival_styles": [
      "calculation_style",
      "skeptical_style",
      "experiment_style",
      "synthesis_style",
      "modern_research_style"
    ],
    "possible_scientific_turning_points": [
      {
        "label": "source_pdf",
        "text": "A reduced density operator is needed when a subsystem is entangled with an unobserved system.",
        "source_refs": [
          "ref_ch1_density"
        ]
      },
      {
        "label": "source_pdf",
        "text": "Coherent exchange in a cavity must be compared against damping and spontaneous decay.",
        "source_refs": [
          "ref_ch5_cavity"
        ]
      },
      {
        "label": "source_pdf",
        "text": "No-cloning and measurement limits change what counts as information processing.",
        "source_refs": [
          "ref_ch8_qubits"
        ]
      },
      {
        "label": "source_pdf",
        "text": "Implementation claims must satisfy physical requirements, not just circuit diagrams.",
        "source_refs": [
          "ref_ch10_implementation"
        ]
      }
    ]
  },
  "sessionPlan": {
    "_meta": {
      "generated_at": "2026-06-18",
      "generation_kind": "scenario_public",
      "review_mode": true,
      "spoiler_mode": "safe",
      "source_policy": "PDF-derived learning content; story structure and characters are model_inference."
    },
    "spoiler_policy": "Playable safe scenario text. Full final ending/result details are sealed.",
    "title": "Photon Relay: The Question Sayo Left Behind",
    "logline": "A local visual-novel science olympiad game where PDF-grounded prompts unlock a tournament story about assumptions, inheritance, and physical quantum information.",
    "cast": [
      "haru",
      "rikka",
      "sayo",
      "minori",
      "natsuki",
      "mio",
      "touko",
      "yui"
    ],
    "sessions": [
      {
        "id": "session_01",
        "title": "Qualifier: The Space Before the Answer",
        "source_refs": [
          "ref_ch1_framework",
          "ref_ch1_oscillator",
          "ref_ch1_density"
        ],
        "opening_scene": [
          {
            "speaker": "narration",
            "text": "地方予選の会場は、思っていたよりずっと静かだった。\n\n磨かれた床の匂い。\n黒板のチョークの粉。\nページをめくる音まで、審査されているみたいに響く。\n\n私は、膝の上で手を握った。\n\n前の席の制服。横に並ぶ名札。知らない学校の視線。\nどれも、私たちより先に答えを知っているように見えた。"
          },
          {
            "speaker": "ハル",
            "text": "「……私、記号の意味が分からなかったら、ちゃんと言う」"
          },
          {
            "speaker": "narration",
            "text": "声に出した瞬間、喉が少しだけ震えた。\nでも、飲み込まなかった。"
          },
          {
            "speaker": "ハル",
            "text": "「みんなに聞こえても、言う」"
          },
          {
            "speaker": "narration",
            "text": "実里先輩は、こちらを見ずに小さくうなずいた。"
          },
          {
            "speaker": "ミノリ",
            "text": "「いいよ」"
          },
          {
            "speaker": "narration",
            "text": "柔らかい声だった。\nけれど、その次の言葉だけ、少し硬かった。"
          },
          {
            "speaker": "ミノリ",
            "text": "「間違った沈黙のほうが、間違った答えより高くつくから」"
          }
        ],
        "official_briefing": {
          "speaker": "審査主任",
          "topic": "量子力学の基本言語",
          "text": "正面のスクリーンに、最初のラウンド名が映った。\n\n基礎ラウンド。\n量子力学の言葉。\n\n会場の空気が、半音だけ低くなる。\n\n審査主任がマイクの前に立った。\n\n「本ラウンドでは、量子力学の基本言語を問います」\n\n声は淡々としていた。\nだからこそ、一語ずつ重かった。\n\n「状態ベクトル、基底展開、観測量としての演算子、調和振動子の代数、密度演算子。いずれも、計算以前に、記号が何を表しているかを見極める問題です」\n\n私はノートの端に、急いで単語だけを書き取った。\n\n状態。\n基底。\n演算子。\n密度。\n\n「一行に収まっているからといって、その記号をただの数だと思わないこと」\n\nペン先が止まった。\n\n「それはどの空間に作用するのか。どの基底で書かれているのか。見ていない部分系を切り離してよいのか。必ず確認してください」\n\n審査主任は、少し間を置いた。\n\n「特に、交換しない演算子を、普通の文字式のように扱わないこと」\n\nその一言で、隣の立花が顔を上げた。\n\n私はまだ、何を見落とすのか分からなかった。\nでも、見落としたら負ける場所に来てしまったことだけは分かった。",
          "what_not_to_assume": "特に、交換しない演算子を、普通の文字式のように扱わないこと"
        },
        "mid_scene_reaction": [
          {
            "speaker": "narration",
            "text": "解答欄に入れる言葉は、思ったより短かった。\n\n短い。\nだから、怖い。\n\n立花が画面を見たまま、早口で言った。"
          },
          {
            "speaker": "立花",
            "text": "「答えは短い。でも、足りない理由は短くない」"
          },
          {
            "speaker": "narration",
            "text": "私は、消しゴムを握ったままうなずいた。\n\nたぶん、ここで名前だけ入れれば、ゲートは開く。\nでも、それだけで進んだら、次で落ちる気がした。"
          },
          {
            "speaker": "ハル",
            "text": "「じゃあ……理由がほしい」"
          },
          {
            "speaker": "narration",
            "text": "自分の声は小さかった。\nでも、隣の実里先輩には届いた。"
          },
          {
            "speaker": "ハル",
            "text": "「私たちが説明できないなら、まだ持ってないってことだよね」"
          },
          {
            "speaker": "narration",
            "text": "立花のペンが、一度だけ止まった。"
          },
          {
            "speaker": "立花",
            "text": "「……そう。今のは、いい止まり方」"
          }
        ],
        "rival_pressure_scene": [
          {
            "speaker": "narration",
            "text": "隣のブロックから、低い声が聞こえた。"
          },
          {
            "speaker": "ナツキ",
            "text": "「桜庭、今年は遅いね」"
          },
          {
            "speaker": "narration",
            "text": "青藍の名札。\n夏希さんだった。\n\n笑っているように見えた。\nでも、目は問題画面から離れていない。\n\n私は思わず肩に力を入れた。\n遅い。\nその言葉だけで、会場の時計の音が近くなる。\n\n実里先輩は、画面に視線を戻したまま答えた。"
          },
          {
            "speaker": "ミノリ",
            "text": "「今年の桜庭は、仮定に名前をつけてるの」"
          },
          {
            "speaker": "narration",
            "text": "静かな声だった。\n\n夏希さんは、すぐには返さなかった。\nペン先だけが、机の上で短く鳴った。\n\n私は息を吸った。\n遅いのかもしれない。\nでも、何を置いたまま走るかは、まだ決めたくなかった。"
          }
        ],
        "breakthrough_scene": [
          {
            "speaker": "narration",
            "text": "ゲートが開いた音がした。\n\n会場のざわめきが、少し遅れて戻ってくる。\n私は画面から目を離せなかった。\n\n答えは、ただの単語だった。\nでも、その単語の後ろに、急に広い場所が見えた気がした。"
          },
          {
            "speaker": "ハル",
            "text": "「状態って……」"
          },
          {
            "speaker": "narration",
            "text": "私はノートを見下ろした。"
          },
          {
            "speaker": "ハル",
            "text": "「読めば答えが出てくる札、みたいなものじゃないんだね」"
          },
          {
            "speaker": "narration",
            "text": "誰も急かさなかった。"
          },
          {
            "speaker": "ハル",
            "text": "「どんな測定なら、何が言えるのか。その約束、みたいなものなんだ」"
          },
          {
            "speaker": "narration",
            "text": "言い終えてから、少し恥ずかしくなった。\nうまく言えた自信はなかった。\n\n佐代先輩が、私のノートを見た。"
          },
          {
            "speaker": "サヨ",
            "text": "「それでいい」"
          },
          {
            "speaker": "narration",
            "text": "その声は、とても静かだった。"
          },
          {
            "speaker": "narration",
            "text": "「私が残したかったノートの、一ページ目はそこだから」"
          },
          {
            "speaker": "narration",
            "text": "私はもう一度、ペンを持ち直した。"
          }
        ],
        "notebook_update": "私はノートの新しい行に、ゆっくり書いた。\n\nまず、空間の名前。\n次に、基底の名前。\nそれから、その演算子が何をしてよいのか。\n\n書いてから、少しだけ線を太くした。\n\n焦ったら、答えの形だけを見る。\n落ち着いたら、記号のいる場所を見る。\n\n私は後者を選べるようになりたいと思った。",
        "next_hook": "最初のラウンドが終わっても、青藍の席はまだ静かだった。\n\n私は水を飲もうとして、手を止めた。\n\n青藍の主将が、次のボードを見ていた。\n調和振動子。\n黒板に並ぶ、見慣れたようで見慣れない記号。\n\n彼女は、もう次の試合が始まっているみたいに笑った。\n\n立花が、小さく舌打ちした。\n\n「……来るよ。順番を間違えたら終わるやつ」\n\n私はノートを閉じなかった。\n\nまだ怖い。\nでも、次のページは白紙のままにしたくなかった。"
      },
      {
        "id": "session_02",
        "title": "Semifinal Pool: Light With Teeth",
        "source_refs": [
          "ref_ch2_radiation",
          "ref_ch3_atom_field"
        ],
        "opening_scene": [
          {
            "speaker": "narration",
            "text": "The second hall had a darkened demonstration bench. One covered cavity sat beneath a glass case like a sleeping instrument."
          },
          {
            "speaker": "touko",
            "text": "If your equation cannot tell me where the field lives, I am going to ask the apparatus instead."
          }
        ],
        "official_briefing": {
          "speaker": "Guest Researcher",
          "topic": "quantized radiation and light-matter coupling",
          "text": "You will move from oscillator language into electromagnetic modes, photon states, Rabi oscillations, and the Jaynes-Cummings model. The task is not to memorize names. You must distinguish classical-field approximations from quantized-field effects, and you must watch which excitation is being exchanged.",
          "what_not_to_assume": "Do not assume bright, coherent, number, and thermal fields have the same photon statistics."
        },
        "mid_scene_reaction": [
          {
            "speaker": "rikka",
            "text": "The mode is an oscillator. The atom is not the oscillator. That difference is the whole match."
          },
          {
            "speaker": "haru",
            "text": "So the field can be a partner, not just a push."
          }
        ],
        "rival_pressure_scene": [
          {
            "speaker": "touko",
            "text": "Where does your photon go if the mirror is not perfect? I will wait."
          },
          {
            "speaker": "rikka",
            "text": "Long enough for me to answer properly, I hope."
          }
        ],
        "breakthrough_scene": [
          {
            "speaker": "haru",
            "text": "The same symbol can feel different when the field stops being a background and starts keeping count."
          },
          {
            "speaker": "minori",
            "text": "You noticed the change of model. That is worth points."
          }
        ],
        "notebook_update": "Haru marks two columns: classical drive and quantized mode. She leaves space between them.",
        "next_hook": "A cross-examination ticket arrives from Kuroha Academy: reservoir memory permitted."
      },
      {
        "id": "session_03",
        "title": "Repechage: The Silent Reservoir",
        "source_refs": [
          "ref_ch4_reservoir",
          "ref_ch5_cavity",
          "ref_ch6_media"
        ],
        "opening_scene": [
          {
            "speaker": "narration",
            "text": "Kuroha's table looked almost empty: two pens, one clock, and a stack of questions sharp enough to make the air feel thinner."
          },
          {
            "speaker": "mio",
            "text": "Tell me what you traced out, and I will tell you whether I believe the answer."
          }
        ],
        "official_briefing": {
          "speaker": "Problem Committee Member",
          "topic": "open quantum systems, cavity loss, and propagation conditions",
          "text": "This round examines what happens when a small quantum system is not alone. You will need reduced density operators, reservoir assumptions, master-equation thinking, and the ability to compare coherent dynamics with loss. In the propagation problems, remember that the medium and field shape each other.",
          "what_not_to_assume": "Do not assume dissipation is a small afterthought; it can decide the observable result."
        },
        "mid_scene_reaction": [
          {
            "speaker": "sayo",
            "text": "Last year, we answered as if the environment had politely left the room."
          },
          {
            "speaker": "haru",
            "text": "It had not."
          }
        ],
        "rival_pressure_scene": [
          {
            "speaker": "mio",
            "text": "Weak coupling, short memory, unchanged reservoir. Which of those are you actually using?"
          },
          {
            "speaker": "minori",
            "text": "Answer her. Not quickly. Correctly."
          }
        ],
        "breakthrough_scene": [
          {
            "speaker": "haru",
            "text": "The missing system still leaves fingerprints. If we ignore it, the clean equation becomes a story we told ourselves."
          },
          {
            "speaker": "mio",
            "text": "That is the first answer today I did not want to interrupt."
          }
        ],
        "notebook_update": "Haru writes: the part you do not observe can still define the state you do observe.",
        "next_hook": "Akebono's borrowed textbook is open to the chapter on qubits."
      },
      {
        "id": "session_04",
        "title": "Finalist Selection: Information That Cannot Be Copied",
        "source_refs": [
          "ref_ch8_qubits",
          "ref_ch8_entanglement"
        ],
        "opening_scene": [
          {
            "speaker": "narration",
            "text": "By evening, the tournament hall had stopped feeling huge. It felt close, as if every team was leaning over the same fragile state."
          },
          {
            "speaker": "yui",
            "text": "If we understand it alone, it does not count as understanding for our team."
          }
        ],
        "official_briefing": {
          "speaker": "Announcer",
          "topic": "qubits, gates, no-cloning, entanglement, and protocols",
          "text": "This session turns information into a physical object. You will be asked about qubit states, measurement, no-cloning, Bell states, teleportation, dense coding, and cryptographic basis choices. Keep the difference between a known classical label and an unknown quantum state clear.",
          "what_not_to_assume": "Do not assume entanglement sends usable messages faster than classical communication permits."
        },
        "mid_scene_reaction": [
          {
            "speaker": "haru",
            "text": "Not being able to copy it is not a weakness. It is the rule that makes the rest meaningful."
          },
          {
            "speaker": "rikka",
            "text": "You just said the theorem like it mattered to a person."
          }
        ],
        "rival_pressure_scene": [
          {
            "speaker": "yui",
            "text": "If your partner cannot follow the protocol, the protocol has not really arrived."
          },
          {
            "speaker": "sayo",
            "text": "That is inheritance too."
          }
        ],
        "breakthrough_scene": [
          {
            "speaker": "haru",
            "text": "Entanglement is not a shortcut around explanation. It is a stricter promise about the whole."
          },
          {
            "speaker": "minori",
            "text": "You may be ready for the last room."
          }
        ],
        "notebook_update": "Haru writes: physical information has rules, and those rules can protect trust.",
        "next_hook": "The finalist board is covered before anyone can read the route."
      },
      {
        "id": "session_05",
        "title": "Final Session: The Device That Has To Be Real",
        "source_refs": [
          "ref_ch9_computation",
          "ref_ch10_implementation"
        ],
        "opening_scene": [
          {
            "speaker": "narration",
            "text": "The final session opened without music. Only a clean circuit diagram, a cavity sketch, and a list of allowed assumptions appeared on the screen."
          },
          {
            "speaker": "sayo",
            "text": "This is the question I could not carry alone."
          }
        ],
        "official_briefing": {
          "speaker": "Chief Judge",
          "topic": "algorithms, error correction, and physical implementation",
          "text": "The final session asks you to connect abstract computation with physical systems. You may use algorithms, error correction, and implementation criteria, but every claim must identify what is being controlled, what decoheres, how readout works, and what assumptions make the model valid.",
          "what_not_to_assume": "Do not claim scalable computation from a single elegant effect."
        },
        "mid_scene_reaction": [
          {
            "speaker": "rikka",
            "text": "A circuit is not a machine until the physics can keep the promise."
          },
          {
            "speaker": "haru",
            "text": "Then we answer as a team. Promise by promise."
          }
        ],
        "rival_pressure_scene": [
          {
            "speaker": "natsuki",
            "text": "If you omit one condition, the whole proof becomes decoration."
          },
          {
            "speaker": "haru",
            "text": "Then I will not omit it."
          }
        ],
        "breakthrough_scene": [
          {
            "speaker": "haru",
            "text": "Our final statement has to name what is controlled, what is limited, and what we still cannot claim."
          },
          {
            "speaker": "minori",
            "text": "That answer belongs to this year's team."
          }
        ],
        "notebook_update": "Haru closes the notebook before the scoreboard; the detailed final outcome remains sealed.",
        "next_hook": "The exact final result and ending route are sealed to preserve spoiler control outside play."
      }
    ]
  },
  "prompts": {
    "_meta": {
      "generated_at": "2026-06-18",
      "generation_kind": "prompts",
      "review_mode": true,
      "spoiler_mode": "safe",
      "source_policy": "PDF-derived learning content; story structure and characters are model_inference."
    },
    "evaluation_policy": {
      "machine_graded_gate": true,
      "open_answer_lock": true,
      "model_answer_reveal_after_gate": true,
      "self_assessment": true,
      "retry_tracking": true
    },
    "prompts": [
      {
        "id": "p01_ket",
        "session_id": "session_01",
        "round": "基礎ラウンド",
        "stage_label": "クイック問題",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch1_framework"
        ],
        "question": "ディラック記法で (|\\psi\\rangle) と書かれるものは、何ベクトルと呼ばれるか。",
        "gate": {
          "type": "term_blank",
          "answers": [
            "ket",
            "ket vector"
          ]
        },
        "open_question": "なぜ、ケットだけではまだ「測定結果」とは言えないのか。状態を表すことと、測定で値が出ることを分けて説明せよ。",
        "model_answer": "ケットは、系のヒルベルト空間（Hilbert space）に属する状態ベクトル（state vector）を表す。測定結果は、観測量（observable）に対応する演算子と、その測定確率によって語られるものであり、(|\\psi\\rangle) という記号だけがそのまま測定値を表すわけではない。",
        "teammate_whisper": "春が小さく言う。「まず名前。意味は、そのあと逃がさなければいい」",
        "judge_criteria": [
          "ケットを正しく状態ベクトルとして名づけている。",
          "状態の表現と測定結果を区別している。"
        ],
        "retry_policy": "機械採点ゲートを通過するまで、模範解答は表示されない。模範解答を閲覧した場合、この問題は cleared_with_answer として扱う。"
      },
      {
        "id": "p02_hermitian",
        "session_id": "session_01",
        "round": "基礎ラウンド",
        "stage_label": "クイック問題",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch1_framework"
        ],
        "question": "真か偽か。観測量を表すエルミート演算子（Hermitian operator）の固有値は実数である。",
        "gate": {
          "type": "true_false",
          "answer": true
        },
        "open_question": "物語上、このラウンドはなぜ「観測量がエルミートであること」にこだわっているのか。形式的な条件と、測定で得られる値の関係を説明せよ。",
        "model_answer": "エルミート演算子の固有値は実数であり、実際の測定で得られる可能な値として解釈できる。したがって、エルミート性は単なる記法上の美しさではなく、観測量が物理的な測定結果を表すための条件になっている。",
        "teammate_whisper": "実里先輩が机を軽く叩く。「きれいな式かどうかじゃない。測って出てきて困らない値かどうか」",
        "judge_criteria": [
          "エルミート性と固有値が実数であることを結びつけている。",
          "実数の固有値が測定結果として解釈されることを説明している。"
        ],
        "retry_policy": "機械採点ゲートを通過するまで、模範解答は表示されない。模範解答を閲覧した場合、この問題は cleared_with_answer として扱う。"
      },
      {
        "id": "p03_commutator",
        "session_id": "session_01",
        "round": "基礎ラウンド",
        "stage_label": "式の空欄補充",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch1_oscillator"
        ],
        "question": "調和振動子の代数で、次の空欄を埋めよ。\n\n[\n[a, a^\\dagger] = __\n]",
        "gate": {
          "type": "formula_blank",
          "answers": [
            "1",
            "I",
            "identity"
          ]
        },
        "open_question": "この交換関係は、どんな早合点をしてはいけないと警告しているのか。演算子の順序に注目して説明せよ。",
        "model_answer": "交換関係は ([a, a^\\dagger] = 1) である。これは、消滅演算子 (a) と生成演算子 (a^\\dagger) が普通の数のようには交換しないことを示している。順序を入れ替えると結果が変わり、状態の階段構造にも影響するため、演算子を通常の代数変数のように扱ってはいけない。",
        "teammate_whisper": "立花が早口で言う。「順番を落とさないで。そこ、答えの一部だから」",
        "judge_criteria": [
          "正しい交換関係を答えている。",
          "非可換性、つまり演算子の順序が意味を持つことを説明している。"
        ],
        "retry_policy": "機械採点ゲートを通過するまで、模範解答は表示されない。模範解答を閲覧した場合、この問題は cleared_with_answer として扱う。"
      },
      {
        "id": "p04_ground_energy",
        "session_id": "session_01",
        "round": "基礎ラウンド",
        "stage_label": "数値ゲート",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch1_oscillator"
        ],
        "question": "調和振動子の基底状態エネルギーは、(\\hbar\\omega) の何倍か。",
        "gate": {
          "type": "numeric",
          "answer": 0.5,
          "tolerance": 0.001
        },
        "open_question": "この模型で、基底状態のエネルギーがゼロにならないのはなぜか。エネルギースペクトルと量子構造に触れて説明せよ。",
        "model_answer": "量子調和振動子のエネルギースペクトルは (\\hbar\\omega(n + 1/2)) で表される。したがって (n=0) の基底状態でも、エネルギーは (0) ではなく ((1/2)\\hbar\\omega) になる。これは零点エネルギー（zero-point energy）であり、調和振動子を演算子代数で量子化した構造に由来する。",
        "teammate_whisper": "佐代先輩が静かに言う。「いちばん静かな状態にも、まだ消せない形がある」",
        "judge_criteria": [
          "数値として (0.5) を答えている。",
          "零点エネルギーに言及している。",
          "必要に応じて (\\hbar\\omega(n + 1/2)) のスペクトルと結びつけている。"
        ],
        "retry_policy": "機械採点ゲートを通過するまで、模範解答は表示されない。模範解答を閲覧した場合、この問題は cleared_with_answer として扱う。"
      },
      {
        "id": "p05_density_pure",
        "session_id": "session_01",
        "round": "説明ラウンド",
        "stage_label": "黒板説明",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch1_density"
        ],
        "question": "純粋状態の密度演算子が (\\rho = |\\psi\\rangle\\langle\\psi|) で与えられるとき、次の恒等式を埋めよ。\n\n[\n\\rho^2 = __\n]",
        "gate": {
          "type": "term_blank",
          "answers": [
            "rho",
            "ρ"
          ]
        },
        "open_question": "系が混合状態である場合、または大きな系から一部分だけを取り出して記述する場合、何が変わるのか。純粋状態との違いを説明せよ。",
        "model_answer": "純粋状態の密度演算子 (\\rho = |\\psi\\rangle\\langle\\psi|) は冪等性（idempotency）を持ち、(\\rho^2 = \\rho) を満たす。一方、混合状態や、より大きな系から部分系だけを取り出した縮約密度演算子（reduced density operator）は、一般には同じ純粋性の関係を満たさない。特に、無視した部分系と量子的に相関している場合、部分系だけを見るとコヒーレンスが失われたような記述になることがある。",
        "teammate_whisper": "春は (\\rho) を二度丸で囲んだ。「二回かけたあと、何に戻るのか……そこだけ見たい」",
        "judge_criteria": [
          "空欄に (\\rho) を入れている。",
          "純粋状態と混合状態、または縮約状態の違いを説明している。",
          "冪等性や純粋性の関係に触れている。"
        ],
        "retry_policy": "機械採点ゲートを通過するまで、模範解答は表示されない。模範解答を閲覧した場合、この問題は cleared_with_answer として扱う。"
      },
      {
        "id": "p05_transfer_basis_change",
        "session_id": "session_01",
        "round": "転用ラウンド",
        "stage_label": "転用チャレンジ",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch1_framework"
        ],
        "question": "ある状態を一つの基底で展開し、別の基底で書き直す。このとき、成分を基底間で変換するのは、どのような行列か。",
        "gate": {
          "type": "short_keyword",
          "answers": [
            "transformation matrix",
            "unitary transformation",
            "unitary matrix"
          ]
        },
        "open_question": "基底を変えても状態そのものは保たれ、変わるのはそれを記述する座標成分である。これはなぜか、状態と成分を区別して説明せよ。",
        "model_answer": "状態ベクトルは同じ物理的対象であり、基底を変えると変化するのは、その状態を表す成分である。成分は変換行列（transformation matrix）によって書き換えられる。量子力学で正規直交基底どうしを移る場合には、多くの場合ユニタリ行列（unitary matrix）として表される。",
        "teammate_whisper": "立花が言う。「座標は動く。でも、状態まで動いたと決めつけないで」",
        "judge_criteria": [
          "基底変換を行う行列、または変換行列という考えを答えている。",
          "状態そのものと、その座標成分を区別して説明している。",
          "正規直交基底の場合にユニタリ変換となることに触れられていれば望ましい。"
        ],
        "retry_policy": "機械採点ゲートを通過するまで、模範解答は表示されない。自己評価の後に模範解答を閲覧した場合、この問題は cleared_with_answer として扱う。"
      },
      {
        "id": "p06_partial_trace",
        "session_id": "session_01",
        "round": "反対尋問ラウンド",
        "stage_label": "クロス・エグザミネーション",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch1_density"
        ],
        "question": "複合系のうち、一方の部分系について跡を取り、もう一方の部分系の密度演算子を得る操作を何というか。",
        "gate": {
          "type": "short_keyword",
          "answers": [
            "partial trace",
            "trace over",
            "reduced trace"
          ]
        },
        "open_question": "この操作を無視すると、なぜチームは減点されるのか。見ていない部分系との関係に注目して説明せよ。",
        "model_answer": "無視する部分系と注目する部分系がエンタングルしている場合、注目する部分系は単独の純粋状態ベクトルではなく、縮約密度演算子（reduced density operator）で記述される。この縮約密度演算子は、見ていない部分系について部分跡（partial trace）を取ることで得られる。したがって、部分跡を無視すると、部分系の状態を過度に単純化してしまい、物理的に正しい記述を失う。",
        "teammate_whisper": "澪はまだここにいない。それなのに、この問いだけ、もう彼女の声みたいに聞こえる。「見てないものを、なかったことにしないで」",
        "judge_criteria": [
          "部分跡、または partial trace を正しく名づけている。",
          "無視した部分系が、注目する部分系の記述に影響しうることを説明している。",
          "エンタングルメントがある場合、部分系は単独の純粋状態とは限らないと述べている。"
        ],
        "retry_policy": "機械採点ゲートを通過するまで、模範解答は表示されない。模範解答を閲覧した場合、この問題は cleared_with_answer として扱う。"
      },
      {
        "id": "p07_modes",
        "session_id": "session_02",
        "round": "Foundation Round",
        "stage_label": "Quick Problem",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch2_radiation",
          "ref_ch1_oscillator"
        ],
        "question": "The quantized electromagnetic field treats each mode like a quantum harmonic ___.",
        "gate": {
          "type": "term_blank",
          "answers": [
            "oscillator",
            "harmonic oscillator"
          ]
        },
        "open_question": "How does this connect Chapter 1 to radiation?",
        "model_answer": "Field quantization reuses oscillator algebra for field modes, so number states and creation/annihilation operators become photon language.",
        "teammate_whisper": "Rikka points from the oscillator board to the cavity sketch.",
        "judge_criteria": [
          "Names oscillator",
          "Connects mode quantization to photons"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p08_number_state",
        "session_id": "session_02",
        "round": "Foundation Round",
        "stage_label": "Choice Gate",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch2_radiation"
        ],
        "question": "Which field state has a definite photon number?",
        "gate": {
          "type": "choice",
          "answer": "number_state",
          "options": [
            {
              "value": "coherent_state",
              "label": "Coherent state"
            },
            {
              "value": "number_state",
              "label": "Number/Fock state"
            },
            {
              "value": "thermal_state",
              "label": "Thermal state"
            }
          ]
        },
        "open_question": "Why does definite photon number not mean classical field behavior?",
        "model_answer": "A number state has fixed photon count but lacks the same phase-like classical field character associated with coherent states.",
        "teammate_whisper": "Touko: countable is not the same as classical.",
        "judge_criteria": [
          "Chooses number/Fock state",
          "Distinguishes photon number from classicality"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p09_coherent_eigen",
        "session_id": "session_02",
        "round": "Foundation Round",
        "stage_label": "Term Blank",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch1_oscillator",
          "ref_ch2_radiation"
        ],
        "question": "Coherent states are eigenstates of which oscillator operator?",
        "gate": {
          "type": "short_keyword",
          "answers": [
            "annihilation operator",
            "a",
            "lowering operator"
          ]
        },
        "open_question": "Why does this make coherent states useful for light?",
        "model_answer": "Because annihilation acting on a coherent state returns the state times a complex amplitude, making them close to classical field behavior while remaining quantum states.",
        "teammate_whisper": "Sayo: the state bends without breaking.",
        "judge_criteria": [
          "Names annihilation operator",
          "Explains classical-like amplitude"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p10_rabi",
        "session_id": "session_02",
        "round": "Explanation Round",
        "stage_label": "Board Explanation",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch3_atom_field"
        ],
        "question": "The coherent oscillation rate for a near-resonant driven two-level atom is commonly called the ___ frequency.",
        "gate": {
          "type": "term_blank",
          "answers": [
            "Rabi",
            "rabi frequency"
          ]
        },
        "open_question": "What physical ingredients affect that frequency in the book's treatment?",
        "model_answer": "The Rabi frequency depends on the field coupling to the atomic transition, commonly through the transition dipole interaction divided by hbar.",
        "teammate_whisper": "Minori: do not recite the name; say what drives it.",
        "judge_criteria": [
          "Names Rabi frequency",
          "Connects to field-transition coupling"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p11_jc_exchange",
        "session_id": "session_02",
        "round": "Transfer Round",
        "stage_label": "Transfer Challenge",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch3_atom_field"
        ],
        "question": "In the Jaynes-Cummings picture, a two-level atom and a single field mode exchange one ___.",
        "gate": {
          "type": "term_blank",
          "answers": [
            "excitation",
            "quantum",
            "photon"
          ]
        },
        "open_question": "Why is this more specific than saying 'the atom is driven by light'?",
        "model_answer": "The model tracks excitation exchange between atom and quantized mode, so the photon-number structure changes the dynamics.",
        "teammate_whisper": "Haru: the field is keeping score.",
        "judge_criteria": [
          "Identifies excitation exchange",
          "Contrasts quantized mode with classical drive"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p12_coherent_vs_number",
        "session_id": "session_02",
        "round": "Cross-Examination Round",
        "stage_label": "True/False",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch2_radiation"
        ],
        "question": "True or false: a coherent state and a number state have the same photon-number uncertainty.",
        "gate": {
          "type": "true_false",
          "answer": false
        },
        "open_question": "What mistake would that false statement make?",
        "model_answer": "It would erase the distinction between fixed photon number and coherent-state photon statistics, a central field-state difference.",
        "teammate_whisper": "Touko grins: statistics are where the apparatus catches you.",
        "judge_criteria": [
          "Answers false",
          "Mentions photon statistics"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p13_reservoir",
        "session_id": "session_03",
        "round": "Foundation Round",
        "stage_label": "Quick Problem",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch4_reservoir"
        ],
        "question": "In the master-equation chapter, the large environment with many densely spaced levels is called a ___.",
        "gate": {
          "type": "term_blank",
          "answers": [
            "reservoir",
            "environment",
            "bath"
          ]
        },
        "open_question": "Why is this object not just background decoration?",
        "model_answer": "The reservoir determines dissipation and decoherence of the reduced system, so it can change observable dynamics.",
        "teammate_whisper": "Mio: the silent thing is still in the equation.",
        "judge_criteria": [
          "Names reservoir/environment",
          "Connects to dissipation/decoherence"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p14_born_markov",
        "session_id": "session_03",
        "round": "Foundation Round",
        "stage_label": "Multiple Selection",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch4_reservoir"
        ],
        "question": "Select the assumptions associated with a Born-Markov style reduction.",
        "gate": {
          "type": "multiple_select",
          "answers": [
            "weak_coupling",
            "short_memory",
            "reservoir_unchanged"
          ],
          "options": [
            {
              "value": "weak_coupling",
              "label": "weak system-reservoir coupling"
            },
            {
              "value": "short_memory",
              "label": "short reservoir memory"
            },
            {
              "value": "reservoir_unchanged",
              "label": "reservoir approximately unchanged"
            },
            {
              "value": "perfect_isolation",
              "label": "perfect isolation from environment"
            }
          ]
        },
        "open_question": "Why are these assumptions emotionally important in the match?",
        "model_answer": "Because the team must not claim a clean reduced equation unless the approximations that justify it have actually been named.",
        "teammate_whisper": "Minori does not look at Haru. She looks at the word 'assumption'.",
        "judge_criteria": [
          "Selects the three approximation conditions",
          "Rejects perfect isolation"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p15_decoherence",
        "session_id": "session_03",
        "round": "Foundation Round",
        "stage_label": "Term Blank",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch4_reservoir",
          "ref_ch8_entanglement"
        ],
        "question": "The loss of phase coherence caused by coupling to unobserved degrees of freedom is called ___.",
        "gate": {
          "type": "term_blank",
          "answers": [
            "decoherence"
          ]
        },
        "open_question": "How does decoherence threaten quantum information processing?",
        "model_answer": "Quantum information relies on coherent superpositions and entanglement; decoherence degrades the phase relations that protocols need.",
        "teammate_whisper": "Sayo: losing the phase is losing the promise.",
        "judge_criteria": [
          "Names decoherence",
          "Connects to information processing"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p16_cavity_loss",
        "session_id": "session_03",
        "round": "Explanation Round",
        "stage_label": "Board Explanation",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch5_cavity"
        ],
        "question": "For strong atom-cavity behavior, coherent coupling g must be compared with cavity loss kappa and atomic decay ___.",
        "gate": {
          "type": "term_blank",
          "answers": [
            "Gamma",
            "gamma",
            "Γ"
          ]
        },
        "open_question": "Why does this comparison matter more than the symbol g alone?",
        "model_answer": "A coupling is only useful for coherent exchange if it acts faster or more strongly than the relevant loss processes.",
        "teammate_whisper": "Touko points at every arrow that leaves the cavity.",
        "judge_criteria": [
          "Names decay rate",
          "Explains coherent exchange versus loss"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p17_eit",
        "session_id": "session_03",
        "round": "Transfer Round",
        "stage_label": "Transfer Challenge",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch6_media"
        ],
        "question": "In three-level media, controlled transparency and slow propagation are associated with the acronym ___.",
        "gate": {
          "type": "term_blank",
          "answers": [
            "EIT",
            "electromagnetically induced transparency"
          ]
        },
        "open_question": "What must the team remember before using EIT as a magic word?",
        "model_answer": "EIT depends on level structure, resonance, drive fields, and adiabatic/control conditions; it is not generic transparency.",
        "teammate_whisper": "Rikka underlines the drive field twice.",
        "judge_criteria": [
          "Names EIT",
          "Mentions conditions"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p18_reduced_state",
        "session_id": "session_03",
        "round": "Cross-Examination Round",
        "stage_label": "Cross-Examination",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch1_density",
          "ref_ch4_reservoir"
        ],
        "question": "If you observe only subsystem A of an entangled A+B state, should A generally be described by a state vector or reduced density operator?",
        "gate": {
          "type": "choice",
          "answer": "reduced_density_operator",
          "options": [
            {
              "value": "state_vector",
              "label": "state vector"
            },
            {
              "value": "reduced_density_operator",
              "label": "reduced density operator"
            }
          ]
        },
        "open_question": "Why is this an important turning point in the team's reasoning?",
        "model_answer": "It forces the team to account for unobserved degrees of freedom before making a claim about the subsystem. The reasoning becomes safer without relying on a standalone pure state.",
        "teammate_whisper": "Mio finally smiles without softening the question.",
        "judge_criteria": [
          "Chooses reduced density operator",
          "Explains entanglement/subsystem reason"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p19_qubit",
        "session_id": "session_04",
        "round": "Foundation Round",
        "stage_label": "Quick Problem",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch8_qubits"
        ],
        "question": "A quantum bit is commonly called a ___.",
        "gate": {
          "type": "term_blank",
          "answers": [
            "qubit",
            "quantum bit"
          ]
        },
        "open_question": "What makes a qubit more than a classical bit with a fancy name?",
        "model_answer": "A qubit can exist in superpositions of basis states and is manipulated by quantum gates and measurements governed by quantum mechanics.",
        "teammate_whisper": "Yui: the smallest word in the room still needs two basis states.",
        "judge_criteria": [
          "Names qubit",
          "Mentions superposition/quantum operations"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p20_no_cloning",
        "session_id": "session_04",
        "round": "Foundation Round",
        "stage_label": "True/False",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch8_qubits"
        ],
        "question": "True or false: an arbitrary unknown quantum state can be perfectly copied by a universal cloning operation.",
        "gate": {
          "type": "true_false",
          "answer": false
        },
        "open_question": "Why does this theorem protect the story's idea of physical information?",
        "model_answer": "No-cloning shows quantum information is constrained by state structure, not merely by technological inconvenience.",
        "teammate_whisper": "Haru: if it cannot be copied, listening matters.",
        "judge_criteria": [
          "Answers false",
          "Explains arbitrary unknown state"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p21_bell",
        "session_id": "session_04",
        "round": "Foundation Round",
        "stage_label": "Term Blank",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch8_entanglement"
        ],
        "question": "Bell states are examples of two-qubit ___ states.",
        "gate": {
          "type": "term_blank",
          "answers": [
            "entangled",
            "entanglement"
          ]
        },
        "open_question": "Why are Bell states so useful in protocols?",
        "model_answer": "They provide shared entanglement used in protocols such as teleportation and dense coding, and in discussions of nonlocal correlations.",
        "teammate_whisper": "Sayo folds two fingers together: not separate anymore.",
        "judge_criteria": [
          "Names entanglement",
          "Connects to protocols"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p22_measurement",
        "session_id": "session_04",
        "round": "Explanation Round",
        "stage_label": "Choice Gate",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch8_qubits"
        ],
        "question": "After qubit measurement in a chosen basis, what kind of result is obtained?",
        "gate": {
          "type": "choice",
          "answer": "basis_outcome",
          "options": [
            {
              "value": "full_state_text",
              "label": "a full written copy of the state"
            },
            {
              "value": "basis_outcome",
              "label": "one basis outcome with probabilities"
            },
            {
              "value": "hidden_variable",
              "label": "the hidden variable value"
            }
          ]
        },
        "open_question": "Why is basis choice part of the answer?",
        "model_answer": "Measurement outcomes and probabilities are defined relative to the measurement basis; the result is not a full copy of the pre-measurement state.",
        "teammate_whisper": "Minori: say the basis or lose the point.",
        "judge_criteria": [
          "Chooses basis outcome",
          "Mentions probabilities/basis"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p23_protocol_match",
        "session_id": "session_04",
        "round": "Transfer Round",
        "stage_label": "Matching",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch8_entanglement"
        ],
        "question": "Match protocols to key resources. Use the format A-1,B-2,C-3. A=BB84, B=Teleportation, C=Dense coding. 1=two classical bits with one qubit using shared entanglement, 2=random bases for key distribution, 3=shared entanglement plus classical communication.",
        "gate": {
          "type": "matching",
          "answers": {
            "A": "2",
            "B": "3",
            "C": "1"
          }
        },
        "open_question": "Why is it dangerous to mix up these resources?",
        "model_answer": "Each protocol's power comes from a specific resource pattern; confusing them leads to impossible claims about communication or security.",
        "teammate_whisper": "Yui: protocols are team formations.",
        "judge_criteria": [
          "Matches all resources correctly",
          "Explains resource specificity"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p24_bell_limit",
        "session_id": "session_04",
        "round": "Cross-Examination Round",
        "stage_label": "Cross-Examination",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch8_entanglement"
        ],
        "question": "True or false: entanglement by itself allows faster-than-light usable communication.",
        "gate": {
          "type": "true_false",
          "answer": false
        },
        "open_question": "How does this keep the story scientifically honest?",
        "model_answer": "Entanglement gives strong correlations, but usable communication still respects the need for classical information in protocols like teleportation.",
        "teammate_whisper": "Mio's question reaches the table before her voice does.",
        "judge_criteria": [
          "Answers false",
          "Distinguishes correlation from communication"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p25_reversible",
        "session_id": "session_05",
        "round": "Foundation Round",
        "stage_label": "Choice Gate",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch7_classical_computation",
          "ref_ch9_computation",
          "ref_ch1_framework"
        ],
        "question": "Why are reversible operations central in quantum computation?",
        "gate": {
          "type": "choice",
          "answer": "unitary_reversible",
          "options": [
            {
              "value": "unitary_reversible",
              "label": "closed-system quantum gates are unitary and reversible"
            },
            {
              "value": "erase_faster",
              "label": "erasure is always faster"
            },
            {
              "value": "avoid_math",
              "label": "they avoid linear algebra"
            }
          ]
        },
        "open_question": "How does this connect computation back to Chapter 1?",
        "model_answer": "Unitary gate evolution is the operator language of quantum mechanics applied to information processing.",
        "teammate_whisper": "Rikka: the circuit is still a vector-space story.",
        "judge_criteria": [
          "Chooses unitary/reversible",
          "Connects gates to operators"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p26_grover",
        "session_id": "session_05",
        "round": "Foundation Round",
        "stage_label": "Term Blank",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch9_computation"
        ],
        "question": "Grover's unstructured search algorithm is known for a ___ speedup.",
        "gate": {
          "type": "term_blank",
          "answers": [
            "quadratic"
          ]
        },
        "open_question": "Why is this impressive but not magical?",
        "model_answer": "It improves unstructured search quadratically under the model assumptions; it does not make every computational problem exponentially faster.",
        "teammate_whisper": "Minori: respect the speedup by not exaggerating it.",
        "judge_criteria": [
          "Names quadratic",
          "Avoids overclaiming"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p27_qft",
        "session_id": "session_05",
        "round": "Foundation Round",
        "stage_label": "Term Blank",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch9_computation"
        ],
        "question": "QFT stands for Quantum ___ Transform.",
        "gate": {
          "type": "term_blank",
          "answers": [
            "Fourier"
          ]
        },
        "open_question": "What kind of structure does the QFT exploit?",
        "model_answer": "It reorganizes amplitudes through phase relationships, making periodic structure accessible in quantum algorithms.",
        "teammate_whisper": "Sayo: phases can be a map if you know how to read them.",
        "judge_criteria": [
          "Names Fourier",
          "Mentions phase/periodic structure"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p28_error_correction",
        "session_id": "session_05",
        "round": "Explanation Round",
        "stage_label": "Multiple Selection",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch9_computation",
          "ref_ch8_qubits"
        ],
        "question": "Which ideas belong to quantum error correction?",
        "gate": {
          "type": "multiple_select",
          "answers": [
            "syndrome",
            "ancilla",
            "no_direct_readout"
          ],
          "options": [
            {
              "value": "syndrome",
              "label": "measure an error syndrome"
            },
            {
              "value": "ancilla",
              "label": "use ancillary degrees of freedom"
            },
            {
              "value": "no_direct_readout",
              "label": "avoid directly reading the unknown encoded state"
            },
            {
              "value": "clone_state",
              "label": "clone the unknown state many times"
            }
          ]
        },
        "open_question": "Why does no-cloning make error correction subtle?",
        "model_answer": "The encoded state cannot simply be copied and voted on; error correction must infer errors indirectly through syndromes and redundancy.",
        "teammate_whisper": "Haru: protect it without stealing it.",
        "judge_criteria": [
          "Selects syndrome/ancilla/no direct readout",
          "Rejects cloning"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p29_requirements",
        "session_id": "session_05",
        "round": "Transfer Round",
        "stage_label": "Matching",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch10_implementation"
        ],
        "question": "Match implementation requirements. Use the format A-1,B-2,C-3. A=readout, B=initialization, C=low decoherence. 1=prepare a known starting state, 2=keep coherence longer than gate operations, 3=measure qubits reliably.",
        "gate": {
          "type": "matching",
          "answers": {
            "A": "3",
            "B": "1",
            "C": "2"
          }
        },
        "open_question": "Why is the final session not satisfied by a circuit diagram alone?",
        "model_answer": "A real implementation must initialize, control, preserve, and read out qubits under physical error and decoherence limits.",
        "teammate_whisper": "Touko: show me the machine that keeps the promise.",
        "judge_criteria": [
          "Matches requirements",
          "Explains physical implementation constraints"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      },
      {
        "id": "p30_final_synthesis",
        "session_id": "session_05",
        "round": "Cross-Examination Round",
        "stage_label": "Final Statement",
        "source_label": "source_pdf",
        "source_refs": [
          "ref_ch10_implementation",
          "ref_ch9_computation",
          "ref_ch4_reservoir"
        ],
        "question": "Which final statement is safer for a physical quantum-computation claim?",
        "gate": {
          "type": "choice",
          "answer": "full_conditions",
          "options": [
            {
              "value": "single_effect",
              "label": "One striking quantum effect is enough"
            },
            {
              "value": "full_conditions",
              "label": "Name the needed physical conditions and limits"
            }
          ]
        },
        "open_question": "Explain why scope conditions matter in a final statement.",
        "model_answer": "A safe final statement ties the abstract claim to stated physical conditions, controls, and limits. It avoids overclaiming from a single effect.",
        "teammate_whisper": "Sayo does not give Haru the sentence. She gives her the silence to build it.",
        "judge_criteria": [
          "Chooses full condition set",
          "Synthesizes across source refs"
        ],
        "retry_policy": "Model answer remains locked until the machine-graded gate is cleared. Viewing the model answer marks the prompt as cleared_with_answer."
      }
    ]
  },
  "scenario": {
    "_meta": {
      "generated_at": "2026-06-18",
      "generation_kind": "scenario_public",
      "review_mode": true,
      "spoiler_mode": "safe",
      "source_policy": "PDF-derived learning content; story structure and characters are model_inference."
    },
    "spoiler_policy": "Playable safe scenario text. Full final ending/result details are sealed.",
    "title": "Photon Relay: The Question Sayo Left Behind",
    "logline": "A local visual-novel science olympiad game where PDF-grounded prompts unlock a tournament story about assumptions, inheritance, and physical quantum information.",
    "cast": [
      "haru",
      "rikka",
      "sayo",
      "minori",
      "natsuki",
      "mio",
      "touko",
      "yui"
    ],
    "sessions": [
      {
        "id": "session_01",
        "title": "Qualifier: The Space Before the Answer",
        "source_refs": [
          "ref_ch1_framework",
          "ref_ch1_oscillator",
          "ref_ch1_density"
        ],
        "opening_scene": [
          {
            "speaker": "narration",
            "text": "地方予選の会場は、思っていたよりずっと静かだった。\n\n磨かれた床の匂い。\n黒板のチョークの粉。\nページをめくる音まで、審査されているみたいに響く。\n\n私は、膝の上で手を握った。\n\n前の席の制服。横に並ぶ名札。知らない学校の視線。\nどれも、私たちより先に答えを知っているように見えた。"
          },
          {
            "speaker": "ハル",
            "text": "「……私、記号の意味が分からなかったら、ちゃんと言う」"
          },
          {
            "speaker": "narration",
            "text": "声に出した瞬間、喉が少しだけ震えた。\nでも、飲み込まなかった。"
          },
          {
            "speaker": "ハル",
            "text": "「みんなに聞こえても、言う」"
          },
          {
            "speaker": "narration",
            "text": "実里先輩は、こちらを見ずに小さくうなずいた。"
          },
          {
            "speaker": "ミノリ",
            "text": "「いいよ」"
          },
          {
            "speaker": "narration",
            "text": "柔らかい声だった。\nけれど、その次の言葉だけ、少し硬かった。"
          },
          {
            "speaker": "ミノリ",
            "text": "「間違った沈黙のほうが、間違った答えより高くつくから」"
          }
        ],
        "official_briefing": {
          "speaker": "審査主任",
          "topic": "量子力学の基本言語",
          "text": "正面のスクリーンに、最初のラウンド名が映った。\n\n基礎ラウンド。\n量子力学の言葉。\n\n会場の空気が、半音だけ低くなる。\n\n審査主任がマイクの前に立った。\n\n「本ラウンドでは、量子力学の基本言語を問います」\n\n声は淡々としていた。\nだからこそ、一語ずつ重かった。\n\n「状態ベクトル、基底展開、観測量としての演算子、調和振動子の代数、密度演算子。いずれも、計算以前に、記号が何を表しているかを見極める問題です」\n\n私はノートの端に、急いで単語だけを書き取った。\n\n状態。\n基底。\n演算子。\n密度。\n\n「一行に収まっているからといって、その記号をただの数だと思わないこと」\n\nペン先が止まった。\n\n「それはどの空間に作用するのか。どの基底で書かれているのか。見ていない部分系を切り離してよいのか。必ず確認してください」\n\n審査主任は、少し間を置いた。\n\n「特に、交換しない演算子を、普通の文字式のように扱わないこと」\n\nその一言で、隣の立花が顔を上げた。\n\n私はまだ、何を見落とすのか分からなかった。\nでも、見落としたら負ける場所に来てしまったことだけは分かった。",
          "what_not_to_assume": "特に、交換しない演算子を、普通の文字式のように扱わないこと"
        },
        "mid_scene_reaction": [
          {
            "speaker": "narration",
            "text": "解答欄に入れる言葉は、思ったより短かった。\n\n短い。\nだから、怖い。\n\n立花が画面を見たまま、早口で言った。"
          },
          {
            "speaker": "立花",
            "text": "「答えは短い。でも、足りない理由は短くない」"
          },
          {
            "speaker": "narration",
            "text": "私は、消しゴムを握ったままうなずいた。\n\nたぶん、ここで名前だけ入れれば、ゲートは開く。\nでも、それだけで進んだら、次で落ちる気がした。"
          },
          {
            "speaker": "ハル",
            "text": "「じゃあ……理由がほしい」"
          },
          {
            "speaker": "narration",
            "text": "自分の声は小さかった。\nでも、隣の実里先輩には届いた。"
          },
          {
            "speaker": "ハル",
            "text": "「私たちが説明できないなら、まだ持ってないってことだよね」"
          },
          {
            "speaker": "narration",
            "text": "立花のペンが、一度だけ止まった。"
          },
          {
            "speaker": "立花",
            "text": "「……そう。今のは、いい止まり方」"
          }
        ],
        "rival_pressure_scene": [
          {
            "speaker": "narration",
            "text": "隣のブロックから、低い声が聞こえた。"
          },
          {
            "speaker": "ナツキ",
            "text": "「桜庭、今年は遅いね」"
          },
          {
            "speaker": "narration",
            "text": "青藍の名札。\n夏希さんだった。\n\n笑っているように見えた。\nでも、目は問題画面から離れていない。\n\n私は思わず肩に力を入れた。\n遅い。\nその言葉だけで、会場の時計の音が近くなる。\n\n実里先輩は、画面に視線を戻したまま答えた。"
          },
          {
            "speaker": "ミノリ",
            "text": "「今年の桜庭は、仮定に名前をつけてるの」"
          },
          {
            "speaker": "narration",
            "text": "静かな声だった。\n\n夏希さんは、すぐには返さなかった。\nペン先だけが、机の上で短く鳴った。\n\n私は息を吸った。\n遅いのかもしれない。\nでも、何を置いたまま走るかは、まだ決めたくなかった。"
          }
        ],
        "breakthrough_scene": [
          {
            "speaker": "narration",
            "text": "ゲートが開いた音がした。\n\n会場のざわめきが、少し遅れて戻ってくる。\n私は画面から目を離せなかった。\n\n答えは、ただの単語だった。\nでも、その単語の後ろに、急に広い場所が見えた気がした。"
          },
          {
            "speaker": "ハル",
            "text": "「状態って……」"
          },
          {
            "speaker": "narration",
            "text": "私はノートを見下ろした。"
          },
          {
            "speaker": "ハル",
            "text": "「読めば答えが出てくる札、みたいなものじゃないんだね」"
          },
          {
            "speaker": "narration",
            "text": "誰も急かさなかった。"
          },
          {
            "speaker": "ハル",
            "text": "「どんな測定なら、何が言えるのか。その約束、みたいなものなんだ」"
          },
          {
            "speaker": "narration",
            "text": "言い終えてから、少し恥ずかしくなった。\nうまく言えた自信はなかった。\n\n佐代先輩が、私のノートを見た。"
          },
          {
            "speaker": "サヨ",
            "text": "「それでいい」"
          },
          {
            "speaker": "narration",
            "text": "その声は、とても静かだった。"
          },
          {
            "speaker": "narration",
            "text": "「私が残したかったノートの、一ページ目はそこだから」"
          },
          {
            "speaker": "narration",
            "text": "私はもう一度、ペンを持ち直した。"
          }
        ],
        "notebook_update": "私はノートの新しい行に、ゆっくり書いた。\n\nまず、空間の名前。\n次に、基底の名前。\nそれから、その演算子が何をしてよいのか。\n\n書いてから、少しだけ線を太くした。\n\n焦ったら、答えの形だけを見る。\n落ち着いたら、記号のいる場所を見る。\n\n私は後者を選べるようになりたいと思った。",
        "next_hook": "最初のラウンドが終わっても、青藍の席はまだ静かだった。\n\n私は水を飲もうとして、手を止めた。\n\n青藍の主将が、次のボードを見ていた。\n調和振動子。\n黒板に並ぶ、見慣れたようで見慣れない記号。\n\n彼女は、もう次の試合が始まっているみたいに笑った。\n\n立花が、小さく舌打ちした。\n\n「……来るよ。順番を間違えたら終わるやつ」\n\n私はノートを閉じなかった。\n\nまだ怖い。\nでも、次のページは白紙のままにしたくなかった。"
      },
      {
        "id": "session_02",
        "title": "Semifinal Pool: Light With Teeth",
        "source_refs": [
          "ref_ch2_radiation",
          "ref_ch3_atom_field"
        ],
        "opening_scene": [
          {
            "speaker": "narration",
            "text": "The second hall had a darkened demonstration bench. One covered cavity sat beneath a glass case like a sleeping instrument."
          },
          {
            "speaker": "touko",
            "text": "If your equation cannot tell me where the field lives, I am going to ask the apparatus instead."
          }
        ],
        "official_briefing": {
          "speaker": "Guest Researcher",
          "topic": "quantized radiation and light-matter coupling",
          "text": "You will move from oscillator language into electromagnetic modes, photon states, Rabi oscillations, and the Jaynes-Cummings model. The task is not to memorize names. You must distinguish classical-field approximations from quantized-field effects, and you must watch which excitation is being exchanged.",
          "what_not_to_assume": "Do not assume bright, coherent, number, and thermal fields have the same photon statistics."
        },
        "mid_scene_reaction": [
          {
            "speaker": "rikka",
            "text": "The mode is an oscillator. The atom is not the oscillator. That difference is the whole match."
          },
          {
            "speaker": "haru",
            "text": "So the field can be a partner, not just a push."
          }
        ],
        "rival_pressure_scene": [
          {
            "speaker": "touko",
            "text": "Where does your photon go if the mirror is not perfect? I will wait."
          },
          {
            "speaker": "rikka",
            "text": "Long enough for me to answer properly, I hope."
          }
        ],
        "breakthrough_scene": [
          {
            "speaker": "haru",
            "text": "The same symbol can feel different when the field stops being a background and starts keeping count."
          },
          {
            "speaker": "minori",
            "text": "You noticed the change of model. That is worth points."
          }
        ],
        "notebook_update": "Haru marks two columns: classical drive and quantized mode. She leaves space between them.",
        "next_hook": "A cross-examination ticket arrives from Kuroha Academy: reservoir memory permitted."
      },
      {
        "id": "session_03",
        "title": "Repechage: The Silent Reservoir",
        "source_refs": [
          "ref_ch4_reservoir",
          "ref_ch5_cavity",
          "ref_ch6_media"
        ],
        "opening_scene": [
          {
            "speaker": "narration",
            "text": "Kuroha's table looked almost empty: two pens, one clock, and a stack of questions sharp enough to make the air feel thinner."
          },
          {
            "speaker": "mio",
            "text": "Tell me what you traced out, and I will tell you whether I believe the answer."
          }
        ],
        "official_briefing": {
          "speaker": "Problem Committee Member",
          "topic": "open quantum systems, cavity loss, and propagation conditions",
          "text": "This round examines what happens when a small quantum system is not alone. You will need reduced density operators, reservoir assumptions, master-equation thinking, and the ability to compare coherent dynamics with loss. In the propagation problems, remember that the medium and field shape each other.",
          "what_not_to_assume": "Do not assume dissipation is a small afterthought; it can decide the observable result."
        },
        "mid_scene_reaction": [
          {
            "speaker": "sayo",
            "text": "Last year, we answered as if the environment had politely left the room."
          },
          {
            "speaker": "haru",
            "text": "It had not."
          }
        ],
        "rival_pressure_scene": [
          {
            "speaker": "mio",
            "text": "Weak coupling, short memory, unchanged reservoir. Which of those are you actually using?"
          },
          {
            "speaker": "minori",
            "text": "Answer her. Not quickly. Correctly."
          }
        ],
        "breakthrough_scene": [
          {
            "speaker": "haru",
            "text": "The missing system still leaves fingerprints. If we ignore it, the clean equation becomes a story we told ourselves."
          },
          {
            "speaker": "mio",
            "text": "That is the first answer today I did not want to interrupt."
          }
        ],
        "notebook_update": "Haru writes: the part you do not observe can still define the state you do observe.",
        "next_hook": "Akebono's borrowed textbook is open to the chapter on qubits."
      },
      {
        "id": "session_04",
        "title": "Finalist Selection: Information That Cannot Be Copied",
        "source_refs": [
          "ref_ch8_qubits",
          "ref_ch8_entanglement"
        ],
        "opening_scene": [
          {
            "speaker": "narration",
            "text": "By evening, the tournament hall had stopped feeling huge. It felt close, as if every team was leaning over the same fragile state."
          },
          {
            "speaker": "yui",
            "text": "If we understand it alone, it does not count as understanding for our team."
          }
        ],
        "official_briefing": {
          "speaker": "Announcer",
          "topic": "qubits, gates, no-cloning, entanglement, and protocols",
          "text": "This session turns information into a physical object. You will be asked about qubit states, measurement, no-cloning, Bell states, teleportation, dense coding, and cryptographic basis choices. Keep the difference between a known classical label and an unknown quantum state clear.",
          "what_not_to_assume": "Do not assume entanglement sends usable messages faster than classical communication permits."
        },
        "mid_scene_reaction": [
          {
            "speaker": "haru",
            "text": "Not being able to copy it is not a weakness. It is the rule that makes the rest meaningful."
          },
          {
            "speaker": "rikka",
            "text": "You just said the theorem like it mattered to a person."
          }
        ],
        "rival_pressure_scene": [
          {
            "speaker": "yui",
            "text": "If your partner cannot follow the protocol, the protocol has not really arrived."
          },
          {
            "speaker": "sayo",
            "text": "That is inheritance too."
          }
        ],
        "breakthrough_scene": [
          {
            "speaker": "haru",
            "text": "Entanglement is not a shortcut around explanation. It is a stricter promise about the whole."
          },
          {
            "speaker": "minori",
            "text": "You may be ready for the last room."
          }
        ],
        "notebook_update": "Haru writes: physical information has rules, and those rules can protect trust.",
        "next_hook": "The finalist board is covered before anyone can read the route."
      },
      {
        "id": "session_05",
        "title": "Final Session: The Device That Has To Be Real",
        "source_refs": [
          "ref_ch9_computation",
          "ref_ch10_implementation"
        ],
        "opening_scene": [
          {
            "speaker": "narration",
            "text": "The final session opened without music. Only a clean circuit diagram, a cavity sketch, and a list of allowed assumptions appeared on the screen."
          },
          {
            "speaker": "sayo",
            "text": "This is the question I could not carry alone."
          }
        ],
        "official_briefing": {
          "speaker": "Chief Judge",
          "topic": "algorithms, error correction, and physical implementation",
          "text": "The final session asks you to connect abstract computation with physical systems. You may use algorithms, error correction, and implementation criteria, but every claim must identify what is being controlled, what decoheres, how readout works, and what assumptions make the model valid.",
          "what_not_to_assume": "Do not claim scalable computation from a single elegant effect."
        },
        "mid_scene_reaction": [
          {
            "speaker": "rikka",
            "text": "A circuit is not a machine until the physics can keep the promise."
          },
          {
            "speaker": "haru",
            "text": "Then we answer as a team. Promise by promise."
          }
        ],
        "rival_pressure_scene": [
          {
            "speaker": "natsuki",
            "text": "If you omit one condition, the whole proof becomes decoration."
          },
          {
            "speaker": "haru",
            "text": "Then I will not omit it."
          }
        ],
        "breakthrough_scene": [
          {
            "speaker": "haru",
            "text": "Our final statement has to name what is controlled, what is limited, and what we still cannot claim."
          },
          {
            "speaker": "minori",
            "text": "That answer belongs to this year's team."
          }
        ],
        "notebook_update": "Haru closes the notebook before the scoreboard; the detailed final outcome remains sealed.",
        "next_hook": "The exact final result and ending route are sealed to preserve spoiler control outside play."
      }
    ]
  },
  "characters": {
    "_meta": {
      "generated_at": "2026-06-18",
      "generation_kind": "characters",
      "review_mode": true,
      "spoiler_mode": "safe",
      "source_policy": "PDF-derived learning content; story structure and characters are model_inference."
    },
    "asset_policy": "Generated character sheet is used as the MVP anchor portrait asset. Individual expression variants are planned, not yet separately generated.",
    "team_image": "assets/characters/team-character-sheet.png",
    "base_team": [
      {
        "id": "haru",
        "name": "Haru Mizunoe",
        "school": "Sakuraba High",
        "role": "first-year protagonist",
        "age_impression": "first-year high school student",
        "height_impression": "short to average",
        "body_build": "slight, energetic posture",
        "face_shape": "soft round face",
        "hair_color": "navy blue-black",
        "hair_style": "long loose hair with small sky-blue hair clips",
        "eye_color": "blue",
        "signature_accessory": "sky-blue pencil tucked into her notebook spiral",
        "uniform_description": "navy blazer, blue sweater vest, white shirt, modest pleated skirt, sky-blue ribbon",
        "color_motif": "sky blue",
        "personality": "honest, observant, stubborn about understanding",
        "insecurity": "afraid everyone will discover she is only keeping up by asking basic questions",
        "speech_style": "plain, direct, often starts with 'Wait, what exactly are we allowed to assume?'",
        "reason_to_compete": "to prove that asking simple questions can protect the team from repeating last year's mistake",
        "relationship_to_protagonist": "self"
      },
      {
        "id": "rikka",
        "name": "Rikka Kisaragi",
        "school": "Sakuraba High",
        "role": "first-year genius",
        "age_impression": "first-year high school student",
        "height_impression": "tall for her year",
        "body_build": "lean, sharp movements",
        "face_shape": "narrow face, precise gaze",
        "hair_color": "violet purple",
        "hair_style": "high wavy ponytail with a purple scrunchie",
        "eye_color": "violet",
        "signature_accessory": "thin silver hair clip shaped like a bracket",
        "uniform_description": "navy blazer worn perfectly, violet vest and tie, lab badge holder",
        "color_motif": "violet",
        "personality": "fast, exacting, lonely when others cannot follow her jumps",
        "insecurity": "believes slowing down means losing the one thing that makes her useful",
        "speech_style": "compressed and elegant; revises herself when Haru asks for the missing step",
        "reason_to_compete": "to learn how to make brilliance usable by a team",
        "relationship_to_protagonist": "contrast and growing partner"
      },
      {
        "id": "sayo",
        "name": "Sayo Tachibana",
        "school": "Sakuraba High",
        "role": "gentle upperclassman",
        "age_impression": "third-year high school student",
        "height_impression": "average",
        "body_build": "graceful, relaxed shoulders",
        "face_shape": "oval face with calm smile",
        "hair_color": "deep green-black",
        "hair_style": "short bob with mint flower clip",
        "eye_color": "green",
        "signature_accessory": "mint bookmark from last year's notebook",
        "uniform_description": "navy blazer, mint cardigan and ribbon, carefully kept skirt",
        "color_motif": "mint",
        "personality": "gentle, patient, quietly intense",
        "insecurity": "worries she passed on pressure instead of courage",
        "speech_style": "soft, image-rich, uses questions instead of orders",
        "reason_to_compete": "to turn last year's unanswered question into a gift rather than a scar",
        "relationship_to_protagonist": "senior who entrusts Haru with the unresolved question"
      },
      {
        "id": "minori",
        "name": "Minori Kagami",
        "school": "Sakuraba High",
        "role": "strict second-year",
        "age_impression": "second-year high school student",
        "height_impression": "average to tall",
        "body_build": "upright, disciplined",
        "face_shape": "angular with strong brows",
        "hair_color": "warm brown",
        "hair_style": "short bob with red hair clips",
        "eye_color": "red-brown",
        "signature_accessory": "red stopwatch used for practice rounds",
        "uniform_description": "navy blazer over a red hoodie, red ribbon, sleeves always neat",
        "color_motif": "red",
        "personality": "harsh but not cruel, protective through standards",
        "insecurity": "terrified that being kind too early will let last year's failure repeat",
        "speech_style": "clipped, judge-like, softens only after the reasoning is solid",
        "reason_to_compete": "to make responsibility mean more than control",
        "relationship_to_protagonist": "demanding mentor who gradually recognizes Haru"
      }
    ],
    "rivals": [
      {
        "id": "natsuki",
        "name": "Natsuki Shindou",
        "school": "Seiran Institute",
        "visual_motif": "white blazer, gold pin, ruler-straight silver hair",
        "intellectual_style": "calculation_style",
        "strength": "fast symbolic manipulation and clean operator algebra",
        "weakness": "can understate physical validity conditions",
        "emotional_motivation_safe": "carries the pride of a school expected to win with flawless proofs",
        "relationship_to_protagonist_team": "last year's powerhouse rival",
        "signature_phrase": "State the space before you state the answer.",
        "first_impression": "unreachable calm",
        "hidden_vulnerability": "sealed",
        "growth_moment": "sealed"
      },
      {
        "id": "mio",
        "name": "Mio Kurokawa",
        "school": "Kuroha Academy",
        "visual_motif": "black cardigan, teal notebook tabs, sleepy eyes",
        "intellectual_style": "skeptical_style",
        "strength": "finds hidden assumptions and approximation leaks",
        "weakness": "sometimes turns doubt into paralysis",
        "emotional_motivation_safe": "wants her team's questions to be treated as contributions, not obstruction",
        "relationship_to_protagonist_team": "sharp cross-examiner who respects Haru's refusal to bluff",
        "signature_phrase": "And if the reservoir remembers?",
        "first_impression": "soft voice, severe questions",
        "hidden_vulnerability": "sealed",
        "growth_moment": "sealed"
      },
      {
        "id": "touko",
        "name": "Touko Hoshimi",
        "school": "Minato Experimental High",
        "visual_motif": "rolled sleeves, safety goggles on head, orange ribbon",
        "intellectual_style": "experiment_style",
        "strength": "connects equations to apparatus, timing, loss, and readout",
        "weakness": "can distrust clean abstraction too much",
        "emotional_motivation_safe": "believes every implementation claim must survive the lab bench",
        "relationship_to_protagonist_team": "friendly rival who pressures Rikka to explain physically",
        "signature_phrase": "Show me where the photon can leak.",
        "first_impression": "bright, practical, impossible to fool",
        "hidden_vulnerability": "sealed",
        "growth_moment": "sealed"
      },
      {
        "id": "yui",
        "name": "Yui Amano",
        "school": "Akebono Rural Science Club",
        "visual_motif": "simple uniform, star hairpin, carefully mended book bag",
        "intellectual_style": "synthesis_style",
        "strength": "connects distant chapters and translates ideas for teammates",
        "weakness": "hesitates when the room rewards speed over synthesis",
        "emotional_motivation_safe": "wants a small school to be seen as thoughtful, not merely lucky",
        "relationship_to_protagonist_team": "mirror for Haru's team-first reasoning",
        "signature_phrase": "A good answer should bring everyone with it.",
        "first_impression": "quiet warmth hiding tournament steel",
        "hidden_vulnerability": "sealed",
        "growth_moment": "sealed"
      }
    ]
  }
};
