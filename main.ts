//  This class defines the sprites "RightG" "LeftS" "DownF" and "UpD" as objects where I can create a sprite asset for each one.
namespace SpriteKind {
    export const RightG = SpriteKind.create()
    export const LeftS = SpriteKind.create()
    export const DownF = SpriteKind.create()
    export const UpD = SpriteKind.create()
}

//  SECTION 1: CODE TO RUN ON HITS AND MISSES
//  elements of code in SECTION 1 were inspired by a combination these template: 
//  LcAtonal. (2021, June). Da Test. https://arcade.makecode.com/85601-16254-69715-75720 
//  brandodon. (2021, June). Rhythm Rave (game results). https://arcade.makecode.com/82975-94322-58319-87649 
//  CODE FOR LANE 1 (HITS)
//  defines "on_overlap_tile" function in order to perform specific tasks
//  calls the status bar function to change the player's HP by +1
scene.onOverlapTile(SpriteKind.LeftS, assets.tile`
        HitBoxS
    `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    //  takes the variables "sprite" and "location" as inputs 
    
    //  defines global variables "hits", "counts", and "textSprite" so that they can be called anywhere in the code, inside and outside the function
    if (controller.left.isPressed()) {
        //  an if statement in which runs the next lines of code when a condition is met. In this case, if the left key is pressed
        sprites.destroy(sprite)
    }
    
    //  when the left key is pressed, destroy this sprite.
    hits += 1
    //  changes the "hits" variable value by +1
    count += 1
    //  changes the "count" variable (which is the combo count) value by +1
    sprites.destroy(textSprite)
    //  destoys previous textSprite
    textSprite = textsprite.create(convertToText(count))
    //  creates a textSprite variable which converts the "count" variable into displayable text. This serves as the combo count
    textSprite.setPosition(20, 20)
    //  positions the above textSprite at the 20x20th pixel
    info.changeScoreBy(150)
    // calls the info function to change the score value by +150
    statusbar.value += 1
})
//  assigns the tile "HitBoxS" I created as the tile in which if the sprite overlaps it, it performs the code above.
//  CODE FOR LANE 2 (HITS)
//  Code in the next sequences are the same as the last (will get too repetitive). Will only comment slight changes
scene.onOverlapTile(SpriteKind.UpD, assets.tile`
        HitBoxD
    `, function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
    //  defines a new function "on_overlap_2" with inputs "sprite2" and "location2" to perform actions with said variables
    
    if (controller.up.isPressed()) {
        //  an if statement in which runs the next lines of code when a condition is met. In this case, if the up key is pressed
        sprites.destroy(sprite2)
    }
    
    hits += 1
    count += 1
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
    info.changeScoreBy(150)
    statusbar.value += 1
})
//  assigns the tile "HitBoxD" I created as the tile in which if the sprite overlaps it, it performs the code above.
//  CODE FOR LANE 3 (HITS)
scene.onOverlapTile(SpriteKind.DownF, assets.tile`
        HitBoxF
    `, function on_overlap_tile3(sprite3: Sprite, location3: tiles.Location) {
    //  defines a new function "on_overlap_3" with inputs "sprite3" and "location3" to perform actions with said variables
    
    if (controller.down.isPressed()) {
        //  an if statement in which runs the next lines of code when a condition is met. In this case, if the down key is pressed
        sprites.destroy(sprite3)
    }
    
    hits += 1
    count += 1
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
    info.changeScoreBy(150)
    statusbar.value += 1
})
//  assigns the tile "HitBoxF" I created as the tile in which if the sprite overlaps it, it performs the code above.
//  CODE FOR LANE 4 (HITS)
scene.onOverlapTile(SpriteKind.RightG, assets.tile`
        HitBoxG
    `, function on_overlap_tile4(sprite4: Sprite, location4: tiles.Location) {
    //  defines a new function "on_overlap_4" with inputs "sprite4" and "location4" to perform actions with said variables
    
    if (controller.right.isPressed()) {
        //  an if statement in which runs the next lines of code when a condition is met. In this case, if the right key is pressed
        sprites.destroy(sprite4)
    }
    
    hits += 1
    count += 1
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
    info.changeScoreBy(150)
    statusbar.value += 1
})
//  assigns the tile "HitBoxG" I created as the tile in which if the sprite overlaps it, it performs the code above.
//  CODE FOR LANE 1 (MISSES)
scene.onOverlapTile(SpriteKind.LeftS, assets.tile`
        GrayFillS
    `, function on_overlap_tile5(sprite5: Sprite, location5: tiles.Location) {
    //  defines a new function "on_overlap_5" with inputs "sprite5" and "location5" to perform actions with said variables
    
    //  new global variable defined "miss" so it can be called anywhere in the code
    miss += 1
    //  changes the value of the "miss" variable by +1
    sprites.destroy(sprite5, effects.ashes, 500)
    //  using the sprites function, destroys the sprite with an ashes effect with duration 500ms.
    statusbar.value += -2
    //  using the stausbar function, decreases the player's HP value by -2
    count = 0
    //  resets the combo "count" variable to 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
})
//  assigns the tile "GrayFillS" I created as the tile in which if the sprite overlaps it, it performs the code above.
//  CODE FOR LANE 2 (MISSES)
//  Code in the next sequences are the same as the last (will get too repetitive). Will only comment slight changes
scene.onOverlapTile(SpriteKind.UpD, assets.tile`
        GrayFillD
    `, function on_overlap_tile6(sprite6: Sprite, location6: tiles.Location) {
    //  defines a new function "on_overlap_6" with inputs "sprite6" and "location6" to perform actions with said variables
    
    miss += 1
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
    sprites.destroy(sprite6, effects.ashes, 500)
    statusbar.value += -2
})
//  assigns the tile "GrayFillD" I created as the tile in which if the sprite overlaps it, it performs the code above.
//  CODE FOR LANE 3 (MISSES)
scene.onOverlapTile(SpriteKind.DownF, assets.tile`
        GrayFillF
    `, function on_overlap_tile7(sprite7: Sprite, location7: tiles.Location) {
    //  defines a new function "on_overlap_7" with inputs "sprite7" and "location7" to perform actions with said variables
    
    miss += 1
    sprites.destroy(sprite7, effects.ashes, 500)
    statusbar.value += -2
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
})
//  assigns the tile "GrayFillF" I created as the tile in which if the sprite overlaps it, it performs the code above.
//  CODE FOR LANE 4 (MISSES)
scene.onOverlapTile(SpriteKind.RightG, assets.tile`
        GrayFillG
    `, function on_overlap_tile8(sprite8: Sprite, location8: tiles.Location) {
    //  defines a new function "on_overlap_8" with inputs "sprite8" and "location8" to perform actions with said variables
    
    miss += 1
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convertToText(count))
    textSprite.setPosition(20, 20)
    sprites.destroy(sprite8, effects.ashes, 500)
    statusbar.value += -2
})
//  assigns the tile "GrayFillG" I created as the tile in which if the sprite overlaps it, it performs the code above.
//  SECTION 2: CREATING A HITBOX LIGHT UP EFFECT WHEN KEYS ARE PRESSED
//  sets tilemap "TileMapDTrigger" I created 
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    //  defines the function "on_up_pressed"
    tiles.setCurrentTilemap(tilemap`
        TileMapDTrigger
    `)
})
//  using the controller function, sets the tile map to "TileMapDTrigger" when the up key is pressed
//  this gives the illusion that the hitbox lights up when you press the up key
//  sets tilemap "TileMapDefault", which is the default tilemap when no keys are pressed.
controller.up.onEvent(ControllerButtonEvent.Released, function on_up_released() {
    //  defines the function "on_up_released"
    tiles.setCurrentTilemap(tilemap`
        TileMapDefault
    `)
})
//  using the controller function, sets the tile map to "TileMapDefault" when the up key is released
//  this gives the illusion that the hitbox turns back to normal when you release the up key
//  Code in the next sequences are the same as the last (will get too repetitive). The only difference is what key is pressed and released, as well as the corresponding TileMaps
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
//  SECTION 3 ON GAME START
//  sets all the following variables to 0 for the start of the game
let wait = 0
let miss = 0
let hits = 0
let count = 0
//  sets all of the following sprites to invisible for the start of the game
let BlackBackground : Sprite = null
let DownF2 : Sprite = null
let UpD2 : Sprite = null
let RightG2 : Sprite = null
let LeftS2 : Sprite = null
let textSprite : TextSprite = null
let statusbar : StatusBarSprite = null
//  calling the MakeyMakey function extension, remaps the Makecode Arcade's default keys into new key bindings.
//  REFERENCE MAKER
MakeyMakey.setSimulatorKeymap(MakeyMakey.PlayerNumber.ONE, MakeyMakey.MakeyMakeyKey.D, MakeyMakey.MakeyMakeyKey.F, MakeyMakey.MakeyMakeyKey.S, MakeyMakey.MakeyMakeyKey.G, MakeyMakey.MakeyMakeyKey.A, MakeyMakey.MakeyMakeyKey.SPACE)
//  remaps to UP key to the D key
//  remaps the DOWN key to the F key
//  remaps the LEFT key to the S key
//  remaps the RIGHT key to the G key
//  remaps the A gameboy button to the A key
//  remaps the B gameboy button to the SPACE key
scene.setBackgroundImage(assets.image`
    TitleScreen
`)
//  calling the scene function, sets the background to the game logo I designed for the title screen.
music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
//  calling the music function, plays a short jingle agic_wand (made by MakeCode Arcade) until it is finished
game.showLongText("Greetings! Welcome to Rhxthm Wxrld_!", DialogLayout.Bottom)
//  calling the game function, displayes a text with the string, positioned at the bottom of the screen
game.showLongText("Press the S, D, F, G keys in time with the music!", DialogLayout.Bottom)
game.showLongText("Coloured bars will fall and you must press the correct corresponding key!", DialogLayout.Bottom)
game.showLongText("Try and aim your hits to when the coloured bars reach the white line.", DialogLayout.Bottom)
game.showLongText("Good luck...", DialogLayout.Bottom)
scene.setBackgroundColor(15)
//  calling the scene function, sets the background colour of the game to "15" or black.
scene.setBackgroundImage(assets.image`
    GameBackground
`)
//  calling the scene function, sets the background image to a game background asset I created.
tiles.setCurrentTilemap(tilemap`
    TileMapDefault
`)
//  calling the tiles function, sets the current tilemap to the "TileMapDefault" asset for the start of the game.
statusbar = statusbars.create(6, 70, StatusBarKind.Health)
//  calling the status bar extension to create a HP bar, creates a status bar variable with width 6 and height 70. Also inputs the variable StatusBarKind.health to call.
statusbar.max = 50
//  sets maximum HP to 50
statusbar.value = 25
//  sets default HP to 25 when game starts
statusbar.setBarBorder(1, 1)
//  sets a white HP bar border with width 1x1 pixel
statusbar.positionDirection(CollisionDirection.Right)
//  sets status bar position to the right
statusbar.setOffsetPadding(0, 15)
//  sets status bar padding to 15px (15px from the right edge)
statusbar.setLabel("HP")
//  labels the HP bar, displaying the string of text
textSprite = textsprite.create(convertToText(count))
//  creates a textSprite, converting the combo "count" variable values into text. This serves as the basis of the Combo counter for players to see.
textSprite.setPosition(20, 20)
//  sets the above textSprite to position 20x20
let combotext = textsprite.create("COMBO")
//  creating a combotext variable, attributes the textsprite function to display the string "COMBO" so players know what the number is
combotext.setPosition(20, 11)
//  sets the above variable in position 20x11 on the screen
pause(2000)
//  calling the pause function, creates a 2000ms pause before running the next lines of code
//  SECTION 4 THE NOTES
//  elements of code in SECTION 4 were inspired by this template:
//  LcAtonal. (2021, June). Da Test. https://arcade.makecode.com/85601-16254-69715-75720
//  INTRODUCTION RIFF 1
//  sets LeftS2 at a velocity of 125. This will make it fall from top to bottom
timer.after(325, function on_after() {
    //  defines the function "on_after"
    
    //  creates a new global variable "LeftS2"
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    //  assigns asset "RedBarImage" i created to the "Lefts2" variable
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    //  calling the tiles function, places the LeftS2 sprite in column 3, row 0 (Lane 1, above the screen)
    LeftS2.setVelocity(0, 125)
})
//  calling the timer function, performs the above code after 300ms
//  sets RightG2 at a velocity of 125. This will make it fall from top to bottom
timer.after(500, function on_after2() {
    //  defines the function "on_after2"
    
    //  creates a new global variable "RightG2"
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    //  assigns asset "YellowBarImage" i created to the "RightG2" variable
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    //  calling the tiles function, places the RightG2 sprite in column 6, row 0 (Lane 4, above the screen)
    RightG2.setVelocity(0, 125)
})
//  calling the timer function, performs the above code after 500ms
//  Code in the next sequences are the same as the last (will get too repetitive). Will only comment small changes
timer.after(700, function on_after3() {
    //  defines the function "on_after3" etc.
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
//  calling the timer function, performs the above code after 700ms
timer.after(900, function on_after4() {
    
    RightG2 = sprites.create(assets.image`
        YellowBarImage
    `, SpriteKind.RightG)
    tiles.placeOnTile(RightG2, tiles.getTileLocation(6, 0))
    RightG2.setVelocity(0, 125)
})
//  calling the timer function, performs the above code after 900ms
timer.after(1250, function on_after5() {
    
    //  creates a new global variable "UpD2"
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    //  assigns asset "BlueBarImage" i created to the "UpD2" variable
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    //  calling the tiles function, places the UpD2 sprite in column 4, row 0 (Lane 2, above the screen)
    UpD2.setVelocity(0, 125)
})
//  calling the timer function, performs the above code after 1250ms
timer.after(1450, function on_after6() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
//  calling the timer function, performs the above code after 1450ms
timer.after(1650, function on_after7() {
    
    //  creates a new global variable "DownF2"
    DownF2 = sprites.create(assets.image`
        GreenBarImage
    `, SpriteKind.DownF)
    //  assigns asset "GreenBarImage" i created to the "DownF2" variable
    tiles.placeOnTile(DownF2, tiles.getTileLocation(5, 0))
    //  calling the tiles function, places the DownFw sprite in column 5, row 0 (Lane 3, above the screen)
    DownF2.setVelocity(0, 125)
})
//  calling the timer function, performs the above code after 1650ms
timer.after(2000, function on_after8() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
//  calling the timer function, performs the above code after 2000ms etc.
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
//  INTRODUCTION RIFF 2
timer.after(3300, function on_after14() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
timer.after(3550, function on_after15() {
    
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
//  INTRODUCTION RIFF REPEAT 1
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
//  INTRODUCTION RIFF REPEAT 2
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
//  VERSE 1 LINE 1 "you stare at me like i'm brain dead"
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
//  VERSE 1 LINE 2 "d.r bad news came with meds"
timer.after(19075, function on_after59() {
    
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
//  VERSE 1 LINE 3 "think i'm suffocating underwater bad enough"
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
//  VERSE 1 LINE 4 "empty promises and lies are made with deeper cuts"
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
//  VERSE 1 LINE 5 "im okay"
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
//  VERSE 1 LINE 6 "unafraid"
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
//  VERSE 1 LINE 7 "when my lungs collapse its overkill"
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
//  PRECHORUS LINE 1 "two whom you wrote"
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
//  PRECHORUS LINE 2 "I hope they choke on words that broke me"
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
//  PRECHORUS LINE 3 "and when they ghost"
timer.after(42975, function on_after120() {
    
    UpD2 = sprites.create(assets.image`
        BlueBarImage
    `, SpriteKind.UpD)
    tiles.placeOnTile(UpD2, tiles.getTileLocation(4, 0))
    UpD2.setVelocity(0, 125)
})
timer.after(43175, function on_after121() {
    
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
//  PRECHORUS LINE 4 "keep playing dead"
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
//  CHORUS HOOK "bite my tongue instead!"
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
//  CHORUS RIFF 1
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
//  CHORUS RIFF 2
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
//  CHORUS RIFF REPEAT 1
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
//  CHORUS LINE 2 "let me burn the open wounds in you, bite it instead!"
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
//  POST-CHORUS LINE 1 "every tragic tales you've told"
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
//  POST-CHORUS LINE 2 "becomes my clarity that i've known"
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
//  POST-CHORUS LINE 3 "that feeling something breathing under my bed"
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
timer.after(66540, function on_after201() {
    
    LeftS2 = sprites.create(assets.image`
        RedBarImage
    `, SpriteKind.LeftS)
    tiles.placeOnTile(LeftS2, tiles.getTileLocation(3, 0))
    LeftS2.setVelocity(0, 125)
})
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
//  POST-CHORUS LINE 4 "something breathing next to my head instead"
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
//  SECTION 5 GAME OVER OR GAME WIN
//  elements of code in SECTION 5 were inspired by a combination these template:
//  brandodon. (2021, June). Rhythm Rave (game results). https://arcade.makecode.com/82975-94322-58319-87649 
//  IF THEY WIN
//  performs the above code IF player wins (finishes the whole song without getting to 0HP)
timer.after(75000, function on_after219() {
    game.splash("Hits: " + convertToText(hits), "Misses: " + convertToText(miss))
    //  calling the game function, creates a splash that converts the "hits" variable value into text
    //  also converts the "miss" variable value into text within the splash
    game.gameOver(true)
})
//  IF THEY LOSE
//  calling the game function, tells the system that this the player loses
statusbars.onZero(StatusBarKind.Health, function on_on_zero(status: StatusBarSprite) {
    //  defines the function "on_on_zero" with "status" variable
    
    //  creates global variable BlackBackground
    music.stopAllSounds()
    //  calling the music function, stops all sounds. So when the game over screen pops up the song isn't still playing in the back
    BlackBackground = sprites.create(assets.image`
        GameBackground
    `, SpriteKind.Player)
    //  sets the "GameBackground" asset I created
    BlackBackground.z = 5
    //  sets z value of background high so it sits above the notes.
    game.gameOver(false)
})
//  performs the above code when the status bar HP reaches 0. 

pause(1000)

# the following is not an original song (however asset is created and transposed by me):
# Xdinary Heroes (featuring Yoon Do Hyun). (2024). iNSTEAD!. on LIVE and FALL. JYP Entertainment.

music.play(music.create_song(assets.song("""
        Instead
    """)),
    music.PlaybackMode.UNTIL_DONE) # calls the music function and playes the asset "instead" until it is done.
