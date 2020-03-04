controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    choice = 3
    checkChoice()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    choice = 1
    checkChoice()
})
function checkChoice () {
    if (choice == arrowList.shift()) {
        info.changeScoreBy(1)
        if (arrowList.length == 0) {
            info.stopCountdown()
        }
    } else {
        game.over(false)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    choice = 2
    checkChoice()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    choice = 0
    checkChoice()
})
let choice = 0
let ChooseArrow = 0
let arrowList: number[] = []
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let arrows = [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . 
. . f f f f f f f f f f f . . . 
. . f f f . f f f . f f f . . . 
. . f f f . f f f . f f f . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . f f f . f f f . f f f . . . 
. . f f f . f f f . f f f . . . 
. . f f f f f f f f f f f . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . f f f f f . . 
. . . . . . . . . . . f f f . . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. . . . . . . . . . . f f f . . 
. . . . . . . . . f f f f f . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . f f f f f . . . . . . . . . 
. . f f f . . . . . . . . . . . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. . f f f . . . . . . . . . . . 
. . f f f f f . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`]
arrowList = []
for (let index = 0; index < 5; index++) {
    ChooseArrow = Math.randomRange(0, 3)
    mySprite.setImage(arrows[ChooseArrow])
    arrowList.push(ChooseArrow)
    pause(1000)
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    pause(100)
}
info.startCountdown(10)
console.log(arrowList)
