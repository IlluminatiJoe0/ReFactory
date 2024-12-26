GTCEuStartupEvents.registry('gtceu:material', event => {
    // cable properties (Voltage, Amperage, Loss/block, isSuperconductor)

    // LV
    event.create('mana_alloy')
    .ingot()
    .components(
        '1x manasteel',
        '2x redstone'
    )
    .cableProperties(GTValues.V[GTValues.LV], 2, 0, true)
    .color(0xed6bed)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_BOLT_SCREW
    )
    .iconSet(GTMaterialIconSet.SHINY)

    // MV
    event.create('terralumina')
    .ingot()
    .components(
        '1x terrasteel',
        '2x aluminium'
    )
    .cableProperties(GTValues.V[GTValues.MV], 2, 0, true)
    .color(0x53ffcf)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_BOLT_SCREW
    )
    .iconSet(GTMaterialIconSet.SHINY)

    // HV
    event.create('elventium')
    .ingot()
    .components(
        '1x elementium',
        '1x ambrosium',
        '2x gold'
    )
    .cableProperties(GTValues.V[GTValues.HV], 2, 0, true)
    .color(0x414153)
    .secondaryColor(0x331619)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_BOLT_SCREW
    )
    .iconSet(GTMaterialIconSet.SHINY)
    .blastTemp(1200, null, GTValues.VA[GTValues.MV], 20*10)
})