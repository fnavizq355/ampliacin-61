function caer () {
    while (juega && y <= 4) {
        led.plot(x, y)
        basic.pause(espera)
        led.unplot(x, y)
        y = y + 1
    }
}
function final () {
    basic.clearScreen()
    basic.showNumber(puntos)
    basic.pause(500)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    if (juega && cesta > 0) {
        led.unplot(cesta, 4)
        cesta = cesta - 1
        led.plot(cesta, 4)
    }
})
function inicio () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    led.plot(cesta, 4)
}
input.onButtonPressed(Button.AB, function () {
    puntos = 0
    espera = 500
    cesta = 2
    inicio()
    juega = true
    basic.pause(20000)
    juega = false
    final()
})
input.onButtonPressed(Button.B, function () {
    if (juega && cesta < 4) {
        led.unplot(cesta, 4)
        cesta = cesta + 1
        led.plot(cesta, 4)
    }
})
let cesta = 0
let puntos = 0
let espera = 0
let x = 0
let y = 0
let juega = false
juega = false
basic.forever(function () {
    x = randint(0, 4)
    y = 0
    caer()
    if (juega) {
        led.plot(cesta, 4)
    }
    if (x == cesta && y == 4) {
        puntos = puntos + 1
        espera = espera - 25
    }
})
