radio.onReceivedString(function (receivedString) {
    resposta = receivedString
    if (resposta == "Sim") {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let resposta = ""
radio.setGroup(4)
