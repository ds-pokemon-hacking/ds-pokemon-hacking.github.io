---
title: Sprite Locations (Platinum)
tags:
  - Resource (Platinum)
---

# Sprite Locations (Platinum)

> Author(s): [0zone](https://github.com/0zone) (rewritten community document), Tartar, Hibiki, [MrHam88](https://github.com/DevHam88) (reformatted for wiki)  
> Research: BagBoy (corrections and additions)

This page provides the locations of various sprites and models in Pokémon Platinum US release ROM.

---

## Game Start & End
### Opening Graphics
**Location**: `demo/title/op_demo`

### Title Screen Graphics
**Location**: `demo/title/titledemo`

### New Game (Professor Intro)
**Location**: `demo/intro/intro`

### New Game Player Name Menu/Sprites
**Location**: `data/namein`

<details>
<summary>Click to view details</summary>

- Palettes: namein_1.RLCN (Palette #4)
- Sprite: namein10.bin

</details>

### Ending Credits
**Location**: `graphic/ending`

---

## Trainer Battles
### Back Sprites
**Location**: `poketool/trga/trbgra`

### Front Sprites
**Location**: `poketool/trga/trfgra`

### VS Cut-in Sprites
**Location**: `graphic/field_encountereffect`

:::warning
The opponent portraits ("mugshots") in platinum do not use the palettes in the `field_encountereffect` narc. They pull from the palette in the `poketool/trga/trfgra` front sprite narc for that same character.  
Therefore extra steps are required to make the narc in `field_encountereffect` perfectly match the one in `trfgra`.  
This can be done by exporting the front sprite palette and importing it over the portrait palette, or editing the portrait palette with Console Tool. [This video](https://youtu.be/bOhnWzeu6Sg?list=PLKTW2ZuQjbEEVYHhxRZF9N8v_9AUneJq1&t=542) demonstrates an alternate workaround.
:::

### Pokemon Sprites
**Location**: `poketool/pokegra/pl_pokegra`

### Pokemon Sprites (Forms)
**Location**: `poketool/pokegra/pl_otherpoke`

:::warning
*You must use PokeDSpic for the otherpoke narc*
:::

---

## Field Sprites
### Overworld Sprites
**Location**: `data/mmodel`

<details>
<summary>Click to view details</summary>

- Hero
  - 90 - Walking/Running
  - 92 - Bike
  - 155 - Pull out Pokeball
  - 157 - Water flower
  - 159 - Surf
  - 164 - Tux
  - 166 - Fishing
  - 363 - Use Poketch
  - 365 - Save
  - 367 - Pokecenter
  - 415 - VS Seeker

- Heroine
  - 91 - Walking/Running
  - 93 - Bike
  - 156 - Pull out Pokeball
  - 158 - Water flower
  - 160 - Surf
  - 165 - Dress
  - 167 - Fishing
  - 364 - Use Poketch
  - 366 - Save
  - 368 - Pokecenter
  - 416 - VS Seeker

- Other Characters:
  - 94 - Professor Rowan
  - 210 - Ho-Oh Animation Sprite
  - 211 - Lugia Animation Sprite
  - 24 - Nurse Joy
  - 69 - Pikachu
  - 72 - Psyduck
  - 76 - Torchic
  - 77 - Skitty
  - 82 - Pushable Rock
  - 83 - Breakable Rock
  - 84 - Cuttable Tree
  - 85 - Pokeball
  - 94 - Professor
  - 99 - Cyrus
  - 100 - Mars
  - 101 - Saturn
  - 102 - Jupiter
  - 103 - Galactic Grunt Male
  - 104 - Galactic Grunt Female
  - 105 - Roark
  - 106 - Gardenia
  - 107 - Crasher Wake
  - 108 - Maylene
  - 109 - Fantina
  - 110 - Candice
  - 111 - Byron
  - 112 - Volkner
  - 113 - Aaron
  - 114 - Bertha
  - 115 - Flint
  - 116 - Lucian
  - 117 - Cynthia
  - 119 - Mom
  - 120 - Cheryl
  - 127 - Rival
  - 130 - Uxie
  - 131 - Mesprit
  - 132 - Azelf
  - 133 - Dialga
  - 134 - Palkia
  - 135 - Arceus
  - 136 - Darkrai
  - 137 - Shaymin
  - 138 - Cresselia
  - 139 - Giratina
  - 140 - Heatran
  - 145 - Professor Oak
  - 152 - Starly
  - 153 - Briefcase
  - 162 - Regigigas
  - 163 - Drifloon
  - 362 - Magikarp
  - 371 - Pachirisu
  - 372 - Shroomish
  - 373 - Bunnery
  - 374 - Happiny
  - 375 - Machop
  - 377 - Charon
  - 378 - Thorton
  - 379 - Argenta
  - 380 - Darach
  - 381 - Dahlia
  - 383 - Turtwig
  - 384 - Grotle
  - 385 - Torterra
  - 386 - Chimchar
  - 387 - Monferno
  - 388 - Infernape
  - 389 - Piplup
  - 390 - Prinplup
  - 391 - Empoleon
  - 392 - Crogrunk
  - 393 - Giratina Origin
  - 400 - Rotom Heat
  - 401 - Rotom Fan
  - 402 - Rotom Ice
  - 403 - Rotom Wash
  - 404 - Rotom Grass
  - 411 - Galactic Team Set of 4
  - 412 - Galactic Team Set of 3

</details>

### HM Cut-in Sprites
**Location**: `field_cutin`

---

## Menus & User Interface
### Pokemon Icons
**Location**: `poketool/icongra/pl_poke_icon`

### Trainer Card
**Location**: `graphic/trainer_case`

<details>
<summary>Click to view details</summary>

- Palettes: trainer_case_0.RLCN to trainer_case_6.RLCN; trainer_case_26.RLCN
- Sprite: trainer_case_31.RGCN

</details>

### Map Icon
**Location**: `graphic/tmap_gra`

<details>
<summary>Click to view details</summary>

- Palettes: Tmap_gra_2.RLCN
- Sprite: Tmap_gra_10.RGCN
- Cells: Tmap_gra_11.RECN

</details>

### Pokedex Size Comparison
**Location**: `resources/eng/zukan/zukan.narc`

<details>
<summary>Click to view details</summary>

- Palettes: RLCN 14 (Palette #4)
- Sprite: File 93
- Cells: File 91

</details>

### Textbox Borders
**Location**: `graphic/pl_winframe`

---

## Miscellaneous
### Underground Entry Sprite
**Location**: `data/ugeffect_obj_graphic`

<details>
<summary>Click to view details</summary>

- Palettes:
  - Hero / ugeffect_obj_graphic_1.RGCN
  - Heroine / ugeffect_obj_graphic_3.RGCN
- Sprite:
  - Hero / ugeffect_obj_graphic_0.RGCN
  - Heroine / ugeffect_obj_graphic_2.RGCN
  - Hole / ugeffect_obj_graphic_8.RGCN

*(Hole shares the palettes with the player sprite, you'll need to edit it the same way as the flying HM sprite.)*

</details>

### Hall of Fame
**Location**: `poketool/trgra/trbgra`

<details>
<summary>Click to view details</summary>

- Palettes:
  - Hero / trfgra_1.RLCN
  - Heroine / trfgra_6.RLCN
- Sprite:
  - Hero / trfgra_4.RGCN
  - Heroine / trfgra_9.RGCN

*(You will need to follow [this guide](/docs/generation-iv/guides/ncer_sprite_editing/) to modify it.)*

</details>

### Legendary Pokemon Cutscene
**Location**: `arc/demo_tengan_gra`

<details>
<summary>Click to view details</summary>

- Hero / demo_tengan_gra_61.BMD0
- Heroine / demo_tengan_gra_63.BMD0

</details>
