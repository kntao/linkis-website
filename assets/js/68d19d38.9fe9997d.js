"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[35693],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return f}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),g=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=g(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=g(n),f=r,s=m["".concat(p,".").concat(f)]||m[f]||k[f]||l;return n?a.createElement(s,i(i({ref:e},d),{},{components:n})):a.createElement(s,i({ref:e},d))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31104:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return g},assets:function(){return d},toc:function(){return k},default:function(){return f}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"How to Download Engine Plugins Not Included in the Installation Package By Default",authors:["Casion"],tags:["engine","guide"]},p=void 0,g={permalink:"/blog/2022/04/15/how-to-download-engineconn-plugin",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/blog/2022-04-15-how-to-download-engineconn-plugin.md",source:"@site/blog/2022-04-15-how-to-download-engineconn-plugin.md",title:"How to Download Engine Plugins Not Included in the Installation Package By Default",description:"This article mainly guides you how to download the non-default engine installation plug-in package corresponding to each version.",date:"2022-04-15T00:00:00.000Z",formattedDate:"April 15, 2022",tags:[{label:"engine",permalink:"/blog/tags/engine"},{label:"guide",permalink:"/blog/tags/guide"}],readingTime:2.91,truncated:!1,authors:[{name:"Casion",title:"Development Engineer of WeBank",url:"https://github.com/casionone/",imageURL:"https://avatars.githubusercontent.com/u/7869972?v=4",key:"Casion"}],prevItem:{title:"Apache Linkis(Incubating) Meep Up",permalink:"/blog/2022/06/09/meetup-content-review"},nextItem:{title:"Implementation of OpenLookEng Engine",permalink:"/blog/2022/03/20/openlookeng"}},d={authorsImageUrls:[void 0]},k=[{value:"1.1.2 \u7248\u672c",id:"112-\u7248\u672c",children:[]},{value:"1.1.1\u7248\u672c",id:"111\u7248\u672c",children:[]},{value:"Version 1.1.0",id:"version-110",children:[]},{value:"Version 1.0.3",id:"version-103",children:[]},{value:"Install Engine Guide",id:"install-engine-guide",children:[]}],m={toc:k};function f(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"This article mainly guides you how to download the non-default engine installation plug-in package corresponding to each version. "))),(0,l.kt)("p",null,"Considering the size of the release package and the use of plug-ins, the binary installation package released by linkis only contains some common engines /hive/spark/python/shell.\nVery useful engine, there are flink/io_file/pipeline/sqoop in the project code (there may be differences between different versions),\nIn order to facilitate everyone's use, based on the release branch code of each version of linkis: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis"},"https://github.com/apache/incubator-linkis"),", this part of the engine is compiled for everyone to choose and use."),(0,l.kt)("h2",{id:"112-\u7248\u672c"},"1.1.2 \u7248\u672c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Engine")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Corresponding component version")),(0,l.kt)("th",{parentName:"tr",align:"left"},"Is there default in the official installation package"),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")),(0,l.kt)("th",{parentName:"tr",align:"left"}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Spark"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.4.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Spark EngineConn. Support SQL, Scala, Pyspark and R code"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Hive"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.3.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Hive EngineConn. Support HiveQL code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Shell"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Shell EngineConn. Support Bash shell code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Python"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Python EngineConn. Support Python code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"JDBC"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"JDBC EngineConn. MySQL and hiveql have been supported, and other engines with jdbc driver package can be quickly extended, such as Oracle."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Flink"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1.12.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flink EngineConn. It supports FlinkSQL code and launching a new Yarn application in the form of Flink jar."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"openLooKeng"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1.5.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"openLooKeng EngineConn. Support SQL query data virtualization engine openlookeng."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sqoop"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1.4.6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sqoop EngineConn. Support data migration tool sqoop engine."),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/engineconn-plugin/1.1.2-engineconn-plugin.tar"},"Non-default engine download link")),(0,l.kt)("h2",{id:"111\u7248\u672c"},"1.1.1\u7248\u672c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Engine")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Corresponding component version")),(0,l.kt)("th",{parentName:"tr",align:"left"},"Is there default in the official installation package"),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")),(0,l.kt)("th",{parentName:"tr",align:"left"}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Spark"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.4.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Spark EngineConn. Support SQL, Scala, Pyspark and R code"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Hive"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.3.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Hive EngineConn. Support HiveQL code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Shell"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Shell EngineConn. Support Bash shell code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Python"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Python EngineConn. Support Python code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"JDBC"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"JDBC EngineConn. MySQL and hiveql have been supported, and other engines with jdbc driver package can be quickly extended, such as Oracle."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Flink"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1.12.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flink EngineConn. It supports FlinkSQL code and launching a new Yarn application in the form of Flink jar."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"openLooKeng"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1.5.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"openLooKeng EngineConn. Support SQL query data virtualization engine openlookeng."),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/engineconn-plugin/1.1.1-engineconn-plugin.tar"},"Non-default engine download link")),(0,l.kt)("h2",{id:"version-110"},"Version 1.1.0"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Engine")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Corresponding component version")),(0,l.kt)("th",{parentName:"tr",align:"left"},"Is there default in the official installation package"),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")),(0,l.kt)("th",{parentName:"tr",align:"left"}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Spark"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.4.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Spark EngineConn. Supports SQL, Scala, Pyspark and R code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Hive"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.3.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"is 1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Hive EngineConn. Supports HiveQL code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Shell"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Shell EngineConn. Supports Bash shell code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Python"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Python EngineConn. Supports python code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"JDBC"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"JDBC EngineConn. Already supports MySQL and HiveQL, and can be quickly extended to support other engines with JDBC Driver packages, such as Oracle."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Flink"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1.12.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flink EngineConn. Supports FlinkSQL code, and also supports launching a new Yarn application in the form of Flink Jar."),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/engineconn-plugin/1.0.1-engineconn-plugin.tar"},"Non-default engine download link")),(0,l.kt)("h2",{id:"version-103"},"Version 1.0.3"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Engine")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Corresponding component version")),(0,l.kt)("th",{parentName:"tr",align:"left"},"Is there default in the official installation package"),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")),(0,l.kt)("th",{parentName:"tr",align:"left"}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Spark"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.4.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Spark EngineConn. Supports SQL, Scala, Pyspark and R code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Hive"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.3.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"is 1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Hive EngineConn. Supports HiveQL code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Shell"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Shell EngineConn. Supports Bash shell code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Python"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Python EngineConn. Supports python code."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"JDBC"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"JDBC EngineConn. Already supports MySQL and HiveQL, and can be quickly extended to support other engines with JDBC Driver packages, such as Oracle."),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Flink"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1.12.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flink EngineConn. Supports FlinkSQL code, and also supports launching a new Yarn application in the form of Flink Jar."),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/engineconn-plugin/1.0.3-engineconn-plugin.tar"},"Non-default engine download link")),(0,l.kt)("h2",{id:"install-engine-guide"},"Install Engine Guide"),(0,l.kt)("p",null,"After downloading the material package of the engine, unzip the package"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"tar -xvf 1.0.3-engineconn-plugin.tar\ncd 1.0.3-engineconn-plugin\n\n")),(0,l.kt)("p",null,"Copy the engine material package to be used to the engine plug-in directory of linkis, and then refresh the engine material."),(0,l.kt)("p",null,"Detailed process reference",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/docs/latest/deployment/engine_conn_plugin_installation"},"Installing EngineConnPlugin engine"),"."))}f.isMDXComponent=!0}}]);