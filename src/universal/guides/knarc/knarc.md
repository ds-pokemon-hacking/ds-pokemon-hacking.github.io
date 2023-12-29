# How to use Knarc
> This guide was written by SpagoAsparago.

This is a tutorial on how to use Knarc to pack/unpack NARC files.
You can download Knarc.exe from [here](https://github.com/kr3nshaw/knarc/releases/tag/1.0.0)

--- 
## Table of Contents
* [Opening the CMD](#section)
* [Unpacking the NARC](#section-2)
* [Adding files and Packing the NARC](#section-3)

## Opening the CMD
First, extract the NARC you want to unpack with Tinke and save it in the same folder as the Knarc.exe file.

Launch the Command Prompt in that same folder.

<details>
 <summary>On Windows you can type `cmd` in the folder address and press enter:</summary>

<video src="resources/quickcmdvideo.mp4" width="640" height="480" controls></video>

## Unpacking the NARC

To unpack the NARC, you can use the command 

```Knarc -u file```
With `file` being the extracted NARC filename. This will extract all its content in the folder the NARC is currently located, if you want to extract them to a different folder, then use

```Knarc -d folder -u file```
With `folder` being the address of the destination folder you want. You can create a new folder inside the one from where you launched Knarc and simply use that folder name in the command.

You should do this if you plan to add additional files to the NARC.

## Adding files and Packing the NARC
If you're going to add a new file to the NARC, make sure the newly added file follows the same naming convention as the already existing files.

For repacking the narc, you can use: 
```Knarc -d folder -p file```

Now you can reinsert the NARC using Tinke. Just go to the same location as the original file you extracted, and use the `Change File` button instead of `Extract`. Now you can save your ROM.
