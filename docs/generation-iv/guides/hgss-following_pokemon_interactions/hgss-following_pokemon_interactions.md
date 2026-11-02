---
title: Following Pokémon Interactions
tags:
  - Guide (HeartGold)
  - Guide (SoulSilver)
---

# Following Pokémon Interactions
> Author(s): [MrHam88](https://github.com/DevHam88).  
> Research: [pret/pokeheartgold](https://github.com/pret/pokeheartgold).

This page explains how HeartGold and SoulSilver choose the movements, cries and dialogue shown when speaking to the following Pokémon. It covers the links between species, location rules, interaction definitions and message text, with examples for Bellsprout, Eevee and Pikachu.

---

## Data Locations

The system is distributed across four NARCs and the message archive:

| Data | Location | How it is indexed |
|---|---|---|
| Species categories | `a/2/3/1`, member `0000` | Byte at `species ID - 1` |
| Interaction conditions | `a/2/2/0` | Member `location-name ID + 1`; member `0000` contains shared rules |
| Interaction definitions | `a/2/2/1` | Member `interaction ID - 1` |
| Movement definitions | `a/2/2/2` | Member `movement ID - 1` |
| Ordinary follower dialogue | Text archive **265**, inside `a/0/2/7` | Message index `stored message reference - 1` |

The selection and execution code is in **overlay 2**. Species IDs, species categories, interaction IDs and message indices are different numbers.

---

## How Selection Works

1. Read the following Pokémon's species category from `a/2/3/1`, member `0000`.
2. Read the current map header's **location-name ID** (called `mapsec` in the decomp). Load member `location-name ID + 1` from `a/2/2/0`.
3. Evaluate that location's rules together with the shared rules in member `0000`. Return the first passing rule's interaction ID.
4. Load member `interaction ID - 1` from `a/2/2/1` and execute its actions. An action can reference a movement in `a/2/2/2`, play a cry, show an emote and print a message from text archive 265.

![](resources/following-interaction-selection.png)

Different map headers with the same location-name ID share one location member. A rule may *additionally* require a particular header, so individual floors can still be distinguished.

### Shared and Location Rules

`a/2/2/0` contains **236 members** in vanilla:

| Members | File size | Contents |
|---|---:|---|
| `0000` | 1,400 bytes | 70 shared records |
| `0001`-`0235` | 600 bytes each | 30 location records per member |

Each record is **20 bytes**. The selector calculates `record address = base + index × 0x14`.

The evaluation order is:

1. Shared records 0-11.
2. Location records 0-29.
3. Shared records 12-69.

Rules can check species category, type, mood, friendship, HP, status, time, terrain, flags and other conditions. A zero species-category field means **no species restriction**, not category zero. Selectors 250-254 match category ranges instead of one exact category.

:::info What is mood?
**Mood** is a signed value from **-127 to +127** representing the Pokémon's current "connection" with the player since it has been the follower. It is separate from **friendship**, which ranges from **0 to 255**. An interaction can check either value, both values, or neither.

The condition table (`a220`) can require a particular mood range before selecting an interaction. The interaction definition (`a221`) can then add or subtract mood when its action sequence finishes. For example, Bellsprout's swaying interactions add **60 mood** but **zero friendship**; the result is capped at +127. This can affect which mood-dependent interactions qualify the next time the player speaks to the follower.

Mood is stored in the Pokémon's own data (`MON_DATA_MOOD`), but follower registration can reset it. **Changing maps does not itself reset mood** while the same Pokémon remains registered. On normal walking steps with a visible follower, mood moves **one point toward zero**. Registering a different follower resets that Pokémon's mood to **zero**; identity is checked using species and personality. The first follower registration after loading a save also resets mood, because the field system creates a fresh registration tracker. Saving alone does not perform this reset. Thus follower mood carries across locations during play, but it should not be treated as a lasting relationship value like friendship.
:::

Each candidate also has its own random acceptance threshold. This is an ordered sequence of checks, **not a weighted draw**. Earlier passing records prevent later records from being selected.

Shared record **69**, at offset **`0x564`** in member `0000`, provides the vanilla fallback: it has no conditions, a **100%** acceptance threshold and selects interaction **254**. Preserve a guaranteed fallback when editing. If all 100 candidates fail, the selector calls `GF_AssertFail` and returns zero, which the caller passes to the interaction loader; this is not a supported "no interaction" result.

### Key Rule Fields

| Offset within record | Meaning |
|---|---|
| `0x06` | Species-category selector; zero skips this check |
| `0x0A`-`0x0B` | Packed interaction ID and conditions: `interaction ID = halfword >> 6` |
| `0x0C`-`0x0D` | Optional header restriction: zero skips; otherwise `stored value - 1` is the required header |
| `0x11` | Acceptance threshold: pass if `LCRandom() % 100 < value`; zero always rejects |
| `0x12`-`0x13` | Required set flag; zero skips |

An interaction ID of zero disables the record before condition evaluation. Other fields may still restrict an otherwise matching species. The complete layout and selector values are included below.

### Complete Condition Record Reference

<details>
<summary>20-byte layout: every field and unused bit</summary>

Offsets are relative to the beginning of a record. Bit 0 is the least significant bit. Masks apply to the byte shown unless the row specifies a halfword. All two-byte fields are little-endian.

| Offset | Bits / mask | Meaning |
|---|---|---|
| `0x00` | Entire byte | HP-percentage category |
| `0x01` | Bits 0-3 / `0x0F` | Mood category |
| `0x01` | Bits 4-7 / `0xF0` | Friendship category |
| `0x02` | Bits 0-2 / `0x07` | Nature group |
| `0x02` | Bits 3-4 / `0x18` | Gender group |
| `0x02` | Bits 5-7 / `0xE0` | Status category |
| `0x03` | Bits 0-4 / `0x1F` | Held-item pocket category |
| `0x03` | Bits 5-7 / `0xE0` | Not read by the matcher |
| `0x04` | Bits 0-4 / `0x1F` | Type category |
| `0x04` | Bits 5-7 / `0xE0` | Highest Pokéathlon performance stat |
| `0x05` | Entire byte | Walking-encounter tile condition |
| `0x06` | Entire byte | Species-category selector |
| `0x07` | Entire byte | Required missing Shiny Leaf |
| `0x08` | Bits 0-2 / `0x07` | Weather category |
| `0x08` | Bits 3-7 / `0xF8` | Not read by the matcher |
| `0x09` | Bits 0-4 / `0x1F` | Not read by the matcher |
| `0x09` | Bits 5-7 / `0xE0` | Follower facing direction |
| `0x0A` | Bits 0-2 / `0x07` | Nearby map-object count |
| `0x0A` | Bits 3-5 / `0x38` | Time of day |
| `0x0A`-`0x0B` | Halfword bits 6-15 / `0xFFC0` | Interaction ID |
| `0x0C`-`0x0D` | Entire halfword | Required map-header ID + 1 |
| `0x0E`-`0x0F` | Entire halfword | Required metatile behavior |
| `0x10` | Bit 0 / `0x01` | Not read by the matcher |
| `0x10` | Bits 1-2 / `0x06` | Level-related selector; unusable as implemented |
| `0x10` | Bits 3-4 / `0x18` | Overworld-object selector; unusable as implemented |
| `0x10` | Bits 5-7 / `0xE0` | Uncollected hidden-item count |
| `0x11` | Entire byte | Random acceptance threshold |
| `0x12`-`0x13` | Entire halfword | Required set flag |

All **160 bits** are accounted for. The **14 unread bits** are zero in all vanilla records. Both unusable selectors are also zero throughout that data.

Record `N` begins at file offset `N × 0x14`. Neither the shared member nor the location members have a separate file header.

</details>

<details>
<summary>Condition selector values and matching behavior</summary>

**Unless stated otherwise, selector zero skips that condition.** Nonzero conditions in a record must all pass. The random threshold and interaction ID have their own zero behavior, described below.

#### HP, Mood and Friendship

HP uses `floor(current HP × 100 / maximum HP)`. HP categories are mutually exclusive bands, not minimum thresholds.

| Selector | HP category | Mood category | Friendship category |
|---:|---|---|---|
| 1 | Exactly 100% | Exactly 127 | Exactly 255 |
| 2 | 75-99% | 100-126 | 200-254 |
| 3 | 50-74% | 50-99 | 150-199 |
| 4 | 25-49% | 30-49 | 90-149 |
| 5 | Below 25% | -29 through 29 | 60-89 |
| 6 | No generated match | -49 through -30 | 30-59 |
| 7 | No generated match | -126 through -50 | 1-29 |
| 8 | No generated match | Exactly -127 | Exactly 0 |
| 9 | No generated match | At least 0 | At least 90 |
| 10 | No generated match | Below 0 | Below 60 |

For example, byte `0x01 = 0x95` requires mood category **5** and friendship category **9**. Both checks must pass.

#### Nature

| Selector | Natures |
|---:|---|
| 1 | Naughty, Impish, Jolly, Naive, Sassy |
| 2 | Relaxed, Lax, Calm, Gentle |
| 3 | Docile, Serious, Modest, Quiet, Careful |
| 4 | Hardy, Brave, Adamant, Bold |
| 5 | Lonely, Timid, Bashful |
| 6 | Hasty, Mild, Rash, Quirky |

#### Gender and Status

Gender selector **1** means male; **2** means female **or genderless**. The comparison builder groups those latter two together. Selector **3** cannot match a generated gender category.

Status selectors are **1 = healthy**, **2 = burn**, **3 = freeze**, **4 = paralysis**, and **5 = poison or bad poison**. Selector **6** has no generated counterpart. Selector **7** accepts any of the ailment categories, including sleep.

The builder represents sleep internally as category **8**, which cannot fit directly in the record's three-bit field. Thus selector 7 can include sleep, but this field cannot directly request only sleep. When building the status category, poison takes priority, followed by sleep, burn, freeze and paralysis.

#### Held Item

This checks the held item's **bag pocket**, not its item ID or hold effect.

| Selector | Required pocket or condition |
|---:|---|
| 1 | Poké Balls |
| 2 | Medicine |
| 3 | Battle Items |
| 4 | Items |
| 5 | Mail |
| 6 | Berries |
| 7 | TMs/HMs |
| 8 | No held item |
| 9 | Any held item |

#### Type and Pokéathlon Performance

Either Pokémon type can satisfy the type condition. These are remapped interaction codes, not the usual internal type IDs:

```text
1 Normal       2 Fire         3 Water        4 Electric
5 Grass        6 Ice          7 Fighting     8 Poison
9 Ground      10 Flying      11 Psychic     12 Bug
13 Rock       14 Ghost       15 Dragon      16 Dark
17 Steel
```

The Pokéathlon selector checks the greatest current performance star value, including Aprijuice modifiers: **1 = Power, 2 = Stamina, 3 = Skill, 4 = Jump, 5 = Speed**. Ties favor Power, then Stamina, Jump, Skill and Speed, in that order.

#### Species Category and Shiny Leaf

Species selectors **1-249** require an exact match against the category read from `a231`. The special range selectors are:

| Selector | Accepted category |
|---:|---|
| 250 | At most 19 |
| 251 | At most 130 |
| 252 | 140-149 |
| 253 | At least 160 |
| 254 | At least 220 |

Species selector **255** is invalid: the matcher calls `GF_AssertFail` and returns failure.

Shiny Leaf selectors **1-5** require the corresponding leaf **A-E to be missing**. This tests one particular leaf, not the total number of leaves.

#### Tile, Weather, Facing and Time

- **Walking-encounter tile:** 1 = the follower's tile permits walking encounters; 2 = it does not. This is not simply a check for an encounter table on the map.
- **Weather:** 1 = weather ID 0 (clear); 3 = weather ID 1 (ordinary rain). Other weather IDs produce comparison category zero, so other nonzero selectors do not match.
- **Facing:** 1 = East; 2 = West; 3 = North; 4 = South.
- **Time:** 1 = morning; 2 = day; 3 = evening; 4 = night; 5 = late night.
- **Metatile behavior:** a nonzero halfword requires an exact match with the follower tile's behavior. The builder stores the comparison value as a byte, so record values above 255 cannot match this path.

#### Nearby Objects and Hidden Items

The nearby-object count covers active map objects within **one tile in both X and Z of the player**, a 3×3 area. It excludes object IDs `0xFD` (follower) and `0xFF` (player); sprites `0x54`, `0x55` and `0x56` (moveable and breakable rocks and cuttable trees) are handled separately rather than counted here. Selector **5** requires at least five counted objects. Other nonzero selectors require exactly that many.

The hidden-item count covers hidden-item background events on the current map whose collected flags are not set. Selector **4** requires at least four uncollected items. Other nonzero selectors require exactly that many.

#### Header, Flag, Interaction and Random Check

- **Map header:** stored zero skips the check; stored `N` requires current header `N - 1`. This can distinguish headers that share a location-name ID.
- **Flag:** a nonzero flag ID must be set. There is no inversion bit for requiring it to be clear.
- **Interaction:** `little_endian_halfword(0x0A) >> 6`. Zero skips the record before the matcher runs.
- **Random threshold:** `LCRandom() % 100 < threshold`. Zero always rejects; 100 or more always passes this check. Each candidate gets its own roll, **before** its other conditions are evaluated. These values are not weights or guaranteed overall selection rates.

#### Unusable Selectors

The **level selector** can encode only 0-3, but the comparison builder produces **4** for ordinary levels at least 48 and **6** for ordinary levels below 48. Consequently, no nonzero selector can pass its equality check.

The **overworld-object selector** has preliminary checks involving movable rocks (`0x54`) and breakable rocks (`0x55`), but **every nonzero branch returns failure**. The builder also tracks cuttable trees (`0x56`), but this condition does not consult that flag.

Both selectors are zero in all vanilla records. Keep them zero unless the relevant code is changed; they do not currently provide working level or rock/tree filters.

</details>

---

## Interaction Definitions

Each member of `a/2/2/1` is **52 bytes**:

| File offsets | Contents |
|---|---|
| `0x00`-`0x27` | Up to five 8-byte actions |
| `0x28`-`0x2B` | Enable Yes/No choice: zero = disabled |
| `0x2C`-`0x2D` | Interaction ID to load for Yes; zero ends |
| `0x2E`-`0x2F` | Interaction ID to load for No; zero ends |
| `0x30` | Signed friendship change |
| `0x31` | Signed follower mood change |
| `0x32` | Accessory ID + 1; zero = none |
| `0x33` | Shiny Leaf reward: zero = none, 1-5 = leaves A-E |

Each action has this layout:

| Offset within action | Size | Meaning |
|---|---:|---|
| `+0x00` | 2 | Movement ID: zero skips movement; `FFFF` terminates the action sequence |
| `+0x02` | 2 | Message reference: zero = none; otherwise archive 265 index `reference - 1` |
| `+0x04` | 2 | Sound/cry selector: zero = none; `4B 09` = normal cry; `4C 09` = cry mode 11 |
| `+0x06` | 1 | Emote selector: zero = none; 1-14 dispatch effect `selector - 1` |
| `+0x07` | 1 | Additional delay counter; zero in all active vanilla actions |

Actions execute movement/sound, then emote, then message, then delay. The sound is triggered through the movement definition's sound-enable field. Movement and message references are both one-based, but point to different resources. Ordinary follower messages always use archive 265; the archive number is supplied by code rather than stored in each action.

At sequence completion, friendship and mood changes are applied, then the executor handles a configured choice or reward. Accessory/Shiny Leaf result messages use a separate built-in path through text archive `40`.

<details>
<summary>Additional action, choice and reward behavior</summary>

- A movement ID of **zero** skips movement without ending the action. `FFFF` terminates the entire sequence; later slots are ignored. There is no separate action-count field in the file.
- Sound values **1-2378** are sound-effect IDs. Value **2379** (`4B 09`) selects normal cry mode 0; other values above 2378 select cry mode 11. Only zero, 2379 and 2380 occur in the vanilla actions.
- Emote selectors **1-14** invoke effect `selector - 1`; the graphics are listed below. Selectors **15-255** are skipped. This emote path is suppressed on metatile behaviors **46, 113 and 114**.
- The delay is an update counter, not a message or movement reference. It is zero in all vanilla instances.
- The signed friendship delta is applied with a resulting range of **0-255**. The signed mood delta is applied with a resulting range of **-127 to +127**. For example, byte `EC` represents **-20**, while `3C` represents **+60**.
- Yes/No branch values are **interaction IDs**, not message references: zero ends the interaction; `N` loads `a221` member `N - 1`.
- Accessory value `N` attempts to give accessory `N - 1`; the code checks whether it can be awarded. Leaf selectors 1-5 attempt to award leaves A-E and check whether the leaf is already present. Both paths display built-in success/failure or already-owned text.
- At completion, a configured Yes/No choice takes precedence over accessory and leaf handling; an accessory takes precedence over a leaf.
- Ordinary message buffers are populated with the follower's nickname, species name, player name, current location and held item name.

</details>

### Emote Graphics and Scripted Use

Follower emotes use resources in **`a/1/0/3`**, not `a222`. The mapping is a table of fourteen pairs of 32-bit member indices in **overlay 1**, symbol `ov01_02209544` (USA HeartGold RAM address `0x02209544`, decompressed overlay-1 file offset `0x23C44`). Each pair contains a texture-member index and a custom animation-member index.

| `a221` emote selector | Internal effect | Graphic | `a103` NSBTX member | `a103` custom animation member |
|---:|---:|---|---:|---:|
| 0 | None | None | - | - |
| 1 | 0 | Red heart | 2 | 150 |
| 2 | 1 | Joyful face | 3 | 151 |
| 3 | 2 | Angry face | 4 | 152 |
| 4 | 3 | Worried face | 5 | 153 |
| 5 | 4 | Smiling face | 6 | 154 |
| 6 | 5 | Concerned face | 7 | 155 |
| 7 | 6 | Music note | 8 | 156 |
| 8 | 7 | Question mark (`?`) | 9 | 157 |
| 9 | 8 | Exclamation point (`!`) | 10 | 158 |
| 10 | 9 | Blue water droplet | 11 | 159 |
| 11 | 10 | Angry crying face | 12 | 160 |
| 12 | 11 | Purple poison symbol | 13 | 161 |
| 13 | 12 | Speechless (`...`) | 14 | 162 |
| 14 | 13 | Sleeping (`zzz`) | 15 | 163 |

The follower-emote renderer also loads shared model member **130**, animation member **140** and texture member **28** from `a103`.

#### Movement Actions Versus Script Commands

`EmoteExclamation`, ID **`0x4B`**, is a **movement action**, executed within a sequence started by the top-level script command `ApplyMovement` (`0x5E`). 

The movement action's `length` argument repeats that action; it does **not** select a different emote. Ordinary movement scripts and the `a222` movement-segment format are also separate formats.

The standard movement actions use a **different renderer and resource set** from the fourteen follower emotes, although both obtain resources from `a103`:

| Route | Entry point | `a103` texture | Model | Shared animation |
|---|---|---:|---:|---:|
| Movement action `0x4B` / 75 | `ov01_02200540`, variant 0 | 17 | 118 | 140 |
| Movement action `0x67` / 103 | `ov01_02200540`, variant 1 | 24 | 125 | 140 |
| Follower emotes | `ov01_02203AB4` → `ov01_02203A48` | 2-15 | 130 | 140 |

#### Existing Follower-Heart Script Command

Top-level **`ScrCmd_597`**, opcode **`0x255`** (legacy DSPRE name `CMD_597`), takes **no parameters** and calls:

```text
ov01_02203AB4(fieldSystem, followingPokemonObject, 0)
```

It therefore uses the **same follower-emote renderer** as `a221` selector 1: internal effect 0, texture member 2 and animation member 150. The database describes this as a heart above the following Pokémon. It has an implemented native handler, and its task wrapper waits for the effect to finish. It does not read `a220`, `a221` or `a222` to select that effect.

The vanilla script sources contain **two occurrences**, both in script archive member **0163**, at file offsets **`0x58`** and **`0xA2`**. Both lie in unreachable script blocks: the member's sole entry calls `FollowMonInteract` and then jumps directly to the release/end block at `0xF0`. Thus the command survives in unused follower-script code, but no reachable vanilla use was found. The native follower interaction executor can still show emotes directly without executing command 597.

This existing command exposes only the following Pokémon and the fixed effect 0.  

#### Custom Command

A patch available [here](https://discord.com/channels/446824489045721090/477197363954581542/1565122390797586633) repurposes opcode **597** as `ShowEmoteOnObject`, adding target and emote parameters. It can display all fourteen follower emotes above the player, following Pokémon or a specified overworld. Both parameters accept literal values or script variables. The patched command uses emote IDs **0-13**, whereas `a221` uses selectors **1-14**; subtract one when translating an `a221` selector to the command.

### Movement Definitions

The vanilla `a/2/2/2` contains **108 members**, each **80 bytes**: up to ten 8-byte movement segments. A nonzero movement ID in an `a221` action loads member `movement ID - 1`.

<details>
<summary>Movement segment layout and execution</summary>

| Offset within segment | Size | Meaning |
|---|---:|---|
| `+0x00` | 1 byte | Facing override: zero leaves facing unchanged; otherwise internal direction + 1; `FF` ends the movement |
| `+0x01` | 1 byte | Segment duration in executor updates |
| `+0x02` | 1 signed byte | X displacement |
| `+0x03` | 1 signed byte | Vertical displacement |
| `+0x04` | 1 signed byte | Z displacement |
| `+0x05` | 1 byte | Nonzero triggers the current `a221` action's sound/cry selector |
| `+0x06`-`+0x07` | 2 bytes | Not read by this movement executor |

Facing overrides are **1 = North, 2 = South, 3 = West, 4 = East**. These use the native direction enumeration **plus one**, unlike the remapped facing condition in `a220`.

Position/facing changes and the sound trigger are applied at the start of a segment; the executor then counts its duration. Displacement values are applied in the game's fixed-point position units (`value << 12`). The vertical adjustment follows the follower's render-offset path and is suppressed for Diglett and Dugtrio. At the end of the complete movement, the saved position and facing are restored.

For Bellsprout, movement IDs **50** and **51** load members **0049** and **0050**. They contain the same ten-segment horizontal sway, with segment durations of **8** and **4** updates respectively. The latter therefore performs the pattern faster. Their first segment enables the cry specified by the action.

</details>

---

## Case Studies

Here, a **special interaction** means a location rule restricted to a species' dedicated category. A thematic behavior may have several action/text variants or be reused in several locations.

### Bellsprout: One Bespoke Behavior, Two Variants

Bellsprout is species **69**. At offset `69 - 1 = 0x44` in `a/2/3/1`, member `0000`, the byte is `83`: category **131**.

Sprout Tower has location-name ID **204**, so its rules are in `a/2/2/0`, member **0205**. Its headers 110, 155 and 156 share that location member.

| Record index | Record offset | Category | Packed interaction bytes | Interaction | Acceptance check |
|---:|---|---:|---|---:|---:|
| 3 | `0x3C` | 131 | `00 A9` → `0xA900 >> 6` | 676 | 50% |
| 6 | `0x78` | 131 | `C0 A8` → `0xA8C0 >> 6` | 675 | 50% |

Both records have no other conditions. These are *sequential* checks, **not** two equally weighted alternatives.

| Interaction | `a221` member | Performance | Text archive 265 |
|---:|---|---|---|
| 675 | `0674` | Movement 50 twice; normal cry in the first action; emote 7 and text in the second | **587**: "[Pokémon] swayed and danced around as it pleased." |
| 676 | `0675` | Faster movement 51 three times; normal cry in the first action; emote 7 and text in the third | **588**: "[Pokémon] swayed around, dancing in a strange manner." |

For interaction 675, the stored message bytes at `a221/0674 + 0x0A` are `4C 02`: **588**, which becomes message index **587**. Both interactions add **60 mood** and zero friendship.

The same two interactions are also selected by category-131 rules in **Bell Tower**, member **0206**. Bellsprout therefore has one bespoke swaying behavior with two variants, reused in two locations; it does not literally have only one record or one interaction ID.

### Eevee: No Dedicated Species Rules

Eevee is species **133**. Its category byte is `1D` (**29**), at offset `0x84` of `a/2/3/1`, member `0000`.

There are **no category-29 selectors anywhere in the inspected `a/2/2/0`**. Eevee therefore has no dedicated species-category interaction rules in this table. It still qualifies for unrestricted rules, applicable category-range rules and conditions such as type or mood.

For example, Sprout Tower member **0205**, record 0 at offset `0x00`, has no species restriction and a 30% acceptance check. It selects interaction **336**:

```text
Any eligible species, including Eevee
  → a220 member 0205, record 0
  → interaction 336
  → a221 member 0335
  → stored message reference 276
  → text archive 265, message 275
```

The text is "[Pokémon] is dancing around the pillar!" This is a generic location interaction, not an Eevee-specific one. Earlier passing rules may select a different interaction.

### Pikachu: Several Location-Specific Behaviors

Pikachu is species **25**, mapped to category **23** (`17` at species-table offset `0x18`). Four dedicated category-23 records select three interaction definitions across three locations:

| Location | `a220` member | Record offset | Interaction → `a221` member | Archive 265 message | Acceptance check |
|---|---|---|---|---|---:|
| Power Plant | `0202` | `0x28` | 653 → `0652` | **566**: "had fun dancing a dance!" | 40% |
| Power Plant | `0202` | `0x64` | 654 → `0653` | **567**: "is so happy, it began to dance!" | 40% |
| Mt. Silver Cave | `0220` | `0x1F4` | 651 → `0650` | **562**: "is trembling with eagerness!" | 90% |
| Viridian Forest | `0225` | `0x00` | 654 → `0653` | **567**: same happy-dance interaction | 40% |

The listed text follows the Pokémon-name placeholder. These records have no additional conditions beyond species category and their random checks. Interaction **654 is reused**, demonstrating that each location rule need not have its own unique `a221` member.

---

## [Advanced] Adding Members

The following distinguishes **limits visible in the code** from **expansion approaches that have not been tested in-game**. Adding members is different from increasing the size of an existing member.

| Archive | Restriction visible in the code | Likely expansion route |
|---|---|---|
| `a220` | Member is `location-name ID + 1`; map headers store an **8-bit** location-name ID | Append location members, then assign corresponding new location-name IDs to headers |
| `a221` | `a220` stores only a **10-bit** interaction ID; all 1,023 nonzero IDs already have members | Reuse existing members, widen/change selection code, or investigate the wider Yes/No branch references |
| `a222` | Actions store a **16-bit** movement ID; zero skips and `FFFF` terminates | Append 80-byte movement members and reference their new IDs from actions |

### a220: Location IDs

The vanilla archive ends at member **0235**, corresponding to location-name ID **234**. An 8-bit map-header field can hold IDs up to **255**, so this loader can theoretically address members through **0256**. That leaves **21 additional location-member indices**, 0236-0256, without widening the header field.

Appending member **0236** would make it the interaction table for location-name ID **235**. It does not automatically attach to a new header or become an additional table for an existing location. Matching location-name text and other consumers of that location-name ID must also support the chosen value. 

Keep each new location member at **600 bytes / 30 records**. The shared member remains **1,400 bytes / 70 records**. The loader and candidate order use fixed buffer offsets and counts; appending records within a member does not increase the number evaluated. Oversized members can overwrite adjacent working data because the loader reads the whole member into those fixed regions.

### a221: Interaction IDs

The first appended member would be **1023**, requiring interaction ID **1024**. The `a220` field can encode only **0-1023**, with zero disabled. Therefore a newly appended `a221` member cannot be selected directly by an unchanged `a220` record.

There is a possible exception: **Yes/No branch references are 16-bit**, and the branch code passes them to the same interaction loader without the `a220` field's ten-bit extraction. A branch value of **1024** should therefore load appended member **1023**. This would make the new interaction reachable after a choice, not directly through location-rule selection. It remains an untested route, not an established expansion method.

Keep interaction members at **52 bytes**, with at most five action slots. Adding more actions to the file would require changes to the slot limits and working-buffer layout.

### a222: Movement IDs

The inspected archive has members **0000-0107**. Appending member **0108** would give it movement ID **109**, which fits the existing action field.

The field can encode movement IDs **1-65534**; zero skips movement and `65535` (`FFFF`) ends the action sequence. Thus the field itself leaves substantial room for new movement members, although very large archives and tool-specific limits have not been tested.

Keep each member at **80 bytes**, with at most ten movement segments. More members do not require more movement-buffer space because one definition is loaded at a time. More segments within one member would require code and buffer changes.

---

## Choosing What to Edit

| Intended change | Data to edit |
|---|---|
| Change which category a species belongs to | Species byte in `a/2/3/1`, member `0000` |
| Change where/when an interaction can be selected | Relevant rule in `a/2/2/0` |
| Change movements, cries, emotes, messages or mood effects | Interaction member in `a/2/2/1` |
| Change the movement pattern itself | Movement member in `a/2/2/2` |
| Change the wording | Corresponding message in text archive 265 |

Check for reuse before editing: changing an `a221` interaction or an `a222` movement changes every rule/action that references it. When replacing an interaction ID in `a220`, preserve the lower six condition bits of the halfword at `0x0A`:

```text
new_halfword = (old_halfword & 0x003F) | (new_interaction_id << 6)
```

For unpacking and repacking, see [Unpacking NARCs](/docs/universal/guides/unpacking_narcs/).
