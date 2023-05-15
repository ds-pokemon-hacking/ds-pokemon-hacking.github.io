# Setting the Weather From a Script <sup>*(Platinum/HGSS)*</sup>

> This tutorial was written by [RefinedPlat](https://www.romhacking.net/community/6532/)

The goal of this tutorial is to use `AdrsValueSet` to alter a value related to the `DefogAnimation/FlashAnimation` command to make it update to an arbitrary weather of the scripter's choice.

First off, have a bit of context. Technically, the Generation 4 games have a command dubbed `ChangeWeather` that would alter the weather currently loaded by the area. Sadly, this command is dummied out, and will not work. However, the games do feature a pair of commands that set the weather to a specific value - `DefogAnimation`<sup>*Platinum*</sup> and `FlashAnimation`<sup>*Heartgold*</sup>. This, combined with a debug command called `AdrsValueSet` which allows for free editing of values in the RAM, means that these commands can be altered to change the weather to entirely different values, allowing for free control over the weather within a script with certain caveats.

>The following scripts change the weather `Defog`<sup>*Platinum*</sup> or `Flash`<sup>*Heartgold*</sup> set to your desired value. It then runs the `DefogAnimation`/`FlashAnimation` command to update the weather, and afterwards reverts the weather back to normal and finally sets it back to `0x0`/`0xC` so Defog/Flash work properly after the fact. This affects both in-battle and overworld weather. Obviously, if the default weather in an area is different, you'll have to make another `AdrsValueSet` to change it to that weather before setting the changed value back to default.
By doing a `TrainerBattle` command after triggering the shift, and then doing a `DefogAnimation` right afterwards, you can set weather for the duration of a battle and turn it off afterwards.
>> Note that this does not show any unique animation or sound effect, and only updates the weather.

Keep in mind that the default value for Defog weather is 0x0 while Flash weather is 0xC.

---
## Important limitations:
- You cannot run `FlashAnimation` or `DefogAnimation` in a Level Script while in a loading zone. This generates a null reference pointer and causes the game to crash on real hardware.
  - This basically means any screen transitions where you fade to black are off-limits, but ones where you simply move across the same matrix are okay. This includes very few areas in vanilla, however.
- Certain weather particles are on the same layer as the battle intro nametags. Consequently, having sandstorm weather when fighting Bertha will make her name move with the particles. This is how weather works in general and not specific to this tutorial.

The `AdrsValueSet` value you want to change depends on the game and region. It uses absolute offsets within the RAM, so if you have changed the arm9's length you may need to find it again. Here is how to find the offsets of the values that this tutorial uses:

- Platinum:

  - `70 BD 38 B5 04 1C XX XX XX XX C0 68 F7 F7 XX XX XX XX 00 21 XX XX XX XX 28 1C F7 F7 BC FD 80 34 01 1C 20 68 40 68 C0 68 XX XX XX XX 01 20 38 BD`

- Heart Gold: 

  - `70 BD 38 B5 04 1C XX XX XX XX C0 68 F8 F7 XX XX XX XX 0C 21 XX XX XX XX 28 1C F8 F7 52 F9 80 34 01 1C 20 68 40 68 C0 68 XX XX XX XX 01 20 38 BD`

<br><br>

For this tutorial there are a few offsets used: 
- USA Platinum uses `0x2042BF8`
- USA Heartgold uses `0x20436D4`

<details>
  <summary> Sample Script 1 - USA Platinum, Set Weather </summary>
  
```asm
Script 1:
	AdrsValueSet 0x2042BF8 0x##
	DefogAnimation
	AdrsValueSet 0x2042BF8 0x0
End
```
  
</details>

<details>
  <summary> Sample Script 2 - USA Heartgold, Set Low Light </summary>
  
```asm
Script 1:
	AdrsValueSet 0x20436D4 0xD
	FlashAnimation
	AdrsValueSet 0x20436D4 0xC
End
```
  
</details>

<details>
  <summary> Sample Script 3 - USA Heartgold, Temporary Weather</summary>
  
```asm
Script 2:
  AdrsValueSet 0x20436D4 0x##
	FlashAnimation
	AdrsValueSet 0x20436D4 0x0
	[Script Contents]
	FlashAnimation
	AdrsValueSet 0x20436D4 0xC
End
```
</details>
