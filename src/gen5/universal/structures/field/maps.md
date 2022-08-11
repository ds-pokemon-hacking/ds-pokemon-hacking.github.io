# Maps

## Table of Contents

* [Data Location](#data-location)
* [Container Structure](#container-structure)
* [Section Structures](#section-structures)
  * [Model](#model)
  * [Permissions](#permissions)
  * [Building Table](#building-table)
---

## Data Location
The NARC containing these files can be found in the following game paths:
* Black and White: /a/0/0/8
* Black 2 and White 2: /a/0/0/8
--- 

## Container Structure
```c
struct ContainerMap
{
    // header
    int8_t signature[2];
    uint16_t numberSections;
    uint32_t offsetModel;
    uint32_t offsetPermissions[numberSections - 2];
    uint32_t offsetBuildingTable;
    uint32_t length;
    
    // data
    NSBMD dataModel;
    SectionPermission dataPermissions[numberSections - 2];
    SectionBuildingTable dataBuildingTable;
} 
```
| Field Name          | Description                                                                             | Data Type |
|---------------------|-----------------------------------------------------------------------------------------|-----------|
| signature           | `"NG"`: No permission section.  <br /> `"WB"`: One permission section. <br /> `"GC"`: Two permission sections. <br /> `"RD"`: One permission section, but with a different file format. | int8_t[2] |
| numberSections      | Number of data sections within this file.                                               | uint16_t  |
| offsetModel         | Points to the 3D model of the map.                                                      | uint32_t  |
| offsetPermissions   | Points to the movement permission data.                                                 | uint32_t[numberSections - 2] |
| offsetBuildingTable | Points to the building table.                                                           | uint32_t  |
| length              | Length of this file.                                                                    | uint32_t  |
| dataModel           | 3D model of the map. NSBMD format without a texture section.                            | NSBMD     |
| dataPermissions     | 0, 1 or 2 permission sections. A 2nd one can be used for things like bridges where one can walk on two different heights.                                                                                                                                       | SectionPermission[numberSections - 2] |
| dataBuildingTable   | Define appearance settings for all buildings.                                           | SectionBuildingTable |

---

## Section Structures

### Model
The NSBMD data format is not part of this document.

---

### Permissions
```c
struct SectionPermission
{
    // header
    uint16_t width;
    uint16_t height;
    
    // data
    Tile tile[width * height];
    CornerTerrain corner[numberOfCorners];
} 
```
| Field Name | Description                                                                             | Data Type |
|------------|-----------------------------------------------------------------------------------------|-----------|
| width      | Number of tiles in horizontal direction. | uint16_t |
| height     | Number of tiles in vertical direction. | uint16_t |
| tile       | Individual soil properties for all fields. | Tile |
| corner     | Special terrain properties for corners. ... | CornerTerrain |

#### Tile
```c
// "WB" and "GC" type maps:
struct Tile
{
    TileTerrain terrain;
    TileEnvironment environment;
}

// "RD" type maps:
struct Tile
{
    int8_t unknown[20]; // TODO: document structure
    TileEnvironment environment;
}
```
| Field Name  | Description                                                                                   | Data Type       |
|-------------|-----------------------------------------------------------------------------------------------|-----------------|
| terrain     | Defines height and slope on which overworlds are placed.                                      | TileTerrain     |
| unknown     | Data for `"RD"`-type maps. Those maps have flag based object placement. (TODO: document this) | int8_t[20]      |
| environment | Interaction between tile and overworld.                                                       | TileEnvironment |

#### Terrain
```c
struct TileTerrain
{
    uint16_t inclination;
    uint16_t distance;
}
```
| Field Name  | Description                                                                                                                        | Data Type |
|-------------|------------------------------------------------------------------------------------------------------------------------------------|-----------|
| inclination | Indexes a specific terrain slope. Probably flag based with a format like `0bTTTT'TTTT'TTTT'TTCR` with `T = terrain settings`, `C = is corner` and `R = reset`                                                                                                                                             | uint16_t  |
| distance    | Indexes values that represent the distance perpendicular to the center of the map when the plane is extended to allow that vector. | uint16_t  |

TODO: add database

#### Environment
```c
struct TileEnvironment
{
    uint16_t behavior;
    uint16_t flags;
}
```
| Field Name | Description                                                                                                            | Data Type |
|------------|------------------------------------------------------------------------------------------------------------------------|-----------|
| behavior   | Often used in combination with `flags`. Manages data used for interactions and affects the overall behavior of a tile. | uint16_t  |
| flags      | Flag based tile settings that can be combined. See table below.                                                        | uint16_t  |

Environment flags:

| Bitmask                            | Description |
|------------------------------------|-------------|
| `0x0001` | Interactable field. Usually used for collisions but depending on the behavior-value it can also result in jumping over, talk to behind, interact with furniture, ... |
| `0x0002` | Surfable tile, does not include fishing!                                                                        |
| `0x0004` | Enable wild pokemon encounter for this tile                                                                     |
| `0x0008` | Footprints, appearance and sound depend on the behavior field.                                                  |
| `0x0010` | Enabled on water and flooded sand but not on water-borders, rapids and diveable areas. Not sure how it is used. |
| `0x0020` | Stay in / walk through gras animation, appearance and sound depend on the behavior field.                       |
| `0x0040` | Reflection, vertical flipped copy of the overworld under the ground.                                            |
| `0x0080` | Has shadow. The shadow is a dark circle under the overworld.                                                    |
| `0x0100` | Enables overworld shading with the color defined in light 3.                                                    |
| `0xFE00` | Some of the remaining bits are enabled on corner terrain slopes but the purpose is unclear.                     |

#### Terrain extension for corners
```c
struct CornerTerrain
{
    uint16_t inclinationTop;
    uint16_t inclinationBottom;
    uint16_t distanceTop;
    uint16_t distanceBottom;
}
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
    uint32_t numberOfBuildings;
    
    // data
    BuildingProperties building[numberOfBuildings];
}
```
| Field Name        | Description                                                                                    | Data Type           |
|-------------------|------------------------------------------------------------------------------------------------|---------------------|
| numberOfBuildings | Header of the building table, tells how many building are assigned to the map.                 | uint32_t            |
| building          | Display settings for a building. Includes local position, yaw rotation and the building index. | BuildingProperties  |

#### Building display settings
```c
struct BuildingProperties
{
    int32_t localPositionX;
    int32_t localPositionY;
    int32_t localPositionZ;
    uint16_t rotationAngleYaw;
    uint16_t buildingID; // big endian
}
```
| Field Name       | Description                                                                | Data Type |
|------------------|----------------------------------------------------------------------------|-----------|
| localPositionX   | X position relative to the center of the map.                              | uint32_t  |
| localPositionY   | Y position relative to the center of the map.                              | uint32_t  |
| localPositionZ   | Z position relative to the center of the map.                              | uint32_t  |
| rotationAngleYaw | Counterclockwise yaw rotation angle.                                       | uint16_t  |
| buildingID       | ID of the building model. Unlike most variables, this on is in big endian. | uint16_t  |
