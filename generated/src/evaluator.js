(function () {
  function normalizeText(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[ρ]/g, "rho")
      .replace(/[γΓ]/g, "gamma")
      .replace(/\s+/g, " ")
      .replace(/[._]/g, " ")
      .trim();
  }

  function compact(value) {
    return normalizeText(value).replace(/[^a-z0-9+\-=/]/g, "");
  }

  function gradeText(input, answers) {
    const guess = normalizeText(input);
    return answers.some((answer) => {
      const expected = normalizeText(answer);
      return guess === expected || compact(guess) === compact(expected);
    });
  }

  function gradeMatching(input, answers) {
    const parts = String(input || "")
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);
    const parsed = {};
    for (const part of parts) {
      const match = part.match(/^([A-Za-z])\s*[-:=]\s*([0-9A-Za-z]+)$/);
      if (!match) return false;
      parsed[match[1].toUpperCase()] = match[2].toUpperCase();
    }
    return Object.entries(answers).every(([key, value]) => parsed[key] === String(value).toUpperCase());
  }

  function arraysEqualAsSets(left, right) {
    const a = [...left].sort();
    const b = [...right].sort();
    return a.length === b.length && a.every((value, index) => value === b[index]);
  }

  function grade(gate, input) {
    switch (gate.type) {
      case "numeric": {
        const guess = Number(input);
        return Number.isFinite(guess) && Math.abs(guess - Number(gate.answer)) <= Number(gate.tolerance || 0);
      }
      case "true_false":
        return Boolean(input) === Boolean(gate.answer);
      case "choice":
        return String(input) === String(gate.answer);
      case "multiple_select":
        return Array.isArray(input) && arraysEqualAsSets(input, gate.answers || []);
      case "matching":
        return gradeMatching(input, gate.answers || {});
      case "term_blank":
      case "formula_blank":
      case "short_keyword":
      default:
        return gradeText(input, gate.answers || []);
    }
  }

  window.ScioEvaluator = { grade, normalizeText };
})();

