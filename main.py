@namespace

# This class defines the sprites "RightG" "LeftS" "DownF" and "UpD" as objects where I can create a sprite asset for each one.

class SpriteKind:
    RightG = SpriteKind.create()
    LeftS = SpriteKind.create()
    DownF = SpriteKind.create()
    UpD = SpriteKind.create()

# SECTION 1: CODE TO RUN ON HITS AND MISSES

# elements of code in SECTION 1 were inspired by a combination these template: 
# LcAtonal. (2021, June). Da Test. https://arcade.makecode.com/85601-16254-69715-75720 
# brandodon. (2021, June). Rhythm Rave (game results). https://arcade.makecode.com/82975-94322-58319-87649 

# CODE FOR LANE 1 (HITS)

# defines "on_overlap_tile" function in order to perform specific tasks
def on_overlap_tile(sprite, location): # takes the variables "sprite" and "location" as inputs 
    global hits, count, textSprite # defines global variables "hits", "counts", and "textSprite" so that they can be called anywhere in the code, inside and outside the function
    if controller.left.is_pressed(): # an if statement in which runs the next lines of code when a condition is met. In this case, if the left key is pressed
        sprites.destroy(sprite) # when the left key is pressed, destroy this sprite.
    hits += 1 # changes the "hits" variable value by +1
    count += 1 # changes the "count" variable (which is the combo count) value by +1
    sprites.destroy(textSprite) # destoys previous textSprite
    textSprite = textsprite.create(convert_to_text(count)) # creates a textSprite variable which converts the "count" variable into displayable text. This serves as the combo count
    textSprite.set_position(20, 20) # positions the above textSprite at the 20x20th pixel
    info.change_score_by(150) #calls the info function to change the score value by +150
    statusbar.value += 1 # calls the status bar function to change the player's HP by +1
scene.on_overlap_tile(SpriteKind.LeftS,
    assets.tile("""
        HitBoxS
    """), 
    on_overlap_tile) # assigns the tile "HitBoxS" I created as the tile in which if the sprite overlaps it, it performs the code above.

# CODE FOR LANE 2 (HITS)

# Code in the next sequences are the same as the last (will get too repetitive). Will only comment slight changes

def on_overlap_tile2(sprite2, location2): # defines a new function "on_overlap_2" with inputs "sprite2" and "location2" to perform actions with said variables
    global hits, count, textSprite
    if controller.up.is_pressed(): # an if statement in which runs the next lines of code when a condition is met. In this case, if the up key is pressed
        sprites.destroy(sprite2)
    hits += 1
    count += 1
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convert_to_text(count))
    textSprite.set_position(20, 20)
    info.change_score_by(150)
    statusbar.value += 1
scene.on_overlap_tile(SpriteKind.UpD,
    assets.tile("""
        HitBoxD
    """),
    on_overlap_tile2) # assigns the tile "HitBoxD" I created as the tile in which if the sprite overlaps it, it performs the code above.

# CODE FOR LANE 3 (HITS)

def on_overlap_tile3(sprite3, location3): # defines a new function "on_overlap_3" with inputs "sprite3" and "location3" to perform actions with said variables
    global hits, count, textSprite
    if controller.down.is_pressed(): # an if statement in which runs the next lines of code when a condition is met. In this case, if the down key is pressed
        sprites.destroy(sprite3)
    hits += 1
    count += 1
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convert_to_text(count))
    textSprite.set_position(20, 20)
    info.change_score_by(150)
    statusbar.value += 1
scene.on_overlap_tile(SpriteKind.DownF,
    assets.tile("""
        HitBoxF
    """),
    on_overlap_tile3) # assigns the tile "HitBoxF" I created as the tile in which if the sprite overlaps it, it performs the code above.

# CODE FOR LANE 4 (HITS)

def on_overlap_tile4(sprite4, location4): # defines a new function "on_overlap_4" with inputs "sprite4" and "location4" to perform actions with said variables
    global hits, count, textSprite
    if controller.right.is_pressed(): # an if statement in which runs the next lines of code when a condition is met. In this case, if the right key is pressed
        sprites.destroy(sprite4)
    hits += 1
    count += 1
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convert_to_text(count))
    textSprite.set_position(20, 20)
    info.change_score_by(150)
    statusbar.value += 1
scene.on_overlap_tile(SpriteKind.RightG,
    assets.tile("""
        HitBoxG
    """),
    on_overlap_tile4) # assigns the tile "HitBoxG" I created as the tile in which if the sprite overlaps it, it performs the code above.

# CODE FOR LANE 1 (MISSES)

def on_overlap_tile5(sprite5, location5): # defines a new function "on_overlap_5" with inputs "sprite5" and "location5" to perform actions with said variables
    global miss, count, textSprite # new global variable defined "miss" so it can be called anywhere in the code
    miss += 1 # changes the value of the "miss" variable by +1
    sprites.destroy(sprite5, effects.ashes, 500) # using the sprites function, destroys the sprite with an ashes effect with duration 500ms.
    statusbar.value += -2 # using the stausbar function, decreases the player's HP value by -2
    count = 0 # resets the combo "count" variable to 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convert_to_text(count))
    textSprite.set_position(20, 20)
scene.on_overlap_tile(SpriteKind.LeftS,
    assets.tile("""
        GrayFillS
    """),
    on_overlap_tile5) # assigns the tile "GrayFillS" I created as the tile in which if the sprite overlaps it, it performs the code above.

# CODE FOR LANE 2 (MISSES)

# Code in the next sequences are the same as the last (will get too repetitive). Will only comment slight changes

def on_overlap_tile6(sprite6, location6): # defines a new function "on_overlap_6" with inputs "sprite6" and "location6" to perform actions with said variables
    global miss, count, textSprite
    miss += 1
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convert_to_text(count))
    textSprite.set_position(20, 20)
    sprites.destroy(sprite6, effects.ashes, 500)
    statusbar.value += -2
scene.on_overlap_tile(SpriteKind.UpD,
    assets.tile("""
        GrayFillD
    """),
    on_overlap_tile6) # assigns the tile "GrayFillD" I created as the tile in which if the sprite overlaps it, it performs the code above.

# CODE FOR LANE 3 (MISSES)

def on_overlap_tile7(sprite7, location7): # defines a new function "on_overlap_7" with inputs "sprite7" and "location7" to perform actions with said variables
    global miss, count, textSprite
    miss += 1
    sprites.destroy(sprite7, effects.ashes, 500)
    statusbar.value += -2
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convert_to_text(count))
    textSprite.set_position(20, 20)
scene.on_overlap_tile(SpriteKind.DownF,
    assets.tile("""
        GrayFillF
    """),
    on_overlap_tile7) # assigns the tile "GrayFillF" I created as the tile in which if the sprite overlaps it, it performs the code above.

# CODE FOR LANE 4 (MISSES)

def on_overlap_tile8(sprite8, location8): # defines a new function "on_overlap_8" with inputs "sprite8" and "location8" to perform actions with said variables
    global miss, count, textSprite
    miss += 1
    count = 0
    sprites.destroy(textSprite)
    textSprite = textsprite.create(convert_to_text(count))
    textSprite.set_position(20, 20)
    sprites.destroy(sprite8, effects.ashes, 500)
    statusbar.value += -2
scene.on_overlap_tile(SpriteKind.RightG,
    assets.tile("""
        GrayFillG
    """),
    on_overlap_tile8) # assigns the tile "GrayFillG" I created as the tile in which if the sprite overlaps it, it performs the code above.

# SECTION 2: CREATING A HITBOX LIGHT UP EFFECT WHEN KEYS ARE PRESSED

def on_up_pressed(): # defines the function "on_up_pressed"
    tiles.set_current_tilemap(tilemap("""
        TileMapDTrigger
    """)) # sets tilemap "TileMapDTrigger" I created 
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed) # using the controller function, sets the tile map to "TileMapDTrigger" when the up key is pressed
# this gives the illusion that the hitbox lights up when you press the up key

def on_up_released(): # defines the function "on_up_released"
    tiles.set_current_tilemap(tilemap("""
        TileMapDefault
    """)) # sets tilemap "TileMapDefault", which is the default tilemap when no keys are pressed.
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released) # using the controller function, sets the tile map to "TileMapDefault" when the up key is released
# this gives the illusion that the hitbox turns back to normal when you release the up key

# Code in the next sequences are the same as the last (will get too repetitive). The only difference is what key is pressed and released, as well as the corresponding TileMaps

def on_down_pressed():
    tiles.set_current_tilemap(tilemap("""
        TileMapFTrigger
    """))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_down_released():
    tiles.set_current_tilemap(tilemap("""
        TileMapDefault
    """))
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_left_pressed():
    tiles.set_current_tilemap(tilemap("""
        TileMapSTrigger
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_left_released():
    tiles.set_current_tilemap(tilemap("""
        TileMapDefault
    """))
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_right_pressed():
    tiles.set_current_tilemap(tilemap("""
        TileMapDefault0
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_right_released():
    tiles.set_current_tilemap(tilemap("""
        TileMapDefault
    """))
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

# SECTION 3 ON GAME START

# sets all the following variables to 0 for the start of the game
wait = 0
miss = 0
hits = 0
count = 0
# sets all of the following sprites to invisible for the start of the game
BlackBackground: Sprite = None
DownF2: Sprite = None
UpD2: Sprite = None
RightG2: Sprite = None
LeftS2: Sprite = None
textSprite: TextSprite = None
statusbar: StatusBarSprite = None
# calling the MakeyMakey function extension, remaps the Makecode Arcade's default keys into new key bindings.
# REFERENCE MAKER
MakeyMakey.set_simulator_keymap(MakeyMakey.PlayerNumber.ONE,
    MakeyMakey.MakeyMakeyKey.D, # remaps to UP key to the D key
    MakeyMakey.MakeyMakeyKey.F, # remaps the DOWN key to the F key
    MakeyMakey.MakeyMakeyKey.S, # remaps the LEFT key to the S key
    MakeyMakey.MakeyMakeyKey.G, # remaps the RIGHT key to the G key
    MakeyMakey.MakeyMakeyKey.A, # remaps the A gameboy button to the A key
    MakeyMakey.MakeyMakeyKey.SPACE) # remaps the B gameboy button to the SPACE key
scene.set_background_image(assets.image("""
    TitleScreen
""")) # calling the scene function, sets the background to the game logo I designed for the title screen.
music.play(music.melody_playable(music.magic_wand),
    music.PlaybackMode.UNTIL_DONE) # calling the music function, plays a short jingle agic_wand (made by MakeCode Arcade) until it is finished
game.show_long_text("Greetings! Welcome to Rhxthm Wxrld_!", DialogLayout.BOTTOM) # calling the game function, displayes a text with the string, positioned at the bottom of the screen
game.show_long_text("Press the S, D, F, G keys in time with the music!",
    DialogLayout.BOTTOM)
game.show_long_text("Coloured bars will fall and you must press the correct corresponding key!",
    DialogLayout.BOTTOM)
game.show_long_text("Try and aim your hits to when the coloured bars reach the white line.",
    DialogLayout.BOTTOM)
game.show_long_text("Good luck...", DialogLayout.BOTTOM)
scene.set_background_color(15) # calling the scene function, sets the background colour of the game to "15" or black.
scene.set_background_image(assets.image("""
    GameBackground
""")) # calling the scene function, sets the background image to a game background asset I created.
tiles.set_current_tilemap(tilemap("""
    TileMapDefault
""")) # calling the tiles function, sets the current tilemap to the "TileMapDefault" asset for the start of the game.
statusbar = statusbars.create(6, 70, StatusBarKind.health) # calling the status bar extension to create a HP bar, creates a status bar variable with width 6 and height 70. Also inputs the variable StatusBarKind.health to call.
statusbar.max = 50 # sets maximum HP to 50
statusbar.value = 25 # sets default HP to 25 when game starts
statusbar.set_bar_border(1, 1) # sets a white HP bar border with width 1x1 pixel
statusbar.position_direction(CollisionDirection.RIGHT) # sets status bar position to the right
statusbar.set_offset_padding(0, 15) # sets status bar padding to 15px (15px from the right edge)
statusbar.set_label("HP") # labels the HP bar, displaying the string of text
textSprite = textsprite.create(convert_to_text(count)) # creates a textSprite, converting the combo "count" variable values into text. This serves as the basis of the Combo counter for players to see.
textSprite.set_position(20, 20) # sets the above textSprite to position 20x20
combotext = textsprite.create("COMBO") # creating a combotext variable, attributes the textsprite function to display the string "COMBO" so players know what the number is
combotext.set_position(20, 11) # sets the above variable in position 20x11 on the screen
pause(2000) # calling the pause function, creates a 2000ms pause before running the next lines of code

# SECTION 4 THE NOTES

# elements of code in SECTION 4 were inspired by this template:
# LcAtonal. (2021, June). Da Test. https://arcade.makecode.com/85601-16254-69715-75720

# INTRODUCTION RIFF 1

def on_after(): # defines the function "on_after"
    global LeftS2 # creates a new global variable "LeftS2"
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS) # assigns asset "RedBarImage" i created to the "Lefts2" variable
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0)) # calling the tiles function, places the LeftS2 sprite in column 3, row 0 (Lane 1, above the screen)
    LeftS2.set_velocity(0, 125) # sets LeftS2 at a velocity of 125. This will make it fall from top to bottom
timer.after(325, on_after) # calling the timer function, performs the above code after 300ms

def on_after2(): # defines the function "on_after2"
    global RightG2 # creates a new global variable "RightG2"
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG) # assigns asset "YellowBarImage" i created to the "RightG2" variable
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0)) # calling the tiles function, places the RightG2 sprite in column 6, row 0 (Lane 4, above the screen)
    RightG2.set_velocity(0, 125) # sets RightG2 at a velocity of 125. This will make it fall from top to bottom
timer.after(500, on_after2) # calling the timer function, performs the above code after 500ms

# Code in the next sequences are the same as the last (will get too repetitive). Will only comment small changes

def on_after3(): # defines the function "on_after3" etc.
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(700, on_after3) # calling the timer function, performs the above code after 700ms

def on_after4():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(900, on_after4) # calling the timer function, performs the above code after 900ms

def on_after5():
    global UpD2 # creates a new global variable "UpD2"
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD) # assigns asset "BlueBarImage" i created to the "UpD2" variable
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))  # calling the tiles function, places the UpD2 sprite in column 4, row 0 (Lane 2, above the screen)
    UpD2.set_velocity(0, 125)
timer.after(1250, on_after5) # calling the timer function, performs the above code after 1250ms

def on_after6():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(1450, on_after6) # calling the timer function, performs the above code after 1450ms

def on_after7():
    global DownF2 # creates a new global variable "DownF2"
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF) # assigns asset "GreenBarImage" i created to the "DownF2" variable
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0)) # calling the tiles function, places the DownFw sprite in column 5, row 0 (Lane 3, above the screen)
    DownF2.set_velocity(0, 125)
timer.after(1650, on_after7) # calling the timer function, performs the above code after 1650ms

def on_after8():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(2000, on_after8) # calling the timer function, performs the above code after 2000ms etc.

def on_after9():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(2200, on_after9)

def on_after10():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(2400, on_after10)

def on_after11():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(2750, on_after11)

def on_after12():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(2950, on_after12)

def on_after13():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
    RightG2.z = -1
timer.after(3150, on_after13)

# INTRODUCTION RIFF 2

def on_after14():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(3300, on_after14)

def on_after15():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(3550, on_after15)

def on_after16():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(3700, on_after16)

def on_after17():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(3900, on_after17)

def on_after18():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(4250, on_after18)

def on_after19():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(4450, on_after19)

def on_after20():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(4650, on_after20)

def on_after21():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(5000, on_after21)

def on_after22():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(5200, on_after22)

def on_after23():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(5400, on_after23)

def on_after24():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(5750, on_after24)

def on_after25():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(5950, on_after25)

def on_after26():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(6150, on_after26)

# INTRODUCTION RIFF REPEAT 1

def on_after27():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(6350, on_after27)

def on_after28():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(6550, on_after28)

def on_after29():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(6750, on_after29)

def on_after30():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(6950, on_after30)

def on_after31():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(7300, on_after31)

def on_after32():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(7500, on_after32)

def on_after33():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(7700, on_after33)

def on_after34():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(8050, on_after34)

def on_after35():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(8250, on_after35)

def on_after36():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(8450, on_after36)

def on_after37():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(8850, on_after37)

def on_after38():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(9000, on_after38)

def on_after39():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(9200, on_after39)

# INTRODUCTION RIFF REPEAT 2

def on_after40():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(9350, on_after40)

def on_after41():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(9550, on_after41)

def on_after42():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(9750, on_after42)

def on_after43():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(9950, on_after43)

def on_after44():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(10300, on_after44)

def on_after45():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(10500, on_after45)

def on_after46():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(10700, on_after46)

def on_after47():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(11050, on_after47)

def on_after48():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(11250, on_after48)

def on_after49():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(11450, on_after49)

def on_after50():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(11800, on_after50)

# VERSE 1 LINE 1 "you stare at me like i'm brain dead"

def on_after51():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(13050, on_after51)

def on_after52():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(13450, on_after52)

def on_after53():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(13850, on_after53)

def on_after54():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(14250, on_after54)

def on_after55():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(14650, on_after55)

def on_after56():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(15000, on_after56)

def on_after57():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(15350, on_after57)

def on_after58():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(16050, on_after58)

# VERSE 1 LINE 2 "d.r bad news came with meds"

def on_after59():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(19075, on_after59)

def on_after60():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(19450, on_after60)

def on_after61():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(19850, on_after61)

def on_after62():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(20250, on_after62)

def on_after63():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(20600, on_after63)

def on_after64():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(20975, on_after64)

def on_after65():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(21375, on_after65)

# VERSE 1 LINE 3 "think i'm suffocating underwater bad enough"

def on_after66():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(24000, on_after66)

def on_after67():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(24200, on_after67)

def on_after68():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(24400, on_after68)

def on_after69():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(24600, on_after69)

def on_after70():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(24800, on_after70)

def on_after71():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(25000, on_after71)

def on_after72():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(25200, on_after72)

def on_after73():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(25400, on_after73)

def on_after74():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(25550, on_after74)

def on_after75():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(25725, on_after75)

def on_after76():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(25900, on_after76)

def on_after77():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(26100, on_after77)

def on_after78():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(26250, on_after78)

# VERSE 1 LINE 4 "empty promises and lies are made with deeper cuts"

def on_after79():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(27000, on_after79)

def on_after80():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(27200, on_after80)

def on_after81():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(27400, on_after81)

def on_after82():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(27600, on_after82)

def on_after83():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(27800, on_after83)

def on_after84():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(28000, on_after84)

def on_after85():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(28200, on_after85)

def on_after86():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(28400, on_after86)

def on_after87():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(28550, on_after87)

def on_after88():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(28725, on_after88)

def on_after89():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(28900, on_after89)

def on_after90():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(29100, on_after90)

def on_after91():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(29250, on_after91)

# VERSE 1 LINE 5 "im okay"

def on_after92():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(31000, on_after92)

def on_after93():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(31150, on_after93)

def on_after94():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(31500, on_after94)

# VERSE 1 LINE 6 "unafraid"

def on_after95():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(32500, on_after95)

def on_after96():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(32650, on_after96)

def on_after97():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(33000, on_after97)

# VERSE 1 LINE 7 "when my lungs collapse its overkill"

def on_after98():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(34500, on_after98)

def on_after99():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(34690, on_after99)

def on_after100():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(34890, on_after100)

def on_after101():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(35090, on_after101)

def on_after102():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(35270, on_after102)

def on_after103():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(35470, on_after103)

def on_after104():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(35670, on_after104)

def on_after105():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(35850, on_after105)

def on_after106():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(36050, on_after106)

# PRECHORUS LINE 1 "two whom you wrote"

def on_after107():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(36960, on_after107)

def on_after108():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(37150, on_after108)

def on_after109():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(37520, on_after109)

def on_after110():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(37900, on_after110)

# PRECHORUS LINE 2 "I hope they choke on words that broke me"

def on_after111():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(38500, on_after111)

def on_after112():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(38675, on_after112)

def on_after113():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(39025, on_after113)

def on_after114():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(39425, on_after114)

def on_after115():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(39975, on_after115)

def on_after116():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(40500, on_after116)

def on_after117():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(41125, on_after117)

def on_after118():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(41650, on_after118)

def on_after119():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(42035, on_after119)

# PRECHORUS LINE 3 "and when they ghost"

def on_after120():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(42975, on_after120)

def on_after121():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(43175, on_after121)

def on_after122():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(43525, on_after122)

def on_after123():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(43900, on_after123)

# PRECHORUS LINE 4 "keep playing dead"

def on_after124():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(44480, on_after124)

def on_after125():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(44670, on_after125)

def on_after126():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(45025, on_after126)

def on_after127():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(45425, on_after127)

# CHORUS HOOK "bite my tongue instead!"

def on_after128():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(46875, on_after128)

def on_after129():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(47300, on_after129)

def on_after130():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(47670, on_after130)

def on_after131():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(48070, on_after131)

# CHORUS RIFF 1

def on_after132():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(48450, on_after132)

def on_after133():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(48650, on_after133)

def on_after134():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(48850, on_after134)

def on_after135():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(49050, on_after135)

def on_after136():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(49350, on_after136)

def on_after137():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(49550, on_after137)

def on_after138():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(49750, on_after138)

def on_after139():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(50150, on_after139)

def on_after140():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(50350, on_after140)

def on_after141():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(50550, on_after141)

def on_after142():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(50900, on_after142)

def on_after143():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(51100, on_after143)

def on_after144():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(51300, on_after144)

# CHORUS RIFF 2

def on_after145():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(51500, on_after145)

def on_after146():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(51675, on_after146)

def on_after147():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(51875, on_after147)

def on_after148():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(52075, on_after148)

def on_after149():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(52425, on_after149)

def on_after150():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(52625, on_after150)

def on_after151():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(52825, on_after151)

def on_after152():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(53175, on_after152)

def on_after153():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(53375, on_after153)

def on_after154():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(53575, on_after154)

def on_after155():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(53925, on_after155)

def on_after156():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(54125, on_after156)

def on_after157():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(54325, on_after157)

# CHORUS RIFF REPEAT 1

def on_after158():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(54500, on_after158)

def on_after159():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(54700, on_after159)

def on_after160():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(54900, on_after160)

def on_after161():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(55100, on_after161)

def on_after162():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(55450, on_after162)

def on_after163():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(55650, on_after163)

def on_after164():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(55850, on_after164)

def on_after165():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(56150, on_after165)

def on_after166():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(56350, on_after166)

def on_after167():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(56550, on_after167)

def on_after168():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(56850, on_after168)

# CHORUS LINE 2 "let me burn the open wounds in you, bite it instead!"

def on_after169():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(57050, on_after169)

def on_after170():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(57240, on_after170)

def on_after171():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(57430, on_after171)

def on_after172():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(57620, on_after172)

def on_after173():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(57810, on_after173)

def on_after174():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(58000, on_after174)

def on_after175():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(58190, on_after175)

def on_after176():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(58570, on_after176)

def on_after177():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(58760, on_after177)

def on_after178():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(59330, on_after178)

def on_after179():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(59520, on_after179)

def on_after180():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(59710, on_after180)

def on_after181():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(60090, on_after181)

# POST-CHORUS LINE 1 "every tragic tales you've told"

def on_after182():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(60460, on_after182)

def on_after183():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(60650, on_after183)

def on_after184():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(60840, on_after184)

def on_after185():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(61030, on_after185)

def on_after186():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(61220, on_after186)

def on_after187():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(61600, on_after187)

def on_after188():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(61980, on_after188)

# POST-CHORUS LINE 2 "becomes my clarity that i've known"

def on_after189():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(62550, on_after189)

def on_after190():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(62740, on_after190)

def on_after191():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(63120, on_after191)

def on_after192():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(63500, on_after192)

def on_after193():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(63690, on_after193)

def on_after194():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(63880, on_after194)

def on_after195():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(64260, on_after195)

def on_after196():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(64640, on_after196)

def on_after197():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(65020, on_after197)

# POST-CHORUS LINE 3 "that feeling something breathing under my bed"

def on_after198():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(65590, on_after198)

def on_after199():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(65780, on_after199)

def on_after200():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(66160, on_after200)

def on_after201():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(66540, on_after201)

def on_after202():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(66715, on_after202)

def on_after203():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(67095, on_after203)

def on_after204():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(67270, on_after204)

def on_after205():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(67650, on_after205)

def on_after206():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(67825, on_after206)

def on_after207():
    global LeftS2
    LeftS2 = sprites.create(assets.image("""
        RedBarImage
    """), SpriteKind.LeftS)
    tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
    LeftS2.set_velocity(0, 125)
timer.after(68205, on_after207)

def on_after208():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(68380, on_after208)

# POST-CHORUS LINE 4 "something breathing next to my head instead"

def on_after209():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(69520, on_after209)

def on_after210():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(69695, on_after210)

def on_after211():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(70075, on_after211)

def on_after212():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(70250, on_after212)

def on_after213():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(70630, on_after213)

def on_after214():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(70805, on_after214)

def on_after215():
    global UpD2
    UpD2 = sprites.create(assets.image("""
        BlueBarImage
    """), SpriteKind.UpD)
    tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
    UpD2.set_velocity(0, 125)
timer.after(71185, on_after215)

def on_after216():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(71360, on_after216)

def on_after217():
    global RightG2
    RightG2 = sprites.create(assets.image("""
        YellowBarImage
    """), SpriteKind.RightG)
    tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
    RightG2.set_velocity(0, 125)
timer.after(71740, on_after217)

def on_after218():
    global DownF2
    DownF2 = sprites.create(assets.image("""
        GreenBarImage
    """), SpriteKind.DownF)
    tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
    DownF2.set_velocity(0, 125)
timer.after(72120, on_after218)

# SECTION 5 GAME OVER OR GAME WIN

# elements of code in SECTION 5 were inspired by a combination these template:
# brandodon. (2021, June). Rhythm Rave (game results). https://arcade.makecode.com/82975-94322-58319-87649 

# IF THEY WIN

def on_after219():
    game.splash("Hits: " + convert_to_text(hits), # calling the game function, creates a splash that converts the "hits" variable value into text
        "Misses: " + convert_to_text(miss)) # also converts the "miss" variable value into text within the splash
    game.game_over(True) # performs the above code IF player wins (finishes the whole song without getting to 0HP)
timer.after(75000, on_after219)

# IF THEY LOSE

def on_on_zero(status): # defines the function "on_on_zero" with "status" variable
    global BlackBackground # creates global variable BlackBackground
    music.stop_all_sounds() # calling the music function, stops all sounds. So when the game over screen pops up the song isn't still playing in the back
    BlackBackground = sprites.create(assets.image("""
        GameBackground
    """), SpriteKind.player) # sets the "GameBackground" asset I created
    BlackBackground.z = 5 # sets z value of background high so it sits above the notes.
    game.game_over(False) # calling the game function, tells the system that this the player loses
statusbars.on_zero(StatusBarKind.health, on_on_zero) # performs the above code when the status bar HP reaches 0. 

pause(1000)

# the following is not an original song (however asset is created and transposed by me):
# Xdinary Heroes (featuring Yoon Do Hyun). (2024). iNSTEAD!. on LIVE and FALL. JYP Entertainment.

music.play(music.create_song(assets.song("""
        Instead
    """)),
    music.PlaybackMode.UNTIL_DONE) # calls the music function and playes the asset "instead" until it is done.

