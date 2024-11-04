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
    .iconSet(GTMaterialIconSet.DULL)
    .color(0xff9021)
    .components(
        '1x gold',
        '1x redstone'
    )
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
    .blastTemp(1500, null, GTValues.VA[GTValues.MV], 20*25)
    // Vibrant
    event.create('vibrant_alloy')
    .ingot()
    .liquid()
    .iconSet(GTMaterialIconSet.DULL)
    .color(0x07e830)
    .components(
        '1x energetic_alloy',
        '1x ender_pearl'
    )
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
    .blastTemp(1600, null, GTValues.VA[GTValues.MV], 20*30)

    // Zanite Steel
    event.create('zanite_steel')
    .ingot()
    .components(
        '1x zanite',
        '1x steel'
    )
    .color(0x62426e)
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
        GTMaterialFlags.GENERATE_PLATE, 
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_ROD
    )
    .blastTemp(1800, null, GTValues.VA[GTValues.HV], 20*20)

    // Mana
    event.create('mana')
    .dust()
    .color(0x0088ff)
    .element(GTElements.get('mana'))
    .iconSet(GTMaterialIconSet.SHINY)

    // Manasteel
    event.create('manasteel')
    .ingot()
    .color(0x195eff)
    .components(
        '1x mana',
        '1x iron'
    )
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD
    )

    // Terra
    event.create('terra')
    .dust()
    .color(0x00ff1a)
    .element(GTElements.get('terra'))
    .iconSet(GTMaterialIconSet.SHINY)

    // Terrasteel
    event.create('terrasteel')
    .ingot()
    .color(0x16bf00)
    .components(
        '1x terra',
        '1x manasteel'
    )
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_BOLT_SCREW
    )

    // Elementium
    event.create('elementium')
    .ingot()
    .color(0xff2be3)
    .element(GTElements.get('elementium'))
    .iconSet(GTMaterialIconSet.SHINY)
    .flags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_ROD
    )

    // Ozone
    event.create('ozone')
    .gas()
    .color(0x9ad6d6)
    .components(
        '3x oxygen',
    )
    .iconSet(GTMaterialIconSet.FLUID)

    // Mistrium
    event.create('mistrium')
    .fluid()
    .color(0xedd242)
    .element(GTElements.get('mistrium'))
    .iconSet(GTMaterialIconSet.FLUID)

    // Aether Air
    event.create('aether_air')
    .gas()
    .color(0xf0e297)
    .components(
        '28x fluorine',
        '24x oxygen',
        '24x ozone',
        '16x helium',
        '8x mistrium'
    )
    .iconSet(GTMaterialIconSet.FLUID)
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // Liquid Aether Air
    event.create('liquid_aether_air')
    .fluid()
    .color(0xd1bc49)
    .components(
        '28x fluorine',
        '22x oxygen',
        '16x ozone',
        '16x helium',
        '18x mistrium'
    )
    .iconSet(GTMaterialIconSet.FLUID)
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // Ad Astra
    // Desh
    event.create('desh')
    .ingot()
    .ore()
    .color(0xef8f00)
    .element(GTElements.get('desh'))
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_RING,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_ROD
    )

    event.create('ostrum')
    .ingot()
    .ore()
    .color(0x5f2f60)
    .element(GTElements.get('ostrum'))
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_RING,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_ROD
    )

    event.create('calorite')
    .ingot()
    .ore()
    .color(0x8f1f30)
    .element(GTElements.get('calorite'))
    .iconSet(GTMaterialIconSet.METALLIC)
    .flags(GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_RING,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_ROD
    )
})

GTCEuStartupEvents.materialModification(event => {
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('manasteel'), () => Item.getItem('botania:manasteel_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terrasteel'), () => Item.getItem('botania:terrasteel_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('elementium'), () => Item.getItem('botania:elementium_ingot'))
})