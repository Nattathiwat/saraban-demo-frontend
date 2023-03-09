import{_ as b,a as k,b as f}from"./line-up-32057639.js";import{_ as v,r as d,o as w,c as y,a as t,t as c,j as l,b as i,d as A,g as S,k as V}from"./index-de66d52e.js";const L={name:"book-method-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",book_method_name:"",description:"",optionSelect:{book_method_record:[{name:"หนังสือรับเข้า",value:"0"},{name:"หนังสือส่งออก",value:"1"}]}}}},methods:{back(){this.$router.push({name:"book-method",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.book_method_name="",this.data.book_method_record="",this.data.description=""},onSubmit(){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขรูปแบบการรับ-ส่งหนังสือ":"สร้างรูปแบบการรับ-ส่งหนังสือ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(e.edit){let o={name:e.data.book_method_name,type:e.data.book_method_record,desc:e.data.description};e.showLoading=!0,e.axios.put(`/bookmethod/${e.$route.params.id}`,o).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขรูปแบบการรับ-ส่งหนังสือสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(n=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}else{let o={name:e.data.book_method_name,type:e.data.book_method_record,desc:e.data.description};e.showLoading=!0,e.axios.post("/bookmethod",o).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างรูปแบบการรับ-ส่งหนังสือสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(n=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/bookmethod/${this.$route.params.id}`).then(e=>{this.showLoading=!1,this.data.name=e.data.data.book_method_name,this.data.type=e.data.data.book_method_record,this.data.desc=e.data.data.description}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}},mounted(){this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1}},x={class:"master-book-method-detail"},M={class:"group-overflow"},q={class:"detail"},C={class:"group-head"},P={class:"group-first"},E=t("img",{src:b,alt:"",class:"icon-users"},null,-1),B={class:"name"},D={class:"group-end"},I=t("img",{src:k,class:"icon-back"},null,-1),N=t("img",{src:f,class:"icon-line"},null,-1),U=t("div",{class:"line"},null,-1),F={class:"group-detail"},j={class:"group-between"},T={class:"group-input left"},$=t("div",{class:"name"},[l("ชื่อรูปแบบการรับ-ส่งหนังสือ "),t("span",{class:"required"},"*")],-1),z={class:"group-input"},G=t("div",{class:"name"},[l("ประเภทหนังสือ"),t("span",{class:"required"},"*")],-1),H={class:"group-between"},J={class:"group-input"},K=t("div",{class:"name"},"รายละเอียด ",-1),O=t("div",{class:"line"},null,-1),Q={class:"group-footer"},R={class:"footer-left"},W=t("img",{src:S,alt:"times-circle",class:"icon-times-circle"},null,-1),X={class:"footer-right"},Y={type:"submit",class:"button-success"},Z=t("img",{src:V,alt:"times-circle",class:"icon-check-circle"},null,-1);function ee(e,o,n,te,s,r){const _=d("cpn-input"),m=d("cpn-select"),h=d("cpn-textArea"),u=d("Form"),p=d("cpn-modal-alert"),g=d("cpn-loading");return w(),y("div",x,[t("div",M,[t("div",q,[t("div",C,[t("div",P,[E,t("div",B,c(s.edit?"แก้ไขรูปแบบการรับ-ส่งหนังสือ":"สร้างรูปแบบการรับ-ส่งหนังสือ"),1)]),t("div",D,[t("button",{type:"button",class:"button-back",onClick:o[0]||(o[0]=a=>r.back())},[I,N,l(" ย้อนกลับ ")])])]),U,i(u,{onSubmit:r.onSubmit,onInvalidSubmit:e.onInvalidSubmit},{default:A(()=>[t("div",F,[t("div",j,[t("div",T,[$,i(_,{modelValue:s.data.book_method_name,"onUpdate:modelValue":o[1]||(o[1]=a=>s.data.book_method_name=a),name:"book_method_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",z,[G,i(m,{modelValue:s.data.book_method_record,"onUpdate:modelValue":o[2]||(o[2]=a=>s.data.book_method_record=a),name:"book_method_record",optionSelect:s.data.optionSelect.book_method_record,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),t("div",H,[t("div",J,[K,i(h,{modelValue:s.data.description,"onUpdate:modelValue":o[3]||(o[3]=a=>s.data.description=a),name:"book_method_description",rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),O,t("div",Q,[t("div",R,[t("button",{type:"button",class:"button-danger",onClick:o[4]||(o[4]=a=>r.cancelClick())},[W,l(" ยกเลิก ")])]),t("div",X,[t("button",Y,[Z,l(" "+c(s.edit?"ยืนยันแก้ไขรูปแบบการรับ-ส่งหนังสือ":"ยืนยันสร้างรูปแบบการรับ-ส่งหนังสือ"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),i(p,{modalAlert:s.modalAlert},null,8,["modalAlert"]),i(g,{show:s.showLoading},null,8,["show"])])}const ae=v(L,[["render",ee]]);export{ae as default};
