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
})