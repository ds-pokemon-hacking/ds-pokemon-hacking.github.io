# Code Injection Guide (Generation V)

This guide was originally written by [Brom](https://github.com/BromBromBromley).

*It is recommended to check out the [universal code injection guide](../../../../universal/guides/code_injection/code_injection.md) before attempting this. 

## Preparing a project for C injected code ##

1) Extract a ROM in the `Games` tab of CTRMap with the `Add ROM` button.
2) Close CTRMap.
3) In File Explorer, go to the folder where the jar for CTRMap is located.
4) In the address bar, type `cmd` to open the command line in that folder.
5) After this, run `java -cp "<ctrmap file name>" ctrmap.util.tools.ovl.CodeInjectionSystemGUI` replacing `<ctrmap file name>` with the name of your CTRMap jar. This will launch OvlPatchSystemGUI, also known as C Injection System GUI (CISGUI).
6) Click `File > Open game directory` then open the folder that CTRMap created when extracting the contents of your ROM.
7) After this, locate `esdb.yml` and open that. This file holds information about function names along with the "segment" (ARM9/Overlay) that the function from and their addresses the function will load at in RAM.
8) You will be prompted to install the built-in overlay loader. Select `No` since this loader is deprecated.
9) Click the `+` button at the bottom left and load `arm9_decmp_off_HK_REL.rpm`. This should be located in the `build/` folder in the PMC folder. This will allow you to keep your arm9 decompressed along with letting the game load normally.
10) After this, click the `+` button again to load `PMC.rpm`. At this point, you can now use dlls placed in the `vfs/data/patches/` folder of your project.

## Creating C code to inject ##

*This section assumes you have basic C knowledge and have also used Bond697's IDB before.*

1) Install the [arm-none-eabi version of GCC](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads). Make sure you use the installer.
2) Write whatever C code you'd like to inject. Usually for this, you'll want to figure out an existing function that would be easy to work off of. If you want to see IDA's attempt at decompiling the Assembly, press F5. This isn't always necessarily accurate when it comes to types, but it's often a good starting point.
3) In File Explorer, go to the folder where `armgcc.bat` is located.
4) In the address bar, type `cmd` to open the command line in that folder.
5) After this, enter `armgcc <c source file location> -Iswan/ <desired output file location>.elf`, replacing `<c source file location>` and `desired output file location>`. The `-Iswan/` makes the compiler include whatever folder a header file is in as long as it's in the `swan/` folder. This can be replaced with `-I<folder name>` if needed.
6) Click `Tools > Convert ELF to RPM` then save the RPM. After that, click `Tools > Convert RPM to DLL`. Save this DLL in `vfs/data/patches/` in the folder of a project to make use of it.
