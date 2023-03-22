# How to replace Overworld Sprites
> This guide was written by SpagoAsparago. Gen4 OW sprite dimension table thanks to research by Bagboy.

This is a tutorial on how to replace overworld sprites with your own or those extracted from other games.

--- 
## Table of Contents
* [Making your own Sprite](#section)
* [Extracting a Sprite](#section-2)
* [Inserting the Sprite](#section-3)
  * [Unused Sprites](#subsection)
* [Changing the Sprite Dimensions](#section-4)

## Extracting a Sprite
Open your ROM with Tinke, and depending on which game you are editing, navigate the filesystem to the narc:
* mmodel/mmodel.narc for DPPt
* a/0/8/1
* a / 0 / 3 / 1 - Player character (Save + ???)
	a / 0 / 3 / 2 - WiFi NPCs (They all use a common palette, be careful!)
  a / 0 / 4 / 9 - BTX Files
* a / 0 / 3 / 1 - Player character
	a / 0 / 3 / 2 - NPCs (They all use a common palette, be careful!)
  a / 0 / 4 / 8 - BTX Files (8_355 and onward are PKMN sprites.)
Each spritesheet is contained in a BTX file, you can view it by selecting it and clicking the View button in Tinke or pressing the spacebar.
You can extract it by clicking the extract button and saving the resulting .BTX file.
Then you have to open BTX Editor 2.0 and open the btx file you just extracted with it, then click export to save the spritesheet in a editable format.
Now you can open the spritesheet in your graphic editing software of your choice to make edits.

## Making your own Sprite
The sprite you'll want to replace must have the same number of frames, so the png spritesheet will need the same dimension as the original one you extracted.
Remember that 

## Inserting the Sprite
### Unused Sprites
Adding new Overowrld Sprites is fairly complicated and would involve code injection, but luckily there are a number of unused sprites that can be replaced:
![](owsprites_replacement/unusedsprites_gen4.png)

## Changing the Sprite Dimensions
Gen 4 
The sprite dimensions tables are stored in the overlays and need to be hex edited. 
In case of HGSS, the overlay must first be decompressed using blz or CrystalTile2

