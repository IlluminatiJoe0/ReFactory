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

    // THERMAL MACHINE FRAME 
	frame('thermal:machine_frame', 'gtceu:stainless_steel_plate')

  event.replaceInput({ input: 'thermal:cured_rubber' }, 'thermal:cured_rubber', 'gtceu:rubber_ingot')

})

// hide thermal items
    // ingots
    yeet('thermal:tin_ingot')
    yeet('thermal:lead_ingot')
    yeet('thermal:silver_ingot')
    yeet('thermal:nickel_ingot')
    yeet('thermal:steel_ingot')
    yeet('thermal:bronze_ingot')
    yeet('thermal:electrum_ingot')
    yeet('thermal:invar_ingot')
    yeet('thermal:rose_gold_ingot')
    // plates
    yeet('thermal:tin_plate')
    yeet('thermal:lead_plate')
    yeet('thermal:silver_plate')
    yeet('thermal:nickel_plate')
    yeet('thermal:steel_plate')
    yeet('thermal:bronze_plate')
    yeet('thermal:electrum_plate')
    yeet('thermal:invar_plate')
    yeet('thermal:iron_plate')
    yeet('thermal:copper_plate')
    yeet('thermal:netherite_plate')
    yeet('thermal:gold_plate')
    yeet('thermal:rose_gold_plate')
    // dusts
    yeet('thermal:tin_dust')
    yeet('thermal:lead_dust')
    yeet('thermal:silver_dust')
    yeet('thermal:nickel_dust')
    yeet('thermal:steel_dust')
    yeet('thermal:bronze_dust')
    yeet('thermal:electrum_dust')
    yeet('thermal:invar_dust')
    yeet('thermal:iron_dust')
    yeet('thermal:copper_dust')
    yeet('thermal:netherite_dust')
    yeet('thermal:gold_dust')
    yeet('thermal:rose_gold_dust')
    // gears
    yeet('thermal:tin_gear')
    yeet('thermal:lead_gear')
    yeet('thermal:silver_gear')
    yeet('thermal:nickel_gear')
    yeet('thermal:steel_gear')
    yeet('thermal:bronze_gear')
    yeet('thermal:electrum_gear')
    yeet('thermal:invar_gear')
    yeet('thermal:iron_gear')
    yeet('thermal:copper_gear')
    yeet('thermal:netherite_gear')
    yeet('thermal:gold_gear')
    yeet('thermal:rose_gold_gear')
    // rubber
    yeet('thermal:cured_rubber')
    yeet('thermal:rubber')