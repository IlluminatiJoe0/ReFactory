WorldgenEvents.remove((event) => {

    // remove ore generation
    event.removeFeatureById('underground_ores', [
        'aether:ambrosium_ore',
        'aether:zanite_ore'
    ])

})