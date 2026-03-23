---
title: Reusable Repel
tags:
  - Guide (Platinum)
---

# Reusable Repel<sup>*(Platinum)*</sup>
> Author: SpagoAsparago <br />
> Credits: SpagoAsparago (Implementation), BluRose (Help with ASM), brahulus (Repel AR Code)

This is a tutorial on how to implement the reusable repel in Platinum.
When the repel runs out, a prompt will appear, from which the player can choose to use another repel:

![](resources/pt_reusable_repel.png)

The options only appear if the player has the appropriate repel item(s) in the bag

You'll need to use [DSPRE](https://github.com/DS-Pokemon-Rom-Editor/DSPRE/releases) and a Hex Editor. If you don't know how to hex edit, check out the [Hex Editing Guide](../../../universal/guides/hex_editing/hex_editing.md)
:::info
This **only works on the US Version of the game**. Attempting to replace the same bytes on a different language game will not work.
:::

---
## Table of Contents
* [Hex Editing](#hex-editing)
* [DSPRE](#dspre)
  * [ScrCmd Database](#scrcmd-database)
  * [Scripting](#scripting)
  * [Text](#text)
* [Detailed Explanation](#detailed-explanation)

## Hex Editing

1. If you haven't already, you need to expand the arm9 through DSPRE's ROM Toolbox. You can do so by clicking the Explorer Kit Icon in the top bar and applying the *ARM9 Expansion* patch.
2. In the folder where your ROM is located, DSPRE should have created a folder name yourROMname_DSPRE_Contents. Inside that you'll find a file called `arm9.bin`, open it in your hex editor of choice.
3. Go to the offset `0x4EAE8` and replace all the bytes from this offset with the following sequence:
```
0B 48 01 68 0B 48 09 18 0B 48 02 78 0A 70 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 C0 46 70 47 40 1D 10 02 87 80 00 00 28 FF 3D 02
```

:::warning
Do **not** add new bytes. Different hex editors will have different methods of "paste and overwrite", some examples are below:  
- In **HxD** you can paste and overwrite with the `Ctrl+B` shortcut.
- In **ImHex** you can paste and overwrite with the `Ctrl+V` shortcut.
:::
4. Save the file.
5. Now you can load DSPRE again and save the ROM. Remember to **not** re-extract the contents, otherwise your hex editing will be lost!

The custom command works by setting the repel counter at the byte written at `0x15FEE` in weather_sys_9.bin, so remember to don't write anything at this offset!

## DSPRE
If you don't have one already, create a new project by loading your ROM in DSPRE.  

### ScrCmd Database
In the latest stable version of DSPRE, the program enforces the number of parameters a script command requires using the ScrCmd Database. This is built for vanilla games, however if Script Commands are edited to use a different number of parameters, a customised version of the ScrCmd Database must be created for use with the ROM in DSPRE to allow the Script Editor to parse the scripts correctly, and to include the commands in scripts.

:::info
Whilever the name of the ROM remains the same, the updated ScrCmd `scrcmd_database.json` file will remain in effect, but note that if the ROM name is changed and unpacked in DSPRE, the default `scrcmd_database.json` will be applied.
:::

1. Open DSPRE, select **Tools** from the menu toolbar, select **Script Commands Database**, and **Manage Script Commands**.
2. Click the **Open DB Folder**.
3. Locate contents folder for your ROM, open the folder.
4. Open the `scrcmd_database.json` file in a text editor.
5. Search for `0x0088` or `DummyTakeTrap`.
6. Delete the contents of the `[]` sections for: `parameters`, `parameter_types` & `parameter_values`.
7. Optionally, change `DummyTakeTrap` to a custom command `name` and/or comment in the `description` field.*
8. Save the `scrcmd_database.json` file.

:::warning
If a custom name is defined (e.g. `ReusableRepelCounterSet` or similar) , replace all instances of `DummyTakeTrap` with the custom name in the below [Scripting section](#scripting) when copying into your ROM.
:::

An example of the original ScrCmd entry, and a modified version (which still uses the original name) are below.

<details>
<summary>ScrCmd Database Definition (**vanilla**)</summary>
```
    "0x0088": {
      "name": "DummyTakeTrap",
      "decomp_name": "ScrCmd_088",
      "parameters": [2, 2, 2],
      "parameter_types": ["Integer", "Integer", "Variable"],
      "parameter_values": ["u16: Unused", "u16: Unused", "Var: Variable"],
      "description": "Nothing"
    },
```

</details>

<details>
<summary>ScrCmd Database Definition (**modifiied**)</summary>
```
    "0x0088": {
      "name": "DummyTakeTrap",
      "decomp_name": "ScrCmd_088",
      "parameters": [],
      "parameter_types": [],
      "parameter_values": [],
      "description": "Reusable repel counter is increased by the number of steps of repellent of the selected Repel item"
    },
```

</details>

### Scripting

1. Open DSPRE's Script Editor tab.
2. Go to `Script 33` (Script File `211`) replace it with the following:
<details>
<summary>Script 33 (Script File `211`)</summary>

```
Script 33:
	PlayFanfare SEQ_SE_CONFIRM
	LockAll
	CheckItem ITEM_REPEL 1 0x800C
	CompareVarValue 0x800C 1
	JumpIf EQUAL Function#177
	CheckItem ITEM_SUPER_REPEL 1 0x800C
	CompareVarValue 0x800C 1
	JumpIf EQUAL Function#177
	CheckItem ITEM_MAX_REPEL 1 0x800C
	CompareVarValue 0x800C 1
	JumpIf EQUAL Function#177
	Message 79
	WaitAB
	CloseMessage
	ReleaseAll
End
```

</details>

3. Next go to the *Functions* tab and add the following functions. If the functions 177+ already exist, adjust the new function IDs accordingly so that no functions are replaced.

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
	CheckItem ITEM_REPEL 1 0x8000
	CompareVarValue 0x8000 1
	CallIf EQUAL Function#179
	CheckItem ITEM_SUPER_REPEL 1 0x8000
	CompareVarValue 0x8000 1
	CallIf EQUAL Function#180
	CheckItem ITEM_MAX_REPEL 1 0x8000
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
	AdrsValueSet 0x23DFF28 100
	DummyTakeTrap
	TakeItem ITEM_REPEL 1 0x8000
	TextPlayerName 0
	TextItem 1 ITEM_REPEL
	Message 72
	WaitButton
	CloseMessage
Return

Function 183:
	AdrsValueSet 0x23DFF28 150
	DummyTakeTrap
	TakeItem ITEM_SUPER_REPEL 1 0x8000
	TextPlayerName 0
	TextItem 1 ITEM_SUPER_REPEL
	Message 72
	WaitButton
	CloseMessage
Return

Function 184:
	AdrsValueSet 0x23DFF28 250
	DummyTakeTrap
	TakeItem ITEM_MAX_REPEL 1 0x8000
	TextPlayerName 0
	TextItem 1 ITEM_MAX_REPEL
	Message 72
	WaitButton
	CloseMessage
Return
```

</details>

:::warning
If a custom name was defined, replace all instances of `DummyTakeTrap` with the custom name in the above when copying into your ROM.
:::

4. Save the script file.

### Text
1. Go to the *Text Editor* tab. Remember to save each Text Archive before moving on to the next one.
2. Open `Text Archive 361`, and replace messages 30, 31 and 32 respectively with:
    - Repel
    - Super Repel
    - Max Repel
3. Save `Text Archive 361`.
4. Open `Text Archive 213`, and replace message 72 with:
```
Repel’s effect wore off...\nWould you like to use another one?
```
5. Still in `Text Archive 213`, replace message 75 with:
```
{STRVAR_1, 3, 0, 0} used the\n{STRVAR_1, 8, 1, 0}.\rWild Pokémon will be repelled.
```

## Detailed Explanation

<details>
 <summary>Detailed Explanation for the Custom Command and Repel Counter</summary>

The repel counter is a dynamic offset located at (Address at `0x02101D40`) + (`0x8087`). This is only valid for the US version, hence my code won't work on other regions without writing a new custom command.

When the repel counter runs out, the game will automatically execute Script 33 in Script File 211.

After the scripting and hex edits performed, now Script 33 will:
1) Check if the player has any repel item in their bag
2) If they do, ask if they wants to use another repel
3) If they want to, create a popup window containing all the available repel items
4) Remove the repel item that has been chosen from the bag
5) Use the `AdrsValueSet` command to write a byte at the offset `0x023DFF28`, containing the number of steps of the selected repel
6) Through the `DummyTakeTrap`, the repel counter is increased by the previously set value

The `DummyTakeTrap` command is otherwise unused, so it's been replaced with a custom one in order to access the dynamic offset of the repel counter, and set the counter to the new value.
The custom command is necessary as there is no way to access the dynamic offset using only vanilla scripting commands.
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
Is used to calculate the dynamic offset by loading the address at `0x2101D40` and then adding `0x8087` to it, storing the repel counter offset in the R1 register.

The following part:
```
ldr r0, =0x023DDFEE
ldrb r2, [r0]
strb r2, [r1]
```
Is used to read the byte previously written at `0x023DDFEE` by the `AdrsValueSet` command, and updating the repel counter with it.
The `0x023DDFEE` offset is at a region in the RAM otherwise unused, but costantly loaded trough the syntehtic overlay.

The remaining `nop` commands are there to maintain the original command dimension and prevent the script command table from being read incorrectly.

</details>
