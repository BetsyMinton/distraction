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
        if (arrowList.length == 0) {
            Level_Over()
        }
    } else {
        points += -1
        console.log(arrowList)
        if (arrowList.length == 0) {
            Level_Over()
        }
    }
}
function Song () {
    pause(500)
    while (list.length != 0) {
        music.ringTone(notesList[Math.randomRange(0, 6)])
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
    whichLevel += 1
    goToLevel()
}
function gameOver () {
    game.splash("Game Over")
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (answerOn == 1) {
        choice = 2
        mySprite.setImage(arrows[choice])
        checkChoice()
    } else {
    	
    }
})
function tasks () {
    game.showLongText("Carefully watch the arrows, remember the order in which they appear.  You also have to click on the ducks.", DialogLayout.Center)
    for (let index = 0; index < 7; index++) {
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
    console.log(arrowList)
    points = 0
    game.showLongText("Use the keypad to recreate the pattern", DialogLayout.Center)
    answerOn = 1
    Start_time = game.runtime()
}
function goToLevel () {
    if (whichLevel == 0) {
        BaseLineLevel()
    } else {
        if (whichLevel == 1) {
            MusicLevel()
        } else {
            if (whichLevel == 2) {
                notifications()
            } else {
                if (whichLevel == 3) {
                    tasks()
                } else {
                    if (whichLevel == 4) {
                        gameOver()
                    }
                }
            }
        }
    }
}
function MusicLevel () {
    notesList = [262, 294, 330, 392, 440, 523, 220]
    game.showLongText("Carefully watch the arrows,remember the order in which they appear", DialogLayout.Center)
    for (let index = 0; index < 7; index++) {
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
        music.ringTone(notesList[Math.randomRange(0, 6)])
        pause(100)
    }
    console.log(arrowList)
    points = 0
    game.showLongText("Use the keypad to recreate the pattern", DialogLayout.Center)
    answerOn = 1
    Song()
    Start_time = game.runtime()
}
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
    music.baDing.play()
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
    console.log(arrowList)
    points = 0
    game.showLongText("Use the keypad to recreate the pattern", DialogLayout.Center)
    answerOn = 1
    Start_time = game.runtime()
}
function BaseLineLevel () {
    game.showLongText("Carefully watch the arrows,   remember the order in which they appear", DialogLayout.Center)
    for (let index = 0; index < 7; index++) {
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
    console.log(arrowList)
    points = 0
    game.showLongText("Use the keypad to recreate the pattern", DialogLayout.Center)
    answerOn = 1
    Start_time = game.runtime()
}
let ChooseArrow = 0
let Start_time = 0
let notesList: number[] = []
let choice = 0
let answerOn = 0
let whichLevel = 0
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
notificationSprite.setFlag(SpriteFlag.Invisible, true)
let taskSprite = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 d 4 c . . 
. . . . b 5 5 1 f f d d 4 4 4 b 
. . . . b 5 5 d f b 4 4 4 4 b . 
. . . b d 5 5 5 5 4 4 4 4 b . . 
. . b d d 5 5 5 5 5 5 5 5 b . . 
. b d d d d 5 5 5 5 5 5 5 5 b . 
b d d d b b b 5 5 5 5 5 5 5 b . 
c d d b 5 5 d c 5 5 5 5 5 5 b . 
c b b d 5 d c d 5 5 5 5 5 5 b . 
. b 5 5 b c d d 5 5 5 5 5 d b . 
b b c c c d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Projectile)
taskSprite.setFlag(SpriteFlag.Invisible, true)
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
whichLevel = 0
answerOn = 0
goToLevel()
