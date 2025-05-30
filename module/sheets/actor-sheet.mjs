import { SMTXActorSheet } from '/systems/smt-200x/module/sheets/actor-sheet.mjs';

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {SMTXActorSheet}
 */
export class SMTXActorSheetKyane extends SMTXActorSheet {
    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ['smt-200x-kyane', 'smt-200x', 'sheet', 'actor'],
            width: 850,
            height: 800,
            tabs: [
                {
                    navSelector: '.sheet-tabs',
                    contentSelector: '.sheet-body',
                    initial: 'features',
                },
            ],
        });
    }

    /** @override */
    get template() {
        return `modules/smt-200x-kyane-sheet/templates/actor/actor-${this.actor.type}-sheet.hbs`;
    }



    /* -------------------------------------------- */



    /** @override */
      async getData() {
        const context = super.getData();

        return context;
      }



    /**
     * Character-specific context modifications
     *
     * @param {object} context The context object to mutate
     */
    //   _prepareCharacterData(context) {
    //     // This is where you can enrich character-specific editor fields
    //     // or setup anything else that's specific to this type
    //   }



    /**
     * Organize and classify Items for Actor sheets.
     *
     * @param {object} context The context object to mutate
     */
    //   _prepareItems(context) {
    //   }



    /* -------------------------------------------- */

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        let actor = this.actor.system;
        let stats = actor.stats;
        let st = stats.st.value;
        let mg = stats.mg.value;
        let vt = stats.vt.value;
        let ag = stats.ag.value;
        let lk = stats.lk.value;

        html.on("change", ".stat-text", (ev) => {
            // console.log(ev.currentTarget);
            // console.log(ev.currentTarget.value);

            let children = $('.st-gauge').children();

            children.each(function(idx, val){             
                $(this).addClass('stat-point-active');
            });
            
        });

        const aff_pc = $("#affinities") ?? 0;
        const aff_t_pc = $("#affinities-text") ?? 0;

        if (aff_t_pc.length) {
            if (aff_t_pc.outerWidth(true) >= 530) {
                aff_t_pc.addClass("longaffinities"); 
                aff_pc.css("justify-content", "left");
                aff_t_pc.css("animation-duration", `${aff_t_pc.outerWidth(true)/100}s`);
            }
            else {
                aff_t_pc.removeClass("longaffinities");
                aff_pc.css("justify-content", "center");
            }
        }

        const aff_npc = $("#affinities-npc") ?? 0;
        const aff_t_npc = $("#affinities-text-npc") ?? 0;

        if (aff_t_npc.length) {
            if (aff_t_npc.outerWidth(true) >= 347) {
                aff_t_npc.addClass("longaffinities");
                aff_npc.css("justify-content", "left");
                aff_t_npc.css("animation-duration", `${aff_t_npc.outerWidth(true)/100}s`);
                
                    }
            else {
                aff_t_npc.removeClass("longaffinities");
                aff_npc.css("justify-content", "center");
            }
        }

    }
}