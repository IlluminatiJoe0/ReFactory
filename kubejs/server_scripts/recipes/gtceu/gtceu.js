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
    event.recipes.gtceu.electric_blast_furnace('kubejs_silicon_boule')
        .circuit(2)
        .itemInputs(
            'kubejs:seed_crystal',
            '32x gtceu:silicon_dust'
        )
        .itemOutputs('gtceu:silicon_boule')
        .duration(20*420)
        .EUt(GTValues.VA[GTValues.MV])
        .blastFurnaceTemp(1784)
    
})