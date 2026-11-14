import { PARTS, createStarterBlueprint, RULES_VERSION } from './catalog.mjs';
import { evaluateTank } from './evaluation.mjs';
import { ModelLibrary } from './models.mjs';
import { createRun, generateLevel } from './campaign.mjs';

export function createApplication(repository) {
  const models = new ModelLibrary(repository);
  return {
    models,
    profile: () => repository.readProfile(),
    unlockPart: partId => repository.updateProfile(profile => {
      if (!Object.hasOwn(PARTS, partId)) throw new Error('未知部件');
      if (profile.unlockedParts.includes(partId)) return { unlocked: true, charged: 0 };
      const cost = PARTS[partId].cost;
      if (profile.currency.parts < cost) throw new Error('零件不足');
      profile.currency.parts -= cost; profile.unlockedParts.push(partId);
      return { unlocked: true, charged: cost };
    }),
    // Drafts may be structurally incomplete, but must be JSON-serializable.
    saveDraft: blueprint => repository.updateProfile(profile => {
      if (!blueprint || blueprint.schemaVersion !== 1 || typeof blueprint.id !== 'string' || !blueprint.id || !Number.isInteger(blueprint.revision) || blueprint.revision < 1) throw new Error('草稿标识或版本无效');
      const existing = profile.blueprints.find(item => item.id === blueprint.id);
      if (existing && blueprint.revision <= existing.revision) throw new Error('草稿版本冲突，请重新读取');
      const copy = JSON.parse(JSON.stringify(blueprint));
      profile.blueprints = profile.blueprints.filter(item => item.id !== copy.id); profile.blueprints.push(copy);
      return copy;
    }),
    evaluate: async blueprint => evaluateTank(blueprint, (await repository.readProfile()).unlockedParts),
    manufacture: async ({ blueprintId, tankId, modelId = null }) => {
      if (typeof tankId !== 'string' || !tankId) throw new Error('坦克 ID 无效');
      if (modelId !== null) {
        const model = await models.get(modelId);
        if (!model || model.category !== 'player-tank') throw new Error('需要仓库中的玩家坦克模型');
      }
      return repository.updateProfile(profile => {
        if (profile.tanks.some(tank => tank.id === tankId)) throw new Error('坦克 ID 已存在');
        const blueprint = profile.blueprints.find(item => item.id === blueprintId);
        const assessment = evaluateTank(blueprint, profile.unlockedParts);
        if (!assessment.valid) throw new Error(`制造失败：${assessment.errors.join('；')}`);
        const tank = { schemaVersion: 1, id: tankId, blueprint: structuredClone(blueprint), modelId, assessment };
        profile.tanks.push(tank); return tank;
      });
    },
    prepareFirstLevel: async tankId => {
      const profile = await repository.readProfile();
      const tank = profile.tanks.find(item => item.id === tankId);
      if (!tank) throw new Error('坦克不存在');
      // Never trust a saved assessment: recompute before entering a run.
      const assessment = evaluateTank(tank.blueprint, profile.unlockedParts);
      if (!assessment.valid) throw new Error('坦克需要返回车间修正');
      const level = generateLevel();
      level.enemyTemplates = Object.fromEntries(['basic-infantry', 'base-guard'].map(id => {
        const blueprint = createStarterBlueprint(id === 'base-guard' ? 'heavy' : 'infantry', id);
        return [id, { blueprint, assessment: evaluateTank(blueprint), modelId: null }];
      }));
      return createRun({ ...tank, assessment, rulesVersion: RULES_VERSION }, level);
    },
    close: () => repository.close()
  };
}
