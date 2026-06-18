(function () {
  function sessions(data) {
    return data.sessionPlan.sessions;
  }

  function currentSession(data, state) {
    return sessions(data)[state.sessionIndex];
  }

  function promptsForSession(data, sessionId) {
    return data.prompts.prompts.filter((prompt) => prompt.session_id === sessionId);
  }

  function currentPrompts(data, state) {
    return promptsForSession(data, currentSession(data, state).id);
  }

  function currentPrompt(data, state) {
    return currentPrompts(data, state)[state.promptIndex];
  }

  function promptCleared(state, promptId) {
    const record = state.promptRecords[promptId];
    return record && (record.status === "cleared" || record.status === "cleared_with_answer");
  }

  function sessionCleared(data, state) {
    return currentPrompts(data, state).every((prompt) => promptCleared(state, prompt.id));
  }

  function completedSessions(data, state) {
    return sessions(data).filter((session, index) => {
      if (index < state.sessionIndex) return true;
      if (index > state.sessionIndex) return false;
      const prompts = promptsForSession(data, session.id);
      return prompts.every((prompt) => promptCleared(state, prompt.id));
    }).length;
  }

  function retryPrompts(data, state) {
    return data.prompts.prompts
      .map((prompt) => ({ prompt, record: state.promptRecords[prompt.id] }))
      .filter(({ record }) => record && (record.attempts > 0 || record.viewedAnswer) && record.status !== "cleared");
  }

  function advance(data, state) {
    if (state.phase === "opening") {
      state.phase = "briefing";
      return;
    }
    if (state.phase === "briefing") {
      state.phase = "prompts";
      return;
    }
    if (state.phase === "breakthrough") {
      const session = currentSession(data, state);
      ScioState.addNotebook(state, session.notebook_update, session.source_refs);
      if (state.sessionIndex < sessions(data).length - 1) {
        state.sessionIndex += 1;
        state.phase = "opening";
        state.promptIndex = 0;
        ScioState.resetInputs(state);
      } else {
        state.completed = true;
        state.screen = "notebook";
      }
    }
  }

  window.ScioEngine = {
    sessions,
    currentSession,
    currentPrompts,
    currentPrompt,
    promptCleared,
    sessionCleared,
    completedSessions,
    retryPrompts,
    advance,
  };
})();

