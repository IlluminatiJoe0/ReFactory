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
	
})