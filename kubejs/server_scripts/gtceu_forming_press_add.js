ServerEvents.recipes(event => {
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
})