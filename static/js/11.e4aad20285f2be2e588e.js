webpackJsonp([11],{"/XWy":function(e,t,i){var l=i("RJ9i");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);i("rjj0")("526fd6c6",l,!0,{})},RJ9i:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"",""])},esrY:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i("Dd8w"),a=i.n(l),s=i("uUlv"),n=i("Mukr"),o={name:"channel",components:{},data:function(){var e=this;return{query:{name:"",current:1,size:10},selectAllStatus:!1,selectList:[],Dialogwidth:"500px",tableList:{},pop:{dialogVisible:!1,popSteps:1,name:"",id:""},newRuleForm:{name:"",link:"",thirdFlag:!1,projectId:this.projectId},newRules:{name:[{required:!0,message:"请输入渠道名称",trigger:"blur"},{validator:function(t,i,l){e.validateName(l)},trigger:"blur"}],link:[{required:!0,message:"请输入渠道链接",trigger:"blur"}],thirdFlag:[{required:!0,message:"请选择",trigger:"change"}]},importRuleForm:{filename:""},importRules:{filename:[{required:!0,message:"请选择文件",trigger:"blur"}]},uploadAble:!0,file:null}},props:{projectId:{type:String,default:"1"}},computed:a()({},Object(s.b)(["user"])),created:function(){this.getList()},methods:{getList:function(e){var t=this;this.query.current=e?this.query.current:1;var i=a()({},this.query);this.$api.channel.getList(i).then(function(l){0==l.code?(t.tableList=l.data,e&&!l.data.records.length&&i.current>1&&(i.current--,t.getList(!0)),e&&t.selectAllStatus&&t.$refs.table.toggleAllSelection()):t.$gidMessage(l.msg)})},selectAll:function(){this.selectAllStatus=!this.selectAllStatus,this.$refs.table.toggleAllSelection()},handleCurrentChange:function(e){this.query.current=Number(e),this.getList(!0)},handleSelectionChange:function(e){this.selectList=e.map(function(e){return e.id})},showDialog:function(e,t){this.Dialogwidth=3==e?"400px":"500px",this.pop.popSteps=e,this.pop.dialogVisible=!0,1==e?this.newRuleForm=t?{id:t.id,link:t.link,name:t.name,projectId:this.projectId,thirdFlag:t.thirdFlag,isedit:!0}:{link:"",name:"",projectId:this.projectId,thirdFlag:!1,isedit:!1}:2==e?this.importRuleForm.filename="":3==e&&t&&(this.pop.name=t.name,this.pop.id=t.id)},closeDialog:function(e){var t=this;this.$nextTick(function(){t.$refs[e].resetFields()}),this.pop.dialogVisible=!1},addChannel:function(){var e=this;this.$refs.newRuleForm.validate(function(t){if(!t)return!1;var i=a()({},e.newRuleForm);delete i.isedit,e.newRuleForm.isedit?e.$api.channel.update(i).then(function(t){0==t.code?(e.$gidMessage("修改成功!",!0),e.getList(!0),e.closeDialog("newRuleForm")):e.$gidMessage(t.msg)}):(delete i.id,e.$api.channel.add(i).then(function(t){0==t.code?(e.$gidMessage("新增成功!",!0),e.getList(),e.closeDialog("newRuleForm")):e.$gidMessage(t.msg)}))})},validateName:function(e){var t={name:this.newRuleForm.name};this.$api.channel.existName(t).then(function(t){0==t.code&&(t.data?e(new Error("渠道名重复")):e())})},del:function(e){var t=this,i={id:e};this.$api.channel.delete(i).then(function(e){0==e.code?(t.getList(!0),t.pop.dialogVisible=!1,t.$gidMessage("删除成功",!0)):t.$gidMessage(e.msg)})},importProject:function(){var e=this;this.$refs.importRuleForm.validate(function(t){if(!t)return!1;var i=new FormData;e.uploadAble=!1,i.append("file",e.file),i.append("projectId",e.projectId),e.$api.channel.batchadd(i).then(function(t){e.uploadAble=!0,"0"==t.code?(e.importRuleForm.filename=name,e.$gidMessage("导入成功",1),e.getList(),e.closeDialog("importRuleForm")):e.$gidMessage(t.msg||"导入失败")}).catch(function(t){e.$gidMessage("导入失败"),e.uploadAble=!0})})},uploadFile:function(e){if(e.target.files.length){var t=e.target.files[0],i=t.name,l=i.substring(i.lastIndexOf(".")+1);if("xls"!=l&&"xlsx"!=l)return void this.$gidMessage("请上传excel文件");this.file=t,this.importRuleForm.filename=i}},showFileDialog:function(){this.$refs.uploadfile.value="",this.$refs.uploadfile.click()},exportData:function(){if(this.selectAllStatus)Object(n.a)("/channel/exportAll","get",{projectId:this.projectId});else if(this.selectList.length){var e={ids:this.selectList};Object(n.a)("/channel/export","get",e)}else this.$gidMessage("请选择要下载的项目数据")},exportTemplate:function(){Object(n.a)("/channel/downloadTemplate","get",{})}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:!e.uploadAble,expression:"!uploadAble",modifiers:{fullscreen:!0}}],staticClass:"main-page"},[i("div",{staticClass:"handle-bar"},[i("div",{staticClass:"search-box fr"},[i("i",{staticClass:"btn-search",on:{click:function(t){e.getList()}}}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.query.name,expression:"query.name",modifiers:{trim:!0}}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入渠道名称"},domProps:{value:e.query.name},on:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.getList()},input:function(t){t.target.composing||e.$set(e.query,"name",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"table-hd"},[i("div",{staticClass:"table-hd-l"},[i("h4",[e._v("渠道列表")]),e._v(" "),i("div",{staticClass:"btn-all",on:{click:e.selectAll}},[e._v("全选")])]),e._v(" "),i("div",{staticClass:"table-hd-r"},[i("div",{staticClass:"table-hd-btn new",on:{click:function(t){e.showDialog(1)}}},[e._v("新增渠道")]),e._v(" "),i("div",{staticClass:"table-hd-btn import",on:{click:function(t){e.showDialog(2)}}},[e._v("批量导入")]),e._v(" "),i("div",{staticClass:"table-hd-btn down",on:{click:function(t){e.exportData()}}},[e._v("下载列表")])])]),e._v(" "),i("div",{staticClass:"gmop-table"},[i("el-table",{ref:"table",attrs:{data:e.tableList.records,border:""},on:{"selection-change":e.handleSelectionChange}},[e._v("\n                >\n                "),i("el-table-column",{attrs:{type:"selection",width:"38"}}),e._v(" "),i("el-table-column",{attrs:{prop:"id",label:"渠道ID","min-width":"80"}}),e._v(" "),i("el-table-column",{attrs:{prop:"name",label:"渠道名称","min-width":"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("p",{staticClass:"project-title"},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"link",label:"渠道链接","min-width":"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(decodeURIComponent(t.row.link)))]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"createTime",label:"创建时间","min-width":"130"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"handle",on:{click:function(i){e.showDialog(1,t.row)}}},[e._v("修改")]),e._v(" "),i("span",{staticClass:"handle",on:{click:function(i){e.showDialog(3,t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),e.tableList.total?i("div",{staticClass:"page-line"},[i("el-pagination",{staticClass:"page-box",attrs:{background:"","page-size":e.tableList.size,"prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next,slot,jumper",total:e.tableList.total},on:{"current-change":e.handleCurrentChange}},[i("span",{staticClass:"page-info"},[e._v("共"+e._s(Math.ceil(e.tableList.total/e.tableList.size))+"页共"+e._s(e.tableList.total)+"条信息")])])],1):e._e()]),e._v(" "),i("el-dialog",{attrs:{title:"",visible:e.pop.dialogVisible,width:e.Dialogwidth,center:"",top:"30vh"},on:{"update:visible":function(t){e.$set(e.pop,"dialogVisible",t)}}},[1==e.pop.popSteps?[i("div",{staticClass:"list-wrap"},[i("p",{staticClass:"dialog-h",staticStyle:{"text-align":"center"}},[e.newRuleForm.isedit?[e._v("修改渠道")]:[e._v("新增渠道")]],2),e._v(" "),i("el-form",{ref:"newRuleForm",attrs:{model:e.newRuleForm,rules:e.newRules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"渠道名称：",prop:"name"}},[i("el-input",{attrs:{maxlength:"50",placeholder:"请输入渠道名称"},model:{value:e.newRuleForm.name,callback:function(t){e.$set(e.newRuleForm,"name","string"==typeof t?t.trim():t)},expression:"newRuleForm.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"渠道链接：",prop:"link"}},[i("el-input",{attrs:{disabled:e.newRuleForm.isedit,placeholder:"请输入渠道链接"},model:{value:e.newRuleForm.link,callback:function(t){e.$set(e.newRuleForm,"link","string"==typeof t?t.trim():t)},expression:"newRuleForm.link"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"是否已添加第三方渠道标识：",prop:"thirdFlag","label-width":"214px"}},[i("el-radio-group",{attrs:{disabled:e.newRuleForm.isedit},model:{value:e.newRuleForm.thirdFlag,callback:function(t){e.$set(e.newRuleForm,"thirdFlag",t)},expression:"newRuleForm.thirdFlag"}},[i("el-radio",{attrs:{label:!0}},[e._v("是")]),e._v(" "),i("el-radio",{attrs:{label:!1}},[e._v("否")])],1)],1)],1),e._v(" "),i("div",{staticClass:"btn-line"},[i("div",{staticClass:"btn-center"},[i("em",{staticClass:"dialog-btn",on:{mousedown:function(t){e.addChannel()}}},[e._v("确定")]),e._v(" "),i("em",{staticClass:"dialog-btn cancel",on:{click:function(t){e.closeDialog("newRuleForm")}}},[e._v("取消")])])])],1)]:e._e(),e._v(" "),2==e.pop.popSteps?[i("div",{staticClass:"list-wrap"},[i("p",{staticClass:"dialog-h",staticStyle:{"text-align":"center"}},[e._v("渠道批量导入")]),e._v(" "),i("el-form",{ref:"importRuleForm",attrs:{model:e.importRuleForm,rules:e.importRules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"选择文件：",prop:"filename"}},[i("div",{staticClass:"file-wrap"},[i("a",{staticClass:"upload-btn",on:{click:function(t){e.showFileDialog()}}},[e._v(e._s(e.importRuleForm.filename?"重新选择":"选择文件"))]),e._v(" "),e.importRuleForm.filename?i("span",{staticClass:"file-name",attrs:{title:e.importRuleForm.filename}},[e._v(e._s(e.importRuleForm.filename))]):e._e(),e._v(" "),i("input",{ref:"uploadfile",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:function(t){e.uploadFile(t)}}})])]),e._v(" "),i("el-form-item",{attrs:{label:"参考模板：",prop:""}},[i("div",{staticClass:"a-link",on:{click:e.exportTemplate}},[e._v("下载渠道批量导入模版.xlsx")])])],1),e._v(" "),i("div",{staticClass:"btn-line"},[i("div",{staticClass:"btn-center"},[i("em",{staticClass:"dialog-btn",on:{click:function(t){e.importProject()}}},[e._v("确定")]),e._v(" "),i("em",{staticClass:"dialog-btn cancel",on:{click:function(t){e.closeDialog("importRuleForm")}}},[e._v("取消")])])])],1)]:e._e(),e._v(" "),3==e.pop.popSteps?[i("div",{staticClass:"list-wrap"},[i("p",{staticClass:"dialog-p",staticStyle:{"text-align":"center"}},[e._v("\n                    是否确定删除渠道 “\n                    "),i("span",{staticClass:"bold"},[e._v(e._s(e.pop.name))]),e._v("”？\n                ")]),e._v(" "),i("div",{staticClass:"btn-line"},[i("div",{staticClass:"btn-center"},[i("em",{staticClass:"dialog-btn",on:{click:function(t){e.del(e.pop.id)}}},[e._v("确定")]),e._v(" "),i("em",{staticClass:"dialog-btn cancel",on:{click:function(t){e.pop.dialogVisible=!1}}},[e._v("取消")])])])])]:e._e()],2)],1)},staticRenderFns:[]};var c=i("VU/8")(o,r,!1,function(e){i("/XWy")},"data-v-2b199ad6",null);t.default=c.exports}});