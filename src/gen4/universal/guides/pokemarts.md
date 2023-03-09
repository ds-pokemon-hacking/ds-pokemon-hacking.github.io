# How to add new pokemarts in gen 4 games
> This guide was written by SpagoAsparago.

This is a guide on how to add and display new pokemarts in Platinum and HGSS
All offsets are based on the US version of the ROMs.

--- 
## Table of Contents
* [Adding a new pokemart](#section)
  * [Editing Item prices](#subsection)
* [Displaying the pokemart](#section-2)

## Adding a new pokemart

If you haven't already, you'll have to perform the ARM9 expansion since that's were the new pokemart(s) will be written to. 
You can do so by using DSPRE's toolbox. Save your ROM, then use Tinke to extract the synthetic overlay (weather_sys_9.bin in weather_sys.narc for Platinum, and 8_0.bin in a/0/2/8 for HGSS) and open it with your hex editor of choice.
Pokemarts are loaded in the RAM as a list of bytes of the items index numbers, with `FF FF` at the end of each mart, each item taking two bytes.
Refer to [Bulbapedia's list of items by index number](https://bulbapedia.bulbagarden.net/wiki/List_of_items_by_index_number_(Generation_IV)). 
Note that the bytes must be written in little endian, so if you are adding a pokemart that sells rare candies and masterballs (respecitve index numbers are `0x0032` and `0x0001`) you would write 
`32 00 01 00 FF FF`
At the offset in the synthetic overlay were your pokemart was added, add either if you're using Platinum or if you're using HGSS, and write it down.

### Editing item prices
Item prices aren't stored in the pokemarts, instead they are just half the value of the item, and those values are stored in the item narc (pl_item_data for Platinum
You can either hex edit those or use PokEditor (? to be confirmed) to edit them, but keep in mind that an item will have the same price in every pokemart.


## Displaying the new pokemart
The easiest way new pokemarts can be displayed (without overwriting existing ones) is by changing the pointer of an existing pokemart and using the scripting command to normally access the pokemart, and once you're done changing the pointer back.
I'll use the offset of pokemart 0 for convenience but it can be applied to any other one. 
The way it's done is by using the AdrsSetValue command 
For example, in Platinum the pointer of spMart 0 is at 0x, while my new pokemart was written at 0x in the synthetic overlay which will result in it being loaded at 0x in the RAM
Using a script like this:
```
AdrsSetValue 0x 
AdrsSetValue 0x
AdrsSetValue 0x
SpMartScreen 0
AdrsSetValue 0x
AdrsSetValue 0x
AdrsSetValue 0x
```
Will first change the pointer to our new pokemart, now the game will open the mart at the pointer we changed to, and then change it back to the original one so it's still accessible.
(The pointers always starts with 02 so it's only necessary to edit 3 bytes)
