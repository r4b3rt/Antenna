(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1263c66"],{"2d2c":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-tooltip",{attrs:{slot:"suffix",title:t.copyTitle},slot:"suffix"},[o("a-icon",{staticClass:"copy",attrs:{type:t.copyIcon},on:{click:function(e){return t.copyEvent(t.text)},mouseleave:t.copyMouseleave}})],1)},s=[],c=o("b893"),n={data(){return{copyIcon:"copy",copyTitle:"复制到剪贴板"}},props:{text:""},methods:{copyEvent(t){let e=this;Object(c["copyText"])(t,(function(){e.copyIcon="check",e.copyTitle="复制成功"}))},copyMouseleave(){"check"===this.copyIcon&&(this.copyIcon="copy")}}},l=n,i=(o("c483"),o("2877")),r=Object(i["a"])(l,a,s,!1,null,"2eccf1f6",null);e["a"]=r.exports},"374d":function(t,e,o){},"3cc2":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"platform"},[o("div",{staticClass:"div_card"},[o("div",{staticClass:"title clearfix"},[o("div",{staticClass:"left"},[t._v(" API设置 "),o("a-icon",{staticStyle:{cursor:"pointer"},attrs:{type:"question-circle"},on:{click:t.gotoInfo}})],1)]),o("div",{staticClass:"content"},[o("a-form-model",{attrs:{model:t.form,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[o("a-form-model-item",{attrs:{label:"API_Key"}},[o("a-row",{attrs:{gutter:6}},[o("a-col",{attrs:{span:18}},[o("a-input",{attrs:{placeholder:"请输入",readOnly:""},model:{value:t.form.domain,callback:function(e){t.$set(t.form,"domain",e)},expression:"form.domain"}},[o("my-copy",{attrs:{slot:"suffix",text:t.form.domain},slot:"suffix"})],1)],1),o("a-col",{attrs:{span:6}},[o("a-button",{on:{click:t.refresh}},[t._v("重置")])],1)],1)],1)],1)],1)]),o("div",{staticClass:"div_card"},[t._m(0),o("div",{staticClass:"content"},[o("a-form-model",{attrs:{model:t.form1,layout:"vertical"}},[o("a-form-model-item",{attrs:{label:"获取各类消息记录"}},t._l(t.urllist,(function(e,a){return o("a-input-group",{key:a,attrs:{compact:""}},[o("a-button",{attrs:{type:"primary"}},[t._v(t._s(e.method))]),o("a-input",{staticStyle:{width:"60%"},attrs:{placeholder:"请输入"},model:{value:e.url,callback:function(o){t.$set(e,"url",o)},expression:"it.url"}},[o("my-copy",{attrs:{slot:"suffix",text:e.url},slot:"suffix"})],1)],1)})),1)],1)],1)])])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title clearfix"},[o("div",{staticClass:"left"},[t._v("API列表")])])}],c=o("2d2c"),n=o("0995"),l={components:{MyCopy:c["a"]},data(){return{labelCol:{span:4},wrapperCol:{span:10},form:{domain:""},value1:"Zhejiang",value2:"",value3:"",form1:{notice:!0,serve:"",port:"8080",account:"",password:"8080"},urllist:[]}},created(){this.initData()},mounted(){},methods:{gotoInfo(){window.open("https://blog.antenna.cool/docs/api_back")},initData(){n["a"].all([n["a"].getOpenAPI().then(t=>{if(1===t.code){let{data:{results:e}}=t;this.form.domain=e[0].key}else this.$message.error(t.message)}),n["a"].getOpenAPIUrl().then(t=>{if(1===t.code){let{data:{urllist:e}}=t;this.urllist=e}else this.$message.error(t.message)})]).then(t=>{})},refresh(){n["a"].getRefreshOpenAPI().then(t=>{if(1===t.code){let{data:e}=t;this.form.domain=e.key}else this.$message.error(t.message)})}}},i=l,r=(o("aef4"),o("2877")),u=Object(r["a"])(i,a,s,!1,null,"c872cd20",null);e["default"]=u.exports},"4af6":function(t,e,o){},aef4:function(t,e,o){"use strict";o("374d")},b893:function(t,e){function o(t){let e={};for(const o in t)e[o]=t[o].join(",");return e}function a(t,e){var o=document.createElement("input");o.setAttribute("id","cp_hgz_input"),o.value=t,document.getElementsByTagName("body")[0].appendChild(o),document.getElementById("cp_hgz_input").select(),document.execCommand("copy"),document.getElementById("cp_hgz_input").remove(),e&&e(t)}t.exports={handleFilters:o,copyText:a}},c483:function(t,e,o){"use strict";o("4af6")}}]);