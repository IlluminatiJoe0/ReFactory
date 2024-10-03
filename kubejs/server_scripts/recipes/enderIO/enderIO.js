// they call me the yeeter (a function that hides an element from recipe viewers)
let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
      event.remove('forge:tools/hammers', itemName)
    })
}

ServerEvents.recipes(event => {
    // frame helper
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

    // REMOVE ENDERIO MACHINE CHASSIS RECIPES
	event.remove({ id: 'thermal:machine_frame' })
	event.remove({ id: 'enderio:void_chassis' })
	event.remove({ id: 'enderio:ensouled_chassis' })
	
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

	// electromagnet
	event.remove({ id: 'enderio:electromagnet' })
	event.shaped(
		'enderio:electromagnet',
		[
			'PPP',
			'P P',
			'C C',
		],
		{
			P: 'gtceu:steel_ingot',
			C: 'gtceu:magnetic_steel_ingot'
		}
	)

	// Replace enderio ingots with gtceu ingots
	event.replaceInput({}, 'enderio:energetic_alloy_ingot', 'gtceu:energetic_alloy_ingot')
	event.replaceInput({}, 'enderio:vibrant_alloy_ingot', 'gtceu:vibrant_alloy_ingot')
})

yeet('enderio:energetic_alloy_ingot')
yeet('enderio:vibrant_alloy_ingot')