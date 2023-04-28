input.onButtonPressed(Button.A, function () {
    if (cesta != 0 && t <= fin) {
        led.unplot(cesta, 4)
        cesta = cesta - 1
        led.plot(cesta, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (cesta != 4 && t <= fin) {
        led.unplot(cesta, 4)
        cesta = cesta + 1
        led.plot(cesta, 4)
    }
})
let y = 0
let x = 0
let cesta = 0
let t = 0
let fin = 0
fin = 5
let p = 0
t = 0
let v = 500
cesta = 2
led.plot(cesta, 4)
basic.forever(function () {
    if (t <= fin) {
        x = randint(1, 4)
        y = 0
        led.plot(x, y)
        for (let index = 0; index < 4; index++) {
            basic.pause(v)
            if (t > fin) {
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
        } else if (t <= fin) {
            led.unplot(x, y)
        } else {
            basic.showString("" + (p))
        }
        basic.pause(v)
    }
})
basic.forever(function () {
    while (t <= fin) {
        basic.pause(1000)
        t = t + 1
    }
})
