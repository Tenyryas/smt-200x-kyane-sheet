// Import sheet classes.
import { SMTXActorSheetKyane } from './sheets/actor-sheet.mjs';
import { preloadHandlebarsTemplates } from './helpers/templates.mjs';

/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once('init', function () {

    // Register sheet application classes
    Actors.registerSheet('smt-200x-kyane-sheet', SMTXActorSheetKyane, {
        makeDefault: false,
        label: 'SMT 200x Kyane Custom',
        types: ["character", "npc"]
    });

    // Preload Handlebars templates.
    return preloadHandlebarsTemplates();
});

Handlebars.registerHelper('statGauge', function (statValue) {
    let result = '';

    for (let index = 0; index < 40; index++) {
        if (index < statValue) {
            result += `<span class="stat-point stat-span stat-point-active"></span>`;
        }
        else {
            result += `<span class="stat-point stat-span"></span>`;
        }

    }

    return new Handlebars.SafeString(result);
});




/* -------------------------------------------- */
/*  Ready Hook                                  */
/* -------------------------------------------- */

Hooks.once('ready', function () {
});
