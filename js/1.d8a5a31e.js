(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"0018":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.worked?a("span",{staticClass:"text-h6 text-green-8"},[t._v("\n  ●\n")]):a("span",{staticClass:"text-h6 text-orange-5"},[t._v("\n   ●\n ")])},i=[],s={name:"Indicator",props:["worked"]},r=s,o=a("2877"),c=Object(o["a"])(r,n,i,!1,null,null,null);e["a"]=c.exports},"9c0a":function(t,e,a){t.exports=a.p+"img/25150050.8137169a.png"},c164:function(t,e,a){},eb60:function(t,e,a){"use strict";var n=a("c164"),i=a.n(n);i.a},f241:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{class:t.$q.dark.isActive?"text-blue-grey-2":"text-blue-grey-8",attrs:{view:"hHh Lpr lff"}},[n("q-header",{staticClass:"bg-primary text-blue-grey-2",attrs:{bordered:""}},[n("q-toolbar",[n("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(e){t.left=!t.left}}}),n("q-toolbar-title",{attrs:{center:""}},[t._v("\n        Ogtay Huseynov\n      ")]),n("q-btn",{staticClass:"q-mr-xs",attrs:{flat:"",round:"",icon:t.$q.dark.isActive?"wb_sunny":"brightness_3"},on:{click:function(e){return t.$q.dark.toggle()}}}),n("div",{staticClass:"gt-xs"},[n("q-icon",{attrs:{name:"update",size:"24px"}}),t._v("  \n        Last Updated: "+t._s(t.returnTimeDiff())+"\n      ")],1),n("q-btn",{staticClass:"lt-sm",attrs:{flat:"",round:"",icon:"update"}},[n("q-menu",[n("q-list",{staticStyle:{"min-width":"250px"}},[n("q-item",[n("q-icon",{attrs:{name:"update",size:"22px"}}),t._v("  \n              Last Updated: "+t._s(t.returnTimeDiff())+"\n            ")],1)],1)],1)],1)],1)],1),n("q-drawer",{attrs:{side:"left",bordered:"",width:250,"content-style":{backgroundColor:"#282828"},"show-if-above":""},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[n("q-scroll-area",{staticClass:"fit "},[n("div",{staticClass:"text-center",staticStyle:{height:"180px"}},[n("div",{staticClass:"bg-transparent"},[n("q-avatar",{staticClass:"q-mb-sm  border-4",attrs:{size:"110px"}},[n("img",{attrs:{src:a("9c0a")}})]),n("div",{staticClass:"text-weight-bold text-grey-12"},[t._v("Ogtay Huseynov")]),n("div",{},[n("span",{staticClass:"text-green-1 bg-green-14",staticStyle:{padding:"0 4px","border-radius":"4px"}},[t._v("Software Engineer")])])],1)]),n("q-list",{staticClass:" text-primary",attrs:{padding:""}},t._l(t.links,(function(e,a){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a,attrs:{dark:"",clickable:"",active:t.link===e.link,"active-class":"my-menu-link",to:e.link,exact:""},on:{click:function(a){t.link=e.link}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1),n("q-item-section",[t._v(t._s(e.name))])],1)})),1),n("span",{staticClass:"text-overline text-grey text-weight-medium q-mx-md"},[t._v("Experience Indicators")]),n("br"),n("q-list",{staticClass:"text-white"},[n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("indicator",{attrs:{worked:!0}})],1),n("q-item-section",[t._v(" Multiple projects")])],1),n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("indicator",{attrs:{worked:!1}})],1),n("q-item-section",[t._v("Test or Single project")])],1)],1)],1)],1),n("q-page-container",[n("q-scroll-area",{staticStyle:{height:"92vh"}},[n("router-view")],1)],1)],1)},i=[],s=a("bd4c"),r=a("0018"),o=[{name:"About",link:"/",icon:"o_info"},{name:"Portfolio",link:"/portfolio",icon:"o_apps"},{name:"Skills",link:"/skills",icon:"o_grain"},{name:"Contact",link:"/contact",icon:"o_alternate_email"}],c={components:{indicator:r["a"]},data(){return{left:this.$q.screen.gt.md,link:"about",links:o}},created(){this.$q.dark.set(!0)},methods:{returnTimeDiff:function(){let t=new Date(2020,10,22),e=Date.now(),a=s["a"].formatDate(e,"YYYY-M-D"),n="days",i=s["a"].getDateDiff(t,a,n);return 30-i<0?"0 days ago":30-i+" days ago"}}},l=c,d=(a("eb60"),a("2877")),u=a("4d5a"),m=a("e359"),p=a("65c6"),f=a("9c40"),v=a("6ac5"),g=a("0016"),b=a("4e73"),q=a("1c1c"),k=a("66e5"),x=a("9404"),_=a("4983"),w=a("cb32"),y=a("4074"),h=a("09e3"),C=a("9989"),Q=a("714f"),D=a("eebe"),S=a.n(D),T=Object(d["a"])(l,n,i,!1,null,null,null);e["default"]=T.exports;S()(T,"components",{QLayout:u["a"],QHeader:m["a"],QToolbar:p["a"],QBtn:f["a"],QToolbarTitle:v["a"],QIcon:g["a"],QMenu:b["a"],QList:q["a"],QItem:k["a"],QDrawer:x["a"],QScrollArea:_["a"],QAvatar:w["a"],QItemSection:y["a"],QPageContainer:h["a"],QPage:C["a"]}),S()(T,"directives",{Ripple:Q["a"]})}}]);