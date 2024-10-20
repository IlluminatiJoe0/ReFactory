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
})