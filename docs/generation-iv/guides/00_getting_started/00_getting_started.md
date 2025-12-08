---
title: Getting Started
tags:
  - Guide (Diamond)
  - Guide (Pearl)
  - Guide (Platinum)
  - Guide (HeartGold)
  - Guide (SoulSilver)  
---

# Getting Started
### Pokémon Diamond, Pearl, Platinum, HeartGold & SoulSilver Versions
> Maintainer(s): 

## Disclaimer
This page (and the information on it) are subject to change at any point in time, as tools get updated and/or deprecated. 
Please check back here often for the most up to date recommendations.

## Getting Started
### Prerequisites
To start, you first need to obtain a dump of the game.<br/> 
**This will not be provided for you under any circumstances, as it enables piracy (which is not supported by us); you must perform this process yourself.**

For this, you will need: 
- A Generation IV Pokémon cartridge (Diamond, Pearl, Platinum, HeartGold or SoulSilver Version).
- A modified Nintendo DSi/3DS.
- [GodMode9i](https://github.com/DS-Homebrew/GodMode9i).

1. Launch `GodMode9i` on your console.
2. Ensure the game cartridge is inserted.
3. Select the `NDS GAMECARD` option in `GodMode9i`.
4. Press `A` (yes) to dump the ROM.

If successful, your ROM should be dumped to your SD card under the path `sd:/gm9i/out`.

### Known Good ROMs
The tools to modify the games are verified to work with the following dumps.<br/>If your dump is not on this list, it is not guaranteed to work correctly with our tools, as it may be missing features (such as DSi-enhanced features). If this is the case, redump your game.  

**We will not provide any dumps, as it enables piracy (which is not supported by us), so do not ask.**  

There are multiple ways to confirm the filehash of your ROM. Two examples are:
1. **Operating System Agnostic:** Use a site such as [Marc Robledo's Rom Patcher](https://www.marcrobledo.com/RomPatcher.js/)
    - You may need to select to "Force calculate checksum".
    - All three hash algorithms (MD5, SHA1, SHA256) will be returned.
2. **Windows:** Use a command line interface, such as PowerShell (Windows 10) or Terminal (Windows 11):
    - Open PowerShell (`Win` + `X`).
    - Navigate to the directory where the ROM file is located* (a basic summary of navigating directories in command prompt is [here](https://www.lifewire.com/change-directories-in-command-prompt-5185508)).
    - Use the following command, replacing "**ROM_name.nds**" with the exact name of your ROM dump:
      - `certutil -hashfile ROM_name.nds`  
      - The hash will be returned (along with the default hash algorithm: SHA1).
      - A specified hash algorithm can be returned by adding this as a parameter to the command, for example: `certutil -hashfile ROM_name.nds SHA256`  
3. **Mac:** Use a command line interface, such as Terminal
    - Open a Terminal
    - Navigate to the directory where the ROM file is located*
    - Use the following command, replacing "**ROM_name.nds**" with the exact name of your ROM dump:
      - `shasum -a 256 ROM_name.nds`
      - The SHA256 hash will be returned

> *It is possible to run these commands without navigating to the same directory as the ROM by replacing "**ROM_name.nds**" with the path to the ROM and the exact name of your ROM dump, e.g. `/path/to/ROM_name.nds`


<details>
<summary>Pokémon Diamond (Known Good ROMs)</summary>
| Game                         | MD5                              | SHA1                                     | SHA256                                                           |
| --------------------------- | -------------------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| Diamond (Europe) (Rev 13) | ca7620b92665a2565b5c1831f5f66ec0 | 66d2fbfb0dbc1f86a3d726971196989b950092bc | 726b2c6b0bdca37bf68881542cf7d1c26f0f8579ae1585491b0c73bc1d3fc63e |
| Diamond (France) (Rev 5)  | da0382f57cee0f6807f43a61a68c0520 | e961e632ca6f72f81e19c5be3d93936772e8544a | b0a25fdbd0d9fdf15aa4e0d27b21efd000b5b629ef1aa74b91b0cd931253da91 |
| Diamond (Germany) (Rev 5) | 0683ef614f0cef8228db7676c074c18e | 432dbe312bc51e36bb8cb6fcb5e08f6968f124a4 | e038a2cd5ac3c8ead0798dac729b517dbeb6193480eb3bed77aa1a93323825fc |
| Diamond (Italy) (Rev 5)   | 1920fc6a66b3bf4bff2062044f61f4eb | cd7bcb4de080f3548ca3fb14d946d5ddc717b03b | 8cf55b022ccb98069fd19533b664789f4434ff0549fb4406a0ec4195fa52f7a3 |
| Diamond (Japan) (Rev 5)   | b538e7ad308fc793bb9e568faf0ef2df | 32d9bb56070be14b74c7447c8b46de55cc93ac27 | cf042e818bbda4f903bbd9b6a3ff8280a3882b122b2129a9ffcc78a8ea3393fd |
| Diamond (Japan) (Rev 6)   | c1d66b8d4fbdbfa57ff4868970fe19d2 | 85e5f59ea521c1b1d7026db813cca9997ad32693 | 88812309b11978962288fae2ee41c138dd5fb4524d22a2ae3bbcaec072c2b0eb |
| Diamond (Japan)           | 6f8287c855130e7525cf1789ec3f303c | fb0bba9fca12d418c8b430e8950171cc356ee981 | 0acaf112a5a307110fbc1c0cedbd88bc7ab21dbacff6406118cc2363a1c05063 |
| Diamond (Korea)           | f1ac83c7d2a9368f88ea3848a5e09048 | d53c22b2e5fd96eed843d3b45eb192c7e9379da0 | 29107979650a83825e916d26f1811e303afd5680c2644a032f9766eb60d694aa |
| Diamond (Spain) (Rev 5)   | 1dea9d321d8413a43dbd6e793bdfdec0 | ce2595eba1e23eacb37056598319619f81aefc29 | dffbea2030fd7c9f9f98e84e2a8705484b06e9bc2975c02a810d67e18253fabd |
| Diamond (USA) (Rev 5)     | 02a1af2a677d101394b1d99164a8c249 | a46233d8b79a69ea87aa295a0efad5237d02841e | e29bc6ebe431d7a6b238267b6b1521fec4a3bc14f2fa348798062f870c738454 |
</details>

<details>
<summary>Pokémon Pearl (Known Good ROMs)</summary>
| Game                         | MD5                              | SHA1                                     | SHA256                                                           |
| ---------------------------- | -------------------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| Pearl (Europe) (Rev 13)   | a80caf9df272106fd36c56efefb3eb98 | b5652db288c75417de159d93d297689c885dbbd1 | 7c8fbfe3b4b87f02bb9a962d1bb5a1332b38508c620b26749693bbba29c16c0c |
| Pearl (France) (Rev 5)    | a2c9d259ad7262e5dcd5dd3ff08d798a | dbe7ff557a2d166038f5294ed82868150fe84442 | e0e7b6e92d4da87bda329a28807ca2ef6b945c80ce081ae70f343ec7a0e65d7a |
| Pearl (Germany) (Rev 5)   | dde6bf2aa2c489e5b0ab65c740e4bba0 | c13395f2a35bb9d2f8e867d9f504896398f795cb | aafd452eb732c52453ba2ef8d6286fa6770accd931f9a39326a3ca74cba5987e |
| Pearl (Italy) (Rev 5)     | fb1e480b92771a75eb9f97a36e938fd6 | 23c5695662e906d9d57ff6e0b3e7842b9e7a1b84 | 937c3019bdd60b7dbd98928ae5b2beb21382a6ec10dfe117f1b64d7c9b95b405 |
| Pearl (Japan) (Rev 5)     | 5b1a51cb11c3b7a9a833de03566bf209 | 6f7592402cd5f0fb57b219a508df3826d82f75dd | af3ed17c277730ffd7d38ea610741207c4e904fb4e7f0cae9b30ca042c2e81c1 |
| Pearl (Japan) (Rev 6)     | 751d4a0524e4ef38b153ccfb5d21271f | 2cec46f24c0463350ed7de961dc6d3256a734772 | 82937fcff7a536867f7ddb586881a2ba53954b6d6e268e8ecdb121fde1d9d900 |
| Pearl (Japan)             | 0d509fb3db3266add4504ca5bfeac0bd | d2ccb37242a39df000c8be83002a62db126aa5ea | 2d6c8376dd0b32b4dddfedea268a5ca367356380d5c46b0d0775b677dfb348f2 |
| Pearl (Korea)             | 075e0efbafff7427215d9339f29f303d | d1b07c0aec0da5ba865ec1b4bc39a2be4c9fb8fc | df91e96aba3323528ca6635520b844b1588d6d1ff794b096c1802813b2fa3039 |
| Pearl (Spain) (Rev 5)     | 5140e7176063c5a69ccda00ebadc706e | 3f0e08537c5579c9492d4a9cdff3ae30bb037f3b | 4dc8f5a4e89db2b7236268563a6ab9121123a3acf9f0ad49914441521def80a8 |
| Pearl (USA) (Rev 5)       | e5da92c8cfabedd0d037ff33a2f2b6ba | 99083bf15ec7c6b81b4ba241ee10abd9e80999ac | 2dcc471033d1757ee572415f5773a77af67b350ad59e2aeb3fc28c1402c3a84c |
</details>

<details>
<summary>Pokémon Platinum (Known Good ROMs)</summary>
| Game                         | MD5                              | SHA1                                     | SHA256                                                           |
| ---------------------------- | -------------------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| Platinum (Europe) (Rev 10) | 5159324028bff42bf5efdb03ebc8b051 | 8d15cd443d4e83e20493c79d3f9dc408c4f51ae0 | 7f703c7911864a6a99e63339c6bb7f7a32aabd5fb7d56a902a949a2d8bfccba4 |
| Platinum (France)          | 0c731deabf0288368f281a2413e65f91 | 41ea92f794560e347cd9509f5ec9e9d479a4bbf1 | 1cfd024519116c1c6285d6af2dbdfcec778e9d74c7c18585e22032e81aaa7eb8 |
| Platinum (Germany)         | 7df356ef2030406b78d4aec30b0e65d1 | d40f19ac24d67c721a4ab25e1c013154443d75b4 | 9ffc28ff2b2d8fab60454548f92e60dd5d44f0dcc456e6e00e756424b3259217 |
| Platinum (Italy)           | 4fab0a9519404a0145da4342e95b01ca | 19148e7a38e731680fb2a045ed112b115be90fc2 | 9738c8fdb1adad1b4209531b692dd0cb7fb86329b30f54a72837128cdb3eb353 |
| Platinum (Japan)           | 8271f64f5c7fb299adf937a8be6d8c88 | 5b460ab10358fba74d14a704db0d9517172ee3b6 | 532f3044b58ce5da524abf9b411150b25d445e371dec1b19c5a091376c209182 |
| Platinum (Korea)           | 20b6e4c1cf6a2b7d6ae89790dc0021de | a8386c3af4c9c01a9968e39347358ed07ddf7bdd | b7f37ec3085a8bb468de5ec9478042faadc81632053035bd6c1f335beaf495e7 |
| Platinum (Spain)           | 5f8f877360136120edfe4f0e0669c8f0 | 12faf0dbcf0fb558438e464afbfe7c5b5e79e8c6 | b420059bb0b982e7ddcc9d33f21b85547e443f77f6424ff0ff7522d386d05fab |
| Platinum (USA) (Rev 1)     | ab828b0d13f09469a71460a34d0de51b | 0862ec35b24de5c7e2dcb88c9eea0873110d755c | fbce4c4def0c7797f8dd238a3d7a5e48b4a7e3abd86890ac65f6321cef781bdb |
| Platinum (USA)             | d66ad7a2a0068b5d46e0781ca4953ae9 | ce81046eda7d232513069519cb2085349896dec7 | ede62292aa7f7014ff27d42097e769753380531739889c29b968b67b80f80678 |
</details>

<details>
<summary>Pokémon HeartGold (Known Good ROMs)</summary>
| Game                         | MD5                              | SHA1                                     | SHA256                                                           |
| ---------------------------- | -------------------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| HeartGold (Europe) (Rev 10)  | 80c1024a03aa2c1e3d66ba168db97739 | eb47ab4ba0326ae842135f62c7ec68cf85c9785f | 86a977f863c87759f4001fdc47182090e0bfd08f52fa7e74d55db705f96bc335 |
| HeartGold (France)           | 1f937c6376a25ff36358ca5819c83f5a | f09016569ee5dbac9dd0098d04927987c47645b9 | ee540ea4eff5268e8b7a85bc63db654c627dd82c25ebe921211870646b25356a |
| HeartGold (Germany)          | 5582a09af4fc2a9873712497c9cd425b | 13b6853aa93121069df1d17446d3ecb36872aecf | cd31f3185db0cba00c388ae67b575f9af5c9a79ec134e7a2a55102e80b12fb68 |
| HeartGold (Italy)            | 7aae450618f86f8d9e6f43aca52ac919 | 6b7f9bff57eb58bc8d6e48e9e5c370719458c721 | 013d04f5512b01ad98735a5f850dc039f0ee80bc57035b3a10e8b650be690ce1 |
| HeartGold (Japan)            | e3f7933aee8cc2694629293f16c1c0a8 | 82451ee0ca9c3b768ba21367b92d8aa0e8defda7 | 24aa2207ed9d6f44869197e8c70a580b738ebe4064a68c99105651d88453a0f1 |
| HeartGold (Korea)            | 7d4c656de7baabc455aacdec85b18ad5 | 52516d1690d01b59e03c7fe3b1259239f5daea38 | 66e34019c30fb0d77c530ebc254a0ac94b6fba1a73e0a1bd0bfb57dc6f475658 |
| HeartGold (Spain)            | b101936ad60a33e3c06b72c6ea15a99a | 237cc2e34e51dc291eb61238b8e75f9e78ba1285 | c1c6ecfbb602cc7676b277e1c533a1ef0d80af238fca237e6d34ad83d230660a |
| HeartGold (USA)              | 258cea3a62ac0d6eb04b5a0fd764d788 | 4fcded0e2713dc03929845de631d0932ea2b5a37 | 65f02a56842b75aa92d775d56d657a56fe3fa993550b04dc20704ab82d760105 |
</details>

<details>
<summary>Pokémon SoulSilver (Known Good ROMs)</summary>
| Game                         | MD5                              | SHA1                                     | SHA256                                                           |
| ---------------------------- | -------------------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| SoulSilver (Europe) (Rev 10) | 706a77bb5183a22b8436a46e38f2dd32 | 27a25c23aa1c0ecabe48a30a004b96c9dbc97730 | 94ad298c32bbcc623d042ca20f46cfcaa399a8e814260cc5645dfe5f4c167c17 |
| SoulSilver (France)          | 7aee270f3ce81ccf897badc2307b88a9 | ba78f6fff3fc1e32aff8fcc4707a2da1ec996f7c | bd224ab12e954c6469abcad66415a3dbeda68cebb14f66db4e29f4460f7502ca |
| SoulSilver (Germany)         | 7f128163a5aff6e67c67a8ec39242166 | 576cdb7eec728c49aed85b9dd7e1e084ba1f08f9 | 7d3b9affa155d4a899bdb65deb36d927b733cc5b7cefa0f2064efda90938fd63 |
| SoulSilver (Italy)           | 84e670608d8d70da372a89c3a50f0ecd | e137acf711e0b14c297abf0254e5b4a9263338e7 | deae3fa3ffc4456aaf922b5dfe4b238a15d36a821c1f79c9afdce8a7be58e85e |
| SoulSilver (Japan)           | a1211b2d44e551197712177e3d50b491 | facb67d1b6eece6e2b9d5c614427ac6f99b653d3 | a6abac6b4bada789bddf4a96ff63f1d1f3d99662f0976b088d3d035ac69beaa0 |
| SoulSilver (Korea)           | 65a556d5457feb0d125768813ee63209 | 1aa8c3e63f9848d8677c02f96db78d0bfa6aaa7f | abb6ddcac6abaa5f99806a636410d21b8648d84fcf0277c826f20929794bdfdd |
| SoulSilver (Spain)           | 2fca31ec4858b74dd174d0c7bcc87dc6 | beaae88bb1dc7d09de5f393a67ef0559bde508c8 | c1573ed5e01051e85310c3210d01629c338dfd12a92b8bfff72e560e62f2cf4b |
| SoulSilver (USA)             | 8a6c8888bed9e1dce952f840351b73f2 | f8dc38ea20c17541a43b58c5e6d18c1732c7e582 | 51d0f94a16af7d77c067b4cb7d821ba890a13203a2e2c76049623332c0582e20 |
</details>


### Recommended Tools
The following tools are recommended to use when modifying the game files.

<table>
  <thead>
    <tr>
        <th>Objective</th>
        <th>Tool(s) / Resource(s)</th>
        <th>Tutorials</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Audio/Music</td>
        <td>Location & battle music editing (and Table Editor for HGSS): <ul><li>[DSPRE (DS Pokémon ROM Editor) Reloaded](https://github.com/Mixone-FinallyHere/DS-Pokemon-Rom-Editor)</li></ul> Extracting and Inserting Sounds: <ul><li>[Nitro Studio 2 (Lonk Fork)](https://www.romhacking.net/utilities/1639/)</li></ul> Obtain Sound Font Data and Extract Midi: <ul><li>[VGMTrans](https://github.com/vgmtrans/vgmtrans)</li></ul> Known Commands for Music Sequencing: <ul><li>[SSEQ - SMFT - MIDI Commands](https://docs.google.com/spreadsheets/d/1c-tActLRWAYz_VongnSyGVPFlRi5IXgm/)</li></ul> Playback: <ul><li>[DS Sound Studio (PlatinumMaster Fork)](https://github.com/PlatinumMaster/DS-Sound-Studio/releases)</li></ul></td>
        <td><ul><li>[Music Insertion Wiki](/docs/universal/guides/music_insertion/)</li></ul></td>
    </tr>
    <tr>
        <td>Graphic Editing</td>
        <td>Overworld Sprite Editing <ul><li>[BTX Editor 2](https://drive.google.com/drive/folders/1CeM3U9x7NnZO5rqe3xx1VQZqMWsq0qaX?usp=sharing)</li></ul> Indexing Sprites (to be accepted by ROMs): <ul><li> [Graphics Gale](https://drive.google.com/drive/folders/1kUp2eqzO0Kz-6pr05XWynUhNGYVUTzmp?usp=sharing)</li></ul> Edit Palette Colours: <ul><li> [Console Tool](https://drive.google.com/drive/folders/1Zse00msjpUmKg73ruGC8xHjDX0yC_3sK?usp=sharing)</li></ul> Battle Sprite Editing: <ul><li> [PokéDSPic](https://drive.google.com/drive/folders/1HDeyHShMBfz-Kz5UwelNSEzADlBYog-D?usp=drive_link)</li><li>[PokEditor (v2)](https://github.com/turtleisaac/PokEditor-v2/releases)</li></ul> Tileset Editing: <ul><li> [NitroPaint](https://github.com/Garhoogin/NitroPaint)</li><li>[Tilemap Studio](https://github.com/Rangi42/tilemap-studio)</li></ul> Sprite Drawing (with Indexing): <ul><li> [Aseprite (paid)](https://www.aseprite.org/)</li><li>[Aseprite (free)](https://github.com/aseprite/aseprite) (requires knowledge on compilation) </li></ul></td>
        <td><ul><li>[Editing Overworld Sprites](https://youtu.be/kGw7wzpO1cw)</li><li>[Quick Colour Changes](https://www.youtube.com/watch?v=ESQjr7OB1pA&list=PLKTW2ZuQjbEEVYHhxRZF9N8v_9AUneJq1&index=19)</li><li>[Advanced Pokémon Edits](https://www.youtube.com/watch?v=Qqow_RBh3G8&list=PLKTW2ZuQjbEEVYHhxRZF9N8v_9AUneJq1&index=6)</li><li>[PokEditor Tutorials](https://docs.google.com/document/d/1F9Hotlf8CQj685xtVU3UIdWXBVIyMyddsfq0Kau6F40/edit?usp=sharing)</li></ul></td>
    </tr>
    <tr>
        <td>Mart/Shop Editing</td>
        <td>Extensive PokéMart Editing (**HeartGold Version only**):<ul><li>[HG-Engine](https://github.com/BluRosie/hg-engine/blob/main/README.md)</li></ul> Universal Pokémon Shop Editor:<ul><li>[UPSE](https://github.com/upr-fvx/universal-pokemon-randomizer-fvx/releases/tag/vFVX1.3.0) (Progressive Mart edits, but badge-gating only applies to vanilla items)</li></ul></td>
        <td><ul><li>[Customise PokéMarts](https://youtu.be/p9F7JW74QK4)</li></ul></td>
    </tr>
    <tr>
        <td>[Mapping](/docs/generation-iv/guides/mapping/)</td>
        <td>PDSMS (Pokemon DS Map Studio): Tile-based custom map creation/editing tool<ul><li>[Trifindo's current release](https://github.com/Trifindo/Pokemon-DS-Map-Studio)</li><li>[AdAstra's fork](https://github.com/AdAstra-LD/Pokemon-DS-Map-Studio) (additional QoL features)</li><li>[Trifindo's v1.19](https://github.com/Trifindo/Pokemon-DS-Map-Studio/releases/tag/1.19) (working Animation Editor)</li></ul> Texture Editing: <ul><li> [NitroPaint](https://github.com/Garhoogin/NitroPaint)</li></ul> Importing Maps to ROM: <ul><li> [DSPRE (DS Pokémon ROM Editor) Reloaded](https://github.com/Mixone-FinallyHere/DS-Pokemon-Rom-Editor)</li></ul></td>
        <td><ul><li>[Making First Map](https://www.youtube.com/watch?v=Xnj8cWDRbaA&list=PLKTW2ZuQjbEEVYHhxRZF9N8v_9AUneJq1&index=21)</li><li>[Importing Custom Maps](https://www.youtube.com/watch?v=fcGjxI7oWsI&list=PLKTW2ZuQjbEEVYHhxRZF9N8v_9AUneJq1&index=23)</li><li>[Mapping Overview Wiki Page](/docs/generation-iv/guides/mapping/)</li></ul></td>
    </tr>
    <tr>
        <td>Pokédex (Regional) Editing</td>
        <td>Add, remove, re-order, edit descriptions & habitats:<ul><li>[Raven DexEditor](https://github.com/RavenDS/dex-editor/)</li></ul></td>
        <td></td>
    </tr>
    <tr>
        <td>Pokémon Data Editing</td>
        <td>Learnsets, Abilities, Stats, Types, Evolution Methods:<ul><li>[DSPRE (DS Pokémon ROM Editor) Reloaded](https://github.com/Mixone-FinallyHere/DS-Pokemon-Rom-Editor) (good for one-by-one changes)</li><li>[PokEditor (v2)](https://github.com/turtleisaac/PokEditor-v2/releases) (good for batch changes)</li></ul></td>
        <td><ul><li>[PokEditor Tutorials](https://docs.google.com/document/d/1F9Hotlf8CQj685xtVU3UIdWXBVIyMyddsfq0Kau6F40/edit?usp=sharing)</li></ul></td>
    </tr>
    <tr>
        <td>ROM Tools</td>
        <td>File Explorer:<ul><li>[Tinke v0.9.2](https://github.com/pleonex/tinke/releases)</li></ul> Patching Tools:<ul><li>[Delta Patcher](https://github.com/marco-calautti/DeltaPatcher)</li><li>[XDelta](https://www.romhacking.net/utilities/598/)</li></ul></td>
        <td></td>
    </tr>
    <tr>
        <td>Save File Editing</td>
        <td>Edit Pokémon, Bag Items etc.<ul><li>[PKHex](https://github.com/kwsch/PKHeX)</li><li>[PKMDS Save Editor](https://pkmds.app/) (web-based)</li></ul></td>
        <td><ul><li>[PKHex Tutorial](https://www.youtube.com/watch?v=Jw-AiIswbLQ&ab_channel=Drxx)</li></ul></td>
    </tr>
    <tr>
        <td>Script Editing</td>
        <td>Edit Scripts and Level Scripts:<ul><li>[DSPRE (DS Pokémon ROM Editor) Reloaded](https://github.com/Mixone-FinallyHere/DS-Pokemon-Rom-Editor)</li></ul> Script Commands Database (Gen4):<ul><li>[SCRCMD](https://docs.google.com/spreadsheets/d/1WE6aCJeVbIMDfWYPykQEqLyBAZCDK8YlYFBD6hChiVA/edit?usp=sharing)</li></ul></td>
        <td><ul><li>[How to Write a Script](https://www.youtube.com/watch?v=FW0s6vUB9KA&list=PLKTW2ZuQjbEEVYHhxRZF9N8v_9AUneJq1&index=27)</li><li>[Scripting 101](https://youtu.be/N0IG1p1TUZQ?feature=shared)</li></ul></td>
    </tr>
    <tr>
        <td>Texts Editing</td>
        <td>Edit Dialogue and More (Location names, move names...etc.):<ul><li>[DSPRE (DS Pokémon ROM Editor) Reloaded](https://github.com/Mixone-FinallyHere/DS-Pokemon-Rom-Editor)</li></ul></td>
        <td><ul><li>[How to Edit Text](https://www.youtube.com/watch?v=qxSx2oQt4kE&list=PLKTW2ZuQjbEEVYHhxRZF9N8v_9AUneJq1&index=8)</li></ul></td>
    </tr>
    <tr>
        <td>Trainer Battle Editing</td>
        <td>Trainer AI, Class, Items & Team Edits: <ul><li>[DSPRE (DS Pokémon ROM Editor) Reloaded](https://github.com/Mixone-FinallyHere/DS-Pokemon-Rom-Editor)</li><li>[VSMaker2](https://github.com/Chvlkie/VSMaker2)</li><li>[PokEditor (v2)](https://github.com/turtleisaac/PokEditor-v2/releases)</li></ul></td>
        <td><ul><li>[DSPRE Trainer Editing](https://www.youtube.com/watch?v=rU5he368oss&list=PLKTW2ZuQjbEEVYHhxRZF9N8v_9AUneJq1&index=10)</li><li>[PokEditor Tutorials](https://docs.google.com/document/d/1F9Hotlf8CQj685xtVU3UIdWXBVIyMyddsfq0Kau6F40/edit?usp=sharing)</li></ul></td>
    </tr>
    <tr>
        <td>User Interface (UI) Editing</td>
        <td>Palette changes (**Heartgold & SoulSilver Versions only**): <ul><li>[HGSS Menu Palette Editor](https://pokehacking.com/tools/hgssmenu/)</li></ul> Town Map changes: <ul><li>[Raven Town Map Editor](https://github.com/RavenDS/town-map-editor)</li></ul></td>
        <td></td>
    </tr>
    <tr>
        <td>Wild Encounters Editing</td>
        <td>Edit Wild Encounter Tables <ul><li>[DSPRE (DS Pokémon ROM Editor) Reloaded](https://github.com/Mixone-FinallyHere/DS-Pokemon-Rom-Editor) (Headbutt Trees & Safari Zone for HGSS only)</li><li>[PokEditor (v2)](https://github.com/turtleisaac/PokEditor-v2/releases)</li></ul></td>
        <td><ul><li>[DSPRE Encounters Editing](https://www.youtube.com/watch?v=-an8U5tpbNo&list=PLKTW2ZuQjbEEVYHhxRZF9N8v_9AUneJq1&index=20)</li><li>[PokEditor Tutorials](https://docs.google.com/document/d/1F9Hotlf8CQj685xtVU3UIdWXBVIyMyddsfq0Kau6F40/edit?usp=sharing)</li></ul></td>
    </tr>
  </tbody>
</table>

### Recommended Resources
#### Wiki Resources
- [HGSS & Platinum File Structure](/docs/generation-iv/resources/hgss-file_structure/)

#### External Resources
In addition to the resources available on this Wiki, there are a number of external resources related to the vanilla Generation IV Pokémon games, which are useful when ROM Hacking:
- [Reverse Engineering DS Games Tutorial](https://www.starcubelabs.com/reverse-engineering-ds/)
- [HGSS Decompilation](https://github.com/pret/pokeheartgold)
- [Platinum Decompilation](https://github.com/pret/pokeplatinum)
- [Generation IV Trainer Move Selection AI](https://gist.github.com/lhearachel/ff61af1f58c84c96592b0b8184dba096) full breakdown
