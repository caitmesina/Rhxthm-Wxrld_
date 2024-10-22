namespace SpriteKind {
    export const left = SpriteKind.create()
    export const down = SpriteKind.create()
    export const up = SpriteKind.create()
    export const right = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.down, assets.tile`Black`, function (sprite, location) {
    miss += 1
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.left, assets.tile`Black`, function (sprite, location) {
    miss += 1
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.up, assets.tile`UpSpaceTile`, function (sprite, location) {
    if (controller.up.isPressed()) {
        sprites.destroy(sprite)
    }
})
scene.onOverlapTile(SpriteKind.up, assets.tile`Black`, function (sprite, location) {
    miss += 1
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.left, assets.tile`LeftSpaceTile`, function (sprite, location) {
    if (controller.left.isPressed()) {
        sprites.destroy(sprite)
    }
})
scene.onOverlapTile(SpriteKind.down, assets.tile`DownSpaceTile`, function (sprite, location) {
    if (controller.down.isPressed()) {
        sprites.destroy(sprite)
    }
})
scene.onOverlapTile(SpriteKind.right, assets.tile`Black`, function (sprite, location) {
    miss += 1
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.right, assets.tile`RightSpaceTile`, function (sprite, location) {
    if (controller.up.isPressed()) {
        sprites.destroy(sprite)
    }
})
function Beats () {
    timer.after(500, function () {
        left = sprites.create(assets.image`LeftKey`, SpriteKind.left)
        tiles.placeOnTile(left, tiles.getTileLocation(3, 7))
        left.setVelocity(0, -50)
    })
    timer.after(700, function () {
        left = sprites.create(assets.image`LeftKey`, SpriteKind.left)
        tiles.placeOnTile(left, tiles.getTileLocation(3, 7))
        left.setVelocity(0, -50)
    })
    timer.after(1000, function () {
        left = sprites.create(assets.image`LeftKey`, SpriteKind.left)
        tiles.placeOnTile(left, tiles.getTileLocation(3, 7))
        left.setVelocity(0, -50)
    })
    timer.after(1250, function () {
        down = sprites.create(assets.image`DownKey`, SpriteKind.down)
        tiles.placeOnTile(down, tiles.getTileLocation(4, 7))
        down.setVelocity(0, -50)
    })
    timer.after(1500, function () {
        up = sprites.create(assets.image`UpKey`, SpriteKind.up)
        tiles.placeOnTile(up, tiles.getTileLocation(5, 7))
        up.setVelocity(0, -50)
    })
    timer.after(2000, function () {
        up = sprites.create(assets.image`UpKey`, SpriteKind.up)
        tiles.placeOnTile(up, tiles.getTileLocation(5, 7))
        up.setVelocity(0, -50)
    })
    timer.after(2000, function () {
        up = sprites.create(assets.image`UpKey`, SpriteKind.up)
        tiles.placeOnTile(up, tiles.getTileLocation(5, 7))
        up.setVelocity(0, -50)
    })
    timer.after(2500, function () {
        down = sprites.create(assets.image`DownKey`, SpriteKind.down)
        tiles.placeOnTile(down, tiles.getTileLocation(4, 7))
        down.setVelocity(0, -50)
    })
    timer.after(2750, function () {
        right = sprites.create(assets.image`RightKey`, SpriteKind.right)
        tiles.placeOnTile(right, tiles.getTileLocation(6, 7))
        right.setVelocity(0, -50)
    })
    timer.after(2750, function () {
        up = sprites.create(assets.image`UpKey`, SpriteKind.up)
        tiles.placeOnTile(up, tiles.getTileLocation(5, 7))
        up.setVelocity(0, -50)
    })
    timer.after(5000, function () {
        game.splash("Misses: " + convertToText(miss))
        game.gameOver(false)
    })
}
let wait = 0
let right: Sprite = null
let up: Sprite = null
let down: Sprite = null
let left: Sprite = null
let miss = 0
scene.setBackgroundColor(15)
game.setDialogTextColor(11)
game.setDialogFrame(assets.image`framebox`)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
game.showLongText("Rhythm Retro Rush", DialogLayout.Center)
game.splash("Press the keys", "in time with the music!")
game.splash("")
tiles.setCurrentTilemap(tilemap`TileMap`)
Beats()
pause(1000)
music.play(music.createSong(assets.song`Instead`), music.PlaybackMode.UntilDone)
game.onUpdate(function () {
    if (controller.left.isPressed()) {
        if (left.tileKindAt(TileDirection.Center, assets.tile`LeftSpaceTile`)) {
            if (wait == 0) {
                miss += 1
                wait = 10
            } else {
                wait += -1
            }
        }
    }
    if (controller.up.isPressed()) {
        if (up.tileKindAt(TileDirection.Center, assets.tile`UpSpaceTile`)) {
            if (wait == 0) {
                miss += 1
                wait = 10
            } else {
                wait += -1
            }
        }
    }
    if (controller.right.isPressed()) {
        if (right.tileKindAt(TileDirection.Center, assets.tile`RightSpaceTile`)) {
            if (wait == 0) {
                miss += 1
                wait = 10
            } else {
                wait += -1
            }
        }
    }
    if (controller.down.isPressed()) {
        if (down.tileKindAt(TileDirection.Center, assets.tile`DownSpaceTile`)) {
            if (wait == 0) {
                miss += 1
                wait = 10
            } else {
                wait += -1
            }
        }
    }
})
