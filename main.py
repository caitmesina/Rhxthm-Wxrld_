@namespace
class SpriteKind:
    RightG = SpriteKind.create()
    LeftS = SpriteKind.create()
    DownF = SpriteKind.create()
    UpD = SpriteKind.create()

def on_up_pressed():
    tiles.set_current_tilemap(tilemap("""
        TileMapDTrigger
    """))
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile(sprite7, location7):
    global miss
    miss += 1
    sprites.destroy(sprite7)
scene.on_overlap_tile(SpriteKind.RightG,
    assets.tile("""
        GrayFill
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite6, location6):
    global hits
    if controller.right.is_pressed():
        sprites.destroy(sprite6)
    hits += 1
scene.on_overlap_tile(SpriteKind.RightG,
    assets.tile("""
        HitBoxG
    """),
    on_overlap_tile2)

def on_down_released():
    tiles.set_current_tilemap(tilemap("""
        TileMapDefault
    """))
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_overlap_tile3(sprite3, location3):
    global miss
    miss += 1
    sprites.destroy(sprite3)
scene.on_overlap_tile(SpriteKind.DownF,
    assets.tile("""
        GrayFill
    """),
    on_overlap_tile3)

def on_left_pressed():
    tiles.set_current_tilemap(tilemap("""
        TileMapSTrigger
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    tiles.set_current_tilemap(tilemap("""
        TileMapDefault
    """))
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    tiles.set_current_tilemap(tilemap("""
        TileMapDefault
    """))
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_overlap_tile4(sprite5, location5):
    global hits
    if controller.left.is_pressed():
        sprites.destroy(sprite5)
    hits += 1
scene.on_overlap_tile(SpriteKind.LeftS,
    assets.tile("""
        HitBoxS
    """),
    on_overlap_tile4)

def on_right_pressed():
    tiles.set_current_tilemap(tilemap("""
        TileMapDefault0
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_up_released():
    tiles.set_current_tilemap(tilemap("""
        TileMapDefault
    """))
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def on_overlap_tile5(sprite, location):
    global hits
    if controller.down.is_pressed():
        sprites.destroy(sprite)
    hits += 1
scene.on_overlap_tile(SpriteKind.DownF,
    assets.tile("""
        HitBoxF
    """),
    on_overlap_tile5)

def on_overlap_tile6(sprite2, location2):
    global miss
    miss += 1
    sprites.destroy(sprite2)
scene.on_overlap_tile(SpriteKind.LeftS,
    assets.tile("""
        GrayFill
    """),
    on_overlap_tile6)

def on_down_pressed():
    tiles.set_current_tilemap(tilemap("""
        TileMapFTrigger
    """))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_overlap_tile7(sprite4, location4):
    global miss
    miss += 1
    sprites.destroy(sprite4)
scene.on_overlap_tile(SpriteKind.UpD,
    assets.tile("""
        GrayFill
    """),
    on_overlap_tile7)

def Beats():
    # intro
    
    def on_after():
        global LeftS2
        LeftS2 = sprites.create(assets.image("""
            RedBarImage
        """), SpriteKind.LeftS)
        tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
        LeftS2.set_velocity(0, 125)
    timer.after(300, on_after)
    
    
    def on_after2():
        global RightG2
        RightG2 = sprites.create(assets.image("""
            YellowBarImage
        """), SpriteKind.RightG)
        tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
        RightG2.set_velocity(0, 125)
    timer.after(500, on_after2)
    
    
    def on_after3():
        global LeftS2
        LeftS2 = sprites.create(assets.image("""
            RedBarImage
        """), SpriteKind.LeftS)
        tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
        LeftS2.set_velocity(0, 125)
    timer.after(700, on_after3)
    
    
    def on_after4():
        global RightG2
        RightG2 = sprites.create(assets.image("""
            YellowBarImage
        """), SpriteKind.RightG)
        tiles.place_on_tile(RightG2, tiles.get_tile_location(6, 0))
        RightG2.set_velocity(0, 125)
    timer.after(900, on_after4)
    
    
    def on_after5():
        global UpD2
        UpD2 = sprites.create(assets.image("""
            BlueBarImage
        """), SpriteKind.UpD)
        tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
        UpD2.set_velocity(0, 125)
    timer.after(1250, on_after5)
    
    
    def on_after6():
        global UpD2
        UpD2 = sprites.create(assets.image("""
            BlueBarImage
        """), SpriteKind.UpD)
        tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
        UpD2.set_velocity(0, 125)
    timer.after(1450, on_after6)
    
    
    def on_after7():
        global DownF2
        DownF2 = sprites.create(assets.image("""
            GreenBarImage
        """), SpriteKind.DownF)
        tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
        DownF2.set_velocity(0, 125)
    timer.after(1650, on_after7)
    
    
    def on_after8():
        global UpD2
        UpD2 = sprites.create(assets.image("""
            BlueBarImage
        """), SpriteKind.UpD)
        tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
        UpD2.set_velocity(0, 125)
    timer.after(2000, on_after8)
    
    
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
    timer.after(3150, on_after13)
    
    # intro riff 2
    
    def on_after14():
        global LeftS2
        LeftS2 = sprites.create(assets.image("""
            RedBarImage
        """), SpriteKind.LeftS)
        tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
        LeftS2.set_velocity(0, 125)
    timer.after(3400, on_after14)
    
    
    def on_after15():
        global DownF2
        DownF2 = sprites.create(assets.image("""
            GreenBarImage
        """), SpriteKind.DownF)
        tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
        DownF2.set_velocity(0, 125)
    timer.after(3500, on_after15)
    
    
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
    
    # intro riff repeat 1
    
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
    
    # intro riff repeat 2
    
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
    
    # verse 1 "you stare at me like im brain dead"
    
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
    
    # verse 1 "dr bad news came with meds"
    
    def on_after59():
        global DownF2
        DownF2 = sprites.create(assets.image("""
            GreenBarImage
        """), SpriteKind.DownF)
        tiles.place_on_tile(DownF2, tiles.get_tile_location(5, 0))
        DownF2.set_velocity(0, 125)
    timer.after(19050, on_after59)
    
    
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
    
    # verse 1 "think i'm suffocating underwater bad enough"
    
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
    
    # verse 1 "empty promises and lies are made with deeper cuts"
    
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
    
    # verse 1 "im okay"
    
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
    
    # verse 1 "unafraid"
    
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
    
    # verse 1 "when my lungs collapse its overkill"
    
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
    
    # prechorus "two whom you wrote"
    
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
    
    # prechorus "I hope they choke on words that broke me"
    
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
    
    # prechorus "and when they ghost"
    
    def on_after120():
        global UpD2
        UpD2 = sprites.create(assets.image("""
            BlueBarImage
        """), SpriteKind.UpD)
        tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
        UpD2.set_velocity(0, 125)
    timer.after(42950, on_after120)
    
    
    def on_after121():
        global UpD2
        UpD2 = sprites.create(assets.image("""
            BlueBarImage
        """), SpriteKind.UpD)
        tiles.place_on_tile(UpD2, tiles.get_tile_location(4, 0))
        UpD2.set_velocity(0, 125)
    timer.after(43150, on_after121)
    
    
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
    
    # prechorus "keep playing dead"
    
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
    
    # prechorus "bite my tongue instead"
    
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
    
    # chorus riff 1
    
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
    
    # chorus riff 2
    
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
    
    # chorus riff repeat 1
    
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
    
    # chorus "let me burn the open wounds in you"
    
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
    
    # post chorus "every tragic tales you've told"
    
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
    
    # post chorus "becomes my clarity that i've known"
    
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
    
    # post chorus "that feeling something breathing under my bed"
    
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
    
    # some
    
    def on_after201():
        global LeftS2
        LeftS2 = sprites.create(assets.image("""
            RedBarImage
        """), SpriteKind.LeftS)
        tiles.place_on_tile(LeftS2, tiles.get_tile_location(3, 0))
        LeftS2.set_velocity(0, 125)
    timer.after(66540, on_after201)
    
    # thing
    
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
    
    # post chorus "something breathing next to my head instead"
    
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
    
    
    def on_after219():
        game.splash("Hits: " + convert_to_text(hits),
            "Misses: " + convert_to_text(miss))
        game.game_over(True)
    timer.after(75000, on_after219)
    

def on_overlap_tile8(sprite8, location8):
    global hits
    if controller.up.is_pressed():
        sprites.destroy(sprite8)
    hits += 1
scene.on_overlap_tile(SpriteKind.UpD,
    assets.tile("""
        HitBoxD
    """),
    on_overlap_tile8)

wait = 0
DownF2: Sprite = None
UpD2: Sprite = None
RightG2: Sprite = None
LeftS2: Sprite = None
hits = 0
miss = 0
MakeyMakey.set_simulator_keymap(MakeyMakey.PlayerNumber.ONE,
    MakeyMakey.MakeyMakeyKey.D,
    MakeyMakey.MakeyMakeyKey.F,
    MakeyMakey.MakeyMakeyKey.S,
    MakeyMakey.MakeyMakeyKey.G,
    MakeyMakey.MakeyMakeyKey.A,
    MakeyMakey.MakeyMakeyKey.SPACE)
scene.set_background_image(assets.image("""
    TitleScreen
"""))
music.play(music.melody_playable(music.magic_wand),
    music.PlaybackMode.UNTIL_DONE)
game.show_long_text("Greetings! Welcome to Rhxthm Wxrld_!", DialogLayout.BOTTOM)
game.show_long_text("Press the S, D, F, G keys in time with the music!",
    DialogLayout.BOTTOM)
game.show_long_text("Coloured bars will fall and you must press the correct corresponding key!",
    DialogLayout.BOTTOM)
game.show_long_text("Try and aim your hits to when the coloured bars reach the white line.",
    DialogLayout.BOTTOM)
game.show_long_text("Good luck...", DialogLayout.BOTTOM)
scene.set_background_color(15)
scene.set_background_image(assets.image("""
    GameBackground
"""))
tiles.set_current_tilemap(tilemap("""
    TileMapDefault
"""))
pause(2000)
Beats()
pause(1000)
music.play(music.create_song(assets.song("""
        Instead
    """)),
    music.PlaybackMode.UNTIL_DONE)

def on_on_update():
    global miss, wait
    if controller.left.is_pressed():
        if LeftS2.tile_kind_at(TileDirection.CENTER, assets.tile("""
            HitBoxS
        """)):
            if wait == 0:
                miss += 1
                wait = 10
            else:
                wait += -1
    if controller.up.is_pressed():
        if UpD2.tile_kind_at(TileDirection.CENTER, assets.tile("""
            HitBoxD
        """)):
            if wait == 0:
                miss += 1
                wait = 10
            else:
                wait += -1
    if controller.right.is_pressed():
        if DownF2.tile_kind_at(TileDirection.CENTER, assets.tile("""
            HitBoxF
        """)):
            if wait == 0:
                miss += 1
                wait = 10
            else:
                wait += -1
    if controller.down.is_pressed():
        if RightG2.tile_kind_at(TileDirection.CENTER, assets.tile("""
            HitBoxG
        """)):
            if wait == 0:
                miss += 1
                wait = 10
            else:
                wait += -1
game.on_update(on_on_update)
