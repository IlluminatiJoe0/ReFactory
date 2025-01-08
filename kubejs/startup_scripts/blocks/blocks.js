StartupEvents.registry('block', event => {
    event.create('artificial_cloud_block')
        .displayName('Artificial Cloud Block')
        .soundType('wool')
        .tagBlock('aether:aether_portal_blocks')
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
})