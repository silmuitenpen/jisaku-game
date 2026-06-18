(function () {
  function createInitial(data) {
    return {
      screen: "title",
      sessionIndex: 0,
      phase: "opening",
      promptIndex: 0,
      promptRecords: {},
      openDrafts: {},
      notebook: [],
      lastFeedback: null,
      openDraft: "",
      selectedValue: null,
      selectedSet: [],
      textInput: "",
      completed: false,
      version: 1,
      title: data.metadata.title,
    };
  }

  function recordFor(state, promptId) {
    if (!state.promptRecords[promptId]) {
      state.promptRecords[promptId] = {
        attempts: 0,
        gateCleared: false,
        viewedAnswer: false,
        status: "unseen",
      };
    }
    return state.promptRecords[promptId];
  }

  function draftFor(state, promptId) {
    if (!state.openDrafts) state.openDrafts = {};
    return state.openDrafts[promptId] || "";
  }

  function setDraft(state, promptId, value) {
    if (!state.openDrafts) state.openDrafts = {};
    state.openDrafts[promptId] = value;
  }

  function resetPromptRecord(state, promptId) {
    state.promptRecords[promptId] = {
      attempts: 0,
      gateCleared: false,
      viewedAnswer: false,
      status: "unseen",
    };
    if (state.openDrafts) delete state.openDrafts[promptId];
    resetInputs(state);
  }

  function resetInputs(state) {
    state.lastFeedback = null;
    state.openDraft = "";
    state.selectedValue = null;
    state.selectedSet = [];
    state.textInput = "";
  }

  function addNotebook(state, text, sourceRefs) {
    if (!state.notebook.some((entry) => entry.text === text)) {
      state.notebook.push({ text, sourceRefs: sourceRefs || [], at: new Date().toISOString() });
    }
  }

  window.ScioState = { createInitial, recordFor, draftFor, setDraft, resetPromptRecord, resetInputs, addNotebook };
})();

