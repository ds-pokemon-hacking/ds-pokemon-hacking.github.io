"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[4138],{56961:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"generation-v/resources/bw_b2w2-sprite_collection/bw_b2w2-sprite_collection","title":"Sprite Collection","description":"Author(s): Gonhex","source":"@site/docs/generation-v/resources/bw_b2w2-sprite_collection/bw_b2w2-sprite_collection.md","sourceDirName":"generation-v/resources/bw_b2w2-sprite_collection","slug":"/generation-v/resources/bw_b2w2-sprite_collection/","permalink":"/docs/generation-v/resources/bw_b2w2-sprite_collection/","draft":false,"unlisted":false,"editUrl":"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/generation-v/resources/bw_b2w2-sprite_collection/bw_b2w2-sprite_collection.md","tags":[],"version":"current","frontMatter":{},"sidebar":"generation_v_sidebar","previous":{"title":"Map Containers","permalink":"/docs/generation-v/resources/bw_b2w2-maps/"},"next":{"title":"Zone Entities","permalink":"/docs/generation-v/resources/bw_b2w2-zone_entities/"}}');var r=i(74848),s=i(28453);const d={},l="Sprite Collection",c={},o=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"Sprite Container",id:"sprite-container",level:3},{value:"Sprite Pair",id:"sprite-pair",level:3},{value:"Sprite",id:"sprite",level:3},{value:"Size",id:"size",level:3},{value:"Specification",id:"specification",level:2},{value:"Optional Component",id:"optional-component",level:3},{value:"TODO",id:"todo",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"sprite-collection",children:"Sprite Collection"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Author(s): ",(0,r.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,r.jsx)("br",{}),"\nResearch: ",(0,r.jsx)(n.a,{href:"https://github.com/PlatinumMaster",children:"PlatinumMaster"}),", ",(0,r.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})]}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart RL;\n    NCGR(N. Character Graphic R.)--\x3eNCLR(N. Color R.)\n    NCER(N. Cell R.)--\x3eNCLR;\n    NCER--\x3eNCGR;\n    SC(Sprite Collection)--\x3eNCGR;\n    NAMR(N. Animation R.)--2D Target--\x3eNCER;\n    NAMR--3D Target--\x3eSC;"}),"\n",(0,r.jsx)(n.p,{children:"This file functionally replaces the NCER, if the render target is provided by the 3D engine of the DS. It uses the NCGR (must contain a line buffer, no tiles!) as texture to create multiple sprites. It is used for battle sprites (Trainer and Pokemon) and in the game intro (professor juniper)."}),"\n",(0,r.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#sprite-container",children:"Sprite Container"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#sprite-pair",children:"Sprite Pair"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#sprite",children:"Sprite"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#size",children:"Size"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#specification",children:"Specification"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#optional-component",children:"Optional Component"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#todo",children:"TODO"})}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,r.jsx)(n.h3,{id:"sprite-container",children:"Sprite Container"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"struct ContainerSprites\n{\n    /* 0x0    */ uint32_t numberSprites;\n    /* 0x4    */ int16_t boundRight;\n    /* 0x6    */ int16_t boundBottom;\n    /* 0x8    */ int16_t boundLeft;\n    /* 0xA    */ int16_t boundTop;\n    /* 0xC    */ struct SpritePair body[numberSprites];\n    /* append */ uint32_t padding;\n}; // entry size = numberSprites * 0x30 + 0x10\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Data Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numberSprites"}),(0,r.jsx)(n.td,{children:"Number of sprites which can be indexed by the NANR."}),(0,r.jsx)(n.td,{children:"uint32_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"boundRight"}),(0,r.jsx)(n.td,{children:"Probably unused."}),(0,r.jsx)(n.td,{children:"int16_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"boundBottom"}),(0,r.jsx)(n.td,{children:"Probably unused."}),(0,r.jsx)(n.td,{children:"int16_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"boundLeft"}),(0,r.jsx)(n.td,{children:"Probably unused."}),(0,r.jsx)(n.td,{children:"int16_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"boundTop"}),(0,r.jsx)(n.td,{children:"Probably unused."}),(0,r.jsx)(n.td,{children:"int16_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"body"}),(0,r.jsx)(n.td,{children:"Contains two sprites which share the same index."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#sprite-pair",children:"SpritePair[]"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"padding"}),(0,r.jsx)(n.td,{children:"Padding."}),(0,r.jsx)(n.td,{children:"uint32_t"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sprite-pair",children:"Sprite Pair"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"struct SpritePair\n{\n    /* 0x0  */ struct Sprite bodyPart;\n    /* 0x18 */ struct Sprite component;\n}; // entry size = 0x30\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Data Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bodyPart"}),(0,r.jsx)(n.td,{children:"One sprite. It is equivalent to a cell from the NCER."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#sprite",children:"Sprite"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"component"}),(0,r.jsxs)(n.td,{children:["Usually all values are zeroed out. Only used for game-controlled parts, see ",(0,r.jsx)(n.a,{href:"#optional-component",children:"Optional Component"}),"."]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#sprite",children:"Sprite"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sprite",children:"Sprite"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"struct Sprite\n{\n    /* 0x00 */ fx<1.23.8> spritePositionX;\n    /* 0x04 */ fx<1.23.8> spritePositionY;\n    /* 0x08 */ struct Size sizePropertiesX;\n    /* 0x0C */ struct Size sizePropertiesY;\n    /* 0x10 */ fx<1.19.12> texturePositionX;\n    /* 0x14 */ fx<1.19.12> texturePositionY;\n}; // entry size = 0x18\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Data Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spritePositionX"}),(0,r.jsx)(n.td,{children:"Initial x position. The final position on screen depends on further processing."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/universal/resources/data-types/",children:(0,r.jsx)(n.code,{children:"fx<1.23.8>"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spritePositionY"}),(0,r.jsx)(n.td,{children:"Initial y position. This coordinate is upside down (multiply with -1)."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/universal/resources/data-types/",children:(0,r.jsx)(n.code,{children:"fx<1.23.8>"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sizePropertiesX"}),(0,r.jsx)(n.td,{children:"Horizontal sizes."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#size",children:"Size"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sizePropertiesY"}),(0,r.jsx)(n.td,{children:"Vertical sizes."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#size",children:"Size"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"texturePositionX"}),(0,r.jsx)(n.td,{children:"Left edge position on the texture image."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/universal/resources/data-types/",children:(0,r.jsx)(n.code,{children:"fx<1.19.12>"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"texturePositionY"}),(0,r.jsx)(n.td,{children:"Top edge position on the texture image."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/universal/resources/data-types/",children:(0,r.jsx)(n.code,{children:"fx<1.19.12>"})})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"size",children:"Size"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"struct Size\n{\n    /* 0x0 */ uint32_t unknown0 : 12;  // 0b00000000'00000000'00001111'11111111\n              uint32_t dimension : 12; // 0b00000000'11111111'11110000'00000000\n              uint32_t scaling : 8;    // 0b11111111'00000000'00000000'00000000\n}; // entry size = 0x4\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Data Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"unknown0"}),(0,r.jsx)(n.td,{children:"Unused?"}),(0,r.jsx)(n.td,{children:"uint32_t : 12"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dimension"}),(0,r.jsx)(n.td,{children:"Width or height of the sprite's bounding box."}),(0,r.jsx)(n.td,{children:"uint32_t : 12"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scaling"}),(0,r.jsx)(n.td,{children:"Effects sprite scaling but not on the shadow, undocumented behavior."}),(0,r.jsx)(n.td,{children:"uint32_t : 8"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,r.jsx)(n.h3,{id:"optional-component",children:"Optional Component"}),"\n",(0,r.jsxs)(n.p,{children:["The 2nd sprite in a ",(0,r.jsx)(n.a,{href:"#sprite-pair",children:"pair"})," is only used for subimages, which are controled by the game:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Pokemon eyes: They close their eyes to blink in battles or sleep."}),"\n",(0,r.jsx)(n.li,{children:"Professor intro: She only moves her mouth while talking (adding letters to the text box)."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These actions require the ability to change a specific part of the sprite asynchronously. The 2nd sprite provides this feature. If the game sends a command to display the alternative sprite, it moves the bounding box down by its height."}),"\n",(0,r.jsxs)(n.p,{children:["For the most body parts this isn't needed (not linked to the head). In these cases all entries of the sprite are zero, resulting in a ",(0,r.jsx)(n.code,{children:"0 x 0"}),' pixel sized "sprite".']}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"todo",children:"TODO"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Document ",(0,r.jsx)(n.code,{children:"scaling"})," in ",(0,r.jsx)(n.a,{href:"#size",children:"Size"})]}),"\n",(0,r.jsx)(n.li,{children:"Link fixed point definition"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var t=i(96540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);