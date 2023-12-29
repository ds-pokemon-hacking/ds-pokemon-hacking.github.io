# Reusable Repel<sup>*(Platinum)*</sup>
> This guide was written by SpagoAsparago. Credits to BluRose for helping with the ASM and to brahulus for the Repel AR Code.

This is a tutorial on how to implement the reusable repel in Platinum.
When the repel runs out, a prompt will appear, from which the player can choose to use another repel:

![](resources/pt_reusable_repel/pt_reusable_repel.png)

The options only appear if the player has the appropriate repel item(s) in the bag

You'll need to use [DSPRE](https://github.com/AdAstra-LD/DS-Pokemon-Rom-Editor/releases) and a Hex Editor. If you don't know how to hex edit, check out the [Hex Editing Guide](./././)

This **only works on the US Version of the game**. Attempting to replace the same bytes on a different language game will not work.

--- 
## Table of Contents
* [DSPRE](#section)
  * [Scripting](#subsection)
  * [Text](#subsection-1)
* [Hex Editing](#section-2)

## Section
If you don't have one already, create a new project by loading your ROM in DSPRE. Then go to the *Scripting* tab.

### Scripting

Go to `Script 33` replace it with the following:
<details>
<summary>Script 33</summary>
 
```
Script 33:
	PlayFanfare 1500
	LockAll 
  CheckPlayerHasItem 79 1 0x800C
	CompareVarValue 0x800C 1
	JumpIf EQUAL Function#177
	CheckPlayerHasItem 76 1 0x800C
	CompareVarValue 0x800C 1
	JumpIf EQUAL Function#177
	CheckPlayerHasItem 77 1 0x800C
	CompareVarValue 0x800C 1
	JumpIf EQUAL Function#177
	Message 79
	WaitAB 
	CloseMessage 
	ReleaseAll 
End 
```

</details>

Next go to the *Functions* tab and add the following functions. If the functions 177+ already exist, adjust the new function IDs accordingly so that no functions are replaced.

<details>
<summary>Functions</summary>
  
```
Function 177:
  Message 75
	YesNoBox 0x800C
	CompareVarValue 0x800C 0
	JumpIf EQUAL Function#178
	CloseMessage 
	ReleaseAll 
End
 
Function 178:
  CloseMessage 
	MultiStandardText 1 1 0 1 0x800C
	CheckPlayerHasItem 79 1 0x8000
	CompareVarValue 0x8000 1
	CallIf EQUAL Function#179
	CheckPlayerHasItem 76 1 0x8000
	CompareVarValue 0x8000 1
	CallIf EQUAL Function#180
	CheckPlayerHasItem 77 1 0x8000
	CompareVarValue 0x8000 1
	CallIf EQUAL Function#181
	ShowMulti 
	CompareVarValue 0x800C 0
	JumpIf EQUAL Function#182
	CompareVarValue 0x800C 1
	JumpIf EQUAL Function#183
	CompareVarValue 0x800C 2
	JumpIf EQUAL Function#184
	ReleaseAll 
End
 
Function 179:
    AddMultiOption 30 0
Return
 
Function 180:
    AddMultiOption 31 1
Return
 
Function 181:
    AddMultiOption 32 2
Return
 
Function 182:
  AdrsValueSet 0x023DFF28 100
	DummyTakeTrap 
  TakeItem 79 1 0x8000
	TextPlayerName 0
	TextItem 1 79
	Message 72
	WaitButton 
	CloseMessage
Return
 
Function 183:
    AdrsValueSet 0x023DFF28 150
	DummyTakeTrap 
    TakeItem 76 1 0x8000
	TextPlayerName 0
	TextItem 1 76
	Message 72
	WaitButton 
	CloseMessage
Return
 
Function 184:
  AdrsValueSet 0x023DFF28 250
	DummyTakeTrap 
  TakeItem 77 1 0x8000
	TextPlayerName 0
	TextItem 1 77
	Message 72
	WaitButton 
	CloseMessage 
Return
```

</details>

Save the script file.

### Text
Go to the *Text Editor* tab. Remember to save each Text Archive before moving on to the next one.

* Open `Text Archive 361`, and replace messages 30, 31 and 32 respectively with:
  - Repel
  - Super Repel
  - Max Repel
* Open `Text Archive 213`, and replace message 72 with:
  - *Repel’s effect wore off...\nWould you like to use another one?*
* Open `Text Archive 213`, and replace message 75 with:
  - *\v0103ぁ\x0000\x0000 used the\n\v0108ぁ\x0001\x0000.\rWild Pokémon will be repelled.*


## Hex Editing

If you haven't already, you need to expand the arm9 trough DSPRE's ROM Toolbox. You can do so by clicking the Explorer Kit Icon in the top bar and applying the *ARM9 Expansion* patch.

In the folder where your ROM is located, DSPRE should have created a folder name yourROMname_DSPRE_Contents. Inside that you'll find a file called `arm9.bin`, open it in your hex editor of choice.

Go to the offset `0x4EAE8` and replace all the bytes from this offset with the following sequence:
```
0B 48 01 68 0B 48 09 18 0B 48 02 78 0A 70 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 70 47 40 1D 10 02 87 80 00 00 28 FF 3D 02
```
Do **not** add new bytes. In HxD you can paste without replacing with the Ctrl+B shortcut. Save the file.

Now you can load DSPRE again and save the ROM. Remember to **not** re-extract the contents, otherwise your hex editing will be lost!

The custom command works by setting the repel counter at the byte written at 15FEE in weather_sys_9.bin, so remember to don't write anything at this offset!

<details>
 <summary>Detailed Explanation for the Custom Command and Repel Counter</summary>

The repel counter is a dynamic offset located at (Address at 0x02101D40) + (0x8087). This is only valid for the US version, hence my code won't work on other regionswithout writing a new custom command.

When the repel counter runs out, the game will automatically execut Script 33 in Script File 211. 

After the scripting and hex edits performed, now Script 33 will:
1) Check if the player has any repel item in their bag
2) If they do, ask if they wants to use anothe repel
3) If they want to, create a popup window containing all the available repel items
4) Remove the repel item that has been chosen from the bag
5) Use the `AdrsValueSet` command to write a byte at the offset 0x023DFF28, containing the number of steps of the selected repel
6) Trough the `DummyTakeTrap`, the repel counter is increased by the previously set value

The `DummyTakeTrap` command is otherwise unused, so it's been replaced with a custom one in order to access the dynamic offset of the repel counter, and set the counter to the new value. 
This is the raw assembly code:

<details>
 <summary>ASM Code</summary>

```
ldr r0, =0x02101D40
ldr r1, [r0]
ldr r0, =0x8087
add r1, r0
ldr r0, =0x023DDFEE
ldrb r2, [r0]
strb r2, [r1]
nop
nop
nop
nop
nop
nop
nop
nop
nop
nop
nop
nop
nop
nop
nop
nop
bx lr
```

</details>
This part of the code:

```
ldr r0, =0x02101D40
ldr r1, [r0]
ldr r0, =0x8087
add r1, r0
```
Is used to calculate the dynamic offset by loading the address at 0x2101D40 and then adding 0x8087 to it, storing the repel counter offset in the R1 register.

The following part:
```
ldr r0, =0x023DDFEE
ldrb r2, [r0]
strb r2, [r1]
```
Is used to read the byte previously written at 0x023DDFEE by the `AdrsValueSet` command, and updating the repel counter with it.
The 0x023DDFEE offset is at a region in the RAM otherwise unused, but costantly loaded trough the syntehtic overlay.

The remaining `nop` commands are there to maintain the original command dimension and prevent the script command table from being read incorrectly.

</details>

