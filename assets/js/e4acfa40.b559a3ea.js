"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[62151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const a={title:"Version and New Feature Specification",sidebar_position:8},r=void 0,s={unversionedId:"development/development-specification/version-feature-specifications",id:"version-1.3.1/development/development-specification/version-feature-specifications",title:"Version and New Feature Specification",description:"1. New version specification",source:"@site/versioned_docs/version-1.3.1/development/development-specification/version-feature-specifications.md",sourceDirName:"development/development-specification",slug:"/development/development-specification/version-feature-specifications",permalink:"/docs/latest/development/development-specification/version-feature-specifications",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/development/development-specification/version-feature-specifications.md",tags:[],version:"1.3.1",sidebarPosition:8,frontMatter:{title:"Version and New Feature Specification",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Test Specification",permalink:"/docs/latest/development/development-specification/unit-test"},next:{title:"Release-Notes Writing Specification",permalink:"/docs/latest/development/development-specification/release-notes"}},c={},l=[{value:"1. New version specification",id:"1-new-version-specification",level:2},{value:"2. New feature specification",id:"2-new-feature-specification",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-new-version-specification"},"1. New version specification"),(0,o.kt)("p",null,"When you need a new version, you need to follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"[Mandatory]"," The new version must be organized for PMC and developers to discuss, and meeting minutes must be recorded and sent to the mailing list"),(0,o.kt)("li",{parentName:"ol"},"[Mandatory]"," The scope of the new version of the feature list requires email voting. 3+ PMC approval is required and the approval votes are greater than the negative votes"),(0,o.kt)("li",{parentName:"ol"},"[Mandatory]"," After the version is voted on, the corresponding version needs to be established on GitHub ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/projects"},"Project")),(0,o.kt)("li",{parentName:"ol"},"[Mandatory]"," Each feature needs to send a separate mailing list to explain the design reasons and design ideas"),(0,o.kt)("li",{parentName:"ol"},"[Mandatory]"," The mailing list needs to be sent to installation, database, configuration modification"),(0,o.kt)("li",{parentName:"ol"},"[Recommended]"," One feature corresponds to one issue corresponds to one PR"),(0,o.kt)("li",{parentName:"ol"},"[Mandatory]"," Each version requires CICD to pass and test cases to pass before the version can be released"),(0,o.kt)("li",{parentName:"ol"},"[Constraints]"," Each version needs to have a corresponding leader, and the leader needs to manage related issues and PRs, and hold discussions, actively respond to emails, confirm plans, track progress, etc.")),(0,o.kt)("h2",{id:"2-new-feature-specification"},"2. New feature specification"),(0,o.kt)("p",null,"When you add new features, you need to follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"[Mandatory]"," New features need to send emails to vote, and attach design reasons and design ideas"),(0,o.kt)("li",{parentName:"ol"},"[Mandatory]"," New features need to be added to the version corresponding to GitHub ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis/projects"},"Project")),(0,o.kt)("li",{parentName:"ol"},"[Mandatory]"," The mailing list needs to be sent to installation, database, configuration modification"),(0,o.kt)("li",{parentName:"ol"},"[Mandatory]"," New features must add new documents"),(0,o.kt)("li",{parentName:"ol"},"[Mandatory]"," New features need to add corresponding unit tests, ",(0,o.kt)("a",{parentName:"li",href:"https://linkis.apache.org/community/development-specification/unit-test"},"Unit Test Specification")),(0,o.kt)("li",{parentName:"ol"},"[Recommended]"," One feature corresponds to one issue corresponds to one PR")))}d.isMDXComponent=!0}}]);