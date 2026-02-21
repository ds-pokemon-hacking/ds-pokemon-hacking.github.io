---
title: Battle Hex Edits
tags:
  - Guide (Diamond)
  - Guide (Pearl)
  - Guide (Platinum)
  - Guide (HeartGold)
  - Guide (SoulSilver)  
---

# Battle Hex Edits
> Author(s): Lmaokai <br/>
> Implementation & Research: [HGSS Decompilation](https://github.com/pret/pokeheartgold), [Platinum Decompilation](https://github.com/pret/pokeplatinum), [HG Engine](https://github.com/BluRosie/hg-engine), DarmaniDan, MrHam88, Yako, Lhea, Chritchy, Fantafaust, Aero, Paille92, Lmaokai

<br/>

This page is a collation of hex edits for the simpler aspects of the battle logic in Generation IV Pokémon games (e.g. [Iron Fist's damage multiplier](/docs/generation-iv/guides/editing_moves/editing_moves.md#editing-the-iron-fist-damage-multiplier)). **Any hex editing offsets or files given in this page are for known good US versions of the relevant games.**

These edits rely upon a basic understanding of hex editing and unpacking NARCs. An initial grounding in these subjects can be found in the following:
- [Hex Editing Primer](/docs/universal/guides/hex_editing/hex_editing.md)
- [Unpacking NARCs](/docs/universal/guides/unpacking_narcs/unpacking_narcs.md)

This information comes from tutorials, guides, and research shared via other means previously (within the Kingdom of DS Hacking! Discord server, pastebin, GitHub etc.), with some additional content and context added. Attribution should be given to the researchers and original tutorial writers, these are noted at the beginning of the relevant sections (and collectively at the top of this section).  


---


## Table of Contents
- [Statuses](#statuses)
  - [Burn Damage](#burn-damage)
  - [Paralysis Speed Reduction](#paralysis-speed-reduction)
  - [Sleep Duration](#sleep-duration)
  - [Freeze Thaw Chance](#freeze-thaw-chance)

- [Abilities](#abilities)
  - [Iron Fist Damage Multiplier](#iron-fist-damage-multiplier)
  - [Pickup Activation Chance](#pickup-activation-chance)
  - [Honey Gather Rate](#honey-gather-rate)
  - [Ice Body End-of-Turn HP Restoration](#ice-body-end-of-turn-hp-restoration)
  - [Heatproof Burn Damage Reduction](#heatproof-burn-damage-reduction)
  - [Quick Feet Speed Multiplier](#quick-feet-speed-multiplier)
  - [Slow Start Stat-Reduction Duration](#slow-start-stat-reduction-duration)
  - [Rain Dish End-of-Turn HP Restoration](#rain-dish-end-of-turn-hp-restoration)

- [Item Held Effects](#item-held-effects)
  - [Leftovers End-of-Turn HP Restoration](#leftovers-end-of-turn-hp-restoration)
  - [Black Sludge End-of-Turn HP Restoration](#black-sludge-end-of-turn-hp-restoration)
  - [Black Sludge End-of-Turn Damage for Non-Poison Types](#black-sludge-end-of-turn-damage-for-non-poison-types)

- [Move Effects](#move-effects)
  - [Aqua Ring End-of-Turn HP Restoration](#aqua-ring-end-of-turn-hp-restoration)
  - [Binding Moves End-of-Turn Damage](#binding-moves-end-of-turn-damage)
  - [Binding Moves Duration](#binding-moves-duration)

- [Weather](#weather)
  - [Hail End-of-Turn Damage for Non-Ice Types](#hail-end-of-turn-damage-for-non-ice-types)


---


## Statuses

### Burn Damage
> Sources and Credits: [DarmaniDan](https://discord.com/channels/446824489045721090/468060243688161300/1398692234471149608), [HG Engine](https://github.com/BluRosie/hg-engine/blob/99eaffab9e38a2e300afde842f4d71f6e067f4b8/data/battle_scripts/subscripts/subscript_0026_BURN_DAMAGE.s#L8), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/res/battle/scripts/subscripts/subscript_burn_damage.s#L7), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/files/battledata/script/subscript/subscript_0026_BurnDamage.s#L8)

Unpack the relevant NARC, open the specified file, and change the byte at the provided offset:
| Game                     | NARC to unpack               | File             | Offset | Vanilla Byte |
|:------------------------:|:----------------------------:|:----------------:|:------:|:------------:|
| **HeartGold/SoulSilver** | `/a/0/0/1`                   | `1_26.bin`       | `0x30` | `08`         |
| **Platinum**             | `/battle/skill/sub_seq.narc` | `sub_seq_26.bin` | `0x30` | `08`         |
| **Diamond/Pearl**        | `/battle/skill/sub_seq.narc` | `sub_seq_26.bin` | `0x30` | `08`         |

Burn damage in Gen IV is **1/8<sup>th</sup>** of the Pokémon's max HP. The battle logic calculates Burn damage by dividing the Pokémon's max HP by an explicitly defined value, in this case **8**.

As an example, to change Burn damage from **1/8<sup>th</sup>** of the Pokémon's max HP to **1/16<sup>th</sup>** (matching Generation VII onwards), change the byte from `08` (8 in decimal) to `10` (16 in decimal). Make sure to pack the NARC after saving the file.
<br/>



### Paralysis Speed Reduction
> Sources and Credits: [Lmaokai](https://discord.com/channels/446824489045721090/477197363954581542/1447833050833616936), Plat Decomp ([1](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_lib.c#L1260), [2](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_lib.c#L1326)), HG Decomp ([1](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L1057), [2](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L1116)), [Online Assembler and Disassembler](https://shell-storm.org/online/Online-Assembler-and-Disassembler/)

Open the relevant file and go to the provided offsets:
| Game                     | File                        | Offset (Battler 1)  | Vanilla Byte | Offset (Battler 2) | Vanilla Byte |
|:------------------------:|:---------------------------:|:-------------------:|:------------:|:------------------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0x185CA`           | `B6`         | `0x18776`          | `A4`         |
| **Platinum**             | `Overlay 16`                | `0x17FCA`           | `B6`         | `0x18176`          | `A4`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x16EC6`           | `B6`         | `0x1702C`          | `A4`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  |               | Battler 1  | Battler 2  |
  |:-------------:|:----------:|:----------:|
  | **All Games** | `B6 08`    | `A4 08`    |
</details>

Paralysis in Gen IV decreases the Pokémon's Speed by **75%**. Unfortunately, this is not achieved by simply dividing the Pokémon's Speed by 4. The battle logic calculates the decreased Speed by performing [logical shifts](https://seojuncha.github.io/arm/assembly/tutorial/2025/09/09/arm-logical-shift.html). More specifically, the Pokémon's normal Speed is taken as a binary value, and those bits are shifted to the right by 2 bits, resulting in the same effect as dividing the value by 4.

> To illustrate, take a Pokémon with **100** Speed. In binary, that is represented as `0110 0100`. Shifting the bits to the right by 1 bit results in `0011 0010`, or **50** in decimal. Shifting the bits to the right by 1 bit once again (for a total of 2 shifts) results in `0001 1001`, or **25** in decimal.

We can change the number of logical shifts from **2** to **1**, effectively changing the reduction from **75%** to **50%** (matching Gen VII and VIII). To do so, change the following bytes at the two offsets provided above:
| Battler 1     | Battler 2     |
|:-------------:|:-------------:|
| `B6` --> `76` | `A4` --> `64` |
<br/>



### Sleep Duration
> Sources and Credits: [Yako](https://discord.com/channels/446824489045721090/920372513488404542/1444020350412128394), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/3c0ff620647341b8f10d9f622878f23bfba5081a/res/battle/scripts/subscripts/subscript_fall_asleep.s#L59), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/files/battledata/script/subscript/subscript_0018_FallAsleep.s#L60), [HG Engine](https://github.com/BluRosie/hg-engine/blob/2d9a72ff85e468494c64347f3bf3338d7bf45669/data/battle_scripts/subscripts/subscript_0018_FALL_ASLEEP.s#L89)

Unpack the relevant NARC, open the specified file, and change the byte(s) at the provided offset(s):
| Game                     | NARC to unpack               | File             | Offset (Maximum Addend) | Vanilla Byte | Offset (Base # of Turns) | Vanilla Byte |
|:------------------------:|:----------------------------:|:----------------:|:-----------------------:|:------------:|:------------------------:|:------------:|
| **HeartGold/SoulSilver** | `/a/0/0/1`                   | `1_18.bin`       | `0x250`                 | `03`         | `0x254`                  | `02`         |
| **Platinum**             | `/battle/skill/sub_seq.narc` | `sub_seq_18.bin` | `0x250`                 | `03`         | `0x254`                  | `02`         |
| **Diamond/Pearl**        | `/battle/skill/sub_seq.narc` | `sub_seq_18.bin` | `0x250`                 | `03`         | `0x254`                  | `02`         |

Sleep in Gen IV lasts **2-5 turns**, but effectively prevents movement for **1-4 turns**. The battle logic calculates the number of turns through the following process:
1. Generate a random number from zero to an explicitly defined value, in this case **3** (the 'Maximum Addend' or range)
2. Add it to another explicitly defined value, in this case **2** (the base number of turns)

This results in (**0 + 2**), (**1 + 2**), (**2 + 2**), and (**3 + 2**) as possible outcomes for the number of sleep turns, which effectively prevents movement for **1**, **2**, **3**, or **4** turns.

As an example, to change Sleep to instead last **2-4 turns**, effectively preventing movement for **1-3 turns**, (matching Gen V onwards), change the byte at `0x250` from `03` (3 in decimal) to `02` (2 in decimal). This results in (**0 + 2**), (**1 + 2**), (**2 + 2**), as possible outcomes, effectively preventing movement for **1**, **2**, or **3 turns**. Make sure to pack the NARC after saving the file.
<br/>



### Freeze Thaw Chance
> Sources and Credits: [Plat Decomp](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_controller_player.c#L2482), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/battle_controller_player.c#L2155)

Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset     | Vanilla Byte |
|:------------------------:|:---------------------------:|:----------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0x13E12`  | `05`         |
| **Platinum**             | `Overlay 16`                | `0x137EE`  | `05`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x12998`  | `05`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  | Game                     | Bytes         |
  |--------------------------|---------------|
  | **HeartGold/SoulSilver** | `05 21 A7 F6` |
  | **Platinum**             | `05 21 93 F6` |
  | **Diamond/Pearl**        | `05 21 AB F6` |
</details>

A frozen Pokémon has a **20%** of being thawed out on each of its turns in Gen IV. The battle logic calculates this chance through the following process:
1. Divide a random number by an explicitly defined value, in this case **5**
2. Compare the remainder to 0
3. If the remainder is not equal to 0, the Pokémon remains frozen
4. If the remainder is equal to 0, then the Pokémon thaws out

Here is a table of bytes and the resulting thaw chance.
| Byte   | Resulting Thaw Chance |
|:------:|:---------------------:|
|  `05`  |   **20% (Vanilla)**   |
|  `04`  |          25%          |
|  `03`  |          33%          |
|  `02`  |          50%          |
|  `01`  |          100%         |
<br/>



## Abilities

### Iron Fist Damage Multiplier
> Sources and Credits: [MrHam88](/docs/generation-iv/guides/editing_moves/editing_moves.md#editing-the-iron-fist-damage-multiplier), [Yako](https://discord.com/channels/446824489045721090/920372513488404542/1424814036154843268), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_lib.c#L6915), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L5807)

Open the relevant file and change the byte(s) at the provided offset(s):
| Game                     | File                        | Offset (Multiplier) | Vanilla Byte | Offset (Divisor) | Vanilla Byte |
|:------------------------:|:---------------------------:|:-------------------:|:------------:|:----------------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0x1FF44`           | `0C`         | `0x1FF48`        | `0A`         |
| **Platinum**             | `Overlay 16`                | `0x1F94C`           | `0C`         | `0x1F950`        | `0A`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x1E520`           | `0C`         | `0x1E524`        | `0A`         |

:::info
You can also search for these bytes instead: `0C 20 60 43 0A 21`
:::

Iron Fist increases the power of effected punching moves by **20%**. The battle logic calculates the increased damage by multiplying and dividing the move's power by explicitly defined values, in this case **12** and **10**, respectively.

As an example, to change the boost from **20%** to **50%** (matching similar damage-boosting Abilities in later generations, such as Mega Launcher or Sharpness), change the byte at the **multiplier offset** from `0C` (12 in decimal) to `0F` (15 in decimal).
<br/>



### Pickup Activation Chance
> Sources and Credits: [Lhea, Aero, & DarmaniDan](https://discord.com/channels/446824489045721090/920372513488404542/1263129361826185320), [Lmaokai](https://discord.com/channels/446824489045721090/477197363954581542/1435116003108327494), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/main/src/battle/battle_script.c#L8026), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/battle_command.c#L4695)

Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset     | Vanilla Byte |
|:------------------------:|:---------------------------:|:----------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0xC852`   | `0A`         |
| **Platinum**             | `Overlay 16`                | `0xC62A`   | `0A`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0xBCB2`   | `0A`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  | Game                     | Bytes            |
  |--------------------------|------------------|
  | **HeartGold/SoulSilver** | `0A 21 AE F6 40` |
  | **Platinum**             | `0A 21 9A F6 FE` |
  | **Diamond/Pearl**        | `0A 21 B2 F6 04` |
</details>

Pickup has a **10%** activation chance. The battle logic calculates this chance through the following process:
1. Divide a random number by an explicitly defined value, in this case **10**
2. Compare the remainder to 0
3. If the remainder is not equal to 0, then Pickup does not activate
4. If the remainder is equal to 0, then Pickup activates

Here is a table of bytes and the resulting Pickup activation chance.
| Byte   | Resulting Activation Chance |
|:------:|:---------------------------:|
|  `0A`  |   **10% (Vanilla)**         |
|  `09`  |          11%                |
|  `08`  |          12.5%              |
|  `07`  |          14%                |
|  `06`  |          16.7%              |
|  `05`  |          20%                |
|  `04`  |          25%                |
|  `03`  |          33%                |
|  `02`  |          50%                |
|  `01`  |          100%               |
<br/>



### Honey Gather Rate
> Sources and Credits: [Lmaokai](https://discord.com/channels/446824489045721090/477197363954581542/1436538616821321950), DarmaniDan, Plat Decomp ([1](https://github.com/pret/pokeplatinum/blob/main/src/battle/battle_script.c#L8067), [2](https://github.com/pret/pokeplatinum/blob/2ffb3faf3ea3e9bc27cd50bcf2cc3e5bcd34005e/include/data/pickup.h#L52)), HG Decomp ([1](https://github.com/pret/pokeheartgold/blob/51025245684ef1a29c733887093061b4fe36b181/src/battle/battle_command.c#L4725), [2](https://github.com/pret/pokeheartgold/blob/51025245684ef1a29c733887093061b4fe36b181/asm/overlay_12_battle_command.s#L4797))

Honey Gather has a variable activation chance, starting at **5%** if the Pokémon is between **levels 1-10**, and increasing by **5%** every **10 levels**, ending at a **50%** chance at **levels 91-100**. 

The battle logic calculates this chance through the following process:
1. Get the Pokémon's level
2. Depending on the Pokémon's level, pull a specific value from the Honey Gather Rate Table (see below)
3. Divide a random number by an explicitly defined value, in this case **100**
4. Compare the remainder to the value pulled from the Honey Gather Rate Table
5. If the remainder is greater than the value, then Honey Gather does not activate
6. If the remainder is less than the value, then Honey Gather activates

#### Honey Gather Rate Table
| Levels | 1-10 | 11-20 | 21-30 | 31-40 | 41-50 | 51-60 | 61-70 | 71-80 | 81-90 | 91-100 |
|:------:|:----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:------:|
|  Value |   5  |   10  |   15  |   20  |   25  |   30  |   35  |   40  |   45  |   50   |

Here are the offsets for the **Honey Gather Rate Table**:
| Game                     | File                        | Offset     |
|:------------------------:|:---------------------------:|:----------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0x35198`  |
| **Platinum**             | `Overlay 16`                | `0x33974`  |
| **Diamond/Pearl**        | `Overlay 11`                | `0x30B9C`  |

You will see the following string of bytes that corresponds to the values of the Honey Gather Rate Table:
```
05 0A 0F 14 19 1E 23 28 2D 32
```
Given how the logic for Honey Gather works, the values in the table are effectively the literal rates for each level range respectively. As an example, if you wanted Honey Gather to have a **50%** rate from **levels 1-50**, and a **100%** rate from **levels 51-100**, then replace the ten bytes with the following:
```
32 32 32 32 32 64 64 64 64 64
```
<br/>



### Ice Body End-of-Turn HP Restoration
> Sources and Credits: [Lmaokai](https://discord.com/channels/446824489045721090/477197363954581542/1436238788526604349), DarmaniDan, [Plat Decomp](https://github.com/pret/pokeplatinum/blob/main/src/battle/battle_script.c#L5828), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/battle_command.c#L3356)

Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset    | Vanilla Byte |
|:------------------------:|:---------------------------:|:---------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0xA3F6`  | `10`         |
| **Platinum**             | `Overlay 16`                | `0xA1CE`  | `10`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x985E`  | `10`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  | Game                     | Bytes            |
  |--------------------------|------------------|
  | **HeartGold/SoulSilver** | `10 21 11 F0 5E` |
  | **Platinum**             | `10 21 11 F0 72` |
  | **Diamond/Pearl**        | `10 21 10 F0 4E` |
</details>

Ice Body restores **1/16<sup>th</sup>** of the Pokémon's max HP. The battle logic calculates the HP restoration amount by dividing the Pokémon's max HP by an explicitly defined value, in this case **16**. 

As an example, to change the HP restoration from **1/16<sup>th</sup>** of the Pokémon's max HP to **1/10<sup>th</sup>**, change the byte from `10` (16 in decimal) to `0A` (10 in decimal).
<br/>



### Heatproof Burn Damage Reduction
> Sources and Credits: [Plat Decomp](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/res/battle/scripts/subscripts/subscript_burn_damage.s#L9), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/files/battledata/script/subscript/subscript_0026_BurnDamage.s#L10)

Unpack the relevant NARC, open the specified file, and change the byte at the provided offset:
| Game                     | NARC to unpack               | File             | Offset | Vanilla Byte |
|:------------------------:|:----------------------------:|:----------------:|:------:|:------------:|
| **HeartGold/SoulSilver** | `/a/0/0/1`                   | `1_26.bin`       | `0x50` | `02`         |
| **Platinum**             | `/battle/skill/sub_seq.narc` | `sub_seq_26.bin` | `0x50` | `02`         |
| **Diamond/Pearl**        | `/battle/skill/sub_seq.narc` | `sub_seq_26.bin` | `0x50` | `02`         |

Heatproof halves the normal damage done from the Burn status. The battle logic calculates the reduced burn damage by dividing the normal burn damage by an explicitly defined value, in this case **2**.

As an example, to change the divisor from **2** to **1** (effectively changing Heatproof to have no impact on burn damage), change the byte from `02` (2 in decimal) to `01` (1 in decimal). Alternatively, you can use a larger value to *increase* the reduction of burn damage (e.g. change the byte to `04` to divide the burn damage by **4**). Make sure to pack the NARC after saving the file.
<br/>



### Quick Feet Speed Multiplier
> Sources and Credits: Plat Decomp ([1](https://github.com/pret/pokeplatinum/blob/main/src/battle/battle_lib.c#L1258), [2](https://github.com/pret/pokeplatinum/blob/main/src/battle/battle_lib.c#L1324)), HG Decomp ([1](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L1055), [2](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L1114))

Open the relevant file and go to the provided offsets:
| Game                     | File                        | Offset (Battler 1 Multiplier) | Vanilla Byte | Offset (Battler 1 Divisor) | Vanilla Byte |
|:------------------------:|:---------------------------:|:-----------------------------:|:------------:|:--------------------------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   |         `0x185AE`             |     `0F`     |       `0x185B2`            |     `0A`     |
| **Platinum**             | `Overlay 16`                |         `0x17FAE`             |     `0F`     |       `0x17FB2`            |     `0A`     |
| **Diamond/Pearl**        | `Overlay 11`                |         `0x16EAA`             |     `0F`     |       `0x16EAE`            |     `0A`     |

| Game                     | File                        | Offset (Battler 2 Multiplier) | Vanilla Byte | Offset (Battler 2 Divisor) | Vanilla Byte |
|:------------------------:|:---------------------------:|:-----------------------------:|:------------:|:--------------------------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   |         `0x1875A`             |     `0F`     |       `0x1875E`            |     `0A`     |
| **Platinum**             | `Overlay 16`                |         `0x1815A`             |     `0F`     |       `0x1815E`            |     `0A`     |
| **Diamond/Pearl**        | `Overlay 11`                |         `0x17010`             |     `0F`     |       `0x17014`            |     `0A`     |

<details>
  <summary>You can also search for these bytes instead</summary>
  |           Game           |          Battler 1           |          Battler 2           |
  |--------------------------|------------------------------|------------------------------|
  | **HeartGold/SoulSilver** | `0F 20 70 43 0A 21 A2 F6 96` | `0F 20 60 43 0A 21 A2 F6 C0` |
  |       **Platinum**       | `0F 20 70 43 0A 21 8F F6 40` | `0F 20 60 43 0A 21 8E F6 6A` |
  |     **Diamond/Pearl**    | `0F 20 70 43 0A 21 A7 F6 0C` | `0F 20 60 43 0A 21 A7 F6 5A` |
</details>

Quick Feet increases the Pokémon's Speed by **50%**. The battle logic calculates the increased Speed by multiplying and dividing the Pokémon's Speed by explicitly defined values, in this case **15** and **10**, respectively.

As an example, to change the boost from **50%** to **70%**, change the byte at the **multiplier offsets for both battlers** from `0F` (15 in decimal) to `11` (17 in decimal).
<br/>



### Slow Start Stat-Reduction Duration
> Sources and Credits: [Chritchy](https://discord.com/channels/446824489045721090/920372513488404542/1137137150412980294), Plat Decomp ([1](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_lib.c#L1264), [2](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_lib.c#L1330), [3](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_lib.c#L4061), [4](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_lib.c#L6712)), HG Decomp ([1](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L1060), [2](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L1119), [3](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L3458), [4](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L5629))

Open the relevant file and change the bytes at the provided offsets:
|           Game           |            File           |  Offset 1 |  Offset 2 |  Offset 3 |  Offset 4 | Vanilla Byte (All Offsets) |
|:------------------------:|:-------------------------:|:---------:|:---------:|:---------:|:---------:|:--------------------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12` | `0x185E2` | `0x1878E` | `0x1C2A8` | `0x1FA38` |            `05`            |
|       **Platinum**       |        `Overlay 16`       | `0x17FE2` | `0x1818E` | `0x1BCB0` | `0x1F440` |            `05`            |
|     **Diamond/Pearl**    |        `Overlay 11`       | `0x16EDE` | `0x17044` | `0x1AAA8` | `0x1E050` |            `05`            |

<details>
  <summary>You can also search for these bytes instead</summary>
|               |  Offset 1        |  Offset 2        |  Offset 3  |  Offset 4  |
|---------------|:----------------:|:----------------:|:----------:|:----------:|
| **All Games** | `05 28 00 DA 76` | `05 28 00 DA 64` | `05 28 0D` | `05 28 03` |
</details>

Slow Start lasts for **5 turns** whenever the Pokémon is switched into battle. As an example, to change the duration from **5** turns to **4**, go to each offset listed and change the byte from `05` (5 in decimal) to `04` (4 in decimal).
<br/>



### Rain Dish End-of-Turn HP Restoration
> Sources and Credits: [Lhea](https://discord.com/channels/446824489045721090/920372513488404542/1168373730372767744), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/main/src/battle/battle_script.c#L5842), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/battle_command.c#L3366)

Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset    | Vanilla Byte |
|:------------------------:|:---------------------------:|:---------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0xA46C`  | `10`         |
| **Platinum**             | `Overlay 16`                | `0xA244`  | `10`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x98D4`  | `10`         |

:::info
You can also search for these bytes instead: `10 21 80 59`
:::

Rain Dish restores **1/16<sup>th</sup>** of the Pokémon's max HP. The battle logic calculates the HP restoration amount by dividing the Pokémon's max HP by an explicitly defined value, in this case **16**. 

As an example, to change the HP restoration from **1/16<sup>th</sup>** of the Pokémon's max HP to **1/10<sup>th</sup>**, change the byte from `10` (16 in decimal) to `0A` (10 in decimal).
<br/>



## Item Held Effects

### Leftovers End-of-Turn HP Restoration
> Sources and Credits: [Lhea](https://discord.com/channels/446824489045721090/920372513488404542/1168373730372767744), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_lib.c#L4933), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L4146)


Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset (Leftovers)  | Vanilla Byte |
|:------------------------:|:---------------------------:|:-------------------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0x1D508`           | `10`         |
| **Platinum**             | `Overlay 16`                | `0x1CF10`           | `10`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x1BD2C`           | `10`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  | Game                     | Bytes            |
  |--------------------------|------------------|
  | **HeartGold/SoulSilver** | `10 21 FE F7 D5` |
  | **Platinum**             | `10 21 FE F7 D1` |
  | **Diamond/Pearl**        | `10 21 FE F7 E7` |
</details>

Leftovers (*specifically the item held effect assigned to Leftovers in vanilla Pokémon games*) restores **1/16<sup>th</sup>** of the Pokémon's max HP. HP restoration for this item held effect is determined in the battle logic instead of the item's properties (meaning changing those values in DSPRE's Item Editor has no impact), and is calculated by dividing the Pokémon's max HP by an explicitly defined value, in this case **16**.

As an example, to change end-of-turn HP restoration from **1/16<sup>th</sup>** of the Pokémon's max HP to a whopping **1/2<sup>th</sup>** (for testing purposes, of course), change the byte from `10` (16 in decimal) to `02` (2 in decimal).
<br/>



### Black Sludge End-of-Turn HP Restoration
> Sources and Credits: [Lhea](https://discord.com/channels/446824489045721090/920372513488404542/1168373730372767744), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_lib.c#L4942), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L4154)


Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset (Black Sludge) | Vanilla Byte |
|:------------------------:|:---------------------------:|:---------------------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0x1D548`             | `10`         |
| **Platinum**             | `Overlay 16`                | `0x1CF50`             | `10`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x1BD6C`             | `10`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  | Game                     | Bytes            |
  |--------------------------|------------------|
  | **HeartGold/SoulSilver** | `10 21 FE F7 B5` |
  | **Platinum**             | `10 21 FE F7 B1` |
  | **Diamond/Pearl**        | `10 21 FE F7 C7` |
</details>

Black Sludge (*specifically the item held effect assigned to Black Sludge in vanilla Pokémon games*) restores **1/16<sup>th</sup>** of a Poison-Type Pokémon's max HP. HP restoration for this item held effect is determined in the battle logic instead of the item's properties (meaning changing those values in DSPRE's Item Editor has no impact), and is calculated by dividing the Pokémon's max HP by an explicitly defined value, in this case **16**.

As an example, to change end-of-turn HP restoration from **1/16<sup>th</sup>** of the Pokémon's max HP to **1/10<sup>th</sup>**, change the byte from `10` (16 in decimal) to `0A` (10 in decimal).
<br/>



### Black Sludge End-of-Turn Damage for Non-Poison Types
> Sources and Credits: [Lhea](https://discord.com/channels/446824489045721090/920372513488404542/1168373730372767744), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_lib.c#L4947), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L4159)

Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset     | Vanilla Byte |
|:------------------------:|:---------------------------:|:----------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0x1D570`  | `08`         |
| **Platinum**             | `Overlay 16`                | `0x1CF78`  | `08`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x1BD94`  | `08`         |

:::info
You can also search for these bytes instead: `08 21 FE F7`
:::

Black Sludge (*specifically the item held effect assigned to Black Sludge in vanilla Pokémon games*) damages **1/8<sup>th</sup>** of a non-Poison-Type Pokémon's max HP. Damage for this item held effect is determined in the battle logic instead of the item's properties, and is calculated by dividing the Pokémon's max HP by an explicitly defined value, in this case **8**.

As an example, to change the end-of-turn damage from **1/8<sup>th</sup>** of the Pokémon's max HP to **1/16<sup>th</sup>**, change the byte from `08` (8 in decimal) to `10` (16 in decimal).
<br/>



## Move Effects

### Aqua Ring End-of-Turn HP Restoration
> Sources and Credits: [Lhea](https://discord.com/channels/446824489045721090/920372513488404542/1168373730372767744), [Fantafaust](https://discord.com/channels/446824489045721090/920372513488404542/1424948127697207360), [Lmaokai](https://discord.com/channels/446824489045721090/477197363954581542/1424928158532239431), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_controller_player.c#L1343), [HG Decomp](https://github.com/pret/pokeheartgold/blob/e882bbfad40c2c446318fe9ff036e70580acdeba/src/battle/battle_controller_player.c#L1223)

Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset     | Vanilla Byte |
|:------------------------:|:---------------------------:|:----------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0x1257A`  | `10`         |
| **Platinum**             | `Overlay 16`                | `0x11FB2`  | `10`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x11252`  | `10`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  | Game                     | Bytes            |
  |--------------------------|------------------|
  | **HeartGold/SoulSilver** | `10 21 09 F0 9C` |
  | **Platinum**             | `10 21 09 F0 80` |
  | **Diamond/Pearl**        | `10 21 08 F0 54` |
</details>

The move effect assigned to Aqua Ring restores **1/16<sup>th</sup>** of the Pokémon's max HP. The battle logic calculates the HP restoration amount for this move effect by dividing the Pokémon's max HP by an explicitly defined value, in this case **16**. 

As an example, to change the HP restoration from **1/16<sup>th</sup>** of the Pokémon's max HP to **1/10<sup>th</sup>**, change the byte from `10` (16 in decimal) to `0A` (10 in decimal).
<br/>



### Binding Moves End-of-Turn Damage
> Sources and Credits: [MrHam88](/docs/generation-iv/guides/editing_moves/editing_moves.md#editing-the-amount-of-continuous-damage-dealt), [Lhea](https://discord.com/channels/446824489045721090/920372513488404542/1176266662677319710), Paille92, [Lmaokai](https://discord.com/channels/446824489045721090/920372513488404542/1420209370318372944), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/0b98ed3a9c9894372a930de0944a3d467c7eda72/src/battle/battle_controller_player.c#L1468), [HG Decomp](https://github.com/pret/pokeheartgold/blob/e882bbfad40c2c446318fe9ff036e70580acdeba/src/battle/battle_controller_player.c#L1326)

Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset     | Vanilla Byte |
|:------------------------:|:---------------------------:|:----------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0x12852`  | `10`         |
| **Platinum**             | `Overlay 16`                | `0x1228A`  | `10`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x11528`  | `10`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  | Game                     | Bytes            |
  |--------------------------|------------------|
  | **HeartGold/SoulSilver** | `10 21 09 F0 30` |
  | **Platinum**             | `10 21 09 F0 14` |
  | **Diamond/Pearl**        | `10 21 08 F0 E9` |
</details>

The move effect assigned to binding moves such as Bind, Fire Spin, and Whirlpool, deals **1/16<sup>th</sup>** of the Pokémon's max HP. The battle logic calculates the damage for this move effect by dividing the Pokémon's max HP by an explicitly defined value, in this case **16**. 

As an example, to change the damage from **1/16<sup>th</sup>** of the Pokémon's max HP to **1/12<sup>th</sup>**, change the byte from `10` (16 in decimal) to `0C` (12 in decimal).
<br/>



### Binding Moves Duration
> Sources and Credits: [MrHam88](/docs/generation-iv/guides/editing_moves/editing_moves.md#editing-the-duration-of-trapping-moves), [Yako & DarmaniDan](https://discord.com/channels/446824489045721090/920372513488404542/1419978755329363969), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/0b98ed3a9c9894372a930de0944a3d467c7eda72/res/battle/scripts/subscripts/subscript_bind_start.s#L10), [HG Decomp](https://github.com/pret/pokeheartgold/blob/e882bbfad40c2c446318fe9ff036e70580acdeba/files/battledata/script/subscript/subscript_0058_BindStart.s#L11)

Unpack the relevant NARC, open the specified file, and change the byte(s) at the provided offset(s):
| Game                     | NARC to unpack               | File             | Offset (Maximum Addend) | Vanilla Byte | Offset (Base # of Turns) | Vanilla Byte |
|:------------------------:|:----------------------------:|:----------------:|:-----------------------:|:------------:|:------------------------:|:------------:|
| **HeartGold/SoulSilver** | `/a/0/0/1`                   | `1_58.bin`       | `0x38`                  | `03`         | `0x3C`                   | `03`         |
| **Platinum**             | `/battle/skill/sub_seq.narc` | `sub_seq_58.bin` | `0x38`                  | `03`         | `0x3C`                   | `03`         |
| **Diamond/Pearl**        | `/battle/skill/sub_seq.narc` | `sub_seq_58.bin` | `0x38`                  | `03`         | `0x3C`                   | `03`         |

The move effect assigned to binding moves such as Bind, Fire Spin, and Whirlpool, lasts **3-6 turns** in Gen IV, but effectively traps and deals damage for **2-5 turns**. The battle logic calculates the total number of turns through the following process:
1. Generate a random number from zero to an explicitly defined value, in this case **3** (the 'Maximum Addend' or range)
2. Add it to another explicitly defined value, in this case **3** (the base number of turns)

This results in (**0 + 3**), (**1 + 3**), (**2 + 3**), and (**3 + 3**) as possible outcomes for the number of turns, which effectively traps and deals damage for **2**, **3**, **4**, or **5** turns.

As an example, to change the duration to instead last **5-6 turns** (effectively lasting for **4-5 turns**, matching Gen V onwards)
1. Change the byte at `0x38` from `3` (3 in decimal) to `01` (1 in decimal)
2. Change the byte at `0x3C` from `3` (3 in decimal) to `05` (5 in decimal)

This results in (**0 + 5**) and (**1 + 5**) as possible outcomes, effectively lasting for **4** or **5 turns**. Make sure to pack the NARC after saving the file.

Later in the same file contains the logic for Grip Claw (*specifically the item held effect assigned to Grip Claw in vanilla Pokémon games*) causing binding moves to always last a certain number of turns.
| Game                     | Offset (Grip Claw Duration) | Vanilla Byte |
|:------------------------:|:---------------------------:|:------------:|
| **HeartGold/SoulSilver** | `0x60`                      | `06`         |
| **Platinum**             | `0x60`                      | `06`         |
| **Diamond/Pearl**        | `0x60`                      | `06`         |

As an example, to change Grip Claw to cause binding moves to always last for **4 *effective* turns**, change the byte at `0x60` from `06` (6 in decimal) to `05` (5 in decimal). Make sure to pack the NARC after saving the file.
<br/>



## Weather

### Hail End-of-Turn Damage for Non-Ice Types
> Sources and Credits: [Lmaokai](https://discord.com/channels/446824489045721090/477197363954581542/1436238788526604349), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/main/src/battle/battle_script.c#L5834), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/battle_command.c#L3360)

Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset    | Vanilla Byte |
|:------------------------:|:---------------------------:|:---------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0xA42C`  | `10`         |
| **Platinum**             | `Overlay 16`                | `0xA204`  | `10`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x9894`  | `10`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  | Game                     | Bytes            |
  |--------------------------|------------------|
  | **HeartGold/SoulSilver** | `10 21 11 F0 43` |
  | **Platinum**             | `10 21 11 F0 57` |
  | **Diamond/Pearl**        | `10 21 10 F0 33` |
</details>

Hail damages **1/16<sup>th</sup>** of a non-Ice-Type Pokémon's max HP. The battle logic calculates this damage by dividing the Pokémon's max HP by an explicitly defined value, in this case **16**.

As an example, to change Hail damage from **1/16<sup>th</sup>** of the Pokémon's max HP to **1/12<sup>th</sup>**, change the byte from `10` (16 in decimal) to `0C` (12 in decimal).
<br/>