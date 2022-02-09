"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[4827],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return m}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(i),m=a,k=h["".concat(s,".").concat(m)]||h[m]||c[m]||r;return i?n.createElement(k,l(l({ref:t},u),{},{components:i})):n.createElement(k,l({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},91685:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var n=i(87462),a=i(63366),r=(i(67294),i(3905)),l=["components"],o={title:"Release Notes 1.0.3",sidebar_position:9},s=void 0,p={unversionedId:"release-notes-1.0.3",id:"release-notes-1.0.3",title:"Release Notes 1.0.3",description:"Apache Linkis(incubating) 1.0.3 includes all of Project Linkis-1.0.3.",source:"@site/download/release-notes-1.0.3.md",sourceDirName:".",slug:"/release-notes-1.0.3",permalink:"/download/release-notes-1.0.3",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/download/release-notes-1.0.3.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Release Notes 1.0.3",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Release List",permalink:"/download/main"},next:{title:"Release Notes 1.0.2",permalink:"/download/release-notes-1.0.2"}},u=[{value:"New Feature",id:"new-feature",children:[],level:2},{value:"Enhancement",id:"enhancement",children:[],level:2},{value:"Bugs Fix",id:"bugs-fix",children:[],level:2},{value:"other",id:"other",children:[],level:2},{value:"Credits",id:"credits",children:[],level:2}],c={toc:u};function h(e){var t=e.components,i=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Linkis(incubating) 1.0.3 includes all of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/projects/13"},"Project Linkis-1.0.3"),"."),(0,r.kt)("p",null,"This version is the first version of Linkis entering Apache incubation. It mainly completes the ASF infrastructure construction including license improvement/package name modification, etc., adds EngineConn support for Operator and other features, and fix community feedback about 1.0.2 version bugs."),(0,r.kt)("p",null,"The following key features are added: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the http restful api uses springmvc instead of jersey"),(0,r.kt)("li",{parentName:"ul"},"replace codehaus json with fastxml json"),(0,r.kt)("li",{parentName:"ul"},"support of EngineConn/OnceEngineConn common operators"),(0,r.kt)("li",{parentName:"ul"},"support proxy user with kerberos")),(0,r.kt)("p",null,"Abbreviations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CGS: Computation Governance Services"),(0,r.kt)("li",{parentName:"ul"},"PES: Public Enhancement Services"),(0,r.kt)("li",{parentName:"ul"},"MGS: Microservice Governance Services"),(0,r.kt)("li",{parentName:"ul"},"EC: Engineconn"),(0,r.kt)("li",{parentName:"ul"},"ECM: EngineConnManager")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"new-feature"},"New Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","CGS&PES&MGS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1002"},"[Linkis-1002]")," Http restful api style uses springmv mode to replace jersey, uses spring's DispatcherServletweb, web interface annotation method Unite"),(0,r.kt)("li",{parentName:"ul"},"[","CGS&PES&MGS]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1038"},"[Linkis-1038]")," Upgrade codehaus json to stable mainstream fastxml json version"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Engineconn]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1027"},"[Linkis-1027]")," Support using Hadoop's proxyuser mechanism to access kerberos-enabled Hadoop clusters"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1248"},"[Linkis-1248]")," The function of ECM to get EC logs, you can get all logs of all ECs when EC is running or stopped"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1043"},"[Linkis-1043]")," Support engine operator, the client can perform specific operations on EngineConn through the engine operator and return result"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisOnceEngineconn]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/946"},"[Linkis-946]")," Support hostname and IP address for eureka service discovery and service invocation to satisfy k8s Containerized deployment scenarios"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisOnceEngineconn]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1078"},"[Linkis-1078]")," Support EngineConn/OnceEngineConn general operator, providing basic capabilities for docking streaming computing engines")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"enhancement"},"Enhancement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1026"},"[Linkis-1026]")," Optimize of data export to excel, better support for numeric fields"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1036"},"[Linkis-1036]")," File permission optimization of shared file system in LocalFileSystem mode"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1185"},"[Linkis-1185]")," Add some scala code specification checking rules to automatically detect scala code specification"),(0,r.kt)("li",{parentName:"ul"},"[","Orchestrator]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1183"},"[Linkis-1183]")," Optimize the code with high cyclic complexity of the calculation orchestrator and the Map problem under high concurrency ,"),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1064"},"[Linkis-1064]")," Supports the whitelist configuration of http api, which can be called without user login authentication"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1030"},"[Linkis-1030]")," Transfer custom environment variables from ecm to engine"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1083"},"[Linkis-1083]")," Unify and optimize the engineConnPlugin exception class"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1203"},"[Linkis-1203]")," Optimize tag update/delete logic"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-JDBC] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1117"},"[Linkis-1117]")," Support kerberos authentication type of linkis jdbc"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-Flink] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1070"},"[Linkis-1070]")," Optimize the submission of jar applications in prod mode, and optimize the kill of the calculation executor operate"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-Flink] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1248"},"[Linkis-1248]")," FlinkOnceJob supports executing collections, showing the syntax of flinkSQL"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1167"},"[Linkis-1167]")," processEngineConnLaunch Add support for JAVA_HOME environment variable"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-ComputationClient]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1126"},"[Linkis-1126]")," support python matplotlib to display images"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1206"},"[Linkis-1206]")," Optimize the logic of entry and add taskID to distinguish tasks"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1209"},"[Linkis-1209]")," Optimize multiple functions commonly used by manager: add update and startup time attributes to node objects /yarn resource acquisition method"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1213"},"[Linkis-1213]")," Optimize the relationship between long-lived tags and undeletable nodes"),(0,r.kt)("li",{parentName:"ul"},"[","PES-PublicService]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1211"},"[Linkis-1211]")," Optimize jobhistory database information update logic, remove practice, and add retry logic"),(0,r.kt)("li",{parentName:"ul"},"[","PES-Metadata]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1224"},"[Linkis-1224]")," Optimize the datasource/dbs http interface query result and the login user association limit, which can be configured by Whether the file is opened or not")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"bugs-fix"},"Bugs Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","DB]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1053"},"[Linkis-1053]")," Fix the problem that data insertion may fail due to too long database table field length"),(0,r.kt)("li",{parentName:"ul"},"[","DB]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1087"},"[Linkis-1087]")," Remove duplicate DDL statements"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1058"},"[Linkis-1058]")," When uploading materials, when there are subdirectories, it cannot be compressed and the upload fails"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1223"},"[Linkis-1223]")," Upgrade log4j version to 2.17.0"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1052"},"[Linkis-1052]")," Fixed not getting route instance when hostname starts with application name"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1014"},"[Linkis-1014]")," Fix the wrong usage of object equality judgment"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1054"},"[Linkis-1054]")," Fix instance label parsing failure when hostname contains service name."),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1074"},"[Linkis-1074]")," Fix NPE issue with http api 'rm/userresources'"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1101"},"[Linkis-1101]")," Fix the problem that the monitor stops the engine when the engine does not exist"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1210"},"[Linkis-1210]")," Fix instance check and engine tag exclusion bug"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1214"},"[Linkis-1214]")," Fix multiple RM modules high concurrency bug"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1216"},"[Linkis-1216]")," Remove node monitor module from AM"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-LinkisManager]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1222"},"[Linkis-1222]")," Add successful and failed ECM registration responses"),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1093"},"[Linkis-1093]")," Fix the permission bypass bug that may be caused by empty characters in pass auth uri"),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1105"},"[Linkis-1105]")," Modify linkis default test account weak password problem"),(0,r.kt)("li",{parentName:"ul"},"[","MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1234"},"[Linkis-1234]")," Fix SSO login memory leak problem"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Common]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1199"},"[Linkis-1199]"),' Fix SqlCodeParser to escape the separator ";" into multiple SQL'),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1073"},"[Linkis-1073]")," Fix http api 'entrance/{id}/killJobs' caused by unused parameters exception {ID}"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1106"},"[Linkis-1106]")," VarSubstitutionInterceptor get code type bug fix"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1149"},"[Linkis-1149]")," Fix the problem that the foreground cannot get the progress information after the job task is completed"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-Entrance]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1205"},"[Linkis-1205]")," Fixed LogWirter's oom bug"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1113"},"[Linkis-1113]")," Fix sql statement error when bml resource data record is updated"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-JDBC] ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/923"},"[Linkis-923]")," Fix the bug of connection url without JDBC engine"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-Spark]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1017"},"[Linkis-1017]")," Fix spark3 engine compilation error"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-Flink]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1069"},"[Linkis-1069]")," Fix Flink engine lack of dependencies such as hadoop-mapreduce-client-core ClassNotfoundException problem"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-Flink]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1129"},"[Linkis-1128]")," Fix the data table information insertion problem of flink engine"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugin-Flink]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1304"},"[Linkis-1304]")," Fix flink sql does not support multiple sql, use set, rest, drop Problems such as checkpoint failure during grammar"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugins-Hive]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1231"},"[Linkis-1231]")," Fix the progress bug of engine pushing multiple subtasks"),(0,r.kt)("li",{parentName:"ul"},"[","PEC-BmlServer]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1155"},"[Linkis-1155]")," Fix the problem of using mysql reserved words in sql statements"),(0,r.kt)("li",{parentName:"ul"},"[","PEC-CSServer]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1160"},"[Linkis-1160]")," Fix NPE in CsJobListener"),(0,r.kt)("li",{parentName:"ul"},"[","Orchestrator]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1179"},"[Linkis-1179]")," Fix the bug caused by orchestrator concurrency"),(0,r.kt)("li",{parentName:"ul"},"[","Orchestrator]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1186"},"[Linkis-1186]")," Fix the problem that the tasks queued by Orchestrator cannot be killed"),(0,r.kt)("li",{parentName:"ul"},"[","Console]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1121"},"[Linkis-1121]")," Get the protocol from the current request, remove the hard code for 'http'")),(0,r.kt)("h2",{id:"other"},"other"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u26a0 ","[","Commons&MGS-LinkisServiceGateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1092"},"[Linkis-1192]"),"3rd party reliance on mysql-connector-java violates the Apache License Policy. Therefore, the dependency on mysql-connector-java has been removed from 1.0.3. If you only use it for your own project, you can add mysql-connector-java dependency to your project."),(0,r.kt)("li",{parentName:"ul"},"[","Commons&MGS-LinkisEureka]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1291"},"[Linkis-1291]")," Remove the jar package io.github.x-stream with unclear license attribution category :mxparser"),(0,r.kt)("li",{parentName:"ul"},"[","Commons]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1287"},"[Linkis-1287]")," Split binary distribution package and source code LICENSE/NOTICE and other files"),(0,r.kt)("li",{parentName:"ul"},"[","Console]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1301"},"[Linkis-1301]")," Remove font files with unknown license authorization and front-end resource files such as unused image icons"),(0,r.kt)("li",{parentName:"ul"},"[","CGS-EngineConnPlugins-Python]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/1281"},"[Linkis-1281]")," Remove the pyspark.zip in the source code and add the LICENSE.txt of py4j document")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"credits"},"Credits"),(0,r.kt)("p",null,"The release of Apache Linkis(incubating) 1.0.3 is inseparable from the contributors of the Linkis community. Thanks to all the community contributors!"))}h.isMDXComponent=!0}}]);