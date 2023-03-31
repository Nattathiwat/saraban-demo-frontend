import{_ as x,l as z,r as b,o as g,c as h,a as e,t as w,j as c,b as m,d as j,w as S,v as I,m as q,i as L,F as C,h as A,n as U,g as R,k as D}from"./index-235eb064.js";import{_ as F,a as M,b as T}from"./line-up-32057639.js";import{_ as B}from"./user-crown-duotone-30417741.js";const E="/assets/crown-duotone-c5406971.svg",K="/assets/user-crown-duotoneffffff-d1278e98.svg";const O={name:"user-manage-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{previewImage1:"",previewImage2:"",profile_img:"",signature_img:"",fname:"",lname:"",username:"",password:"",email:"",department_id:"",organization_id:"",subministry_id:"",group_id:"",level:[],birthdate:"",optionSelect:{organization:[],department:[],subministry:[],group:[],roles:[]},fileType:[]}}},components:{date:z},methods:{selectImage(a){this.$refs[a].click()},pickFile(a){for(var t=0;t<this.$refs[a].files.length;t++){let s=this.$refs[a].files[t];if(this.data.fileType.indexOf(s.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;(s.type=="image/jpeg"||s.type=="image/png")&&s.size<5e5?(a=="fileInput1"?(this.data.previewImage1=URL.createObjectURL(s),this.data.profile_img=s):(this.data.previewImage2=URL.createObjectURL(s),this.data.signature_img=s),this.$refs[a].value=null):this.modalAlert={showModal:!0,type:"error",title:"Error",message:"*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB"}}},callApiUser(){this.axios.get(`/user/${localStorage.getItem("user_id")}`).then(a=>{var t;localStorage.setItem("profile_img",((t=a.data.data)==null?void 0:t.profile_img)||""),this.$emit("getUserImage",localStorage.getItem("profile_img"),localStorage.getItem("profile_img"))})},keyupOrganization(a){this.data.optionSelect.organization=[],this.axios.get("/master-data/organization",{params:{keyword:a.target.value}}).then(t=>{t.data.data&&(t.data.data.filter(s=>(s.value=s.id,s)),this.data.optionSelect.organization=t.data.data)})},keyupDepartment(a){this.data.optionSelect.department=[],this.axios.get("/master-data/department",{params:{keyword:a.target.value,subministry_id:this.data.subministry_id,group_id:this.data.group_id}}).then(t=>{t.data.data&&(t.data.data.filter(s=>(s.value=s.id,s.name=s.department_full_name,s)),this.data.optionSelect.department=t.data.data)})},keyupSubministry(a){this.data.optionSelect.subministry=[],this.axios.get("/master-data/subministry",{params:{keyword:a.target.value,department_id:this.data.department_id,group_id:this.data.group_id}}).then(t=>{t.data.data&&(t.data.data.filter(s=>(s.value=s.id,s.name=s.Name,s)),this.data.optionSelect.subministry=t.data.data)})},keyupGroup(a){this.data.optionSelect.group=[],this.axios.get("/master-data/group",{params:{keyword:a.target.value,department_id:this.data.department_id,subministry_id:this.data.subministry_id}}).then(t=>{t.data.data&&(t.data.data.filter(s=>(s.value=s.id,s)),this.data.optionSelect.group=t.data.data)})},masterDropdown(a){this.showLoading=!0;const t=this.axios.get(`/master-data/department?subministry_id=${this.data.subministry_id}&group_id=${this.data.group_id}`),s=this.axios.get(`/master-data/subministry?department_id=${this.data.department_id}&group_id=${this.data.group_id}`),_=this.axios.get(`/master-data/group?department_id=${this.data.department_id}&subministry_id=${this.data.subministry_id}`);this.axios.all([t,s,_]).then(this.axios.spread((...i)=>{this.showLoading=!1;const n=i[0],l=i[1],u=i[2];n.data.data.filter(r=>(r.value=r.id,r.name=r.department_full_name,r)),l.data.data.filter(r=>(r.value=r.id,r)),u.data.data.filter(r=>(r.value=r.id,r)),this.data.optionSelect.department=n.data.data,this.data.optionSelect.subministry=l.data.data,this.data.optionSelect.group=u.data.data})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})},back(){this.$router.push({name:"user-manage",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.previewImage1="",this.data.previewImage2="",this.data.profile_img="",this.data.signature_img="",this.data.username="",this.data.password="",this.data.email="",this.data.organization_id="",this.data.department_id="",this.data.subministry_id="",this.data.group_id="",this.data.level=[],this.data.birthdate="",this.data.fileType=[]},onSubmit(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){var _,i,n,l,u,r,f,v,o,y,d,V;let t=[];a.data.level.filter(p=>{p.flag="delete",t.push(p)}),a.data.optionSelect.roles.filter(p=>{p.flag="add",p.check&&t.push(p)});let s=new FormData;s.append("fname",((_=a.data)==null?void 0:_.fname)||""),s.append("lname",((i=a.data)==null?void 0:i.lname)||""),s.append("email",((n=a.data)==null?void 0:n.email)||""),s.append("department_id",((l=a.data)==null?void 0:l.department_id)||""),s.append("organization_id",((u=a.data)==null?void 0:u.organization_id)||""),s.append("subministry_id",((r=a.data)==null?void 0:r.subministry_id)||""),s.append("group_id",((f=a.data)==null?void 0:f.group_id)||""),s.append("username",((v=a.data)==null?void 0:v.username)||""),s.append("password",((o=a.data)==null?void 0:o.password)||""),s.append("birthdate",((y=a.data)==null?void 0:y.birthdate)||""),s.append("profile_img",((d=a.data)==null?void 0:d.profile_img)||""),s.append("signature_img",((V=a.data)==null?void 0:V.signature_img)||""),s.append("total_role",(t==null?void 0:t.length)||0),t.filter((p,k)=>{p.id&&s.append(`roles[${k}][id]`,p.id),p.role_id&&s.append(`roles[${k}][role_id]`,p.role_id),p.flag&&s.append(`roles[${k}][flag]`,p.flag)}),a.showLoading=!0,a.axios[a.edit?"put":"post"](`/user${a.edit?"/"+a.$route.params.id:""}`,s,{headers:{"Content-Type":"multipart/form-data"}}).then(()=>{a.showLoading=!1,a.callApiUser(),a.modalAlert={showModal:!0,type:"success",title:a.edit?"ทำการแก้ไขผู้ใช้งานสำเร็จแล้ว":"ทำการสร้างผู้ใช้งานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(p=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})}}},apiDetail(){this.showLoading=!0,this.axios.get(`/user/${this.$route.params.id}`).then(a=>{this.showLoading=!1,this.data.fname=a.data.data.fname,this.data.lname=a.data.data.lname,this.data.username=a.data.data.username,this.data.password=a.data.data.password,this.data.email=a.data.data.email,this.data.department_id=a.data.data.department_id,this.data.organization_id=a.data.data.organization_id,this.data.subministry_id=a.data.data.subministry_id,this.data.group_id=a.data.data.group_id,this.data.birthdate=a.data.data.birthdate,this.data.level=a.data.data.roles,a.data.data.profile_img?this.axios({method:"get",url:this.backendport+"/"+a.data.data.profile_img,baseURL:"",responseType:"blob"}).then(t=>{const s=new Blob([t.data],{type:this.assetsUtils.getTypeFile(a.data.data.profile_img)});this.data.previewImage1=URL.createObjectURL(s)}).catch(t=>{this.data.previewImage1=new URL("/assets/profile_img-f85ede15.jpg",self.location).href}):this.data.previewImage1=new URL("/assets/profile_img-f85ede15.jpg",self.location).href,a.data.data.signature_img?this.axios({method:"get",url:this.backendport+"/"+a.data.data.signature_img,baseURL:"",responseType:"blob"}).then(t=>{const s=new Blob([t.data],{type:this.assetsUtils.getTypeFile(a.data.data.signature_img)});this.data.previewImage2=URL.createObjectURL(s)}).catch(t=>{this.data.previewImage2=new URL("/assets/signature_img-526e80c1.jpg",self.location).href}):this.data.previewImage2=new URL("/assets/signature_img-526e80c1.jpg",self.location).href,this.data.optionSelect.roles.filter(t=>{t.check=!1,a.data.data.roles.filter(s=>{s.role_id==t.role_id&&(t.check=!0)})})}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},apiMaster(){this.showLoading=!0;const a=this.axios.get("/master-data/department"),t=this.axios.get("/master-data/role"),s=this.axios.get("/master-data/organization"),_=this.axios.get("/master-data/subministry"),i=this.axios.get("/master-data/group"),n=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([a,t,s,_,i,n]).then(this.axios.spread((...l)=>{this.showLoading=!1;const u=l[0],r=l[1],f=l[2],v=l[3],o=l[4],y=l[5];u.data.data.filter(d=>(d.value=d.id,d.name=d.department_full_name,d)),r.data.data.filter(d=>(d.role_id=d.id,d)),f.data.data.filter(d=>(d.value=d.id,d)),v.data.data.filter(d=>(d.value=d.id,d)),o.data.data.filter(d=>(d.value=d.id,d)),this.data.optionSelect.department=u.data.data,this.data.optionSelect.roles=r.data.data,this.data.optionSelect.organization=f.data.data,this.data.optionSelect.subministry=v.data.data,this.data.optionSelect.group=o.data.data,this.data.fileType=[],y.data.data.filter(d=>{d.active_flag==1&&this.data.fileType.push(d.content_type)}),this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}},mounted(){this.apiMaster()},watch:{"data.organization_id"(){},"data.department_id"(){this.masterDropdown()},"data.subministry_id"(){this.masterDropdown()},"data.group_id"(){this.masterDropdown()}}},N={class:"user-detail"},P={class:"group-overflow"},G={class:"detail"},H={class:"group-head"},J={class:"group-first"},Q=e("img",{src:F,alt:"",class:"icon-users"},null,-1),W={class:"name"},X={class:"group-end"},Y=e("img",{src:M,class:"icon-back"},null,-1),Z=e("img",{src:T,class:"icon-line"},null,-1),$=e("div",{class:"line"},null,-1),tt={class:"group-detail"},et={class:"group-between"},at={class:"group-image left"},st=e("div",{class:"name"},"โปรไฟล์",-1),it=e("div",{class:"warning-message"},"*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB",-1),ot={class:"group-image"},dt=e("div",{class:"name"},"ลายเซ็น",-1),rt=e("div",{class:"warning-message"},"*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB",-1),lt={class:"group-between"},nt={class:"group-input left"},pt=e("div",{class:"name"},[c("ชื่อ "),e("span",{class:"required"},"*")],-1),ut={class:"group-input"},ct=e("div",{class:"name"},[c("นามสกุล "),e("span",{class:"required"},"*")],-1),mt={class:"group-between"},gt={class:"group-input left"},ht={class:"name"},_t={key:0,class:"required"},ft={class:"group-input"},vt={class:"name"},yt={key:0,class:"required"},bt={class:"group-between"},wt={class:"group-input left"},kt=e("div",{class:"name"},[c("Email "),e("span",{class:"required"},"*")],-1),St=e("div",{class:"group-input"},null,-1),It={class:"group-between"},Vt={class:"group-input left"},qt=e("div",{class:"name"},[c("กระทรวง "),e("span",{class:"required"},"*")],-1),Lt={class:"group-input"},Ut=e("div",{class:"name"},[c("หน่วยงาน "),e("span",{class:"required"},"*")],-1),xt={class:"group-between"},zt={class:"group-input left"},jt=e("div",{class:"name"},[c("กอง "),e("span",{class:"required"},"*")],-1),Ct={class:"group-input"},At=e("div",{class:"name"},[c("กลุ่ม "),e("span",{class:"required"},"*")],-1),Rt={class:"group-level"},Dt=e("div",{class:"level-first"},[e("img",{src:E,alt:"",class:"icon-crown"}),e("div",{class:"name"},"สิทธิ์")],-1),Ft={class:"level-button"},Mt=["onClick"],Tt={class:"group-user"},Bt={key:0,src:K,alt:"",class:"icon-user-crown"},Et={key:1,src:B,alt:"",class:"icon-user-crown"},Kt=["onClick"],Ot=e("div",{class:"line"},null,-1),Nt={class:"group-footer"},Pt={class:"footer-left"},Gt=e("img",{src:R,alt:"times-circle",class:"icon-times-circle"},null,-1),Ht={class:"footer-right"},Jt={type:"submit",class:"button-success"},Qt=e("img",{src:D,alt:"times-circle",class:"icon-check-circle"},null,-1);function Wt(a,t,s,_,i,n){const l=b("cpn-input"),u=b("cpn-autoComplete"),r=b("Form"),f=b("cpn-modal-alert"),v=b("cpn-loading");return g(),h("div",N,[e("div",P,[e("div",G,[e("div",H,[e("div",J,[Q,e("div",W,w(i.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"),1)]),e("div",X,[e("button",{type:"button",class:"button-back",onClick:t[0]||(t[0]=o=>n.back())},[Y,Z,c(" ย้อนกลับ ")])])]),$,m(r,{onSubmit:n.onSubmit,onInvalidSubmit:a.onInvalidSubmit},{default:j(()=>[e("div",tt,[e("div",et,[e("div",at,[st,S(e("div",{class:"image-preview-wrapper",style:q({"background-image":`url(${i.data.previewImage1})`})},null,4),[[I,i.data.previewImage1]]),e("input",{ref:"fileInput1",type:"file",onInput:t[1]||(t[1]=o=>n.pickFile("fileInput1")),accept:"image/png, image/jpg, image/jpeg",style:{display:"none"}},null,544),e("button",{name:"fileInput1",type:"button",onClick:t[2]||(t[2]=o=>n.selectImage("fileInput1")),class:"button-image"},"เลือกรูปภาพ"),it]),e("div",ot,[dt,S(e("div",{class:"image-preview-wrapper",style:q({"background-image":`url(${i.data.previewImage2})`})},null,4),[[I,i.data.previewImage2]]),e("input",{ref:"fileInput2",type:"file",onInput:t[3]||(t[3]=o=>n.pickFile("fileInput2")),accept:"image/png, image/jpg, image/jpeg",style:{display:"none"}},null,544),e("button",{name:"fileInput2",type:"button",onClick:t[4]||(t[4]=o=>n.selectImage("fileInput2")),class:"button-image"},"เลือกรูปภาพ"),rt])]),e("div",lt,[e("div",nt,[pt,m(l,{modelValue:i.data.fname,"onUpdate:modelValue":t[5]||(t[5]=o=>i.data.fname=o),name:"fname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",ut,[ct,m(l,{modelValue:i.data.lname,"onUpdate:modelValue":t[6]||(t[6]=o=>i.data.lname=o),name:"lname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",mt,[e("div",gt,[e("div",ht,[c("ชื่อผู้ใช้งาน "),i.edit?L("",!0):(g(),h("span",_t,"*"))]),m(l,{modelValue:i.data.username,"onUpdate:modelValue":t[7]||(t[7]=o=>i.data.username=o),name:"Usern",rules:i.edit?"":"required",disabled:i.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","rules","disabled"])]),e("div",ft,[e("div",vt,[c("รหัสผ่าน "),i.edit?L("",!0):(g(),h("span",yt,"*"))]),m(l,{modelValue:i.data.password,"onUpdate:modelValue":t[8]||(t[8]=o=>i.data.password=o),name:"passw",type:"password",rules:i.edit?"":"required",placeholder:"กรุณาระบุ"},null,8,["modelValue","rules"])])]),e("div",bt,[e("div",wt,[kt,m(l,{modelValue:i.data.email,"onUpdate:modelValue":t[9]||(t[9]=o=>i.data.email=o),name:"email",rules:"required|email",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),St]),e("div",It,[e("div",Vt,[qt,m(u,{modelValue:i.data.organization_id,"onUpdate:modelValue":t[10]||(t[10]=o=>i.data.organization_id=o),name:"organization",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[11]||(t[11]=o=>n.keyupOrganization(o)),optionSelect:i.data.optionSelect.organization},null,8,["modelValue","optionSelect"])]),e("div",Lt,[Ut,m(u,{modelValue:i.data.department_id,"onUpdate:modelValue":t[12]||(t[12]=o=>i.data.department_id=o),name:"department",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[13]||(t[13]=o=>n.keyupDepartment(o)),optionSelect:i.data.optionSelect.department},null,8,["modelValue","optionSelect"])])]),e("div",xt,[e("div",zt,[jt,m(u,{modelValue:i.data.subministry_id,"onUpdate:modelValue":t[14]||(t[14]=o=>i.data.subministry_id=o),name:"subministry",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[15]||(t[15]=o=>n.keyupSubministry(o)),optionSelect:i.data.optionSelect.subministry},null,8,["modelValue","optionSelect"])]),e("div",Ct,[At,m(u,{modelValue:i.data.group_id,"onUpdate:modelValue":t[16]||(t[16]=o=>i.data.group_id=o),name:"group",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[17]||(t[17]=o=>n.keyupGroup(o)),optionSelect:i.data.optionSelect.group},null,8,["modelValue","optionSelect"])])])]),S(e("div",Rt,[Dt,e("div",Ft,[(g(!0),h(C,null,A(i.data.optionSelect.roles,(o,y)=>(g(),h("div",{key:y},[o.id==1?(g(),h("button",{key:0,type:"button",class:U(["button-admin",o.check?"active":""]),onClick:d=>o.check=!o.check},[e("div",Tt,[o.check?(g(),h("img",Bt)):(g(),h("img",Et)),c(" "+w(o.desc),1)])],10,Mt)):(g(),h("button",{key:1,type:"button",class:U(["button-roles",o.check?"active":""]),onClick:d=>o.check=!o.check},w(o.desc),11,Kt))]))),128))])],512),[[I,i.data.optionSelect.roles.length>0]]),Ot,e("div",Nt,[e("div",Pt,[e("button",{type:"button",class:"button-danger",onClick:t[18]||(t[18]=o=>n.cancelClick())},[Gt,c(" ยกเลิก ")])]),e("div",Ht,[e("button",Jt,[Qt,c(" "+w(i.edit?"ยืนยันแก้ไขผู้ใช้งาน":"ยืนยันสร้างผู้ใช้งาน"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),m(f,{modalAlert:i.modalAlert},null,8,["modalAlert"]),m(v,{show:i.showLoading},null,8,["show"])])}const $t=x(O,[["render",Wt]]);export{$t as default};
