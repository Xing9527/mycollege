webpackJsonp([11],{"2bev":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("tEPQ"),a=s.n(i),n={data:function(){return{swiperList:[],newsList:[]}},methods:{getSwiper:function(){var t=this;this.$axios.get("getSwiper",{type:2}).then(function(e){t.swiperList=e.data})},getNews:function(){var t=this;this.$axios.get("getNews",{pn:this.$route.query.pn}).then(function(e){for(var s=0;s<e.data.length;s++)e.data[s].createTime=a()(e.data[s].createTime).substr(0,10),e.data[s].contentText=e.data[s].contentText.substr(0,30)+"...";t.newsList=e.data})},getPageData:function(t){this.$router.push({path:"/news",query:{pn:t}}),this.getNews()}},created:function(){this.getSwiper(),this.getNews()}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"more"},[s("h2",[t._v("News")]),t._v(" "),s("ul",[1==t.$route.query.pn?s("li",{staticClass:"swiper1"},[s("el-carousel",{attrs:{interval:5e3,arrow:"always",height:"125px"}},t._l(t.swiperList,function(t){return s("el-carousel-item",{key:t._id},[s("router-link",{attrs:{to:t.path}},[s("img",{attrs:{src:t.img,alt:""}})])],1)}))],1):t._e(),t._v(" "),t._l(t.newsList,function(e){return s("li",{key:e._id,staticClass:"news"},[s("div",{staticClass:"img"},[s("router-link",{attrs:{to:"/news/detail?id="+e._id}},[s("img",{attrs:{src:e.img,alt:""}})])],1),t._v(" "),s("div",{staticClass:"text"},[s("p",[s("i",{staticClass:"iconfont icon-time"}),t._v(" "+t._s(e.createTime)+"\n            "),s("span",{staticClass:"view"},[s("i",{staticClass:"iconfont icon-eye"}),t._v(" "+t._s(e.view))])]),t._v(" "),s("h3",[s("router-link",{attrs:{to:"/news/detail?id="+e._id}},[t._v(t._s(e.title))])],1),t._v(" "),s("p",[t._v(t._s(e.contentText))])])])})],2),t._v(" "),s("div",{staticClass:"page"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:50},on:{"current-change":t.getPageData}})],1)])},staticRenderFns:[]};var o=s("VU/8")(n,r,!1,function(t){s("BJZj")},"data-v-e63b6ad8",null);e.default=o.exports},BJZj:function(t,e){}});
//# sourceMappingURL=11.f55e201211d37b27d778.js.map