"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[4698],{58203:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"universal/resources/nitro/graphics_2d/section_abnk","title":"ABNK (\\"KNBA\\") - Animation Bank","description":"Author(s): Gonhex","source":"@site/docs/universal/resources/nitro/graphics_2d/section_abnk.md","sourceDirName":"universal/resources/nitro/graphics_2d","slug":"/universal/resources/nitro/graphics_2d/section_abnk","permalink":"/docs/universal/resources/nitro/graphics_2d/section_abnk","draft":false,"unlisted":false,"editUrl":"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/universal/resources/nitro/graphics_2d/section_abnk.md","tags":[],"version":"current","frontMatter":{},"sidebar":"universal_sidebar","previous":{"title":"NSCR (\\"RCSN\\") - Nitro Screen Runtime","permalink":"/docs/universal/resources/nitro/graphics_2d/file_nscr"},"next":{"title":"CEBK (\\"KBEC\\") - Cell Bank","permalink":"/docs/universal/resources/nitro/graphics_2d/section_cebk"}}');var i=r(74848),s=r(28453);const a={},d='ABNK ("KNBA") - Animation Bank',c={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"Section Container",id:"section-container",level:3},{value:"ABNK Container",id:"abnk-container",level:3},{value:"Sequence",id:"sequence",level:3},{value:"Frame",id:"frame",level:3},{value:"Frame Properties",id:"frame-properties",level:3},{value:"Specification",id:"specification",level:2},{value:"Animation",id:"animation",level:3},{value:"Loop Mode",id:"loop-mode",level:3},{value:"Files",id:"files",level:3},{value:"TODO",id:"todo",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"abnk-knba---animation-bank",children:'ABNK ("KNBA") - Animation Bank'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Author(s): ",(0,i.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,i.jsx)("br",{}),"\r\nResearch: ",(0,i.jsx)(n.a,{href:"https://problemkaputt.de",children:"NOCASH"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/magical",children:"magical"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})]}),"\n"]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart BT;\r\n    NANR(N. Animation R.)--\x3eG2D(Graphics 2D);\r\n    NMAR(N. Multi Animation R.)--\x3eG2D;\r\n    ABNK(Animation Bank)--\x3eNANR;\r\n    ABNK--\x3eNMAR;"}),"\n",(0,i.jsx)(n.p,{children:"The animation bank is used to animate 2D graphics. It requires an object to work on, which can be either a cell bank or a multi cell bank. Internally it works like frame by frame animations. To achieve more dynamic results, affine transformations can be applied to selected frames."}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#abnk-knba---animation-bank",children:'ABNK ("KNBA") - Animation Bank'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#table-of-contents",children:"Table of Contents"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#section-container",children:"Section Container"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#abnk-container",children:"ABNK Container"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#sequence",children:"Sequence"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#frame",children:"Frame"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#frame-properties",children:"Frame Properties"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#specification",children:"Specification"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#animation",children:"Animation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#loop-mode",children:"Loop Mode"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#files",children:"Files"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#todo",children:"TODO"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,i.jsx)(n.h3,{id:"section-container",children:"Section Container"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"struct ContainerSectionABNK\r\n{\r\n    /* 0x0    */ struct NitroSectionHeader sectionHeader;\r\n    /* 0x8    */ struct ContainerABNK sectionData;\r\n}; // entry size = sectionHeader.lengthSection\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sectionHeader"}),(0,i.jsxs)(n.td,{children:["Header of this section. ",(0,i.jsx)(n.code,{children:'sectionHeader.signature = "KNBA"'}),"."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/#nitro-section-header",children:"NitroSectionHeader"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sectionData"}),(0,i.jsx)(n.td,{children:"Content of this section."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#abnk-container",children:"ContainerABNK"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"abnk-container",children:"ABNK Container"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"struct ContainerABNK\r\n{\r\n    // header\r\n    /* 0x00 */ uint16_t numberSequences;\r\n    /* 0x02 */ uint16_t numberFrames;\r\n    /* 0x04 */ uint32_t offsetDataSequences;\r\n    /* 0x08 */ uint32_t offsetDataFrame\r\n    /* 0x0C */ uint32_t offsetDataFrameProperties;\r\n    /* 0x10 */ uint32_t unknown0;\r\n    /* 0x14 */ uint32_t unknown1;\r\n    \r\n    // data\r\n    /* offsetDataSequences       */ struct Sequence dataSequences[numberSequences];\r\n    /* offsetDataFrame           */ struct Frame dataFrames[numberFrames];\r\n    /* offsetDataFrameProperties */ struct FrameProperties dataFrameProperties[?];\r\n}; // entry size = sectionHeader.lengthSection - 0x8\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numberSequences"}),(0,i.jsx)(n.td,{children:"Number of sequences."}),(0,i.jsx)(n.td,{children:"uint16_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numberFrames"}),(0,i.jsx)(n.td,{children:"Number of frames."}),(0,i.jsx)(n.td,{children:"uint16_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"offsetDataSequences"}),(0,i.jsxs)(n.td,{children:["Offset to the sequence data section relative to ",(0,i.jsx)(n.code,{children:"ContainerABNK"}),"."]}),(0,i.jsx)(n.td,{children:"uint32_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"offsetDataFrame"}),(0,i.jsxs)(n.td,{children:["Offset to the frame data section relative to ",(0,i.jsx)(n.code,{children:"ContainerABNK"}),"."]}),(0,i.jsx)(n.td,{children:"uint32_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"offsetDataFrameProperties"}),(0,i.jsxs)(n.td,{children:["Offset to the frame property data section relative to ",(0,i.jsx)(n.code,{children:"ContainerABNK"}),"."]}),(0,i.jsx)(n.td,{children:"uint32_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"unknown0"}),(0,i.jsx)(n.td,{children:"Unused offset?"}),(0,i.jsx)(n.td,{children:"uint32_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"unknown1"}),(0,i.jsx)(n.td,{children:"Unused offset?"}),(0,i.jsx)(n.td,{children:"uint32_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dataSequences"}),(0,i.jsx)(n.td,{children:"Animated object data."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#sequence",children:"Sequence[]"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dataFrames"}),(0,i.jsx)(n.td,{children:"Frame configuration data. Duration in frames and an index to the properties."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#frame",children:"Frame[]"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dataFrameProperties"}),(0,i.jsx)(n.td,{children:"Current (multi) cell index and affine transformation data, depends on the sequence."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#frame-properties",children:"FrameProperties[]"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"sequence",children:"Sequence"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"struct Sequence\r\n{\r\n    /* 0x0 */ uint32_t numberFrames;\r\n    /* 0x4 */ uint16_t animationType;\r\n    /* 0x6 */ uint16_t cellType;\r\n    /* 0x8 */ uint32_t loopMode;\r\n    /* 0xC */ uint32_t offsetFrame;\r\n}; // entry size = 0x10\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numberFrames"}),(0,i.jsxs)(n.td,{children:["Refers to the count of ",(0,i.jsx)(n.a,{href:"#frame",children:"frame-blocks"})," used in this sequence."]}),(0,i.jsx)(n.td,{children:"uint32_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"animationType"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"0x0"})," = sequence, ",(0,i.jsx)(n.code,{children:"0x1"})," = affine transform, ",(0,i.jsx)(n.code,{children:"0x2"})," = translation."]}),(0,i.jsx)(n.td,{children:"uint16_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cellType"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"0x1"})," = unique cell, ",(0,i.jsx)(n.code,{children:"0x2"})," = multi cell."]}),(0,i.jsx)(n.td,{children:"uint16_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"loopMode"}),(0,i.jsxs)(n.td,{children:["Behaviour of the frame sequence, values are documented in ",(0,i.jsx)(n.a,{href:"#loop-mode",children:"Loop Mode"}),"."]}),(0,i.jsx)(n.td,{children:"uint32_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"offsetFrame"}),(0,i.jsxs)(n.td,{children:["Offset to the first used frame, relative to ",(0,i.jsx)(n.code,{children:"offsetDataFrame"}),"."]}),(0,i.jsx)(n.td,{children:"uint32_t"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"frame",children:"Frame"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"struct Frame\r\n{\r\n    /* 0x0 */ uint32_t offsetProperties;\r\n    /* 0x4 */ uint16_t durationInFrames;\r\n    /* 0x6 */ int16_t unknown0;\r\n}; // entry size = 0x8\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"offsetProperties"}),(0,i.jsxs)(n.td,{children:["Offset to the first used frame property, relative to ",(0,i.jsx)(n.code,{children:"offsetDataFrameProperties"}),"."]}),(0,i.jsx)(n.td,{children:"uint32_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"durationInFrames"}),(0,i.jsx)(n.td,{children:"Number of frames remaining in this state, 60 frames per second."}),(0,i.jsx)(n.td,{children:"uint16_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"unknown0"}),(0,i.jsxs)(n.td,{children:["Always ",(0,i.jsx)(n.code,{children:"0xBEEF"}),"."]}),(0,i.jsx)(n.td,{children:"int16_t"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"frame-properties",children:"Frame Properties"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"// if animationType == 0\r\nstruct FrameProperties\r\n{\r\n    /* 0x0 */ uint16_t cellIndex;\r\n}; // entry size = 0x2\r\n\r\n// if animationType == 1\r\nstruct FrameProperties\r\n{\r\n    /* 0x0 */ uint16_t cellIndex;\r\n    /* 0x2 */ uint16_t rotate;\r\n    /* 0x4 */ fx<1.19.12> scaleW;\r\n    /* 0x8 */ fx<1.19.12> scaleH;\r\n    /* 0xC */ int16_t translateX;\r\n    /* 0xE */ int16_t translateY;\r\n}; // entry size = 0x10\r\n\r\n// if animationType == 2\r\nstruct FrameProperties\r\n{\r\n    /* 0x0 */ uint16_t cellIndex;\r\n    /* 0x2 */ uint16_t unknown0;\r\n    /* 0x4 */ int16_t translateX;\r\n    /* 0x6 */ int16_t translateY;\r\n}; // entry size = 0x8\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cellIndex"}),(0,i.jsx)(n.td,{children:"Index of the displayed cell or multi cell block."}),(0,i.jsx)(n.td,{children:"uint16_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rotate"}),(0,i.jsx)(n.td,{children:"Rotation angle, using the full range of uint16_t for one turn."}),(0,i.jsx)(n.td,{children:"uint16_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"unknown0"}),(0,i.jsxs)(n.td,{children:["Unused, ",(0,i.jsx)(n.code,{children:"0x0"})," or ",(0,i.jsx)(n.code,{children:"0xBEEF"}),"."]}),(0,i.jsx)(n.td,{children:"uint16_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scaleW"}),(0,i.jsx)(n.td,{children:"Width scaling factor."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"g",children:"fx<1.19.12>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scaleH"}),(0,i.jsx)(n.td,{children:"Height scaling factor."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"g",children:"fx<1.19.12>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"translateX"}),(0,i.jsx)(n.td,{children:"X position adjustment."}),(0,i.jsx)(n.td,{children:"int16_t"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"translateY"}),(0,i.jsx)(n.td,{children:"Y position adjustment."}),(0,i.jsx)(n.td,{children:"int16_t"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important:"})," The structs for ",(0,i.jsx)(n.code,{children:"animationType > 0"})," must be DWORD aligned. If there is a region with an odd number of type-0 properties, a dummy entry is appended as padding."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsx)(n.h3,{id:"animation",children:"Animation"}),"\n",(0,i.jsx)(n.p,{children:"To animate a sprite, three data blocks are required."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The entry point is the ",(0,i.jsx)(n.a,{href:"#sequence",children:"sequence data"}),". This defines the gereral properties of a sequence. How many different frames are involved? Are transformations applied or does the animation only rely on changing images? This decision is applyed to all frames, which are part of the sequence."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"#frame",children:"frame data"})," tells, how long the image remains in this state. On a 60 fps system, setting it to 60 frames (",(0,i.jsx)(n.code,{children:"0x3C"}),") makes it last one second before switching to the next frame. It also points to an offset in the frame property data. To save memory, multiple frames can point to the same property offset."]}),"\n",(0,i.jsxs)(n.li,{children:["The structure of the ",(0,i.jsx)(n.a,{href:"#frame-properties",children:"frame properties"})," depends on the ",(0,i.jsx)(n.code,{children:"animationType"})," setting from the sequence data. If it is ",(0,i.jsx)(n.code,{children:"== 0"}),", all it does is displaying the selected cell. If it is ",(0,i.jsx)(n.code,{children:"== 2"}),", the position can also be changed. ",(0,i.jsx)(n.code,{children:"animationType == 1"})," also adds scaling and rotation."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'If the animation is applied to a normal cell bank, the image in each frame is static, meaning if one frame is set to remain for one second and the transformation is rotate 180\xb0, the image will be displayed upside down for one second. If the animation is applied to multi cells, which already have animated parts, it will loop through the animations of the multi cell, while "being upside down".'}),"\n",(0,i.jsx)(n.h3,{id:"loop-mode",children:"Loop Mode"}),"\n",(0,i.jsx)(n.p,{children:"The loop mode defines what to do, after the animation reached its last frame. There are four values, which can be used:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Stop animation at last frame."}),"\n",(0,i.jsx)(n.li,{children:"Repeat animation after last frame."}),"\n",(0,i.jsx)(n.li,{children:"Play frames backwards after reaching the last frame and stop at first frame."}),"\n",(0,i.jsx)(n.li,{children:"Ping pong mode, repeat alternately forward and backward."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Other values are not supported and end up in the behavior of ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"files",children:"Files"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_nanr",children:"Nitro Animation Runtime"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_nmar",children:"Nitro Multi Animation Runtime"})}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"todo",children:"TODO"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Link fixed point definition"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var t=r(96540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);