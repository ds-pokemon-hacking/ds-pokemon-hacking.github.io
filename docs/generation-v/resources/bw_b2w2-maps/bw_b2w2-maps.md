---
title: Map Containers
tags:
  - Resource (Black)
  - Resource (White)
  - Resource (Black 2)
  - Resource (White 2)
---

# Maps
> Author(s): [Gonhex](https://github.com/Gonhex) <br />
> Research: [Gonhex](https://github.com/Gonhex), [Trifindo](https://github.com/Trifindo)

The term "map" is used for areas of the game world. The player can navigate through them and interact with other objects placed on the map. Usually one map has a size of 32 by 32 tiles and a maximum of four of them are loaded simultaneously. The maps are usually selected by the currently active "matrix" in `/a/0/0/9` but there are cases where the game chooses an other map, depending on the in-game season.

## Table of Contents
  - [Data Location](#data-location)
  - [Data Structure](#data-structure)
    - [Container Structure](#container-structure)
    - [Model](#model)
    - [Permissions](#permissions)
      - [Tile](#tile)
      - [Terrain](#terrain)
      - [Environment](#environment)
      - [Terrain extension for corners](#terrain-extension-for-corners)
    - [Building Table](#building-table)
      - [Building display settings](#building-display-settings)
  - [Specification](#specification)
    - [Overview](#overview)
    - [Size](#size)
    - [Permission Data](#permission-data)
      - [Corners](#corners)
      - [Terrain Inclination Values](#terrain-inclination-values)
      - [Terrain Distance Values](#terrain-distance-values)
      - [Environment Behavior Values](#environment-behavior-values)
      - [Environment Flag Values](#environment-flag-values)
    - [Special RD Maps](#special-rd-maps)
  - [TODO](#todo)
---

## Data Location
The NARC containing these files can be found in the following game paths:
* Black and White: `/a/0/0/8`
* Black 2 and White 2: `/a/0/0/8`
---

## Data Structure

### Container Structure
```c
struct ContainerMap
{
    // header
    uint8_t signature[2];
    uint16_t numberSections;
    uint32_t offsetModel;
    uint32_t offsetPermissions[numberSections - 2];
    uint32_t offsetBuildingTable;
    uint32_t length;

    // data
    struct NSBMD dataModel;
    struct SectionPermission dataPermissions[numberSections - 2];
    struct SectionBuildingTable dataBuildingTable;
};
```
| Field Name          | Description                                                                             | Data Type       |
|---------------------|-----------------------------------------------------------------------------------------|-----------------|
| signature           | `"NG"`: No permission section.  <br /> `"WB"`: One permission section. <br /> `"GC"`: Two permission sections. <br /> `"RD"`: One permission section, but with a different file format. | uint8_t[] |
| numberSections      | Number of data sections within this file.                                               | uint16_t        |
| offsetModel         | Points to the 3D model of the map.                                                      | uint32_t        |
| offsetPermissions   | Points to the movement permission data.                                                 | uint32_t[]      |
| offsetBuildingTable | Points to the building table.                                                           | uint32_t        |
| length              | Length of this file.                                                                    | uint32_t        |
| dataModel           | 3D model of the map. NSBMD format without a texture section.                            | [NSBMD](#model) |
| dataPermissions     | 0, 1 or 2 permission sections. A 2nd one can be used for things like bridges where one can walk on two different heights. | [SectionPermission](#permissions)[] |
| dataBuildingTable   | Define appearance settings for all buildings.                                           | [SectionBuildingTable](#building-table) |

### Model
The NSBMD data format is currently not documented in this repository. You can find some information [here](https://github.com/JackHack96/nsbmd_docs/blob/master/nsbmd_docs.md) instead.

### Permissions
```c
struct SectionPermission
{
    // header
    uint16_t width;
    uint16_t height;

    // data
    struct Tile tile[width * height];
    struct CornerTerrain corner[numberCorners];
};
```
| Field Name | Description                                                   | Data Type                                         |
|------------|---------------------------------------------------------------|---------------------------------------------------|
| width      | Number of tiles in horizontal direction.                      | uint16_t                                          |
| height     | Number of tiles in vertical direction.                        | uint16_t                                          |
| tile       | Individual soil properties for all fields.                    | [Tile](#tile)[]                                   |
| corner     | Special terrain properties for corners. Corners are optional. | [CornerTerrain](#terrain-extension-for-corners)[] |

#### Tile
```c
// "WB" and "GC" type maps:
struct Tile
{
    struct TileTerrain terrain;
    struct TileEnvironment environment;
}; // entry size = 0x8

// "RD" type maps:
struct Tile
{
    int8_t unknown[20]; // TODO: document structure
    struct TileEnvironment environment;
}; // entry size = 0x18
```
| Field Name  | Description                                                             | Data Type                       |
|-------------|-------------------------------------------------------------------------|---------------------------------|
| terrain     | Defines height and slope on which overworlds are placed.                | [TileTerrain](#terrain)         |
| unknown     | Data for `"RD"`-type maps. Those maps have flag based object placement. | int8_t[]                        |
| environment | Interaction between tile and overworld.                                 | [TileEnvironment](#environment) |

#### Terrain
```c
struct TileTerrain
{
    uint16_t inclination;
    uint16_t distance;
}; // entry size = 0x4
```
| Field Name  | Description | Data Type |
|-------------|-------------|-----------|
| inclination | Indexes a specific terrain slope. Probably flag based with a format like `0bTTTT'TTTT'TTTT'TTCR` with `T = terrain settings`, `C = is corner` and `R = reset` | uint16_t  |
| distance    | Indexes values that represent the distance perpendicular to the center of the map when the plane is extended to allow that vector. If the inclination for this tile indicates a corner, the field represents the index of the corner instead. Counting starts by zero. | uint16_t  |

#### Environment
```c
struct TileEnvironment
{
    uint16_t behavior;
    uint16_t flags;
}; // entry size = 0x4
```
| Field Name | Description                                                                                                            | Data Type |
|------------|------------------------------------------------------------------------------------------------------------------------|-----------|
| behavior   | Often used in combination with `flags`. Manages data used for interactions and affects the overall behavior of a tile. | uint16_t  |
| flags      | Flag based tile settings that can be combined. See table below.                                                        | uint16_t  |

#### Terrain extension for corners
```c
struct CornerTerrain
{
    uint16_t inclinationTop;
    uint16_t inclinationBottom;
    uint16_t distanceTop;
    uint16_t distanceBottom;
}; // entry size = 0x8
```
| Field Name        | Description                                                                                  | Data Type |
|-------------------|----------------------------------------------------------------------------------------------|-----------|
| inclinationTop    | Inclination for top-left and top-right corners, `inclination = inclinationTop - 1`.          | uint16_t  |
| inclinationBottom | Inclination for bottom-left and bottom-right corners, `inclination = inclinationBottom * 4`. | uint16_t  |
| distanceTop       | Distance for top-left and top-right corners, `distance = distanceTop`.                       | uint16_t  |
| distanceBottom    | Distance for bottom-left and bottom-right corners, `distance = distanceBottom`.              | uint16_t  |

---

### Building Table
```c
struct SectionBuildingTable
{
    // header
    uint32_t numberBuildings;

    // data
    struct BuildingProperties building[numberBuildings];
};
```
| Field Name        | Description                                                                                    | Data Type |
|-------------------|------------------------------------------------------------------------------------------------|-----------|
| numberBuildings | Header of the building table, tells how many building are assigned to the map.                   | uint32_t  |
| building          | Display settings for a building. Includes local position, yaw rotation and the building index. | [BuildingProperties](#building-display-settings)  |

#### Building display settings
```c
struct BuildingProperties
{
    fx<1.19.12> localPositionX;
    fx<1.19.12> localPositionY;
    fx<1.19.12> localPositionZ;
    uint16_t rotationAngleYaw;
    uint16_t buildingID; // big endian
}; // entry size = 0x10
```
| Field Name       | Description                                                                 | Data Type        |
|------------------|-----------------------------------------------------------------------------|------------------|
| localPositionX   | X position relative to the center of the map.                               | [`fx<1.19.12>`](/docs/universal/resources/data-types/data-types.md)  |
| localPositionY   | Y position relative to the center of the map.                               | [`fx<1.19.12`](/docs/universal/resources/data-types/data-types.md)  |
| localPositionZ   | Z position relative to the center of the map.                               | [`fx<1.19.12`](/docs/universal/resources/data-types/data-types.md)  |
| rotationAngleYaw | Counterclockwise yaw rotation angle.                                        | uint16_t         |
| buildingID       | ID of the building model. Unlike most variables, this one is in big endian. | uint16_t         |

---

## Specification
### Overview
Part of the map files are:
1. A 3D NSBMD-model of the map. This **does not** include textures!. The texture data is in `/a/0/1/4`.
2. 0-2 permission matrices. This is basically how the game sees the map since the model does not provide any collision data. It is a 2D environment layout with additional informations about the 3rd dimension. The 2nd permission matrix is optional and almost identical to the first one, except for coordinates where two different behaviors are required (for example walking under OR on a bridge). Rails (`/a/0/7/8`) also contain collision data and may be loaded externally in some cases. This is why some maps come without own permission sections.
3. A layout for externally loaded models (buildings).

### Size
As already mentioned, the standard size for a map is 32 by 32 tiles. But how large is a tile? The game accesses positions on the overworld using 32 bit values. These can be read as fixed point values. The default format is [`fx<1.19.12`](/docs/universal/resources/data-types/data-types.md). This means that one tile has a size of 16 units. The most textures are also mapped with 16 pixel per tile.

To convert the value to one unit per tile, we can move the decimal point into the middle and read as [`fx<1.15.16`](/docs/universal/resources/data-types/data-types.md) instead. This is how the terrain values for PDSMS were calculated, since its a tile based tool.

### Permission Data
* [Corners](#corners)
* [Terrain Inclination Values](#terrain-inclination-values)
* [Terrain Distance Values](#terrain-distance-values)
* [Environment Behavior Values](#environment-behavior-values)
* [Environment Flag Values](#environment-flag-values)

#### Corners
To allow the character to walk a different slope depending from the direction, Pokemon Black and White introduced corner tiles. These store data for two differnt terrains and apply one terrain to the northern vertices and the 2nd one to the southern vertices. Since the double amount of data at random position wouldn't fit into the permission grid, this data gets appended to the end of the permission section. The `0x0002` (bit) command in the terrain inclination tells the game to read a value from the extra data. The terrain distance behaves as an index for this section.

#### Terrain Inclination Values
The 3-dimensional shape of a tile.

TODO: Add tables or code.

#### Terrain Distance Values
If we extend the tile to an infinite plane, we can draw a line which is perpendicular to the plane and connect it to the origin (0, 0, 0) of the map. The length of this line is the distance. The distence is selected using indices.

<details>
<summary>Distance table - Black and White</summary>

```c
/**
 * Table created by Gonhex
 * Number of entries: 1314
 * All values signed int32
 * Tiles = value / 0x10000
 */

/*             0x---0      0x---1      0x---2      0x---3      0x---4      0x---5      0x---6      0x---7      0x---8      0x---9      0x---A      0x---B      0x---C      0x---D      0x---E      0x---F */
/* 0x000- */ 0x00000000, 0xFFFE7FE9, 0x00016A20, 0xFFF6191D, 0xFFFEFFF1, 0xFFF7AD6F, 0x00043E61, 0x00038951, 0xFFFB01A9, 0x0000B510, 0x000712A2, 0xFFF4AEFC, 0xFFFDE0D0, 0xFFFDC36D, 0x0001000F, 0x0001CA0E,
/* 0x001- */ 0x0000E507, 0x00007283, 0xFFFEA875, 0xFFFB86DB, 0x00020AAF, 0x0000CD4E, 0x0001A225, 0xFFFBF95F, 0xFFFF7FF9, 0x00016317, 0x00008E09, 0x00019A9C, 0x0000D112, 0x00006889, 0x0002AF16, 0x0002DBC2,
/* 0x002- */ 0x00027338, 0x0002AAD4, 0x0001AA1C, 0x0002001F, 0x0000D50E, 0x000267EB, 0xFFFF1AF9, 0x0002237B, 0x00023C93, 0x0001562D, 0x0002557B, 0x0001AAC4, 0xFFFCDE66, 0x000406A1, 0xFFFE35F2, 0xFFFE95E0,
/* 0x003- */ 0x0003219A, 0xFFF9BCCC, 0x00047925, 0x000E00DF, 0xFFFC6BE2, 0x000B5104, 0x00087CC3, 0xFFF69BA6, 0xFFF9A26E, 0x000A9BF3, 0x0009E6E3, 0xFFFA577E, 0xFFF7833D, 0xFFFB1458, 0xFFFAA1D3, 0xFFF8384E,
/* 0x004- */ 0xFFF6331C, 0xFFFA2F50, 0xFFF94A48, 0xFFFC532B, 0x00065D92, 0x0002D441, 0xFFFE5DDB, 0xFFFD2BBF, 0x0005A882, 0x00021F30, 0xFFFDF551, 0xFFFBC19F, 0x0004F371, 0x0000EF97, 0x0001BF3C, 0x00006FCF,
/* 0x005- */ 0x00011010, 0x00013F74, 0x00068F85, 0x000633DB, 0x0005E091, 0xFFFF703F, 0x0000DF9E, 0xFFFF504D, 0x00008FC1, 0x00001000, 0xFFFFA02A, 0x0000AFB3, 0x0000BFAC, 0xFFFF4054, 0x00005FD6, 0xFFFFD015,
/* 0x006- */ 0xFFFF4AF0, 0x001000FF, 0x0008FC13, 0x0002E940, 0xFFFA2D80, 0x0006005F, 0x0004003F, 0xFFF8ED5E, 0xFFFC76AF, 0xFFFBEAA1, 0xFFFB4164, 0x0001E5D8, 0xFFFB25EB, 0xFFFB188D, 0x0008D3CE, 0x00018017,
/* 0x007- */ 0xFFFD50EA, 0x0001578B, 0xFFFDFFE1, 0xFFFB0C8F, 0x0003941E, 0x0009DDC9, 0x0007C7B2, 0x000931D3, 0x00008007, 0xFFF8384D, 0xFFF6CE2D, 0x001EC444, 0x001EC443, 0x000A3061, 0x001DB4AB, 0xFFFF1DA1,
/* 0x008- */ 0x002B82B7, 0x000897E4, 0x0032031F, 0x002F02EF, 0x000038BF, 0xFFFF5D2A, 0x00085BBB, 0x00097611, 0x00007A84, 0xFFFFA79A, 0x000CF8EC, 0x00127ACE, 0x0000C7A4, 0xFFFF13DE, 0x001CFF9A, 0x001CFF9B,
/* 0x009- */ 0x00019216, 0x0000D003, 0x00021A88, 0x0001710D, 0xFFFCBAE0, 0x000160DA, 0x0005608F, 0x0002C6AF, 0x00024167, 0x000A079E, 0x000A079F, 0x0003A677, 0x000358B6, 0x0022E425, 0x0026EAC5, 0x00149BEE,
/* 0x00A- */ 0x00086DD7, 0x000BB39F, 0x001C4A8A, 0x0031030F, 0x0004D4C2, 0x0009F3C9, 0x001B957A, 0xFFFE741F, 0xFFF959F8, 0x00065E9C, 0x0001E0F6, 0x001DF60C, 0x0018F7B4, 0x001CDF0B, 0x00197F55, 0x000387EC,
/* 0x00B- */ 0x0002CDE9, 0x00151671, 0x00176740, 0xFFFF1296, 0x000474EE, 0x0010C317, 0x001A01A0, 0x001FC289, 0x0028B4D5, 0x0014D76D, 0x00150346, 0xFFFFBA4F, 0x00010E38, 0x001F08D1, 0x00015FBA, 0x00042DCB,
/* 0x00C- */ 0x00275D4A, 0x001A019F, 0x0015F3DE, 0x00043175, 0xFFFEF7A7, 0x000AF506, 0x000AE99A, 0x0005F196, 0x000D5F92, 0x00267842, 0x00284251, 0x00180F34, 0x0013A672, 0x001028D1, 0x000E73B4, 0x000BF40B,
/* 0x00D- */ 0x000B42E2, 0x00097053, 0x00093967, 0x0007C88E, 0x00243BAF, 0x0007D682, 0x00069DB9, 0x002B02AF, 0x0006D776, 0x0005C022, 0x0020E374, 0x00224D1D, 0x0027CFCD, 0x0025F9F2, 0x00061818, 0x0004D33C,
/* 0x00E- */ 0x0006FDF4, 0x001D01CF, 0x0005663B, 0x000830B0, 0xFFFA934E, 0x00083ED0, 0xFFF93361, 0xFFF6FEB3, 0xFFFB8312, 0xFFFF5386, 0x000D3FA1, 0x00257C5E, 0x00051447, 0x001B4964, 0xFFFB3789, 0x0016D03F,
/* 0x00F- */ 0x0019F1D9, 0x00208207, 0x000B3A4B, 0x0009E473, 0x00111053, 0xFFFF9D72, 0x0021F30C, 0x001DCF35, 0x0023C92B, 0x00231E30, 0x001578B3, 0x0009ADC5, 0x000B1217, 0x00003237, 0xFFFE5985, 0x000519AA,

/*             0x---0      0x---1      0x---2      0x---3      0x---4      0x---5      0x---6      0x---7      0x---8      0x---9      0x---A      0x---B      0x---C      0x---D      0x---E      0x---F */
/* 0x010- */ 0x0000FB16, 0x000F00EF, 0xFFFEC97B, 0x000B00AF, 0x000A009F, 0x0001F62E, 0x0002E32F, 0x0003237C, 0x000614C2, 0x0008A990, 0x00079ABF, 0x0002BF75, 0x0005393E, 0x0005B785, 0x00041617, 0x00074721,
/* 0x011- */ 0x00085291, 0x00084980, 0x000D80D7, 0x0008BAD4, 0x0006DF56, 0x000A00A0, 0x00080170, 0x00083F8B, 0x00077D83, 0x000755CA, 0x000B2EDD, 0x000E5077, 0x00077C32, 0x0007283B, 0x00088DF0, 0x00082ABD,
/* 0x012- */ 0x000D6B70, 0x000E4ACB, 0x000C0614, 0x00054EFB, 0x00060281, 0x00089346, 0x0009D752, 0x000A6514, 0xFFFDC92F, 0xFFFE30C4, 0x00045DE0, 0x000EDA55, 0x00039E78, 0x000BB40B, 0x000143E4, 0x000BB40A,
/* 0x013- */ 0x00093D67, 0x000CF7F0, 0x000CF7EF, 0xFFFE6E42, 0x00083D28, 0x00077110, 0x00194DED, 0x000A2385, 0x002A0C61, 0x0004D44A, 0xFFFC68B5, 0xFFFC472F, 0xFFFF4170, 0x000938C7, 0x002A82A7, 0x002A029F,
/* 0x014- */ 0xFFFD4545, 0xFFFB4919, 0x00015F86, 0x00084E1E, 0x002271A0, 0xFFFE435A, 0xFFF652AC, 0x00090C2C, 0x000B6310, 0x000D79B9, 0x0010FF8E, 0x0014CA28, 0x001E69BB, 0x0017AD59, 0x0013AEA5, 0x0012C99D,
/* 0x015- */ 0x000E79E0, 0x000C2136, 0x000A3355, 0x0008E134, 0x00093FB6, 0x001FD3DB, 0x00099A7D, 0x0009ECDA, 0x00074882, 0x001537E8, 0x000681C8, 0x000B753B, 0x00074D3F, 0x0005C15F, 0xFFFC5C70, 0x0008F9DB,
/* 0x016- */ 0xFFFC5C71, 0x0013313E, 0x000EC2FB, 0x001A9089, 0x0015ECF8, 0x001263A6, 0x00077449, 0x0005C660, 0x00014F43, 0x00043C25, 0xFFFE9F89, 0xFFFD273C, 0x0006F121, 0x000F8F66, 0x00097D39, 0xFFFDE38F,
/* 0x017- */ 0x0005BAE8, 0xFFFE6B21, 0x00047DE8, 0x000B289C, 0x00046D6C, 0x00180C29, 0x00143652, 0x0008F24A, 0x001482D7, 0x000CBB24, 0x000CB46E, 0x00055E2D, 0x000AF8EA, 0x0003B5EA, 0x0005D0B0, 0x0004EBA8,
/* 0x018- */ 0x000425AC, 0x000126AC, 0x000345BF, 0x0007C7B3, 0x000D00CF, 0x0012011F, 0x00037706, 0x0002F5BC, 0x0003153D, 0x00028BD3, 0x0002CD1E, 0x00023BB0, 0x0002F0F9, 0x0002679D, 0x00036850, 0x0002A18A,
/* 0x019- */ 0x00040ADC, 0x0002F144, 0x00036576, 0x00065552, 0x00041CAA, 0x0009D13D, 0x0005004F, 0xFFF50716, 0xFFF77210, 0xFFF4D735, 0xFFF5B0A5, 0xFFF2E0D2, 0xFFF7C1A1, 0xFFFF9777, 0xFFF61044, 0xFFF7825A,
/* 0x01A- */ 0xFFF4EB57, 0xFFF53603, 0x000FF4EF, 0x00090B4D, 0xFFF748E4, 0xFFF85FAD, 0xFFF6F263, 0x0011AE96, 0x0014013F, 0xFFF6E9D4, 0x000A49D6, 0x00002A18, 0xFFF69151, 0x000C80C7, 0xFFF6C7C2, 0x000BA161,
/* 0x01B- */ 0xFFF91045, 0xFFF8B999, 0x00080D43, 0x0001BB82, 0x0002FE16, 0x000AF8FD, 0x0003731B, 0x000210B3, 0xFFF44C05, 0x0003FD3C, 0x0003ADFC, 0x0003FD73, 0xFFF4084D, 0xFFF46923, 0xFFF409DD, 0xFFF48BC7,
/* 0x01C- */ 0xFFF40BDE, 0xFFF4B5A7, 0xFFF40E80, 0xFFF4E93E, 0xFFF4120B, 0xFFF52A52, 0xFFF416FB, 0xFFF57ECF, 0xFFF41E23, 0xFFF5F098, 0xFFF4290F, 0xFFF43AEC, 0xFFF45AFF, 0xFFF49CF0, 0xFFF543A6, 0x0003002F,
/* 0x01D- */ 0xFFFAFFB1, 0xFFFCBBB4, 0x000EB659, 0xFFFC13A4, 0x0006DDA1, 0xFFFE09D2, 0xFFFE4D46, 0xFFFEBC1C, 0xFFFF8D7D, 0xFFFE447E, 0x0009CEE6, 0x000759AA, 0xFFFB198E, 0x0006B5B8, 0xFFF8D7C5, 0xFFF50984,
/* 0x01E- */ 0x00098C5C, 0xFFFC1C28, 0x000279B8, 0xFFFD8648, 0x000C2097, 0x0004BE9C, 0x000A9DF7, 0x00049EB3, 0xFFF868A0, 0xFFFF32B2, 0xFFFFBB91, 0x0006EE0D, 0x000F2EC1, 0x00060309, 0x000D48E9, 0xFFFA4E78,
/* 0x01F- */ 0xFFF682C7, 0xFFF947E6, 0x00005A87, 0xFFFAB206, 0x0003E3D9, 0x0003E3D8, 0x00054DFA, 0x000498E9, 0xFFF5640D, 0x000088DE, 0xFFFDC7DA, 0xFFFB7499, 0xFFFD8CC8, 0x00042948, 0x0006A874, 0xFFF6D860,

/*             0x---0      0x---1      0x---2      0x---3      0x---4      0x---5      0x---6      0x---7      0x---8      0x---9      0x---A      0x---B      0x---C      0x---D      0x---E      0x---F */
/* 0x020- */ 0xFFF60351, 0x000BA6CC, 0xFFF3FF41, 0xFFF45934, 0xFFFA2C9B, 0xFFF654BC, 0xFFF8FF90, 0x00023A98, 0xFFFACC9D, 0x00032857, 0xFFFCD8A5, 0x000927A0, 0x00027F2B, 0x0009FCAF, 0xFFFF554C, 0x0002C93E,
/* 0x021- */ 0x00006FC1, 0x0002D8C4, 0x0000BB00, 0x000C55FD, 0xFFFEC664, 0x0003543A, 0x0003B6FE, 0x0001A4C1, 0x0003CBAF, 0x0001DFE2, 0x0003D8D7, 0x000D76F1, 0x00064334, 0xFFFBF524, 0xFFF86541, 0xFFF3BFE4,
/* 0x022- */ 0xFFF9AA46, 0xFFF38427, 0xFFF1546C, 0x000052D5, 0x0001F3ED, 0x00003DA7, 0x0001F0D5, 0x000022D8, 0x0001EC6C, 0xFFFFD140, 0x0001DB7E, 0xFFFF903F, 0xFFFEAA96, 0x000F9F70, 0x0003E7DC, 0x00022ADF,
/* 0x023- */ 0x0003E1AA, 0x00076D2B, 0x0008223A, 0x00010F98, 0xFFFEF068, 0x00028027, 0xFFFB6717, 0xFFFC1C27, 0xFFFFA579, 0xFFF5BE95, 0xFFF892D5, 0x0001C4A9, 0x000AAB54, 0xFFFC7FC9, 0xFFFCFFD1, 0xFFF7666A,
/* 0x024- */ 0x0007367E, 0x00048047, 0x000E2545, 0x000D7035, 0x0007D8B8, 0xFFF82748, 0xFFF90593, 0x0008C47D, 0xFFF90943, 0x00092D9F, 0x0007006F, 0x0004155F, 0x0006200E, 0xFFF8208B, 0xFFF72C32, 0xFFF9225F,
/* 0x025- */ 0x0003EC5C, 0xFFFA9B67, 0xFFFA0870, 0xFFFA7FA9, 0xFFF6311A, 0xFFF8FD3A, 0xFFFA1D77, 0x000DBB41, 0x0005E289, 0x000CC02B, 0x000BC514, 0xFFFDA475, 0x00062137, 0xFFFF04EA, 0x00053289, 0xFFFB614D,
/* 0x026- */ 0xFFF628AE, 0x00068897, 0x0005B188, 0xFFF8A656, 0x00079760, 0x0007C234, 0xFFF9A5CA, 0xFFF45E9F, 0xFFF2B717, 0xFFFAB105, 0xFFFE1D2B, 0xFFFACD77, 0xFFF58FDB, 0xFFF7D543, 0xFFF76CBA, 0xFFF95B8B,
/* 0x027- */ 0xFFFF6C2B, 0xFFFD243F, 0xFFFA39A0, 0xFFFC3451, 0x0005B784, 0xFFF490F7, 0x000B8CC1, 0xFFF6C299, 0xFFFC88FA, 0xFFF4286D, 0x000EB355, 0x000CA8A6, 0x000C8669, 0xFFFD243E, 0xFFF70DB6, 0x0009CCE4,
/* 0x028- */ 0x0001BB83, 0x00065A36, 0x000093D5, 0xFFFED23A, 0xFFFECB2D, 0xFFFD1CD1, 0xFFFCD643, 0xFFFED854, 0xFFFC1454, 0xFFFBFDFA, 0x0004E773, 0xFFF149A7, 0x00054BC2, 0xFFF83DCC, 0xFFF78039, 0xFFFCF2CB,
/* 0x029- */ 0x000A43B3, 0xFFF69D46, 0xFFF57CE9, 0x0004704D, 0x000111BD, 0x0001ECCB, 0x0000D27B, 0x000AB044, 0xFFFE1A28, 0x00038037, 0xFFF4D123, 0x000ABC5A, 0xFFF87E1D, 0x00024F59, 0x0007853B, 0x0006EFBB,
/* 0x02A- */ 0x00074667, 0x0004AAF5, 0x00095B3E, 0x0009F396, 0xFFFCB30A, 0xFFFE55E4, 0xFFFD552C, 0xFFF4FB8A, 0xFFF7135D, 0xFFF84CD5, 0x00056C27, 0x00059466, 0x00056DB4, 0x000287CA, 0x0002B6DA, 0x000AC9FD,
/* 0x02B- */ 0xFFF5B62A, 0xFFFBFFC1, 0xFFFC1E56, 0x00087FC7, 0xFFF75670, 0xFFFB7FB9, 0xFFF1DABB, 0x0005AB04, 0x000655BA, 0xFFF91087, 0x000AF67C, 0xFFF911F3, 0xFFFF2AF2, 0x000855DB, 0x0004FE57, 0x000555AA,
/* 0x02C- */ 0x0006B81A, 0x00032EC9, 0x000AD1BD, 0xFFFE3B57, 0xFFFBD235, 0x00089996, 0xFFFCD137, 0xFFF7DDC6, 0xFFFAAA56, 0xFFF7F2BD, 0x0002AC5B, 0x0002C630, 0xFFFC551C, 0xFFF7F474, 0xFFF3CB2A, 0xFFF3CB2B,
/* 0x02D- */ 0x0006EF79, 0x0007C488, 0xFFF3F9EC, 0xFFF2F61D, 0x0001AAC5, 0xFFF344DC, 0xFFF673A4, 0xFFFD80D5, 0x0005D365, 0x0008D74B, 0xFFF69B31, 0x000FB170, 0x000C12B9, 0xFFFE2482, 0xFFF6B686, 0xFFFD7FD9,
/* 0x02E- */ 0xFFF29490, 0x000A7025, 0x00088A4C, 0x0001399C, 0x000C401C, 0x000C5D6F, 0x000BA501, 0xFFFD16C0, 0x000C426F, 0xFFFD0EBC, 0x000BD6F1, 0xFFFDB0A7, 0xFFFD0A44, 0x000B8542, 0x000BE1DD, 0xFFFCEAC3,
/* 0x02F- */ 0xFFFD0789, 0x000B7C30, 0x000BE905, 0xFFFCC751, 0xFFFD05BF, 0x000B7346, 0x000BEDF5, 0xFFFCACFD, 0xFFFD0484, 0x0009008F, 0x0008F277, 0x00099E1A, 0xFFFF09CA, 0xFFFF0D15, 0xFFF8833C, 0x0009DC85,

/*             0x---0      0x---1      0x---2      0x---3      0x---4      0x---5      0x---6      0x---7      0x---8      0x---9      0x---A      0x---B      0x---C      0x---D      0x---E      0x---F */
/* 0x030- */ 0xFFFB6F3E, 0x00057A82, 0xFFF9FCF7, 0xFFF728B5, 0x000A416B, 0xFFF59AEC, 0x0004E672, 0xFFF9DFF2, 0x0003ACD5, 0x000DDC1B, 0x0009F0F6, 0xFFFC0604, 0xFFF90A87, 0x00020020, 0x0003444C, 0x00095960,
/* 0x031- */ 0x000A33CC, 0x000A627B, 0xFFFADF81, 0xFFFAD034, 0xFFFC0DB0, 0xFFFACEC3, 0xFFFC0A0C, 0x00004D35, 0xFFFF6189, 0x000ADA5C, 0x0003AAE4, 0x0007AB24, 0x0000AAB4, 0xFFFDFFE0, 0x00080511, 0x00058057,
/* 0x032- */ 0x000BAB8B, 0x000CE5B6, 0x000BE8AC, 0x00010B33, 0x000D95D7, 0x000E16AD, 0x000DAB81, 0x000DBA32, 0x000B75D1, 0x000CA735, 0x000DBD4A, 0x000ED6A0, 0xFFF5F110, 0x000DBEAC, 0x0004C99A, 0x000AF56D,
/* 0x033- */ 0xFFF917F4, 0x000ECCAD, 0x000F476B, 0xFFFAA539, 0xFFFB111C, 0xFFFB79EA, 0x0005F0EE, 0x000CDF5B, 0x000C2B68, 0x000CD384, 0x000BC305, 0x000C9D6C, 0x000B0680, 0xFFFDD13A, 0xFFFE8B60, 0xFFFF207E,
/* 0x034- */ 0x000BD793, 0x0008FBD0, 0xFFF7EA46, 0xFFF3ED47, 0xFFFCCAC6, 0xFFFCABC6, 0xFFFD0F36, 0xFFF77CC9, 0xFFF4DB06, 0xFFF5C8C6, 0x0004A4BD, 0xFFFEE498, 0x0000CA6F, 0xFFFEE1B7, 0x0000ABC5, 0xFFF25B4E,
/* 0x035- */ 0xFFFF1241, 0x0005927C, 0x00011B68, 0x00030140, 0xFFF3D280, 0x000275D4, 0x00049620, 0xFFFDF1AB, 0x00011E49, 0x0002E858, 0xFFF87F89, 0x00043FE3, 0xFFFDFCB0, 0x00020350, 0xFFF497E1, 0x0004E719,
/* 0x036- */ 0xFFF97FC4, 0x000A373A, 0x0006CCF1, 0x0000287C, 0x0005976E, 0xFFFF543B, 0x000A47A8, 0xFFFB18E7, 0xFFF77F79, 0xFFF103C2, 0x0003CD60, 0xFFF67F69, 0xFFF2CDD2, 0x000B3A94, 0xFFF1E8CA, 0xFFED6B90,
/* 0x037- */ 0x0008B2C9, 0x00086BB8, 0x0009515A, 0x0007E2D9, 0x00067C76, 0xFFEF6102, 0xFFF89204, 0xFFFDC10C, 0x000609F2, 0x0005890B, 0x0005367E, 0x00036ED0, 0x0007158B, 0x0005DA05, 0x00035ADB, 0xFFFFD784,
/* 0x038- */ 0x0003A333, 0xFFFCFEC0, 0x0006803C, 0xFFFD36C2, 0x00076DFC, 0x000BE31B, 0x0009B5AA, 0x0002DBC1, 0x0007C0A1, 0x000A1094, 0x0006FC14, 0x0004B267, 0xFFFC0BD3, 0xFFF9330F, 0xFFFD42BF, 0x000954BC,
/* 0x039- */ 0xFFF92EE5, 0xFFF8A4D4, 0xFFFDF4F5, 0xFFFCB9D7, 0xFFFEB0BD, 0x000190CD, 0xFFFB96D1, 0xFFF89E83, 0x00002EC0, 0x0001BD5B, 0xFFFC6420, 0xFFF80E2D, 0x0001BCD5, 0x0001DD12, 0x0002D829, 0xFFF70B69,
/* 0x03A- */ 0xFFF2DF94, 0xFFFC4902, 0x0005C96E, 0x00060086, 0x00014D7C, 0x0005A943, 0x000741FF, 0xFFFE533B, 0xFFF8547D, 0x000454C8, 0x000A3C41, 0xFFFB58FA, 0xFFF83432, 0xFFF39F64, 0x0009DC86, 0x00076EE4,
/* 0x03B- */ 0xFFF18033, 0xFFF1D4EB, 0xFFF5E4D8, 0xFFF0BDF6, 0xFFF1907B, 0xFFF55101, 0x00046202, 0x00003941, 0x000A6799, 0x000B8B8D, 0x0002CA28, 0xFFFB9619, 0xFFF3B2D9, 0xFFF45CB2, 0xFFFD4FB9, 0xFFF45475,
/* 0x03C- */ 0x0000D33D, 0xFFF97F99, 0x00034668, 0x000B3AC4, 0x0002430A, 0x000066A7, 0x00092B8C, 0x0004ACB0, 0x00097D76, 0x000BE562, 0x0002B047, 0x0008B909, 0x0000EDBF, 0xFFFB5B43, 0xFFFA6D84, 0xFFF9B14A,
/* 0x03E- */ 0xFFFB8FB3, 0x000EDBF7, 0xFFFF0796, 0x0006A475, 0xFFFB8218, 0xFFFE2996, 0xFFFDFA92, 0x00007D8B, 0x00017197, 0xFFF7A05B, 0x000469E7, 0xFFFE875E, 0x0006104B, 0x00099E10, 0x00014050, 0xFFFE7016,
/* 0x03D- */ 0x000C7E7A, 0x0003E11A, 0xFFFD8A2C, 0xFFFDF0B6, 0xFFF01613, 0xFFF8C808, 0xFFEDCF1D, 0xFFF23544, 0x0006C485, 0x000603CC, 0x00081376, 0x0007617D, 0x00068C53, 0xFFF2FF87, 0x000D0079, 0xFFF95BDE,
/* 0x03F- */ 0xFFFAE54A, 0xFFFAC982, 0x00009CCE, 0x00020240, 0xFFF9ABAD, 0xFFF84023, 0x0001D66A, 0xFFFCEFF9, 0x0001F6E5, 0xFFFCA525, 0xFFFC41E7, 0xFFFD39D0, 0x00056481, 0x000165D2, 0x0004B752, 0x0007514A,

/*             0x---0      0x---1      0x---2      0x---3      0x---4      0x---5      0x---6      0x---7      0x---8      0x---9      0x---A      0x---B      0x---C      0x---D      0x---E      0x---F */
/* 0x040- */ 0x000574EF, 0xFFF91106, 0xFFFAFAD2, 0x000A4706, 0xFFFB7A59, 0x000B9180, 0x0009D27B, 0xFFFE5D21, 0x0002056E, 0x00084685, 0x0004559A, 0x0009497A, 0x0004CD4D, 0x0002D668, 0x0003A702, 0x00031AC1,
/* 0x041- */ 0xFFF9E36F, 0xFFFADB15, 0x000962BA, 0x000BDAA3, 0x00084B57, 0x0004956D, 0xFFFC4A16, 0x000D18A5, 0x0016015F, 0x000CFD61, 0x0002FF65, 0x0001FF98, 0x000278A0, 0x00017924, 0x0002FF51, 0x00027E90,
/* 0x042- */ 0x0001FF8B, 0x00017F23, 0x0013012F, 0x0002FF3A, 0xFFF70250, 0x0001FF7C, 0x0008FD60, 0xFFFE0096, 0x00093235, 0x0008FD04, 0x000943AE, 0x0008FC96, 0x0005FDB9, 0x000F8F65, 0x0005FE40, 0x000CFC36,
/* 0x043- */ 0x000CBDDB, 0xFFF80255, 0xFFF7CD12, 0xFFFC012B, 0xFFFC3BA0, 0xFFFC4E55, 0xFFFC0154, 0xFFFC0185, 0x000CFBAF, 0x000CC852, 0xFFF802A8, 0xFFF7D985, 0x000CFB11, 0xFFFE00C3, 0xFFF80309, 0x0002FC60,
/* 0x044- */ 0xFFFA0740, 0x0003D7BA, 0x0002FB7C, 0x00041021, 0x0002FA41, 0x0001FD95, 0x0002DAC4, 0x000313F9, 0x0001FCFE, 0x0001FC2C, 0xFFFE00E0, 0xFFFD7A2C, 0xFFFE0103, 0xFFFD8316, 0xFFFE012E, 0xFFFA0388,
/* 0x045- */ 0x0009FBA3, 0x0006FCF2, 0x0006708F, 0x000677FA, 0x0006FC78, 0x0006FBE1, 0xFFF904D8, 0x0001FE9E, 0xFFF90BE2, 0xFFF905C2, 0xFFF92549, 0xFFF906ED, 0x0001FE05, 0x000BF7B3, 0x000BEBA1, 0x000BFEC1,
/* 0x046- */ 0x000BF623, 0x000BF422, 0xFFF56209, 0xFFF37997, 0xFFF97769, 0xFFFA487B, 0xFFF775B4, 0xFFF70430, 0x000D4844, 0x000127AC, 0xFFF1C42C, 0x0010BE05, 0x000F8469, 0xFFF34B92, 0xFFF1B535, 0x000FE15C,
/* 0x047- */ 0x000DE531, 0x0008007F, 0x00104476, 0x000F979E, 0x0010C39F, 0x00053B7F, 0xFFF90A92, 0xFFFC8300, 0xFFF7113C, 0xFFFC07A9, 0x00072F8D, 0x000AEF51, 0x000DD019, 0xFFFA1488, 0x0006E80C, 0x000AC7A3,
/* 0x048- */ 0x0008F579, 0x0009B42C, 0x0000F2EB, 0x000815BA, 0x000A356D, 0x00003E1A, 0x0003040F, 0x000050F9, 0xFFF490F6, 0xFFF0D13F, 0x000781E3, 0x0006395B, 0x00055AC7, 0x00063FAA, 0x000563D1, 0x000646F9,
/* 0x049- */ 0x00064EB6, 0x000174A0, 0xFFFE8A27, 0xFFFEA70C, 0xFFFF579E, 0x0006A286, 0x00046DA3, 0xFFF9FFA1, 0x0001F928, 0x0003F250, 0xFFFFCEB9, 0xFFFF0E96, 0xFFF72528, 0xFFF691D2, 0xFFF5BF02, 0xFFF93515,
/* 0x04A- */ 0xFFF83CAB, 0xFFFE0F2B, 0xFFF7DB72, 0xFFFA487C, 0x000B6F0A, 0xFFF43CFB, 0xFFFF2EEE, 0xFFF5E0D5, 0x00073CF0, 0x0010557C, 0xFFF26A29, 0xFFF09E82, 0xFFF0E422, 0xFFF30810, 0xFFF2B7BC, 0x000236D1,
/* 0x04B- */ 0x0000F86A, 0x000329BD, 0x0000A862, 0x0008B91D, 0x00087DA6, 0xFFF3DF69, 0xFFF6D4FD, 0x000F86AC, 0x00091949, 0x001135E1, 0x000F7004, 0x0010EB05, 0x00098182, 0x0003A155, 0x00078756, 0xFFF7A445,
/* 0x04C- */ 0xFFFFE573, 0x0007C355, 0x0008BBC0, 0xFFC0FC11, 0xFFB47B48, 0xFFC1FC21, 0xFFC07C09, 0xFFE72C71, 0xFFE56261, 0xFFCA523E, 0xFFD151CF, 0xFFDFEBBB, 0xFFC17C19, 0xFFE0B90A, 0xFFE59BA3, 0xFFE4B69C,
/* 0x04D- */ 0xFFE6AE39, 0xFFEA743F, 0xFFE5CEB6, 0xFFE98680, 0xFFEAFFB4, 0xFFEDF87B, 0xFFEA15F4, 0xFFED058F, 0xFFEE311D, 0xFFF09CA4, 0xFFED412C, 0xFFEFA66E, 0xFFF09E70, 0xFFF2A844, 0xFFEFAA84, 0xFFF1AFD9,
/* 0x04E- */ 0xFFEFB6E4, 0xFFC4FC51, 0xFFEECF46, 0xFFC8D50C, 0xFFCF329E, 0xFFD91982, 0x0007E4A1, 0x00071F55, 0xFFFCFBF1, 0x000C00BF, 0x000D7034, 0x00022865, 0x0003B836, 0xFFFC45DC, 0x000CA6F6, 0x000B60A4,
/* 0x04F- */ 0x000191BE, 0x0002FE3C, 0x0002E819, 0x0001FED2, 0x0001E989, 0x0002FDED, 0x0002FAE8, 0x0001FC9B, 0x0002FD89, 0x0000FF2D, 0x0001FE5B, 0x000BF180, 0x0003FB2A, 0x000AF2B5, 0x0004F9F5, 0x0009F3EA,

/*             0x---0      0x---1      0x---2      0x---3      0x---4      0x---5      0x---6      0x---7      0x---8      0x---9      0x---A      0x---B      0x---C      0x---D      0x---E      0x---F */
/* 0x050- */ 0x0005F8C0, 0xFFFD03A0, 0xFFFE026B, 0xFFFF0136, 0x0001DDCF, 0x0002F475, 0x0001F84E, 0x0000FE16, 0x00068067, 0x00078077, 0x00088087, 0x00117DEF, 0x0010F092, 0xFFF525A4, 0xFFF5683B, 0x0001556A,
/* 0x051- */ 0x0009AB44, 0xFFF3DECA, 0xFFF6A6A0, 0x0009645A, 0xFFF954EC, 0x0012602B, 0xFFF4733F, 0xFFF33FD5, 0xFFF244BF, 0xFFF5F853, 0x000F0B84, 0x0007098F, 0x00113967, 0x000E25F7, 0xFFFD53A5, 0x000964CF,
/* 0x052- */ 0xFFFC87BF, 0x0006A422
```

</details>

<details>
<summary>Distance table - Black 2 and White 2</summary>

```c
/**
 * Table created by Gonhex
 * Number of entries: 1285
 * All values signed int32
 * Tiles = value / 0x10000
 */

/*             0x---0      0x---1      0x---2      0x---3      0x---4      0x---5      0x---6      0x---7      0x---8      0x---9      0x---A      0x---B      0x---C      0x---D      0x---E      0x---F */
/* 0x000- */ 0x0002001F, 0x00018017, 0xFFFCFFD1, 0x00000000, 0x000F1AC8, 0x000DB2B6, 0x000F01AC, 0x000F9E43, 0x000F1E98, 0xFFFC6BE2, 0xFFFCDE66, 0xFFFDFFE1, 0xFFFEFFF1, 0xFFFB0C8F, 0x0001556B, 0x0004704D,
/* 0x001- */ 0x00021F30, 0x0004AAF5, 0x00038951, 0xFFFE95E0, 0xFFFC7FC9, 0x00016A20, 0xFFF6CE2D, 0xFFFE7FE9, 0xFFF6191D, 0xFFF7AD6F, 0x00043E61, 0xFFFB01A9, 0x0000B510, 0x000712A2, 0xFFF4AEFC, 0xFFFDE0D0,
/* 0x002- */ 0x0009CEE6, 0x0003EC5C, 0x0002F144, 0x0005004F, 0x0008D3CE, 0x0007D8B8, 0x0004E773, 0xFFFB188D, 0x0001F62E, 0xFFFC13A4, 0x0000FB16, 0xFFFD2BBF, 0xFFF7833D, 0x0004F371, 0xFFFD0EBC, 0x0002D441,
/* 0x003- */ 0xFFFBC19F, 0xFFF8ED5E, 0xFFFDC36D, 0x0001000F, 0x0001CA0E, 0x0000E507, 0x00007283, 0xFFFEA875, 0xFFFB86DB, 0x00020AAF, 0x0000CD4E, 0x0001A225, 0xFFFBF95F, 0xFFFF7FF9, 0x00016317, 0x00008E09,
/* 0x004- */ 0x00019A9C, 0x0000D112, 0x00006889, 0x0002AF16, 0x0002DBC2, 0x00027338, 0x0002AAD4, 0x0001AA1C, 0x0000D50E, 0x000267EB, 0xFFFF1AF9, 0x0002237B, 0x00023C93, 0x0001562D, 0x0002557B, 0x0001AAC4,
/* 0x005- */ 0x000406A1, 0xFFFE35F2, 0x0003219A, 0xFFF9BCCC, 0x00047925, 0x000E00DF, 0x000B5104, 0x00087CC3, 0xFFF69BA6, 0xFFF9A26E, 0x000A9BF3, 0x0009E6E3, 0xFFFA577E, 0xFFFB1458, 0xFFFAA1D3, 0xFFF8384E,
/* 0x006- */ 0xFFF6331C, 0xFFFA2F50, 0xFFF94A48, 0xFFFC532B, 0x00065D92, 0xFFFE5DDB, 0x0005A882, 0xFFFDF551, 0x0000EF97, 0x0001BF3C, 0x00006FCF, 0x00011010, 0x00013F74, 0x00068F85, 0x000633DB, 0x0005E091,
/* 0x007- */ 0xFFFF703F, 0x0000DF9E, 0xFFFF504D, 0x00008FC1, 0x00001000, 0xFFFFA02A, 0x0000AFB3, 0x0000BFAC, 0xFFFF4054, 0x00005FD6, 0xFFFFD015, 0xFFFF4AF0, 0x000931D3, 0x00080D43, 0x00064334, 0xFFF5640D,
/* 0x008- */ 0xFFFBF524, 0xFFF86541, 0xFFF3BFE4, 0xFFF9AA46, 0xFFF38427, 0xFFF1546C, 0x00048047, 0xFFF82748, 0xFFF90593, 0x0008C47D, 0xFFF90943, 0x00092D9F, 0xFFF43AEC, 0xFFFAFFB1, 0xFFF8208B, 0xFFF72C32,
/* 0x009- */ 0xFFF9225F, 0xFFFE09D2, 0xFFFA9B67, 0xFFFA0870, 0xFFFA7FA9, 0xFFF6311A, 0xFFF8FD3A, 0xFFFA1D77, 0x0007C7B2, 0x0007C7B3, 0xFFFC76AF, 0x001000FF, 0x0008FC13, 0x0002E940, 0xFFFA2D80, 0x0006005F,
/* 0x00A- */ 0x0004003F, 0xFFFBEAA1, 0xFFFB4164, 0x0001E5D8, 0xFFFB25EB, 0xFFFD50EA, 0x0001578B, 0x0003941E, 0x0009DDC9, 0x00008007, 0xFFF8384D, 0x001EC444, 0x001EC443, 0x000A3061, 0x001DB4AB, 0xFFFF1DA1,
/* 0x00B- */ 0x002B82B7, 0x000897E4, 0x0032031F, 0x002F02EF, 0x000038BF, 0xFFFF5D2A, 0x00085BBB, 0x00097611, 0x00007A84, 0xFFFFA79A, 0x000CF8EC, 0x00127ACE, 0x0000C7A4, 0xFFFF13DE, 0x001CFF9A, 0x001CFF9B,
/* 0x00C- */ 0x00019216, 0x0000D003, 0x00021A88, 0x0001710D, 0xFFFCBAE0, 0x000160DA, 0x0005608F, 0x0002C6AF, 0x00024167, 0x000A079E, 0x000A079F, 0x0003A677, 0x000358B6, 0x0022E425, 0x0026EAC5, 0x00149BEE,
/* 0x00D- */ 0x00086DD7, 0x000BB39F, 0x001C4A8A, 0x0031030F, 0x0004D4C2, 0x0009F3C9, 0x001B957A, 0xFFFE741F, 0xFFF959F8, 0x00065E9C, 0x0001E0F6, 0x001DF60C, 0x0018F7B4, 0x001CDF0B, 0x00197F55, 0x000387EC,
/* 0x00E- */ 0x0002CDE9, 0x00151671, 0x00176740, 0xFFFF1296, 0x000474EE, 0x0010C317, 0x001A01A0, 0x001FC289, 0x0028B4D5, 0x0014D76D, 0x00150346, 0xFFFFBA4F, 0x00010E38, 0x001F08D1, 0x00015FBA, 0x00042DCB,
/* 0x00F- */ 0x00275D4A, 0x001A019F, 0x0015F3DE, 0x00043175, 0xFFFEF7A7, 0x000AF506, 0x000AE99A, 0x0005F196, 0x000D5F92, 0x00267842, 0x00284251, 0x00180F34, 0x0013A672, 0x001028D1, 0x000E73B4, 0x000BF40B,

/*             0x---0      0x---1      0x---2      0x---3      0x---4      0x---5      0x---6      0x---7      0x---8      0x---9      0x---A      0x---B      0x---C      0x---D      0x---E      0x---F */
/* 0x010- */ 0x000B42E2, 0x00097053, 0x00093967, 0x0007C88E, 0x00243BAF, 0x0007D682, 0x00069DB9, 0x002B02AF, 0x0006D776, 0x0005C022, 0x0020E374, 0x00224D1D, 0x0027CFCD, 0x0025F9F2, 0x00061818, 0x0004D33C,
/* 0x011- */ 0x0006FDF4, 0x001D01CF, 0x0005663B, 0x000830B0, 0xFFFA934E, 0x00083ED0, 0xFFF93361, 0xFFF6FEB3, 0xFFFB8312, 0xFFFF5386, 0x000D3FA1, 0x00257C5E, 0x00051447, 0x001B4964, 0xFFFB3789, 0x0016D03F,
/* 0x012- */ 0x0019F1D9, 0x00208207, 0x000B3A4B, 0x0009E473, 0x00111053, 0xFFFF9D72, 0x0021F30C, 0x001DCF35, 0x0023C92B, 0x00231E30, 0x001578B3, 0x0009ADC5, 0x000B1217, 0x00003237, 0xFFFE5985, 0x000519AA,
/* 0x013- */ 0x000F00EF, 0xFFFEC97B, 0x000B00AF, 0x000A009F, 0x0002E32F, 0x0003237C, 0x000614C2, 0x0008A990, 0x00079ABF, 0x0002BF75, 0x0005393E, 0x0005B785, 0x00041617, 0x00074721, 0x00085291, 0x00084980,
/* 0x014- */ 0x000D80D7, 0x0008BAD4, 0x0006DF56, 0x000A00A0, 0x00080170, 0x00083F8B, 0x00077D83, 0x000755CA, 0x000B2EDD, 0x000E5077, 0x00077C32, 0x0007283B, 0x00088DF0, 0x00082ABD, 0x000D6B70, 0x000E4ACB,
/* 0x015- */ 0x000C0614, 0x00054EFB, 0x00060281, 0x00089346, 0x0009D752, 0x000A6514, 0xFFFDC92F, 0xFFFE30C4, 0x00045DE0, 0x000EDA55, 0x00039E78, 0x000BB40B, 0x000143E4, 0x000BB40A, 0x00093D67, 0x000CF7F0,
/* 0x016- */ 0x000CF7EF, 0xFFFE6E42, 0x00083D28, 0x00077110, 0x00194DED, 0x000A2385, 0x002A0C61, 0x0004D44A, 0xFFFC68B5, 0xFFFC472F, 0xFFFF4170, 0x000938C7, 0x002A82A7, 0x002A029F, 0xFFFD4545, 0xFFFB4919,
/* 0x017- */ 0x00015F86, 0x00084E1E, 0x002271A0, 0xFFFE435A, 0xFFF652AC, 0x00090C2C, 0x000B6310, 0x000D79B9, 0x0010FF8E, 0x0014CA28, 0x001E69BB, 0x0017AD59, 0x0013AEA5, 0x0012C99D, 0x000E79E0, 0x000C2136,
/* 0x018- */ 0x000A3355, 0x0008E134, 0x00093FB6, 0x001FD3DB, 0x00099A7D, 0x0009ECDA, 0x00074882, 0x001537E8, 0x000681C8, 0x000B753B, 0x00074D3F, 0x0005C15F, 0xFFFC5C70, 0x0008F9DB, 0xFFFC5C71, 0x0013313E,
/* 0x019- */ 0x000EC2FB, 0x001A9089, 0x0015ECF8, 0x001263A6, 0x00077449, 0x0005C660, 0x00014F43, 0x00043C25, 0xFFFE9F89, 0xFFFD273C, 0x0006F121, 0x000F8F66, 0x00097D39, 0xFFFDE38F, 0x0005BAE8, 0xFFFE6B21,
/* 0x01A- */ 0x00047DE8, 0x000B289C, 0x00046D6C, 0x00180C29, 0x00143652, 0x0008F24A, 0x001482D7, 0x000CBB24, 0x000CB46E, 0x00055E2D, 0x000AF8EA, 0x0003B5EA, 0x0005D0B0, 0x0004EBA8, 0x000425AC, 0x000126AC,
/* 0x01B- */ 0x000345BF, 0x000D00CF, 0x0012011F, 0x00037706, 0x0002F5BC, 0x0003153D, 0x00028BD3, 0x0002CD1E, 0x00023BB0, 0x0002F0F9, 0x0002679D, 0x00036850, 0x0002A18A, 0x00040ADC, 0x00036576, 0x00065552,
/* 0x01C- */ 0x00041CAA, 0x0009D13D, 0xFFF50716, 0xFFF77210, 0xFFF4D735, 0xFFF5B0A5, 0xFFF2E0D2, 0xFFF7C1A1, 0xFFFF9777, 0xFFF61044, 0xFFF7825A, 0xFFF4EB57, 0xFFF53603, 0x000FF4EF, 0x00090B4D, 0xFFF748E4,
/* 0x01D- */ 0xFFF85FAD, 0xFFF6F263, 0x0011AE96, 0x0014013F, 0xFFF6E9D4, 0x000A49D6, 0x00002A18, 0xFFF69151, 0x000C80C7, 0xFFF6C7C2, 0x000BA161, 0xFFF91045, 0xFFF8B999, 0x0001BB82, 0x0002FE16, 0x000AF8FD,
/* 0x01E- */ 0x0003731B, 0x000210B3, 0xFFF44C05, 0x0003FD3C, 0x0003ADFC, 0x0003FD73, 0xFFF4084D, 0xFFF46923, 0xFFF409DD, 0xFFF48BC7, 0xFFF40BDE, 0xFFF4B5A7, 0xFFF40E80, 0xFFF4E93E, 0xFFF4120B, 0xFFF52A52,
/* 0x01F- */ 0xFFF416FB, 0xFFF57ECF, 0xFFF41E23, 0xFFF5F098, 0xFFF4290F, 0xFFF45AFF, 0xFFF49CF0, 0xFFF543A6, 0x0003002F, 0x0007006F, 0x0009008F, 0xFFFCBBB4, 0x000EB659, 0x0006DDA1, 0xFFFE4D46, 0xFFFEBC1C,

/*             0x---0      0x---1      0x---2      0x---3      0x---4      0x---5      0x---6      0x---7      0x---8      0x---9      0x---A      0x---B      0x---C      0x---D      0x---E      0x---F */
/* 0x020- */ 0xFFFF8D7D, 0xFFFE447E, 0x000759AA, 0xFFFB198E, 0x0006B5B8, 0xFFF8D7C5, 0xFFF50984, 0x00098C5C, 0xFFFC1C28, 0x000279B8, 0xFFFD8648, 0x000C2097, 0x0004BE9C, 0x000A9DF7, 0x00049EB3, 0xFFF868A0,
/* 0x021- */ 0x0006EE0D, 0x000F2EC1, 0x00060309, 0x000D48E9, 0xFFFA4E78, 0xFFF682C7, 0xFFF947E6, 0x00005A87, 0xFFFAB206, 0x0003E3D9, 0x0003E3D8, 0x00054DFA, 0x000498E9, 0x00099A9A, 0xFFFDC7DA, 0xFFFB7499,
/* 0x022- */ 0xFFFD8CC8, 0x00042948, 0x0006A874, 0xFFFA2C9B, 0x000927A0, 0x00027F2B, 0xFFFF554C, 0x0002C93E, 0x00006FC1, 0x0002D8C4, 0x0000BB00, 0x000C55FD, 0xFFFEC664, 0x0003543A, 0x0003B6FE, 0x0001A4C1,
/* 0x023- */ 0x0003CBAF, 0x0001DFE2, 0x0003D8D7, 0x000D76F1, 0xFFFBFFC1, 0x000052D5, 0x0001F3ED, 0x00003DA7, 0x0001F0D5, 0x000022D8, 0x0001EC6C, 0xFFFFD140, 0x0001DB7E, 0xFFFF903F, 0xFFFF32B2, 0xFFFEAA96,
/* 0x024- */ 0x000F9F70, 0x0003E7DC, 0x00022ADF, 0x0003E1AA, 0x00076D2B, 0x0008223A, 0x00010F98, 0xFFFEF068, 0x00028027, 0xFFFB6717, 0xFFFC1C27, 0xFFFFA579, 0xFFF5BE95, 0xFFF892D5, 0x0001C4A9, 0x000AAB54,
/* 0x025- */ 0xFFF7666A, 0x0007367E, 0x000E2545, 0x000D7035, 0x0004155F, 0x0006200E, 0x00104476, 0x00038037, 0x000ABC5A, 0x00058057, 0x000DBB41, 0x0005E289, 0x000CC02B, 0x000BC514, 0xFFFDA475, 0x00062137,
/* 0x026- */ 0xFFFF04EA, 0x00053289, 0xFFFB614D, 0xFFF628AE, 0x00068897, 0x0005B188, 0xFFF8A656, 0x00079760, 0x0007C234, 0xFFF9A5CA, 0xFFF45E9F, 0xFFF2B717, 0xFFFAB105, 0xFFFE1D2B, 0xFFFACD77, 0xFFF58FDB,
/* 0x027- */ 0xFFF7D543, 0xFFF76CBA, 0xFFF95B8B, 0xFFFF6C2B, 0xFFFD243F, 0xFFFA39A0, 0xFFFC3451, 0x0005B784, 0xFFF490F7, 0x000B8CC1, 0xFFF6C299, 0xFFFC88FA, 0xFFF4286D, 0x000EB355, 0x000CA8A6, 0x000C8669,
/* 0x028- */ 0xFFFD243E, 0xFFF70DB6, 0x0009CCE4, 0x0001BB83, 0x00065A36, 0x000093D5, 0xFFFED23A, 0xFFFECB2D, 0xFFFD1CD1, 0xFFFCD643, 0xFFFED854, 0xFFFC1454, 0xFFFBFDFA, 0xFFF149A7, 0x00054BC2, 0xFFF83DCC,
/* 0x029- */ 0xFFF78039, 0xFFFCF2CB, 0x000A43B3, 0xFFF69D46, 0xFFF57CE9, 0x000111BD, 0x0001ECCB, 0x0000D27B, 0x000AB044, 0x00098097, 0xFFFE1A28, 0xFFF4D123, 0xFFF8FF91, 0xFFF9FFA1, 0xFFF87E1D, 0x00024F59,
/* 0x02A- */ 0x0007853B, 0x0006EFBB, 0x00074667, 0x00095B3E, 0x0009F396, 0xFFFCB30A, 0xFFFE55E4, 0xFFFD552C, 0xFFF4FB8A, 0xFFF7135D, 0xFFF84CD5, 0x00056C27, 0x00059466, 0x00056DB4, 0x000287CA, 0x0002B6DA,
/* 0x02B- */ 0x000AC9FD, 0xFFF5B62A, 0xFFFC1E56, 0x00087FC7, 0xFFF75670, 0xFFFB7FB9, 0x0005AB04, 0x000655BA, 0x0009FCAF, 0xFFF91087, 0x000AF67C, 0xFFF911F3, 0x000BA6CC, 0x0006AEE3, 0xFFFF2AF2, 0x000855DB,
/* 0x02C- */ 0x0004FE57, 0x000555AA, 0x0006B81A, 0x00032EC9, 0x000AD1BD, 0xFFFE3B57, 0xFFFBD235, 0x00089996, 0xFFFCD137, 0xFFF7DDC6, 0xFFFAAA56, 0xFFF7F2BD, 0x0002AC5B, 0x0002C630, 0xFFFC551C, 0xFFF7F474,
/* 0x02D- */ 0xFFF3CB2A, 0xFFF3FF41, 0xFFF3CB2B, 0x0006EF79, 0x0007C488, 0xFFF3F9EC, 0xFFF2F61D, 0x0001AAC5, 0xFFF344DC, 0xFFF673A4, 0xFFFD80D5, 0xFFF60351, 0x0005D365, 0x0008D74B, 0xFFF45475, 0xFFF9FCF7,
/* 0x02E- */ 0x0008007F, 0xFFF69B31, 0x000FB170, 0x000C12B9, 0xFFFE2482, 0xFFF6B686, 0xFFFD7FD9, 0xFFF29490, 0x00148147, 0x00118117, 0x00142128, 0x00128127, 0x0013012F, 0x00101A86, 0x0009B5AA, 0x000CD4E8,
/* 0x02F- */ 0x000C079A, 0x000A8AB8, 0x000FABA4, 0x0009D27B, 0x00062123, 0x0012C8B4, 0x000BAB8B, 0x0012602B, 0x000F357F, 0x000E80E7, 0x0008E09B, 0x000F00F0, 0x000DDDF4, 0x000A416B, 0x000A7025, 0x00088A4C,

/*             0x---0      0x---1      0x---2      0x---3      0x---4      0x---5      0x---6      0x---7      0x---8      0x---9      0x---A      0x---B      0x---C      0x---D      0x---E      0x---F */
/* 0x030- */ 0x000C401C, 0x000C5D6F, 0x000BA501, 0xFFFD16C0, 0x000C426F, 0x000BD6F1, 0xFFFDB0A7, 0xFFFD0A44, 0x000B8542, 0x000BE1DD, 0xFFFCEAC3, 0xFFFD0789, 0x000B7C30, 0x000BE905, 0xFFFCC751, 0xFFFD05BF,
/* 0x031- */ 0x000B7346, 0x000BEDF5, 0xFFFCACFD, 0xFFFD0484, 0x0008F277, 0x00099E1A, 0xFFFF09CA, 0xFFFF0D15, 0xFFF8833C, 0x0009DC85, 0xFFFB6F3E, 0x00057A82, 0xFFF728B5, 0xFFF59AEC, 0x0004E672, 0xFFF9DFF2,
/* 0x032- */ 0x0001399C, 0x0003ACD5, 0x000DDC1B, 0x0009F0F6, 0xFFFC0604, 0xFFF90A87, 0x00020020, 0x0003444C, 0x00095960, 0x000A33CC, 0x000A627B, 0xFFFADF81, 0xFFFAD034, 0xFFFC0DB0, 0xFFFACEC3, 0xFFFC0A0C,
/* 0x033- */ 0x0000DF82, 0xFFF854DB, 0x000D50E8, 0x0001556A, 0xFFF6D860, 0xFFFCAA75, 0x00004D35, 0xFFFF6189, 0x000ADA5C, 0x0003AAE4, 0x0007AB24, 0x0000AAB4, 0xFFFDFFE0, 0x00080511, 0x000CE5B6, 0x000BE8AC,
/* 0x034- */ 0x00010B33, 0x000D95D7, 0x000E16AD, 0x000DAB81, 0x000DBA32, 0x000B75D1, 0x000CA735, 0x000DBD4A, 0x000ED6A0, 0xFFF5F110, 0x000DBEAC, 0x0004C99A, 0x000AF56D, 0xFFF917F4, 0x000ECCAD, 0x000F476B,
/* 0x035- */ 0xFFFAA539, 0xFFFB111C, 0xFFFB79EA, 0x0005F0EE, 0x000CDF5B, 0x000C2B68, 0x000CD384, 0x000BC305, 0x000C9D6C, 0x000B0680, 0xFFFDD13A, 0xFFFE8B60, 0xFFFF207E, 0x000BD793, 0x0008FBD0, 0xFFF7EA46,
/* 0x036- */ 0xFFF3ED47, 0xFFFCCAC6, 0xFFFCABC6, 0xFFFD0F36, 0xFFF77CC9, 0xFFF4DB06, 0xFFF5C8C6, 0x0004A4BD, 0xFFFEE498, 0x0000CA6F, 0xFFFEE1B7, 0x0000ABC5, 0xFFF25B4E, 0xFFFF1241, 0x0005927C, 0x00011B68,
/* 0x037- */ 0x00030140, 0xFFF3D280, 0x000275D4, 0x00049620, 0xFFFDF1AB, 0x00011E49, 0x0002E858, 0xFFF87F89, 0x00043FE3, 0xFFFDFCB0, 0x00020350, 0xFFF497E1, 0x0004E719, 0xFFF97FC4, 0x000A373A, 0x0006CCF1,
/* 0x038- */ 0x0000287C, 0x0005976E, 0xFFFF543B, 0x000A47A8, 0xFFFB18E7, 0xFFF77F79, 0xFFF103C2, 0x0003CD60, 0xFFF67F69, 0xFFF2CDD2, 0x000B3A94, 0xFFF1E8CA, 0xFFED6B90, 0x0008B2C9, 0x00086BB8, 0x0009515A,
/* 0x039- */ 0x0007E2D9, 0x00067C76, 0xFFEF6102, 0xFFF89204, 0xFFFDC10C, 0x000609F2, 0x0005890B, 0x0005367E, 0x00036ED0, 0x0007158B, 0x0005DA05, 0x00035ADB, 0xFFFFD784, 0x0003A333, 0xFFFCFEC0, 0x0006803C,
/* 0x03A- */ 0xFFFD36C2, 0x00076DFC, 0x000BE31B, 0x0002DBC1, 0x0007C0A1, 0x000A1094, 0x0006FC14, 0x0004B267, 0xFFFC0BD3, 0xFFF9330F, 0xFFFD42BF, 0x000954BC, 0xFFF92EE5, 0xFFF8A4D4, 0xFFFDF4F5, 0xFFFCB9D7,
/* 0x03B- */ 0xFFFEB0BD, 0x000190CD, 0xFFFB96D1, 0xFFF89E83, 0x00002EC0, 0x0001BD5B, 0xFFFC6420, 0xFFF80E2D, 0x0001BCD5, 0x0001DD12, 0x0002D829, 0xFFF70B69, 0xFFF2DF94, 0xFFFC4902, 0x0005C96E, 0x00060086,
/* 0x03C- */ 0x00014D7C, 0x0005A943, 0x000741FF, 0xFFFE533B, 0xFFF8547D, 0x000454C8, 0x000A3C41, 0xFFFB58FA, 0xFFF83432, 0xFFF39F64, 0x0009DC86, 0x00076EE4, 0xFFF18033, 0xFFF1D4EB, 0xFFF5E4D8, 0xFFF0BDF6,
/* 0x03D- */ 0xFFF1907B, 0xFFF55101, 0x00046202, 0x00003941, 0x000A6799, 0x000B8B8D, 0x0002CA28, 0xFFFB9619, 0xFFF3B2D9, 0xFFF45CB2, 0xFFFD4FB9, 0x0000D33D, 0xFFF97F99, 0x00034668, 0x000B3AC4, 0x0002430A,
/* 0x03E- */ 0x000066A7, 0x00092B8C, 0x0004ACB0, 0x00097D76, 0x000BE562, 0x0002B047, 0x0008B909, 0x0000EDBF, 0xFFFB5B43, 0xFFFA6D84, 0xFFF9B14A, 0xFFFB8FB3, 0x000EDBF7, 0xFFFF0796, 0x0006A475, 0xFFFB8218,
/* 0x03F- */ 0xFFFDF0B6, 0xFFF01613, 0xFFF8C808, 0xFFEDCF1D, 0xFFF23544, 0x0006C485, 0x000603CC, 0x00081376, 0x0007617D, 0x00068C53, 0xFFF2FF87, 0x000D0079, 0xFFF95BDE, 0xFFFAE54A, 0xFFFAC982, 0x00009CCE,

/*             0x---0      0x---1      0x---2      0x---3      0x---4      0x---5      0x---6      0x---7      0x---8      0x---9      0x---A      0x---B      0x---C      0x---D      0x---E      0x---F */
/* 0x040- */ 0x00020240, 0xFFF9ABAD, 0xFFF84023, 0x0001D66A, 0xFFFCEFF9, 0x0001F6E5, 0xFFFCA525, 0xFFFC41E7, 0xFFFD39D0, 0x00056481, 0x000165D2, 0x0004B752, 0x0007514A, 0xFFFE7016, 0x000574EF, 0xFFF91106,
/* 0x041- */ 0xFFFAFAD2, 0x000A4706, 0xFFFB7A59, 0x000B9180, 0xFFFE5D21, 0x0002056E, 0x00084685, 0x0004559A, 0x0009497A, 0x0004CD4D, 0x0002D668, 0x0003A702, 0x00031AC1, 0xFFF9E36F, 0xFFFADB15, 0x000962BA,
/* 0x042- */ 0x000BDAA3, 0x00084B57, 0x0004956D, 0xFFFC4A16, 0x000D18A5, 0x0016015F, 0x000CFD61, 0x0002FF65, 0x0001FF98, 0x000278A0, 0x00017924, 0x0002FF51, 0x00027E90, 0x0001FF8B, 0x00017F23, 0x0002FF3A,
/* 0x043- */ 0xFFF70250, 0x0001FF7C, 0x0008FD60, 0xFFFE0096, 0x00093235, 0x0008FD04, 0x000943AE, 0x0008FC96, 0x0005FDB9, 0x000F8F65, 0x0005FE40, 0x000CFC36, 0x000CBDDB, 0xFFF80255, 0xFFF7CD12, 0xFFFC012B,
/* 0x044- */ 0xFFFC3BA0, 0xFFFC4E55, 0xFFFC0154, 0xFFFC0185, 0x000CFBAF, 0x000CC852, 0xFFF802A8, 0xFFF7D985, 0x000CFB11, 0xFFFE00C3, 0xFFF80309, 0x0002FC60, 0xFFFA0740, 0x0003D7BA, 0x0002FB7C, 0x00041021,
/* 0x045- */ 0x0002FA41, 0x0001FD95, 0x0002DAC4, 0x000313F9, 0x0001FCFE, 0x0001FC2C, 0xFFFE00E0, 0xFFFD7A2C, 0xFFFE0103, 0xFFFD8316, 0xFFFE012E, 0xFFFA0388, 0x0009FBA3, 0x0006FCF2, 0x0006708F, 0x000677FA,
/* 0x046- */ 0x0006FC78, 0x0006FBE1, 0xFFF904D8, 0x0001FE9E, 0xFFF90BE2, 0xFFF905C2, 0xFFF92549, 0xFFF906ED, 0x0001FE05, 0x000BF7B3, 0x000BEBA1, 0x000BFEC1, 0x000BF623, 0x000BF422, 0xFFF56209, 0xFFF37997,
/* 0x047- */ 0xFFF97769, 0xFFFA487B, 0xFFF775B4, 0xFFF70430, 0x000D4844, 0x000127AC, 0xFFF1C42C, 0x0010BE05, 0x000F8469, 0xFFF34B92, 0xFFF1B535, 0x000FE15C, 0x000DE531, 0x000F979E, 0x0010C39F, 0x00053B7F,
/* 0x048- */ 0xFFF90A92, 0xFFFC8300, 0xFFF7113C, 0xFFFC07A9, 0x00072F8D, 0x000AEF51, 0x000DD019, 0xFFFA1488, 0x0006E80C, 0x000AC7A3, 0x0008F579, 0x0009B42C, 0x0000F2EB, 0x000815BA, 0x000A356D, 0x00003E1A,
/* 0x049- */ 0x0003040F, 0x000050F9, 0xFFF490F6, 0xFFF0D13F, 0x000781E3, 0x0006395B, 0x00055AC7, 0x00063FAA, 0x000563D1, 0x000646F9, 0x00064EB6, 0x000174A0, 0xFFFE8A27, 0xFFFEA70C, 0xFFFF579E, 0x0006A286,
/* 0x04A- */ 0x00046DA3, 0x0001F928, 0x0003F250, 0xFFFFCEB9, 0xFFFF0E96, 0xFFF72528, 0xFFF691D2, 0xFFF5BF02, 0xFFF93515, 0x000B6F0A, 0xFFF83CAB, 0xFFF43CFB, 0xFFFF2EEE, 0xFFF5E0D5, 0x00073CF0, 0x0010557C,
/* 0x04B- */ 0xFFF26A29, 0xFFF09E82, 0xFFF0E422, 0xFFF30810, 0xFFF2B7BC, 0x0008B91D, 0x00087DA6, 0xFFF3DF69, 0xFFF6D4FD, 0x000F86AC, 0x00091949, 0x001135E1, 0x000F7004, 0x0010EB05, 0x00098182, 0x0003A155,
/* 0x04C- */ 0x00078756, 0xFFF7A445, 0xFFFFE573, 0x0007C355, 0x0008BBC0, 0xFFF64A56, 0xFFF4A039, 0xFFF57548, 0x000E6FF1, 0x0011010F, 0x000C00BF, 0x0010F986, 0x0011E6F8, 0x000C13E4, 0xFFF5FF61, 0x00088087,
/* 0x04D- */ 0xFFF6FF71, 0xFFECFED1, 0xFFED7ED9, 0xFFEB7EB9, 0xFFEEFEF1, 0xFFF62EC3, 0xFFF57F59, 0x0007E4A1, 0x00071F55, 0xFFFCFBF1, 0x002E02DF, 0x003C03BF, 0x00117DEF, 0x0010F092, 0x00022865, 0x0003B836,
/* 0x04E- */ 0xFFFC45DC, 0x000CA6F6, 0x000B60A4, 0x000191BE, 0x0000AAB5, 0x0000555B, 0xFFFBD6B8, 0x00068067, 0x00078077, 0xFFF525A4, 0xFFF5683B, 0x0009AB44, 0xFFF3DECA, 0xFFF6A6A0, 0x0009645A, 0xFFF954EC,
/* 0x04F- */ 0xFFF4733F, 0xFFF33FD5, 0xFFF244BF, 0xFFF5F853, 0x000F0B84, 0x0007098F, 0x00113967, 0x000E25F7, 0xFFFD53A5, 0x000964CF, 0xFFFC87BF, 0xFFEC7EC9, 0x00007D8B, 0x00017197, 0x000469E7, 0xFFFE875E,

/*             0x---0      0x---1      0x---2      0x---3      0x---4 */
/* 0x050- */ 0x00014050, 0x000C7E7A, 0x0003E11A, 0xFFFD8A2C, 0x0006A422
```

</details>

#### Environment Behavior Values
**WARNING:** SDSME and PDSMS mistakenly call them "FLAGS & LAYER 6", which can lead to confusion.

Some sort of command table which can introduce different effects depending on its value. Used in combination with the `Flag` value. Can display additional textures, make sounds, add direction dependdend collisions and much more. The extra textures (...and models ...and animations) can be found in `/a/0/7/5` in Black and White and `/a/0/7/4` in Black 2 and White 2.

<details>
<summary>Behavior descriptions.</summary>

| Value    | Description                                                                                                     |
|----------|-----------------------------------------------------------------------------------------------------------------|
| ...      |                                                                                                                 |
| `0x0001` | Used for can't pass (collision). Flag `0x0001` must be set, else no effect(?).                                  |
| `0x0002` | Winter only footprints if flag `0x0008` is enabled(?) Used as winter path.                                      |
| `0x0003` | Used as ground path.                                                                                            |
| `0x0004` | Used for normal tall gras. Flag `0x0020` must be set to display the gras.                                       |
| `0x0005` | Used for normal tall gras that can have snow in winter. Flag `0x0020` must be set to display the gras.          |
| `0x0006` | Used for dark tall gras, possible double battels with flag `0x0004`. Flag `0x0020` must be set to display the gras. |
| `0x0007` | Used for dark tall gras that can have snow in winter, possible double battels with flag `0x0004`. Flag `0x0020` must be set to display the gras. |
| `0x0008` | Play longer gras enter sound. Display very tall gras, if flag `0x0020` is set. Can't use bike.                  |
| `0x0009` | Play longer gras enter sound. Display very tall dark gras, if flag `0x0020` is set. Possible double battels with flag `0x0004`. Can't use bike. |
| `0x000A` | Can spawn animated dirt with sound which result in getting a (type-)gem or a wild battle by moving in. Used as ground in caves. |
| `0x000B` | Play step sound. Used as sand path.                                                                             |
| `0x000C` | Offset character down to let it sink a bit. Play sand sound. Display dark hole if flag `0x0008` is set. Slow down bike. Used as deep sand.|
| ...      |                                                                                                                 |
| `0x000E` | Play snow sound. Display blue footprints, if flag `0x0008` is enabled. Used as snow.                            |
| `0x000F` | Play snow sound. Display blue footprints, if flag `0x0008` is enabled. Can't use bike.                          |
| `0x0010` | Slide over this tile, if next tile is can be entered (no collision there).                                      |
| ...      |                                                                                                                 |
| `0x0012` | Used as lake border collision (corners).                                                                        |
| ...      |                                                                                                                 |
| `0x0014` | Display ripple while entering and play sound. Used for puddles.                                                 |
| `0x0015` | Display ripple while entering and play sound.                                                                   |
| `0x0016` | Used as ground in the ´Bizarro-House´.                                                                          |
| `0x0017` | Display water splashing and play sound. Used at beach water boarders and on sand which is slightly under water. |
| `0x0018` | Slide over this tile, if next tile is can be entered (no collision there). Used as ice.                         |
| `0x0019` | Play step sound. Used as sand path.                                                                             |
| ...      |                                                                                                                 |
| `0x001C` | Play ripple sound, no animation. Used for puddles with wild pokemon (flag `0x0004` enabled).                    |
| `0x001D` | Used as hole for the strength rocks. Flag `0x0001` must be set, else no effect.                                 |
| `0x001E` | Season depending flooring (footprints), if flag `0x0008` is enabled. Used if there is a spot leafs in autumn but snow in winter and something else in other seasons. |
| `0x001F` | Used as gras path (normal not tall gras which usually is all over the place).                                   |
| `0x0020` | Can spawn animated shadows with sound which result in getting a feather or a wild battle by moving in. Used on some bridges. |
| `0x0021` | Display slightly different tall gras, if flag `0x0020` is enabled.                                              |
| `0x0022` | Display slightly different dark tall gras, if flag `0x0020` is enabled. Possible double battels with flag `0x0004`(?). |
| `0x0023` | Play step sound. Used as sand path inside a cave.                                                               |
| `0x0024` | Play long smooth sound. Can't use bike.                                                                         |
| `0x0025` | Display leafs flying into the air, play sound. Used when the path is full of leafes in autumn.                  |
| ...      |                                                                                                                 |
| `0x0030` | Display electrostatic discharge. Used in the `Chargestone Cave`. Crashes the game if loaded with wrong settings! |
| ...      |                                                                                                                 |
| `0x0032` | Used for charged stones in the `Chargestone Cave`. Activation field for a gimmick?                              |
| `0x0033` | Scriptable behavior? Used for the levitation effect (slowly up and down) in the gate after route 10 in BW. No effect outside that room. |
| ...      |                                                                                                                 |
| `0x003D` | Can use fishing rod. Used as lake water.                                                                        |
| `0x003E` | Can use fishing rod.                                                                                            |
| `0x003F` | Can use fishing rod. Used as water.                                                                             |
| `0x0040` | Used as waterfall. Flag `0x0001` must be set, else no effect. Can connect to any height.                        |
| `0x0041` | Skip this field for water connections. Can force surf on the tile behind, fishing only if there is water. Is used as lake border. |
| `0x0042` | Can use fishing rod.                                                                                            |
| `0x0043` | Can use fishing rod. Used as deep sea to stard diving.                                                          |
| `0x0044` | Skip this field for water connections. Can force surf on the tile behind, fishing only if there is water. Is used as border. |
| ...      |                                                                                                                 |
| `0x0051` | Collision east side.                                                                                            |
| `0x0052` | Collision west side.                                                                                            |
| `0x0053` | Collision north side.                                                                                           |
| `0x0054` | Collision south side.                                                                                           |
| `0x0055` | Collision north and east side.                                                                                  |
| `0x0056` | Collision north and west side.                                                                                  |
| `0x0057` | Collision south and east side.                                                                                  |
| `0x0058` | Collision south and east side.                                                                                  |
| ...      |                                                                                                                 |
| `0x0072` | One way jump east. On land over one tile, on water over 3 tiles. Flag `0x0001` must be set, else no effect. Play jump sound. |
| `0x0073` | One way jump west. On land over one tile, on water over 3 tiles. Flag `0x0001` must be set, else no effect. Play jump sound. |
| `0x0074` | One way jump north. On land over one tile, on water over 3 tiles. Flag `0x0001` must be set, else no effect. Play jump sound. |
| `0x0075` | One way jump south. On land over one tile, on water over 3 tiles. Flag `0x0001` must be set, else no effect. Play jump sound. |
| `0x0076` | Start spinning while moving to east until collision. Play funny sound while spinning.                           |
| `0x0077` | Start spinning while moving to west until collision. Play funny sound while spinning.                           |
| `0x0078` | Start spinning while moving to north until collision. Play funny sound while spinning.                          |
| `0x0079` | Start spinning while moving to south until collision. Play funny sound while spinning.                          |
| ...      |                                                                                                                 |
| `0x007C` | Used to slide on quick sand on a slope if running and animate it(?).                                            |
| ...      |                                                                                                                 |
| `0x0094` | Move the character to east and play sound. Used for rapids.                                                     |
| `0x0095` | Move the character to west and play sound. Used for rapids.                                                     |
| `0x0096` | Move the character to north and play sound. Used for rapids.                                                    |
| `0x0097` | Move the character to south and play sound. Used for rapids.                                                    |
| ...      |                                                                                                                 |
| `0x009C` | Used in diving areas. Connected to a counter which limits diving time/distance(?).                              |
| ...      |                                                                                                                 |
| `0x00A3` | Used to connect the map grid with an external rail. The connections tiles on the rail must also use `0x00A3` and be very close to this tile in 3D space. |
| ...      |                                                                                                                 |
| `0x00BE` | Lose balance if standing on this tile and fall off from a side after a while. Surrounding tile must be deeper in terrain to avoid getting trapped. Used as tightrope. |
| `0x00BF` | Connection ramp to a tightrope, safe enter and leave point.                                                     |
| ...      |                                                                                                                 |
| `0x00D4` | Can talk to NPC behind this tile. Flag `0x0001` must be set, else no effect.                                    |
| ...      |                                                                                                                 |
| `0x00D6` | Used for the PC (box, mail, ...). Flag `0x0001` must be set, else no effect.                                    |
| ...      |                                                                                                                 |
| `0x00D8` | Used for the TV. Flag `0x0001` must be set, else no effect.                                                     |
| `0x00D9` | Dialog text `index 0` from file 10 in `/a/0/0/3`. Flag `0x0001` must be set, else no effect.                     |
| `0x00DA` | Dialog text `index 1` from file 10 in `/a/0/0/3`. Flag `0x0001` must be set, else no effect.                     |
| `0x00DB` | Dialog text `index 2` from file 10 in `/a/0/0/3`. Flag `0x0001` must be set, else no effect.                     |
| `0x00DC` | Dialog text `index 3` from file 10 in `/a/0/0/3`. Flag `0x0001` must be set, else no effect.                     |
| `0x00DD` | Dialog text `index 4` from file 10 in `/a/0/0/3`. Flag `0x0001` must be set, else no effect.                     |
| `0x00DE` | Dialog text `index 4` from file 10 in `/a/0/0/3`. Flag `0x0001` must be set, else no effect. Used for the trash bin. |
| `0x00DF` | Dialog text `index 5` from file 10 in `/a/0/0/3`. Flag `0x0001` must be set, else no effect.                     |
| `0x00E0` | Dialog text `index 6` from file 10 in `/a/0/0/3`. Flag `0x0001` must be set, else no effect.                     |
| `0x00E1` | Dialog text `index 7` from file 10 in `/a/0/0/3`. Flag `0x0001` must be set, else no effect.                     |
| `0x00E2` | Used for the vending machine. Flag `0x0001` must be set, else no effect.                                        |
| ...      |                                                                                                                 |
| `0x00FE` | Somewhere used instead of duplicates in 2nd permission layer(?). Ignore this...                                 |
| `0x00FF` | Can't pass (collision)(?). This one doesn't rely on a flag.                                                     |
| ...      |                                                                                                                 |

</details>

TODO: Document missing values.

#### Environment Flag Values
**WARNING:** SDSME and PDSMS mistakenly call them "COLLISION & SHADOW", which can lead to confusion.

Sets the properties of a tile using binary flags. Multiple flags can be combined. Footprints are displayed for a short time after a character left the field. Gras is animated when the character enters a field and remains in the last frame until the character leaves.

<details>
<summary>Flag descriptions</summary>

| Bitmask  | Description                                                                                                     |
|----------|-----------------------------------------------------------------------------------------------------------------|
| `0x0001` | Interactable field. Usually used for collisions but depending on the behavior-value it can also result in jumping over, talk to behind, interact with furniture, ... |
| `0x0002` | Surfable tile, does not include fishing!                                                                        |
| `0x0004` | Enable wild pokemon encounter for this tile                                                                     |
| `0x0008` | Display footprints, appearance depends on the behavior field.                                                   |
| `0x0010` | Enabled on water and flooded sand but not on water-borders, rapids and diveable areas. Not sure how it is used. |
| `0x0020` | Display gras animation and play sound, appearance depends on the behavior field.                                |
| `0x0040` | Reflection, vertical flipped copy of the overworld under the ground.                                            |
| `0x0080` | Has shadow. The shadow is a dark circle under the overworld.                                                    |
| `0x0100` | Enables overworld shading with the color defined in light 3.                                                    |
| `0xFE00` | Some of the remaining bits are enabled on corner terrain slopes but the purpose is unclear.                     |

</details>

### Special RD Maps
There are a handful maps which use the "RD" signature and have no terrain data within the permission section. Instead, there are a set of currently unknown bytes. These maps are special, because they allow the game to load different sets of additional 3D models, movements permissions, interactable things like NPCs (...), depending on scripting flags. RD maps work in combination with the files from `/a/1/5/6` in BW and `/a/1/5/4` in B2W2.

In Pokemon Black and White, only the `Black City` and the `White Forest` are RD maps. Those places get content added, when the player poaches people through the Entralink.

In Pokemon Black 2 and White 2, only the `Join Avenue` and an island are RD maps. Here the player can talk to people passing through to add stalls at the sides of the road. The island maps, that also use these permissions, are an unused developement leftover. It is assumed that the join avenue was initially supposed to be an island, since it got some free space for eight markets in the center:

<p align="center">
![RD island](resources/rd_island.png)
![RD island top view](resources/rd_island_top.png)
</p>

---

## TODO
* Link the NSBMD section to `src/universal/resources/nitro/graphics_3d/file_bmd0.md` once it contains information.
* Research and document "RD" type maps.
* Add terrain tables or insight into its internal working. Do NOT add the one with float values!
* Document missing `behavior` values.
* Link fixed point definition.
