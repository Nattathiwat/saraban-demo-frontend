import{_ as f,a as b,b as w}from"./line-up-32057639.js";import{_ as V,r as n,o as y,c as S,a as e,t as m,j as i,b as l,d as k,g as A,k as q}from"./index-d55e1864.js";const C={name:"subministry-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",short_name:"",Name:"",desc:"",active_flag:!1}}},methods:{back(){this.$router.push({name:"subministry",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.short_name="",this.data.Name=""},onSubmit(){let s=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขกอง":"สร้างกอง"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(s.edit){let t={code:s.data.code,Name:s.data.Name,short_name:s.data.short_name,desc:s.data.desc,active_flag:parseInt(s.data.active_flag?"1":"0")};s.showLoading=!0,s.axios.put(`/subministry/${s.$route.params.id}`,t).then(()=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขกองสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.back()}}}).catch(d=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}else{let t={code:s.data.code,Name:s.data.Name,short_name:s.data.short_name,desc:s.data.desc,active_flag:parseInt(s.data.active_flag?"1":"0")};s.showLoading=!0,s.axios.post("/subministry",t).then(()=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างกองสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.back()}}}).catch(d=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/subministry/${this.$route.params.id}`).then(s=>{this.showLoading=!1,this.data=s.data.data,this.data.active_flag=s.data.data.active_flag==1}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}},mounted(){this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1}},N={class:"master-submin-detail"},L={class:"group-overflow"},M={class:"detail"},U={class:"group-head"},I={class:"group-first"},P=e("img",{src:f,alt:"",class:"icon-users"},null,-1),E={class:"name"},x={class:"group-end"},B=e("img",{src:b,class:"icon-back"},null,-1),D=e("img",{src:w,class:"icon-line"},null,-1),F=e("div",{class:"line"},null,-1),j={class:"group-detail"},T={class:"group-between"},z={class:"group-input left"},G=e("div",{class:"name"},[i("รหัสกอง"),e("span",{class:"required"},"*")],-1),H={class:"group-input"},J=e("div",{class:"name"},[i("เปิด/ปิดการใช้งาน"),e("span",{class:"required"},"*")],-1),K={class:"group-between"},O={class:"group-input"},Q=e("div",{class:"name"},[i("ชื่อกอง "),e("span",{class:"required"},"*")],-1),R={class:"group-input"},W=e("div",{class:"name"},[i("ชื่อย่อกอง "),e("span",{class:"required"},"*")],-1),X={class:"group-between"},Y={class:"group-input"},Z=e("div",{class:"name"},[i("กระทรวง "),e("span",{class:"required"},"*")],-1),$={class:"group-input"},ee=e("div",{class:"name"},[i("หน่วยงาน "),e("span",{class:"required"},"*")],-1),se={class:"group-between"},te={class:"group-input"},oe=e("div",{class:"name"},"รายละเอียด",-1),ae=e("div",{class:"line"},null,-1),le={class:"group-footer"},ie={class:"footer-left"},ne=e("img",{src:A,alt:"times-circle",class:"icon-times-circle"},null,-1),de={class:"footer-right"},re={type:"submit",class:"button-success"},ce=e("img",{src:q,alt:"times-circle",class:"icon-check-circle"},null,-1);function ue(s,t,d,me,a,r){const c=n("cpn-input"),p=n("cpn-toggleSwitch"),u=n("cpn-autoComplete"),_=n("cpn-textArea"),h=n("Form"),g=n("cpn-modal-alert"),v=n("cpn-loading");return y(),S("div",N,[e("div",L,[e("div",M,[e("div",U,[e("div",I,[P,e("div",E,m(a.edit?"แก้ไขกอง":"สร้างกอง"),1)]),e("div",x,[e("button",{type:"button",class:"button-back",onClick:t[0]||(t[0]=o=>r.back())},[B,D,i(" ย้อนกลับ ")])])]),F,l(h,{onSubmit:r.onSubmit,onInvalidSubmit:s.onInvalidSubmit},{default:k(()=>[e("div",j,[e("div",T,[e("div",z,[G,l(c,{modelValue:a.data.code,"onUpdate:modelValue":t[1]||(t[1]=o=>a.data.code=o),name:"department_id",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",H,[J,l(p,{modelValue:a.data.active_flag,"onUpdate:modelValue":t[2]||(t[2]=o=>a.data.active_flag=o),name:"active_flag",class:"",style:{},disabled:!1,onChange:s.change},null,8,["modelValue","onChange"])])]),e("div",K,[e("div",O,[Q,l(c,{modelValue:a.data.Name,"onUpdate:modelValue":t[3]||(t[3]=o=>a.data.Name=o),name:"Name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",R,[W,l(c,{modelValue:a.data.short_name,"onUpdate:modelValue":t[4]||(t[4]=o=>a.data.short_name=o),name:"short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",X,[e("div",Y,[Z,l(u,{modelValue:s.input,"onUpdate:modelValue":t[5]||(t[5]=o=>s.input=o),name:"input",rules:"required",placeholder:"กรุณาระบุ",type:"text",disabled:!0,optionSelect:s.optionSelect,onChange:s.change},null,8,["modelValue","optionSelect","onChange"])]),e("div",$,[ee,l(u,{modelValue:s.input,"onUpdate:modelValue":t[6]||(t[6]=o=>s.input=o),name:"input",rules:"required",placeholder:"กรุณาระบุ",type:"text",optionSelect:s.optionSelect,onChange:s.change},null,8,["modelValue","optionSelect","onChange"])])]),e("div",se,[e("div",te,[oe,l(_,{modelValue:a.data.desc,"onUpdate:modelValue":t[7]||(t[7]=o=>a.data.desc=o),name:"desc",rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),ae,e("div",le,[e("div",ie,[e("button",{type:"button",class:"button-danger",onClick:t[8]||(t[8]=o=>r.cancelClick())},[ne,i(" ยกเลิก ")])]),e("div",de,[e("button",re,[ce,i(" "+m(a.edit?"ยืนยันแก้ไขกอง":"ยืนยันสร้างกอง"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),l(g,{modalAlert:a.modalAlert},null,8,["modalAlert"]),l(v,{show:a.showLoading},null,8,["show"])])}const he=V(C,[["render",ue]]);export{he as default};
