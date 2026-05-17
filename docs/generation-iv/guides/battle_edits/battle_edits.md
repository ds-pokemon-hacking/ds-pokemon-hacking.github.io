---
title: Battle Logic Edits
tags:
  - Guide (Diamond)
  - Guide (Pearl)
  - Guide (Platinum)
  - Guide (HeartGold)
  - Guide (SoulSilver)  
---

# Battle Logic Edits
> Author(s): Lmaokai <br/>
> Implementation & Research: [HGSS Decompilation](https://github.com/pret/pokeheartgold), [Platinum Decompilation](https://github.com/pret/pokeplatinum), [HG Engine](https://github.com/BluRosie/hg-engine), DarmaniDan, MrHam88, Yako, Lhea, Chritchy, Fantafaust, Aero, Paille92, Shogo Kawada Fan, Memory5ty7, Lmaokai

<br/>

This page is a collation of hex edits to the battle logic in Generation IV Pokémon games. This primarily focuses on simpler aspects where only a single byte needs to be edited, such as [Iron Fist's damage multiplier](#iron-fist-damage-multiplier). **Any hex editing offsets or files present on this page are for known good US versions of the relevant games.**

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
  - [Reckless Damage Multiplier](#reckless-damage-multiplier)
  - [Rivalry Damage Multipliers](#rivalry-damage-multipliers)

- [Item Held Effects](#item-held-effects)
  - [Leftovers End-of-Turn HP Restoration](#leftovers-end-of-turn-hp-restoration)
  - [Black Sludge End-of-Turn HP Restoration](#black-sludge-end-of-turn-hp-restoration)
  - [Black Sludge End-of-Turn Damage for Non-Poison Types](#black-sludge-end-of-turn-damage-for-non-poison-types)

- [Move Effects](#move-effects)
  - [Aqua Ring End-of-Turn HP Restoration](#aqua-ring-end-of-turn-hp-restoration)
  - [Binding Moves End-of-Turn Damage](#binding-moves-end-of-turn-damage)
  - [Binding Moves Duration](#binding-moves-duration)
  - [Magnitude Move Power](#magnitude-move-power)
  - [Gyro Ball Move Power Calculation Multiplier](#gyro-ball-move-power-calculation-multiplier)

- [Weather](#weather)
  - [Hail End-of-Turn Damage for Non-Ice Types](#hail-end-of-turn-damage-for-non-ice-types)

- [Bug Fixes](#bug-fixes)
  - [Fire Fang vs Wonder Guard](#fire-fang-vs-wonder-guard)
  - [Trainer AI Water Immunity Check vs Dry Skin](#trainer-ai-water-immunity-check-vs-dry-skin)


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

Burn damage in Gen IV is **1/8<sup>th</sup>** of the Pokémon's max HP. The battle logic (*more specifically, a battle subscript*) calculates Burn damage by dividing the Pokémon's max HP by an explicitly defined value, in this case **8**.

As an example, to change Burn damage from **1/8<sup>th</sup>** of the Pokémon's max HP to **1/16<sup>th</sup>** (matching Generation VII onwards), change the byte from `08` (8 in decimal) to `10` (16 in decimal). Make sure to pack the NARC after saving the file.
<br/>



### Paralysis Speed Reduction
> Sources and Credits: [Lmaokai](https://discord.com/channels/446824489045721090/477197363954581542/1447833050833616936), Plat Decomp ([1](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_lib.c#L1260), [2](https://github.com/pret/pokeplatinum/blob/75545a47f21ce27e376c60eeba15ac77e06e3c1c/src/battle/battle_lib.c#L1326)), HG Decomp ([1](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L1057), [2](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L1116))

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
| **HeartGold/SoulSilver** | `/a/0/0/1`                   | `1_18.bin`       | `0x264`                 | `03`         | `0x268`                  | `02`         |
| **Platinum**             | `/battle/skill/sub_seq.narc` | `sub_seq_18.bin` | `0x264`                 | `03`         | `0x268`                  | `02`         |
| **Diamond/Pearl**        | `/battle/skill/sub_seq.narc` | `sub_seq_18.bin` | `0x250`                 | `03`         | `0x254`                  | `02`         |

Sleep in Gen IV lasts **2-5 turns**, but effectively prevents movement for **1-4 turns**. The battle logic (*more specifically, a battle subscript*) calculates the number of turns through the following process:
1. Generate a random number from zero to an explicitly defined value, in this case **3** (the 'Maximum Addend' or range)
2. Add it to another explicitly defined value, in this case **2** (the base number of turns)

This results in (**0 + 2**), (**1 + 2**), (**2 + 2**), and (**3 + 2**) as possible outcomes for the number of sleep turns, which effectively prevents movement for **1**, **2**, **3**, or **4** turns.

As an example, for HeartGold/SoulSilver and Platinum, to change Sleep to instead last **2-4 turns**, effectively preventing movement for **1-3 turns**, (matching Gen V onwards), change the byte at `0x264` from `03` (3 in decimal) to `02` (2 in decimal). This results in (**0 + 2**), (**1 + 2**), (**2 + 2**), as possible outcomes, effectively preventing movement for **1**, **2**, or **3 turns**. Make sure to pack the NARC after saving the file.
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

A frozen Pokémon has a **20%** chance of being thawed out on each of its turns in Gen IV. The battle logic calculates this chance through the following process:
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

<details>
  <summary>You can also search for these bytes instead</summary>
  |               | Vanilla Bytes        |
  |:-------------:|:--------------------:|
  | **All Games** | `0C 20 60 43 0A 21`  |
</details>

Iron Fist increases the power of [effected punching moves](/docs/generation-iv/guides/editing_moves/editing_moves.md#punching-moves) by **20%**. The battle logic calculates the increased damage by multiplying and dividing the move's power by explicitly defined values, in this case **12** and **10**, respectively.

As an example, to change the boost from **20%** to **50%** (matching similar damage-boosting Abilities in later generations, such as Mega Launcher or Sharpness), change the byte at the **multiplier offset** from `0C` (12 in decimal) to `0F` (15 in decimal).
<br/>



### Pickup Activation Chance
> Sources and Credits: [Lhea, Aero, & DarmaniDan](https://discord.com/channels/446824489045721090/920372513488404542/1263129361826185320), [Lmaokai](https://discord.com/channels/446824489045721090/477197363954581542/1435116003108327494), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/f61660fddd90cb71b833cf326bfd04b405d05013/src/battle/battle_script.c#L8025), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/battle_command.c#L4695)

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
> Sources and Credits: [Lmaokai](https://discord.com/channels/446824489045721090/477197363954581542/1436538616821321950), DarmaniDan, Plat Decomp ([1](https://github.com/pret/pokeplatinum/blob/f61660fddd90cb71b833cf326bfd04b405d05013/src/battle/battle_script.c#L8066), [2](https://github.com/pret/pokeplatinum/blob/2ffb3faf3ea3e9bc27cd50bcf2cc3e5bcd34005e/include/data/pickup.h#L52)), HG Decomp ([1](https://github.com/pret/pokeheartgold/blob/51025245684ef1a29c733887093061b4fe36b181/src/battle/battle_command.c#L4725), [2](https://github.com/pret/pokeheartgold/blob/51025245684ef1a29c733887093061b4fe36b181/asm/overlay_12_battle_command.s#L4797))

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
> Sources and Credits: [Lmaokai](https://discord.com/channels/446824489045721090/477197363954581542/1436238788526604349), DarmaniDan, [Plat Decomp](https://github.com/pret/pokeplatinum/blob/f61660fddd90cb71b833cf326bfd04b405d05013/src/battle/battle_script.c#L5827), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/battle_command.c#L3356)

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

Heatproof halves the normal damage done from the Burn status. The battle logic (*more specifically, a battle subscript*) calculates the reduced burn damage by dividing the normal burn damage by an explicitly defined value, in this case **2**.

As an example, to change the divisor from **2** to **1** (effectively changing Heatproof to have no impact on burn damage), change the byte from `02` (2 in decimal) to `01` (1 in decimal). Alternatively, you can use a larger value to *increase* the reduction of burn damage (e.g. change the byte to `04` to divide the burn damage by **4**). Make sure to pack the NARC after saving the file.
<br/>



### Quick Feet Speed Multiplier
> Sources and Credits: Plat Decomp ([1](https://github.com/pret/pokeplatinum/blob/f61660fddd90cb71b833cf326bfd04b405d05013/src/battle/battle_lib.c#L1258), [2](https://github.com/pret/pokeplatinum/blob/f61660fddd90cb71b833cf326bfd04b405d05013/src/battle/battle_lib.c#L1324)), HG Decomp ([1](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L1055), [2](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/overlay_12_0224E4FC.c#L1114))

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
> Sources and Credits: [Lhea](https://discord.com/channels/446824489045721090/920372513488404542/1168373730372767744), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/f61660fddd90cb71b833cf326bfd04b405d05013/src/battle/battle_script.c#L5841), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/battle_command.c#L3366)

Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset    | Vanilla Byte |
|:------------------------:|:---------------------------:|:---------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0xA46C`  | `10`         |
| **Platinum**             | `Overlay 16`                | `0xA244`  | `10`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x98D4`  | `10`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  |               | Vanilla Bytes  |
  |:-------------:|:--------------:|
  | **All Games** | `10 21 80 59`  |
</details>

Rain Dish restores **1/16<sup>th</sup>** of the Pokémon's max HP. The battle logic calculates the HP restoration amount by dividing the Pokémon's max HP by an explicitly defined value, in this case **16**. 

As an example, to change the HP restoration from **1/16<sup>th</sup>** of the Pokémon's max HP to **1/10<sup>th</sup>**, change the byte from `10` (16 in decimal) to `0A` (10 in decimal).
<br/>



### Reckless Damage Multiplier
> Sources and Credits: [Yako](https://discord.com/channels/446824489045721090/920372513488404542/1475182718189830297), Plat Decomp ([1](https://github.com/pret/pokeplatinum/blob/f61660fddd90cb71b833cf326bfd04b405d05013/res/battle/scripts/effects/effect_script_0045.s#L6), [2](https://github.com/pret/pokeplatinum/blob/baf527b30d8d7ed6d3fefd6ad48e5c7acd6ce889/res/battle/scripts/effects/effect_script_0048.s#L6), [3](https://github.com/pret/pokeplatinum/blob/baf527b30d8d7ed6d3fefd6ad48e5c7acd6ce889/res/battle/scripts/effects/effect_script_0198.s#L6), [4](https://github.com/pret/pokeplatinum/blob/baf527b30d8d7ed6d3fefd6ad48e5c7acd6ce889/res/battle/scripts/effects/effect_script_0253.s#L6), [5](https://github.com/pret/pokeplatinum/blob/baf527b30d8d7ed6d3fefd6ad48e5c7acd6ce889/res/battle/scripts/effects/effect_script_0262.s#L6), [6](https://github.com/pret/pokeplatinum/blob/baf527b30d8d7ed6d3fefd6ad48e5c7acd6ce889/res/battle/scripts/effects/effect_script_0269.s#L6)), HGSS Decomp ([1](https://github.com/pret/pokeheartgold/blob/47e0855242035f82d3002d962fdc8d018bf2be4f/files/battledata/script/effect_script/effect_script_0045.s#L7), [2](https://github.com/pret/pokeheartgold/blob/47e0855242035f82d3002d962fdc8d018bf2be4f/files/battledata/script/effect_script/effect_script_0048.s#L7), [3](https://github.com/pret/pokeheartgold/blob/47e0855242035f82d3002d962fdc8d018bf2be4f/files/battledata/script/effect_script/effect_script_0198.s#L7), [4](https://github.com/pret/pokeheartgold/blob/47e0855242035f82d3002d962fdc8d018bf2be4f/files/battledata/script/effect_script/effect_script_0253.s#L7), [5](https://github.com/pret/pokeheartgold/blob/47e0855242035f82d3002d962fdc8d018bf2be4f/files/battledata/script/effect_script/effect_script_0262.s#L7), [6](https://github.com/pret/pokeheartgold/blob/47e0855242035f82d3002d962fdc8d018bf2be4f/files/battledata/script/effect_script/effect_script_0269.s#L7))

Reckless increases the power of moves that have recoil or crash damage by **20%**, except Struggle. The battle logic (*more specifically, multiple move effect scripts*) calculates the increased damage by multiplying the move's power by an explicitly defined value, in this case **12**.

The **multiplier value** is explicitly defined across six individual **move effect scripts** that involve recoil or crash damage in the vanilla Pokémon games. This means six edits are required to effectively change Reckless' damage multiplier. 

The **divisor value** is explicitly defined in the general battle logic overlay (i.e. Overlay 12 for HeartGold/SoulSilver, Overlay 16 for Platinum, and Overlay 11 for Diamond/Pearl), but is a general-use function that handles every case in which a move's power is modified.

Unpack the following NARCs, open the six specified files, and change the bytes at the provided offsets. Make sure to pack the NARC after saving all the files.

#### 1) Move Effect Script 45: Crash Damage if Move Misses (Hi Jump Kick, Jump Kick)
| Game                     | NARC to unpack              | File            | Offset | Vanilla Byte |
|:------------------------:|:---------------------------:|:---------------:|:------:|:------------:|
| **HeartGold/SoulSilver** | `/a/0/3/0`                  | `0_45.bin`      | `0x20` | `0C`         |
| **Platinum**             | `/battle/skill/be_seq.narc` | `be_seq_45.bin` | `0x20` | `0C`         |
| **Diamond/Pearl**        | `/battle/skill/be_seq.narc` | `be_seq_45.bin` | `0x20` | `0C`         |

#### 2) Move Effect Script 48: 25% Recoil Damage (Take Down, Submission) 
| Game                     | NARC to unpack              | File            | Offset | Vanilla Byte |
|:------------------------:|:---------------------------:|:---------------:|:------:|:------------:|
| **HeartGold/SoulSilver** | `/a/0/3/0`                  | `0_48.bin`      | `0x20` | `0C`         |
| **Platinum**             | `/battle/skill/be_seq.narc` | `be_seq_48.bin` | `0x20` | `0C`         |
| **Diamond/Pearl**        | `/battle/skill/be_seq.narc` | `be_seq_48.bin` | `0x20` | `0C`         |

#### 3) Move Effect Script 198: 33% Recoil Damage (Double-Edge, Brave Bird, Wood Hammer) 
| Game                     | NARC to unpack              | File             | Offset | Vanilla Byte |
|:------------------------:|:---------------------------:|:----------------:|:------:|:------------:|
| **HeartGold/SoulSilver** | `/a/0/3/0`                  | `0_198.bin`      | `0x20` | `0C`         |
| **Platinum**             | `/battle/skill/be_seq.narc` | `be_seq_198.bin` | `0x20` | `0C`         |
| **Diamond/Pearl**        | `/battle/skill/be_seq.narc` | `be_seq_198.bin` | `0x20` | `0C`         |

#### 4) Move Effect Script 253: 33% Recoil Damage, Chance to Burn, and Thaws the User (Flare Blitz)
| Game                     | NARC to unpack              | File             | Offset | Vanilla Byte |
|:------------------------:|:---------------------------:|:----------------:|:------:|:------------:|
| **HeartGold/SoulSilver** | `/a/0/3/0`                  | `0_253.bin`      | `0x20` | `0C`         |
| **Platinum**             | `/battle/skill/be_seq.narc` | `be_seq_253.bin` | `0x20` | `0C`         |
| **Diamond/Pearl**        | `/battle/skill/be_seq.narc` | `be_seq_253.bin` | `0x20` | `0C`         |

#### 5) Move Effect Script 262: 33% Recoil Damage and Chance to Paralyze (Volt Tackle)
| Game                     | NARC to unpack              | File             | Offset | Vanilla Byte |
|:------------------------:|:---------------------------:|:----------------:|:------:|:------------:|
| **HeartGold/SoulSilver** | `/a/0/3/0`                  | `0_262.bin`      | `0x20` | `0C`         |
| **Platinum**             | `/battle/skill/be_seq.narc` | `be_seq_262.bin` | `0x20` | `0C`         |
| **Diamond/Pearl**        | `/battle/skill/be_seq.narc` | `be_seq_262.bin` | `0x20` | `0C`         |

#### 6) Move Effect Script 269: 50% Recoil Damage (Head Smash)
| Game                     | NARC to unpack              | File             | Offset | Vanilla Byte |
|:------------------------:|:---------------------------:|:----------------:|:------:|:------------:|
| **HeartGold/SoulSilver** | `/a/0/3/0`                  | `0_269.bin`      | `0x20` | `0C`         |
| **Platinum**             | `/battle/skill/be_seq.narc` | `be_seq_269.bin` | `0x20` | `0C`         |
| **Diamond/Pearl**        | `/battle/skill/be_seq.narc` | `be_seq_269.bin` | `0x20` | `0C`         |
<br/>



### Rivalry Damage Multipliers
> Sources and Credits: [MeKomoATuPrima](https://discord.com/channels/446824489045721090/477197363954581542/1494755231093756155), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/73042ddea249cbfb6a3b885ac1fc82d8154cfba1/src/battle/battle_lib.c#L6901), [HG Decomp](https://github.com/pret/pokeheartgold/blob/d72700a52ad27ddf47847009a85b4bc9c85fa283/src/battle/overlay_12_0224E4FC.c#L5800)

Open the relevant file and go to the provided offsets:
| Game                     | File                      | Offset (Same Gender Multiplier) | Vanilla Byte | Offset (Same Gender Divisor) | Vanilla Byte |
|:------------------------:|:-------------------------:|:-------------------------------:|:------------:|:----------------------------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12` |         `0x1FF00`               |     `7D`     |       `0x1FF04`              |     `64`     |
| **Platinum**             | `Overlay 16`              |         `0x1F908`               |     `7D`     |       `0x1F90C`              |     `64`     |
| **Diamond/Pearl**        | `Overlay 11`              |         `0x1E4DC`               |     `7D`     |       `0x1E4E0`              |     `64`     |

| Game                     | File                      | Offset (Opposite Gender Multiplier) | Vanilla Byte | Offset (Opposite Gender Divisor) | Vanilla Byte |
|:------------------------:|:-------------------------:|:-----------------------------------:|:------------:|:--------------------------------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12` |         `0x1FF26`                   |     `4B`     |       `0x1FF2A`                  |     `64`     |
| **Platinum**             | `Overlay 16`              |         `0x1F92E`                   |     `4B`     |       `0x1F932`                  |     `64`     |
| **Diamond/Pearl**        | `Overlay 11`              |         `0x1E502`                   |     `4B`     |       `0x1E506`                  |     `64`     |

<details>
  <summary>You can also search for these bytes instead</summary>
  |           Game           | Same Gender                  |          Opposite Gender           |
  |--------------------------|------------------------------|------------------------------|
  | **HeartGold/SoulSilver** | `7D 20 60 43 64 21 9B F6 E8` | `4B 20 60 43 64` |
  |       **Platinum**       | `7D 20 60 43 64 21 87 F6 8E` | `4B 20 60 43 64` |
  |     **Diamond/Pearl**    | `7D 20 60 43 64 21 A0 F6 EE` | `4B 20 60 43 64` |
</details>

Rivalry **increases** the power of moves by **25%** if the target and the user have the same gender. The battle logic calculates the increased damage by multiplying and dividing the move's power by explicitly defined values, in this case **125** (`7D` in hexadecimal) and **100** (`64` in hexadecimal), respectively.

Rivalry **reduces** the power of moves by **25%** if the target and the user have opposite genders. The battle logic calculates the reduced damage by multiplying and dividing the move's power by explicitly defined values, in this case **75** (`4B` in hexadecimal) and **100** (`64` in hexadecimal), respectively.



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

<details>
  <summary>You can also search for these bytes instead</summary>
  |               | Vanilla Bytes  |
  |:-------------:|:--------------:|
  | **All Games** | `08 21 FE F7`  |
</details>

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

As an example, to change the damage from **1/16<sup>th</sup>** of the Pokémon's max HP to **1/8<sup>th</sup>** (matching Gen VI onwards), change the byte from `10` (16 in decimal) to `08` (8 in decimal).
<br/>



### Binding Moves Duration
> Sources and Credits: [MrHam88](/docs/generation-iv/guides/editing_moves/editing_moves.md#editing-the-duration-of-trapping-moves), [Yako & DarmaniDan](https://discord.com/channels/446824489045721090/920372513488404542/1419978755329363969), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/0b98ed3a9c9894372a930de0944a3d467c7eda72/res/battle/scripts/subscripts/subscript_bind_start.s#L10), [HG Decomp](https://github.com/pret/pokeheartgold/blob/e882bbfad40c2c446318fe9ff036e70580acdeba/files/battledata/script/subscript/subscript_0058_BindStart.s#L11)

Unpack the relevant NARC, open the specified file, and change the byte(s) at the provided offset(s):
| Game                     | NARC to unpack               | File             | Offset (Maximum Addend) | Vanilla Byte | Offset (Base # of Turns) | Vanilla Byte |
|:------------------------:|:----------------------------:|:----------------:|:-----------------------:|:------------:|:------------------------:|:------------:|
| **HeartGold/SoulSilver** | `/a/0/0/1`                   | `1_58.bin`       | `0x38`                  | `03`         | `0x3C`                   | `03`         |
| **Platinum**             | `/battle/skill/sub_seq.narc` | `sub_seq_58.bin` | `0x38`                  | `03`         | `0x3C`                   | `03`         |
| **Diamond/Pearl**        | `/battle/skill/sub_seq.narc` | `sub_seq_58.bin` | `0x38`                  | `03`         | `0x3C`                   | `03`         |

The move effect assigned to binding moves such as Bind, Fire Spin, and Whirlpool, lasts **3-6 turns** in Gen IV, but effectively traps and deals damage for **2-5 turns**. The battle logic (*more specifically, a battle subscript*) calculates the total number of turns through the following process:
1. Generate a random number from zero to an explicitly defined value, in this case **3** (the 'Maximum Addend' or range)
2. Add it to another explicitly defined value, in this case **3** (the base number of turns)

This results in (**0 + 3**), (**1 + 3**), (**2 + 3**), and (**3 + 3**) as possible outcomes for the number of turns, which effectively traps and deals damage for **2**, **3**, **4**, or **5** turns.

As an example, to change the duration to instead last **5-6 turns** (effectively lasting for **4-5 turns**, matching Gen V onwards)
1. Change the byte at `0x38` from `3` (3 in decimal) to `01` (1 in decimal)
2. Change the byte at `0x3C` from `3` (3 in decimal) to `05` (5 in decimal)

This results in (**0 + 5**) and (**1 + 5**) as possible outcomes, effectively lasting for **4** or **5 turns**. Make sure to pack the NARC after saving the file.

Another example, but to fix the duration to always be **3 *effective* turns**
1. Change the byte at `0x38` from `3` (3 in decimal) to `00` (0 in decimal)
2. Change the byte at `0x3C` from `3` (3 in decimal) to `04` (4 in decimal) 

Later in the same file contains the logic for Grip Claw (*specifically the item held effect assigned to Grip Claw in vanilla Pokémon games*) causing binding moves to always last a certain number of turns.
| Game                     | Offset (Grip Claw Duration) | Vanilla Byte |
|:------------------------:|:---------------------------:|:------------:|
| **HeartGold/SoulSilver** | `0x60`                      | `06`         |
| **Platinum**             | `0x60`                      | `06`         |
| **Diamond/Pearl**        | `0x60`                      | `06`         |

As an example, to change Grip Claw to cause binding moves to always last for **6 *effective* turns**, change the byte at `0x60` from `06` (6 in decimal) to `07` (7 in decimal). Make sure to pack the NARC after saving the file.

:::warning
The forced Grip Claw duration cannot be changed to a value greater than `07`.
:::
<br/>



### Magnitude Move Power
> Sources and Credits: [Plat Decomp](https://github.com/pret/pokeplatinum/blob/fb3156a07ad0addb95a6486b229f34bb35894b9d/src/battle/battle_script.c#L5821), [HG Decomp](https://github.com/pret/pokeheartgold/blob/d72700a52ad27ddf47847009a85b4bc9c85fa283/src/battle/battle_command.c#L3493)

Open the relevant file and go to the provided offsets:
|           Game           |            File           | Offset (Magnitude 4) | Vanilla Byte | Offset (Magnitude 5) | Vanilla Byte | Offset (Magnitude 6) | Vanilla Byte | Offset (Magnitude 7) | Vanilla Byte | Offset (Magnitude 8) | Vanilla Byte | Offset (Magnitude 9) | Vanilla Byte | Offset (Magnitude 10) | Vanilla Byte |
|:------------------------:|:-------------------------:|:--------------------:|:------------:|:--------------------:|:------------:|:--------------------:|:------------:|:--------------------:|:------------:|:--------------------:|:------------:|:--------------------:|:------------:|:---------------------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12` |       `0xA89A`       |     `0A`     |       `0xA8AA`       |     `1E`     |       `0xA8BA`       |     `32`     |       `0xA8CA`       |     `46`     |       `0xA8DA`       |     `5A`     |       `0xA8EA`       |     `6E`     |        `0xA8F4`       |     `96`     |
|       **Platinum**       |        `Overlay 16`       |       `0xA672`       |     `0A`     |       `0xA682`       |     `1E`     |       `0xA692`       |     `32`     |       `0xA6A2`       |     `46`     |       `0xA6B2`       |     `5A`     |       `0xA6C2`       |     `6E`     |        `0xA6CC`       |     `96`     |
|     **Diamond/Pearl**    |        `Overlay 11`       |       `0x9CFA`       |     `0A`     |       `0x9D0A`       |     `1E`     |       `0x9D1A`       |     `32`     |       `0x9D2A`       |     `46`     |       `0x9D3A`       |     `5A`     |       `0x9D4A`       |     `6E`     |        `0x9D54`       |     `96`     |

<details>
  <summary>You can also search for these bytes instead</summary>
  |               | Magnitude 4 Bytes | Magnitude 5 Bytes | Magnitude 6 Bytes | Magnitude 7 Bytes | Magnitude 8 Bytes | Magnitude 9 Bytes | Magnitude 10 Bytes |
  |:-------------:|:-----------------:|:-----------------:|:-----------------:|:-----------------:|:-----------------:|:-----------------:|:------------------:|
  | **All Games** |     `0A 22 62`    |     `1E 22 62`    |     `32 22 62`    |     `46 22 62`    |     `5A 22 62`    |     `6E 22 62`    |     `96 22 62`     |
</details>

The move effect assigned to Magnitude has a varying move power based on randomly selected "magnitude" level. The battle logic first determines the "magnitude" level, then provides the explicitly defined move power associated with each "magnitude" level.

| Magnitude Level  | Vanilla Power  | Vanilla Byte |
|:----------------:|:--------------:|:------------:|
|         4        |       10       |     `0A`     |
|         5        |       30       |     `1E`     |
|         6        |       50       |     `32`     |
|         7        |       70       |     `46`     |
|         8        |       90       |     `5A`     |
|         9        |       110      |     `6E`     |
|        10        |       150      |     `96`     |



### Gyro Ball Move Power Calculation Multiplier
> Sources and Credits: [Plat Decomp](https://github.com/pret/pokeplatinum/blob/fb3156a07ad0addb95a6486b229f34bb35894b9d/src/battle/battle_script.c#L7124), [HG Decomp](https://github.com/pret/pokeheartgold/blob/d72700a52ad27ddf47847009a85b4bc9c85fa283/src/battle/battle_command.c#L4299)

Open the relevant file and go to the provided offsets:
| Game                     | File                      | Offset   | Vanilla Byte |
|:------------------------:|:-------------------------:|:--------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12` | `0xBEAA` | `19`         |
| **Platinum**             | `Overlay 16`              | `0xBC82` | `19`         |
| **Diamond/Pearl**        | `Overlay 11`              | `0xB316` | `19`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  |               | Bytes      |
  |:-------------:|:----------:|
  | **All Games** | `19 20 50` |
</details>

The move effect assigned to Gyro Ball has a varying move power based on the user's Speed compared to the target's Speed. The battle logic calculates the move's power by dividing the target's Speed by the user's Speed, then multiplying the result by an explicitly defined value, in this case **25** (`19` in hexadecimal). Increasing this value will increase the calculated power (but is still restricted by the maximum power cap of 150).



## Weather

### Hail End-of-Turn Damage for Non-Ice Types
> Sources and Credits: [Lmaokai](https://discord.com/channels/446824489045721090/477197363954581542/1436238788526604349), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/f61660fddd90cb71b833cf326bfd04b405d05013/src/battle/battle_script.c#L5833), [HG Decomp](https://github.com/pret/pokeheartgold/blob/86dc0b14fbd90faeb91e17f0ed5e34b51e86ef61/src/battle/battle_command.c#L3360)

Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset    | Vanilla Byte |
|:------------------------:|:---------------------------:|:---------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0xA42C`  | `10`         |
| **Platinum**             | `Overlay 16`                | `0xA204`  | `10`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x9894`  | `10`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  | Game                     | Bytes            |
  |:------------------------:|:----------------:|
  | **HeartGold/SoulSilver** | `10 21 11 F0 43` |
  | **Platinum**             | `10 21 11 F0 57` |
  | **Diamond/Pearl**        | `10 21 10 F0 33` |
</details>

Hail damages **1/16<sup>th</sup>** of a non-Ice-Type Pokémon's max HP. The battle logic calculates this damage by dividing the Pokémon's max HP by an explicitly defined value, in this case **16**.

As an example, to change Hail damage from **1/16<sup>th</sup>** of the Pokémon's max HP to **1/12<sup>th</sup>**, change the byte from `10` (16 in decimal) to `0C` (12 in decimal).
<br/>



## Bug Fixes

### Fire Fang vs Wonder Guard
> Sources and Credits: [Lhea](https://discord.com/channels/446824489045721090/920372513488404542/1109241450329280552), [Shogo Kawada Fan](https://discord.com/channels/446824489045721090/920372513488404542/1289333415270678631)

Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset    | Vanilla Byte |
|:------------------------:|:---------------------------:|:---------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 12`   | `0x20BCC` | `11`         |
| **Platinum**             | `Overlay 16`                | `0x205D4` | `11`         |
| **Diamond/Pearl**        | `Overlay 11`                | `0x1F160` | `11`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  |               | Vanilla Bytes  |
  |:-------------:|:--------------:|
  | **All Games** | `11 32 93 42`  |
</details>

Fire Fang (*specifically the move effect assigned to only Fire Fang*) is able to hit through Wonder Guard, even if the target does not have a weakness to Fire-Type moves. More information about the bug can be found on [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/List_of_battle_glitches_in_Generation_IV#Fire_Fang_Wonder_Guard_glitch) or searching `Fire Fang Wonder Guard` on the Kingdom of DS Hacking Discord.

To fix the issue, change the byte from `11` to `10`.
<br/>



### Trainer AI Water Immunity Check vs Dry Skin
> Sources and Credits: [Memory5ty7](https://discord.com/channels/446824489045721090/920372513488404542/1216114974255091774), [DarmaniDan](https://discord.com/channels/446824489045721090/920372513488404542/1216146554646433914), [Lhea](https://discord.com/channels/446824489045721090/1201213967389966378/1210066487562207302), [Plat Decomp](https://github.com/pret/pokeplatinum/blob/44f90af936713061fc9608b1332b2b4616d0c80f/asm/trainer_ai/trainer_ai_script.s#L78C50-L78C65)

Open the relevant file and change the byte at the provided offset:
| Game                     | File                        | Offset    | Vanilla Byte |
|:------------------------:|:---------------------------:|:---------:|:------------:|
| **HeartGold/SoulSilver** | `Decompressed Overlay 10`   | `0x4DB4`  | `1A`         |
| **Platinum**             | `Overlay 14`                | `0x4DAC`  | `1A`         |
| **Diamond/Pearl**        | `Overlay 16`                | `0x1DA7C` | `1A`         |

<details>
  <summary>You can also search for these bytes instead</summary>
  |               | Vanilla Bytes              |
  |:-------------:|:--------------------------:|
  | **All Games** | `1A 00 00 00 26 00 00 00`  |
</details>

The Trainer AI performs two checks when considering whether the opposing Pokémon is immune to Water-Type moves. The first check considers Water Absorb, but the second check mistakenly considers Levitate instead of Dry Skin. In practice, this means that **(1)** a Trainer's Pokémon won't use Water-Type moves if it knows that the opposing Pokémon has Levitate, and **(2)** a Trainer's Pokémon may repeatedly use a Water-Type move against an opposing Pokémon with Dry Skin.

To fix the issue, change the byte from `1A` (26 in decimal, Levitate's ID) to `57` (87 in decimal, Dry Skin's ID).
<br/>