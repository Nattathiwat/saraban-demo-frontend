import{_ as b}from"./users-duotone-57e3c13d.js";import{_ as w,a as y}from"./line-up-c54e1bbb.js";import{_ as S,r,o as V,c as k,a as e,t as m,j as l,b as d,d as x,g as A,k as q}from"./index-fa6f315b.js";const L={name:"subministry-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",short_name:"",Name:"",desc:"",active_flag:!0,organization_id:"",department_id:""},optionSelect:{organization_id:[],department_id:[]}}},methods:{back(){this.$router.push({name:"subministry",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.short_name="",this.data.Name=""},onSubmit(){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขกอง":"สร้างกอง"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(t.edit){let a={code:t.data.code,Name:t.data.Name,short_name:t.data.short_name,desc:t.data.desc,department_id:t.data.department_id,active_flag:t.data.active_flag?1:0};t.showLoading=!0,t.axios.put(`/subministry/${t.$route.params.id}`,a).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขกองสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(i=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}else{let a={code:t.data.code,Name:t.data.Name,short_name:t.data.short_name,desc:t.data.desc,department_id:t.data.department_id,active_flag:t.data.active_flag?1:0};t.showLoading=!0,t.axios.post("/subministry",a).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างกองสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(i=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/subministry/${this.$route.params.id}`).then(t=>{this.showLoading=!1,this.data={...this.data,...t.data.data},this.data.active_flag=t.data.data.active_flag==1}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})},api_master(){this.showLoading=!0;const t=this.axios.get("/master-data/organization"),a=this.axios.get("/department");this.axios.all([t,a]).then(this.axios.spread((...i)=>{this.showLoading=!1;const c=i[0],s=i[1];c.data.data.filter(o=>(o.value=o.id,o.name=o.name,o)),s.data.data.filter(o=>(o.value=o.id,o.name=o.department_full_name,o)),this.optionSelect.organization_id=c.data.data,this.optionSelect.department_id=s.data.data,this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})},change(t){this.optionSelect.department_id.filter(a=>{a.id==t&&(this.optionSelect.organization_id.push({value:a.organization_id,name:a.organization_name}),this.data.organization_id=a.organization_id)})},keyup_dep(t){this.axios.get("/department",{params:{keyword:t.target.value}}).then(a=>{a.data.data&&(a.data.data.filter(i=>(i.value=i.id,i.name=i.department_full_name,i)),this.optionSelect.department_id=a.data.data)})}},mounted(){this.api_master()}},z={class:"master-submin-detail"},C={class:"group-overflow"},N={class:"detail"},M={class:"group-head"},U={class:"group-first"},E=e("img",{src:b,alt:"",class:"icon-users"},null,-1),P={class:"name"},B={class:"group-end"},D=e("img",{src:w,class:"icon-back"},null,-1),I=e("img",{src:y,class:"icon-line"},null,-1),F=e("div",{class:"line"},null,-1),K={class:"group-detail"},j={class:"group-between"},T={class:"group-input left"},G=e("div",{class:"name"},[l("รหัสกอง"),e("span",{class:"required"},"*")],-1),H={class:"group-input"},J=e("div",{class:"name"},[l("เปิด/ปิดการใช้งาน"),e("span",{class:"required"},"*")],-1),O={class:"group-between"},Q={class:"group-input"},R=e("div",{class:"name"},[l("ชื่อกอง "),e("span",{class:"required"},"*")],-1),W={class:"group-input"},X=e("div",{class:"name"},[l("ชื่อย่อกอง "),e("span",{class:"required"},"*")],-1),Y={class:"group-between"},Z={class:"group-input"},$=e("div",{class:"name"},[l("กระทรวง "),e("span",{class:"required"},"*")],-1),ee={class:"group-input"},te=e("div",{class:"name"},[l("หน่วยงาน "),e("span",{class:"required"},"*")],-1),ae={class:"group-between"},se={class:"group-input"},oe=e("div",{class:"name"},"รายละเอียด",-1),ie=e("div",{class:"line"},null,-1),ne={class:"group-footer"},de={class:"footer-left"},le=e("img",{src:A,alt:"times-circle",class:"icon-times-circle"},null,-1),re={class:"footer-right"},ce={type:"submit",class:"button-success"},ue=e("img",{src:q,alt:"times-circle",class:"icon-check-circle"},null,-1);function _e(t,a,i,c,s,o){const u=r("cpn-input"),p=r("cpn-toggleSwitch"),_=r("cpn-autoComplete"),h=r("cpn-textArea"),g=r("Form"),v=r("cpn-modal-alert"),f=r("cpn-loading");return V(),k("div",z,[e("div",C,[e("div",N,[e("div",M,[e("div",U,[E,e("div",P,m(s.edit?"แก้ไขกอง":"สร้างกอง"),1)]),e("div",B,[e("button",{type:"button",class:"button-back",onClick:a[0]||(a[0]=n=>o.back())},[D,I,l(" ย้อนกลับ ")])])]),F,d(g,{onSubmit:o.onSubmit,onInvalidSubmit:t.onInvalidSubmit},{default:x(()=>[e("div",K,[e("div",j,[e("div",T,[G,d(u,{modelValue:s.data.code,"onUpdate:modelValue":a[1]||(a[1]=n=>s.data.code=n),name:"subminist_id",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",H,[J,d(p,{modelValue:s.data.active_flag,"onUpdate:modelValue":a[2]||(a[2]=n=>s.data.active_flag=n),name:"active_flag",class:"",style:{},disabled:!1},null,8,["modelValue"])])]),e("div",O,[e("div",Q,[R,d(u,{modelValue:s.data.Name,"onUpdate:modelValue":a[3]||(a[3]=n=>s.data.Name=n),name:"Name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",W,[X,d(u,{modelValue:s.data.short_name,"onUpdate:modelValue":a[4]||(a[4]=n=>s.data.short_name=n),name:"short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",Y,[e("div",Z,[$,d(_,{modelValue:s.data.organization_id,"onUpdate:modelValue":a[5]||(a[5]=n=>s.data.organization_id=n),name:"organization_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",disabled:!0,optionSelect:s.optionSelect.organization_id,onChange:o.change},null,8,["modelValue","optionSelect","onChange"])]),e("div",ee,[te,d(_,{modelValue:s.data.department_id,"onUpdate:modelValue":a[6]||(a[6]=n=>s.data.department_id=n),name:"department_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",optionSelect:s.optionSelect.department_id,onChange:o.change,onKeyup:o.keyup_dep},null,8,["modelValue","optionSelect","onChange","onKeyup"])])]),e("div",ae,[e("div",se,[oe,d(h,{modelValue:s.data.desc,"onUpdate:modelValue":a[7]||(a[7]=n=>s.data.desc=n),name:"desc",rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),ie,e("div",ne,[e("div",de,[e("button",{type:"button",class:"button-danger",onClick:a[8]||(a[8]=n=>o.cancelClick())},[le,l(" ยกเลิก ")])]),e("div",re,[e("button",ce,[ue,l(" "+m(s.edit?"ยืนยันแก้ไขกอง":"ยืนยันสร้างกอง"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),d(v,{modalAlert:s.modalAlert},null,8,["modalAlert"]),d(f,{show:s.showLoading},null,8,["show"])])}const ge=S(L,[["render",_e]]);export{ge as default};
