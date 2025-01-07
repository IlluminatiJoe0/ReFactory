GTCEuServerEvents.oreVeins(event => {
    // Removes Bauxite from Mica Vein forcing the player to go to the Aether to get Rutile
    event.modify("gtceu:mica_vein", vein => {
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Kyanite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Mica).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Pollucite).size(1, 1))
            )
        )
    })

})