ServerEvents.recipes(event => {
    // ULV
    event.recipes.gtceu.mixer('mana_alloy_dust')
    .circuit(31)
    .itemInputs(
        'gtceu:manasteel_dust',
        'minecraft:redstone'
    )
    .itemOutputs('2x gtceu:mana_alloy_dust')
    .duration(20*10)
    .EUt(GTValues.VA[GTValues.LV])

    // LV
    event.recipes.gtceu.mixer('energetic_aluminium_dust')
    .circuit(31)
    .itemInputs(
        '2x gtceu:aluminium_dust',
        'gtceu:energetic_alloy_dust'
    )
    .itemOutputs('3x gtceu:energetic_aluminium_dust')
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV])

    // MV
    event.recipes.gtceu.mixer('electroconglomerate_alloy_dust')
    .circuit(31)
    .itemInputs(
        'gtceu:energetic_aluminium_dust',
        'gtceu:electrum_dust',
        'gtceu:ambrosium_dust'
    )
    .itemOutputs('3x gtceu:electroconglomerate_alloy_dust')
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.HV])
})