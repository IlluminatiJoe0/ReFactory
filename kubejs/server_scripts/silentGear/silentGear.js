let yeet = (itemName) => {
    ServerEvents.recipes(event => {
      event.remove({ output: itemName })
    })
    ServerEvents.tags('item', event => {
      event.add('c:hidden_from_recipe_viewers', itemName)
      event.remove('forge:tools/hammers', itemName)
    })
}

// Bypasses progression so has to be yeeted (bye bye!!!!)
yeet('silentgear:bronze_ingot')