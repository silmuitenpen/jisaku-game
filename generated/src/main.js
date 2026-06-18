(function () {
  const data = window.SCIO_DATA;
  const saved = ScioStorage.load();
  const state = saved && saved.version === 1 ? saved : ScioState.createInitial(data);
  ScioRenderer.init(document.getElementById("app"), data, state);
})();

