GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    // setMaxIOSize(item in | item out | fluid in | fluid out)

    // Proliferation Inducer multiblock
    event.create('proliferation_inducer')
        .category('refactory')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 0) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CRYSTALLIZATION, FillDirection.ALWAYS_FULL) 
        .setSound(GTSoundEntries.BOILER)

    event.create('crystal_puller')
        .category('refactory')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 1, 0) 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARC_FURNACE, FillDirection.LEFT_TO_RIGHT) 
        .setSound(GTSoundEntries.TURBINE)

    event.create('greenhouse')
        .category('refactory')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})