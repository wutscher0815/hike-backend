webpackJsonp([1],{"/yRs":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=(i=n("8ebl")).default||i,r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vue-street-view-pano-container"},[t("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var o=n("VU/8")(s,r,!1,function(e){n("CjMs")},null,null);t.default=o.exports},"5ZbH":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=(i=n("hOwk")).default||i,r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vue-map-container"},[t("div",{ref:"vue-map",staticClass:"vue-map"}),this._v(" "),t("div",{staticClass:"vue-map-hidden"},[this._t("default")],2),this._v(" "),this._t("visible")],2)},staticRenderFns:[]};var o=n("VU/8")(s,r,!1,function(e){n("dtWn")},null,null);t.default=o.exports},"5cLx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=(i=n("WgA/")).default||i,r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{ref:"flyaway"},[this._t("default")],2)])},staticRenderFns:[]},o=n("VU/8")(s,r,!1,null,null,null);t.default=o.exports},CjMs:function(e,t){},JOVq:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},s,!1,function(e){n("JOVq")},null,null).exports,o=n("/ocq"),a=n("mvHQ"),l=n.n(a),u={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",markers:[],center:{lat:46.579427,lng:13.968488},infoContent:"",infoWindowPos:null,infoWinOpen:!1,currentMidx:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},created:function(){var e=this;console.log("created"),this.$options.sockets.onmessage=function(t){console.log("marker event"),e.markers=JSON.parse(t.data)},window.fetch("http://localhost:3000/hikers").then(function(e){return e.json()}).then(function(t){console.log(t),e.markers=t,e.msg=l()(t)})},methods:{toggleInfoWindow:function(e,t){this.infoWindowPos=e,this.infoContent=e.name||e.id,this.currentMidx===t?this.infoWinOpen=!this.infoWinOpen:(this.infoWinOpen=!0,this.currentMidx=t)}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("Hike patrullen")]),e._v(" "),n("GmapMap",{staticStyle:{width:"100%","flex-grow":"1"},attrs:{center:e.center,zoom:11,"map-type-id":"terrain"}},[n("gmap-info-window",{attrs:{options:e.infoOptions,position:e.infoWindowPos,opened:e.infoWinOpen},on:{closeclick:function(t){e.infoWinOpen=!1}}},[e._v("\n      "+e._s(e.infoContent)+"\n    ")]),e._v(" "),e._l(e.markers,function(t,i){return n("GmapMarker",{key:i,attrs:{position:t,clickable:!0},on:{click:function(n){e.toggleInfoWindow(t,i)}}})})],2)],1)},staticRenderFns:[]};var f=n("VU/8")(u,c,!1,function(e){n("zQKl")},"data-v-5ec55f09",null).exports;i.a.use(o.a);var d=new o.a({routes:[{path:"/",name:"HelloWorld",component:f}]}),p=n("sA6N"),v=n("U8jO"),h=n.n(v);i.a.use(h.a),i.a.config.productionTip=!1,i.a.use(p,{load:{key:"AIzaSyB6gc9MgJsqk3ROtUItZaZ3yUTfvPoKECc",libraries:"places"}}),new i.a({el:"#app",router:d,components:{App:r},template:"<App/>"}),i.a.use(p,{load:{key:"",libraries:"places"}})},T5eZ:function(e,t,n){"use strict";var i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span",{domProps:{textContent:this._s(this.label)}}),this._v(" "),t("input",{ref:"input",class:this.className,attrs:{type:"text",placeholder:this.placeholder}})])},staticRenderFns:[]};t.a=i},YI6p:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("jIen"),s=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);var o=n("T5eZ"),a=n("VU/8")(s.a,o.a,!1,null,null,null);t.default=a.exports},dtWn:function(e,t){},preG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=(i=n("hQTS")).default||i,r={render:function(){var e=this.$createElement;return(this._self._c||e)("input",{ref:"input",attrs:{type:"text",placeholder:this.placeholder},domProps:{value:this.value}})},staticRenderFns:[]},o=n("VU/8")(s,r,!1,null,null,null);t.default=o.exports},zQKl:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9b86ccc268511c3e754f.js.map