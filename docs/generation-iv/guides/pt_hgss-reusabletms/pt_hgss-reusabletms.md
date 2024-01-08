---
title: Enabling Reusable TMs
tags:
  - Guide (Platinum)
  - Guide (HeartGold)
  - Guide (SoulSilver)
---

# Enabling Reusable TMs

> Author(s): Drayano (original), SpagoAsparago (reformatting). <br />
> Research: Mikelan98, NextWorld, BagBoy.
Mikelan98 has requested that you give credit to him if you implement this in your hack.

This is a guide on how to implement reusable TMs in Platinum and HGSS. The US versions of those games are used, so offsets may be not be the same if you're using a different version.

The tools required are an hex editor and Tinke 0.9.2, or instead CrystalTile2 if you're using HGSS.

--- 
## Table of Contents
* [Extracting the files](#section)
  * [Platinum](#subsection-1)
  * [HGSS](#subsection-2)
* [Hex Editing](#section-2)
  * [Making TMs infinte](#subsection-1)
  * [Removing the TM item count](#subsection-2)
* [Reinserting the files](#section-3)

## Extracting the files
First you need to extract the relative files in order to perform the hex editing
### Platinum
For Platinum the files you need are *arm9.bin* and *overaly9_84*.

Open your ROM in Tinke, search the file, select it and click the extract button.

### HGSS
For HGSS you need to extract *arm9.bin* and *overlay_0015.bin*, but they are compressed unlike in Platinum hence the need for CystalTile2.
Open CrystalTile2 and then select File>Open and select your ROM. Then click the NDS icon in the top bar, which should open a window called *NDS filesystem information*:

![](resources/tms_ct2screen.PNG)

Select the file you want to export, right click and click *Extract (U)*, and save it somewhere.
You can also use the arm9.bin from your DSPRE project folder, which is already uncompressed.


## Hex Editing

Load the files you extracted in a hex editor, then change the bytes according to the following steps, then save the files.

### Making TMs infinite

* For Platinum, at offset `0x865EB` in the arm9.bin change `D1` to `E0`
* For HGSS, at `0x825A7` in the arm9.bin change `D1` to `E0` 

### Removing the TM item count

* For Platinum, at `0x4372` in overlay 84 change `FF F7 83 FF` to `00 00 00 00`
* For HGSS,  at `0x6239` in overlay 15 change `D3` to `E0`

## Reinserting the files

* For Platinum just open your ROM in Tinke again, search the files you previously extracted, select them and click the *Change File* button to replace them with the ones you hex edited. Then save the ROM.

* For HGSS, in the NDS filesystem information window, you can select the files you previously extracted, right click and this time click *Compression* and select your own hex edited files. If you're using the arm9 from DSPRE project folder, you only need to click *Import* instead. After you're done you can use `File>Build ROM...` to save your ROM.


