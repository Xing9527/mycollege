webpackJsonp([21],{JkeK:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box"},[s("router-link",{attrs:{to:"/"}},[t._v("返回首页")]),t._v(" "),s("h1",[t._v("我想大声告诉你")]),t._v(" "),s("div",{staticClass:"text"},[s("p",{staticClass:"to"},[t._v(t._s(t.pageData.to)+"：")]),t._v(" "),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.pageData.content)}}),t._v(" "),s("p",{staticClass:"from"},[t._v(t._s(t.pageData.from))])]),t._v(" "),s("div",{staticClass:"container"},[s("ul",t._l(t.pageData.imgs,function(t){return s("li",{key:t._id},[s("img",{attrs:{src:t,alt:""}})])}))])],1)},staticRenderFns:[]};var n=s("VU/8")({data:function(){return{pageData:{to:"",from:"",content:"",imgs:[]}}},methods:{getData:function(){var t=this;this.$axios.get("sayOpenOne").then(function(a){null!=a.data&&(a.data.imgs.push(a.data.imgs[0]),a.data.imgs.push(a.data.imgs[1]),t.pageData=a.data)})}},created:function(){this.getData()}},e,!1,function(t){s("RrAs")},"data-v-2d080700",null);a.default=n.exports},RrAs:function(t,a){}});
//# sourceMappingURL=21.1239b40a3c65c9d325b5.js.map