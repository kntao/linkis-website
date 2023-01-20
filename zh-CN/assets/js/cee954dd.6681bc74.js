"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[38419],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=i.createContext({}),s=function(e){var n=i.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(r.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),u=a,m=c["".concat(r,".").concat(u)]||c[u]||k[u]||l;return t?i.createElement(m,p(p({ref:n},d),{},{components:t})):i.createElement(m,p({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=u;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o[c]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<l;s++)p[s]=t[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},21602:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const l={title:"\u540e\u7aef\u7f16\u8bd1",sidebar_position:3},p=void 0,o={unversionedId:"development/build",id:"version-1.3.1/development/build",title:"\u540e\u7aef\u7f16\u8bd1",description:"1. \u524d\u7f6e\u51c6\u5907",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/development/build.md",sourceDirName:"development",slug:"/development/build",permalink:"/zh-CN/docs/latest/development/build",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/development/build.md",tags:[],version:"1.3.1",sidebarPosition:3,frontMatter:{title:"\u540e\u7aef\u7f16\u8bd1",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u76ee\u5f55\u7ed3\u6784",permalink:"/zh-CN/docs/latest/development/directory-structure"},next:{title:"\u7ba1\u7406\u53f0\u7f16\u8bd1",permalink:"/zh-CN/docs/latest/development/build-console"}},r={},s=[{value:"1. \u524d\u7f6e\u51c6\u5907",id:"1-\u524d\u7f6e\u51c6\u5907",level:2},{value:"1.1 \u73af\u5883\u8981\u6c42",id:"11-\u73af\u5883\u8981\u6c42",level:2},{value:"1.2 \u6e90\u7801\u83b7\u53d6",id:"12-\u6e90\u7801\u83b7\u53d6",level:3},{value:'<font color="red">1.2 \u4fee\u6539\u4f9d\u8d56\u914d\u7f6e</font>',id:"12-\u4fee\u6539\u4f9d\u8d56\u914d\u7f6e",level:3},{value:"2. \u5168\u91cf\u7f16\u8bd1 Linkis",id:"2-\u5168\u91cf\u7f16\u8bd1-linkis",level:2},{value:"step1 \u9996\u6b21\u7f16\u8bd1(\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65)",id:"step1-\u9996\u6b21\u7f16\u8bd1\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65",level:3},{value:"step2 \u6267\u884c\u7f16\u8bd1",id:"step2-\u6267\u884c\u7f16\u8bd1",level:3},{value:"step3 \u83b7\u53d6\u5b89\u88c5\u5305",id:"step3-\u83b7\u53d6\u5b89\u88c5\u5305",level:3},{value:"3 \u5e38\u89c1\u95ee\u9898",id:"3-\u5e38\u89c1\u95ee\u9898",level:2},{value:"3.1 \u5982\u4f55\u7f16\u8bd1\u5355\u4e2a\u6a21\u5757",id:"31-\u5982\u4f55\u7f16\u8bd1\u5355\u4e2a\u6a21\u5757",level:3},{value:"step1 \u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1",id:"step1-\u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1",level:4},{value:"step2 \u83b7\u53d6\u5b89\u88c5\u5305",id:"step2-\u83b7\u53d6\u5b89\u88c5\u5305",level:4},{value:"3.2 \u5982\u4f55\u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce",id:"32-\u5982\u4f55\u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce",level:3},{value:"step1 \u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1",id:"step1-\u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1-1",level:4},{value:"step2 \u83b7\u53d6\u5f15\u64ce\u7684\u7269\u6599\u5305",id:"step2-\u83b7\u53d6\u5f15\u64ce\u7684\u7269\u6599\u5305",level:4},{value:"3.2 \u5982\u4f55\u5c06\u975e\u9ed8\u8ba4\u5f15\u64ce\u6253\u5305\u81f3\u5b89\u88c5\u90e8\u7f72\u5305\u4e2d",id:"32-\u5982\u4f55\u5c06\u975e\u9ed8\u8ba4\u5f15\u64ce\u6253\u5305\u81f3\u5b89\u88c5\u90e8\u7f72\u5305\u4e2d",level:3},{value:"3.3 \u5982\u4f55\u5728\u5168\u91cf\u7f16\u8bd1\u65f6\u8df3\u8fc7\u6307\u5b9a\u5f15\u64ce",id:"33-\u5982\u4f55\u5728\u5168\u91cf\u7f16\u8bd1\u65f6\u8df3\u8fc7\u6307\u5b9a\u5f15\u64ce",level:3},{value:"4. \u5982\u4f55\u4fee\u6539Linkis\u7684\u4f9d\u8d56\u7684Hadoop\u3001Hive\u3001Spark\u7248\u672c",id:"4-\u5982\u4f55\u4fee\u6539linkis\u7684\u4f9d\u8d56\u7684hadoophivespark\u7248\u672c",level:2},{value:"4.1 \u5982\u4f55\u4fee\u6539 Linkis \u4f9d\u8d56\u7684 Hadoop \u7248\u672c",id:"41-\u5982\u4f55\u4fee\u6539-linkis-\u4f9d\u8d56\u7684-hadoop-\u7248\u672c",level:3},{value:"4.2 \u5982\u4f55\u4fee\u6539 Linkis \u4f9d\u8d56\u7684 Spark\u3001Hive \u7248\u672c",id:"42-\u5982\u4f55\u4fee\u6539-linkis-\u4f9d\u8d56\u7684-sparkhive-\u7248\u672c",level:3}],d={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u524d\u7f6e\u51c6\u5907"},"1. \u524d\u7f6e\u51c6\u5907"),(0,a.kt)("h2",{id:"11-\u73af\u5883\u8981\u6c42"},"1.1 \u73af\u5883\u8981\u6c42"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u73af\u5883\u8981\u6c42\uff1a"),"  \u5fc5\u987b ",(0,a.kt)("strong",{parentName:"p"},"JDK8")," \u4ee5\u4e0a\uff0c",(0,a.kt)("strong",{parentName:"p"},"Oracle/Sun")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"OpenJDK"),"\u90fd\u652f\u6301\u3002"),(0,a.kt)("h3",{id:"12-\u6e90\u7801\u83b7\u53d6"},"1.2 \u6e90\u7801\u83b7\u53d6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b9\u5f0f1\uff1a\u4ece",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis"},"github\u4ed3\u5e93")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/linkis"},"https://github.com/apache/linkis")," \u83b7\u53d6\u9879\u76ee\u7684\u6e90\u4ee3\u7801\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u65b9\u5f0f2\uff1a\u4ece",(0,a.kt)("a",{parentName:"li",href:"https://linkis.apache.org/download/main"},"linkis\u7684\u5b98\u65b9\u4e0b\u8f7d\u9875\u9762")," ",(0,a.kt)("a",{parentName:"li",href:"https://linkis.apache.org/download/main"},"https://linkis.apache.org/download/main")," \u4e0b\u8f7d\u6240\u9700\u7248\u672c\u7684\u6e90\u7801\u5305\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f"),"\uff1a\u5b98\u65b9\u63a8\u8350\u4f7f\u7528 Hadoop-2.7.2\u3001Hive-1.2.1\u3001Spark-2.4.3 \u548c Scala-2.11.12 \u5bf9 Linkis \u8fdb\u884c\u7f16\u8bd1\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u4f7f\u7528 Hadoop\u3001Hive\u3001Spark \u7684\u5176\u4ed6\u7248\u672c\u5bf9 Linkis \u8fdb\u884c\u7f16\u8bd1\uff0c\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"#4-%E5%A6%82%E4%BD%95%E4%BF%AE%E6%94%B9linkis%E7%9A%84%E4%BE%9D%E8%B5%96%E7%9A%84hadoophivespark%E7%89%88%E6%9C%AC"},"\u5982\u4f55\u4fee\u6539Linkis\u7684\u4f9d\u8d56\u7684Hadoop\u3001Hive\u3001Spark\u7248\u672c")),(0,a.kt)("h3",{id:"12-\u4fee\u6539\u4f9d\u8d56\u914d\u7f6e"},(0,a.kt)("font",{color:"red"},"1.2 \u4fee\u6539\u4f9d\u8d56\u914d\u7f6e")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u56e0\u4e3amysql-connector-java\u9a71\u52a8\u662fGPL2.0\u534f\u8bae\uff0c\u4e0d\u6ee1\u8db3Apache\u5f00\u6e90\u534f\u8bae\u5173\u4e8elicense\u7684\u653f\u7b56\uff0c\u56e0\u6b64\u4ece1.0.3\u7248\u672c\u5f00\u59cb\uff0c\u5bf9mysql-connector-java\u7684\u4f9d\u8d56\u9879\u4f5c\u7528\u57dfscope\u9ed8\u8ba4\u662ftest\uff0c\u82e5\u81ea\u884c\u7f16\u8bd1\uff0c\u53ef\u4ee5\u4fee\u6539\u9876\u7ea7pom.xml\u7684mysql-connector-java\u4f9d\u8d56\u7684scope\u4f5c\u7528\u57df\uff08\u6ce8\u91ca\u6389\u5373\u53ef\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <version>${mysql.connector.version}</version>\n    \x3c!--<scope>test</scope>--\x3e\n</dependency>\n")),(0,a.kt)("h2",{id:"2-\u5168\u91cf\u7f16\u8bd1-linkis"},"2. \u5168\u91cf\u7f16\u8bd1 Linkis"),(0,a.kt)("h3",{id:"step1-\u9996\u6b21\u7f16\u8bd1\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65"},"step1 \u9996\u6b21\u7f16\u8bd1(\u975e\u9996\u6b21\u53ef\u8df3\u8fc7\u6b64\u6b65)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u662f\u672c\u5730\u7b2c\u4e00\u6b21\u7f16\u8bd1\u4f7f\u7528\uff0c\u5fc5\u987b\u5728 Linkis \u6e90\u7801\u5de5\u7a0b\u7684\u6839\u76ee\u5f55\u5148\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-x.x.x\n    mvn -N  install\n")),(0,a.kt)("h3",{id:"step2-\u6267\u884c\u7f16\u8bd1"},"step2 \u6267\u884c\u7f16\u8bd1"),(0,a.kt)("p",null,"\u5728 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-x.x.x\n    mvn clean install\n\n")),(0,a.kt)("h3",{id:"step3-\u83b7\u53d6\u5b89\u88c5\u5305"},"step3 \u83b7\u53d6\u5b89\u88c5\u5305"),(0,a.kt)("p",null,"\u7f16\u8bd1\u540e\u7684\u5b8c\u6574\u5b89\u88c5\u5305\uff0c\u5728\u5de5\u7a0b\u7684linkis-dist->target\u76ee\u5f55\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    #\u8be6\u7ec6\u8def\u5f84\u5982\u4e0b\n    linkis-x.x.x/linkis-dist/target/apache-linkis-x.x.x-incubating-bin.tar.gz\n")),(0,a.kt)("h2",{id:"3-\u5e38\u89c1\u95ee\u9898"},"3 \u5e38\u89c1\u95ee\u9898"),(0,a.kt)("h3",{id:"31-\u5982\u4f55\u7f16\u8bd1\u5355\u4e2a\u6a21\u5757"},"3.1 \u5982\u4f55\u7f16\u8bd1\u5355\u4e2a\u6a21\u5757"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6709\u4e9b\u573a\u666f\u53ef\u80fd\u53ea\u9700\u8981\u9488\u5bf9\u67d0\u4e2a\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1\uff0c\u53ef\u53c2\u8003\u5982\u4e0b\u6d41\u7a0b ")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u6709\u6ca1\u6709\u6267\u884c\u8fc7\u5168\u91cf\u7f16\u8bd1\uff0c\u5148\u8981\u8fdb\u884c\u4e00\u6b21\u5168\u91cf\u7f16\u8bd1")),(0,a.kt)("h4",{id:"step1-\u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1"},"step1 \u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1"),(0,a.kt)("p",null,"\u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1\uff0c\u6bd4\u5982\u60f3\u91cd\u65b0\u7f16\u8bd1 Entrance\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-x.x.x/linkis-computation-governance/linkis-entrance\n    mvn clean install\n")),(0,a.kt)("h4",{id:"step2-\u83b7\u53d6\u5b89\u88c5\u5305"},"step2 \u83b7\u53d6\u5b89\u88c5\u5305"),(0,a.kt)("p",null,"\u83b7\u53d6\u5b89\u88c5\u5305\uff0c\u5728\u5bf9\u5e94\u6a21\u5757\u7684->target\u76ee\u5f55\u4e0b\u4f1a\u6709\u7f16\u8bd1\u597d\u7684\u5305\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    ls linkis-x.x.x/linkis-computation-governance/linkis-entrance/target/linkis-entrance.x.x.x.jar\n")),(0,a.kt)("h3",{id:"32-\u5982\u4f55\u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce"},"3.2 \u5982\u4f55\u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6709\u4e9b\u573a\u666f\u53ef\u80fd\u53ea\u9700\u8981\u9488\u5bf9\u67d0\u4e2a\u5f15\u64ce\u8fdb\u884c\u7f16\u8bd1\uff0c\u53ef\u53c2\u8003\u5982\u4e0b\u6d41\u7a0b ")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u6709\u6ca1\u6709\u6267\u884c\u8fc7\u5168\u91cf\u7f16\u8bd1\uff0c\u5148\u8981\u8fdb\u884c\u4e00\u6b21\u5168\u91cf\u7f16\u8bd1")),(0,a.kt)("p",null,"\u8fd9\u91cc\u4ee5\u7f16\u8bd1Spark \u5f15\u64ce\u4e3a\u4f8b\uff1a"),(0,a.kt)("h4",{id:"step1-\u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1-1"},"step1 \u8fdb\u5165\u5230\u5bf9\u5e94\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1"),(0,a.kt)("p",null,"\u8fdb\u5165\u5230 Spark \u5f15\u64ce\u6240\u5728\u7684\u76ee\u5f55\u8fdb\u884c\u7f16\u8bd1\u6253\u5305\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-x.x.x/linkis-engineconn-plugins/spark\n    mvn clean install\n")),(0,a.kt)("h4",{id:"step2-\u83b7\u53d6\u5f15\u64ce\u7684\u7269\u6599\u5305"},"step2 \u83b7\u53d6\u5f15\u64ce\u7684\u7269\u6599\u5305"),(0,a.kt)("p",null,"\u5728\u5bf9\u5e94\u6a21\u5757\u7684target\u76ee\u5f55\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   #spark\u6587\u4ef6\u4e0b\u5c31\u662f\u7f16\u8bd1\u597d\u7684\u5f15\u64ce\u7269\u6599\n   linkis-x.x.x/linkis-engineconn-plugins/spark/target/out/spark\n")),(0,a.kt)("p",null,"\u5982\u4f55\u5355\u72ec\u5b89\u88c5 Spark \u5f15\u64ce\uff1f\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"../deployment/install-engineconn"},"Linkis \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5\u6587\u6863")),(0,a.kt)("h3",{id:"32-\u5982\u4f55\u5c06\u975e\u9ed8\u8ba4\u5f15\u64ce\u6253\u5305\u81f3\u5b89\u88c5\u90e8\u7f72\u5305\u4e2d"},"3.2 \u5982\u4f55\u5c06\u975e\u9ed8\u8ba4\u5f15\u64ce\u6253\u5305\u81f3\u5b89\u88c5\u90e8\u7f72\u5305\u4e2d"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u6253\u5305\u914d\u7f6e\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-dist/src/main/assembly/distribution.xml"),"\uff0c\u53ea\u4f1a\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"spark/hive/python/shell"),"\u6253\u5305\u5230\u5b89\u88c5\u5305\u4e2d\uff0c\u5982\u679c\u9700\u8981\u6dfb\u52a0\u5176\u5b83\u5f15\u64ce\uff0c\u53ef\u53c2\u8003\u6b64\u6b65\u9aa4 ")),(0,a.kt)("p",null,"\u4ee5jdbc\u5f15\u64ce\u4e3a\u4f8b "),(0,a.kt)("p",null,"step1 \u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-dist/src/main/assembly/distribution.xml")," \u6dfb\u52a0jdbc\u5f15\u64ce"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," \x3c!--jdbc--\x3e\n    <fileSet>\n      <directory>\n        ../../linkis-engineconn-plugins/jdbc/target/out/\n      </directory>\n      <outputDirectory>lib/linkis-engineconn-plugins/</outputDirectory>\n      <includes>\n        <include>**/*</include>\n      </includes>\n</fileSet>\n")),(0,a.kt)("p",null,"step2 \u5982\u679c\u5df2\u7ecf\u5168\u91cf\u7f16\u8bd1\uff0c\u53ef\u4ee5\u76f4\u63a5\u91cd\u65b0\u7f16\u8bd1",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-dist"),"\u6a21\u5757\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u8fd9\u6267\u884c\u5168\u91cf\u7f16\u8bd1"),(0,a.kt)("h3",{id:"33-\u5982\u4f55\u5728\u5168\u91cf\u7f16\u8bd1\u65f6\u8df3\u8fc7\u6307\u5b9a\u5f15\u64ce"},"3.3 \u5982\u4f55\u5728\u5168\u91cf\u7f16\u8bd1\u65f6\u8df3\u8fc7\u6307\u5b9a\u5f15\u64ce"),(0,a.kt)("p",null,"\u53ef\u4f7f\u7528mvn\u6307\u4ee4\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"-pl"),"\u9009\u9879\uff0c\u8be6\u60c5\u53ef\u53c2\u8003\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-pl,--projects <arg>                   Comma-delimited list of specified\n                                        reactor projects to build instead\n                                        of all projects. A project can be\n                                        specified by [groupId]:artifactId\n                                        or by its relative path.\n")),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"!"),"\u5b9e\u73b0\u53cd\u9009\uff0c\u4ece\u800c\u6392\u9664\u6307\u5b9a\u7684\u5f15\u64ce\uff0c\u7f29\u77ed\u5168\u91cf\u7f16\u8bd1\u6240\u9700\u65f6\u95f4\uff0c\u4ee5flink\u3001sqoop\u548chive\u4e3a\u4f8b\uff0c\u8df3\u8fc7\u8fd9\u4e9b\u5f15\u64ce\u8fdb\u884c\u7f16\u8bd1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn clean install -Dmaven.test.skip=true \\\n-pl '!linkis-engineconn-plugins/flink,!linkis-engineconn-plugins/sqoop,!linkis-engineconn-plugins/hive'\n")),(0,a.kt)("h2",{id:"4-\u5982\u4f55\u4fee\u6539linkis\u7684\u4f9d\u8d56\u7684hadoophivespark\u7248\u672c"},"4. \u5982\u4f55\u4fee\u6539Linkis\u7684\u4f9d\u8d56\u7684Hadoop\u3001Hive\u3001Spark\u7248\u672c"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff1aHadoop \u4f5c\u4e3a\u5927\u6570\u636e\u57fa\u7840\u670d\u52a1\uff0cLinkis \u5fc5\u987b\u4f9d\u8d56 Hadoop \u8fdb\u884c\u7f16\u8bd1\uff1b\n\u800c Spark\u3001Hive\u7b49\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u5219\u4e0d\u7136\uff0c\u5982\u679c\u60a8\u4e0d\u60f3\u4f7f\u7528\u67d0\u4e2a\u5f15\u64ce\uff0c\u53ef\u4ee5\u65e0\u9700\u8bbe\u7f6e\u8be5\u5f15\u64ce\u7684\u7248\u672c\uff0c\u65e0\u9700\u7f16\u8bd1\u8be5\u5f15\u64ce\u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u5177\u4f53\u800c\u8a00\uff0c\u4fee\u6539 Hadoop \u7684\u7248\u672c\u4e0e Spark\u3001Hive \u7b49\u8ba1\u7b97\u5f15\u64ce\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4e0b\u9762\u8be6\u7ec6\u4ecb\u7ecd\uff1a"),(0,a.kt)("h3",{id:"41-\u5982\u4f55\u4fee\u6539-linkis-\u4f9d\u8d56\u7684-hadoop-\u7248\u672c"},"4.1 \u5982\u4f55\u4fee\u6539 Linkis \u4f9d\u8d56\u7684 Hadoop \u7248\u672c"),(0,a.kt)("p",null,"\u8fdb\u5165 Linkis \u6e90\u7801\u5305\u6839\u76ee\u5f55\uff0c\u624b\u52a8\u4fee\u6539 pom.xml \u6587\u4ef6\u7684 Hadoop \u7248\u672c\u4fe1\u606f\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-x.x.x\n    vim pom.xml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"    <properties>\n      \n        <hadoop.version>2.7.2</hadoop.version> \x3c!--\x3e \u5728\u8fd9\u91cc\u4fee\u6539Hadoop\u7248\u672c\u53f7 <--\x3e\n        <scala.version>2.11.12</scala.version>\n        <jdk.compile.version>1.8</jdk.compile.version>\n              \n    </properties>\n")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u7684hadoop\u7248\u672c\u662fhadoop3\uff0c\u9700\u8981\u4fee\u6539linkis-hadoop-common\u7684pom\u6587\u4ef6"))),(0,a.kt)("p",null,"\u56e0\u4e3a\u5728hadoop2.8\u4ee5\u4e0b\u7684\u65f6\u5019\uff0chdfs\u76f8\u5173\u7684class\u662f\u5728hadoop-hdfs\u6a21\u5757\u4e2d\u7684\uff0c\u4f46\u662f\u5728hadoop 3.X\u4e2d\u5c06\u5bf9\u5e94\u7684class\u79fb\u52a8\u5230\u4e86\u6a21\u5757hadoop-hdfs-client\u5f53\u4e2d\uff0c\u60a8\u9700\u8981\u4fee\u6539\u4e0b\u8fd9\u4e2a\u6587\u4ef6\uff1a"),(0,a.kt)("p",null,"pom:Linkis/linkis-commons/linkis-hadoop-common/pom.xml\n\u4fee\u6539\u4f9d\u8d56hadoop-hdfs\u4e3ahadoop-hdfs-client\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," <dependency>\n        <groupId>org.apache.hadoop</groupId>\n        <artifactId>hadoop-hdfs</artifactId>  \x3c!-- \u53ea\u9700\u8981\u5c06\u8be5\u884c\u66ff\u6362\u5373\u53ef\uff0c\u66ff\u6362\u4e3a <artifactId>hadoop-hdfs-client</artifactId>--\x3e\n        <version>${hadoop.version}</version>\n</dependency>\n \u5c06hadoop-hdfs\u4fee\u6539\u4e3a\uff1a\n <dependency>\n        <groupId>org.apache.hadoop</groupId>\n        <artifactId>hadoop-hdfs-client</artifactId>\n        <version>${hadoop.version}</version>\n</dependency>\n")),(0,a.kt)("h3",{id:"42-\u5982\u4f55\u4fee\u6539-linkis-\u4f9d\u8d56\u7684-sparkhive-\u7248\u672c"},"4.2 \u5982\u4f55\u4fee\u6539 Linkis \u4f9d\u8d56\u7684 Spark\u3001Hive \u7248\u672c"),(0,a.kt)("p",null,"\u8fd9\u91cc\u4ee5\u4fee\u6539 Spark \u7684\u7248\u672c\u4e3a\u4f8b\u8fdb\u884c\u4ecb\u7ecd\u3002\u8fdb\u5165 Spark \u5f15\u64ce\u6240\u5728\u7684\u76ee\u5f55\uff0c\u624b\u52a8\u4fee\u6539 pom.xml \u6587\u4ef6\u7684 Spark \u7248\u672c\u4fe1\u606f\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd linkis-x.x.x/linkis-engineconn-plugins/spark\n    vim pom.xml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"    <properties>\n        <spark.version>2.4.3</spark.version>  \x3c!--\x3e \u5728\u8fd9\u91cc\u4fee\u6539Spark\u7248\u672c\u53f7 <--\x3e  \n    </properties>\n")),(0,a.kt)("p",null,"\u4fee\u6539\u5176\u4ed6\u5f15\u64ce\u7684\u7248\u672c\u4e0e\u4fee\u6539 Spark \u7248\u672c\u7c7b\u4f3c\uff0c\u5148\u8fdb\u5165\u76f8\u5173\u5f15\u64ce\u6240\u5728\u7684\u76ee\u5f55\uff0c\u624b\u52a8\u4fee\u6539 pom.xml \u6587\u4ef6\u7684\u5f15\u64ce\u7248\u672c\u4fe1\u606f\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"#32-%E5%A6%82%E4%BD%95%E7%BC%96%E8%AF%91%E6%9F%90%E4%B8%AA%E5%BC%95%E6%93%8E"},"\u7f16\u8bd1\u67d0\u4e2a\u5f15\u64ce")))}c.isMDXComponent=!0}}]);