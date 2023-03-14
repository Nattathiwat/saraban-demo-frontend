import{_ as b,a as w,b as y}from"./line-up-32057639.js";import{_ as S,r,o as V,c as x,a as e,t as m,j as d,b as n,d as A,g as k,k as q}from"./index-13939c8c.js";const L={name:"subministry-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",short_name:"",Name:"",desc:"",active_flag:!1,organization_id:"",department_id:""},optionSelect:{organization_id:[],department_id:[]}}},methods:{back(){this.$router.push({name:"subministry",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.short_name="",this.data.Name=""},onSubmit(){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขกอง":"สร้างกอง"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(t.edit){let s={code:t.data.code,Name:t.data.Name,short_name:t.data.short_name,desc:t.data.desc,department_id:t.data.department_id,active_flag:t.data.active_flag?1:0};t.showLoading=!0,t.axios.put(`/subministry/${t.$route.params.id}`,s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขกองสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(l=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}else{let s={code:t.data.code,Name:t.data.Name,short_name:t.data.short_name,desc:t.data.desc,department_id:t.data.department_id,active_flag:t.data.active_flag?1:0};t.showLoading=!0,t.axios.post("/subministry",s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างกองสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(l=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/subministry/${this.$route.params.id}`).then(t=>{this.showLoading=!1,this.data={...this.data,...t.data.data},this.data.active_flag=t.data.data.active_flag==1}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})},api_master(){this.showLoading=!0;const t=this.axios.get("/organization"),s=this.axios.get("/department");this.axios.all([t,s]).then(this.axios.spread((...l)=>{this.showLoading=!1;const c=l[0],a=l[1];c.data.data.filter(o=>(o.value=o.id,o.name=o.name,o)),a.data.data.filter(o=>(o.value=o.id,o.name=o.department_full_name,o)),this.optionSelect.organization_id=c.data.data,console.log("a"),this.optionSelect.department_id=a.data.data,console.log("b"),this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})},change(t){this.optionSelect.department_id.filter(s=>{s.id==t&&(this.optionSelect.organization_id.push({value:s.organization_id,name:s.organization_name}),this.data.organization_id=s.organization_id)})}},mounted(){this.api_master()}},z={class:"master-submin-detail"},C={class:"group-overflow"},N={class:"detail"},M={class:"group-head"},U={class:"group-first"},E=e("img",{src:b,alt:"",class:"icon-users"},null,-1),P={class:"name"},B={class:"group-end"},D=e("img",{src:w,class:"icon-back"},null,-1),I=e("img",{src:y,class:"icon-line"},null,-1),F=e("div",{class:"line"},null,-1),j={class:"group-detail"},T={class:"group-between"},G={class:"group-input left"},H=e("div",{class:"name"},[d("รหัสกอง"),e("span",{class:"required"},"*")],-1),J={class:"group-input"},K=e("div",{class:"name"},[d("เปิด/ปิดการใช้งาน"),e("span",{class:"required"},"*")],-1),O={class:"group-between"},Q={class:"group-input"},R=e("div",{class:"name"},[d("ชื่อกอง "),e("span",{class:"required"},"*")],-1),W={class:"group-input"},X=e("div",{class:"name"},[d("ชื่อย่อกอง "),e("span",{class:"required"},"*")],-1),Y={class:"group-between"},Z={class:"group-input"},$=e("div",{class:"name"},[d("กระทรวง "),e("span",{class:"required"},"*")],-1),ee={class:"group-input"},te=e("div",{class:"name"},[d("หน่วยงาน "),e("span",{class:"required"},"*")],-1),se={class:"group-between"},ae={class:"group-input"},oe=e("div",{class:"name"},"รายละเอียด",-1),ie=e("div",{class:"line"},null,-1),ne={class:"group-footer"},le={class:"footer-left"},de=e("img",{src:k,alt:"times-circle",class:"icon-times-circle"},null,-1),re={class:"footer-right"},ce={type:"submit",class:"button-success"},ue=e("img",{src:q,alt:"times-circle",class:"icon-check-circle"},null,-1);function _e(t,s,l,c,a,o){const u=r("cpn-input"),p=r("cpn-toggleSwitch"),_=r("cpn-autoComplete"),h=r("cpn-textArea"),g=r("Form"),v=r("cpn-modal-alert"),f=r("cpn-loading");return V(),x("div",z,[e("div",C,[e("div",N,[e("div",M,[e("div",U,[E,e("div",P,m(a.edit?"แก้ไขกอง":"สร้างกอง"),1)]),e("div",B,[e("button",{type:"button",class:"button-back",onClick:s[0]||(s[0]=i=>o.back())},[D,I,d(" ย้อนกลับ ")])])]),F,n(g,{onSubmit:o.onSubmit,onInvalidSubmit:t.onInvalidSubmit},{default:A(()=>[e("div",j,[e("div",T,[e("div",G,[H,n(u,{modelValue:a.data.code,"onUpdate:modelValue":s[1]||(s[1]=i=>a.data.code=i),name:"subminist_id",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",J,[K,n(p,{modelValue:a.data.active_flag,"onUpdate:modelValue":s[2]||(s[2]=i=>a.data.active_flag=i),name:"active_flag",class:"",style:{},disabled:!1},null,8,["modelValue"])])]),e("div",O,[e("div",Q,[R,n(u,{modelValue:a.data.Name,"onUpdate:modelValue":s[3]||(s[3]=i=>a.data.Name=i),name:"Name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",W,[X,n(u,{modelValue:a.data.short_name,"onUpdate:modelValue":s[4]||(s[4]=i=>a.data.short_name=i),name:"short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",Y,[e("div",Z,[$,n(_,{modelValue:a.data.organization_id,"onUpdate:modelValue":s[5]||(s[5]=i=>a.data.organization_id=i),name:"organization_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",disabled:!0,optionSelect:a.optionSelect.organization_id,onChange:o.change},null,8,["modelValue","optionSelect","onChange"])]),e("div",ee,[te,n(_,{modelValue:a.data.department_id,"onUpdate:modelValue":s[6]||(s[6]=i=>a.data.department_id=i),name:"department_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",optionSelect:a.optionSelect.department_id,onChange:o.change},null,8,["modelValue","optionSelect","onChange"])])]),e("div",se,[e("div",ae,[oe,n(h,{modelValue:a.data.desc,"onUpdate:modelValue":s[7]||(s[7]=i=>a.data.desc=i),name:"desc",rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),ie,e("div",ne,[e("div",le,[e("button",{type:"button",class:"button-danger",onClick:s[8]||(s[8]=i=>o.cancelClick())},[de,d(" ยกเลิก ")])]),e("div",re,[e("button",ce,[ue,d(" "+m(a.edit?"ยืนยันแก้ไขกอง":"ยืนยันสร้างกอง"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),n(v,{modalAlert:a.modalAlert},null,8,["modalAlert"]),n(f,{show:a.showLoading},null,8,["show"])])}const he=S(L,[["render",_e]]);export{he as default};
