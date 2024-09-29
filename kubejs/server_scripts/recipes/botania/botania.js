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
            'botania:cell_block',
            'botania:cell_block',
            'botania:cell_block',
            'botania:cell_block',
            'botania:cell_block',
            'botania:cell_block'
        ],
        '#forge:seeds'
    )

})