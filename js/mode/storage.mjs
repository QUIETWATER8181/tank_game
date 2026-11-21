import { SCHEMA_VERSION, PARTS } from './catalog.mjs';

export function newProfile() {
  return { schemaVersion: SCHEMA_VERSION, currency: { parts: 0 }, unlockedParts: Object.keys(PARTS).filter(id => PARTS[id].cost === 0), blueprints: [], tanks: [] };
}
function validateProfile(profile) {
  if (profile.schemaVersion !== SCHEMA_VERSION) throw new Error('存档版本不支持；保留原数据，等待迁移');
  if (!Number.isSafeInteger(profile.currency?.parts) || profile.currency.parts < 0 || !Array.isArray(profile.unlockedParts) || !Array.isArray(profile.blueprints) || !Array.isArray(profile.tanks)) throw new Error('存档结构损坏');
}
// 免费部件永远是开放的（`newProfile` 就是这么建的），但老存档不会自己长出新目录项：
// prototype-1 时代还没有炮塔，那份存档的 unlockedParts 里就永远没有 turret，而每个
// 新蓝图（`createStarterBlueprint`）都带炮塔，于是验收单每次都报「turret：部件未解锁」，
// 制造按钮也跟着禁用；炮塔又已经装在车上，「可装部件」按设计不列已装的唯一部件，
// 界面上连解锁入口都没有。这里在读/写存档时把缺的免费部件补回去，付费部件不受影响。
export function migrateProfile(profile) {
  const free = Object.keys(PARTS).filter(id => PARTS[id].cost === 0);
  profile.unlockedParts = [...new Set([...profile.unlockedParts, ...free])];
  return profile;
}
// Reducers are synchronous and run inside one transaction. Never await in a reducer.
function reduceProfile(profile, reducer) {
  validateProfile(profile);
  migrateProfile(profile);
  const result = reducer(profile);
  if (result?.then) throw new Error('存档更新函数必须同步');
  validateProfile(profile);
  return { profile, result };
}
export class MemoryRepository {
  constructor(profile = newProfile()) { this.profile = structuredClone(profile); this.assets = new Map(); }
  async readProfile() { validateProfile(this.profile); return structuredClone(migrateProfile(this.profile)); }
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
      store.get('local').onsuccess = event => { try { const profile = migrateProfile(event.target.result || newProfile()); validateProfile(profile); done(profile); } catch (error) { fail(error); } };
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
