---
title: Sprite Locations (Platinum)
tags:
  - Resource (Platinum)
---

# Sprite Locations (Platinum)

> Author(s): [0zone](https://github.com/0zone) (rewritten community document), Tartar, Hibiki, [MrHam88](https://github.com/DevHam88) (reformatted for wiki)  
> Research: BagBoy (corrections and additions), [Mixone](https://github.com/Mixone-FinallyHere)

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

### Battle Terrain Platforms & HP Bars
**Location**: `battle/graphic/pl_batt_obj`

<details>
<summary>Click to view details</summary>

- HP bar colours
  - Palettes: pl_batt_obj_0.RLCN
- Blank colours
  - Palettes: pl_batt_obj_70.RLCN
- Unused message frame colours
  - Palettes: pl_batt_obj_73.RLCN
- Pokémon slot
  - Palettes: pl_batt_obj_75.RLCN
  - Sprite: pl_batt_obj_76.RGCN
  - Cells: pl_batt_obj_77.RECN
  - Animation: pl_batt_obj_78.RNAN
- Caught ball
  - Palettes: pl_batt_obj_79.RLCN
  - Sprite: pl_batt_obj_247.RGCN
  - Cells: pl_batt_obj_248.RECN
  - Animation: pl_batt_obj_249.RNAN
- Choice cursor
  - Palettes: pl_batt_obj_80.RLCN
  - Sprite: pl_batt_obj_250.RGCN
  - Cells: pl_batt_obj_251.RECN
  - Animation: pl_batt_obj_252.RNAN
- Level up panel
  - Palettes: pl_batt_obj_82.RLCN
  - Sprite: pl_batt_obj_256.RGCN
  - Cells: pl_batt_obj_257.RECN
  - Animation: pl_batt_obj_258.RNAN
- Lucas back sprite
  - Palettes: pl_batt_obj_83.RLCN
  - Sprite: pl_batt_obj_259.RGCN
  - Cells: pl_batt_obj_267.RECN
  - Animation: pl_batt_obj_275.RNAN
- Dawn back sprite
  - Palettes: pl_batt_obj_84.RLCN
  - Sprite: pl_batt_obj_260.RGCN
  - Cells: pl_batt_obj_268.RECN
  - Animation: pl_batt_obj_276.RNAN
- Barry back sprite
  - Palettes: pl_batt_obj_85.RLCN
  - Sprite: pl_batt_obj_261.RGCN
  - Cells: pl_batt_obj_269.RECN
  - Animation: pl_batt_obj_277.RNAN
- Cheryl back sprite
  - Palettes: pl_batt_obj_86.RLCN
  - Sprite: pl_batt_obj_262.RGCN
  - Cells: pl_batt_obj_270.RECN
  - Animation: pl_batt_obj_278.RNAN
- Riley back sprite
  - Palettes: pl_batt_obj_87.RLCN
  - Sprite: pl_batt_obj_263.RGCN
  - Cells: pl_batt_obj_271.RECN
  - Animation: pl_batt_obj_279.RNAN
- Marley back sprite
  - Palettes: pl_batt_obj_88.RLCN
  - Sprite: pl_batt_obj_264.RGCN
  - Cells: pl_batt_obj_272.RECN
  - Animation: pl_batt_obj_280.RNAN
- Buck back sprite
  - Palettes: pl_batt_obj_89.RLCN
  - Sprite: pl_batt_obj_265.RGCN
  - Cells: pl_batt_obj_273.RECN
  - Animation: pl_batt_obj_281.RNAN
- Mira back sprite
  - Palettes: pl_batt_obj_90.RLCN
  - Sprite: pl_batt_obj_266.RGCN
  - Cells: pl_batt_obj_274.RECN
  - Animation: pl_batt_obj_282.RNAN
- Thrown Poké Ball
  - Palettes: pl_batt_obj_91.RLCN
  - Sprite: pl_batt_obj_285.RGCN
  - Cells: pl_batt_obj_284.RECN
  - Animation: pl_batt_obj_283.RNAN
- Thrown Master Ball
  - Palettes: pl_batt_obj_92.RLCN
  - Sprite: pl_batt_obj_288.RGCN
  - Cells: pl_batt_obj_287.RECN
  - Animation: pl_batt_obj_286.RNAN
- Thrown Ultra Ball
  - Palettes: pl_batt_obj_93.RLCN
  - Sprite: pl_batt_obj_291.RGCN
  - Cells: pl_batt_obj_290.RECN
  - Animation: pl_batt_obj_289.RNAN
- Thrown Great Ball
  - Palettes: pl_batt_obj_94.RLCN
  - Sprite: pl_batt_obj_294.RGCN
  - Cells: pl_batt_obj_293.RECN
  - Animation: pl_batt_obj_292.RNAN
- Thrown Safari Ball
  - Palettes: pl_batt_obj_95.RLCN
  - Sprite: pl_batt_obj_297.RGCN
  - Cells: pl_batt_obj_296.RECN
  - Animation: pl_batt_obj_295.RNAN
- Thrown Net Ball
  - Palettes: pl_batt_obj_96.RLCN
  - Sprite: pl_batt_obj_300.RGCN
  - Cells: pl_batt_obj_299.RECN
  - Animation: pl_batt_obj_298.RNAN
- Thrown Dive Ball
  - Palettes: pl_batt_obj_97.RLCN
  - Sprite: pl_batt_obj_303.RGCN
  - Cells: pl_batt_obj_302.RECN
  - Animation: pl_batt_obj_301.RNAN
- Thrown Nest Ball
  - Palettes: pl_batt_obj_98.RLCN
  - Sprite: pl_batt_obj_306.RGCN
  - Cells: pl_batt_obj_305.RECN
  - Animation: pl_batt_obj_304.RNAN
- Thrown Repeat Ball
  - Palettes: pl_batt_obj_99.RLCN
  - Sprite: pl_batt_obj_309.RGCN
  - Cells: pl_batt_obj_308.RECN
  - Animation: pl_batt_obj_307.RNAN
- Thrown Timer Ball
  - Palettes: pl_batt_obj_100.RLCN
  - Sprite: pl_batt_obj_312.RGCN
  - Cells: pl_batt_obj_311.RECN
  - Animation: pl_batt_obj_310.RNAN
- Thrown Luxury Ball
  - Palettes: pl_batt_obj_101.RLCN
  - Sprite: pl_batt_obj_315.RGCN
  - Cells: pl_batt_obj_314.RECN
  - Animation: pl_batt_obj_313.RNAN
- Thrown Premier Ball
  - Palettes: pl_batt_obj_102.RLCN
  - Sprite: pl_batt_obj_318.RGCN
  - Cells: pl_batt_obj_317.RECN
  - Animation: pl_batt_obj_316.RNAN
- Thrown Quick Ball
  - Palettes: pl_batt_obj_103.RLCN
  - Sprite: pl_batt_obj_321.RGCN
  - Cells: pl_batt_obj_320.RECN
  - Animation: pl_batt_obj_319.RNAN
- Thrown Dusk Ball
  - Palettes: pl_batt_obj_104.RLCN
  - Sprite: pl_batt_obj_324.RGCN
  - Cells: pl_batt_obj_323.RECN
  - Animation: pl_batt_obj_322.RNAN
- Thrown Heal Ball
  - Palettes: pl_batt_obj_105.RLCN
  - Sprite: pl_batt_obj_327.RGCN
  - Cells: pl_batt_obj_326.RECN
  - Animation: pl_batt_obj_325.RNAN
- Thrown Cherish Ball
  - Palettes: pl_batt_obj_106.RLCN
  - Sprite: pl_batt_obj_330.RGCN
  - Cells: pl_batt_obj_329.RECN
  - Animation: pl_batt_obj_328.RNAN
- Thrown Park Ball
  - Palettes: pl_batt_obj_107.RLCN
  - Sprite: pl_batt_obj_333.RGCN
  - Cells: pl_batt_obj_332.RECN
  - Animation: pl_batt_obj_331.RNAN
- Thrown Bait
  - Palettes: pl_batt_obj_108.RLCN
  - Sprite: pl_batt_obj_336.RGCN
  - Cells: pl_batt_obj_335.RECN
  - Animation: pl_batt_obj_334.RNAN
- Thrown Mud
  - Palettes: pl_batt_obj_109.RLCN
  - Sprite: pl_batt_obj_339.RGCN
  - Cells: pl_batt_obj_338.RECN
  - Animation: pl_batt_obj_337.RNAN
- Party gauge at battle start
  - Palettes: pl_batt_obj_110.RLCN
  - Sprite: pl_batt_obj_340.RGCN
  - Cells: pl_batt_obj_341.RECN
  - Animation: pl_batt_obj_342.RNAN
- Large Pokémon slot
  - Palettes: pl_batt_obj_111.RLCN
  - Sprite: pl_batt_obj_112.RGCN
  - Cells: pl_batt_obj_113.RECN
  - Animation: pl_batt_obj_114.RNAN
- Unused spare HP bar
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_117.RGCN
  - Cells: pl_batt_obj_116.RECN
  - Animation: pl_batt_obj_115.RNAN
- Unused spare HP bar
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_120.RGCN
  - Cells: pl_batt_obj_119.RECN
  - Animation: pl_batt_obj_118.RNAN
- Unused spare name box
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_121.RGCN
  - Cells: pl_batt_obj_122.RECN
  - Animation: pl_batt_obj_123.RNAN
- Unused spare name box
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_124.RGCN
  - Cells: pl_batt_obj_125.RECN
  - Animation: pl_batt_obj_126.RNAN
- Lawn platform (player side)
  - Palettes: pl_batt_obj_1.RLCN (day), pl_batt_obj_2.RLCN (evening), pl_batt_obj_3.RLCN (night)
  - Sprite: pl_batt_obj_127.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Lawn platform (opponent side)
  - Palettes: pl_batt_obj_1.RLCN (day), pl_batt_obj_2.RLCN (evening), pl_batt_obj_3.RLCN (night)
  - Sprite: pl_batt_obj_130.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Water platform (player side)
  - Palettes: pl_batt_obj_4.RLCN (day), pl_batt_obj_5.RLCN (evening), pl_batt_obj_6.RLCN (night)
  - Sprite: pl_batt_obj_133.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Water platform (opponent side)
  - Palettes: pl_batt_obj_4.RLCN (day), pl_batt_obj_5.RLCN (evening), pl_batt_obj_6.RLCN (night)
  - Sprite: pl_batt_obj_134.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Gravel platform (player side)
  - Palettes: pl_batt_obj_7.RLCN (day), pl_batt_obj_8.RLCN (evening), pl_batt_obj_9.RLCN (night)
  - Sprite: pl_batt_obj_135.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Gravel platform (opponent side)
  - Palettes: pl_batt_obj_7.RLCN (day), pl_batt_obj_8.RLCN (evening), pl_batt_obj_9.RLCN (night)
  - Sprite: pl_batt_obj_136.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Ice platform (player side)
  - Palettes: pl_batt_obj_10.RLCN (day), pl_batt_obj_11.RLCN (evening), pl_batt_obj_12.RLCN (night)
  - Sprite: pl_batt_obj_137.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Ice platform (opponent side)
  - Palettes: pl_batt_obj_10.RLCN (day), pl_batt_obj_11.RLCN (evening), pl_batt_obj_12.RLCN (night)
  - Sprite: pl_batt_obj_138.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Rock platform (player side)
  - Palettes: pl_batt_obj_13.RLCN (day), pl_batt_obj_14.RLCN (evening), pl_batt_obj_15.RLCN (night)
  - Sprite: pl_batt_obj_139.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Rock platform (opponent side)
  - Palettes: pl_batt_obj_13.RLCN (day), pl_batt_obj_14.RLCN (evening), pl_batt_obj_15.RLCN (night)
  - Sprite: pl_batt_obj_140.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Snow platform (player side)
  - Palettes: pl_batt_obj_16.RLCN (day), pl_batt_obj_17.RLCN (evening), pl_batt_obj_18.RLCN (night)
  - Sprite: pl_batt_obj_141.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Snow platform (opponent side)
  - Palettes: pl_batt_obj_16.RLCN (day), pl_batt_obj_17.RLCN (evening), pl_batt_obj_18.RLCN (night)
  - Sprite: pl_batt_obj_142.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Floor platform (player side)
  - Palettes: pl_batt_obj_19.RLCN (day), pl_batt_obj_20.RLCN (evening), pl_batt_obj_21.RLCN (night)
  - Sprite: pl_batt_obj_143.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Floor platform (opponent side)
  - Palettes: pl_batt_obj_19.RLCN (day), pl_batt_obj_20.RLCN (evening), pl_batt_obj_21.RLCN (night)
  - Sprite: pl_batt_obj_144.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Sand platform (player side)
  - Palettes: pl_batt_obj_22.RLCN (day), pl_batt_obj_23.RLCN (evening), pl_batt_obj_24.RLCN (night)
  - Sprite: pl_batt_obj_145.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Sand platform (opponent side)
  - Palettes: pl_batt_obj_22.RLCN (day), pl_batt_obj_23.RLCN (evening), pl_batt_obj_24.RLCN (night)
  - Sprite: pl_batt_obj_146.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Marsh platform (player side)
  - Palettes: pl_batt_obj_25.RLCN (day), pl_batt_obj_26.RLCN (evening), pl_batt_obj_27.RLCN (night)
  - Sprite: pl_batt_obj_147.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Marsh platform (opponent side)
  - Palettes: pl_batt_obj_25.RLCN (day), pl_batt_obj_26.RLCN (evening), pl_batt_obj_27.RLCN (night)
  - Sprite: pl_batt_obj_148.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Cave platform (player side)
  - Palettes: pl_batt_obj_28.RLCN (day), pl_batt_obj_29.RLCN (evening), pl_batt_obj_30.RLCN (night)
  - Sprite: pl_batt_obj_149.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Cave platform (opponent side)
  - Palettes: pl_batt_obj_28.RLCN (day), pl_batt_obj_29.RLCN (evening), pl_batt_obj_30.RLCN (night)
  - Sprite: pl_batt_obj_150.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Pool platform (player side)
  - Palettes: pl_batt_obj_31.RLCN (day), pl_batt_obj_32.RLCN (evening), pl_batt_obj_33.RLCN (night)
  - Sprite: pl_batt_obj_151.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Pool platform (opponent side)
  - Palettes: pl_batt_obj_31.RLCN (day), pl_batt_obj_32.RLCN (evening), pl_batt_obj_33.RLCN (night)
  - Sprite: pl_batt_obj_152.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Aaron platform (player side)
  - Palettes: pl_batt_obj_34.RLCN (day), pl_batt_obj_35.RLCN (evening), pl_batt_obj_36.RLCN (night)
  - Sprite: pl_batt_obj_153.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Aaron platform (opponent side)
  - Palettes: pl_batt_obj_34.RLCN (day), pl_batt_obj_35.RLCN (evening), pl_batt_obj_36.RLCN (night)
  - Sprite: pl_batt_obj_154.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Bertha platform (player side)
  - Palettes: pl_batt_obj_37.RLCN (day), pl_batt_obj_38.RLCN (evening), pl_batt_obj_39.RLCN (night)
  - Sprite: pl_batt_obj_155.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Bertha platform (opponent side)
  - Palettes: pl_batt_obj_37.RLCN (day), pl_batt_obj_38.RLCN (evening), pl_batt_obj_39.RLCN (night)
  - Sprite: pl_batt_obj_156.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Flint platform (player side)
  - Palettes: pl_batt_obj_40.RLCN (day), pl_batt_obj_41.RLCN (evening), pl_batt_obj_42.RLCN (night)
  - Sprite: pl_batt_obj_157.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Flint platform (opponent side)
  - Palettes: pl_batt_obj_40.RLCN (day), pl_batt_obj_41.RLCN (evening), pl_batt_obj_42.RLCN (night)
  - Sprite: pl_batt_obj_158.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Lucian platform (player side)
  - Palettes: pl_batt_obj_43.RLCN (day), pl_batt_obj_44.RLCN (evening), pl_batt_obj_45.RLCN (night)
  - Sprite: pl_batt_obj_159.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Lucian platform (opponent side)
  - Palettes: pl_batt_obj_43.RLCN (day), pl_batt_obj_44.RLCN (evening), pl_batt_obj_45.RLCN (night)
  - Sprite: pl_batt_obj_160.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Cynthia platform (player side)
  - Palettes: pl_batt_obj_46.RLCN (day), pl_batt_obj_47.RLCN (evening), pl_batt_obj_48.RLCN (night)
  - Sprite: pl_batt_obj_161.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Cynthia platform (opponent side)
  - Palettes: pl_batt_obj_46.RLCN (day), pl_batt_obj_47.RLCN (evening), pl_batt_obj_48.RLCN (night)
  - Sprite: pl_batt_obj_162.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Distortion World platform (player side)
  - Palettes: pl_batt_obj_49.RLCN (day), pl_batt_obj_50.RLCN (evening), pl_batt_obj_51.RLCN (night)
  - Sprite: pl_batt_obj_163.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Distortion World platform (opponent side)
  - Palettes: pl_batt_obj_49.RLCN (day), pl_batt_obj_50.RLCN (evening), pl_batt_obj_51.RLCN (night)
  - Sprite: pl_batt_obj_164.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Battle Tower platform (player side)
  - Palettes: pl_batt_obj_52.RLCN (day), pl_batt_obj_53.RLCN (evening), pl_batt_obj_54.RLCN (night)
  - Sprite: pl_batt_obj_165.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Battle Tower platform (opponent side)
  - Palettes: pl_batt_obj_52.RLCN (day), pl_batt_obj_53.RLCN (evening), pl_batt_obj_54.RLCN (night)
  - Sprite: pl_batt_obj_166.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Battle Factory platform (player side)
  - Palettes: pl_batt_obj_55.RLCN (day), pl_batt_obj_56.RLCN (evening), pl_batt_obj_57.RLCN (night)
  - Sprite: pl_batt_obj_167.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Battle Factory platform (opponent side)
  - Palettes: pl_batt_obj_55.RLCN (day), pl_batt_obj_56.RLCN (evening), pl_batt_obj_57.RLCN (night)
  - Sprite: pl_batt_obj_168.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Battle Arcade platform (player side)
  - Palettes: pl_batt_obj_58.RLCN (day), pl_batt_obj_59.RLCN (evening), pl_batt_obj_60.RLCN (night)
  - Sprite: pl_batt_obj_169.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Battle Arcade platform (opponent side)
  - Palettes: pl_batt_obj_58.RLCN (day), pl_batt_obj_59.RLCN (evening), pl_batt_obj_60.RLCN (night)
  - Sprite: pl_batt_obj_170.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Battle Castle platform (player side)
  - Palettes: pl_batt_obj_61.RLCN (day), pl_batt_obj_62.RLCN (evening), pl_batt_obj_63.RLCN (night)
  - Sprite: pl_batt_obj_171.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Battle Castle platform (opponent side)
  - Palettes: pl_batt_obj_61.RLCN (day), pl_batt_obj_62.RLCN (evening), pl_batt_obj_63.RLCN (night)
  - Sprite: pl_batt_obj_172.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Battle Hall platform (player side)
  - Palettes: pl_batt_obj_64.RLCN (day), pl_batt_obj_65.RLCN (evening), pl_batt_obj_66.RLCN (night)
  - Sprite: pl_batt_obj_173.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Battle Hall platform (opponent side)
  - Palettes: pl_batt_obj_64.RLCN (day), pl_batt_obj_65.RLCN (evening), pl_batt_obj_66.RLCN (night)
  - Sprite: pl_batt_obj_174.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Giratina platform (player side)
  - Palettes: pl_batt_obj_67.RLCN (day), pl_batt_obj_68.RLCN (evening), pl_batt_obj_69.RLCN (night)
  - Sprite: pl_batt_obj_175.RGCN
  - Cells: pl_batt_obj_128.RECN
  - Animation: pl_batt_obj_129.RNAN
- Giratina platform (opponent side)
  - Palettes: pl_batt_obj_67.RLCN (day), pl_batt_obj_68.RLCN (evening), pl_batt_obj_69.RLCN (night)
  - Sprite: pl_batt_obj_176.RGCN
  - Cells: pl_batt_obj_131.RECN
  - Animation: pl_batt_obj_132.RNAN
- Blank piece
  - Sprite: pl_batt_obj_179.RGCN
  - Cells: pl_batt_obj_178.RECN
  - Animation: pl_batt_obj_177.RNAN
- Pointing arrow 1
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_182.RGCN
  - Cells: pl_batt_obj_181.RECN
  - Animation: pl_batt_obj_180.RNAN
- Pointing arrow 2
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_185.RGCN
  - Cells: pl_batt_obj_184.RECN
  - Animation: pl_batt_obj_183.RNAN
- Opponent HP bar
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_188.RGCN
  - Cells: pl_batt_obj_187.RECN
  - Animation: pl_batt_obj_186.RNAN
- Player HP bar
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_191.RGCN
  - Cells: pl_batt_obj_190.RECN
  - Animation: pl_batt_obj_189.RNAN
- Opponent HP bar (double battle)
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_194.RGCN
  - Cells: pl_batt_obj_193.RECN
  - Animation: pl_batt_obj_192.RNAN
- Opponent partner HP bar (double battle)
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_197.RGCN
  - Cells: pl_batt_obj_196.RECN
  - Animation: pl_batt_obj_195.RNAN
- Player HP bar (double battle)
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_200.RGCN
  - Cells: pl_batt_obj_199.RECN
  - Animation: pl_batt_obj_198.RNAN
- Player partner HP bar (double battle)
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_203.RGCN
  - Cells: pl_batt_obj_202.RECN
  - Animation: pl_batt_obj_201.RNAN
- Opponent party balls
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_205.RGCN
  - Cells: pl_batt_obj_204.RECN
  - Animation: pl_batt_obj_206.RNAN
- Player party balls
  - Palettes: pl_batt_obj_71.RLCN
  - Sprite: pl_batt_obj_208.RGCN
  - Cells: pl_batt_obj_207.RECN
  - Animation: pl_batt_obj_209.RNAN
- Message frame 1
  - Palettes: pl_batt_obj_72.RLCN
  - Sprite: pl_batt_obj_211.RGCN
  - Cells: pl_batt_obj_210.RECN
  - Animation: pl_batt_obj_212.RNAN
- Message frame 2
  - Palettes: pl_batt_obj_72.RLCN
  - Sprite: pl_batt_obj_214.RGCN
  - Cells: pl_batt_obj_213.RECN
  - Animation: pl_batt_obj_215.RNAN
- Message frame 3
  - Palettes: pl_batt_obj_72.RLCN
  - Sprite: pl_batt_obj_217.RGCN
  - Cells: pl_batt_obj_216.RECN
  - Animation: pl_batt_obj_218.RNAN
- Beauty contest icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_219.RGCN
- Cute contest icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_220.RGCN
- Dragon type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_221.RGCN
- Electric type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_222.RGCN
- Psychic type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_223.RGCN
- Dark type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_224.RGCN
- Fighting type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_225.RGCN
- Fire type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_226.RGCN
- Flying type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_227.RGCN
- Ghost type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_228.RGCN
- Ground type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_229.RGCN
- Ice type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_230.RGCN
- Bug type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_231.RGCN
- Smart contest icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_232.RGCN
- Grass type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_233.RGCN
- Normal type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_234.RGCN
  - Cells: pl_batt_obj_242.RECN
  - Animation: pl_batt_obj_243.RNAN
- Poison type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_235.RGCN
- ??? type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_236.RGCN
- Rock type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_237.RGCN
- Steel type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_238.RGCN
- Tough contest icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_239.RGCN
- Cool contest icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_240.RGCN
- Water type icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_241.RGCN
- Physical move icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_244.RGCN
- Status move icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_245.RGCN
- Special move icon
  - Palettes: pl_batt_obj_74.RLCN
  - Sprite: pl_batt_obj_246.RGCN
- Safari counter
  - Palettes: pl_batt_obj_81.RLCN
  - Sprite: pl_batt_obj_253.RGCN
  - Cells: pl_batt_obj_254.RECN
  - Animation: pl_batt_obj_255.RNAN

</details>

### Battle Backgrounds
**Location**: `battle/graphic/pl_batt_bg`

<details>
<summary>Click to view details</summary>

- Plain background
  - Palettes: pl_batt_bg_172.RLCN (day), pl_batt_bg_173.RLCN (evening), pl_batt_bg_174.RLCN (night)
  - Sprite: pl_batt_bg_3.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Water background
  - Palettes: pl_batt_bg_175.RLCN (day), pl_batt_bg_176.RLCN (evening), pl_batt_bg_177.RLCN (night)
  - Sprite: pl_batt_bg_4.RGCN
  - Screen: pl_batt_bg_2.RCSN
- City background
  - Palettes: pl_batt_bg_178.RLCN (day), pl_batt_bg_179.RLCN (evening), pl_batt_bg_180.RLCN (night)
  - Sprite: pl_batt_bg_5.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Forest background
  - Palettes: pl_batt_bg_181.RLCN (day), pl_batt_bg_182.RLCN (evening), pl_batt_bg_183.RLCN (night)
  - Sprite: pl_batt_bg_6.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Mountain background
  - Palettes: pl_batt_bg_184.RLCN (day), pl_batt_bg_185.RLCN (evening), pl_batt_bg_186.RLCN (night)
  - Sprite: pl_batt_bg_7.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Snow background
  - Palettes: pl_batt_bg_187.RLCN (day), pl_batt_bg_188.RLCN (evening), pl_batt_bg_189.RLCN (night)
  - Sprite: pl_batt_bg_8.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Indoors 1 background
  - Palettes: pl_batt_bg_190.RLCN (day), pl_batt_bg_191.RLCN (evening), pl_batt_bg_192.RLCN (night)
  - Sprite: pl_batt_bg_9.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Indoors 2 background
  - Palettes: pl_batt_bg_193.RLCN (day), pl_batt_bg_194.RLCN (evening), pl_batt_bg_195.RLCN (night)
  - Sprite: pl_batt_bg_10.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Indoors 3 background
  - Palettes: pl_batt_bg_196.RLCN (day), pl_batt_bg_197.RLCN (evening), pl_batt_bg_198.RLCN (night)
  - Sprite: pl_batt_bg_11.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Cave 1 background
  - Palettes: pl_batt_bg_199.RLCN (day), pl_batt_bg_200.RLCN (evening), pl_batt_bg_201.RLCN (night)
  - Sprite: pl_batt_bg_12.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Cave 2 background
  - Palettes: pl_batt_bg_202.RLCN (day), pl_batt_bg_203.RLCN (evening), pl_batt_bg_204.RLCN (night)
  - Sprite: pl_batt_bg_13.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Cave 3 background
  - Palettes: pl_batt_bg_205.RLCN (day), pl_batt_bg_206.RLCN (evening), pl_batt_bg_207.RLCN (night)
  - Sprite: pl_batt_bg_14.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Aaron background
  - Palettes: pl_batt_bg_208.RLCN (day), pl_batt_bg_209.RLCN (evening), pl_batt_bg_210.RLCN (night)
  - Sprite: pl_batt_bg_15.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Bertha background
  - Palettes: pl_batt_bg_211.RLCN (day), pl_batt_bg_212.RLCN (evening), pl_batt_bg_213.RLCN (night)
  - Sprite: pl_batt_bg_16.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Flint background
  - Palettes: pl_batt_bg_214.RLCN (day), pl_batt_bg_215.RLCN (evening), pl_batt_bg_216.RLCN (night)
  - Sprite: pl_batt_bg_17.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Lucian background
  - Palettes: pl_batt_bg_217.RLCN (day), pl_batt_bg_218.RLCN (evening), pl_batt_bg_219.RLCN (night)
  - Sprite: pl_batt_bg_18.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Cynthia background
  - Palettes: pl_batt_bg_220.RLCN (day), pl_batt_bg_221.RLCN (evening), pl_batt_bg_222.RLCN (night)
  - Sprite: pl_batt_bg_19.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Distortion World background
  - Palettes: pl_batt_bg_223.RLCN (day), pl_batt_bg_224.RLCN (evening), pl_batt_bg_225.RLCN (night)
  - Sprite: pl_batt_bg_20.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Battle Tower background
  - Palettes: pl_batt_bg_226.RLCN (day), pl_batt_bg_227.RLCN (evening), pl_batt_bg_228.RLCN (night)
  - Sprite: pl_batt_bg_21.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Battle Factory background
  - Palettes: pl_batt_bg_229.RLCN (day), pl_batt_bg_230.RLCN (evening), pl_batt_bg_231.RLCN (night)
  - Sprite: pl_batt_bg_22.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Battle Arcade background
  - Palettes: pl_batt_bg_232.RLCN (day), pl_batt_bg_233.RLCN (evening), pl_batt_bg_234.RLCN (night)
  - Sprite: pl_batt_bg_23.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Battle Castle background
  - Palettes: pl_batt_bg_235.RLCN (day), pl_batt_bg_236.RLCN (evening), pl_batt_bg_237.RLCN (night)
  - Sprite: pl_batt_bg_24.RGCN
  - Screen: pl_batt_bg_2.RCSN
- Battle Hall background
  - Palettes: pl_batt_bg_238.RLCN (day), pl_batt_bg_239.RLCN (evening), pl_batt_bg_240.RLCN (night)
  - Sprite: pl_batt_bg_25.RGCN
  - Screen: pl_batt_bg_2.RCSN

</details>

### Battle Party Menu Graphics
**Location**: `battle/graphic/pl_b_plist_gra`

<details>
<summary>Click to view details</summary>

- Pokémon page, buttons layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_1.RCSN
- Pokémon page, background layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_0.RCSN
- Switch page, buttons layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_19.RCSN
- Switch page, background layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_18.RCSN
- Summary page, buttons layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_5.RCSN
- Summary page, background layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_4.RCSN
- Moves page, buttons layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_3.RCSN
- Moves page, background layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_2.RCSN
- Move info page, buttons layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_7.RCSN
- Move info page, background layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_6.RCSN
- Restore PP page, buttons layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_9.RCSN
- Restore PP page, background layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_8.RCSN
- Forget a move page, buttons layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_11.RCSN
- Forget a move page, background layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_10.RCSN
- Forget the move page, buttons layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_15.RCSN
- Forget the move page, background layer
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_14.RCSN
- Button sheet 1
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_20.RCSN
- Button sheet 2
  - Palettes: pl_b_plist_gra_23.RLCN
  - Sprite: pl_b_plist_gra_22.RGCN
  - Screen: pl_b_plist_gra_21.RCSN

</details>

### Battle Bag Graphics
**Location**: `battle/graphic/b_bag_gra`

<details>
<summary>Click to view details</summary>

- Pockets, Items and Use pages (one quarter each)
  - Palettes: b_bag_gra_3.RLCN
  - Sprite: b_bag_gra_2.RGCN
  - Screen: b_bag_gra_0.RCSN
- Button and pocket icon sheet
  - Palettes: b_bag_gra_3.RLCN
  - Sprite: b_bag_gra_2.RGCN
  - Screen: b_bag_gra_1.RCSN

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

### Start Menu Graphics
**Location**: `graphic/menu_gra`

<details>
<summary>Click to view details</summary>

- Cursor
  - Palettes: menu_gra_5.RLCN
  - Sprite: menu_gra_2.RGCN
  - Cells: menu_gra_1.RECN
- Menu icons
  - Palettes: menu_gra_5.RLCN
  - Sprite: menu_gra_6.RGCN
  - Cells: menu_gra_4.RECN

</details>

### Main Menu Graphics
**Location**: `graphic/mystery`

<details>
<summary>Click to view details</summary>

- Scroll arrows (members 41 to 43)
  - Palettes: mystery_40.RLCN
- Wireless icons
  - Palettes: mystery_45.RLCN
  - Sprite: mystery_44.RGCN

</details>

### Party Menu Graphics
**Location**: `graphic/pl_plist_gra`

<details>
<summary>Click to view details</summary>

- Top screen menu
  - Palettes: pl_plist_gra_16.RLCN
  - Sprite: pl_plist_gra_15.RGCN
  - Screen: pl_plist_gra_17.RCSN
- Bottom screen Poké Ball pattern
  - Palettes: pl_plist_gra_13.RLCN
  - Sprite: pl_plist_gra_12.RGCN
  - Screen: pl_plist_gra_14.RCSN

</details>

### Summary Screen Graphics
**Location**: `graphic/pl_pst_gra`

<details>
<summary>Click to view details</summary>

- Info page
  - Palettes: pl_pst_gra_1.RLCN
  - Sprite: pl_pst_gra_0.RGCN
  - Screen: pl_pst_gra_3.RCSN
- Trainer memo page
  - Palettes: pl_pst_gra_1.RLCN
  - Sprite: pl_pst_gra_0.RGCN
  - Screen: pl_pst_gra_4.RCSN
- Stats page
  - Palettes: pl_pst_gra_1.RLCN
  - Sprite: pl_pst_gra_0.RGCN
  - Screen: pl_pst_gra_5.RCSN
- Battle moves page
  - Palettes: pl_pst_gra_1.RLCN
  - Sprite: pl_pst_gra_0.RGCN
  - Screen: pl_pst_gra_6.RCSN
- Condition page
  - Palettes: pl_pst_gra_1.RLCN
  - Sprite: pl_pst_gra_0.RGCN
  - Screen: pl_pst_gra_7.RCSN
- Contest moves page
  - Palettes: pl_pst_gra_1.RLCN
  - Sprite: pl_pst_gra_0.RGCN
  - Screen: pl_pst_gra_8.RCSN
- Ribbons page
  - Palettes: pl_pst_gra_1.RLCN
  - Sprite: pl_pst_gra_0.RGCN
  - Screen: pl_pst_gra_9.RCSN
- Exit page
  - Palettes: pl_pst_gra_1.RLCN
  - Sprite: pl_pst_gra_0.RGCN
  - Screen: pl_pst_gra_10.RCSN
- Move details
  - Palettes: pl_pst_gra_1.RLCN
  - Sprite: pl_pst_gra_0.RGCN
  - Screen: pl_pst_gra_11.RCSN
- Battle moves page while choosing a move
  - Palettes: pl_pst_gra_1.RLCN
  - Sprite: pl_pst_gra_0.RGCN
  - Screen: pl_pst_gra_12.RCSN
- Contest moves page while choosing a move
  - Palettes: pl_pst_gra_1.RLCN
  - Sprite: pl_pst_gra_0.RGCN
  - Screen: pl_pst_gra_13.RCSN
- Bottom screen buttons
  - Palettes: pl_pst_gra_14.RLCN
  - Sprite: pl_pst_gra_2.RGCN
- Bottom screen
  - Palettes: pl_pst_gra_14.RLCN
  - Sprite: pl_pst_gra_16.RGCN
  - Screen: pl_pst_gra_15.RCSN
- Condition arrow
  - Sprite: pl_pst_gra_19.RGCN
  - Cells: pl_pst_gra_18.RECN
  - Animation: pl_pst_gra_17.RNAN
- A button
  - Sprite: pl_pst_gra_20.RGCN
- Master Ball
  - Sprite: pl_pst_gra_21.RGCN
- Ultra Ball
  - Sprite: pl_pst_gra_22.RGCN
- Great Ball
  - Sprite: pl_pst_gra_23.RGCN
- Poké Ball
  - Sprite: pl_pst_gra_24.RGCN
- Safari Ball
  - Sprite: pl_pst_gra_25.RGCN
- Net Ball
  - Sprite: pl_pst_gra_26.RGCN
- Dive Ball
  - Sprite: pl_pst_gra_27.RGCN
- Nest Ball
  - Sprite: pl_pst_gra_28.RGCN
- Repeat Ball
  - Sprite: pl_pst_gra_29.RGCN
- Timer Ball
  - Sprite: pl_pst_gra_30.RGCN
- Luxury Ball
  - Sprite: pl_pst_gra_31.RGCN
- Premier Ball
  - Sprite: pl_pst_gra_32.RGCN
- Dusk Ball
  - Sprite: pl_pst_gra_33.RGCN
- Heal Ball
  - Sprite: pl_pst_gra_34.RGCN
- Quick Ball
  - Sprite: pl_pst_gra_35.RGCN
- Cherish Ball
  - Sprite: pl_pst_gra_36.RGCN
- Ball colours 1
  - Palettes: pl_pst_gra_37.RLCN
- Ball colours 2
  - Palettes: pl_pst_gra_38.RLCN
- Ball colours 3
  - Palettes: pl_pst_gra_39.RLCN
- Ball colours 4
  - Palettes: pl_pst_gra_40.RLCN
- Ribbon arrow
  - Sprite: pl_pst_gra_43.RGCN
  - Cells: pl_pst_gra_42.RECN
  - Animation: pl_pst_gra_41.RNAN
- Contest stat dot
  - Sprite: pl_pst_gra_46.RGCN
  - Cells: pl_pst_gra_45.RECN
  - Animation: pl_pst_gra_44.RNAN
- Condition flash
  - Sprite: pl_pst_gra_49.RGCN
  - Cells: pl_pst_gra_48.RECN
  - Animation: pl_pst_gra_47.RNAN
- Markings animation
  - Animation: pl_pst_gra_50.RNAN
- Markings cell layout
  - Cells: pl_pst_gra_51.RECN
- Marking circle
  - Sprite: pl_pst_gra_52.RGCN
- Marking star
  - Sprite: pl_pst_gra_53.RGCN
- Marking diamond
  - Sprite: pl_pst_gra_54.RGCN
- Marking square
  - Sprite: pl_pst_gra_55.RGCN
- Marking triangle
  - Sprite: pl_pst_gra_56.RGCN
- Marking heart
  - Sprite: pl_pst_gra_57.RGCN
- Shiny and cured Pokérus icons
  - Sprite: pl_pst_gra_58.RGCN
- Tab arrow
  - Sprite: pl_pst_gra_61.RGCN
  - Cells: pl_pst_gra_60.RECN
  - Animation: pl_pst_gra_59.RNAN
- Status icons
  - Sprite: pl_pst_gra_64.RGCN
  - Cells: pl_pst_gra_63.RECN
  - Animation: pl_pst_gra_62.RNAN
- Status icon colours
  - Palettes: pl_pst_gra_65.RLCN
- Sheen
  - Sprite: pl_pst_gra_68.RGCN
  - Cells: pl_pst_gra_67.RECN
  - Animation: pl_pst_gra_66.RNAN
- Sprite colours
  - Palettes: pl_pst_gra_69.RLCN
- Ribbons animation
  - Animation: pl_pst_gra_70.RNAN
- Ribbons cell layout
  - Cells: pl_pst_gra_71.RECN
- Hoenn Champion Ribbon
  - Sprite: pl_pst_gra_72.RGCN
- Hoenn Contest Ribbon
  - Sprite: pl_pst_gra_73.RGCN
- Hoenn Super Contest Ribbon
  - Sprite: pl_pst_gra_74.RGCN
- Hoenn Hyper Contest Ribbon
  - Sprite: pl_pst_gra_75.RGCN
- Hoenn Master Contest Ribbon
  - Sprite: pl_pst_gra_76.RGCN
- Hoenn Victory Ribbon
  - Sprite: pl_pst_gra_77.RGCN
- Hoenn Winning Ribbon
  - Sprite: pl_pst_gra_78.RGCN
- Hoenn Artist Ribbon
  - Sprite: pl_pst_gra_79.RGCN
- Hoenn Effort Ribbon
  - Sprite: pl_pst_gra_80.RGCN
- Marine, Land and Sky Ribbons
  - Sprite: pl_pst_gra_81.RGCN
- Country and National Ribbons
  - Sprite: pl_pst_gra_82.RGCN
- Earth and World Ribbons
  - Sprite: pl_pst_gra_83.RGCN
- Unused
  - Sprite: pl_pst_gra_84.RGCN
- Unused
  - Sprite: pl_pst_gra_85.RGCN
- Unused
  - Sprite: pl_pst_gra_86.RGCN
- Unused
  - Sprite: pl_pst_gra_87.RGCN
- Sinnoh Champion Ribbon
  - Sprite: pl_pst_gra_88.RGCN
- Sinnoh Contest Ribbon
  - Sprite: pl_pst_gra_89.RGCN
- Sinnoh Great Contest Ribbon
  - Sprite: pl_pst_gra_90.RGCN
- Sinnoh Ultra Contest Ribbon
  - Sprite: pl_pst_gra_91.RGCN
- Sinnoh Master Contest Ribbon
  - Sprite: pl_pst_gra_92.RGCN
- Ability Ribbon
  - Sprite: pl_pst_gra_93.RGCN
- Great Ability Ribbon
  - Sprite: pl_pst_gra_94.RGCN
- Double Ability Ribbon
  - Sprite: pl_pst_gra_95.RGCN
- Multi Ability Ribbon
  - Sprite: pl_pst_gra_96.RGCN
- Pair Ability Ribbon
  - Sprite: pl_pst_gra_97.RGCN
- World Ability Ribbon
  - Sprite: pl_pst_gra_98.RGCN
- Alert Ribbon
  - Sprite: pl_pst_gra_99.RGCN
- Shock Ribbon
  - Sprite: pl_pst_gra_100.RGCN
- Downcast Ribbon
  - Sprite: pl_pst_gra_101.RGCN
- Careless Ribbon
  - Sprite: pl_pst_gra_102.RGCN
- Relax Ribbon
  - Sprite: pl_pst_gra_103.RGCN
- Snooze Ribbon
  - Sprite: pl_pst_gra_104.RGCN
- Smile Ribbon
  - Sprite: pl_pst_gra_105.RGCN
- Gorgeous Ribbon
  - Sprite: pl_pst_gra_106.RGCN
- Royal Ribbon
  - Sprite: pl_pst_gra_107.RGCN
- Gorgeous Royal Ribbon
  - Sprite: pl_pst_gra_108.RGCN
- Footprint Ribbon
  - Sprite: pl_pst_gra_109.RGCN
- Record Ribbon
  - Sprite: pl_pst_gra_110.RGCN
- History Ribbon
  - Sprite: pl_pst_gra_111.RGCN
- Legend Ribbon
  - Sprite: pl_pst_gra_112.RGCN
- Red Ribbon
  - Sprite: pl_pst_gra_113.RGCN
- Green Ribbon
  - Sprite: pl_pst_gra_114.RGCN
- Blue Ribbon
  - Sprite: pl_pst_gra_115.RGCN
- Festival Ribbon
  - Sprite: pl_pst_gra_116.RGCN
- Carnival Ribbon
  - Sprite: pl_pst_gra_117.RGCN
- Classic Ribbon
  - Sprite: pl_pst_gra_118.RGCN
- Premier Ribbon
  - Sprite: pl_pst_gra_119.RGCN
- Ribbon cursor
  - Sprite: pl_pst_gra_120.RGCN
  - Cells: pl_pst_gra_125.RECN
  - Animation: pl_pst_gra_126.RNAN
- Unused
  - Sprite: pl_pst_gra_121.RGCN
- Ribbon flash
  - Sprite: pl_pst_gra_124.RGCN
  - Cells: pl_pst_gra_123.RECN
  - Animation: pl_pst_gra_122.RNAN
- Tabs
  - Sprite: pl_pst_gra_129.RGCN
  - Cells: pl_pst_gra_128.RECN
  - Animation: pl_pst_gra_127.RNAN
- Move cursor
  - Sprite: pl_pst_gra_132.RGCN
  - Cells: pl_pst_gra_131.RECN
  - Animation: pl_pst_gra_130.RNAN
- Pokérus icon
  - Sprite: pl_pst_gra_135.RGCN
  - Cells: pl_pst_gra_134.RECN
  - Animation: pl_pst_gra_133.RNAN
- Ribbon colours
  - Palettes: pl_pst_gra_136.RLCN

</details>

### Options Graphics
**Location**: `graphic/config_gra`

<details>
<summary>Click to view details</summary>

- Background and cursor bar
  - Palettes: config_gra_0.RLCN
  - Sprite: config_gra_1.RGCN
  - Screen: config_gra_2.RCSN

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

### Shop Graphics
**Location**: `graphic/shop_gra`

<details>
<summary>Click to view details</summary>

- Item count arrows
  - Palettes: shop_gra_10.RLCN
  - Sprite: shop_gra_4.RGCN
  - Cells: shop_gra_5.RECN
  - Animation: shop_gra_6.RNAN

</details>

### Place Name Banner Graphics
**Location**: `arc/area_win_gra`

<details>
<summary>Click to view details</summary>

- City banner
  - Palettes: area_win_gra_1.RLCN
  - Sprite: area_win_gra_0.RGCN
- Town banner
  - Palettes: area_win_gra_3.RLCN
  - Sprite: area_win_gra_2.RGCN
- Route banner
  - Palettes: area_win_gra_5.RLCN
  - Sprite: area_win_gra_4.RGCN
- Cave banner
  - Palettes: area_win_gra_7.RLCN
  - Sprite: area_win_gra_6.RGCN
- Forest banner
  - Palettes: area_win_gra_9.RLCN
  - Sprite: area_win_gra_8.RGCN
- Water banner
  - Palettes: area_win_gra_11.RLCN
  - Sprite: area_win_gra_10.RGCN
- Park banner
  - Palettes: area_win_gra_13.RLCN
  - Sprite: area_win_gra_12.RGCN
- Lake banner
  - Palettes: area_win_gra_15.RLCN
  - Sprite: area_win_gra_14.RGCN
- Indoors banner
  - Palettes: area_win_gra_17.RLCN
  - Sprite: area_win_gra_16.RGCN

</details>

### Pokemon Icons
**Location**: `poketool/icongra/pl_poke_icon`

### Item Icons
**Location**: `itemtool/itemdata/item_icon`

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
**Location**: `graphic/pl_bag_gra`

<details>
<summary>Click to view details</summary>

- Boy's bag
  - Palettes: pl_bag_gra_3.RLCN
  - Sprite: pl_bag_gra_2.RGCN
  - Cells: pl_bag_gra_1.RECN
  - Animation: pl_bag_gra_0.RNAN
- Girl's bag
  - Palettes: pl_bag_gra_7.RLCN
  - Sprite: pl_bag_gra_6.RGCN
  - Cells: pl_bag_gra_1.RECN
  - Animation: pl_bag_gra_0.RNAN
- Animations for the girl's bag
  - Animation: pl_bag_gra_4.RNAN
- Cells for the girl's bag
  - Cells: pl_bag_gra_5.RECN
- Pocket arrows
  - Palettes: pl_bag_gra_20.RLCN
  - Sprite: pl_bag_gra_10.RGCN
  - Cells: pl_bag_gra_9.RECN
  - Animation: pl_bag_gra_8.RNAN
- Item list border
  - Palettes: pl_bag_gra_12.RLCN
  - Sprite: pl_bag_gra_11.RGCN
  - Screen: pl_bag_gra_13.RCSN
- Top screen background
  - Palettes: pl_bag_gra_12.RLCN
  - Sprite: pl_bag_gra_11.RGCN
  - Screen: pl_bag_gra_14.RCSN
- Item list entry icons
  - Palettes: pl_bag_gra_12.RLCN
  - Sprite: pl_bag_gra_38.RGCN
- Poké Ball border on the bottom screen
  - Palettes: pl_bag_gra_16.RLCN
  - Sprite: pl_bag_gra_15.RGCN
  - Screen: pl_bag_gra_17.RCSN
- Inside of the Poké Ball dial
  - Palettes: pl_bag_gra_16.RLCN
  - Sprite: pl_bag_gra_32.RGCN
  - Screen: pl_bag_gra_33.RCSN
- Bottom screen button tiles
  - Palettes: pl_bag_gra_18.RLCN
  - Sprite: pl_bag_gra_19.RGCN
- Pocket highlight
  - Palettes: pl_bag_gra_20.RLCN
  - Sprite: pl_bag_gra_25.RGCN
  - Cells: pl_bag_gra_24.RECN
  - Animation: pl_bag_gra_23.RNAN
- Item list highlight
  - Palettes: pl_bag_gra_20.RLCN
  - Sprite: pl_bag_gra_28.RGCN
  - Cells: pl_bag_gra_27.RECN
  - Animation: pl_bag_gra_26.RNAN
- Bar shown while moving an item
  - Palettes: pl_bag_gra_20.RLCN
  - Sprite: pl_bag_gra_31.RGCN
  - Cells: pl_bag_gra_30.RECN
  - Animation: pl_bag_gra_29.RNAN
- Pocket icons
  - Palettes: pl_bag_gra_22.RLCN
  - Sprite: pl_bag_gra_21.RGCN
- Button press ripple
  - Palettes: pl_bag_gra_37.RLCN
  - Sprite: pl_bag_gra_36.RGCN
  - Cells: pl_bag_gra_35.RECN
  - Animation: pl_bag_gra_34.RNAN

</details>

### Pokemon Box Storage System Graphics
**Location**: `graphic/box`

<details>
<summary>Click to view details</summary>

- Box list, bottom screen layer 3
  - Palettes: box_128.RLCN
  - Sprite: box_127.RGCN
  - Screen: box_124.RCSN
- Box list, bottom screen layer 2
  - Palettes: box_128.RLCN
  - Sprite: box_127.RGCN
  - Screen: box_125.RCSN
- Box list, bottom screen layer 1
  - Palettes: box_128.RLCN
  - Sprite: box_127.RGCN
  - Screen: box_126.RCSN
- Compare: battle stats
  - Palettes: box_133.RLCN
  - Sprite: box_132.RGCN
  - Screen: box_129.RCSN
- Compare: contest stats
  - Palettes: box_133.RLCN
  - Sprite: box_132.RGCN
  - Screen: box_130.RCSN
- Compare: moves
  - Palettes: box_133.RLCN
  - Sprite: box_132.RGCN
  - Screen: box_131.RCSN

</details>

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

### Starter Selection Graphics
**Location**: `graphic/ev_pokeselect`

<details>
<summary>Click to view details</summary>

- Catching tutorial hand
  - Palettes: ev_pokeselect_11.RLCN
  - Sprite: ev_pokeselect_10.RGCN
  - Cells: ev_pokeselect_12.RECN
  - Animation: ev_pokeselect_13.RNAN

</details>

### Pokemon Footprints
**Location**: `poketool/pokefoot/pokefoot`

<details>
<summary>Click to view details</summary>

- Shared colours, cells and animation
  - Palettes: pokefoot_0.RLCN
  - Cells: pokefoot_2.RECN
  - Animation: pokefoot_1.RNAN
- Bulbasaur footprint (species 1)
  - Palettes: pokefoot_0.RLCN
  - Sprite: pokefoot_4.RGCN
  - Cells: pokefoot_2.RECN
  - Animation: pokefoot_1.RNAN
- Arceus footprint (species 493)
  - Palettes: pokefoot_0.RLCN
  - Sprite: pokefoot_496.RGCN
  - Cells: pokefoot_2.RECN
  - Animation: pokefoot_1.RNAN

*Footprints run in species order from member 3: species N uses pokefoot_(N + 3).RGCN.*

</details>

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
**Location**: `poketool/trgra/trfgra`

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
