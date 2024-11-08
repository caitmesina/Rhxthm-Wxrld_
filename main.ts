//  This class defines the sprites "RightG" "LeftS" "DownF" and "UpD" as objects where I can create a sprite asset for each one.
namespace SpriteKind {
    export const RightG = SpriteKind.create()
    export const LeftS = SpriteKind.create()
    export const DownF = SpriteKind.create()
    export const UpD = SpriteKind.create()
}

scene.onOverlapTile(SpriteKind.LeftS, assets.tile`
        HitBoxS
    `, function on_overlap_tile4(sprite5: Sprite, location5: tiles.Location) {
    
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
scene.onOverlapTile(SpriteKind.UpD, assets.tile`
        HitBoxD
    `, function on_overlap_tile8(sprite8: Sprite, location8: tiles.Location) {
    
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
scene.onOverlapTile(SpriteKind.DownF, assets.tile`
        HitBoxF
    `, function on_overlap_tile6(sprite: Sprite, location: tiles.Location) {
    
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
scene.onOverlapTile(SpriteKind.RightG, assets.tile`
        HitBoxG
    `, function on_overlap_tile3(sprite6: Sprite, location6: tiles.Location) {
    
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
scene.onOverlapTile(SpriteKind.LeftS, assets.tile`
        GrayFillS
    `, function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
    
    miss += 1
    sprites.destroy(sprite2, effects.ashes, 500)
    statusbar.value += -2
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
})
scene.onOverlapTile(SpriteKind.UpD, assets.tile`
        GrayFillD
    `, function on_overlap_tile5(sprite4: Sprite, location4: tiles.Location) {
    
    miss += 1
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
    sprites.destroy(sprite4, effects.ashes, 500)
    statusbar.value += -2
})
scene.onOverlapTile(SpriteKind.DownF, assets.tile`
        GrayFillF
    `, function on_overlap_tile(sprite3: Sprite, location3: tiles.Location) {
    
    miss += 1
    sprites.destroy(sprite3, effects.ashes, 500)
    statusbar.value += -2
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
})
scene.onOverlapTile(SpriteKind.RightG, assets.tile`
        GrayFillG
    `, function on_overlap_tile7(sprite7: Sprite, location7: tiles.Location) {
    
    miss += 1
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
    sprites.destroy(sprite7, effects.ashes, 500)
    statusbar.value += -2
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    tiles.setCurrentTilemap(tilemap`
        TileMapDTrigger
    `)
})
controller.up.onEvent(ControllerButtonEvent.Released, function on_up_released() {
    tiles.setCurrentTilemap(tilemap`
        TileMapDefault
    `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    tiles.setCurrentTilemap(tilemap`
        TileMapFTrigger
    `)
})
controller.down.onEvent(ControllerButtonEvent.Released, function on_down_released() {
    tiles.setCurrentTilemap(tilemap`
        TileMapDefault
    `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    tiles.setCurrentTilemap(tilemap`
        TileMapSTrigger
    `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function on_left_released() {
    tiles.setCurrentTilemap(tilemap`
        TileMapDefault
    `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    tiles.setCurrentTilemap(tilemap`
        TileMapDefault0
    `)
})
controller.right.onEvent(ControllerButtonEvent.Released, function on_right_released() {
    tiles.setCurrentTilemap(tilemap`
        TileMapDefault
    `)
})
let BlackBackground : Sprite = null
let wait = 0
let miss = 0
let hits = 0
let count = 0
let DownF2 : Sprite = null
let UpD2 : Sprite = null
let RightG2 : Sprite = null
let LeftS2 : Sprite = null
let textSprite : TextSprite = null
let statusbar : StatusBarSprite = null
MakeyMakey.setSimulatorKeymap(MakeyMakey.PlayerNumber.ONE, MakeyMakey.MakeyMakeyKey.D, MakeyMakey.MakeyMakeyKey.F, MakeyMakey.MakeyMakeyKey.S, MakeyMakey.MakeyMakeyKey.G, MakeyMakey.MakeyMakeyKey.A, MakeyMakey.MakeyMakeyKey.SPACE)
scene.setBackgroundImage(assets.image`
    TitleScreen
`)
music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
game.showLongText("Greetings! Welcome to Rhxthm Wxrld_!", DialogLayout.Bottom)
game.showLongText("Press the S, D, F, G keys in time with the music!", DialogLayout.Bottom)
game.showLongText("Coloured bars will fall and you must press the correct corresponding key!", DialogLayout.Bottom)
game.showLongText("Try and aim your hits to when the coloured bars reach the white line.", DialogLayout.Bottom)
game.showLongText("Good luck...", DialogLayout.Bottom)
scene.setBackgroundColor(15)
scene.setBackgroundImage(assets.image`
    GameBackground
`)
tiles.setCurrentTilemap(tilemap`
    TileMapDefault
`)
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
//  intro
timer.after(300, function on_after() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(500, function on_after2() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(700, function on_after3() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(900, function on_after4() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(1250, function on_after5() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(1450, function on_after6() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(1650, function on_after7() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(2000, function on_after8() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(2200, function on_after9() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(2400, function on_after10() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(2750, function on_after11() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(2950, function on_after12() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(3150, function on_after13() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
    RightG2.z = -1
})
//  intro riff 2
timer.after(3400, function on_after14() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(3500, function on_after15() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(3700, function on_after16() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(3900, function on_after17() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(4250, function on_after18() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(4450, function on_after19() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(4650, function on_after20() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(5000, function on_after21() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(5200, function on_after22() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(5400, function on_after23() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(5750, function on_after24() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(5950, function on_after25() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(6150, function on_after26() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
//  intro riff repeat 1
timer.after(6350, function on_after27() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(6550, function on_after28() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(6750, function on_after29() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(6950, function on_after30() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(7300, function on_after31() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(7500, function on_after32() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(7700, function on_after33() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(8050, function on_after34() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(8250, function on_after35() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(8450, function on_after36() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(8850, function on_after37() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(9000, function on_after38() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(9200, function on_after39() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
//  intro riff repeat 2
timer.after(9350, function on_after40() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(9550, function on_after41() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(9750, function on_after42() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(9950, function on_after43() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(10300, function on_after44() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(10500, function on_after45() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(10700, function on_after46() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(11050, function on_after47() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(11250, function on_after48() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(11450, function on_after49() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(11800, function on_after50() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
//  verse 1 "you stare at me like im brain dead"
timer.after(13050, function on_after51() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(13450, function on_after52() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(13850, function on_after53() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(14250, function on_after54() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(14650, function on_after55() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(15000, function on_after56() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(15350, function on_after57() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(16050, function on_after58() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
//  verse 1 "dr bad news came with meds"
timer.after(19050, function on_after59() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(19450, function on_after60() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(19850, function on_after61() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(20250, function on_after62() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(20600, function on_after63() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(20975, function on_after64() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(21375, function on_after65() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
//  verse 1 "think i'm suffocating underwater bad enough"
timer.after(24000, function on_after66() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(24200, function on_after67() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(24400, function on_after68() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(24600, function on_after69() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(24800, function on_after70() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(25000, function on_after71() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(25200, function on_after72() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(25400, function on_after73() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(25550, function on_after74() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(25725, function on_after75() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(25900, function on_after76() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(26100, function on_after77() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(26250, function on_after78() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
//  verse 1 "empty promises and lies are made with deeper cuts"
timer.after(27000, function on_after79() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(27200, function on_after80() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(27400, function on_after81() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(27600, function on_after82() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(27800, function on_after83() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(28000, function on_after84() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(28200, function on_after85() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(28400, function on_after86() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(28550, function on_after87() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(28725, function on_after88() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(28900, function on_after89() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(29100, function on_after90() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(29250, function on_after91() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
//  verse 1 "im okay"
timer.after(31000, function on_after92() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(31150, function on_after93() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(31500, function on_after94() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
//  verse 1 "unafraid"
timer.after(32500, function on_after95() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(32650, function on_after96() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(33000, function on_after97() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
//  verse 1 "when my lungs collapse its overkill"
timer.after(34500, function on_after98() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(34690, function on_after99() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(34890, function on_after100() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(35090, function on_after101() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(35270, function on_after102() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(35470, function on_after103() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(35670, function on_after104() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(35850, function on_after105() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(36050, function on_after106() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
//  prechorus "two whom you wrote"
timer.after(36960, function on_after107() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(37150, function on_after108() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(37520, function on_after109() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(37900, function on_after110() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
//  prechorus "I hope they choke on words that broke me"
timer.after(38500, function on_after111() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(38675, function on_after112() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(39025, function on_after113() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(39425, function on_after114() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(39975, function on_after115() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(40500, function on_after116() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(41125, function on_after117() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(41650, function on_after118() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(42035, function on_after119() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
//  prechorus "and when they ghost"
timer.after(42950, function on_after120() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(43150, function on_after121() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(43525, function on_after122() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(43900, function on_after123() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
//  prechorus "keep playing dead"
timer.after(44480, function on_after124() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(44670, function on_after125() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(45025, function on_after126() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(45425, function on_after127() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
//  prechorus "bite my tongue instead"
timer.after(46875, function on_after128() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(47300, function on_after129() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(47670, function on_after130() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(48070, function on_after131() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
//  chorus riff 1
timer.after(48450, function on_after132() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(48650, function on_after133() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(48850, function on_after134() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(49050, function on_after135() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(49350, function on_after136() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(49550, function on_after137() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(49750, function on_after138() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(50150, function on_after139() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(50350, function on_after140() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(50550, function on_after141() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(50900, function on_after142() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(51100, function on_after143() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(51300, function on_after144() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
//  chorus riff 2
timer.after(51500, function on_after145() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(51675, function on_after146() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(51875, function on_after147() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(52075, function on_after148() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(52425, function on_after149() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(52625, function on_after150() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(52825, function on_after151() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(53175, function on_after152() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(53375, function on_after153() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(53575, function on_after154() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(53925, function on_after155() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(54125, function on_after156() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(54325, function on_after157() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
//  chorus riff repeat 1
timer.after(54500, function on_after158() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(54700, function on_after159() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(54900, function on_after160() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(55100, function on_after161() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(55450, function on_after162() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(55650, function on_after163() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(55850, function on_after164() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(56150, function on_after165() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(56350, function on_after166() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(56550, function on_after167() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(56850, function on_after168() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
//  chorus "let me burn the open wounds in you"
timer.after(57050, function on_after169() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(57240, function on_after170() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(57430, function on_after171() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(57620, function on_after172() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(57810, function on_after173() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(58000, function on_after174() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(58190, function on_after175() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(58570, function on_after176() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(58760, function on_after177() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(59330, function on_after178() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(59520, function on_after179() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(59710, function on_after180() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(60090, function on_after181() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
//  post chorus "every tragic tales you've told"
timer.after(60460, function on_after182() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(60650, function on_after183() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(60840, function on_after184() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(61030, function on_after185() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(61220, function on_after186() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(61600, function on_after187() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(61980, function on_after188() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
//  post chorus "becomes my clarity that i've known"
timer.after(62550, function on_after189() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(62740, function on_after190() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(63120, function on_after191() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(63500, function on_after192() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(63690, function on_after193() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(63880, function on_after194() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(64260, function on_after195() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(64640, function on_after196() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(65020, function on_after197() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
//  post chorus "that feeling something breathing under my bed"
timer.after(65590, function on_after198() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(65780, function on_after199() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(66160, function on_after200() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
//  some
timer.after(66540, function on_after201() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
//  thing
timer.after(66715, function on_after202() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(67095, function on_after203() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(67270, function on_after204() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(67650, function on_after205() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(67825, function on_after206() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(68205, function on_after207() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(68380, function on_after208() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
//  post chorus "something breathing next to my head instead"
timer.after(69520, function on_after209() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(69695, function on_after210() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(70075, function on_after211() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(70250, function on_after212() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(70630, function on_after213() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(70805, function on_after214() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(71185, function on_after215() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(71360, function on_after216() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(71740, function on_after217() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
timer.after(72120, function on_after218() {
    
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    DownF2.setVelocity(0, 125)
})
timer.after(75000, function on_after219() {
    game.splash("Hits: " + convertToText(hits), "Misses: " + convertToText(miss))
    game.gameOver(true)
})
pause(1000)
music.play(music.createSong(assets.song`
        Instead
    `), music.PlaybackMode.UntilDone)
statusbars.onZero(StatusBarKind.Health, function on_on_zero(status: StatusBarSprite) {
    
    music.stopAllSounds()
    BlackBackground = sprites.create(assets.image`
        GameBackground
    `, SpriteKind.Player)
    BlackBackground.z = 5
    game.gameOver(false)
})
game.onUpdate(function on_on_update() {
    
    if (controller.left.isPressed()) {
        if (LeftS2.tileKindAt(TileDirection.Center, assets.tile`
            HitBoxS
        `)) {
            if (wait == 0) {
                miss += 1
                wait = 10
            } else {
                wait += -1
            }
            
        }
        
    }
    
    if (controller.up.isPressed()) {
        if (UpD2.tileKindAt(TileDirection.Center, assets.tile`
            HitBoxD
        `)) {
            if (wait == 0) {
                miss += 1
                wait = 10
            } else {
                wait += -1
            }
            
        }
        
    }
    
    if (controller.right.isPressed()) {
        if (DownF2.tileKindAt(TileDirection.Center, assets.tile`
            HitBoxF
        `)) {
            if (wait == 0) {
                miss += 1
                wait = 10
            } else {
                wait += -1
            }
            
        }
        
    }
    
    if (controller.down.isPressed()) {
        if (RightG2.tileKindAt(TileDirection.Center, assets.tile`
            HitBoxG
        `)) {
            if (wait == 0) {
                miss += 1
                wait = 10
            } else {
                wait += -1
            }
            
        }
        
    }
    
})
