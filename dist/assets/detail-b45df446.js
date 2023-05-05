import{_ as y}from"./users-duotone-57e3c13d.js";import{_ as b,a as w}from"./line-up-c54e1bbb.js";import{_ as S}from"./trash-alt-duotone-12d94c28.js";import{_ as k,r as c,o as V,c as A,a as t,t as p,j as r,b as n,d as x,n as L,g as z,k as q}from"./index-0b387df6.js";const C={name:"agency-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",department_short_name:"",department_full_name:"",desc:"",organization_id:"",filename:"",filepath:"",active_flag:!0},optionSelect:{organization_id:[]}}},methods:{upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_change(a){for(var e=0;e<document.querySelector(`[name="${a}"]`).files.length;e++){let o=document.querySelector(`[name="${a}"]`).files[e];if(o.type.split("image").length>1){let d={filename:o.name,type:o.type,link:URL.createObjectURL(o),size:(o.size/1024/1024).toFixed(2)+" MB",file:o};this.data={...this.data,...d},document.querySelector(`[name="${a}"]`).value=null}}},back(){this.$router.push({name:"agency",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.department_short_name="",this.data.department_full_name="",this.data.desc=""},callApiDepartment(){this.axios.get(`/department/${localStorage.getItem("department_id")}`).then(a=>{var e,o;localStorage.setItem("filename",((e=a.data.data)==null?void 0:e.filename)||""),localStorage.setItem("filepath",((o=a.data.data)==null?void 0:o.filepath)||""),this.$emit("getLogoImage",localStorage.getItem("filename"),localStorage.getItem("filepath"))})},onSubmit(){let a=this.assetsUtils.currentDate(),e=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(e.data.file){let o=new FormData;o.append("file",e.data.file),o.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),e.axios.post("/upload/single",o,{headers:{"Content-Type":"multipart/form-data"}}).then(d=>{e.data.filepath=d.data.data.path;let s={code:e.data.code,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,organization_id:e.data.organization_id,desc:e.data.desc,filename:e.data.filename,filepath:e.data.filepath,active_flag:e.data.active_flag?1:0};e.showLoading=!0,e.axios[e.edit?"put":"post"](`/department${e.edit?"/"+e.$route.params.id:""}`,s).then(()=>{e.showLoading=!1,e.callApiDepartment(),e.modalAlert={showModal:!0,type:"success",title:e.edit?"ทำการแก้ไขหน่วยงานสำเร็จแล้ว":"ทำการสร้างหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(i=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}).catch(d=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}else{let o={code:e.data.code,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,organization_id:e.data.organization_id,desc:e.data.desc,filename:e.data.filename,filepath:e.data.filepath,active_flag:e.data.active_flag?1:0};e.showLoading=!0,e.axios[e.edit?"put":"post"](`/department${e.edit?"/"+e.$route.params.id:""}`,o).then(()=>{e.showLoading=!1,e.callApiDepartment(),e.modalAlert={showModal:!0,type:"success",title:e.edit?"ทำการแก้ไขหน่วยงานสำเร็จแล้ว":"ทำการสร้างหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(d=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}}}},api_detail(){this.showLoading=!0,this.axios.get(`/department/${this.$route.params.id}`).then(a=>{this.showLoading=!1,this.data={...this.data,...a.data.data},this.data.active_flag=a.data.data.active_flag==1}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},api_master(){this.showLoading=!0,this.axios.get("/organization").then(a=>{this.showLoading=!1,a.data.data.filter(e=>(e.value=e.id,e.name=e.name,e)),this.optionSelect.organization_id=a.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},keyup_org(a){this.axios.get("/organization",{params:{keyword:a.target.value}}).then(e=>{e.data.data&&(e.data.data.filter(o=>(o.value=o.id,o.name=o.name,o)),this.optionSelect.organization_id=e.data.data)})}},mounted(){this.api_master()}},M={class:"master-agency-detail"},I={class:"group-overflow"},U={class:"detail"},D={class:"group-head"},E={class:"group-first"},F=t("img",{src:y,alt:"",class:"icon-users"},null,-1),P={class:"name"},B={class:"group-end"},N=t("img",{src:b,class:"icon-back"},null,-1),j=t("img",{src:w,class:"icon-line"},null,-1),K=t("div",{class:"line"},null,-1),R={class:"group-detail"},T={class:"group-between"},$={class:"group-input left"},O=t("div",{class:"name"},[r("รหัสหน่วยงาน "),t("span",{class:"required"},"*")],-1),G={class:"group-input"},H=t("div",{class:"name"},"เปิด/ปิด การใช้งาน",-1),J={class:"group-between"},Q={class:"group-input left"},W=t("div",{class:"name"},[r("ชื่อย่อหน่วยงาน "),t("span",{class:"required"},"*")],-1),X={class:"group-input left"},Y=t("div",{class:"name"},[r("ชื่อหน่วยงาน "),t("span",{class:"required"},"*")],-1),Z={class:"group-input"},ee=t("div",{class:"name"},[r("กระทรวง "),t("span",{class:"required"},"*")],-1),te={class:"group-between"},ae={class:"group-input"},se=t("div",{class:"name"},"รายละเอียด",-1),oe={class:"group-input"},le=t("div",{class:"name"},[r("รูปหน่วยงาน "),t("span",{class:"required"},"*")],-1),ie={class:"d-flex mb-3"},ne={class:"group-input-file"},de=t("img",{src:S,alt:"",class:"image-trash"},null,-1),re=[de],ce=t("div",{class:"line"},null,-1),me={class:"group-footer"},pe={class:"footer-left"},_e=t("img",{src:z,alt:"times-circle",class:"icon-times-circle"},null,-1),ue={class:"footer-right"},he=["disabled"],ge=t("img",{src:q,alt:"times-circle",class:"icon-check-circle"},null,-1);function fe(a,e,o,d,s,i){const m=c("cpn-input"),_=c("cpn-toggleSwitch"),u=c("cpn-autoComplete"),h=c("cpn-textArea"),g=c("Form"),f=c("cpn-modal-alert"),v=c("cpn-loading");return V(),A("div",M,[t("div",I,[t("div",U,[t("div",D,[t("div",E,[F,t("div",P,p(s.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"),1)]),t("div",B,[t("button",{type:"button",class:"button-back",onClick:e[0]||(e[0]=l=>i.back())},[N,j,r(" ย้อนกลับ ")])])]),K,n(g,{onSubmit:i.onSubmit,onInvalidSubmit:a.onInvalidSubmit},{default:x(()=>[t("div",R,[t("div",T,[t("div",$,[O,n(m,{modelValue:s.data.code,"onUpdate:modelValue":e[1]||(e[1]=l=>s.data.code=l),name:"department_id",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",G,[H,n(_,{modelValue:s.data.active_flag,"onUpdate:modelValue":e[2]||(e[2]=l=>s.data.active_flag=l),name:"active_flag"},null,8,["modelValue"])])]),t("div",J,[t("div",Q,[W,n(m,{modelValue:s.data.department_short_name,"onUpdate:modelValue":e[3]||(e[3]=l=>s.data.department_short_name=l),name:"department_short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",X,[Y,n(m,{modelValue:s.data.department_full_name,"onUpdate:modelValue":e[4]||(e[4]=l=>s.data.department_full_name=l),name:"department_full_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",Z,[ee,n(u,{modelValue:s.data.organization_id,"onUpdate:modelValue":e[5]||(e[5]=l=>s.data.organization_id=l),name:"organization_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",optionSelect:s.optionSelect.organization_id,onKeyup:i.keyup_org},null,8,["modelValue","optionSelect","onKeyup"])])]),t("div",te,[t("div",ae,[se,n(h,{modelValue:s.data.desc,"onUpdate:modelValue":e[6]||(e[6]=l=>s.data.desc=l),name:"desc",rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",oe,[le,t("div",ie,[t("div",ne,[t("button",{type:"button",class:"button-file",onClick:e[7]||(e[7]=l=>i.upload_file("main_docs"))},[t("span",{class:L(s.data.filename?"":"no-data")},p(s.data.filename?s.data.filename:"รูปหน่วยงาน"),3)]),t("div",{class:"text pointer",onClick:e[8]||(e[8]=l=>i.upload_file("main_docs"))},"แนบไฟล์"),t("input",{type:"file",onChange:e[9]||(e[9]=l=>i.file_change("main_docs")),name:"main_docs",style:{display:"none"},accept:"image/*,"},null,32)]),t("button",{type:"button",class:"del-department",onClick:e[10]||(e[10]=l=>s.data.filename="")},re)])])]),ce,t("div",me,[t("div",pe,[t("button",{type:"button",class:"button-danger",onClick:e[11]||(e[11]=l=>i.cancelClick())},[_e,r(" ยกเลิก ")])]),t("div",ue,[t("button",{type:"submit",class:"button-success",disabled:!s.data.filename},[ge,r(" "+p(s.edit?"ยืนยันแก้ไขหน่วยงาน":"ยืนยันสร้างหน่วยงาน"),1)],8,he)])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),n(f,{modalAlert:s.modalAlert},null,8,["modalAlert"]),n(v,{show:s.showLoading},null,8,["show"])])}const Se=k(C,[["render",fe]]);export{Se as default};
