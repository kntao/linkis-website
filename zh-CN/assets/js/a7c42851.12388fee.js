"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[11563],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=i.createContext({}),p=function(e){var t=i.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},o=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),o=p(a),m=n,k=o["".concat(u,".").concat(m)]||o[m]||c[m]||r;return a?i.createElement(k,l(l({ref:t},h),{},{components:a})):i.createElement(k,l({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=o;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}o.displayName="MDXCreateElement"},56826:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return h},default:function(){return o}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),l=["components"],s={title:"Release Notes 1.2.0",sidebar_position:.18},u=void 0,p={unversionedId:"release-notes-1.2.0",id:"release-notes-1.2.0",title:"Release Notes 1.2.0",description:"Apache Linkis(incubating) 1.2.0 \u5305\u62ec\u6240\u6709 Project Linkis-1.2.0.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-download/current/release-notes-1.2.0.md",sourceDirName:".",slug:"/release-notes-1.2.0",permalink:"/zh-CN/download/release-notes-1.2.0",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/release-notes-1.2.0.md",tags:[],version:"current",sidebarPosition:.18,frontMatter:{title:"Release Notes 1.2.0",sidebar_position:.18},sidebar:"defaultSidebar",previous:{title:"\u7248\u672c\u5217\u8868",permalink:"/zh-CN/download/main"},next:{title:"Release Notes 1.1.3",permalink:"/zh-CN/download/release-notes-1.1.3"}},h=[{value:"\u65b0\u7279\u6027",id:"\u65b0\u7279\u6027",children:[],level:2},{value:"Enhancement",id:"enhancement",children:[],level:2},{value:"Bugs Fix",id:"bugs-fix",children:[],level:2},{value:"Security related",id:"security-related",children:[],level:2},{value:"Dependency changes",id:"dependency-changes",children:[],level:2},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",children:[],level:2}],c={toc:h};function o(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Linkis(incubating) 1.2.0 \u5305\u62ec\u6240\u6709 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/projects/12"},"Project Linkis-1.2.0"),"."),(0,r.kt)("p",null,"Linkis 1.2.0 \u7248\u672c\u53d1\u5e03\u4e3b\u8981\u652f\u6301Presto\u548cElasticSearch\u5f15\u64ce\uff0c\u540c\u65f6\u589e\u5f3a\u4e86JDBC\u5f15\u64ce\uff0c\u652f\u6301\u914d\u7f6e\u591a\u6570\u636e\u6e90\uff0c\u652f\u6301\u5728web\u4e0a\u663e\u793a\u5f15\u64ce\u7684\u5386\u53f2\u4fe1\u606f\uff0c\u51cf\u5c11\u548c\u4f18\u5316Linkis\u6a21\u5757\uff0c\u6539\u8fdb\u90e8\u5206\u5f15\u64ce\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u5e76\u8fdb\u884c\u4e86\u5927\u91cf\u7684bug\u4fee\u590d\u548c\u529f\u80fd\u6539\u8fdb\u3002"),(0,r.kt)("p",null,"\u4e3b\u8981\u529f\u80fd\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 Presto \u5f15\u64ce\u548c ElasticSearch \u5f15\u64ce"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u5f3a\u4e86 JDBC \u5f15\u64ce\uff0c\u652f\u6301\u914d\u7f6e\u591a\u6570\u636e\u6e90"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5728 web \u4e0a\u663e\u793a\u5f15\u64ce\u7684\u5386\u53f2\u4fe1\u606f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("p",null,"\u7f29\u5199\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"COMMON: Linkis Common"),(0,r.kt)("li",{parentName:"ul"},"EC: Engineconn"),(0,r.kt)("li",{parentName:"ul"},"ECM: EngineConnManager"),(0,r.kt)("li",{parentName:"ul"},"ECP: EngineConnPlugin"),(0,r.kt)("li",{parentName:"ul"},"DMS: Data Source Manager Service"),(0,r.kt)("li",{parentName:"ul"},"MDS: MetaData Manager Service"),(0,r.kt)("li",{parentName:"ul"},"LM: Linkis Manager"),(0,r.kt)("li",{parentName:"ul"},"PS: Linkis Public Service"),(0,r.kt)("li",{parentName:"ul"},"PE: Linkis Public Enhancement"),(0,r.kt)("li",{parentName:"ul"},"RPC: Linkis Common RPC"),(0,r.kt)("li",{parentName:"ul"},"CG: Linkis Computation Governance")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u65b0\u7279\u6027"},"\u65b0\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","ECP-PRESTO]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1631"},"[LINKIS-1631]")," \u589e\u5f3aPresto\u5f15\u64ce\uff0c\u9002\u914dLinkis 1.X \u67b6\u6784"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-ES]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1632"},"[LINKIS-1632]")," \u589e\u5f3aElasticSearch\u5f15\u64ce, \u9002\u914dLinkis 1.X \u67b6\u6784"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2092"},"[LINKIS-2092]")," Linkis JDBC\u5f15\u64ce\u652f\u6301\u591a\u4e2a\u6570\u636e\u6e90\u94fe\u63a5"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2191"},"[LINKIS-2191]")," \u4e3a\u6240\u6709\u670d\u52a1\u6dfb\u52a0\u79bb\u7ebf\u516c\u5171rest api"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2222"},"[LINKIS-2222]")," \u5355\u94fe\u8def\u5165\u53e3\u4efb\u52a1\u6307\u6807\u6536\u96c6"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2227"},"[LINKIS-2227]")," \u6dfb\u52a0ECR\u5386\u53f2\u67e5\u8be2\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},"[","WEB]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2227"},"[LINKIS-2227]")," \u652f\u6301\u663e\u793a\u5f15\u64ce\u5386\u53f2\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2257"},"[LINKIS-2257]")," \u7f51\u5173\u652f\u6301\u8f6c\u53d1\u4e0e\u5165\u53e3\u975e\u6267\u884c\u76f8\u5173\u7684\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2258"},"[LINKIS-2258]")," \u589e\u52a0\u4e86\u5728\u5165\u53e3\u8fdb\u7a0b\u6b63\u5e38\u9000\u51fa\u65f6\u6e05\u7406\u8fd0\u884c\u4efb\u52a1\u7684\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2277"},"[LINKIS-2277]")," \u5728\u5de5\u4f5c\u533a\u4e2d\uff0c\u6587\u4ef6\u53ef\u4ee5\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u6587\u4ef6\u5939"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2288"},"[LINKIS-2288]")," \u589e\u52a0\u672a\u5b8c\u6210\u4efb\u52a1\u67e5\u8be2\u754c\u9762"),(0,r.kt)("li",{parentName:"ul"},"[","CG]","[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2291"},"[LINKIS-2291]")," \u5165\u53e3\u652f\u6301\u8def\u7531\u6807\u7b7e\u9694\u79bb"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]","[","CG]","[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2320"},"[LINKIS-2320]")," \u5165\u53e3\u589e\u52a0\u4e86restful\u63a5\u53e3\u6765\u652f\u6301\u4fee\u6539\u8def\u7531\u6807\u7b7e"),(0,r.kt)("li",{parentName:"ul"},"[","CG]","[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2326"},"[LINKIS-2326]")," Linkis\u4efb\u52a1\u652f\u6301\u81ea\u52a8\u91cd\u8bd5"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2366"},"[LINKIS-2366]")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2434"},"[LINKIS-2434]")," \u652f\u6301 knif4j"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2392"},"[LINKIS-2392]")," JDBC\u5f15\u64ce\u652f\u6301trino"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2415"},"[LINKIS-2415]")," \u652f\u6301\u53d8\u91cf\u64cd\u4f5c")),(0,r.kt)("h2",{id:"enhancement"},"Enhancement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1411"},"[LINKIS-1411]")," \u79fb\u9664 sun.misc.BASE64"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1475"},"[LINKIS-1475]")," \u4f18\u5316\u4ee3\u7801\u98ce\u683c"),(0,r.kt)("li",{parentName:"ul"},"[","LM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1763"},"[LINKIS-1763]")," \u5c06\u975e\u7a7a\u9a8c\u8bc1\u6dfb\u52a0\u5230\u5e94\u7528\u5217\u8868\u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1824"},"[LINKIS-1824]")," \u5c06commons-lang\u66f4\u65b0\u4e3acommons-lang3"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]","[","CG]","[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2077"},"[LINKIS-2077]")," \u4f18\u5316\u4e3a\u4fee\u6539\u7ba1\u7406\u63a7\u5236\u53f0\u53c2\u6570\u540e\u81ea\u52a8\u5237\u65b0\u6240\u6709LinkisManager\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"[","DMS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2082"},"[LINKIS-2082]")," \u6570\u636e\u6e90\u7ba1\u7406\u6a21\u5757\u4f18\u5316"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2140"},"[LINKIS-2140]")," JDBC\u5f15\u64ce\u4e2dJDBC\u8fde\u63a5\u53c2\u6570\u7684\u4e00\u81f4\u8c03\u6574"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2141"},"[LINKIS-2141]")," \u5728JDBC\u5f15\u64ce\u4e2d\u5c06dbcp\u4fee\u6539\u4e3adruid"),(0,r.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2193"},"[LINKIS-2193]")," \u6dfb\u52a0\u4f18\u96c5\u5347\u7ea7\u811a\u672c"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2194"},"[LINKIS-2194]")," \u53d6\u6d88JDBC\u5f15\u64ceConnectionManager.java\u4e2d\u652f\u6301\u7684ddb\uff0c\u5e76\u6dfb\u52a0\u53c2\u6570wds.links.jdbc.driver"),(0,r.kt)("li",{parentName:"ul"},"[","DMS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2212"},"[LINKIS-2212]")," \u4e3aLinkisDataSourceRemoteClient\u6dfb\u52a0\u9ed8\u8ba4\u7684DWSClientConfig\u6784\u9020\u51fd\u6570\uff0c\u4ee5\u7b80\u5316\u5185\u90e8\u5fae\u670d\u52a1\u8c03\u7528\u6570\u636e\u6e90\u670d\u52a1\u7684\u5ba2\u6237\u7aefAPI"),(0,r.kt)("li",{parentName:"ul"},"[","ECP]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2214"},"[LINKIS-2214]")," \u5728\u5f15\u64ce\u6750\u8d28\u5237\u65b0\u754c\u9762\u4e2d\uff0crefeshAll\u548crefresh\u88ab\u4fee\u6539\u4e3arefresshAll\u548crefresh"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-PYTHON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2216"},"[LINKIS-2216]")," python plt show\u65b9\u6cd5\u76f4\u63a5\u652f\u6301\u663e\u793a"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2217"},"[LINKIS-2217]")," \u589e\u52a0\u4e86trino\u5f15\u64ce\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"[","CG]","[","ECP]","[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2264"},"[LINKIS-2264]")," \u6a21\u5757\u4f18\u5316\u53ef\u4ee5\u51cf\u5c11\u6a21\u5757\u6570\u91cf"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2278"},"[LINKIS-2278]")," \u4e3aJDBC\u5f15\u64ce\u589e\u52a0\u6d4b\u8bd5\u7528\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2293"},"[LINKIS-2293]")," \u5728install.sh\u4e2d\u6dfb\u52a0\u7aef\u53e3\u68c0\u67e5"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2299"},"[LINKIS-2299]")," \u6dfb\u52a0\u5185\u7f6e\u53d8\u91cfrun_today_h\u548crun_today_h_std"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2344"},"[LINKIS-2344]")," \u4f18\u5316\u5143\u6570\u636eSQL"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2352"},"[LINKIS-2352]")," \u4f18\u5316CS\u6a21\u5757\uff0c\u51cf\u5c11\u6a21\u5757\u6570\u91cf"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2362"},"[LINKIS-2362]")," \u5c06link-engineeconn-plugin-framework\u79fb\u52a8\u5230link-cg\u6a21\u5757"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2368"},"[LINKIS-2368]")," \u81ea\u52a8\u4e3a\u65b0\u6dfb\u52a0\u7684\u7528\u6237\u521b\u5efa\u5de5\u4f5c\u533a"),(0,r.kt)("li",{parentName:"ul"},"[","PACKAGE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2374"},"[LINKIS-2374]")," \u4f18\u5316Linkis assamble-combined-package\u6a21\u5757"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2396"},"[LINKIS-2396]")," \u5220\u9664\u5df2\u5f03\u7528\u7684Logging\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-SPARK]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2405"},"[LINKIS-2405]")," \u652f\u6301scala spark\u591a\u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-SPARK]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2419"},"[LINKIS-2419]")," \u5220\u9664\u914d\u7f6eSPARK_SCALA_VERSION\u5e76\u4eceenv\u4e2d\u83b7\u53d6scala\u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2441"},"[LINKIS-2441]")," Knife4j\u63a5\u53e3\u6587\u6863"),(0,r.kt)("li",{parentName:"ul"},"[","PE-BML]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2450"},"[LINKIS-2450]")," \u5f53\u66f4\u65b0\u5f15\u64ce\u6750\u6599\u65f6\uff0c\u65b0\u7684\u5b58\u50a8\u8def\u5f84\u5c06\u5f97\u5230\u4f18\u5316"),(0,r.kt)("li",{parentName:"ul"},"[","PE-BML]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2475"},"[LINKIS-2475]")," \u4fee\u590d\u5305\u540d\u5927\u5c0f\u5199\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2477"},"[LINKIS-2477]")," \u4f18\u5316\u5efa\u7acblink-cg-engineeconnplugin\u7684\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"[","CG]","[","ECP]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2479"},"[LINKIS-2479]")," \u7ec8\u6b62ECM\u5f15\u64ce\u65f6\u9700\u8981\u540c\u65f6\u7ec8\u6b62yarn appid"),(0,r.kt)("li",{parentName:"ul"},"[","MDS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2481"},"[LINKIS-2481]")," Linkis-metadat-query-service-hive\u5305\u540d\u4fee\u6539"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]","[","CG]","[","GATEWAY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2496"},"[LINKIS-2496]")," \u4f18\u5316\u91cd\u6784\u5165\u53e3bean\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]","[","CG]","[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2508"},"[LINKIS-2508]")," \u652f\u6301\u9ad8\u5e76\u53d1\u6027\u7684\u7279\u6027\u4f18\u5316"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-PRESTO]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2512"},"[LINKIS-2512]")," \u4f18\u5316presto\u5f15\u64ce"),(0,r.kt)("li",{parentName:"ul"},"[","WEB]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2524"},"[LINKIS-2524]")," \u5c06web\u91cd\u547d\u540d\u4e3alinkis-web"),(0,r.kt)("li",{parentName:"ul"},"[","PE-BML]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2531"},"[LINKIS-2531]")," \u66f4\u65b0VersionServiceImplTest"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2549"},"[LINKIS-2549]")," \u5728\u811a\u672c\u6267\u884c\u540e\u8f93\u51fa\u7ed3\u679c\u96c6\u65f6\uff0c\u4f18\u5316\u7ed3\u679c\u96c6\u7684\u8bfb\u53d6\u6548\u7387"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-SPARK]","[","TEST]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2617"},"[LINKIS-2617]"),"\u4e3a\u5de5\u5382\u542f\u52a8\u6269\u5c55\u6dfb\u52a0\u6d4b\u8bd5\u7528\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2618"},"[LINKIS-2618]")," \u4f18\u5316\u6a21\u5757\u548c\u63d2\u4ef6\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-SHELL]","[","TEST]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2620"},"[LINKIS-2620]")," \u4e3a\u5916\u58f3\u5f15\u64ce\u6dfb\u52a0\u6d4b\u8bd5\u7528\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"[","ECP]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2628"},"[LINKIS-2628]")," \u5c06EC Yarn\u5e94\u7528\u65e5\u5fd7\u6253\u5370\u5230\u4e00\u4e2a\u5355\u72ec\u7684\u65e5\u5fd7\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"[","PE-BML]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2633"},"[LINKIS-2633]")," rollbackversion\u51fd\u6570\u4fee\u6539\u5927\u5199"),(0,r.kt)("li",{parentName:"ul"},"[","PACKAGE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2635"},"[LINKIS-2635]")," \u6dfb\u52a01.2.0_schema\u6587\u4ef6\u8bb0\u5f55\u4ee5\u66f4\u65b0\u5bf91.2.0\u7684\u66f4\u6539"),(0,r.kt)("li",{parentName:"ul"},"[","PACKAGE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2679"},"[LINKIS-2679]")," \u4f18\u5316\u9ed8\u8ba4\u961f\u5217\uff0c\u4ee5\u53ca\u51cf\u5c11dml\u4e2dhive\u9ed8\u8ba4\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2741"},"[LINKIS-2741]")," ConnectionManager\u4e2d\u7684\u8fde\u63a5\u7f13\u5b58\u6c60\u952e\u503c\u5c06\u8c03\u6574\u4e3a\u6570\u636e\u6e90\u540d\u79f0\u548c\u7248\u672c\u53f7"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-JDBC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2743"},"[LINKIS-2743]")," JDBC\u6570\u636e\u6e90\u914d\u7f6e\u4f18\u5148\u7ea7\u5b9a\u4e49")),(0,r.kt)("h2",{id:"bugs-fix"},"Bugs Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","PS-RM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1850"},"[LINKIS-1850]")," \u4fee\u590dNPE\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1879"},"[LINKIS-1879]")," FileWriter\u548cBufferedWriter\u5728finally\u5b50\u53e5\u4e2d\u6ca1\u6709\u5173\u95ed"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/1911"},"[LINKIS-1911]")," \u4fee\u590dlink-computing-client\u63d0\u4ea4\u4f5c\u4e1a\u5931\u8d25\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2040"},"[LINKIS-2040]")," \u4fee\u590dHDFSCacheLogWriter getOutPutStream NPE\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","DMS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2255"},"[LINKIS-2255]")," \u5f53\u4ece\u5355\u4e2a\u6570\u636e\u6e90\u67e5\u8be2\u4fe1\u606f\u65f6\uff0c\u5c06\u4e22\u5931\u8fc7\u671f\u5b57\u6bb5"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2269"},"[LINKIS-2269]")," \u4fee\u590d ddl sql bug"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2314"},"[LINKIS-2314]")," \u4fee\u590dAbstractDiscovery delayTime\u8ba1\u7b97\u9519\u8bef"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-HIVE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2321"},"[LINKIS-2321]")," \u5bf9\u4e8ehive on tez\u4efb\u52a1\uff0c\u53d6\u6d88\u4efb\u52a1\u65f6\u65e0\u6cd5\u6b63\u786e\u7ed3\u675f\u4efb\u52a1"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2346"},"[LINKIS-2346]")," \u4fee\u590d\u4e86\u7ba1\u7406\u5458\u7528\u6237\u83b7\u53d6\u8868\u800c\u4e0d\u8fd4\u56de\u6240\u6709\u8868\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","RPC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2370"},"[LINKIS-2370]")," \u4fee\u590dlinkis-rpc messageUtils.orderIsLast\u4e0d\u6b63\u786e"),(0,r.kt)("li",{parentName:"ul"},"[","LM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2372"},"[LINKIS-2372]")," \u4fee\u590d\u4e86LM ec\u5386\u53f2restful\u7684bug"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2273"},"[LINKIS-2273]"),"\u6570\u636e\u6e90\u7f16\u8f91\u8868\u5355\u652f\u6301\u4e2d\u6587\u548c\u82f1\u6587"),(0,r.kt)("li",{parentName:"ul"},"[","PACKAGE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2389"},"[LINKIS-2389]")," \u4fee\u590d\u4e86\u6253\u5305\u540elinks-ps-metadataquery\u6a21\u5757\u4e2d\u7f3a\u5931\u7684bug"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2412"},"[LINKIS-2412]")," \u4fee\u590d\u67e5\u8be2ECM\u5386\u53f2\u65f6\uff0c\u6743\u9650\u7ba1\u7406\u5931\u8d25\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2418"},"[LINKIS-2418]")," \u4fee\u590d\u4e86\u5c06\u4e0d\u5b89\u5168\u7684SimpleDateFormat\u7ebf\u7a0b\u7528\u4f5c\u5168\u5c40\u53d8\u91cf\u65f6\u65e0\u6cd5\u6b63\u5e38\u7ffb\u8f6c\u4efb\u52a1\u72b6\u6001\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","MDS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2435"},"[LINKIS-2435]")," \u4fee\u590d\u4e86mysql\u5143\u6570\u636e\u67e5\u8be2\u7684NPE\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","GATEWAY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2454"},"[LINKIS-2454]")," \u5f53\u5728\u672c\u5730\u8c03\u8bd5link-gateway\u65f6\uff0c\u4e0eknife4j\u76f8\u5173\u7684\u7c7b\u4f9d\u8d56\u51b2\u7a81"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2456"},"[LINKIS-2456]")," \u4fee\u590d\u6d4b\u8bd5bug"),(0,r.kt)("li",{parentName:"ul"},"[","ECM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2469"},"[LINKIS-2469]")," ECM logOperator\u4f7f\u7528\u9519\u8bef\u7684\u5206\u9694\u7b26\u6765\u83b7\u53d6\u65e5\u5fd7\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2470"},"[LINKIS-2470]")," \u4e0a\u4f20\u6587\u4ef6\u4e2d\u6587\u540d\u79f0\u4e71\u7801"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2471"},"[LINKIS-2471]")," Orchestrator\u652f\u6301\u4efb\u52a1\u7b49\u5f85\u8d85\u65f6"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2472"},"[LINKIS-2472]")," \u5f53\u6570\u636e\u4e3a\u7a7a\u65f6\u629b\u51fa\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-SPARK]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2488"},"[LINKIS-2488]")," \u4fee\u590dCsvRelation\u7c7b\u65e0\u6cd5\u5e8f\u5217\u5316\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2506"},"[LINKIS-2506]")," \u5347\u7ea71.1.1 ddl \u8bed\u53e5\u7f3a\u5931 engine=innodb default charset=utf8"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2535"},"[LINKIS-2535]")," \u4fee\u590d\u8c03\u7528ExceptionUtils.getStackTrace NPE\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","PE-BML]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2543"},"[LINKIS-2543]")," \u4fee\u590dps_bml_resources_version\u63d2\u5165\u65b0\u7248\u672c\u7f3a\u5931\u4e00\u4e9b\u4fe1\u606f\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","CG]","[","MDS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2547"},"[LINKIS-2547]")," \u4fee\u590dMetadataQuery sql\u8bed\u6cd5\u9519\u8bef\u548cLockManagerMapper\u65b9\u6cd5\u8fc7\u8f7d\u7684bug"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2559"},"[LINKIS-2559]")," \u4fee\u590d\u53d8\u91cf\u66ff\u6362\u9519\u8bef"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-PRESTO]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2596"},"[LINKIS-2596]")," \u4fee\u590d\u4e86\u7f16\u8bd1\u5305\u65f6\u7f3a\u5c11\u4f9d\u8d56\u5173\u7cfb\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-ES]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2603"},"[LINKIS-2603]")," \u4fee\u590dES\u5f15\u64ceNoSuchMethodError"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-ES]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2604"},"[LINKIS-2604]")," \u4fee\u590dES\u5f15\u64ceNumberFormatException"),(0,r.kt)("li",{parentName:"ul"},"[","PE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2614"},"[LINKIS-2614]")," \u4fee\u590d\u4e86\u7531\u5ba2\u6237\u7aef\u8bf7\u6c42\u5f15\u8d77\u7684NPE\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2631"},"[LINKIS-2631]")," \u4fee\u590d\u6b7b\u5faa\u73af\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"[","ECP-SHELL]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2654"},"[LINKIS-2654]")," \u4fee\u590d\u4e86ShellEngineConnExecutor\u7684\u6d4b\u8bd5\u7528\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"[","LM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2688"},"[LINKIS-2688]")," \u5347\u7ea7flink ec\u7684\u9ed8\u8ba4EngineType\u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"[","TOOL]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2701"},"[LINKIS-2701]")," \u4fee\u590dgithub repos\u9875\u9762\u7684\u8bb8\u53ef\u8bc1\u663e\u793a\u4e0e\u672a\u77e5\u7684\u8bb8\u53ef\u8bc1\u53d1\u73b0")),(0,r.kt)("h2",{id:"security-related"},"Security related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","SPRING]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2395"},"[LINKIS-2395]")," SynchronossPartHttpMessageReader\u5e94\u8be5\u53ea\u5728\u9700\u8981\u65f6\u521b\u5efa\u4e34\u65f6\u76ee\u5f55(CVE-2022-2296)")),(0,r.kt)("h2",{id:"dependency-changes"},"Dependency changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","COMMON]","[","CG]","[","ECP]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2301"},"[LINKIS-2301]")," \u66f4\u65b0\u4f9d\u8d56\u5173\u7cfb\u4ee5\u4fee\u590dCVE"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/issues/2452"},"[LINKIS-2452]")," oshi-core \u7248\u672c\u5347\u7ea7")),(0,r.kt)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,r.kt)("p",null,"Apache Linkis(incubating) 1.2.0\u7684\u53d1\u5e03\u79bb\u4e0d\u5f00Linkis\u793e\u533a\u7684\u8d21\u732e\u8005\uff0c\u611f\u8c22\u6240\u6709\u7684\u793e\u533a\u8d21\u732e\u8005\uff0c\u5305\u62ec\u4f46\u4e0d\u4ec5\u9650\u4e8e\u4ee5\u4e0bContributors\uff08\u6392\u540d\u4e0d\u53d1\u5148\u540e\uff09: CCweixiao, Dlimeng, QuintinTao, WenxiangFan, aiceflower, barry8023, binbinCheng, casionone, duhanmin, gabeng1996, huangKai-2323, huapan123456, huiyuanjjjjuice, hunter-cloud09, jackxu2011, legendtkl, liangqilang, liuyou2, mindflow94, peacewong, ruY9527, seedscoder, wForget, yyuser5201314"))}o.isMDXComponent=!0}}]);