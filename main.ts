SpaceStationX.onCalibrationReady(function (digit, secretCode) {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    performingCalibration = false
    code = secretCode
    basic.showNumber(digit)
})
SpaceStationX.onCalibrationDirection(function (direction) {
    performingCalibration = true
    if (direction == "left") {
        basic.showArrow(ArrowNames.West)
    } else if (direction == "right") {
        basic.showArrow(ArrowNames.East)
    } else if (direction == "up") {
        basic.showArrow(ArrowNames.South)
    } else if (direction == "down") {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let code = 0
let performingCalibration = false
SpaceStationX.prepareCommunications()
SpaceStationX.startSteeringWheelCommunication()
SpaceStationX.setHeading(0)
loops.everyInterval(50, function () {
    if (performingCalibration) {
        SpaceStationX.calibrateSteeringWheel(input.rotation(Rotation.Pitch), input.rotation(Rotation.Roll))
    }
})
basic.forever(function () {
    SpaceStationX.calibrateSteeringWheel(0, 0)
})
