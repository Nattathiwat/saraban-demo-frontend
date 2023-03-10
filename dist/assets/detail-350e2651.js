import{_ as f,a as v,b as w}from"./line-up-32057639.js";import{_ as b,r as d,o as y,c as V,a as t,t as _,j as i,b as n,d as A,g as S,k}from"./index-d55e1864.js";const L={name:"agency-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",department_short_name:"",department_full_name:"",desc:"",organization_id:""},optionSelect:{organization_id:[]}}},methods:{back(){this.$router.push({name:"agency",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.department_short_name="",this.data.department_full_name="",this.data.desc=""},onSubmit(){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(e.edit){let s={code:e.data.code,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,organization_id:e.data.organization_id,desc:e.data.desc};e.showLoading=!0,e.axios.put(`/department/${e.$route.params.id}`,s).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(l=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}else{let s={code:e.data.code,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,organization_id:e.data.organization_id,desc:e.data.desc};e.showLoading=!0,e.axios.post("/department",s).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(l=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}}}},api_detail(){this.showLoading=!0,this.axios.get(`/department/${this.$route.params.id}`).then(e=>{this.showLoading=!1,this.data={...this.data,...e.data.data}}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},api_master(){this.showLoading=!0,this.axios.get("/organization").then(e=>{this.showLoading=!1,e.data.data.filter(s=>(s.value=s.id,s.name=s.name,s)),this.optionSelect.organization_id=e.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}},mounted(){this.api_master()}},z={class:"master-agency-detail"},q={class:"group-overflow"},x={class:"detail"},C={class:"group-head"},M={class:"group-first"},E=t("img",{src:f,alt:"",class:"icon-users"},null,-1),P={class:"name"},U={class:"group-end"},B=t("img",{src:v,class:"icon-back"},null,-1),I=t("img",{src:w,class:"icon-line"},null,-1),N=t("div",{class:"line"},null,-1),F={class:"group-detail"},j={class:"group-between"},D={class:"group-input left"},T=t("div",{class:"name"},[i("รหัสหน่วยงาน "),t("span",{class:"required"},"*")],-1),G={class:"group-input"},H=t("div",{class:"name"},[i("ชื่อย่อหน่วยงาน "),t("span",{class:"required"},"*")],-1),J={class:"group-between"},K={class:"group-input left"},O=t("div",{class:"name"},[i("ชื่อหน่วยงาน "),t("span",{class:"required"},"*")],-1),Q={class:"group-input"},R=t("div",{class:"name"},[i("กระทรวง "),t("span",{class:"required"},"*")],-1),W={class:"group-between"},X={class:"group-input"},Y=t("div",{class:"name"},"รายละเอียด",-1),Z=t("div",{class:"line"},null,-1),$={class:"group-footer"},ee={class:"footer-left"},te=t("img",{src:S,alt:"times-circle",class:"icon-times-circle"},null,-1),se={class:"footer-right"},ae={type:"submit",class:"button-success"},oe=t("img",{src:k,alt:"times-circle",class:"icon-check-circle"},null,-1);function ne(e,s,l,ie,a,r){const c=d("cpn-input"),m=d("cpn-autoComplete"),u=d("cpn-textArea"),p=d("Form"),h=d("cpn-modal-alert"),g=d("cpn-loading");return y(),V("div",z,[t("div",q,[t("div",x,[t("div",C,[t("div",M,[E,t("div",P,_(a.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"),1)]),t("div",U,[t("button",{type:"button",class:"button-back",onClick:s[0]||(s[0]=o=>r.back())},[B,I,i(" ย้อนกลับ ")])])]),N,n(p,{onSubmit:r.onSubmit,onInvalidSubmit:e.onInvalidSubmit},{default:A(()=>[t("div",F,[t("div",j,[t("div",D,[T,n(c,{modelValue:a.data.code,"onUpdate:modelValue":s[1]||(s[1]=o=>a.data.code=o),name:"department_id",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",G,[H,n(c,{modelValue:a.data.department_short_name,"onUpdate:modelValue":s[2]||(s[2]=o=>a.data.department_short_name=o),name:"department_short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",J,[t("div",K,[O,n(c,{modelValue:a.data.department_full_name,"onUpdate:modelValue":s[3]||(s[3]=o=>a.data.department_full_name=o),name:"department_full_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",Q,[R,n(m,{modelValue:a.data.organization_id,"onUpdate:modelValue":s[4]||(s[4]=o=>a.data.organization_id=o),name:"organization_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",optionSelect:a.optionSelect.organization_id,onChange:e.change},null,8,["modelValue","optionSelect","onChange"])])]),t("div",W,[t("div",X,[Y,n(u,{modelValue:a.data.desc,"onUpdate:modelValue":s[5]||(s[5]=o=>a.data.desc=o),name:"desc",rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),Z,t("div",$,[t("div",ee,[t("button",{type:"button",class:"button-danger",onClick:s[6]||(s[6]=o=>r.cancelClick())},[te,i(" ยกเลิก ")])]),t("div",se,[t("button",ae,[oe,i(" "+_(a.edit?"ยืนยันแก้ไขหน่วยงาน":"ยืนยันสร้างหน่วยงาน"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),n(h,{modalAlert:a.modalAlert},null,8,["modalAlert"]),n(g,{show:a.showLoading},null,8,["show"])])}const re=b(L,[["render",ne]]);export{re as default};
