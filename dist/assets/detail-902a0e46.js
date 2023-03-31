import{_ as v,a as y,b}from"./line-up-32057639.js";import{_ as w}from"./trash-alt-duotone-12d94c28.js";import{_ as S,r as c,o as k,c as z,a as t,t as p,j as r,b as d,d as A,n as x,g as L,k as V}from"./index-37aa382f.js";const q={name:"agency-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",department_short_name:"",department_full_name:"",desc:"",organization_id:"",filename:"",filepath:""},optionSelect:{organization_id:[]}}},methods:{upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_change(a){for(var e=0;e<document.querySelector(`[name="${a}"]`).files.length;e++){let s=document.querySelector(`[name="${a}"]`).files[e];if(s.type.split("image").length>1){let l={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data={...this.data,...l},document.querySelector(`[name="${a}"]`).value=null}}},back(){this.$router.push({name:"agency",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.department_short_name="",this.data.department_full_name="",this.data.desc=""},callApiDepartment(){this.axios.get(`/department/${localStorage.getItem("department_id")}`).then(a=>{var e,s;localStorage.setItem("filename",((e=a.data.data)==null?void 0:e.filename)||""),localStorage.setItem("filepath",((s=a.data.data)==null?void 0:s.filepath)||""),this.$emit("getLogoImage",localStorage.getItem("filename"),localStorage.getItem("filepath"))})},onSubmit(){let a=this.assetsUtils.currentDate(),e=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(e.data.file){let s=new FormData;s.append("file",e.data.file),s.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),e.axios.post("/upload/single",s,{headers:{"Content-Type":"multipart/form-data"}}).then(l=>{e.data.filepath=l.data.data.path;let o={code:e.data.code,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,organization_id:e.data.organization_id,desc:e.data.desc,filename:e.data.filename,filepath:e.data.filepath};e.showLoading=!0,e.axios[e.edit?"put":"post"](`/department${e.edit?"/"+e.$route.params.id:""}`,o).then(()=>{e.showLoading=!1,e.callApiDepartment(),e.modalAlert={showModal:!0,type:"success",title:e.edit?"ทำการแก้ไขหน่วยงานสำเร็จแล้ว":"ทำการสร้างหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(n=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}).catch(l=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}else{let s={code:e.data.code,department_full_name:e.data.department_full_name,department_short_name:e.data.department_short_name,organization_id:e.data.organization_id,desc:e.data.desc,filename:e.data.filename,filepath:e.data.filepath};e.showLoading=!0,e.axios[e.edit?"put":"post"](`/department${e.edit?"/"+e.$route.params.id:""}`,s).then(()=>{e.showLoading=!1,e.callApiDepartment(),e.modalAlert={showModal:!0,type:"success",title:e.edit?"ทำการแก้ไขหน่วยงานสำเร็จแล้ว":"ทำการสร้างหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(l=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}}}},api_detail(){this.showLoading=!0,this.axios.get(`/department/${this.$route.params.id}`).then(a=>{this.showLoading=!1,this.data={...this.data,...a.data.data}}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},api_master(){this.showLoading=!0,this.axios.get("/organization").then(a=>{this.showLoading=!1,a.data.data.filter(e=>(e.value=e.id,e.name=e.name,e)),this.optionSelect.organization_id=a.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},keyup_org(a){this.axios.get("/organization",{params:{keyword:a.target.value}}).then(e=>{e.data.data&&(e.data.data.filter(s=>(s.value=s.id,s.name=s.name,s)),this.optionSelect.organization_id=e.data.data)})},keyupOrg(a,e){e.optionSelect.organization_id=[],this.axios.get("/organization",{params:{keyword:a.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(l=>(l.value=l.id,l.name=l.name,l)),e.optionSelect.organization_id=s.data.data)})}},mounted(){this.api_master()}},C={class:"master-agency-detail"},M={class:"group-overflow"},I={class:"detail"},D={class:"group-head"},U={class:"group-first"},E=t("img",{src:v,alt:"",class:"icon-users"},null,-1),F={class:"name"},P={class:"group-end"},B=t("img",{src:y,class:"icon-back"},null,-1),N=t("img",{src:b,class:"icon-line"},null,-1),j=t("div",{class:"line"},null,-1),K={class:"group-detail"},O={class:"group-between"},R={class:"group-input left"},T=t("div",{class:"name"},[r("รหัสหน่วยงาน "),t("span",{class:"required"},"*")],-1),$={class:"group-input"},G=t("div",{class:"name"},[r("ชื่อย่อหน่วยงาน "),t("span",{class:"required"},"*")],-1),H={class:"group-between"},J={class:"group-input left"},Q=t("div",{class:"name"},[r("ชื่อหน่วยงาน "),t("span",{class:"required"},"*")],-1),W={class:"group-input"},X=t("div",{class:"name"},[r("กระทรวง "),t("span",{class:"required"},"*")],-1),Y={class:"group-between"},Z={class:"group-input"},ee=t("div",{class:"name"},"รายละเอียด",-1),te={class:"group-input"},ae=t("div",{class:"name"},[r("รูปหน่วยงาน "),t("span",{class:"required"},"*")],-1),se={class:"d-flex mb-3"},oe={class:"group-input-file"},ie=t("img",{src:w,alt:"",class:"image-trash"},null,-1),le=[ie],ne=t("div",{class:"line"},null,-1),de={class:"group-footer"},re={class:"footer-left"},ce=t("img",{src:L,alt:"times-circle",class:"icon-times-circle"},null,-1),me={class:"footer-right"},pe=["disabled"],ue=t("img",{src:V,alt:"times-circle",class:"icon-check-circle"},null,-1);function _e(a,e,s,l,o,n){const m=c("cpn-input"),u=c("cpn-autoComplete"),_=c("cpn-textArea"),h=c("Form"),g=c("cpn-modal-alert"),f=c("cpn-loading");return k(),z("div",C,[t("div",M,[t("div",I,[t("div",D,[t("div",U,[E,t("div",F,p(o.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"),1)]),t("div",P,[t("button",{type:"button",class:"button-back",onClick:e[0]||(e[0]=i=>n.back())},[B,N,r(" ย้อนกลับ ")])])]),j,d(h,{onSubmit:n.onSubmit,onInvalidSubmit:a.onInvalidSubmit},{default:A(()=>[t("div",K,[t("div",O,[t("div",R,[T,d(m,{modelValue:o.data.code,"onUpdate:modelValue":e[1]||(e[1]=i=>o.data.code=i),name:"department_id",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",$,[G,d(m,{modelValue:o.data.department_short_name,"onUpdate:modelValue":e[2]||(e[2]=i=>o.data.department_short_name=i),name:"department_short_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",H,[t("div",J,[Q,d(m,{modelValue:o.data.department_full_name,"onUpdate:modelValue":e[3]||(e[3]=i=>o.data.department_full_name=i),name:"department_full_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",W,[X,d(u,{modelValue:o.data.organization_id,"onUpdate:modelValue":e[4]||(e[4]=i=>o.data.organization_id=i),name:"organization_id",rules:"required",placeholder:"กรุณาระบุ",type:"text",optionSelect:o.optionSelect.organization_id,onKeyup:n.keyup_org},null,8,["modelValue","optionSelect","onKeyup"])])]),t("div",Y,[t("div",Z,[ee,d(_,{modelValue:o.data.desc,"onUpdate:modelValue":e[5]||(e[5]=i=>o.data.desc=i),name:"desc",rows:"4",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",te,[ae,t("div",se,[t("div",oe,[t("button",{type:"button",class:"button-file",onClick:e[6]||(e[6]=i=>n.upload_file("main_docs"))},[t("span",{class:x(o.data.filename?"":"no-data")},p(o.data.filename?o.data.filename:"รูปหน่วยงาน"),3)]),t("div",{class:"text pointer",onClick:e[7]||(e[7]=i=>n.upload_file("main_docs"))},"แนบไฟล์"),t("input",{type:"file",onChange:e[8]||(e[8]=i=>n.file_change("main_docs")),name:"main_docs",style:{display:"none"},accept:"image/*,"},null,32)]),t("button",{type:"button",class:"del-department",onClick:e[9]||(e[9]=i=>o.data.filename="")},le)])])]),ne,t("div",de,[t("div",re,[t("button",{type:"button",class:"button-danger",onClick:e[10]||(e[10]=i=>n.cancelClick())},[ce,r(" ยกเลิก ")])]),t("div",me,[t("button",{type:"submit",class:"button-success",disabled:!o.data.filename},[ue,r(" "+p(o.edit?"ยืนยันแก้ไขหน่วยงาน":"ยืนยันสร้างหน่วยงาน"),1)],8,pe)])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),d(g,{modalAlert:o.modalAlert},null,8,["modalAlert"]),d(f,{show:o.showLoading},null,8,["show"])])}const ve=S(q,[["render",_e]]);export{ve as default};
