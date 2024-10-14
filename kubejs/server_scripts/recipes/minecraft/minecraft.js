ServerEvents.recipes(event => {
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

	// remove handcrafted ender eye recipe
	event.remove('minecraft:ender_eye')

	// String
	event.shapeless(
		'minecraft:string',
		['silentgear:fluffy_string']
	)
	
})