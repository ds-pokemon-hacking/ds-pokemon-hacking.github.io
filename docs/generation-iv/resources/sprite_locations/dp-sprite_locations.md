---
title: Sprite Locations (Diamond & Pearl)
tags:
  - Resource (Diamond)
  - Resource (Pearl)
---

# Sprite Locations (Diamond & Pearl)

> Author(s): [0zone](https://github.com/0zone) (rewritten community document), [MrHam88](https://github.com/DevHam88) (reformatted for wiki)  
> Research: Tartar, Hibiki, [Mixone](https://github.com/Mixone-FinallyHere)

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

### Battle Backgrounds
**Location**: `battle/graphic/batt_bg`

<details>
<summary>Click to view details</summary>

- Plain background
  - Palettes: batt_bg_158.RLCN (day), batt_bg_159.RLCN (evening), batt_bg_160.RLCN (night)
  - Sprite: batt_bg_3.RGCN
  - Screen: batt_bg_2.RCSN
- Water background
  - Palettes: batt_bg_161.RLCN (day), batt_bg_162.RLCN (evening), batt_bg_163.RLCN (night)
  - Sprite: batt_bg_4.RGCN
  - Screen: batt_bg_2.RCSN
- City background
  - Palettes: batt_bg_164.RLCN (day), batt_bg_165.RLCN (evening), batt_bg_166.RLCN (night)
  - Sprite: batt_bg_5.RGCN
  - Screen: batt_bg_2.RCSN
- Forest background
  - Palettes: batt_bg_167.RLCN (day), batt_bg_168.RLCN (evening), batt_bg_169.RLCN (night)
  - Sprite: batt_bg_6.RGCN
  - Screen: batt_bg_2.RCSN
- Mountain background
  - Palettes: batt_bg_170.RLCN (day), batt_bg_171.RLCN (evening), batt_bg_172.RLCN (night)
  - Sprite: batt_bg_7.RGCN
  - Screen: batt_bg_2.RCSN
- Snow background
  - Palettes: batt_bg_173.RLCN (day), batt_bg_174.RLCN (evening), batt_bg_175.RLCN (night)
  - Sprite: batt_bg_8.RGCN
  - Screen: batt_bg_2.RCSN
- Indoors 1 background
  - Palettes: batt_bg_176.RLCN (day), batt_bg_177.RLCN (evening), batt_bg_178.RLCN (night)
  - Sprite: batt_bg_9.RGCN
  - Screen: batt_bg_2.RCSN
- Indoors 2 background
  - Palettes: batt_bg_179.RLCN (day), batt_bg_180.RLCN (evening), batt_bg_181.RLCN (night)
  - Sprite: batt_bg_10.RGCN
  - Screen: batt_bg_2.RCSN
- Indoors 3 background
  - Palettes: batt_bg_182.RLCN (day), batt_bg_183.RLCN (evening), batt_bg_184.RLCN (night)
  - Sprite: batt_bg_11.RGCN
  - Screen: batt_bg_2.RCSN
- Cave 1 background
  - Palettes: batt_bg_185.RLCN (day), batt_bg_186.RLCN (evening), batt_bg_187.RLCN (night)
  - Sprite: batt_bg_12.RGCN
  - Screen: batt_bg_2.RCSN
- Cave 2 background
  - Palettes: batt_bg_188.RLCN (day), batt_bg_189.RLCN (evening), batt_bg_190.RLCN (night)
  - Sprite: batt_bg_13.RGCN
  - Screen: batt_bg_2.RCSN
- Cave 3 background
  - Palettes: batt_bg_191.RLCN (day), batt_bg_192.RLCN (evening), batt_bg_193.RLCN (night)
  - Sprite: batt_bg_14.RGCN
  - Screen: batt_bg_2.RCSN

</details>

### Battle Party Menu Graphics
**Location**: `battle/graphic/b_plist_gra`

<details>
<summary>Click to view details</summary>

- Move info page, buttons layer
  - Palettes: b_plist_gra_23.RLCN
  - Sprite: b_plist_gra_22.RGCN
  - Screen: b_plist_gra_7.RCSN
- Move info page, background layer
  - Palettes: b_plist_gra_23.RLCN
  - Sprite: b_plist_gra_22.RGCN
  - Screen: b_plist_gra_6.RCSN

</details>

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
### Summary Screen Graphics
**Location**: `graphic/pst_gra`

<details>
<summary>Click to view details</summary>

- Move details
  - Palettes: pst_gra_1.RLCN
  - Sprite: pst_gra_0.RGCN
  - Screen: pst_gra_11.RCSN
- Battle moves page while choosing a move
  - Palettes: pst_gra_1.RLCN
  - Sprite: pst_gra_0.RGCN
  - Screen: pst_gra_12.RCSN

</details>

### Pokemon Icons
**Location**: `poketool/icongra/poke_icon`

### Poketch Graphics
**Location**: `graphic/poketch`

<details>
<summary>Click to view details</summary>

- Theme colours (every application)
  - Palettes: poketch_0.RLCN
- Casing
  - Palettes: poketch_13.RLCN
  - Sprite: poketch_14.RGCN
  - Screen: poketch_15.RCSN
- Screen before the player has a Pokétch
  - Palettes: poketch_12.RLCN
  - Sprite: poketch_10.RGCN
  - Screen: poketch_11.RCSN
- Shared digits (with members 3 and 4)
  - Sprite: poketch_2.RGCN
- Digital Watch screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_23.RGCN
  - Screen: poketch_24.RCSN
- Digital Watch digits
  - Sprite: poketch_25.RGCN
- Calculator screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_16.RGCN
  - Screen: poketch_17.RCSN
- Memo Pad screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_30.RGCN
  - Screen: poketch_31.RCSN
- Memo Pad sprites
  - Sprite: poketch_32.RGCN
  - Cells: poketch_33.RECN
  - Animation: poketch_34.RNAN
- Pedometer screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_49.RGCN
  - Screen: poketch_48.RCSN
- Pedometer sprites
  - Sprite: poketch_52.RGCN
  - Cells: poketch_50.RECN
  - Animation: poketch_51.RNAN
- Party Status screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_106.RGCN
- Party Status sprites
  - Sprite: poketch_109.RGCN
  - Cells: poketch_107.RECN
  - Animation: poketch_108.RNAN
- Friendship Checker screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_7.RGCN
- Friendship Checker sprites
  - Sprite: poketch_35.RGCN
  - Cells: poketch_36.RECN
  - Animation: poketch_37.RNAN
- Dowsing Machine screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_39.RGCN
  - Screen: poketch_38.RCSN
- Dowsing Machine sprites
  - Sprite: poketch_42.RGCN
  - Cells: poketch_40.RECN
  - Animation: poketch_41.RNAN
- Berry Searcher screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_117.RGCN
  - Screen: poketch_116.RCSN
- Berry Searcher sprites
  - Sprite: poketch_120.RGCN
  - Cells: poketch_118.RECN
  - Animation: poketch_119.RNAN
- Daycare Checker screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_81.RGCN
  - Screen: poketch_80.RCSN
- Daycare Checker sprites
  - Sprite: poketch_84.RGCN
  - Cells: poketch_82.RECN
  - Animation: poketch_83.RNAN
- Counter screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_44.RGCN
  - Screen: poketch_43.RCSN
- Counter sprites
  - Sprite: poketch_47.RGCN
  - Cells: poketch_45.RECN
  - Animation: poketch_46.RNAN
- Analog Watch screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_23.RGCN
  - Screen: poketch_26.RCSN
- Analog Watch sprites
  - Sprite: poketch_29.RGCN
  - Cells: poketch_27.RECN
  - Animation: poketch_28.RNAN
- Marking Map screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_117.RGCN
  - Screen: poketch_115.RCSN
- Marking Map sprites
  - Sprite: poketch_120.RGCN
  - Cells: poketch_118.RECN
  - Animation: poketch_119.RNAN
- Link Searcher screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_96.RGCN
  - Screen: poketch_95.RCSN
- Link Searcher sprites
  - Sprite: poketch_99.RGCN
  - Cells: poketch_97.RECN
  - Animation: poketch_98.RNAN
- Coin Toss screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_54.RGCN
  - Screen: poketch_53.RCSN
- Coin Toss sprites
  - Sprite: poketch_57.RGCN
  - Cells: poketch_55.RECN
  - Animation: poketch_56.RNAN
- Move Tester screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_61.RGCN
  - Screen: poketch_60.RCSN
- Move Tester sprites
  - Sprite: poketch_64.RGCN
  - Cells: poketch_62.RECN
  - Animation: poketch_63.RNAN
- Calendar screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_111.RGCN
  - Screen: poketch_110.RCSN
- Calendar sprites
  - Sprite: poketch_114.RGCN
  - Cells: poketch_112.RECN
  - Animation: poketch_113.RNAN
- Roulette screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_86.RGCN
  - Screen: poketch_85.RCSN
- Roulette sprites
  - Sprite: poketch_89.RGCN
  - Cells: poketch_87.RECN
  - Animation: poketch_88.RNAN
- Trainer Counter screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_122.RGCN
  - Screen: poketch_121.RCSN
- Trainer Counter sprites
  - Sprite: poketch_125.RGCN
  - Cells: poketch_123.RECN
  - Animation: poketch_124.RNAN
- Kitchen Timer screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_91.RGCN
  - Screen: poketch_90.RCSN
- Kitchen Timer sprites
  - Sprite: poketch_94.RGCN
  - Cells: poketch_92.RECN
  - Animation: poketch_93.RNAN
- Color Changer screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_66.RGCN
  - Screen: poketch_65.RCSN
- Color Changer sprites
  - Sprite: poketch_69.RGCN
  - Cells: poketch_67.RECN
  - Animation: poketch_68.RNAN
- Matchup Checker screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_71.RGCN
  - Screen: poketch_70.RCSN
- Matchup Checker sprites
  - Sprite: poketch_74.RGCN
  - Cells: poketch_72.RECN
  - Animation: poketch_73.RNAN
- Stopwatch screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_21.RGCN
  - Screen: poketch_20.RCSN
- Stopwatch sprites
  - Sprite: poketch_22.RGCN
  - Cells: poketch_18.RECN
  - Animation: poketch_19.RNAN
- Alarm Clock screen
  - Palettes: poketch_0.RLCN
  - Sprite: poketch_76.RGCN
  - Screen: poketch_75.RCSN
- Alarm Clock sprites
  - Sprite: poketch_79.RGCN
  - Cells: poketch_77.RECN
  - Animation: poketch_78.RNAN

</details>

### Bag Graphics
**Location**: `graphic/bag_gra`

<details>
<summary>Click to view details</summary>

- Boy's bag
  - Palettes: bag_gra_3.RLCN
  - Sprite: bag_gra_2.RGCN
  - Cells: bag_gra_1.RECN
  - Animation: bag_gra_0.RNAN
- Girl's bag
  - Palettes: bag_gra_35.RLCN
  - Sprite: bag_gra_34.RGCN
  - Cells: bag_gra_1.RECN
  - Animation: bag_gra_0.RNAN
- Pocket arrows
  - Palettes: bag_gra_16.RLCN
  - Sprite: bag_gra_6.RGCN
  - Cells: bag_gra_5.RECN
  - Animation: bag_gra_4.RNAN
- Item list border
  - Palettes: bag_gra_8.RLCN
  - Sprite: bag_gra_7.RGCN
  - Screen: bag_gra_9.RCSN
- Top screen background
  - Palettes: bag_gra_8.RLCN
  - Sprite: bag_gra_7.RGCN
  - Screen: bag_gra_10.RCSN
- Poké Ball border on the bottom screen
  - Palettes: bag_gra_12.RLCN
  - Sprite: bag_gra_11.RGCN
  - Screen: bag_gra_13.RCSN
- Inside of the Poké Ball dial
  - Palettes: bag_gra_12.RLCN
  - Sprite: bag_gra_37.RGCN
  - Screen: bag_gra_36.RCSN
- Bottom screen button tiles
  - Palettes: bag_gra_14.RLCN
  - Sprite: bag_gra_15.RGCN
- Pocket highlight
  - Palettes: bag_gra_16.RLCN
  - Sprite: bag_gra_21.RGCN
  - Cells: bag_gra_20.RECN
  - Animation: bag_gra_19.RNAN
- Item list highlight
  - Palettes: bag_gra_16.RLCN
  - Sprite: bag_gra_24.RGCN
  - Cells: bag_gra_23.RECN
  - Animation: bag_gra_22.RNAN
- Bar shown while moving an item
  - Palettes: bag_gra_16.RLCN
  - Sprite: bag_gra_27.RGCN
  - Cells: bag_gra_26.RECN
  - Animation: bag_gra_25.RNAN
- Pocket icons
  - Palettes: bag_gra_18.RLCN
  - Sprite: bag_gra_17.RGCN
- Button press ripple
  - Palettes: bag_gra_31.RLCN
  - Sprite: bag_gra_30.RGCN
  - Cells: bag_gra_29.RECN
  - Animation: bag_gra_28.RNAN
- Animations for the girl's bag
  - Animation: bag_gra_32.RNAN
- Cells for the girl's bag
  - Cells: bag_gra_33.RECN
- Item list entry icons
  - Sprite: bag_gra_38.RGCN

</details>

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

### Move Relearner Graphics
**Location**: `graphic/waza_oshie_gra`

<details>
<summary>Click to view details</summary>

- Background
  - Palettes: waza_oshie_gra_12.RLCN
  - Sprite: waza_oshie_gra_10.RGCN
  - Screen: waza_oshie_gra_11.RCSN

</details>

### Textbox Borders
**Location**: `graphic/winframe`

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