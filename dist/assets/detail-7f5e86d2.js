import{_ as b,a as v,b as f}from"./line-up-32057639.js";import{_ as w,r as n,o as y,c as V,a as e,t as u,j as i,b as l,d as k,g as A,k as S}from"./index-76c1ad1e.js";const N={name:"subministry-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",short_name:"",Name:"",desc:""}}},methods:{back(){this.$router.push({name:"subministry"}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.short_name="",this.data.Name=""},onSubmit(){let s=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขกอง":"สร้างกอง"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(s.edit){let t={code:s.data.code,Name:s.data.Name,short_name:s.data.short_name,desc:s.data.desc};s.showLoading=!0,s.axios.put(`/subministry/${s.$route.params.id}`,t).then(()=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขกองสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.back()}}}).catch(d=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}else{let t={code:s.data.code,Name:s.data.Name,short_name:s.data.short_name,desc:s.data.desc};s.showLoading=!0,s.axios.post("/subministry",t).then(()=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างกองสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.back()}}}).catch(d=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/subministry/${this.$route.params.id}`).then(s=>{this.showLoading=!1,this.data=s.data.data}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}},mounted(){this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1}},L={class:"master-submin-detail"},C={class:"group-overflow"},q={class:"detail"},x={class:"group-head"},M={class:"group-first"},U=e("img",{src:b,alt:"",class:"icon-users"},null,-1),E={class:"name"},B={class:"group-end"},D=e("img",{src:v,class:"icon-back"},null,-1),I=e("img",{src:f,class:"icon-line"},null,-1),P=e("div",{class:"line"},null,-1),F={class:"group-detail"},j={class:"group-between"},T={class:"group-input left"},z=e("div",{class:"name"},[i("รหัสกอง"),e("span",{class:"required"},"*")],-1),G={class:"group-input"},H=e("div",{class:"name"},[i("เปิด/ปิดการใช้งาน"),e("span",{class:"required"},"*")],-1),J={class:"group-between"},K={class:"group-input"},O=e("div",{class:"name"},[i("ชื่อกอง "),e("span",{class:"required"},"*")],-1),Q={class:"group-input"},R=e("div",{class:"name"},[i("ชื่อย่อกอง "),e("span",{class:"required"},"*")],-1),W={class:"group-between"},X={class:"group-input"},Y=e("div",{class:"name"},"รายละเอียด",-1),Z=e("div",{class:"line"},null,-1),$={class:"group-footer"},ee={class:"footer-left"},se=e("img",{src:A,alt:"times-circle",class:"icon-times-circle"},null,-1),te={class:"footer-right"},oe={type:"submit",class:"button-success"},ae=e("img",{src:S,alt:"times-circle",class:"icon-check-circle"},null,-1);function le(s,t,d,ie,o,r){const c=n("cpn-input"),m=n("cpn-toggleSwitch"),_=n("cpn-textArea"),h=n("Form"),p=n("cpn-modal-alert"),g=n("cpn-loading");return y(),V("div",L,[e("div",C,[e("div",q,[e("div",x,[e("div",M,[U,e("div",E,u(o.edit?"แก้ไขกอง":"สร้างกอง"),1)]),e("div",B,[e("button",{type:"button",class:"button-back",onClick:t[0]||(t[0]=a=>r.back())},[D,I,i(" ย้อนกลับ ")])])]),P,l(h,{onSubmit:r.onSubmit,onInvalidSubmit:s.onInvalidSubmit},{default:k(()=>[e("div",F,[e("div",j,[e("div",T,[z,l(c,{modelValue:o.data.code,"onUpdate:modelValue":t[1]||(t[1]=a=>o.data.code=a),name:"department_id",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",G,[H,l(m,{modelValue:s.input11,"onUpdate:modelValue":t[2]||(t[2]=a=>s.input11=a),name:"input11",class:"",style:{},disabled:!1,onChange:s.change},null,8,["modelValue","onChange"])])]),e("div",J,[e("div",K,[O,l(c,{modelValue:o.data.Name,"onUpdate:modelValue":t[3]||(t[3]=a=>o.data.Name=a),name:"Name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",Q,[R,l(c,{modelValue:o.data.short_name,"onUpdate:modelValue":t[4]||(t[4]=a=>o.data.short_name=a),name:"short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",W,[e("div",X,[Y,l(_,{modelValue:o.data.desc,"onUpdate:modelValue":t[5]||(t[5]=a=>o.data.desc=a),name:"desc",rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),Z,e("div",$,[e("div",ee,[e("button",{type:"button",class:"button-danger",onClick:t[6]||(t[6]=a=>r.cancelClick())},[se,i(" ยกเลิก ")])]),e("div",te,[e("button",oe,[ae,i(" "+u(o.edit?"ยืนยันแก้ไขกอง":"ยืนยันสร้างกอง"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),l(p,{modalAlert:o.modalAlert},null,8,["modalAlert"]),l(g,{show:o.showLoading},null,8,["show"])])}const re=w(N,[["render",le]]);export{re as default};