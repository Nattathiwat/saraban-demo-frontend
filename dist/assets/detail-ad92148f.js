import{_ as V,l as U,r as w,o as y,c as b,a as e,t as k,j as f,b as _,d as j,w as I,v as z,m as x,i as L,F as A,h as C,n as q,g as D,k as M}from"./index-1ec97845.js";import{_ as R}from"./users-duotone-57e3c13d.js";import{_ as F,a as T}from"./line-up-c54e1bbb.js";import{_ as E}from"./user-crown-duotone-30417741.js";const B="/assets/crown-duotone-c5406971.svg",O="/assets/user-crown-duotoneffffff-d1278e98.svg";const K={name:"user-manage-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{previewImage1:"",previewImage2:"",profile_img:"",signature_img:"",fname:"",lname:"",username:"",password:"",email:"",department_id:"",organization_id:"",subministry_id:"",group_id:"",level:[],birthdate:"",optionSelect:{organization:[],department:[],subministry:[],group:[],roles:[]},fileType:[]}}},components:{date:U},methods:{selectImage(a){this.$refs[a].click()},pickFile(a){for(var t=0;t<this.$refs[a].files.length;t++){let i=this.$refs[a].files[t];if(this.data.fileType.indexOf(i.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;(i.type=="image/jpeg"||i.type=="image/png")&&i.size<5e5?(a=="fileInput1"?(this.data.previewImage1=URL.createObjectURL(i),this.data.profile_img=i):(this.data.previewImage2=URL.createObjectURL(i),this.data.signature_img=i),this.$refs[a].value=null):this.modalAlert={showModal:!0,type:"error",title:"Error",message:"*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB"}}},callApiUser(){this.axios.get(`/user/${localStorage.getItem("user_id")}`).then(a=>{var i;localStorage.setItem("profile_img",((i=a.data.data)==null?void 0:i.profile_img)||""),this.$emit("getUserImage",localStorage.getItem("profile_img"),localStorage.getItem("profile_img")),localStorage.setItem("data_rule",JSON.stringify(a.data.data.roles));let t={};a.data.data.roles.filter(p=>{t[`user${p.role_id}`]=!0}),this.ruleSet(t)})},keyupOrganization(a){this.data.optionSelect.organization=[],this.axios.get("/master-data/organization",{params:{keyword:a.target.value}}).then(t=>{t.data.data&&(t.data.data.filter(i=>(i.value=i.id,i)),this.data.optionSelect.organization=t.data.data)})},keyupDepartment(a){this.data.optionSelect.department=[],this.axios.get("/master-data/department",{params:{keyword:a.target.value,organization_id:this.data.organization_id}}).then(t=>{t.data.data&&(t.data.data.filter(i=>(i.value=i.id,i.name=i.department_full_name,i)),this.data.optionSelect.department=t.data.data)})},keyupSubministry(a){this.data.optionSelect.subministry=[],this.axios.get("/master-data/subministry",{params:{keyword:a.target.value,organization_id:this.data.organization_id,department_id:this.data.department_id}}).then(t=>{t.data.data&&(t.data.data.filter(i=>(i.value=i.id,i)),this.data.optionSelect.subministry=t.data.data)})},keyupGroup(a){this.data.optionSelect.group=[],this.axios.get("/master-data/group",{params:{keyword:a.target.value,organization_id:this.data.organization_id,department_id:this.data.department_id,subministry_id:this.data.subministry_id}}).then(t=>{t.data.data&&(t.data.data.filter(i=>(i.value=i.id,i)),this.data.optionSelect.group=t.data.data)})},masterDropdown1(a){this.showLoading=!0;const t=this.axios.get(`/master-data/department?organization_id=${this.data.organization_id}`),i=this.axios.get(`/master-data/subministry?organization_id=${this.data.organization_id}&department_id=${this.data.department_id}`),p=this.axios.get(`/master-data/group?organization_id=${this.data.organization_id}&department_id=${this.data.department_id}&subministry_id=${this.data.subministry_id}`);this.axios.all([t,i,p]).then(this.axios.spread((...s)=>{var g,h,l,d,v,o;this.showLoading=!1;const n=s[0],r=s[1],m=s[2];(g=n.data.data)==null||g.filter(u=>(u.value=u.id,u.name=u.department_full_name,u)),(h=r.data.data)==null||h.filter(u=>(u.value=u.id,u)),(l=m.data.data)==null||l.filter(u=>(u.value=u.id,u)),this.data.optionSelect.department=((d=n.data)==null?void 0:d.data)||[],this.data.optionSelect.subministry=((v=r.data)==null?void 0:v.data)||[],this.data.optionSelect.group=((o=m.data)==null?void 0:o.data)||[],n.data.data?n.data.data.findIndex(u=>u.id==this.data.department_id)=="-1"&&(this.data.department_id=""):this.data.department_id="",r.data.data?r.data.data.findIndex(u=>u.id==this.data.subministry_id)=="-1"&&(this.data.subministry_id=""):this.data.subministry_id="",m.data.data?m.data.data.findIndex(u=>u.id==this.data.group_id)=="-1"&&(this.data.group_id=""):this.data.group_id=""})).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},masterDropdown2(a){this.showLoading=!0;const t=this.axios.get(`/master-data/subministry?organization_id=${this.data.organization_id}&department_id=${this.data.department_id}`),i=this.axios.get(`/master-data/group?organization_id=${this.data.organization_id}&department_id=${this.data.department_id}&subministry_id=${this.data.subministry_id}`);this.axios.all([t,i]).then(this.axios.spread((...p)=>{var r,m,g,h;this.showLoading=!1;const s=p[0],n=p[1];(r=s.data.data)==null||r.filter(l=>(l.value=l.id,l)),(m=n.data.data)==null||m.filter(l=>(l.value=l.id,l)),this.data.optionSelect.subministry=((g=s.data)==null?void 0:g.data)||[],this.data.optionSelect.group=((h=n.data)==null?void 0:h.data)||[],s.data.data?s.data.data.findIndex(l=>l.id==this.data.subministry_id)=="-1"&&(this.data.subministry_id=""):this.data.subministry_id="",n.data.data?n.data.data.findIndex(l=>l.id==this.data.group_id)=="-1"&&(this.data.group_id=""):this.data.group_id=""})).catch(p=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})},masterDropdown3(a){this.showLoading=!0;const t=this.axios.get(`/master-data/group?organization_id=${this.data.organization_id}&department_id=${this.data.department_id}&subministry_id=${this.data.subministry_id}`);this.axios.all([t]).then(this.axios.spread((...i)=>{var s,n;this.showLoading=!1;const p=i[0];(s=p.data.data)==null||s.filter(r=>(r.value=r.id,r)),this.data.optionSelect.group=((n=p.data)==null?void 0:n.data)||[],p.data.data?p.data.data.findIndex(r=>r.id==this.data.group_id)=="-1"&&(this.data.group_id=""):this.data.group_id=""})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})},back(){this.$router.push({name:"user-manage",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.previewImage1="",this.data.previewImage2="",this.data.profile_img="",this.data.signature_img="",this.data.username="",this.data.password="",this.data.email="",this.data.organization_id="",this.data.department_id="",this.data.subministry_id="",this.data.group_id="",this.data.level=[],this.data.birthdate="",this.data.fileType=[]},onSubmit(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){var p,s,n,r,m,g,h,l,d,v,o,u;let t=[];a.data.level.filter(c=>{c.flag="delete",t.push(c)}),a.data.optionSelect.roles.filter(c=>{c.flag="add",c.check&&t.push(c)});let i=new FormData;i.append("fname",((p=a.data)==null?void 0:p.fname)||""),i.append("lname",((s=a.data)==null?void 0:s.lname)||""),i.append("email",((n=a.data)==null?void 0:n.email)||""),i.append("department_id",((r=a.data)==null?void 0:r.department_id)||""),i.append("organization_id",((m=a.data)==null?void 0:m.organization_id)||""),i.append("subministry_id",((g=a.data)==null?void 0:g.subministry_id)||""),i.append("group_id",((h=a.data)==null?void 0:h.group_id)||""),i.append("username",((l=a.data)==null?void 0:l.username)||""),i.append("password",((d=a.data)==null?void 0:d.password)||""),i.append("birthdate",((v=a.data)==null?void 0:v.birthdate)||""),i.append("profile_img",((o=a.data)==null?void 0:o.profile_img)||""),i.append("signature_img",((u=a.data)==null?void 0:u.signature_img)||""),i.append("total_role",(t==null?void 0:t.length)||0),t.filter((c,S)=>{c.id&&i.append(`roles[${S}][id]`,c.id),c.role_id&&i.append(`roles[${S}][role_id]`,c.role_id),c.flag&&i.append(`roles[${S}][flag]`,c.flag)}),a.showLoading=!0,a.axios[a.edit?"put":"post"](`/user${a.edit?"/"+a.$route.params.id:""}`,i,{headers:{"Content-Type":"multipart/form-data"}}).then(()=>{a.showLoading=!1,a.callApiUser(),a.modalAlert={showModal:!0,type:"success",title:a.edit?"ทำการแก้ไขผู้ใช้งานสำเร็จแล้ว":"ทำการสร้างผู้ใช้งานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(c=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}})}}},apiDetail(){this.showLoading=!0,this.axios.get(`/user/${this.$route.params.id}`).then(a=>{this.showLoading=!1,this.data.fname=a.data.data.fname,this.data.lname=a.data.data.lname,this.data.username=a.data.data.username,this.data.password=a.data.data.password,this.data.email=a.data.data.email,this.data.department_id=a.data.data.department_id,this.data.organization_id=a.data.data.organization_id,this.data.subministry_id=a.data.data.subministry_id,this.data.group_id=a.data.data.group_id,this.data.birthdate=a.data.data.birthdate,this.data.level=a.data.data.roles,a.data.data.profile_img?this.axios({method:"get",url:this.backendport+"/"+a.data.data.profile_img,baseURL:"",responseType:"blob"}).then(t=>{const i=new Blob([t.data],{type:this.assetsUtils.getTypeFile(a.data.data.profile_img)});this.data.previewImage1=URL.createObjectURL(i)}).catch(t=>{this.data.previewImage1=new URL("/assets/profile_img-f85ede15.jpg",self.location).href}):this.data.previewImage1=new URL("/assets/profile_img-f85ede15.jpg",self.location).href,a.data.data.signature_img?this.axios({method:"get",url:this.backendport+"/"+a.data.data.signature_img,baseURL:"",responseType:"blob"}).then(t=>{const i=new Blob([t.data],{type:this.assetsUtils.getTypeFile(a.data.data.signature_img)});this.data.previewImage2=URL.createObjectURL(i)}).catch(t=>{this.data.previewImage2=new URL("/assets/signature_img-526e80c1.jpg",self.location).href}):this.data.previewImage2=new URL("/assets/signature_img-526e80c1.jpg",self.location).href,this.data.optionSelect.roles.filter(t=>{t.check=!1,a.data.data.roles.filter(i=>{i.role_id==t.role_id&&(t.check=!0)})})}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},apiMaster(){this.showLoading=!0;const a=this.axios.get("/master-data/department"),t=this.axios.get("/master-data/role"),i=this.axios.get("/master-data/organization"),p=this.axios.get("/master-data/subministry"),s=this.axios.get("/master-data/group"),n=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([a,t,i,p,s,n]).then(this.axios.spread((...r)=>{this.showLoading=!1;const m=r[0],g=r[1],h=r[2],l=r[3],d=r[4],v=r[5];m.data.data.filter(o=>(o.value=o.id,o.name=o.department_full_name,o)),g.data.data.filter(o=>(o.role_id=o.id,o)),h.data.data.filter(o=>(o.value=o.id,o)),l.data.data.filter(o=>(o.value=o.id,o)),d.data.data.filter(o=>(o.value=o.id,o)),this.data.optionSelect.department=m.data.data,this.data.optionSelect.roles=g.data.data,this.data.optionSelect.organization=h.data.data,this.data.optionSelect.subministry=l.data.data,this.data.optionSelect.group=d.data.data,this.data.fileType=[],v.data.data.filter(o=>{o.active_flag==1&&this.data.fileType.push(o.content_type)}),this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}})}},mounted(){this.apiMaster()},watch:{"data.organization_id"(){this.masterDropdown1()},"data.department_id"(){this.masterDropdown2()},"data.subministry_id"(){this.masterDropdown3()},"data.group_id"(){}}},N={class:"user-detail"},P={class:"group-overflow"},G={class:"detail"},$={class:"group-head"},J={class:"group-first"},H=e("img",{src:R,alt:"",class:"icon-users"},null,-1),Q={class:"name"},W={class:"group-end"},X=e("img",{src:F,class:"icon-back"},null,-1),Y=e("img",{src:T,class:"icon-line"},null,-1),Z=e("div",{class:"line"},null,-1),tt={class:"group-detail"},at={class:"group-between"},et={class:"group-image left"},it=e("div",{class:"name"},"โปรไฟล์",-1),st=e("div",{class:"warning-message"},"*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB",-1),dt={class:"group-image"},ot=e("div",{class:"name"},"ลายเซ็น",-1),rt=e("div",{class:"warning-message"},"*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB",-1),nt={class:"group-between"},lt={class:"group-input left"},ut=e("div",{class:"name"},[f("ชื่อ "),e("span",{class:"required"},"*")],-1),pt={class:"group-input"},mt=e("div",{class:"name"},[f("นามสกุล "),e("span",{class:"required"},"*")],-1),ct={class:"group-between"},gt={class:"group-input left"},ht={class:"name"},_t={key:0,class:"required"},ft={class:"group-input"},vt={class:"name"},yt={key:0,class:"required"},bt={class:"group-between"},wt={class:"group-input left"},kt=e("div",{class:"name"},[f("Email "),e("span",{class:"required"},"*")],-1),St=e("div",{class:"group-input"},null,-1),It={class:"group-between"},zt={class:"group-input left"},xt=e("div",{class:"name"},[f("กระทรวง "),e("span",{class:"required"},"*")],-1),Lt={class:"group-input"},qt=e("div",{class:"name"},[f("หน่วยงาน "),e("span",{class:"required"},"*")],-1),Vt={class:"group-between"},Ut={class:"group-input left"},jt=e("div",{class:"name"},[f("กอง "),e("span",{class:"required"},"*")],-1),At={class:"group-input"},Ct=e("div",{class:"name"},"กลุ่ม",-1),Dt={class:"group-level"},Mt=e("div",{class:"level-first"},[e("img",{src:B,alt:"",class:"icon-crown"}),e("div",{class:"name"},"สิทธิ์")],-1),Rt={class:"level-button"},Ft=["onClick"],Tt={class:"group-user"},Et={key:0,src:O,alt:"",class:"icon-user-crown"},Bt={key:1,src:E,alt:"",class:"icon-user-crown"},Ot=["onClick","disabled"],Kt=e("div",{class:"line"},null,-1),Nt={class:"group-footer"},Pt={class:"footer-left"},Gt=e("img",{src:D,alt:"times-circle",class:"icon-times-circle"},null,-1),$t={class:"footer-right"},Jt={type:"submit",class:"button-success"},Ht=e("img",{src:M,alt:"times-circle",class:"icon-check-circle"},null,-1);function Qt(a,t,i,p,s,n){const r=w("cpn-input"),m=w("cpn-autoComplete"),g=w("Form"),h=w("cpn-modal-alert"),l=w("cpn-loading");return y(),b("div",N,[e("div",P,[e("div",G,[e("div",$,[e("div",J,[H,e("div",Q,k(s.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"),1)]),e("div",W,[e("button",{type:"button",class:"button-back",onClick:t[0]||(t[0]=d=>n.back())},[X,Y,f(" ย้อนกลับ ")])])]),Z,_(g,{onSubmit:n.onSubmit,onInvalidSubmit:a.onInvalidSubmit},{default:j(()=>[e("div",tt,[e("div",at,[e("div",et,[it,I(e("div",{class:"image-preview-wrapper",style:x({"background-image":`url(${s.data.previewImage1})`})},null,4),[[z,s.data.previewImage1]]),e("input",{ref:"fileInput1",type:"file",onInput:t[1]||(t[1]=d=>n.pickFile("fileInput1")),accept:"image/png, image/jpg, image/jpeg",style:{display:"none"}},null,544),e("button",{name:"fileInput1",type:"button",onClick:t[2]||(t[2]=d=>n.selectImage("fileInput1")),class:"button-image"},"เลือกรูปภาพ"),st]),e("div",dt,[ot,I(e("div",{class:"image-preview-wrapper",style:x({"background-image":`url(${s.data.previewImage2})`})},null,4),[[z,s.data.previewImage2]]),e("input",{ref:"fileInput2",type:"file",onInput:t[3]||(t[3]=d=>n.pickFile("fileInput2")),accept:"image/png, image/jpg, image/jpeg",style:{display:"none"}},null,544),e("button",{name:"fileInput2",type:"button",onClick:t[4]||(t[4]=d=>n.selectImage("fileInput2")),class:"button-image"},"เลือกรูปภาพ"),rt])]),e("div",nt,[e("div",lt,[ut,_(r,{modelValue:s.data.fname,"onUpdate:modelValue":t[5]||(t[5]=d=>s.data.fname=d),name:"fname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",pt,[mt,_(r,{modelValue:s.data.lname,"onUpdate:modelValue":t[6]||(t[6]=d=>s.data.lname=d),name:"lname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",ct,[e("div",gt,[e("div",ht,[f("ชื่อผู้ใช้งาน "),s.edit?L("",!0):(y(),b("span",_t,"*"))]),_(r,{modelValue:s.data.username,"onUpdate:modelValue":t[7]||(t[7]=d=>s.data.username=d),name:"Usern",rules:s.edit?"":"required",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","rules","disabled"])]),e("div",ft,[e("div",vt,[f("รหัสผ่าน "),s.edit?L("",!0):(y(),b("span",yt,"*"))]),_(r,{modelValue:s.data.password,"onUpdate:modelValue":t[8]||(t[8]=d=>s.data.password=d),name:"passw",type:"password",rules:s.edit?"":"required",placeholder:"กรุณาระบุ"},null,8,["modelValue","rules"])])]),e("div",bt,[e("div",wt,[kt,_(r,{modelValue:s.data.email,"onUpdate:modelValue":t[9]||(t[9]=d=>s.data.email=d),name:"email",rules:"required|email",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),St]),e("div",It,[e("div",zt,[xt,_(m,{modelValue:s.data.organization_id,"onUpdate:modelValue":t[10]||(t[10]=d=>s.data.organization_id=d),name:"organization",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[11]||(t[11]=d=>n.keyupOrganization(d)),optionSelect:s.data.optionSelect.organization},null,8,["modelValue","optionSelect"])]),e("div",Lt,[qt,_(m,{modelValue:s.data.department_id,"onUpdate:modelValue":t[12]||(t[12]=d=>s.data.department_id=d),name:"department",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[13]||(t[13]=d=>n.keyupDepartment(d)),optionSelect:s.data.optionSelect.department},null,8,["modelValue","optionSelect"])])]),e("div",Vt,[e("div",Ut,[jt,_(m,{modelValue:s.data.subministry_id,"onUpdate:modelValue":t[14]||(t[14]=d=>s.data.subministry_id=d),name:"subministry",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[15]||(t[15]=d=>n.keyupSubministry(d)),optionSelect:s.data.optionSelect.subministry},null,8,["modelValue","optionSelect"])]),e("div",At,[Ct,_(m,{modelValue:s.data.group_id,"onUpdate:modelValue":t[16]||(t[16]=d=>s.data.group_id=d),name:"group",placeholder:"กรุณาระบุ",onKeyup:t[17]||(t[17]=d=>n.keyupGroup(d)),optionSelect:s.data.optionSelect.group},null,8,["modelValue","optionSelect"])])])]),I(e("div",Dt,[Mt,e("div",Rt,[(y(!0),b(A,null,C(s.data.optionSelect.roles,(d,v)=>(y(),b("div",{key:v},[d.id==1?(y(),b("button",{key:0,type:"button",class:q(["button-admin",d.check?"active":""]),onClick:o=>d.check=!d.check},[e("div",Tt,[d.check?(y(),b("img",Et)):(y(),b("img",Bt)),f(" "+k(d.desc),1)])],10,Ft)):(y(),b("button",{key:1,type:"button",class:q(["button-roles",d.check?"active":""]),onClick:o=>d.check=!d.check,disabled:d.id==6?!(a.rule.user1||a.rule.user5):!1},k(d.desc),11,Ot))]))),128))])],512),[[z,s.data.optionSelect.roles.length>0]]),Kt,e("div",Nt,[e("div",Pt,[e("button",{type:"button",class:"button-danger",onClick:t[18]||(t[18]=d=>n.cancelClick())},[Gt,f(" ยกเลิก ")])]),e("div",$t,[e("button",Jt,[Ht,f(" "+k(s.edit?"ยืนยันแก้ไขผู้ใช้งาน":"ยืนยันสร้างผู้ใช้งาน"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),_(h,{modalAlert:s.modalAlert},null,8,["modalAlert"]),_(l,{show:s.showLoading},null,8,["show"])])}const ta=V(K,[["render",Qt]]);export{ta as default};
