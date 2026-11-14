export const MODEL_CATEGORIES = ['terrain', 'enemy-tank', 'player-tank'];
export class ModelLibrary {
  constructor(repository) { this.repository = repository; }
  async save({ id, name, category, blob }) {
    if (typeof id !== 'string' || !id || typeof name !== 'string' || !name.trim() || !MODEL_CATEGORIES.includes(category)) throw new Error('模型元数据无效');
    if (!(blob instanceof Blob) || blob.size > 64 * 1024 * 1024 || blob.size < 20) throw new Error('需要 64 MB 以内的 GLB');
    const data = await blob.arrayBuffer(), header = new DataView(data);
    if (header.getUint32(0, true) !== 0x46546c67 || header.getUint32(4, true) !== 2 || header.getUint32(8, true) !== data.byteLength || header.getUint32(16, true) !== 0x4e4f534a || header.getUint32(12, true) + 20 > data.byteLength) throw new Error('GLB 结构无效');
    const definition = JSON.parse(new TextDecoder().decode(new Uint8Array(data, 20, header.getUint32(12, true))));
    if (definition.asset?.version !== '2.0') throw new Error('需要 glTF 2.0 模型');
    if ([...(definition.buffers || []), ...(definition.images || [])].some(item => item.uri && !item.uri.startsWith('data:'))) throw new Error('请内嵌模型资源');
    if ((definition.extensionsRequired || []).some(value => /draco|meshopt|basisu/i.test(value))) throw new Error('暂不支持压缩模型');
    const record = { schemaVersion: 1, id, name: name.trim(), category, format: 'glb', byteLength: blob.size, blob };
    await this.repository.addAsset(record);
    const { blob: ignored, ...metadata } = record;
    return metadata;
  }
  list(category) {
    if (category !== undefined && !MODEL_CATEGORIES.includes(category)) throw new Error('未知模型分类');
    return this.repository.listAssets(category);
  }
  get(id) { return this.repository.getAsset(id); }
}
