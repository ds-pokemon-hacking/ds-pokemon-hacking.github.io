"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[9395],{19560:(F,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"generation-iv/guides/pt-trainer_code_expansion/pt-trainer_code_expansion","title":"Optimizing and Expanding Functionality for Trainer Pokemon","description":"Author: Lhea","source":"@site/docs/generation-iv/guides/pt-trainer_code_expansion/pt-trainer_code_expansion.md","sourceDirName":"generation-iv/guides/pt-trainer_code_expansion","slug":"/generation-iv/guides/pt-trainer_code_expansion/","permalink":"/docs/generation-iv/guides/pt-trainer_code_expansion/","draft":false,"unlisted":false,"editUrl":"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/generation-iv/guides/pt-trainer_code_expansion/pt-trainer_code_expansion.md","tags":[{"inline":true,"label":"Guide (Platinum)","permalink":"/docs/tags/guide-platinum"}],"version":"current","frontMatter":{"title":"Optimizing and Expanding Functionality for Trainer Pokemon","tags":["Guide (Platinum)"]},"sidebar":"generation_iv_sidebar","previous":{"title":"Reusable Repel","permalink":"/docs/generation-iv/guides/pt-reusable_repel/"},"next":{"title":"Changing the HP bar Speed","permalink":"/docs/generation-iv/guides/pt_hgss-hp_bar_speed/"}}');var t=n(74848),a=n(28453);const o={title:"Optimizing and Expanding Functionality for Trainer Pokemon",tags:["Guide (Platinum)"]},r="Optimizing and Expanding Functionality for Trainer Pokemon",s={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Required Tools",id:"required-tools",level:2},{value:"Code Insertion",id:"code-insertion",level:2},{value:"Bugfix: Alternate Form Stat Recalculation",id:"bugfix-alternate-form-stat-recalculation",level:3},{value:"Implementation Caveats",id:"implementation-caveats",level:2},{value:"Code Breakdown",id:"code-breakdown",level:2}];function d(F){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...F.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"optimizing-and-expanding-functionality-for-trainer-pokemon",children:"Optimizing and Expanding Functionality for Trainer Pokemon"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["Author: Lhea ",(0,t.jsx)("br",{}),"\nCredits: Lhea (Platinum implementation), BluRose (original implementation in HG Engine)"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"The code used in the generation 4 games for loading Trainer Pokemon from their\ndata files is poorly-optimized and duplicates much of its own logic. Additionally,\nPokemon Platinum lacks certain functionality that is present in Heart Gold and\nSoul Silver:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Optimizing friendship on Trainer Pokemon to maximize the damage of Return\nand Frustration."}),"\n",(0,t.jsx)(e.li,{children:"Forcing trainer Pokemon to use Ability 2 instead of Ability 1."}),"\n",(0,t.jsx)(e.li,{children:"Forcing trainer Pokemon to be a certain gender."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Luckily, because of the poor optimization of the original code, we can rewrite\nthis function to free up additional space for these new functions, as well as\ncreate some new space for additional data or code."}),"\n",(0,t.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#required-tools",children:"Required Tools"})}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"#code-insertion",children:"Code Insertion"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#bugfix-alternate-form-stat-recalculation",children:"Bugfix: Alternate Form Stat Recalculation"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#implementation-caveats",children:"Implementation Caveats"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#code-breakdown",children:"Code Breakdown"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"required-tools",children:"Required Tools"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"DSPRE"}),"\n",(0,t.jsx)(e.li,{children:"A hex editor"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"code-insertion",children:"Code Insertion"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Open the ",(0,t.jsx)(e.code,{children:"arm9.bin"})," file in your ",(0,t.jsx)(e.code,{children:"YourROMName_DSPRE_contents"})," folder in your\nhex editor of choice."]}),"\n",(0,t.jsxs)(e.li,{children:["Navigate to offset ",(0,t.jsx)(e.code,{children:"0x0793B8"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Paste (overwrite) the next ",(0,t.jsx)(e.code,{children:"0x0410"})," bytes with the following:"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"F0 B5 93 B0 0C 1C 07 1C 04 92 A3 F7 85 FF 0D 90\nA0 00 06 90 C0 19 40 68 06 21 00 F0 1F FE 04 98\n6C 21 9E F7 B3 FE 10 90 04 98 FA F7 47 FC 06 1C\n06 98 C0 19 80 69 10 99 FF F7 D4 FF 34 20 60 43\n05 90 C0 19 29 30 00 78 FF F7 D4 FF 01 28 01 D1\n78 20 00 E0 88 20 12 90 05 98 C0 19 01 1C 28 30\n2B 31 00 78 09 78 00 22 0F 92 00 29 00 DC 96 E0\n06 99 C9 19 0C 91 02 21 01 40 0B 91 01 21 01 40\n0A 91 10 9D 28 78 6A 78 09 90 E8 78 01 02 A8 78\n08 43 08 90 68 79 01 02 28 79 08 43 AD 1D 45 49\n01 40 07 91 80 12 11 A9 08 70 01 1C 07 98 12 AB\n00 F0 9A F8 09 99 08 98 09 18 07 98 09 18 0C 98\n80 69 40 18 0E 90 A3 F7 2D FF 05 98 C0 19 29 30\n00 78 00 24 00 28 09 DD A3 F7 2A FF 0E 90 64 1C\n05 98 C0 19 29 30 00 78 84 42 F5 DB 0E 98 01 02\n12 98 0C 18 09 99 1F 20 48 43 FF 21 68 F0 5A ED\n03 1C 01 20 00 90 01 94 02 20 02 90 00 20 03 90\n30 1C 07 99 08 9A FA F7 57 FC 0B 98 00 28 0B D0\n68 78 01 02 28 78 01 43 AD 1C 11 AA 02 32 11 80\n30 1C 06 21 FB F7 20 FB 0A 98 00 28 0C D0 00 24\n68 78 01 02 28 78 01 43 AD 1C 30 1C 22 1C FD F7\n97 FE 64 1C 04 2C F3 DB 30 1C 00 F0 2D F8 68 78\n01 02 28 78 08 43 AD 1C 31 1C 04 9A FF F7 E2 FA\n30 1C 70 21 11 AA FB F7 FF FA C0 46 C0 46 C0 46\n0C 98 40 68 31 1C 00 F0 83 FD 05 98 C0 19 2B 30\n01 78 0F 98 40 1C 0F 90 88 42 00 DA 72 E7 10 98\n9E F7 34 FE 30 1C 9E F7 31 FE 0D 98 A3 F7 BA FE\n13 B0 F0 BD FF 03 00 00 F8 B5 05 1C 00 24 FF 27\n36 23 28 1C 21 1C C9 18 00 22 FA F7 75 FF DA 28\n00 D1 00 27 64 1C 04 2C F3 DB 28 1C 09 21 6A 46\n17 70 FB F7 C9 FA F8 BD F0 B5 1D 1C 0F 23 13 40\n1E 1C 14 09 00 2A 15 D0 00 2E 08 D0 12 22 FC F7\n09 FA 01 2E 01 D1 80 1C 00 E0 80 1E 28 60 01 2C\n03 D1 01 21 88 43 28 60 F0 BD 02 2C 02 D1 01 21\n08 43 28 60 F0 BD 00 00 FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF FF FF FF FF FF FF FF FF\nFF FF FF FF FF FF FF FF 48 BA 48 19 4C 48 45 41\n"})}),"\n",(0,t.jsx)(e.h3,{id:"bugfix-alternate-form-stat-recalculation",children:"Bugfix: Alternate Form Stat Recalculation"}),"\n",(0,t.jsx)(e.p,{children:"This section is included as optional for those who wish to maintain the\nvanilla quirks of generation 4 games."}),"\n",(0,t.jsx)(e.p,{children:"Generation 4 Pokemon games fail to recalculate the stats of trainer Pokemon\nwhich are using an alternate form. This results in Pokemon such as Wormadam-Sandy\nusing incorrect stats, as they still reflect the stats of its base form."}),"\n",(0,t.jsxs)(e.p,{children:["Space is included in the above code insertion to fix this bug. With your ",(0,t.jsx)(e.code,{children:"arm9.bin"}),"\nopen in your hex editor:"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Navigate to ",(0,t.jsx)(e.code,{children:"0x079532"}),". You should see the bytes ",(0,t.jsx)(e.code,{children:"C0 46 C0 46 C0 46"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Replace these bytes with ",(0,t.jsx)(e.code,{children:"30 1C FA F7 40 FE"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"implementation-caveats",children:"Implementation Caveats"}),"\n",(0,t.jsx)(e.p,{children:"As with its similar implementation in Heart Gold, the usual caveats when modifying\ntrainer Pokemon apply."}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["When setting a given Pokemon in a trainer's team to use Ability 2, all Pokemon\nin later team slots will ",(0,t.jsx)(e.em,{children:"also"})," use Ability 2 until one of them is explicitly\nflagged to use Ability 1."]}),"\n",(0,t.jsxs)(e.li,{children:["When setting a given Pokemon to be forced Male or Female, that Pokemon will\nimplicitly be flagged to have Ability 2 ",(0,t.jsx)(e.em,{children:"unless"})," the Pokemon's species is\nconfigured to be Male-only or Female-only (e.g., Nidoking, Miltank). This also\napplies to Pokemon species which are genderless (e.g., Mewtwo, Magneton): any\nsuch Pokemon having a flag to set it to Male or Female would give it Ability 2,\nif applicable."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"As an illustration of these caveats, consider the following enemy trainer teams\nwith no modifications to the species data structures:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"Lucario   - no flags set        <- has Steadfast (Ability 1)\nBreloom   - Ability 2 flag set  <- has Poison Heal (Ability 2)\nKingdra   - no flags set        <- has Sniper (Ability 2)\nSwampert  - no flags set        <- has Torrent (only valid Ability)\nMachamp   - Ability 1 flag set  <- has Guts (Ability 1)\nMagnezone - Male flag set       <- has Sturdy (Ability 2)\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"Scizor     - Ability 2 flag set  <- has Technician (Ability 2)\nRotom-Heat - no flags set        <- has Levitate (only valid Ability)\nTauros     - no flags set        <- has Anger Point (Ability 2)\nMiltank    - Female flag set     <- has Thick Fat (Ability 1)\nFlygon     - Male flag set       <- has Levitate (only valid Ability)\nGliscor    - no flags set        <- has Sand Veil (Ability 2)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"code-breakdown",children:"Code Breakdown"}),"\n",(0,t.jsxs)(e.p,{children:["This section is purely for illustrative and educational purposes by explaining\nthe code that we just inserted. The full ARMIPS file used to generate the above\ncode is available on my GitHub ",(0,t.jsx)(e.a,{href:"https://github.com/lhearachel/pokeplat-trainer-expansion/blob/main/trainer_data_build_party.s",children:"here"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.a,{href:"https://github.com/pret/pokeplatinum/blob/main/src/trainer_data.c#L179",children:"vanilla routine"}),"\nmakes use of duplicated code across multiple ",(0,t.jsx)(e.code,{children:"case"})," branches of a ",(0,t.jsx)(e.code,{children:"switch"})," block,\nwhich results in bloated code space; the compiled function consumes 1,040 bytes\nof ROM space. However, a few interesting quirks of the trainer Pokemon structure\nwork in our favor for optimizing this routine:"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"The trainer Pokemon data is loaded all at once as a raw memory buffer without\nstatically defined boundaries."}),"\n",(0,t.jsxs)(e.li,{children:["At runtime, the game evaluates the trainer's ",(0,t.jsx)(e.code,{children:"type"})," field to determine how\nit should interpret this buffer. This ",(0,t.jsx)(e.code,{children:"type"})," field has four possible values,\nand the layout of these values means we can interpret them as a bitmask:"]}),"\n"]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{style:{textAlign:"right"},children:(0,t.jsx)(e.code,{children:"type"})}),(0,t.jsx)(e.th,{children:"Meaning"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"right"},children:(0,t.jsx)(e.code,{children:"0"})}),(0,t.jsx)(e.td,{children:"The trainer's Pokemon have no special properties."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"right"},children:(0,t.jsx)(e.code,{children:"1"})}),(0,t.jsx)(e.td,{children:"The trainer's Pokemon define their known moves."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"right"},children:(0,t.jsx)(e.code,{children:"2"})}),(0,t.jsx)(e.td,{children:"The trainer's Pokemon define their held items."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"right"},children:(0,t.jsx)(e.code,{children:"3"})}),(0,t.jsx)(e.td,{children:"The trainer's Pokemon define both their held items and their known moves."})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"With these factors in mind, we can rewrite this jump table implementation as a\nsimple loop which chomps through the loaded memory buffer by-byte. C code for\nthis re-implementation is given below:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"#define CHOMP_U16(buf)        \\\n    ((buf[1] << 8) | buf[0]); \\\n    buf += 2\n\nstatic void TrainerMon_SetFriendship(Pokemon *mon);\nstatic void TrainerMon_CheckOverrideFlags(u16 species, u8 form, u8 flags, u32 *pidMod);\n\nstatic void TrainerData_BuildParty(BattleParams *battleParams, int battler, int heapID)\n{\n    u32 oldSeed = LCRNG_GetSeed();\n\n    Party_InitWithCapacity(battleParams->parties[battler], MAX_PARTY_SIZE);\n    void *buf = Heap_AllocFromHeap(heapID, sizeof(TrainerMonWithMovesAndItem) * MAX_PARTY_SIZE);\n    Pokemon *mon = Pokemon_New(heapID);\n\n    TrainerData_LoadParty(battleParams->trainerIDs[battler], buf);\n\n    u32 pidMod = TrainerClass_Gender(battleParams->trainerData[battler].class) == GENDER_FEMALE\n        ? 120\n        : 136;\n\n    u8 trainerFlags = battleParams->trainerData[battler].type;\n    u8 *cursor = (u8 *)buf;\n\n    for (int i = 0; i < battleParams->trainerData[battler].partySize; i++) {\n        u16 dv = CHOMP_U16(cursor);\n        u16 level = CHOMP_U16(cursor);\n        u16 monID = CHOMP_U16(cursor);\n\n        u16 species = monID & 0x03FF; // least-significant 10 bits\n        u8 form = monID >> 10; // most-significant 6 bits\n\n        u32 rnd = dv + level + species + battleParams->trainerIDs[battler];\n        LCRNG_SetSeed(rnd);\n\n        for (int j = 0; j < battleParams->trainerData[battler].class; j++) {\n            rnd = LCRNG_Next();\n        }\n\n        rnd = (rnd << 8) + pidMod;\n        u8 ivs = dv * MAX_IVS_SINGLE_STAT / MAX_DV;\n        Pokemon_InitWith(mon, species, level, ivs, TRUE, rnd, OTID_NOT_SHINY, 0);\n\n        if (trainerFlags & TRDATATYPE_WITH_ITEM) {\n            u16 item = CHOMP_U16(cursor);\n            Pokemon_SetValue(mon, MON_DATA_HELD_ITEM, &item);\n        }\n\n        if (trainerFlags & TRDATATYPE_WITH_MOVES) {\n            for (j = 0; j < LEARNED_MOVES_MAX; j++) {\n                u16 move = CHOMP_U16(cursor);\n                Pokemon_SetMoveSlot(mon, move, j);\n            }\n        }\n\n        u16 cbSeal = CHOMP_U16(cursor);\n        Pokemon_SetBallSeal(cbSeal, mon, heapID);\n        Pokemon_SetValue(mon, MON_DATA_FORM, &form);\n        Party_AddPokemon(battleParams->parties[battler], mon);\n    }\n\n    Heap_FreeToHeap(buf);\n    Heap_FreeToHeap(mon);\n    LCRNG_SetSeed(oldSeed);\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"This reduces the routine to a much slimmer size and gives us plenty of free\nspace for back-porting the new features for trainer Pokemon from Heart Gold."})]})}function c(F={}){const{wrapper:e}={...(0,a.R)(),...F.components};return e?(0,t.jsx)(e,{...F,children:(0,t.jsx)(d,{...F})}):d(F)}},28453:(F,e,n)=>{n.d(e,{R:()=>o,x:()=>r});var i=n(96540);const t={},a=i.createContext(t);function o(F){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof F?F(e):{...e,...F}}),[e,F])}function r(F){let e;return e=F.disableParentContext?"function"==typeof F.components?F.components(t):F.components||t:o(F.components),i.createElement(a.Provider,{value:e},F.children)}}}]);