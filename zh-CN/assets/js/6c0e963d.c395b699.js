"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[83699],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11340:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={title:"Proxy User Mode",sidebar_position:4},c=void 0,u={unversionedId:"architecture/computation_governance_services/proxy-user",id:"version-1.1.2/architecture/computation_governance_services/proxy-user",isDocsHomePage:!1,title:"Proxy User Mode",description:"1 Background",source:"@site/versioned_docs/version-1.1.2/architecture/computation_governance_services/proxy-user.md",sourceDirName:"architecture/computation_governance_services",slug:"/architecture/computation_governance_services/proxy-user",permalink:"/zh-CN/docs/latest/architecture/computation_governance_services/proxy-user",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.2/architecture/computation_governance_services/proxy-user.md",tags:[],version:"1.1.2",sidebarPosition:4,frontMatter:{title:"Proxy User Mode",sidebar_position:4},sidebar:"version-1.1.2/tutorialSidebar",previous:{title:"Linkis Client \u67b6\u6784\u8bbe\u8ba1",permalink:"/zh-CN/docs/latest/architecture/computation_governance_services/linkis-cli"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/latest/architecture/public_enhancement_services/overview"}},l=[{value:"1 Background",id:"1-background",children:[]},{value:"2 Basic Concepts",id:"2-basic-concepts",children:[]},{value:"3 Goals achieved",id:"3-goals-achieved",children:[]},{value:"4 Realize the general idea",id:"4-realize-the-general-idea",children:[]},{value:"5 Things to Consider &amp; Note",id:"5-things-to-consider--note",children:[]}],p={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-background"},"1 Background"),(0,i.kt)("p",null,"At present, when linkis is executing the task submitted by the user, the main process service of linkis will switch to the corresponding user through sudo -u ${submit user}, and then execute the corresponding engine startup command.\nThis requires creating a corresponding system user for each ${submit user} in advance, and configuring relevant environment variables.\nFor new users, a series of environment initialization preparations are required. Frequent user changes will increase operation and maintenance costs, and there are too many users, so resources cannot be configured for a single user, and resources cannot be well managed. If the A agent can be executed to the designated agent user, the execution entry can be converged uniformly, and the problem of needing to initialize the environment can be solved."),(0,i.kt)("h2",{id:"2-basic-concepts"},"2 Basic Concepts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login user: the user who directly logs in to the system through the user name and password"),(0,i.kt)("li",{parentName:"ul"},"Proxy user: The user who actually performs the operation as the login user is called the proxy user, and the related operations of the proxy login user")),(0,i.kt)("h2",{id:"3-goals-achieved"},"3 Goals achieved"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login user A can choose a proxy user and decide which proxy user to proxy to"),(0,i.kt)("li",{parentName:"ul"},"Login user A can delegate tasks to proxy user B for execution"),(0,i.kt)("li",{parentName:"ul"},"When logging in to user A as an agent to agent user B, you can view B-related execution records, task results and other data"),(0,i.kt)("li",{parentName:"ul"},"A proxy user can proxy multiple login users at the same time, but a login user can only be associated with a certain proxy user at the same time")),(0,i.kt)("h2",{id:"4-realize-the-general-idea"},"4 Realize the general idea"),(0,i.kt)("p",null,"Modify the existing interface cookie processing, which needs to be able to parse out the logged-in user and proxy user in the cookie"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"The key of the proxy user's cookie is: linkis_user_session_proxy_ticket_id_v1\nLogin user's cookie: linkis_user_session_ticket_id_v1\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The relevant interface of linkis needs to be able to identify the proxy user information based on the original UserName obtained, and use the proxy user to perform various operations. And record the audit log, including the user's task execution operation, download operation"),(0,i.kt)("li",{parentName:"ul"},"When the task is submitted for execution, the entry service needs to modify the executing user to be the proxy user")),(0,i.kt)("h2",{id:"5-things-to-consider--note"},"5 Things to Consider & Note"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users are divided into proxy users and non-proxy users. Users of proxy type cannot perform proxying to other users again."),(0,i.kt)("li",{parentName:"ul"},"It is necessary to control the list of logged-in users and system users who can be proxied, to prohibit the occurrence of arbitrary proxies, and to avoid uncontrollable permissions. It is best to support database tables to configure, and can be directly modified to take effect without restarting the service"),(0,i.kt)("li",{parentName:"ul"},"Separately record log files containing proxy user operations, such as proxy execution, function update, etc. All proxy user operations of PublicService are recorded in the log, which is convenient for auditing")))}d.isMDXComponent=!0}}]);