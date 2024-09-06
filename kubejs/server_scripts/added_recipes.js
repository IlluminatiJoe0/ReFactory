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
})