input.onButtonPressed(Button.AB, function () {
    pic = game.createSprite(2, 0)
})
let pic: game.LedSprite = null
basic.showLeds(`
    # # . # #
    # . # . #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    # # . . .
    # # . . .
    # # . . .
    # # . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # .
    # # . . #
    # # # # .
    # # . . #
    # # # # .
    `)
music.playMelody("C E G E G - C - ", 165)
basic.showString("Baseball")
