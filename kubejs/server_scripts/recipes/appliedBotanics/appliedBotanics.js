ServerEvents.recipes(event => {
    event.remove({ id: 'appbot:mana_cell_housing' })
    event.remove({ id: 'appbot:fluix_mana_pool' })
})