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
    .EUt(GTValues.VA[GTValues.LV])

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

})

// yeet('botania:manasteel_ingot')