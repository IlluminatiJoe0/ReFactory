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

	// Prismarine 
	event.recipes.gtceu.alloy_smelter('kubejs_prismarine')
		.itemInputs(
			'4x minecraft:cobblestone',
			'1x gtceu:manasteel_dust'
		)
		.itemOutputs('4x minecraft:prismarine')
		.duration(20*4)
		.EUt(GTValues.VA[GTValues.LV])

	// Molten Wax
	event.recipes.gtceu.chemical_reactor('molten_wax')
		.inputFluids(
			Fluid.of('gtceu:carbon_monoxide 1000'),
			Fluid.of('gtceu:hydrogen 3000')
		)
		.outputFluids(Fluid.of('gtceu:wax 144'))
		.duration(20*6)
		.EUt(GTValues.VA[GTValues.LV])

	// Stonecutter
	event.replaceInput({output: 'minecraft:stonecutter'}, 'minecraft:stone', '#forge:stone')
	event.replaceInput({output: 'minecraft:stonecutter'}, 'minecraft:iron_ingot', 'gtceu:iron_buzz_saw_blade')

	// Bell
	event.recipes.gtceu.assembler('bell')
		.circuit(31)
		.itemInputs('4x gtceu:gold_plate', '#forge:rods/wood')
		.itemOutputs('minecraft:bell')
		.duration(20*8)
		.EUt(GTValues.VA[GTValues.LV] / 2)

	// Scaffolding
	event.replaceInput({output: 'minecraft:scaffolding'}, 'minecraft:bamboo', '#forge:rods/wood')

	// Remove eye of ender from traders
	event.remove({id: 'emitrades:villager_trades/wandering_trader_116'})
	
})