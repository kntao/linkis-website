"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[35765],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=o.createContext({}),d=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=d(n),p=i,h=f["".concat(u,".").concat(p)]||f[p]||c[p]||r;return n?o.createElement(h,a(a({ref:t},l),{},{components:n})):o.createElement(h,a({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17074:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return l},default:function(){return f}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],s={title:"Use of UDFs",sidebar_position:2},u=void 0,d={unversionedId:"user-guide/udf",id:"version-1.1.3/user-guide/udf",isDocsHomePage:!1,title:"Use of UDFs",description:"1 Introduction to UDFs",source:"@site/versioned_docs/version-1.1.3/user-guide/udf.md",sourceDirName:"user-guide",slug:"/user-guide/udf",permalink:"/docs/latest/user-guide/udf",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.3/user-guide/udf.md",tags:[],version:"1.1.3",sidebarPosition:2,frontMatter:{title:"Use of UDFs",sidebar_position:2},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"JAVA SDK Manual",permalink:"/docs/latest/user-guide/sdk-manual"},next:{title:"Linkis-Cli Manual",permalink:"/docs/latest/user-guide/linkiscli-manual"}},l=[{value:"1 Introduction to UDFs",id:"1-introduction-to-udfs",children:[]},{value:"2 UDF additions, deletions and modifications",id:"2-udf-additions-deletions-and-modifications",children:[{value:"2.1 UDF added",id:"21-udf-added",children:[]},{value:"2.2 UDF modification",id:"22-udf-modification",children:[]},{value:"2.3 UDF deletion",id:"23-udf-deletion",children:[]}]},{value:"5 Introduction of other functions",id:"5-introduction-of-other-functions",children:[{value:"5.1 UDF handover",id:"51-udf-handover",children:[]},{value:"5.2 UDF Expiration",id:"52-udf-expiration",children:[]},{value:"5.3 UDF version list",id:"53-udf-version-list",children:[]}]}],c={toc:l};function f(e){var t=e.components,s=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-introduction-to-udfs"},"1 Introduction to UDFs"),(0,r.kt)("p",null,"UDF: User Defined Function, user-defined function. In some scenarios, we need to use hive functions to process some data, such as count(), sum() functions are built-in. If we want to use some functions that do not come with them, we need to customize the function functions, which can be done by writing UDF."),(0,r.kt)("p",null,"The way to implement a UDF is relatively simple: just inherit the UDF class and override the evaluate method."),(0,r.kt)("p",null,"public class HelloUDF extends UDF{"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    public String evaluate(String str){\n            try {\n                    return "Hello " + str;\n            } catch (Exception e) {\n                    // TODO: handle exception\n                    e.printStackTrace();\n                    return "ERROR";\n            }\n    }\n')),(0,r.kt)("p",null,"Several types of UDF"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"UDF function")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Requires registration to use")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Universal type of UDF function: refers to the UDF function that can be used by both Hive's hql and Spark's sql, generally compiled into a jar package"),(0,r.kt)("li",{parentName:"ul"},"Spark-type UDF function: Spark-specific UDF, you need to create the corresponding scala/python script first, and register it through scala or python function. After registration, it can also be used in sql")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Custom Function"),"\nPythonUDF and ScalaUDF can only be used in Spark engine"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"python custom function, based on functions written in python"),(0,r.kt)("li",{parentName:"ul"},"scala custom functions, functions written based on scala")),(0,r.kt)("h2",{id:"2-udf-additions-deletions-and-modifications"},"2 UDF additions, deletions and modifications"),(0,r.kt)("p",null,"Click on the linkis management console: Home >> UDF Management\n",(0,r.kt)("img",{src:n(1985).Z})),(0,r.kt)("p",null,'There are two columns "UDF management" and "function management" in the entry, among which the function management column is a general method function, such as python and scala functions, which can be used like ordinary functions in the script without registration, UDF needs It can only be used after registration.\n',(0,r.kt)("img",{src:n(25099).Z})),(0,r.kt)("h3",{id:"21-udf-added"},"2.1 UDF added"),(0,r.kt)("p",null,"Added generic UDF functions:"),(0,r.kt)("p",null,"You need to compile the corresponding Jar package and upload it to the corresponding user's workspace (if you use the dss family bucket, you can upload it through scriptis, if you use linkis alone, you need to manually upload it to the corresponding directory)"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(56382).Z})),(0,r.kt)("p",null,'Click the Add UDF button, there are two types of UDFs that can be added, select the "general" type and register through the jar package. The registration format needs to write the fully qualified class name of the UDF implementation class.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(48048).Z})),(0,r.kt)("p",null,"Added Spark-type UDF functions:"),(0,r.kt)("p",null,'If you select the "spark" type, select the defined scala or python function to register, and you can also use it in sql after registration, similar to: select hello("abc").'),(0,r.kt)("p",null,"It should be noted that after adding udf, the corresponding jar package or script content will be uploaded to bml storage. If the locally modified resource needs to be updated to take effect."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(34735).Z})),(0,r.kt)("h3",{id:"22-udf-modification"},"2.2 UDF modification"),(0,r.kt)("p",null,"Click the edit button corresponding to the udf."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(72570).Z})),(0,r.kt)("p",null,"If you need to update the content of the udf, you need to edit the udf and upload it again, and generate a new version of the udf. If the content of the script has not changed, but only modified other content such as: using the format, only the information will be updated, and a new version will not be generated."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(57999).Z})),(0,r.kt)("h3",{id:"23-udf-deletion"},"2.3 UDF deletion"),(0,r.kt)("p",null,"Click the delete button of the corresponding udf, note: all versions of the udf will be deleted."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(88187).Z})),(0,r.kt)("p",null,'##3 UDF usage\nIf you want to make the UDF you created valid for use in the program, you need to load the UDF. The entrance of "load"/"unload" is: enter the UDF function on the left side of scriptis -> personal function, the created UDF is in the personal function list.'),(0,r.kt)("p",null,"Note 1: When adding a UDF, if it is not automatically unchecked on the page, it will be loaded by default."),(0,r.kt)("p",null,"Note 2: For the operation of loading/unloading udf, you need to kill the corresponding engine to start a new engine, and the operation will take effect"),(0,r.kt)("p",null,"Introduction to the non-personal functions in the list:"),(0,r.kt)("p",null,"BDAP function: functions created by bdap for users, such as desensitization functions. Note: The bdap function needs to be actively loaded before it can be used."),(0,r.kt)("p",null,"System function: The default built-in function of the system can be used in the code without the user's own loading."),(0,r.kt)("p",null,"Shared function: a function shared with you by others, you need to load it to use"),(0,r.kt)("p",null,"Expiration function: It is also a shared function, but the sharer marks it as expired, which does not affect the use for the time being"),(0,r.kt)("p",null,"##4 UDF sharing\nPrerequisite: The sharing function needs to be used by the user as an administrator, otherwise the front-end page will not provide an operation entry."),(0,r.kt)("p",null,"Click the share button of udf: the content box will pop up, enter the list of users you want to share (comma separated)."),(0,r.kt)("p",null,"Note: After sharing to others, others need to actively load the UDF before using it."),(0,r.kt)("p",null,'After sharing, the shared user can find it in "Shared Function", check the load and use it.'),(0,r.kt)("h2",{id:"5-introduction-of-other-functions"},"5 Introduction of other functions"),(0,r.kt)("h3",{id:"51-udf-handover"},"5.1 UDF handover"),(0,r.kt)("p",null,"For example, when the user leaves the company, it may be necessary to hand over personal udf to others. Click the Handover button, select your handover object, and click OK."),(0,r.kt)("h3",{id:"52-udf-expiration"},"5.2 UDF Expiration"),(0,r.kt)("p",null,"For a UDF shared to others, if it has been loaded by the sharing user, the udf cannot be deleted directly, but the udf can only be marked as expired. For the time being, it is only used for marking and does not affect use."),(0,r.kt)("h3",{id:"53-udf-version-list"},"5.3 UDF version list"),(0,r.kt)("p",null,'Click the "version list" button of a udf to view all versions of the udf. The following features are provided for each version:'),(0,r.kt)("p",null,"Create a new version: Copy the corresponding version to the latest version."),(0,r.kt)("p",null,"Download: Download the udf file from bml to the local."),(0,r.kt)("p",null,"View the source code: For the python/scala script type, you can directly view the source code, but the jar type is not supported."),(0,r.kt)("p",null,"Publish: The shared udf can click to publish a certain version, so that the version will take effect for the shared user. Note: Shared users use the latest version of udf released, and individual users always use the latest version."))}f.isMDXComponent=!0},1985:function(e,t,n){t.Z=n.p+"assets/images/udf_01-3d8f047e965f8f15e1af417924f52171.png"},25099:function(e,t,n){t.Z=n.p+"assets/images/udf_02-7996643a73fe881d6059b974a338813c.png"},48048:function(e,t,n){t.Z=n.p+"assets/images/udf_03-757ca14edd9a6c6bb13b8df4b4b070a4.png"},34735:function(e,t,n){t.Z=n.p+"assets/images/udf_04-dd2131c1f384c7d4c1d62ff7d9597272.png"},72570:function(e,t,n){t.Z=n.p+"assets/images/udf_05-212ec9d07132437ef767120a51efa8de.png"},57999:function(e,t,n){t.Z=n.p+"assets/images/udf_06-8dd60a73e31f07a2d96f03c7cab1d105.png"},88187:function(e,t,n){t.Z=n.p+"assets/images/udf_07-af225a5544e3f7fcbd83cc746d53e3eb.png"},56382:function(e,t,n){t.Z=n.p+"assets/images/udf_09-4bc7817af6d86ed141c247dd9fb914f4.png"}}]);