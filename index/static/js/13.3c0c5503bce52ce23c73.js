webpackJsonp([13],{Ebl7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{tableData:[]}},methods:{getMsg:function(){var t=this;this.$axios.get("getMsg",{pn:this.$route.query.pn}).then(function(e){for(var a=0;a<e.data.length;a++)e.data[a].createTime=t.timeTrans(e.data[a].createTime);t.tableData=e.data})},timeTrans:function(t){if(!t)return"-";function e(t){return t>9?t:"0"+t}var a=new Date(t),n=a.getFullYear(),r=e(a.getMonth()+1),s=e(a.getDate()),i=a.getHours();return n+"-"+r+"-"+s+" "+(i>=12?"PM":"AM")+" "+(i=e(i=i>=12?i-12:i))+":"+e(a.getMinutes())},getPageData:function(t){this.$router.push({path:"/admin/msg",query:{pn:t}}),this.getMsg()},del:function(t){var e=this;this.$confirm("是否删除此条留言?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post("delMsg",{id:t}).then(function(t){t.ret?(e.$message({type:"success",message:"删除成功!"}),setTimeout(function(){e.$router.go(0)},1e3)):e.$message({type:"info",message:"删除失败!"})})}).catch(function(){e.$message({type:"info",message:"已取消删除!"})})}},created:function(){this.getMsg()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"msg"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"createTime",label:"时间",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"author",label:"作者",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"msg",label:"留言"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.del(e.row._id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:100},on:{"current-change":t.getPageData}})],1)],1)},staticRenderFns:[]};var s=a("VU/8")(n,r,!1,function(t){a("YNNN")},"data-v-71b687ea",null);e.default=s.exports},YNNN:function(t,e){}});
//# sourceMappingURL=13.3c0c5503bce52ce23c73.js.map