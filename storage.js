import { normalizeError } from "./errorNormalizer";

export function logError(data) {
  const error = normalizeError(data);
  const errors = JSON.parse(localStorage.getItem("errors") || "[]");
  errors.push(error);
  localStorage.setItem("errors", JSON.stringify(errors));
}
