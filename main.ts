let potato = 0
potato = -1
radio.setGroup(1)

input.onButtonPressed(Button.AB, function () {
    potato = randint(10, 20)
})

input.onGesture(Gesture.Shake, function () {
    if (potato > 0) {
        radio.sendNumber(potato)
        basic.clearScreen()
        potato = -1
    }
})

radio.onReceivedNumber(function (receivedNumber) {
    potato = receivedNumber
})

basic.forever(function () {
    if (potato == 0) {
        basic.clearScreen()
        basic.showIcon(IconNames.Skull)
    }
    if (potato < 0) {
        basic.clearScreen()
    }
    if (potato > 0) {
        basic.showIcon(IconNames.Chessboard)
        potato += -1
    }
})
