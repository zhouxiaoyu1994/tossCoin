(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/easteregg/easteregg"],{"1df9":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},onLoad:function(){var t=e.getStorageSync("recordTotalCount")+1,n=e.getStorageSync("recordFacadeCount")+1;e.setStorageSync("recordTotalCount",t),e.setStorageSync("recordFacadeCount",n),console.log(111),this.getEastereggCode()},methods:{getEastereggCode:function(){console.log(222),e.showModal({title:"彩蛋码",content:"cd52078x8，前往硬币中心下拉刷新，输入彩蛋码即可获得彩蛋硬币",showCancel:!1,confirmColor:"#fd746c",confirmText:"复制",success:function(t){t.confirm?(console.log("用户点击确定"),e.setClipboardData({data:"cd52078x8",success:function(){e.showToast({title:"复制成功",duration:2e3})}})):t.cancel&&console.log("用户点击取消")}})}}};t.default=n}).call(this,n("543d")["default"])},"48c2":function(e,t,n){},"49ee":function(e,t,n){"use strict";n.r(t);var o=n("9233"),c=n("7e21");for(var a in c)"default"!==a&&function(e){n.d(t,e,(function(){return c[e]}))}(a);n("be90");var r,u=n("f0c5"),f=Object(u["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=f.exports},"6f2b":function(e,t,n){"use strict";(function(e){n("9b5a");o(n("66fd"));var t=o(n("49ee"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"7e21":function(e,t,n){"use strict";n.r(t);var o=n("1df9"),c=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=c.a},9233:function(e,t,n){"use strict";var o,c=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}))},be90:function(e,t,n){"use strict";var o=n("48c2"),c=n.n(o);c.a}},[["6f2b","common/runtime","common/vendor"]]]);