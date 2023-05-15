# Town Map Spots
These structures are used to describe the Town Map selectable structures in Heart Gold and Soul Silver as they appear baked into Overlay 101.

---
### GearMapTownOverlay Struct Description
```c
struct GearMapTownOverlay
{
    /* 0x0 */ u16 mapHeader;
    /* 0x2 */ u16 gateAppearance; // not sure
    /* 0x4 */ u8 entry; // maybe
    /* 0x5 */ u8 entry2; // maybe
    /* 0x6 */ u8 redX;
    /* 0x7 */ u8 redY;
    /* 0x8 */ u8 grayX;
    /* 0x9 */ u8 grayY;
    /* 0xA */ u8 townDimY:4; // msn
              u8 townDimX:4; // lsn
    /* 0xB */ u8 replacementDimY:4; // msn
              u8 replacementDimX:4; // lsn
    /* 0xC */ u8 offsetY:4; // msn
              u8 offsetX:4; // lsn
    /* 0xD */ u8 padding;
}; // entry size = 0xE
```
| Field Name        | Description                                                 | Data Type      |
|-------------------|-------------------------------------------------------------|----------------|
| mapHeader         | the map header that the entry describes                     | u16            |
| gateAppearance    | the map header that describes gates for the entry           | u16            |
| entry             | the entry in this table (maybe?)                            | u8             |
| entry2            | the entry in recorded visit (has player visited entry?)     | u8             |
| redX              | the base x coordinate for the red blocks (shifted right one)| u8             |
| redY              | the base y coordinate for the red blocks (shifted up one)   | u8             |
| grayX             | the base x coordinate for the gray block on the image       | u8             |
| grayY             | the base y coordinate for the gray block on the image       | u8             |
| townDimY          | the amount of matrix chunks the town spans up and down      | u8:4 (4 bits)  |
| townDimX          | the amount of matrix chunks the town spans left and right   | u8:4 (4 bits)  |
| offsetY           | y offset within the replacement block of the actual town    | u8:4 (4 bits)  |
| offsetX           | x offset within the replacement block of the actual town    | u8:4 (4 bits)  |
| padding           | unused (ensures next entry is 2-byte aligned)               | u8             |


### GearMapTownSelectionOverlay Struct Description
```c
struct GearMapTownSelectionOverlay
{
    /* 0x0 */ u16 mapHeader;
    /* 0x2 */ u8 baseX; // in poke gear position
    /* 0x3 */ u8 baseY; // in poke gear position
    /* 0x4 */ u8 dimY:4; // msn
              u8 dimX:4; // lsn
    /* 0x5 */ u8 flags;
    /* 0x6 */ u8 textEntry; // in a027 file 273
    /* 0x7 */ u8 flySpot;
    /* 0x8 */ u32 padding;
    /* 0xC */ u8 orangeBaseX; // in image
    /* 0xD */ u8 orangeBaseY; // in image
    /* 0xE */ u8 orangeDimX; // in image
    /* 0xF */ u8 orangeDimY; // in image
}; // size = 0x10
```
| Field Name        | Description                                                 | Data Type      |
|-------------------|-------------------------------------------------------------|----------------|
| mapHeader         | the map header that the entry describes                     | u16            |
| baseX             | base x position in PokéGear                                 | u8             |
| baseY             | base y position in PokéGear                                 | u8             |
| dimY              | y dimension of selection overlay in tiles                   | u8:4 (4 bits)  |
| dimX              | x dimension of selection overlay in tiles                   | u8:4 (4 bits)  |
| flags             | flags that seemingly control when/how things are shown      | u8             |
| textEntry         | text entry to use from a027 file 273 for the blurb          | u8             |
| flySpot           | towns with a fly spot have this nonzero                     | u8             |
| padding           | unused field                                                | u32            |
| orangeBaseX       | base x position in image of the orange overlay block        | u8             |
| orangeBaseY       | base y position in image of the orange overlay block        | u8             |
| orangeDimX        | x dimension in image of the orange overlay block            | u8             |
| orangeDimY        | y dimension in image of the orange overlay block            | u8             |
