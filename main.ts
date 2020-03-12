controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (answerOn == 1) {
        choice = 0
        mySprite.setImage(arrows[choice])
        checkChoice()
    } else {
    	
    }
})
function checkChoice () {
    if (choice == arrowList.shift()) {
        points += 1
        console.log(arrowList)
        if (arrowList.length == 3) {
            notificationSprite.setFlag(SpriteFlag.Invisible, false)
            music.baDing.play()
            pause(500)
            notificationSprite.setFlag(SpriteFlag.Invisible, true)
        }
        if (arrowList.length == 0) {
            Level_Over()
            console.log(arrowList)
        }
    } else {
        points += -1
        console.log(arrowList)
        if (arrowList.length == 3) {
            notificationSprite.setFlag(SpriteFlag.Invisible, false)
            music.jumpUp.play()
            pause(500)
            notificationSprite.setFlag(SpriteFlag.Invisible, true)
        }
        if (arrowList.length == 0) {
            Level_Over()
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (answerOn == 1) {
        choice = 3
        mySprite.setImage(arrows[choice])
        checkChoice()
    } else {
    	
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (answerOn == 1) {
        choice = 1
        mySprite.setImage(arrows[choice])
        checkChoice()
    } else {
    	
    }
})
function Level_Over () {
    answerOn = 0
    music.stopAllSounds()
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
    Timer = (game.runtime() - Start_time) / 1000
    list.push(points)
    game.splash("" + Math.round(points / Timer * 100) + " " + "points")
    pause(2000)
    game.reset()
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (answerOn == 1) {
        choice = 2
        mySprite.setImage(arrows[choice])
        checkChoice()
    } else {
    	
    }
})
function notifications () {
    game.showLongText("Carefully watch the arrows,   remember the order in which they appear", DialogLayout.Center)
    for (let index = 0; index < 2; index++) {
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
    music.baDing.play()
    notificationSprite.setFlag(SpriteFlag.Invisible, false)
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
    notificationSprite.setFlag(SpriteFlag.Invisible, true)
    for (let index = 0; index < 2; index++) {
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
    music.magicWand.play()
    notificationSprite.setFlag(SpriteFlag.Invisible, false)
    ChooseArrow = Math.randomRange(0, 3)
    mySprite.setImage(arrows[ChooseArrow])
    arrowList.push(ChooseArrow)
    pause(1000)
    notificationSprite.setFlag(SpriteFlag.Invisible, true)
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
    console.log(arrowList)
    points = 0
    answerOn = 1
    game.showLongText("Use the keypad to recreate the pattern", DialogLayout.Center)
    Start_time = game.runtime()
}
let ChooseArrow = 0
let Start_time = 0
let choice = 0
let answerOn = 0
let Timer = 0
let points = 0
let arrowList: number[] = []
let list: number[] = []
let arrows: Image[] = []
let notificationSprite: Sprite = null
let mySprite: Sprite = null
let Score = 0
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
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
notificationSprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . 
. f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f . 
. f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d d f f f f f f f f f f f f f d d d d d f f f f f f f f f f f d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f f f f f f f f f f f f f d d d d f f f f f f f f f f f f f d d d d f f f d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f f f f f f f f f f f f f d d d f f f f f f f f f f f f f f d d d d f f f d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d f f f f d d d f f f f d d d d d d f f f f d d d d f f f d d d d f f f f d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d d f f f d d d f f f d d d d d d d d f f f d d d d f f f d d d f f f f f d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d d f f f d d d f f f d d d d d d d d f f f d d d d f f f d d f f f f f d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d d f f f d d d f f f d d d d d d d d f f f d d d d f f f d f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d d f f f d d d f f f d d d d d d d d f f f d d d d f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d d f f f d d d f f f d d d d d d d d f f f d d d d f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d d f f f d d d f f f d d d d d d d d f f f d d d d f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d d f f f d d d f f f d d d d d d d d f f f d d d d f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d d f f f d d d f f f d d d d d d d d f f f d d d d f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d d f f f d d d f f f d d d d d d d d f f f d d d d f f f d f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d d f f f d d d f f f d d d d d d d d f f f d d d d f f f d f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d d f f f d d d f f f d d d d d d d d f f f d d d d f f f d d f f f f f f d d d d d d d d d d d d d d d d d d d d d f f f f d d d f f f f f d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d d f f f d d d f f f d d d d d d d d f f f d d d d f f f d d d f f f f f f d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d d d d d d d d d f f f d d d d d d d d f f f f d d d f f f d d d d d d d d f f f d d d d f f f d d d d f f f f f d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f . 
. f d d d d d d d d f f f d d d d d f f f d d d d d f f f f d d d d d d d f f f f d d d f f f f d d d d d d f f f f d d d d f f f d d d d d f f f f f d d d d d d d d d d d d d d d d d d d d f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f . 
. f d d d d d d d d f f f f f f f f f f f d d d d d f f f f f f f f f f f f f f f d d d f f f f f f f f f f f f f f d d d d f f f d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f f f f f f f f f d d d d d f f f f f f f f f f f f f f f d d d f f f f f f f f f f f f f f d d d d f f f d d d d d d f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d f f f f f f f f f f f d d d d d d f f f f f f f f f f f f f d d d d d f f f f f f f f f f f f d d d d d f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f d d d d d d f f f d d d d d d f f f d d d d d d d d d d d f . 
. f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f . 
. f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f . 
. f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f . 
. f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
notificationSprite.setPosition(80, 15)
notificationSprite.setFlag(SpriteFlag.Invisible, true)
arrows = [img`
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
list = []
arrowList = []
points = 0
Timer = 0
let whichLevel = 0
answerOn = 0
notifications()
