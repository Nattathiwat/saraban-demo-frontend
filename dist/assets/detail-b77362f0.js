import{_ as f,a as g,b as v}from"./line-up-32057639.js";import{_ as b}from"./trash-alt-duotone-12d94c28.js";import{_ as w,r as m,o as y,c as k,a as t,t as p,j as i,b as r,d as A,n as L,g as S,k as x}from"./index-1247a4dc.js";const M={name:"department-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",department_short_name:"",department_full_name:"",filename:"",filepath:""}}},methods:{upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_change(a){for(var e=0;e<document.querySelector(`[name="${a}"]`).files.length;e++){let o=document.querySelector(`[name="${a}"]`).files[e];if(o.type.split("image").length>1){let n={filename:o.name,type:o.type,link:URL.createObjectURL(o),size:(o.size/1024/1024).toFixed(2)+" MB",file:o};this.data={...this.data,...n},document.querySelector(`[name="${a}"]`).value=null}}},back(){this.$router.push({name:"department"}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.department_short_name="",this.data.department_full_name=""},onSubmit(){let a=this.assetsUtils.currentDate(),e=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(e.data.file){let o=new FormData;o.append("file",e.data.file),o.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),e.axios.post("/upload/single",o,{headers:{"Content-Type":"multipart/form-data"}}).then(n=>{if(e.data.filepath=n.data.data.path,e.edit){let s={code:e.data.code,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,filename:e.data.filename,filepath:e.data.filepath};e.showLoading=!0,e.axios.put(`/department/${e.$route.params.id}`,s).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(d=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}else{let s={code:e.data.code,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,filename:e.data.filename,filepath:e.data.filepath};e.showLoading=!0,e.axios.post("/department",s).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(d=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}}).catch(n=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}else if(e.edit){let o={code:e.data.code,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,filename:e.data.filename,filepath:e.data.filepath};e.showLoading=!0,e.axios.put(`/department/${e.$route.params.id}`,o).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(n=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}else{let o={code:e.data.code,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,filename:e.data.filename,filepath:e.data.filepath};e.showLoading=!0,e.axios.post("/department",o).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(n=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/department/${this.$route.params.id}`).then(a=>{this.showLoading=!1,this.data.code=a.data.data.code,this.data.department_short_name=a.data.data.department_short_name,this.data.department_full_name=a.data.data.department_full_name,this.data.filename=a.data.data.filename,this.data.filepath=a.data.data.filepath}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})}},mounted(){this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1}},C={class:"department-detail"},V={class:"group-overflow"},q={class:"detail"},D={class:"group-head"},E={class:"group-first"},F=t("img",{src:f,alt:"",class:"icon-users"},null,-1),U={class:"name"},P={class:"group-end"},B=t("img",{src:g,class:"icon-back"},null,-1),z=t("img",{src:v,class:"icon-line"},null,-1),I=t("div",{class:"line"},null,-1),N={class:"group-detail"},$={class:"group-between"},j={class:"group-input left"},R=t("div",{class:"name"},[i("รหัสหน่วยงาน "),t("span",{class:"required"},"*")],-1),T={class:"group-input"},O=t("div",{class:"name"},[i("ชื่อย่อหน่วยงาน "),t("span",{class:"required"},"*")],-1),G={class:"group-between"},H={class:"group-input"},J=t("div",{class:"name"},[i("ชื่อหน่วยงาน "),t("span",{class:"required"},"*")],-1),K={class:"group-input"},Q=t("div",{class:"name"},[i("รูปหน่วยงาน "),t("span",{class:"required"},"*")],-1),W={class:"d-flex mb-3"},X={class:"group-input-file"},Y=t("img",{src:b,alt:"",class:"image-trash"},null,-1),Z=[Y],ee=t("div",{class:"line"},null,-1),te={class:"group-footer"},ae={class:"footer-left"},se=t("img",{src:S,alt:"times-circle",class:"icon-times-circle"},null,-1),oe={class:"footer-right"},le=["disabled"],ne=t("img",{src:x,alt:"times-circle",class:"icon-check-circle"},null,-1);function de(a,e,o,n,s,d){const c=m("cpn-input"),u=m("Form"),_=m("cpn-modal-alert"),h=m("cpn-loading");return y(),k("div",C,[t("div",V,[t("div",q,[t("div",D,[t("div",E,[F,t("div",U,p(s.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"),1)]),t("div",P,[t("button",{type:"button",class:"button-back",onClick:e[0]||(e[0]=l=>d.back())},[B,z,i(" ย้อนกลับ ")])])]),I,r(u,{onSubmit:d.onSubmit,onInvalidSubmit:a.onInvalidSubmit},{default:A(()=>[t("div",N,[t("div",$,[t("div",j,[R,r(c,{modelValue:s.data.code,"onUpdate:modelValue":e[1]||(e[1]=l=>s.data.code=l),name:"department_id",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",T,[O,r(c,{modelValue:s.data.department_short_name,"onUpdate:modelValue":e[2]||(e[2]=l=>s.data.department_short_name=l),name:"department_short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",G,[t("div",H,[J,r(c,{modelValue:s.data.department_full_name,"onUpdate:modelValue":e[3]||(e[3]=l=>s.data.department_full_name=l),name:"department_full_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",K,[Q,t("div",W,[t("div",X,[t("button",{type:"button",class:"button-file",onClick:e[4]||(e[4]=l=>d.upload_file("main_docs"))},[t("span",{class:L(s.data.filename?"":"no-data")},p(s.data.filename?s.data.filename:"รูปหน่วยงาน"),3)]),t("div",{class:"text pointer",onClick:e[5]||(e[5]=l=>d.upload_file("main_docs"))},"แนบไฟล์"),t("input",{type:"file",onChange:e[6]||(e[6]=l=>d.file_change("main_docs")),name:"main_docs",style:{display:"none"},accept:"image/*,"},null,32)]),t("button",{type:"button",class:"del-department",onClick:e[7]||(e[7]=l=>s.data.filename="")},Z)])])]),ee,t("div",te,[t("div",ae,[t("button",{type:"button",class:"button-danger",onClick:e[8]||(e[8]=l=>d.cancelClick())},[se,i(" ยกเลิก ")])]),t("div",oe,[t("button",{type:"submit",class:"button-success",disabled:!s.data.filename},[ne,i(" "+p(s.edit?"ยืนยันแก้ไขหน่วยงาน":"ยืนยันสร้างหน่วยงาน"),1)],8,le)])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),r(_,{modalAlert:s.modalAlert},null,8,["modalAlert"]),r(h,{show:s.showLoading},null,8,["show"])])}const ce=w(M,[["render",de]]);export{ce as default};
