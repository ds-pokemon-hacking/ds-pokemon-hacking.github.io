---
title: Code Injection (General)
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

# General Code Injection Guide
> Author(s): [PlatinumMaster](https://github.com/PlatinumMaster), [Hello007](https://github.com/HelloOO7)

This guide aims to serve as a technical introduction to code injection in the DS Pokemon games, as well as common processes for it. It is strongly recommended that you read this page before continuing onto generation-specific code injection, as it will attempt to familiarize you with how it generally works.

## Table of Contents
- [Assembly Injection](#assembly-injection)
- [C/C++ Injection](#cc-injection)
  - [How does C Injection work?](#how-does-c-injection-work)
- [Insertion Process](#insertion-process)
  - [Fixing our Assembly](#fixing-our-assembly)

## Assembly Injection
Assembly injection is the process of compiling an assembly routine, and hooking it into the executable part of a ROM.

## C/C++ Injection
C/C++ injection is almost the exact same idea, except you use a high-level language (mostly C or C++, though you can go wild with Rust if that's what your heart desires) to create the code which emits assembly. That's because compilers/translators of these languages use Assembly as an intermediate between the source code stage and the binary stage. In other words, C/C++ code creates assembly code, which is then assembled. Assembly knowledge is, for the most part, not necessary.

### How does C Injection work?
It's easier to explain with an example, so I will go with that.

Say we have the following C code:
```C
// We declare these so the code can compile. Can go into a separate library file.
int AddMoney(int);
void LoadScript(int);
void PlayScript();

// The function we're writing.
void funFunction1() {
  int v1 = AddMoney(3000);
  if (v1) {
    LoadScript(12);
    PlayScript();
  }
  for (int i = 0; i < 99; ++i) {
    int v2 = AddMoney(i);
  }
  //...
}
```

Our compiler will take our C code and turn it into Assembly. How, you might be asking yourself? I will give you a high level idea of what is going on.

See, when we do an operation in C, the operation we do has a corresponding set of Assembly. By parsing the C file, the compiler can match each operation in our C source code to a list of Assembly instructions that are functionally equivalent. This yields an intermediate Assembly file, which pertains to the architecture of the system we are compiling the binary for. In this case, it would yield ARMv5T Assembly (unless otherwise specified), which is the Assembly variant used on the Nintendo DS.

In the case of our file, it would turn it into the following assembly (courtesy of `gcc`):

```ASM
funFunction1:
        push    {r7, lr}
        sub     sp, sp, #16
        add     r7, sp, #0
        movw    r0, #3000
        bl      AddMoney
        str     r0, [r7, #8]
        ldr     r3, [r7, #8]
        cmp     r3, #0
        beq     .L2
        movs    r0, #12
        bl      LoadScript
        bl      PlayScript
.L2:
        movs    r3, #0
        str     r3, [r7, #12]
        b       .L3
.L4:
        ldr     r0, [r7, #12]
        bl      AddMoney
        str     r0, [r7, #4]
        ldr     r3, [r7, #12]
        adds    r3, r3, #1
        str     r3, [r7, #12]
.L3:
        ldr     r3, [r7, #12]
        cmp     r3, #98
        ble     .L4
        nop
        nop
        adds    r7, r7, #16
        mov     sp, r7
        pop     {r7, pc}
```

This code is functionally equivalent to the code we wrote, but might be harder to understand at first glance.

## Insertion Process
### Fixing our Assembly
Similar to the above, assembling Assembly consists of taking our code and translating it into a format that our processor can understand. The Executable and Linkable Format, or ELF, allows us to simplify this process.

Simply put, our processor does not read assembly -- only machine code -- and as such, we need to give it a set of bytes that it *can* read. But, before we can give it bytes to read, we need to make sure *all* of our instructions are correct. With simple arithmetic instructions such as addition and subtraction, this is light-work -- no further verification needs to be done. However, with function calls, *how* will the assembly know where we are telling it to go?

This is easily solved by converting our assembly into an ELF file. With an ELF, we can perform a process known as linking. Linking is one of the most important parts of the entire compilation process, and for good reason; with our Assembly in ELF format, we can define the addresses of functions we are calling, determine the order of multiple files being linked together, and create relocatable objects, all of which solve our earlier problems. So, let's go into detail about linking.

#### Assembly to Executable and Linkable Format (ELF), and Linking
On the high level, linking is performed using a linker. A linker is equipped with a translation table which takes in symbol names, and translates them to addresses. This translation table is comprised of all of the addresses of functions in the binaries we link together, and a (optionally) hand-crafted symbol to address map.

This hand-crafted translation table is an integral part of code injection. Without it, calling existing functions would be practically impossible. This translation table is created by researching the ROM's code, and documenting the functions. We then give names to these functions, which we later use as symbols. This creates a one-to-one mapping that allows us to properly fix our addresses.


Take this segment of our Assembly from above, for example.
```ARMASM
        movw    r0, #3000
        bl      AddMoney
```
`bl`, which performs a function call in this case, will force the program to jump to the function `AddMoney`. But, *where* is `AddMoney`? We as humans know that it is at the address `30`, as I had mentioned previously. But, what about the computer?

With a translation table similar to below (note: this is likely not valid syntax, I am just making this up):
```
BEGIN_TRANSLATION_DEFINITIONS
AddMoney: 30
LoadScript: 45
PlayScript: 60
END_TRANSLATION_DEFINITIONS
```

The aforementioned code becomes the following:
```ARMASM
        movw    r0, #3000
        bl      30 @ Note, this will likely be a relative offset (destination - address of this instruction) and not an absolute one. This is just for demonstration.
```
Pretty neat, huh? The same thing would happen to `bl LoadScript` or `bl PlayScript`, provided those were the instructions there.

That being said, how do we perform linking with code injection?
- In the case of Generation IV, BluRose uses the linker provided by devkitPro (which is `arm-none-eabi-ld`) and a hand crafted translation table to fix the addresses to in-game functions. They also use a linker script to rearrange the order of their binary, which is a possibility I mentioned previously.
- In the case of Generation V, the input source code is first linked using the default toolchain, then later post-processed using a provided symbol mapping database during conversion to the RPM executable format. This means that before the final step, the ELF isn't bound to a fixed binary layout, providing simpler targeting of different games/revisions. Programs that only provide support functionality (file format libraries, codecs) are game-independent and can be loaded on-demand as DLLs.

After linking, we will usually end up with an ELF file that we can use to create our final binary.
