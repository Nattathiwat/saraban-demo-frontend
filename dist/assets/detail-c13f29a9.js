import{_ as E,r as k,o as g,c as f,a as t,b as h,d as O,w,v as V,n as S,j as _,F as T,h as F,i as M,t as b,g as R,k as I}from"./index-1ec97845.js";import{_ as B}from"./ballot-duotone-f2459825.js";import{_ as j}from"./plus-circle-duotone-64bd32fe.js";import{_ as z}from"./trash-alt-duotone-12d94c28.js";import{_ as N,a as P}from"./x-solid-74fa126d.js";const J={name:"record-out-detail",data(){return{iconAngle:!1,modalAlert:{showModal:!1,title:"",message:""},optionSelectDefault:{book_category_id:[]},showLoading:!1,edit:!1,flagSave:1,data:{create_type:"0",creater_id:"",book_category_id:"",book_type_id:"",secret_id:"13",speed_id:"12",booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],subject:"",tag:[],main_docs:[{filename:""}],attachments:[{filename:""}],sendToFile:[{filename:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"12",permission_id:"8",desc:"",regis_date:this.assetsUtils.currentDate(),human_flag:!1,response_id:"",greeting:"",as_of_date:"",history:{hide:!1,data:[],tab:1},FileType:[]},optionSelect:{creater_id:[],book_category_id:[],book_type_id:[],secret_id:[],speed_id:[],process_type_id:[],permission_id:[],sendTo:[]},modalRegiter:{showModal:!1,booking_register_details:[]}}},methods:{historyClick(a){this.showLoading=!0,this.axios.get(`/booking-note/history/${this.$route.params.id}`,{params:{book_type:4}}).then(e=>{this.showLoading=!1,e.data.data.filter(l=>(l.bookingRemarks.filter(i=>(i.signature_img=i.signature_img?i.signature_img:new URL("/assets/signature_img-526e80c1.jpg",self.location).href,i.link=i.filepath?this.backendport+"/"+i.filepath:"",i)),l)),this.data.history.data=e.data.data}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},delete_click(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"บันทึกส่งออก ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.axios.delete(`/booking-note/${a.$route.params.id}`).then(()=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(e=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}}},keyup_send_to(a){this.optionSelect.sendTo=[],this.axios.get("master-data/department-user/booking-note-out",{params:{keyword:a.target.value,department_id:localStorage.getItem("department_id"),subministry_id:parseInt(localStorage.getItem("subministry_id"))}}).then(e=>{e.data.data&&(e.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.sendTo=e.data.data)})},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(a,e){a.flag=="edit"?a.flag="delete":this.data.booking_refers.splice(e,1),this.data.booking_refers.length-this.data.booking_refers.filter(l=>l.flag=="delete").length<1&&this.add_booking_refers()},add_attachments_change(a){for(var e=0;e<document.querySelector(`[name="${a}"]`).files.length;e++){let l=document.querySelector(`[name="${a}"]`).files[e];if(this.data.FileType.indexOf(l.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;let i={filename:l.name,type:l.type,link:URL.createObjectURL(l),size:(l.size/1024/1024).toFixed(2)+" MB",filesize:l.size.toString(),file:l,flag:"add"};this.data.attachments.push(i)}document.querySelector(`[name="${a}"]`).value=null},delete_main_doc(a,e){a.flag=="edit"?a.flag="delete":this.data.main_docs.splice(e,1),this.data.main_docs.length-this.data.main_docs.filter(l=>l.flag=="delete").length<1&&this.data.main_docs.push({filename:"",flag:"add"})},delete_attachments(a,e){a.flag=="edit"?a.flag="delete":this.data.attachments.splice(e,1),this.data.attachments.length-this.data.attachments.filter(l=>l.flag=="delete").length<1&&this.data.attachments.push({filename:"",flag:"add"})},delete_main_docs(a,e){a.flag=="edit"?a.flag="delete":this.data.main_docs.splice(e,1)},delete_order(a,e){a.flag=="edit"?a.flag="delete":this.data.order.splice(e,1)},add_booking_follows(){this.data.sendTo.filter(a=>{var e;if(!this.data.booking_follows.some(l=>l.department_id===a.value&&l.flag!="delete")){let l={department_id:parseInt(a.value),department_name:a.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:a.human_flag,response_id:parseInt(a.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(((e=this.data.sendToFile)==null?void 0:e.filename)||""))},response_type:a.type};this.optionSelect.process_type_id.find(i=>{i.value==this.data.process_type_id&&(l.process_type_name=i.name)}),this.optionSelect.permission_id.find(i=>{i.value==this.data.permission_id&&(l.permission_name=i.name)}),this.data.booking_follows.push(l)}})},delete_booking_follows(a,e){a.flag=="edit"?a.flag="delete":this.data.booking_follows.splice(e,1)},booking_refers_click(a){a.receive_document_number?(this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:a.receive_document_number}}).then(e=>{this.showLoading=!1,e.data.data.length>0?(a.book_refer_id=e.data.data[0].id,a.original_refer_id=e.data.data[0].id,a.book_type=e.data.data[0].book_type,a.desc=e.data.data[0].desc,a.receive_date=e.data.data[0].receive_date):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(e=>{a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="")},download_file(a){a.filename&&a.link&&this.axios({method:"get",url:a.link,baseURL:"",responseType:"blob"}).then(e=>{const l=new Blob([e.data],{type:this.assetsUtils.getTypeFile(a.filename)});window.open(URL.createObjectURL(l))})},change_signer_id(a){this.data.booking_register_details[a].booking_registers.filter(e=>{e.signer_id=this.data.booking_register_details[a].signer_id})},change_signature(a){this.data.booking_register_details[a].booking_registers.filter(e=>{e.is_signed=this.data.booking_register_details[a].is_signed})},upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_set_change1(a,e,l){for(var i=0;i<document.querySelector(`[name="${a}"]`).files.length;i++){let s=document.querySelector(`[name="${a}"]`).files[i];if(this.data.FileType.indexOf(s.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(l=="sendTo"){let n={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data.sendToFile=n}}},file_set_change2(a,e,l){for(var i=0;i<document.querySelector(`[name="${a}"]`).files.length;i++){let s=document.querySelector(`[name="${a}"]`).files[i];if(this.data.FileType.indexOf(s.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;l=="main_docs"?s.type=="application/pdf"&&(e.filename=s.name,e.type=s.type,e.link=URL.createObjectURL(s),e.size=(s.size/1024/1024).toFixed(2)+" MB",e.filesize=s.size.toString(),e.file=s,document.querySelector(`[name="${a}"]`).value=null):(e.filename=s.name,e.type=s.type,e.link=URL.createObjectURL(s),e.size=(s.size/1024/1024).toFixed(2)+" MB",e.filesize=s.size.toString(),e.file=s,document.querySelector(`[name="${a}"]`).value=null)}},file_attachment_change(a,e){for(var l=0;l<document.querySelector(`[name="${a}"]`).files.length;l++){let i=document.querySelector(`[name="${a}"]`).files[l];if(this.data.FileType.indexOf(i.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;let s={filename:i.name,type:i.type,link:URL.createObjectURL(i),size:(i.size/1024/1024).toFixed(2)+" MB",file:i};this.data.attachments[e]={...this.data.attachments[e],...s},document.querySelector(`[name="${a}"]`).value=null}},back(){this.$router.push({name:"subministry-work.record-out",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":this.flagSave==2?"บันทึกและส่งต่อ":this.flagSave==3?"ออกเลขบันทึกภายใน":"บันทึก"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){a.flagSave==3?(a.showLoading=!0,a.axios.post("/booking-note/generate-number",{department_id:parseInt(localStorage.getItem("department_id")),creater_id:a.data.creater_id?parseInt(a.data.creater_id):parseInt(localStorage.getItem("user_id")),book_category_id:parseInt(a.data.book_category_id),year:a.data.as_of_date.split("/")[2]-543}).then(e=>{a.data.booking_note_number=e.data.data.out_document_number,a.upload_file_all()}).catch(e=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})):(a.showLoading=!0,a.upload_file_all())}}},upload_file_all(){let a=this.assetsUtils.currentDate(),e=[],l=[];this.data.attachments.filter(i=>{if(i.file){let s=new FormData;s.append("file",i.file),s.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),e.push(this.axios.post("/upload/single",s,{headers:{"Content-Type":"multipart/form-data"}}))}}),e.length>0?this.axios.all([...e]).then(this.axios.spread((...i)=>{i.filter((s,n)=>{l.push({...this.data.attachments.filter(u=>u.file)[n],...s.data.data,filepath:s.data.data.path})}),e.length==l.length&&this.upload_file_all2(l)})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}):this.upload_file_all2(l)},upload_file_all2(a){let e=this.assetsUtils.currentDate(),l=[],i=[];this.data.main_docs.filter(s=>{if(s.file){let n=new FormData;n.append("file",s.file),n.append("dst",`${e.split("/")[0]+"-"+e.split("/")[1]+"-"+e.split("/")[2]}`),l.push(this.axios.post("/upload/single",n,{headers:{"Content-Type":"multipart/form-data"}}))}}),l.length>0?this.axios.all([...l]).then(this.axios.spread((...s)=>{s.filter((n,u)=>{i.push({...this.data.main_docs.filter(p=>p.file)[u],...n.data.data,filepath:n.data.data.path})}),l.length==i.length&&this.upload_file_all3(i,a)})).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}}):this.upload_file_all3(i,a)},upload_file_all3(a,e){var i;let l=this.assetsUtils.currentDate();if((i=this.data.sendToFile)!=null&&i.filename){let s=new FormData;s.append("file",this.data.sendToFile.file),s.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),this.axios.post("/upload/single",s,{headers:{"Content-Type":"multipart/form-data"}}).then(n=>{this.data.attach_filename=n.data.data.filename,this.data.attach_filepath=n.data.data.path,this.upload_file_all4(a,e)}).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}else this.upload_file_all4(a,e)},upload_file_all4(a,e){let l=this.assetsUtils.currentDate(),i=[],s=[];this.data.booking_follows.filter(n=>{var u;if((u=n.sendToFile)!=null&&u.filename){let p=new FormData;p.append("file",n.sendToFile.file),p.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),i.push(this.axios.post("/upload/single",p,{headers:{"Content-Type":"multipart/form-data"}}))}}),i.length>0?this.axios.all([...i]).then(this.axios.spread((...n)=>{n.filter((u,p)=>{this.data.booking_follows[p].attach_filepath=u.data.data.path,this.data.booking_follows[p].attach_filename=u.data.data.filename,s.push({...this.data.booking_follows[p],...u.data.data,filepath:u.data.data.path})}),i.length==s.length&&this.call_api_save(a,e)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}):this.call_api_save(a,e)},call_api_save(a,e){let l=this,i="";this.data.tag.filter(n=>{i+=n.name+","}),i=i.slice(0,-1),this.data.sendTo.filter(n=>{if(!this.data.booking_follows.some(u=>u.department_id===n.value&&u.flag!="delete")){let u={department_id:parseInt(n.value),department_name:n.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:n.human_flag,response_id:parseInt(n.value),response_type:n.type,attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename,sendToFile:{filename:this.data.attach_filename}};this.optionSelect.process_type_id.find(p=>{p.value==this.data.process_type_id&&(u.process_type_name=p.name)}),this.optionSelect.permission_id.find(p=>{p.value==this.data.permission_id&&(u.permission_name=p.name)}),this.data.booking_follows.push(u)}}),this.data.main_docs.filter(n=>{n.flag=="delete"&&a.push(n)}),this.data.attachments.filter(n=>{n.flag=="delete"&&e.push(n)});let s={create_type:parseInt(this.data.create_type),creater_id:this.data.creater_id?parseInt(this.data.creater_id):parseInt(localStorage.getItem("user_id")),book_category_id:parseInt(this.data.book_category_id),book_type_id:parseInt(this.data.book_type_id),secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),subject:this.data.subject,user_id:parseInt(localStorage.getItem("user_id")),tag:i,attachments:e,main_docs:a,booking_refers:this.data.booking_refers.filter(n=>n.book_refer_id),booking_follows:this.data.booking_follows,flag:this.flagSave==1?"draft":this.flagSave==3||this.flagSave==4?"update":"",greeting:this.data.greeting,desc:this.data.desc,regis_date:this.assetsUtils.currentDate(),as_of_date:this.data.as_of_date,is_draft:this.flagSave==1||this.flagSave==3?1:0,booking_note_number:this.data.booking_note_number};this.showLoading=!0,this.axios[this.edit?"put":"post"](`/booking-note${this.edit?"/"+this.$route.params.id:""}`,s).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:this.flagSave==1?"ทำการบันทึกแบบร่างสำเร็จแล้ว":this.flagSave==3?"ทำการออกเลขบันทึกภายในสำเร็จแล้ว":this.flagSave==4?"ทำการบันทึกสำเร็จแล้ว":"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})},api_detail(){this.showLoading=!0,this.axios.get(`/booking-note/${this.$route.params.id}`).then(a=>{var e,l;this.showLoading=!1,this.data={...this.data,...JSON.parse(JSON.stringify(a.data.data))},this.data.regis_date=a.data.data.created_at,this.data.tag=[],(e=a.data.data.tag)==null||e.split(",").filter(i=>{i&&this.data.tag.push({value:"",name:i})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],a.data.data.booking_refers.filter(i=>{i.flag="edit",this.axios.get(`/master-data/book-refer/${i.book_type}/${i.id}`).then(s=>{this.data.booking_refers.push({...s.data.data,...i})}).catch(s=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}),this.data.attachments.filter(i=>(i.flag="edit",i.link=i.filepath?this.backendport+"/"+i.filepath:"",i)),this.data.main_docs.filter(i=>(i.flag="edit",i.link=i.filepath?this.backendport+"/"+i.filepath:"",i)),this.data.booking_follows=[],(((l=a.data.data.booking_refers)==null?void 0:l.length)<1||!a.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}]),(this.data.attachments.length<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(this.data.main_docs.length<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}])}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},api_master(){this.showLoading=!0;const a=this.axios.get("/master-data/book-type-note"),e=this.axios.get("/master-data/speed"),l=this.axios.get("/master-data/secret"),i=this.axios.get("/master-data/process-type"),s=this.axios.get("/master-data/permission-type"),n=this.axios.get("/user"),u=this.axios.get("/user"),p=this.axios.get("/master-data/book-category",{params:{book_type:1}}),U=this.axios.get("master-data/department-user/booking-note-out",{params:{subministry_id:parseInt(localStorage.getItem("subministry_id"))}}),D=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([a,e,l,i,s,n,u,p,U,D]).then(this.axios.spread((...y)=>{this.showLoading=!1;const C=y[0],x=y[1],q=y[2],L=y[3],A=y[4],r=y[5],v=y[6],o=y[7],c=y[8],m=y[9];C.data.data.filter(d=>(d.value=d.id,d.name=d.name,d)),x.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),q.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),L.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),A.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),r.data.data.filter(d=>(d.value=d.id,d.name=d.fname+" "+d.lname,d)),v.data.data.filter(d=>(d.value=d.id,d.name=d.fname+" "+d.lname,d)),o.data.data.filter(d=>(d.value=d.id,d.name=d.name,d)),c.data.data.filter(d=>(d.value=d.id,d.name=d.department_full_name,d)),this.data.FileType=[],m.data.data.filter(d=>{d.active_flag==1&&this.data.FileType.push(d.content_type)}),this.optionSelect.book_type_id=C.data.data,this.optionSelect.speed_id=x.data.data,this.optionSelect.secret_id=q.data.data,this.optionSelect.process_type_id=L.data.data,this.optionSelect.permission_id=A.data.data,this.optionSelect.creater_id=r.data.data,this.optionSelectDefault.signer_id=v.data.data,this.optionSelectDefault.book_category_id=o.data.data,this.optionSelectDefault.department_dest_id=c.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(y=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:y.response.data.message}})},keyup_record_type(a){this.optionSelect.sendTo=[],this.axios.get("/master-data/book-type-note",{params:{keyword:a.target.value}}).then(e=>{e.data.data&&(e.data.data.filter(l=>(l.value=l.id,l.name=l.name,l)),this.optionSelect.book_type_id=e.data.data)})}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},K={class:"booking-out-detail"},G={class:"group-overflow"},H={class:"detail"},Q={class:"group-head"},W={class:"group-first"},X=t("img",{src:B,alt:"",class:"icon-size"},null,-1),Y={class:"name"},Z=t("div",{class:"group-image"}," ออกเลขบันทึกภายใน ",-1),$=[Z],ee=t("div",{class:"line"},null,-1),te={class:"group-detail"},se={class:"group-input"},ae=t("div",{class:"name"},"เจ้าของหนังสือ",-1),oe={class:"d-flex"},ie={class:"group-input mb-0"},le=t("div",{class:"name"},[_("ชื่อ - นามสกุล "),t("span",{class:"required"},"*")],-1),ne={class:"group-between"},de={class:"group-input left"},re=t("div",{class:"name"},[_("ทะเบียนบันทึกข้อความ"),t("span",{class:"required"},"*")],-1),ce={class:"group-input"},_e=t("div",{class:"name"},[_("ลงวันที่"),t("span",{class:"required"},"*")],-1),pe={class:"group-between"},ue={class:"group-input left"},he=t("div",{class:"name"},[_("ชนิดของบันทึกข้อความ "),t("span",{class:"required"},"*")],-1),me={class:"group-input left"},ge=t("div",{class:"name"},[_("ชั้นความลับ "),t("span",{class:"required"},"*")],-1),fe={class:"group-input"},be=t("div",{class:"name"},[_("ความเร่งด่วน "),t("span",{class:"required"},"*")],-1),ye={class:"group-between"},ve={class:"group-input"},ke=t("div",{class:"name"},[_("ชื่อเรื่อง "),t("span",{class:"required"},"*")],-1),Se={class:"group-between"},we={class:"group-input"},Ve=t("div",{class:"name"},"เรียน",-1),Ce={class:"group-between"},Te={class:"group-input"},Fe=t("div",{class:"name"},"รายละเอียด",-1),xe={class:"group-between"},Ue={class:"group-input"},qe=t("div",{class:"name"},"Tag สำหรับค้นหา",-1),Le={class:"group-input d-flex align-items-center"},Ae=t("div",{class:"name"},"อ้างอิงถึง",-1),Me=t("div",{class:"group-image"},[t("img",{src:j,alt:"",class:"icon-plus"}),_(" เพิ่มเอกสารอ้างอิง ")],-1),Ie=[Me],ze={class:"group-input left"},De={class:"group-input left"},Re={class:"group-input d-flex"},je=["onClick"],Ee=t("img",{src:z,alt:"",class:"image-trash pointer"},null,-1),Oe=[Ee],Be=t("div",{class:"line"},null,-1),Ne={class:"group-detail"},Pe={class:"group-between"},Je={class:"group-input left"},Ke=t("div",{class:"name"},"บันทึกต้นเรื่อง",-1),Ge={class:"group-input-file"},He=["disabled","onClick"],Qe=["onClick"],We=["onChange","name"],Xe=["onClick"],Ye=t("i",{class:"bi bi-eye icon-eye"},null,-1),Ze=[Ye],$e=["disabled","onClick"],et=t("img",{src:z,alt:"",class:"image-trash"},null,-1),tt=[et],st={class:"group-input"},at={class:"group-input d-flex align-items-center"},ot=t("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),it=t("div",{class:"group-image"},[t("img",{src:j,alt:"",class:"icon-plus"}),_(" เพิ่มไฟล์ ")],-1),lt=[it],nt={class:"group-input-file"},dt=["disabled","onClick"],rt=["onClick"],ct=["onChange","name"],_t=["onClick"],pt=t("i",{class:"bi bi-eye icon-eye"},null,-1),ut=[pt],ht=["disabled","onClick"],mt=t("img",{src:z,alt:"",class:"image-trash"},null,-1),gt=[mt],ft=t("div",{class:"line"},null,-1),bt={class:"send-to"},yt={class:"group-input"},vt=t("div",{class:"name"},"ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) ",-1),kt={class:"group-input left"},St={class:"name d-flex justify-content-between"},wt=t("div",null,"ความเห็น / คำสั่ง",-1),Vt=t("img",{src:N,alt:"",class:"icon-paperclip"},null,-1),Ct=t("img",{src:P,alt:"",class:"image-x"},null,-1),Tt={class:"group-between"},Ft={class:"group-input left"},xt=t("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Ut={class:"group-input"},qt=t("div",{class:"name"},"การมองเห็น",-1),Lt={class:"d-flex align-items-center justify-content-between"},At=t("img",{src:R,alt:"times-circle",class:"icon-times-circle"},null,-1),Mt=t("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),It={key:0,class:"line mt-3"},zt={class:"d-flex justify-content-between"},Dt={class:"title"},Rt=["onClick"],jt={class:"d-flex ms-2 mt-2"},Et={class:"name"},Ot={class:"name ms-5"},Bt={class:"name ms-5"},Nt={class:"name ms-2 mt-1"},Pt={class:"name ms-2 mt-1"},Jt=t("div",{class:"line mt-4"},null,-1),Kt={class:"group-footer"},Gt={class:"footer-left d-flex"},Ht=t("img",{src:R,alt:"times-circle",class:"icon-times-circle"},null,-1),Qt={class:"footer-right"},Wt=t("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),Xt=t("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),Yt=["disabled"],Zt=t("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),$t={key:0,class:"detail-history"},es={class:"history"},ts=t("div",{class:"group-left"},[t("i",{class:"bi bi-clock icon-size"}),t("div",{class:"name"},"ประวัติการแก้ไข")],-1),ss={class:"group-right"},as={class:"bi bi-chevron-right icon-angle"},os={class:"bi bi-chevron-down icon-angle"},is={class:"line"},ls={class:"content"},ns={class:"content-head"},ds=t("i",{class:"bi bi-border-all icon-size"},null,-1),rs=t("i",{class:"bi bi-chat-left icon-size"},null,-1),cs=t("i",{class:"bi bi-pencil-square icon-size"},null,-1),_s={class:"detail-head"},ps={class:"number"},us={class:"create"},hs=t("i",{class:"bi bi-person icon-size"},null,-1),ms={class:"date"},gs={class:"time"},fs=t("i",{class:"bi bi-clock icon-size"},null,-1),bs=["onClick"],ys={key:0,class:"detail-signager"},vs=["src"],ks={key:0,class:"line"},Ss={key:1,class:"content-detail first end"},ws=t("div",{class:"detail-head"},[t("div",{class:"topic"},"ไม่มีข้อมูล")],-1),Vs=[ws];function Cs(a,e,l,i,s,n){const u=k("cpn-radio"),p=k("cpn-select"),U=k("cpn-datepicker"),D=k("cpn-autoComplete"),y=k("cpn-textArea"),C=k("cpn-input"),x=k("cpn-input-tags"),q=k("Form"),L=k("cpn-modal-alert"),A=k("cpn-loading");return g(),f("div",K,[t("div",G,[t("div",H,[h(q,{onSubmit:n.on_submit,onInvalidSubmit:a.onInvalidSubmit},{default:O(()=>{var r,v;return[t("div",Q,[t("div",W,[X,t("div",Y,[_(b(s.edit?"แก้ไขบันทึกส่งออก":"สร้างบันทึกส่งออก")+" ",1),t("label",null,b(s.data.booking_note_number),1)])]),w(t("button",{type:"submit",class:"add-booking-out",onClick:e[0]||(e[0]=o=>s.flagSave=3)},$,512),[[V,!s.data.booking_note_number]])]),ee,t("div",te,[t("div",se,[ae,t("div",oe,[h(u,{modelValue:s.data.create_type,"onUpdate:modelValue":e[1]||(e[1]=o=>s.data.create_type=o),name:"my1",class:"",style:{"min-width":"120px"},value:"0",label:"สร้างเอง",onChange:e[2]||(e[2]=o=>s.data.creater_id="")},null,8,["modelValue"]),h(u,{modelValue:s.data.create_type,"onUpdate:modelValue":e[3]||(e[3]=o=>s.data.create_type=o),name:"my2",class:"ms-5 me-5",style:{"min-width":"120px"},value:"1",label:"สร้างแทน",onChange:e[4]||(e[4]=o=>s.data.creater_id="")},null,8,["modelValue"]),w(t("div",ie,[le,h(p,{modelValue:s.data.creater_id,"onUpdate:modelValue":e[5]||(e[5]=o=>s.data.creater_id=o),name:"creater_id",optionSelect:s.optionSelect.creater_id,rules:s.data.create_type==1?"required":"",placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect","rules"])],512),[[V,s.data.create_type==1]])])]),t("div",ne,[t("div",de,[re,h(p,{modelValue:s.data.book_category_id,"onUpdate:modelValue":e[6]||(e[6]=o=>s.data.book_category_id=o),name:"book_category_id",rules:"required",optionSelect:s.optionSelectDefault.book_category_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),t("div",ce,[_e,h(U,{modelValue:s.data.as_of_date,"onUpdate:modelValue":e[7]||(e[7]=o=>s.data.as_of_date=o),name:"as_of_date",rules:"required",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])]),t("div",pe,[t("div",ue,[he,h(D,{modelValue:s.data.book_type_id,"onUpdate:modelValue":e[8]||(e[8]=o=>s.data.book_type_id=o),name:"book_type_id",rules:"required",optionSelect:s.optionSelect.book_type_id,onKeyup:n.keyup_record_type,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect","onKeyup"])]),t("div",me,[ge,h(p,{modelValue:s.data.secret_id,"onUpdate:modelValue":e[9]||(e[9]=o=>s.data.secret_id=o),name:"secret_id",rules:"required",optionSelect:s.optionSelect.secret_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),t("div",fe,[be,h(p,{modelValue:s.data.speed_id,"onUpdate:modelValue":e[10]||(e[10]=o=>s.data.speed_id=o),name:"speed_id",rules:"required",optionSelect:s.optionSelect.speed_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),t("div",ye,[t("div",ve,[ke,h(y,{modelValue:s.data.subject,"onUpdate:modelValue":e[11]||(e[11]=o=>s.data.subject=o),name:"subject",rules:"required",rows:"1"},null,8,["modelValue"])])]),t("div",Se,[t("div",we,[Ve,h(C,{modelValue:s.data.greeting,"onUpdate:modelValue":e[12]||(e[12]=o=>s.data.greeting=o),name:"greeting",type:"text"},null,8,["modelValue"])])]),t("div",Ce,[t("div",Te,[Fe,h(y,{modelValue:s.data.desc,"onUpdate:modelValue":e[13]||(e[13]=o=>s.data.desc=o),name:"record_out_description",rows:"1"},null,8,["modelValue"])])]),t("div",xe,[t("div",Ue,[qe,h(x,{modelValue:s.data.tag,"onUpdate:modelValue":e[14]||(e[14]=o=>s.data.tag=o),name:"tag",placeholder:"Enter a new tag"},null,8,["modelValue"])])]),t("div",Le,[Ae,t("button",{type:"button",class:"add-booking-out",onClick:e[15]||(e[15]=o=>n.add_booking_refers())},Ie)]),(g(!0),f(T,null,F(s.data.booking_refers.filter(o=>o.flag!="delete"),(o,c)=>(g(),f("div",{class:"group-between",key:c},[t("div",ze,[h(C,{modelValue:o.receive_document_number,"onUpdate:modelValue":m=>o.receive_document_number=m,name:`receive_document_number${c}`,type:"text",searchFlag:!0,onSearchClick:m=>n.booking_refers_click(o),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),t("div",De,[h(C,{modelValue:o.desc,"onUpdate:modelValue":m=>o.desc=m,name:`nameRefers${c}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),t("div",Re,[h(U,{modelValue:o.receive_date,"onUpdate:modelValue":m=>o.receive_date=m,name:`dateRefers${c}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),t("button",{type:"button",onClick:m=>n.delete_booking_refers(o,c),class:"button-delete ms-3"},Oe,8,je)])]))),128))]),Be,t("div",Ne,[t("div",Pe,[t("div",Je,[Ke,(g(!0),f(T,null,F(s.data.main_docs.filter(o=>o.flag!="delete"),(o,c)=>(g(),f("div",{class:"d-flex mb-3",key:c},[t("div",Ge,[t("button",{type:"button",disabled:s.data.is_disable,class:"button-file",onClick:m=>n.upload_file(`main_docs${c}`)},[t("span",{class:S(o.filename?"":"no-data")},b(o.filename?o.filename:"บันทึกต้นเรื่อง"),3)],8,He),t("div",{class:S(s.data.is_disable?"text":"text pointer"),onClick:m=>s.data.is_disable?"":n.upload_file(`main_docs${c}`)},"แนบเอกสาร",10,Qe),t("input",{type:"file",onChange:m=>n.file_set_change2(`main_docs${c}`,o,"main_docs"),name:`main_docs${c}`,style:{display:"none"},accept:"application/pdf"},null,40,We)]),t("button",{type:"button",onClick:m=>n.download_file(o),class:"button-eye"},Ze,8,Xe),t("button",{type:"button",disabled:s.data.is_disable,class:"del-department-3",onClick:m=>n.delete_main_doc(o,c)},tt,8,$e)]))),128))]),t("div",st,[t("div",at,[ot,t("button",{type:"button",class:"add-booking-receive",onClick:e[16]||(e[16]=o=>n.upload_file("addAttachments"))},lt),t("input",{multiple:"",type:"file",onChange:e[17]||(e[17]=o=>n.add_attachments_change("addAttachments")),name:"addAttachments",style:{display:"none"}},null,32)]),(g(!0),f(T,null,F(s.data.attachments.filter(o=>o.flag!="delete"),(o,c)=>(g(),f("div",{class:"d-flex mb-3",key:c},[t("div",nt,[t("button",{type:"button",disabled:s.data.is_disable,class:"button-file",onClick:m=>n.upload_file(`attachments${c}`)},[t("span",{class:S(o.filename?"":"no-data")},b(o.filename?o.filename:"สิ่งที่ส่งมาด้วย"),3)],8,dt),t("div",{class:S(s.data.is_disable?"text":"text pointer"),onClick:m=>s.data.is_disable?"":n.upload_file(`attachments${c}`)},"แนบเอกสาร",10,rt),t("input",{type:"file",onChange:m=>n.file_set_change2(`attachments${c}`,o,"attachments"),name:`attachments${c}`,style:{display:"none"}},null,40,ct)]),t("button",{type:"button",onClick:m=>n.download_file(o),class:"button-eye"},ut,8,_t),t("button",{type:"button",disabled:s.data.is_disable,class:"del-department-3",onClick:m=>n.delete_attachments(o,c)},gt,8,ht)]))),128))])])]),ft,t("div",bt,[t("div",yt,[vt,h(x,{modelValue:s.data.sendTo,"onUpdate:modelValue":e[18]||(e[18]=o=>s.data.sendTo=o),flagSearch:!0,optionSelect:s.optionSelect.sendTo,onKeyup:n.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),t("div",kt,[t("div",St,[wt,t("div",null,[t("input",{type:"file",onChange:e[19]||(e[19]=o=>n.file_set_change1("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(r=s.data.sendToFile)!=null&&r.filename?(g(),f("div",{key:1,class:"del-comment pointer",onClick:e[21]||(e[21]=o=>s.data.sendToFile.filename="")},[_(b((v=s.data.sendToFile)==null?void 0:v.filename)+" ",1),Ct])):(g(),f("button",{key:0,type:"button",class:"button-con pointer",onClick:e[20]||(e[20]=o=>n.upload_file("sendTo"))},[Vt,_(" แนบเอกสาร ")]))])]),h(y,{modelValue:s.data.comment,"onUpdate:modelValue":e[22]||(e[22]=o=>s.data.comment=o),name:"comment",rows:"3"},null,8,["modelValue"])]),t("div",Tt,[t("div",Ft,[xt,h(p,{modelValue:s.data.process_type_id,"onUpdate:modelValue":e[23]||(e[23]=o=>s.data.process_type_id=o),name:"process_type_id",optionSelect:s.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),t("div",Ut,[qt,h(p,{modelValue:s.data.permission_id,"onUpdate:modelValue":e[24]||(e[24]=o=>s.data.permission_id=o),name:"permission_id",optionSelect:s.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),t("div",Lt,[t("div",null,[t("button",{type:"button",class:"button button-danger",onClick:e[25]||(e[25]=o=>(s.data.sendTo=[],s.data.comment="",s.data.process_type_id="",s.data.permission_id=""))},[At,_(" ยกเลิก ")])]),t("div",null,[t("button",{type:"button",onClick:e[26]||(e[26]=o=>n.add_booking_follows()),class:"button button-success"},[Mt,_(" เพิ่มการส่งต่อ ")])])]),s.data.booking_follows.length>0?(g(),f("div",It)):M("",!0),(g(!0),f(T,null,F(s.data.booking_follows.filter(o=>o.flag!="delete"),(o,c)=>(g(),f("div",{class:"group-add",key:c},[t("div",zt,[t("div",Dt,"#"+b(c+1),1),t("img",{onClick:m=>n.delete_booking_follows(o,c),src:z,alt:"",class:"image-trash pointer"},null,8,Rt)]),t("div",jt,[t("div",Et,"ส่งต่อ : "+b((o==null?void 0:o.department_name)||"-"),1),t("div",Ot,"รูปแบบการดำเนินการ : "+b((o==null?void 0:o.process_type_name)||"-"),1),t("div",Bt,"การมองเห็น : "+b((o==null?void 0:o.permission_name)||"-"),1)]),t("div",Nt,"ความเห็น / คำสั่ง : "+b((o==null?void 0:o.comment)||"-"),1),t("div",Pt,"เอกสารแนบ : "+b((o==null?void 0:o.sendToFile.filename)||"-"),1)]))),128))]),Jt,t("div",Kt,[t("div",Gt,[t("button",{type:"button",class:"button-danger",onClick:e[27]||(e[27]=o=>n.back())},[Ht,_(" ปิด ")])]),t("div",Qt,[w(t("button",{type:"submit",class:"button-success button-save",onClick:e[28]||(e[28]=o=>s.flagSave=4)},[Wt,_(" บันทึก ")],512),[[V,s.edit]]),w(t("button",{type:"submit",class:"button-primary",onClick:e[29]||(e[29]=o=>s.flagSave=1)},[Xt,_(" บันทึกแบบร่าง ")],512),[[V,!s.edit]]),t("button",{type:"submit",class:"button-success",onClick:e[30]||(e[30]=o=>s.flagSave=2),disabled:s.data.sendTo.length<1},[Zt,_(" บันทึกและส่งต่อ ")],8,Yt)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])]),a.$route.params.id?(g(),f("div",$t,[t("div",es,[t("div",{class:"header pointer",onClick:e[31]||(e[31]=r=>(s.data.history.hide=!s.data.history.hide,n.historyClick(s.data.history.tab)))},[ts,t("div",ss,[w(t("i",as,null,512),[[V,!s.data.history.hide]]),w(t("i",os,null,512),[[V,s.data.history.hide]])])]),w(t("div",is,null,512),[[V,s.data.history.hide]]),w(t("div",ls,[t("div",ns,[t("div",{class:S(["pointer",s.data.history.tab==1?"active":""]),onClick:e[32]||(e[32]=r=>(s.data.history.tab=1,n.historyClick(1)))},[ds,_("ทั้งหมด")],2),t("div",{class:S(["pointer",s.data.history.tab==2?"active":""]),onClick:e[33]||(e[33]=r=>(s.data.history.tab=2,n.historyClick(2)))},[rs,_("ความเห็นคำสั่ง")],2),t("div",{class:S(["pointer",s.data.history.tab==3?"active":""]),onClick:e[34]||(e[34]=r=>(s.data.history.tab=3,n.historyClick(3)))},[cs,_("แก้ไขข้อมูล")],2)]),s.data.history.data.filter(r=>s.data.history.tab==2?r.type==2:s.data.history.tab==3?r.type==0||r.type==1:r).length>0?(g(!0),f(T,{key:0},F(s.data.history.data.filter(r=>s.data.history.tab==2?r.type==2:s.data.history.tab==3?r.type==0||r.type==1:r),(r,v)=>(g(),f("div",{class:S(["content-detail",v==0?"first":v==s.data.history.data.length-1?"end":""]),key:v},[t("div",_s,[t("div",ps,"#"+b(s.data.history.data.filter(o=>s.data.history.tab==2?o.type==2:s.data.history.tab==3?o.type==0||o.type==1:o).length-v),1),t("div",{class:S(["topic",r.bookactionname=="ความเห็นคำสั่ง"?"blue":r.bookactionname=="แก้ไขหนังสือ"?"yellow":"green"])},[t("i",{class:S(["bi icon-size",r.bookactionname=="ความเห็นคำสั่ง"?"bi-chat-left":r.bookactionname=="แก้ไขหนังสือ"?"bi-pencil-square":"bi-plus-lg"])},null,2),_(" "+b(r.bookactionname),1)],2),t("div",us,[hs,_(" โดย "+b(r.updateBy)+" / "+b(r.subName),1)]),t("div",ms," วันที่ "+b(r.createDate),1),t("div",gs,[fs,_(" "+b(r.createTime),1)])]),(g(!0),f(T,null,F(r.bookingRemarks,(o,c)=>(g(),f("ul",{class:"detail-list",key:c},[w(t("button",{class:"button-file",onClick:m=>n.download_file({filename:o.filepath.split("/").pop(),link:o.link})},b(o.filepath.split("/").pop()),9,bs),[[V,o.filepath]]),t("li",null,[_(b(o.remark)+" "+b(o.comment)+" ",1),o.signature_img&&r.bookactionname=="ความเห็นคำสั่ง"?(g(),f("div",ys,[t("img",{src:o.signature_img,alt:"",class:"image-size"},null,8,vs)])):M("",!0)])]))),128)),v!=s.data.history.data.length-1?(g(),f("div",ks)):M("",!0)],2))),128)):(g(),f("div",Ss,Vs))],512),[[V,s.data.history.hide]])])])):M("",!0)]),h(L,{modalAlert:s.modalAlert},null,8,["modalAlert"]),h(A,{show:s.showLoading},null,8,["show"])])}const Ls=E(J,[["render",Cs]]);export{Ls as default};
