(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),p=n,f=b["".concat(i,".").concat(p)]||b[p]||d[p]||a;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(104)),i={id:"devops",title:"DevOps",sidebar_label:"DevOps"},c={unversionedId:"eos-learn/devops",id:"eos-learn/devops",isDocsHomePage:!1,title:"DevOps",description:"At EOS Costa Rica we follow the DevOps principles to build and deploy software.",source:"@site/docs/eos-learn/devops.md",permalink:"/docs/eos-learn/devops",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/website/docs/eos-learn/devops.md",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1597268523,sidebar_label:"DevOps",sidebar:"docs",previous:{title:"Dapp Development",permalink:"/docs/eos-learn/dapp-development"},next:{title:"EOS Blockchain",permalink:"/docs/eos-learn/eos-blockchain"}},s=[{value:"EOS Costa Rica Infrastructure as Code (IaC)",id:"eos-costa-rica-infrastructure-as-code-iac",children:[]},{value:"Understanding DevOps",id:"understanding-devops",children:[]},{value:"Introduction to Infrastructure as Code ( IAC )",id:"introduction-to-infrastructure-as-code--iac-",children:[]},{value:"What is a Container?",id:"what-is-a-container",children:[]},{value:"Containers 101",id:"containers-101",children:[]},{value:"What is Docker?",id:"what-is-docker",children:[]},{value:"Kubernetes in 5 mins",id:"kubernetes-in-5-mins",children:[]},{value:"Kubernetes vs. Docker: It&#39;s Not an Either/Or Question",id:"kubernetes-vs-docker-its-not-an-eitheror-question",children:[]},{value:"Introduction to Terraform ( Infrastructure as Code )",id:"introduction-to-terraform--infrastructure-as-code-",children:[]},{value:"Introduction to HashiCorp Terraform with Armon Dadgar",id:"introduction-to-hashicorp-terraform-with-armon-dadgar",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"At EOS Costa Rica we follow the DevOps principles to build and deploy software. "),Object(a.b)("p",null,"Automation is at the top of our priorities, everything from scaffolding to code optimization, testing, deploy and delivery."),Object(a.b)("p",null,"Continuous integration allows us to detect problems early reducing costs and help us deliver robust software more rapidly."),Object(a.b)("p",null,"Continuous communication and frequent one-on-one calls as well as pair programming are essential part of our day to day work."),Object(a.b)("h2",{id:"eos-costa-rica-infrastructure-as-code-iac"},"EOS Costa Rica Infrastructure as Code (IaC)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Openstack documentation")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/edenia/openstack-docs"}),"https://github.com/edenia/openstack-docs")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Kubernetes documentation")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/edenia/openstack-docs/blob/master/Kubernetes.md"}),"https://github.com/edenia/openstack-docs/blob/master/Kubernetes.md")),Object(a.b)("h2",{id:"understanding-devops"},"Understanding DevOps"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/EIvOZA1HgHU",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("p",null,"To accomplish these goals we leverage a set of technologies explained in the following videos:"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"introduction-to-infrastructure-as-code--iac-"},"Introduction to Infrastructure as Code ( IAC )"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/53X-HAw7BbA",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("hr",null),Object(a.b)("h2",{id:"what-is-a-container"},"What is a Container?"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/53X-EnJ7qX9fkcU",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("hr",null),Object(a.b)("h2",{id:"containers-101"},"Containers 101"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/VqLcWftIaQI",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("p",null,"Watch the full intro to containers playlist here",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/embed/EnJ7qX9fkcU&list=PL7bmigfV0EqQt5_pBPQ8tsZjI1w68-e0H"}),"https://www.youtube.com/embed/EnJ7qX9fkcU&list=PL7bmigfV0EqQt5_pBPQ8tsZjI1w68-e0H")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"what-is-docker"},"What is Docker?"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PfTKwblbkpE",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("hr",null),Object(a.b)("h2",{id:"kubernetes-in-5-mins"},"Kubernetes in 5 mins"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PH-2FfFD2PU",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("hr",null),Object(a.b)("h2",{id:"kubernetes-vs-docker-its-not-an-eitheror-question"},"Kubernetes vs. Docker: It's Not an Either/Or Question"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/2vMEQ5zs1ko",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("hr",null),Object(a.b)("h2",{id:"introduction-to-terraform--infrastructure-as-code-"},"Introduction to Terraform ( Infrastructure as Code )"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/cpxKbf51ccU",frameborder:"0",allowfullscreen:"true"})),Object(a.b)("hr",null),Object(a.b)("h2",{id:"introduction-to-hashicorp-terraform-with-armon-dadgar"},"Introduction to HashiCorp Terraform with Armon Dadgar"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/h970ZBgKINg",frameborder:"0",allowfullscreen:"true"})))}l.isMDXComponent=!0}}]);