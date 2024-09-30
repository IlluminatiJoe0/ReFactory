ServerEvents.recipes(event => {

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