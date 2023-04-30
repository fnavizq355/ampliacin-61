input.onButtonPressed(Button.A, function () {
    if (juega && cesta > 0) {
        led.unplot(cesta, 4)
        cesta = cesta - 1
        led.plot(cesta, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    puntos = 0
    espera = 500
    cesta = 2
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    led.plot(cesta, 4)
    juega = true
    tiempo = 0
    while (tiempo <= 5) {
        basic.pause(1000)
        tiempo = tiempo + 1
    }
    juega = false
})
input.onButtonPressed(Button.B, function () {
    if (juega && cesta < 4) {
        led.unplot(cesta, 4)
        cesta = cesta + 1
        led.plot(cesta, 4)
    }
})
let y = 0
let x = 0
let tiempo = 0
let espera = 0
let puntos = 0
let cesta = 0
let juega = false
juega = false
basic.forever(function () {
    if (juega) {
        x = randint(0, 4)
        y = 0
        led.plot(x, y)
        for (let index = 0; index < 4; index++) {
            basic.pause(espera)
            if (!(juega)) {
                break;
            } else {
                led.unplot(x, y)
                y = y + 1
                led.plot(x, y)
            }
        }
        if (x == cesta && y == 4) {
            puntos = puntos + 1
            espera = espera - 25
        } else if (juega) {
            led.unplot(x, y)
        } else {
            basic.showNumber(puntos)
            basic.pause(500)
            basic.clearScreen()
        }
        basic.pause(espera)
    }
})
