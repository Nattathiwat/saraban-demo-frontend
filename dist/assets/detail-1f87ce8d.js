import{_ as E,r as k,o as g,c as f,a as e,b as u,d as O,w,v as V,n as S,j as _,F as T,h as F,i as I,t as b,g as R,k as M}from"./index-4aaaf5c3.js";import{_ as B}from"./ballot-duotone-f2459825.js";import{_ as j}from"./plus-circle-duotone-64bd32fe.js";import{_ as D}from"./trash-alt-duotone-12d94c28.js";import{_ as N,a as P}from"./x-solid-74fa126d.js";const J={name:"record-out-detail",data(){return{iconAngle:!1,modalAlert:{showModal:!1,title:"",message:""},optionSelectDefault:{book_category_id:[]},showLoading:!1,edit:!1,flagSave:1,data:{create_type:"0",creater_id:"",book_category_id:"",book_type_id:"",secret_id:"12",speed_id:"12",booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],subject:"",tag:[],main_docs:[{filename:""}],attachments:[{filename:""}],sendToFile:[{filename:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"12",permission_id:"8",desc:"",regis_date:this.assetsUtils.currentDate(),human_flag:!1,response_id:"",greeting:"",as_of_date:"",history:{hide:!1,data:[],tab:1},FileType:[]},optionSelect:{creater_id:[],book_category_id:[],book_type_id:[],secret_id:[],speed_id:[],process_type_id:[],permission_id:[],sendTo:[]},modalRegiter:{showModal:!1,booking_register_details:[]}}},methods:{historyClick(a){this.showLoading=!0,this.axios.get(`/booking-note/history/${this.$route.params.id}`,{params:{book_type:4}}).then(s=>{this.showLoading=!1,s.data.data.filter(i=>(i.bookingRemarks.filter(l=>(l.signature_img=l.signature_img?l.signature_img:new URL("/assets/signature_img-526e80c1.jpg",self.location).href,l.link=l.filepath?this.backendport+"/"+l.filepath:"",l)),i)),this.data.history.data=s.data.data}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},delete_click(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"บันทึกส่งออก ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.axios.delete(`/booking-note/${a.$route.params.id}`).then(()=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(s=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}}},keyup_send_to(a){this.optionSelect.sendTo=[],this.axios.get("master-data/department-user/booking-note-out",{params:{keyword:a.target.value,department_id:localStorage.getItem("department_id"),subministry_id:parseInt(localStorage.getItem("subministry_id"))}}).then(s=>{s.data.data&&(s.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i.human_flag=i.human_flag,i.response_type=i.type,i)),this.optionSelect.sendTo=s.data.data)})},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(a,s){a.flag=="edit"?a.flag="delete":this.data.booking_refers.splice(s,1),this.data.booking_refers.length-this.data.booking_refers.filter(i=>i.flag=="delete").length<1&&this.add_booking_refers()},add_attachments_change(a){for(var s=0;s<document.querySelector(`[name="${a}"]`).files.length;s++){let i=document.querySelector(`[name="${a}"]`).files[s];if(this.data.FileType.indexOf(i.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;let l={filename:i.name,type:i.type,link:URL.createObjectURL(i),size:(i.size/1024/1024).toFixed(2)+" MB",filesize:i.size.toString(),file:i,flag:"add"};this.data.attachments.push(l)}document.querySelector(`[name="${a}"]`).value=null},delete_attachments(a,s){a.flag=="edit"?a.flag="delete":this.data.attachments.splice(s,1),this.data.attachments.length-this.data.attachments.filter(i=>i.flag=="delete").length<1&&this.data.attachments.push({filename:"",flag:"add"})},delete_main_docs(a,s){a.flag=="edit"?a.flag="delete":this.data.main_docs.splice(s,1)},delete_order(a,s){a.flag=="edit"?a.flag="delete":this.data.order.splice(s,1)},add_booking_follows(){this.data.sendTo.filter(a=>{var s;if(!this.data.booking_follows.some(i=>i.department_id===a.value&&i.flag!="delete")){let i={department_id:parseInt(a.value),department_name:a.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:a.human_flag,response_id:parseInt(a.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(((s=this.data.sendToFile)==null?void 0:s.filename)||""))},response_type:a.type};this.optionSelect.process_type_id.find(l=>{l.value==this.data.process_type_id&&(i.process_type_name=l.name)}),this.optionSelect.permission_id.find(l=>{l.value==this.data.permission_id&&(i.permission_name=l.name)}),this.data.booking_follows.push(i)}})},delete_booking_follows(a,s){a.flag=="edit"?a.flag="delete":this.data.booking_follows.splice(s,1)},booking_refers_click(a){a.receive_document_number?(this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:a.receive_document_number}}).then(s=>{this.showLoading=!1,s.data.data.length>0?(a.book_refer_id=s.data.data[0].id,a.original_refer_id=s.data.data[0].id,a.book_type=s.data.data[0].book_type,a.desc=s.data.data[0].desc,a.receive_date=s.data.data[0].receive_date):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(s=>{a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="")},download_file(a){a.filename&&a.link&&this.axios({method:"get",url:a.link,baseURL:"",responseType:"blob"}).then(s=>{const i=new Blob([s.data],{type:this.assetsUtils.getTypeFile(a.filename)});window.open(URL.createObjectURL(i))})},change_signer_id(a){this.data.booking_register_details[a].booking_registers.filter(s=>{s.signer_id=this.data.booking_register_details[a].signer_id})},change_signature(a){this.data.booking_register_details[a].booking_registers.filter(s=>{s.is_signed=this.data.booking_register_details[a].is_signed})},upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_set_change(a,s,i){for(var l=0;l<document.querySelector(`[name="${a}"]`).files.length;l++){let t=document.querySelector(`[name="${a}"]`).files[l];if(this.data.FileType.indexOf(t.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(i=="main_docs"){if(t.type=="application/pdf"){let n={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[i][s]={...this.data[i][s],...n},document.querySelector(`[name="${a}"]`).value=null}}else if(i=="sendTo"){let n={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data.sendToFile=n}else{let n={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[i][s]={...this.data[i][s],...n},document.querySelector(`[name="${a}"]`).value=null}}},file_attachment_change(a,s){for(var i=0;i<document.querySelector(`[name="${a}"]`).files.length;i++){let l=document.querySelector(`[name="${a}"]`).files[i];if(this.data.FileType.indexOf(l.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;let t={filename:l.name,type:l.type,link:URL.createObjectURL(l),size:(l.size/1024/1024).toFixed(2)+" MB",file:l};this.data.attachments[s]={...this.data.attachments[s],...t},document.querySelector(`[name="${a}"]`).value=null}},back(){this.$router.push({name:"subministry-work.record-out",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":this.flagSave==2?"บันทึกและส่งต่อ":this.flagSave==3?"ออกเลขบันทึกภายใน":"บันทึก"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){a.flagSave==3?(a.showLoading=!0,a.axios.post("/booking-note/generate-number",{department_id:parseInt(localStorage.getItem("department_id")),creater_id:a.data.creater_id?parseInt(a.data.creater_id):parseInt(localStorage.getItem("user_id")),book_category_id:parseInt(a.data.book_category_id),year:a.data.as_of_date.split("/")[2]-543}).then(s=>{a.data.booking_note_number=s.data.data.out_document_number,a.upload_file_all()}).catch(s=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})):(a.showLoading=!0,a.upload_file_all())}}},upload_file_all(){let a=this.assetsUtils.currentDate(),s=[],i=[];this.data.attachments.filter(l=>{if(l.file){let t=new FormData;t.append("file",l.file),t.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),s.push(this.axios.post("/upload/single",t,{headers:{"Content-Type":"multipart/form-data"}}))}}),s.length>0?this.axios.all([...s]).then(this.axios.spread((...l)=>{l.filter((t,n)=>{i.push({...this.data.attachments[n],...t.data.data,filepath:t.data.data.path})}),s.length==i.length&&this.upload_file_all2(i)})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}}):this.upload_file_all2(i)},upload_file_all2(a){let s=this.assetsUtils.currentDate(),i=[],l=[];this.data.main_docs.filter(t=>{if(t.file){let n=new FormData;n.append("file",t.file),n.append("dst",`${s.split("/")[0]+"-"+s.split("/")[1]+"-"+s.split("/")[2]}`),i.push(this.axios.post("/upload/single",n,{headers:{"Content-Type":"multipart/form-data"}}))}}),i.length>0?this.axios.all([...i]).then(this.axios.spread((...t)=>{t.filter((n,h)=>{l.push({...this.data.main_docs[h],...n.data.data,filepath:n.data.data.path})}),i.length==l.length&&this.upload_file_all3(l,a)})).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}}):this.upload_file_all3(l,a)},upload_file_all3(a,s){var l;let i=this.assetsUtils.currentDate();if((l=this.data.sendToFile)!=null&&l.filename){let t=new FormData;t.append("file",this.data.sendToFile.file),t.append("dst",`${i.split("/")[0]+"-"+i.split("/")[1]+"-"+i.split("/")[2]}`),this.axios.post("/upload/single",t,{headers:{"Content-Type":"multipart/form-data"}}).then(n=>{this.data.attach_filename=n.data.data.filename,this.data.attach_filepath=n.data.data.path,this.upload_file_all4(a,s)}).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}else this.upload_file_all4(a,s)},upload_file_all4(a,s){let i=this.assetsUtils.currentDate(),l=[],t=[];this.data.booking_follows.filter(n=>{var h;if((h=n.sendToFile)!=null&&h.filename){let p=new FormData;p.append("file",n.sendToFile.file),p.append("dst",`${i.split("/")[0]+"-"+i.split("/")[1]+"-"+i.split("/")[2]}`),l.push(this.axios.post("/upload/single",p,{headers:{"Content-Type":"multipart/form-data"}}))}}),l.length>0?this.axios.all([...l]).then(this.axios.spread((...n)=>{n.filter((h,p)=>{this.data.booking_follows[p].attach_filepath=h.data.data.path,this.data.booking_follows[p].attach_filename=h.data.data.filename,t.push({...this.data.booking_follows[p],...h.data.data,filepath:h.data.data.path})}),l.length==t.length&&this.call_api_save(a,s)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}):this.call_api_save(a,s)},call_api_save(a,s){let i=this,l="";this.data.tag.filter(n=>{l+=n.name+","}),l=l.slice(0,-1),this.data.sendTo.filter(n=>{if(!this.data.booking_follows.some(h=>h.department_id===n.value&&h.flag!="delete")){let h={department_id:parseInt(n.value),department_name:n.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:n.human_flag,response_id:parseInt(n.value),response_type:n.type,attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename,sendToFile:{filename:this.data.attach_filename}};this.optionSelect.process_type_id.find(p=>{p.value==this.data.process_type_id&&(h.process_type_name=p.name)}),this.optionSelect.permission_id.find(p=>{p.value==this.data.permission_id&&(h.permission_name=p.name)}),this.data.booking_follows.push(h)}});let t={create_type:parseInt(this.data.create_type),creater_id:this.data.creater_id?parseInt(this.data.creater_id):parseInt(localStorage.getItem("user_id")),book_category_id:parseInt(this.data.book_category_id),book_type_id:parseInt(this.data.book_type_id),secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),subject:this.data.subject,user_id:parseInt(localStorage.getItem("user_id")),tag:l,attachments:s,main_docs:a,booking_refers:this.data.booking_refers.filter(n=>n.book_refer_id),booking_follows:this.data.booking_follows,flag:this.flagSave==1?"draft":this.flagSave==3||this.flagSave==4?"update":"",greeting:this.data.greeting,desc:this.data.desc,regis_date:this.assetsUtils.currentDate(),as_of_date:this.data.as_of_date,is_draft:this.flagSave==1||this.flagSave==3?1:0,booking_note_number:this.data.booking_note_number};this.showLoading=!0,this.axios[this.edit?"put":"post"](`/booking-note${this.edit?"/"+this.$route.params.id:""}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:this.flagSave==1?"ทำการบันทึกแบบร่างสำเร็จแล้ว":this.flagSave==3?"ทำการออกเลขบันทึกภายในสำเร็จแล้ว":this.flagSave==4?"ทำการบันทึกสำเร็จแล้ว":"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){i.back()}}}).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})},api_detail(){this.showLoading=!0,this.axios.get(`/booking-note/${this.$route.params.id}`).then(a=>{var s,i;this.showLoading=!1,this.data={...this.data,...JSON.parse(JSON.stringify(a.data.data))},this.data.regis_date=a.data.data.created_at,this.data.tag=[],(s=a.data.data.tag)==null||s.split(",").filter(l=>{l&&this.data.tag.push({value:"",name:l})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],a.data.data.booking_refers.filter(l=>{l.flag="edit",this.axios.get(`/master-data/book-refer/${l.book_type}/${l.id}`).then(t=>{this.data.booking_refers.push({...t.data.data,...l})}).catch(t=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}),this.data.attachments.filter(l=>(l.flag="edit",l.link=l.filepath?this.backendport+"/"+l.filepath:"",l)),this.data.main_docs.filter(l=>(l.link=l.filepath?this.backendport+"/"+l.filepath:"",l)),this.data.booking_follows.filter(l=>(l.flag="edit",l)),this.data.booking_follows=[],(((i=a.data.data.booking_refers)==null?void 0:i.length)<1||!a.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}]),(this.data.attachments.length<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(this.data.main_docs.length<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}])}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},api_master(){this.showLoading=!0;const a=this.axios.get("/master-data/book-type-note"),s=this.axios.get("/master-data/speed"),i=this.axios.get("/master-data/secret"),l=this.axios.get("/master-data/process-type"),t=this.axios.get("/master-data/permission-type"),n=this.axios.get("/user"),h=this.axios.get("/user"),p=this.axios.get("/master-data/book-category",{params:{book_type:1}}),L=this.axios.get("master-data/department-user/booking-note-out",{params:{subministry_id:parseInt(localStorage.getItem("subministry_id"))}}),z=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([a,s,i,l,t,n,h,p,L,z]).then(this.axios.spread((...y)=>{this.showLoading=!1;const C=y[0],U=y[1],q=y[2],x=y[3],A=y[4],r=y[5],v=y[6],o=y[7],c=y[8],m=y[9];C.data.data.filter(d=>(d.value=d.id,d.name=d.name,d)),U.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),q.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),x.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),A.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),r.data.data.filter(d=>(d.value=d.id,d.name=d.fname+" "+d.lname,d)),v.data.data.filter(d=>(d.value=d.id,d.name=d.fname+" "+d.lname,d)),o.data.data.filter(d=>(d.value=d.id,d.name=d.name,d)),c.data.data.filter(d=>(d.value=d.id,d.name=d.department_full_name,d)),this.data.FileType=[],m.data.data.filter(d=>{d.active_flag==1&&this.data.FileType.push(d.content_type)}),this.optionSelect.book_type_id=C.data.data,this.optionSelect.speed_id=U.data.data,this.optionSelect.secret_id=q.data.data,this.optionSelect.process_type_id=x.data.data,this.optionSelect.permission_id=A.data.data,this.optionSelect.creater_id=r.data.data,this.optionSelectDefault.signer_id=v.data.data,this.optionSelectDefault.book_category_id=o.data.data,this.optionSelectDefault.department_dest_id=c.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(y=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:y.response.data.message}})},keyup_record_type(a){this.optionSelect.sendTo=[],this.axios.get("/master-data/book-type-note",{params:{keyword:a.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(i=>(i.value=i.id,i.name=i.name,i)),this.optionSelect.book_type_id=s.data.data)})}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},K={class:"booking-out-detail"},G={class:"group-overflow"},H={class:"detail"},Q={class:"group-head"},W={class:"group-first"},X=e("img",{src:B,alt:"",class:"icon-size"},null,-1),Y={class:"name"},Z=e("div",{class:"group-image"}," ออกเลขบันทึกภายใน ",-1),$=[Z],ee=e("div",{class:"line"},null,-1),te={class:"group-detail"},se={class:"group-input"},ae=e("div",{class:"name"},"เจ้าของหนังสือ",-1),oe={class:"d-flex"},ie={class:"group-input mb-0"},le=e("div",{class:"name"},[_("ชื่อ - นามสกุล "),e("span",{class:"required"},"*")],-1),ne={class:"group-between"},de={class:"group-input left"},re=e("div",{class:"name"},[_("ทะเบียนบันทึกข้อความ"),e("span",{class:"required"},"*")],-1),ce={class:"group-input"},_e=e("div",{class:"name"},[_("ลงวันที่"),e("span",{class:"required"},"*")],-1),pe={class:"group-between"},ue={class:"group-input left"},he=e("div",{class:"name"},[_("ชนิดของบันทึกข้อความ "),e("span",{class:"required"},"*")],-1),me={class:"group-input left"},ge=e("div",{class:"name"},[_("ชั้นความลับ "),e("span",{class:"required"},"*")],-1),fe={class:"group-input"},be=e("div",{class:"name"},[_("ความเร่งด่วน "),e("span",{class:"required"},"*")],-1),ye={class:"group-between"},ve={class:"group-input"},ke=e("div",{class:"name"},[_("ชื่อเรื่อง "),e("span",{class:"required"},"*")],-1),Se={class:"group-between"},we={class:"group-input"},Ve=e("div",{class:"name"},"เรียน",-1),Ce={class:"group-between"},Te={class:"group-input"},Fe=e("div",{class:"name"},"รายละเอียด",-1),Ue={class:"group-between"},Le={class:"group-input"},qe=e("div",{class:"name"},"Tag สำหรับค้นหา",-1),xe={class:"group-input d-flex align-items-center"},Ae=e("div",{class:"name"},"อ้างอิงถึง",-1),Ie=e("div",{class:"group-image"},[e("img",{src:j,alt:"",class:"icon-plus"}),_(" เพิ่มเอกสารอ้างอิง ")],-1),Me=[Ie],De={class:"group-input left"},ze={class:"group-input left"},Re={class:"group-input d-flex"},je=["onClick"],Ee=e("img",{src:D,alt:"",class:"image-trash pointer"},null,-1),Oe=[Ee],Be=e("div",{class:"line"},null,-1),Ne={class:"group-detail"},Pe={class:"group-between"},Je={class:"group-input left"},Ke=e("div",{class:"name"},"บันทึกต้นเรื่อง",-1),Ge={class:"group-input-file"},He=["disabled","onClick"],Qe=["onClick"],We=["onChange","name"],Xe=["onClick"],Ye=e("i",{class:"bi bi-eye icon-eye"},null,-1),Ze=[Ye],$e=["disabled","onClick"],et=e("img",{src:D,alt:"",class:"image-trash"},null,-1),tt=[et],st={class:"group-input"},at={class:"group-input d-flex align-items-center"},ot=e("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),it=e("div",{class:"group-image"},[e("img",{src:j,alt:"",class:"icon-plus"}),_(" เพิ่มไฟล์ ")],-1),lt=[it],nt={class:"group-input-file"},dt=["disabled","onClick"],rt=["onClick"],ct=["onChange","name"],_t=["onClick"],pt=e("i",{class:"bi bi-eye icon-eye"},null,-1),ut=[pt],ht=["disabled","onClick"],mt=e("img",{src:D,alt:"",class:"image-trash"},null,-1),gt=[mt],ft=e("div",{class:"line"},null,-1),bt={class:"send-to"},yt={class:"group-input"},vt=e("div",{class:"name"},"ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) ",-1),kt={class:"group-input left"},St={class:"name d-flex justify-content-between"},wt=e("div",null,"ความเห็น / คำสั่ง",-1),Vt=e("img",{src:N,alt:"",class:"icon-paperclip"},null,-1),Ct=e("img",{src:P,alt:"",class:"image-x"},null,-1),Tt={class:"group-between"},Ft={class:"group-input left"},Ut=e("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Lt={class:"group-input"},qt=e("div",{class:"name"},"การมองเห็น",-1),xt={class:"d-flex align-items-center justify-content-between"},At=e("img",{src:R,alt:"times-circle",class:"icon-times-circle"},null,-1),It=e("img",{src:M,alt:"times-circle",class:"icon-check-circle"},null,-1),Mt={key:0,class:"line mt-3"},Dt={class:"d-flex justify-content-between"},zt={class:"title"},Rt=["onClick"],jt={class:"d-flex ms-2 mt-2"},Et={class:"name"},Ot={class:"name ms-5"},Bt={class:"name ms-5"},Nt={class:"name ms-2 mt-1"},Pt={class:"name ms-2 mt-1"},Jt=e("div",{class:"line mt-4"},null,-1),Kt={class:"group-footer"},Gt={class:"footer-left d-flex"},Ht=e("img",{src:R,alt:"times-circle",class:"icon-times-circle"},null,-1),Qt={class:"footer-right"},Wt=e("img",{src:M,alt:"times-circle",class:"icon-check-circle"},null,-1),Xt=e("img",{src:M,alt:"times-circle",class:"icon-check-circle"},null,-1),Yt=["disabled"],Zt=e("img",{src:M,alt:"times-circle",class:"icon-check-circle"},null,-1),$t={key:0,class:"detail-history"},es={class:"history"},ts=e("div",{class:"group-left"},[e("i",{class:"bi bi-clock icon-size"}),e("div",{class:"name"},"ประวัติการแก้ไข")],-1),ss={class:"group-right"},as={class:"bi bi-chevron-right icon-angle"},os={class:"bi bi-chevron-down icon-angle"},is={class:"line"},ls={class:"content"},ns={class:"content-head"},ds=e("i",{class:"bi bi-border-all icon-size"},null,-1),rs=e("i",{class:"bi bi-chat-left icon-size"},null,-1),cs=e("i",{class:"bi bi-pencil-square icon-size"},null,-1),_s={class:"detail-head"},ps={class:"number"},us={class:"create"},hs=e("i",{class:"bi bi-person icon-size"},null,-1),ms={class:"date"},gs={class:"time"},fs=e("i",{class:"bi bi-clock icon-size"},null,-1),bs=["onClick"],ys={key:0,class:"detail-signager"},vs=["src"],ks={key:0,class:"line"},Ss={key:1,class:"content-detail first end"},ws=e("div",{class:"detail-head"},[e("div",{class:"topic"},"ไม่มีข้อมูล")],-1),Vs=[ws];function Cs(a,s,i,l,t,n){const h=k("cpn-radio"),p=k("cpn-select"),L=k("cpn-datepicker"),z=k("cpn-autoComplete"),y=k("cpn-textArea"),C=k("cpn-input"),U=k("cpn-input-tags"),q=k("Form"),x=k("cpn-modal-alert"),A=k("cpn-loading");return g(),f("div",K,[e("div",G,[e("div",H,[u(q,{onSubmit:n.on_submit,onInvalidSubmit:a.onInvalidSubmit},{default:O(()=>{var r,v;return[e("div",Q,[e("div",W,[X,e("div",Y,[_(b(t.edit?"แก้ไขบันทึกส่งออก":"สร้างบันทึกส่งออก")+" ",1),e("label",null,b(t.data.booking_note_number),1)])]),w(e("button",{type:"submit",class:"add-booking-out",onClick:s[0]||(s[0]=o=>t.flagSave=3)},$,512),[[V,!t.data.booking_note_number]])]),ee,e("div",te,[e("div",se,[ae,e("div",oe,[u(h,{modelValue:t.data.create_type,"onUpdate:modelValue":s[1]||(s[1]=o=>t.data.create_type=o),name:"my1",class:"",style:{"min-width":"120px"},value:"0",label:"สร้างเอง",onChange:s[2]||(s[2]=o=>t.data.creater_id="")},null,8,["modelValue"]),u(h,{modelValue:t.data.create_type,"onUpdate:modelValue":s[3]||(s[3]=o=>t.data.create_type=o),name:"my2",class:"ms-5 me-5",style:{"min-width":"120px"},value:"1",label:"สร้างแทน",onChange:s[4]||(s[4]=o=>t.data.creater_id="")},null,8,["modelValue"]),w(e("div",ie,[le,u(p,{modelValue:t.data.creater_id,"onUpdate:modelValue":s[5]||(s[5]=o=>t.data.creater_id=o),name:"creater_id",optionSelect:t.optionSelect.creater_id,rules:t.data.create_type==1?"required":"",placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect","rules"])],512),[[V,t.data.create_type==1]])])]),e("div",ne,[e("div",de,[re,u(p,{modelValue:t.data.book_category_id,"onUpdate:modelValue":s[6]||(s[6]=o=>t.data.book_category_id=o),name:"book_category_id",rules:"required",optionSelect:t.optionSelectDefault.book_category_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",ce,[_e,u(L,{modelValue:t.data.as_of_date,"onUpdate:modelValue":s[7]||(s[7]=o=>t.data.as_of_date=o),name:"as_of_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])]),e("div",pe,[e("div",ue,[he,u(z,{modelValue:t.data.book_type_id,"onUpdate:modelValue":s[8]||(s[8]=o=>t.data.book_type_id=o),name:"book_type_id",rules:"required",optionSelect:t.optionSelect.book_type_id,onKeyup:n.keyup_record_type,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect","onKeyup"])]),e("div",me,[ge,u(p,{modelValue:t.data.secret_id,"onUpdate:modelValue":s[9]||(s[9]=o=>t.data.secret_id=o),name:"secret_id",rules:"required",optionSelect:t.optionSelect.secret_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",fe,[be,u(p,{modelValue:t.data.speed_id,"onUpdate:modelValue":s[10]||(s[10]=o=>t.data.speed_id=o),name:"speed_id",rules:"required",optionSelect:t.optionSelect.speed_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),e("div",ye,[e("div",ve,[ke,u(y,{modelValue:t.data.subject,"onUpdate:modelValue":s[11]||(s[11]=o=>t.data.subject=o),name:"subject",rules:"required",rows:"1"},null,8,["modelValue"])])]),e("div",Se,[e("div",we,[Ve,u(C,{modelValue:t.data.greeting,"onUpdate:modelValue":s[12]||(s[12]=o=>t.data.greeting=o),name:"greeting",type:"text"},null,8,["modelValue"])])]),e("div",Ce,[e("div",Te,[Fe,u(y,{modelValue:t.data.desc,"onUpdate:modelValue":s[13]||(s[13]=o=>t.data.desc=o),name:"record_out_description",rows:"1"},null,8,["modelValue"])])]),e("div",Ue,[e("div",Le,[qe,u(U,{modelValue:t.data.tag,"onUpdate:modelValue":s[14]||(s[14]=o=>t.data.tag=o),name:"tag",placeholder:"Enter a new tag"},null,8,["modelValue"])])]),e("div",xe,[Ae,e("button",{type:"button",class:"add-booking-out",onClick:s[15]||(s[15]=o=>n.add_booking_refers())},Me)]),(g(!0),f(T,null,F(t.data.booking_refers.filter(o=>o.flag!="delete"),(o,c)=>(g(),f("div",{class:"group-between",key:c},[e("div",De,[u(C,{modelValue:o.receive_document_number,"onUpdate:modelValue":m=>o.receive_document_number=m,name:`receive_document_number${c}`,type:"text",searchFlag:!0,onSearchClick:m=>n.booking_refers_click(o),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),e("div",ze,[u(C,{modelValue:o.desc,"onUpdate:modelValue":m=>o.desc=m,name:`nameRefers${c}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Re,[u(L,{modelValue:o.receive_date,"onUpdate:modelValue":m=>o.receive_date=m,name:`dateRefers${c}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",onClick:m=>n.delete_booking_refers(o,c),class:"button-delete ms-3"},Oe,8,je)])]))),128))]),Be,e("div",Ne,[e("div",Pe,[e("div",Je,[Ke,(g(!0),f(T,null,F(t.data.main_docs.filter(o=>o.flag!="delete"),(o,c)=>(g(),f("div",{class:"d-flex mb-3",key:c},[e("div",Ge,[e("button",{type:"button",disabled:t.data.is_disable,class:"button-file",onClick:m=>n.upload_file(`main_docs${c}`)},[e("span",{class:S(o.filename?"":"no-data")},b(o.filename?o.filename:"บันทึกต้นเรื่อง"),3)],8,He),e("div",{class:S(t.data.is_disable?"text":"text pointer"),onClick:m=>t.data.is_disable?"":n.upload_file(`main_docs${c}`)},"แนบเอกสาร",10,Qe),e("input",{type:"file",onChange:m=>n.file_set_change(`main_docs${c}`,c,"main_docs"),name:`main_docs${c}`,style:{display:"none"},accept:"application/pdf"},null,40,We)]),e("button",{type:"button",onClick:m=>n.download_file(o),class:"button-eye"},Ze,8,Xe),e("button",{type:"button",disabled:t.data.is_disable,class:"del-department-3",onClick:m=>t.data.main_docs.length>1?t.data.main_docs.splice(c,1):o.filename=""},tt,8,$e)]))),128))]),e("div",st,[e("div",at,[ot,e("button",{type:"button",class:"add-booking-receive",onClick:s[16]||(s[16]=o=>n.upload_file("addAttachments"))},lt),e("input",{multiple:"",type:"file",onChange:s[17]||(s[17]=o=>n.add_attachments_change("addAttachments")),name:"addAttachments",style:{display:"none"}},null,32)]),(g(!0),f(T,null,F(t.data.attachments.filter(o=>o.flag!="delete"),(o,c)=>(g(),f("div",{class:"d-flex mb-3",key:c},[e("div",nt,[e("button",{type:"button",disabled:t.data.is_disable,class:"button-file",onClick:m=>n.upload_file(`attachments${c}`)},[e("span",{class:S(o.filename?"":"no-data")},b(o.filename?o.filename:"สิ่งที่ส่งมาด้วย"),3)],8,dt),e("div",{class:S(t.data.is_disable?"text":"text pointer"),onClick:m=>t.data.is_disable?"":n.upload_file(`attachments${c}`)},"แนบเอกสาร",10,rt),e("input",{type:"file",onChange:m=>n.file_set_change(`attachments${c}`,c,"attachments"),name:`attachments${c}`,style:{display:"none"}},null,40,ct)]),e("button",{type:"button",onClick:m=>n.download_file(o),class:"button-eye"},ut,8,_t),e("button",{type:"button",disabled:t.data.is_disable,class:"del-department-3",onClick:m=>n.delete_attachments(o,c)},gt,8,ht)]))),128))])])]),ft,e("div",bt,[e("div",yt,[vt,u(U,{modelValue:t.data.sendTo,"onUpdate:modelValue":s[18]||(s[18]=o=>t.data.sendTo=o),flagSearch:!0,optionSelect:t.optionSelect.sendTo,onKeyup:n.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),e("div",kt,[e("div",St,[wt,e("div",null,[e("input",{type:"file",onChange:s[19]||(s[19]=o=>n.file_set_change("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(r=t.data.sendToFile)!=null&&r.filename?(g(),f("div",{key:1,class:"del-comment pointer",onClick:s[21]||(s[21]=o=>t.data.sendToFile.filename="")},[_(b((v=t.data.sendToFile)==null?void 0:v.filename)+" ",1),Ct])):(g(),f("button",{key:0,type:"button",class:"button-con pointer",onClick:s[20]||(s[20]=o=>n.upload_file("sendTo"))},[Vt,_(" แนบเอกสาร ")]))])]),u(y,{modelValue:t.data.comment,"onUpdate:modelValue":s[22]||(s[22]=o=>t.data.comment=o),name:"comment",rows:"3"},null,8,["modelValue"])]),e("div",Tt,[e("div",Ft,[Ut,u(p,{modelValue:t.data.process_type_id,"onUpdate:modelValue":s[23]||(s[23]=o=>t.data.process_type_id=o),name:"process_type_id",optionSelect:t.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),e("div",Lt,[qt,u(p,{modelValue:t.data.permission_id,"onUpdate:modelValue":s[24]||(s[24]=o=>t.data.permission_id=o),name:"permission_id",optionSelect:t.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),e("div",xt,[e("div",null,[e("button",{type:"button",class:"button button-danger",onClick:s[25]||(s[25]=o=>(t.data.sendTo=[],t.data.comment="",t.data.process_type_id="",t.data.permission_id=""))},[At,_(" ยกเลิก ")])]),e("div",null,[e("button",{type:"button",onClick:s[26]||(s[26]=o=>n.add_booking_follows()),class:"button button-success"},[It,_(" เพิ่มการส่งต่อ ")])])]),t.data.booking_follows.length>0?(g(),f("div",Mt)):I("",!0),(g(!0),f(T,null,F(t.data.booking_follows.filter(o=>o.flag!="delete"),(o,c)=>(g(),f("div",{class:"group-add",key:c},[e("div",Dt,[e("div",zt,"#"+b(c+1),1),e("img",{onClick:m=>n.delete_booking_follows(o,c),src:D,alt:"",class:"image-trash pointer"},null,8,Rt)]),e("div",jt,[e("div",Et,"ส่งต่อ : "+b((o==null?void 0:o.department_name)||"-"),1),e("div",Ot,"รูปแบบการดำเนินการ : "+b((o==null?void 0:o.process_type_name)||"-"),1),e("div",Bt,"การมองเห็น : "+b((o==null?void 0:o.permission_name)||"-"),1)]),e("div",Nt,"ความเห็น / คำสั่ง : "+b((o==null?void 0:o.comment)||"-"),1),e("div",Pt,"เอกสารแนบ : "+b((o==null?void 0:o.sendToFile.filename)||"-"),1)]))),128))]),Jt,e("div",Kt,[e("div",Gt,[e("button",{type:"button",class:"button-danger",onClick:s[27]||(s[27]=o=>n.back())},[Ht,_(" ปิด ")])]),e("div",Qt,[w(e("button",{type:"submit",class:"button-success button-save",onClick:s[28]||(s[28]=o=>t.flagSave=4)},[Wt,_(" บันทึก ")],512),[[V,t.edit]]),w(e("button",{type:"submit",class:"button-primary",onClick:s[29]||(s[29]=o=>t.flagSave=1)},[Xt,_(" บันทึกแบบร่าง ")],512),[[V,!t.edit]]),e("button",{type:"submit",class:"button-success",onClick:s[30]||(s[30]=o=>t.flagSave=2),disabled:t.data.sendTo.length<1},[Zt,_(" บันทึกและส่งต่อ ")],8,Yt)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])]),a.$route.params.id?(g(),f("div",$t,[e("div",es,[e("div",{class:"header pointer",onClick:s[31]||(s[31]=r=>(t.data.history.hide=!t.data.history.hide,n.historyClick(t.data.history.tab)))},[ts,e("div",ss,[w(e("i",as,null,512),[[V,!t.data.history.hide]]),w(e("i",os,null,512),[[V,t.data.history.hide]])])]),w(e("div",is,null,512),[[V,t.data.history.hide]]),w(e("div",ls,[e("div",ns,[e("div",{class:S(["pointer",t.data.history.tab==1?"active":""]),onClick:s[32]||(s[32]=r=>(t.data.history.tab=1,n.historyClick(1)))},[ds,_("ทั้งหมด")],2),e("div",{class:S(["pointer",t.data.history.tab==2?"active":""]),onClick:s[33]||(s[33]=r=>(t.data.history.tab=2,n.historyClick(2)))},[rs,_("ความเห็นคำสั่ง")],2),e("div",{class:S(["pointer",t.data.history.tab==3?"active":""]),onClick:s[34]||(s[34]=r=>(t.data.history.tab=3,n.historyClick(3)))},[cs,_("แก้ไขข้อมูล")],2)]),t.data.history.data.filter(r=>t.data.history.tab==2?r.type==2:t.data.history.tab==3?r.type==0||r.type==1:r).length>0?(g(!0),f(T,{key:0},F(t.data.history.data.filter(r=>t.data.history.tab==2?r.type==2:t.data.history.tab==3?r.type==0||r.type==1:r),(r,v)=>(g(),f("div",{class:S(["content-detail",v==0?"first":v==t.data.history.data.length-1?"end":""]),key:v},[e("div",_s,[e("div",ps,"#"+b(t.data.history.data.filter(o=>t.data.history.tab==2?o.type==2:t.data.history.tab==3?o.type==0||o.type==1:o).length-v),1),e("div",{class:S(["topic",r.bookactionname=="ความเห็นคำสั่ง"?"blue":r.bookactionname=="แก้ไขหนังสือ"?"yellow":"green"])},[e("i",{class:S(["bi icon-size",r.bookactionname=="ความเห็นคำสั่ง"?"bi-chat-left":r.bookactionname=="แก้ไขหนังสือ"?"bi-pencil-square":"bi-plus-lg"])},null,2),_(" "+b(r.bookactionname),1)],2),e("div",us,[hs,_(" โดย "+b(r.updateBy)+" / "+b(r.subName),1)]),e("div",ms," วันที่ "+b(r.createDate),1),e("div",gs,[fs,_(" "+b(r.createTime),1)])]),(g(!0),f(T,null,F(r.bookingRemarks,(o,c)=>(g(),f("ul",{class:"detail-list",key:c},[w(e("button",{class:"button-file",onClick:m=>n.download_file({filename:o.filepath.split("/").pop(),link:o.link})},b(o.filepath.split("/").pop()),9,bs),[[V,o.filepath]]),e("li",null,[_(b(o.remark)+" "+b(o.comment)+" ",1),o.signature_img&&r.bookactionname=="ความเห็นคำสั่ง"?(g(),f("div",ys,[e("img",{src:o.signature_img,alt:"",class:"image-size"},null,8,vs)])):I("",!0)])]))),128)),v!=t.data.history.data.length-1?(g(),f("div",ks)):I("",!0)],2))),128)):(g(),f("div",Ss,Vs))],512),[[V,t.data.history.hide]])])])):I("",!0)]),u(x,{modalAlert:t.modalAlert},null,8,["modalAlert"]),u(A,{show:t.showLoading},null,8,["show"])])}const xs=E(J,[["render",Cs]]);export{xs as default};
