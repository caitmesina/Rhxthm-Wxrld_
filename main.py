def on_a_pressed():
    pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

music.play(music.create_song(assets.song("""
        mySong
    """)),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)