---
title: It's all rigged, baby: Getting a skin-weighted model from Blender to DS
tags:
  - Guide (Diamond)
  - Guide (Pearl)
  - Guide (Platinum)
  - Guide (HeartGold)
  - Guide (SoulSilver)
  - Guide (Black)
  - Guide (White)
  - Guide (Black 2)
  - Guide (White 2)
---

# It's all rigged, baby: Getting a skin-weighted model from Blender to DS
> Author(s): [Brom](https://github.com/BromBromBromley).

## Table of Contents
- [Introduction]()
- [Blender export settings]()
- [Editing DS-specific material settings]()
  - [Polygon IDs and what they do]()
  - [Adding outlines]()
  - [Adding fog]()
- [Exporting to NSBMD]()
- [Common issues](#common-issues)
  - [Doesn't look correct]()
    - [Poor scaling]()
    - [Poor topology]()
    - [Poor texture management]()
  - [Doesn't work on hardware outright]()
    - [Poor weighting]()

## Common issues

When exporting a model, althought it might work on an emulator, there may be a few issues that you encounter along the way. In my personal experience, although not recommended for most other uses, [EveryFileExplorer (EFE)](https://github.com/PabloMK7/EveryFileExplorer/releases/tag/1.13) works as a good debugger to identify what is wrong with a model along with seeing if it will function correctly on hardware.

### Doesn't look correct

When testing in game, there still may be some issues that you notice. Although the model won't ever look exactly like it does in Blender, sometimes there are issues where the model ends up looking corrupted.

#### Poor scaling

Sometimes when exporting the model, although the model mostly shows up correctly, some of the triangles seem to be missing or distorted. One potential reason for this is that the model is too small. Because of the model being too small, there's not enough precision to place the vertices properly resulting in a corrupted looking model. To fix this, try increasing the scale of the model's armature, applying the scale (`CTRL + A > Scale` within Blender after scaling the armature with it selected), then exporting it again.

#### Poor topology

To address some basic things to keep in mind is that the DS can only render 2048 polygons or 6144 vertices on the screen at once. Along with this, only tris and quads can be rendered.

Even if the model fulfills these conditions well, oddly formed quads may cause some issues. This mostly comes from the fact that the DS has issues drawing quads with a concave surface as seen below.

TODO - ADD PICTURE FROM MELONDS BLOG

The simple solution to this is just splitting this quad into two tris instead.

#### Poor texture management

Sometimes the model may have some issues with its textures. If the model is all white, it is possible that the texture VRAM has been overloaded and some textures may need to be reduced in complexity. To do this, you can reduce the resolution of some of the textures to a smaller size or reduce the color count of some of the textures. Along with this, some smart tricks to use your textures effectively is making use of the mirror repeat mode for symmetrical elements or reusing a palette between multiple textures to save space.

If th textures are visible but you see stray lines where a UV touches the border of the texture, it could also be that the DS's imprecision causes some of the other side of the texture to show. To fix this, the texture repeat mode can be set to flip or clamp, or alternatively, the UVs can be brought a little bit away from the border of the texture. If there are still stray lines, it could also be that there is an internal or doubled face that may need removing. Do keep in mind that at the edges of the screen, it is common to see a line. This is just something with the DS that occurs with any model including vanilla ones.

### Doesn't work on hardware outright

#### Poor weighting

When attempting to open the model using EFE, if you get an error stating that the index is out of bounds of the matrix within `NDS.GPU.CommandContext.StoreMatrix()` when checking the details of the error message, it's likely that there's an issue with the weighting of the model. If you attempt to use this model on hardware, you might notice that the game will hang.

One common reason is that when weight painting, it's very easy to accidentally cause some vertices to have influence from too many bones where their total influence is greater than `1.0`. Make sure to have the `Auto-Normalize` option enabled in the `Tool > Options` side panel to help avoid this issue. To fix this, selecting `Weights > Normalize All` and then deselecting `Lock Active` can potentially help fix this issue.

If this alone doesn't fix the issue, it could also be that too many bones have influence over a small set of joined vertices. As noted by Hello007:
> When using smooth skinning, a "virtual joint" has to be created for every weight combination, so it will fail if there are too many of those for one submesh¹. [...] So as long as you can either avoid edge strips or separate them into smaller ones, you should be fine.

_¹Submeshes are sequences of primitives or an edge strip._