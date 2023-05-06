# NANR ("RNAN") - Nitro Animation Runtime
> Author(s): [Gonhex](https://github.com/Gonhex) <br />
> Research: (see sections)

```mermaid
flowchart BT;
    NANR(N. Animation R.)-->G2D(Graphics 2D);
    ANBK(Animation Bank)-->NANR;
    LABL(Label)-->NANR;
    UEXT(Use Extension?)-->NANR;
```
The animation runtime creates frame by frame animations using cells. Affine transformations can also be applied to frames.

## Table of Contents
* [Data Structure](#data-structure)
  * [File Container](#file-container)
* [Specification](#specification)
  * [Sections](#sections)

---
## Data Structure

### File Container
```c
struct ContainerFileNANR
{
    /* 0x00   */ struct NitroFileHeader fileHeader;
    /* 0x10   */ struct ContainerSectionABNK sectionDataABNK;
    /* append */ struct ContainerSectionLABL sectionDataLABL;
    /* append */ struct ContainerSectionUEXT sectionDataUEXT;
}; // entry size = fileHeader.lengthFile
```
| Field Name      | Description                                                                             | Data Type    |
|-----------------|-----------------------------------------------------------------------------------------|--------------|
| fileHeader      | Header of this file. `fileHeader.signature = "RNAN"`.                       | [NitroFileHeader](../nitro_overview.md#nitro-file-header) |
| sectionDataABNK | Cell animation data.                                                        | [ContainerSectionABNK](section_abnk.md#section-container) |
| sectionDataLABL | Animation-name table.                                                            | [ContainerSectionLABL](section_labl.md#section-container) |
| sectionDataUEXT | Cluster flag.                                                               | [ContainerSectionUEXT](section_uext.md#section-container) |

---
## Specification

### Sections
* [Animation Bank](section_abnk.md)
* [Label](section_labl.md)
* [Use Extension?](section_uext.md)
