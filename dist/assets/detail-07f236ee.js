import{_ as f}from"./users-duotone-57e3c13d.js";import{_ as v,a as y}from"./line-up-c54e1bbb.js";import{_ as S,r as u,o as w,c as z,a as e,t as m,j as r,b as d,d as k,g as V,k as x}from"./index-cac1488f.js";const A={name:"group-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",short_name:"",name:"",subministry_id:"",organization_id:"",department_id:"",desc:""},optionSelect:{subministry_id:[],organization_id:[],department_id:[]}}},methods:{back(){this.$router.push({name:"group",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.desc="",this.data.short_name="",this.data.name=""},onSubmit(){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขกลุ่ม":"สร้างกลุ่ม"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(t.edit){let a={desc:t.data.desc,name:t.data.name,short_name:t.data.short_name,subministry_id:t.data.subministry_id,organization_id:t.data.organization_id,department_id:t.data.department_id};t.showLoading=!0,t.axios.put(`group/${t.$route.params.id}`,a).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขกลุ่มสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(l=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}else{let a={desc:t.data.desc,name:t.data.name,short_name:t.data.short_name,subministry_id:t.data.subministry_id,organization_id:t.data.organization_id,department_id:t.data.department_id};t.showLoading=!0,t.axios.post("/group",a).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างกลุ่มสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(l=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/group/${this.$route.params.id}`).then(t=>{this.showLoading=!1,this.optionSelect.department_id.every(s=>s.id!=t.data.data.department_id)&&this.optionSelect.department_id.push({value:t.data.data.department_id,name:t.data.data.department_name}),this.optionSelect.organization_id.every(s=>s.id!=t.data.data.organization_id)&&this.optionSelect.organization_id.push({value:t.data.data.organization_id,name:t.data.data.organization_name}),this.optionSelect.subministry_id.every(s=>s.id!=t.data.data.subministry_id)&&this.optionSelect.subministry_id.push({value:t.data.data.subministry_id,name:t.data.data.subministry_name}),this.data={...this.data,...t.data.data}}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})},api_master(){this.showLoading=!0;const t=this.axios.get("/organization"),a=this.axios.get("/department"),l=this.axios.get("/subministry");this.axios.all([t,a,l]).then(this.axios.spread((...c)=>{this.showLoading=!1;const s=c[0],n=c[1],_=c[2];s.data.data.filter(i=>(i.value=i.id,i.name=i.name,i)),n.data.data.filter(i=>(i.value=i.id,i.name=i.department_full_name,i)),_.data.data.filter(i=>(i.value=i.id,i.name=i.Name,i)),this.optionSelect.organization_id=s.data.data,this.optionSelect.department_id=n.data.data,this.optionSelect.subministry_id=_.data.data,this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(c=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}})},change(t){this.optionSelect.subministry_id.filter(a=>{a.id==t&&(this.optionSelect.organization_id.push({value:a.organization_id,name:a.organization_name}),this.data.organization_id=a.organization_id)}),this.optionSelect.subministry_id.filter(a=>{a.id==t&&(this.optionSelect.department_id.push({value:a.department_id,name:a.department_name}),this.data.department_id=a.department_id)})}},mounted(){this.api_master()}},C={class:"master-group-detail"},L={class:"group-overflow"},q={class:"detail"},M={class:"group-head"},U={class:"group-first"},D=e("img",{src:f,alt:"",class:"icon-users"},null,-1),E={class:"name"},P={class:"group-end"},N=e("img",{src:v,class:"icon-back"},null,-1),B=e("img",{src:y,class:"icon-line"},null,-1),I=e("div",{class:"line"},null,-1),F={class:"group-detail"},O={class:"group-between"},j={class:"group-input left"},T=e("div",{class:"name"},[r("ชื่อย่อกลุ่ม "),e("span",{class:"required"},"*")],-1),G={class:"group-input"},H=e("div",{class:"name"},[r("ชื่อกลุ่ม "),e("span",{class:"required"},"*")],-1),J={class:"group-between"},K={class:"group-input left"},Q=e("div",{class:"name"},[r("กระทรวง "),e("span",{class:"required"},"*")],-1),R={class:"group-input left"},W=e("div",{class:"name"},[r("หน่วยงาน "),e("span",{class:"required"},"*")],-1),X={class:"group-input"},Y=e("div",{class:"name"},[r("กอง"),e("span",{class:"required"},"*")],-1),Z={class:"group-between"},$={class:"group-input left"},tt=e("div",{class:"name"},"รายละเอียด",-1),et=e("div",{class:"line"},null,-1),at={class:"group-footer"},st={class:"footer-left"},it=e("img",{src:V,alt:"times-circle",class:"icon-times-circle"},null,-1),ot={class:"footer-right"},nt={type:"submit",class:"button-success"},dt=e("img",{src:x,alt:"times-circle",class:"icon-check-circle"},null,-1);function rt(t,a,l,c,s,n){const _=u("cpn-input"),i=u("cpn-autoComplete"),p=u("cpn-textArea"),h=u("Form"),g=u("cpn-modal-alert"),b=u("cpn-loading");return w(),z("div",C,[e("div",L,[e("div",q,[e("div",M,[e("div",U,[D,e("div",E,m(s.edit?"แก้ไขกลุ่ม":"สร้างกลุ่ม"),1)]),e("div",P,[e("button",{type:"button",class:"button-back",onClick:a[0]||(a[0]=o=>n.back())},[N,B,r(" ย้อนกลับ ")])])]),I,d(h,{onSubmit:n.onSubmit,onInvalidSubmit:t.onInvalidSubmit},{default:k(()=>[e("div",F,[e("div",O,[e("div",j,[T,d(_,{modelValue:s.data.short_name,"onUpdate:modelValue":a[1]||(a[1]=o=>s.data.short_name=o),name:"short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",G,[H,d(_,{modelValue:s.data.name,"onUpdate:modelValue":a[2]||(a[2]=o=>s.data.name=o),name:"name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",J,[e("div",K,[Q,d(i,{modelValue:s.data.organization_id,"onUpdate:modelValue":a[3]||(a[3]=o=>s.data.organization_id=o),name:"organization_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",disabled:!0,optionSelect:s.optionSelect.organization_id,onChange:n.change},null,8,["modelValue","optionSelect","onChange"])]),e("div",R,[W,d(i,{modelValue:s.data.department_id,"onUpdate:modelValue":a[4]||(a[4]=o=>s.data.department_id=o),name:"department_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",disabled:!0,optionSelect:s.optionSelect.department_id,onChange:n.change},null,8,["modelValue","optionSelect","onChange"])]),e("div",X,[Y,d(i,{modelValue:s.data.subministry_id,"onUpdate:modelValue":a[5]||(a[5]=o=>s.data.subministry_id=o),name:"subministry_id",optionSelect:s.optionSelect.subministry_id,onChange:n.change,prules:"required",placeholder:"กรุณาระบุ",type:"text"},null,8,["modelValue","optionSelect","onChange"])])]),e("div",Z,[e("div",$,[tt,d(p,{modelValue:s.data.desc,"onUpdate:modelValue":a[6]||(a[6]=o=>s.data.desc=o),name:"group_desc",class:"",style:{},rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),et,e("div",at,[e("div",st,[e("button",{type:"button",class:"button-danger",onClick:a[7]||(a[7]=o=>n.cancelClick())},[it,r(" ยกเลิก ")])]),e("div",ot,[e("button",nt,[dt,r(" "+m(s.edit?"ยืนยันแก้ไขกลุ่ม":"ยืนยันสร้างกลุ่ม"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),d(g,{modalAlert:s.modalAlert},null,8,["modalAlert"]),d(b,{show:s.showLoading},null,8,["show"])])}const _t=S(A,[["render",rt]]);export{_t as default};
