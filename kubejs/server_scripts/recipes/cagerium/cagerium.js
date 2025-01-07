ServerEvents.recipes(event => {

    // add mob cage recipe
    event.recipes.gtceu.assembler('kubejs_mob_cage')
    .circuit(32)
    .itemInputs(
        '8x cagerium:ominous_skull',
        '8x gtceu:aluminium_plate',
        'mob_grinding_utils:saw'
    )
    .itemOutputs(
        'cagerium:cage'
    )
    .duration(20*16)
    .EUt(GTValues.VA[GTValues.MV])

    // add mob terrarium recipe
    event.recipes.gtceu.assembler('kubejs_mob_terrarium')
    .circuit(32)
    .itemInputs(
        '3x cagerium:binding_wood_plate',
        '8x ae2:quartz_glass',
        'mob_grinding_utils:saw'
    )
    .itemOutputs(
        'cagerium:terrarium'
    )
    .duration(20*16)
    .EUt(GTValues.VA[GTValues.MV])

    // add ominous skull recipe
    event.recipes.gtceu.assembler('kubejs_ominous_skull')
    .circuit(32)
    .itemInputs(
        'botania:spark',
        '4x botania:quartz_red',
        '2x gtceu:steel_plate'
    )
    .itemOutputs(
        'cagerium:ominous_skull'
    )
    .duration(20*16)
    .EUt(GTValues.VA[GTValues.MV])

    // add binding wood plate recipe
    event.recipes.gtceu.assembler('kubejs_binding_wood_plate')
    .circuit(32)
    .itemInputs(
        'botania:spark',
        '4x gtceu:treated_wood_plate'
    )
    .itemOutputs(
        'cagerium:binding_wood_plate'
    )
    .duration(20*16)
    .EUt(GTValues.VA[GTValues.MV])
})