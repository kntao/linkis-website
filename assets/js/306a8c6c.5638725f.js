"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[97616],{59479:function(e){e.exports=JSON.parse('{"pluginId":"community","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"How to Subscribe","href":"/community/how-to-subscribe","docId":"how-to-subscribe"},{"type":"link","label":"How to Use Email List","href":"/community/how-to-email","docId":"how-to-email"},{"type":"link","label":"How to Participate in Project Contribution","href":"/community/how-to-contribute","docId":"how-to-contribute"},{"type":"link","label":"How to Ask for Help","href":"/community/how-to-ask-for-help","docId":"how-to-ask-for-help"},{"type":"link","label":"How to Participate in the Official Website Contribution","href":"/community/how-to-contribute-to-website","docId":"how-to-contribute-to-website"},{"type":"link","label":"How to Participate in Developer Meetings","href":"/community/how-to-participate-in-developer-meetings","docId":"how-to-participate-in-developer-meetings"},{"type":"link","label":"How to Release","href":"/community/how-to-release","docId":"how-to-release"},{"type":"link","label":"How to Verify","href":"/community/how-to-verify","docId":"how-to-verify"},{"type":"link","label":"Security","href":"/community/security","docId":"security"},{"type":"link","label":"Apache Product Name Usage Guide","href":"/community/apache-product-name-usage-guide","docId":"apache-product-name-usage-guide"},{"type":"link","label":"How to Vote New Committer/PPMC","href":"/community/how-to-vote-a-committer-ppmc","docId":"how-to-vote-a-committer-ppmc"},{"type":"link","label":"ICLA Signing Process","href":"/community/how-to-sign-apache-icla","docId":"how-to-sign-apache-icla"},{"type":"link","label":"PPMC/Committer Related Permission Configuration","href":"/community/ppmc-related-permission-configuration","docId":"ppmc-related-permission-configuration"},{"type":"link","label":"How to Write Unit Test Code","href":"/community/how-to-write-unit-test-code","docId":"how-to-write-unit-test-code"},{"type":"link","label":"Division of Microservices","href":"/community/microservice-division","docId":"microservice-division"},{"type":"link","label":"Site Map","href":"/community/site-map","docId":"site-map"},{"type":"category","label":"Development Specification","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/community/development-specification/overview","docId":"development-specification/overview"},{"type":"link","label":"License Notes","href":"/community/development-specification/license","docId":"development-specification/license"},{"type":"link","label":"Programming Specification","href":"/community/development-specification/programming-specification","docId":"development-specification/programming-specification"},{"type":"link","label":"Commit Message Notice","href":"/community/development-specification/commit-message","docId":"development-specification/commit-message"},{"type":"link","label":"Log Specification","href":"/community/development-specification/log","docId":"development-specification/log"},{"type":"link","label":"Exception Catch Specification","href":"/community/development-specification/exception-catch","docId":"development-specification/exception-catch"},{"type":"link","label":"API Specification","href":"/community/development-specification/api","docId":"development-specification/api"},{"type":"link","label":"Concurrent Specification","href":"/community/development-specification/concurrent","docId":"development-specification/concurrent"},{"type":"link","label":"Path Usage Specification","href":"/community/development-specification/path-usage","docId":"development-specification/path-usage"},{"type":"link","label":"Test Specification","href":"/community/development-specification/unit-test","docId":"development-specification/unit-test"},{"type":"link","label":"Version and New Feature Specification","href":"/community/development-specification/version-feature-specifications","docId":"development-specification/version-feature-specifications"},{"type":"link","label":"Release-Notes Writing Specification","href":"/community/development-specification/release-notes","docId":"development-specification/release-notes"}]}]},"docs":{"apache-product-name-usage-guide":{"id":"apache-product-name-usage-guide","title":"Apache Product Name Usage Guide","description":"See https://www.apache.org/foundation/marks/guide for detailed and complete instructions","sidebar":"tutorialSidebar"},"development-specification/api":{"id":"development-specification/api","title":"API Specification","description":"When Contributor contributes new RESTful interfaces to Linkis, it is required to follow the following interface specifications for interface development.","sidebar":"tutorialSidebar"},"development-specification/commit-message":{"id":"development-specification/commit-message","title":"Commit Message Notice","description":"This article is quoted from https://dolphinscheduler.apache.org/en-us/docs/dev/user_doc/contribute/join/commit-message.html","sidebar":"tutorialSidebar"},"development-specification/concurrent":{"id":"development-specification/concurrent","title":"Concurrent Specification","description":"1. [Compulsory] Make sure getting a singleton object to be thread-safe. Operating inside singletons should also be kept thread-safe.","sidebar":"tutorialSidebar"},"development-specification/exception-catch":{"id":"development-specification/exception-catch","title":"Exception Catch Specification","description":"1. [Mandatory] For the exception of each small module, a special exception class should be defined to facilitate the subsequent generation of error codes for users. It is not allowed to throw any RuntimeException or directly throw Exception.","sidebar":"tutorialSidebar"},"development-specification/license":{"id":"development-specification/license","title":"License Notes","description":"Note: This article applies to Apache projects only.","sidebar":"tutorialSidebar"},"development-specification/log":{"id":"development-specification/log","title":"Log Specification","description":"1.\\t[Convention] Linkis chooses SLF4J and Log4J2 as the log printing framework, removing the logback in the Spring-Cloud package. Since SLF4J will randomly select a logging framework for binding, it is necessary to exclude bridging packages such as SLF4J-LOG4J after introducing new Maven packages in the future, otherwise log printing will be a problem. However, if the newly introduced Maven package depends on a package such as Log4J, do not exclude, otherwise the code may run with an error.","sidebar":"tutorialSidebar"},"development-specification/overview":{"id":"development-specification/overview","title":"Overview","description":"In order to standardize Linkis\'s community development environment, improve the output quality of subsequent development iterations of Linkis, and standardize the entire development and design process of Linkis, it is strongly recommended that Contributors follow the following development specifications:","sidebar":"tutorialSidebar"},"development-specification/path-usage":{"id":"development-specification/path-usage","title":"Path Usage Specification","description":"Please note: Linkis provides a unified Storage module, so you must follow the Linkis path specification when using the path or configuring the path in the configuration file.","sidebar":"tutorialSidebar"},"development-specification/programming-specification":{"id":"development-specification/programming-specification","title":"Programming Specification","description":"1. Naming Convention","sidebar":"tutorialSidebar"},"development-specification/release-notes":{"id":"development-specification/release-notes","title":"Release-Notes Writing Specification","description":"Before each version is released, the release-notes for this version need to be organized by the release manager or developer to briefly describe the specific changes included in the new version update.","sidebar":"tutorialSidebar"},"development-specification/unit-test":{"id":"development-specification/unit-test","title":"Test Specification","description":"1. [Mandatory] Tool classes and internal interfaces of services must have test case.","sidebar":"tutorialSidebar"},"development-specification/version-feature-specifications":{"id":"development-specification/version-feature-specifications","title":"Version and New Feature Specification","description":"1. New version specification","sidebar":"tutorialSidebar"},"how-to-ask-for-help":{"id":"how-to-ask-for-help","title":"How to Ask for Help","description":"---","sidebar":"tutorialSidebar"},"how-to-contribute":{"id":"how-to-contribute","title":"How to Participate in Project Contribution","description":"| Version Management Information Form | |","sidebar":"tutorialSidebar"},"how-to-contribute-to-website":{"id":"how-to-contribute-to-website","title":"How to Participate in the Official Website Contribution","description":"Branch","sidebar":"tutorialSidebar"},"how-to-email":{"id":"how-to-email","title":"How to Use Email List","description":"Introduces mailing list usage guidelines and reference examples","sidebar":"tutorialSidebar"},"how-to-participate-in-developer-meetings":{"id":"how-to-participate-in-developer-meetings","title":"How to Participate in Developer Meetings","description":"Introduction to developer meetings","sidebar":"tutorialSidebar"},"how-to-release":{"id":"how-to-release","title":"How to Release","description":"This article takes the release of 1.0.3 Apache version as an example. If it is a non-Apache version, please refer to the detailed information https://incubator.apache.org/guides/releasemanagement.html","sidebar":"tutorialSidebar"},"how-to-sign-apache-icla":{"id":"how-to-sign-apache-icla","title":"ICLA Signing Process","description":"Apache Sign ICLA Guide","sidebar":"tutorialSidebar"},"how-to-subscribe":{"id":"how-to-subscribe","title":"How to Subscribe","description":"Apache has configured a series of mailing lists for each project. Mailing lists are an important form of communication in the Apache community.","sidebar":"tutorialSidebar"},"how-to-verify":{"id":"how-to-verify","title":"How to Verify","description":"For detailed check list, please refer to the official check list","sidebar":"tutorialSidebar"},"how-to-vote-a-committer-ppmc":{"id":"how-to-vote-a-committer-ppmc","title":"How to Vote New Committer/PPMC","description":"Introduce the selection requirements and process for Committer and PPMC. Official guidelines can be found at//community.apache.org/newcommitter.html","sidebar":"tutorialSidebar"},"how-to-write-unit-test-code":{"id":"how-to-write-unit-test-code","title":"How to Write Unit Test Code","description":"Frame Selection","sidebar":"tutorialSidebar"},"microservice-division":{"id":"microservice-division","title":"Division of Microservices","description":"Introduction to service","sidebar":"tutorialSidebar"},"ppmc-related-permission-configuration":{"id":"ppmc-related-permission-configuration","title":"PPMC/Committer Related Permission Configuration","description":"PPMC (Podling Project Management Committee)/Committer member, bind github account process/and main email subscription","sidebar":"tutorialSidebar"},"security":{"id":"security","title":"Security","description":"The Apache Software Foundation takes a rigorous stance on eliminating security issues in its software projects. Likewise, Apache Linkis is also vigilant and takes security issues related to its features and functionality into the highest consideration.","sidebar":"tutorialSidebar"},"site-map":{"id":"site-map","title":"Site Map","description":"Related Links","sidebar":"tutorialSidebar"}}}')}}]);