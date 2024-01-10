"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[9734],{12101:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(85893),i=t(11151);const s={},c='PCMP ("PMCP") - Palette Compression',o={id:"universal/resources/nitro/graphics_2d/section_pcmp",title:'PCMP ("PMCP") - Palette Compression',description:"Author(s): Gonhex",source:"@site/docs/universal/resources/nitro/graphics_2d/section_pcmp.md",sourceDirName:"universal/resources/nitro/graphics_2d",slug:"/universal/resources/nitro/graphics_2d/section_pcmp",permalink:"/docs/universal/resources/nitro/graphics_2d/section_pcmp",draft:!1,unlisted:!1,editUrl:"https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/docs/universal/resources/nitro/graphics_2d/section_pcmp.md",tags:[],version:"current",frontMatter:{},sidebar:"universal_sidebar",previous:{title:'MCBK ("KBCM") - Multi Cell Bank',permalink:"/docs/universal/resources/nitro/graphics_2d/section_mcbk"},next:{title:'PLTT ("TTLP") - Palette',permalink:"/docs/universal/resources/nitro/graphics_2d/section_pltt"}},d={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"Section Container",id:"section-container",level:3},{value:"PCMP Container",id:"pcmp-container",level:3},{value:"Specification",id:"specification",level:2},{value:"Files",id:"files",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pcmp-pmcp---palette-compression",children:'PCMP ("PMCP") - Palette Compression'}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Author(s): ",(0,r.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,r.jsx)("br",{}),"\r\nResearch: ",(0,r.jsx)(n.a,{href:"https://problemkaputt.de",children:"NOCASH"})]}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart BT;\r\n    NCLR(N. Color R.)--\x3eG2D(Graphics 2D);\r\n    PCMP(Palette Count Map)-.->NCLR;"}),"\n",(0,r.jsx)(n.p,{children:"The palette compression is an optional component for the color runtime. It reduces the number of palettes, if the palette section allows 16 of them. Useful to save memory but not often used."}),"\n",(0,r.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#section-container",children:"Section Container"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#pcmp-container",children:"PCMP Container"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#specification",children:"Specification"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#files",children:"Files"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,r.jsx)(n.h3,{id:"section-container",children:"Section Container"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"struct ContainerSectionPCMP\r\n{\r\n    /* 0x0 */ struct NitroSectionHeader sectionHeader;\r\n    /* 0x8 */ struct ContainerPCMP sectionData;\r\n}; // entry size = sectionHeader.lengthSection\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Data Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sectionHeader"}),(0,r.jsxs)(n.td,{children:["Header of this section. ",(0,r.jsx)(n.code,{children:'sectionHeader.signature = "PMCP"'}),"."]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../nitro_overview.md#nitro-section-header",children:"NitroSectionHeader"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sectionData"}),(0,r.jsx)(n.td,{children:"Content of this section."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#pcmp-container",children:"ContainerPCMP"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"pcmp-container",children:"PCMP Container"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"struct ContainerPCMP\r\n{\r\n    // header\r\n    /* 0x0 */ uint16_t numberPalettes;\r\n    /* 0x2 */ uint16_t unknown0;\r\n    /* 0x4 */ uint32_t offsetDataIndices;\r\n    \r\n    // data\r\n    /* offsetDataIndices */ uint16_t dataIndices[numberPalettes];\r\n}; // entry size = numberPalettes * 2 + offsetDataIndices\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Data Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numberPalettes"}),(0,r.jsxs)(n.td,{children:["Limits the number of palettes used in the ",(0,r.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_pltt",children:"PLTT section"}),"."]}),(0,r.jsx)(n.td,{children:"uint16_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"unknown0"}),(0,r.jsxs)(n.td,{children:["Always ",(0,r.jsx)(n.code,{children:"0xBEEF"}),"."]}),(0,r.jsx)(n.td,{children:"uint16_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offsetDataIndices"}),(0,r.jsxs)(n.td,{children:["Offset to the index table relative to ",(0,r.jsx)(n.code,{children:"ContainerPCMP"}),"."]}),(0,r.jsx)(n.td,{children:"uint32_t"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dataIndices"}),(0,r.jsxs)(n.td,{children:["Index table, incrementing from ",(0,r.jsx)(n.code,{children:"0"}),". The data may have no effect on the palettes."]}),(0,r.jsx)(n.td,{children:"uint16_t[]"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,r.jsx)(n.h3,{id:"files",children:"Files"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_nclr",children:"Nitro Color Runtime"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var r=t(67294);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);