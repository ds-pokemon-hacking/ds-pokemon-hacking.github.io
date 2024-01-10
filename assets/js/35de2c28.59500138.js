"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[9653],{75237:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(85893),r=i(11151);const s={},c='UEXT ("TXEU") - (Use Extension?)',o={id:"universal/resources/nitro/graphics_2d/section_uext",title:'UEXT ("TXEU") - (Use Extension?)',description:"Author(s): Gonhex",source:"@site/docs/universal/resources/nitro/graphics_2d/section_uext.md",sourceDirName:"universal/resources/nitro/graphics_2d",slug:"/universal/resources/nitro/graphics_2d/section_uext",permalink:"/docs/universal/resources/nitro/graphics_2d/section_uext",draft:!1,unlisted:!1,editUrl:"https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/docs/universal/resources/nitro/graphics_2d/section_uext.md",tags:[],version:"current",frontMatter:{},sidebar:"universal_sidebar",previous:{title:'SCRN ("NRCS") - Screen',permalink:"/docs/universal/resources/nitro/graphics_2d/section_scrn"},next:{title:"G3D",permalink:"/docs/category/g3d"}},l={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"Section Container",id:"section-container",level:3},{value:"UEXT Container",id:"uext-container",level:3},{value:"Specification",id:"specification",level:2},{value:"Files",id:"files",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"uext-txeu---use-extension",children:'UEXT ("TXEU") - (Use Extension?)'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Author(s): ",(0,t.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,t.jsx)("br",{}),"\r\nResearch: ",(0,t.jsx)(n.a,{href:"https://problemkaputt.de",children:"NOCASH"})]}),"\n"]}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart BT;\r\n    NCER(N. Cell R.)--\x3eG2D(Graphics 2D);\r\n    NANR(N. Animation R.)--\x3eG2D;\r\n    UEXT(Use Extension?)--\x3eNCER;\r\n    UEXT--\x3eNANR;"}),"\n",(0,t.jsx)(n.p,{children:'Holds a value which tells, if a "multi-version" of the cell or animation runtime will be applied.'}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#section-container",children:"Section Container"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#uext-container",children:"UEXT Container"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#specification",children:"Specification"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#files",children:"Files"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,t.jsx)(n.h3,{id:"section-container",children:"Section Container"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"struct ContainerSectionUEXT\r\n{\r\n    /* 0x0 */ struct NitroSectionHeader sectionHeader;\r\n    /* 0x8 */ struct ContainerUEXT sectionData;\r\n}; // entry size = sectionHeader.lengthSection\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field Name"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Data Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sectionHeader"}),(0,t.jsxs)(n.td,{children:["Header of this section. ",(0,t.jsx)(n.code,{children:'sectionHeader.signature = "TXEU"'}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"../nitro_overview.md#nitro-section-header",children:"NitroSectionHeader"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sectionData"}),(0,t.jsx)(n.td,{children:"Content of this section."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#uext-container",children:"ContainerUEXT"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"uext-container",children:"UEXT Container"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"struct ContainerUEXT\r\n{\r\n    // header\r\n    // ...empty\r\n    \r\n    // data\r\n    /* 0x0 */ uint32_t extended; // or is it one byte + padding?\r\n}; // entry size = 0x4\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field Name"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Data Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"extended"}),(0,t.jsx)(n.td,{children:"Enable multicell?"}),(0,t.jsx)(n.td,{children:"uint32_t"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,t.jsx)(n.h3,{id:"files",children:"Files"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_ncer",children:"Nitro Cell Runtime"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_nanr",children:"Nitro Animation Runtime"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var t=i(67294);const r={},s=t.createContext(r);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);