input.onButtonPressed(Button.A, function () {
    if (cesta > 0 && fin == 0) {
        led.unplot(cesta, 4)
        cesta = cesta - 1
        led.plot(cesta, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    p = 0
    v = 500
    cesta = 2
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    led.plot(cesta, 4)
    fin = 0
    t = 0
    while (t <= 5) {
        basic.pause(1000)
        t = t + 1
    }
    fin = 1
})
input.onButtonPressed(Button.B, function () {
    if (cesta < 4 && fin == 0) {
        led.unplot(cesta, 4)
        cesta = cesta + 1
        led.plot(cesta, 4)
    }
})
let y = 0
let x = 0
let t = 0
let v = 0
let p = 0
let cesta = 0
let fin = 0
fin = 1
basic.forever(function () {
    if (fin == 0) {
        x = randint(0, 4)
        y = 0
        led.plot(x, y)
        for (let index = 0; index < 4; index++) {
            basic.pause(v)
            if (fin != 0) {
                break;
            } else {
                led.unplot(x, y)
                y = y + 1
                led.plot(x, y)
            }
        }
        if (x == cesta && y == 4) {
            p = p + 1
            v = v - 25
        } else if (fin == 0) {
            led.unplot(x, y)
        } else {
            basic.showNumber(p)
            basic.pause(500)
            basic.clearScreen()
        }
        basic.pause(v)
    }
})
