ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:crystal_puller',
        [
            'MCM',
            'CHC',
            'FFF'
        ],
        {
            M: 'gtceu:mv_electric_motor',
            C: '#gtceu:circuits/lv',
            H: 'gtceu:mv_machine_hull',
            F: 'ironfurnaces:iron_furnace'
        }
    )

    event.shaped(
        'gtceu:greenhouse',
        [
            'GGG',
            'CHC',
            'FFF'
        ],
        {
            G: 'ae2:quartz_glass',
            C: '#gtceu:circuits/mv',
            H: 'gtceu:mv_machine_hull',
            F: 'thermal:machine_insolator'
        }
    )
})