ServerEvents.recipes(event => {
    // Removing default mv circuit board recipes
    event.remove({ id: 'gtceu:assembler/phenolic_board' })
	event.remove({ id: 'gtceu:shaped/good_circuit_board' })

    // MV PHENOLIC CIRCUIT BOARD
	event.recipes.gtceu.assembler('kubejs_phenolic_board')
    .circuit(1)
    .itemInputs(
        'gtceu:wood_dust',
        'gtceu:small_glass_dust'
    )
    .inputFluids(
        Fluid.of('gtceu:glue', 50)
    )
    .itemOutputs(
        'gtceu:phenolic_circuit_board'
    )
    .duration(160)
    .EUt(30)

    // MV GOOD CIRCUIT BOARD
    event.recipes.gtceu.forming_press('kubejs_good_circuit_board')
    .itemInputs(
        'gtceu:phenolic_circuit_board',
        '8x gtceu:silver_single_wire'
    )
    .itemOutputs(
        'gtceu:phenolic_printed_circuit_board'
    )
    .circuit(1)
    .duration(160)
    .EUt(16)

	// REMOVE STEEL INGOTS AND BLOCKS FROM NON-COKE ITEMS IN PRIMITIVE BLAST FURNACE
	event.remove({ 
			type: 'gtceu:primitive_blast_furnace', 
			output: 'gtceu:steel_ingot', 
			not: [
				{ input: 'gtceu:coke_gem' }, 
				{input: 'gtceu:coke_dust'}
			] 
		}
	)
	event.remove({ 
			type: 'gtceu:primitive_blast_furnace', 
			output: 'gtceu:steel_block', 
			not: { 
				input: 'gtceu:coke_block' 
			} 
		}
	)

    // snad recipe in an assembler
    event.remove('snad:snad')
    event.remove('snad:red_snad')
    event.recipes.gtceu.assembler('kubejs_snad')
    .circuit(1)
    .itemInputs(
        '32x minecraft:sand',
        'minecraft:redstone_block'
    )
    .itemOutputs(
        'snad:snad'
    )
    .duration(20*10)
    .EUt(24)

    // zanite steel
    event.recipes.gtceu.mixer('zanite_steel')
    .circuit(31)
    .itemInputs(
        'gtceu:steel_dust',
        'gtceu:zanite_dust'
    )
    .itemOutputs('gtceu:zanite_steel_dust')
    .duration(20*15)
    .EUt(GTValues.VA[GTValues.MV])

    // Silicon Boule line
    event.remove({id: /_boule$/})
    // Crystal Puller Controller Recipe

    // Single Crystal Silicon
    event.recipes.gtceu.alloy_smelter('kubejs_single_crystal_silicon')
        .itemInputs(
            '4x gtceu:silicon_dust', 
            'gtceu:small_gallium_arsenide_dust'
        )
        .itemOutputs('kubejs:single_crystal_silicon')
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.LV])
    // Seed Crystal
    event.recipes.gtceu.lathe('kubejs_seed_crystal')
        .itemInputs('kubejs:single_crystal_silicon')
        .itemOutputs('2x kubejs:seed_crystal')
        .duration(20*15)
        .EUt(GTValues.VA[GTValues.LV])
    event.remove('gtceu:electric_blast_furnace/silicon_boule')
    // Silicon Boule
    event.recipes.gtceu.crystal_puller('kubejs_silicon_boule')
        .circuit(1)
        .itemInputs(
            'kubejs:seed_crystal',
            '32x gtceu:silicon_dust'
        )
        .itemOutputs('gtceu:silicon_boule')
        .duration(20*300)
        .EUt(GTValues.VA[GTValues.MV])
        .blastFurnaceTemp(1784)
    // Phosporus Doped Boule
    event.recipes.gtceu.crystal_puller('kubejs_phosporus_boule')
        .circuit(2)
        .itemInputs(
            'kubejs:seed_crystal',
            '64x gtceu:silicon_dust',
            '8x gtceu:phosphorus_dust'
        )
        .inputFluids(Fluid.of('gtceu:nitrogen', 8000))
        .itemOutputs('gtceu:phosphorus_boule')
        .duration(20*360)
        .EUt(GTValues.VA[GTValues.HV])
        .blastFurnaceTemp(2484)
    // Naquadah Doped Boule
    event.recipes.gtceu.crystal_puller('kubejs_naquadah_boule')
        .circuit(3)
        .itemInputs(
            'kubejs:seed_crystal', 
            '16x gtceu:silicon_block',
            'gtceu:naquadah_ingot'
        )
        .inputFluids(Fluid.of('gtceu:argon', 8000))
        .itemOutputs('gtceu:naquadah_boule')
        .duration(20*420)
        .EUt(GTValues.VA[GTValues.EV])
        .blastFurnaceTemp(5400)
    // Neutronium Doped Boule
    event.recipes.gtceu.crystal_puller('kubejs_neutronium_boule')
        .circuit(4)
        .itemInputs(
            'kubejs:seed_crystal', 
            '32x gtceu:silicon_block',
            '4x gtceu:neutronium_ingot'
        )
        .inputFluids(Fluid.of('gtceu:xenon', 8000))
        .itemOutputs('gtceu:neutronium_boule')
        .duration(20*420)
        .EUt(GTValues.VA[GTValues.IV])
        .blastFurnaceTemp(6484)


    // Rubber sheets in Bender QOL
    event.recipes.gtceu.bender('kubejs_rubber_sheet')
        .circuit(1)
        .itemInputs("gtceu:rubber_ingot")
        .itemOutputs("gtceu:rubber_plate")
        .duration(20/4)
        .EUt(GTValues.VA[GTValues.ULV])

    // Dirt recipes
    event.recipes.gtceu.mixer('kubejs_dirt')
        .itemInputs(
            '4x minecraft:sand',
            '4x minecraft:gravel',
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .itemOutputs('10x minecraft:dirt')
        .duration(20*5)
        .EUt(GTValues.VA[GTValues.LV])

    // Double Fireclay output!
    event.remove({ id: 'gtceu:shapeless/fireclay_dust'})
    event.shapeless(
        '4x gtceu:fireclay_dust',
        [
            'gtceu:clay_dust',
            'gtceu:brick_dust'
        ]
    )
    // Fixing the fireclay dust dupe
    event.remove({ id: 'gtceu:centrifuge/decomposition_centrifuging__fireclay' })
    event.recipes.gtceu.centrifuge('fireclay_dupe_fix')
        .itemInputs('4x gtceu:fireclay_dust')
        .itemOutputs(
            'gtceu:clay_dust',
            'gtceu:brick_dust'
        )
        .duration(20*2.25)
        .EUt(30)
    
})

ServerEvents.tags('block', event => {
    // Aether only in HV
    event.remove('aether:aether_portal_blocks', 'minecraft:glowstone')
    event.add('aether:aether_portal_blocks', 'gtceu:clean_machine_casing')
})