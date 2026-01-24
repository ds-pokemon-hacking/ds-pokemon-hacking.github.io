---
title: Implementing Fairy Type (Diamond/Pearl)
tags:
  - Guide (Diamond)
  - Guide (Pearl)
---

# Implementing Fairy Type (Diamond/Pearl)
> Author: Lmaokai <br/>
> Credits: Yako ([Platinum Guide](/docs/generation-iv/guides/pt-type_expansion/)) for which this guide is based one, and previous credits from that guide

This is a guide on how to add the Fairy Type (replacing the Mystery Type) in Diamond and Pearl, based on the [Lite Version](/docs/generation-iv/guides/pt-type_expansion/#lite-version) of Yako's Platinum Guide. I recommend you read through Yako's guide for more context regarding the edits, as this guide is more of a bare-bones version to inform of the equivalent Diamond/Pearl files and offsets.

:::warning
This guide is for the **US version** of Diamond/Pearl.

Implementing the Fairy type requires Arm9 expansion, which is highly experimental for Diamond/Pearl and will not receive as much (if any) support as Platinum.

**Please make a backup of your ROM before following this guide.**
:::


## Tools and Resources
- [DSPRE](https://github.com/DS-Pokemon-Rom-Editor/DSPRE/releases)
- Any Hex Editor
- [Google Drive containing files](https://drive.google.com/file/d/10Ozf26GwUvjnUmsjasIDODuxoTa6RLNk/view?usp=sharing) created by Yako for our convenience:
  - RGCN file containing the summary screen Fairy icon
  - RLCN, RECN, RNAN, and RGCN files containing the Pokédex Fairy icon


## Table of Contents
- [Part 1 - Making space for the new type chart](#part-1---making-space-for-the-new-type-chart)
- [Part 2 - Editing the type chart](#part-2---editing-the-type-chart)
- [Part 3 - Assigning the type to moves and Pokémon](#part-3---assigning-the-type-to-moves-and-pokémon)
- [Part 4 - Changing the summary screen type icon](#part-4---changing-the-summary-screen-type-icon)
- [Part 5 - Changing the battle move selection palette](#part-5---changing-the-battle-move-selection-palette)
- [Part 6 - Changing the Pokédex Type Icon](#part-6---changing-the-pokédex-type-icon)

---

## Part 1 - Making space for the new type chart
**Apply the Arm9 Expansion** <br/>
Make a backup of your ROM. Then use DSPRE's Patch Toolbox to apply the Arm9 expansion to your project.

**Move the move effect subscript table to a new location** <br/>
Open up your `game_DSPRE_contents/overlay/` folder. Find the file named `overlay_0011.bin`, open it in a hex editor, and navigate to offset `0x30F08`. You should see the following bytes:
```
00 00 00 00 12 00 00 00 16 00 00 00 19 00 00 00 ...
```
This is the start of the move effect subscript table, which is 0x244 (580) bytes long, ending with the following bytes:
```
... F9 00 00 00 04 01 00 00 05 01 00 00 76 00 00 00
```
Select and copy this table (`0x30F08` to `0x3114B`).

Open up your `game_DSPRE_contents/unpacked/synthOverlay/` folder. Find the file named `0009` and open it in a hex editor. Navigate to offset `0x1000` and verify that the next 0x244 (580) bytes are all zeros. Paste ("overwrite") the copied move effect subscript table at this location. 

Save this file back to the `game_DSPRE_contents/unpacked/synthOverlay/` folder.


**Changing the pointer for the move effect subscript table to the new location** <br/>
Return to the `overlay_0011.bin` file opened in the hex editor. Navigate to offset `0x1F084`. You should see `C8 E4 25 02`. Change these bytes to `00 90 3C 02`. Save this file back to the `game_DSPRE_contents/overlay/` folder.
<details>
  <summary>For reference, here are the surrounding bytes</summary>
  ```
  FF FF 7F 00 C8 E4 25 02 38 B5 21 49 15
  ```
</details>
Save your project with DSPRE. Get in a battle and test as any moves as possible to make sure the game doesn't crash or produce graphical glitches.

<br/>

## Part 2 - Editing the type chart
**The Gen IV type chart** <br/>
Now we have made space for a new type chart to add the Fairy type interactions. Return to the `overlay_0011.bin` file opened in the hex editor and navigate to offset `0x30DB8`. You should see the following bytes:
```
00 05 05 00 08 05 0A 0A ...
```

**Modern type chart** <br/>
This guide will be using the modern type chart. If you would like to create your own type chart, refer to the [Editing the type chart](/docs/generation-iv/guides/pt-type_expansion/#editing-the-type-chart) section in Yako's guide for more information.

Below is the modern type chart provided by Yako. Since we will be using the Mystery Type to add the Fairy Type, we will use the Mystery Type's ID for Fairy type interactions.

Copy the bytes for the modern type chart and paste it ("overwite") at offset `0x30DB8` of `overlay_0011.bin` and save it back to the `game_DSPRE_contents/overlay/` folder.
<details>
  <summary>Modern Type Chart (Fairy Type replacing Mystery Type)</summary>
  ```
  00 05 05 00 08 05 0A 0A 05 0A 0B 05 0A 0C 14 0A 0F 14 0A 06 14 0A 05 05 0A 10 05 0A 08 14 0B 0A 14 0B 0B 05 0B 0C 05 0B 04 14 0B 05 14 0B 10 05 0D 0B 14 0D 0D 05 0D 0C 05 0D 04 00 0D 02 14 0D 10 05 0C 0A 05 0C 0B 14 0C 0C 05 0C 03 05 0C 04 14 0C 02 05 0C 06 05 0C 05 14 0C 10 05 0C 08 05 0F 0B 05 0F 0C 14 0F 0F 05 0F 04 14 0F 02 14 0F 10 14 0F 08 05 0F 0A 05 01 00 14 01 0F 14 01 03 05 01 02 05 01 0E 05 01 06 05 01 05 14 01 11 14 01 08 14 01 09 05 03 0C 14 03 03 05 03 04 05 03 05 05 03 07 05 03 08 00 03 09 14 04 0A 14 04 0D 14 04 0C 05 04 03 14 04 02 00 04 06 05 04 05 14 04 08 14 02 0D 05 02 0C 14 02 01 14 02 06 14 02 05 05 02 08 05 0E 01 14 0E 03 14 0E 0E 05 0E 11 00 0E 08 05 06 0A 05 06 0C 14 06 01 05 06 03 05 06 02 05 06 0E 14 06 07 05 06 11 14 06 08 05 06 09 05 05 0A 14 05 0F 14 05 01 05 05 04 05 05 02 14 05 06 14 05 08 05 07 00 00 07 0E 14 07 11 05 07 07 14 10 10 14 10 08 05 10 09 00 11 01 05 11 0E 14 11 07 14 11 11 05 11 09 05 08 0A 05 08 0B 05 08 0D 05 08 0F 14 08 05 14 08 08 05 08 09 14 09 10 14 09 01 14 09 11 14 09 03 05 09 08 05 09 0A 05 FE FE 00 00 07 00 01 07 00 FF FF 00
  ```
</details>

<br/>

## Part 3 - Assigning the type to moves and Pokémon
Because we are replacing the Mystery Type (appearing as `???` in DSPRE), that is the type you will need to select to assign the Fairy Type to moves and Pokémon.

If you'd like, you can now test the new type chart. However, we have not updated how the type icons look in-game yet.

:::info
- You can edit `Text Archive 565` to change `???` to `FAIRY`, but this only affects DSPRE. 
- You should change the move **Curse** to a different typing, as it normally has the ??? type.
:::

<br/>

## Part 4 - Changing the summary screen type icon
**Add the RGCN file containing the Fairy icon** <br/>
Open your project in DSPRE and select the **Unpack to Folder** button (*Tools > NARC Utility > Unpack to Folder*). <br/>
Navigate to `game_DSPRE_contents/data/battle/graphic/batt_obj.narc` and unpack it somewhere. This will create a `batt_obj` folder with files `0000` to `0278`.

In the files provided by Yako, there is a `fairy_icon.rgcn` file in the `type_icon` folder. Copy that file, paste it in the unpacked `batt_obj` folder, and rename it `0279`.

Use DSPRE to pack the `batt_obj` folder back into a NARC file and save it to the `game_DSPRE_contents/data/battle/graphic/` folder. 

**Changing the pointer for the icon to the new file** <br/>
Open up your `game_DSPRE_contents` folder, find the `arm9.bin` file and open it in a hex editor. Navigate to offset `0xF8404`. You should see `AC 00 00 00`, which is referencing file 172, the Mystery Type icon, in the `battle_obj.narc`.
<details>
  <summary>For reference, here are the surrounding bytes</summary>
  ```
  AE 00 00 00 AC 00 00 00 A2 00 00 00
  ```
</details>

Change `AC 00 00 00` to `17 01 00 00` to point to the new `0279` file containing the Fairy icon we added to the `battle_obj.narc`.

**Changing the palette used by the icon** <br/>
While still editing the `arm9.bin` in the hexeditor, navigate to offset `0xF8445`. You should see the byte `02`. Change it to `01`.

<details>
  <summary>For reference, here are the following bytes</summary>
  ```
  02 00 01 02 00 01 01 02 00 00 01 01 02 00 00 89 00 8A 00
  ```
</details>

Save the file back to the `game_DSPRE_contents` folder and save your project with DSPRE. You should now see the Fairy Type icon displayed correctly in the Pokémon summary screen.

<details>
  <summary>For informational purposes, these are the Mystery Type palette and icon files</summary>
  - batt_obj_38.RLCN
  - batt_obj_172.bin
</details>

<br/>

## Part 5 - Changing the battle move selection palette
Open up your `game_DSPRE_contents/overlay/` folder. Find the file named `overlay_0008.bin`, open it in a hex editor, and navigate to offset `0x18A40`. You should see the following bytes:
```
CD 75 FF 7F 7A 5A 17 4E B5 45 72 3D 30 31 ED 28 CB 20 FB 66 08 21 00 00 8C 31 B5 56 BB 53 0A 39
```
Replace it with the following bytes:
```
CD 75 FF 7F 7C 66 17 52 18 56 1B 5E 35 41 F2 38 B2 34 DD 6E 08 21 00 00 8C 31 B5 56 BB 53 0A 39
```
Save this file back to the `game_DSPRE_contents/overlay/` folder and save your project in DSPRE. You should now see the updated battle move selection palette for Fairy moves.

<br/>

## Part 6 - Changing the Pokédex Type Icon
Almost done!

**Replacing four files** <br/>
Open your project in DSPRE and select the **Unpack to Folder** button (*Tools > NARC Utility > Unpack to Folder*). <br/>
Navigate to `game_DSPRE_contents/data/resource/eng/zukan/zukan.narc` and unpack it somewhere. This will create a `zukan` folder with files `0000` to `0129`.

In the files provided by Yako, there four files in the `pokedex_icon` folder - `0013.rlcn`, `0088.recn`, `0089.rnan`, `0090.rgcn`. Copy those files and paste them the unpacked `zukan` folder, replacing or deleting the original files and/or removing the file extensions if the other files in the unpacked folder do not have them.

Use DSPRE to pack the `zukan` folder back into a NARC file and save it to the `game_DSPRE_contents/data/resource/eng/zukan/` folder. 

**Modifying the game's code to show the Pokédex icon** <br/>
Open up your `game_DSPRE_contents/overlay/` folder. Find the file named `overlay_0016.bin`, open it in a hex editor, and navigate to offset `0xE15C`. You should see the following bytes:
```
11 28 38 D8 01 18 79 44 ...
```
Replace it with the following bytes:
```
01 30 70 47 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

Navigate to offset `0xE270`, `0x10120`, and `0x18150`, and replace `11 21` with `00 21`. Save this file back to the `game_DSPRE_contents/overlay/` folder.
<details>
  <summary>For reference, here are the surrounding bytes</summary>
  1. `0xE270` - `FC 11 21 F0 60`
  2. `0x10120` - `11 21 30 60`
  3. `0x18150` - `FA 28 68 11 21`
</details>


Save your project with DSPRE and check the Pokédex entry for the Pokémon you changed to the Fairy Type.

---

Congratulations! At this point you should have a fully functional Fairy Type in your game!


Thank you to Yako, the authors of previous Fairy Type implementation guides, researchers of Arm9 expansion, the developers of DSPRE, and those working on Pokémon decomps for making this possible.
