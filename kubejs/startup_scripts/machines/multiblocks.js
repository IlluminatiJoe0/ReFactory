GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('proliferation_inducer', 'multiblock')
        .tooltips(Component.translatable('tooltip.gtceu.multiblock.proliferation_inducer'))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('proliferation_inducer')
        .appearanceBlock(GTBlocks.CASING_HSSE_STURDY)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('F###F', 'F###F', 'F#C#F', 'FCCCF', '##C##', '#####')
            .aisle('#####', '##C##', '#CMC#', 'CMMMC', '#CMC#', '##C##')
            .aisle('#####', '#CCC#', 'CMMMC', 'CMcMC', 'CMMMC', '#CCC#')
            .aisle('#####', '##C##', '#CMC#', 'CMMMC', '#CMC#', '##C##')
            .aisle('F###F', 'F###F', 'F#C#F', 'FCOCF', '##C##', '#####')
            .where('O', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('C', Predicates.blocks(GTBlocks.CASING_HSSE_STURDY.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
            )
            .where('F', Predicates.blocks('gtceu:hsse_frame'))
            .where('M', Predicates.blocks('minecraft:mud'))
            .where('c', Predicates.blocks(GTBlocks.COIL_NAQUADAH.get()))
            .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/solid/machine_casing_sturdy_hsse',
            'gtceu:block/multiblock/large_chemical_reactor',
            false
        )
    
})