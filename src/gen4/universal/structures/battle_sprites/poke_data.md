# Sprite Poke_Data NARC
> This document was written by [turtleisaac](https://github.com/turtleisaac)

This NARC contains a single sub-file which contains one large table. This table contains, in no particular order:
* The values corresponding to the animations played when a Pokémon is sent out/ appears
  * This consists of two separate values, one for the front sprite and one for the back sprite.
* The size (or lack of) the shadow placed beneath front sprites of a species
* The X-Offset, measured in the number of pixels, of the shadow placed beneath front sprites of a species
* A "global" Y-Offset, measured in the number of pixels applied to all front sprites of a species.

## Table of Contents
* [Data Location](#data-location)
* [Data Structure](#data-structure)
    * [Poke_Data NARC 0.bin](#poke_data-narc-0bin)
    * [SpriteDataEntry](#spritedataentry)
* [Specification](#specification)
    * [Sections](#sections)
      * [ShadowSize](#shadowsize)
* [Other](#other)
  * [Relevant Tools](#tools-with-editing-capability)
  * [Other Methods of Viewing/Editing](#other-ways-to-viewedit-this-data)
---

## Data Location
The NARC containing these files can be found in the following game paths:
* Platinum: /poketool/poke_edit/pl_poke_data.narc
* HGSS: /a/1/8/0

Despite the fact that these are NARC files, don't let that trick you. All of the data is solely contained in one large, single sub-file within the NARC.

--- 

## Data Structure
This file consists of one huge table containing data for every single species. Each entry is 89 bytes long, so the number of entries can be found by dividing the size of the file by 89.

### Poke_Data NARC 0.bin
```c
// in an unmodified gen 4 game, NUM_SPECIES would equal 493.
// If you are using some sort of dex expansion mod such as Mikelan's HG dex expansion,
// hg-engine, or another one, then the number of entries can and will vary.

struct SpriteDataEntry spriteData[NUM_SPECIES];
```
| Field Name | Description                                | Data Type                           |
|------------|--------------------------------------------|-------------------------------------|
| spriteData | Custom types are linked under `Data Type`. | [SpriteDataEntry](#SpriteDataEntry) |

### SpriteDataEntry
```c
struct SpriteDataEntry
{
    /* 0x0 */ uint8_t unkByte;
    /* 0x1 */ uint8_t movement;
    /* 0x2 */ uint8_t unkSection1[42];
    /* 0x2C */ uint8_t backMovement;
    /* 0x2D */ uint8_t unkSection2[41];
    /* 0x56 */ int8_t frontYOffset;
    /* 0x57 */ int8_t shadowXOffset;
    /* 0x58 */ uint8_t shadowSize;
}; // entry size = 89 (0x59) bytes
```
| Field Name    | Description                                                                                                                                                                         | Data Type   |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| unkByte       | Currently unknown purpose.                                                                                                                                                          | uint8_t     |
| movement      | Value used to determine the animation played when an opposing individual of this species appears. See [Movement types](front_movement_types.md)                                           | uint8_t     |
| unkSection1   | Currently unknown contents and purposes.                                                                                                                                            | uint8_t[42] |
| backMovement  | Value used to determine the animation played when the player or an ally sends out an individual of this species.                                                                    | uint8_t     |
| unkSection2   | Currently unknown contents and purposes.                                                                                                                                            | uint8_t[41] |
| frontYOffset  | Value used to determine the Y-Offset applied to the placement of front sprites for individuals of this species. Measured in the number of pixels to displace by.                    | int8_t      |
| shadowXOffset | Value used to determine the X-Offset applied to the placement of the shadow beneath front sprites for individuals of this species. Measured in the number of pixels to displace by. | int8_t      |
| shadowSize    | Value used to determine the size of the shadow placed beneath front sprites for individuals of this species. Possible values are specified in [ShadowSize](#shadowsize).            | uint8_t     |

---
## Specification

### Sections
* [Movement Types](#movement-types)
* [ShadowSize](#shadowsize)

### Movement Types

* See [Movement types](front_movement_types.md)

#### ShadowSize
There are four different possible values for ShadowSize.
```c
enum ShadowSize {
  SHADOWSIZE_NONE = 0,
  SHADOWSIZE_SMALL,
  SHADOWSIZE_MEDIUM,
  SHADOWSIZE_LARGE
};
```

---

## Other

### Tools with editing capability
* [PokEditor-v2](https://github.com/turtleisaac/PokEditor-v2) by [turtleisaac](https://github.com/turtleisaac)

### Other ways to view/edit this data
* Can be found exposed in [armips/data/spriteoffsets.s](https://github.com/BluRosie/hg-engine/blob/main/armips/data/spriteoffsets.s) in [hg-engine](https://github.com/BluRosie/hg-engine)
