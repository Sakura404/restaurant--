(function(e){function t(t){for(var a,o,l=t[0],s=t[1],c=t[2],u=0,v=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,l=1;l<r.length;l++){var s=r[l];0!==n[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},i=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"app"}},[r("router-view")],1)},i=[],o=(r("5c0b"),r("2877")),l=r("6544"),s=r.n(l),c=r("7496"),d={},u=Object(o["a"])(d,n,i,!1,null,null,null),v=u.exports;s()(u,{VApp:c["a"]});r("5363");var m=r("f309");a["a"].use(m["a"]);var p=new m["a"]({}),f=r("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("HelloWorld")],1)},b=[],g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-subheader",[e._v(" "+e._s(e.username))]),r("v-divider"),r("v-list",{attrs:{nav:""}},[r("v-subheader",[e._v("MAIN")]),e._l(e.navlist,(function(t,a){return r("v-list-item",{key:a,attrs:{color:"primary",to:t.tolink}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(t.ico))])],1),r("v-list-item-content",[e._v(e._s(t.itemname))])],1)})),r("v-divider"),r("v-subheader",[e._v("SAVED REPORT")]),e._l(e.savereport,(function(t,a){return r("v-list-item",{key:a+4,attrs:{color:"primary",to:t.tolink}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(t.ico))])],1),r("v-list-item-content",[e._v(e._s(t.itemname))])],1)}))],2)],1),r("v-app-bar",{attrs:{flat:"",dense:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),r("v-spacer"),r("v-scroll-x-reverse-transition",[e.search?r("v-text-field",{attrs:{"hide-details":"","single-line":""}}):e._e()],1),r("v-icon",{on:{click:function(t){e.search=!e.search}}},[e._v("mdi-magnify")])],1),r("v-main",[r("router-view")],1)],1)},x=[],_={data:function(){return{username:window.sessionStorage.getItem("userId"),search:null,drawer:null,navlist:[{tolink:"/dashboard",ico:"mdi-home",itemname:"dashboard"},{tolink:"/menu",ico:"mdi-food",itemname:"menu"},{tolink:"/order",ico:"mdi-clipboard-list-outline",itemname:"order"},{tolink:"/report",ico:"mdi-chart-bar",itemname:"report"}],savereport:[{tolink:"/day",ico:"mdi-file",itemname:"day"},{tolink:"/month",ico:"mdi-file",itemname:"month"},{tolink:"/year",ico:"mdi-file",itemname:"year"}]}},computed:{}},w=_,V=r("40dc"),y=r("5bc1"),k=r("ce7e"),O=r("132d"),C=r("8860"),j=r("da13"),$=r("5d23"),T=r("34c3"),S=r("f6c4"),I=r("f774"),A=r("0789"),E=r("2fa4"),D=r("e0c7"),P=r("8654"),q=Object(o["a"])(w,g,x,!1,null,null,null),R=q.exports;s()(q,{VApp:c["a"],VAppBar:V["a"],VAppBarNavIcon:y["a"],VDivider:k["a"],VIcon:O["a"],VList:C["a"],VListItem:j["a"],VListItemContent:$["a"],VListItemIcon:T["a"],VMain:S["a"],VNavigationDrawer:I["a"],VScrollXReverseTransition:A["d"],VSpacer:E["a"],VSubheader:D["a"],VTextField:P["a"]});var M={name:"Home",components:{HelloWorld:R}},F=M,H=Object(o["a"])(F,h,b,!1,null,null,null),L=H.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("login")],1)},N=[],J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-container",{attrs:{app:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"x",attrs:{cols:"12",sm:"6"}},[r("v-card",{attrs:{outlined:"",app:""}},[r("v-img",{attrs:{height:"250",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}}),r("v-card-title",[e._v(e._s(e.asd)+"管理员登录")]),r("v-card-text",[r("v-text-field",{attrs:{"prepend-icon":"mdi-account",placeholder:"输入你的用户名",label:"用户名",clearable:"",rules:e.namerules},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),r("v-text-field",{attrs:{type:"password","prepend-icon":"mdi-lock",placeholder:"输入你的密码",label:"密码",rules:e.pswrules},model:{value:e.psw,callback:function(t){e.psw=t},expression:"psw"}}),r("v-divider"),r("v-card-actions",[r("v-spacer",[r("v-btn",{attrs:{text:"",color:"primary",width:"70%"},on:{click:function(t){return e.submit()}}},[e._v("登录")])],1)],1)],1)],1)],1)],1)],1)],1)},W=[],G={name:"Login",data:function(){return{psw:null,user:null,namerules:[function(e){return!!e||"名字不能为空"}],pswrules:[function(e){return!!e||"密码不能为空"}]}},methods:{submit:function(){123456==this.psw&&123456==this.user?(sessionStorage.setItem("userId",this.user),alert("登陆成功"),this.$route.query.redirect?this.$router.push(this.$route.query.redirect):this.$router.push("/")):alert("登陆失败")}}},X=G,z=r("8336"),K=r("b0af"),Q=r("99d9"),U=r("62ad"),Y=r("a523"),Z=r("adda"),ee=r("0fd9"),te=Object(o["a"])(X,J,W,!1,null,null,null),re=te.exports;s()(te,{VApp:c["a"],VBtn:z["a"],VCard:K["a"],VCardActions:Q["a"],VCardText:Q["b"],VCardTitle:Q["c"],VCol:U["a"],VContainer:Y["a"],VDivider:k["a"],VImg:Z["a"],VRow:ee["a"],VSpacer:E["a"],VTextField:P["a"]});var ae={components:{Login:re}},ne=ae,ie=Object(o["a"])(ne,B,N,!1,null,null,null),oe=ie.exports,le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-data-table")],1)},se=[],ce=r("8fea"),de={},ue=Object(o["a"])(de,le,se,!1,null,null,null),ve=ue.exports;s()(ue,{VContainer:Y["a"],VDataTable:ce["a"]});var me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-dialog",{attrs:{color:"danger","max-width":"400px"},model:{value:e.dialogdelete,callback:function(t){e.dialogdelete=t},expression:"dialogdelete"}},[r("v-card",[r("v-card-title",[e._v("警告")]),r("v-card-text",[e._v("确定要删除该菜品么")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{depressed:""},on:{click:function(t){return e.ediorcancel()}}},[e._v("取消")]),r("v-btn",{attrs:{depressed:""},on:{click:function(t){return e.delectsumbit()}}},[e._v("确认")])],1)],1)],1),r("v-dialog",{attrs:{"max-width":"400px"},model:{value:e.dialogedior,callback:function(t){e.dialogedior=t},expression:"dialogedior"}},[r("v-card",[r("v-form",{ref:"form"},[r("v-card-title",[e._v(e._s(e.editorstate))]),r("v-card-text",[r("v-row",[r("v-col",{attrs:{md:"4"}},[r("v-text-field",{attrs:{label:"id",rules:[e.rules.required,e.rules.repeatid,e.rules.mustnum]},model:{value:e.newitem.id,callback:function(t){e.$set(e.newitem,"id",t)},expression:"newitem.id"}})],1),r("v-col",{attrs:{md:"4"}},[r("v-text-field",{attrs:{label:"name",rules:[e.rules.required]},model:{value:e.newitem.name,callback:function(t){e.$set(e.newitem,"name",t)},expression:"newitem.name"}})],1),r("v-col",{attrs:{md:"4"}},[r("v-text-field",{attrs:{label:"cost",rules:[e.rules.required,e.rules.mustnum]},model:{value:e.newitem.cost,callback:function(t){e.$set(e.newitem,"cost",t)},expression:"newitem.cost"}})],1)],1),r("v-row",[r("v-spacer"),r("v-col",{attrs:{md:"3"}},[r("v-btn",{attrs:{depressed:""},on:{click:function(t){return e.ediorcancel()}}},[e._v("取消")])],1),r("v-col",{attrs:{md:"3"}},[r("v-btn",{attrs:{depressed:""},on:{click:function(t){return e.ediorsumbit()}}},[e._v("确认")])],1)],1)],1)],1)],1)],1),r("v-data-table",{attrs:{headers:e.headers,items:e.foodmenu,"footer-props":{disablePagination:!0,disableItemsPerPage:!0}},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[e._v("Menu")]),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),r("v-spacer"),r("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.foodupdate()}}},[e._v("REFREASH")]),r("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.additem()}}},[e._v("ADD FOOD")])],1)]},proxy:!0},{key:"item.opreation",fn:function(t){var a=t.item;return[r("v-btn",{attrs:{icon:""}},[r("v-icon",{on:{click:function(t){return e.edior(a)}}},[e._v("mdi-pencil-outline")])],1),r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.delect(a)}}},[r("v-icon",[e._v("mdi-delete")])],1)]}}],null,!0)})],1)},pe=[],fe=(r("a434"),{data:function(){var e=this;return{newitem:{id:null,name:null,cost:null},rules:{required:function(e){return!!e||"Required!"},repeatid:function(t){return e.arrindexOf(e.foodmenu,"id",t)||-1!=e.editoritem||"ID repeat!"},mustnum:function(e){return/^[0-9]*$/.test(e)||"must be numbers"}},editorstate:"修改",editoritem:null,dialogedior:null,dialogdelete:null,headers:[{text:"id",value:"id",sortable:!1},{text:"name",value:"name"},{text:"cost(￥)",value:"cost"},{text:"opreation",value:"opreation",sortable:!1,align:"center"}],foodmenu:[{id:1,name:"beef",cost:20},{id:2,name:"rice",cost:10},{id:3,name:"rice",cost:10}]}},methods:{arrindexOf:function(e,t,r){for(var a=0;a<e.length;a++)if(e[a][t]==r)return!1;return!0},foodupdate:function(){var e=this;this.axios.get("/api/food").then((function(t){e.foodmenu=t,console.log(t)})).catch((function(e){console.error(e)}))},additem:function(){this.editorstate="ADD",this.dialogedior=!0,this.editoritem=-1},edior:function(e){this.editorstate="CHAGNE",this.editoritem=this.foodmenu.indexOf(e),this.newitem=Object.assign({},e),this.dialogedior=!0},ediorsumbit:function(){this.$refs.form.validate()&&(-1!=this.editoritem?Object.assign(this.foodmenu[this.editoritem],this.newitem):this.foodmenu.push(this.newitem),this.dialogedior=!1,this.newitem=Object.assign({}),this.$refs.form.resetValidation())},delect:function(e){this.editoritem=this.foodmenu.indexOf(e),this.dialogdelete=!0},delectsumbit:function(){this.foodmenu.splice(this.editoritem,1),this.dialogdelete=!1,this.editoritem=null},ediorcancel:function(){this.dialogdelete=!1,this.dialogedior=!1,this.editoritem=null,this.$refs.form.reset()}},mounted:function(){this.foodupdate()}}),he=fe,be=r("169a"),ge=r("4bd4"),xe=r("71d9"),_e=r("2a7f"),we=Object(o["a"])(he,me,pe,!1,null,null,null),Ve=we.exports;s()(we,{VBtn:z["a"],VCard:K["a"],VCardActions:Q["a"],VCardText:Q["b"],VCardTitle:Q["c"],VCol:U["a"],VContainer:Y["a"],VDataTable:ce["a"],VDialog:be["a"],VDivider:k["a"],VForm:ge["a"],VIcon:O["a"],VRow:ee["a"],VSpacer:E["a"],VTextField:P["a"],VToolbar:xe["a"],VToolbarTitle:_e["a"]});var ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{lg:"6",cols:"12"}},[r("v-card",[r("v-sheet",{staticClass:"mx-auto",attrs:{elevation:"12","max-width":"calc(100% - 32px)",color:"cyan"}},[r("v-sparkline",{attrs:{"auto-draw":"",color:"white","line-width":"2",padding:"16",smooth:"10",labels:e.day(),value:e.daysale}})],1),r("v-card-text",[e._v("近30天每天的营业收入")])],1)],1),r("v-col",{attrs:{lg:"3",cols:"6"}},[r("v-card",[r("v-card-title",[e._v("今天营业收入")]),r("v-sheet",{staticClass:"d-flex align-center justify-center pa-4 mx-auto",attrs:{color:"cyan","min-height":"100px"}},[r("div",{staticClass:"display-1"},[e._v("550")])])],1)],1),r("v-col",{attrs:{lg:"3",cols:"6"}},[r("v-card",[r("v-card-title",[e._v("今月营业收入")]),r("v-sheet",{staticClass:"d-flex align-center justify-center pa-4 mx-auto",attrs:{color:"cyan","min-height":"100px"}},[r("div",{staticClass:"display-1"},[e._v("550")])])],1)],1),e._v(" "+e._s(e.day())+" ")],1)],1)},ke=[],Oe={data:function(){return{daysale:[10,20,12,24,17,45,73,30,41]}},methods:{addsale:function(){this.daysale.push(20)},day:function(){for(var e=new Array,t=0;t<this.daysale.length&&t<30;t++)e.push(t+1);return e}}},Ce=Oe,je=r("8dd9"),$e=r("7f2e"),Te=Object(o["a"])(Ce,ye,ke,!1,null,null,null),Se=Te.exports;s()(Te,{VCard:K["a"],VCardText:Q["b"],VCardTitle:Q["c"],VCol:U["a"],VContainer:Y["a"],VRow:ee["a"],VSheet:je["a"],VSparkline:$e["a"]});var Ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("report")])},Ae=[],Ee={},De=Object(o["a"])(Ee,Ie,Ae,!1,null,null,null),Pe=De.exports;a["a"].use(f["a"]);var qe=[{path:"/",name:"Home",component:L,meta:{requireAuth:!0},children:[{path:"",redirect:"dashboard"},{path:"dashboard",name:"dashboard",component:Se},{path:"menu",name:"menu",component:Ve},{path:"order",name:"order",component:ve},{path:"report",name:"report",component:Pe}]},{path:"/login",name:"login",component:oe},{path:"*",redirect:"dashboard"}],Re=new f["a"]({mode:"history",base:"",routes:qe}),Me=Re,Fe=r("bc3a"),He=r.n(Fe),Le=r("2106"),Be=r.n(Le);a["a"].use(Be.a,He.a),a["a"].config.productionTip=!1,Me.beforeEach((function(e,t,r){if(e.matched.some((function(e){return e.meta.requireAuth}))){var a=window.sessionStorage.getItem("userId");console.log(a),a?r():r({path:"/login",query:{redirect:e.fullPath}})}else r()})),new a["a"]({vuetify:p,router:Me,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.a38b966c.js.map