ServerEvents.recipes(event => {
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
})