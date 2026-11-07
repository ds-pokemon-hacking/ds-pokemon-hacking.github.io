---
title: Sprite Locations (Diamond & Pearl)
tags:
  - Resource (Diamond)
  - Resource (Pearl)
---

# Sprite Locations (Diamond & Pearl)

> Author(s): [0zone](https://github.com/0zone) (rewritten community document), [MrHam88](https://github.com/DevHam88) (reformatted for wiki)  
> Research: Tartar, Hibiki

This page provides the locations of various sprites and models in Pokémon Diamond and Pearl US release ROMs.

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
- Cells: namein12.bin

</details>

### Ending Credits
**Location**: `graphic/ending`

---

## Trainer Battles
### Back Sprites
**Location**: `poketool/trga/trbgra` and `battle/graphic/batt_obj`
Starting at 195.

<details>
<summary>Click to view details</summary>

- Palettes:
  - Hero / trbgra_1.RLCN
  - Heroine / trbgra_3.RLCN

- Battle Object File:
  - Hero / Batt_obj_195.bin
  - Heroine / Batt_obj_196.bin
  - View Batt_obj_203.bin to modify them.

</details>

### Front Sprites
**Location**: `poketool/trga/trfgra`

### VS Cut-in Sprites
**Location**: `poketool/trga/trfgra`

### Pokemon Sprites
**Location**: `poketool/pokegra/pokegra`

### Pokemon Sprites (Forms)
**Location**: `poketool/pokegra/otherpoke`

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
  - 363 - Aerobics
  - 365 - Save
  - 367 - Pokecenter

- Heroine
  - 91 - Walking/Running
  - 93 - Bike
  - 156 - Pull out Pokeball
  - 158 - Water flower
  - 160 - Surf
  - 165 - Dress
  - 167 - Fishing
  - 364 - Aerobics
  - 366 - Save
  - 368 - Pokecenter

</details>

### HM Cut-in Sprites
**Location**: `field_cutin`

---

## Menus & User Interface
### Pokemon Icons
**Location**: `poketool/icongra/poke_icon`

### Trainer Card
**Location**: `graphic/trainer_case`

<details>
<summary>Click to view details</summary>

- Palettes: trainer_case_0.RLCN to trainer_case_6.RLCN
- Sprite: trainer_case_27.RGCN

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
**Location**: `resources/eng/zukan/zukan`

<details>
<summary>Click to view details</summary>

- Palettes: RLCN 14 (Palette #4)
- Sprite: File 93
- Cells: File 91

</details>

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
**Location**: `data/demo_climax`

:::warning
Unlike in Platinum, there are no BDM0 files for DP, the OW sprites should be the ones being used.
:::