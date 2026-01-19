import { openDB } from "./db";
import { normalizeError } from "./errorNormalizer";

export async function logError(data) {
  const db = await openDB();
  const error = normalizeError(data);

  const tx = db.transaction("errors", "readwrite");
  const store = tx.objectStore("errors");

  store.add(error);
}
