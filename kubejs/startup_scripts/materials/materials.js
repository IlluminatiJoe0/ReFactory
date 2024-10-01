GTCEuStartupEvents.registry('gtceu:material', event => {

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
})