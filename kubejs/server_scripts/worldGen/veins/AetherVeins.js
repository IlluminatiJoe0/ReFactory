GTCEuServerEvents.oreVeins(event => {
    event.add('kubejs:aluminium', vein => {
        vein.layer('aether_islands')
        vein.weight(20)
        vein.clusterSize(85)
        vein.density(0.35)
        vein.discardChanceOnAirExposure(0)
        vein.heightRangeUniform(16, 128)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Aluminium).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Aluminium)
            .density(0.2)
            .radius(4)
        )
    })
})