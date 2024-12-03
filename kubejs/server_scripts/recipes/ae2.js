ServerEvents.recipes(event => {
    event.recipes.gtceu.autoclave('kubejs_flawless_budding_quartz')
        .itemInputs(
            'ae2:flawed_budding_quartz'
        )
        .inputFluids(Fluid.of('minecraft:water 1000'))
        .itemOutputs('ae2:flawless_budding_quartz')
        .duration(20*10)
        .EUt(GTValues.VA[GTValues.HV])
})