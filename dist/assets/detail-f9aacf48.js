import{_ as b}from"./users-duotone-57e3c13d.js";import{_ as v,a as y}from"./line-up-c54e1bbb.js";import{_ as w,r as u,o as S,c as V,a as e,t as p,j as r,b as d,d as x,g as z,k as A}from"./index-adb267a0.js";const k={name:"group-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",short_name:"",name:"",subministry_id:"",organization_id:"",department_id:"",desc:""},optionSelect:{subministry_id:[],organization_id:[],department_id:[]}}},methods:{back(){this.$router.push({name:"group",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.desc="",this.data.short_name="",this.data.name=""},onSubmit(){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขกลุ่ม":"สร้างกลุ่ม"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(t.edit){let s={desc:t.data.desc,name:t.data.name,short_name:t.data.short_name,subministry_id:t.data.subministry_id,organization_id:t.data.organization_id,department_id:t.data.department_id};t.showLoading=!0,t.axios.put(`group/${t.$route.params.id}`,s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขกลุ่มสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(l=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}else{let s={desc:t.data.desc,name:t.data.name,short_name:t.data.short_name,subministry_id:t.data.subministry_id,organization_id:t.data.organization_id,department_id:t.data.department_id};t.showLoading=!0,t.axios.post("/group",s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างกลุ่มสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(l=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/group/${this.$route.params.id}`).then(t=>{this.showLoading=!1,this.data={...this.data,...t.data.data}}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})},api_master(){this.showLoading=!0;const t=this.axios.get("/organization"),s=this.axios.get("/department"),l=this.axios.get("/subministry");this.axios.all([t,s,l]).then(this.axios.spread((...c)=>{this.showLoading=!1;const a=c[0],n=c[1],_=c[2];a.data.data.filter(o=>(o.value=o.id,o.name=o.name,o)),n.data.data.filter(o=>(o.value=o.id,o.name=o.department_full_name,o)),_.data.data.filter(o=>(o.value=o.id,o.name=o.Name,o)),this.optionSelect.organization_id=a.data.data,this.optionSelect.department_id=n.data.data,this.optionSelect.subministry_id=_.data.data,this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(c=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}})},change(t){this.optionSelect.subministry_id.filter(s=>{s.id==t&&(this.optionSelect.organization_id.push({value:s.organization_id,name:s.organization_name}),this.data.organization_id=s.organization_id)}),this.optionSelect.subministry_id.filter(s=>{s.id==t&&(this.optionSelect.department_id.push({value:s.department_id,name:s.department_name}),this.data.department_id=s.department_id)})}},mounted(){this.api_master()}},C={class:"master-group-detail"},L={class:"group-overflow"},q={class:"detail"},M={class:"group-head"},U={class:"group-first"},E=e("img",{src:b,alt:"",class:"icon-users"},null,-1),P={class:"name"},N={class:"group-end"},B=e("img",{src:v,class:"icon-back"},null,-1),D=e("img",{src:y,class:"icon-line"},null,-1),I=e("div",{class:"line"},null,-1),F={class:"group-detail"},j={class:"group-between"},T={class:"group-input left"},G=e("div",{class:"name"},[r("ชื่อย่อกลุ่ม "),e("span",{class:"required"},"*")],-1),H={class:"group-input"},J=e("div",{class:"name"},[r("ชื่อกลุ่ม "),e("span",{class:"required"},"*")],-1),K={class:"group-between"},O={class:"group-input left"},Q=e("div",{class:"name"},[r("กระทรวง "),e("span",{class:"required"},"*")],-1),R={class:"group-input left"},W=e("div",{class:"name"},[r("หน่วยงาน "),e("span",{class:"required"},"*")],-1),X={class:"group-input"},Y=e("div",{class:"name"},[r("กอง"),e("span",{class:"required"},"*")],-1),Z={class:"group-between"},$={class:"group-input left"},ee=e("div",{class:"name"},"รายละเอียด",-1),te=e("div",{class:"line"},null,-1),se={class:"group-footer"},ae={class:"footer-left"},oe=e("img",{src:z,alt:"times-circle",class:"icon-times-circle"},null,-1),ie={class:"footer-right"},ne={type:"submit",class:"button-success"},de=e("img",{src:A,alt:"times-circle",class:"icon-check-circle"},null,-1);function re(t,s,l,c,a,n){const _=u("cpn-input"),o=u("cpn-autoComplete"),m=u("cpn-textArea"),h=u("Form"),g=u("cpn-modal-alert"),f=u("cpn-loading");return S(),V("div",C,[e("div",L,[e("div",q,[e("div",M,[e("div",U,[E,e("div",P,p(a.edit?"แก้ไขกลุ่ม":"สร้างกลุ่ม"),1)]),e("div",N,[e("button",{type:"button",class:"button-back",onClick:s[0]||(s[0]=i=>n.back())},[B,D,r(" ย้อนกลับ ")])])]),I,d(h,{onSubmit:n.onSubmit,onInvalidSubmit:t.onInvalidSubmit},{default:x(()=>[e("div",F,[e("div",j,[e("div",T,[G,d(_,{modelValue:a.data.short_name,"onUpdate:modelValue":s[1]||(s[1]=i=>a.data.short_name=i),name:"short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",H,[J,d(_,{modelValue:a.data.name,"onUpdate:modelValue":s[2]||(s[2]=i=>a.data.name=i),name:"name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",K,[e("div",O,[Q,d(o,{modelValue:a.data.organization_id,"onUpdate:modelValue":s[3]||(s[3]=i=>a.data.organization_id=i),name:"organization_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",disabled:!0,optionSelect:a.optionSelect.organization_id,onChange:n.change},null,8,["modelValue","optionSelect","onChange"])]),e("div",R,[W,d(o,{modelValue:a.data.department_id,"onUpdate:modelValue":s[4]||(s[4]=i=>a.data.department_id=i),name:"department_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",disabled:!0,optionSelect:a.optionSelect.department_id,onChange:n.change},null,8,["modelValue","optionSelect","onChange"])]),e("div",X,[Y,d(o,{modelValue:a.data.subministry_id,"onUpdate:modelValue":s[5]||(s[5]=i=>a.data.subministry_id=i),name:"subministry_id",optionSelect:a.optionSelect.subministry_id,onChange:n.change,prules:"required",placeholder:"กรุณาระบุ",type:"text"},null,8,["modelValue","optionSelect","onChange"])])]),e("div",Z,[e("div",$,[ee,d(m,{modelValue:a.data.desc,"onUpdate:modelValue":s[6]||(s[6]=i=>a.data.desc=i),name:"group_desc",class:"",style:{},rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),te,e("div",se,[e("div",ae,[e("button",{type:"button",class:"button-danger",onClick:s[7]||(s[7]=i=>n.cancelClick())},[oe,r(" ยกเลิก ")])]),e("div",ie,[e("button",ne,[de,r(" "+p(a.edit?"ยืนยันแก้ไขกลุ่ม":"ยืนยันสร้างกลุ่ม"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),d(g,{modalAlert:a.modalAlert},null,8,["modalAlert"]),d(f,{show:a.showLoading},null,8,["show"])])}const _e=w(k,[["render",re]]);export{_e as default};
