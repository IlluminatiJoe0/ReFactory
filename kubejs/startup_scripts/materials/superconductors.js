GTCEuStartupEvents.registry('gtceu:material', event => {
    // cable properties (Voltage, Amperage, Loss/block, isSuperconductor)

    // ULV
    event.create('mana_alloy')
    .ingot()
    .components(
        '1x manasteel',
        '1x redstone'
    )
    .cableProperties(GTValues.V[GTValues.ULV], 2, 0, true)
    .color(0xed6bed)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_FOIL
    )
    .iconSet(GTMaterialIconSet.SHINY)

    // LV

    // MV

    // HV

    // EV

    // IV

    // TODO: return to this at a later date
})