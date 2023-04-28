import{_ as U,r as S,o as b,c as y,a as e,t as I,j as h,b as g,d as j,w as z,v as V,m as q,i as x,F as C,h as A,n as L,g as R,k as D}from"./index-b8d5bd5f.js";import{_ as F}from"./users-duotone-57e3c13d.js";import{_ as M,a as T}from"./line-up-c54e1bbb.js";import{_ as B,a as E}from"./user-crown-duotoneffffff-a2de1925.js";import{_ as K}from"./user-crown-duotone-30417741.js";const O={name:"user-manage-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{previewImage1:"",previewImage2:"",profile_img:"",signature_img:"",fname:"",lname:"",username:"",password:"",email:"",department_id:"",organization_id:"",subministry_id:"",group_id:"",level:[],birthdate:"",optionSelect:{organization:[],department:[],subministry:[],group:[],roles:[]},fileType:[]}}},methods:{selectImage(a){this.$refs[a].click()},pickFile(a){for(var t=0;t<this.$refs[a].files.length;t++){let i=this.$refs[a].files[t];if(this.data.fileType.indexOf(i.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;(i.type=="image/jpeg"||i.type=="image/png")&&i.size<5e5?(a=="fileInput1"?(this.data.previewImage1=URL.createObjectURL(i),this.data.profile_img=i):(this.data.previewImage2=URL.createObjectURL(i),this.data.signature_img=i),this.$refs[a].value=null):this.modalAlert={showModal:!0,type:"error",title:"Error",message:"*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB"}}},callApiUser(){this.axios.get(`/user/${localStorage.getItem("user_id")}`).then(a=>{var i;localStorage.setItem("profile_img",((i=a.data.data)==null?void 0:i.profile_img)||""),this.$emit("getUserImage",localStorage.getItem("profile_img"),localStorage.getItem("profile_img"));let t={};a.data.data.roles.filter(f=>{t[`user${f.role_id}`]=!0}),this.ruleSet(t)})},keyupOrganization(a){this.data.optionSelect.organization=[],this.axios.get("/master-data/organization",{params:{keyword:a.target.value}}).then(t=>{t.data.data&&(t.data.data.filter(i=>(i.value=i.id,i)),this.data.optionSelect.organization=t.data.data)})},keyupDepartment(a){this.data.optionSelect.department=[],this.axios.get("/master-data/department",{params:{keyword:a.target.value,organization_id:this.data.organization_id,subministry_id:this.data.subministry_id,group_id:this.data.group_id}}).then(t=>{t.data.data&&(t.data.data.filter(i=>(i.value=i.id,i.name=i.department_full_name,i)),this.data.optionSelect.department=t.data.data)})},keyupSubministry(a){this.data.optionSelect.subministry=[],this.axios.get("/master-data/subministry",{params:{keyword:a.target.value,organization_id:this.data.organization_id,department_id:this.data.department_id,group_id:this.data.group_id}}).then(t=>{t.data.data&&(t.data.data.filter(i=>(i.value=i.id,i.name=i.Name,i)),this.data.optionSelect.subministry=t.data.data)})},keyupGroup(a){this.data.optionSelect.group=[],this.axios.get("/master-data/group",{params:{keyword:a.target.value,organization_id:this.data.organization_id,department_id:this.data.department_id,subministry_id:this.data.subministry_id}}).then(t=>{t.data.data&&(t.data.data.filter(i=>(i.value=i.id,i)),this.data.optionSelect.group=t.data.data)})},masterDropdown(a){this.showLoading=!0;const t=this.axios.get(`/master-data/organization?department_id=${this.data.department_id}&subministry_id=${this.data.subministry_id}&group_id=${this.data.group_id}`),i=this.axios.get(`/master-data/department?organization_id=${this.data.organization_id}&subministry_id=${this.data.subministry_id}&group_id=${this.data.group_id}`),f=this.axios.get(`/master-data/subministry?organization_id=${this.data.organization_id}&department_id=${this.data.department_id}&group_id=${this.data.group_id}`),d=this.axios.get(`/master-data/group?organization_id=${this.data.organization_id}&department_id=${this.data.department_id}&subministry_id=${this.data.subministry_id}`);this.axios.all([t,i,f,d]).then(this.axios.spread((...r)=>{var _,s,v,o,k,p,w;this.showLoading=!1;const l=r[0],u=r[1],m=r[2],c=r[3];(_=l.data.data)==null||_.filter(n=>(n.value=n.id,n)),(s=u.data.data)==null||s.filter(n=>(n.value=n.id,n.name=n.department_full_name,n)),(v=m.data.data)==null||v.filter(n=>(n.value=n.id,n)),(o=c.data.data)==null||o.filter(n=>(n.value=n.id,n)),this.data.optionSelect.department=((k=u.data)==null?void 0:k.data)||[],this.data.optionSelect.subministry=((p=m.data)==null?void 0:p.data)||[],this.data.optionSelect.group=((w=c.data)==null?void 0:w.data)||[],u.data.data?u.data.data.findIndex(n=>n.id==this.data.department_id)=="-1"&&(this.data.department_id=""):this.data.department_id="",m.data.data?m.data.data.findIndex(n=>n.id==this.data.subministry_id)=="-1"&&(this.data.subministry_id=""):this.data.subministry_id="",c.data.data?c.data.data.findIndex(n=>n.id==this.data.group_id)=="-1"&&(this.data.group_id=""):this.data.group_id=""})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}})},back(){this.$router.push({name:"user-manage",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.previewImage1="",this.data.previewImage2="",this.data.profile_img="",this.data.signature_img="",this.data.username="",this.data.password="",this.data.email="",this.data.organization_id="",this.data.department_id="",this.data.subministry_id="",this.data.group_id="",this.data.level=[],this.data.birthdate="",this.data.fileType=[]},onSubmit(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){var f,d,r,l,u,m,c,_,s,v,o,k;let t=[];a.data.level.filter(p=>{p.flag="delete",t.push(p)}),a.data.optionSelect.roles.filter(p=>{p.flag="add",p.check&&t.push(p)});let i=new FormData;i.append("fname",((f=a.data)==null?void 0:f.fname)||""),i.append("lname",((d=a.data)==null?void 0:d.lname)||""),i.append("email",((r=a.data)==null?void 0:r.email)||""),i.append("department_id",((l=a.data)==null?void 0:l.department_id)||""),i.append("organization_id",((u=a.data)==null?void 0:u.organization_id)||""),i.append("subministry_id",((m=a.data)==null?void 0:m.subministry_id)||""),i.append("group_id",((c=a.data)==null?void 0:c.group_id)||""),i.append("username",((_=a.data)==null?void 0:_.username)||""),i.append("password",((s=a.data)==null?void 0:s.password)||""),i.append("birthdate",((v=a.data)==null?void 0:v.birthdate)||""),i.append("profile_img",((o=a.data)==null?void 0:o.profile_img)||""),i.append("signature_img",((k=a.data)==null?void 0:k.signature_img)||""),i.append("total_role",(t==null?void 0:t.length)||0),t.filter((p,w)=>{p.id&&i.append(`roles[${w}][id]`,p.id),p.role_id&&i.append(`roles[${w}][role_id]`,p.role_id),p.flag&&i.append(`roles[${w}][flag]`,p.flag)}),a.showLoading=!0,a.axios[a.edit?"put":"post"](`/user${a.edit?"/"+a.$route.params.id:""}`,i,{headers:{"Content-Type":"multipart/form-data"}}).then(()=>{a.showLoading=!1,a.callApiUser(),a.modalAlert={showModal:!0,type:"success",title:a.edit?"ทำการแก้ไขผู้ใช้งานสำเร็จแล้ว":"ทำการสร้างผู้ใช้งานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(p=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})}}},apiDetail(){this.showLoading=!0,this.axios.get(`/user/${this.$route.params.id}`).then(a=>{this.showLoading=!1,this.data.fname=a.data.data.fname,this.data.lname=a.data.data.lname,this.data.username=a.data.data.username,this.data.password=a.data.data.password,this.data.email=a.data.data.email,this.data.department_id=a.data.data.department_id,this.data.organization_id=a.data.data.organization_id,this.data.subministry_id=a.data.data.subministry_id,this.data.group_id=a.data.data.group_id,this.data.birthdate=a.data.data.birthdate,this.data.level=a.data.data.roles,a.data.data.profile_img?this.axios({method:"get",url:this.backendport+"/"+a.data.data.profile_img,baseURL:"",responseType:"blob"}).then(t=>{const i=new Blob([t.data],{type:this.assetsUtils.getTypeFile(a.data.data.profile_img)});this.data.previewImage1=URL.createObjectURL(i)}).catch(t=>{this.data.previewImage1=new URL("/assets/profile_img-f85ede15.jpg",self.location).href}):this.data.previewImage1=new URL("/assets/profile_img-f85ede15.jpg",self.location).href,a.data.data.signature_img?this.axios({method:"get",url:this.backendport+"/"+a.data.data.signature_img,baseURL:"",responseType:"blob"}).then(t=>{const i=new Blob([t.data],{type:this.assetsUtils.getTypeFile(a.data.data.signature_img)});this.data.previewImage2=URL.createObjectURL(i)}).catch(t=>{this.data.previewImage2=new URL("/assets/signature_img-526e80c1.jpg",self.location).href}):this.data.previewImage2=new URL("/assets/signature_img-526e80c1.jpg",self.location).href,this.data.optionSelect.roles.filter(t=>{t.check=!1,a.data.data.roles.filter(i=>{i.role_id==t.role_id&&(t.check=!0)})})}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},apiMaster(){this.showLoading=!0;const a=this.axios.get("/master-data/department"),t=this.axios.get("/master-data/role"),i=this.axios.get("/master-data/organization"),f=this.axios.get("/master-data/subministry"),d=this.axios.get("/master-data/group"),r=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([a,t,i,f,d,r]).then(this.axios.spread((...l)=>{this.showLoading=!1;const u=l[0],m=l[1],c=l[2],_=l[3],s=l[4],v=l[5];u.data.data.filter(o=>(o.value=o.id,o.name=o.department_full_name,o)),m.data.data.filter(o=>(o.role_id=o.id,o)),c.data.data.filter(o=>(o.value=o.id,o)),_.data.data.filter(o=>(o.value=o.id,o)),s.data.data.filter(o=>(o.value=o.id,o)),this.data.optionSelect.department=u.data.data,this.data.optionSelect.roles=m.data.data,this.data.optionSelect.organization=c.data.data,this.data.optionSelect.subministry=_.data.data,this.data.optionSelect.group=s.data.data,this.data.fileType=[],v.data.data.filter(o=>{o.active_flag==1&&this.data.fileType.push(o.content_type)}),this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}},mounted(){this.apiMaster()},watch:{"data.organization_id"(){this.masterDropdown()},"data.department_id"(){this.masterDropdown()},"data.subministry_id"(){this.masterDropdown()},"data.group_id"(){this.masterDropdown()}}},N={class:"user-detail"},P={class:"group-overflow"},G={class:"detail"},H={class:"group-head"},J={class:"group-first"},Q=e("img",{src:F,alt:"",class:"icon-users"},null,-1),W={class:"name"},X={class:"group-end"},Y=e("img",{src:M,class:"icon-back"},null,-1),Z=e("img",{src:T,class:"icon-line"},null,-1),$=e("div",{class:"line"},null,-1),tt={class:"group-detail"},at={class:"group-between"},et={class:"group-image left"},it=e("div",{class:"name"},"โปรไฟล์",-1),st=e("div",{class:"warning-message"},"*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB",-1),dt={class:"group-image"},ot=e("div",{class:"name"},"ลายเซ็น",-1),rt=e("div",{class:"warning-message"},"*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB",-1),nt={class:"group-between"},lt={class:"group-input left"},pt=e("div",{class:"name"},[h("ชื่อ "),e("span",{class:"required"},"*")],-1),ut={class:"group-input"},mt=e("div",{class:"name"},[h("นามสกุล "),e("span",{class:"required"},"*")],-1),ct={class:"group-between"},gt={class:"group-input left"},ht={class:"name"},_t={key:0,class:"required"},ft={class:"group-input"},vt={class:"name"},bt={key:0,class:"required"},yt={class:"group-between"},wt={class:"group-input left"},kt=e("div",{class:"name"},[h("Email "),e("span",{class:"required"},"*")],-1),St=e("div",{class:"group-input"},null,-1),It={class:"group-between"},zt={class:"group-input left"},Vt=e("div",{class:"name"},[h("กระทรวง "),e("span",{class:"required"},"*")],-1),qt={class:"group-input"},xt=e("div",{class:"name"},[h("หน่วยงาน "),e("span",{class:"required"},"*")],-1),Lt={class:"group-between"},Ut={class:"group-input left"},jt=e("div",{class:"name"},[h("กอง "),e("span",{class:"required"},"*")],-1),Ct={class:"group-input"},At=e("div",{class:"name"},"กลุ่ม",-1),Rt={class:"group-level"},Dt=e("div",{class:"level-first"},[e("img",{src:B,alt:"",class:"icon-crown"}),e("div",{class:"name"},"สิทธิ์")],-1),Ft={class:"level-button"},Mt=["onClick"],Tt={class:"group-user"},Bt={key:0,src:E,alt:"",class:"icon-user-crown"},Et={key:1,src:K,alt:"",class:"icon-user-crown"},Kt=["onClick","disabled"],Ot=e("div",{class:"line"},null,-1),Nt={class:"group-footer"},Pt={class:"footer-left"},Gt=e("img",{src:R,alt:"times-circle",class:"icon-times-circle"},null,-1),Ht={class:"footer-right"},Jt={type:"submit",class:"button-success"},Qt=e("img",{src:D,alt:"times-circle",class:"icon-check-circle"},null,-1);function Wt(a,t,i,f,d,r){const l=S("cpn-input"),u=S("cpn-autoComplete"),m=S("Form"),c=S("cpn-modal-alert"),_=S("cpn-loading");return b(),y("div",N,[e("div",P,[e("div",G,[e("div",H,[e("div",J,[Q,e("div",W,I(d.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"),1)]),e("div",X,[e("button",{type:"button",class:"button-back",onClick:t[0]||(t[0]=s=>r.back())},[Y,Z,h(" ย้อนกลับ ")])])]),$,g(m,{onSubmit:r.onSubmit,onInvalidSubmit:a.onInvalidSubmit},{default:j(()=>[e("div",tt,[e("div",at,[e("div",et,[it,z(e("div",{class:"image-preview-wrapper",style:q({"background-image":`url(${d.data.previewImage1})`})},null,4),[[V,d.data.previewImage1]]),e("input",{ref:"fileInput1",type:"file",onInput:t[1]||(t[1]=s=>r.pickFile("fileInput1")),accept:"image/png, image/jpg, image/jpeg",style:{display:"none"}},null,544),e("button",{name:"fileInput1",type:"button",onClick:t[2]||(t[2]=s=>r.selectImage("fileInput1")),class:"button-image"},"เลือกรูปภาพ"),st]),e("div",dt,[ot,z(e("div",{class:"image-preview-wrapper",style:q({"background-image":`url(${d.data.previewImage2})`})},null,4),[[V,d.data.previewImage2]]),e("input",{ref:"fileInput2",type:"file",onInput:t[3]||(t[3]=s=>r.pickFile("fileInput2")),accept:"image/png, image/jpg, image/jpeg",style:{display:"none"}},null,544),e("button",{name:"fileInput2",type:"button",onClick:t[4]||(t[4]=s=>r.selectImage("fileInput2")),class:"button-image"},"เลือกรูปภาพ"),rt])]),e("div",nt,[e("div",lt,[pt,g(l,{modelValue:d.data.fname,"onUpdate:modelValue":t[5]||(t[5]=s=>d.data.fname=s),name:"fname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",ut,[mt,g(l,{modelValue:d.data.lname,"onUpdate:modelValue":t[6]||(t[6]=s=>d.data.lname=s),name:"lname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",ct,[e("div",gt,[e("div",ht,[h("ชื่อผู้ใช้งาน "),d.edit?x("",!0):(b(),y("span",_t,"*"))]),g(l,{modelValue:d.data.username,"onUpdate:modelValue":t[7]||(t[7]=s=>d.data.username=s),name:"Usern",rules:d.edit?"":"required",disabled:d.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","rules","disabled"])]),e("div",ft,[e("div",vt,[h("รหัสผ่าน "),d.edit?x("",!0):(b(),y("span",bt,"*"))]),g(l,{modelValue:d.data.password,"onUpdate:modelValue":t[8]||(t[8]=s=>d.data.password=s),name:"passw",type:"password",rules:d.edit?"":"required",placeholder:"กรุณาระบุ"},null,8,["modelValue","rules"])])]),e("div",yt,[e("div",wt,[kt,g(l,{modelValue:d.data.email,"onUpdate:modelValue":t[9]||(t[9]=s=>d.data.email=s),name:"email",rules:"required|email",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),St]),e("div",It,[e("div",zt,[Vt,g(u,{modelValue:d.data.organization_id,"onUpdate:modelValue":t[10]||(t[10]=s=>d.data.organization_id=s),name:"organization",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[11]||(t[11]=s=>r.keyupOrganization(s)),optionSelect:d.data.optionSelect.organization},null,8,["modelValue","optionSelect"])]),e("div",qt,[xt,g(u,{modelValue:d.data.department_id,"onUpdate:modelValue":t[12]||(t[12]=s=>d.data.department_id=s),name:"department",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[13]||(t[13]=s=>r.keyupDepartment(s)),optionSelect:d.data.optionSelect.department},null,8,["modelValue","optionSelect"])])]),e("div",Lt,[e("div",Ut,[jt,g(u,{modelValue:d.data.subministry_id,"onUpdate:modelValue":t[14]||(t[14]=s=>d.data.subministry_id=s),name:"subministry",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[15]||(t[15]=s=>r.keyupSubministry(s)),optionSelect:d.data.optionSelect.subministry},null,8,["modelValue","optionSelect"])]),e("div",Ct,[At,g(u,{modelValue:d.data.group_id,"onUpdate:modelValue":t[16]||(t[16]=s=>d.data.group_id=s),name:"group",placeholder:"กรุณาระบุ",onKeyup:t[17]||(t[17]=s=>r.keyupGroup(s)),optionSelect:d.data.optionSelect.group},null,8,["modelValue","optionSelect"])])])]),z(e("div",Rt,[Dt,e("div",Ft,[(b(!0),y(C,null,A(d.data.optionSelect.roles,(s,v)=>(b(),y("div",{key:v},[s.id==1?(b(),y("button",{key:0,type:"button",class:L(["button-admin",s.check?"active":""]),onClick:o=>s.check=!s.check},[e("div",Tt,[s.check?(b(),y("img",Bt)):(b(),y("img",Et)),h(" "+I(s.desc),1)])],10,Mt)):(b(),y("button",{key:1,type:"button",class:L(["button-roles",s.check?"active":""]),onClick:o=>s.check=!s.check,disabled:s.id==6?!a.rule.user5:!1},I(s.desc),11,Kt))]))),128))])],512),[[V,d.data.optionSelect.roles.length>0]]),Ot,e("div",Nt,[e("div",Pt,[e("button",{type:"button",class:"button-danger",onClick:t[18]||(t[18]=s=>r.cancelClick())},[Gt,h(" ยกเลิก ")])]),e("div",Ht,[e("button",Jt,[Qt,h(" "+I(d.edit?"ยืนยันแก้ไขผู้ใช้งาน":"ยืนยันสร้างผู้ใช้งาน"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),g(c,{modalAlert:d.modalAlert},null,8,["modalAlert"]),g(_,{show:d.showLoading},null,8,["show"])])}const aa=U(O,[["render",Wt]]);export{aa as default};
