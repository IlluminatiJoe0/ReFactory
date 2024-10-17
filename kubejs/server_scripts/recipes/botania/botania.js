let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

ServerEvents.recipes(event => {

    // remove default apothecary recipes
	event.remove({ id: 'botania:apothecary_default' })
	event.remove({ id: 'botania:apothecary_forest' })
	event.remove({ id: 'botania:apothecary_plains' })
	event.remove({ id: 'botania:apothecary_mountain' })
	event.remove({ id: 'botania:apothecary_fungal' })
	event.remove({ id: 'botania:apothecary_swamp' })
	event.remove({ id: 'botania:apothecary_desert' })
	event.remove({ id: 'botania:apothecary_taiga' })
	event.remove({ id: 'botania:apothecary_mesa' })
	event.remove({ id: 'botania:apothecary_mossy' })
	event.remove({ id: 'botania:apothecary_deepslate' })
	event.remove({ id: 'botania:apothecary_livingrock' })
    
    // APOTHECARY
    event.shaped(
        'botania:apothecary_default',
        [
            'CPC',
            'SCS',
            'CCC'
        ],
        {
            C: '#minecraft:stone_crafting_materials',
            P: '#botania:petals',
            S: 'gtceu:steel_plate'
        }
    )

    // mystical white flower recipe quality of life
    event.shapeless(
        'botania:white_mystical_flower',
        [
            '#forge:dusts/bone',
            '#botania:mystical_flowers'
        ]
    )

    // rubber tree sapling recipe
    event.recipes.botania.petal_apothecary(
        'gtceu:rubber_sapling', 
        [
            '#botania:petals',
            '#botania:petals',
            '#botania:petals',
            '#botania:petals',
            'botania:livingwood_log',
            'botania:livingwood_log'
        ],
        '#minecraft:saplings'
    )

    // sugar cane recipe
    event.recipes.botania.petal_apothecary(
        'minecraft:sugar_cane', 
        [
            'minecraft:carrot'
        ],
        '#forge:seeds'
    )

    // replace mana pool recipe
    event.remove({ id: 'botania:mana_pool' })
    event.recipes.gtceu.assembler('kubejs_mana_pool')
    .circuit(31)
    .itemInputs(
        '5x botania:livingrock'
    )
    .itemOutputs(
        'botania:mana_pool'
    )
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.LV] / 2)

    // replace botania ingot with gt ingot and in recipes
    // event.replaceInput({ input: 'botania:manasteel_ingot' }, 'botania:manasteel_ingot', 'gtceu:manasteel_ingot')
    // event.replaceOutput({ output: 'botania:manasteel_ingot' }, 'botania:manasteel_ingot', 'gtceu:manasteel_ingot')

    // Terrestrial Agglomeration plate
    event.remove({ id: 'botania:terra_plate' })
    event.recipes.gtceu.assembler('kubejs_terra_plate')
        .circuit(30)
        .itemInputs(
            '3x minecraft:lapis_block',
            'botania:manasteel_block',
            'botania:rune_water',
            'botania:rune_fire',
            'botania:rune_earth',
            'botania:rune_air',
            'botania:rune_mana'
        )
        .itemOutputs(
            'botania:terra_plate'
        )
        .duration(20*30)
        .EUt(GTValues.VA[GTValues.MV])


    // Start of Botania GREGIFICATION(tm)
    // Glimering wood
    event.remove({id: 'botania:glimmering_livingwood_log'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_livingwood_log')
        .itemInputs(
            'botania:livingwood_log'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_livingwood_log'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_livingwood'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_livingwood')
        .itemInputs(
            'botania:livingwood'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_livingwood'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_stripped_livingwood_log'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_stripped_livingwood_log')
        .itemInputs(
            'botania:stripped_livingwood_log'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_stripped_livingwood_log'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_stripped_livingwood'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_stripped_livingwood')
        .itemInputs(
            'botania:stripped_livingwood'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_stripped_livingwood'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_dreamwood_log'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_dreamwood_log')    
        .itemInputs(
            'botania:dreamwood_log'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_dreamwood_log'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_dreamwood'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_dreamwood')    
        .itemInputs(
            'botania:dreamwood'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_dreamwood'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_stripped_dreamwood_log'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_stripped_dreamwood_log')    
        .itemInputs(
            'botania:stripped_dreamwood_log'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_stripped_dreamwood_log'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({id: 'botania:glimmering_stripped_dreamwood'})
    event.recipes.gtceu.chemical_bath('kubejs_glimmering_stripped_dreamwood')    
        .itemInputs(
            'botania:stripped_dreamwood'
        )
        .inputFluids(Fluid.of('gtceu:glowstone 144'))
        .itemOutputs(
            'botania:glimmering_stripped_dreamwood'
        )
        .duration(20*1.5)
        .EUt(GTValues.VA[GTValues.HV])

    // Mana spreaders
    event.remove({id: 'botania:mana_spreader'})
    event.recipes.gtceu.assembler('kubejs_mana_spreader')
        .itemInputs(
            '6x #botania:livingwood_blocks',
            'kubejs:mana_core',
            'gtceu:lv_emitter',
            '#forge:lenses'
        )
        .itemOutputs(
            'botania:mana_spreader'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.remove({id: 'botania:redstone_spreader'})
    event.recipes.gtceu.assembler('kubejs_redstone_spreader')
        .itemInputs(
            'botania:mana_spreader',
            'minecraft:redstone_block'
        )
        .itemOutputs(
            'botania:redstone_spreader'
        )
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.LV] / 2)

    event.remove({id: 'botania:elven_spreader'})
    event.recipes.gtceu.assembler('kubejs_elven_spreader')
        .itemInputs(
            '6x #botania:dreamwood_logs',
            '4x gtceu:elementium_plate',
            'gtceu:hv_emitter',
            '#forge:lenses'
        )
        .itemOutputs(
            'botania:elven_spreader'
        )
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.HV] / 2)

    event.remove({id: 'botania:gaia_spreader'})
    event.recipes.gtceu.assembler('kubejs_gaia_spreader')
        .itemInputs(
            'botania:elven_spreader',
            'botania:life_essence',
            'botania:dragonstone'
        )
        .itemOutputs(
            'botania:gaia_spreader'
        )
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.HV] / 2)

    // Alchemy Catalyst
    event.remove({id: 'botania:alchemy_catalyst'})
    event.recipes.gtceu.assembler('kubejs_alchemy_catalyst')
        .itemInputs(
            'kubejs:mana_core',
            '4x gtceu:gold_plate',
            '4x botania:livingrock',
            'minecraft:brewing_stand'
        )
        .itemOutputs(
            'botania:alchemy_catalyst'
        )
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.LV])

    // Conjuration Catalyst
    event.remove({id: 'botania:conjuration_catalyst'})
    event.recipes.gtceu.assembler('kubejs_conjuration_catalyst')
        .itemInputs(
            'kubejs:mana_core',
            '4x gtceu:elementium_plate',
            '4x botania:livingrock',
            'botania:alchemy_catalyst'
        )
        .itemOutputs(
            'botania:conjuration_catalyst'
        )
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.MV])

    // Managlass
    event.remove({id: 'botania:mana_infusion/mana_glass'})
    event.recipes.gtceu.alloy_smelter('kubejs_managlass')
        .itemInputs(
            '#forge:glass',
            'gtceu:small_mana_dust'
        )
        .itemOutputs(
            'botania:mana_glass'
        )
        .duration(20*2)
        .EUt(GTValues.VA[GTValues.LV])
})

// yeet('botania:manasteel_ingot')