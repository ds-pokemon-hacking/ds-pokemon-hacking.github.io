---
title: Optimizing and Expanding Functionality for Trainer Pokemon
tags:
  - Guide (Platinum)
---

# Optimizing and Expanding Functionality for Trainer Pokemon

> Author: Lhea <br />
> Credits: Lhea (Platinum implementation), BluRose (original implementation in HG Engine)

The code used in the generation 4 games for loading Trainer Pokemon from their
data files is poorly-optimized and duplicates much of its own logic. Additionally,
Pokemon Platinum lacks certain functionality that is present in Heart Gold and
Soul Silver:

1. Optimizing friendship on Trainer Pokemon to maximize the damage of Return
and Frustration.
2. Forcing trainer Pokemon to use Ability 2 instead of Ability 1.
3. Forcing trainer Pokemon to be a certain gender.

Luckily, because of the poor optimization of the original code, we can rewrite
this function to free up additional space for these new functions, as well as
create some new space for additional data or code.

## Table of Contents

* [Required Tools](#required-tools)
* [Code Insertion](#code-insertion)
  * [Bugfix: Alternate Form Stat Recalculation](#bugfix-alternate-form-stat-recalculation)
* [Implementation Caveats](#implementation-caveats)
* [Code Breakdown](#code-breakdown)

## Required Tools

* DSPRE
* A hex editor

## Code Insertion

1. Open the `arm9.bin` file in your `YourROMName_DSPRE_contents` folder in your
hex editor of choice.
2. Navigate to offset `0x0793B8`.
3. Paste (overwrite) the next `0x0410` bytes with the following:

```
F0 B5 93 B0 0C 1C 07 1C 04 92 A3 F7 85 FF 0D 90
A0 00 06 90 C0 19 40 68 06 21 00 F0 1F FE 04 98
6C 21 9E F7 B3 FE 10 90 04 98 FA F7 47 FC 06 1C
06 98 C0 19 80 69 10 99 FF F7 D4 FF 34 20 60 43
05 90 C0 19 29 30 00 78 FF F7 D4 FF 01 28 01 D1
78 20 00 E0 88 20 12 90 05 98 C0 19 01 1C 28 30
2B 31 00 78 09 78 00 22 0F 92 00 29 00 DC 96 E0
06 99 C9 19 0C 91 02 21 01 40 0B 91 01 21 01 40
0A 91 10 9D 28 78 6A 78 09 90 E8 78 01 02 A8 78
08 43 08 90 68 79 01 02 28 79 08 43 AD 1D 45 49
01 40 07 91 80 12 11 A9 08 70 01 1C 07 98 12 AB
00 F0 9A F8 09 99 08 98 09 18 07 98 09 18 0C 98
80 69 40 18 0E 90 A3 F7 2D FF 05 98 C0 19 29 30
00 78 00 24 00 28 09 DD A3 F7 2A FF 0E 90 64 1C
05 98 C0 19 29 30 00 78 84 42 F5 DB 0E 98 01 02
12 98 0C 18 09 99 1F 20 48 43 FF 21 68 F0 5A ED
03 1C 01 20 00 90 01 94 02 20 02 90 00 20 03 90
30 1C 07 99 08 9A FA F7 57 FC 0B 98 00 28 0B D0
68 78 01 02 28 78 01 43 AD 1C 11 AA 02 32 11 80
30 1C 06 21 FB F7 20 FB 0A 98 00 28 0C D0 00 24
68 78 01 02 28 78 01 43 AD 1C 30 1C 22 1C FD F7
97 FE 64 1C 04 2C F3 DB 30 1C 00 F0 2D F8 68 78
01 02 28 78 08 43 AD 1C 31 1C 04 9A FF F7 E2 FA
30 1C 70 21 11 AA FB F7 FF FA C0 46 C0 46 C0 46
0C 98 40 68 31 1C 00 F0 83 FD 05 98 C0 19 2B 30
01 78 0F 98 40 1C 0F 90 88 42 00 DA 72 E7 10 98
9E F7 34 FE 30 1C 9E F7 31 FE 0D 98 A3 F7 BA FE
13 B0 F0 BD FF 03 00 00 F8 B5 05 1C 00 24 FF 27
36 23 28 1C 21 1C C9 18 00 22 FA F7 75 FF DA 28
00 D1 00 27 64 1C 04 2C F3 DB 28 1C 09 21 6A 46
17 70 FB F7 C9 FA F8 BD F0 B5 1D 1C 0F 23 13 40
1E 1C 14 09 00 2A 15 D0 00 2E 08 D0 12 22 FC F7
09 FA 01 2E 01 D1 80 1C 00 E0 80 1E 28 60 01 2C
03 D1 01 21 88 43 28 60 F0 BD 02 2C 02 D1 01 21
08 43 28 60 F0 BD 00 00 FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF
FF FF FF FF FF FF FF FF 48 BA 48 19 4C 48 45 41
```

### Bugfix: Alternate Form Stat Recalculation

This section is included as optional for those who wish to maintain the
vanilla quirks of generation 4 games.

Generation 4 Pokemon games fail to recalculate the stats of trainer Pokemon
which are using an alternate form. This results in Pokemon such as Wormadam-Sandy
using incorrect stats, as they still reflect the stats of its base form.

Space is included in the above code insertion to fix this bug. With your `arm9.bin`
open in your hex editor:

1. Navigate to `0x079532`. You should see the bytes `C0 46 C0 46 C0 46`.
2. Replace these bytes with `30 1C FA F7 40 FE`.

## Implementation Caveats

As with its similar implementation in Heart Gold, the usual caveats when modifying
trainer Pokemon apply.

1. When setting a given Pokemon in a trainer's team to use Ability 2, all Pokemon
in later team slots will *also* use Ability 2 until one of them is explicitly
flagged to use Ability 1.
2. When setting a given Pokemon to be forced Male or Female, that Pokemon will
implicitly be flagged to have Ability 2 *unless* the Pokemon's species is
configured to be Male-only or Female-only (e.g., Nidoking, Miltank). This also
applies to Pokemon species which are genderless (e.g., Mewtwo, Magneton): any
such Pokemon having a flag to set it to Male or Female would give it Ability 2,
if applicable.

As an illustration of these caveats, consider the following enemy trainer teams
with no modifications to the species data structures:

```text
Lucario   - no flags set        <- has Steadfast (Ability 1)
Breloom   - Ability 2 flag set  <- has Poison Heal (Ability 2)
Kingdra   - no flags set        <- has Sniper (Ability 2)
Swampert  - no flags set        <- has Torrent (only valid Ability)
Machamp   - Ability 1 flag set  <- has Guts (Ability 1)
Magnezone - Male flag set       <- has Sturdy (Ability 2)
```

```text
Scizor     - Ability 2 flag set  <- has Technician (Ability 2)
Rotom-Heat - no flags set        <- has Levitate (only valid Ability)
Tauros     - no flags set        <- has Anger Point (Ability 2)
Miltank    - Female flag set     <- has Thick Fat (Ability 1)
Flygon     - Male flag set       <- has Levitate (only valid Ability)
Gliscor    - no flags set        <- has Sand Veil (Ability 2)
```

## Code Breakdown

This section is purely for illustrative and educational purposes by explaining
the code that we just inserted. The full ARMIPS file used to generate the above
code is available on my GitHub [here](https://github.com/lhearachel/pokeplat-trainer-expansion/blob/main/trainer_data_build_party.s).

The [vanilla routine](https://github.com/pret/pokeplatinum/blob/main/src/trainer_data.c#L179)
makes use of duplicated code across multiple `case` branches of a `switch` block,
which results in bloated code space; the compiled function consumes 1,040 bytes
of ROM space. However, a few interesting quirks of the trainer Pokemon structure
work in our favor for optimizing this routine:

1. The trainer Pokemon data is loaded all at once as a raw memory buffer without
statically defined boundaries.
2. At runtime, the game evaluates the trainer's `type` field to determine how
it should interpret this buffer. This `type` field has four possible values,
and the layout of these values means we can interpret them as a bitmask:

| `type` | Meaning                                                                 |
| ---: | ------------------------------------------------------------------------- |
|  `0` | The trainer's Pokemon have no special properties.                         |
|  `1` | The trainer's Pokemon define their known moves.                           |
|  `2` | The trainer's Pokemon define their held items.                            |
|  `3` | The trainer's Pokemon define both their held items and their known moves. |

With these factors in mind, we can rewrite this jump table implementation as a
simple loop which chomps through the loaded memory buffer by-byte. C code for
this re-implementation is given below:

```c
#define CHOMP_U16(buf)        \
    ((buf[1] << 8) | buf[0]); \
    buf += 2

static void TrainerMon_SetFriendship(Pokemon *mon);
static void TrainerMon_CheckOverrideFlags(u16 species, u8 form, u8 flags, u32 *pidMod);

static void TrainerData_BuildParty(BattleParams *battleParams, int battler, int heapID)
{
    u32 oldSeed = LCRNG_GetSeed();

    Party_InitWithCapacity(battleParams->parties[battler], MAX_PARTY_SIZE);
    void *buf = Heap_AllocFromHeap(heapID, sizeof(TrainerMonWithMovesAndItem) * MAX_PARTY_SIZE);
    Pokemon *mon = Pokemon_New(heapID);

    TrainerData_LoadParty(battleParams->trainerIDs[battler], buf);

    u32 pidMod = TrainerClass_Gender(battleParams->trainerData[battler].class) == GENDER_FEMALE
        ? 120
        : 136;

    u8 trainerFlags = battleParams->trainerData[battler].type;
    u8 *cursor = (u8 *)buf;

    for (int i = 0; i < battleParams->trainerData[battler].partySize; i++) {
        u16 dv = CHOMP_U16(cursor);
        u16 level = CHOMP_U16(cursor);
        u16 monID = CHOMP_U16(cursor);

        u16 species = monID & 0x03FF; // least-significant 10 bits
        u8 form = monID >> 10; // most-significant 6 bits

        u32 rnd = dv + level + species + battleParams->trainerIDs[battler];
        LCRNG_SetSeed(rnd);

        for (int j = 0; j < battleParams->trainerData[battler].class; j++) {
            rnd = LCRNG_Next();
        }

        rnd = (rnd << 8) + pidMod;
        u8 ivs = dv * MAX_IVS_SINGLE_STAT / MAX_DV;
        Pokemon_InitWith(mon, species, level, ivs, TRUE, rnd, OTID_NOT_SHINY, 0);

        if (trainerFlags & TRDATATYPE_WITH_ITEM) {
            u16 item = CHOMP_U16(cursor);
            Pokemon_SetValue(mon, MON_DATA_HELD_ITEM, &item);
        }

        if (trainerFlags & TRDATATYPE_WITH_MOVES) {
            for (j = 0; j < LEARNED_MOVES_MAX; j++) {
                u16 move = CHOMP_U16(cursor);
                Pokemon_SetMoveSlot(mon, move, j);
            }
        }

        u16 cbSeal = CHOMP_U16(cursor);
        Pokemon_SetBallSeal(cbSeal, mon, heapID);
        Pokemon_SetValue(mon, MON_DATA_FORM, &form);
        Party_AddPokemon(battleParams->parties[battler], mon);
    }

    Heap_FreeToHeap(buf);
    Heap_FreeToHeap(mon);
    LCRNG_SetSeed(oldSeed);
}
```

This reduces the routine to a much slimmer size and gives us plenty of free
space for back-porting the new features for trainer Pokemon from Heart Gold.
