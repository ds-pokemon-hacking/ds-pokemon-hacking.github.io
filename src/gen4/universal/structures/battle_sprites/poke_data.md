# Sprite Poke_Data NARC
> This document was written by [turtleisaac](https://github.com/turtleisaac)

> Warning: This document is still WIP. Further discoveries are still being made and our understanding of the format is evolving. Please be patient as we figure out what each part of the file specification controls and how we can manipulate it. Thanks!

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
      * [SpriteDataEntry](#spritedisplaydataentry)
        * [SpriteAnimationData](#spriteanimationdata)
          * [AnimationSubTable](#animationsubtable)
* [Specification](#specification)
    * [Sections](#sections)
      * [Movement Types](#movement-types)
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
This file consists of one huge table containing data for every single species. Each entry is 89 bytes long, so the number of entries can be found by dividing the size of the file by 89. This should equal 493, which is the number of species in vanilla gen 4. This value will be referred to as `NUM_SPECIES` in remaining references in this document.

### Poke_Data NARC 0.bin
```c
// in an unmodified gen 4 game, NUM_SPECIES would equal 493.
// If you are using some sort of dex expansion mod such as Mikelan's HG dex expansion,
// hg-engine, or another one, then the number of entries can and will vary.

struct SpriteDataEntry spriteData[NUM_SPECIES];
```
| Field Name | Description                                | Data Type                                         |
|------------|--------------------------------------------|---------------------------------------------------|
| spriteData | Custom types are linked under `Data Type`. | [SpriteDisplayDataEntry](#spritedisplaydataentry) |

### SpriteDisplayDataEntry
```c
struct SpriteDisplayDataEntry
{
    /* 0x0 */ SpriteAnimationData spriteAnimationDataFront;
    /* 0x2B */ SpriteAnimationData spriteAnimationDataBack;
    /* 0x56 */ int8_t globalOffsetY;
    /* 0x57 */ int8_t shadowOffsetX;
    /* 0x58 */ uint8_t shadowSize;
}; // entry size = 89 (0x59) bytes
```

| Field Name               | Description                                                                                                                                                                         | Data Type                                   |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| spriteAnimationDataFront | Custom types are linked under `Data Type`. This set of data is used for the front (opposing) sprite for an individual of this species.                                              | [SpriteAnimationData](#spriteanimationdata) |
| spriteAnimationDataBack  | Custom types are linked under `Data Type`. This set of data is used for the back (player/ally) sprite for an individual of this species.                                            | [SpriteAnimationData](#spriteanimationdata) |
| globalOffsetY            | Value used to determine the Y-Offset applied to the placement of sprites for individuals of this species. Measured in the number of pixels to displace by.                          | int8_t                                      |
| shadowOffsetX            | Value used to determine the X-Offset applied to the placement of the shadow beneath front sprites for individuals of this species. Measured in the number of pixels to displace by. | int8_t                                      |
| shadowSize               | Value used to determine the size of the shadow placed beneath front sprites for individuals of this species. Possible values are specified in [ShadowSize](#shadowsize).            | uint8_t                                     |

### SpriteAnimationData
```c
struct SpriteAnimationData
{
    /* 0x0 */ uint8_t cryWait;
    /* 0x1 */ uint8_t movementID;
    /* 0x2 */ uint8_t movementWait;
    /* 0x3 */ AnimationSubTable spriteAnimationSub[10];
}; // entry size = 43 (0x2B) bytes
```

| Field Name         | Description                                                                                                                          | Data Type                                   |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| cryWait            | Length of time to wait before playing the cry when an individual of this species appears (measurement unit currently unknown).       | uint8_t                                     |
| movementID         | Value used to determine the animation played when individual of this species appears.                                                | uint8_t                                     |
| movementWait       | Length of time to wait before playing the animation when an individual of this species appears (measurement unit currently unknown). | uint8_t                                     |
| spriteAnimationSub | Custom types are linked under `Data Type`.                                                                                           | [AnimationSubTable](#animationsubtable)[10] |

### AnimationSubTable
```c
struct AnimationSubTable
{
    /* 0x0 */ int8_t unk1;
    /* 0x1 */ uint8_t waitAmount;
    /* 0x2 */ int8_t offsetX;
    /* 0x3 */ int8_t offsetY;
}; // entry size = 4 (0x4) bytes
```
It would appear there is a lot more complexity to this format than I'd originally thought...

| Field Name | Description                                                                                            | Data Type |
|------------|--------------------------------------------------------------------------------------------------------|-----------|
| unk1       | Unknown, but likely has to do with what part of the animation is played(?)                             | int8_t    |
| waitAmount | Length of time to wait before running this part of the animation (measurement unit currently unknown). | uint8_t   |
| offsetX    | Horizontal offset to adjust sprite by.                                                                 | int8_t    |
| offsetY    | Vertical offset to adjust sprite by.                                                                   | int8_t    |


---
## Specification

### Sections
* [Movement Types](#movement-types)
* [ShadowSize](#shadowsize)

### Movement Types

> WIP: need to figure out the gigantic mess that is literally everything to do with the AnimationSubTable entries
* See [Front sprite movement types](front_movement_types.md)
  * *Note*: With the discovery of the function of further elements in the struct, this should no longer to be considered an accurate reflection of what each value does. As we understand the AnimationSubTable data further, attempts will be made to provide a better system for displaying examples of all possible animations. However, in the meantime, this can still give you a rough idea of what each movementID value looks like.
* See [Back sprite movement types](back_movement_types.md)

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
  * *Note*: Can't edit all fields of this data

### Other ways to view/edit this data
* Can be found exposed in [armips/data/spriteoffsets.s](https://github.com/BluRosie/hg-engine/blob/main/armips/data/spriteoffsets.s) in [hg-engine](https://github.com/BluRosie/hg-engine)
  * *Note*: Can't edit all fields of this data
