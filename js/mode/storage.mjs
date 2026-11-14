import { SCHEMA_VERSION, PARTS } from './catalog.mjs';

export function newProfile() {
  return { schemaVersion: SCHEMA_VERSION, currency: { parts: 0 }, unlockedParts: Object.keys(PARTS).filter(id => PARTS[id].cost === 0), blueprints: [], tanks: [] };
}
function validateProfile(profile) {
  if (profile.schemaVersion !== SCHEMA_VERSION) throw new Error('存档版本不支持；保留原数据，等待迁移');
  if (!Number.isSafeInteger(profile.currency?.parts) || profile.currency.parts < 0 || !Array.isArray(profile.unlockedParts) || !Array.isArray(profile.blueprints) || !Array.isArray(profile.tanks)) throw new Error('存档结构损坏');
}
// Reducers are synchronous and run inside one transaction. Never await in a reducer.
function reduceProfile(profile, reducer) {
  validateProfile(profile);
  const result = reducer(profile);
  if (result?.then) throw new Error('存档更新函数必须同步');
  validateProfile(profile);
  return { profile, result };
}
export class MemoryRepository {
  constructor(profile = newProfile()) { this.profile = structuredClone(profile); this.assets = new Map(); }
  async readProfile() { validateProfile(this.profile); return structuredClone(this.profile); }
  async updateProfile(reducer) {
    const { profile, result } = reduceProfile(structuredClone(this.profile), reducer);
    this.profile = profile; return structuredClone(result);
  }
  async addAsset(asset) { if (this.assets.has(asset.id)) throw new Error('模型 ID 已存在'); this.assets.set(asset.id, structuredClone(asset)); }
  async getAsset(id) { return structuredClone(this.assets.get(id) || null); }
  async listAssets(category) { return [...this.assets.values()].filter(a => !category || a.category === category).map(({ blob, ...metadata }) => structuredClone(metadata)); }
  close() {}
}

export async function openRepository(indexedDB = globalThis.indexedDB, name = 'steel-journey-3d') {
  if (!indexedDB) throw new Error('当前浏览器无法持久保存模型；请使用本地 HTTP 地址或支持 IndexedDB 的浏览器');
  const db = await new Promise((resolve, reject) => {
    const request = indexedDB.open(name, 1);
    let blocked = false;
    request.onupgradeneeded = () => {
      const database = request.result;
      database.createObjectStore('profiles');
      const assets = database.createObjectStore('assets', { keyPath: 'id' });
      assets.createIndex('category', 'category');
    };
    request.onsuccess = () => { if (blocked) request.result.close(); else resolve(request.result); };
    request.onerror = () => reject(request.error);
    request.onblocked = () => { blocked = true; reject(new Error('请关闭其他版本的游戏页面后重试')); };
  });
  db.onversionchange = () => db.close();
  function transaction(storeName, mode, operation) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, mode);
      let result, failure;
      const fail = error => { failure = error; tx.abort(); };
      tx.oncomplete = () => resolve(result);
      tx.onabort = () => reject(failure || tx.error || new Error('存储事务已取消'));
      tx.onerror = () => { /* abort reports the original error */ };
      try { operation(tx.objectStore(storeName), value => { result = value; }, fail); } catch (error) { fail(error); }
    });
  }
  return {
    readProfile: () => transaction('profiles', 'readonly', (store, done, fail) => {
      store.get('local').onsuccess = event => { try { const profile = event.target.result || newProfile(); validateProfile(profile); done(profile); } catch (error) { fail(error); } };
    }),
    updateProfile: reducer => transaction('profiles', 'readwrite', (store, done, fail) => {
      store.get('local').onsuccess = event => {
        try { const { profile, result } = reduceProfile(event.target.result || newProfile(), reducer); store.put(profile, 'local'); done(result); }
        catch (error) { fail(error); }
      };
    }),
    addAsset: asset => transaction('assets', 'readwrite', store => { store.add(asset); }),
    getAsset: id => transaction('assets', 'readonly', (store, done) => { store.get(id).onsuccess = event => done(event.target.result || null); }),
    listAssets: category => transaction('assets', 'readonly', (store, done) => {
      // Cursor avoids retaining every model Blob when opening the garage list.
      const records = [];
      const request = category ? store.index('category').openCursor(category) : store.openCursor();
      request.onsuccess = () => {
        const cursor = request.result;
        if (!cursor) { done(records); return; }
        const { blob, ...metadata } = cursor.value;
        records.push(metadata); cursor.continue();
      };
    }),
    close: () => db.close()
  };
}
