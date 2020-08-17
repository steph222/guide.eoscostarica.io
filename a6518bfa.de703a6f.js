(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,f=b["".concat(o,".").concat(d)]||b[d]||u[d]||a;return r?i.a.createElement(f,s(s({ref:t},l),{},{components:r})):i.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),i=r(6),a=(r(0),r(104)),o={id:"eosio-sdk-libraries",title:"EOSIO SDK Libraries",sidebar_label:"EOSIO SDK Libraries"},s={unversionedId:"tools/eosio-sdk-libraries",id:"tools/eosio-sdk-libraries",isDocsHomePage:!1,title:"EOSIO SDK Libraries",description:"APIs for integrating with EOSIO blockchains",source:"@site/docs/tools/eosio-sdk-libraries.md",permalink:"/docs/tools/eosio-sdk-libraries",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tools/eosio-sdk-libraries.md",lastUpdatedBy:"Jean Vega",lastUpdatedAt:1597689464,sidebar_label:"EOSIO SDK Libraries",sidebar:"docs",previous:{title:"Command Line Interface",permalink:"/docs/tools/command-line"},next:{title:"Glossary",permalink:"/docs/tools/glossary"}},c=[{value:"JavaScript",id:"javascript",children:[]},{value:"Java",id:"java",children:[]},{value:"Swift",id:"swift",children:[]}],l={rightToc:c};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"APIs for integrating with EOSIO blockchains"),Object(a.b)("h2",{id:"javascript"},"JavaScript"),Object(a.b)("p",null,"EOSJS is a JavaScript library for the integration with EOSIO based blockchains using EOSIO's RPC API. This library was created to provide a JavaScript interface for the interaction between web applications for the final user and EOSIO blockchains. As this develops a significant amount of applications in JavaScript, this library is designed to provide a higher support to the ecosystem in general and establishes the better practices in the industry for the interaction of the web applications with EOSIO blockchains."),Object(a.b)("p",null,"General purpose library for the EOSIO blockchain. ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosjs/latest/index"}),"EOSJS")),Object(a.b)("h2",{id:"java"},"Java"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://eosio.github.io/eosio-java/"}),"EOSIO SDK for Java")),Object(a.b)("h2",{id:"swift"},"Swift"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://eosio.github.io/eosio-swift"}),"EOSIO SDK for Swift")))}p.isMDXComponent=!0}}]);