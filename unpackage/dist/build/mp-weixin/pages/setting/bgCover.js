(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/bgCover"],{"0a1b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{bgCoverlist:[],bgCovername:"",bgCoverIndex:-1}},onLoad:function(){this.getbgCoverList(),this.getUsebgCover()},methods:{getbgCoverList:function(){var t=[{name:"烟雨江南",src:"bg_4"},{name:"日系田园",src:"bg_5"},{name:"璀璨星空",src:"bg_12"},{name:"浪漫樱花",src:"bg_14"},{name:"漫步云海",src:"bg_15"}];this.bgCoverlist=[];for(var e=0,n=t;e<n.length;e++){var r=n[e],o={name:r.name,id:r.src,src:"https://tosscoin-1256354221.cos.ap-shanghai.myqcloud.com/img/".concat(r.src,".jpg")};this.bgCoverlist.push(o)}},getUsebgCover:function(){this.bgCovername=t.getStorageSync("bgCoverImg")||"bg_4"},selectbgCover:function(t,e){this.bgCoverIndex=e,this.bgCoverId=t.id},setbgCover:function(){t.setStorageSync("bgCoverImg",this.bgCoverId),t.showToast({title:"设置成功",duration:2e3}),this.getUsebgCover()}}};e.default=n}).call(this,n("543d")["default"])},"6cfc":function(t,e,n){},"706a":function(t,e,n){"use strict";var r=n("6cfc"),o=n.n(r);o.a},"87fd":function(t,e,n){"use strict";n.r(e);var r=n("8b31"),o=n("d13b");for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("706a");var a,s=n("f0c5"),i=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=i.exports},"8b31":function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return r}))},d13b:function(t,e,n){"use strict";n.r(e);var r=n("0a1b"),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e["default"]=o.a},e8d0:function(t,e,n){"use strict";(function(t){n("9b5a");r(n("66fd"));var e=r(n("87fd"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["e8d0","common/runtime","common/vendor"]]]);