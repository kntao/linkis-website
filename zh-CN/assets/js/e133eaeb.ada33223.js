"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[57234],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),c=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},k=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(t),m=a,d=k["".concat(o,".").concat(m)]||k[m]||u[m]||r;return t?i.createElement(d,s(s({ref:n},p),{},{components:t})):i.createElement(d,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=k;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},72911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(87462),a=(t(67294),t(3905));const r={title:"\u5982\u4f55\u5b9e\u73b0\u65b0\u7684\u5fae\u670d\u52a1",sidebar_position:9},s=void 0,l={unversionedId:"development/new-microservice",id:"development/new-microservice",title:"\u5982\u4f55\u5b9e\u73b0\u65b0\u7684\u5fae\u670d\u52a1",description:"\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e\u73b0\u6709\u7684Linkis\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\uff0c\u5728\u672c\u5730\u5f00\u53d1\u8c03\u8bd5\u4e00\u4e2a\u65b0\u7684\u5fae\u670d\u52a1\u4ee5\u53ca\u90e8\u7f72\uff0c\u65b9\u4fbf\u6709\u9700\u8981\u65b0\u589e\u5fae\u670d\u52a1\u7684\u4e8c\u6b21\u5f00\u53d1\u7684\u540c\u5b66\u53c2\u8003\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/new-microservice.md",sourceDirName:"development",slug:"/development/new-microservice",permalink:"/zh-CN/docs/1.3.1/development/new-microservice",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/new-microservice.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u5982\u4f55\u5b9e\u73b0\u65b0\u7684\u5fae\u670d\u52a1",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u5b9e\u73b0\u65b0\u5f15\u64ce",permalink:"/zh-CN/docs/1.3.1/development/new-engine-conn"},next:{title:"Swagger \u6ce8\u89e3\u4f7f\u7528",permalink:"/zh-CN/docs/1.3.1/development/swwager"}},o={},c=[{value:"1. \u65b0\u7684\u5fae\u670d\u52a1\u5f00\u53d1",id:"1-\u65b0\u7684\u5fae\u670d\u52a1\u5f00\u53d1",level:2},{value:"1.1 \u65b0\u5efa\u5b50\u6a21\u5757",id:"11-\u65b0\u5efa\u5b50\u6a21\u5757",level:3},{value:"1.1.1 \u4fee\u6539linkis-new-microservice\u6a21\u5757\u7684pom.xml\u6587\u4ef6",id:"111-\u4fee\u6539linkis-new-microservice\u6a21\u5757\u7684pomxml\u6587\u4ef6",level:4},{value:"1.1.2 \u65b0\u589e\u670d\u52a1\u5bf9\u5e94\u7684\u914d\u7f6e\u6587\u4ef6",id:"112-\u65b0\u589e\u670d\u52a1\u5bf9\u5e94\u7684\u914d\u7f6e\u6587\u4ef6",level:4},{value:"1.1.4 \u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f",id:"114-\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f",level:4},{value:"1.2 \u4ee3\u7801\u5f00\u53d1",id:"12-\u4ee3\u7801\u5f00\u53d1",level:3},{value:"1.2.1 \u65b0\u5efa\u63a5\u53e3\u7c7b",id:"121-\u65b0\u5efa\u63a5\u53e3\u7c7b",level:4},{value:"1.2.2 \u65b0\u5efa\u542f\u52a8\u7c7b",id:"122-\u65b0\u5efa\u542f\u52a8\u7c7b",level:4},{value:"1.3 \u542f\u52a8eureka\u670d\u52a1",id:"13-\u542f\u52a8eureka\u670d\u52a1",level:3},{value:"1.4 \u672c\u5730\u542f\u52a8\u65b0\u5fae\u670d\u52a1",id:"14-\u672c\u5730\u542f\u52a8\u65b0\u5fae\u670d\u52a1",level:3},{value:"1.5 Postman \u8fdb\u884c\u63a5\u53e3\u8c03\u8bd5",id:"15-postman-\u8fdb\u884c\u63a5\u53e3\u8c03\u8bd5",level:3},{value:"2. \u6253\u5305\u90e8\u7f72",id:"2-\u6253\u5305\u90e8\u7f72",level:2},{value:"2.1 \u4fee\u6539\u65b0\u670d\u52a1\u4e0b\u7684distribution.xml",id:"21-\u4fee\u6539\u65b0\u670d\u52a1\u4e0b\u7684distributionxml",level:3},{value:"2.2 \u4fee\u6539linkis-dist\u4e0b\u7684distribution.xml",id:"22-\u4fee\u6539linkis-dist\u4e0b\u7684distributionxml",level:3},{value:"2.3 \u670d\u52a1\u7684\u8fd0\u884c\u914d\u7f6e\u811a\u672c",id:"23-\u670d\u52a1\u7684\u8fd0\u884c\u914d\u7f6e\u811a\u672c",level:3},{value:"2.4 linkis-start-all.sh \u914d\u7f6e\u4fee\u6539",id:"24-linkis-start-allsh-\u914d\u7f6e\u4fee\u6539",level:3},{value:"2.5 linkis-stop-all.sh \u914d\u7f6e\u4fee\u6539",id:"25-linkis-stop-allsh-\u914d\u7f6e\u4fee\u6539",level:3},{value:"2.6 \u5b89\u88c5\u5305\u51c6\u5907",id:"26-\u5b89\u88c5\u5305\u51c6\u5907",level:3},{value:"2.7 \u670d\u52a1\u5668\u90e8\u7f72",id:"27-\u670d\u52a1\u5668\u90e8\u7f72",level:3}],p={toc:c};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e\u73b0\u6709\u7684Linkis\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\uff0c\u5728\u672c\u5730\u5f00\u53d1\u8c03\u8bd5\u4e00\u4e2a\u65b0\u7684\u5fae\u670d\u52a1\u4ee5\u53ca\u90e8\u7f72\uff0c\u65b9\u4fbf\u6709\u9700\u8981\u65b0\u589e\u5fae\u670d\u52a1\u7684\u4e8c\u6b21\u5f00\u53d1\u7684\u540c\u5b66\u53c2\u8003\u3002 ")),(0,a.kt)("p",null,"\u601d\u7ef4\u5bfc\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u601d\u7ef4\u5bfc\u56fe",src:t(98363).Z,width:"3869",height:"2584"})),(0,a.kt)("h2",{id:"1-\u65b0\u7684\u5fae\u670d\u52a1\u5f00\u53d1"},"1. \u65b0\u7684\u5fae\u670d\u52a1\u5f00\u53d1"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ee5\u65b0\u589e\u5fae\u670d\u52a1",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-new-microservice"),"\u4e3a\u793a\u4f8b\uff0c\u8fdb\u884c\u4ecb\u7ecd\u3002 \u5982\u4f55\u5728IDEA\u4e2d\u521b\u5efa\u548c\u6ce8\u518c\u4e00\u4e2a\u5c5e\u4e8elinkis\u65b0\u7684\u5fae\u670d\u52a1")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8f6f\u4ef6\u8981\u6c42")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"jdk1.8"),(0,a.kt)("li",{parentName:"ul"},"maven3.5+")),(0,a.kt)("h3",{id:"11-\u65b0\u5efa\u5b50\u6a21\u5757"},"1.1 \u65b0\u5efa\u5b50\u6a21\u5757"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),":\u5728\u4ec0\u4e48\u6a21\u5757\u4e0b\u65b0\u5efa\u5b50\u6a21\u5757\uff0c\u8fd9\u4e2a\u5e76\u4e0d\u662f\u56fa\u5b9a\u7684\u56e0\u60c5\u51b5\u800c\u5b9a\uff0c\u4e00\u822c\u6309\u670d\u52a1\u7ec4\u6765\u5212\u5206\u786e\u8ba4\uff0c\u8fd9\u91cc\u53ea\u662f\u4e3e\u4f8b\u5b50\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"linkis-public-enhancements\u6a21\u5757\u4e0b \u53f3\u952e")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-module",src:t(42122).Z,width:"1083",height:"570"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9maven\u70b9\u51fbNex\u4e0b\u4e00\u6b65")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"maven-module",src:t(71369).Z,width:"1051",height:"826"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6a21\u5757\u540d\u70b9\u51fbFinsh")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"name-module",src:t(78318).Z,width:"1035",height:"737"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6210\u529f")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"created-successfully",src:t(23479).Z,width:"1754",height:"667"})),(0,a.kt)("h4",{id:"111-\u4fee\u6539linkis-new-microservice\u6a21\u5757\u7684pomxml\u6587\u4ef6"},"1.1.1 \u4fee\u6539linkis-new-microservice\u6a21\u5757\u7684pom.xml\u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),": linkis-public-enhancements/linkis-new-microservice/pom.xml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## \u6dfb\u52a0linkis\u7684\u516c\u5171\u4f9d\u8d56\u6a21\u5757\u548c mybatis\u6a21\u5757\u4f9d\u8d56(\u5982\u679c\u4e0d\u6d89\u53ca\u6570\u636e\u5e93\u64cd\u4f5c\u53ef\u4ee5\u4e0d\u6dfb\u52a0mybatis) \n  <dependency>\n      <groupId>org.apache.linkis</groupId>\n      <artifactId>linkis-module</artifactId>\n      <version>${project.version}</version>\n      <exclusions>\n        <exclusion>\n          <groupId>org.ow2.asm</groupId>\n          <artifactId>asm</artifactId>\n        </exclusion>\n      </exclusions>\n  </dependency>\n\n  <dependency>\n      <groupId>org.apache.linkis</groupId>\n      <artifactId>linkis-mybatis</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n")),(0,a.kt)("h4",{id:"112-\u65b0\u589e\u670d\u52a1\u5bf9\u5e94\u7684\u914d\u7f6e\u6587\u4ef6"},"1.1.2 \u65b0\u589e\u670d\u52a1\u5bf9\u5e94\u7684\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u6587\u4ef6\u6309 linkis-\u670d\u52a1\u540d.properties\u6765\u547d\u540d\uff0c\u7edf\u4e00\u653e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-dist/package/conf/"),"\u76ee\u5f55\u4e0b\uff0c\u670d\u52a1\u542f\u52a8\u65f6\u5019\u4f1a\u52a0\u8f7dlinkis.properties \u901a\u7528\u914d\u7f6e\u6587\u4ef6\u4ee5\u53calinkis-\u670d\u52a1\u540d.properties\u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("p",null,"\u65b0\u589e",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-new-microservice.properties"),"\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),": linkis-dist/package/conf/linkis-new-microservice.properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},'# \n# Licensed to the Apache Software Foundation (ASF) under one or more\n# contributor license agreements.  See the NOTICE file distributed with\n# this work for additional information regarding copyright ownership.\n# The ASF licenses this file to You under the Apache License, Version 2.0\n# (the "License"); you may not use this file except in compliance with\n# the License.  You may obtain a copy of the License at\n# http://www.apache.org/licenses/LICENSE-2.0\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an "AS IS" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n#\n\n\n## \u5982\u4e0d\u9700\u63d0\u4f9b\u63a5\u53e3Api\u5219\u65e0\u9700\u6dfb\u52a0\u6b64\u914d\u7f6e\n##restful\nwds.linkis.server.restful.scan.packages=org.apache.linkis.newmicroservice.server.restful \n\n## mybatis \u6570\u636e\u64cd\u4f5c\u9879\u76ee\u7684\u914d\u7f6e\nwds.linkis.server.mybatis.mapperLocations=classpath*:org/apache/linkis/newmicroservice/server/dao/mapper/*.xml \nwds.linkis.server.mybatis.typeAliasesPackage=org.apache.linkis.newmicroservice.server.domain\nwds.linkis.server.mybatis.BasePackage=org.apache.linkis.newmicroservice.server.dao\n\n\n##\u5207\u52ff\u4e0e\u5176\u4ed6\u670d\u52a1\u7684\u7aef\u53e3\u76f8\u540c\nspring.server.port=9208 \n\n')),(0,a.kt)("h4",{id:"114-\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f"},"1.1.4 \u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u65b9\u4fbf\u8fdb\u884c\u63a5\u53e3\u7684\u8c03\u5f0f\uff0c\u65e0\u9700\u8fdb\u884c\u767b\u9646\u6001\u7684\u9a8c\u8bc1 ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),": linkis-dist/package/conf/linkis.properties"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"test-mode",src:t(82651).Z,width:"806",height:"226"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.test.mode=true   # \u6253\u5f00\u6d4b\u8bd5\u6a21\u5f0f\nwds.linkis.test.user=hadoop  # \u6307\u5b9a\u6d4b\u8bd5\u6a21\u5f0f\u4e0b\uff0c\u6240\u6709\u8bf7\u6c42\u90fd\u4ee3\u7406\u7ed9\u54ea\u4e2a\u7528\u6237\n\n")),(0,a.kt)("h3",{id:"12-\u4ee3\u7801\u5f00\u53d1"},"1.2 \u4ee3\u7801\u5f00\u53d1"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e3a\u65b9\u4fbf\u5927\u5bb6\u5b66\u4e60\uff0c\u73b0\u4ee5\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684API\u63a5\u53e3\u4e3a\u793a\u4f8b\u3002")),(0,a.kt)("h4",{id:"121-\u65b0\u5efa\u63a5\u53e3\u7c7b"},"1.2.1 \u65b0\u5efa\u63a5\u53e3\u7c7b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-microservice",src:t(60639).Z,width:"1607",height:"508"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.linkis.newmicroservice.server.restful;\n\n\nimport io.swagger.annotations.ApiOperation;\nimport org.apache.linkis.server.Message;\nimport org.springframework.web.bind.annotation.*;\n\nimport io.swagger.annotations.Api;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\n@Api(tags = "newmicroservice")\n@RestController\n@RequestMapping(path = "/newmicroservice")\npublic class NewMicroservice {\n\n\n    @ApiOperation(value = "establish", httpMethod = "GET")\n    @RequestMapping(path = "establish", method = RequestMethod.GET)\n    public Message list() {\n        Map&lt;String,String&gt; map=new HashMap&lt;&gt;();\n        map.put("NewMicroservice","Hello! This is a new microservice I registered(\u8fd9\u662f\u6211\u6ce8\u518c\u7684\u4e00\u4e2a\u65b0\u7684\u5fae\u670d\u52a1)");\n        return Message.ok("").data("map", map);\n    }\n\n}\n')),(0,a.kt)("h4",{id:"122-\u65b0\u5efa\u542f\u52a8\u7c7b"},"1.2.2 \u65b0\u5efa\u542f\u52a8\u7c7b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"maven-module",src:t(16656).Z,width:"1720",height:"543"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\npackage org.apache.linkis.newmicroservice.server;\n\nimport org.apache.linkis.LinkisBaseServerApp;\n\nimport org.apache.commons.logging.Log;\nimport org.apache.commons.logging.LogFactory;\n\npublic class LinkisNewMicroserviceApplication {\n\n  private static final Log logger = LogFactory.getLog(LinkisNewMicroserviceApplication.class);\n\n  public static void main(String[] args) throws ReflectiveOperationException {\n    logger.info("Start to running LinkisNewmicroserviceApplication");\n    LinkisBaseServerApp.main(args);\n  }\n}\n')),(0,a.kt)("h3",{id:"13-\u542f\u52a8eureka\u670d\u52a1"},"1.3 \u542f\u52a8eureka\u670d\u52a1"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e00\u6b65\u9aa4\u7684\u5177\u4f53\u6307\u5f15\u5728 ",(0,a.kt)("a",{parentName:"p",href:"../development/debug"},"\u8c03\u8bd5\u6307\u5f15"),"  \u6587\u6863\u4e2d\u5df2\u6709\u5199 \u53ef\u76f4\u63a5\u8bbf\u95ee\uff0c\u8fd9\u91cc\u5c31\u4e0d\u5728\u8fc7\u591a\u4ecb\u7ecd")),(0,a.kt)("h3",{id:"14-\u672c\u5730\u542f\u52a8\u65b0\u5fae\u670d\u52a1"},"1.4 \u672c\u5730\u542f\u52a8\u65b0\u5fae\u670d\u52a1"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bbe\u7f6elinkis-new-microservice\u7684\u542f\u52a8Application")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"commissioning-service",src:t(91172).Z,width:"1446",height:"584"})),(0,a.kt)("p",null,"\u53c2\u6570\u89e3\u91ca\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[Service Name]\nlinkis-new-microservice\n\n[Module Name]\nlinkis-new-microservice\n\n[VM Opitons]\n-DserviceName=linkis-new-microservice -Xbootclasspath/a:{YourPathPrefix}/linkis/linkis-dist/package/conf \n\n[main Class]\norg.apache.linkis.newmicroservice.server.LinkisNewmicroserviceApplication\n\n[Add provided scope to classpath]\n\u901a\u8fc7\u52fe\u9009Include dependencies with \u201cProvided\u201d scope \uff0c\u53ef\u4ee5\u5728\u8c03\u8bd5\u65f6\uff0c\u5f15\u5165provided\u7ea7\u522b\u7684\u4f9d\u8d56\u5305\u3002\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0a\u8ff0\u8bbe\u7f6e\u5b8c\u6210\u4e4b\u540e\uff0c\u53ef\u76f4\u63a5\u8fd0\u884c\u6b64Application\u3002\u8fd0\u884c\u6210\u529f\u540e\u6253\u5f00\u6d4f\u89c8\u5668\u8f93\u5165eureka\u6ce8\u518c\u4e2d\u5fc3\u7684url")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"    http://ip:port/ \n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-service",src:t(50856).Z,width:"1896",height:"352"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f53eureka\u6ce8\u518c\u4e2d\u5fc3\u51fa\u73b0linkis-new-microservice\u670d\u52a1\u5373\u4e3a\u672c\u5730\u6ce8\u518c\u65b0\u7684\u5fae\u670d\u52a1\u6210\u529f\u3002")),(0,a.kt)("h3",{id:"15-postman-\u8fdb\u884c\u63a5\u53e3\u8c03\u8bd5"},"1.5 Postman \u8fdb\u884c\u63a5\u53e3\u8c03\u8bd5"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL"),": http://ip:port/api/rest_j/v1/newmicroservice/establish"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"postman-test",src:t(87951).Z,width:"1699",height:"758"})),(0,a.kt)("h2",{id:"2-\u6253\u5305\u90e8\u7f72"},"2. \u6253\u5305\u90e8\u7f72"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6253\u5305\u90e8\u7f72\u4e3b\u8981\u6709\u6709\u4e24\u4e2a\u9636\u6bb5 \u7b2c\u4e00\u6b65\u662f\u6a21\u5757\u901a\u8fc7maven\u6253\u5305\u540e \u4f1a\u5c06\u6a21\u5757\u6240\u9700\u8981\u7684\u4f9d\u8d56 \u6253\u5305\u5230\u6a21\u5757\u5bf9\u5e94\u7684target\u76ee\u5f55\u4e0b linkis-new-microservice/target/out/lib\u3002\n\u7b2c\u4e8c\u6b65\u662f \u7ec4\u88c5\u5b8c\u6574\u7684\u6700\u7ec8\u90e8\u7f72\u5b89\u88c5\u5305\u65f6\uff0c\u9700\u8981\u5c06",(0,a.kt)("inlineCode",{parentName:"p"}," linkis-new-microservice/target/out/lib")," \u81ea\u52a8\u62f7\u8d1d\u81f3 ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-dist/target/apache-linkis-x.x.x-incubating-bin/linkis-package/lib"),"\u4e0b")),(0,a.kt)("h3",{id:"21-\u4fee\u6539\u65b0\u670d\u52a1\u4e0b\u7684distributionxml"},"2.1 \u4fee\u6539\u65b0\u670d\u52a1\u4e0b\u7684distribution.xml"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),": linkis-public-enhancements/linkis-new-microservice/src/main/assembly/distribution.xml"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-distribution",src:t(62971).Z,width:"1640",height:"530"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7531\u4e8e\u9700\u8981\u6392\u9664\u7684\u4f9d\u8d56\u6bd4\u8f83\u591a\u8fd9\u91cc\u53ea\u8d34\u90e8\u5206\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  <excludes> \x3c!-- \u4e0d\u5305\u62ec --\x3e\n           <exclude>antlr:antlr:jar</exclude>\n           <exclude>aopalliance:aopalliance:jar</exclude>\n           <exclude>com.fasterxml.jackson.core:jackson-annotations:jar</exclude>\n           <exclude>com.fasterxml.jackson.core:jackson-core:jar</exclude>\n </excludes>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u89e3\u91ca\u4e0b\u4e3a\u4ec0\u4e48\u9700\u8981\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"excludes"),"\uff0c\u56e0\u4e3a\u670d\u52a1\u542f\u52a8\u811a\u672c linkis-dist/package/sbin/ext/linkis-common-start  \u4e2d\u4e00\u822c\u4f1a\u9ed8\u8ba4\u52a0\u8f7d\u901a\u7528\u7684lib")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"common-start",src:t(23498).Z,width:"863",height:"207"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6240\u4ee5\u5728\u6253\u5305\u670d\u52a1\u4f9d\u8d56\u65f6\u5019,\u53ef\u4ee5\u6392\u9664\u5df2\u6709\u7684lib\u5305.\u8be6\u7ec6\u53ef\u4ee5\u53c2\u8003linkis-computation-governance/linkis-entrance/src/main/assembly/distribution.xml")),(0,a.kt)("h3",{id:"22-\u4fee\u6539linkis-dist\u4e0b\u7684distributionxml"},"2.2 \u4fee\u6539linkis-dist\u4e0b\u7684distribution.xml"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),": linkis-dist/src/main/assembly/distribution.xml"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6dfb\u52a0fileSet \u914d\u7f6e\uff0c\u6539\u914d\u7f6e\u4e3b\u8981\u662f\u63a7\u5236\u7f16\u8bd1\u6253\u5305\u65f6\u7684\u80fd\u8f93\u51falinkis-new-microservice\u670d\u52a1\u5305")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"fileset",src:t(91036).Z,width:"1033",height:"403"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u53ea\u8d34\u51fa\u6765\u9700\u8981\u65b0\u589e\u7684\u914d\u7f6e\u5185\u5bb9\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"   <fileSet>\n            <directory>\n                ../linkis-public-enhancements/linkis-new-microservice/target/out/lib\n            </directory>\n            <outputDirectory>\n                linkis-package/lib/linkis-public-enhancements/linkis-new-microservice\n            </outputDirectory>\n            <includes>\n                <include>**/*</include>\n            </includes>\n   </fileSet>\n\n")),(0,a.kt)("h3",{id:"23-\u670d\u52a1\u7684\u8fd0\u884c\u914d\u7f6e\u811a\u672c"},"2.3 \u670d\u52a1\u7684\u8fd0\u884c\u914d\u7f6e\u811a\u672c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-configuration",src:t(1903).Z,width:"1633",height:"582"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'\n#!/usr/bin/env bash\n#\n# Licensed to the Apache Software Foundation (ASF) under one or more\n# contributor license agreements.  See the NOTICE file distributed with\n# this work for additional information regarding copyright ownership.\n# The ASF licenses this file to You under the Apache License, Version 2.0\n# (the "License"); you may not use this file except in compliance with\n# the License.  You may obtain a copy of the License at\n# http://www.apache.org/licenses/LICENSE-2.0\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an "AS IS" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n#\n# description:  manager start cmd\n#\n# Modified for Linkis 1.0.0\n\n\nexport SERVER_SUFFIX="linkis-public-enhancements/linkis-new-microservice"\n\n\nexport SERVER_CLASS=org.apache.linkis.newmicroservice.server.LinkisNewMicroserviceApplication\n\n#export DEBUG_PORT=\n\nexport COMMON_START_BIN=$LINKIS_HOME/sbin/ext/linkis-common-start\nif [[ ! -f "${COMMON_START_BIN}" ]]; then\n    echo "The $COMMON_START_BIN  does not exist!"\n    exit 1\nelse\n    sh $COMMON_START_BIN\nfi\n\n')),(0,a.kt)("h3",{id:"24-linkis-start-allsh-\u914d\u7f6e\u4fee\u6539"},"2.4 linkis-start-all.sh \u914d\u7f6e\u4fee\u6539"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),": linkis-dist/package/sbin/linkis-start-all.sh"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"start-script",src:t(9787).Z,width:"1032",height:"365"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u53ea\u8d34\u51fa\u6765\u9700\u8981\u65b0\u589e\u7684\u914d\u7f6e\u5185\u5bb9\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'    ## \u542f\u52a8\u811a\u672c\n    #linkis-new-microservice\n    SERVER_NAME="new-microservice" \n    startApp\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"detection-script",src:t(44526).Z,width:"926",height:"347"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u53ea\u8d34\u51fa\u6765\u9700\u8981\u65b0\u589e\u7684\u914d\u7f6e\u5185\u5bb9\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'    ##\u68c0\u6d4b\u811a\u672c\n    #linkis-new-microservice\n    SERVER_NAME="new-microservice"\n    checkServer\n')),(0,a.kt)("h3",{id:"25-linkis-stop-allsh-\u914d\u7f6e\u4fee\u6539"},"2.5 linkis-stop-all.sh \u914d\u7f6e\u4fee\u6539"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"path"),":linkis-dist/package/sbin/linkis-stop-all.sh"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"stop-script",src:t(58293).Z,width:"821",height:"247"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u53ea\u8d34\u51fa\u6765\u9700\u8981\u65b0\u589e\u7684\u914d\u7f6e\u5185\u5bb9\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'    ## \u505c\u6b62\u811a\u672c\n    #linkis-new-microservice\n    export SERVER_NAME="new-microservice"\n    stopApp\n')),(0,a.kt)("h3",{id:"26-\u5b89\u88c5\u5305\u51c6\u5907"},"2.6 \u5b89\u88c5\u5305\u51c6\u5907"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e00\u6b65\u9aa4\u7684\u5177\u4f53\u6307\u5f15\u5728 ",(0,a.kt)("a",{parentName:"p",href:"../development/build"},"\u540e\u7aef\u7f16\u8bd1"),"  \u6587\u6863\u4e2d\u5df2\u6709\u5199 \u53ef\u76f4\u63a5\u8bbf\u95ee\uff0c\u8fd9\u91cc\u5c31\u4e0d\u5728\u8fc7\u591a\u4ecb\u7ecd")),(0,a.kt)("h3",{id:"27-\u670d\u52a1\u5668\u90e8\u7f72"},"2.7 \u670d\u52a1\u5668\u90e8\u7f72"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u4e3a\u5355\u673a\u90e8\u7f72\u505a\u793a\u4f8b\uff0c\u800c\u8be5\u6b65\u9aa4\u7684\u5177\u4f53\u6307\u5f15\u5728 ",(0,a.kt)("a",{parentName:"p",href:"../deployment/deploy-quick"},"\u5355\u673a\u90e8\u7f72"),"  \u6587\u6863\u4e2d\u5df2\u6709\u5199 \u53ef\u76f4\u63a5\u8bbf\u95ee\uff0c\u8fd9\u91cc\u5c31\u4e0d\u5728\u8fc7\u591a\u4ecb\u7ecd\n\u5f53\u5b89\u88c5\u90e8\u7f72\u6210\u529f\u540e\u53ef\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95eeeureka\u6ce8\u518c\u4e2d\u5fc3\uff0c\u770b\u4e2d\u5fc3\u662f\u5426\u5df2\u7ecf\u6210\u529f\u6ce8\u518clinkis-new-microservice\u670d\u52a1\uff0c\u5982\u6ce8\u518c\u6210\u529f\u5373\u4e3a\u521b\u5efa\u65b0\u7684\u5fae\u670d\u52a1\u6210\u529f\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-service",src:t(50856).Z,width:"1896",height:"352"})))}u.isMDXComponent=!0},91172:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/commissioning-service-5ee70b1a31fad5ecb05a50ada0852b12.png"},23498:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/common-start-95438e917ec8cbf685cb7fba1e3cf438.png"},23479:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/created-successfully-38e7252c58c83c84c7d68b9f191f211a.png"},44526:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/detection-script-5c4fafb9b4781587f8b1c434f92d76b0.png"},91036:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/fileset-a5d335bf41188bfa1a893bf6fa6fb29c.png"},71369:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/maven-module-7c2c3c86d5321174cd0278a3de25b263.png"},78318:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/name-module-e405c145aa474f6467127afcd1816ccb.png"},1903:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/new-configuration-15c913176102e31b92bbb10105387c35.png"},62971:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/new-distribution-fcbc548f2892449c926e270afd2e4284.png"},60639:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/new-microservice-04ed07325802304105f72dc8510543df.png"},42122:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/new-module-26e83fefad1f10a0a966d67e1b9e7393.png"},50856:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/new-service-46a3f18549b7350fe0256802e49b7d8b.png"},87951:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/postman-test-9b60f0c78b3633bbda057e7b3b98e730.png"},9787:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/start-script-6f906207540e8a3734a626fa17fe6096.png"},16656:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/start-up-e88d28789d35a7f7b150b11e8fddeef6.png"},58293:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/stop-script-733ebc978f613ddcea3c70d0584176fd.png"},82651:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/test-mode-163484aba071f98ed856ee156166bb7f.png"},98363:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/thinking-42049bf3020cfa902bf2f6c34ab3279f.png"}}]);