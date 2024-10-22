"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[8133],{27091:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(74848),s=i(28453);const r={title:"Adding New Pok\xe9 Marts",tags:["Guide (Diamond)","Guide (Pearl)","Guide (Platinum)","Guide (HeartGold)","Guide (SoulSilver)"]},a="Adding New Pok\xe9 Marts",o={id:"generation-iv/guides/pt_hgss-pokemarts/pt_hgss-pokemarts",title:"Adding New Pok\xe9 Marts",description:"Author(s): SpagoAsparago.",source:"@site/docs/generation-iv/guides/pt_hgss-pokemarts/pt_hgss-pokemarts.md",sourceDirName:"generation-iv/guides/pt_hgss-pokemarts",slug:"/generation-iv/guides/pt_hgss-pokemarts/",permalink:"/docs/generation-iv/guides/pt_hgss-pokemarts/",draft:!1,unlisted:!1,editUrl:"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/generation-iv/guides/pt_hgss-pokemarts/pt_hgss-pokemarts.md",tags:[{inline:!0,label:"Guide (Diamond)",permalink:"/docs/tags/guide-diamond"},{inline:!0,label:"Guide (Pearl)",permalink:"/docs/tags/guide-pearl"},{inline:!0,label:"Guide (Platinum)",permalink:"/docs/tags/guide-platinum"},{inline:!0,label:"Guide (HeartGold)",permalink:"/docs/tags/guide-heart-gold"},{inline:!0,label:"Guide (SoulSilver)",permalink:"/docs/tags/guide-soul-silver"}],version:"current",frontMatter:{title:"Adding New Pok\xe9 Marts",tags:["Guide (Diamond)","Guide (Pearl)","Guide (Platinum)","Guide (HeartGold)","Guide (SoulSilver)"]},sidebar:"generation_iv_sidebar",previous:{title:"Changing the HP bar Speed",permalink:"/docs/generation-iv/guides/pt_hgss-hp_bar_speed/"},next:{title:"Enabling Reusable TMs",permalink:"/docs/generation-iv/guides/pt_hgss-reusabletms/"}},d={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Adding a new Pok\xe9 Mart",id:"adding-a-new-pok\xe9-mart",level:2},{value:"Editing item prices",id:"editing-item-prices",level:3},{value:"Displaying the new Pok\xe9 Mart",id:"displaying-the-new-pok\xe9-mart",level:2},{value:"Using Script Registers",id:"using-script-registers",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"adding-new-pok\xe9-marts",children:"Adding New Pok\xe9 Marts"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Author(s): ",(0,n.jsx)(t.a,{href:"https://github.com/SpagoAsparago",children:"SpagoAsparago"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This is a guide on how to add and display new Pok\xe9 Marts in Platinum and HGSS.\r\nAll offsets mentioned are based on the US version of the ROMs."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#adding-a-new-pok%C3%A9-mart",children:"Adding a new Pok\xe9 Mart"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#editing-item-prices",children:"Editing Item prices"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#displaying-the-new-pok%C3%A9-mart",children:"Displaying the new Pok\xe9 Mart"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#using-script-registers",children:"Using Script Registers"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"adding-a-new-pok\xe9-mart",children:"Adding a new Pok\xe9 Mart"}),"\n",(0,n.jsx)(t.p,{children:"If you haven't already, you'll have to perform the ARM9 expansion since that's were the new Pok\xe9 Mart(s) will be written to.\r\nYou can do so by clicking \"Expand ARM9\" in DSPRE toolbox, then go to Unpacked/SynthOverlay in your DSPRE project folder (which will be named ROMname_DSPRE_contents, and will be in the same folder of your ROM) and using your hex editor of choice open either file 0009 if you're on Platinum or 0000 for HGSS."}),"\n",(0,n.jsxs)(t.p,{children:["You can write at whatever offset you want as long as it's empty, I will be writing my Pok\xe9 Mart at 0x100. You need to sum ",(0,n.jsx)(t.code,{children:"0x023C8000"})," to this offset, and write it down since you'll need it later to display the mart in game. In my case it will be ",(0,n.jsx)(t.code,{children:"0x023C8100"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Pok\xe9 Mart are loaded in the RAM as a list of bytes of the items index numbers, with ",(0,n.jsx)(t.code,{children:"FF FF"})," at the end of each mart, each item taking up two bytes.\r\nRefer to ",(0,n.jsx)(t.a,{href:"https://bulbapedia.bulbagarden.net/wiki/List_of_items_by_index_number_(Generation_IV)",children:"Bulbapedia's list of items by index number"}),".\r\nKeep in mind the bytes must be written in little endian, so the order of bytes has to be swapped."]}),"\n",(0,n.jsxs)(t.p,{children:["In this tutorial I will be adding a Pok\xe9 Mart that sells Rare Candies and Focus Sashes, their index numbers are respectively ",(0,n.jsx)(t.code,{children:"0x32"})," and ",(0,n.jsx)(t.code,{children:"0x113"}),".\r\nSo I will be writing ",(0,n.jsx)(t.code,{children:"32 00 13 01 FF FF"})," at 0x100. Once you've added all your marts and wrote down their offsets you can save the file and close the hex editor."]}),"\n",(0,n.jsx)(t.h3,{id:"editing-item-prices",children:"Editing item prices"}),"\n",(0,n.jsxs)(t.p,{children:["Item prices aren't stored in the Pok\xe9 Marts, instead they are part of item data, meaning an item will always have the same price regardless of the Pok\xe9 Mart it's being sold at.\r\nItem data is stored in the narc ",(0,n.jsx)(t.code,{children:"pl_item_data"})," (Platinum) / ",(0,n.jsx)(t.code,{children:"/a/0/1/7"})," (HGSS). The file you're looking will have the item index number as its name."]}),"\n",(0,n.jsxs)(t.p,{children:["The price is stored in the first two bytes in each file, so for example if I want to have Rare Candyies to be sold at 10,000 Pok\xe8dollars (",(0,n.jsx)(t.code,{children:"0x2710"}),"), I will have to extract 50.bin and change the first two bytes to ",(0,n.jsx)(t.code,{children:"10 27"}),". Once you've reinserted the file remember to pack the narc before saving the ROM!"]}),"\n",(0,n.jsx)(t.h2,{id:"displaying-the-new-pok\xe9-mart",children:"Displaying the new Pok\xe9 Mart"}),"\n",(0,n.jsxs)(t.p,{children:["The easiest way new Pok\xe9 Marts can be displayed (without overwriting existing ones) is by using a script to change the pointer of an existing Pok\xe9 Mart trough the ",(0,n.jsx)(t.code,{children:"AdrsValueSet"})," command, normally accessing the Pok\xe9 Mart, and once you're done changing the pointer back.\r\nI'll use the offset of ",(0,n.jsx)(t.code,{children:"SpMartScreen 0"}),", the pointer normally being ",(0,n.jsx)(t.code,{children:"0x020EB978"})," (Platinum) / ",(0,n.jsx)(t.code,{children:"020FBA54"})," (HGSS) and is found at ",(0,n.jsx)(t.code,{children:"0x02100B1C"})," (Platinum) / ",(0,n.jsx)(t.code,{children:"0x0210FA3C"})," (HGSS) in the RAM.\r\nSince I'm using HGSS, the relevant part of my script will look like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"AdrsValueSet 0x0210FA3C 0x00\r\nAdrsValueSet 0x0210FA3D 0x81\r\nAdrsValueSet 0x0210FA3E 0x3C\r\nSpMartScreen 0\r\nAdrsValueSet 0x0210FA3C 0x54\r\nAdrsValueSet 0x0210FA3D 0xBA\r\nAdrsValueSet 0x0210FA3E 0x0F\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The first three commands change the original pointer to the new one in the synthetic overlay, then the Mart is opened like normal with ",(0,n.jsx)(t.code,{children:"SpMartScreen 0"}),", and with the last three commands the original pointer is restored. Only 3 bytes are changed instead of 4 since RAM offsets always start with 02. Again the pointers are written in little endian, so ",(0,n.jsx)(t.code,{children:"0x023C8100"})," will look like ",(0,n.jsx)(t.code,{children:"00 81 3C 02"})," in the RAM.\r\nYou can save the script and test the game now.\r\nNote that in Platinum the pointer will have to be changed back to ",(0,n.jsx)(t.code,{children:"0x20EB978"})," instead.\r\nThis is what my full script 19 looks like, I assigned it to a NPC which will show the new Pok\xe8 Mart when talked to:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(49473).A+"",width:"743",height:"642"})}),"\n",(0,n.jsx)(t.h3,{id:"using-script-registers",children:"Using Script Registers"}),"\n",(0,n.jsxs)(t.p,{children:["To avoid using the AdrsValueSet three times in a row, it's possible to do the same process using the script register commands ",(0,n.jsx)(t.code,{children:"RegDataSet"})," and ",(0,n.jsx)(t.code,{children:"AdrsRegSet"}),", so that my earlier script will instead look like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"RegDataSet 0 0x023C8100\r\nAdrsRegSet 0x0210FA3C 0\r\nSpMartScreen 0\r\nRegDataSet 0 0x020FBA54\r\nAdrsRegSet 0x0210FA3C 0\n"})}),"\n",(0,n.jsxs)(t.p,{children:['The only caveat is that the script is normally "broken" and only writes one byte into memory, so to fix it you have to hex edit the arm9 at ',(0,n.jsx)(t.code,{children:"0x3F7CA"})," (Platinum) / ",(0,n.jsx)(t.code,{children:"0x40996"})," (HGSS) and change ",(0,n.jsx)(t.code,{children:"01 70"})," to ",(0,n.jsx)(t.code,{children:"01 60"}),". Thanks to AdAstra for having looked into this issue."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},49473:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/pokemart_script1-9f19d5f7ded9f199c6d34faf75de8687.PNG"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);