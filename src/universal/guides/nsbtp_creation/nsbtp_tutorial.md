# Making a new texture flipbook animation from scratch
> This guide was written by [Brom](https://github.com/BromBromBromley).

## What is a texture flipbook?

Ever seen flowers on the field change between different frames in their animation? Have you seen the water rise and fall with rocks in the ocean? Even with the player character, all of these examples use texture flipbook animations! Let's learn how to make one from scratch together.

## What is an NSBTP?

For the Nintendo DS, games that are 3D primarily use [NSBTP (NITRO System Binary Texture Pattern animation)](https://kingdom-of-ds-hacking.github.io/universal/resources/nitro/graphics_3d/file_btp0.html) files to make texture flipbooks. In tools like Tinke, you may see these files as ".btp0" files, but don't worry, they're the same as NSBTP files.

## What is an ITP?

Before the texture flipbook animation is put into a format that the Nintendo DS can read easily with the NSBTP file, it's in a plain-text format that humans can read more easily. These files are called ITP (Intermediate Texture Pattern animation) files. We will be making one of these in order to create an NSBTP of our own. After we give it to a special program, we can get an NSBTP file from it.

## What do we need to make one?

Required materials:
- Any text editor
- G3DCVTR

## Creating the ITP file

### What are the parts of the ITP file?

There are two primary parts to the ITP being the "header" section with various info about how the file was generated along with the "body" section which is the more important part. For the most part, the data in the header section isn't very important for our purposes, but will be included in order to make a valid ITP file.

### Making the basic skeleton of the ITP

For anyone who has seen an XML file before, you might not be in for a total shock as ITP files are actually XML files in disguise! To start, let's put in the data that every ITP needs here:

```xml
<?xml version="1.0" encoding="Shift_JIS"?>

<itp version="1.6.0">

<head>
    <create user="name" host="host" date="date" source="source"/>
    <title>Texture Pattern Animation Data for NINTENDO NITRO-System</title>
    <generator name="generator" version="version"/>
</head>

<body>
</body>

</itp>
```

With this, we now have a basic header for the ITP. Let's now fill out the body section.

### Filling in the "body" section of the ITP

The body is a little bit more complicated. It is split up into 4 parts being:
- The texture pattern animation's general information (`tex_pattern_info`)
- The texture pattern animation's texture and palette names (`tex_pattern_list_data`)
- The texture pattern animation's data (`tex_pattern_data`)
- The array of texture pattern animations (`tex_pattern_anm_array`)\*

\**For this guide, we will only be covering having a single pattern animation in the texture pattern animation array*

First up is the `tex_pattern_info` section.
```xml
<tex_pattern_info
    frame_size="16"
    tool_start_frame="1"
    tool_end_frame="16"
    compress_material="on" material_size="1 1"
/>
```
Here, we set how many frames our animation should have (`frame_size`), what frame our animation should start on (`tool_start_frame`), and what frame our animation should end on (`tool_end_frame`). For this guide, we won't be touching the `compress_material` or `material_size` fields. 

With this section here, we have an 16 frame long animation that starts at frame 1 and ends on frame 16.

Next up is the `tex_pattern_list_data` section.
```xml
<tex_pattern_list_data image_size="4" palette_size="4">
    <image_name index="0" name="anim.1"/>
    <image_name index="1" name="anim.2"/>
    <image_name index="2" name="anim.3"/>
    <image_name index="3" name="anim.4"/>
    <palette_name index="0" name="anim.1_pl"/>
    <palette_name index="1" name="anim.2_pl"/>
    <palette_name index="2" name="anim.3_pl"/>
    <palette_name index="3" name="anim.4_pl"/>
</tex_pattern_list_data>
```
The first half of this section dictates what textures from a model's NSBTX will be used and the second half dictates what palettes will be used. If the amount of textures needs to be increased or decreased, make sure to adjust the `image_size` field appropriately and same for the amount of palettes with the `palette_size` field.

After this is the `tex_pattern_data` section.
```xml
<tex_pattern_data>
    <frame_idx size="8">
        0 2 4 6 8 10 12 14
    </frame_idx>
    <image_idx size="8">
        0 1 2 3 2 3 1 0
    </image_idx>
    <palette_idx size="8">
        0 1 2 3 2 3 1 0
    </palette_idx>
</tex_pattern_data>
```
This part right here is the actual animation part. The `frame_idx` portion determines what frames will change the image and palette shown. The `image_idx` potion determines what image is shown based on the image index from the `tex_pattern_list_data` section. Similarly, the `palette_idx` portion does the same thing but for the palette. In this example, it does the following:
```xml
Frame 0 - Shows anim.1 (texture 0) with palette anim.1_pl
Frame 2 - Shows anim.2 (texture 1) with palette anim.2_pl
Frame 4 - Shows anim.3 (texture 2) with palette anim.3_pl
Frame 6 - Shows anim.4 (texture 3) with palette anim.4_pl
Frame 8 - Shows anim.3 (texture 2) with palette anim.3_pl
Frame 10 - Shows anim.4 (texture 3) with palette anim.4_pl
Frame 12 - Shows anim.2 (texture 1) with palette anim.2_pl
Frame 14 - Shows anim.1 (texture 0) with palette anim.1_pl
```
Until another key frame is hit, it will keep the currently displayed image and palette. If the amount of key frames needed needs to be increased or decreased, make sure to change the "size" field for `frame_idx`, `image_idx`, and `palette_idx`.

As the last section for the `body` section, we have `tex_pattern_anm_array`.
```xml
<tex_pattern_anm_array size="1">
    <tex_pattern_anm index="0" material_name="anim_tex" data_size="8" data_head="0"/>
</tex_pattern_anm_array>
```
The main things of importance for us here are the `material_name` and `data_size` fields. With the `material_name` field, we can target a specific material for the animation to play instead of displaying that material. In this case, if we had a material called `anim_tex` on a model, it would display the animation from here instead. With the `data_size` field, for our purposes, make sure it matches the `size` field from the `tex_pattern_data` section because if it's smaller than it, it won't use all of the key frames listed.

With everything put together from the examples we should get this:
```xml
<?xml version="1.0" encoding="Shift_JIS"?>

<itp version="1.6.0">

<head>
    <create user="name" host="host" date="date" source="source"/>
    <title>Texture Pattern Animation Data for NINTENDO NITRO-System</title>
    <generator name="generator" version="version"/>
</head>

<body>

<tex_pattern_info
    frame_size="16"
    tool_start_frame="1"
    tool_end_frame="16"
    compress_material="on" material_size="1 1"
/>

<tex_pattern_list_data image_size="4" palette_size="4">
    <image_name index="0" name="anim.1"/>
    <image_name index="1" name="anim.2"/>
    <image_name index="2" name="anim.3"/>
    <image_name index="3" name="anim.4"/>
    <palette_name index="0" name="anim.1_pl"/>
    <palette_name index="1" name="anim.2_pl"/>
    <palette_name index="2" name="anim.3_pl"/>
    <palette_name index="3" name="anim.4_pl"/>
</tex_pattern_list_data>

<tex_pattern_data>
    <frame_idx size="8">
        0 2 4 6 8 10 12 14
    </frame_idx>
    <image_idx size="8">
        0 1 2 3 2 3 1 0
    </image_idx>
    <palette_idx size="8">
        0 1 2 3 2 3 1 0
    </palette_idx>
</tex_pattern_data>

<tex_pattern_anm_array size="1">
    <tex_pattern_anm index="0" material_name="anim_tex" data_size="8" data_head="0"/>
</tex_pattern_anm_array>

</body>

</itp>
```
With this, it should play a short animation on the material `anim_tex` assuming all the textures and palettes listed are within the texture set of the model.

## Getting an NSBTP from our ITP

After you finish making your ITP, all you have to do is drag and drop your ITP file onto `g3dcvtr.exe` and assuming there are no errors, it should convert your ITP into a new NSBTP file.