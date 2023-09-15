import{_ as f}from"./users-duotone-57e3c13d.js";import{_ as b,a as y}from"./line-up-c54e1bbb.js";import{_ as w,r as i,o as k,c as V,a as e,t as u,j as n,b as l,d as S,g as A,k as L}from"./index-3601dd93.js";const x={name:"book-type-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",name:"",desc:"",active_flag:!0,optionSelect:{type:[{name:"หนังสือรับเข้า",value:"0"},{name:"หนังสือส่งออก (ภายนอก)",value:"1"},{name:"หนังสือรับเข้าและส่งออก (ภายนอก)",value:"2"}]}}}},methods:{back(){this.$router.push({name:"book-type",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.name="",this.data.desc=""},onSubmit(){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขชนิดหนังสือ":"สร้างชนิดหนังสือ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(t.edit){let s={code:t.data.code,name:t.data.name,desc:t.data.desc,type:t.data.type,active_flag:parseInt(t.data.active_flag?"1":"0")};t.showLoading=!0,t.axios.put(`/booktype/${t.$route.params.id}`,s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขชนิดหนังสือสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(d=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}else{let s={code:t.data.code,name:t.data.name,desc:t.data.desc,type:t.data.type,active_flag:parseInt(t.data.active_flag?"1":"0")};t.showLoading=!0,t.axios.post("/booktype",s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างชนิดหนังสือสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(d=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/booktype/${this.$route.params.id}`).then(t=>{this.showLoading=!1,this.data={...this.data,...t.data.data},this.data.active_flag=t.data.data.active_flag==1}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}},mounted(){this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1}},q={class:"master-book-type-detail"},M={class:"group-overflow"},C={class:"detail"},I={class:"group-head"},P={class:"group-first"},U=e("img",{src:f,alt:"",class:"icon-users"},null,-1),E={class:"name"},B={class:"group-end"},D=e("img",{src:b,class:"icon-back"},null,-1),N=e("img",{src:y,class:"icon-line"},null,-1),F=e("div",{class:"line"},null,-1),j={class:"group-detail"},T={class:"group-between"},z={class:"group-input left"},G=e("div",{class:"name"},[n("เลขชนิดหนังสือ"),e("span",{class:"required"},"*")],-1),H={class:"group-input"},J=e("div",{class:"name"},"เปิด/ปิด การใช้งาน",-1),K={class:"group-between"},O={class:"group-input left"},Q=e("div",{class:"name"},[n("ชื่อชนิดหนังสือ"),e("span",{class:"required"},"*")],-1),R={class:"group-input"},W=e("div",{class:"name"},[n("ทะเบียน "),e("span",{class:"required"},"*")],-1),X={class:"group-between"},Y={class:"group-input"},Z=e("div",{class:"name"},"รายละเอียด",-1),$=e("div",{class:"line"},null,-1),ee={class:"group-footer"},te={class:"footer-left"},se=e("img",{src:A,alt:"times-circle",class:"icon-times-circle"},null,-1),oe={class:"footer-right"},ae={type:"submit",class:"button-success"},le=e("img",{src:L,alt:"times-circle",class:"icon-check-circle"},null,-1);function ie(t,s,d,ne,o,c){const r=i("cpn-input"),p=i("cpn-toggleSwitch"),_=i("cpn-select"),m=i("cpn-textArea"),h=i("Form"),g=i("cpn-modal-alert"),v=i("cpn-loading");return k(),V("div",q,[e("div",M,[e("div",C,[e("div",I,[e("div",P,[U,e("div",E,u(o.edit?"แก้ไขชนิดหนังสือ":"สร้างชนิดหนังสือ"),1)]),e("div",B,[e("button",{type:"button",class:"button-back",onClick:s[0]||(s[0]=a=>c.back())},[D,N,n(" ย้อนกลับ ")])])]),F,l(h,{onSubmit:c.onSubmit,onInvalidSubmit:t.onInvalidSubmit},{default:S(()=>[e("div",j,[e("div",T,[e("div",z,[G,l(r,{modelValue:o.data.code,"onUpdate:modelValue":s[1]||(s[1]=a=>o.data.code=a),name:"department_id",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",H,[J,l(p,{modelValue:o.data.active_flag,"onUpdate:modelValue":s[2]||(s[2]=a=>o.data.active_flag=a),name:"active_flag"},null,8,["modelValue"])])]),e("div",K,[e("div",O,[Q,l(r,{modelValue:o.data.name,"onUpdate:modelValue":s[3]||(s[3]=a=>o.data.name=a),name:"name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",R,[W,l(_,{modelValue:o.data.type,"onUpdate:modelValue":s[4]||(s[4]=a=>o.data.type=a),name:"type",optionSelect:o.data.optionSelect.type,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),e("div",X,[e("div",Y,[Z,l(m,{modelValue:o.data.desc,"onUpdate:modelValue":s[5]||(s[5]=a=>o.data.desc=a),name:"book-type_desc",class:"",style:{},rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),$,e("div",ee,[e("div",te,[e("button",{type:"button",class:"button-danger",onClick:s[6]||(s[6]=a=>c.cancelClick())},[se,n(" ยกเลิก ")])]),e("div",oe,[e("button",ae,[le,n(" "+u(o.edit?"ยืนยันแก้ไขชนิดหนังสือ":"ยืนยันสร้างชนิดหนังสือ"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),l(g,{modalAlert:o.modalAlert},null,8,["modalAlert"]),l(v,{show:o.showLoading},null,8,["show"])])}const ue=w(x,[["render",ie]]);export{ue as default};
