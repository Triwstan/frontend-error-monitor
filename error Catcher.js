import { logError } from "./indexedStorage";

export function initErrorCatcher() {
  window.onerror = (message, source, lineno, colno, error) => {
    logError({
      type: "JS_ERROR",
      message,
      source,
      lineno,
      colno,
      stack: error?.stack
    });
  };

  window.addEventListener("unhandledrejection", event => {
    logError({
      type: "PROMISE_REJECTION",
      message: event.reason?.message || "Unhandled promise rejection",
      stack: event.reason?.stack
    });
  });
}
