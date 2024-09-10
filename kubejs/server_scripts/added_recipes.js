ServerEvents.recipes(event => {
	// HELPERS
	let frame = (output, input) => {
    event.shaped(output, [
      'III',
      'IWI',
	  'III'
    ], {
      W: '#forge:tools/wrenches',
      I: input
    })
  }
	
	
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
	
	// THERMAL MACHINE FRAME 
	frame('thermal:machine_frame', 'gtceu:stainless_steel_plate')
	// ENDERIO VOID MACHINE CHASSIS
	frame('enderio:void_chassis', 'gtceu:aluminium_plate')
	// ENDERIO SOUL MACHINE CHASSIS
	event.shaped(
		'enderio:ensouled_chassis',
		[
			'PPP',
			'PVP',
			'CPC',
		],
		{
			P: 'enderio:soularium_ingot',
			V: 'enderio:void_chassis',
			C: 'gtceu:electrum_single_cable'
		}
	)
	
})