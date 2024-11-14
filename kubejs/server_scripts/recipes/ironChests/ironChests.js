ServerEvents.recipes(event => {

    event.remove({ id:'ironchest:chests/vanilla_copper_chest' })
    event.remove({ id:'ironchest:chests/vanilla_iron_chest' })
    event.remove({ id:'ironchest:chests/copper_iron_chest' })
    event.remove({ id:'ironchest:chests/gold_diamond_chest' })
    event.remove({ id:'ironchest:chests/diamond_crystal_chest' })
    event.remove({ id:'ironchest:chests/diamond_obsidian_chest' })
    event.remove({ id:'ironchest:chests/vanilla_dirt_chest' })

    event.remove({id: 'ironchest:upgrades/wood_to_iron_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/iron_to_gold_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/gold_to_diamond_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/copper_to_iron_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/wood_to_iron_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/diamond_to_crystal_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/wood_to_copper_chest_upgrade'})
    event.remove({id: 'ironchest:upgrades/diamond_to_obsidian_chest_upgrade'})

    // let upgrade = (input, output) => {
    //     event.recipes.gtceu.assembler(output)
    //     .circuit(32)
    //     .itemInputs(
    //         input
    //     )
    //     .itemOutputs(
    //         output
    //     )
    //     .duration(20*8)
    //     .EUt(8)
    // }

    // upgrade('8x gtceu:copper_plate', 'ironchest:wood_to_copper_chest_upgrade')
    // upgrade('8x gtceu:iron_plate', 'ironchest:wood_to_iron_chest_upgrade')
    // upgrade('4x gtceu:gold_plate', 'ironchest:iron_to_gold_chest_upgrade')
    // upgrade('4x gtceu:diamond_plate', 'ironchest:gold_to_diamond_chest_upgrade')
    // upgrade('4x ae2:quartz_glass', 'ironchest:diamond_to_crystal_chest_upgrade')
    // upgrade('4x gtceu:obsidian_plate', 'ironchest:diamond_to_obsidian_chest_upgrade')
    // upgrade('4x gtceu:iron_plate', 'ironchest:copper_to_iron_chest_upgrade')

    // copper chest
    event.recipes.gtceu.assembler('kubejs_copper_chest')
    .circuit(32)
    .itemInputs(
        'minecraft:chest',
        '8x gtceu:copper_plate'
    )
    .itemOutputs(
        'ironchest:copper_chest'
    )
    .duration(20*8)
    .EUt(8)

    // iron chest
    event.recipes.gtceu.assembler('kubejs_iron_chest')
    .circuit(32)
    .itemInputs(
        'minecraft:chest',
        '8x gtceu:iron_plate'
    )
    .itemOutputs(
        'ironchest:iron_chest'
    )
    .duration(20*12)
    .EUt(16)

    // gold chest
    event.remove({ id:'ironchest:chests/iron_gold_chest' })
    event.recipes.gtceu.assembler('kubejs_gold_chest')
    .circuit(32)
    .itemInputs(
        'minecraft:chest',
        '8x gtceu:gold_plate'
    )
    .itemOutputs(
        'ironchest:gold_chest'
    )
    .duration(20*16)
    .EUt(32)

    // diamond chest
    event.recipes.gtceu.assembler('kubejs_diamond_chest')
    .circuit(32)
    .itemInputs(
        'minecraft:chest',
        '8x gtceu:diamond_plate'
    )
    .itemOutputs(
        'ironchest:diamond_chest'
    )
    .duration(20*20)
    .EUt(64)

    // obsidian chest
    event.recipes.gtceu.assembler('kubejs_obsidian_chest')
    .circuit(32)
    .itemInputs(
        'minecraft:chest',
        '8x gtceu:obsidian_plate'
    )
    .itemOutputs(
        'ironchest:obsidian_chest'
    )
    .duration(20*20)
    .EUt(128)

    // crystal chest
    event.recipes.gtceu.assembler('kubejs_crystal_chest')
    .circuit(32)
    .itemInputs(
        'minecraft:chest',
        '8x ae2:quartz_glass'
    )
    .itemOutputs(
        'ironchest:crystal_chest'
    )
    .duration(20*20)
    .EUt(128)

    // dirt chest troll recipe
    event.recipes.gtceu.assembler('kubejs_dirt_chest')
    .circuit(32)
    .itemInputs(
        'gtceu:ev_super_chest',
        '64x minecraft:dirt'
    )
    .itemOutputs(
        'ironchest:dirt_chest'
    )
    .duration(20*60)
    .EUt(GTValues.VA[GTValues.EV])
    
})