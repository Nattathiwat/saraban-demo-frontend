import{_ as v,a as w,b}from"./line-up-32057639.js";import{_ as y,r,o as k,c as S,a as t,t as u,j as d,b as i,d as V,g as z,k as A}from"./index-4007ba9b.js";const L={name:"agency-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",department_short_name:"",department_full_name:"",desc:"",organization_id:""},optionSelect:{organization_id:[]}}},methods:{back(){this.$router.push({name:"agency",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.department_short_name="",this.data.department_full_name="",this.data.desc=""},onSubmit(){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(e.edit){let a={code:e.data.code,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,organization_id:e.data.organization_id,desc:e.data.desc};e.showLoading=!0,e.axios.put(`/department/${e.$route.params.id}`,a).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(o=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})}else{let a={code:e.data.code,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,organization_id:e.data.organization_id,desc:e.data.desc};e.showLoading=!0,e.axios.post("/department",a).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(o=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})}}}},api_detail(){this.showLoading=!0,this.axios.get(`/department/${this.$route.params.id}`).then(e=>{this.showLoading=!1,this.data={...this.data,...e.data.data}}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},api_master(){this.showLoading=!0,this.axios.get("/organization").then(e=>{this.showLoading=!1,e.data.data.filter(a=>(a.value=a.id,a.name=a.name,a)),this.optionSelect.organization_id=e.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},keyup_org(e){this.axios.get("/organization",{params:{keyword:e.target.value}}).then(a=>{a.data.data&&(a.data.data.filter(o=>(o.value=o.id,o.name=o.name,o)),this.optionSelect.organization_id=a.data.data)})},keyupOrg(e,a){a.optionSelect.organization_id=[],this.axios.get("/organization",{params:{keyword:e.target.value}}).then(o=>{o.data.data&&(o.data.data.filter(l=>(l.value=l.id,l.name=l.name,l)),a.optionSelect.organization_id=o.data.data)})}},mounted(){this.api_master()}},x={class:"master-agency-detail"},q={class:"group-overflow"},C={class:"detail"},M={class:"group-head"},E={class:"group-first"},P=t("img",{src:v,alt:"",class:"icon-users"},null,-1),U={class:"name"},B={class:"group-end"},I=t("img",{src:w,class:"icon-back"},null,-1),N=t("img",{src:b,class:"icon-line"},null,-1),F=t("div",{class:"line"},null,-1),K={class:"group-detail"},j={class:"group-between"},D={class:"group-input left"},O=t("div",{class:"name"},[d("รหัสหน่วยงาน "),t("span",{class:"required"},"*")],-1),T={class:"group-input"},G=t("div",{class:"name"},[d("ชื่อย่อหน่วยงาน "),t("span",{class:"required"},"*")],-1),H={class:"group-between"},J={class:"group-input left"},Q=t("div",{class:"name"},[d("ชื่อหน่วยงาน "),t("span",{class:"required"},"*")],-1),R={class:"group-input"},W=t("div",{class:"name"},[d("กระทรวง "),t("span",{class:"required"},"*")],-1),X={class:"group-between"},Y={class:"group-input"},Z=t("div",{class:"name"},"รายละเอียด",-1),$=t("div",{class:"line"},null,-1),ee={class:"group-footer"},te={class:"footer-left"},ae=t("img",{src:z,alt:"times-circle",class:"icon-times-circle"},null,-1),se={class:"footer-right"},oe={type:"submit",class:"button-success"},ne=t("img",{src:A,alt:"times-circle",class:"icon-check-circle"},null,-1);function ie(e,a,o,l,s,c){const _=r("cpn-input"),m=r("cpn-autoComplete"),p=r("cpn-textArea"),h=r("Form"),g=r("cpn-modal-alert"),f=r("cpn-loading");return k(),S("div",x,[t("div",q,[t("div",C,[t("div",M,[t("div",E,[P,t("div",U,u(s.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"),1)]),t("div",B,[t("button",{type:"button",class:"button-back",onClick:a[0]||(a[0]=n=>c.back())},[I,N,d(" ย้อนกลับ ")])])]),F,i(h,{onSubmit:c.onSubmit,onInvalidSubmit:e.onInvalidSubmit},{default:V(()=>[t("div",K,[t("div",j,[t("div",D,[O,i(_,{modelValue:s.data.code,"onUpdate:modelValue":a[1]||(a[1]=n=>s.data.code=n),name:"department_id",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",T,[G,i(_,{modelValue:s.data.department_short_name,"onUpdate:modelValue":a[2]||(a[2]=n=>s.data.department_short_name=n),name:"department_short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",H,[t("div",J,[Q,i(_,{modelValue:s.data.department_full_name,"onUpdate:modelValue":a[3]||(a[3]=n=>s.data.department_full_name=n),name:"department_full_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",R,[W,i(m,{modelValue:s.data.organization_id,"onUpdate:modelValue":a[4]||(a[4]=n=>s.data.organization_id=n),name:"organization_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",optionSelect:s.optionSelect.organization_id,onChange:e.change,onKeyup:c.keyup_org},null,8,["modelValue","optionSelect","onChange","onKeyup"])])]),t("div",X,[t("div",Y,[Z,i(p,{modelValue:s.data.desc,"onUpdate:modelValue":a[5]||(a[5]=n=>s.data.desc=n),name:"desc",rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),$,t("div",ee,[t("div",te,[t("button",{type:"button",class:"button-danger",onClick:a[6]||(a[6]=n=>c.cancelClick())},[ae,d(" ยกเลิก ")])]),t("div",se,[t("button",oe,[ne,d(" "+u(s.edit?"ยืนยันแก้ไขหน่วยงาน":"ยืนยันสร้างหน่วยงาน"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),i(g,{modalAlert:s.modalAlert},null,8,["modalAlert"]),i(f,{show:s.showLoading},null,8,["show"])])}const re=y(L,[["render",ie]]);export{re as default};
