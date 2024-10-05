ServerEvents.recipes(event => {
    // Dielectric paste
    event.remove({ output: 'powah:dielectric_paste' })
    event.recipes.gtceu.mixer('kubejs_dielectric_paste')
    .itemInputs('4x gtceu:silicon_dust')
    .inputFluids(Fluid.of('gtceu:lubricant 200'))
    .itemOutputs('4x powah:dielectric_paste')
    .duration(20*10)
    .EUt(8)

    // LV ---------------------------------------------------------------------

    // Capacitor tiny
    event.remove({ output: 'powah:capacitor_basic_tiny' })
    event.recipes.gtceu.assembler('kubejs_capacitor_basic_tiny')
    .itemInputs(
        '2x powah:dielectric_paste',
        'gtceu:aluminium_double_wire'
    )
    .itemOutputs('2x powah:capacitor_basic_tiny')
    .duration(20*3)
    .EUt(GTValues.VA[GTValues.LV])

    // Reactor starter
    event.remove({ output: 'powah:reactor_starter' })
    event.recipes.gtceu.assembler('kubejs_reactor_starter')
    .itemInputs(
        '4x powah:capacitor_basic_tiny',
        'gtceu:lv_machine_casing',
        '#gtceu:circuits/lv'
    )
    .itemOutputs('4x powah:reactor_starter')
    .duration(20*20)
    .EUt(GTValues.VA[GTValues.LV])

    // MV ---------------------------------------------------------------------

    // Capacitor Basic
    event.remove({ output: 'powah:capacitor_basic_large' })
    event.recipes.gtceu.assembler('kubejs_capacitor_basic_large')
    .itemInputs(
        '4x powah:dielectric_paste',
        'gtceu:kanthal_double_wire'
    )
    .itemOutputs('2x powah:capacitor_basic_large')
    .duration(20*3)
    .EUt(GTValues.VA[GTValues.LV])

    // Reactor Basic
    event.remove({ output: 'powah:reactor_basic' })
    event.recipes.gtceu.assembler('kubejs_reactor_basic')
    .itemInputs(
        '4x powah:capacitor_basic_large',
        'gtceu:mv_machine_casing',
        '#gtceu:circuits/mv'
    )
    .itemOutputs('4x powah:reactor_basic')
    .duration(20*20)
    .EUt(GTValues.VA[GTValues.MV])

})