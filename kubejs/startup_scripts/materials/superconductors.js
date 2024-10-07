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
    event.create('energetic_aluminium')
    .ingot()
    .components(
        '1x energetic_alloy',
        '2x aluminium'
    )
    .cableProperties(GTValues.V[GTValues.LV], 2, 0, true)
    .color(0x43bff0)
    .secondaryColor(0xe0e841)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_FOIL
    )
    .iconSet(GTMaterialIconSet.SHINY)

    // MV
    event.create('electroconglomerate_alloy')
    .ingot()
    .components(
        '1x energetic_aluminium',
        '1x ambrosium',
        '1x electrum'
    )
    .cableProperties(GTValues.V[GTValues.MV], 2, 0, true)
    .color(0x57612d)
    .secondaryColor(0x24361c)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_FOIL
    )
    .iconSet(GTMaterialIconSet.DULL)
    .blastTemp(1800, null, GTValues.VA[GTValues.HV], 20*20)

    // HV

    // EV

    // IV

    // TODO: return to this at a later date
})