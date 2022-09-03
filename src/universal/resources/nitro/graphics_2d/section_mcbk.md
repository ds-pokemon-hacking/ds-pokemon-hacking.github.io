# MCBK ("KBCM") - Multi Cell Bank
> Author(s): [Gonhex](https://github.com/Gonhex) <br />
> Research: [Gonhex](https://github.com/Gonhex)

```mermaid
flowchart BT;
    NMCR(N. Multi Cell R.)-->G2D(Graphics 2D);
    MCBK(Multi Cell Bank)-->NMCR;
```
The multi cell bank combines multiple animated cells into cluster. This allows more complex animations by grouping related cells into one unit. 

## Table of Contents
* [Data Structure](#data-structure)
  * [Section Container](#section-container)
  * [MCBK Container](#mcbk-container)
  * [Multi Cell Table](#multi-cell-table)
  * [Multi Cell](#multi-cell)
* [TODO](#todo)

---
## Data Structure

### Section Container
```c
struct ContainerSectionMCBK
{
    /* 0x0 */ struct NitroSectionHeader sectionHeader;
    /* 0x8 */ struct ContainerMCBK sectionData;
}; // entry size = sectionHeader.lengthSection
```
| Field Name     | Description                                                                             | Data Type    |
|----------------|-----------------------------------------------------------------------------------------|--------------|
| sectionHeader  | Header of this section. `sectionHeader.signature = "KBCM"`.   | [NitroSectionHeader](../nitro_overview.md#nitro-section-header) |
| sectionData    | Content of this section.                                                                | [ContainerMCBK](#mcbk-container) |

### MCBK Container
```c
struct ContainerMCBK
{
    // header
    /* 0x00 */ uint16_t numberMultiCells;
    /* 0x02 */ int16_t unknown0;
    /* 0x04 */ uint32_t offsetTableMultiCell;
    /* 0x08 */ uint32_t offsetDataMultiCell;
    /* 0x0C */ uint32_t unknown1;
    /* 0x10 */ uint32_t unknown2;
    
    // data
    /* offsetTableMultiCell */ struct MultiCellTable dataTable[numberMulticells];
    /* offsetDataMultiCell  */ struct MultiCell dataMultiCell[?];
}; // entry size = sectionHeader.lengthSection - 0x8
```
| Field Name           | Description                                                                             | Data Type |
|----------------------|-----------------------------------------------------------------------------------------|-----------|
| numberMultiCells     | Number of multi cell objects.                                                           | uint16_t  |
| unknown0             | Always `0xBEEF`.                                                                        | int16_t   |
| offsetTableMultiCell | Offset to the multi cell table data section relative to `ContainerMCBK`.                | uint32_t  |
| offsetDataMultiCell  | Offset to the multi cell data section relative to `ContainerMCBK`.                      | uint32_t  |
| unknown1             | Unused offset?                                                                          | uint32_t  |
| unknown2             | Unused offset?                                                                          | uint32_t  |
| dataTable            | Multi cell configuration table.                                                         | [MultiCellTable](#multi-cell-table) |
| dataMultiCell        | Cell selection and placement data.                                                      | [dataMultiCell](#multi-cell) |

### Multi Cell Table
```c
struct MultiCellTable
{
    /* 0x0 */ uint16_t numberDisplayedCells;
    /* 0x2 */ uint16_t numberLoadedCells;
    /* 0x4 */ uint32_t offsetData;
}; // entry size = 0x8
```
| Field Name           | Description                                                                             | Data Type |
|----------------------|-----------------------------------------------------------------------------------------|-----------|
| numberDisplayedCells | Number of visible multi cells.                                                          | uint16_t  |
| numberLoadedCells    | Number of multi cells within the buffer.                                                | uint16_t  |
| offsetData           | Offset of the multi cell relative to [MultiCell](#multi-cell).                          | uint32_t  |

### Multi Cell
```c
struct MultiCell
{
    /* 0x0 */ uint16_t indexAnimatedCell;
    /* 0x2 */ int16_t positionX;
    /* 0x4 */ int16_t positionY;
    /* 0x6 */ uint8_t unknown0;
    /* 0x7 */ uint8_t indexData;
}; // entry size = 0x8
```
| Field Name        | Description                                                                             | Data Type |
|-------------------|-----------------------------------------------------------------------------------------|-----------|
| indexAnimatedCell | Selects sub-sprite from the animation resource.                                         | uint16_t  |
| positionX         | X position. `0` is at the center.                                                       | int16_t   |
| positionY         | Y position. `0` is at the center.                                                       | int16_t   |
| unknown0          | Usually `32 (0x20)`, but `33` also possible. Others, too?                               | uint8_t   |
| indexData         | Local multi cell index starting by `0`.                                                 | uint8_t   |

---
## TODO
* Research and document `unknown0` in [MultiCell](#multi-cell)
