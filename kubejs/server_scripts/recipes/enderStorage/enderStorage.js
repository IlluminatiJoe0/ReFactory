ServerEvents.recipes(event => {

    // remove default ender storage recipes
	event.remove({ id: 'enderstorage:ender_pouch'})
	event.remove({ id: 'enderstorage:ender_chest'})
	event.remove({ id: 'enderstorage:ender_tank'})

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