import{_ as h,a as g}from"./line-up-c54e1bbb.js";import{_ as v,r as d,o as f,c as b,a as e,t as V,j as n,b as i,d as w,k as S}from"./index-35104cf2.js";const k={name:"book-method-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{template_code:"",group_receive_id:"",receive_name:"",title_name:"",receive_person_name:"",address_to:"",title_signature:"",signature:""},optionSelect:{group_receive_id:[{value:1,name:"พระราชวงศ์"},{value:2,name:"พระภิกษุ"},{value:3,name:"บุคคลธรรมดา"},{value:4,name:"อื่นๆ"}]}}},methods:{back(){this.$router.push({name:"automail-receiver-profile",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.template_code="",this.data.group_receive_id="",this.data.receive_name="",this.data.title_name="",this.data.receive_person_name="",this.data.address_to="",this.data.title_signature="",this.data.signature=""},onSubmit(){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขรูปแบบการรับ-ส่งหนังสือ":"สร้างรูปแบบการรับ-ส่งหนังสือ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){let a={template_code:t.data.template_code,group_receive_id:t.data.group_receive_id,receive_name:t.data.receive_name,title_name:t.data.title_name,receive_person_name:t.data.receive_person_name,address_to:t.data.address_to,title_signature:t.data.title_signature,signature:t.data.signature,user_id:parseInt(localStorage.getItem("user_id"))};t.showLoading=!0,t.axios[t.edit?"put":"post"](`/master-data/message-template${t.edit?"/"+t.$route.params.id:""}`,a).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:t.edit?"ทำการแก้ไขรูปแบบข้อความตามผู้รับจดหมายงานสำเร็จแล้ว":"ทำการเพิ่มรูปแบบข้อความตามผู้รับจดหมายงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(r=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}})}}},apiDetail(){this.showLoading=!0,this.axios.get(`/master-data/message-template/${this.$route.params.id}`).then(t=>{this.showLoading=!1,this.data.template_code=t.data.data.template_code,this.data.group_receive_id=t.data.data.group_receive_id,this.data.receive_name=t.data.data.receive_name,this.data.title_name=t.data.data.title_name,this.data.receive_person_name=t.data.data.receive_person_name,this.data.address_to=t.data.data.address_to,this.data.title_signature=t.data.data.title_signature,this.data.signature=t.data.data.signature}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}},mounted(){this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1}},y={class:"master-book-method-detail"},x={class:"group-overflow"},A={class:"detail"},q={class:"group-head"},L={class:"group-first"},U=e("i",{class:"bi bi-inbox-fill icon-inbox"},null,-1),I={class:"name"},M={class:"group-end"},C=e("img",{src:h,class:"icon-back"},null,-1),D=e("img",{src:g,class:"icon-line"},null,-1),N=e("div",{class:"line"},null,-1),P={class:"group-detail"},B={class:"group-between"},E={class:"group-input w-25"},F=e("div",{class:"name"},[n("รหัส "),e("span",{class:"required"},"*")],-1),j={class:"group-input w-25"},T=e("div",{class:"name"},[n("กลุ่มผู้รับหนังสือ "),e("span",{class:"required"},"*")],-1),z={class:"group-input w-50"},G=e("div",{class:"name"},[n("ผู้รับหนังสือ "),e("span",{class:"required"},"*")],-1),H={class:"group-between"},J={class:"group-input w-25"},K=e("div",{class:"name"},"คำขึ้นต้น",-1),O={class:"group-input w-75"},Q=e("div",{class:"name"},"ชื่อผู้รับหนังสือ",-1),R={class:"group-input"},W=e("div",{class:"name"},"คำลงท้าย",-1),X={class:"group-input"},Y=e("div",{class:"name"},"คำนำหน้าชื่อผู้เซ็น",-1),Z={class:"group-input"},$=e("div",{class:"name"},"คำที่ใช้ในการจ่าหน้าซอง",-1),ee=e("div",{class:"line"},null,-1),te=e("div",{class:"group-footer"},[e("div",{class:"footer-left"}),e("div",{class:"footer-right"},[e("button",{type:"submit",class:"button-success"},[e("img",{src:S,alt:"times-circle",class:"icon-check-circle"}),n(" บันทึก ")])])],-1);function ae(t,a,r,se,s,_){const l=d("cpn-input"),c=d("cpn-select"),u=d("Form"),m=d("cpn-modal-alert"),p=d("cpn-loading");return f(),b("div",y,[e("div",x,[e("div",A,[e("div",q,[e("div",L,[U,e("div",I,V(s.edit?"แก้ไข":"เพิ่ม")+"รูปแบบข้อความตามผู้รับจดหมาย",1)]),e("div",M,[e("button",{type:"button",class:"button-back",onClick:a[0]||(a[0]=o=>_.back())},[C,D,n(" ย้อนกลับ ")])])]),N,i(u,{onSubmit:_.onSubmit,onInvalidSubmit:t.onInvalidSubmit},{default:w(()=>[e("div",P,[e("div",B,[e("div",E,[F,i(l,{modelValue:s.data.template_code,"onUpdate:modelValue":a[1]||(a[1]=o=>s.data.template_code=o),name:"template_code",rules:"required|min:3",isNumber:!0,maxlength:"3",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",j,[T,i(c,{modelValue:s.data.group_receive_id,"onUpdate:modelValue":a[2]||(a[2]=o=>s.data.group_receive_id=o),name:"group_receive_id",rules:"required",optionSelect:s.optionSelect.group_receive_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",z,[G,i(l,{modelValue:s.data.receive_name,"onUpdate:modelValue":a[3]||(a[3]=o=>s.data.receive_name=o),name:"receive_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",H,[e("div",J,[K,i(l,{modelValue:s.data.title_name,"onUpdate:modelValue":a[4]||(a[4]=o=>s.data.title_name=o),name:"title_name",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",O,[Q,i(l,{modelValue:s.data.receive_person_name,"onUpdate:modelValue":a[5]||(a[5]=o=>s.data.receive_person_name=o),name:"receive_person_name",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",R,[W,i(l,{modelValue:s.data.signature,"onUpdate:modelValue":a[6]||(a[6]=o=>s.data.signature=o),name:"signature",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",X,[Y,i(l,{modelValue:s.data.title_signature,"onUpdate:modelValue":a[7]||(a[7]=o=>s.data.title_signature=o),name:"title_signature",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",Z,[$,i(l,{modelValue:s.data.address_to,"onUpdate:modelValue":a[8]||(a[8]=o=>s.data.address_to=o),name:"address_to",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),ee,te]),_:1},8,["onSubmit","onInvalidSubmit"])])]),i(m,{modalAlert:s.modalAlert},null,8,["modalAlert"]),i(p,{show:s.showLoading},null,8,["show"])])}const le=v(k,[["render",ae]]);export{le as default};
