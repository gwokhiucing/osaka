webpackJsonp([4],{Pegr:function(t,e,n){var i=n("vrzp");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("172c071e",i,!0,{})},TQvf:function(t,e,n){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
var i;i=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=r(n(1)),s=r(n(3)),l=r(n(4));function r(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.default),a(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===i(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,l.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new o.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}();function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=c},function(t,e,n){"use strict";var i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(2),l=(i=s)&&i.__esModule?i:{default:i};var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return o(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,l.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,l.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":a(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=r},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),a=document.createRange();a.selectNodeContents(t),i.removeAllRanges(),i.addRange(a),e=i.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function a(){i.off(t,a),e.apply(n,arguments)}return a._=e,this.on(t,a,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,a=n.length;i<a;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],a=[];if(i&&e)for(var o=0,s=i.length;o<s;o++)i[o].fn!==e&&i[o].fn._!==e&&a.push(i[o]);return a.length?n[t]=a:delete n[t],this}},t.exports=n},function(t,e,n){var i=n(5),a=n(6);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(i.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}(t,e,n);if(i.string(t))return function(t,e,n){return a(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var i=n(7);function a(t,e,n,a,o){var s=function(t,e,n,a){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&a.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,s,o),{destroy:function(){t.removeEventListener(n,s,o)}}}t.exports=function(t,e,n,i,o){return"function"==typeof t.addEventListener?a.apply(null,arguments):"function"==typeof n?a.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return a(t,e,n,i,o)}))}},function(t,e){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}t.exports=function(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])},t.exports=i()},qorP:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("7+uW"),a=n("TQvf"),o=n.n(a);function s(t,e){var n=new o.a(e.target,{text:function(){return t}});n.on("success",function(){i.default.prototype.$gidMessage("复制成功",1),n.off("error"),n.off("success"),n.destroy()}),n.on("error",function(){i.default.prototype.$gidMessage("复制失败"),n.off("error"),n.off("success"),n.destroy()}),n.onClick(e)}},vEoy:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),a=n.n(i),o=n("ifoU"),s=n.n(o),l=n("uUlv"),r=n("qorP"),c=n("Mukr"),u=new s.a([["NO_EFFECT",{text:"未生效",class:"blue"}],["EFFECT",{text:"生效中",class:"green"}],["LOST_EFFECT",{text:"已失效",class:"grey"}],["PAUSE",{text:"暂停",class:"red"}]]),d={name:"page",data:function(){var t=this;return{query:{status:null,name:"",current:1,size:10},selectAllStatus:!1,selectList:[],statusOptions:[{value:"1",label:"未生效"},{value:"2",label:"生效中"},{value:"3",label:"已失效"},{value:"4",label:"暂停"}],Dialogwidth:"500px",tableList:{},pop:{dialogVisible:!1,popSteps:1,name:"",id:""},newRuleForm:{name:"",link:"",projectId:this.projectId},newRules:{name:[{required:!0,message:"请输入页面名称",trigger:"blur"},{validator:function(e,n,i){t.validateName(i)},trigger:"blur"}],link:[{required:!0,message:"请输入页面链接",trigger:"blur"},{validator:function(e,n,i){t.validateLink(i)},trigger:"blur"}]},importRuleForm:{filename:""},importRules:{filename:[{required:!0,message:"请选择文件",trigger:"blur"}]},uploadAble:!0,file:null}},props:{projectId:{type:String,default:"1"}},computed:a()({},Object(l.b)(["user"])),created:function(){this.getList()},methods:{getList:function(t){var e=this;this.query.current=t?this.query.current:1;var n=a()({},this.query);this.$api.page.getList(n).then(function(i){0==i.code?(e.tableList=i.data,t&&!i.data.records.length&&n.current>1&&(n.current--,e.getList(!0)),t&&e.selectAllStatus&&e.$refs.table.toggleAllSelection()):e.$gidMessage(i.msg)})},selectAll:function(){this.selectAllStatus=!this.selectAllStatus,this.$refs.table.toggleAllSelection()},handleCurrentChange:function(t){this.query.current=Number(t),this.getList(!0)},handleSelectionChange:function(t){this.selectList=t.map(function(t){return t.id})},selectMap:function(t,e){return u.get(t)&&u.get(t)[e]||""},tableRowClassName:function(t){var e=t.row;t.rowIndex;return"LOST_EFFECT"==e.status?"color999":""},showDialog:function(t,e){this.Dialogwidth=3==t?"400px":"500px",this.pop.popSteps=t,this.pop.dialogVisible=!0,1==t?e?this.newRuleForm={link:e.link,isedit:!0,name:e.name,id:e.id,projectId:this.projectId}:(this.newRuleForm={name:"",link:"",projectId:this.projectId,isedit:!1},this.$refs.newRuleForm&&this.$refs.newRuleForm.resetFields()):2==t?this.importRuleForm.filename="":3!=t&&4!=t&&5!=t&&6!=t||!e||(this.pop.name=e.name,this.pop.id=e.id)},closeDialog:function(t){var e=this;this.$nextTick(function(){e.$refs[t].resetFields()}),this.pop.dialogVisible=!1},addPage:function(){var t=this;this.$refs.newRuleForm.validate(function(e){if(!e)return!1;var n=a()({},t.newRuleForm);delete n.isedit,t.newRuleForm.isedit?t.$api.page.update(n).then(function(e){0==e.code?(t.$gidMessage("修改成功!",!0),t.getList(!0),t.closeDialog("newRuleForm")):t.$gidMessage(e.msg)}):(delete n.id,t.$api.page.add(n).then(function(e){0==e.code?(t.$gidMessage("新增成功!",!0),t.getList(),t.closeDialog("newRuleForm")):t.$gidMessage(e.msg)}))})},validateName:function(t){var e={name:this.newRuleForm.name};this.$api.page.existName(e).then(function(e){0==e.code&&(e.data?t(new Error("页面名重复")):t())})},validateLink:function(t){var e={link:this.newRuleForm.link};this.newRuleForm.isedit?t():this.$api.page.existLink(e).then(function(e){0==e.code&&(e.data?t(new Error("链接重复")):t())})},del:function(t){var e=this,n={id:t};this.$api.page.delete(n).then(function(t){0==t.code?(e.getList(!0),e.pop.dialogVisible=!1,e.$gidMessage("删除成功",!0)):e.$gidMessage(t.msg)})},delHandle:function(t){var e=this,n={id:t.id};this.$api.page.canDelete(n).then(function(n){0==n.code?"1:页面未生效，且未关联事件、渠道、漏斗"==n.msg?e.showDialog(3,t):"2:页面下存在未生效的事件、渠道、漏斗"==n.msg?e.showDialog(4,t):"3:页面已生效"==n.msg&&e.$gidMessage("页面“"+t.name+"”已生效，无法删除"):e.$gidMessage(n.msg)})},importProject:function(){var t=this;this.$refs.importRuleForm.validate(function(e){if(!e)return!1;var n=new FormData;t.uploadAble=!1,n.append("file",t.file),n.append("projectId",t.projectId),t.$api.page.batchadd(n).then(function(e){t.uploadAble=!0,"0"==e.code?(t.importRuleForm.filename=name,t.$gidMessage("导入成功",1),t.getList(),t.closeDialog("importRuleForm")):t.$gidMessage(e.msg||"导入失败")}).catch(function(e){t.$gidMessage("导入失败"),t.uploadAble=!0})})},uploadFile:function(t){if(t.target.files.length){var e=t.target.files[0],n=e.name,i=n.substring(n.lastIndexOf(".")+1);if("xls"!=i&&"xlsx"!=i)return void this.$gidMessage("请上传excel文件");this.file=e,this.importRuleForm.filename=n}},showFileDialog:function(){this.$refs.uploadfile.value="",this.$refs.uploadfile.click()},copy:function(t,e){Object(r.a)(t,e)},open:function(t){var e=this,n={id:t};this.$api.page.changeState(n).then(function(t){0==t.code?(e.getList(!0),e.pop.dialogVisible=!1,e.$gidMessage("开启成功",!0)):e.$gidMessage(t.msg)})},pause:function(t){var e=this,n={id:t};this.$api.page.changeState(n).then(function(t){0==t.code?(e.getList(!0),e.pop.dialogVisible=!1,e.$gidMessage("暂停成功",!0)):e.$gidMessage(t.msg)})},exportData:function(){if(this.selectAllStatus)Object(c.a)("/moppage/exportAll","get",{projectId:this.projectId});else if(this.selectList.length){var t={ids:this.selectList};Object(c.a)("/moppage/export","get",t)}else this.$gidMessage("请选择要下载的项目数据")},exportTemplate:function(){Object(c.a)("/moppage/downloadTemplate","get",{})}},components:{}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:!t.uploadAble,expression:"!uploadAble",modifiers:{fullscreen:!0}}],staticClass:"main-page"},[n("div",{staticClass:"handle-bar"},[n("div",{staticClass:"fl list-select-down"},[n("el-select",{staticClass:"gcloud-select-down",attrs:{placeholder:"页面代码状态",clearable:""},on:{change:function(e){t.getList()}},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}},t._l(t.statusOptions,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),n("div",{staticClass:"search-box fr"},[n("i",{staticClass:"btn-search",on:{click:function(e){t.getList()}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.query.name,expression:"query.name",modifiers:{trim:!0}}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入页面名称"},domProps:{value:t.query.name},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getList()},input:function(e){e.target.composing||t.$set(t.query,"name",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),n("div",{staticClass:"content-wrap"},[n("div",{staticClass:"table-hd"},[n("div",{staticClass:"table-hd-l"},[n("h4",[t._v("页面列表")]),t._v(" "),n("div",{staticClass:"btn-all",on:{click:t.selectAll}},[t._v("全选")])]),t._v(" "),n("div",{staticClass:"table-hd-r"},[n("div",{staticClass:"table-hd-btn new",on:{click:function(e){t.showDialog(1)}}},[t._v("新增页面")]),t._v(" "),n("div",{staticClass:"table-hd-btn import",on:{click:function(e){t.showDialog(2)}}},[t._v("批量导入")]),t._v(" "),n("div",{staticClass:"table-hd-btn down",on:{click:function(e){t.exportData()}}},[t._v("下载列表")])])]),t._v(" "),n("div",{staticClass:"gmop-table"},[n("el-table",{ref:"table",attrs:{data:t.tableList.records,border:"","row-class-name":t.tableRowClassName},on:{"selection-change":t.handleSelectionChange}},[t._v("\n                >\n                "),n("el-table-column",{attrs:{type:"selection",width:"38"}}),t._v(" "),n("el-table-column",{attrs:{prop:"id",label:"页面ID","min-width":"80"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"页面名称","min-width":"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("p",{staticClass:"project-title"},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"link",label:"页面链接","min-width":"230"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(decodeURIComponent(e.row.link)))]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"createTime",label:"创建时间","min-width":"130"}}),t._v(" "),n("el-table-column",{attrs:{label:"页面代码状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status?n("em",{staticClass:"icon-status",class:t.selectMap(e.row.status,"class")},[t._v(t._s(t.selectMap(e.row.status,"text")))]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"245"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"handle handle-high",on:{click:function(n){t.copy(e.row.link,n)}}},[t._v("复制代码")]),t._v(" "),"EFFECT"==e.row.status||"LOST_EFFECT"==e.row.status?n("span",{staticClass:"handle",on:{click:function(n){t.showDialog(5,e.row)}}},[t._v("暂停")]):t._e(),t._v(" "),"PAUSE"==e.row.status?n("span",{staticClass:"handle",on:{click:function(n){t.showDialog(6,e.row)}}},[t._v("开启")]):t._e(),t._v(" "),n("span",{staticClass:"handle",on:{click:function(n){t.showDialog(1,e.row)}}},[t._v("修改")]),t._v(" "),n("span",{staticClass:"handle",on:{click:function(n){t.delHandle(e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),t.tableList.total?n("div",{staticClass:"page-line"},[n("el-pagination",{staticClass:"page-box",attrs:{background:"","page-size":t.tableList.size,"prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next,slot,jumper",total:t.tableList.total},on:{"current-change":t.handleCurrentChange}},[n("span",{staticClass:"page-info"},[t._v("共"+t._s(Math.ceil(t.tableList.total/t.tableList.size))+"页共"+t._s(t.tableList.total)+"条信息")])])],1):t._e()]),t._v(" "),n("el-dialog",{attrs:{title:"",visible:t.pop.dialogVisible,width:t.Dialogwidth,center:"",top:"30vh"},on:{"update:visible":function(e){t.$set(t.pop,"dialogVisible",e)}}},[1==t.pop.popSteps?[n("div",{staticClass:"list-wrap"},[n("p",{staticClass:"dialog-h",staticStyle:{"text-align":"center"}},[t.newRuleForm.isedit?[t._v("修改页面")]:[t._v("新增页面")]],2),t._v(" "),n("el-form",{ref:"newRuleForm",attrs:{model:t.newRuleForm,rules:t.newRules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"页面名称：",prop:"name"}},[n("el-input",{attrs:{maxlength:"50",placeholder:"请输入页面名称"},model:{value:t.newRuleForm.name,callback:function(e){t.$set(t.newRuleForm,"name","string"==typeof e?e.trim():e)},expression:"newRuleForm.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"页面链接：",prop:"link"}},[n("el-input",{attrs:{disabled:t.newRuleForm.isedit,placeholder:"请输入页面链接"},model:{value:t.newRuleForm.link,callback:function(e){t.$set(t.newRuleForm,"link","string"==typeof e?e.trim():e)},expression:"newRuleForm.link"}})],1)],1),t._v(" "),n("div",{staticClass:"btn-line"},[n("div",{staticClass:"btn-center"},[n("em",{staticClass:"dialog-btn",on:{mousedown:function(e){t.addPage()}}},[t._v("确定")]),t._v(" "),n("em",{staticClass:"dialog-btn cancel",on:{click:function(e){t.closeDialog("newRuleForm")}}},[t._v("取消")])])])],1)]:t._e(),t._v(" "),2==t.pop.popSteps?[n("div",{staticClass:"list-wrap"},[n("p",{staticClass:"dialog-h",staticStyle:{"text-align":"center"}},[t._v("页面批量导入")]),t._v(" "),n("el-form",{ref:"importRuleForm",attrs:{model:t.importRuleForm,rules:t.importRules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"选择文件：",prop:"filename"}},[n("div",{staticClass:"file-wrap"},[n("a",{staticClass:"upload-btn",on:{click:function(e){t.showFileDialog()}}},[t._v(t._s(t.importRuleForm.filename?"重新选择":"选择文件"))]),t._v(" "),t.importRuleForm.filename?n("span",{staticClass:"file-name",attrs:{title:t.importRuleForm.filename}},[t._v(t._s(t.importRuleForm.filename))]):t._e(),t._v(" "),n("input",{ref:"uploadfile",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:function(e){t.uploadFile(e)}}})])]),t._v(" "),n("el-form-item",{attrs:{label:"参考模板：",prop:""}},[n("div",{staticClass:"a-link",on:{click:t.exportTemplate}},[t._v("下载页面批量导入模版.xlsx")])])],1),t._v(" "),n("div",{staticClass:"btn-line"},[n("div",{staticClass:"btn-center"},[n("em",{staticClass:"dialog-btn",on:{click:function(e){t.importProject()}}},[t._v("确定")]),t._v(" "),n("em",{staticClass:"dialog-btn cancel",on:{click:function(e){t.closeDialog("importRuleForm")}}},[t._v("取消")])])])],1)]:t._e(),t._v(" "),3==t.pop.popSteps?[n("div",{staticClass:"list-wrap"},[n("p",{staticClass:"dialog-p",staticStyle:{"text-align":"center"}},[t._v("\n                    是否确定删除页面 “\n                    "),n("span",{staticClass:"bold"},[t._v(t._s(t.pop.name))]),t._v("”？\n                ")]),t._v(" "),n("div",{staticClass:"btn-line"},[n("div",{staticClass:"btn-center"},[n("em",{staticClass:"dialog-btn",on:{click:function(e){t.del(t.pop.id)}}},[t._v("确定")]),t._v(" "),n("em",{staticClass:"dialog-btn cancel",on:{click:function(e){t.pop.dialogVisible=!1}}},[t._v("取消")])])])])]:t._e(),t._v(" "),4==t.pop.popSteps?[n("div",{staticClass:"list-wrap"},[n("p",{staticClass:"dialog-p",staticStyle:{"text-align":"center"}},[t._v("\n                    页面存在未生效的事件/漏斗，删除页面会导致页面下事件/漏斗一同删除，请确定是否删除页面“\n                    "),n("span",{staticClass:"bold"},[t._v(t._s(t.pop.name))]),t._v("\n                    ”？\n                ")]),t._v(" "),n("div",{staticClass:"btn-line"},[n("div",{staticClass:"btn-center"},[n("em",{staticClass:"dialog-btn",on:{click:function(e){t.del(t.pop.id)}}},[t._v("确定")]),t._v(" "),n("em",{staticClass:"dialog-btn cancel",on:{click:function(e){t.pop.dialogVisible=!1}}},[t._v("取消")])])])])]:t._e(),t._v(" "),5==t.pop.popSteps?[n("div",{staticClass:"list-wrap"},[n("p",{staticClass:"dialog-p",staticStyle:{"text-align":"center"}},[t._v("\n                    是否确定暂停页面“\n                    "),n("span",{staticClass:"bold"},[t._v(t._s(t.pop.name))]),t._v("\n                    ”？暂停后不采集该页面数据\n                ")]),t._v(" "),n("div",{staticClass:"btn-line"},[n("div",{staticClass:"btn-center"},[n("em",{staticClass:"dialog-btn",on:{click:function(e){t.pause(t.pop.id)}}},[t._v("确定")]),t._v(" "),n("em",{staticClass:"dialog-btn cancel",on:{click:function(e){t.pop.dialogVisible=!1}}},[t._v("取消")])])])])]:t._e(),t._v(" "),6==t.pop.popSteps?[n("div",{staticClass:"list-wrap"},[n("p",{staticClass:"dialog-p",staticStyle:{"text-align":"center"}},[t._v("\n                    是否确定启动页面“\n                    "),n("span",{staticClass:"bold"},[t._v(t._s(t.pop.name))]),t._v("\n                    ”？开启后重新采集该页面数据\n                ")]),t._v(" "),n("div",{staticClass:"btn-line"},[n("div",{staticClass:"btn-center"},[n("em",{staticClass:"dialog-btn",on:{click:function(e){t.open(t.pop.id)}}},[t._v("确定")]),t._v(" "),n("em",{staticClass:"dialog-btn cancel",on:{click:function(e){t.pop.dialogVisible=!1}}},[t._v("取消")])])])])]:t._e()],2)],1)},staticRenderFns:[]};var f=n("VU/8")(d,p,!1,function(t){n("Pegr")},"data-v-e1204488",null);e.default=f.exports},vrzp:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])}});