# Area Data
> Author(s): [Gonhex](https://github.com/Gonhex) <br />
> Research: [Bond697](https://github.com/Bond697), [PlatinumMaster](https://github.com/PlatinumMaster), [Gonhex](https://github.com/Gonhex), [Hello007](https://github.com/HelloOO7)

The area data describes the current state of the overworld. It selects all the optical elements. The area is selected by the zone data in `a/0/1/2` but can also depend on the season.

## Table of Contents
* [Data Location](#data-location)
* [Data Structure](#data-structure)
  * [Container](#container)
  * [Area Data](#area-data-entry)
* [Specification](#specification)
  * [Seasons](#seasons)
---

## Data Location
The file (not a NARC!) can be found in the following game path:
* Black 2 and White 2: `/a/0/1/3`
--- 

## Data Structure

### Container
```c
struct ContainerAreaData
{
    /* 0x0 */ struct AreaData areaTable[409];
}; // entry size = 0xFFA
```
| Field Name    | Description                                                                                           | Data Type |
|---------------|-------------------------------------------------------------------------------------------------------|-----------|
| areaTable     | Array of area configurations. Only one entry is active.                                               | [AreaData[]](#area-data-entry) |

### Area Data Entry
```c
struct AreaData
{
    /* 0x0 */ uint16_t buildings;
    /* 0x2 */ uint16_t mapTextures;
    /* 0x4 */ uint8_t textureAnimation;
    /* 0x5 */ uint8_t frameAnimation;
    /* 0x6 */ uint8_t fieldEnvironment;
    /* 0x7 */ uint8_t ambientLight;
    /* 0x8 */ uint8_t outlineColor;
    /* 0x9 */ uint8_t bbdMdlColors;
}; // entry size = 0xA
```
| Field Name         | Description                                                                                           | Data Type |
|--------------------|-------------------------------------------------------------------------------------------------------|-----------|
| buildings          | Select builing container from the NARC:<br />Interior: Model = `a/2/2/6`, texture = `a/1/7/5`.<br />Exterior: Model = `a/2/2/5`, texture = `a/1/7/4`. | uint16_t |
| mapTextures        | Select map texture NSBTX from the NARC: `a/0/1/4`.                                                    | uint16_t  |
| textureAnimation   | Select map texture SRT animation NSBTA from the NARC: `a/0/6/8`. Is `0xFF` if none.                   | uint8_t   |
| frameAnimation     | Select map frame animation container from the NARC: `a/0/6/9`. Is `0xFF` if none.                     | uint8_t   |
| fieldEnvironment   | Area type: `0` = interior, `1` = exterior.                                                            | uint8_t   |
| ambientLight       | Select ambient light settings from NARC: `a/0/6/0`. Note: Weather can overwrite the setting.          | uint8_t   |
| outlineColor       | Select outline color profile from NARC: `a/0/1/5`. Is `0xFF` if none.                                 | uint8_t   |
| bbdMdlColors       | Material preset for actor billboards.                                                                 | uint8_t   |

---
## Specification

### Seasons
The current season depends on the month.
```c
enum Season
{
    SEASON_SPRING = 0,
    SEASON_SUMMER = 1,
    SEASON_AUTUMN = 2,
    SEASON_WINTER = 3
};

enum Season getSeason()
{
    // example if january = 0 ... december = 11
    return currentMonth % 4;
}
```
While the area data is selected by the zone, it can also be influeced by the season. This is necessary to adjust lights and textures. The decision whether to change the area data depending on the season or not is hardcoded.
```c
bool isSeasonsEnabled(uint32_t zoneAreaID)
{
    return (zoneAreaID >= 0x2) && (zoneAreaID < 0x11A);
}

uint32_t getAreaID(uint32_t zoneAreaID)
{
    uint32_t areaID = zoneAreaID;
    
    if (isSeasonsEnabled(zoneAreaID))
    {
        areaID += getSeason();
    }
    
    return areaID;
}
```
