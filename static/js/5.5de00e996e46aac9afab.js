webpackJsonp([5],{"5jHf":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"error",data:function(){return{seconds:5,timer:null}},beforeMount:function(){var e=this;e.timer=setInterval(function(){var t=parseInt(e.seconds);--t>0?e.seconds=t:e.$router.push({path:"/"})},1e3)},mounted:function(){},methods:{goIndex:function(){this.$router.push({path:"/"})}},destroyed:function(){clearInterval(this.timer)}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"error-page"},[n("div",{staticClass:"nopage"},[n("div",{staticClass:"notice"},[e._v("该页面迷路了，还是回首页看看吧～")]),e._v(" "),n("div",{staticClass:"time"},[n("span",[e._v(e._s(e.seconds))]),e._v(" 秒后\n      "),n("a",{on:{click:function(t){e.goIndex()}}},[e._v("返回首页")])])])])},staticRenderFns:[]};var o=n("VU/8")(s,r,!1,function(e){n("hHmd")},"data-v-636b07e5",null);t.default=o.exports},hHmd:function(e,t,n){var s=n("kUc7");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n("rjj0")("7d25f2e3",s,!0,{})},kUc7:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.error-page[data-v-636b07e5] {\n  height: 100vh;\n  background: #fff;\n}\n",""])}});