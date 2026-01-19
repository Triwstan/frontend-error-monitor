import { openDB } from "./db";

export async function getAllErrors() {
  const db = await openDB();

  return new Promise(resolve => {
    const tx = db.transaction("errors", "readonly");
    const store = tx.objectStore("errors");

    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
  });
}
