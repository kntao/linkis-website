"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[99839],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),o=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=o(n),v=i,k=d["".concat(a,".").concat(v)]||d[v]||p[v]||c;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,s=new Array(c);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var o=2;o<c;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75714:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var r=n(87462),i=n(63366),c=(n(67294),n(3905)),s=["components"],l={title:"CS Client",sidebar_position:2},a=void 0,o={unversionedId:"architecture/public-enhancement-services/context-service/context-service-client",id:"version-1.1.0/architecture/public-enhancement-services/context-service/context-service-client",isDocsHomePage:!1,title:"CS Client",description:"CSClient\u8bbe\u8ba1\u7684\u601d\u8def\u548c\u5b9e\u73b0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/architecture/public-enhancement-services/context-service/context-service-client.md",sourceDirName:"architecture/public-enhancement-services/context-service",slug:"/architecture/public-enhancement-services/context-service/context-service-client",permalink:"/zh-CN/docs/1.1.0/architecture/public-enhancement-services/context-service/context-service-client",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/architecture/public-enhancement-services/context-service/context-service-client.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{title:"CS Client",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CS Cache \u67b6\u6784",permalink:"/zh-CN/docs/1.1.0/architecture/public-enhancement-services/context-service/context-service-cache"},next:{title:"CS HA \u67b6\u6784\u8bbe\u8ba1",permalink:"/zh-CN/docs/1.1.0/architecture/public-enhancement-services/context-service/context-service-highavailable"}},u=[{value:"<strong>CSClient\u8bbe\u8ba1\u7684\u601d\u8def\u548c\u5b9e\u73b0</strong>",id:"csclient\u8bbe\u8ba1\u7684\u601d\u8def\u548c\u5b9e\u73b0",children:[{value:"1. \u7533\u8bf7\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u80fd\u529b",id:"1-\u7533\u8bf7\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u80fd\u529b",children:[]},{value:"2. \u6ce8\u518c\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u80fd\u529b",id:"2-\u6ce8\u518c\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u80fd\u529b",children:[]},{value:"3. \u66f4\u65b0\u6ce8\u518c\u7684\u4e0a\u4e0b\u6587\u7684\u80fd\u529b",id:"3-\u66f4\u65b0\u6ce8\u518c\u7684\u4e0a\u4e0b\u6587\u7684\u80fd\u529b",children:[]},{value:"4. \u83b7\u53d6\u4e0a\u4e0b\u6587\u7684\u80fd\u529b",id:"4-\u83b7\u53d6\u4e0a\u4e0b\u6587\u7684\u80fd\u529b",children:[]},{value:"5. \u67d0\u4e00\u4e9b\u7279\u6b8a\u7684\u5fae\u670d\u52a1\u80fd\u591f\u55c5\u63a2\u5230cs-server\u4e2d\u5df2\u7ecf\u4fee\u6539\u4e86\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u64cd\u4f5c",id:"5-\u67d0\u4e00\u4e9b\u7279\u6b8a\u7684\u5fae\u670d\u52a1\u80fd\u591f\u55c5\u63a2\u5230cs-server\u4e2d\u5df2\u7ecf\u4fee\u6539\u4e86\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u64cd\u4f5c",children:[]},{value:"6. CSClient\u9700\u8981\u63d0\u4f9b\u590d\u5236csid1\u6240\u6709\u4e0a\u4e0b\u6587\u4fe1\u606f\u4e3a\u4e00\u4e2a\u65b0\u7684csid2\u7528\u6765\u63d0\u4f9b\u7ed9\u8c03\u5ea6\u6267\u884c\u7684",id:"6-csclient\u9700\u8981\u63d0\u4f9b\u590d\u5236csid1\u6240\u6709\u4e0a\u4e0b\u6587\u4fe1\u606f\u4e3a\u4e00\u4e2a\u65b0\u7684csid2\u7528\u6765\u63d0\u4f9b\u7ed9\u8c03\u5ea6\u6267\u884c\u7684",children:[]}]},{value:"<strong>ClientListener\u6a21\u5757\u7684\u5b9e\u73b0</strong>",id:"clientlistener\u6a21\u5757\u7684\u5b9e\u73b0",children:[]},{value:"<strong>GatewayRouter\u7684\u5b9e\u73b0</strong>",id:"gatewayrouter\u7684\u5b9e\u73b0",children:[]}],p={toc:u};function d(e){var t=e.components,l=(0,i.Z)(e,s);return(0,c.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"csclient\u8bbe\u8ba1\u7684\u601d\u8def\u548c\u5b9e\u73b0"},(0,c.kt)("strong",{parentName:"h2"},"CSClient\u8bbe\u8ba1\u7684\u601d\u8def\u548c\u5b9e\u73b0")),(0,c.kt)("p",null,"CSClient\u662f\u6bcf\u4e00\u4e2a\u5fae\u670d\u52a1\u548cCSServer\u7ec4\u8fdb\u884c\u4ea4\u4e92\u7684\u5ba2\u6237\u7aef\uff0cCSClient\u9700\u8981\u6ee1\u8db3\u4e0b\u9762\u7684\u529f\u80fd\u3002"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"\u5fae\u670d\u52a1\u5411cs-server\u7533\u8bf7\u4e00\u4e2a\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u80fd\u529b")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"\u5fae\u670d\u52a1\u5411cs-server\u6ce8\u518c\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u80fd\u529b")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"\u5fae\u670d\u52a1\u80fd\u591f\u5411cs-server\u66f4\u65b0\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u80fd\u529b")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"\u5fae\u670d\u52a1\u5411cs-server\u83b7\u53d6\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u80fd\u529b")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"\u67d0\u4e00\u4e9b\u7279\u6b8a\u7684\u5fae\u670d\u52a1\u80fd\u591f\u55c5\u63a2\u5230cs-server\u4e2d\u5df2\u7ecf\u4fee\u6539\u4e86\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u64cd\u4f5c")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"CSClient\u5728csserver\u96c6\u7fa4\u90fd\u5931\u8d25\u7684\u60c5\u51b5\u4e0b\u80fd\u591f\u7ed9\u51fa\u660e\u786e\u7684\u6307\u793a")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"CSClient\u9700\u8981\u63d0\u4f9b\u590d\u5236csid1\u6240\u6709\u4e0a\u4e0b\u6587\u4fe1\u606f\u4e3a\u4e00\u4e2a\u65b0\u7684csid2\u7528\u6765\u63d0\u4f9b\u7ed9\u8c03\u5ea6\u6267\u884c\u7684"))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"  \u603b\u4f53\u7684\u505a\u6cd5\u662f\u901a\u8fc7\u7684linkis\u81ea\u5e26\u7684linkis-httpclient\u8fdb\u884c\u53d1\u9001http\u8bf7\u6c42\uff0c\u901a\u8fc7\u5b9e\u73b0\u5404\u79cdAction\u548cResult\u7684\u5b9e\u4f53\u7c7b\u8fdb\u884c\u53d1\u9001\u8bf7\u6c42\u548c\u63a5\u6536\u54cd\u5e94\u3002")),(0,c.kt)("h3",{id:"1-\u7533\u8bf7\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u80fd\u529b"},"1. \u7533\u8bf7\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u80fd\u529b"),(0,c.kt)("p",null,"\u7533\u8bf7\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u4f8b\u5982\u7528\u6237\u5728\u524d\u7aef\u65b0\u5efa\u4e86\u4e00\u6761\u5de5\u4f5c\u6d41\uff0cdss-server\u9700\u8981\u5411dss-server\u7533\u8bf7\u4e00\u4e2a\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u7533\u8bf7\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u9700\u8981\u5c06\u5de5\u4f5c\u6d41\u7684\u6807\u8bc6\u4fe1\u606f(\u5de5\u7a0b\u540d\u3001\u5de5\u4f5c\u6d41\u540d)\u901a\u8fc7CSClient\u53d1\u9001\u5230CSServer\u4e2d(\u8fd9\u4e2a\u65f6\u5019gateway\u5e94\u8be5\u662f\u968f\u673a\u53d1\u9001\u7ed9\u4e00\u4e2a\u7684\uff0c\u56e0\u4e3a\u6b64\u65f6\u6ca1\u6709\u643a\u5e26csid\u7684\u4fe1\u606f)\uff0c\u7533\u8bf7\u4e0a\u4e0b\u6587\u4e00\u65e6\u53cd\u9988\u5230\u6b63\u786e\u7684\u7ed3\u679c\u4e4b\u540e\uff0c\u5c31\u4f1a\u8fd4\u56de\u4e00\u4e2acsid\u548c\u8be5\u5de5\u4f5c\u6d41\u8fdb\u884c\u7ed1\u5b9a\u3002"),(0,c.kt)("h3",{id:"2-\u6ce8\u518c\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u80fd\u529b"},"2. \u6ce8\u518c\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u80fd\u529b"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"  \u6ce8\u518c\u4e0a\u4e0b\u6587\u7684\u80fd\u529b\uff0c\u4f8b\u5982\u7528\u6237\u5728\u524d\u7aef\u9875\u9762\u4e0a\u4f20\u4e86\u8d44\u6e90\u6587\u4ef6\uff0c\u6587\u4ef6\u5185\u5bb9\u4e0a\u4f20\u5230dss-server\uff0cdss-server\u5c06\u5185\u5bb9\u5b58\u50a8\u5230bml\u4e2d\uff0c\u7136\u540e\u9700\u8981\u5c06\u4ecebml\u4e2d\u83b7\u5f97\u7684resourceid\u548cversion\u6ce8\u518c\u5230cs-server\u4e2d\uff0c\u6b64\u65f6\u9700\u8981\u4f7f\u7528\u5230csclient\u7684\u6ce8\u518c\u7684\u80fd\u529b\uff0c\u6ce8\u518c\u7684\u80fd\u529b\u662f\u901a\u8fc7\u4f20\u5165csid\uff0c\u4ee5\u53cacskey\n\u548ccsvalue(resourceid\u548cversion)\u8fdb\u884c\u6ce8\u518c\u3002")),(0,c.kt)("h3",{id:"3-\u66f4\u65b0\u6ce8\u518c\u7684\u4e0a\u4e0b\u6587\u7684\u80fd\u529b"},"3. \u66f4\u65b0\u6ce8\u518c\u7684\u4e0a\u4e0b\u6587\u7684\u80fd\u529b"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"  \u66f4\u65b0\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u80fd\u529b\u3002\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff0c\u6bd4\u5982\u4e00\u4e2a\u7528\u6237\u4e0a\u4f20\u4e86\u4e00\u4e2a\u8d44\u6e90\u6587\u4ef6test.jar\uff0c\u6b64\u65f6csserver\u5df2\u7ecf\u6709\u6ce8\u518c\u7684\u4fe1\u606f\uff0c\u5982\u679c\u7528\u6237\u5728\u7f16\u8f91\u5de5\u4f5c\u6d41\u7684\u65f6\u5019\uff0c\u5c06\u8fd9\u4e2a\u8d44\u6e90\u6587\u4ef6\u8fdb\u884c\u4e86\u66f4\u65b0\uff0c\u90a3\u4e48cs-server\u9700\u8981\u5c06\u8fd9\u4e2a\u5185\u5bb9\u8fdb\u884c\u66f4\u65b0\u3002\u6b64\u65f6\u9700\u8981\u8c03\u7528csclient\u7684\u66f4\u65b0\u7684\u63a5\u53e3")),(0,c.kt)("h3",{id:"4-\u83b7\u53d6\u4e0a\u4e0b\u6587\u7684\u80fd\u529b"},"4. \u83b7\u53d6\u4e0a\u4e0b\u6587\u7684\u80fd\u529b"),(0,c.kt)("p",null,"\u6ce8\u518c\u5230csserver\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\uff0c\u5728\u53d8\u91cf\u66ff\u6362\u3001\u8d44\u6e90\u6587\u4ef6\u4e0b\u8f7d\u3001\u4e0b\u6e38\u8282\u70b9\u8c03\u7528\u4e0a\u6e38\u8282\u70b9\u4ea7\u751f\u4fe1\u606f\u7684\u65f6\u5019\uff0c\u90fd\u662f\u9700\u8981\u88ab\u8bfb\u53d6\u7684\uff0c\u4f8b\u5982engine\u7aef\u5728\u6267\u884c\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u9700\u8981\u8fdb\u884c\u4e0b\u8f7dbml\u7684\u8d44\u6e90\uff0c\u6b64\u65f6\u9700\u8981\u901a\u8fc7csclient\u548ccsserver\u8fdb\u884c\u4ea4\u4e92\uff0c\u83b7\u53d6\u5230\u6587\u4ef6\u5728bml\u4e2d\u7684resourceid\u548cversion\u7136\u540e\u518d\u8fdb\u884c\u4e0b\u8f7d\u3002"),(0,c.kt)("h3",{id:"5-\u67d0\u4e00\u4e9b\u7279\u6b8a\u7684\u5fae\u670d\u52a1\u80fd\u591f\u55c5\u63a2\u5230cs-server\u4e2d\u5df2\u7ecf\u4fee\u6539\u4e86\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u64cd\u4f5c"},"5. \u67d0\u4e00\u4e9b\u7279\u6b8a\u7684\u5fae\u670d\u52a1\u80fd\u591f\u55c5\u63a2\u5230cs-server\u4e2d\u5df2\u7ecf\u4fee\u6539\u4e86\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u64cd\u4f5c"),(0,c.kt)("p",null,"\u8fd9\u4e2a\u64cd\u4f5c\u662f\u57fa\u4e8e\u4ee5\u4e0b\u7684\u4f8b\u5b50\uff0c\u6bd4\u5982\u4e00\u4e2awidget\u8282\u70b9\u548c\u4e0a\u6e38\u7684sql\u8282\u70b9\u662f\u6709\u5f88\u5f3a\u7684\u8054\u52a8\u6027\uff0c\u7528\u6237\u5728sql\u8282\u70b9\u4e2d\u5199\u4e86\u4e00\u4e2asql\uff0csql\u7684\u7ed3\u679c\u96c6\u7684\u5143\u6570\u636e\u4e3aa,b,c\u4e09\u4e2a\u5b57\u6bb5\uff0c\u540e\u9762\u7684widget\u8282\u70b9\u7ed1\u5b9a\u4e86\u8fd9\u4e2asql\uff0c\u80fd\u591f\u5728\u9875\u9762\u4e2d\u8fdb\u884c\u5bf9\u8fd9\u4e09\u4e2a\u5b57\u6bb5\u7684\u7f16\u8f91\uff0c\u7136\u540e\u7528\u6237\u66f4\u6539\u4e86sql\u7684\u8bed\u53e5\uff0c\u5143\u6570\u636e\u53d8\u6210\u4e86a,b,c,d\u56db\u4e2a\u5b57\u6bb5\uff0c\u6b64\u65f6\u7528\u6237\u9700\u8981\u624b\u52a8\u5237\u65b0\u4e00\u4e0b\u624d\u884c\u3002\u6211\u4eec\u5e0c\u671b\u505a\u5230\u5982\u679c\u811a\u672c\u505a\u5230\u4e86\u6539\u53d8\uff0c\u90a3\u4e48widget\u8282\u70b9\u80fd\u591f\u81ea\u52a8\u7684\u8fdb\u884c\u5c06\u5143\u6570\u636e\u8fdb\u884c\u66f4\u65b0\u3002\u8fd9\u4e2a\u4e00\u822c\u91c7\u7528\u7684\u662flistener\u6a21\u5f0f\uff0c\u4e3a\u4e86\u7b80\u4fbf\uff0c\u4e5f\u53ef\u4ee5\u91c7\u7528\u5fc3\u8df3\u7684\u673a\u5236\u8fdb\u884c\u8f6e\u8be2\u3002"),(0,c.kt)("h3",{id:"6-csclient\u9700\u8981\u63d0\u4f9b\u590d\u5236csid1\u6240\u6709\u4e0a\u4e0b\u6587\u4fe1\u606f\u4e3a\u4e00\u4e2a\u65b0\u7684csid2\u7528\u6765\u63d0\u4f9b\u7ed9\u8c03\u5ea6\u6267\u884c\u7684"},"6. CSClient\u9700\u8981\u63d0\u4f9b\u590d\u5236csid1\u6240\u6709\u4e0a\u4e0b\u6587\u4fe1\u606f\u4e3a\u4e00\u4e2a\u65b0\u7684csid2\u7528\u6765\u63d0\u4f9b\u7ed9\u8c03\u5ea6\u6267\u884c\u7684"),(0,c.kt)("p",null,"\u7528\u6237\u4e00\u65e6\u53d1\u5e03\u4e00\u4e2a\u5de5\u7a0b\uff0c\u5c31\u662f\u5e0c\u671b\u5bf9\u8fd9\u4e2a\u5de5\u7a0b\u7684\u6240\u6709\u4fe1\u606f\u8fdb\u884c\u7c7b\u4f3c\u4e8egit\u6253\u4e0a\u4e00\u4e2atag\uff0c\u8fd9\u91cc\u7684\u8d44\u6e90\u6587\u4ef6\u3001\u81ea\u5b9a\u4e49\u53d8\u91cf\u8fd9\u4e9b\u90fd\u662f\u4e0d\u4f1a\u518d\u53d8\u7684\uff0c\u4f46\u662f\u6709\u4e00\u4e9b\u52a8\u6001\u4fe1\u606f\uff0c\u5982\u4ea7\u751f\u7684\u7ed3\u679c\u96c6\u7b49\u8fd8\u662f\u4f1a\u66f4\u65b0csid\u7684\u5185\u5bb9\u3002\u6240\u4ee5csclient\u9700\u8981\u63d0\u4f9b\u4e00\u4e2acsid1\u590d\u5236\u6240\u6709\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u63a5\u53e3\u4ee5\u4f9b\u5fae\u670d\u52a1\u8fdb\u884c\u8c03\u7528"),(0,c.kt)("h2",{id:"clientlistener\u6a21\u5757\u7684\u5b9e\u73b0"},(0,c.kt)("strong",{parentName:"h2"},"ClientListener\u6a21\u5757\u7684\u5b9e\u73b0")),(0,c.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2aclient\u800c\u8a00\uff0c\u6709\u65f6\u5019\u4f1a\u5e0c\u671b\u5728\u5c3d\u5feb\u7684\u65f6\u95f4\u5185\u77e5\u9053\u67d0\u4e00\u4e2acsid\u548ccskey\u5728cs-server\u4e2d\u53d1\u751f\u4e86\u6539\u53d8\uff0c\u4f8b\u5982visualis\u7684csclient\u9700\u8981\u80fd\u591f\u77e5\u9053\u4e0a\u4e00\u4e2asql\u8282\u70b9\u8fdb\u884c\u4e86\u6539\u53d8\uff0c\u90a3\u4e48\u9700\u8981\u88ab\u901a\u77e5\u5230\uff0c\u670d\u52a1\u7aef\u6709\u4e00\u4e2alistener\u6a21\u5757\uff0c\u800c\u5ba2\u6237\u7aef\u4e5f\u9700\u8981\u4e00\u4e2alistener\u6a21\u5757\uff0c\u4f8b\u5982\u4e00\u4e2aclient\u5e0c\u671b\u80fd\u591f\u76d1\u542c\u5230\u67d0\u4e00\u4e2acsid\u7684\u67d0\u4e00\u4e2acskey\u7684\u53d8\u5316\uff0c\u90a3\u4e48\u4ed6\u9700\u8981\u5c06\u8be5cskey\u6ce8\u518c\u5230\u5bf9\u5e94\u7684csserver\u5b9e\u4f8b\u4e2d\u7684callbackEngine\uff0c\u540e\u7eed\u7684\u6bd4\u5982\u6709\u53e6\u5916\u4e00\u4e2aclient\u8fdb\u884c\u66f4\u6539\u4e86\u8be5cskey\u7684\u5185\u5bb9\uff0c\u7b2c\u4e00\u4e2aclient\u8fdb\u884c\u4e86heatbeat\u7684\u65f6\u5019\uff0ccallbackengine\u5c31\u9700\u8981\u5c06\u8fd9\u4e2a\u4fe1\u606f\u901a\u77e5\u5230\u5df2\u7ecfclient\u76d1\u542c\u7684\u6240\u6709cskey\uff0c\u8fd9\u6837\u7684\u8bdd\uff0c\u7b2c\u4e00\u4e2aclient\u5c31\u77e5\u9053\u4e86\u8be5cskey\u7684\u5185\u5bb9\u5df2\u7ecf\u53d1\u751f\u4e86\u53d8\u5316\u3002\u5f53heatbeat\u8fd4\u56de\u6570\u636e\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5c31\u5e94\u8be5\u901a\u77e5\u5230\u6ce8\u518c\u5230ContextClientListenerBus\u7684\u6240\u6709\u7684listener\u8fdb\u884c\u4f7f\u7528on\u65b9\u6cd5"),(0,c.kt)("p",null,(0,c.kt)("img",{src:n(65717).Z})),(0,c.kt)("p",null,(0,c.kt)("img",{src:n(50442).Z})),(0,c.kt)("h2",{id:"gatewayrouter\u7684\u5b9e\u73b0"},(0,c.kt)("strong",{parentName:"h2"},"GatewayRouter\u7684\u5b9e\u73b0")),(0,c.kt)("p",null,"Gateway\u63d2\u4ef6\u5b9e\u73b0Context\u8fdb\u884c\u8f6c\u53d1Gateway\u7684\u63d2\u4ef6\u7684\u8f6c\u53d1\u903b\u8f91\u662f\u901a\u8fc7\u7684GatewayRouter\u8fdb\u884c\u7684\uff0c\u9700\u8981\u5206\u6210\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\uff0c\u7b2c\u4e00\u79cd\u662f\u7533\u8bf7\u4e00\u4e2acontext\u4e0a\u4e0b\u6587\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u65f6\u5019\uff0cCSClient\u643a\u5e26\u7684\u4fe1\u606f\u4e2d\u662f\u6ca1\u6709\u5305\u542bcsid\u7684\u4fe1\u606f\u7684\uff0c\u6b64\u65f6\u7684\u5224\u65ad\u903b\u8f91\u5e94\u8be5\u662f\u901a\u8fc7eureka\u7684\u6ce8\u518c\u4fe1\u606f\uff0c\u7b2c\u4e00\u6b21\u53d1\u9001\u7684\u8bf7\u6c42\u5c06\u4f1a\u968f\u673a\u8fdb\u5165\u5230\u4e00\u4e2a\u5fae\u670d\u52a1\u5b9e\u4f8b\u4e2d\u3002",(0,c.kt)("br",{parentName:"p"}),"\n","\u7b2c\u4e8c\u79cd\u60c5\u51b5\u662f\u643a\u5e26\u4e86ContextID\u7684\u5185\u5bb9\uff0c\u6211\u4eec\u9700\u8981\u5c06csid\u8fdb\u884c\u89e3\u6790\uff0c\u89e3\u6790\u7684\u65b9\u5f0f\u5c31\u662f\u901a\u8fc7\u5b57\u7b26\u4e32\u5207\u5272\u7684\u65b9\u6cd5\uff0c\u83b7\u53d6\u5230\u6bcf\u4e00\u4e2ainstance\u7684\u4fe1\u606f\uff0c\u7136\u540e\u901a\u8fc7instance\u7684\u4fe1\u606f\u901a\u8fc7eureka\u5224\u65ad\u662f\u5426\u8fd8\u5b58\u5728\u8fd9\u4e2a\u5fae\u670d\u52a1\uff0c\u5982\u679c\u662f\u5b58\u5728\u7684\uff0c\u5c31\u5f80\u8fd9\u4e2a\u5fae\u670d\u52a1\u5b9e\u4f8b\u8fdb\u884c\u53d1\u9001"),(0,c.kt)("p",null,(0,c.kt)("img",{src:n(73011).Z})))}d.isMDXComponent=!0},65717:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-client-01-5ac43a6490b0ade1805b1559114fd505.png"},50442:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-client-02-32c82bd9295543a3033264b49eefc385.png"},73011:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-client-03-dbe488b959dc952d4152f5cbbe6d5c84.png"}}]);