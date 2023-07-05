import{_ as f}from"./users-duotone-57e3c13d.js";import{_ as v,a as b}from"./line-up-c54e1bbb.js";import{_ as w,r as i,o as y,c as k,a as t,t as _,j as n,b as l,d as A,g as V,k as S}from"./index-87698f38.js";const L={name:"record-type-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{name:"",desc:"",active_flag:!0,template_flag:!0}}},methods:{back(){this.$router.push({name:"record-type",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.name="",this.data.desc=""},onSubmit(){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขชนิดบันทึกข้อความ":"สร้างชนิดบันทึกข้อความ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(e.edit){let s={name:e.data.name,desc:e.data.desc,active_flag:e.data.active_flag?1:0,template_flag:e.data.template_flag?1:0};e.showLoading=!0,e.axios.put(`/booktypenote/${e.$route.params.id}`,s).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขชนิดบันทึกข้อความสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(d=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}else{let s={name:e.data.name,desc:e.data.desc,active_flag:e.data.active_flag?1:0,template_flag:e.data.template_flag?1:0};e.showLoading=!0,e.axios.post("/booktypenote",s).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างชนิดบันทึกข้อความสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(d=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/booktypenote/${this.$route.params.id}`).then(e=>{this.showLoading=!1,this.data={...this.data,...e.data.data},this.data.active_flag=e.data.data.active_flag==1,this.data.template_flag=e.data.data.template_flag==1}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}},mounted(){this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1}},x={class:"master-record-type-detail"},M={class:"group-overflow"},C={class:"detail"},q={class:"group-head"},P={class:"group-first"},E=t("img",{src:f,alt:"",class:"icon-users"},null,-1),U={class:"name"},B={class:"group-end"},D=t("img",{src:v,class:"icon-back"},null,-1),I=t("img",{src:b,class:"icon-line"},null,-1),N=t("div",{class:"line"},null,-1),F={class:"group-detail"},T={class:"group-between"},j={class:"group-input left"},$=t("div",{class:"name"},[n("ชื่อชนิดบันทึกข้อความ"),t("span",{class:"required"},"*")],-1),z={class:"group-input left"},G=t("div",{class:"name"},"เปิด/ปิด การใช้งาน",-1),H={class:"group-input left"},J=t("div",{class:"name"},"เปิด/ปิด การใช้งาน Template",-1),K={class:"group-between"},O={class:"group-input"},Q=t("div",{class:"name"},"รายละเอียด",-1),R=t("div",{class:"line"},null,-1),W={class:"group-footer"},X={class:"footer-left"},Y=t("img",{src:V,alt:"times-circle",class:"icon-times-circle"},null,-1),Z={class:"footer-right"},ee={type:"submit",class:"button-success"},te=t("img",{src:S,alt:"times-circle",class:"icon-check-circle"},null,-1);function se(e,s,d,ae,a,c){const m=i("cpn-input"),r=i("cpn-toggleSwitch"),u=i("cpn-textArea"),p=i("Form"),h=i("cpn-modal-alert"),g=i("cpn-loading");return y(),k("div",x,[t("div",M,[t("div",C,[t("div",q,[t("div",P,[E,t("div",U,_(a.edit?"แก้ไขชนิดบันทึกข้อความ":"สร้างชนิดบันทึกข้อความ"),1)]),t("div",B,[t("button",{type:"button",class:"button-back",onClick:s[0]||(s[0]=o=>c.back())},[D,I,n(" ย้อนกลับ ")])])]),N,l(p,{onSubmit:c.onSubmit,onInvalidSubmit:e.onInvalidSubmit},{default:A(()=>[t("div",F,[t("div",T,[t("div",j,[$,l(m,{modelValue:a.data.name,"onUpdate:modelValue":s[1]||(s[1]=o=>a.data.name=o),name:"name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",z,[G,l(r,{modelValue:a.data.active_flag,"onUpdate:modelValue":s[2]||(s[2]=o=>a.data.active_flag=o),name:"active_flag"},null,8,["modelValue"])]),t("div",H,[J,l(r,{modelValue:a.data.template_flag,"onUpdate:modelValue":s[3]||(s[3]=o=>a.data.template_flag=o),name:"template_flag"},null,8,["modelValue"])])]),t("div",K,[t("div",O,[Q,l(u,{modelValue:a.data.desc,"onUpdate:modelValue":s[4]||(s[4]=o=>a.data.desc=o),name:"record-type_desc",class:"",style:{},rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),R,t("div",W,[t("div",X,[t("button",{type:"button",class:"button-danger",onClick:s[5]||(s[5]=o=>c.cancelClick())},[Y,n(" ยกเลิก ")])]),t("div",Z,[t("button",ee,[te,n(" "+_(a.edit?"ยืนยันแก้ไขชนิดบันทึกข้อความ":"ยืนยันสร้างชนิดบันทึกข้อความ"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),l(h,{modalAlert:a.modalAlert},null,8,["modalAlert"]),l(g,{show:a.showLoading},null,8,["show"])])}const de=w(L,[["render",se]]);export{de as default};
