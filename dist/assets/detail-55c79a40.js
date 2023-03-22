import{_ as b,a as f,b as v}from"./line-up-32057639.js";import{_ as y,r as l,o as w,c as k,a as t,t as r,j as n,b as i,d as A,g as S,k as V}from"./index-a44f4af0.js";const L={name:"book-method-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",name:"",desc:"",optionSelect:{type:[{name:"หนังสือรับเข้า",value:"0"},{name:"หนังสือส่งออก",value:"1"}]}}}},methods:{back(){this.$router.push({name:"book-method",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.name="",this.data.type="",this.data.desc=""},onSubmit(){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขรูปแบบการรับ-ส่งหนังสือ":"สร้างรูปแบบการรับ-ส่งหนังสือ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(e.edit){let s={name:e.data.name,type:e.data.type,desc:e.data.desc};e.showLoading=!0,e.axios.put(`/bookmethod/${e.$route.params.id}`,s).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขรูปแบบการรับ-ส่งหนังสือสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(d=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}else{let s={name:e.data.name,type:e.data.type,desc:e.data.desc};e.showLoading=!0,e.axios.post("/bookmethod",s).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างรูปแบบการรับ-ส่งหนังสือสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(d=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/bookmethod/${this.$route.params.id}`).then(e=>{this.showLoading=!1,this.data.name=e.data.data.name,this.data.type=e.data.data.type,this.data.desc=e.data.data.desc}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}},mounted(){this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1}},x={class:"master-book-method-detail"},M={class:"group-overflow"},q={class:"detail"},C={class:"group-head"},P={class:"group-first"},E=t("img",{src:b,alt:"",class:"icon-users"},null,-1),B={class:"name"},D={class:"group-end"},I=t("img",{src:f,class:"icon-back"},null,-1),N=t("img",{src:v,class:"icon-line"},null,-1),U=t("div",{class:"line"},null,-1),F={class:"group-detail"},j={class:"group-between"},T={class:"group-input left"},$=t("div",{class:"name"},[n("ชื่อรูปแบบการรับ-ส่งหนังสือ "),t("span",{class:"required"},"*")],-1),z={class:"group-input"},G=t("div",{class:"name"},[n("ประเภทหนังสือ"),t("span",{class:"required"},"*")],-1),H={class:"group-between"},J={class:"group-input"},K=t("div",{class:"name"},"รายละเอียด ",-1),O=t("div",{class:"line"},null,-1),Q={class:"group-footer"},R={class:"footer-left"},W=t("img",{src:S,alt:"times-circle",class:"icon-times-circle"},null,-1),X={class:"footer-right"},Y={type:"submit",class:"button-success"},Z=t("img",{src:V,alt:"times-circle",class:"icon-check-circle"},null,-1);function ee(e,s,d,te,o,c){const m=l("cpn-input"),u=l("cpn-select"),p=l("cpn-textArea"),_=l("Form"),h=l("cpn-modal-alert"),g=l("cpn-loading");return w(),k("div",x,[t("div",M,[t("div",q,[t("div",C,[t("div",P,[E,t("div",B,r(o.edit?"แก้ไขรูปแบบการรับ-ส่งหนังสือ":"สร้างรูปแบบการรับ-ส่งหนังสือ"),1)]),t("div",D,[t("button",{type:"button",class:"button-back",onClick:s[0]||(s[0]=a=>c.back())},[I,N,n(" ย้อนกลับ ")])])]),U,i(_,{onSubmit:c.onSubmit,onInvalidSubmit:e.onInvalidSubmit},{default:A(()=>[t("div",F,[t("div",j,[t("div",T,[$,i(m,{modelValue:o.data.name,"onUpdate:modelValue":s[1]||(s[1]=a=>o.data.name=a),name:"name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",z,[G,i(u,{modelValue:o.data.type,"onUpdate:modelValue":s[2]||(s[2]=a=>o.data.type=a),name:"type",optionSelect:o.data.optionSelect.type,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),t("div",H,[t("div",J,[K,i(p,{modelValue:o.data.desc,"onUpdate:modelValue":s[3]||(s[3]=a=>o.data.desc=a),name:"book_method_desc",rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),O,t("div",Q,[t("div",R,[t("button",{type:"button",class:"button-danger",onClick:s[4]||(s[4]=a=>c.cancelClick())},[W,n(" ยกเลิก ")])]),t("div",X,[t("button",Y,[Z,n(" "+r(o.edit?"ยืนยันแก้ไขรูปแบบการรับ-ส่งหนังสือ":"ยืนยันสร้างรูปแบบการรับ-ส่งหนังสือ"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),i(h,{modalAlert:o.modalAlert},null,8,["modalAlert"]),i(g,{show:o.showLoading},null,8,["show"])])}const ae=y(L,[["render",ee]]);export{ae as default};
