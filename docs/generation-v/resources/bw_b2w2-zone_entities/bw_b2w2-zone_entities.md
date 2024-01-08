---
title: Zone Entities
tags:
  - Resource (Black)
  - Resource (White)
  - Resource (Black 2)
  - Resource (White 2)
---

# Zone Entities
> Author(s): [PlatinumMaster](https://github.com/PlatinumMaster) <br />
> Research: [Kaphotics](https://github.com/kwsch), [PlatinumMaster](https://github.com/PlatinumMaster), [Hello007](https://github.com/HelloOO7)

The NARC containing these files can be found in the following game paths:
* Black and White: /a/1/2/5
* Black 2 and White 2: /a/1/2/6
--- 
# Container Structure
```C
struct ZoneEntitiesContainer {
    uint32_t pInitializationScripts; // Relative pointer to initialization scripts.
    uint8_t InteractablesCount;
    uint8_t NPCCount;
    uint8_t WarpCount;
    uint8_t TriggerCount;

    InteractableEntry Interactables[InteractablesCount];
    NPCEntry NPCs[NPCCount];
    WarpEntry Warp[WarpCount];
    TriggerEntry Trigger[TriggerCount];


    DynamicInitializationEntry pDynamicInitScripts;
    StaticInitializationEntry StaticInitScripts; 
} 
```
---
# Section Structures
## Interactable Entry
| Field Name       | Description                                                                            | Data Type      |
|------------------|----------------------------------------------------------------------------------------|----------------|
| Script ID        | The script to execute when interacted with. Read from the zone's script container.              | uint16_t |
| Condition        | The condition needed for this interactable to allow interactions.                      | uint16_t |
| Interactibility  | The sides which the interactable can be interacted with.                               | uint16_t |
| RailSystem Index | The index of the interactable in the context of RailSystem, the 3D permissions system. | uint16_t |
| X                | The world X position of the interactable.                                              | uint32_t   |
| Z                | The world Z position of the interactable.                                              | uint32_t   |
| Y                | The world Y position of the interactable.                                              | int32_t     |


## NPC Entry
| Field Name           | Description                                                                     | Data Type      |
|----------------------|---------------------------------------------------------------------------------|----------------|
| ID                   | The ID that will be used to reference the NPC in game.                          | uint16_t |
| Model ID             | The ID of the sprite to use for the NPC in game.                                | uint16_t |
| Movement Code | The default movement behavior of the NPC in game.                               | uint16_t |
| Type                 | The type of NPC to be spawned.                                                  | uint16_t |
| Spawn Flag           | The flag which can be used to control the NPC's presence in game.               | uint16_t |
| Script ID            | The script which the NPC will use when interacted with in game.                 | uint16_t |
| Face Direction       | The default direction that the NPC will look before they start their movement.  | uint16_t |
| Parameter 1          | An optional parameter, whose value purpose depends on the actor's movement code.                                         | uint16_t |
| Parameter 2              | An optional parameter, whose value purpose depends on the actor's movement code.                             | uint16_t |
| Parameter 3            | An optional parameter, whose value purpose depends on the actor's movement code.                             | uint16_t |
| Traversal Width      | How far the NPC will travel from left to right, in game units.                  | uint16_t |
| Traversal Height     | How far the NPC will travel up and down, in game units.                         | uint16_t |
| Coordinate System           | If this value is 1, then RailSystem (the system for nonlinear collisions) is used. Otherwise, it is the grid system.                                             | uint32_t |
| X                    | The world X position of the NPC.                                                | uint16_t |
| Z                    | The world Z position of the NPC.                                                | uint16_t |
| RailSystem Side Position            | If the coordinate system is RailSystem, then this specifies the NPC's side position.                             | uint16_t |
| Y                    | The world Y position of this NPC.                                               | int16_t   |

## Warp Entry
| Field Name        | Description                                                 | Data Type      |
|-------------------|-------------------------------------------------------------|----------------|
| Target Zone       | The map header where this warp will teleport you to.        | uint16_t |
| Target Warp       | The warp where you will be teleported to.                   | uint16_t |
| Contact Direction | The direction you need to interact with the warp.           | uint8_t  |
| Transition Type   | The transition that will be played when warping.            | uint8_t  |
| Coordinate Type   | The type of coordinates you will be passing in.             | uint16_t |
| X                 | The world X position of the warp.                           | uint16_t |
| Z                 | The world Z position of the warp.                           | int16_t   |
| Y                 | The world Y position of the warp.                           | uint16_t |
| Width             | The width of the warp zone, in game units.                  | uint16_t |
| Height            | The height of the warp zone, in game units.                 | uint16_t |
| Coordinate System            |  If this value is 1, then the coordinates are based on RailSystem. Otherwise, it uses the grid system. | uint16_t |

## Trigger Entry
| Field Name                          | Description                                                                         | Data Type      |
|-------------------------------------|-------------------------------------------------------------------------------------|----------------|
| Script ID                           | The script ID which will be used when the trigger is executed.                      | uint16_t |
| Work Reference Value                | The value that must be in the work in order for this trigger to execute.            | uint16_t |
| Work                                | The variable that is being monitored for the value we want.                         | uint16_t |
| Unknown                             | The purpose of this field has yet to be discovered.                                 | uint16_t |
| Unknown 2                           | The purpose of this field has yet to be discovered.                                 | uint16_t |
| X                                   | The world X position of the trigger.                                                | uint16_t |
| Z                                   | The world Z position of the trigger.                                                | uint16_t |
| Width                               | The width of the trigger area.                                                      | uint16_t  |
| Height                              | The height of the trigger area.                                                     | uint16_t |
| Y                                   | The world Y position of the trigger.                                                | int16_t |
| Unknown 3                           | The purpose of this field has yet to be discovered.                                 | uint16_t |
