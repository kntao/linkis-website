"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[2617],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),y=s(r),f=a,w=y["".concat(u,".").concat(f)]||y[f]||p[f]||i;return r?n.createElement(w,c(c({ref:t},l),{},{components:r})):n.createElement(w,c({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=y;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},483:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return y}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),c=["components"],o={title:"\u7f51\u5173 Gateway \u67b6\u6784",sidebar_position:1},u=void 0,s={unversionedId:"architecture/microservice_governance_services/gateway",id:"architecture/microservice_governance_services/gateway",isDocsHomePage:!1,title:"\u7f51\u5173 Gateway \u67b6\u6784",description:"Gateway \u67b6\u6784\u8bbe\u8ba1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/microservice_governance_services/gateway.md",sourceDirName:"architecture/microservice_governance_services",slug:"/architecture/microservice_governance_services/gateway",permalink:"/zh-CN/docs/1.0.3/architecture/microservice_governance_services/gateway",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/architecture/microservice_governance_services/gateway.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u7f51\u5173 Gateway \u67b6\u6784",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.0.3/architecture/microservice_governance_services/overview"},next:{title:"EngineConn \u65b0\u589e\u6d41\u7a0b",permalink:"/zh-CN/docs/1.0.3/architecture/add_an_engine_conn"}},l=[{value:"Gateway \u67b6\u6784\u8bbe\u8ba1",id:"gateway-\u67b6\u6784\u8bbe\u8ba1",children:[{value:"\u6574\u4f53\u67b6\u6784\u793a\u610f\u56fe",id:"\u6574\u4f53\u67b6\u6784\u793a\u610f\u56fe",children:[]}]}],p={toc:l};function y(e){var t=e.components,o=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gateway-\u67b6\u6784\u8bbe\u8ba1"},"Gateway \u67b6\u6784\u8bbe\u8ba1"),(0,i.kt)("h4",{id:"\u7b80\u8ff0"},"\u7b80\u8ff0"),(0,i.kt)("p",null,"Gateway\u7f51\u5173\u662fLinkis\u63a5\u53d7\u5ba2\u6237\u7aef\u4ee5\u53ca\u5916\u90e8\u8bf7\u6c42\u7684\u9996\u8981\u5165\u53e3\uff0c\u4f8b\u5982\u63a5\u6536\u4f5c\u4e1a\u6267\u884c\u8bf7\u6c42\uff0c\u800c\u540e\u5c06\u6267\u884c\u8bf7\u6c42\u8f6c\u53d1\u5230\u5177\u4f53\u7684\u7b26\u5408\u6761\u4ef6\u7684Entrance\u670d\u52a1\u4e2d\u53bb\u3002\n\u6574\u4e2a\u67b6\u6784\u5e95\u5c42\u57fa\u4e8eSpringCloudGateway\u505a\u6269\u5c55\u5b9e\u73b0\uff0c\u4e0a\u5c42\u53e0\u52a0\u4e86\u4e0eHttp\u8bf7\u6c42\u89e3\u6790\uff0c\u4f1a\u8bdd\u6743\u9650\uff0c\u6807\u7b7e\u8def\u7531\u548cWebSocket\u591a\u8def\u8f6c\u53d1\u7b49\u76f8\u5173\u7684\u6a21\u7ec4\u8bbe\u8ba1\uff0c\u6574\u4f53\u67b6\u6784\u53ef\u89c1\u5982\u4e0b\u3002"),(0,i.kt)("h3",{id:"\u6574\u4f53\u67b6\u6784\u793a\u610f\u56fe"},"\u6574\u4f53\u67b6\u6784\u793a\u610f\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Gateway\u6574\u4f53\u67b6\u6784\u793a\u610f\u56fe",src:r(582).Z})),(0,i.kt)("h4",{id:"\u67b6\u6784\u8bf4\u660e"},"\u67b6\u6784\u8bf4\u660e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"gateway-core: Gateway\u7684\u6838\u5fc3\u63a5\u53e3\u5b9a\u4e49\u6a21\u5757\uff0c\u4e3b\u8981\u5b9a\u4e49\u4e86GatewayParser\u548cGatewayRouter\u63a5\u53e3\uff0c\u5206\u522b\u5bf9\u5e94\u8bf7\u6c42\u7684\u89e3\u6790\u548c\u6839\u636e\u8bf7\u6c42\u8fdb\u884c\u8def\u7531\u9009\u62e9\uff1b\u540c\u65f6\u8fd8\u63d0\u4f9b\u4e86SecurityFilter\u7684\u6743\u9650\u6821\u9a8c\u5de5\u5177\u7c7b\u3002"),(0,i.kt)("li",{parentName:"ul"},"spring-cloud-gateway: \u8be5\u6a21\u5757\u96c6\u6210\u4e86\u6240\u6709\u4e0eSpringCloudGateway\u76f8\u5173\u7684\u4f9d\u8d56\uff0c\u5bf9HTTP\u548cWebSocket\u4e24\u79cd\u534f\u8bae\u7c7b\u578b\u7684\u8bf7\u6c42\u5206\u522b\u8fdb\u884c\u4e86\u5904\u7406\u8f6c\u53d1\u3002"),(0,i.kt)("li",{parentName:"ul"},"gateway-server-support: Gateway\u7684\u670d\u52a1\u9a71\u52a8\u6a21\u5757\uff0c\u4f9d\u8d56spring-cloud-gateway\u6a21\u5757\uff0c\u5bf9GatewayParser\u3001GatewayRouter\u5206\u522b\u505a\u4e86\u5b9e\u73b0\uff0c\u5176\u4e2dDefaultLabelGatewayRouter\u63d0\u4f9b\u4e86\u8bf7\u6c42\u6807\u7b7e\u8def\u7531\u7684\u529f\u80fd\u3002"),(0,i.kt)("li",{parentName:"ul"},"gateway-httpclient-support: \u63d0\u4f9b\u4e86Http\u8bbf\u95eeGateway\u670d\u52a1\u7684\u5ba2\u6237\u7aef\u901a\u7528\u7c7b\uff0cz\u53ef\u4ee5\u57fa\u4e8e\u505a\u591a\u5b9e\u73b0\u3002"),(0,i.kt)("li",{parentName:"ul"},"instance-label: \u5916\u8054\u7684\u5b9e\u4f8b\u6807\u7b7e\u6a21\u5757\uff0c\u63d0\u4f9bInsLabelService\u670d\u52a1\u63a5\u53e3\uff0c\u7528\u4e8e\u8def\u7531\u6807\u7b7e\u7684\u521b\u5efa\u4ee5\u53ca\u4e0e\u5e94\u7528\u5b9e\u4f8b\u5173\u8054\u3002")),(0,i.kt)("p",null,"\u6d89\u53ca\u7684\u8be6\u7ec6\u8bbe\u8ba1\u5982\u4e0b\uff1a"),(0,i.kt)("h4",{id:"\u4e00\u8bf7\u6c42\u8def\u7531\u8f6c\u53d1\u5e26\u6807\u7b7e\u4fe1\u606f"},"\u4e00\u3001\u8bf7\u6c42\u8def\u7531\u8f6c\u53d1\uff08\u5e26\u6807\u7b7e\u4fe1\u606f\uff09"),(0,i.kt)("p",null,"\u8bf7\u6c42\u7684\u94fe\u8def\u9996\u5148\u7ecfSpringCloudGateway\u7684Dispatcher\u5206\u53d1\u540e\uff0c\u8fdb\u5165\u7f51\u5173\u7684\u8fc7\u6ee4\u5668\u94fe\u8868\uff0c\u8fdb\u5165GatewayAuthorizationFilter \u548c SpringCloudGatewayWebsocketFilter \u4e24\u5927\u8fc7\u6ee4\u5668\u903b\u8f91\uff0c\u8fc7\u6ee4\u5668\u96c6\u6210\u4e86DefaultGatewayParser\u548cDefaultGatewayRouter\u3002\n\u4eceParser\u5230Router\uff0c\u6267\u884c\u76f8\u5e94\u7684parse\u548croute\u65b9\u6cd5\uff0cDefaultGatewayParser\u548cDefaultGatewayRouter\u5185\u90e8\u8fd8\u5305\u542b\u4e86\u81ea\u5b9a\u4e49\u7684Parser\u548cRouter\uff0c\u6309\u7167\u4f18\u5148\u7ea7\u987a\u5e8f\u6267\u884c\u3002\u6700\u540e\u7531DefaultGatewayRouter\u8f93\u51fa\u8def\u7531\u9009\u4e2d\u7684\u670d\u52a1\u5b9e\u4f8bServiceInstance\uff0c\u4ea4\u7531\u4e0a\u5c42\u8fdb\u884c\u8f6c\u53d1\u3002\n\u73b0\u6211\u4eec\u4ee5\u5177\u6709\u6807\u7b7e\u4fe1\u606f\u7684\u4f5c\u4e1a\u6267\u884c\u8bf7\u6c42\u8f6c\u53d1\u4e3a\u4f8b\u5b50\uff0c\u7ed8\u5236\u5982\u4e0b\u6d41\u7a0b\u56fe\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Gateway\u8bf7\u6c42\u8def\u7531\u8f6c\u53d1",src:r(3938).Z})),(0,i.kt)("h4",{id:"\u4e8cwebsocket\u8fde\u63a5\u8f6c\u53d1\u7ba1\u7406"},"\u4e8c\u3001WebSocket\u8fde\u63a5\u8f6c\u53d1\u7ba1\u7406"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0bSpringCloudGateway\u5bf9WebSocket\u8bf7\u6c42\u53ea\u505a\u4e00\u6b21\u8def\u7531\u8f6c\u53d1\uff0c\u65e0\u6cd5\u505a\u52a8\u6001\u7684\u5207\u6362\uff0c\u800c\u5728Linkis Gateway\u67b6\u6784\u4e0b\uff0c\u6bcf\u6b21\u4fe1\u606f\u7684\u4ea4\u4e92\u90fd\u4f1a\u9644\u5e26\u76f8\u5e94\u7684uri\u5730\u5740\uff0c\u5f15\u5bfc\u8def\u7531\u5230\u4e0d\u540c\u7684\u540e\u7aef\u670d\u52a1\u3002\n\u9664\u4e86\u8d1f\u8d23\u4e0e\u524d\u7aef\u3001\u5ba2\u6237\u7aef\u8fde\u63a5\u7684webSocketService\u4ee5\u53ca\u8d1f\u8d23\u548c\u540e\u53f0\u670d\u52a1\u8fde\u63a5\u7684webSocketClient, \u4e2d\u95f4\u4f1a\u7f13\u5b58\u4e00\u7cfb\u5217GatewayWebSocketSessionConnection\u5217\u8868\uff0c\u4e00\u4e2aGatewayWebSocketSessionConnection\u4ee3\u8868\u4e00\u4e2asession\u4f1a\u8bdd\u4e0e\u591a\u4e2a\u540e\u53f0ServiceInstance\u7684\u8fde\u63a5\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Gateway\u7684WebSocket\u8f6c\u53d1\u7ba1\u7406",src:r(1103).Z})))}y.isMDXComponent=!0},3938:function(e,t,r){t.Z=r.p+"assets/images/gateway_server_dispatcher-ce66a27f48471f0994f7feeb32905040.png"},582:function(e,t,r){t.Z=r.p+"assets/images/gateway_server_global-539468b0405575fe0f839e1123363f57.png"},1103:function(e,t,r){t.Z=r.p+"assets/images/gatway_websocket-4a05c765228df17003fc4d90d65b2fbe.png"}}]);