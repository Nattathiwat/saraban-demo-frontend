import{_ as L,l as U,r as b,o as _,c as f,a,t as w,j as p,b as m,d as C,w as S,v as z,m as V,i as I,F as j,h as A,n as x,g as D,k as F}from"./index-caa9f0bd.js";import{_ as M,a as T,b as R}from"./line-up-32057639.js";import{_ as B}from"./user-crown-duotone-30417741.js";const E="/assets/crown-duotone-c5406971.svg",K="/assets/user-crown-duotoneffffff-d1278e98.svg";const O={name:"user-manage-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{previewImage1:"",previewImage2:"",profile_img:"",signature_img:"",fname:"",lname:"",username:"",password:"",email:"",department_id:"",organization_id:"",subministry_id:"",group_id:"",level:[],birthdate:"",optionSelect:{organization:[],department:[],subministry:[],group:[],roles:[]},fileType:[]}}},components:{date:U},methods:{selectImage(e){this.$refs[e].click()},pickFile(e){for(var t=0;t<this.$refs[e].files.length;t++){let i=this.$refs[e].files[t];if(this.data.fileType.indexOf(i.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;(i.type=="image/jpeg"||i.type=="image/png")&&i.size<5e5?(e=="fileInput1"?(this.data.previewImage1=URL.createObjectURL(i),this.data.profile_img=i):(this.data.previewImage2=URL.createObjectURL(i),this.data.signature_img=i),this.$refs[e].value=null):this.modalAlert={showModal:!0,type:"error",title:"Error",message:"*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB"}}},keyupOrganization(e){this.data.optionSelect.organization=[],this.axios.get("/organization",{params:{keyword:e.target.value,department_id:this.data.department_id,subministry_id:this.data.subministry_id,group_id:this.data.group_id}}).then(t=>{t.data.data&&(t.data.data.filter(i=>(i.value=i.id,i)),this.data.optionSelect.organization=t.data.data)})},keyupDepartment(e){this.data.optionSelect.department=[],this.axios.get("/master-data/department",{params:{keyword:e.target.value,organization_id:this.data.organization_id,subministry_id:this.data.subministry_id,group_id:this.data.group_id}}).then(t=>{t.data.data&&(t.data.data.filter(i=>(i.value=i.id,i.name=i.department_full_name,i)),this.data.optionSelect.department=t.data.data)})},keyupSubministry(e){this.data.optionSelect.subministry=[],this.axios.get("/subministry",{params:{keyword:e.target.value,organization_id:this.data.organization_id,department_id:this.data.department_id,group_id:this.data.group_id}}).then(t=>{t.data.data&&(t.data.data.filter(i=>(i.value=i.id,i.name=i.Name,i)),this.data.optionSelect.subministry=t.data.data)})},keyupGroup(e){this.data.optionSelect.group=[],this.axios.get("/group",{params:{keyword:e.target.value,organization_id:this.data.organization_id,department_id:this.data.department_id,subministry_id:this.data.subministry_id}}).then(t=>{t.data.data&&(t.data.data.filter(i=>(i.value=i.id,i)),this.data.optionSelect.group=t.data.data)})},masterDropdown(e){this.showLoading=!0;const t=this.axios.get(`/master-data/organization?department_id=${this.data.department_id}&subministry_id=${this.data.subministry_id}&group_id=${this.data.group_id}`),i=this.axios.get(`/master-data/department?organization_id=${this.data.organization_id}&subministry_id=${this.data.subministry_id}&group_id=${this.data.group_id}`),v=this.axios.get(`/master-data/subministry?organization_id=${this.data.organization_id}&department_id=${this.data.department_id}&group_id=${this.data.group_id}`),d=this.axios.get(`/master-data/group?organization_id=${this.data.organization_id}&department_id=${this.data.department_id}&subministry_id=${this.data.subministry_id}`);this.axios.all([t,i,v,d]).then(this.axios.spread((...r)=>{this.showLoading=!1;const l=r[0],c=r[1],g=r[2],h=r[3];l.data.data.filter(n=>(n.value=n.id,n)),c.data.data.filter(n=>(n.value=n.id,n.name=n.department_full_name,n)),g.data.data.filter(n=>(n.value=n.id,n)),h.data.data.filter(n=>(n.value=n.id,n)),this.data.optionSelect.organization=l.data.data,this.data.optionSelect.department=c.data.data,this.data.optionSelect.subministry=g.data.data,this.data.optionSelect.group=h.data.data})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}})},back(){this.$router.push({name:"user-manage",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.previewImage1="",this.data.previewImage2="",this.data.profile_img="",this.data.signature_img="",this.data.username="",this.data.password="",this.data.email="",this.data.organization_id="",this.data.department_id="",this.data.subministry_id="",this.data.group_id="",this.data.level=[],this.data.birthdate="",this.data.fileType=[]},onSubmit(){let e=this;(!this.data.profile_img||!this.data.signature_img)&&!this.edit?document.querySelector('[name="fileInput1"]').scrollIntoView({block:"center"}):this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){var v,d,r,l,c,g,h,n,s,y,o,q;let t=[];e.data.level.filter(u=>{u.flag="delete",t.push(u)}),e.data.optionSelect.roles.filter(u=>{u.flag="add",u.check&&t.push(u)});let i=new FormData;i.append("fname",((v=e.data)==null?void 0:v.fname)||""),i.append("lname",((d=e.data)==null?void 0:d.lname)||""),i.append("email",((r=e.data)==null?void 0:r.email)||""),i.append("department_id",((l=e.data)==null?void 0:l.department_id)||""),i.append("organization_id",((c=e.data)==null?void 0:c.organization_id)||""),i.append("subministry_id",((g=e.data)==null?void 0:g.subministry_id)||""),i.append("group_id",((h=e.data)==null?void 0:h.group_id)||""),i.append("username",((n=e.data)==null?void 0:n.username)||""),i.append("password",((s=e.data)==null?void 0:s.password)||""),i.append("birthdate",((y=e.data)==null?void 0:y.birthdate)||""),i.append("profile_img",((o=e.data)==null?void 0:o.profile_img)||""),i.append("signature_img",((q=e.data)==null?void 0:q.signature_img)||""),i.append("total_role",(t==null?void 0:t.length)||0),t.filter((u,k)=>{u.id&&i.append(`roles[${k}][id]`,u.id),u.role_id&&i.append(`roles[${k}][role_id]`,u.role_id),u.flag&&i.append(`roles[${k}][flag]`,u.flag)}),e.showLoading=!0,e.axios[e.edit?"put":"post"](`/user${e.edit?"/"+e.$route.params.id:""}`,i,{headers:{"Content-Type":"multipart/form-data"}}).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:e.edit?"ทำการแก้ไขผู้ใช้งานสำเร็จแล้ว":"ทำการสร้างผู้ใช้งานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(u=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:u.response.data.message}})}}},apiDetail(){this.showLoading=!0,this.axios.get(`/user/${this.$route.params.id}`).then(e=>{this.showLoading=!1,this.data.fname=e.data.data.fname,this.data.lname=e.data.data.lname,this.data.username=e.data.data.username,this.data.password=e.data.data.password,this.data.email=e.data.data.email,this.data.department_id=e.data.data.department_id,this.data.organization_id=e.data.data.organization_id,this.data.subministry_id=e.data.data.subministry_id,this.data.group_id=e.data.data.group_id,this.data.birthdate=e.data.data.birthdate,this.data.level=e.data.data.roles,this.axios({method:"get",url:this.backendport+"/"+e.data.data.profile_img,baseURL:"",responseType:"blob"}).then(t=>{const i=new Blob([t.data],{type:this.assetsUtils.getTypeFile(e.data.data.profile_img)});this.data.previewImage1=URL.createObjectURL(i)}),this.axios({method:"get",url:this.backendport+"/"+e.data.data.signature_img,baseURL:"",responseType:"blob"}).then(t=>{const i=new Blob([t.data],{type:this.assetsUtils.getTypeFile(e.data.data.signature_img)});this.data.previewImage2=URL.createObjectURL(i)}),this.data.optionSelect.roles.filter(t=>{t.check=!1,e.data.data.roles.filter(i=>{i.role_id==t.role_id&&(t.check=!0)})})}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},apiMaster(){this.showLoading=!0;const e=this.axios.get("/master-data/department"),t=this.axios.get("/master-data/role"),i=this.axios.get("/master-data/organization"),v=this.axios.get("/master-data/subministry"),d=this.axios.get("/master-data/group"),r=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([e,t,i,v,d,r]).then(this.axios.spread((...l)=>{this.showLoading=!1;const c=l[0],g=l[1],h=l[2],n=l[3],s=l[4],y=l[5];c.data.data.filter(o=>(o.value=o.id,o.name=o.department_full_name,o)),g.data.data.filter(o=>(o.role_id=o.id,o)),h.data.data.filter(o=>(o.value=o.id,o)),n.data.data.filter(o=>(o.value=o.id,o)),s.data.data.filter(o=>(o.value=o.id,o)),this.data.optionSelect.department=c.data.data,this.data.optionSelect.roles=g.data.data,this.data.optionSelect.organization=h.data.data,this.data.optionSelect.subministry=n.data.data,this.data.optionSelect.group=s.data.data,this.data.fileType=[],y.data.data.filter(o=>{o.active_flag==1&&this.data.fileType.push(o.content_type)}),this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}},mounted(){this.apiMaster()},watch:{"data.organization_id"(){this.masterDropdown()},"data.department_id"(){this.masterDropdown()},"data.subministry_id"(){this.masterDropdown()},"data.group_id"(){this.masterDropdown()}}},N={class:"user-detail"},P={class:"group-overflow"},G={class:"detail"},H={class:"group-head"},J={class:"group-first"},Q=a("img",{src:M,alt:"",class:"icon-users"},null,-1),W={class:"name"},X={class:"group-end"},Y=a("img",{src:T,class:"icon-back"},null,-1),Z=a("img",{src:R,class:"icon-line"},null,-1),$=a("div",{class:"line"},null,-1),tt={class:"group-detail"},at={class:"group-between"},et={class:"group-image left"},it=a("div",{class:"name"},[p("โปรไฟล์ "),a("span",{class:"required"},"*")],-1),st=a("div",{class:"warning-message"},"*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB",-1),dt={class:"group-image"},ot=a("div",{class:"name"},[p("ลายเซ็น "),a("span",{class:"required"},"*")],-1),nt=a("div",{class:"warning-message"},"*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB",-1),rt={class:"group-between"},lt={class:"group-input left"},ut=a("div",{class:"name"},[p("ชื่อ "),a("span",{class:"required"},"*")],-1),pt={class:"group-input"},ct=a("div",{class:"name"},[p("นามสกุล "),a("span",{class:"required"},"*")],-1),mt={class:"group-between"},gt={class:"group-input left"},ht={class:"name"},_t={key:0,class:"required"},ft={class:"group-input"},vt={class:"name"},yt={key:0,class:"required"},bt={class:"group-between"},wt={class:"group-input left"},kt=a("div",{class:"name"},[p("Email "),a("span",{class:"required"},"*")],-1),St=a("div",{class:"group-input"},null,-1),zt={class:"group-between"},qt={class:"group-input left"},Vt=a("div",{class:"name"},[p("กระทรวง "),a("span",{class:"required"},"*")],-1),It={class:"group-input"},xt=a("div",{class:"name"},[p("หน่วยงาน "),a("span",{class:"required"},"*")],-1),Lt={class:"group-between"},Ut={class:"group-input left"},Ct=a("div",{class:"name"},[p("กอง "),a("span",{class:"required"},"*")],-1),jt={class:"group-input"},At=a("div",{class:"name"},[p("กลุ่ม "),a("span",{class:"required"},"*")],-1),Dt={class:"group-level"},Ft=a("div",{class:"level-first"},[a("img",{src:E,alt:"",class:"icon-crown"}),a("div",{class:"name"},"สิทธิ์")],-1),Mt={class:"level-button"},Tt=["onClick"],Rt={class:"group-user"},Bt={key:0,src:K,alt:"",class:"icon-user-crown"},Et={key:1,src:B,alt:"",class:"icon-user-crown"},Kt=["onClick"],Ot=a("div",{class:"line"},null,-1),Nt={class:"group-footer"},Pt={class:"footer-left"},Gt=a("img",{src:D,alt:"times-circle",class:"icon-times-circle"},null,-1),Ht={class:"footer-right"},Jt={type:"submit",class:"button-success"},Qt=a("img",{src:F,alt:"times-circle",class:"icon-check-circle"},null,-1);function Wt(e,t,i,v,d,r){const l=b("cpn-input"),c=b("cpn-autoComplete"),g=b("Form"),h=b("cpn-modal-alert"),n=b("cpn-loading");return _(),f("div",N,[a("div",P,[a("div",G,[a("div",H,[a("div",J,[Q,a("div",W,w(d.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"),1)]),a("div",X,[a("button",{type:"button",class:"button-back",onClick:t[0]||(t[0]=s=>r.back())},[Y,Z,p(" ย้อนกลับ ")])])]),$,m(g,{onSubmit:r.onSubmit,onInvalidSubmit:e.onInvalidSubmit},{default:C(()=>[a("div",tt,[a("div",at,[a("div",et,[it,S(a("div",{class:"image-preview-wrapper",style:V({"background-image":`url(${d.data.previewImage1})`})},null,4),[[z,d.data.previewImage1]]),a("input",{ref:"fileInput1",type:"file",onInput:t[1]||(t[1]=s=>r.pickFile("fileInput1")),accept:"image/png, image/jpg, image/jpeg",style:{display:"none"}},null,544),a("button",{name:"fileInput1",type:"button",onClick:t[2]||(t[2]=s=>r.selectImage("fileInput1")),class:"button-image"},"เลือกรูปภาพ"),st]),a("div",dt,[ot,S(a("div",{class:"image-preview-wrapper",style:V({"background-image":`url(${d.data.previewImage2})`})},null,4),[[z,d.data.previewImage2]]),a("input",{ref:"fileInput2",type:"file",onInput:t[3]||(t[3]=s=>r.pickFile("fileInput2")),accept:"image/png, image/jpg, image/jpeg",style:{display:"none"}},null,544),a("button",{name:"fileInput2",type:"button",onClick:t[4]||(t[4]=s=>r.selectImage("fileInput2")),class:"button-image"},"เลือกรูปภาพ"),nt])]),a("div",rt,[a("div",lt,[ut,m(l,{modelValue:d.data.fname,"onUpdate:modelValue":t[5]||(t[5]=s=>d.data.fname=s),name:"fname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),a("div",pt,[ct,m(l,{modelValue:d.data.lname,"onUpdate:modelValue":t[6]||(t[6]=s=>d.data.lname=s),name:"lname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),a("div",mt,[a("div",gt,[a("div",ht,[p("ชื่อผู้ใช้งาน "),d.edit?I("",!0):(_(),f("span",_t,"*"))]),m(l,{modelValue:d.data.username,"onUpdate:modelValue":t[7]||(t[7]=s=>d.data.username=s),name:"Usern",rules:d.edit?"":"required",disabled:d.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","rules","disabled"])]),a("div",ft,[a("div",vt,[p("รหัสผ่าน "),d.edit?I("",!0):(_(),f("span",yt,"*"))]),m(l,{modelValue:d.data.password,"onUpdate:modelValue":t[8]||(t[8]=s=>d.data.password=s),name:"passw",type:"password",rules:d.edit?"":"required",placeholder:"กรุณาระบุ"},null,8,["modelValue","rules"])])]),a("div",bt,[a("div",wt,[kt,m(l,{modelValue:d.data.email,"onUpdate:modelValue":t[9]||(t[9]=s=>d.data.email=s),name:"email",rules:"required|email",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),St]),a("div",zt,[a("div",qt,[Vt,m(c,{modelValue:d.data.organization_id,"onUpdate:modelValue":t[10]||(t[10]=s=>d.data.organization_id=s),name:"organization",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[11]||(t[11]=s=>r.keyupOrganization(s)),optionSelect:d.data.optionSelect.organization},null,8,["modelValue","optionSelect"])]),a("div",It,[xt,m(c,{modelValue:d.data.department_id,"onUpdate:modelValue":t[12]||(t[12]=s=>d.data.department_id=s),name:"department",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[13]||(t[13]=s=>r.keyupDepartment(s)),optionSelect:d.data.optionSelect.department},null,8,["modelValue","optionSelect"])])]),a("div",Lt,[a("div",Ut,[Ct,m(c,{modelValue:d.data.subministry_id,"onUpdate:modelValue":t[14]||(t[14]=s=>d.data.subministry_id=s),name:"subministry",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[15]||(t[15]=s=>r.keyupSubministry(s)),optionSelect:d.data.optionSelect.subministry},null,8,["modelValue","optionSelect"])]),a("div",jt,[At,m(c,{modelValue:d.data.group_id,"onUpdate:modelValue":t[16]||(t[16]=s=>d.data.group_id=s),name:"group",placeholder:"กรุณาระบุ",rules:"required",onKeyup:t[17]||(t[17]=s=>r.keyupGroup(s)),optionSelect:d.data.optionSelect.group},null,8,["modelValue","optionSelect"])])])]),S(a("div",Dt,[Ft,a("div",Mt,[(_(!0),f(j,null,A(d.data.optionSelect.roles,(s,y)=>(_(),f("div",{key:y},[s.id==1?(_(),f("button",{key:0,type:"button",class:x(["button-admin",s.check?"active":""]),onClick:o=>s.check=!s.check},[a("div",Rt,[s.check?(_(),f("img",Bt)):(_(),f("img",Et)),p(" "+w(s.desc),1)])],10,Tt)):(_(),f("button",{key:1,type:"button",class:x(["button-roles",s.check?"active":""]),onClick:o=>s.check=!s.check},w(s.desc),11,Kt))]))),128))])],512),[[z,d.data.optionSelect.roles.length>0]]),Ot,a("div",Nt,[a("div",Pt,[a("button",{type:"button",class:"button-danger",onClick:t[18]||(t[18]=s=>r.cancelClick())},[Gt,p(" ยกเลิก ")])]),a("div",Ht,[a("button",Jt,[Qt,p(" "+w(d.edit?"ยืนยันแก้ไขผู้ใช้งาน":"ยืนยันสร้างผู้ใช้งาน"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),m(h,{modalAlert:d.modalAlert},null,8,["modalAlert"]),m(n,{show:d.showLoading},null,8,["show"])])}const $t=L(O,[["render",Wt]]);export{$t as default};
