import{_ as b}from"./users-duotone-d9c1d4c7.js";import{_ as w,a as y}from"./line-up-ff8a3ab8.js";import{_ as S,r as c,o as V,c as k,a as t,t as m,j as l,b as n,d as z,g as x,k as A}from"./index-ac258723.js";const q={name:"subministry-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",short_name:"",Name:"",desc:"",active_flag:!0,organization_id:"",department_id:""},optionSelect:{organization_id:[],department_id:[]}}},methods:{back(){this.$router.push({name:"subministry",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.short_name="",this.data.Name=""},onSubmit(){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขกอง":"สร้างกอง"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(e.edit){let a={code:e.data.code,Name:e.data.Name,short_name:e.data.short_name,desc:e.data.desc,department_id:e.data.department_id,active_flag:e.data.active_flag?1:0};e.showLoading=!0,e.axios.put(`/subministry/${e.$route.params.id}`,a).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขกองสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(i=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}else{let a={code:e.data.code,Name:e.data.Name,short_name:e.data.short_name,desc:e.data.desc,department_id:e.data.department_id,active_flag:e.data.active_flag?1:0};e.showLoading=!0,e.axios.post("/subministry",a).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างกองสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(i=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/subministry/${this.$route.params.id}`).then(e=>{this.showLoading=!1,this.optionSelect.department_id.every(r=>r.id!=e.data.data.department_id)&&this.optionSelect.department_id.push({value:e.data.data.department_id,name:e.data.data.department_name}),this.optionSelect.organization_id.every(r=>r.id!=e.data.data.organization_id)&&this.optionSelect.organization_id.push({value:e.data.data.organization_id,name:e.data.data.organization_name}),this.data={...this.data,...e.data.data},this.data.active_flag=e.data.data.active_flag==1}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},api_master(){this.showLoading=!0;const e=this.axios.get("/master-data/organization"),a=this.axios.get("/department");this.axios.all([e,a]).then(this.axios.spread((...i)=>{this.showLoading=!1;const r=i[0],s=i[1];r.data.data.filter(o=>(o.value=o.id,o.name=o.name,o)),s.data.data.filter(o=>(o.value=o.id,o.name=o.department_full_name,o)),this.optionSelect.organization_id=r.data.data,this.optionSelect.department_id=s.data.data,this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})},change(e){this.optionSelect.department_id.filter(a=>{a.id==e&&(this.optionSelect.organization_id.push({value:a.organization_id,name:a.organization_name}),this.data.organization_id=a.organization_id)})},keyup_dep(e){this.axios.get("/department",{params:{keyword:e.target.value}}).then(a=>{a.data.data&&(a.data.data.filter(i=>(i.value=i.id,i.name=i.department_full_name,i)),this.optionSelect.department_id=a.data.data)})}},mounted(){this.api_master()}},L={class:"master-submin-detail"},C={class:"group-overflow"},N={class:"detail"},M={class:"group-head"},U={class:"group-first"},D=t("img",{src:b,alt:"",class:"icon-users"},null,-1),E={class:"name"},P={class:"group-end"},B=t("img",{src:w,class:"icon-back"},null,-1),I=t("img",{src:y,class:"icon-line"},null,-1),F=t("div",{class:"line"},null,-1),K={class:"group-detail"},O={class:"group-between"},j={class:"group-input left"},T=t("div",{class:"name"},[l("รหัสกอง"),t("span",{class:"required"},"*")],-1),G={class:"group-input"},H=t("div",{class:"name"},[l("เปิด/ปิดการใช้งาน"),t("span",{class:"required"},"*")],-1),J={class:"group-between"},Q={class:"group-input"},R=t("div",{class:"name"},[l("ชื่อกอง "),t("span",{class:"required"},"*")],-1),W={class:"group-input"},X=t("div",{class:"name"},[l("ชื่อย่อกอง "),t("span",{class:"required"},"*")],-1),Y={class:"group-between"},Z={class:"group-input"},$=t("div",{class:"name"},[l("กระทรวง "),t("span",{class:"required"},"*")],-1),ee={class:"group-input"},te=t("div",{class:"name"},[l("หน่วยงาน "),t("span",{class:"required"},"*")],-1),ae={class:"group-between"},se={class:"group-input"},oe=t("div",{class:"name"},"รายละเอียด",-1),ie=t("div",{class:"line"},null,-1),de={class:"group-footer"},ne={class:"footer-left"},le=t("img",{src:x,alt:"times-circle",class:"icon-times-circle"},null,-1),re={class:"footer-right"},ce={type:"submit",class:"button-success"},_e=t("img",{src:A,alt:"times-circle",class:"icon-check-circle"},null,-1);function ue(e,a,i,r,s,o){const _=c("cpn-input"),p=c("cpn-toggleSwitch"),u=c("cpn-autoComplete"),h=c("cpn-textArea"),g=c("Form"),v=c("cpn-modal-alert"),f=c("cpn-loading");return V(),k("div",L,[t("div",C,[t("div",N,[t("div",M,[t("div",U,[D,t("div",E,m(s.edit?"แก้ไขกอง":"สร้างกอง"),1)]),t("div",P,[t("button",{type:"button",class:"button-back",onClick:a[0]||(a[0]=d=>o.back())},[B,I,l(" ย้อนกลับ ")])])]),F,n(g,{onSubmit:o.onSubmit,onInvalidSubmit:e.onInvalidSubmit},{default:z(()=>[t("div",K,[t("div",O,[t("div",j,[T,n(_,{modelValue:s.data.code,"onUpdate:modelValue":a[1]||(a[1]=d=>s.data.code=d),name:"subminist_id",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",G,[H,n(p,{modelValue:s.data.active_flag,"onUpdate:modelValue":a[2]||(a[2]=d=>s.data.active_flag=d),name:"active_flag",class:"",style:{},disabled:!1},null,8,["modelValue"])])]),t("div",J,[t("div",Q,[R,n(_,{modelValue:s.data.Name,"onUpdate:modelValue":a[3]||(a[3]=d=>s.data.Name=d),name:"Name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",W,[X,n(_,{modelValue:s.data.short_name,"onUpdate:modelValue":a[4]||(a[4]=d=>s.data.short_name=d),name:"short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",Y,[t("div",Z,[$,n(u,{modelValue:s.data.organization_id,"onUpdate:modelValue":a[5]||(a[5]=d=>s.data.organization_id=d),name:"organization_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",disabled:!0,optionSelect:s.optionSelect.organization_id,onChange:o.change},null,8,["modelValue","optionSelect","onChange"])]),t("div",ee,[te,n(u,{modelValue:s.data.department_id,"onUpdate:modelValue":a[6]||(a[6]=d=>s.data.department_id=d),name:"department_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",optionSelect:s.optionSelect.department_id,onChange:o.change,onKeyup:o.keyup_dep},null,8,["modelValue","optionSelect","onChange","onKeyup"])])]),t("div",ae,[t("div",se,[oe,n(h,{modelValue:s.data.desc,"onUpdate:modelValue":a[7]||(a[7]=d=>s.data.desc=d),name:"desc",rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),ie,t("div",de,[t("div",ne,[t("button",{type:"button",class:"button-danger",onClick:a[8]||(a[8]=d=>o.cancelClick())},[le,l(" ยกเลิก ")])]),t("div",re,[t("button",ce,[_e,l(" "+m(s.edit?"ยืนยันแก้ไขกอง":"ยืนยันสร้างกอง"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),n(v,{modalAlert:s.modalAlert},null,8,["modalAlert"]),n(f,{show:s.showLoading},null,8,["show"])])}const ge=S(q,[["render",ue]]);export{ge as default};