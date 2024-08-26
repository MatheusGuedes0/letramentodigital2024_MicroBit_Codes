let numero = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    numero = randint(1, 6)
    if (numero == 1) {
        led.plot(2, 2)
    } else if (numero == 2) {
        led.plot(0, 0)
        led.plot(4, 4)
    } else if (numero == 3) {
        led.plot(0, 0)
        led.plot(4, 4)
        led.plot(2, 2)
    } else if (numero == 4) {
        led.plot(0, 0)
        led.plot(4, 4)
        led.plot(4, 0)
        led.plot(0, 4)
    } else if (numero == 5) {
        led.plot(0, 0)
        led.plot(4, 4)
        led.plot(4, 0)
        led.plot(0, 4)
        led.plot(2, 2)
    } else if (numero == 6) {
        led.plot(0, 0)
        led.plot(0, 4)
        led.plot(0, 2)
        led.plot(4, 2)
        led.plot(4, 0)
        led.plot(0, 4)
        led.plot(4, 4)
    } else {
        basic.showIcon(IconNames.No)
    }
})
