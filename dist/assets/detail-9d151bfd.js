import{_ as f,a as b,b as y}from"./line-up-32057639.js";import{_ as w,r as i,o as k,c as V,a as e,t as u,j as d,b as l,d as S,g as A,k as L}from"./index-ed8ffa42.js";const q={name:"book-record-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",name:"",desc:"",active_flag:!0,optionSelect:{type:[{name:"ทะเบียนรับ",value:"0"},{name:"ทะเบียนส่ง(ภายใน)",value:"1"},{name:"ทะเบียนส่ง(ภายนอก)",value:"2"},{name:"บันทึกข้อความ",value:"3"}]}}}},methods:{back(){this.$router.push({name:"book-record",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.name="",this.data.desc=""},onSubmit(){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขทะเบียนหนังสือ":"สร้างทะเบียนหนังสือ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(t.edit){let s={code:t.data.code,name:t.data.name,active_flag:parseInt(t.data.active_flag?"1":"0"),type:t.data.type,desc:t.data.desc};t.showLoading=!0,t.axios.put(`/bookcategory/${t.$route.params.id}`,s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขทะเบียนหนังสือสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(n=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}else{let s={code:t.data.code,name:t.data.name,type:t.data.type,desc:t.data.desc,active_flag:parseInt(t.data.active_flag?"1":"0")};t.showLoading=!0,t.axios.post("/bookcategory",s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างทะเบียนหนังสือสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(n=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}}}},api_detail(){this.showLoading=!0,this.axios.get(`/bookcategory/${this.$route.params.id}`).then(t=>{this.showLoading=!1,this.data={...this.data,...t.data.data},this.data.active_flag=t.data.data.active_flag==1}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}},mounted(){this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1}},x={class:"master-book-record-detail"},C={class:"group-overflow"},M={class:"detail"},I={class:"group-head"},P={class:"group-first"},U=e("img",{src:f,alt:"",class:"icon-users"},null,-1),E={class:"name"},B={class:"group-end"},N=e("img",{src:b,class:"icon-back"},null,-1),F=e("img",{src:y,class:"icon-line"},null,-1),j=e("div",{class:"line"},null,-1),D={class:"group-detail"},T={class:"group-between"},z={class:"group-input left"},G=e("div",{class:"name"},[d("เลขทะเบียนหนังสือ "),e("span",{class:"required"},"*")],-1),H={class:"group-input"},J=e("div",{class:"name"},[d("เปิด/ปิดการใช้งาน"),e("span",{class:"required"},"*")],-1),K={class:"group-between"},O={class:"group-input left"},Q=e("div",{class:"name"},[d("ชื่อทะเบียนหนังสือ "),e("span",{class:"required"},"*")],-1),R={class:"group-input"},W=e("div",{class:"name"},[d("ทะเบียน "),e("span",{class:"required"},"*")],-1),X={class:"group-between"},Y={class:"group-input"},Z=e("div",{class:"name"},"รายละเอียด",-1),$=e("div",{class:"line"},null,-1),ee={class:"group-footer"},te={class:"footer-left"},se=e("img",{src:A,alt:"times-circle",class:"icon-times-circle"},null,-1),oe={class:"footer-right"},ae={type:"submit",class:"button-success"},le=e("img",{src:L,alt:"times-circle",class:"icon-check-circle"},null,-1);function ie(t,s,n,de,o,c){const r=i("cpn-input"),_=i("cpn-toggleSwitch"),m=i("cpn-select"),p=i("cpn-textArea"),h=i("Form"),g=i("cpn-modal-alert"),v=i("cpn-loading");return k(),V("div",x,[e("div",C,[e("div",M,[e("div",I,[e("div",P,[U,e("div",E,u(o.edit?"แก้ไขทะเบียนหนังสือ":"สร้างทะเบียนหนังสือ"),1)]),e("div",B,[e("button",{type:"button",class:"button-back",onClick:s[0]||(s[0]=a=>c.back())},[N,F,d(" ย้อนกลับ ")])])]),j,l(h,{onSubmit:c.onSubmit,onInvalidSubmit:t.onInvalidSubmit},{default:S(()=>[e("div",D,[e("div",T,[e("div",z,[G,l(r,{modelValue:o.data.code,"onUpdate:modelValue":s[1]||(s[1]=a=>o.data.code=a),name:"department_id",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",H,[J,l(_,{modelValue:o.data.active_flag,"onUpdate:modelValue":s[2]||(s[2]=a=>o.data.active_flag=a),name:"active_flag",class:"",style:{},disabled:!1},null,8,["modelValue"])])]),e("div",K,[e("div",O,[Q,l(r,{modelValue:o.data.name,"onUpdate:modelValue":s[3]||(s[3]=a=>o.data.name=a),name:"book_record_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",R,[W,l(m,{modelValue:o.data.type,"onUpdate:modelValue":s[4]||(s[4]=a=>o.data.type=a),name:"book_record_type_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",optionSelect:o.data.optionSelect.type,onChange:t.change},null,8,["modelValue","optionSelect","onChange"])])]),e("div",X,[e("div",Y,[Z,l(p,{modelValue:o.data.desc,"onUpdate:modelValue":s[5]||(s[5]=a=>o.data.desc=a),name:"desc",rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),$,e("div",ee,[e("div",te,[e("button",{type:"button",class:"button-danger",onClick:s[6]||(s[6]=a=>c.cancelClick())},[se,d(" ยกเลิก ")])]),e("div",oe,[e("button",ae,[le,d(" "+u(o.edit?"ยืนยันแก้ไขทะเบียนหนังสือ":"ยืนยันสร้างทะเบียนหนังสือ"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),l(g,{modalAlert:o.modalAlert},null,8,["modalAlert"]),l(v,{show:o.showLoading},null,8,["show"])])}const re=w(q,[["render",ie]]);export{re as default};
