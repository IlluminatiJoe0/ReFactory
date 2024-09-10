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
		
	// ENDER CHEST
	event.recipes.gtceu.assembler('kubejs_ender_chest')
		.itemInputs(
			'gtceu:titanium_crate',
			'8x powah:ender_core',
			'gtceu:mv_field_generator'
		)
		.itemOutputs('enderstorage:ender_chest')
		.duration(4800)
		.EUt(256)
	
	// ENDER TANK
	event.recipes.gtceu.assembler('kubejs_ender_tank')
		.itemInputs(
			'gtceu:ev_hermetic_casing',
			'8x powah:ender_core',
			'gtceu:ender_fluid_link_cover'
		)
		.itemOutputs('enderstorage:ender_tank')
		.duration(4800)
		.EUt(256)
		
	// ENDER POUCH
	event.recipes.gtceu.assembler('kubejs_ender_pouch')
		.itemInputs(
			'4x minecraft:leather',
			'8x powah:ender_core',
			'gtceu:mv_field_generator',
			'minecraft:ender_chest'
		)
		.itemOutputs('enderstorage:ender_pouch')
		.duration(4800)
		.EUt(256)

})