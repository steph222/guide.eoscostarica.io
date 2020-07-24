(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{166:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),i=(r(0),r(184)),o={id:"eosio-sdk-libraries",title:"EOSIO SDK Libraries",sidebar_label:"EOSIO SDK Libraries"},c={id:"tools/eosio-sdk-libraries",isDocsHomePage:!1,title:"EOSIO SDK Libraries",description:"APIs for integrating with EOSIO blockchains",source:"@site/docs/tools/eosio-sdk-libraries.md",permalink:"/docs/tools/eosio-sdk-libraries",lastUpdatedBy:"kurono",lastUpdatedAt:1595596484,sidebar_label:"EOSIO SDK Libraries",sidebar:"docs",previous:{title:"Command Line Interface",permalink:"/docs/tools/command-line"},next:{title:"Glossary",permalink:"/docs/tools/glossary"}},s=[{value:"JavaScript",id:"javascript",children:[]},{value:"Java",id:"java",children:[]},{value:"Swift",id:"swift",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"APIs for integrating with EOSIO blockchains"),Object(i.b)("h2",{id:"javascript"},"JavaScript"),Object(i.b)("p",null,"EOSJS is a JavaScript library for the integration with EOSIO based blockchains using EOSIO's RPC API. This library was created to provide a JavaScript interface for the interaction between web applications for the final user and EOSIO blockchains. As this develops a significant amount of applications in JavaScript, this library is designed to provide a higher support to the ecosystem in general and establishes the better practices in the industry for the interaction of the web applications with EOSIO blockchains."),Object(i.b)("p",null,"General purpose library for the EOSIO blockchain. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosjs/latest/index"}),"EOSJS")),Object(i.b)("h2",{id:"java"},"Java"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://eosio.github.io/eosio-java/"}),"EOSIO SDK for Java")),Object(i.b)("h2",{id:"swift"},"Swift"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://eosio.github.io/eosio-swift"}),"EOSIO SDK for Swift")))}p.isMDXComponent=!0},184:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),f=n,O=b["".concat(o,".").concat(f)]||b[f]||u[f]||i;return r?a.a.createElement(O,c(c({ref:t},l),{},{components:r})):a.a.createElement(O,c({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);