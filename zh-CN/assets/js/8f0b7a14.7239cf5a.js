"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[50552],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76871:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"\u5355\u4e2a\u670d\u52a1\u7684\u542f\u52a8",sidebar_position:1},c=void 0,u={unversionedId:"development/start-server",id:"version-0.11.0/development/start-server",isDocsHomePage:!1,title:"\u5355\u4e2a\u670d\u52a1\u7684\u542f\u52a8",description:"1 \u8df3\u8f6c\u5230\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u76ee\u5f55",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/development/start-server.md",sourceDirName:"development",slug:"/development/start-server",permalink:"/zh-CN/docs/0.11.0/development/start-server",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/development/start-server.md",tags:[],version:"0.11.0",sidebarPosition:1,frontMatter:{title:"\u5355\u4e2a\u670d\u52a1\u7684\u542f\u52a8",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"\u5355\u4e2a\u670d\u52a1\u7684\u5b89\u88c5",permalink:"/zh-CN/docs/0.11.0/development/install-server"},next:{title:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce",permalink:"/zh-CN/docs/0.11.0/development/new-engine-conn"}},s=[{value:"1 \u8df3\u8f6c\u5230\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u76ee\u5f55",id:"1-\u8df3\u8f6c\u5230\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u76ee\u5f55",children:[]},{value:"2 \u6267\u884c\u542f\u52a8",id:"2-\u6267\u884c\u542f\u52a8",children:[]},{value:"3 \u542f\u52a8\u6210\u529f\u68c0\u67e5",id:"3-\u542f\u52a8\u6210\u529f\u68c0\u67e5",children:[]}],p={toc:s};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u8df3\u8f6c\u5230\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u76ee\u5f55"},"1 \u8df3\u8f6c\u5230\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u76ee\u5f55"),(0,i.kt)("p",null,"\u6bd4\u5982PublicService"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-publicservice\n")),(0,i.kt)("h2",{id:"2-\u6267\u884c\u542f\u52a8"},"2 \u6267\u884c\u542f\u52a8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    sh start-publicservice.sh\n")),(0,i.kt)("h2",{id:"3-\u542f\u52a8\u6210\u529f\u68c0\u67e5"},"3 \u542f\u52a8\u6210\u529f\u68c0\u67e5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(1). \u5224\u65ad\u65e5\u5fd7\u53ef\u4ee5\u901a\u8fc7\u67e5\u770blinkis.out")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    less -i logs/linkis.out\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(2). \u901a\u8fc7\u67e5\u770bEureka\u754c\u9762")),(0,i.kt)("p",null,"\u5728Eureka\u754c\u9762\u67e5\u770b\u670d\u52a1\u542f\u52a8\u6210\u529f\u60c5\u51b5\uff0c\u67e5\u770b\u65b9\u6cd5\uff1a"),(0,i.kt)("p",null,"\u4f7f\u7528http://${EUREKA_INSTALL_IP}:${EUREKA_PORT}, \u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\uff0c\u67e5\u770b\u670d\u52a1\u662f\u5426\u6ce8\u518c\u6210\u529f\u3002"),(0,i.kt)("p",null,"\u5982\u4e0b\u56fe\uff0c\u5982\u60a8\u7684Eureka\u4e3b\u9875\u51fa\u73b0\u4e86\u76f8\u5e94\u7684\u5fae\u670d\u52a1\uff0c\u5219\u8868\u793a\u670d\u52a1\u542f\u52a8\u6210\u529f\uff0c\u53ef\u4ee5\u6b63\u5e38\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u4e86\uff1a "),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"Eureka",src:n(90946).Z})))}d.isMDXComponent=!0},90946:function(e,t,n){t.Z=n.p+"assets/images/Eureka_homepage-de09b1b756300a8b4878cfd9b547ea86.png"}}]);