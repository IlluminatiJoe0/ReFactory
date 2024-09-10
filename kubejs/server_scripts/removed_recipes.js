ServerEvents.recipes(event => {
	event.remove({ id: 'gtceu:assembler/phenolic_board' })
	
	event.remove({ id: 'gtceu:shaped/good_circuit_board' })
	
	event.remove({ id: 'farmingforblockheads:market' })
	
	// APOTHECARIES
	event.remove({ id: 'botania:apothecary_default' })
	event.remove({ id: 'botania:apothecary_forest' })
	event.remove({ id: 'botania:apothecary_plains' })
	event.remove({ id: 'botania:apothecary_mountain' })
	event.remove({ id: 'botania:apothecary_fungal' })
	event.remove({ id: 'botania:apothecary_swamp' })
	event.remove({ id: 'botania:apothecary_desert' })
	event.remove({ id: 'botania:apothecary_taiga' })
	event.remove({ id: 'botania:apothecary_mesa' })
	event.remove({ id: 'botania:apothecary_mossy' })
	event.remove({ id: 'botania:apothecary_deepslate' })
	event.remove({ id: 'botania:apothecary_livingrock' })
	
	// 0.0.2
	
	// STEEL INGOTS AND BLOCKS FROM NON-COKE ITEMS IN PRIMITIVE BLAST FURNACE
	event.remove(
		{ type: 'gtceu:primitive_blast_furnace', 
		output: 'gtceu:steel_ingot', 
		not: [{ input: 'gtceu:coke_gem' }, {input: 'gtceu:coke_dust'}] }
	)
	event.remove(
		{ type: 'gtceu:primitive_blast_furnace', 
		output: 'gtceu:steel_block', 
		not: { input: 'gtceu:coke_block' } }
	)
	
	// REMOVE ENDERIO MACHINE CHASSIS RECIPES
	event.remove({ id: 'thermal:machine_frame' })
	event.remove({ id: 'enderio:void_chassis' })
	event.remove({ id: 'enderio:ensouled_chassis' })
	
	// REMOVE THERMAL INGOT RECIPES
	event.remove({ output: 'thermal:tin_ingot'})
	event.remove({ output: 'thermal:lead_ingot'})
	event.remove({ output: 'thermal:silver_ingot'})
	event.remove({ output: 'thermal:nickel_ingot'})
	event.remove({ output: 'thermal:steel_ingot'})
	event.remove({ output: 'thermal:bronze_ingot'})
	event.remove({ output: 'thermal:electrum_ingot'})
	event.remove({ output: 'thermal:tin_ingot'})
	
	// REMOVE ENDER CHEST, TANK and PUCH RECIPES
	event.remove({ id: 'enderstorage:ender_pouch'})
	event.remove({ id: 'enderstorage:ender_chest'})
	event.remove({ id: 'enderstorage:ender_tank'})

	
})