(async () => {
  const core = SteelJourneyCore;
  const name = `steel-journey-test-${Date.now()}`;
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  let repo;
  try {
    repo = await core.openRepository(indexedDB, name);
    let app = core.createApplication(repo);
    await repo.updateProfile(p => { p.currency.parts = 60; });
    await Promise.all([app.unlockPart('armor'), app.unlockPart('armor')]);
    assert((await app.profile()).currency.parts === 30, 'concurrent unlock double charged');
    await app.saveDraft(core.createStarterBlueprint());
    await app.manufacture({ blueprintId: 'starter', tankId: 'browser-tank' });
    let rejected = false;
    try { await repo.updateProfile(p => { p.currency.parts = -1; }); } catch { rejected = true; }
    assert(rejected && (await app.profile()).currency.parts === 30, 'transaction rollback failed');
    const text = JSON.stringify({ asset: { version: '2.0' }, scenes: [{}] });
    const json = new TextEncoder().encode(text.padEnd(Math.ceil(text.length / 4) * 4, ' '));
    const bytes = new ArrayBuffer(20 + json.length), view = new DataView(bytes);
    [0x46546c67, 2, bytes.byteLength, json.length, 0x4e4f534a].forEach((v, i) => view.setUint32(i * 4, v, true));
    new Uint8Array(bytes, 20).set(json);
    await app.models.save({ id: 'model', name: 'test', category: 'player-tank', blob: new Blob([bytes]) });
    repo.close();
    repo = await core.openRepository(indexedDB, name); app = core.createApplication(repo);
    assert((await app.profile()).tanks.length === 1, 'tank did not persist');
    assert((await app.models.get('model')).blob.size === bytes.byteLength, 'GLB did not persist');
    assert(!('blob' in (await app.models.list())[0]), 'list exposes large blobs');
    assert((await app.prepareFirstLevel('browser-tank')).level.enemies.length === 4, 'level flow failed');
    // 老存档（建库时目录里还没有炮塔）读出来要自动补回免费部件，付费部件不能顺带解锁。
    await repo.updateProfile(p => { p.unlockedParts = p.unlockedParts.filter(id => id !== 'turret'); });
    const healed = await app.profile();
    assert(healed.unlockedParts.includes('turret'), 'legacy profile did not regain free turret');
    assert(!healed.unlockedParts.includes('rapid'), 'paid part was unlocked for free');
    return { passed: true, checks: ['IndexedDB reopen', 'Blob persistence', 'concurrent unlock', 'transaction rollback', 'manufacture and prepare', 'legacy unlock migration'] };
  } finally {
    repo?.close();
    await new Promise((resolve, reject) => { const request = indexedDB.deleteDatabase(name); request.onsuccess = resolve; request.onerror = () => reject(request.error); });
  }
})()
