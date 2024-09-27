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

    // THERMAL MACHINE FRAME 
	frame('thermal:machine_frame', 'gtceu:stainless_steel_plate')

    // REMOVE THERMAL INGOT RECIPES
	event.remove({ output: 'thermal:tin_ingot'})
	event.remove({ output: 'thermal:lead_ingot'})
	event.remove({ output: 'thermal:silver_ingot'})
	event.remove({ output: 'thermal:nickel_ingot'})
	event.remove({ output: 'thermal:steel_ingot'})
	event.remove({ output: 'thermal:bronze_ingot'})
	event.remove({ output: 'thermal:electrum_ingot'})
	event.remove({ output: 'thermal:tin_ingot'})
})