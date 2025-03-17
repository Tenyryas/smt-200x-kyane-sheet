/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'modules/smt-200x-kyane-sheet/templates/actor/parts/actor-features.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/npc-features.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/npc-options.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/npc-level.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/actor-passives.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/actor-armor.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/actor-weapons.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/actor-items.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/actor-consumables.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/actor-spells.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/actor-buffs.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/actor-effects.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/actor-stats.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/actor-sidebar-derived-stats.hbs',
    'modules/smt-200x-kyane-sheet/templates/actor/parts/actor-level.hbs'
  ]);
};
