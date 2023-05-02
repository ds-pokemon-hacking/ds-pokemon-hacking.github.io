# Sprite Height NARC
> This document was written by [turtleisaac](https://github.com/turtleisaac)

This NARC contains four sub-files for each species, each determining a negative value by which to vertically displace the specific sprite for a species (measured in the number of pixels) by.
> Note: If you wish to displace the sprites by a positive value, please see the "global" Y-Offset value found in the [Sprite Poke_Data NARC](poke_data.md)

## Table of Contents
* [Data Location](#data-location)
* [Data Structure](#data-structure)
  * [Height NARC Sub-file](#height-narc-sub-file)
* [Other](#other)
  * [Relevant Tools](#tools-with-editing-capability)
  * [Other Methods of Viewing/Editing](#other-ways-to-viewedit-this-data)
---

## Data Location
The NARC containing these files can be found in the following game paths:
* Platinum: /poketool/pokegra/height.narc
* HGSS: /a/0/0/5

--- 

## Data Structure
There are four files for each species, in a repeating order.
1. Female Back Sprite
2. Male Back Sprite
3. Female Front Sprite
4. Male Front Sprite

To calculate the sub-file ID in the NARC corresponding to a given species, gender, and sprite type, the following pseudocode can guide you:

```
subfile_id = (species_id*4) + sprite_type
```
Where `species_id` is the ID number of a Pokémon, and `sprite_type` equals one of the following acceptable values:
* `FEMALE_BACK` = 0
* `MALE_BACK` = 1
* `FEMALE_FRONT` = 2
* `MALE_FRONT` = 3

The number of files in the narc is equal to `NUM_SPECIES * 4`
> Note: In an unmodified gen 4 game, `NUM_SPECIES` would equal 493. If you are using some sort of dex expansion mod such as Mikelan's HG dex expansion, hg-engine, or another one, then the number of entries can and will vary.

### Height NARC Sub-file
```c
struct HeightData {
  /* 0x0 */ uint8_t yOffset;
}; // entry size = 1 (0x1) byte
```
| Field Name | Description                                                                                                                                                              | Data Type |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| yOffset    | Value used to determine the offset (number of pixels) by which a sprite of this species is displaced vertically when displayed in battle. Values are stored as negative. | uint8_t   |

---
## Other

### Tools with editing capability
* [PokEditor-v2](https://github.com/turtleisaac/PokEditor-v2) by [turtleisaac](https://github.com/turtleisaac)

### Other ways to view/edit this data
* Can be found exposed in [armips/data/heighttable.s](https://github.com/BluRosie/hg-engine/blob/main/armips/data/heighttable.s) in [hg-engine](https://github.com/BluRosie/hg-engine)