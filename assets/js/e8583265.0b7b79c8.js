"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[67282],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98444:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Version overview",sidebar_position:.1},p=void 0,u={unversionedId:"release",id:"version-1.1.3/release",isDocsHomePage:!1,title:"Version overview",description:"- Enable Prometheus monitoring",source:"@site/versioned_docs/version-1.1.3/release.md",sourceDirName:".",slug:"/release",permalink:"/docs/latest/release",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.3/release.md",tags:[],version:"1.1.3",sidebarPosition:.1,frontMatter:{title:"Version overview",sidebar_position:.1},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/latest/introduction"},next:{title:"Quick Deployment",permalink:"/docs/latest/deployment/quick-deploy"}},c=[{value:"Configuration Item",id:"configuration-item",children:[]},{value:"DB Table Changes",id:"db-table-changes",children:[]}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/deployment/involve-prometheus-into-linkis"},"Enable Prometheus monitoring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/architecture/commons/variable"},"Custom Variable Design & Built-in Variables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/architecture/computation-governance-services/engine/engine-conn-history"},"EngineConn History Information Recording Features")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/architecture/computation-governance-services/engine/engine-conn-metrics"},"EngineConn Metrics reporting feature")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/architecture/public-enhancement-services/context-service/content-service-cleanup"},"ContextService cleanup interface features")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/download/release-notes-1.1.3"},"Release-Notes"))),(0,i.kt)("h2",{id:"configuration-item"},"Configuration Item"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"module name (service name)"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"eureka(application-eureka.yml)"),(0,i.kt)("td",{parentName:"tr",align:null},"New"),(0,i.kt)("td",{parentName:"tr",align:null},"management.endpoints.web.exposure.include"),(0,i.kt)("td",{parentName:"tr",align:null},"refresh,info,health,metrics"),(0,i.kt)("td",{parentName:"tr",align:null},"The endpoint exposure range for Spring Boot Actuator")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"eureka(application-eureka.yml)"),(0,i.kt)("td",{parentName:"tr",align:null},"New"),(0,i.kt)("td",{parentName:"tr",align:null},"eureka.instance.metadata-map:.prometheus.path"),(0,i.kt)("td",{parentName:"tr",align:null},"${prometheus.path:/actuator/prometheus}"),(0,i.kt)("td",{parentName:"tr",align:null},"Prometheus monitoring endpoint for microservices registered in Eureka metadata")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common(application-linkis.yml)"),(0,i.kt)("td",{parentName:"tr",align:null},"New"),(0,i.kt)("td",{parentName:"tr",align:null},"eureka.instance.metadata-map:.prometheus.path"),(0,i.kt)("td",{parentName:"tr",align:null},"${prometheus.path:${prometheus.endpoint}}"),(0,i.kt)("td",{parentName:"tr",align:null},"ditto")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common"),(0,i.kt)("td",{parentName:"tr",align:null},"New"),(0,i.kt)("td",{parentName:"tr",align:null},"wds.linkis.prometheus.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common"),(0,i.kt)("td",{parentName:"tr",align:null},"Modify"),(0,i.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.user.restful.uri.pass.auth"),(0,i.kt)("td",{parentName:"tr",align:null},"/api/rest_j/v1/actuator/prometheus"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common"),(0,i.kt)("td",{parentName:"tr",align:null},"modify"),(0,i.kt)("td",{parentName:"tr",align:null},"spring.spring.cloud.config.enabled"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"db-table-changes"},"DB Table Changes"),(0,i.kt)("p",null,"For details, see the upgrade schema",(0,i.kt)("inlineCode",{parentName:"p"},"db/upgrade/1.1.3_schema")," file in the corresponding branch of the code repository (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis"},"https://github.com/apache/incubator-linkis"),")."))}m.isMDXComponent=!0}}]);