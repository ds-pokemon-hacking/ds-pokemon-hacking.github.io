"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[5431],{36604:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"generation-v/guides/b2w2-code_injection_set_up/b2w2-code_injection_set_up","title":"Code Injection set up","description":"Author(s): Dararo","source":"@site/docs/generation-v/guides/b2w2-code_injection_set_up/b2w2-code_injection_set_up.md","sourceDirName":"generation-v/guides/b2w2-code_injection_set_up","slug":"/generation-v/guides/b2w2-code_injection_set_up/","permalink":"/docs/generation-v/guides/b2w2-code_injection_set_up/","draft":false,"unlisted":false,"editUrl":"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/generation-v/guides/b2w2-code_injection_set_up/b2w2-code_injection_set_up.md","tags":[{"inline":true,"label":"Guide (Black 2)","permalink":"/docs/tags/guide-black-2"},{"inline":true,"label":"Guide (White 2)","permalink":"/docs/tags/guide-white-2"}],"version":"current","frontMatter":{"title":"Code Injection set up","tags":["Guide (Black 2)","Guide (White 2)"]},"sidebar":"generation_v_sidebar","previous":{"title":"Guides","permalink":"/docs/category/guides-1"},"next":{"title":"Fairy Type Implementation","permalink":"/docs/generation-v/guides/b2w2-fairy/"}}');var s=t(74848),o=t(28453);const d={title:"Code Injection set up",tags:["Guide (Black 2)","Guide (White 2)"]},l="Code Injection set up",c={},a=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Environment set up",id:"environment-set-up",level:2},{value:"File structure",id:"file-structure",level:3},{value:"VS Project set up",id:"vs-project-set-up",level:3},{value:"CTRMap set up",id:"ctrmap-set-up",level:3},{value:"CTRMap project set up",id:"ctrmap-project-set-up",level:3},{value:"Making a Code Injection patch",id:"making-a-code-injection-patch",level:2},{value:"External Tools",id:"external-tools",level:3},{value:"IDB research",id:"idb-research",level:3},{value:"IDA pseudocode to compilable code",id:"ida-pseudocode-to-compilable-code",level:3},{value:"Compiling a patch",id:"compiling-a-patch",level:3},{value:"Injecting a patch",id:"injecting-a-patch",level:3}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"code-injection-set-up",children:"Code Injection set up"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Author(s): ",(0,s.jsx)(n.a,{href:"https://github.com/Paideieitor",children:"Dararo"})," ",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This guide will take you thought the steps to get a working Code Injection environment to make your own patches and/or compile patches from other people in Gen V games (White 2 recommended)."}),"\n",(0,s.jsxs)(n.p,{children:["This is a practical guide so it doesn't stop to explain the reason behind the steps, it is NOT a replacement for the ",(0,s.jsx)(n.a,{href:"../bw_b2w2-code_injection",children:"Code Injection guide"}),", but it should help getting started in a practical way. It should also do the trick if you only want to compile a patch, even if you can't code yourself."]}),"\n",(0,s.jsx)(n.p,{children:"Disclaimers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The guide uses Windows 10 and ",(0,s.jsx)(n.a,{href:"https://visualstudio.microsoft.com/es/",children:"Visual Studio"}),", you can use other operating systems and IDEs as long as the tools are compatible, but most steps in this guide will not be valid for you and you will have to find out how to do them in your set up"]}),"\n",(0,s.jsx)(n.li,{children:"The guide assumes a general knowledge of C/C++ and basic UI navigation capabilities"}),"\n",(0,s.jsx)(n.li,{children:"This is one way to set up your environment, there are diferent ways to do this"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Before starting I recomend creating a ",(0,s.jsx)(n.code,{children:"CodeInjection"})," folder to store all code injection related files and applications."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#environment-set-up",children:"Environment set up"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#file-structure",children:"File structure"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#vs-project-set-up",children:"VS Project set up"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#ctrmap-set-up",children:"CTRMap set up"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#ctrmap-project-set-up",children:"CTRMap project set up"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#making-a-code-injection-patch",children:"Making a Code Injection patch"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#ida-pseudocode-to-compilable-code",children:"IDA pseudocode to compilable code"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#compiling-a-patch",children:"Compiling a patch"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#injecting-a-patch",children:"Injecting a patch"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"environment-set-up",children:"Environment set up"}),"\n",(0,s.jsx)(n.h3,{id:"file-structure",children:"File structure"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create an Empty C++ Project inside of the ",(0,s.jsx)(n.code,{children:"CodeInjection"})," folder, for this guide it will be called PW2Code"]}),"\n",(0,s.jsxs)(n.li,{children:['Create a folder named "ExternalDependencies" at ',(0,s.jsx)(n.code,{children:"CodeInjection/PW2Code"})]}),"\n",(0,s.jsxs)(n.li,{children:["Clone the ",(0,s.jsx)(n.a,{href:"https://github.com/ds-pokemon-hacking/swan",children:"SWAN repositiory"})," in the ",(0,s.jsx)(n.code,{children:"CodeInjection/PW2Code/ExternalDependencies"})," folder"]}),"\n",(0,s.jsxs)(n.li,{children:["Clone the ",(0,s.jsx)(n.a,{href:"https://github.com/HelloOO7/NitroKernel",children:"NitroKernel repositiory"})," in the ",(0,s.jsx)(n.code,{children:"CodeInjection/PW2Code/ExternalDependencies"})," folder"]}),"\n",(0,s.jsxs)(n.li,{children:["Clone the ",(0,s.jsx)(n.a,{href:"https://github.com/HelloOO7/ExtLib",children:"ExtLib repositiory"})," in the ",(0,s.jsx)(n.code,{children:"CodeInjection/PW2Code/ExternalDependencies"})," folder"]}),"\n",(0,s.jsxs)(n.li,{children:["Clone the ",(0,s.jsx)(n.a,{href:"https://github.com/HelloOO7/libRPM",children:"libRPM repositiory"})," in the ",(0,s.jsx)(n.code,{children:"CodeInjection/PW2Code/ExternalDependencies"})," folder"]}),"\n",(0,s.jsxs)(n.li,{children:["Create ",(0,s.jsx)(n.code,{children:"CodeInjection/PW2Code/Patches"})," (here will go all your code)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"File structure should look like this:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["CodeInjection","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["PW2Code","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ExternalDependencies","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ExtLib"}),"\n",(0,s.jsx)(n.li,{children:"libRPM"}),"\n",(0,s.jsx)(n.li,{children:"NitroKernel"}),"\n",(0,s.jsx)(n.li,{children:"swan"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Patches"}),"\n",(0,s.jsx)(n.li,{children:"PW2Code.sln"}),"\n",(0,s.jsx)(n.li,{children:"PW2Code.vcxproj"}),"\n",(0,s.jsx)(n.li,{children:"PW2Code.vcxproj.filters"}),"\n",(0,s.jsx)(n.li,{children:"PW2Code.vcxproj.user"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"vs-project-set-up",children:"VS Project set up"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open the project with Visual Studio"}),"\n",(0,s.jsxs)(n.li,{children:['In the "Solution Explorer" view, click the ',(0,s.jsx)(n.code,{children:"Show All Files"})," button (shows all the files in the project folder)\n",(0,s.jsx)(n.img,{src:t(20094).A+"",width:"500",height:"292"})]}),"\n",(0,s.jsxs)(n.li,{children:['In the "Solution Explorer" view, select all the folders, "Right-Click" it and select the ',(0,s.jsx)(n.code,{children:"Include In Project"})," option\n",(0,s.jsx)(n.img,{src:t(78809).A+"",width:"449",height:"467"})]}),"\n",(0,s.jsxs)(n.li,{children:['In the "Solution Explorer" view, "Right-Click" the project and select ',(0,s.jsx)(n.code,{children:"Properties"})]}),"\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.code,{children:"Configuration Properties -> VC++ Directories -> Include Directories"})," and select ",(0,s.jsx)(n.code,{children:"<Edit...>"}),"\n",(0,s.jsx)(n.img,{src:t(60821).A+"",width:"784",height:"542"})]}),"\n",(0,s.jsxs)(n.li,{children:['In the "Include Directories" window, paste ',(0,s.jsx)(n.code,{children:"$(ProjectDir)ExternalDependencies/swan"}),", ",(0,s.jsx)(n.code,{children:"$(ProjectDir)ExternalDependencies/NitroKernel/include"}),", ",(0,s.jsx)(n.code,{children:"$(ProjectDir)ExternalDependencies/ExtLib"})," and ",(0,s.jsx)(n.code,{children:"$(ProjectDir)ExternalDependencies/libRPM/include"})," or use the ",(0,s.jsx)(n.code,{children:"..."})," button to look them up\n",(0,s.jsx)(n.img,{src:t(56575).A+"",width:"428",height:"423"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Ok"})," and remember to click ",(0,s.jsx)(n.code,{children:"Accept"})," in the ",(0,s.jsx)(n.code,{children:"Properties"})," window to save the changes"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now whenever you create a CPP file in the Patches folder you will be able to include any SWAN header and use its definitions."}),"\n",(0,s.jsx)(n.h3,{id:"ctrmap-set-up",children:"CTRMap set up"}),"\n",(0,s.jsxs)(n.p,{children:["For more in-depth CTRMap installation instructions check this ",(0,s.jsx)(n.a,{href:"../bw_b2w2-using_ctrmap/#setup",children:"guide"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Download ",(0,s.jsx)(n.a,{href:"https://github.com/ds-pokemon-hacking/CTRMap-CE/releases",children:"CTRMap-Community Edition"})]}),"\n",(0,s.jsxs)(n.li,{children:["Download the ",(0,s.jsx)(n.a,{href:"https://github.com/ds-pokemon-hacking/CTRMapV/releases",children:"CTRMapV plug-in"})]}),"\n",(0,s.jsxs)(n.li,{children:["Open CTRMap, select the CTRMap checkbox and click ",(0,s.jsx)(n.code,{children:"Launch"})]}),"\n",(0,s.jsxs)(n.li,{children:['In the "CTRMap Project Manager" window, go to the ',(0,s.jsx)(n.code,{children:"Games"})," tab, click the ",(0,s.jsx)(n.code,{children:"Add ROM"})," button and select your USA White 2 NDS file"]}),"\n",(0,s.jsxs)(n.li,{children:['In the "CTRMap Project Manager" window, go to the ',(0,s.jsx)(n.code,{children:"Additional plug-ins"})," tab and click the ",(0,s.jsx)(n.code,{children:"Install plug-in"})," button"]}),"\n",(0,s.jsx)(n.li,{children:"Select the CTRMapV plug-in that you downloaded and install it"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now you can create Gen V CTRMap projects compatible with Code Injection."}),"\n",(0,s.jsx)(n.h3,{id:"ctrmap-project-set-up",children:"CTRMap project set up"}),"\n",(0,s.jsx)(n.p,{children:"This steps are required everytime you create a new project where you intend to use Code Injection, but only once per project."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open CTRMap, select the CTRMap checkbox and click ",(0,s.jsx)(n.code,{children:"Launch"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"File -> Create New Project"})," and select the path of the project, for this example ",(0,s.jsx)(n.code,{children:"CodeInjection/CTRMapProject"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.code,{children:"Open"})," button to open the project"]}),"\n",(0,s.jsxs)(n.li,{children:["Download ",(0,s.jsx)(n.a,{href:"https://github.com/ds-pokemon-hacking/PMC/releases",children:"PMC"})]}),"\n",(0,s.jsxs)(n.li,{children:["In CTRMap, go to the ",(0,s.jsx)(n.code,{children:"Extras"})," tab and click the ",(0,s.jsx)(n.code,{children:"Install/Update PMC"})," button and select the PMC you downloaded (",(0,s.jsx)(n.code,{children:"PMC_W2.rpm"})," for White 2, ",(0,s.jsx)(n.code,{children:"PMC_B2.rpm"})," for Black 2)"]}),"\n",(0,s.jsxs)(n.li,{children:["Make sure there is a patches directory at ",(0,s.jsx)(n.code,{children:"vfs/data/patches"}),", if there isn't create one"]}),"\n",(0,s.jsxs)(n.li,{children:["Download the latest ",(0,s.jsx)(n.a,{href:"https://github.com/HelloOO7/NitroKernel/releases",children:"NitroKernel"})," DLL, if you use DeSmuMe download the ",(0,s.jsx)(n.code,{children:"NitroKernel_DeSmuMe.dll"})," (recomended)"]}),"\n",(0,s.jsxs)(n.li,{children:["In the file explorer, go to the ",(0,s.jsx)(n.code,{children:"CodeInjection/CTRMapProject/vfs/data/patches"})," folder and add the DLL you downloaded"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This Project is now ready to inject your ASM, C and C++ patches."}),"\n",(0,s.jsx)(n.h2,{id:"making-a-code-injection-patch",children:"Making a Code Injection patch"}),"\n",(0,s.jsx)(n.p,{children:"In this guide we will make a Code Injection patch for White 2 that doubles the amount of items the player gets, although pretty much useless this should teach the basic steps to make a patch from start to finish."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This guide uses White 2 since it is more researched but it also works for Black 2 if you have the correct IDBs"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"external-tools",children:"External Tools"}),"\n",(0,s.jsx)(n.p,{children:"This are the tools you will need to get started making your Code Injection patches:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.arm.com/downloads/-/arm-gnu-toolchain-downloads",children:"ARM GNU Toolchain"})}),"\n",(0,s.jsx)(n.li,{children:"IDA Pro (any disassembler works, but most of the research and documentation has been done in IDA and thus stored in IDB files which you will have to convert if you are using a different program)"}),"\n",(0,s.jsxs)(n.li,{children:["White 2 IDBs (you can get them in the ",(0,s.jsx)(n.a,{href:"https://discord.gg/zAtqJDW2jC",children:"Kingdom of DS Hacking Discord"})," )"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/TASEmulators/desmume/releases",children:"DeSmuMe"}),", make sure that the console is enabled at ",(0,s.jsx)(n.code,{children:"Tools -> Console -> Enabled"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"idb-research",children:"IDB research"}),"\n",(0,s.jsx)(n.p,{children:"We want to duplicate the amount of items the player gets so we want to look in the IDBs for the function that Adds an Item."}),"\n",(0,s.jsxs)(n.p,{children:["Looking in the ",(0,s.jsx)(n.code,{children:"Bag.idb"}),' in IDA and filtering the functions using "Ctrl + F" and looking for "AddItem", we find the BagSaveAddItemCore (this function is located in the ARM9 overlay so it can be found in most IDBs).\n',(0,s.jsx)(n.img,{src:t(9799).A+"",width:"483",height:"219"})]}),"\n",(0,s.jsx)(n.p,{children:"This research process will vary depending on what you are trying to implement, keep in mind not every part of the game has been researched at the same level so this step is most of the time the most time-consuming part."}),"\n",(0,s.jsx)(n.h3,{id:"ida-pseudocode-to-compilable-code",children:"IDA pseudocode to compilable code"}),"\n",(0,s.jsxs)(n.p,{children:["Now that we have located the function we want to change we can create a CPP file called ",(0,s.jsx)(n.code,{children:"DoubleItems.cpp"})," in out ",(0,s.jsx)(n.code,{children:"Patches"})," folder in Visual Studio.\n",(0,s.jsx)(n.img,{src:t(61862).A+"",width:"1734",height:"649"})]}),"\n",(0,s.jsxs)(n.p,{children:["Make sure all your functions are defined and declared inside of the scope of ",(0,s.jsx)(n.code,{children:'extern "C" { <declarations> }'})]}),"\n",(0,s.jsx)(n.p,{children:"We can start by pasting the pseudo-code from IDA to the CPP file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"BagItem *__fastcall BagSave_AddItemCore(BagSaveData *bag, u16 item_idx, u16 quantity, HeapID heapId)\n{\n  BagItem *bagItem; // r0\n\n  bagItem = BagSave_GetItemHandleAddCheck(bag, item_idx, quantity, heapId);\n  if ( !bagItem )\n  {\n    return 0;\n  }\n  bagItem->ItemID = item_idx;\n  bagItem->Count += quantity;\n  return bagItem;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"You will see many errors, now we have to define any struct, function or global variable that the function contains."}),"\n",(0,s.jsx)(n.p,{children:"We don't have to declare functions or struct pointers that don't get used as a struct, defining them is enough (this is called forward declaration)."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Always remove ",(0,s.jsx)(n.code,{children:"__fastcall"}),", it is not necesary and we avoid a compiler warning"]}),"\n",(0,s.jsxs)(n.li,{children:['We need to tell CTRMap that this function is overriding another one so we use a "tag" before the function name, in this case "THUMB_BRANCH" -> ',(0,s.jsx)(n.code,{children:"THUMB_BRANCH_BagSave_AddItemCore"})," (for more info on the relocation type tags check the ",(0,s.jsx)(n.a,{href:"../bw_b2w2-code_injection/#preparing-our-code-for-injection",children:"Code Injection guide"})," )"]}),"\n",(0,s.jsxs)(n.li,{children:["General ",(0,s.jsx)(n.code,{children:"typedef"})," like ",(0,s.jsx)(n.code,{children:"u16"})," are in the ",(0,s.jsx)(n.code,{children:"swantypes.h"})," file so we include it -> ",(0,s.jsx)(n.code,{children:'#include "swantypes.h"'})]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"HeapID"})," definition is in the ",(0,s.jsx)(n.code,{children:"gfl/core/gfl_heap.h"})," file so we include it -> ",(0,s.jsx)(n.code,{children:'#include "gfl/core/gfl_heap.h"'})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"BagSaveData"})," is only used as a pointer so we can use forward declaration -> ",(0,s.jsx)(n.code,{children:"struct BagSaveData;"})]}),"\n",(0,s.jsxs)(n.li,{children:["Even though ",(0,s.jsx)(n.code,{children:"BagItem"})," is also a pointer we do use it as a struct so we need to declare it and define it:"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["6.1. Go to IDA and open the IDB in use (",(0,s.jsx)(n.code,{children:"Bag.idb"})," in this case)"]}),"\n",(0,s.jsxs)(n.li,{children:["6.2. Go to the ",(0,s.jsx)(n.code,{children:"Local Types"})," tab (if you don't see it use ",(0,s.jsx)(n.code,{children:"View -> Open Subviews -> Local types"}),")"]}),"\n",(0,s.jsx)(n.li,{children:'6.3. Press "Ctrl + F" and type "BagItem" and click on the slot with the same name once'}),"\n",(0,s.jsxs)(n.li,{children:['6.4. Press "Ctrl + E", copy the C struct and paste it in the CPP\n',(0,s.jsx)(n.img,{src:t(16290).A+"",width:"566",height:"300"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:['The function uses a function called "BagSave_GetItemHandleAddCheck" we can double click it in IDA to get the declaration -> ',(0,s.jsx)(n.code,{children:"BagItem * BagSave_GetItemHandleAddCheck(BagSaveData *bag, u16 item_idx, u16 quantity, HeapID heapId);"})]}),"\n",(0,s.jsxs)(n.li,{children:["To make the changes we want we can analyze the function and see that the quantity to add is added to the bagItem::Count, so to double the items given we can multiply the quantity by 2 -> ",(0,s.jsx)(n.code,{children:"bagItem->Count += quantity * 2;"})]}),"\n",(0,s.jsx)(n.li,{children:"Finally we want to print a console message (this is very useful since we can't use breakpoints):"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["9.1. We include the print header -> ",(0,s.jsx)(n.code,{children:'#include "kPrint.h"'})]}),"\n",(0,s.jsxs)(n.li,{children:["9.2. We make a print call at the end of the function to notify us of what happened -> ",(0,s.jsx)(n.code,{children:'k::Printf("Added %d of the following item -> %d\\n", bagItem->ItemID, bagItem->Count);'})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now the patch is done and we should have the following code without any visible errors:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include "swantypes.h"\n#include "gfl/core/gfl_heap.h"\n\n#include <cstdarg>\n#include "kPrint.h"\n\nstruct BagSaveData;\nstruct BagItem\n{\n    u16 ItemID;\n    u16 Count;\n};\n\nextern "C"\n{\n\nBagItem* BagSave_GetItemHandleAddCheck(BagSaveData* bag, u16 item_idx, u16 quantity, HeapID heapId);\nBagItem* THUMB_BRANCH_BagSave_AddItemCore(BagSaveData* bag, u16 item_idx, u16 quantity, HeapID heapId)\n{\n    BagItem* bagItem;\n\n    bagItem = BagSave_GetItemHandleAddCheck(bag, item_idx, quantity, heapId);\n    if (!bagItem)\n    {\n        return 0;\n    }\n    bagItem->ItemID = item_idx;\n    bagItem->Count += quantity * 2;\n\n    k::Printf("Added %d of the following item -> %d\\n", quantity * 2, bagItem->ItemID);\n    return bagItem;\n}\n\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"compiling-a-patch",children:"Compiling a patch"}),"\n",(0,s.jsxs)(n.p,{children:["These instructions assume you followed the previous steps, your SWAN headers and other External Dependencies are in the ",(0,s.jsx)(n.code,{children:"CodeInjection/PW2Code/ExternalDependencies"})," folder and your code in the ",(0,s.jsx)(n.code,{children:"CodeInjection/PW2Code/Patches"})," folder."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:['Open a cmd terminal in the PW2Code folder (in the "File Explorer" window go the the PW2Code folder, click the path input box, type "cmd" and clik "Enter")\n',(0,s.jsx)(n.img,{src:t(32908).A+"",width:"478",height:"240"})]}),"\n",(0,s.jsxs)(n.li,{children:["Paste the following command in the terminal:\n",(0,s.jsx)(n.code,{children:"arm-none-eabi-g++ Patches/DoubleItems.cpp -I ExternalDependencies/swan -I ExternalDependencies/NitroKernel/include -o DoubleItems.elf -r -mthumb -march=armv5t -Os"}),"\nGeneral structure of the command for a C++ patch:\n",(0,s.jsx)(n.code,{children:"arm-none-eabi-g++ [patch path] -I [include directory path] -o [output path] -r -mthumb -march=armv5t -Os"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-I"})," is used to provide Additional Include Directories, which are used to search included files outside of the local folder. Since our External Dependencies include files relative to their respective local folder (",(0,s.jsx)(n.code,{children:'#include "swantypes.h"'}),") using ",(0,s.jsx)(n.code,{children:"-I"})," allows this files to compile without changing the source to include from our local folder (",(0,s.jsx)(n.code,{children:'#include "../ExternalDependencies/swan/swantypes.h"'}),").\nIn this particular example we only use ",(0,s.jsx)(n.code,{children:"-I"})," to include the SWAN and NK directories since they are the only ones we use, you can use it to include as many External Include Directories as you need."]}),"\n",(0,s.jsx)(n.p,{children:"I recommend that you set the output file to be in a specific folder for the ELF files, to keep stuff organized."}),"\n",(0,s.jsx)(n.h3,{id:"injecting-a-patch",children:"Injecting a patch"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ESDB in the SWAN headers but I recomend making your own using this ",(0,s.jsx)(n.a,{href:"../bw_b2w2-code_injection/#building-code-injection-patches",children:"guide"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Once you have the correct ESDB follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:'Open your CTRMapProject and go to the "Extras" tab'}),"\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.code,{children:"Convert ELF to DLL"})," button and select the correct ESDB, then the ELF file you just compiled and create the DLL"]}),"\n",(0,s.jsxs)(n.li,{children:["If the ",(0,s.jsx)(n.code,{children:"Install to /patches"})," checkbox is not enabled you will have to manually move the DLL to the ",(0,s.jsx)(n.code,{children:"CTRMapProject/vfs/data/patches"})," folder"]}),"\n",(0,s.jsxs)(n.li,{children:["Now you can go to ",(0,s.jsx)(n.code,{children:"File -> Export ROM"})," and your patch should be applied in the exported ROM"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The patch has been applied to the ROM, and if you play the game you should receive double the items whenever you are given them, also a message should be displayed in the console."}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you buy 5 pokeball you should get 10 in your bag.\n",(0,s.jsx)(n.img,{src:t(28237).A+"",width:"2764",height:"970"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},28237:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/gameplay-fdc06e21cd9b843d21ac06d950398ffd.png"},9799:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,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"},16290:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ida_struct_search-fa78178b80d1fb415741e86a8c264808.png"},32908:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/open_cmd-dce24a9be4eed39513df64ec378929cb.png"},56575:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vs_add_include_path-8356b4f58a91869f796b9f4438ac8b87.png"},61862:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vs_create_cpp_file-85a8aed193f175002ab1fe6824952961.png"},78809:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vs_include_in_project-93a178f88d7c124d9741cc48c93b58fe.png"},60821:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vs_include_paths_edit-54b2a6b7b2a74a93bef481b7f3c78c08.png"},20094:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vs_show_all_files-4a69374d512e6335a78d48245d5fcd01.png"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);