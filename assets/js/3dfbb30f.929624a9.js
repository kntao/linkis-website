"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[14941],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),g=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=g(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=g(t),d=r,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return t?i.createElement(m,o(o({ref:n},l),{},{components:t})):i.createElement(m,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var g=2;g<a;g++)o[g]=t[g];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},46499:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return g},toc:function(){return l},default:function(){return p}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),o=["components"],c={title:"App Manager",sidebar_position:3},s=void 0,g={unversionedId:"architecture/computation_governance_services/linkis_manager/app-manager",id:"version-1.1.0/architecture/computation_governance_services/linkis_manager/app-manager",isDocsHomePage:!1,title:"App Manager",description:"1. Background",source:"@site/versioned_docs/version-1.1.0/architecture/computation_governance_services/linkis_manager/app-manager.md",sourceDirName:"architecture/computation_governance_services/linkis_manager",slug:"/architecture/computation_governance_services/linkis_manager/app-manager",permalink:"/docs/1.1.0/architecture/computation_governance_services/linkis_manager/app-manager",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.0/architecture/computation_governance_services/linkis_manager/app-manager.md",tags:[],version:"1.1.0",sidebarPosition:3,frontMatter:{title:"App Manager",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.1.0/architecture/computation_governance_services/linkis_manager/overview"},next:{title:"Label Manager",permalink:"/docs/1.1.0/architecture/computation_governance_services/linkis_manager/label-manager"}},l=[{value:"1. Background",id:"1-background",children:[]},{value:"Architecture diagram",id:"architecture-diagram",children:[]},{value:"Architecture description",id:"architecture-description",children:[]}],u={toc:l};function p(e){var n=e.components,c=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-background"},"1. Background"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The Entrance module of the old version of Linkis is responsible for too much responsibilities, the management ability of the Engine is weak, and it is not easy to follow-up expansion, the AppManager module is newly extracted to complete the following responsibilities:  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add the AM module to move the engine management function previously done by Entrance to the AM module."),(0,a.kt)("li",{parentName:"ol"},"AM needs to support operating Engine, including: adding, multiplexing, recycling, preheating, switching and other functions."),(0,a.kt)("li",{parentName:"ol"},"Need to connect to the Manager module to provide Engine management functions: including Engine status maintenance, engine list maintenance, engine information, etc."),(0,a.kt)("li",{parentName:"ol"},"AM needs to manage EM services, complete EM registration and forward the resource registration to RM."),(0,a.kt)("li",{parentName:"ol"},"AM needs to be connected to the Label module, including the addition and deletion of EM/Engine, the label manager needs to be notified to update the label."),(0,a.kt)("li",{parentName:"ol"},"AM also needs to dock the label module for label analysis, and need to obtain a list of serverInstances with a series of scores through a series of labels (How to distinguish between EM and Engine? the labels are completely different)."),(0,a.kt)("li",{parentName:"ol"},"Need to provide external basic interface: including the addition, deletion and modification of engine and engine manager, metric query, etc.  ")),(0,a.kt)("h2",{id:"architecture-diagram"},"Architecture diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AppManager03",src:t(5840).Z}),(0,a.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","As shown in the figure above: AM belongs to the AppManager module in LinkisMaster and provides services.",(0,a.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","New engine application flow chart:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"AppManager02",src:t(53366).Z}),(0,a.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","From the above engine life cycle flow chart, it can be seen that Entrance is no longer doing the management of the Engine, and the startup and management of the engine are controlled by AM.  "),(0,a.kt)("h2",{id:"architecture-description"},"Architecture description"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","AppManager mainly includes engine service and EM service:\nEngine service includes all operations related to EngineConn, such as engine creation, engine reuse, engine switching, engine recycling, engine stopping, engine destruction, etc.\nEM service is responsible for information management of all EngineConnManager, and can perform service management on ECM online, including tag modification, suspension of ECM service, obtaining ECM instance information, obtaining ECM running engine information, killing ECM operation, and also according to EM Node information Query all EngineNodes, and also support searching by user, saving EM Node load information, node health information, resource usage information, etc.\nThe new EngineConnManager and EngineConn both support tag management, and the types of engines have also added offline, streaming, and interactive support.  "),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Engine creation: specifically responsible for the new engine function of the LinkisManager service. The engine startup module is fully responsible for the creation of a new engine, including obtaining ECM tag collections, resource requests, obtaining engine startup commands, notifying ECM to create new engines, updating engine lists, etc.\nCreateEngienRequest->RPC/Rest -> MasterEventHandler ->CreateEngineService ->\n->LabelContext/EnginePlugin/RMResourcevice->(RcycleEngineService)EngineNodeManager->EMNodeManager->sender.ask(EngineLaunchRequest)->EngineManager service->EngineNodeManager->EngineLocker->Engine->EngineNodeManager->EngineFactory=",">","EngineService=",">"," ServerInstance\nWhen creating an engine is the part that interacts with RM, EnginePlugin should return specific resource types through Labels, and then AM sends resource requests to RM."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Engine reuse: In order to reduce the time and resources consumed for engine startup, the principle of reuse must be given priority to the use of engines. Reuse generally refers to the reuse of engines that users have created. The engine reuse module is responsible for providing a collection of reusable engines. Election and lock the engine and start using it, or return that there is no engine that can be reused.\nReuseEngienRequest->RPC/Rest -> MasterEventHandler ->ReuseEngineService ->\n->abelContext->EngineNodeManager->EngineSelector->EngineLocker->Engine->EngineNodeManager->EngineReuser->EngineService=>ServerInstance"),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Engine switching: It mainly refers to the label switching of existing engines. For example, when the engine is created, it was created by Creator1. Now it can be changed to Creator2 by engine switching. At this time, you can allow the current engine to receive tasks with the tag Creator2.\nSwitchEngienRequest->RPC/Rest -> MasterEventHandler ->SwitchEngineService ->LabelContext/EnginePlugin/RMResourcevice->EngineNodeManager->EngineLocker->Engine->EngineNodeManager->EngineReuser->EngineService=>ServerInstance.",(0,a.kt)("br",{parentName:"p"}),"\n","Engine manager: Engine manager is responsible for managing the basic information and metadata information of all engines."))}p.isMDXComponent=!0},53366:function(e,n,t){n.Z=t.p+"assets/images/AppManager-02-113e8ab1e67278ae22f0fb4a4f19cb88.png"},5840:function(e,n,t){n.Z=t.p+"assets/images/AppManager-03-dce0763edae9da9bd59a6589c3a76042.png"}}]);