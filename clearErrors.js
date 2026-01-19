import { openDB } from "../core/db";

export async function clearErrors() {
  const db = await openDB();
  const tx = db.transaction("errors", "readwrite");
  tx.objectStore("errors").clear();
}
