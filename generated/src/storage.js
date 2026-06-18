(function () {
  const KEY = "photon-relay-progress-v1";

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.warn("Could not load progress", error);
      return null;
    }
  }

  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (error) {
      console.warn("Could not save progress", error);
    }
  }

  function clear() {
    localStorage.removeItem(KEY);
  }

  window.ScioStorage = { load, save, clear };
})();

