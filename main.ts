namespace SpriteKind {
    export const RightG = SpriteKind.create()
    export const LeftS = SpriteKind.create()
    export const DownF = SpriteKind.create()
    export const UpD = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setCurrentTilemap(tilemap`TileMapDTrigger`)
})
scene.onOverlapTile(SpriteKind.DownF, assets.tile`GrayFillF`, function (sprite3, location3) {
    miss += 1
    sprites.destroy(sprite3, effects.ashes, 500)
    statusbar.value += -2
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
})
scene.onOverlapTile(SpriteKind.LeftS, assets.tile`GrayFillS`, function (sprite2, location2) {
    miss += 1
    sprites.destroy(sprite2, effects.ashes, 500)
    statusbar.value += -2
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
})
scene.onOverlapTile(SpriteKind.RightG, assets.tile`HitBoxG`, function (sprite6, location6) {
    if (controller.right.isPressed()) {
        sprites.destroy(sprite6)
    }
    hits += 1
    count += 1
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
    info.changeScoreBy(150)
    statusbar.value += 1
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    tiles.setCurrentTilemap(tilemap`TileMapDefault`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setCurrentTilemap(tilemap`TileMapSTrigger`)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    tiles.setCurrentTilemap(tilemap`TileMapDefault`)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    tiles.setCurrentTilemap(tilemap`TileMapDefault`)
})
scene.onOverlapTile(SpriteKind.LeftS, assets.tile`HitBoxS`, function (sprite5, location5) {
    if (controller.left.isPressed()) {
        sprites.destroy(sprite5)
    }
    hits += 1
    count += 1
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
    info.changeScoreBy(150)
    statusbar.value += 1
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    music.stopAllSounds()
    BlackBackground = sprites.create(assets.image`GameBackground`, SpriteKind.Player)
    BlackBackground.z = 5
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setCurrentTilemap(tilemap`TileMapDefault0`)
})
scene.onOverlapTile(SpriteKind.UpD, assets.tile`GrayFillD`, function (sprite4, location4) {
    miss += 1
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
    sprites.destroy(sprite4, effects.ashes, 500)
    statusbar.value += -2
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    tiles.setCurrentTilemap(tilemap`TileMapDefault`)
})
scene.onOverlapTile(SpriteKind.DownF, assets.tile`HitBoxF`, function (sprite, location) {
    if (controller.down.isPressed()) {
        sprites.destroy(sprite)
    }
    hits += 1
    count += 1
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
    info.changeScoreBy(150)
    statusbar.value += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setCurrentTilemap(tilemap`TileMapFTrigger`)
})
scene.onOverlapTile(SpriteKind.RightG, assets.tile`GrayFillG`, function (sprite7, location7) {
    miss += 1
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
    sprites.destroy(sprite7, effects.ashes, 500)
    statusbar.value += -2
})
scene.onOverlapTile(SpriteKind.UpD, assets.tile`HitBoxD`, function (sprite8, location8) {
    if (controller.up.isPressed()) {
        sprites.destroy(sprite8)
    }
    hits += 1
    count += 1
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
    info.changeScoreBy(150)
    statusbar.value += 1
})
let wait = 0
let BlackBackground: Sprite = null
let miss = 0
let hits = 0
let DownF2: Sprite = null
let UpD2: Sprite = null
let RightG2: Sprite = null
let LeftS2: Sprite = null
let count = 0
let textSprite: TextSprite = null
let statusbar: StatusBarSprite = null
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.ONE,
MakeyMakey.MakeyMakeyKey.D,
MakeyMakey.MakeyMakeyKey.F,
MakeyMakey.MakeyMakeyKey.S,
MakeyMakey.MakeyMakeyKey.G,
MakeyMakey.MakeyMakeyKey.A,
MakeyMakey.MakeyMakeyKey.SPACE
)
scene.setBackgroundImage(assets.image`TitleScreen`)
music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
game.showLongText("Greetings! Welcome to Rhxthm Wxrld_!", DialogLayout.Bottom)
game.showLongText("Press the S, D, F, G keys in time with the music!", DialogLayout.Bottom)
game.showLongText("Coloured bars will fall and you must press the correct corresponding key!", DialogLayout.Bottom)
game.showLongText("Try and aim your hits to when the coloured bars reach the white line.", DialogLayout.Bottom)
game.showLongText("Good luck...", DialogLayout.Bottom)
scene.setBackgroundColor(15)
scene.setBackgroundImage(assets.image`GameBackground`)
tiles.setCurrentTilemap(tilemap`TileMapDefault`)
statusbar = statusbars.create(6, 70, StatusBarKind.Health)
statusbar.max = 50
statusbar.value = 25
statusbar.setBarBorder(1, 1)
statusbar.positionDirection(CollisionDirection.Right)
statusbar.setOffsetPadding(0, 15)
statusbar.setLabel("HP")
textSprite = textsprite.create(convertToText(count))
textSprite.setPosition(20, 20)
let combotext = textsprite.create("COMBO")
combotext.setPosition(20, 11)
pause(2000)
// intro
timer.after(300, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(500, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(700, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(900, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(1250, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(1450, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(1650, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(2000, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(2200, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(2400, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(2750, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(2950, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(3150, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
    RightG2.z = -1
})
// intro riff 2
timer.after(3400, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(3500, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(3700, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(3900, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(4250, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(4450, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(4650, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(5000, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(5200, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(5400, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(5750, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(5950, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(6150, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
// intro riff repeat 1
timer.after(6350, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(6550, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(6750, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(6950, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(7300, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(7500, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(7700, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(8050, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(8250, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(8450, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(8850, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(9000, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(9200, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
// intro riff repeat 2
timer.after(9350, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(9550, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(9750, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(9950, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(10300, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(10500, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(10700, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(11050, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(11250, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(11450, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(11800, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
// verse 1 "you stare at me like im brain dead"
timer.after(13050, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(13450, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(13850, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(14250, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(14650, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(15000, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(15350, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(16050, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
// verse 1 "dr bad news came with meds"
timer.after(19050, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(19450, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(19850, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(20250, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(20600, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(20975, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(21375, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
// verse 1 "think i'm suffocating underwater bad enough"
timer.after(24000, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(24200, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(24400, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(24600, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(24800, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(25000, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(25200, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(25400, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(25550, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(25725, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(25900, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(26100, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(26250, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
// verse 1 "empty promises and lies are made with deeper cuts"
timer.after(27000, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(27200, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(27400, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(27600, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(27800, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(28000, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(28200, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(28400, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(28550, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(28725, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(28900, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(29100, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(29250, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
// verse 1 "im okay"
timer.after(31000, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(31150, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(31500, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
// verse 1 "unafraid"
timer.after(32500, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(32650, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(33000, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
// verse 1 "when my lungs collapse its overkill"
timer.after(34500, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(34690, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(34890, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(35090, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(35270, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(35470, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(35670, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(35850, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(36050, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
// prechorus "two whom you wrote"
timer.after(36960, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(37150, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(37520, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(37900, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
// prechorus "I hope they choke on words that broke me"
timer.after(38500, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(38675, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(39025, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(39425, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(39975, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(40500, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(41125, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(41650, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(42035, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
// prechorus "and when they ghost"
timer.after(42950, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(43150, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(43525, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(43900, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
// prechorus "keep playing dead"
timer.after(44480, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(44670, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(45025, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(45425, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
// prechorus "bite my tongue instead"
timer.after(46875, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(47300, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(47670, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(48070, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
// chorus riff 1
timer.after(48450, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(48650, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(48850, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(49050, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(49350, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(49550, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(49750, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(50150, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(50350, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(50550, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(50900, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(51100, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(51300, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
// chorus riff 2
timer.after(51500, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(51675, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(51875, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(52075, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(52425, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(52625, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(52825, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(53175, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(53375, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(53575, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(53925, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(54125, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(54325, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
// chorus riff repeat 1
timer.after(54500, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(54700, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(54900, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(55100, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(55450, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(55650, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(55850, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(56150, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(56350, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(56550, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(56850, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
// chorus "let me burn the open wounds in you"
timer.after(57050, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(57240, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(57430, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(57620, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(57810, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(58000, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(58190, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(58570, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(58760, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(59330, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(59520, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(59710, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(60090, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
// post chorus "every tragic tales you've told"
timer.after(60460, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(60650, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(60840, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(61030, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(61220, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(61600, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(61980, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
// post chorus "becomes my clarity that i've known"
timer.after(62550, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(62740, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(63120, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(63500, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(63690, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(63880, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(64260, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(64640, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(65020, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
// post chorus "that feeling something breathing under my bed"
timer.after(65590, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(65780, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(66160, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
// some
timer.after(66540, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
// thing
timer.after(66715, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(67095, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(67270, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(67650, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(67825, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(68205, function () {
    LeftS2 = sprites.create(assets.image`RedBarImage`, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(68380, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
// post chorus "something breathing next to my head instead"
timer.after(69520, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(69695, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(70075, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(70250, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(70630, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(70805, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(71185, function () {
    UpD2 = sprites.create(assets.image`BlueBarImage`, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(71360, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(71740, function () {
    RightG2 = sprites.create(assets.image`YellowBarImage`, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(72120, function () {
    DownF2 = sprites.create(assets.image`GreenBarImage`, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(75000, function () {
    game.splash("Hits: " + convertToText(hits), "Misses: " + convertToText(miss))
    game.gameOver(true)
})
pause(1000)
music.play(music.createSong(assets.song`Instead`), music.PlaybackMode.UntilDone)
game.onUpdate(function () {
    if (controller.left.isPressed()) {
        if (LeftS2.tileKindAt(TileDirection.Center, assets.tile`HitBoxS`)) {
            if (wait == 0) {
                miss += 1
                wait = 10
            } else {
                wait += -1
            }
        }
    }
    if (controller.up.isPressed()) {
        if (UpD2.tileKindAt(TileDirection.Center, assets.tile`HitBoxD`)) {
            if (wait == 0) {
                miss += 1
                wait = 10
            } else {
                wait += -1
            }
        }
    }
    if (controller.right.isPressed()) {
        if (DownF2.tileKindAt(TileDirection.Center, assets.tile`HitBoxF`)) {
            if (wait == 0) {
                miss += 1
                wait = 10
            } else {
                wait += -1
            }
        }
    }
    if (controller.down.isPressed()) {
        if (RightG2.tileKindAt(TileDirection.Center, assets.tile`HitBoxG`)) {
            if (wait == 0) {
                miss += 1
                wait = 10
            } else {
                wait += -1
            }
        }
    }
})
