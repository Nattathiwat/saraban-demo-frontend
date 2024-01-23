import{_ as E,r as w,o as m,c as f,a as e,b as h,d as O,w as v,v as k,n as V,j as _,F as T,h as F,i as M,t as b,g as R,k as I}from"./index-7aee6bd7.js";import{_ as B}from"./ballot-duotone-f2459825.js";import{_ as j}from"./plus-circle-duotone-64bd32fe.js";import{_ as z}from"./trash-alt-duotone-12d94c28.js";import{_ as N,a as P}from"./x-solid-74fa126d.js";const J={name:"record-out-detail",data(){return{iconAngle:!1,modalAlert:{showModal:!1,title:"",message:""},optionSelectDefault:{book_category_id:[]},showLoading:!1,edit:!1,flagSave:1,data:{create_type:"0",creater_id:"",book_category_id:"",book_type_id:"",secret_id:"13",speed_id:"12",booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],subject:"",tag:[],main_docs:[{filename:""}],attachments:[{filename:""}],sendToFile:[{filename:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"12",permission_id:"8",desc:"",regis_date:this.assetsUtils.currentDate(),human_flag:!1,response_id:"",greeting:"",as_of_date:"",history:{hide:!1,data:[],tab:1},FileType:[]},optionSelect:{creater_id:[],book_category_id:[],book_type_id:[],secret_id:[],speed_id:[],process_type_id:[],permission_id:[],sendTo:[]},modalRegiter:{showModal:!1,booking_register_details:[]}}},methods:{historyClick(a){this.showLoading=!0,this.axios.get(`/booking-note/history/${this.$route.params.id}`,{params:{book_type:4}}).then(t=>{this.showLoading=!1,t.data.data.filter(l=>(l.bookingRemarks.filter(i=>(i.signature_img=i.signature_img?i.signature_img:new URL("/assets/signature_img-526e80c1.jpg",self.location).href,i.link=i.filepath?this.backendport+"/"+i.filepath:"",i)),l)),this.data.history.data=t.data.data}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})},delete_click(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"บันทึกส่งออก ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.axios.delete(`/booking-note/${a.$route.params.id}`).then(()=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(t=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}}},keyup_send_to(a){this.optionSelect.sendTo=[],this.axios.get("master-data/department-user/booking-note-out",{params:{keyword:a.target.value,department_id:localStorage.getItem("department_id"),subministry_id:parseInt(localStorage.getItem("subministry_id"))}}).then(t=>{t.data.data&&(t.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.sendTo=t.data.data)})},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(a,t){a.flag=="edit"?a.flag="delete":this.data.booking_refers.splice(t,1),this.data.booking_refers.length-this.data.booking_refers.filter(l=>l.flag=="delete").length<1&&this.add_booking_refers()},add_attachments_change(a){for(var t=0;t<document.querySelector(`[name="${a}"]`).files.length;t++){let l=document.querySelector(`[name="${a}"]`).files[t];if(this.data.FileType.indexOf(l.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;let i={filename:l.name,type:l.type,link:URL.createObjectURL(l),size:(l.size/1024/1024).toFixed(2)+" MB",filesize:l.size.toString(),file:l,flag:"add"};this.data.attachments.push(i)}document.querySelector(`[name="${a}"]`).value=null},delete_main_doc(a,t){a.flag=="edit"?a.flag="delete":this.data.main_docs.splice(t,1),this.data.main_docs.length-this.data.main_docs.filter(l=>l.flag=="delete").length<1&&this.data.main_docs.push({filename:"",flag:"add"})},delete_attachments(a,t){a.flag=="edit"?a.flag="delete":this.data.attachments.splice(t,1),this.data.attachments.length-this.data.attachments.filter(l=>l.flag=="delete").length<1&&this.data.attachments.push({filename:"",flag:"add"})},delete_main_docs(a,t){a.flag=="edit"?a.flag="delete":this.data.main_docs.splice(t,1)},delete_order(a,t){a.flag=="edit"?a.flag="delete":this.data.order.splice(t,1)},add_booking_follows(){this.data.sendTo.filter(a=>{var t;if(!this.data.booking_follows.some(l=>l.department_id===a.value&&l.flag!="delete")){let l={department_id:parseInt(a.value),department_name:a.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:a.human_flag,response_id:parseInt(a.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(((t=this.data.sendToFile)==null?void 0:t.filename)||""))},response_type:a.type};this.optionSelect.process_type_id.find(i=>{i.value==this.data.process_type_id&&(l.process_type_name=i.name)}),this.optionSelect.permission_id.find(i=>{i.value==this.data.permission_id&&(l.permission_name=i.name)}),this.data.booking_follows.push(l)}})},delete_booking_follows(a,t){a.flag=="edit"?a.flag="delete":this.data.booking_follows.splice(t,1)},booking_refers_click(a){a.receive_document_number?(this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:a.receive_document_number}}).then(t=>{this.showLoading=!1,t.data.data.length>0?(a.book_refer_id=t.data.data[0].id,a.original_refer_id=t.data.data[0].id,a.book_type=t.data.data[0].book_type,a.desc=t.data.data[0].desc,a.receive_date=t.data.data[0].receive_date):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(t=>{a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="")},download_file(a){a.filename&&a.link&&this.axios({method:"get",url:a.link,baseURL:"",responseType:"blob"}).then(t=>{const l=new Blob([t.data],{type:this.assetsUtils.getTypeFile(a.filename)});window.open(URL.createObjectURL(l))})},change_signer_id(a){this.data.booking_register_details[a].booking_registers.filter(t=>{t.signer_id=this.data.booking_register_details[a].signer_id})},change_signature(a){this.data.booking_register_details[a].booking_registers.filter(t=>{t.is_signed=this.data.booking_register_details[a].is_signed})},upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_set_change1(a,t,l){for(var i=0;i<document.querySelector(`[name="${a}"]`).files.length;i++){let s=document.querySelector(`[name="${a}"]`).files[i];if(this.data.FileType.indexOf(s.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(l=="sendTo"){let n={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data.sendToFile=n}}},file_set_change2(a,t,l){for(var i=0;i<document.querySelector(`[name="${a}"]`).files.length;i++){let s=document.querySelector(`[name="${a}"]`).files[i];if(this.data.FileType.indexOf(s.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;l=="main_docs"?s.type=="application/pdf"&&(t.filename=s.name,t.type=s.type,t.link=URL.createObjectURL(s),t.size=(s.size/1024/1024).toFixed(2)+" MB",t.filesize=s.size.toString(),t.file=s,document.querySelector(`[name="${a}"]`).value=null):(t.filename=s.name,t.type=s.type,t.link=URL.createObjectURL(s),t.size=(s.size/1024/1024).toFixed(2)+" MB",t.filesize=s.size.toString(),t.file=s,document.querySelector(`[name="${a}"]`).value=null)}},file_attachment_change(a,t){for(var l=0;l<document.querySelector(`[name="${a}"]`).files.length;l++){let i=document.querySelector(`[name="${a}"]`).files[l];if(this.data.FileType.indexOf(i.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;let s={filename:i.name,type:i.type,link:URL.createObjectURL(i),size:(i.size/1024/1024).toFixed(2)+" MB",file:i};this.data.attachments[t]={...this.data.attachments[t],...s},document.querySelector(`[name="${a}"]`).value=null}},back(){this.$router.push({name:"subministry-work.record-out",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":this.flagSave==2?"บันทึกและส่งต่อ":this.flagSave==3?"ออกเลขบันทึกภายใน":"บันทึก"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){a.flagSave==3?(a.showLoading=!0,a.axios.post("/booking-note/generate-number",{department_id:parseInt(localStorage.getItem("department_id")),creater_id:a.data.creater_id?parseInt(a.data.creater_id):parseInt(localStorage.getItem("user_id")),book_category_id:parseInt(a.data.book_category_id),year:a.data.as_of_date.split("/")[2]-543}).then(t=>{a.data.booking_note_number=t.data.data.out_document_number,a.upload_file_all()}).catch(t=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})):(a.showLoading=!0,a.upload_file_all())}}},upload_file_all(){let a=this.assetsUtils.currentDate(),t=[],l=[];this.data.attachments.filter(i=>{if(i.file){let s=new FormData;s.append("file",i.file),s.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),t.push(this.axios.post("/upload/single",s,{headers:{"Content-Type":"multipart/form-data"}}))}}),t.length>0?this.axios.all([...t]).then(this.axios.spread((...i)=>{i.filter((s,n)=>{l.push({...this.data.attachments.filter(u=>u.file)[n],...s.data.data,filepath:s.data.data.path})}),t.length==l.length&&this.upload_file_all2(l)})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}):this.upload_file_all2(l)},upload_file_all2(a){let t=this.assetsUtils.currentDate(),l=[],i=[];this.data.main_docs.filter(s=>{if(s.file){let n=new FormData;n.append("file",s.file),n.append("dst",`${t.split("/")[0]+"-"+t.split("/")[1]+"-"+t.split("/")[2]}`),l.push(this.axios.post("/upload/single",n,{headers:{"Content-Type":"multipart/form-data"}}))}}),l.length>0?this.axios.all([...l]).then(this.axios.spread((...s)=>{s.filter((n,u)=>{i.push({...this.data.main_docs.filter(p=>p.file)[u],...n.data.data,filepath:n.data.data.path})}),l.length==i.length&&this.upload_file_all3(i,a)})).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}}):this.upload_file_all3(i,a)},upload_file_all3(a,t){var i;let l=this.assetsUtils.currentDate();if((i=this.data.sendToFile)!=null&&i.filename){let s=new FormData;s.append("file",this.data.sendToFile.file),s.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),this.axios.post("/upload/single",s,{headers:{"Content-Type":"multipart/form-data"}}).then(n=>{this.data.attach_filename=n.data.data.filename,this.data.attach_filepath=n.data.data.path,this.upload_file_all4(a,t)}).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}else this.upload_file_all4(a,t)},upload_file_all4(a,t){let l=this.assetsUtils.currentDate(),i=[],s=[];this.data.booking_follows.filter(n=>{var u;if((u=n.sendToFile)!=null&&u.filename){let p=new FormData;p.append("file",n.sendToFile.file),p.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),i.push(this.axios.post("/upload/single",p,{headers:{"Content-Type":"multipart/form-data"}}))}}),i.length>0?this.axios.all([...i]).then(this.axios.spread((...n)=>{n.filter((u,p)=>{this.data.booking_follows[p].attach_filepath=u.data.data.path,this.data.booking_follows[p].attach_filename=u.data.data.filename,s.push({...this.data.booking_follows[p],...u.data.data,filepath:u.data.data.path})}),i.length==s.length&&this.call_api_save(a,t)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}):this.call_api_save(a,t)},call_api_save(a,t){let l=this,i="";this.data.tag.filter(n=>{i+=n.name+","}),i=i.slice(0,-1),this.data.sendTo.filter(n=>{if(!this.data.booking_follows.some(u=>u.department_id===n.value&&u.flag!="delete")){let u={department_id:parseInt(n.value),department_name:n.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:n.human_flag,response_id:parseInt(n.value),response_type:n.type,attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename,sendToFile:{filename:this.data.attach_filename}};this.optionSelect.process_type_id.find(p=>{p.value==this.data.process_type_id&&(u.process_type_name=p.name)}),this.optionSelect.permission_id.find(p=>{p.value==this.data.permission_id&&(u.permission_name=p.name)}),this.data.booking_follows.push(u)}}),this.data.main_docs.filter(n=>{n.flag=="delete"&&a.push(n)}),this.data.attachments.filter(n=>{n.flag=="delete"&&t.push(n)});let s={create_type:parseInt(this.data.create_type),creater_id:this.data.creater_id?parseInt(this.data.creater_id):parseInt(localStorage.getItem("user_id")),book_category_id:parseInt(this.data.book_category_id),book_type_id:parseInt(this.data.book_type_id),secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),subject:this.data.subject,user_id:parseInt(localStorage.getItem("user_id")),tag:i,attachments:t,main_docs:a,booking_refers:this.data.booking_refers.filter(n=>n.book_refer_id),booking_follows:this.data.booking_follows,flag:this.flagSave==1?"draft":this.flagSave==3||this.flagSave==4?"update":"",greeting:this.data.greeting,desc:this.data.desc,regis_date:this.assetsUtils.currentDate(),as_of_date:this.data.as_of_date,is_draft:this.flagSave==1||this.flagSave==3?1:0,booking_note_number:this.data.booking_note_number};this.showLoading=!0,this.axios[this.edit?"put":"post"](`/booking-note${this.edit?"/"+this.$route.params.id:""}`,s).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:this.flagSave==1?"ทำการบันทึกแบบร่างสำเร็จแล้ว":this.flagSave==3?"ทำการออกเลขบันทึกภายในสำเร็จแล้ว":this.flagSave==4?"ทำการบันทึกสำเร็จแล้ว":"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})},api_detail(){this.showLoading=!0,this.axios.get(`/booking-note/${this.$route.params.id}`).then(a=>{var t,l;this.showLoading=!1,this.data={...this.data,...JSON.parse(JSON.stringify(a.data.data))},this.data.regis_date=a.data.data.created_at,this.data.tag=[],(t=a.data.data.tag)==null||t.split(",").filter(i=>{i&&this.data.tag.push({value:"",name:i})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],a.data.data.booking_refers.filter(i=>{i.flag="edit",this.axios.get(`/master-data/book-refer/${i.book_type}/${i.id}`).then(s=>{this.data.booking_refers.push({...s.data.data,...i})}).catch(s=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}),this.data.attachments.filter(i=>(i.flag="edit",i.link=i.filepath?this.backendport+"/"+i.filepath:"",i)),this.data.main_docs.filter(i=>(i.flag="edit",i.link=i.filepath?this.backendport+"/"+i.filepath:"",i)),this.data.booking_follows=[],(((l=a.data.data.booking_refers)==null?void 0:l.length)<1||!a.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}]),(this.data.attachments.length<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(this.data.main_docs.length<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}])}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},api_master(){this.showLoading=!0;const a=this.axios.get("/master-data/book-type-note"),t=this.axios.get("/master-data/speed"),l=this.axios.get("/master-data/secret"),i=this.axios.get("/master-data/process-type"),s=this.axios.get("/master-data/permission-type"),n=this.axios.get("/user"),u=this.axios.get("/user"),p=this.axios.get("/master-data/book-category",{params:{book_type:1}}),U=this.axios.get("master-data/department-user/booking-note-out",{params:{subministry_id:parseInt(localStorage.getItem("subministry_id"))}}),D=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([a,t,l,i,s,n,u,p,U,D]).then(this.axios.spread((...y)=>{this.showLoading=!1;const C=y[0],x=y[1],q=y[2],L=y[3],A=y[4],r=y[5],S=y[6],o=y[7],c=y[8],g=y[9];C.data.data.filter(d=>(d.value=d.id,d.name=d.name,d)),x.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),q.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),L.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),A.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),r.data.data.filter(d=>(d.value=d.id,d.name=d.fname+" "+d.lname,d)),S.data.data.filter(d=>(d.value=d.id,d.name=d.fname+" "+d.lname,d)),o.data.data.filter(d=>(d.value=d.id,d.name=d.name,d)),c.data.data.filter(d=>(d.value=d.id,d.name=d.department_full_name,d)),this.data.FileType=[],g.data.data.filter(d=>{d.active_flag==1&&this.data.FileType.push(d.content_type)}),this.optionSelect.book_type_id=C.data.data,this.optionSelect.speed_id=x.data.data,this.optionSelect.secret_id=q.data.data,this.optionSelect.process_type_id=L.data.data,this.optionSelect.permission_id=A.data.data,this.optionSelect.creater_id=r.data.data,this.optionSelectDefault.signer_id=S.data.data,this.optionSelectDefault.book_category_id=o.data.data,this.optionSelectDefault.department_dest_id=c.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(y=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:y.response.data.message}})},keyup_record_type(a){this.optionSelect.sendTo=[],this.axios.get("/master-data/book-type-note",{params:{keyword:a.target.value}}).then(t=>{t.data.data&&(t.data.data.filter(l=>(l.value=l.id,l.name=l.name,l)),this.optionSelect.book_type_id=t.data.data)})}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},K={class:"booking-out-detail"},G={class:"group-overflow"},H={class:"detail"},Q={class:"group-head"},W={class:"group-first"},X=e("img",{src:B,alt:"",class:"icon-size"},null,-1),Y={class:"name"},Z=e("div",{class:"group-image"}," ออกเลขบันทึกภายใน ",-1),$=[Z],ee=e("div",{class:"line"},null,-1),te={class:"group-detail"},se={class:"group-input"},ae=e("div",{class:"name"},"เจ้าของหนังสือ",-1),oe={class:"d-flex"},ie={class:"group-input mb-0"},le=e("div",{class:"name"},[_("ชื่อ - นามสกุล "),e("span",{class:"required"},"*")],-1),ne={class:"group-between"},de={class:"group-input left"},re=e("div",{class:"name"},[_("ทะเบียนบันทึกข้อความ"),e("span",{class:"required"},"*")],-1),ce={class:"group-input"},_e=e("div",{class:"name"},[_("ลงวันที่"),e("span",{class:"required"},"*")],-1),pe={class:"group-between"},ue={class:"group-input left"},he=e("div",{class:"name"},[_("ชนิดของบันทึกข้อความ "),e("span",{class:"required"},"*")],-1),ge={class:"group-input left"},me=e("div",{class:"name"},[_("ชั้นความลับ "),e("span",{class:"required"},"*")],-1),fe={class:"group-input"},be=e("div",{class:"name"},[_("ความเร่งด่วน "),e("span",{class:"required"},"*")],-1),ye={class:"group-between"},ve={class:"group-input"},ke=e("div",{class:"name"},[_("ชื่อเรื่อง "),e("span",{class:"required"},"*")],-1),Se={class:"group-between"},we={class:"group-input"},Ve=e("div",{class:"name"},"เรียน",-1),Ce={class:"group-between"},Te={class:"group-input"},Fe=e("div",{class:"name"},"รายละเอียด",-1),xe={class:"group-between"},Ue={class:"group-input"},qe=e("div",{class:"name"},"Tag สำหรับค้นหา",-1),Le={class:"group-input d-flex align-items-center"},Ae=e("div",{class:"name"},"อ้างอิงถึง",-1),Me=e("div",{class:"group-image"},[e("img",{src:j,alt:"",class:"icon-plus"}),_(" เพิ่มเอกสารอ้างอิง ")],-1),Ie=[Me],ze={class:"group-input left"},De={class:"group-input left"},Re={class:"group-input d-flex"},je=["onClick"],Ee=e("img",{src:z,alt:"",class:"image-trash pointer"},null,-1),Oe=[Ee],Be=e("div",{class:"line"},null,-1),Ne={class:"group-detail"},Pe={class:"group-between"},Je={class:"group-input left"},Ke=e("div",{class:"name"},"บันทึกต้นเรื่อง",-1),Ge={class:"d-flex mb-3"},He={class:"group-input-file"},Qe=["disabled","onClick"],We=["onClick"],Xe=["onChange","name"],Ye=["onClick"],Ze=e("i",{class:"bi bi-eye icon-eye"},null,-1),$e=[Ze],et=["disabled","onClick"],tt=e("img",{src:z,alt:"",class:"image-trash"},null,-1),st=[tt],at={class:"group-input"},ot={class:"group-input d-flex align-items-center"},it=e("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),lt=e("div",{class:"group-image"},[e("img",{src:j,alt:"",class:"icon-plus"}),_(" เพิ่มไฟล์ ")],-1),nt=[lt],dt={class:"d-flex mb-3"},rt={class:"group-input-file"},ct=["disabled","onClick"],_t=["onClick"],pt=["onChange","name"],ut=["onClick"],ht=e("i",{class:"bi bi-eye icon-eye"},null,-1),gt=[ht],mt=["disabled","onClick"],ft=e("img",{src:z,alt:"",class:"image-trash"},null,-1),bt=[ft],yt=e("div",{class:"line"},null,-1),vt={class:"send-to"},kt={class:"group-input"},St=e("div",{class:"name"},"ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) ",-1),wt={class:"group-input left"},Vt={class:"name d-flex justify-content-between"},Ct=e("div",null,"ความเห็น / คำสั่ง",-1),Tt=e("img",{src:N,alt:"",class:"icon-paperclip"},null,-1),Ft=e("img",{src:P,alt:"",class:"image-x"},null,-1),xt={class:"group-between"},Ut={class:"group-input left"},qt=e("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Lt={class:"group-input"},At=e("div",{class:"name"},"การมองเห็น",-1),Mt={class:"d-flex align-items-center justify-content-between"},It=e("img",{src:R,alt:"times-circle",class:"icon-times-circle"},null,-1),zt=e("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),Dt={key:0,class:"line mt-3"},Rt={class:"d-flex justify-content-between"},jt={class:"title"},Et=["onClick"],Ot={class:"d-flex ms-2 mt-2"},Bt={class:"name"},Nt={class:"name ms-5"},Pt={class:"name ms-5"},Jt={class:"name ms-2 mt-1"},Kt={class:"name ms-2 mt-1"},Gt=e("div",{class:"line mt-4"},null,-1),Ht={class:"group-footer"},Qt={class:"footer-left d-flex"},Wt=e("img",{src:R,alt:"times-circle",class:"icon-times-circle"},null,-1),Xt={class:"footer-right"},Yt=e("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),Zt=e("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),$t=["disabled"],es=e("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),ts={key:0,class:"detail-history"},ss={class:"history"},as=e("div",{class:"group-left"},[e("i",{class:"bi bi-clock icon-size"}),e("div",{class:"name"},"ประวัติการแก้ไข")],-1),os={class:"group-right"},is={class:"bi bi-chevron-right icon-angle"},ls={class:"bi bi-chevron-down icon-angle"},ns={class:"line"},ds={class:"content"},rs={class:"content-head"},cs=e("i",{class:"bi bi-border-all icon-size"},null,-1),_s=e("i",{class:"bi bi-chat-left icon-size"},null,-1),ps=e("i",{class:"bi bi-pencil-square icon-size"},null,-1),us={key:0},hs={class:"detail-head"},gs={class:"number"},ms={class:"create"},fs=e("i",{class:"bi bi-person icon-size"},null,-1),bs={class:"date"},ys={class:"time"},vs=e("i",{class:"bi bi-clock icon-size"},null,-1),ks=["onClick"],Ss={key:0,class:"detail-signager"},ws=["src"],Vs={key:0,class:"line"},Cs={key:1,class:"content-detail first end"},Ts=e("div",{class:"detail-head"},[e("div",{class:"topic"},"ไม่มีข้อมูล")],-1),Fs=[Ts];function xs(a,t,l,i,s,n){const u=w("cpn-radio"),p=w("cpn-select"),U=w("cpn-datepicker"),D=w("cpn-autoComplete"),y=w("cpn-textArea"),C=w("cpn-input"),x=w("cpn-input-tags"),q=w("Form"),L=w("cpn-modal-alert"),A=w("cpn-loading");return m(),f("div",K,[e("div",G,[e("div",H,[h(q,{onSubmit:n.on_submit,onInvalidSubmit:a.onInvalidSubmit},{default:O(()=>{var r,S;return[e("div",Q,[e("div",W,[X,e("div",Y,[_(b(s.edit?"แก้ไขบันทึกส่งออก":"สร้างบันทึกส่งออก")+" ",1),e("label",null,b(s.data.booking_note_number),1)])]),v(e("button",{type:"submit",class:"add-booking-out",onClick:t[0]||(t[0]=o=>s.flagSave=3)},$,512),[[k,!s.data.booking_note_number]])]),ee,e("div",te,[e("div",se,[ae,e("div",oe,[h(u,{modelValue:s.data.create_type,"onUpdate:modelValue":t[1]||(t[1]=o=>s.data.create_type=o),name:"my1",class:"",style:{"min-width":"120px"},value:"0",label:"สร้างเอง",onChange:t[2]||(t[2]=o=>s.data.creater_id="")},null,8,["modelValue"]),h(u,{modelValue:s.data.create_type,"onUpdate:modelValue":t[3]||(t[3]=o=>s.data.create_type=o),name:"my2",class:"ms-5 me-5",style:{"min-width":"120px"},value:"1",label:"สร้างแทน",onChange:t[4]||(t[4]=o=>s.data.creater_id="")},null,8,["modelValue"]),v(e("div",ie,[le,h(p,{modelValue:s.data.creater_id,"onUpdate:modelValue":t[5]||(t[5]=o=>s.data.creater_id=o),name:"creater_id",optionSelect:s.optionSelect.creater_id,rules:s.data.create_type==1?"required":"",placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect","rules"])],512),[[k,s.data.create_type==1]])])]),e("div",ne,[e("div",de,[re,h(p,{modelValue:s.data.book_category_id,"onUpdate:modelValue":t[6]||(t[6]=o=>s.data.book_category_id=o),name:"book_category_id",rules:"required",optionSelect:s.optionSelectDefault.book_category_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",ce,[_e,h(U,{modelValue:s.data.as_of_date,"onUpdate:modelValue":t[7]||(t[7]=o=>s.data.as_of_date=o),name:"as_of_date",rules:"required",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])]),e("div",pe,[e("div",ue,[he,h(D,{modelValue:s.data.book_type_id,"onUpdate:modelValue":t[8]||(t[8]=o=>s.data.book_type_id=o),name:"book_type_id",rules:"required",optionSelect:s.optionSelect.book_type_id,onKeyup:n.keyup_record_type,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect","onKeyup"])]),e("div",ge,[me,h(p,{modelValue:s.data.secret_id,"onUpdate:modelValue":t[9]||(t[9]=o=>s.data.secret_id=o),name:"secret_id",rules:"required",optionSelect:s.optionSelect.secret_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",fe,[be,h(p,{modelValue:s.data.speed_id,"onUpdate:modelValue":t[10]||(t[10]=o=>s.data.speed_id=o),name:"speed_id",rules:"required",optionSelect:s.optionSelect.speed_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),e("div",ye,[e("div",ve,[ke,h(y,{modelValue:s.data.subject,"onUpdate:modelValue":t[11]||(t[11]=o=>s.data.subject=o),name:"subject",rules:"required",rows:"1"},null,8,["modelValue"])])]),e("div",Se,[e("div",we,[Ve,h(C,{modelValue:s.data.greeting,"onUpdate:modelValue":t[12]||(t[12]=o=>s.data.greeting=o),name:"greeting",type:"text"},null,8,["modelValue"])])]),e("div",Ce,[e("div",Te,[Fe,h(y,{modelValue:s.data.desc,"onUpdate:modelValue":t[13]||(t[13]=o=>s.data.desc=o),name:"record_out_description",rows:"1"},null,8,["modelValue"])])]),e("div",xe,[e("div",Ue,[qe,h(x,{modelValue:s.data.tag,"onUpdate:modelValue":t[14]||(t[14]=o=>s.data.tag=o),name:"tag",placeholder:"Enter a new tag"},null,8,["modelValue"])])]),e("div",Le,[Ae,e("button",{type:"button",class:"add-booking-out",onClick:t[15]||(t[15]=o=>n.add_booking_refers())},Ie)]),(m(!0),f(T,null,F(s.data.booking_refers,(o,c)=>v((m(),f("div",{class:"group-between",key:c},[e("div",ze,[h(C,{modelValue:o.receive_document_number,"onUpdate:modelValue":g=>o.receive_document_number=g,name:`receive_document_number${c}`,type:"text",searchFlag:!0,onSearchClick:g=>n.booking_refers_click(o),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),e("div",De,[h(C,{modelValue:o.desc,"onUpdate:modelValue":g=>o.desc=g,name:`nameRefers${c}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Re,[h(U,{modelValue:o.receive_date,"onUpdate:modelValue":g=>o.receive_date=g,name:`dateRefers${c}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",onClick:g=>n.delete_booking_refers(o,c),class:"button-delete ms-3"},Oe,8,je)])])),[[k,o.flag!="delete"]])),128))]),Be,e("div",Ne,[e("div",Pe,[e("div",Je,[Ke,(m(!0),f(T,null,F(s.data.main_docs,(o,c)=>v((m(),f("div",{key:c},[e("div",Ge,[e("div",He,[e("button",{type:"button",disabled:s.data.is_disable,class:"button-file",onClick:g=>n.upload_file(`main_docs${c}`)},[e("span",{class:V(o.filename?"":"no-data")},b(o.filename?o.filename:"บันทึกต้นเรื่อง"),3)],8,Qe),e("div",{class:V(s.data.is_disable?"text":"text pointer"),onClick:g=>s.data.is_disable?"":n.upload_file(`main_docs${c}`)},"แนบเอกสาร",10,We),e("input",{type:"file",onChange:g=>n.file_set_change2(`main_docs${c}`,o,"main_docs"),name:`main_docs${c}`,style:{display:"none"},accept:"application/pdf"},null,40,Xe)]),e("button",{type:"button",onClick:g=>n.download_file(o),class:"button-eye"},$e,8,Ye),e("button",{type:"button",disabled:s.data.is_disable,class:"del-department-3",onClick:g=>n.delete_main_doc(o,c)},st,8,et)])])),[[k,o.flag!="delete"]])),128))]),e("div",at,[e("div",ot,[it,e("button",{type:"button",class:"add-booking-receive",onClick:t[16]||(t[16]=o=>n.upload_file("addAttachments"))},nt),e("input",{multiple:"",type:"file",onChange:t[17]||(t[17]=o=>n.add_attachments_change("addAttachments")),name:"addAttachments",style:{display:"none"}},null,32)]),(m(!0),f(T,null,F(s.data.attachments,(o,c)=>v((m(),f("div",{key:c},[e("div",dt,[e("div",rt,[e("button",{type:"button",disabled:s.data.is_disable,class:"button-file",onClick:g=>n.upload_file(`attachments${c}`)},[e("span",{class:V(o.filename?"":"no-data")},b(o.filename?o.filename:"สิ่งที่ส่งมาด้วย"),3)],8,ct),e("div",{class:V(s.data.is_disable?"text":"text pointer"),onClick:g=>s.data.is_disable?"":n.upload_file(`attachments${c}`)},"แนบเอกสาร",10,_t),e("input",{type:"file",onChange:g=>n.file_set_change2(`attachments${c}`,o,"attachments"),name:`attachments${c}`,style:{display:"none"}},null,40,pt)]),e("button",{type:"button",onClick:g=>n.download_file(o),class:"button-eye"},gt,8,ut),e("button",{type:"button",disabled:s.data.is_disable,class:"del-department-3",onClick:g=>n.delete_attachments(o,c)},bt,8,mt)])])),[[k,o.flag!="delete"]])),128))])])]),yt,e("div",vt,[e("div",kt,[St,h(x,{modelValue:s.data.sendTo,"onUpdate:modelValue":t[18]||(t[18]=o=>s.data.sendTo=o),flagSearch:!0,optionSelect:s.optionSelect.sendTo,onKeyup:n.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),e("div",wt,[e("div",Vt,[Ct,e("div",null,[e("input",{type:"file",onChange:t[19]||(t[19]=o=>n.file_set_change1("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(r=s.data.sendToFile)!=null&&r.filename?(m(),f("div",{key:1,class:"del-comment pointer",onClick:t[21]||(t[21]=o=>s.data.sendToFile.filename="")},[_(b((S=s.data.sendToFile)==null?void 0:S.filename)+" ",1),Ft])):(m(),f("button",{key:0,type:"button",class:"button-con pointer",onClick:t[20]||(t[20]=o=>n.upload_file("sendTo"))},[Tt,_(" แนบเอกสาร ")]))])]),h(y,{modelValue:s.data.comment,"onUpdate:modelValue":t[22]||(t[22]=o=>s.data.comment=o),name:"comment",rows:"3"},null,8,["modelValue"])]),e("div",xt,[e("div",Ut,[qt,h(p,{modelValue:s.data.process_type_id,"onUpdate:modelValue":t[23]||(t[23]=o=>s.data.process_type_id=o),name:"process_type_id",optionSelect:s.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),e("div",Lt,[At,h(p,{modelValue:s.data.permission_id,"onUpdate:modelValue":t[24]||(t[24]=o=>s.data.permission_id=o),name:"permission_id",optionSelect:s.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),e("div",Mt,[e("div",null,[e("button",{type:"button",class:"button button-danger",onClick:t[25]||(t[25]=o=>(s.data.sendTo=[],s.data.comment="",s.data.process_type_id="",s.data.permission_id=""))},[It,_(" ยกเลิก ")])]),e("div",null,[e("button",{type:"button",onClick:t[26]||(t[26]=o=>n.add_booking_follows()),class:"button button-success"},[zt,_(" เพิ่มการส่งต่อ ")])])]),s.data.booking_follows.length>0?(m(),f("div",Dt)):M("",!0),(m(!0),f(T,null,F(s.data.booking_follows,(o,c)=>v((m(),f("div",{class:"group-add",key:c},[e("div",Rt,[e("div",jt,"#"+b(c+1),1),e("img",{onClick:g=>n.delete_booking_follows(o,c),src:z,alt:"",class:"image-trash pointer"},null,8,Et)]),e("div",Ot,[e("div",Bt,"ส่งต่อ : "+b((o==null?void 0:o.department_name)||"-"),1),e("div",Nt,"รูปแบบการดำเนินการ : "+b((o==null?void 0:o.process_type_name)||"-"),1),e("div",Pt,"การมองเห็น : "+b((o==null?void 0:o.permission_name)||"-"),1)]),e("div",Jt,"ความเห็น / คำสั่ง : "+b((o==null?void 0:o.comment)||"-"),1),e("div",Kt,"เอกสารแนบ : "+b((o==null?void 0:o.sendToFile.filename)||"-"),1)])),[[k,o.flag!="delete"]])),128))]),Gt,e("div",Ht,[e("div",Qt,[e("button",{type:"button",class:"button-danger",onClick:t[27]||(t[27]=o=>n.back())},[Wt,_(" ปิด ")])]),e("div",Xt,[v(e("button",{type:"submit",class:"button-success button-save",onClick:t[28]||(t[28]=o=>s.flagSave=4)},[Yt,_(" บันทึก ")],512),[[k,s.edit]]),v(e("button",{type:"submit",class:"button-primary",onClick:t[29]||(t[29]=o=>s.flagSave=1)},[Zt,_(" บันทึกแบบร่าง ")],512),[[k,!s.edit]]),e("button",{type:"submit",class:"button-success",onClick:t[30]||(t[30]=o=>s.flagSave=2),disabled:s.data.sendTo.length<1},[es,_(" บันทึกและส่งต่อ ")],8,$t)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])]),a.$route.params.id?(m(),f("div",ts,[e("div",ss,[e("div",{class:"header pointer",onClick:t[31]||(t[31]=r=>(s.data.history.hide=!s.data.history.hide,n.historyClick(s.data.history.tab)))},[as,e("div",os,[v(e("i",is,null,512),[[k,!s.data.history.hide]]),v(e("i",ls,null,512),[[k,s.data.history.hide]])])]),v(e("div",ns,null,512),[[k,s.data.history.hide]]),v(e("div",ds,[e("div",rs,[e("div",{class:V(["pointer",s.data.history.tab==1?"active":""]),onClick:t[32]||(t[32]=r=>(s.data.history.tab=1,n.historyClick(1)))},[cs,_("ทั้งหมด")],2),e("div",{class:V(["pointer",s.data.history.tab==2?"active":""]),onClick:t[33]||(t[33]=r=>(s.data.history.tab=2,n.historyClick(2)))},[_s,_("ความเห็นคำสั่ง")],2),e("div",{class:V(["pointer",s.data.history.tab==3?"active":""]),onClick:t[34]||(t[34]=r=>(s.data.history.tab=3,n.historyClick(3)))},[ps,_("แก้ไขข้อมูล")],2)]),s.data.history.data.filter(r=>s.data.history.tab==2?r.type==2:s.data.history.tab==3?r.type==0||r.type==1:r).length>0?(m(),f("div",us,[(m(!0),f(T,null,F(s.data.history.data.filter(r=>s.data.history.tab==2?r.type==2:s.data.history.tab==3?r.type==0||r.type==1:r),(r,S)=>(m(),f("div",{class:V(["content-detail",S==0?"first":S==s.data.history.data.length-1?"end":""]),key:S},[e("div",hs,[e("div",gs,"#"+b(s.data.history.data.filter(o=>s.data.history.tab==2?o.type==2:s.data.history.tab==3?o.type==0||o.type==1:o).length-S),1),e("div",{class:V(["topic",r.bookactionname=="ความเห็นคำสั่ง"?"blue":r.bookactionname=="แก้ไขหนังสือ"?"yellow":"green"])},[e("i",{class:V(["bi icon-size",r.bookactionname=="ความเห็นคำสั่ง"?"bi-chat-left":r.bookactionname=="แก้ไขหนังสือ"?"bi-pencil-square":"bi-plus-lg"])},null,2),_(" "+b(r.bookactionname),1)],2),e("div",ms,[fs,_(" โดย "+b(r.updateBy)+" / "+b(r.subName),1)]),e("div",bs," วันที่ "+b(r.createDate),1),e("div",ys,[vs,_(" "+b(r.createTime),1)])]),(m(!0),f(T,null,F(r.bookingRemarks,(o,c)=>(m(),f("ul",{class:"detail-list",key:c},[v(e("button",{class:"button-file",onClick:g=>n.download_file({filename:o.filepath.split("/").pop(),link:o.link})},b(o.filepath.split("/").pop()),9,ks),[[k,o.filepath]]),e("li",null,[_(b(o.remark)+" "+b(o.comment)+" ",1),o.signature_img&&r.bookactionname=="ความเห็นคำสั่ง"?(m(),f("div",Ss,[e("img",{src:o.signature_img,alt:"",class:"image-size"},null,8,ws)])):M("",!0)])]))),128)),S!=s.data.history.data.length-1?(m(),f("div",Vs)):M("",!0)],2))),128))])):(m(),f("div",Cs,Fs))],512),[[k,s.data.history.hide]])])])):M("",!0)]),h(L,{modalAlert:s.modalAlert},null,8,["modalAlert"]),h(A,{show:s.showLoading},null,8,["show"])])}const Is=E(J,[["render",xs]]);export{Is as default};
