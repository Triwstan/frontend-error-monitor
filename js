export function normalizeError(data) {
  return {
    id: crypto.randomUUID(),
    type: data.type,
    message: data.message,
    stack: data.stack || null,
    source: data.source || null,
    url: window.location.href,
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString()
  };
}
