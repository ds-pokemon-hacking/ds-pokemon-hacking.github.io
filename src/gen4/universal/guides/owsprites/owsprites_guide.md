# Overworld Sprite Replacement Guide
> This guide was written by SpagoAsparago. Sprite size research by BagBoy, Following Pokemon sprite by Mikeland and AdAstra. [Known Sprite Locations document](https://docs.google.com/document/d/1_nRfhDEoNFbvYP-yjx4oAWmgGXxvqFBvLwYANFehxUU/edit).

This is a guide on how to extract, replace, change the properties and make your own overworld sprites.
You'll need Tinke 0.9.2 and BTX Editor 2.0 for this.

--- 
## Table of Contents
* [Extracting the Sprite](#section)
* [Making your own Sprite](#section-2)
* [Replacing](#section-3)
  * [Unused Sprites](#subsection)
* [Changing the Sprite Properties](#section-4)
  * [Platinum](#subsection-2)
  * [HGSS](#subsection-3)

## Extracting the Sprite
Overworld sprites are contained in BTX files, start by opening your ROM with Tinke and then navigating to the following filepath depending on your game:
* **DPPt**: mmodel/mmodel.narc
* **HGSS**: a/0/8/1

Once you've navigated to this directory in Tinke, select the narc file and click unpack to see see all the BTX files. 
You can select one and click the "View" button to see the spritesheet. Select the one you want to replace and click Extract, so that you will obtain the BTX file.
You can load this file in the BTX Editor 2.0 to either extract the spritesheet itself in a .png format or import your own spritesheet.

<details>
 <summary>Where to find all Player Character Sprites.</summary>
 <p>
   Diamond and Pearl
   Lucas:
		90 - Walking/Running
		92 - Bike
		155 - Pull out Pokeball
		157 - Water flower
		159 - Surf
164 - Tux
166 - Fishing
363 - Aerobics
365 - Save
367 - Pokecenter

Heroine:
91 - Walking/Running
		93 - Bike
		156 - Pull out Pokeball
		158 - Water flower
		160 - Surf
165 - Dress
167 - Fishing
364 - Aerobics
366 - Save
368 - Pokecenter

  </p>
</details>


## Making your own Sprite
Before proceeding you should be familiar with Sprite Indexing, as all the sprites must have at most 16 color, with the background color being indexed to the first slot of the palette.
See [Sprite Indexing](kingdom-of-ds-hacking.github.io/tree/main/src/universal/guides/sprite_indexing) for more information.

For starters you want to load the png spritesheet you previously extracted in the graphic editing software of your choice, to either make edits to it or use it as a base for your spritesheet. If you're making your own sprite from scratch, remember that all the frames you draw must be in the same position as the ones in the original sprite.
You may want to enable some kind of grid visualization in order to view the proper position of each frame. In Aseprite you can do so by clicking View>Grid>Grid Settings.

Once you're done, you can open the BTX you previously extracted in BTX Editor 2.0 and click import, then import the spritesheet you made, then save the BTX.

## Replacing the Sprite
Replacing the sprite simply consists in just clicking the "Change File" button in Tinke on the BTX file you want to replace, and then select the BTX you either extracted or obtained from BTX Editor. Don't forget to **click the Pack button on the narc file** after you've replaced the BTX. Now you can save the ROM.

Just remember that the sprite you're inserting must have the same size and number of frames as the one you're replacing, otherwise you will have to change its dimension. 

### Unused Sprites
Adding new overworld sprites would require ASM (and forking DSPRE to read the new entries) but luckily there are a number of unused sprites that may be useful to you:

![](unusedsprites.png)

## Changing the Sprite Properties
If you've replaced a sprite with one having a different number of frames or a different size, the sprite will either not display correctly in game or not display at all.
To fix this you can change each sprite properties by Hex Editing. If you haven't already open your ROM in DSPRE so you can easily access the necessary overlay files in the folder created named *YourROMName*_DSPRE_Contents/overlay. 
All the offsets listed are based on the US version of the ROM and it has not been tested on other versions.

### Platinum
Overlay ??? 
There are two tables

### HGSS
Overlay 1
