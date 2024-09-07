ServerEvents.recipes(event => {
	// 0.0.1
	
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
	
	// CLAY
	event.shaped(
		'8x minecraft:clay_ball',
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: '#minecraft:dirt',
			B: 'minecraft:water_bucket'
		}
	)
	
	// MARKET
	event.shaped(
		'farmingforblockheads:market',
		[
			'SPS',
			'T T',
			'RLR'
		],
		{
			S: 'gtceu:steel_screw',
			P: 'gtceu:steel_plate',
			T: 'minecraft:stick',
			R: 'gtceu:rubber_plate',
			L: '#minecraft:logs'
		}
	)
	
	// 0.0.2
	
	// APOTHECARY
	event.shaped(
		'botania:apothecary_default',
		[
			'CPC',
			'SCS',
			'CCC'
		],
		{
			C: '#minecraft:stone_crafting_materials',
			P: '#botania:petals',
			S: 'gtceu:steel_plate'
		}
	)
})