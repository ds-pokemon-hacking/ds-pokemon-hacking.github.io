# Adding New Poké Marts <sup>*(Platinum/HGSS)*</sup>
> This guide was written by SpagoAsparago.

This is a guide on how to add and display new Poké Marts in Platinum and HGSS.
All offsets mentioned are based on the US version of the ROMs. 

--- 
## Table of Contents
* [Adding a new Poké Mart](#section)
  * [Editing Item prices](#subsection)
* [Displaying the new Poké Mart](#section-2)
  * [Using Script Registers](#subsection-2)

## Adding a new Poké Mart

If you haven't already, you'll have to perform the ARM9 expansion since that's were the new Poké Mart(s) will be written to. 
You can do so by clicking "Expand ARM9" in DSPRE toolbox, then go to Unpacked/SynthOverlay in your DSPRE project folder (which will be named ROMname_DSPRE_contents, and will be in the same folder of your ROM) and using your hex editor of choice open either file 0009 if you're on Platinum or 0001 for HGSS.

You can write at whatever offset you want as long as it's empty, I will be writing my Poké Mart at 0x100. You need to sum `0x023C8000` to this offset, and write it down since you'll need it later to display the mart in game. In my case it will be `0x023C8100`.

Poké Mart are loaded in the RAM as a list of bytes of the items index numbers, with `FF FF` at the end of each mart, each item taking up two bytes.
Refer to [Bulbapedia's list of items by index number](https://bulbapedia.bulbagarden.net/wiki/List_of_items_by_index_number_(Generation_IV)). 
Keep in mind the bytes must be written in little endian, so the order of bytes has to be swapped.

In this tutorial I will be adding a Poké Mart that sells Rare Candies and Focus Sashes, their index numbers are respectively `0x32` and `0x113`.
So I will be writing `32 00 13 01 FF FF` at 0x100. Once you've added all your marts and wrote down their offsets you can save the file and close the hex editor.

### Editing item prices
Item prices aren't stored in the Poké Marts, instead they are part of item data, meaning an item will always have the same price regardless of the Poké Mart it's being sold at.
Item data is stored in the narc `pl_item_data` (Platinum) / `a/0/1/7` (HGSS). The file you're looking will have the item index number as its name.

The price is stored in the first two bytes in each file, so for example if I want to have Rare Candyies to be sold at 10,000 Pokèdollars (`0x2710`), I will have to extract 50.bin and change the first two bytes to `10 27`. Once you've reinserted the file remember to pack the narc before saving the ROM!


## Displaying the new Poké Mart
The easiest way new Poké Marts can be displayed (without overwriting existing ones) is by using a script to change the pointer of an existing Poké Mart trough the `AdrsValueSet` command, normally accessing the Poké Mart, and once you're done changing the pointer back.
I'll use the offset of `SpMartScreen 0`, the pointer normally being `0x020EB978` (Platinum) / `020FBA54` (HGSS) and is found at `0x02100B1C` (Platinum) / `0x0210FA3C` (HGSS) in the RAM.
Since I'm using HGSS, the relevant part of my script will look like this:
```
AdrsValueSet 0x0210FA3C 0x00
AdrsValueSet 0x0210FA3D 0x81
AdrsValueSet 0x0210FA3E 0x3C
SpMartScreen 0
AdrsValueSet 0x0210FA3C 0x54
AdrsValueSet 0x0210FA3D 0xBA
AdrsValueSet 0x0210FA3E 0x0F
```
The first three commands change the original pointer to the new one in the synthetic overlay, then the Mart is opened like normal with `SpMartScreen 0`, and with the last three commands the original pointer is restored. Only 3 bytes are changed instead of 4 since RAM offsets always start with 02. Again the pointers are written in little endian, so `0x023C8100` will look like `00 81 3C 02` in the RAM.
You can save the script and test the game now.
Note that in Platinum the pointer will have to be changed back to `0x20EB978` instead.
This is what my full script 19 looks like, I assigned it to a NPC which will show the new Pokè Mart when talked to:

![](pokemart_script1.PNG)

### Using Script Registers
To avoid using the AdrsValueSet three times in a row, it's possible to do the same process using the script register commands `RegDataSet` and `AdrsRegSet`, so that my earlier script will instead look like this:
```
RegDataSet 0 0x023C8100
AdrsRegSet 0x0210FA3C 0
SpMartScreen 0
RegDataSet 0 0x020FBA54
AdrsRegSet 0x0210FA3C 0
```
The only caveat is that the script is normally "broken" and only writes one byte into memory, so to fix it you have to hex edit the arm9 at `0x3F7CA` (Platinum) / `0x40996` (HGSS) and change `01 70` to `01 60`. Thanks to AdAstra for having looked into this issue.
