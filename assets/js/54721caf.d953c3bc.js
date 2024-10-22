"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[4246],{16094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(74848),a=n(28453);const s={title:"Fairy Type Implementation",tags:["Guide (Black 2)","Guide (White 2)"]},o="Fairy Type in B2W2",r={id:"generation-v/guides/b2w2-fairy/b2w2-fairy",title:"Fairy Type Implementation",description:"Author(s): BluRose",source:"@site/docs/generation-v/guides/b2w2-fairy/b2w2-fairy.md",sourceDirName:"generation-v/guides/b2w2-fairy",slug:"/generation-v/guides/b2w2-fairy/",permalink:"/docs/generation-v/guides/b2w2-fairy/",draft:!1,unlisted:!1,editUrl:"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/generation-v/guides/b2w2-fairy/b2w2-fairy.md",tags:[{inline:!0,label:"Guide (Black 2)",permalink:"/docs/tags/guide-black-2"},{inline:!0,label:"Guide (White 2)",permalink:"/docs/tags/guide-white-2"}],version:"current",frontMatter:{title:"Fairy Type Implementation",tags:["Guide (Black 2)","Guide (White 2)"]},sidebar:"generation_v_sidebar",previous:{title:"Code Injection set up",permalink:"/docs/generation-v/guides/b2w2-code_injection_set_up/"},next:{title:"Code Injection (Generation V)",permalink:"/docs/generation-v/guides/bw_b2w2-code_injection/"}},A={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Graphics",id:"graphics",level:2},{value:"Type Icons - <code>/a/0/8/2</code>, <code>/a/1/2/5</code>",id:"type-icons---a082-a125",level:3},{value:"Move Selection Palette - <code>/a/0/1/1</code>",id:"move-selection-palette---a011",level:3},{value:"Hall of Fame Palette - <code>/a/2/1/3</code>",id:"hall-of-fame-palette---a213",level:3},{value:"Code - ASM File",id:"code---asm-file",level:2},{value:"Cleanup",id:"cleanup",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"fairy-type-in-b2w2",children:"Fairy Type in B2W2"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Author(s): ",(0,i.jsx)(t.a,{href:"https://github.com/BluRosie",children:"BluRose"})," ",(0,i.jsx)("br",{}),"\nResearch: ",(0,i.jsx)(t.a,{href:"https://github.com/BluRosie",children:"BluRose"}),", Sunk, ",(0,i.jsx)(t.a,{href:"https://www.pokecommunity.com/showthread.php?t=349000",children:"MeroMero"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This is a tutorial that details how to insert the Fairy type in Black 2 and White 2 using MeroMero's ",(0,i.jsx)(t.a,{href:"https://www.pokecommunity.com/showthread.php?t=349000",children:"initial research from years ago"})," and building upon it with a new and improved better understanding of just what happens in the assembly.  While yet imperfect, the improvements allow for a much better Fairy representation overall, eliminating the appearance of glitched graphics and crashes entirely."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#graphics",children:"Graphics"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"#type-icons---a082-a125",children:["Type Icons - ",(0,i.jsx)(t.code,{children:"/a/0/8/2"}),", ",(0,i.jsx)(t.code,{children:"/a/1/2/5"})]})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"#move-selection-palette---a011",children:["Move Selection Palette - ",(0,i.jsx)(t.code,{children:"/a/0/1/1"})]})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"#hall-of-fame-palette---a213",children:["Hall of Fame Palette - ",(0,i.jsx)(t.code,{children:"/a/2/1/3"})]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#code---asm-file",children:"Code - ASM File"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#cleanup",children:"Cleanup"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#todo",children:"TODO"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"graphics",children:"Graphics"}),"\n",(0,i.jsx)(t.p,{children:"Various other type graphics are leftover from possible features.  We look to replace those here."}),"\n",(0,i.jsxs)(t.h3,{id:"type-icons---a082-a125",children:["Type Icons - ",(0,i.jsx)(t.code,{children:"/a/0/8/2"}),", ",(0,i.jsx)(t.code,{children:"/a/1/2/5"})]}),"\n",(0,i.jsxs)(t.p,{children:["Here we replace the Cool and ??? type icons with the Fairy type icon to allow us to print the icon.  Tinke allows us to do this by replacing the relevant files, first in ",(0,i.jsx)(t.code,{children:"/a/0/8/2"}),":"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(49736).A+"",children:"a082_33.RLCN"})," and ",(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(56175).A+"",children:"a082_51.RGCN"})," should replace the ones in the ROM from an extracted ",(0,i.jsx)(t.code,{children:"/a/0/8/2"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["This replaces ",(0,i.jsx)(t.img,{src:n(12832).A+"",width:"32",height:"16"})," with ",(0,i.jsx)(t.img,{src:n(74782).A+"",width:"32",height:"16"})]}),"\n",(0,i.jsxs)(t.p,{children:["Similarly in ",(0,i.jsx)(t.code,{children:"/a/1/2/5"}),", we just replace the ??? type icon at the bottom of an image to now be the Fairy type, replacing the files in ",(0,i.jsx)(t.code,{children:"/a/1/2/5"})," with ",(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(9214).A+"",children:"a125_22.RLCN"})," and ",(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(50334).A+"",children:"a125_23.RGCN"})]}),"\n",(0,i.jsxs)(t.p,{children:["This replaces ",(0,i.jsx)(t.img,{src:n(66921).A+"",width:"32",height:"16"})," with ",(0,i.jsx)(t.img,{src:n(95157).A+"",width:"32",height:"16"}),"."]}),"\n",(0,i.jsxs)(t.h3,{id:"move-selection-palette---a011",children:["Move Selection Palette - ",(0,i.jsx)(t.code,{children:"/a/0/1/1"})]}),"\n",(0,i.jsxs)(t.p,{children:["Here we add a new palette to ",(0,i.jsx)(t.code,{children:"/a/0/1/1"})," to make Fairy moves appear as pink in the move selection screen."]}),"\n",(0,i.jsxs)(t.p,{children:["This file is ",(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(84646).A+"",children:"a011_572.RLCN"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"a011"})," originally just has 571 files.  We add a 572nd file for our purposes.  You can either unpack/repack using narchive (included in the b2w2-fairy repository) or Extract directory using Tinke, add the file, and Change by directory using Tinke again."]}),"\n",(0,i.jsxs)(t.h3,{id:"hall-of-fame-palette---a213",children:["Hall of Fame Palette - ",(0,i.jsx)(t.code,{children:"/a/2/1/3"})]}),"\n",(0,i.jsxs)(t.p,{children:["Here we add a new palette to ",(0,i.jsx)(t.code,{children:"/a/2/1/3"})," to make Fairy Pok\xe9mon show up in the Hall of Fame with a pink nameplate."]}),"\n",(0,i.jsxs)(t.p,{children:["The file to replace with once extracted:  ",(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(4839).A+"",children:"a213_9.RLCN"})]}),"\n",(0,i.jsx)(t.h2,{id:"code---asm-file",children:"Code - ASM File"}),"\n",(0,i.jsxs)(t.p,{children:["I have made a ",(0,i.jsx)(t.a,{href:"https://github.com/BluRosie/b2w2-fairy",children:"repository"})," which should be downloaded as-is that has the fairy type code and is maintained as such.  Any additions or changes (future bugfixes!) will be included there."]}),"\n",(0,i.jsxs)(t.p,{children:["All you ",(0,i.jsx)(t.em,{children:"need"})," to do is follow the instructions there, abridged here (currently for Windows only):"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Place your White 2/Black 2 ROM in the base folder (",(0,i.jsx)(t.code,{children:"b2w2-fairy-main"}),") as ",(0,i.jsx)(t.code,{children:"base.nds"})]}),"\n",(0,i.jsxs)(t.li,{children:["Read and modify the configs at the beginning of ",(0,i.jsx)(t.code,{children:"asm\\fairy.s"}),".  The only one that should really be changed is ",(0,i.jsx)(t.code,{children:"BLACK2"})," being ",(0,i.jsx)(t.code,{children:"1"})," if you are applying to Black 2, and ",(0,i.jsx)(t.code,{children:"0"})," if applying to White 2."]}),"\n",(0,i.jsxs)(t.li,{children:["Double click on the ",(0,i.jsx)(t.code,{children:"applyfairytype.bat"})," batch file","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A script will run that applies all the Fairy type code changes to copied overlay files and recompresses them in the base folder for ROM insertion"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Open ",(0,i.jsx)(t.code,{children:"base.nds"})," in Tinke"]}),"\n",(0,i.jsx)(t.li,{children:'"Change file" all of overlays 167, 168, 207, 255, 265, 296, 298, the overlay table (y9.bin), and the arm9'}),"\n",(0,i.jsx)(t.li,{children:"Save your ROM as some other named file"}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Documentation - Code Changes"}),(0,i.jsx)("br",{}),(0,i.jsx)("b",{children:"Overlay 167"}),(0,i.jsx)(t.p,{children:"This overlay hosts the type chart.  All the edits made to this overlay are for adjusting the type chart.  The type chart declaration is"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"const u8 gTypeEffectiveness[NUM_OF_TYPES][NUM_OF_TYPES];\n\ngTypeEffectiveness[atkType][defType] grabs the effectiveness of atkType when attacking defType\n- 08 is super effective\n- 04 is normal effective\n- 02 is not very effective\n- 00 is ineffective\n"})}),(0,i.jsx)(t.p,{children:"So all of the code for accessing subsequent entries needs to take into account an extra element in each row and an extra column."}),(0,i.jsx)("br",{}),(0,i.jsx)("b",{children:"Overlay 168"}),(0,i.jsx)(t.p,{children:"This overlay hosts the move type -> move selection palette table.  We just write a 572 near the end of the file and leave it be to correspond to the newly created nclr in a011."}),(0,i.jsx)("br",{}),(0,i.jsx)("b",{children:"Overlay 207"}),(0,i.jsx)(t.p,{children:"This overlay handles a lot of the code for the summary screen.  We edit it to support the new type icon."}),(0,i.jsxs)(t.p,{children:["The old structure allocated for this was ",(0,i.jsx)(t.code,{children:"0x264"})," in size, and at ",(0,i.jsx)(t.code,{children:"0x130"})," it kept track of the type icon OAM id's or something like that.  I'm honestly not 100% certain what it is, but it maps something to the graphics.  This is a common theme with all of the type icon edits made."]}),(0,i.jsxs)(t.p,{children:["First, we double the memory heap allocation size for the summary screen to give us freedom in messing with the structure.  We need to add an entry to the ",(0,i.jsx)(t.code,{children:"0x130"})," structure.  This is an issue--it's baked into the overall structure.  We need to move it to the end of the old structure--we can do this by replacing the ",(0,i.jsx)(t.code,{children:"0x130"})," entries that represent this with ",(0,i.jsx)(t.code,{children:"0x264"})," and to increase the size of the allocated structure to begin with to allow for this moving.  How this is done is documented in the ",(0,i.jsx)(t.code,{children:"asm\\fairy.s"})," file."]}),(0,i.jsx)("br",{}),(0,i.jsx)("b",{children:"Overlay 255"}),(0,i.jsxs)(t.p,{children:["Similarly, the PC Screen has a structure ",(0,i.jsx)(t.code,{children:"0xA5BC"})," in size.  At ",(0,i.jsx)(t.code,{children:"0xA268"})," of this structure, the type icon OAM id's are stored once again.  This would be as simple as moving it to the end, but ",(0,i.jsx)(t.code,{children:"0xA268"})," is actually just a part of a substructure that is baked into the overall structure that starts at ",(0,i.jsx)(t.code,{children:"0x18C"}),".  At ",(0,i.jsx)(t.code,{children:"0xA0DC"})," of this substructure, there is a massive array of OAM id's for every sprite that is possibly on screen.  This includes and captures the ",(0,i.jsx)(t.code,{children:"0xA268"})," from the overall structure--so the code is written to move the type icons to the end of the structure at tag 475.  This prevents any overlap with other sprites that are present on screen as well."]}),(0,i.jsx)(t.p,{children:"Whenever switching off of a Pok\xe9mon, the type icons are all deleted and and replaced--this is done by deleting all of the type OAM id's in a for loop.  There are two separate code areas that are run for these, one for switching onto a new Pok\xe9mon and another for switching into blank space.  These for loops are both expanded to run one more time for the Fairy type."}),(0,i.jsx)("br",{}),(0,i.jsx)("b",{children:"Overlay 265"}),(0,i.jsxs)(t.p,{children:["Here, the table ",(0,i.jsx)(t.code,{children:"u32 type_to_loaded_gfx_hof[NUM_OF_TYPES]"})," exists to map the types to their loaded SPA file when the hall of fame cutscene happens.  This SPA is all of the particles that appear when the Pok\xe9mon slides on screen.  Similarly, the palette table is at the very end of the overlay, and the code was modified to make that table consist of halfwords over u32's to allow us to add more to the end without overflowing the overlay's memory region."]}),(0,i.jsx)("br",{}),(0,i.jsx)("b",{children:"Overlay 296"}),(0,i.jsx)(t.p,{children:"Here, there is a lot of handling to increase the Pok\xe9Dex's loaded sprites.  We increase the amount of space for the Dex structure and go on to move all of the type objects to the end of the structure so that the fairy type icon can be loaded as well."}),(0,i.jsx)("br",{}),(0,i.jsx)("b",{children:"Overlay 298"}),(0,i.jsx)(t.p,{children:"There is an initializer in the Pok\xe9Dex routines that determines how many files can be loaded.  This limit is increased."})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:n(70342).A+"",width:"256",height:"384"})," ",(0,i.jsx)(t.img,{src:n(37757).A+"",width:"256",height:"384"})," ",(0,i.jsx)(t.img,{src:n(9156).A+"",width:"256",height:"384"})," ",(0,i.jsx)(t.img,{src:n(36660).A+"",width:"256",height:"384"})," ",(0,i.jsx)(t.img,{src:n(68812).A+"",width:"258",height:"386"})]}),"\n",(0,i.jsx)(t.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,i.jsx)(t.p,{children:"From there, just make Struggle type 18 to make it typeless.  Assign all the Pok\xe9mon that need it to be Fairy type.  Make moves that have the Fairy typing as well.  It's now a functional type entirely!"})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},84646:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/files/a011_572-2b53d7d687bcb39f20ac47ad9de9eedb.RLCN"},49736:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/files/a082_33-5af9a7035f8f522c66736c006fc3ffd7.RLCN"},56175:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/files/a082_51-9af2860ec68e376f7e1829b69bc17d51.RGCN"},9214:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/files/a125_22-5af9a7035f8f522c66736c006fc3ffd7.RLCN"},50334:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/files/a125_23-0d335155074551d0181d505649475c9e.RGCN"},4839:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/files/a213_9-a8d8afbd12f756a554b9fb94c30b7d74.RLCN"},12832:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,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"},74782:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,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"},95157:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,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"},36660:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pc_screen-dc1ceabd310acbb21c9e988d4bed8d2f.png"},68812:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pokedex-f4ca2f5f739e53c4ea3d69a206ed79fa.png"},66921:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAYAAAB3AH1ZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABrSURBVHjaYmBgYPg/wHiAHaAQ4PF/IDGDQoDH/4wFEwYEE+WAHz9+/P/x48f/gIAAqskR7QCYAQEBARiGkStHlgPQ2ZTIkRwFhAwhV25oOQAWn9SUGw0BkhxA84JoQIviEV8bAgAAAP//AwAEbyKV3CRNpQAAAABJRU5ErkJggg=="},9156:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/select-324fad3390ebef494dd6296ebb150e3b.png"},70342:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/summary_1-0f8e07e159ec86c856e6fcd082ff95be.png"},37757:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/summary_2-841d87617a59fd3604070023cbe3b443.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(96540);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);