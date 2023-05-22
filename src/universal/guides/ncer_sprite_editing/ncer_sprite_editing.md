<style>
	/* 	'main' to only affect page content
		rounded edges */
	main img, main blockquote, main code, main iframe {
		border-radius: 5px;
	}

	main summary{
		cursor: pointer;
	}

	main img{
		background-color: rgba(1,1,1,.1);
	}
	
	/* Site Cards */
	.card{
		border-left: 4px solid var(--card-color);
		border-radius: 5px;
		padding: 1em;
		margin: 1em 0;
		background-color: rgba(1,1,1,.2);
		max-width: 480px;
	}
	.video-responsive{
		margin-top:1em;
		overflow:hidden;
		border-radius: 5px;
		padding-bottom:56.25%;
		position:relative;
		height:0;
	}
	.video-responsive iframe{
		left:0;
		top:0;
		height:100%;
		width:100%;
		position:absolute;
	}

	/* Lists */
	main hr {
		border: 1px solid white;
		opacity: .125;
	}

	main ol {
		list-style: none;
		counter-reset: num;
	}
	main ol li {
		counter-increment: num;
	}
	main ol li::before {
		content: counter(num) ". ";
		font-weight: bold;
		float: left;
		margin-left: -1.5em;
		padding-right: .25em;
	}
</style>

# Editing a NCER file
> This guide was written by [Jay]() and formatted for this wiki by [Sunnhild]().  

Editing trainer sprites without patterns *(Aka: An apology letter from Jay-san about Tutorial Episode 2)*

> <details>
> <summary style="margin:.5em 0em;">🎥 Video version</summary>
> <hr>
> <div class="card" style="--card-color: red"><a href="https://www.youtube.com/watch?v=kZW9LTiAfrY"><strong>Pokemon DS Rom Editing Tutorial Pt 2.5: Easier Editing w/ RECN Files (Aka: NCER)</strong></a><div class="video-responsive"><iframe type="text/html" width="480" height="270" src="http://www.youtube.com/embed/kZW9LTiAfrY" frameborder="0" title="Jay-San: Pokemon DS Rom Editing Tutorial Pt 2.5: Easier Editing w/ NCER Files (Aka: NCER)" allowfullscreen></iframe></div></div>
> </details>

--- 

## 📌 Table of Contents
- [📋 Intro](#-intro)
- [💾 Getting Tinke 0.9.2:](#-getting-tinke-092)
- [🛠️ Editing your sprite:](#-editing-your-sprite)

## 📋 Intro

&nbsp; Hello! You are seeing this as you’ve most likely seen my video on editing the RGCN trainer sprites with the colored pattern I shared. While this method technically still works, I came up with it before I was more experienced in rom hacking and admittedly is just a little inefficient. It turns out that **ONLY** if you use a certain version of Tinke, you can edit an NCER “cell” file that is a complete image instead of having to split the sprite into pieces. Which will hopefully be far simpler to edit sprites with.

## 💾 Getting Tinke 0.9.2: 

>**⚠️ (IMPORTANT: This method will not work on Tinke 0.9.0 or older versions. Be sure to get the version below if you don’t have it already.)**

1. First of all, here is the version of TInke you’ll want to use. It’s a copy stored in the google drive owned by the hacking server:
   
    <https://drive.google.com/file/d/1lNMtiqKPoQigTExe-2eL7CFJApOaWX8q/view?usp=sharing>

2. You want to use the download button in the upper right to download it

    [![Tinke download image](resources/tinke_download.png)](resources/tinke_download.png)

3. Once you’ve downloaded the zip file, be sure to extract the contents into the folder of your choice.

## 🛠️ Editing your sprite:

1. Once you have an extracted copy of Tinke 0.9.2 folder ready to use, you want to click the Tinke launcher.

	[![Tinke Launcher](resources/tinke_launcher.png)](resources/tinke_launcher.png)

	> <details>
	> <summary style="margin:.5em 0em;">⚠️ If you get an error</summary>
	> <hr>
	> A few people have gotten the error below when opening Tinke 0.9.2 specifically.
	> 
	> [![Tinke 0.9.2 error](resources/tinke092_error.png)](resources/tinke092_error.png)
	> 
	> This seems to be related to their computer putting a block on the Tinke files. If you see this error you should:
	>   1. Delete the Tinke folder you just made.
	>   2. Locate the zip file you downloaded from the link above.
	>   3. Right click it and select Properties.
	>   4. If you see an “Unblock” checkbox like the one circled below, uncheck it and click OK.
	>	
	>		[![Unblock Tinke in properties](resources/unblock_tinke_properties.png)](resources/unblock_tinke_properties.png)
	>	
	>   5. Then extract your zip file again to make a new Tinke Folder, and try to open Tinke to see if the error is fixed.
	> 
	> <blockquote style="padding:1em;background-color:rgba(242,245,255,.075);"><strong>📝 Note: If the error continues please let us know in Discord.</strong></blockquote>
	> </details>
	
2. Then a window will open where you can browse to the rom you want to edit and open it.

3. Browse the rom files and expand the narc that holds the sprite you are looking for. 

	> 💡 If you want any help locating certain sprites in your nds pokemon rom, check out this narc list we wrote [HERE](https://docs.google.com/document/d/1_nRfhDEoNFbvYP-yjx4oAWmgGXxvqFBvLwYANFehxUU). <!-- TODO add list of known sprite location ressource -->

	Anyway, for my example I am going to edit the male player’s ball throw sprite in platinum. Which is located at the file path `poketool / trga / trbgra`. Where I’ll click `trbgra.narc` and click **Unpack** to see its contents.

	[![Tinke unpack trbgra.narc](resources/tinke_unpack.png)](resources/tinke_unpack.png)

	And are these files here.

	[![Files you will edit with Tinke](resources/tinke_files.png)](resources/tinke_files.png)

4. First I need to double click file `trbgra_1.RLCN`, which is the palette.

5. Then I click `trbgra_0.RGCN` and click **“View”**. This brings up the puzzle-like RGCN file you may have seen me talk about in my video.

	[![Puzzle-like RGCN preview in Tinke](resources/puzzle_rgcn_tinke.png)](resources/puzzle_rgcn_tinke.png)

6. Now we go one step further by clicking `trbgra_2.NCER` and then clicking **View** again. This opens the “Cell” file where you can see the sprite as a complete image. If you scroll through the “Bank” circled picklist below you will jump between the different frames of this animated sprite. Our goal is to replace each of these frames with a matching edited version of the sprite you want to use.

	[![Cell bank complete image in Tinke](resources/cell_bank_tinke.png)](resources/cell_bank_tinke.png)

7. <a name="7"></a> Before working with the NCER file, it is very important that you first **uncheck** the “Transparency” checkbox as shown below. This will get the background color to show up. Which is important for both export and importing the frames in the next steps.

	[![Uncheck transparency box in Tinke](resources/uncheck_transparency_tinke.png)](resources/uncheck_transparency_tinke.png)

	> <details>
	> <summary style="margin:.5em 0em;"><strong>💡(Optional)</strong> Exporting frames</summary>
	> <hr>
	> If you want, you can export each of the frames of this sprite as png images by scrolling to each of them in the “Bank” picklist and clicking <strong>Export</strong> for each one. Then you could use them as references when making your own edited frames that you want to insert in the next step. However if you already have the edited frames you want, you can skip this step.
	>
	> [![Export frames in Tinke](resources/export_frames_tinke.png)](resources/export_frames_tinke.png)
	> 
	> When you export a frame it will look like the example below. Where the frame is a tiny box in the center of a large transparent image. You want to make sure the background is displaying like my example below, by following [step 7](#7).
	> 
	> The area covered by the background is your drawable area, but you still want to make sure your edited frame keeps the same large transparent border around it like my example in the next step. 
	> 
	> [![Exported frame](resources/exported_frame_tinke.png)](resources/exported_frame_tinke.png) 
	> </details>

8. Once you are done you want your edited frames to look like my example below. Then you’ll need to repeat this process for each of the frames that this sprite uses. Like for the Platinum ball throw sprite, I’ll need to make 8 frames.

	[![Edited frame](resources/edited_frame.png)](resources/edited_frame.png)

9. Once all your frames are ready, you want to scroll the “Bank” picklist to the first frame you want to replace. Normally people just start with the first frame. However if there are any colors that are not being shown on the first frame, you want to switch to a frame that displays all the colors your sprite uses. 

	> 💡 For example if your character has a yellow emblem on their shirt that’s not showing until after they throw the pokeball and their chest turns towards the camera. So you’d want to pick any later frame that shows the colors used by that emblem, if those colors aren’t shown on the earlier frames already.

10. <a name="10"></a> Once you’ve selected the best first frame, next change the “Palette Import Option” to **Replace Palette**. Use the Import button to import your edited frame that matches the one that Tinke is displaying. Since you picked “Replace Palette”, this will replace the colors in the related palette with all the colors of your sprite. So in my example, this would change the colors on `trbgra_1.RLCN`.

	This is why it was so important to find the right frame that showed all of your colors in <a href="#10">step 10</a>. To make sure all colors were added into the new palette. All 8 of the frames that the ball throw sprite I am editing will pull their colors from `trbgra_1.RLCN`. So if I pick a first frame that is missing colors that the others need, those other frames will have those colors removed when you import them.

	[![Palette import button in Tinke](resources/tinke_palette_import.png)](resources/tinke_palette_import.png)

	> <details>
	> <summary style="margin:.5em 0em;">💡 If you have trouble getting the right colors into your palette</summary>
	> <hr>
	> You can use <strong>Console Tool</strong> to set the colors manually. Then you can import all frames just using “Swap to Original Palette” instead. You can learn about how to do so with this video:
	>
	> <div class="card" style="--card-color: red"><a href="https://www.youtube.com/watch?v=ESQjr7OB1pA"><strong>Pokemon DS Rom Editing Tutorial Pt 14: Quick Color Changes with Console Tool</strong></a><div class="video-responsive"><iframe type="text/html" width="480" height="270" src="http://www.youtube.com/embed/ESQjr7OB1pA" frameborder="0" title="Jay-San: Pokemon DS Rom Editing Tutorial Pt 14: Quick Color Changes with Console Tool" allowfullscreen></iframe></div></div>
	> </details>

	> <details>
	> <a name="fix-1"></a><summary style="margin:.5em 0em;">⚠️ If you have a <strong>glitched spot</strong></summary>
	> <hr>
	> Now after importing your first frame it’s possible that it looks mostly ok but has a glitched spot like mine below. Worry not, this seems to happen a lot.
	>
	> 	[![Glitched imported image](resources/glitched_image_import.png)](resources/glitched_image_import.png)
	>
	> 	The fix should be to:
	>
	> 	1. Change the **Palette Import Option** to “Swap to Original Palette”.
	>	2. Import your frame again.
	>
	>	Since your colors should be correctly inserted into the Palette by [step 10](#10), they are reapplied to the frame automatically. This seems to fix the glitched spot, though we are not certain why this happens.
	> 
	> <blockquote style="background-color:rgba(242,245,255,.075);margin: 17px 0;"><details>
	> <a name="fix-2"></a><summary style="margin:.5em 0em;">⚠️ Possible <strong>follow up issue</strong></summary>
	> <hr>
	> A follow up issue that can happen after you do the <a href="#fix-1">fix</a> is that some of the colors of the sprite may be missing. Like if you look REALLY close at my sprite below, my pants are transparent. The fix I found is the steps below, but if all the colors on all your sprites look ok you can skip this step.
	> 
	> <blockquote style="padding:1em;background-color:rgba(242,245,255,.075);">📝 <strong>NOTE:</strong> This is a <strong>newly discovered issue</strong>, so this fix is not widely tested yet. If the steps below give you any trouble let us know in the sprite support channel in the discord and we’ll try to help further. </blockquote>
	> 
    > 1. Type **442** into the Threshold field that is next to the “Pallet Import Options”.
    > *(**442** is just the **max value** this field can hold)*
	> 
	> 		[![Palette threshold value fix](resources/palette_threshold_fix.png)](resources/palette_threshold_fix.png)
	>
    > 2. Change the “Pallet Import Option” back to **Replace Palette**.
    > 3. **Import** your frame again.
    > 4. You may need to **repeat** the <a href="#fix-1">fix</a> above to fix the glitched area again.
    > 5. The sprite should now look 100% correct!
	> </details></blockquote>

11. Once your first frame is inserted and it looks correct, you want to make sure the “Pallet Import Option” is set to “Swap to Original Palette” and **import** each of the other frames. To do so, you just need to scroll to another frame and click **import**, then scroll to the next frame, and repeat the import until all the frames are replaced.

	[![Palette import button in Tinke](resources/tinke_palette_import.png)](resources/tinke_palette_import.png)

13. Be sure to look each of the new frames over closely to make sure none of them have any parts that are transparent that shouldn’t be. If you find some missing colors you will want to first try the <a href="#fix-2">fix</a> above, if you haven’t already. Then **reinsert** all your frames again.

14. If all frames look good, then it’s time to **pack** the narc! 

	> 💡 if you are not sure how to do this, check out this document [HERE](https://docs.google.com/document/d/1nyuRlun9Gm_5lWodBVLZgOwTgU26k8oyfscnPZZSfV8/edit?usp=sharing).<!-- TODO add how to pack a NARC in ressource -->

15. Then you should be set to **save** a new rom and test your sprite!

	[![Save rom in Tinke](resources/tinke_save_rom.png)](resources/tinke_save_rom.png)