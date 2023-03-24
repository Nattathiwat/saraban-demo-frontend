import{_ as E,r as y,o as g,c as f,a,b as _,d as z,j as h,t as b,w as I,v as D,F as U,h as q,n as V,i as O,g as R,k as M}from"./index-b82631cc.js";import{_ as B}from"./ballot-duotone-f2459825.js";import{_ as j}from"./plus-circle-duotone-64bd32fe.js";import{_ as L}from"./trash-alt-duotone-12d94c28.js";const N="/assets/paperclip-solid-3f664b84.svg",P="/assets/x-solid-79f884bc.svg";const J={name:"record-out-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},optionSelectDefault:{book_category_id:[]},showLoading:!1,edit:!1,flagSave:1,data:{create_type:"0",creater_id:"",book_category_id:"",book_type_id:"",secret_id:"12",speed_id:"12",booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],subject:"",tag:[],main_docs:[{filename:""}],attachments:[{filename:""}],order:[{filename:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"12",permission_id:"9",desc:"",regis_date:this.assetsUtils.currentDate(),human_flag:!1,response_id:"",greeting:"",as_of_date:""},optionSelect:{creater_id:[],book_category_id:[],book_type_id:[],secret_id:[],speed_id:[],process_type_id:[],permission_id:[],sendTo:[]},modalRegiter:{showModal:!1,booking_register_details:[]},FileType:[]}},methods:{delete_click(){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"บันทึกส่งออก ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0,t.axios.delete(`/booking-note/${t.$route.params.id}`).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(e=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}}},keyup_send_to(t){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user",{params:{keyword:t.target.value,department_id:localStorage.getItem("department_id")}}).then(e=>{e.data.data&&(e.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i.human_flag=i.human_flag,i)),this.optionSelect.sendTo=e.data.data)})},keyupDepartment(t,e){e.optionSelect.department_dest_id=[],this.axios.get("/master-data/department-user",{params:{keyword:t.target.value}}).then(i=>{i.data.data&&(i.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l)),e.optionSelect.department_dest_id=i.data.data)})},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(t,e){t.flag=="edit"?t.flag="delete":this.data.booking_refers.splice(e,1),this.data.booking_refers.length-this.data.booking_refers.filter(i=>i.flag=="delete").length<1&&this.add_booking_refers()},add_attachments_change(t){for(var e=0;e<document.querySelector(`[name="${t}"]`).files.length;e++){let i=document.querySelector(`[name="${t}"]`).files[e];if(this.data.FileType.indexOf(i.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;let l={filename:i.name,type:i.type,link:URL.createObjectURL(i),size:(i.size/1024/1024).toFixed(2)+" MB",file:i,flag:"add"};this.data.attachments.push(l)}document.querySelector(`[name="${t}"]`).value=null},delete_attachments(t,e){t.flag=="edit"?t.flag="delete":this.data.attachments.splice(e,1)},delete_main_docs(t,e){t.flag=="edit"?t.flag="delete":this.data.main_docs.splice(e,1)},delete_order(t,e){t.flag=="edit"?t.flag="delete":this.data.order.splice(e,1)},add_booking_follows(){this.data.sendTo.filter(t=>{if(!this.data.booking_follows.some(e=>e.department_id===t.value&&e.flag!="delete")){let e={department_id:parseInt(t.value),department_name:t.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:t.human_flag,response_id:parseInt(t.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(this.data.sendToFile.filename))}};this.optionSelect.process_type_id.find(i=>{i.value==this.data.process_type_id&&(e.process_type_name=i.name)}),this.optionSelect.permission_id.find(i=>{i.value==this.data.permission_id&&(e.permission_name=i.name)}),this.data.booking_follows.push(e)}})},delete_booking_follows(t,e){t.flag=="edit"?t.flag="delete":this.data.booking_follows.splice(e,1)},booking_refers_click(t){t.receive_document_number?(this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:t.receive_document_number}}).then(e=>{this.showLoading=!1,e.data.data.length>0?(t.book_refer_id=e.data.data[0].id,t.original_refer_id=e.data.data[0].id,t.book_type=e.data.data[0].book_type,t.desc=e.data.data[0].desc,t.receive_date=e.data.data[0].receive_date):(t.receive_document_number="",t.book_refer_id="",t.original_refer_id="",t.book_type="",t.desc="",t.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(e=>{t.receive_document_number="",t.book_refer_id="",t.original_refer_id="",t.book_type="",t.desc="",t.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})):(t.receive_document_number="",t.book_refer_id="",t.original_refer_id="",t.book_type="",t.desc="",t.receive_date="")},download_file(t){t.filename&&t.link&&this.axios({method:"get",url:t.link,baseURL:"",responseType:"blob"}).then(e=>{const i=new Blob([e.data],{type:this.assetsUtils.getTypeFile(t.filename)});window.open(URL.createObjectURL(i))})},change_signer_id(t){this.data.booking_register_details[t].booking_registers.filter(e=>{e.signer_id=this.data.booking_register_details[t].signer_id})},change_signature(t){this.data.booking_register_details[t].booking_registers.filter(e=>{e.is_signed=this.data.booking_register_details[t].is_signed})},upload_file(t){document.querySelector(`[name="${t}"]`).click()},file_set_change(t,e,i){for(var l=0;l<document.querySelector(`[name="${t}"]`).files.length;l++){let s=document.querySelector(`[name="${t}"]`).files[l];if(this.data.FileType.indexOf(s.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(i=="main_docs"){if(s.type=="application/pdf"){let d={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data[i][e]={...this.data[i][e],...d},document.querySelector(`[name="${t}"]`).value=null}}else if(i=="sendTo"){let d={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data.sendToFile=d}else{let d={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data[i][e]={...this.data[i][e],...d},document.querySelector(`[name="${t}"]`).value=null}}},file_attachment_change(t,e){for(var i=0;i<document.querySelector(`[name="${t}"]`).files.length;i++){let l=document.querySelector(`[name="${t}"]`).files[i],s={filename:l.name,type:l.type,link:URL.createObjectURL(l),size:(l.size/1024/1024).toFixed(2)+" MB",file:l};this.data.attachments[e]={...this.data.attachments[e],...s},document.querySelector(`[name="${t}"]`).value=null}},back(){this.$router.push({name:"subministry-work.record-out",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":this.flagSave==2?"บันทึกและส่งต่อ":"ออกเลขบันทึกภายใน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){t.flagSave==3?(t.showLoading=!0,t.axios.post("/booking-note/generate-number",{department_id:parseInt(localStorage.getItem("department_id")),creater_id:t.data.creater_id?parseInt(this.data.creater_id):parseInt(localStorage.getItem("user_id")),book_category_id:parseInt(t.data.book_category_id),year:t.data.as_of_date.split("/")[2]-543}).then(e=>{t.data.booking_note_number=e.data.data.out_document_number,t.upload_file_all()}).catch(e=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})):(t.showLoading=!0,t.upload_file_all())}}},upload_file_all(){let t=this.assetsUtils.currentDate(),e=[],i=[];this.data.attachments.filter(l=>{if(l.file){let s=new FormData;s.append("file",l.file),s.append("dst",`${t.split("/")[0]+"-"+t.split("/")[1]+"-"+t.split("/")[2]}`),e.push(this.axios.post("/upload/single",s,{headers:{"Content-Type":"multipart/form-data"}}))}}),e.length>0?this.axios.all([...e]).then(this.axios.spread((...l)=>{l.filter((s,d)=>{i.push({...this.data.attachments[d],...s.data.data,filepath:s.data.data.path})}),e.length==i.length&&this.upload_file_all2(i)})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}}):this.upload_file_all2(i)},upload_file_all2(t){let e=this.assetsUtils.currentDate(),i=[],l=[];this.data.main_docs.filter(s=>{if(s.file){let d=new FormData;d.append("file",s.file),d.append("dst",`${e.split("/")[0]+"-"+e.split("/")[1]+"-"+e.split("/")[2]}`),i.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}}),i.length>0?this.axios.all([...i]).then(this.axios.spread((...s)=>{s.filter((d,p)=>{l.push({...this.data.main_docs[p],...d.data.data,filepath:d.data.data.path})}),i.length==l.length&&this.upload_file_all3(l,t)})).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}}):this.upload_file_all3(l,t)},upload_file_all3(t,e){var l;let i=this.assetsUtils.currentDate();if((l=this.data.sendToFile)!=null&&l.filename){console.log("up3");let s=new FormData;s.append("file",this.data.sendToFile.file),s.append("dst",`${i.split("/")[0]+"-"+i.split("/")[1]+"-"+i.split("/")[2]}`),this.axios.post("/upload/single",s,{headers:{"Content-Type":"multipart/form-data"}}).then(d=>{console.log("then3"),this.data.attach_filename=d.data.data.filename,this.data.attach_filepath=d.data.data.path,this.upload_file_all4(t,e)}).catch(d=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}else console.log("elseup3"),this.upload_file_all4(t,e)},upload_file_all4(t,e){let i=this.assetsUtils.currentDate(),l=[],s=[];this.data.booking_follows.filter(d=>{var p;if((p=d.sendToFile)!=null&&p.filename){console.log("up4");let c=new FormData;c.append("file",d.sendToFile.file),c.append("dst",`${i.split("/")[0]+"-"+i.split("/")[1]+"-"+i.split("/")[2]}`),l.push(this.axios.post("/upload/single",c,{headers:{"Content-Type":"multipart/form-data"}}))}}),l.length>0?(console.log("arr3"),this.axios.all([...l]).then(this.axios.spread((...d)=>{console.log("then4"),d.filter((p,c)=>{this.data.booking_follows[c].attach_filepath=p.data.data.path,this.data.booking_follows[c].attach_filename=p.data.data.filename,s.push({...this.data.booking_follows[c],...p.data.data,filepath:p.data.data.path})}),l.length==s.length&&(console.log("call"),this.call_api_save(t,e))})).catch(d=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})):(console.log("elseup4"),this.call_api_save(t,e))},call_api_save(t,e){console.log("fncall");let i=this,l="";this.data.tag.filter(d=>{l+=d.name+","}),l=l.slice(0,-1),this.data.sendTo.filter(d=>{if(!this.data.booking_follows.some(p=>p.department_id===d.value&&p.flag!="delete")){let p={department_id:parseInt(d.value),department_name:d.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:d.human_flag,response_id:parseInt(d.value),attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename,sendToFile:{filename:this.data.attach_filename}};this.optionSelect.process_type_id.find(c=>{c.value==this.data.process_type_id&&(p.process_type_name=c.name)}),this.optionSelect.permission_id.find(c=>{c.value==this.data.permission_id&&(p.permission_name=c.name)}),this.data.booking_follows.push(p)}}),console.log("datasave");let s={create_type:parseInt(this.data.create_type),creater_id:this.data.creater_id?parseInt(this.data.creater_id):parseInt(localStorage.getItem("user_id")),book_category_id:parseInt(this.data.book_category_id),book_type_id:parseInt(this.data.book_type_id),secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),subject:this.data.subject,user_id:parseInt(localStorage.getItem("user_id")),tag:l,attachments:e,main_docs:t,booking_refers:this.data.booking_refers.filter(d=>d.book_refer_id),booking_follows:this.data.booking_follows,flag:this.flagSave==1?"draft":"",greeting:this.data.greeting,desc:this.data.desc,regis_date:this.assetsUtils.currentDate(),as_of_date:this.data.as_of_date,is_draft:this.flagSave==1||this.flagSave==3?1:0,booking_note_number:this.data.booking_note_number};this.showLoading=!0,this.axios[this.edit?"put":"post"](`/booking-note${this.edit?"/"+this.$route.params.id:""}`,s).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:this.flagSave==1?"ทำการบันทึกแบบร่างสำเร็จแล้ว":this.flagSave==3?"ทำการออกเลขบันทึกภายในสำเร็จ":"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){i.back()}}}).catch(d=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})},api_detail(){this.showLoading=!0,this.axios.get(`/booking-note/${this.$route.params.id}`).then(t=>{var e,i;this.showLoading=!1,this.data={...this.data,...JSON.parse(JSON.stringify(t.data.data))},this.data.regis_date=t.data.data.created_at,this.data.tag=[],(e=t.data.data.tag)==null||e.split(",").filter(l=>{l&&this.data.tag.push({value:"",name:l})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],t.data.data.booking_refers.filter(l=>{l.flag="edit",this.axios.get(`/master-data/book-refer/${l.book_type}/${l.id}`).then(s=>{this.data.booking_refers.push({...s.data.data,...l})}).catch(s=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}),this.data.attachments.filter(l=>(l.flag="edit",l.link=l.filepath?this.backendport+"/"+l.filepath:"",l)),this.data.booking_follows.filter(l=>(l.flag="edit",l)),this.data.booking_follows=[],(((i=t.data.data.booking_refers)==null?void 0:i.length)<1||!t.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}]),(this.data.attachments.length<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(this.data.main_docs.length<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}])}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})},api_master(){this.showLoading=!0;const t=this.axios.get("/master-data/book-type-note"),e=this.axios.get("/master-data/speed"),i=this.axios.get("/master-data/secret"),l=this.axios.get("/master-data/process-type"),s=this.axios.get("/master-data/permission-type"),d=this.axios.get("/user"),p=this.axios.get("/user"),c=this.axios.get("/master-data/register-type"),C=this.axios.get("/master-data/department-user"),A=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([t,e,i,l,s,d,p,c,C,A]).then(this.axios.spread((...m)=>{this.showLoading=!1;const v=m[0],k=m[1],T=m[2],x=m[3],F=m[4],S=m[5],w=m[6],o=m[7],r=m[8],u=m[9];v.data.data.filter(n=>(n.value=n.id,n.name=n.name,n)),k.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),T.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),x.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),F.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),S.data.data.filter(n=>(n.value=n.id,n.name=n.fname+" "+n.lname,n)),w.data.data.filter(n=>(n.value=n.id,n.name=n.fname+" "+n.lname,n)),o.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),r.data.data.filter(n=>(n.value=n.id,n.name=n.department_full_name,n)),this.data.FileType=[],u.data.data.filter(n=>{n.active_flag==1&&this.data.FileType.push(n.content_type)}),this.optionSelect.book_type_id=v.data.data,this.optionSelect.speed_id=k.data.data,this.optionSelect.secret_id=T.data.data,this.optionSelect.process_type_id=x.data.data,this.optionSelect.permission_id=F.data.data,this.optionSelect.creater_id=S.data.data,this.optionSelectDefault.signer_id=w.data.data,this.optionSelectDefault.book_category_id=o.data.data,this.optionSelectDefault.department_dest_id=r.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(m=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:m.response.data.message}})},keyup_record_type(t){this.optionSelect.sendTo=[],this.axios.get("/master-data/book-type-note",{params:{keyword:t.target.value}}).then(e=>{e.data.data&&(e.data.data.filter(i=>(i.value=i.id,i.name=i.name,i)),this.optionSelect.book_type_id=e.data.data)})},keyupRecordType(t,e){e.optionSelect.book_type_id=[],this.axios.get("/master-data/book-type-note",{params:{keyword:t.target.value}}).then(i=>{i.data.data&&(i.data.data.filter(l=>(l.value=l.id,l.name=l.name,l)),e.optionSelect.book_type_id=i.data.data)})}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},K={class:"booking-out-detail"},G={class:"group-overflow"},H={class:"detail"},Q={class:"group-head"},W={class:"group-first"},X=a("img",{src:B,alt:"",class:"icon-size"},null,-1),Y={class:"name"},Z=a("div",{class:"group-image"}," ออกเลขบันทึกภายใน ",-1),$=[Z],ee=a("div",{class:"line"},null,-1),te={class:"group-detail"},ae={class:"group-input"},se=a("div",{class:"name"},"เจ้าของหนังสือ",-1),oe={class:"d-flex"},ie={class:"group-input mb-0"},le=a("div",{class:"name"},[h("ชื่อ - นามสกุล "),a("span",{class:"required"},"*")],-1),de={class:"group-between"},ne={class:"group-input left"},re=a("div",{class:"name"},[h("ทะเบียนบันทึกข้อความ"),a("span",{class:"required"},"*")],-1),ce={class:"group-input"},_e=a("div",{class:"name"},[h("ลงวันที่"),a("span",{class:"required"},"*")],-1),pe={class:"group-between"},ue={class:"group-input left"},he=a("div",{class:"name"},[h("ชนิดของบันทึกข้อความ "),a("span",{class:"required"},"*")],-1),me={class:"group-input left"},ge=a("div",{class:"name"},[h("ชั้นความลับ "),a("span",{class:"required"},"*")],-1),fe={class:"group-input"},be=a("div",{class:"name"},[h("ความเร่งด่วน "),a("span",{class:"required"},"*")],-1),ye={class:"group-between"},ve={class:"group-input"},ke=a("div",{class:"name"},[h("ชื่อเรื่อง "),a("span",{class:"required"},"*")],-1),Se={class:"group-between"},we={class:"group-input"},Ve=a("div",{class:"name"},"เรียน",-1),Ce={class:"group-between"},Te={class:"group-input"},xe=a("div",{class:"name"},"รายละเอียด",-1),Fe={class:"group-between"},Ue={class:"group-input"},qe=a("div",{class:"name"},"Tag สำหรับค้นหา",-1),Le={class:"group-input d-flex align-items-center"},Ae=a("div",{class:"name"},"อ้างอิงถึง",-1),Me=a("div",{class:"group-image"},[a("img",{src:j,alt:"",class:"icon-plus"}),h(" เพิ่มเอกสารอ้างอิง ")],-1),Ie=[Me],De={class:"group-input left"},Re={class:"group-input left"},je={class:"group-input d-flex"},Ee=["onClick"],ze=a("img",{src:L,alt:"",class:"image-trash pointer"},null,-1),Oe=[ze],Be=a("div",{class:"line"},null,-1),Ne={class:"group-detail"},Pe={class:"group-between"},Je={class:"group-input left"},Ke=a("div",{class:"name"},"บันทึกต้นเรื่อง",-1),Ge={class:"group-input-file"},He=["onClick"],Qe=["onClick"],We=["onChange","name"],Xe=["onClick"],Ye=a("i",{class:"bi bi-eye icon-eye"},null,-1),Ze=[Ye],$e=["disabled","onClick"],et=a("img",{src:L,alt:"",class:"image-trash"},null,-1),tt=[et],at={class:"group-input"},st={class:"group-input d-flex align-items-center"},ot=a("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),it=["disabled"],lt=a("div",{class:"group-image"},[a("img",{src:j,alt:"",class:"icon-plus"}),h(" เพิ่มไฟล์ ")],-1),dt=[lt],nt={class:"group-input-file"},rt=["onClick"],ct=["onClick"],_t=["onChange","name"],pt=["onClick"],ut=a("i",{class:"bi bi-eye icon-eye"},null,-1),ht=[ut],mt=["disabled","onClick"],gt=a("img",{src:L,alt:"",class:"image-trash"},null,-1),ft=[gt],bt=a("div",{class:"line"},null,-1),yt={class:"send-to"},vt={class:"group-input"},kt=a("div",{class:"name"},[h("ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) "),a("span",{class:"required"},"*กรุณาใส่รายชื่อที่ต้องการส่งต่อ")],-1),St={class:"group-input left"},wt={class:"name d-flex justify-content-between"},Vt=a("div",null,"ความเห็น / คำสั่ง",-1),Ct=a("img",{src:N,alt:"",class:"icon-paperclip"},null,-1),Tt=a("img",{src:P,alt:"",class:"image-x"},null,-1),xt={class:"group-between"},Ft={class:"group-input left"},Ut=a("div",{class:"name"},"รูปแบบการดำเนินการ",-1),qt={class:"group-input"},Lt=a("div",{class:"name"},"การมองเห็น",-1),At={class:"d-flex align-items-center justify-content-between"},Mt=a("img",{src:R,alt:"times-circle",class:"icon-times-circle"},null,-1),It=a("img",{src:M,alt:"times-circle",class:"icon-check-circle"},null,-1),Dt={key:0,class:"line mt-3"},Rt={class:"d-flex justify-content-between"},jt={class:"title"},Et=["onClick"],zt={class:"d-flex ms-2 mt-2"},Ot={class:"name"},Bt={class:"name ms-5"},Nt={class:"name ms-5"},Pt={class:"name ms-2 mt-1"},Jt={class:"name ms-2 mt-1"},Kt=a("div",{class:"line mt-4"},null,-1),Gt={class:"group-footer"},Ht={class:"footer-left d-flex"},Qt=a("img",{src:R,alt:"times-circle",class:"icon-times-circle"},null,-1),Wt={class:"footer-right"},Xt=a("img",{src:M,alt:"times-circle",class:"icon-check-circle"},null,-1),Yt=["disabled"],Zt=a("img",{src:M,alt:"times-circle",class:"icon-check-circle"},null,-1);function $t(t,e,i,l,s,d){const p=y("cpn-radio"),c=y("cpn-select"),C=y("cpn-datepicker"),A=y("cpn-autoComplete"),m=y("cpn-textArea"),v=y("cpn-input"),k=y("cpn-input-tags"),T=y("Form"),x=y("cpn-modal-alert"),F=y("cpn-loading");return g(),f("div",K,[a("div",G,[a("div",H,[_(T,{onSubmit:d.on_submit,onInvalidSubmit:t.onInvalidSubmit},{default:z(()=>{var S,w;return[a("div",Q,[a("div",W,[X,a("div",Y,[h(b(s.edit?"แก้ไขบันทึกส่งออก":"สร้างบันทึกส่งออก")+" ",1),a("label",null,b(s.data.booking_note_number),1)])]),I(a("button",{type:"submit",class:"add-booking-out",onClick:e[0]||(e[0]=o=>s.flagSave=3)},$,512),[[D,!s.data.booking_note_number]])]),ee,a("div",te,[a("div",ae,[se,a("div",oe,[_(p,{modelValue:s.data.create_type,"onUpdate:modelValue":e[1]||(e[1]=o=>s.data.create_type=o),name:"my1",class:"",style:{"min-width":"120px"},value:"0",label:"สร้างเอง",onChange:e[2]||(e[2]=o=>s.data.creater_id="")},null,8,["modelValue"]),_(p,{modelValue:s.data.create_type,"onUpdate:modelValue":e[3]||(e[3]=o=>s.data.create_type=o),name:"my2",class:"ms-5 me-5",style:{"min-width":"120px"},value:"1",label:"สร้างแทน",onChange:e[4]||(e[4]=o=>s.data.creater_id="")},null,8,["modelValue"]),I(a("div",ie,[le,_(c,{modelValue:s.data.creater_id,"onUpdate:modelValue":e[5]||(e[5]=o=>s.data.creater_id=o),name:"creater_id",optionSelect:s.optionSelect.creater_id,rules:s.data.create_type==1?"required":"",placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect","rules"])],512),[[D,s.data.create_type==1]])])]),a("div",de,[a("div",ne,[re,_(c,{modelValue:s.data.book_category_id,"onUpdate:modelValue":e[6]||(e[6]=o=>s.data.book_category_id=o),name:"book_category_id",rules:"required",optionSelect:s.optionSelectDefault.book_category_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),a("div",ce,[_e,_(C,{modelValue:s.data.as_of_date,"onUpdate:modelValue":e[7]||(e[7]=o=>s.data.as_of_date=o),name:"as_of_date",rules:"required",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])]),a("div",pe,[a("div",ue,[he,_(A,{modelValue:s.data.book_type_id,"onUpdate:modelValue":e[8]||(e[8]=o=>s.data.book_type_id=o),name:"book_type_id",rules:"required",optionSelect:s.optionSelect.book_type_id,onKeyup:d.keyup_record_type,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect","onKeyup"])]),a("div",me,[ge,_(c,{modelValue:s.data.secret_id,"onUpdate:modelValue":e[9]||(e[9]=o=>s.data.secret_id=o),name:"secret_id",rules:"required",optionSelect:s.optionSelect.secret_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),a("div",fe,[be,_(c,{modelValue:s.data.speed_id,"onUpdate:modelValue":e[10]||(e[10]=o=>s.data.speed_id=o),name:"speed_id",rules:"required",optionSelect:s.optionSelect.speed_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),a("div",ye,[a("div",ve,[ke,_(m,{modelValue:s.data.subject,"onUpdate:modelValue":e[11]||(e[11]=o=>s.data.subject=o),name:"subject",rules:"required",rows:"1"},null,8,["modelValue"])])]),a("div",Se,[a("div",we,[Ve,_(v,{modelValue:s.data.greeting,"onUpdate:modelValue":e[12]||(e[12]=o=>s.data.greeting=o),name:"greeting",type:"text"},null,8,["modelValue"])])]),a("div",Ce,[a("div",Te,[xe,_(m,{modelValue:s.data.desc,"onUpdate:modelValue":e[13]||(e[13]=o=>s.data.desc=o),name:"record_out_description",rows:"1"},null,8,["modelValue"])])]),a("div",Fe,[a("div",Ue,[qe,_(k,{modelValue:s.data.tag,"onUpdate:modelValue":e[14]||(e[14]=o=>s.data.tag=o),name:"tag",placeholder:"Enter a new tag"},null,8,["modelValue"])])]),a("div",Le,[Ae,a("button",{type:"button",class:"add-booking-out",onClick:e[15]||(e[15]=o=>d.add_booking_refers())},Ie)]),(g(!0),f(U,null,q(s.data.booking_refers.filter(o=>o.flag!="delete"),(o,r)=>(g(),f("div",{class:"group-between",key:r},[a("div",De,[_(v,{modelValue:o.receive_document_number,"onUpdate:modelValue":u=>o.receive_document_number=u,name:`receive_document_number${r}`,type:"text",searchFlag:!0,onSearchClick:u=>d.booking_refers_click(o),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),a("div",Re,[_(v,{modelValue:o.desc,"onUpdate:modelValue":u=>o.desc=u,name:`nameRefers${r}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),a("div",je,[_(C,{modelValue:o.receive_date,"onUpdate:modelValue":u=>o.receive_date=u,name:`dateRefers${r}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),a("button",{type:"button",onClick:u=>d.delete_booking_refers(o,r),class:"button-delete ms-3"},Oe,8,Ee)])]))),128))]),Be,a("div",Ne,[a("div",Pe,[a("div",Je,[Ke,(g(!0),f(U,null,q(s.data.main_docs.filter(o=>o.flag!="delete"),(o,r)=>(g(),f("div",{class:"d-flex mb-3",key:r},[a("div",Ge,[a("button",{type:"button",class:"button-file",onClick:u=>s.edit?"":d.upload_file(`main_docs${r}`)},[a("span",{class:V(o.filename?"":"no-data")},b(o.filename?o.filename:"บันทึกต้นเรื่อง"),3)],8,He),a("div",{class:V(s.edit?"text disabled":"text pointer"),onClick:u=>s.edit?"":d.upload_file(`main_docs${r}`)},"แนบเอกสาร",10,Qe),a("input",{type:"file",onChange:u=>d.file_set_change(`main_docs${r}`,r,"main_docs"),name:`main_docs${r}`,style:{display:"none"},accept:"application/pdf"},null,40,We)]),a("button",{type:"button",onClick:u=>d.download_file(o),class:"button-eye"},Ze,8,Xe),a("button",{type:"button",class:"del-department-3",disabled:s.edit,onClick:u=>s.data.main_docs.length>1?s.data.main_docs.splice(r,1):o.filename=""},tt,8,$e)]))),128))]),a("div",at,[a("div",st,[ot,a("button",{type:"button",class:"add-booking-receive",disabled:s.edit,onClick:e[16]||(e[16]=o=>d.upload_file("addAttachments"))},dt,8,it),a("input",{multiple:"",type:"file",onChange:e[17]||(e[17]=o=>d.add_attachments_change("addAttachments")),name:"addAttachments",style:{display:"none"}},null,32)]),(g(!0),f(U,null,q(s.data.attachments.filter(o=>o.flag!="delete"),(o,r)=>(g(),f("div",{class:"d-flex mb-3",key:r},[a("div",nt,[a("button",{type:"button",class:V([s.edit?"none-pointer":"","button-file"]),onClick:u=>s.edit?"":d.upload_file(`attachments${r}`)},[a("span",{class:V(o.filename?"":"no-data")},b(o.filename?o.filename:"สิ่งที่ส่งมาด้วย"),3)],10,rt),a("div",{class:V(s.edit?"text disabled":"text pointer"),onClick:u=>s.edit?"":d.upload_file(`attachments${r}`)},"แนบเอกสาร",10,ct),a("input",{type:"file",onChange:u=>d.file_set_change(`attachments${r}`,r,"attachments"),name:`attachments${r}`,style:{display:"none"}},null,40,_t)]),a("button",{type:"button",onClick:u=>d.download_file(o),class:"button-eye"},ht,8,pt),a("button",{type:"button",class:"del-department-3",disabled:s.edit,onClick:u=>d.delete_attachments(o,r)},ft,8,mt)]))),128))])])]),bt,a("div",yt,[a("div",vt,[kt,_(k,{modelValue:s.data.sendTo,"onUpdate:modelValue":e[18]||(e[18]=o=>s.data.sendTo=o),flagSearch:!0,optionSelect:s.optionSelect.sendTo,onKeyup:d.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),a("div",St,[a("div",wt,[Vt,a("div",null,[a("input",{type:"file",onChange:e[19]||(e[19]=o=>d.file_set_change("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(S=s.data.sendToFile)!=null&&S.filename?(g(),f("div",{key:1,class:"del-comment pointer",onClick:e[21]||(e[21]=o=>s.data.sendToFile.filename="")},[h(b((w=s.data.sendToFile)==null?void 0:w.filename)+" ",1),Tt])):(g(),f("button",{key:0,type:"button",class:"button-con pointer",onClick:e[20]||(e[20]=o=>d.upload_file("sendTo"))},[Ct,h(" แนบเอกสาร ")]))])]),_(m,{modelValue:s.data.comment,"onUpdate:modelValue":e[22]||(e[22]=o=>s.data.comment=o),name:"comment",rows:"3"},null,8,["modelValue"])]),a("div",xt,[a("div",Ft,[Ut,_(c,{modelValue:s.data.process_type_id,"onUpdate:modelValue":e[23]||(e[23]=o=>s.data.process_type_id=o),name:"process_type_id",optionSelect:s.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),a("div",qt,[Lt,_(c,{modelValue:s.data.permission_id,"onUpdate:modelValue":e[24]||(e[24]=o=>s.data.permission_id=o),name:"permission_id",optionSelect:s.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),a("div",At,[a("div",null,[a("button",{type:"button",class:"button button-danger",onClick:e[25]||(e[25]=o=>(s.data.sendTo=[],s.data.comment="",s.data.process_type_id="",s.data.permission_id=""))},[Mt,h(" ยกเลิก ")])]),a("div",null,[a("button",{type:"button",onClick:e[26]||(e[26]=o=>d.add_booking_follows()),class:"button button-success"},[It,h(" เพิ่มการส่งต่อ ")])])]),s.data.booking_follows.length>0?(g(),f("div",Dt)):O("",!0),(g(!0),f(U,null,q(s.data.booking_follows.filter(o=>o.flag!="delete"),(o,r)=>(g(),f("div",{class:"group-add",key:r},[a("div",Rt,[a("div",jt,"#"+b(r+1),1),a("img",{onClick:u=>d.delete_booking_follows(o,r),src:L,alt:"",class:"image-trash pointer"},null,8,Et)]),a("div",zt,[a("div",Ot,"ส่งต่อ : "+b((o==null?void 0:o.department_name)||"-"),1),a("div",Bt,"รูปแบบการดำเนินการ : "+b((o==null?void 0:o.process_type_name)||"-"),1),a("div",Nt,"การมองเห็น : "+b((o==null?void 0:o.permission_name)||"-"),1)]),a("div",Pt,"ความเห็น / คำสั่ง : "+b((o==null?void 0:o.comment)||"-"),1),a("div",Jt,"เอกสารแนบ : "+b((o==null?void 0:o.sendToFile.filename)||"-"),1)]))),128))]),Kt,a("div",Gt,[a("div",Ht,[a("button",{type:"button",class:"button-danger",onClick:e[27]||(e[27]=o=>d.back())},[Qt,h(" ปิด ")])]),a("div",Wt,[a("button",{type:"submit",class:"button-primary",onClick:e[28]||(e[28]=o=>s.flagSave=1)},[Xt,h(" บันทึกแบบร่าง ")]),a("button",{type:"submit",class:"button-success",onClick:e[29]||(e[29]=o=>s.flagSave=2),disabled:s.data.sendTo.length<1},[Zt,h(" บันทึกและส่งต่อ ")],8,Yt)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])])]),_(x,{modalAlert:s.modalAlert},null,8,["modalAlert"]),_(F,{show:s.showLoading},null,8,["show"])])}const oa=E(J,[["render",$t]]);export{oa as default};
