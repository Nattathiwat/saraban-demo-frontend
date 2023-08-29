import{_ as b}from"./users-duotone-57e3c13d.js";import{_ as y,a as w}from"./line-up-c54e1bbb.js";import{_ as S}from"./trash-alt-duotone-12d94c28.js";import{_ as k,r as c,o as V,c as z,a as t,t as u,j as r,b as l,d as A,n as x,g as L,k as q}from"./index-4f7a4f24.js";const C={name:"agency-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",roman_number:"",department_short_name:"",department_full_name:"",desc:"",organization_id:"",filename:"",filepath:"",active_flag:!0},optionSelect:{organization_id:[]}}},methods:{upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_change(a){for(var e=0;e<document.querySelector(`[name="${a}"]`).files.length;e++){let s=document.querySelector(`[name="${a}"]`).files[e];if(s.type.split("image").length>1){let d={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data={...this.data,...d},document.querySelector(`[name="${a}"]`).value=null}}},back(){this.$router.push({name:"agency",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.roman_number="",this.data.department_short_name="",this.data.department_full_name="",this.data.desc="",this.data.organization_id="",this.data.filename="",this.data.filepath="",this.data.active_flag=!0},callApiDepartment(){this.axios.get(`/department/${localStorage.getItem("department_id")}`).then(a=>{var e,s;localStorage.setItem("filename",((e=a.data.data)==null?void 0:e.filename)||""),localStorage.setItem("filepath",((s=a.data.data)==null?void 0:s.filepath)||""),this.$emit("getLogoImage",localStorage.getItem("filename"),localStorage.getItem("filepath"))})},onSubmit(){let a=this.assetsUtils.currentDate(),e=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(e.data.file){let s=new FormData;s.append("file",e.data.file),s.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),e.axios.post("/upload/single",s,{headers:{"Content-Type":"multipart/form-data"}}).then(d=>{e.data.filepath=d.data.data.path;let o={code:e.data.code,roman_number:e.data.roman_number,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,organization_id:e.data.organization_id,desc:e.data.desc,filename:e.data.filename,filepath:e.data.filepath,active_flag:e.data.active_flag?1:0};e.showLoading=!0,e.axios[e.edit?"put":"post"](`/department${e.edit?"/"+e.$route.params.id:""}`,o).then(()=>{e.showLoading=!1,e.callApiDepartment(),e.modalAlert={showModal:!0,type:"success",title:e.edit?"ทำการแก้ไขหน่วยงานสำเร็จแล้ว":"ทำการสร้างหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(n=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}).catch(d=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}else{let s={code:e.data.code,roman_number:e.data.roman_number,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,organization_id:e.data.organization_id,desc:e.data.desc,filename:e.data.filename,filepath:e.data.filepath,active_flag:e.data.active_flag?1:0};e.showLoading=!0,e.axios[e.edit?"put":"post"](`/department${e.edit?"/"+e.$route.params.id:""}`,s).then(()=>{e.showLoading=!1,e.callApiDepartment(),e.modalAlert={showModal:!0,type:"success",title:e.edit?"ทำการแก้ไขหน่วยงานสำเร็จแล้ว":"ทำการสร้างหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(d=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}}}},api_detail(){this.showLoading=!0,this.axios.get(`/department/${this.$route.params.id}`).then(a=>{this.showLoading=!1,this.optionSelect.organization_id.every(s=>s.id!=a.data.data.organization_id)&&this.optionSelect.organization_id.push({value:a.data.data.organization_id,name:a.data.data.organization_name}),this.data={...this.data,...a.data.data},this.data.active_flag=a.data.data.active_flag==1}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},api_master(){this.showLoading=!0,this.axios.get("/organization").then(a=>{this.showLoading=!1,a.data.data.filter(e=>(e.value=e.id,e.name=e.name,e)),this.optionSelect.organization_id=a.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},keyup_org(a){this.axios.get("/organization",{params:{keyword:a.target.value}}).then(e=>{e.data.data&&(e.data.data.filter(s=>(s.value=s.id,s.name=s.name,s)),this.optionSelect.organization_id=e.data.data)})}},mounted(){this.api_master()}},M={class:"master-agency-detail"},U={class:"group-overflow"},I={class:"detail"},D={class:"group-head"},E={class:"group-first"},F=t("img",{src:b,alt:"",class:"icon-users"},null,-1),P={class:"name"},B={class:"group-end"},N=t("img",{src:y,class:"icon-back"},null,-1),O=t("img",{src:w,class:"icon-line"},null,-1),j=t("div",{class:"line"},null,-1),K={class:"group-detail"},R={class:"group-between"},T={class:"group-input left"},G=t("div",{class:"name"},[r("รหัสหน่วยงาน "),t("span",{class:"required"},"*")],-1),H={class:"group-input left"},J=t("div",{class:"name"},"เลขโรมัน",-1),Q={class:"group-input"},W=t("div",{class:"name"},"เปิด/ปิด การใช้งาน",-1),X={class:"group-between"},Y={class:"group-input left"},Z=t("div",{class:"name"},[r("ชื่อย่อหน่วยงาน "),t("span",{class:"required"},"*")],-1),$={class:"group-input left"},ee=t("div",{class:"name"},[r("ชื่อหน่วยงาน "),t("span",{class:"required"},"*")],-1),te={class:"group-input"},ae=t("div",{class:"name"},[r("กระทรวง "),t("span",{class:"required"},"*")],-1),oe={class:"group-between"},se={class:"group-input"},ie=t("div",{class:"name"},"รายละเอียด",-1),le={class:"group-input"},ne=t("div",{class:"name"},[r("รูปหน่วยงาน "),t("span",{class:"required"},"*")],-1),de={class:"d-flex mb-3"},re={class:"group-input-file"},ce=t("img",{src:S,alt:"",class:"image-trash"},null,-1),me=[ce],ue=t("div",{class:"line"},null,-1),_e={class:"group-footer"},pe={class:"footer-left"},he=t("img",{src:L,alt:"times-circle",class:"icon-times-circle"},null,-1),ge={class:"footer-right"},fe=["disabled"],ve=t("img",{src:q,alt:"times-circle",class:"icon-check-circle"},null,-1);function be(a,e,s,d,o,n){const m=c("cpn-input"),_=c("cpn-toggleSwitch"),p=c("cpn-autoComplete"),h=c("cpn-textArea"),g=c("Form"),f=c("cpn-modal-alert"),v=c("cpn-loading");return V(),z("div",M,[t("div",U,[t("div",I,[t("div",D,[t("div",E,[F,t("div",P,u(o.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"),1)]),t("div",B,[t("button",{type:"button",class:"button-back",onClick:e[0]||(e[0]=i=>n.back())},[N,O,r(" ย้อนกลับ ")])])]),j,l(g,{onSubmit:n.onSubmit,onInvalidSubmit:a.onInvalidSubmit},{default:A(()=>[t("div",K,[t("div",R,[t("div",T,[G,l(m,{modelValue:o.data.code,"onUpdate:modelValue":e[1]||(e[1]=i=>o.data.code=i),name:"code",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",H,[J,l(m,{modelValue:o.data.roman_number,"onUpdate:modelValue":e[2]||(e[2]=i=>o.data.roman_number=i),name:"roman_number",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",Q,[W,l(_,{modelValue:o.data.active_flag,"onUpdate:modelValue":e[3]||(e[3]=i=>o.data.active_flag=i),name:"active_flag"},null,8,["modelValue"])])]),t("div",X,[t("div",Y,[Z,l(m,{modelValue:o.data.department_short_name,"onUpdate:modelValue":e[4]||(e[4]=i=>o.data.department_short_name=i),name:"department_short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",$,[ee,l(m,{modelValue:o.data.department_full_name,"onUpdate:modelValue":e[5]||(e[5]=i=>o.data.department_full_name=i),name:"department_full_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",te,[ae,l(p,{modelValue:o.data.organization_id,"onUpdate:modelValue":e[6]||(e[6]=i=>o.data.organization_id=i),name:"organization_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",optionSelect:o.optionSelect.organization_id,onKeyup:n.keyup_org},null,8,["modelValue","optionSelect","onKeyup"])])]),t("div",oe,[t("div",se,[ie,l(h,{modelValue:o.data.desc,"onUpdate:modelValue":e[7]||(e[7]=i=>o.data.desc=i),name:"desc",rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",le,[ne,t("div",de,[t("div",re,[t("button",{type:"button",class:"button-file",onClick:e[8]||(e[8]=i=>n.upload_file("main_docs"))},[t("span",{class:x(o.data.filename?"":"no-data")},u(o.data.filename?o.data.filename:"รูปหน่วยงาน"),3)]),t("div",{class:"text pointer",onClick:e[9]||(e[9]=i=>n.upload_file("main_docs"))},"แนบไฟล์"),t("input",{type:"file",onChange:e[10]||(e[10]=i=>n.file_change("main_docs")),name:"main_docs",style:{display:"none"},accept:"image/*,"},null,32)]),t("button",{type:"button",class:"del-department",onClick:e[11]||(e[11]=i=>o.data.filename="")},me)])])]),ue,t("div",_e,[t("div",pe,[t("button",{type:"button",class:"button-danger",onClick:e[12]||(e[12]=i=>n.cancelClick())},[he,r(" ยกเลิก ")])]),t("div",ge,[t("button",{type:"submit",class:"button-success",disabled:!o.data.filename},[ve,r(" "+u(o.edit?"ยืนยันแก้ไขหน่วยงาน":"ยืนยันสร้างหน่วยงาน"),1)],8,fe)])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),l(f,{modalAlert:o.modalAlert},null,8,["modalAlert"]),l(v,{show:o.showLoading},null,8,["show"])])}const Ve=k(C,[["render",be]]);export{Ve as default};
