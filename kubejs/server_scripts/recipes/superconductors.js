ServerEvents.recipes(event => {
    // LV
    event.recipes.gtceu.mixer('mana_alloy_dust')
    .circuit(31)
    .itemInputs(
        'gtceu:manasteel_dust',
        '2x minecraft:redstone'
    )
    .itemOutputs('2x gtceu:mana_alloy_dust')
    .duration(20*10)
    .EUt(GTValues.VA[GTValues.LV])

    // MV
    event.recipes.gtceu.mixer('terralumina')
    .circuit(31)
    .itemInputs(
        '2x gtceu:aluminium_dust',
        'gtceu:terrasteel_dust'
    )
    .itemOutputs('3x gtceu:terralumina_dust')
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV])

    // HV
    event.recipes.gtceu.mixer('elventium')
    .circuit(31)
    .itemInputs(
        'gtceu:elementium_dust',
        '2x gtceu:gold_dust',
        'gtceu:ambrosium_dust'
    )
    .itemOutputs('3x gtceu:elventium_dust')
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.HV])
})