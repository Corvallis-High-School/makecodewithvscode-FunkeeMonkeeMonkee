// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTiles.transparency16":return img`
f f c f f c f f c f f c f f c f 
c c c c c c c c c c c c c c c c 
f c f f c f f c f f c f f c f f 
c c c c c c c c c c c c c c c c 
f f f c f f c f f c f f c f f c 
c c c c c c c c c c c c c c c c 
f f c f f c f f c f f c f f c f 
c c c c c c c c c c c c c c c c 
f c f f c f f c f f c f f c f f 
c c c c c c c c c c c c c c c c 
c f f c f f c f f c f f c f f f 
c c c c c c c c c c c c c c c c 
f f c f f c f f c f f c f f c f 
c c c c c c c c c c c c c c c c 
f c f f c f f c f f c f f c f f 
c c c c c c c c c c c c c c c c 
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

}
// Auto-generated code. Do not edit.

// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`1000100002010101010101090c0b010101010103070c080c0c080c080c080c0c0c0c0c06070c08080c080c080c080c080c080c06070c080c0c0c0c080c0c0c080c080806070c0c0c08080c0808080c080c0c08060708080808080c0c0c080808080c0806070c0c080c0c0c080c080c0c080c0c06070c0808080c08080c08080c08080c06070c0c0c080c0c080c0c0c0c0c0c0c060708080c08080c080c08080808080c06070c080c080c0c080c0c0c0c0c080c06070c080c0c0c08080c0808080c080c06070c0c0c080c0c0c0c0c080c0c080c06070c0808080c0808080c080808080c06070c080c0c0c080c0c0c0c0c0c0c0c06070c0a05050505050505050505050504`, img`
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 . . 2 . 2 . 2 . . . . . 2 
2 . 2 2 . 2 . 2 . 2 . 2 . 2 . 2 
2 . 2 . . . . 2 . . . 2 . 2 2 2 
2 . . . 2 2 . 2 2 2 . 2 . . 2 2 
2 2 2 2 2 2 . . . 2 2 2 2 . 2 2 
2 . . 2 . . . 2 . 2 . . 2 . . 2 
2 . 2 2 2 . 2 2 . 2 2 . 2 2 . 2 
2 . . . 2 . . 2 . . . . . . . 2 
2 2 2 . 2 2 . 2 . 2 2 2 2 2 . 2 
2 . 2 . 2 . . 2 . . . . . 2 . 2 
2 . 2 . . . 2 2 . 2 2 2 . 2 . 2 
2 . . . 2 . . . . . 2 . . 2 . 2 
2 . 2 2 2 . 2 2 2 . 2 2 2 2 . 2 
2 . 2 . . . 2 . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.stairLadder,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.floorDark0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return myTiles.transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
