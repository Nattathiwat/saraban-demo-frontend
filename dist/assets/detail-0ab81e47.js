import{_ as b,a as f,b as v}from"./line-up-32057639.js";import{_ as w,r as n,o as y,c as A,a as e,t as u,j as l,b as i,d as S,g as k,k as V}from"./index-426ec220.js";const L={name:"group-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",group_short_name:"",group_name:"",submin_id:""},optionSelect:{submin_id:[]}}},methods:{back(){this.$router.push({name:"group"}).catch(()=>{})},cancelClick(){this.back(),this.data.description="",this.data.group_short_name="",this.data.group_name=""},onSubmit(){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขกลุ่ม":"สร้างกลุ่ม"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(t.edit){let s={desc:t.data.description,name:t.data.group_name,short_name:t.data.group_short_name,subministry_id:t.data.submin_id};t.showLoading=!0,t.axios.put(`group/${t.$route.params.id}`,s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขกลุ่มสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(d=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}else{let s={desc:t.data.description,name:t.data.group_name,short_name:t.data.group_short_name,subministry_id:t.data.submin_id};t.showLoading=!0,t.axios.post("/group",s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างกลุ่มสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(d=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/group/${this.$route.params.id}`).then(t=>{this.showLoading=!1,this.data.desc=t.data.data.description,this.data.group_short_name=t.data.data.group_short_name,this.data.name=t.data.data.group_name,this.data.subministry_id=t.data.data.submin_id}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})},api_master(){this.showLoading=!0,this.axios.get("/subministry").then(t=>{this.showLoading=!1,t.data.data.filter(s=>(s.value=s.id,s.name=s.Name,s)),this.optionSelect.submin_id=t.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}},mounted(){this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1,this.api_master()}},x={class:"master-group-detail"},C={class:"group-overflow"},M={class:"detail"},q={class:"group-head"},E={class:"group-first"},N=e("img",{src:b,alt:"",class:"icon-users"},null,-1),U={class:"name"},B={class:"group-end"},D=e("img",{src:f,class:"icon-back"},null,-1),I=e("img",{src:v,class:"icon-line"},null,-1),P=e("div",{class:"line"},null,-1),F={class:"group-detail"},j={class:"group-between"},T={class:"group-input left"},z=e("div",{class:"name"},[l("ชื่อย่อกลุ่ม "),e("span",{class:"required"},"*")],-1),G={class:"group-input"},H=e("div",{class:"name"},[l("ชื่อกลุ่ม "),e("span",{class:"required"},"*")],-1),J={class:"group-between"},K={class:"group-input left"},O=e("div",{class:"name"},"รายละเอียด",-1),Q={class:"group-input"},R=e("div",{class:"name"},[l("กอง"),e("span",{class:"required"},"*")],-1),W=e("div",{class:"line"},null,-1),X={class:"group-footer"},Y={class:"footer-left"},Z=e("img",{src:k,alt:"times-circle",class:"icon-times-circle"},null,-1),$={class:"footer-right"},tt={type:"submit",class:"button-success"},et=e("img",{src:V,alt:"times-circle",class:"icon-check-circle"},null,-1);function st(t,s,d,ot,o,r){const c=n("cpn-input"),_=n("cpn-textArea"),m=n("cpn-autoComplete"),p=n("Form"),h=n("cpn-modal-alert"),g=n("cpn-loading");return y(),A("div",x,[e("div",C,[e("div",M,[e("div",q,[e("div",E,[N,e("div",U,u(o.edit?"แก้ไขกลุ่ม":"สร้างกลุ่ม"),1)]),e("div",B,[e("button",{type:"button",class:"button-back",onClick:s[0]||(s[0]=a=>r.back())},[D,I,l(" ย้อนกลับ ")])])]),P,i(p,{onSubmit:r.onSubmit,onInvalidSubmit:t.onInvalidSubmit},{default:S(()=>[e("div",F,[e("div",j,[e("div",T,[z,i(c,{modelValue:o.data.group_short_name,"onUpdate:modelValue":s[1]||(s[1]=a=>o.data.group_short_name=a),name:"group_short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",G,[H,i(c,{modelValue:o.data.group_name,"onUpdate:modelValue":s[2]||(s[2]=a=>o.data.group_name=a),name:"group_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",J,[e("div",K,[O,i(_,{modelValue:o.data.description,"onUpdate:modelValue":s[3]||(s[3]=a=>o.data.description=a),name:"group_description",class:"",style:{},rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",Q,[R,i(m,{modelValue:o.data.submin_id,"onUpdate:modelValue":s[4]||(s[4]=a=>o.data.submin_id=a),name:"submin_id",type:"text",optionSelect:o.optionSelect.submin_id,onChange:t.change,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect","onChange"])])])]),W,e("div",X,[e("div",Y,[e("button",{type:"button",class:"button-danger",onClick:s[5]||(s[5]=a=>r.cancelClick())},[Z,l(" ยกเลิก ")])]),e("div",$,[e("button",tt,[et,l(" "+u(o.edit?"ยืนยันแก้ไขกลุ่ม":"ยืนยันสร้างกลุ่ม"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),i(h,{modalAlert:o.modalAlert},null,8,["modalAlert"]),i(g,{show:o.showLoading},null,8,["show"])])}const nt=w(L,[["render",st]]);export{nt as default};
