GTCEuStartupEvents.registry('gtceu:material', event => {
    
    // Ambrosium and Zanite from Aether
    event.create('ambrosium')
    .gem()
    .ore()
    .element(GTElements.get('ambrosium'))
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LENS)
    .color(0xf9ff52)
    .iconSet(GTMaterialIconSet.OPAL)

    event.create('zanite')
    .gem()
    .ore()
    .element(GTElements.get('zanite'))
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LENS)
    .color(0x611791)
    .iconSet(GTMaterialIconSet.DIAMOND)

    // Energetic and Vibrant Alloy from EnderIO
    event.create('energetic_alloy')
    .ingot()
    .liquid()
    .components(
        '1x gtceu:gold_dust',
        '1x minecraft:redstone'
    )
    .iconSet(GTMaterialIconSet.DULL)
    .flags(
        GTMaterialFlags.GENERATE_PLATE, 
        GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_RING,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_ROTOR
    )
    .element(GTElements.get('energetic_alloy'))
    .blastTemp(1500, null, GTValues.VA[GTValues.MV], 20*20)

    // Vibrant
    event.create('vibrant_alloy')
    .ingot()
    .liquid()
    .components(
        '1x gtceu:energetic_alloy_dust',
        '1x gtceu:ender_pearl_dust'
    )
    .iconSet(GTMaterialIconSet.DULL)
    .flags(
        GTMaterialFlags.GENERATE_PLATE, 
        GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_RING,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_ROTOR
    )
    .element(GTElements.get('vibrant_alloy'))
    .blastTemp(1600, null, GTValues.VA[GTValues.MV], 20*25)

})