(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{1:function(e,t){},e9a4:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-ma-md"},[a("div",{},[a("q-card",[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"secondary","indicator-color":"secondary",align:"justify"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{name:"resume",label:"Resume",icon:"timeline"}}),a("q-tab",{attrs:{name:"portfolio",label:"Github Portfolio",icon:"grid_on",disable:e.tabdisable}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"portfolio"}},[a("div",{staticClass:"text-h6 q-mb-sm text-center"},[e._v("\n               Github "),e.data?a("span",{staticClass:"float-right text-grey"},[e._v(e._s(e.data.length)+"\n              "),a("q-icon",{attrs:{name:"public",size:"22px"}}),e._v(" 8 "),a("q-icon",{attrs:{name:"lock",size:"22px"}})],1):e._e()]),a("PortfolioComponent",{attrs:{ports:e.data}})],1),a("q-tab-panel",{attrs:{name:"resume"}},[a("Resume")],1)],1)],1)],1)])},r=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("9523")),o=a.n(i),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-px-lg q-pb-md"},[a("q-timeline",{attrs:{color:"secondary"}},[a("q-timeline-entry",{staticClass:"text-center",attrs:{heading:""}},[e._v("\n            Resume\n        ")]),a("q-timeline-entry",{attrs:{title:"Freelance",subtitle:"March 2029 – May 2020",icon:"work_outline",color:"yellow"}},[a("div",[e._v("\n          • Web SPA, PWA projects. "),a("br"),e._v("\n          • Some SEO tasks. "),a("br"),e._v("\n          • Multiple WordPress projects."),a("br"),e._v("\n          • WooCommerce implementations. "),a("br"),e._v("\n          • PayPal business and API integrations."),a("br")])]),a("q-timeline-entry",{attrs:{title:"EvdeXidmet, (Web Platform)",subtitle:"September 2019 – Feburary 2020",icon:"web",color:"orange"}},[a("div",[e._v("\n            I have created web platform which facilitates reaching professionals and different home service providers "),a("br"),e._v("\n                    from website and mobile app. Platform divided into 2 parts with 2 dashboards, client and “provider”. "),a("br"),e._v("\n                • Backend of app created with Laravel."),a("br"),e._v("\n                • Font end created as a PWA with Quasar (VueJs) framework."),a("br"),e._v("\n                • System is using WebSocket in order to achieve real time notifications and updates."),a("br"),e._v("\n                • DB is on MySql."),a("br"),e._v("\n                • Mobile app generated with Cordova and PWA which uses native mobile features."),a("br"),e._v("\n                • App is containerized on Linux server and Docker ecosystem."),a("br")])]),a("q-timeline-entry",{attrs:{title:"Internship Baktelecom MMC 2. XTQ",subtitle:"April 2019 – May 2019",icon:"work",color:"yellow"}},[a("div",[e._v("\n                The main task of mine was to automate and facilitate creation of graphical and chart reports from given"),a("br"),e._v("\n                data in .dbf or .txt formats and create web Dashboard for that task."),a("br"),e._v("\n                • Backend of Dashboard created with Laravel 5.8"),a("br"),e._v("\n                • Frontend created with Materializecss 1.0"),a("br"),e._v("\n                • Graphics and statistic charts created with ChartJS"),a("br"),e._v("\n                • The given data was in different file formats such as .dbf. The migration of data from .dbf\n                to Mysql has been automated with python script in back and through the dashboard.\n            ")])]),a("q-timeline-entry",{attrs:{title:"ALPR (Software) Baku, Azerbaijan ",subtitle:"January 2019 – April 2019",icon:"web",color:"orange"}},[a("div",[e._v("\n                Development of a Car Access Management System based on Automatic License Plate detection and Recognition"),a("br"),e._v("\n                • Detection the location of License Plate in image or video has be done in several ways"),a("br"),e._v("\n                        o With HaarCascade and OpenCV"),a("br"),e._v("\n                        o With Teseflow Object Detection Api"),a("br"),e._v("\n                        o With YoloV3 algorithm"),a("br"),e._v("\n                • Recognition of license plate in the found location has been done using Tesseact OCR engine"),a("br"),e._v("\n                • The management and monitoring part of this software is on web Dashboard"),a("br"),e._v("\n                • Dashboard`s back-end created with Laravel 5.8 PHP framework"),a("br"),e._v("\n                • Dashboard`s frontend created with MaterializeCSS 1.0.0\n\n            ")])]),a("q-timeline-entry",{attrs:{title:"Interpreter (Software), Baku, Azerbaijan ",subtitle:"September 2018 – December 2018",icon:"code",color:"red"}},[a("div",[e._v("\n                • Created Interpreter for C like custom language in Java"),a("br"),e._v("\n                • Created Lexer, Parser for custom Grammar, Type Checker and Evaluator\n            ")])]),a("q-timeline-entry",{attrs:{title:"VGroupChat (WebApp), Baku, Azerbaijan ",subtitle:"September 2018",icon:"web",color:"orange"}},[a("div",[e._v("\n                • Used VueJs 2.0 as a frontend JS framework"),a("br"),e._v("\n                • Used Vuetify Material component framework in order to get Material Design look"),a("br"),e._v("\n                • Used Firebase Realtime database as a backend REST API\n            ")])]),a("q-timeline-entry",{attrs:{title:"Mini shell implementation",subtitle:"March 2018 May 2018",icon:"code",color:"red"}},[a("div",[e._v("\n                • Created mini shell from scratch in C language"),a("br"),e._v("\n                • Following options are implemented"),a("br"),e._v("\n                        o execute commands (ls, find, grep, cp,  ./a.out, cd etc.)"),a("br"),e._v("\n                        o create pipes (|) between several executables,"),a("br"),e._v("\n                        o forward stdin, stdout, stderr (>, >>),"),a("br"),e._v("\n                        o capture signals (Ctrl+C SIGINT, Ctrl+\\ SIGSTOP).\n\n            ")])]),a("q-timeline-entry",{attrs:{title:"C ls command implementation ",subtitle:"January 2018  March 2018",icon:"code",color:"red"}},[a("div",[e._v("\n                • Created ls command from scratch in C language "),a("br"),e._v("\n                • Implemented multiple options such as ls (-a,-c,-d,-f,-h,-I,-l,-r,-u,-t,-A,-F,-R)\n            ")])]),a("q-timeline-entry",{attrs:{title:"SurviveAtADA (3D Video Game), Baku, Azerbaijan ",subtitle:"October 2017- December 2017",icon:"gamepad",color:"orange"}},[a("div",[e._v("\n                • Used Unity 3D to create game for windows platform"),a("br"),e._v("\n                • Used C# for programming the game physics and movements"),a("br"),e._v("\n                • Used Blender for creating 3D models of ADA University buildings"),a("br"),e._v("\n                • Used Photoshop, Inkscape, Gimp2 for creating simple sprites and UI elements of game\n\n            ")])]),a("q-timeline-entry",{attrs:{title:"GameMatcher (WebApp), Baku, Azerbaijan",subtitle:"October 2017- December 2017",icon:"web",color:"orange"}},[a("div",[e._v("\n                • Used Laravel 5.5, PHP framework to achieve clean and organized code with MVC "),a("br"),e._v("\n                • MaterializeCSS 0.9, (CSS/JS) framework to get Google`s material design look"),a("br"),e._v("\n                • Created Player, Club, Match creation with unique name and time"),a("br"),e._v("\n                • Created Feed page to get club post and match announcements from followed clubs\n            ")])]),a("q-timeline-entry",{attrs:{title:"FaceMatch (Android App), Baku, Azerbaijan",subtitle:"June 2017- August 2017",icon:"android",color:"green"}},[a("div",[e._v("\n                • Developed well designed and secured login system with using Google`s Api and Phone authentication. "),a("br"),e._v("\n                • Used Firebase as a Realtime database to achieve fastest instant messenger system"),a("br"),e._v("\n                • Used Android Vision library to analyze faces of users for developing an algorithm for peer matching"),a("br"),e._v("\n                • Developed per-user profile system and advanced search system for peer finding"),a("br"),e._v("\n                • This application was developed using Java, XML, Firebase, and PHP\n\n            ")])]),a("q-timeline-entry",{attrs:{title:"Vote (Web Page), Bakı, Azərbaycan",subtitle:"April 2017- May 2017",icon:"web",color:"orange"}},[a("div",[e._v("\n                • Created for ADA students for voting professors of university."),a("br"),e._v("\n                • At back-end only pure PHP and simple Ajax calls were used."),a("br"),e._v("\n                • MaterializeCSS 0.9, (CSS/JS) framework to get Google`s material design look"),a("br"),e._v("\n                • Users (students) can verify their identity by their ADA mails."),a("br"),e._v("\n                • Professor profiles can only be created and deleted by admin.\n            ")])]),a("q-timeline-entry",{attrs:{title:"Freelancer at Freelancer.com",subtitle:"December 2015 - May 2016",icon:"work",color:"yellow"}},[a("div",[e._v("\n                • Developed, implemented, and maintained mobile and web applications"),a("br"),e._v("\n                • Meet technical requirements of employees"),a("br"),e._v("\n                • Worked on different kind of web and mobile application with different technologies\n\n            ")])]),a("q-timeline-entry",{attrs:{title:"OlinkDb (Web/Mobile App), Baku, Azerbaijan ",subtitle:"April 2015- July 2015",icon:"web",color:"orange"}},[a("div",[a("p",[e._v("• Developed well designed and structured website and app for link viewing and link addition"),a("br"),e._v("\n                    • MySQL was chosen as a primary database for getting better database design using SQL"),a("br"),e._v("\n                    • Email registration was developed for users to save their link lists."),a("br"),e._v("\n                    • Link voting also added for best link suggestion\n                ")])])])],1)],1)},l=[],c={name:"Resume"},d=c,b=a("2877"),m=Object(b["a"])(d,s,l,!1,null,null,null),p=m.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row justify-around q-gutter-sm"},e._l(e.ports,(function(t,n){return a("div",{key:n,staticClass:"col-xs-12"},[a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("div",{staticClass:"text-overline text-orange-9 row"},[a("div",[a("q-icon",{staticClass:"right",attrs:{name:"update",size:"25px"}}),e._v("   "+e._s(t.updated_at.split("T")[0])+"\n            ")],1),a("q-space"),a("div",[a("q-icon",{attrs:{name:"add",size:"25px"}}),e._v("   "+e._s(t.created_at.split("T")[0])+"\n            ")],1)],1),a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[e._v("\n            "+e._s(t.name))]),a("div",{staticClass:"text-caption text-grey"},[e._v("\n            "+e._s(t.description)+"\n          ")]),a("div",{staticClass:"text-overline"},[e._v("\n            "+e._s(t.language)+"\n          ")])]),a("q-separator"),a("q-card-actions",[a("q-btn",{attrs:{flat:"",label:"Link",icon:"open_in_new",type:"a",target:"_blank",href:t.html_url}}),t.homepage?a("q-btn",{attrs:{flat:"",label:"HomePage",icon:"web",type:"a",target:"_blank",href:t.homepage}}):e._e(),a("q-btn",{attrs:{flat:"",icon:"star",type:"a",target:"_blank",href:t.html_url}},[a("q-badge",{attrs:{color:"green",floating:""}},[e._v(e._s(t.stargazers_count))])],1),a("q-space"),a("q-btn",{attrs:{color:"grey",label:"Readme",loading:e.loading,flat:""},on:{click:function(a){return e.getRawReadme("https://raw.githubusercontent.com/ogtayhuseynov0/"+t.name+"/master/README.md",t.name)}}})],1)],1)],1)})),0),a("q-dialog",{model:{value:e.icon,callback:function(t){e.icon=t},expression:"icon"}},[a("q-card",{staticStyle:{"max-width":"650px","min-width":"350px","max-heigth":"650px"}},[a("q-card-section",{staticClass:"row items-center q-pb-none text-center"},[a("div",{staticClass:"text-h6 text-center"},[e._v(e._s(e.selected))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),a("q-card-section",[a("vue-simplemde",{ref:"markdown",attrs:{configs:e.mdecondigs},model:{value:e.scopeData,callback:function(t){e.scopeData=t},expression:"scopeData"}}),a("q-btn",{staticClass:"full-width q-mt-md",attrs:{label:"Preview",icon:"remove_red_eye",color:"primary"},on:{click:e.previewMD}})],1)],1)],1)],1)},v=[],f=a("623c"),h=(a("b116"),{name:"PortfolioComponent",components:{VueSimplemde:f["a"]},props:["ports"],data:function(){return{icon:!1,selected:"alpr",mdecondigs:{toolbar:!1,status:!1,highlight:!0,spellChecker:!1,forceSync:!0,placeholder:"Loading...."},loading:!1,link:"https://raw.githubusercontent.com/ogtayhuseynov0/ALPR/master/README.md",scopeData:[]}},methods:{previewMD:function(){this.$refs["markdown"].simplemde.togglePreview()},getRawReadme:function(e,t){var a=this;this.loading=!0,this.selected=t,this.icon=!this.icon,this.$axios.get(e).then((function(e){return a.loading=!1,a.scopeData=e.data,e.data})).catch((function(e){a.loading=!1,a.scopeData=e.response.data}))}},mounted:function(){}}),g=h,_=Object(b["a"])(g,u,v,!1,null,null,null),w=_.exports,y=a("2f62");function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C={name:"PagePortfolio",components:{Resume:p,PortfolioComponent:w},data:function(){return{tab:"resume",tab2:"s",data:null,tabdisable:!0}},methods:q({},Object(y["b"])("github",["getRepos"])),mounted:function(){var e=this;this.tabdisable=!0,this.$q.loading.show(),this.getRepos().then((function(t){e.data=t.data.sort((function(e,t){return t.created_at<e.created_at?-1:1})),e.tabdisable=!1,e.$q.loading.hide()})).catch((function(t){e.tabdisable=!1,e.$q.loading.hide(),console.log(t.response)}))}},P=C,A=Object(b["a"])(P,n,r,!1,null,null,null);t["default"]=A.exports}}]);