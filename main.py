@namespace
class SpriteKind:
    left = SpriteKind.create()
    down = SpriteKind.create()
    up = SpriteKind.create()
    right = SpriteKind.create()
def Beats():
    
    def on_after():
        global left2
        left2 = sprites.create(assets.image("""
            UpKey
        """), SpriteKind.left)
        tiles.place_on_tile(left2, tiles.get_tile_location(3, 7))
        left2.set_velocity(0, -50)
    timer.after(500, on_after)
    
    
    def on_after2():
        global left2
        left2 = sprites.create(assets.image("""
            UpKey
        """), SpriteKind.left)
        tiles.place_on_tile(left2, tiles.get_tile_location(3, 7))
        left2.set_velocity(0, -50)
    timer.after(700, on_after2)
    
    
    def on_after3():
        global left2
        left2 = sprites.create(assets.image("""
            UpKey
        """), SpriteKind.left)
        tiles.place_on_tile(left2, tiles.get_tile_location(3, 7))
        left2.set_velocity(0, -50)
    timer.after(1000, on_after3)
    
    
    def on_after4():
        global down2
        down2 = sprites.create(assets.image("""
            DownKey
        """), SpriteKind.down)
        tiles.place_on_tile(down2, tiles.get_tile_location(4, 7))
        down2.set_velocity(0, -50)
    timer.after(1250, on_after4)
    
    
    def on_after5():
        global up2
        up2 = sprites.create(assets.image("""
            UpKey
        """), SpriteKind.up)
        tiles.place_on_tile(up2, tiles.get_tile_location(5, 7))
        up2.set_velocity(0, -50)
    timer.after(1500, on_after5)
    
    
    def on_after6():
        global up2
        up2 = sprites.create(assets.image("""
            UpKey
        """), SpriteKind.up)
        tiles.place_on_tile(up2, tiles.get_tile_location(5, 7))
        up2.set_velocity(0, -50)
    timer.after(2000, on_after6)
    
    
    def on_after7():
        global up2
        up2 = sprites.create(assets.image("""
            UpKey
        """), SpriteKind.up)
        tiles.place_on_tile(up2, tiles.get_tile_location(5, 7))
        up2.set_velocity(0, -50)
    timer.after(2000, on_after7)
    
    
    def on_after8():
        global down2
        down2 = sprites.create(assets.image("""
            DownKey
        """), SpriteKind.down)
        tiles.place_on_tile(down2, tiles.get_tile_location(4, 7))
        down2.set_velocity(0, -50)
    timer.after(2500, on_after8)
    
    
    def on_after9():
        global right2
        right2 = sprites.create(assets.image("""
            RightKey
        """), SpriteKind.right)
        tiles.place_on_tile(right2, tiles.get_tile_location(6, 7))
        right2.set_velocity(0, -50)
    timer.after(2750, on_after9)
    
    
    def on_after10():
        global up2
        up2 = sprites.create(assets.image("""
            UpKey
        """), SpriteKind.up)
        tiles.place_on_tile(up2, tiles.get_tile_location(5, 7))
        up2.set_velocity(0, -50)
    timer.after(2750, on_after10)
    
    
    def on_after11():
        game.splash("")
    timer.after(5000, on_after11)
    
miss = 0
wait = 0
right2: Sprite = None
up2: Sprite = None
down2: Sprite = None
left2: Sprite = None
scene.set_background_color(15)
game.set_dialog_text_color(11)
game.set_dialog_frame(assets.image("""
    framebox
"""))
music.play(music.melody_playable(music.ba_ding),
    music.PlaybackMode.UNTIL_DONE)
game.show_long_text("Rhythm Retro Rush", DialogLayout.CENTER)
game.splash("Press the keys", "in time with the music!")
game.splash("")
tiles.set_current_tilemap(tilemap("""
    TileMap
"""))
Beats()
pause(1000)
music.play(music.create_song(assets.song("""
        Instead
    """)),
    music.PlaybackMode.UNTIL_DONE)

def on_on_update():
    global miss, wait
    if controller.left.is_pressed():
        if left2.tile_kind_at(TileDirection.CENTER, assets.tile("""
            LeftSpaceTile
        """)):
            if wait == 0:
                miss += 1
                wait = 10
            else:
                wait += -1
    if controller.up.is_pressed():
        if up2.tile_kind_at(TileDirection.CENTER, assets.tile("""
            UpSpaceTile
        """)):
            if wait == 0:
                miss += 1
                wait = 10
            else:
                wait += -1
    if controller.right.is_pressed():
        if right2.tile_kind_at(TileDirection.CENTER,
            assets.tile("""
                RightSpaceTile
            """)):
            if wait == 0:
                miss += 1
                wait = 10
            else:
                wait += -1
    if controller.down.is_pressed():
        if down2.tile_kind_at(TileDirection.CENTER, assets.tile("""
            DownSpaceTile
        """)):
            if wait == 0:
                miss += 1
                wait = 10
            else:
                wait += -1
game.on_update(on_on_update)
