ServerEvents.recipes(event => {
	// RUBBER SAPLING
	event.shaped(
		'gtceu:rubber_sapling',
		[
			'AAA',
			'ASA',
			'ALA'
		],
		{
			A: '#botania:petals',
			S: '#minecraft:saplings',
			L: 'botania:livingwood_log'
		}
	)

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
})