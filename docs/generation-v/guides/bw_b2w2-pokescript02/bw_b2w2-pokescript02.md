---
title: 'Hands-on with PokéScript: Yes, No, Maybe a Battle So'
tags:
  - Guide (Black)
  - Guide (White)
  - Guide (Black 2)
  - Guide (White 2)
  - Hands-on with PokéScript
  - Hands-on with...
---

# Hands-on with PokéScript:<br />Yes, No, Maybe a Battle So
> Author(s): [Brom](https://github.com/brombrombromley)

In the [last part of _Hands-on with PokéScript_](/generation-v/guides/bw_b2w2-pokescript01/bw_b2w2-pokescript01.md), we learned how to get an NPC to speak to us! But, what if we wanted to have an NPC ask us a question? Or, something more exciting, how about if we wanted to have them challenge us to a battle? In this entry of _Hands-on with PokéScript_, we'll be learning how to do just that! By the end of this entry, we'll have something that looks like this:

VERY COOL VIDEO WOW

## Setting Up

For this entry, there will be a [save file](resources/pokescript02.sav) provided to help with following along. With this save file, it will place you in the lower part of Hugh's house in Aspertia City, Zone 429. For this entry, we will be placing a new NPC in the upstairs area, Zone 430. This save file can be imported by most emulators.

- For MelonDS, this save can be imported using the `File > Import savefile` option then opening `pokescript02.sav`.
- For DeSmuME, this save can be imported using the `File > Import Backup Memory...` option then opening `pokescript02.sav`.

:::note

If you remember from the last part, if you don't reload a map after adding a new NPC, moving them around, reassigning their script, and things like that, they won't appear changed in game. This is the main reason for why the save is in the downstairs area rather than directly in the upstairs area.

:::

After getting the save file loaded, let's get back into our CTRMap project and head to Zone 430 using the Zone Loader. Now that we're in Zone 430, let's add another NPC just like how we did in the [first part](/generation-v/guides/bw_b2w2-pokescript01/bw_b2w2-pokescript01.md) and place it at X 12, Z 4 and have it face to the west like so. 

![We have placed our Janitor NPC in front of the fridge in the kitchen](resources/in_rival_house01.png)

:::note

In this case, I have set the `Model No.` field to 69 (😳) to be a Janitor in order to match the Trainer party we will be using later in this guide.

:::

Using what we learned in the [last part](/generation-v/guides/bw_b2w2-pokescript01/bw_b2w2-pokescript01.md), let's try making an NPC that faces us when we talk to them and asks us if we like Pokémon.

![Janitor asking us “Do you like Pokémon?”](resources/in_rival_house02.png)

:::note

If you want to see a solution of how you might script this, you can see a sample version below.

<details>
  <summary>Sample Solution</summary>
  ```java
  public static void main_5() {
		Actor.PauseAll();
		Sound.SEPlay(1351);
		Actor.FacePlayer();
		Message.Actor(1024, 9, 0, 0);
		Input.LastKeyWait();
		Message.CloseAll();
		Runtime.FinishSubEvents();
		Actor.UnpauseAll();
	}
  ```

  Do keep in mind that you might have to use a different message ID when using `Message.Actor()` depending on where you put your text at.
</details>

:::

You might notice, though, that we won't be able to respond to the question he asks us, so what can we do about that? Let's tackle some ways we can let the player respond to questions that we might want NPCs to ask them.

## Handling Yes/No Responses

For simple responses to questions asked by NPCs, we can use `YesNoWin.Show()` to give us a basic box that lets us answer with “YES” or “NO.” You might notice, though, when you try to directly put `YesNoWin.Show()`, at the bottom of the screen, CTRMap will say `Could not resolve method: YesNoWin.Show()`. This is because we need to “import” the `YesNoWin` package. 

To fix this, we need to go up to the top of our file and add `import event.dialogs.YesNoWin;`. For a lot of commands, you will need to import them into your PokéScript file, but luckily, just like the script commands themselves, the package you need to import can also be found in the [script command doc](https://docs.google.com/spreadsheets/d/1zvLQFVdv6kbEgP9TY9yfV6ChK0qsz79E6PvF5lohnGk/edit?usp=sharing) in the second to last column. This might be a little difficult to get used to at first, but with time it will gradually become more familiar.

:::note

You might not have noticed it, but even when we use `Message.Actor()` or `Message.CloseAll()`, we are actually using functions from `event.dialogs.Message`. You can see this at the top of the script file where it says `import event.dialogs.Message;` along with the other “packages” that are being imported for this script.

:::

Now that we can put in Yes/No boxes using `YesNoWin.Show()`, let's replace the `Input.LastKeyWait()` with `YesNoWin.Show()` for now. Let's take a look at what that does!

<video controls>
  <source src="/video/generation-v/guides/bw_b2w2-pokescript02/yesno_demo01.mp4" type="video/mp4"/>
</video>

Hm... Well, the Yes/No box shows up, but let's see how we can get our NPC to say different things depending on if we say yes or no.

For this, we will need to introduce our handy friend, the `if` block. Basically, whenever we want something to happen only *if* some specific thing happens, we can use an `if` block. Generally, `if` blocks look like this:

```java
if (condition) {
  // The script commands that will
  // run if the special condition
  // happens
}
```

Within `if` blocks, if something is `true`, then the code inside will happen, and if the condition is `false`, then the code inside will be skipped. For example, if we can see:

```java
if (2 + 2 == 4) {
    // The code inside here
    // will always run since
    // unless math changes,
    // 2 + 2 will always be 4
}

if (2 + 2 == 5) {
    // This code will never run
    // because it is false to say
    // that 4 equals 5.
}
```

This isn't the most useful for things that are always true like 2 + 2 being 4 and 2 + 2 not being 5, but for something that could change like if the player says yes or no, using this, we can do exactly what we wanted! Let's try making our NPC say something when we select no after we give our NPC another line to say.

![The janitor is flabbergasted by your response!](resources/in_rival_house03.png)

```java
public static void main_5() {
    Actor.PauseAll();
    Sound.SEPlay(1351);
    Actor.FacePlayer();
    Message.Actor(1024, 9, 0, 0);

    boolean isNo = YesNoWin.Show();
    
    if (isNo == true) {
        Message.CloseAll();
        Message.Actor(1024, 10, 0, 0);
        Input.LastKeyWait();
    }
    
    Message.CloseAll();
    Runtime.FinishSubEvents();
    Actor.UnpauseAll();
}
```

This might look a little scary at first, but let's break it down! Let's look at the line with our `YesNoWin.Show()` first:
- `boolean isNo`: This here is a variable. With a variable, we can store different kinds of values depending on its type. Because our variable `isNo` is a `boolean`, it means we can hold values that are `true` or `false`. In this case, if the player says no, then `isNo` will be `true` and if the player says yes, then `isNo` will be `false`.
- `YesNoWin.Show()`: In addition to showing a Yes/No box to the screen, it'll also let us know if the player said no or not. If we don't store it somewhere like in a variable, then it's like a guy shouting alone in a forest with no one to hear him.
- `=`: When we have a single equal sign, instead of seeing if two things are equal to each other, it'll put whatever came from the right into the variable on the left. In this case, we take whatever `YesNoWin.Show()` said and give it to `isNo`.

How about we make our NPC do something else if we don't say no? This is where the `if` block's handy associate comes in, the `else` block. Whenever you want something to run if it's not the special condition that the `if` block is checking for, then the `else` block will run. We can use it like so:

```java
if (isNo) {
    Message.CloseAll();
    Message.Actor(1024, 10, 0, 0);
    Input.LastKeyWait();
} else {
    Message.CloseAll();
    Message.Actor(1024, 11, 0, 0);
    Input.LastKeyWait();
}
```

Now, when the player says no, the NPC will say line 10, but if not, then the NPC will say line 11 instead! We'll be using these “conditionals” more as we continue working on this script.

:::note

Similar to how `YesNoWin.Show()` can give us a `boolean` value, every function in PokéScript has a return type! One of the things we handwaved before earlier is the `void` whenever we make a new script. This is because when a function returns `void`; just like the real void, it returns nothing.

:::

If you've gotten to this portion, pat yourself on the back! Getting the tools of making a script, importing packages, and using basic conditionals is much of what you will need when scripting! By the end of this section, you should have something like this:

<video controls>
  <source src="/video/generation-v/guides/bw_b2w2-pokescript02/yesno_demo02.mp4" type="video/mp4"/>
</video>

## Handling Multiple Choice Responses

<!--Else-If Tip>

:::tip

Sometimes you might want to check more than one condition using an `if` block. You can actually chain `if` and `else` blocks together like so:

```java
if (conditionA) {
    // ...
} else if (conditionB) {
    // ...
} else if (conditionC) {
    // ...
} else {
    // ...
}
```

This can be useful if you  
:::

<!-->

## Giving a Pokémon

## Prepare for Battle!

<!--Outline>
1. Yes/No Question and imports
    We need to import YesNoBox
    We write our conditional to make
    him say different things between
    us saying YES and saying NO

    "Do you like Pokémon?" YES / NO
    |-- [YES] - "How nice!
    |            I do, too!"
    |           (We'll use this in Section 2)
    --- [NO]  - "Erm... What in
                 the Sam Hill?"
                (End)

2. Loops
    "I'll try to give you
     six Magikarp if you
     have the space!"

     import pokemon.PokeParty;

     for (int i = 0; i < 6; i++) {
        PokeParty.AddPkm(129, 0, 5);
     }

     If we do this, we can't check
     what Pokémon we have with us

     If we do EventFlags.Set(2401),
     we set flag 2401, letting us
     see the Pokémon menu

     We can use flags for simple
     things like marking if you've
     received an item or not.
     Along with this, they can be
     used for things like if a
     Trainer has been defeated,
     if a town has been visited,
     or in our case here, if the
     player can view the Pokémon menu

     We will talk about flags in
     more detail in another lesson,
     but we'll use them one more
     time by the end of the lesson
3. Battle
     We'll be battling against
     Janitor Orville who is
     Trainer #182. For this entry,
     we won't be talking about
     editing a Trainer's party.

     (how to set up a battle)

     wowee!! we used a conditional
     at the very end!!! let's start
     by making a battle that makes
     us go to the Pokémon Center!

     Let's change it so that we
     don't need to go to the
     Pokémon Center if we lose!

     Let's heal our Pokémon with
     PokeParty.RecoverAll()
<!-->
