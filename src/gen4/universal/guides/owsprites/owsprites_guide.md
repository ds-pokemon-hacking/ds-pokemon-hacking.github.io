# Tutorial Name
> This guide was written by SpagoAsparago. Sprite size research by BagBoy, Following Pokemon sprite by Mikeland and AdAstra.
This is a guide on how to extract, replace, change the size and make your own overworld sprites.
You'll need Tinke 0.9.2 and BTX Editor 2.0 for this.

--- 
## Table of Contents
* [Extracting the Sprite](#section)
* [Replacing](#section-2)
 * [Unused Sprites](#subsection)
* [Changing the sprite dimension](#section-3)

## Extracting the Sprite
Sprites are contained in BTX files, start by opening your ROM with Tinke and then navigating to the following filepath depending on your game:
* **DPPt**: mmodel/mmodel.narc
* **HGSS**: a/0/8/1
Once you've navigated to this directory in Tinke, click unpack and you'll see all the BTX files. 
You can select one and click the "View" button to see the spritesheet. Select the one you want to replace and click Extract, so that you will obtain the BTX file.
You can load this file in the BTX Editor 2.0 to either extract the spritesheet itself in a .png format or import your own spritesheet.

1. The sprite you're going to insert must have the same number of frames as the one you're replacing, otherwise you'll have to change its size by hex editing. (See the section in this guide)
2. The spritesheet must be indexed to have no more than 16 color, with the first slot in the palette being the background color. See [Sprite Indexing](kingdom-of-ds-hacking.github.io/tree/main/src/universal/guides/sprite_indexing) for more information.



## Replacing the Sprite

### Unused Sprites
Adding new overworld sprites requires a great deal of ASM, but luckily there are a number of unused sprites that may be useful to you:


## Changing the Sprite Dimension
To change the sprite dimension you're going to need an Hex Editor, I'll use HxD for this purpose. Additionally if you're doing this on HGSS, you'll also need blz to decompress the overlay

