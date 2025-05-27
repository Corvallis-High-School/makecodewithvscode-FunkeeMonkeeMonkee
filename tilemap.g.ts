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
            case "level1":return tiles.createTilemap(hex`10001000040303030303030b020b0303030303050a0101010101010101010101010101090a0101010101010101010101010101090a0101010101010101010101010101090a0101010101010101010101010101090a0101010101010101010101010101090a0101010101010101010101010101090a0101010101010101010101010101090a0101010101010101010101010101090a0101010101010101010101010101090a0101010101010101010101010101090a0101010101010101010101010101090a0101010101010101010101010101090a0101010101010101010101010101090a01010101010101010101010101010907080808080808080808080808080806`, img`
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
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.doorClosedNorth,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorth2], TileScale.Sixteen);
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
