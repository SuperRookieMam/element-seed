(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{535:function(e,r,t){},546:function(e,r,t){"use strict";var l=t(535);t.n(l).a},557:function(e,r,t){"use strict";t.r(r);var l,a=t(157),o=t.n(a),s=t(156),i=t.n(s),n=t(158),u=t.n(n),c=t(98),m=t.n(c),p=t(155),d=t.n(p),b=t(5),g=t(154),v=Object(g.a)(l=function(e){function r(){var e,t,l,a;i()(this,r);for(var s=arguments.length,n=Array(s),u=0;u<s;u++)n[u]=arguments[u];return t=l=m()(this,(e=r.__proto__||o()(r)).call.apply(e,[this].concat(n))),l.ruleForm={name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},l.rules={name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},a=t,m()(l,a)}return d()(r,e),u()(r,[{key:"submitForm",value:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})}},{key:"resetForm",value:function(e){this.$refs[e].resetFields()}}]),r}(b.default))||l,f=(t(546),t(153)),F=Object(f.a)(v,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(r){e.$set(e.ruleForm,"region",r)},expression:"ruleForm.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"活动时间",required:""}},[t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date1"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(r){e.$set(e.ruleForm,"date1",r)},expression:"ruleForm.date1"}})],1)],1),e._v(" "),t("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date2"}},[t("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.ruleForm.date2,callback:function(r){e.$set(e.ruleForm,"date2",r)},expression:"ruleForm.date2"}})],1)],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[t("el-switch",{model:{value:e.ruleForm.delivery,callback:function(r){e.$set(e.ruleForm,"delivery",r)},expression:"ruleForm.delivery"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[t("el-checkbox-group",{model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},[t("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),t("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),t("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),t("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[t("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(r){e.$set(e.ruleForm,"resource",r)},expression:"ruleForm.resource"}},[t("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),t("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)},[],!1,null,"2cea1fdc",null);r.default=F.exports}}]);