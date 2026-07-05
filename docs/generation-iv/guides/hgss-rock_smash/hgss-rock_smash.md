---
title: Rock Smash
tags:
  - Guide (HeartGold)
  - Guide (SoulSilver)
---

# Rock Smash
> Author(s): [MrHam88](https://github.com/DevHam88).  
> Research: [pokeheartgold](https://github.com/pret/pokeheartgold/blob/master/src/field/overlay_01_rock_smash_item.c).

This page is a guide to **Rock Smash** encounters and item drop in Pokémon HeartGold and SoulSilver. It covers how the game determines wild encounters, how item drops are calculated, the structure of the map-specific data archive, and the locations of the hardcoded item tables in the ROM's overlay.

:::info
In HGSS, Rock Smash interactions trigger a two-step check:
1. **Wild Pokémon Encounter**: Checked first using the map's overworld encounter tables, defined in NARC `/a/0/3/7`.
2. **Item Drop**: Rolled only if the wild encounter check fails. The drop rate and item table selection are map-dependent, defined in NARC `/a/2/5/3`.
2. **Item Tables**: The contents of each item table are defined in Overlay 1.
:::

---

## Glossary

- **NARC `/a/2/5/3` (NARC Index 255)**: The map metadata archive for Rock Smash containing drop rates and table configurations.
- **Encounter Rate**: The base probability of triggering a wild encounter when smashing a rock.
- **Drop Odds**: The base probability (out of 100) of revealing an item when smashing a rock.
- **Table Type**: An identifier that maps a location to one of three hardcoded lists of item rewards.

---

## Wild Pokémon Encounters

Before rolling for items, the game checks if a wild encounter occurs. This is handled by a generic encounter calculation.

### How the game checks for encounters
The game reads the `encounterRate_rockSmash` byte at offset `0x02` of the loaded encounter data table, and editable via DSPRE's Encounter Editor.
* If this rate is `0`, a wild encounter is impossible, and the game proceeds immediately to the item drop check.
* If it is non-zero, the encounter rate can be modified by the leading party Pokémon's ability:
  * **2.0x multiplier**: `Arena Trap`, `No Guard`, or `Illuminate`.
  * **0.5x multiplier**: `Stench`, `Quick Feet`, `White Smoke`, or `Snow Cloak` (only if weather is currently Hail).
* The final adjusted rate is capped at 100%.
* The game rolls `LCRandom() % 100`. If the roll is less than the final encounter rate, a battle begins against one of the two species defined in the map's `rockSmashSlots` (species and min/max levels defined from offset `0x78` in the encounter table, and editable via DSPRE's Encounter Editor.).

**If a wild battle is triggered, no item drop check is performed.**

---

## Item Drop Rates

If the wild encounter roll fails, the game rolls for an item drop using data from NARC `/a/2/5/3`.

### NARC Structure and Identity
- **File path**: `data/a/2/5/3`
- **Indexing**: Each member file in this NARC corresponds directly to a **Map Header ID** (i.e. `member N = Map Header N`).
- **File Layout**: Every member file is exactly **4 bytes** long, mapping to the following struct:

| Offset | Field | Size | Description |
|:---:|---|:---:|---|
| `0x00` | `odds` | `uint16` (little-endian) | Base item drop chance (0 to 100). `0` disables item drops for this map. |
| `0x02` | `type` | `uint16` (little-endian) | Drop table selector (0 = Default, 1 = Ruins of Alph, 2 = Cliff Cave). |

### Base Odds Modifiers
If the base odds are non-zero, they can be modified by:
- **+5%** if the lead party Pokémon has the ability `Suction Cups`, `Magnet Pull`, or `Keen Eye`.
- **+5%** if the player is followed by a Pokémon that executed the Rock Smash HM.
The final drop rate is capped at 100%. If `LCRandom() % 100 < final_drop_rate`, an item is awarded.

---

## Item Selection Logic and Tables

Once an item drop is confirmed, the game rolls a random slot index (0 to 7) based on the following probability distribution:

| Slot | Base Probability |
|:---:|:---:|
| 0 | 25% |
| 1 | 20% |
| 2 | 10% |
| 3 | 10% |
| 4 | 10% |
| 5 | 10% |
| 6 | 10% |
| 7 | 5% |

### Ability Shift (Serene Grace / Super Luck)
If the leading party Pokémon has the ability `Serene Grace` or `Super Luck`, and the rolled index is less than 7, the index is incremented by 1 (shifting the index to rarer slots, e.g. slot 0 is skipped and slot 7 becomes a 15% chance).

---

## Hardcoded Item Tables in ROM (Hex Editing)

The three drop tables are hardcoded as static array constants within **Overlay 1** (`field`). In the ROM binary, this corresponds to `ov001.bin`.

Because the game compiles with version-specific `#ifdef` blocks, the Ruins of Alph and Cliff Cave tables contain different species depending on whether you are editing HeartGold or SoulSilver.

### Table Offsets in `ov001.bin`

In HeartGold (decompressed `ov001.bin`), these three tables are compiled sequentially starting at offset **`0x23D04`** (RAM address `0x02209604`):

### Vanilla Item Drop Tables

Below is the layout of the 8 slots in the three hardcoded item tables, showing the values for both version compile types (HeartGold and SoulSilver):

| Slot | Probability | Default Table (`type == 0`) <br /> Offset: `0x23D14` | Ruins of Alph Table (`type == 1`) <br /> Offset: `0x23D04` | Cliff Cave Table (`type == 2`) <br /> Offset: `0x23D24` |
|:---:|:---:|---|---|---|
| 0 | 25% | Max Ether | **HG**: Red Shard <br /> **SS**: Blue Shard | Max Ether |
| 1 | 20% | Revive | **HG**: Yellow Shard <br /> **SS**: Green Shard | Pearl |
| 2 | 10% | Heart Scale | **HG**: Helix Fossil <br /> **SS**: Dome Fossil | Big Pearl |
| 3 | 10% | Red Shard | Max Ether | **HG**: Red Shard <br /> **SS**: Blue Shard |
| 4 | 10% | Blue Shard | **HG**: Blue Shard <br /> **SS**: Red Shard | **HG**: Yellow Shard <br /> **SS**: Green Shard |
| 5 | 10% | Green Shard | **HG**: Green Shard <br /> **SS**: Yellow Shard | **HG**: Claw Fossil <br /> **SS**: Root Fossil |
| 6 | 10% | Yellow Shard | Old Amber | **HG**: Claw Fossil <br /> **SS**: Root Fossil |
| 7 | 5% | Star Piece | Max Revive | Rare Bone |
