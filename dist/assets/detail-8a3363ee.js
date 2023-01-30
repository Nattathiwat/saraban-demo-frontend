import{_ as h,a as g,b as f}from"./line-up-32057639.js";import{_ as v,r,o as b,c as w,a as e,t as m,j as l,b as n,d as k,g as A,k as y}from"./index-125b3f97.js";const V={name:"department-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",department_short_name:"",department_full_name:""}}},methods:{back(){this.$router.push({name:"department"}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.department_short_name="",this.data.department_full_name=""},onSubmit(){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(t.edit){let s={code:t.data.code,department_full_name:t.data.department_full_name,department_short_name:t.data.department_short_name};t.showLoading=!0,t.axios.put(`/department/${t.$route.params.id}`,s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(d=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}else{let s={code:t.data.code,department_full_name:t.data.department_full_name,department_short_name:t.data.department_short_name};t.showLoading=!0,t.axios.post("/department",s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(d=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/department/${this.$route.params.id}`).then(t=>{this.showLoading=!1,this.data.department_short_name=t.data.data.department_short_name,this.data.department_full_name=t.data.data.department_full_name}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}},mounted(){this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1}},L={class:"department-detail"},S={class:"group-overflow"},x={class:"detail"},M={class:"group-head"},q={class:"group-first"},C=e("img",{src:h,alt:"",class:"icon-users"},null,-1),E={class:"name"},B={class:"group-end"},D=e("img",{src:g,class:"icon-back"},null,-1),I=e("img",{src:f,class:"icon-line"},null,-1),N=e("div",{class:"line"},null,-1),P={class:"group-detail"},U={class:"group-between"},F={class:"group-input left"},j=e("div",{class:"name"},[l("รหัสหน่วยงาน "),e("span",{class:"required"},"*")],-1),T={class:"group-input"},z=e("div",{class:"name"},[l("ชื่อย่อหน่วยงาน "),e("span",{class:"required"},"*")],-1),G={class:"group-between"},H={class:"group-input"},J=e("div",{class:"name"},[l("ชื่อหน่วยงาน "),e("span",{class:"required"},"*")],-1),K=e("div",{class:"line"},null,-1),O={class:"group-footer"},Q={class:"footer-left"},R=e("img",{src:A,alt:"times-circle",class:"icon-times-circle"},null,-1),W={class:"footer-right"},X={type:"submit",class:"button-success"},Y=e("img",{src:y,alt:"times-circle",class:"icon-check-circle"},null,-1);function Z(t,s,d,$,a,i){const c=r("cpn-input"),_=r("Form"),u=r("cpn-modal-alert"),p=r("cpn-loading");return b(),w("div",L,[e("div",S,[e("div",x,[e("div",M,[e("div",q,[C,e("div",E,m(a.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"),1)]),e("div",B,[e("button",{type:"button",class:"button-back",onClick:s[0]||(s[0]=o=>i.back())},[D,I,l(" ย้อนกลับ ")])])]),N,n(_,{onSubmit:i.onSubmit,onInvalidSubmit:t.onInvalidSubmit},{default:k(()=>[e("div",P,[e("div",U,[e("div",F,[j,n(c,{modelValue:a.data.code,"onUpdate:modelValue":s[1]||(s[1]=o=>a.data.code=o),name:"department_id",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",T,[z,n(c,{modelValue:a.data.department_short_name,"onUpdate:modelValue":s[2]||(s[2]=o=>a.data.department_short_name=o),name:"department_short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",G,[e("div",H,[J,n(c,{modelValue:a.data.department_full_name,"onUpdate:modelValue":s[3]||(s[3]=o=>a.data.department_full_name=o),name:"department_full_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),K,e("div",O,[e("div",Q,[e("button",{type:"button",class:"button-danger",onClick:s[4]||(s[4]=o=>i.cancelClick())},[R,l(" ยกเลิก ")])]),e("div",W,[e("button",X,[Y,l(" "+m(a.edit?"ยืนยันแก้ไขหน่วยงาน":"ยืนยันสร้างหน่วยงาน"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),n(u,{modalAlert:a.modalAlert},null,8,["modalAlert"]),n(p,{show:a.showLoading},null,8,["show"])])}const se=v(V,[["render",Z]]);export{se as default};
