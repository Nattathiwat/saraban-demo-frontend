import{_ as E,r as v,o as g,c as f,a as t,b as p,d as z,j as u,t as y,w as M,v as T,F as C,h as x,n as w,i as O,g as D,k as I}from"./index-399bd0cc.js";import{_ as B}from"./ballot-duotone-f2459825.js";import{_ as R}from"./plus-circle-duotone-64bd32fe.js";import{_ as A}from"./trash-alt-duotone-12d94c28.js";const N="/assets/paperclip-solid-3f664b84.svg",P="/assets/x-solid-79f884bc.svg";const K={name:"record-out-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},optionSelectDefault:{book_category_id:[]},showLoading:!1,edit:!1,flagSave:1,data:{create_type:"0",creater_id:"",book_category_id:"",book_type_id:"",secret_id:"12",speed_id:"12",booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],subject:"",tag:[],main_docs:[{filename:""}],attachments:[{filename:""}],order:[{filename:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"12",permission_id:"9",desc:"",regis_date:this.assetsUtils.currentDate(),human_flag:!1,response_id:"",greeting:"",as_of_date:""},optionSelect:{creater_id:[],book_category_id:[],book_type_id:[],secret_id:[],speed_id:[],process_type_id:[],permission_id:[],sendTo:[]},modalRegiter:{showModal:!1,booking_register_details:[]},FileType:[]}},methods:{delete_click(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"บันทึกส่งออก ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.axios.delete(`/booking-note/${a.$route.params.id}`).then(()=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(e=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}}},keyup_send_to(a){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user",{params:{keyword:a.target.value,department_id:localStorage.getItem("department_id")}}).then(e=>{e.data.data&&(e.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i.human_flag=i.human_flag,i)),this.optionSelect.sendTo=e.data.data)})},keyupDepartment(a,e){e.optionSelect.department_dest_id=[],this.axios.get("/master-data/department-user",{params:{keyword:a.target.value}}).then(i=>{i.data.data&&(i.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l)),e.optionSelect.department_dest_id=i.data.data)})},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(a,e){a.flag=="edit"?a.flag="delete":this.data.booking_refers.splice(e,1),this.data.booking_refers.length-this.data.booking_refers.filter(i=>i.flag=="delete").length<1&&this.add_booking_refers()},add_attachments_change(a){for(var e=0;e<document.querySelector(`[name="${a}"]`).files.length;e++){let i=document.querySelector(`[name="${a}"]`).files[e];if(this.data.FileType.indexOf(i.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;let l={filename:i.name,type:i.type,link:URL.createObjectURL(i),size:(i.size/1024/1024).toFixed(2)+" MB",file:i,flag:"add"};this.data.attachments.push(l)}document.querySelector(`[name="${a}"]`).value=null},delete_attachments(a,e){a.flag=="edit"?a.flag="delete":this.data.attachments.splice(e,1)},delete_main_docs(a,e){a.flag=="edit"?a.flag="delete":this.data.main_docs.splice(e,1)},delete_order(a,e){a.flag=="edit"?a.flag="delete":this.data.order.splice(e,1)},add_booking_follows(){this.data.sendTo.filter(a=>{if(!this.data.booking_follows.some(e=>e.department_id===a.value&&e.flag!="delete")){let e={department_id:parseInt(a.value),department_name:a.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:a.human_flag,response_id:parseInt(a.value)};this.optionSelect.process_type_id.find(i=>{i.value==this.data.process_type_id&&(e.process_type_name=i.name)}),this.optionSelect.permission_id.find(i=>{i.value==this.data.permission_id&&(e.permission_name=i.name)}),this.data.booking_follows.push(e)}})},delete_booking_follows(a,e){a.flag=="edit"?a.flag="delete":this.data.booking_follows.splice(e,1)},booking_refers_click(a){a.receive_document_number?(this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:a.receive_document_number}}).then(e=>{this.showLoading=!1,e.data.data.length>0?(a.book_refer_id=e.data.data[0].id,a.original_refer_id=e.data.data[0].id,a.book_type=e.data.data[0].book_type,a.desc=e.data.data[0].desc,a.receive_date=e.data.data[0].receive_date):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(e=>{a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="")},download_file(a){a.filename&&a.link&&this.axios({method:"get",url:a.link,baseURL:"",responseType:"blob"}).then(e=>{const i=new Blob([e.data],{type:this.assetsUtils.getTypeFile(a.filename)});window.open(URL.createObjectURL(i))})},change_signer_id(a){this.data.booking_register_details[a].booking_registers.filter(e=>{e.signer_id=this.data.booking_register_details[a].signer_id})},change_signature(a){this.data.booking_register_details[a].booking_registers.filter(e=>{e.is_signed=this.data.booking_register_details[a].is_signed})},upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_set_change(a,e,i){for(var l=0;l<document.querySelector(`[name="${a}"]`).files.length;l++){let s=document.querySelector(`[name="${a}"]`).files[l];if(this.data.FileType.indexOf(s.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(i=="main_docs"){if(s.type=="application/pdf"){let n={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data[i][e]={...this.data[i][e],...n},document.querySelector(`[name="${a}"]`).value=null}}else{let n={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data[i][e]={...this.data[i][e],...n},document.querySelector(`[name="${a}"]`).value=null}}},file_attachment_change(a,e){for(var i=0;i<document.querySelector(`[name="${a}"]`).files.length;i++){let l=document.querySelector(`[name="${a}"]`).files[i],s={filename:l.name,type:l.type,link:URL.createObjectURL(l),size:(l.size/1024/1024).toFixed(2)+" MB",file:l};this.data.attachments[e]={...this.data.attachments[e],...s},document.querySelector(`[name="${a}"]`).value=null}},back(){this.$router.push({name:"subministry-work.record-out",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":this.flagSave==2?"บันทึกและส่งต่อ":"ออกเลขบันทึกภายใน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){a.flagSave==3?(a.showLoading=!0,a.axios.post("/booking-note/generate-number",{department_id:parseInt(localStorage.getItem("department_id")),creater_id:a.data.creater_id?parseInt(this.data.creater_id):parseInt(localStorage.getItem("user_id")),book_category_id:parseInt(a.data.book_category_id),year:a.data.as_of_date.split("/")[2]-543}).then(e=>{a.data.booking_note_number=e.data.data.out_document_number,a.upload_file_all()}).catch(e=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})):(a.showLoading=!0,a.upload_file_all())}}},upload_file_all(){let a=this.assetsUtils.currentDate(),e=[],i=[];this.data.attachments.filter(l=>{if(l.file){let s=new FormData;s.append("file",l.file),s.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),e.push(this.axios.post("/upload/single",s,{headers:{"Content-Type":"multipart/form-data"}}))}}),e.length>0?this.axios.all([...e]).then(this.axios.spread((...l)=>{l.filter((s,n)=>{i.push({...this.data.attachments[n],...s.data.data,filepath:s.data.data.path})}),e.length==i.length&&this.upload_file_all2(i)})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}}):this.upload_file_all2(i)},upload_file_all2(a){let e=this.assetsUtils.currentDate(),i=[],l=[];this.data.main_docs.filter(s=>{if(s.file){let n=new FormData;n.append("file",s.file),n.append("dst",`${e.split("/")[0]+"-"+e.split("/")[1]+"-"+e.split("/")[2]}`),i.push(this.axios.post("/upload/single",n,{headers:{"Content-Type":"multipart/form-data"}}))}}),i.length>0?this.axios.all([...i]).then(this.axios.spread((...s)=>{s.filter((n,m)=>{l.push({...this.data.main_docs[m],...n.data.data,filepath:n.data.data.path})}),i.length==l.length&&this.call_api_save(l,a)})).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}}):this.upload_file_all3(l,a)},upload_file_all3(a,e){let i=this.assetsUtils.currentDate(),l=[],s="";this.data.order.filter(n=>{if(n.file){let m=new FormData;m.append("file",n.file),m.append("dst",`${i.split("/")[0]+"-"+i.split("/")[1]+"-"+i.split("/")[2]}`),l.push(this.axios.post("/upload/single",m,{headers:{"Content-Type":"multipart/form-data"}}))}}),l.length>0?this.axios.all([...l]).then(this.axios.spread((...n)=>{n.filter((m,_)=>{s.push({...this.data.order[_],...m.data.data,filepath:m.data.data.path})}),l.length==s.length&&this.call_api_save(e,a,s)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}):this.call_api_save(e,a,s)},call_api_save(a,e,i){let l=e,s=this,n="";this.data.tag.filter(_=>{n+=_.name+","}),n=n.slice(0,-1),this.data.sendTo.filter(_=>{if(!this.data.booking_follows.some(b=>b.department_id===_.value&&b.flag!="delete")){let b={department_id:parseInt(_.value),department_name:_.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:_.human_flag,response_id:parseInt(_.value),attach_filepath:i};console.log(i),this.optionSelect.process_type_id.find(k=>{k.value==this.data.process_type_id&&(b.process_type_name=k.name)}),this.optionSelect.permission_id.find(k=>{k.value==this.data.permission_id&&(b.permission_name=k.name)}),this.data.booking_follows.push(b)}});let m={create_type:parseInt(this.data.create_type),creater_id:this.data.creater_id?parseInt(this.data.creater_id):parseInt(localStorage.getItem("user_id")),book_category_id:parseInt(this.data.book_category_id),book_type_id:parseInt(this.data.book_type_id),secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),subject:this.data.subject,user_id:parseInt(localStorage.getItem("user_id")),tag:n,attachments:l,main_docs:a,booking_refers:this.data.booking_refers.filter(_=>_.book_refer_id),booking_follows:this.data.booking_follows,flag:this.flagSave==1?"draft":"",greeting:this.data.greeting,desc:this.data.desc,regis_date:this.assetsUtils.currentDate(),as_of_date:this.data.as_of_date,is_draft:this.flagSave==1||this.flagSave==3?1:0,booking_note_number:this.data.booking_note_number};this.showLoading=!0,this.axios[this.edit?"put":"post"](`/booking-note${this.edit?"/"+this.$route.params.id:""}`,m).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:this.flagSave==1?"ทำการบันทึกแบบร่างสำเร็จแล้ว":this.flagSave==3?"ทำการออกเลขบันทึกภายในสำเร็จ":"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.back()}}}).catch(_=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:_.response.data.message}})},api_detail(){this.showLoading=!0,this.axios.get(`/booking-note/${this.$route.params.id}`).then(a=>{var e,i;this.showLoading=!1,this.data=JSON.parse(JSON.stringify(a.data.data)),this.data.regis_date=a.data.data.created_at,this.data.tag=[],(e=a.data.data.tag)==null||e.split(",").filter(l=>{l&&this.data.tag.push({value:"",name:l})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],a.data.data.booking_refers.filter(l=>{l.flag="edit",this.axios.get(`/master-data/book-refer/${l.book_type}/${l.id}`).then(s=>{this.data.booking_refers.push({...s.data.data,...l})}).catch(s=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}),this.data.attachments.filter(l=>(l.flag="edit",l.link=l.filepath?this.backendport+"/"+l.filepath:"",l)),this.data.booking_follows.filter(l=>(l.flag="edit",l)),(((i=a.data.data.booking_refers)==null?void 0:i.length)<1||!a.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}]),(this.data.attachments.length<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(this.data.main_docs.length<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}])}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},api_master(){this.showLoading=!0;const a=this.axios.get("/master-data/book-type-note"),e=this.axios.get("/master-data/speed"),i=this.axios.get("/master-data/secret"),l=this.axios.get("/master-data/process-type"),s=this.axios.get("/master-data/permission-type"),n=this.axios.get("/user"),m=this.axios.get("/user"),_=this.axios.get("/master-data/register-type"),b=this.axios.get("/master-data/department-user"),k=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([a,e,i,l,s,n,m,_,b,k]).then(this.axios.spread((...h)=>{this.showLoading=!1;const S=h[0],V=h[1],q=h[2],U=h[3],L=h[4],o=h[5],r=h[6],c=h[7],F=h[8],j=h[9];S.data.data.filter(d=>(d.value=d.id,d.name=d.name,d)),V.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),q.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),U.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),L.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),o.data.data.filter(d=>(d.value=d.id,d.name=d.fname+" "+d.lname,d)),r.data.data.filter(d=>(d.value=d.id,d.name=d.fname+" "+d.lname,d)),c.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),F.data.data.filter(d=>(d.value=d.id,d.name=d.department_full_name,d)),this.data.FileType=[],j.data.data.filter(d=>{d.active_flag==1&&this.data.FileType.push(d.content_type)}),this.optionSelect.book_type_id=S.data.data,this.optionSelect.speed_id=V.data.data,this.optionSelect.secret_id=q.data.data,this.optionSelect.process_type_id=U.data.data,this.optionSelect.permission_id=L.data.data,this.optionSelect.creater_id=o.data.data,this.optionSelectDefault.signer_id=r.data.data,this.optionSelectDefault.book_category_id=c.data.data,this.optionSelectDefault.department_dest_id=F.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(h=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})},keyup_record_type(a){this.optionSelect.sendTo=[],this.axios.get("/master-data/book-type-note",{params:{keyword:a.target.value}}).then(e=>{e.data.data&&(e.data.data.filter(i=>(i.value=i.id,i.name=i.name,i)),this.optionSelect.book_type_id=e.data.data)})},keyupRecordType(a,e){e.optionSelect.book_type_id=[],this.axios.get("/master-data/book-type-note",{params:{keyword:a.target.value}}).then(i=>{i.data.data&&(i.data.data.filter(l=>(l.value=l.id,l.name=l.name,l)),e.optionSelect.book_type_id=i.data.data)})}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},J={class:"booking-out-detail"},G={class:"group-overflow"},H={class:"detail"},Q={class:"group-head"},W={class:"group-first"},X=t("img",{src:B,alt:"",class:"icon-size"},null,-1),Y={class:"name"},Z=t("div",{class:"group-image"}," ออกเลขบันทึกภายใน ",-1),$=[Z],ee=t("div",{class:"line"},null,-1),te={class:"group-detail"},ae={class:"group-input"},se=t("div",{class:"name"},"เจ้าของหนังสือ",-1),oe={class:"d-flex"},ie={class:"group-input mb-0"},le=t("div",{class:"name"},[u("ชื่อ - นามสกุล "),t("span",{class:"required"},"*")],-1),de={class:"group-between"},ne={class:"group-input left"},re=t("div",{class:"name"},[u("ทะเบียนบันทึกข้อความ"),t("span",{class:"required"},"*")],-1),ce={class:"group-input"},_e=t("div",{class:"name"},[u("ลงวันที่"),t("span",{class:"required"},"*")],-1),pe={class:"group-between"},ue={class:"group-input left"},he=t("div",{class:"name"},[u("ชนิดของบันทึกข้อความ "),t("span",{class:"required"},"*")],-1),me={class:"group-input left"},ge=t("div",{class:"name"},[u("ชั้นความลับ "),t("span",{class:"required"},"*")],-1),fe={class:"group-input"},be=t("div",{class:"name"},[u("ความเร่งด่วน "),t("span",{class:"required"},"*")],-1),ve={class:"group-between"},ye={class:"group-input"},ke=t("div",{class:"name"},[u("ชื่อเรื่อง "),t("span",{class:"required"},"*")],-1),Se={class:"group-between"},we={class:"group-input"},Ve=t("div",{class:"name"},"เรียน",-1),Ce={class:"group-between"},xe={class:"group-input"},qe=t("div",{class:"name"},"รายละเอียด",-1),Ue={class:"group-between"},Le={class:"group-input"},Ae=t("div",{class:"name"},"Tag สำหรับค้นหา",-1),Ie={class:"group-input d-flex align-items-center"},Fe=t("div",{class:"name"},"อ้างอิงถึง",-1),Me=t("div",{class:"group-image"},[t("img",{src:R,alt:"",class:"icon-plus"}),u(" เพิ่มเอกสารอ้างอิง ")],-1),Te=[Me],De={class:"group-input left"},Re={class:"group-input left"},je={class:"group-input d-flex"},Ee=["onClick"],ze=t("img",{src:A,alt:"",class:"image-trash pointer"},null,-1),Oe=[ze],Be=t("div",{class:"line"},null,-1),Ne={class:"group-detail"},Pe={class:"group-between"},Ke={class:"group-input left"},Je=t("div",{class:"name"},"บันทึกต้นเรื่อง",-1),Ge={class:"group-input-file"},He=["onClick"],Qe=["onClick"],We=["onChange","name"],Xe=["onClick"],Ye=t("i",{class:"bi bi-eye icon-eye"},null,-1),Ze=[Ye],$e=["disabled","onClick"],et=t("img",{src:A,alt:"",class:"image-trash"},null,-1),tt=[et],at={class:"group-input"},st={class:"group-input d-flex align-items-center"},ot=t("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),it=["disabled"],lt=t("div",{class:"group-image"},[t("img",{src:R,alt:"",class:"icon-plus"}),u(" เพิ่มไฟล์ ")],-1),dt=[lt],nt={class:"group-input-file"},rt=["onClick"],ct=["onClick"],_t=["onChange","name"],pt=["onClick"],ut=t("i",{class:"bi bi-eye icon-eye"},null,-1),ht=[ut],mt=["disabled","onClick"],gt=t("img",{src:A,alt:"",class:"image-trash"},null,-1),ft=[gt],bt=t("div",{class:"line"},null,-1),vt={class:"send-to"},yt={class:"group-input"},kt=t("div",{class:"name"},[u("ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) "),t("span",{class:"required"},"*กรุณาใส่รายชื่อที่ต้องการส่งต่อ")],-1),St={class:"group-input left"},wt={class:"name d-flex justify-content-between"},Vt=t("div",null,"ความเห็น / คำสั่ง",-1),Ct=["onClick"],xt=t("img",{src:N,alt:"",class:"icon-paperclip"},null,-1),qt=["onChange","name"],Ut=t("img",{src:P,alt:"",class:"image-x"},null,-1),Lt=[Ut],At={class:"group-between"},It={class:"group-input left"},Ft=t("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Mt={class:"group-input"},Tt=t("div",{class:"name"},"การมองเห็น",-1),Dt={class:"d-flex align-items-center justify-content-between"},Rt=t("img",{src:D,alt:"times-circle",class:"icon-times-circle"},null,-1),jt=t("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),Et={key:0,class:"line mt-3"},zt={class:"d-flex justify-content-between"},Ot={class:"title"},Bt=["onClick"],Nt={class:"d-flex ms-2 mt-2"},Pt={class:"name"},Kt={class:"name ms-5"},Jt={class:"name ms-5"},Gt={class:"name ms-2 mt-1"},Ht=t("div",{class:"line mt-4"},null,-1),Qt={class:"group-footer"},Wt={class:"footer-left d-flex"},Xt=t("img",{src:D,alt:"times-circle",class:"icon-times-circle"},null,-1),Yt={class:"footer-right"},Zt=t("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),$t=["disabled"],ea=t("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1);function ta(a,e,i,l,s,n){const m=v("cpn-radio"),_=v("cpn-select"),b=v("cpn-datepicker"),k=v("cpn-autoComplete"),h=v("cpn-textArea"),S=v("cpn-input"),V=v("cpn-input-tags"),q=v("Form"),U=v("cpn-modal-alert"),L=v("cpn-loading");return g(),f("div",J,[t("div",G,[t("div",H,[p(q,{onSubmit:n.on_submit,onInvalidSubmit:a.onInvalidSubmit},{default:z(()=>[t("div",Q,[t("div",W,[X,t("div",Y,[u(y(s.edit?"แก้ไขบันทึกส่งออก":"สร้างบันทึกส่งออก")+" ",1),t("label",null,y(s.data.booking_note_number),1)])]),M(t("button",{type:"submit",class:"add-booking-out",onClick:e[0]||(e[0]=o=>s.flagSave=3)},$,512),[[T,!s.data.booking_note_number]])]),ee,t("div",te,[t("div",ae,[se,t("div",oe,[p(m,{modelValue:s.data.create_type,"onUpdate:modelValue":e[1]||(e[1]=o=>s.data.create_type=o),name:"my1",class:"",style:{"min-width":"120px"},value:"0",label:"สร้างเอง",onChange:e[2]||(e[2]=o=>s.data.creater_id="")},null,8,["modelValue"]),p(m,{modelValue:s.data.create_type,"onUpdate:modelValue":e[3]||(e[3]=o=>s.data.create_type=o),name:"my2",class:"ms-5 me-5",style:{"min-width":"120px"},value:"1",label:"สร้างแทน",onChange:e[4]||(e[4]=o=>s.data.creater_id="")},null,8,["modelValue"]),M(t("div",ie,[le,p(_,{modelValue:s.data.creater_id,"onUpdate:modelValue":e[5]||(e[5]=o=>s.data.creater_id=o),name:"creater_id",optionSelect:s.optionSelect.creater_id,rules:s.data.create_type==1?"required":"",placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect","rules"])],512),[[T,s.data.create_type==1]])])]),t("div",de,[t("div",ne,[re,p(_,{modelValue:s.data.book_category_id,"onUpdate:modelValue":e[6]||(e[6]=o=>s.data.book_category_id=o),name:"book_category_id",rules:"required",optionSelect:s.optionSelectDefault.book_category_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),t("div",ce,[_e,p(b,{modelValue:s.data.as_of_date,"onUpdate:modelValue":e[7]||(e[7]=o=>s.data.as_of_date=o),name:"as_of_date",rules:"required",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])]),t("div",pe,[t("div",ue,[he,p(k,{modelValue:s.data.book_type_id,"onUpdate:modelValue":e[8]||(e[8]=o=>s.data.book_type_id=o),name:"book_type_id",rules:"required",optionSelect:s.optionSelect.book_type_id,onKeyup:n.keyup_record_type,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect","onKeyup"])]),t("div",me,[ge,p(_,{modelValue:s.data.secret_id,"onUpdate:modelValue":e[9]||(e[9]=o=>s.data.secret_id=o),name:"secret_id",rules:"required",optionSelect:s.optionSelect.secret_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),t("div",fe,[be,p(_,{modelValue:s.data.speed_id,"onUpdate:modelValue":e[10]||(e[10]=o=>s.data.speed_id=o),name:"speed_id",rules:"required",optionSelect:s.optionSelect.speed_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),t("div",ve,[t("div",ye,[ke,p(h,{modelValue:s.data.subject,"onUpdate:modelValue":e[11]||(e[11]=o=>s.data.subject=o),name:"subject",rules:"required",rows:"1"},null,8,["modelValue"])])]),t("div",Se,[t("div",we,[Ve,p(S,{modelValue:s.data.greeting,"onUpdate:modelValue":e[12]||(e[12]=o=>s.data.greeting=o),name:"greeting",type:"text"},null,8,["modelValue"])])]),t("div",Ce,[t("div",xe,[qe,p(h,{modelValue:s.data.desc,"onUpdate:modelValue":e[13]||(e[13]=o=>s.data.desc=o),name:"record_out_description",rows:"1"},null,8,["modelValue"])])]),t("div",Ue,[t("div",Le,[Ae,p(V,{modelValue:s.data.tag,"onUpdate:modelValue":e[14]||(e[14]=o=>s.data.tag=o),name:"tag",placeholder:"Enter a new tag"},null,8,["modelValue"])])]),t("div",Ie,[Fe,t("button",{type:"button",class:"add-booking-out",onClick:e[15]||(e[15]=o=>n.add_booking_refers())},Te)]),(g(!0),f(C,null,x(s.data.booking_refers.filter(o=>o.flag!="delete"),(o,r)=>(g(),f("div",{class:"group-between",key:r},[t("div",De,[p(S,{modelValue:o.receive_document_number,"onUpdate:modelValue":c=>o.receive_document_number=c,name:`receive_document_number${r}`,type:"text",searchFlag:!0,onSearchClick:c=>n.booking_refers_click(o),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),t("div",Re,[p(S,{modelValue:o.desc,"onUpdate:modelValue":c=>o.desc=c,name:`nameRefers${r}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),t("div",je,[p(b,{modelValue:o.receive_date,"onUpdate:modelValue":c=>o.receive_date=c,name:`dateRefers${r}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),t("button",{type:"button",onClick:c=>n.delete_booking_refers(o,r),class:"button-delete ms-3"},Oe,8,Ee)])]))),128))]),Be,t("div",Ne,[t("div",Pe,[t("div",Ke,[Je,(g(!0),f(C,null,x(s.data.main_docs.filter(o=>o.flag!="delete"),(o,r)=>(g(),f("div",{class:"d-flex mb-3",key:r},[t("div",Ge,[t("button",{type:"button",class:"button-file",onClick:c=>s.edit?"":n.upload_file(`main_docs${r}`)},[t("span",{class:w(o.filename?"":"no-data")},y(o.filename?o.filename:"บันทึกต้นเรื่อง"),3)],8,He),t("div",{class:w(s.edit?"text disabled":"text pointer"),onClick:c=>s.edit?"":n.upload_file(`main_docs${r}`)},"แนบเอกสาร",10,Qe),t("input",{type:"file",onChange:c=>n.file_set_change(`main_docs${r}`,r,"main_docs"),name:`main_docs${r}`,style:{display:"none"},accept:"application/pdf"},null,40,We)]),t("button",{type:"button",onClick:c=>n.download_file(o),class:"button-eye"},Ze,8,Xe),t("button",{type:"button",class:"del-department-3",disabled:s.edit,onClick:c=>s.data.main_docs.length>1?s.data.main_docs.splice(r,1):o.filename=""},tt,8,$e)]))),128))]),t("div",at,[t("div",st,[ot,t("button",{type:"button",class:"add-booking-receive",disabled:s.edit,onClick:e[16]||(e[16]=o=>n.upload_file("addAttachments"))},dt,8,it),t("input",{multiple:"",type:"file",onChange:e[17]||(e[17]=o=>n.add_attachments_change("addAttachments")),name:"addAttachments",style:{display:"none"}},null,32)]),(g(!0),f(C,null,x(s.data.attachments.filter(o=>o.flag!="delete"),(o,r)=>(g(),f("div",{class:"d-flex mb-3",key:r},[t("div",nt,[t("button",{type:"button",class:w([s.edit?"none-pointer":"","button-file"]),onClick:c=>s.edit?"":n.upload_file(`attachments${r}`)},[t("span",{class:w(o.filename?"":"no-data")},y(o.filename?o.filename:"สิ่งที่ส่งมาด้วย"),3)],10,rt),t("div",{class:w(s.edit?"text disabled":"text pointer"),onClick:c=>s.edit?"":n.upload_file(`attachments${r}`)},"แนบเอกสาร",10,ct),t("input",{type:"file",onChange:c=>n.file_set_change(`attachments${r}`,r,"attachments"),name:`attachments${r}`,style:{display:"none"}},null,40,_t)]),t("button",{type:"button",onClick:c=>n.download_file(o),class:"button-eye"},ht,8,pt),t("button",{type:"button",class:"del-department-3",disabled:s.edit,onClick:c=>n.delete_attachments(o,r)},ft,8,mt)]))),128))])])]),bt,t("div",vt,[t("div",yt,[kt,p(V,{modelValue:s.data.sendTo,"onUpdate:modelValue":e[18]||(e[18]=o=>s.data.sendTo=o),flagSearch:!0,optionSelect:s.optionSelect.sendTo,onKeyup:n.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),t("div",St,[t("div",wt,[Vt,t("div",null,[(g(!0),f(C,null,x(s.data.order,(o,r)=>(g(),f("button",{type:"button",class:w(["button-con pointer",o.filename?"":"no-data"]),onClick:c=>n.upload_file(`order${r}`),key:r},[xt,u(" "+y(o.filename?o.filename:"แนบเอกสาร")+" ",1),t("input",{type:"file",onChange:c=>n.file_set_change(`order${r}`,r,"order"),name:`order${r}`,style:{display:"none"}},null,40,qt)],10,Ct))),128)),t("button",{type:"button",class:"del-comment pointer",onClick:e[19]||(e[19]=o=>s.data.order[0].filename="")},Lt)])]),p(h,{modelValue:s.data.comment,"onUpdate:modelValue":e[20]||(e[20]=o=>s.data.comment=o),name:"comment",rows:"3"},null,8,["modelValue"])]),t("div",At,[t("div",It,[Ft,p(_,{modelValue:s.data.process_type_id,"onUpdate:modelValue":e[21]||(e[21]=o=>s.data.process_type_id=o),name:"process_type_id",optionSelect:s.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),t("div",Mt,[Tt,p(_,{modelValue:s.data.permission_id,"onUpdate:modelValue":e[22]||(e[22]=o=>s.data.permission_id=o),name:"permission_id",optionSelect:s.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),t("div",Dt,[t("div",null,[t("button",{type:"button",class:"button button-danger",onClick:e[23]||(e[23]=o=>(s.data.sendTo=[],s.data.comment="",s.data.process_type_id="",s.data.permission_id=""))},[Rt,u(" ยกเลิก ")])]),t("div",null,[t("button",{type:"button",onClick:e[24]||(e[24]=o=>n.add_booking_follows()),class:"button button-success"},[jt,u(" เพิ่มการส่งต่อ ")])])]),s.data.booking_follows.length>0?(g(),f("div",Et)):O("",!0),(g(!0),f(C,null,x(s.data.booking_follows.filter(o=>o.flag!="delete"),(o,r)=>(g(),f("div",{class:"group-add",key:r},[t("div",zt,[t("div",Ot,"#"+y(r+1),1),t("img",{onClick:c=>n.delete_booking_follows(o,r),src:A,alt:"",class:"image-trash pointer"},null,8,Bt)]),t("div",Nt,[t("div",Pt,"ส่งต่อ : "+y((o==null?void 0:o.department_name)||"-"),1),t("div",Kt,"รูปแบบการดำเนินการ : "+y((o==null?void 0:o.process_type_name)||"-"),1),t("div",Jt,"การมองเห็น : "+y((o==null?void 0:o.permission_name)||"-"),1)]),t("div",Gt,"ความเห็น / คำสั่ง : "+y((o==null?void 0:o.comment)||"-"),1)]))),128))]),Ht,t("div",Qt,[t("div",Wt,[t("button",{type:"button",class:"button-danger",onClick:e[25]||(e[25]=o=>n.back())},[Xt,u(" ปิด ")])]),t("div",Yt,[t("button",{type:"submit",class:"button-primary",onClick:e[26]||(e[26]=o=>s.flagSave=1)},[Zt,u(" บันทึกแบบร่าง ")]),t("button",{type:"submit",class:"button-success",onClick:e[27]||(e[27]=o=>s.flagSave=2),disabled:s.data.sendTo.length<1},[ea,u(" บันทึกและส่งต่อ ")],8,$t)])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),p(U,{modalAlert:s.modalAlert},null,8,["modalAlert"]),p(L,{show:s.showLoading},null,8,["show"])])}const la=E(K,[["render",ta]]);export{la as default};
