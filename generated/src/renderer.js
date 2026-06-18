(function () {
  let app;
  let data;
  let state;

  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function saveAndRender() {
    ScioStorage.save(state);
    render();
  }

  function topbar() {
    return `
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">PR</div>
          <div>
            <h1>Photon Relay</h1>
            <p>${esc(data.metadata.source.title)}</p>
          </div>
        </div>
        <div class="top-actions">
          <button class="ghost" data-action="go-title">Title</button>
          <button class="ghost" data-action="go-game">Story</button>
          <button class="ghost" data-action="go-notebook">Notebook</button>
          <button class="ghost" data-action="go-retry">Retry</button>
          <button class="warn" data-action="reset">Reset</button>
        </div>
      </header>
    `;
  }

  function titleScreen() {
    const complete = ScioEngine.completedSessions(data, state);
    return `
      ${topbar()}
      <main class="screen title-layout">
        <section class="hero-copy">
          <div>
            <div class="source-badges">
              <span class="badge">local HTML/CSS/JS</span>
              <span class="badge">${data.metadata.counts.sessions} sessions</span>
              <span class="badge">${data.metadata.counts.prompts} PDF-grounded prompts</span>
            </div>
            <h2>The question Sayo left behind</h2>
            <p>A science olympiad visual novel where quantum-optics and quantum-information prompts unlock team scenes, rival pressure, and notebook entries. The final result and spoiler-heavy route notes stay sealed outside normal review.</p>
          </div>
          <div>
            <p class="small-muted">Progress: ${complete} of ${data.metadata.counts.sessions} sessions cleared.</p>
            <button class="primary" data-action="start">${complete > 0 ? "Continue" : "Start"}</button>
          </div>
        </section>
        <section class="character-stage">
          <img src="${esc(data.characters.team_image)}" alt="Generated visual novel character sheet for the Sakuraba team">
          <div class="stage-caption">Sakuraba's four-person team anchors the MVP cast. Individual expression variants are planned in the asset backlog.</div>
        </section>
      </main>
    `;
  }

  function progressPanel() {
    const items = ScioEngine.sessions(data)
      .map((session, index) => {
        const done = index < state.sessionIndex || (index === state.sessionIndex && ScioEngine.sessionCleared(data, state));
        const active = index === state.sessionIndex && state.screen === "game";
        return `<div class="track-item ${done ? "done" : ""} ${active ? "active" : ""}">
          <div class="track-dot">${index + 1}</div>
          <div>${esc(session.title)}</div>
        </div>`;
      })
      .join("");
    return `<aside class="progress-panel panel-pad"><h3>Tournament</h3><div class="progress-track">${items}</div></aside>`;
  }

  function sidePanel() {
    return `
      <div class="side-panel">
        <section class="portrait-panel">
          <img src="${esc(data.characters.team_image)}" alt="Sakuraba team character sheet">
        </section>
        ${progressPanel()}
      </div>
    `;
  }

  function lineHtml(line) {
    const speaker = line.speaker || "narration";
    return `<div class="line ${speaker === "narration" ? "narration" : ""}">
      ${speaker !== "narration" ? `<div class="speaker">${esc(speaker)}</div>` : ""}
      <div>${esc(line.text)}</div>
    </div>`;
  }

  function sceneScreen() {
    const session = ScioEngine.currentSession(data, state);
    if (state.phase === "prompts") return promptScreen();
    const isOpening = state.phase === "opening";
    const lines = isOpening ? session.opening_scene : session.breakthrough_scene;
    const phaseTitle = isOpening ? "Opening Scene" : "Breakthrough Scene";
    return `
      ${topbar()}
      <main class="screen vn-layout">
        ${sidePanel()}
        <section class="scene-panel">
          <div class="scene-title">
            <h2>${esc(session.title)}</h2>
            <p>${phaseTitle}</p>
          </div>
          <div class="dialogue-stack">
            ${lines.map(lineHtml).join("")}
            ${!isOpening ? `<div class="line narration"><div>${esc(session.notebook_update)}</div></div>` : ""}
          </div>
          <div class="scene-actions">
            <button class="primary" data-action="advance">${isOpening ? "To Briefing" : state.sessionIndex < data.sessionPlan.sessions.length - 1 ? "Next Session" : "Finish"}</button>
          </div>
        </section>
      </main>
    `;
  }

  function briefingScreen() {
    const session = ScioEngine.currentSession(data, state);
    const briefing = session.official_briefing;
    return `
      ${topbar()}
      <main class="screen vn-layout">
        ${sidePanel()}
        <section class="scene-panel">
          <div class="scene-title">
            <h2>${esc(session.title)}</h2>
            <p>Official Briefing</p>
          </div>
          <div class="dialogue-stack">
            <div class="briefing">
              <p><strong>${esc(briefing.speaker)}:</strong> ${esc(briefing.text)}</p>
              <p><strong>Do not assume too quickly:</strong> ${esc(briefing.what_not_to_assume)}</p>
            </div>
          </div>
          <div class="scene-actions">
            <button class="primary" data-action="advance">Begin Round</button>
          </div>
        </section>
      </main>
    `;
  }

  function sourcePills(prompt) {
    return `<div class="source-list">${prompt.source_refs.map((ref) => `<span class="source-pill">${esc(ref)}</span>`).join("")}</div>`;
  }

  function inputForPrompt(prompt) {
    const gate = prompt.gate;
    const record = ScioState.recordFor(state, prompt.id);
    if (record.gateCleared) return "";
    if (gate.type === "choice") {
      return `<div class="choice-grid">${gate.options.map((option) => `<button data-choice="${esc(option.value)}">${esc(option.label)}</button>`).join("")}</div>`;
    }
    if (gate.type === "true_false") {
      return `<div class="choice-grid">
        <button data-boolean="true">True</button>
        <button data-boolean="false">False</button>
      </div>`;
    }
    if (gate.type === "multiple_select") {
      return `<div class="check-grid">${gate.options.map((option) => `<label class="check-row">
        <input type="checkbox" value="${esc(option.value)}" ${state.selectedSet.includes(option.value) ? "checked" : ""}>
        <span>${esc(option.label)}</span>
      </label>`).join("")}</div>
      <button data-action="submit-multi">Submit Selection</button>`;
    }
    return `
      <input data-text-input value="${esc(state.textInput)}" placeholder="Type your gate answer">
      <button data-action="submit-text">Submit Gate</button>
    `;
  }

  function promptStatus(record) {
    if (record.status === "cleared") return "Cleared without answer reveal";
    if (record.status === "cleared_with_answer") return "Cleared with model answer viewed";
    if (record.status === "answer_viewed") return "Model answer viewed; self-assessment still required";
    if (record.gateCleared) return "Gate cleared; open answer pending";
    if (record.attempts > 0) return `Attempts: ${record.attempts}`;
    return "Not yet cleared";
  }

  function promptScreen() {
    const session = ScioEngine.currentSession(data, state);
    const prompts = ScioEngine.currentPrompts(data, state);
    const prompt = prompts[state.promptIndex];
    const record = ScioState.recordFor(state, prompt.id);
    const allCleared = ScioEngine.sessionCleared(data, state);
    return `
      ${topbar()}
      <main class="screen vn-layout">
        ${sidePanel()}
        <section class="prompt-panel">
          <div class="prompt-head">
            <h2>${esc(session.title)}</h2>
            <div class="small-muted">${esc(prompt.round)} - ${esc(prompt.stage_label)} - ${state.promptIndex + 1} / ${prompts.length}</div>
            ${sourcePills(prompt)}
          </div>
          <div class="prompt-question">
            ${session.rival_pressure_scene && state.promptIndex === Math.floor(prompts.length / 2) ? session.rival_pressure_scene.map(lineHtml).join("") : ""}
            ${session.mid_scene_reaction && state.promptIndex === Math.min(2, prompts.length - 1) ? session.mid_scene_reaction.map(lineHtml).join("") : ""}
            <h3>${esc(prompt.question)}</h3>
            <div class="small-muted">${esc(promptStatus(record))}</div>
            ${inputForPrompt(prompt)}
            ${state.lastFeedback ? `<div class="feedback ${state.lastFeedback.good ? "good" : "bad"}">${esc(state.lastFeedback.text)}</div>` : ""}
            ${record.gateCleared ? openAnswerBlock(prompt, record) : `<div class="answer-lock">Model answer locked. ${esc(prompt.teammate_whisper)}</div>`}
          </div>
          <div class="prompt-actions">
            <button data-action="prev-prompt" ${state.promptIndex === 0 ? "disabled" : ""}>Previous</button>
            <button data-action="next-prompt" ${state.promptIndex >= prompts.length - 1 ? "disabled" : ""}>Next</button>
            <button class="primary" data-action="finish-session" ${allCleared ? "" : "disabled"}>Unlock Breakthrough</button>
          </div>
        </section>
      </main>
    `;
  }

  function openAnswerBlock(prompt, record) {
    const draft = ScioState.draftFor(state, prompt.id);
    const canSelfAssess = draft.trim().length >= 24;
    const answer = record.viewedAnswer ? `<div class="feedback good"><strong>Model answer:</strong> ${esc(prompt.model_answer)}</div>` : "";
    return `
      <div class="answer-lock">
        <p><strong>Open answer:</strong> ${esc(prompt.open_question)}</p>
        <textarea data-open-draft placeholder="Write your own defense before revealing the model answer.">${esc(draft)}</textarea>
        <p class="small-muted">Judge criteria:</p>
        <ul class="criteria">${prompt.judge_criteria.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        <p class="small-muted">Write a short defense in your own words before self-assessing.</p>
        <div class="prompt-actions">
          <button data-action="reveal-answer">Reveal Model Answer</button>
          <button class="primary" data-action="self-assess" ${canSelfAssess ? "" : "disabled"}>I can defend this</button>
        </div>
        ${answer}
      </div>
    `;
  }

  function notebookScreen() {
    const entries = state.notebook.length
      ? state.notebook.map((entry) => `<div class="note-entry">${esc(entry.text)}<div class="source-list">${(entry.sourceRefs || []).map((ref) => `<span class="source-pill">${esc(ref)}</span>`).join("")}</div></div>`).join("")
      : `<p class="small-muted">Notebook entries unlock after breakthrough scenes.</p>`;
    const complete = state.completed ? `<div class="feedback good">All public sessions are complete. The exact final result and ending route remain sealed outside normal review.</div>` : "";
    return `
      ${topbar()}
      <main class="screen">
        <section class="notebook-panel panel-pad">
          <h2>Haru's Notebook</h2>
          ${complete}
          <div class="notebook-list">${entries}</div>
        </section>
      </main>
    `;
  }

  function retryScreen() {
    const retry = ScioEngine.retryPrompts(data, state);
    const list = retry.length
      ? retry.map(({ prompt, record }) => `<div class="note-entry">
          <strong>${esc(prompt.stage_label)}:</strong> ${esc(prompt.question)}
          <div class="small-muted">Status: ${esc(record.status)}. Attempts: ${record.attempts}. ${record.viewedAnswer ? "Model answer viewed." : ""}</div>
          <button data-jump-session="${esc(prompt.session_id)}" data-jump-prompt="${esc(prompt.id)}">Return to prompt</button>
          ${record.viewedAnswer ? `<button data-reset-prompt="${esc(prompt.id)}" data-reset-session="${esc(prompt.session_id)}">Retry clean</button>` : ""}
        </div>`).join("")
      : `<p class="small-muted">No retry prompts yet.</p>`;
    return `
      ${topbar()}
      <main class="screen">
        <section class="notebook-panel panel-pad">
          <h2>Retry List</h2>
          <div class="retry-list">${list}</div>
        </section>
      </main>
    `;
  }

  function render() {
    if (state.screen === "title") {
      app.innerHTML = titleScreen();
    } else if (state.screen === "notebook") {
      app.innerHTML = notebookScreen();
    } else if (state.screen === "retry") {
      app.innerHTML = retryScreen();
    } else if (state.phase === "briefing") {
      app.innerHTML = briefingScreen();
    } else {
      app.innerHTML = sceneScreen();
    }
  }

  function submitGate(prompt, input) {
    const record = ScioState.recordFor(state, prompt.id);
    const ok = ScioEvaluator.grade(prompt.gate, input);
    record.attempts += 1;
    if (ok) {
      record.gateCleared = true;
      record.status = "gate_cleared";
      state.lastFeedback = { good: true, text: "Gate cleared. The open answer is unlocked." };
    } else {
      record.status = "unresolved";
      state.lastFeedback = { good: false, text: `Not yet. ${prompt.teammate_whisper}` };
    }
    saveAndRender();
  }

  function handleClick(event) {
    const target = event.target.closest("button");
    if (!target) return;
    const action = target.dataset.action;
    if (target.dataset.choice) {
      submitGate(ScioEngine.currentPrompt(data, state), target.dataset.choice);
      return;
    }
    if (target.dataset.boolean) {
      submitGate(ScioEngine.currentPrompt(data, state), target.dataset.boolean === "true");
      return;
    }
    if (target.dataset.jumpSession) {
      const sessionIndex = data.sessionPlan.sessions.findIndex((session) => session.id === target.dataset.jumpSession);
      if (sessionIndex >= 0) {
        state.sessionIndex = sessionIndex;
        state.phase = "prompts";
        state.screen = "game";
        const prompts = ScioEngine.currentPrompts(data, state);
        state.promptIndex = Math.max(0, prompts.findIndex((prompt) => prompt.id === target.dataset.jumpPrompt));
        ScioState.resetInputs(state);
        saveAndRender();
      }
      return;
    }
    if (target.dataset.resetPrompt) {
      const sessionIndex = data.sessionPlan.sessions.findIndex((session) => session.id === target.dataset.resetSession);
      if (sessionIndex >= 0) {
        state.sessionIndex = sessionIndex;
        state.phase = "prompts";
        state.screen = "game";
        const prompts = ScioEngine.currentPrompts(data, state);
        state.promptIndex = Math.max(0, prompts.findIndex((prompt) => prompt.id === target.dataset.resetPrompt));
        ScioState.resetPromptRecord(state, target.dataset.resetPrompt);
        saveAndRender();
      }
      return;
    }
    if (!action) return;
    if (action === "start" || action === "go-game") {
      state.screen = "game";
      saveAndRender();
      return;
    }
    if (action === "go-title") {
      state.screen = "title";
      saveAndRender();
      return;
    }
    if (action === "go-notebook") {
      state.screen = "notebook";
      saveAndRender();
      return;
    }
    if (action === "go-retry") {
      state.screen = "retry";
      saveAndRender();
      return;
    }
    if (action === "reset") {
      if (confirm("Reset local progress?")) {
        ScioStorage.clear();
        state = ScioState.createInitial(data);
        saveAndRender();
      }
      return;
    }
    if (action === "advance") {
      ScioEngine.advance(data, state);
      saveAndRender();
      return;
    }
    if (action === "submit-text") {
      submitGate(ScioEngine.currentPrompt(data, state), state.textInput);
      return;
    }
    if (action === "submit-multi") {
      submitGate(ScioEngine.currentPrompt(data, state), state.selectedSet);
      return;
    }
    if (action === "prev-prompt" && state.promptIndex > 0) {
      state.promptIndex -= 1;
      ScioState.resetInputs(state);
      saveAndRender();
      return;
    }
    if (action === "next-prompt") {
      const prompts = ScioEngine.currentPrompts(data, state);
      if (state.promptIndex < prompts.length - 1) {
        state.promptIndex += 1;
        ScioState.resetInputs(state);
        saveAndRender();
      }
      return;
    }
    if (action === "reveal-answer") {
      const prompt = ScioEngine.currentPrompt(data, state);
      const record = ScioState.recordFor(state, prompt.id);
      if (record.gateCleared) {
        record.viewedAnswer = true;
        record.status = "answer_viewed";
        state.lastFeedback = { good: false, text: "Model answer viewed. Write your own defense and self-assess to clear this prompt." };
        saveAndRender();
      }
      return;
    }
    if (action === "self-assess") {
      const prompt = ScioEngine.currentPrompt(data, state);
      const record = ScioState.recordFor(state, prompt.id);
      const draft = ScioState.draftFor(state, prompt.id).trim();
      if (record.gateCleared) {
        if (draft.length < 24) {
          state.lastFeedback = { good: false, text: "Write a short defense in your own words before self-assessing." };
          saveAndRender();
          return;
        }
        record.status = record.viewedAnswer ? "cleared_with_answer" : "cleared";
        ScioState.addNotebook(state, `${prompt.stage_label}: ${draft}`, prompt.source_refs);
        state.lastFeedback = { good: true, text: record.viewedAnswer ? "Cleared with model answer viewed. Retry later for a clean clear." : "Clean clear recorded." };
        saveAndRender();
      }
      return;
    }
    if (action === "finish-session" && ScioEngine.sessionCleared(data, state)) {
      state.phase = "breakthrough";
      ScioState.resetInputs(state);
      saveAndRender();
    }
  }

  function handleInput(event) {
    if (event.target.matches("[data-text-input]")) {
      state.textInput = event.target.value;
      ScioStorage.save(state);
    }
    if (event.target.matches("[data-open-draft]")) {
      const prompt = ScioEngine.currentPrompt(data, state);
      ScioState.setDraft(state, prompt.id, event.target.value);
      ScioStorage.save(state);
    }
    if (event.target.matches(".check-row input")) {
      const values = [...app.querySelectorAll(".check-row input:checked")].map((input) => input.value);
      state.selectedSet = values;
      ScioStorage.save(state);
    }
  }

  function init(root, loadedData, loadedState) {
    app = root;
    data = loadedData;
    state = loadedState;
    app.addEventListener("click", handleClick);
    app.addEventListener("input", handleInput);
    render();
  }

  window.ScioRenderer = { init };
})();

