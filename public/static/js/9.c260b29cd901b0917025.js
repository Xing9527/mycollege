webpackJsonp([9],{f3hN:function(t,e){},j7yt:function(t,e){},rG5D:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{tableData:[]}},methods:{getData:function(){var t=this;this.$axios.get("sayGet").then(function(e){e.ret&&(t.tableData=e.data)})},open:function(t){var e=this;this.$axios.post("sayOpen",{id:t}).then(function(t){"已有一个项目开启，请先关闭"==t.data?e.$message({message:"已有一个项目开启，请先关闭!",type:"warning"}):t.ret&&e.getData()})},close:function(t){var e=this;this.$axios.post("sayClose",{id:t}).then(function(t){t.ret&&e.getData()})},del:function(t){var e=this;this.$confirm("是否删除这条数据?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post("sayDel",{id:t}).then(function(t){e.$message({type:"success",message:"删除成功!"}),setTimeout(function(){e.$router.go(0)},1e3)})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},edit:function(t){this.$router.push({path:"/admin/say/update",query:{id:t}})}},created:function(){this.getData()}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{prop:"from",label:"委托人"}}),t._v(" "),n("el-table-column",{attrs:{prop:"to",label:"受收人"}}),t._v(" "),n("el-table-column",{attrs:{label:"状态",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?n("el-button",{attrs:{size:"mini",type:"success",plain:""},on:{click:function(n){t.close(e.row._id)}}},[t._v("启用")]):t._e(),t._v(" "),0==e.row.status?n("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(n){t.open(e.row._id)}}},[t._v("禁用")]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"contentTxt",label:"内容"}}),t._v(" "),n("el-table-column",{attrs:{prop:"time",label:"开启时间"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.edit(e.row._id)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){t.del(e.row._id)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var o=n("VU/8")(a,i,!1,function(t){n("j7yt"),n("f3hN")},"data-v-2c80e1ee",null);e.default=o.exports}});
//# sourceMappingURL=9.c260b29cd901b0917025.js.map