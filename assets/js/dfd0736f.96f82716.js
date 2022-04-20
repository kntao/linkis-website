"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1358],{3905:function(e,n,i){i.d(n,{Zo:function(){return g},kt:function(){return d}});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=t.createContext({}),c=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},g=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(i),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||s;return i?t.createElement(m,r(r({ref:n},g),{},{components:i})):t.createElement(m,r({ref:n},g))}));function d(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<s;c++)r[c]=i[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},57276:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return g},default:function(){return u}});var t=i(87462),a=i(63366),s=(i(67294),i(3905)),r=["components"],l={title:"Linkis Debug",sidebar_position:2},o="Debugging related",c={unversionedId:"development/linkis_debug",id:"development/linkis_debug",isDocsHomePage:!1,title:"Linkis Debug",description:"Because linkis itself has many modules, it is difficult to debug, the following will guide you how to perform a local service debugging (based on version 1.0.3).",source:"@site/docs/development/linkis_debug.md",sourceDirName:"development",slug:"/development/linkis_debug",permalink:"/docs/1.1.1/development/linkis_debug",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/development/linkis_debug.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Linkis Debug",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to Linkis Configuration Parameters",permalink:"/docs/1.1.1/development/linkis_config"},next:{title:"How To Quickly Implement A New Engine",permalink:"/docs/1.1.1/development/new_engine_conn"}},g=[{value:"step 1 Prepare source code and compile",id:"step-1-prepare-source-code-and-compile",children:[]},{value:"step2 Necessary parameter configuration",id:"step2-necessary-parameter-configuration",children:[]},{value:"step3 Adjust log4j.xml configuration",id:"step3-adjust-log4jxml-configuration",children:[]},{value:"step 4 Overall debugging plan",id:"step-4-overall-debugging-plan",children:[{value:"Start of linkis-mg-eureka",id:"start-of-linkis-mg-eureka",children:[]},{value:"Linkis-mg-gateway startup configuration",id:"linkis-mg-gateway-startup-configuration",children:[]},{value:"Linkis-ps-publicservice startup configuration",id:"linkis-ps-publicservice-startup-configuration",children:[]},{value:"Linkis-ps-cs startup configuration",id:"linkis-ps-cs-startup-configuration",children:[]},{value:"linkis-cg-linkismanager start",id:"linkis-cg-linkismanager-start",children:[]},{value:"linkis-cg-entrance start",id:"linkis-cg-entrance-start",children:[]}]},{value:"Remote debugging service steps",id:"remote-debugging-service-steps",children:[{value:"1. Open remote debugging port",id:"1-open-remote-debugging-port",children:[]},{value:"2. Restart the service to be debugged",id:"2-restart-the-service-to-be-debugged",children:[]},{value:"3. Compiler configuration remote debugging",id:"3-compiler-configuration-remote-debugging",children:[]},{value:"4. Start debugging, click the debugging button, and the following information appears, which means you can start debugging",id:"4-start-debugging-click-the-debugging-button-and-the-following-information-appears-which-means-you-can-start-debugging",children:[]}]}],p={toc:g};function u(e){var n=e.components,l=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,t.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"debugging-related"},"Debugging related"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Because linkis itself has many modules, it is difficult to debug, the following will guide you how to perform a local service debugging (based on version 1.0.3).")),(0,s.kt)("h4",null,(0,s.kt)("font",{color:"red"},"Before version 1.0.3, linkis has not yet entered apache incubation. The organization still belongs to webank. The package name of the main class is `org.apache.linkis`. Pay attention to the distinction when debugging. ")),(0,s.kt)("h2",{id:"step-1-prepare-source-code-and-compile"},"step 1 Prepare source code and compile"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"git clone https://github.com/apache/incubator-linkis.git\ncd incubator-linkis\n#If needed, you can switch to the corresponding branch\n#git checkout dev-xxx\nmvn -N install\nmvn clean Install\n")),(0,s.kt)("h2",{id:"step2-necessary-parameter-configuration"},"step2 Necessary parameter configuration"),(0,s.kt)("p",null,"For the configuration file under incubator-linkis/assembly-combined-package/assembly-combined/conf/, you need to configure the database and hive meta and other necessary startup parameters."),(0,s.kt)("h2",{id:"step3-adjust-log4jxml-configuration"},"step3 Adjust log4j.xml configuration"),(0,s.kt)("p",null,"In order to facilitate the printing of logs to the console during debugging, you need to modify the default log4j2.xml file and modify the appender to default to console. You need to remove the append of the default RollingFile and add the appender of the console, as shown below:\n",(0,s.kt)("img",{src:i(97676).Z}),"\nlog4j2.xml path incubator-linkis/assembly-combined-package/assembly-combined/conf/log4j2.xml"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},' <?xml version="1.0" encoding="UTF-8"?>\n<configuration status="error" monitorInterval="30">\n<appenders>\n    <RollingFile name="RollingFile" append="false" fileName="logs/${sys:serviceName}.log"\n                 filePattern="logs/$${date:yyyy-MM}/${sys:serviceName}/linkis-log-%d{yyyy-MM-dd}-%i.log">\n        <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level] [%-40t] %c{1.} (%L) [%M]-%msg%xEx %n"/>\n        <SizeBasedTriggeringPolicy size="100MB"/>\n        <DefaultRolloverStrategy max="10"/>\n    </RollingFile>\n    \n    <Console name="Console" target="SYSTEM_OUT">\n        <ThresholdFilter level="INFO" onMatch="ACCEPT" onMismatch="DENY"/>\n        <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M-%msg%xEx%n"/>\n    </Console>\n</appenders>\n<loggers>\n    <root level="INFO">\n        <appender-ref ref="RollingFile"/>\n        <appender-ref ref="Console"/>\n    </root>\n</loggers>\n</configuration>\n')),(0,s.kt)("h2",{id:"step-4-overall-debugging-plan"},"step 4 Overall debugging plan"),(0,s.kt)("p",null,"Both Linkis and DSS services rely on Eureka, so you need to start the Eureka service first, and the Eureka service can also use the Eureka you have started. After Eureka is started, other services can be started."),(0,s.kt)("p",null,"Because linkis internally uses the -DserviceName parameter to set the application name and the configuration file used, so -DserviceName is a necessary startup VM parameter"),(0,s.kt)("p",null,'You can use the "-Xbootclasspath/a: configuration file path" command. Append the configuration file to the end of the search path of the bootloader class, and add the dependent configuration file to the classpath'),(0,s.kt)("p",null,'By checking Include dependencies with "Provided" scope, you can introduce provided-level dependency packages during debugging.'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Microservice Governance Services component")),(0,s.kt)("h3",{id:"start-of-linkis-mg-eureka"},"Start of linkis-mg-eureka"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.eureka.SpringCloudEurekaApplication\n\n[VM Opitons]\n-DserviceName=linkis-mg-eureka -Xbootclasspath/a:D:\\yourDir\\incubator-linkis\\assembly-combined-package\\assembly-combined\\conf\n\n[Program arguments]\n--spring.profiles.active=eureka --eureka.instance.preferIpAddress=true\n\n[User classpath of module]\nlinkis-eureka\n")),(0,s.kt)("p",null,"If you don\u2019t want the default port 20303, you can modify the port configuration:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"File path: conf/application-eureka.yml\nModify the port:\nserver:\n  port: 8080 ##Started port\n")),(0,s.kt)("p",null,"The specific configuration is as follows\n",(0,s.kt)("img",{src:i(25698).Z})),(0,s.kt)("p",null,"After startup, you can view the list of eureka services through ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:20303/"},"http://localhost:20303/"),"\n",(0,s.kt)("img",{src:i(18894).Z})),(0,s.kt)("h3",{id:"linkis-mg-gateway-startup-configuration"},"Linkis-mg-gateway startup configuration"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.gateway.springcloud.LinkisGatewayApplication\n\n[VM Opitons]\n-DserviceName=linkis-mg-gateway -Xbootclasspath/a:D:\\yourDir\\incubator-linkis\\assembly-combined-package\\assembly-combined\\conf\n\n[User classpath of module]\nlinkis-gateway-server-support\n\n")),(0,s.kt)("p",null,"Note If there is a problem of'org.apache.logging.log4j.LoggingException: log4j-slf4j-impl cannot be present with log4j-to-slf4j'\nPlease exclude, the dependency on spring-boot-starter-logging"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Public Enhancement Services component")),(0,s.kt)("h3",{id:"linkis-ps-publicservice-startup-configuration"},"Linkis-ps-publicservice startup configuration"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.jobhistory.LinkisPublicServiceApp\n\n[VM Opitons]\n-DserviceName=linkis-ps-publicservice -Xbootclasspath/a:D:\\yourDir\\incubator-linkis\\assembly-combined-package\\assembly-combined\\conf\n\n[User classpath of module]\nlinkis-jobhistory\n")),(0,s.kt)("h3",{id:"linkis-ps-cs-startup-configuration"},"Linkis-ps-cs startup configuration"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.cs.server.LinkisCSApplication\n\n[VM Opitons]\n-DserviceName=linkis-ps-cs -Xbootclasspath/a:D:\\yourDir\\incubator-linkis\\assembly-combined-package\\assembly-combined\\conf\n\n[User classpath of module]\nlinkis-cs-server\n\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Computation Governance Services component")),(0,s.kt)("h3",{id:"linkis-cg-linkismanager-start"},"linkis-cg-linkismanager start"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.manager.am.LinkisManagerApplication\n\n[VM Opitons]\n-DserviceName=linkis-cg-linkismanager -Xbootclasspath/a:D:\\yourDir\\incubator-linkis\\assembly-combined-package\\assembly-combined\\conf\n\n[User classpath of module]\nlinkis-application-manager\n")),(0,s.kt)("h3",{id:"linkis-cg-entrance-start"},"linkis-cg-entrance start"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plain"},"[main Class]\norg.apache.linkis.entrance.LinkisEntranceApplication\n\n[VM Opitons]\n-DserviceName=linkis-cg-entrance -Xbootclasspath/a:D:\\yourDir\\incubator-linkis\\assembly-combined-package\\assembly-combined\\conf\n\n[User classpath of module]\nlinkis-entrance\n")),(0,s.kt)("h4",null,(0,s.kt)("font",{color:"red"},"Note: Windows local debugging service is not currently supported")),(0,s.kt)("p",null,"linkis-cg-engineplugin(ecp): Need to read local ecp materials, local debugging needs to prepare the corresponding materials first, it is recommended to debug remotely"),(0,s.kt)("p",null,"linkis-cg-engineconnmanager(ecm): temporarily ecm starts the engine using the unix method and does not support the windows environment"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"The following are the specific detailed command parameters for starting the linkis service after a normal and successful installation\n\nLinkisInstallDir: complete linkis installation directory\n\n[linkis-mg-eureka]\nnohup java -DserviceName=linkis-mg-eureka -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-mg-eureka-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-spring-cloud-services/linkis-mg-eureka/* org.apache.linkis.eureka.SpringCloudEurekaApplication --eureka.instance.hostname=bdpujes110001 --spring.profiles.active=eureka 2>&1> / data/LinkisInstallDir/logs/linkis-mg-eureka.out &\n\n[linkis-mg-gateway]\nnohup java -DserviceName=linkis-mg-gateway -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-mg-gateway-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-spring-cloud-services/linkis-mg-gateway/* org.apache.linkis.gateway.springcloud.LinkisGatewayApplication 2>&1> /data/LinkisInstallDir/logs/linkis-mg-gateway.out &\n\n[linkis-ps-publicservice]\nnohup java -DserviceName=linkis-ps-publicservice -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-ps-publicservice-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-public-enhancements/linkis-ps-publicservice/* org.apache.linkis.jobhistory.LinkisPublicServiceApp 2>&1> /data/LinkisInstallDir /logs/linkis-ps-publicservice.out &\n\n[linkis-cg-linkismanager]\nnohup java -DserviceName=linkis-cg-linkismanager -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-cg-linkismanager-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-computation-governance/linkis-cg-linkismanager/* org.apache.linkis.manager.am.LinkisManagerApplication 2>&1> /data /LinkisInstallDir/logs/linkis-cg-linkismanager.out &\n\n[linkis-ps-cs]\nnohup java -DserviceName=linkis-ps-cs -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-ps-cs-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-public-enhancements/linkis-ps-cs/* org.apache.linkis.cs.server.LinkisCSApplication 2>&1> /data /LinkisInstallDir/logs/linkis-ps-cs.out &\n\n[linkis-cg-entrance]\nnohup java -DserviceName=linkis-cg-entrance -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-cg-entrance-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-computation-governance/linkis-cg-entrance/* org.apache.linkis.entrance.LinkisEntranceApplication 2>&1> /data/LinkisInstallDir /logs/linkis-cg-entrance.out &\n\n[linkis-cg-engineconnmanager]\nnohup java -DserviceName=linkis-cg-engineconnmanager -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-cg-engineconnmanager-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-computation-governance/linkis-cg-engineconnmanager/* org.apache.linkis.ecm.server.LinkisECMApplication 2>&1> /data /LinkisInstallDir/logs/linkis-cg-engineconnmanager.out &\n\n[linkis-cg-engineplugin]\nnohup java -DserviceName=linkis-cg-engineplugin -Xmx512M -XX:+UseG1GC -Xloggc:/data/LinkisInstallDir/logs/linkis-cg-engineplugin-gc.log -cp /data/LinkisInstallDir/conf/:/data/LinkisInstallDir /lib/linkis-commons/public-module/*:/data/LinkisInstallDir/lib/linkis-computation-governance/linkis-cg-engineplugin/* org.apache.linkis.engineplugin.server.LinkisEngineConnPluginServer 2>&1> /data /LinkisInstallDir/logs/linkis-cg-engineplugin.out &\n")),(0,s.kt)("h2",{id:"remote-debugging-service-steps"},"Remote debugging service steps"),(0,s.kt)("h3",{id:"1-open-remote-debugging-port"},"1. Open remote debugging port"),(0,s.kt)("h4",{id:"11-specify-the-service-of-the-package-to-be-debugged"},"1.1 specify the service of the package to be debugged"),(0,s.kt)("p",null,"For example: view the services using the linkis configuration module  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"//Query command\nfind lib/ -name *linkis-configuration\\*. jar*\n")),(0,s.kt)("p",null,"If the returned result is empty, the calling service is the current service",(0,s.kt)("br",{parentName:"p"}),"\n","If the returned result is not empty, call the service, as shown in the figure:",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/163560068-0284b298-a22a-4045-ab29-12e7b6200364.png",alt:"screenshot of enterprise wechat _16500112961131"})),(0,s.kt)("h4",{id:"12-enter-linkis_homesbinext-modify-the-module-configuration-file-and-open-the-remote-call-port"},"1.2 enter {linkis_home}/sbin/ext, modify the module configuration file, and open the remote call port"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/163562830-aa39c29f-5216-4eaa-ac0c-fbd96a0dffd5.png",alt:"19928486"})),(0,s.kt)("h3",{id:"2-restart-the-service-to-be-debugged"},"2. Restart the service to be debugged"),(0,s.kt)("p",null,"sh linkis-daemon.sh restart ps-configuration (if you are not sure about the service name, query in {links_home}/sbin/links-start-all.sh)"),(0,s.kt)("h3",{id:"3-compiler-configuration-remote-debugging"},"3. Compiler configuration remote debugging"),(0,s.kt)("p",null,"As shown in the figure below, open the window and configure the port, service and module of remote debugging",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/163562214-0a65c689-426b-4f09-ad0f-68407cac2ce1.png",alt:"remote-debug-config"})),(0,s.kt)("h3",{id:"4-start-debugging-click-the-debugging-button-and-the-following-information-appears-which-means-you-can-start-debugging"},"4. Start debugging, click the debugging button, and the following information appears, which means you can start debugging"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/163559920-05aba3c3-b146-4f62-8e20-93f94a65158d.png",alt:"screenshot of enterprise wechat _16500167527083"})))}u.isMDXComponent=!0},25698:function(e,n,i){n.Z=i.p+"assets/images/debug_application-3e4a173c7fcd802bbb0f633320f9f385.png"},18894:function(e,n,i){n.Z=i.p+"assets/images/debug_eureka-37fd89e3fa3b354ee4dcf046e847fd12.png"},97676:function(e,n,i){n.Z=i.p+"assets/images/debug_log-0a9fd2e59cff71b638015d97369aa9ea.png"}}]);