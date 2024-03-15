import{_ as R,r as V,o as p,c as u,a as t,j as _,t as m,b as f,d as j,w,v as S,n as v,F as C,h as T,i as A,g as z,k as I}from"./index-3bfa50d1.js";import{_ as E}from"./ballot-duotone-f2459825.js";import{_ as D}from"./plus-circle-duotone-64bd32fe.js";import{_ as M}from"./trash-alt-duotone-12d94c28.js";import{_ as O,a as B}from"./x-solid-74fa126d.js";const N={name:"record-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{original_flag:!1,book_category_id:"",book_type_id:"",receive_date:"",receive_time:"",document_number:"",as_of_date:"",subject:"",secret_id:"",speed_id:"",send_to:"",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"12",permission_id:"8",book_type:"",human_flag:!1,response_id:"",history:{hide:!1,data:[],tab:1},FileType:[],regis_id:""},optionSelect:{book_category_id:[],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]},optionSelectDefault:{book_category_id:[]}}},methods:{historyClick(o){this.showLoading=!0,this.axios.get(`/booking-note/${this.$route.params.id}/history`,{params:{book_type:this.$route.query.book_type}}).then(s=>{this.showLoading=!1,this.data.history.data=s.data.data,this.data.history.data.filter((l,n)=>{l.bookingRemarks.filter((e,i)=>{e.link=e.filepath?this.backendport+"/"+e.filepath:"",e.signature_img?this.axios({method:"get",url:this.backendport+"/"+e.signature_img,baseURL:"",responseType:"blob"}).then(d=>{const c=new Blob([d.data],{type:this.assetsUtils.getTypeFile(e.signature_img)});e.signature_img=URL.createObjectURL(c)}).catch(d=>{e.signature_img=new URL("/assets/signature_img-526e80c1.jpg",self.location).href}):e.signature_img=new URL("/assets/signature_img-526e80c1.jpg",self.location).href})})}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},delete_main_doc(o,s){o.flag=="edit"?o.flag="delete":this.data.main_docs.splice(s,1),this.data.main_docs.length-this.data.main_docs.filter(l=>l.flag=="delete").length<1&&this.data.main_docs.push({filename:"",flag:"add"})},delete_attachments(o,s){o.flag=="edit"?o.flag="delete":this.data.attachments.splice(s,1),this.data.attachments.length-this.data.attachments.filter(l=>l.flag=="delete").length<1&&this.data.attachments.push({filename:"",flag:"add"})},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(o,s){o.flag=="edit"?o.flag="delete":this.data.booking_refers.splice(s,1),this.data.booking_refers.length-this.data.booking_refers.filter(l=>l.flag=="delete").length<1&&this.add_booking_refers()},booking_refers_click(o){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:o.receive_document_number}}).then(s=>{this.showLoading=!1,s.data.data.length>0?(o.book_refer_id=s.data.data[0].id,o.original_refer_id=s.data.data[0].id,o.book_type=s.data.data[0].book_type,o.desc=s.data.data[0].desc,o.receive_date=s.data.data[0].receive_date):(o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(s=>{o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},delete_click(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"บันทึกรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.axios.delete(`/booking-receive/receive-note/${o.$route.params.id}`).then(()=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.back()}}}).catch(s=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}}},keyup_send_to(o){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user/receive-note",{params:{keyword:o.target.value,user_id:parseInt(localStorage.getItem("user_id")),subministry_id:parseInt(localStorage.getItem("subministry_id")),type:0}}).then(s=>{s.data.data&&(s.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.sendTo=s.data.data)})},add_booking_follows(){this.data.sendTo.filter(o=>{var s;if(!this.data.booking_follows.some(l=>l.department_id===o.value&&l.flag!="delete")){let l={department_id:parseInt(o.value),department_name:o.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:o.human_flag,response_id:parseInt(o.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(((s=this.data.sendToFile)==null?void 0:s.filename)||""))},response_type:o.type};this.optionSelect.process_type_id.find(n=>{n.value==this.data.process_type_id&&(l.process_type_name=n.name)}),this.optionSelect.permission_id.find(n=>{n.value==this.data.permission_id&&(l.permission_name=n.name)}),this.data.booking_follows.push(l)}})},delete_booking_follows(o,s){o.flag=="edit"?o.flag="delete":this.data.booking_follows.splice(s,1)},download_file(o){o.filename&&o.link&&this.axios({method:"get",url:o.link,baseURL:"",responseType:"blob"}).then(s=>{const l=new Blob([s.data],{type:this.assetsUtils.getTypeFile(o.filename)});window.open(URL.createObjectURL(l))})},upload_file(o){document.querySelector(`[name="${o}"]`).click()},file_attachment_add_change(o){for(var s=0;s<document.querySelector(`[name="${o}"]`).files.length;s++){let l=document.querySelector(`[name="${o}"]`).files[s];if(this.data.FileType.indexOf(l.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;let n={filename:l.name,type:l.type,link:URL.createObjectURL(l),size:(l.size/1024/1024).toFixed(2)+" MB",filesize:l.size.toString(),file:l,flag:"add"};this.data.attachments.push(n)}document.querySelector(`[name="${o}"]`).value=null},file_set_change1(o,s,l){for(var n=0;n<document.querySelector(`[name="${o}"]`).files.length;n++){let e=document.querySelector(`[name="${o}"]`).files[n];if(this.data.FileType.indexOf(e.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(l=="sendTo"){let i={filename:e.name,type:e.type,link:URL.createObjectURL(e),size:(e.size/1024/1024).toFixed(2)+" MB",file:e};this.data.sendToFile=i}}},file_set_change2(o,s,l){for(var n=0;n<document.querySelector(`[name="${o}"]`).files.length;n++){let e=document.querySelector(`[name="${o}"]`).files[n];if(this.data.FileType.indexOf(e.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;l=="main_docs"?e.type=="application/pdf"&&(s.filename=e.name,s.type=e.type,s.link=URL.createObjectURL(e),s.size=(e.size/1024/1024).toFixed(2)+" MB",s.filesize=e.size.toString(),s.file=e,document.querySelector(`[name="${o}"]`).value=null):(s.filename=e.name,s.type=e.type,s.link=URL.createObjectURL(e),s.size=(e.size/1024/1024).toFixed(2)+" MB",s.filesize=e.size.toString(),s.file=e,document.querySelector(`[name="${o}"]`).value=null)}},back(){this.$router.push({name:"subministry-work.record-receive",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.upload_file_all()}}},upload_file_all(){let o=this.assetsUtils.currentDate(),s=[],l=[];this.data.attachments.filter(n=>{if(n.file){let e=new FormData;e.append("file",n.file),e.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),s.push(this.axios.post("/upload/single",e,{headers:{"Content-Type":"multipart/form-data"}}))}}),s.length>0&&this.axios.all([...s]).then(this.axios.spread((...n)=>{n.filter((e,i)=>{l.push({...this.data.attachments.filter(d=>d.file)[i],...e.data.data,filepath:e.data.data.path})}),s.length==l.length&&this.upload_file_all2(l)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}),s.length<1&&this.upload_file_all2(l)},upload_file_all2(o){let s=this.assetsUtils.currentDate(),l=[],n=[];this.data.main_docs.filter(e=>{if(e.file){let i=new FormData;i.append("file",e.file),i.append("dst",`${s.split("/")[0]+"-"+s.split("/")[1]+"-"+s.split("/")[2]}`),l.push(this.axios.post("/upload/single",i,{headers:{"Content-Type":"multipart/form-data"}}))}}),l.length>0?this.axios.all([...l]).then(this.axios.spread((...e)=>{e.filter((i,d)=>{n.push({...this.data.main_docs.filter(c=>c.file)[d],...i.data.data,filepath:i.data.data.path})}),l.length==n.length&&this.upload_file_all3(n,o)})).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}}):this.upload_file_all3(n,o)},upload_file_all3(o,s){var n;let l=this.assetsUtils.currentDate();if((n=this.data.sendToFile)!=null&&n.filename){let e=new FormData;e.append("file",this.data.sendToFile.file),e.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),this.axios.post("/upload/single",e,{headers:{"Content-Type":"multipart/form-data"}}).then(i=>{this.data.attach_filename=i.data.data.filename,this.data.attach_filepath=i.data.data.path,this.upload_file_all4(o,s)}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}else this.upload_file_all4(o,s)},upload_file_all4(o,s){let l=this.assetsUtils.currentDate(),n=[],e=[];this.data.booking_follows.filter(i=>{var d;if((d=i.sendToFile)!=null&&d.filename){let c=new FormData;c.append("file",i.sendToFile.file),c.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),n.push(this.axios.post("/upload/single",c,{headers:{"Content-Type":"multipart/form-data"}}))}}),n.length>0?this.axios.all([...n]).then(this.axios.spread((...i)=>{i.filter((d,c)=>{this.data.booking_follows[c].attach_filepath=d.data.data.path,this.data.booking_follows[c].attach_filename=d.data.data.filename,e.push({...this.data.booking_follows[c],...d.data.data,filepath:d.data.data.path})}),n.length==e.length&&this.call_api_save(o,s)})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}):this.call_api_save(o,s)},call_api_save(o,s){let l=this,n="";this.data.tag.filter(i=>{n+=i.name+","}),n=n.slice(0,-1),this.data.sendTo.filter(i=>{if(!this.data.booking_follows.some(d=>d.department_id===i.value&&d.flag!="delete")){let d={department_id:parseInt(i.value),department_name:i.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:i.human_flag,response_id:parseInt(i.value),response_type:i.type,attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename,sendToFile:{filename:this.data.attach_filename}};this.optionSelect.process_type_id.find(c=>{c.value==this.data.process_type_id&&(d.process_type_name=c.name)}),this.optionSelect.permission_id.find(c=>{c.value==this.data.permission_id&&(d.permission_name=c.name)}),this.data.booking_follows.push(d)}}),this.data.main_docs.filter(i=>{i.flag=="delete"&&o.push(i)}),this.data.attachments.filter(i=>{i.flag=="delete"&&s.push(i)});let e={original_flag:this.data.original_flag,regis_id:parseInt(this.data.book_category_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:n,main_docs:o,attachments:s,booking_refers:this.data.booking_refers.filter(i=>i.book_refer_id),booking_follows:this.data.booking_follows,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":"",book_type:parseInt(this.$route.query.book_type),receive_regis_id:parseInt(this.$route.query.regis_id)};this.edit&&(this.flagSave==1?(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,e).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,e).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})))},api_detail(){this.showLoading=!0,this.axios.get(`/booking-receive/receive-note/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id,response_id:this.$route.query.response_id}}).then(o=>{var s,l,n,e,i;this.showLoading=!1,o.data.data={...this.data,...o.data.data},this.data=JSON.parse(JSON.stringify(o.data.data)),this.data.tag=[],(s=o.data.data.tag)==null||s.split(",").filter(d=>{d&&this.data.tag.push({value:"",name:d})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],o.data.data.booking_refers.filter(d=>{d.flag="edit",this.axios.get(`/master-data/book-refer/${d.book_type}/${d.id}`).then(c=>{this.data.booking_refers.push({...c.data.data,...d})}).catch(c=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}})}),this.data.main_docs.filter(d=>(d.flag="edit",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.attachments.filter(d=>(d.flag="edit",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.booking_follows=[],(((l=this.data.main_docs)==null?void 0:l.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}]),(((n=this.data.attachments)==null?void 0:n.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(((e=this.data.contracts)==null?void 0:e.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:"",flag:"add"}]),(((i=o.data.data.booking_refers)==null?void 0:i.length)<1||!o.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}])}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},api_master(){this.showLoading=!0;const o=this.axios.get("/master-data/book-type-note"),s=this.axios.get("/master-data/secret"),l=this.axios.get("/master-data/speed"),n=this.axios.get("/master-data/process-type"),e=this.axios.get("/master-data/permission-type"),i=this.axios.get("/master-data/department"),d=this.axios.get("/master-data/book-category",{params:{book_type:1}}),c=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([o,s,l,n,e,i,d,c]).then(this.axios.spread((...y)=>{this.showLoading=!1;const L=y[0],q=y[1],U=y[2],x=y[3],F=y[4],r=y[5],k=y[6],b=y[7];L.data.data.filter(a=>(a.value=a.id,a.name=a.name,a)),q.data.data.filter(a=>(a.value=a.id,a.name=a.desc,a)),U.data.data.filter(a=>(a.value=a.id,a.name=a.desc,a)),x.data.data.filter(a=>(a.value=a.id,a.name=a.desc,a)),F.data.data.filter(a=>(a.value=a.id,a.name=a.desc,a)),r.data.data.filter(a=>(a.value=a.id,a.name=a.department_full_name,a)),k.data.data.filter(a=>(a.value=a.id,a.name=a.name,a)),this.data.FileType=[],b.data.data.filter(a=>{a.active_flag==1&&this.data.FileType.push(a.content_type)}),this.optionSelect.book_type_id=L.data.data,this.optionSelect.secret_id=q.data.data,this.optionSelect.speed_id=U.data.data,this.optionSelect.process_type_id=x.data.data,this.optionSelect.permission_id=F.data.data,this.optionSelect.department_id=r.data.data,this.optionSelectDefault.book_category_id=k.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(y=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:y.response.data.message}})},submitClick(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการรับเข้าหรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){let s={regis_id:parseInt(o.data.book_category_id),book_type:4,human_flag:o.data.human_flag,response_id:parseInt(o.$route.query.response_id),user_id:parseInt(localStorage.getItem("user_id")),page_flag:"owner",flag:"confirm"};o.showLoading=!0,o.axios.put(`/booking-receive/${o.$route.params.id}`,s).then(()=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"success",title:"ยืนยันรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.back()}}}).catch(l=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}}}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},P={class:"booking-receive-detail"},J={class:"group-overflow"},K={class:"detail"},G={class:"group-head"},H={class:"group-first"},Q=t("img",{src:E,alt:"",class:"icon-size"},null,-1),W={class:"name"},X=t("div",{class:"line"},null,-1),Y={class:"group-detail"},Z={class:"group-between"},$={class:"group-input left"},ee=t("div",{class:"name"},[_("ทะเบียนบันทึกข้อความ "),t("span",{class:"required"},"*")],-1),te={class:"group-input left"},se=t("div",{class:"name"},[_("ลงวันที่ "),t("span",{class:"required"},"*")],-1),ae={class:"group-input left"},oe=t("div",{class:"name"},[_("วันที่ส่งมา "),t("span",{class:"required"},"*")],-1),ie={class:"group-input"},le=t("div",{class:"name"},[_("วันที่กองรับเรื่อง "),t("span",{class:"required"},"*")],-1),de={class:"group-between"},ne={class:"group-input left"},re=t("div",{class:"name"},[_("ชนิดของหนังสือ "),t("span",{class:"required"},"*")],-1),ce={class:"group-between"},_e={class:"group-input left"},he=t("div",{class:"name"},[_("ชั้นความลับ "),t("span",{class:"required"},"*")],-1),pe={class:"group-input"},ue=t("div",{class:"name"},[_("ความเร่งด่วน "),t("span",{class:"required"},"*")],-1),fe={class:"group-between"},ge={class:"group-input left"},me=t("div",{class:"name"},[_("ชื่อเรื่อง "),t("span",{class:"required"},"*")],-1),be={class:"group-input left"},ye=t("div",{class:"name"},[_("เรียน "),t("span",{class:"required"},"*")],-1),ve={class:"group-input left"},ke=t("div",{class:"name"},"รายละเอียดหนังสือ",-1),we={class:"group-input"},Se=t("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),Ve={class:"group-input d-flex align-items-center"},Ce=t("div",{class:"name"},"อ้างอิงถึง",-1),Te=["disabled"],Le=t("div",{class:"group-image"},[t("img",{src:D,alt:"",class:"icon-plus"}),_(" เพิ่มเอกสารอ้างอิง ")],-1),qe=[Le],Ue={class:"group-input left"},xe={class:"group-input left"},Fe={class:"group-input d-flex"},Ae=["onClick"],Me=t("img",{src:M,alt:"",class:"image-trash pointer"},null,-1),Ie=[Me],ze=t("div",{class:"group-input"},null,-1),De=t("div",{class:"line"},null,-1),Re={class:"group-detail"},je={class:"group-between"},Ee={class:"group-input left"},Oe=t("div",{class:"name"},"บันทึกต้นเรื่อง",-1),Be={class:"d-flex mb-3"},Ne={class:"group-input-file"},Pe=["onClick"],Je=["onClick"],Ke=["onChange","name"],Ge=["onClick"],He=t("i",{class:"bi bi-eye icon-eye"},null,-1),Qe=[He],We=["disabled","onClick"],Xe=t("img",{src:M,alt:"",class:"image-trash"},null,-1),Ye=[Xe],Ze={class:"group-input"},$e={class:"group-input d-flex align-items-center"},et=t("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),tt=["disabled"],st=t("div",{class:"group-image"},[t("img",{src:D,alt:"",class:"icon-plus"}),_(" เพิ่มไฟล์ ")],-1),at=[st],ot={class:"d-flex mb-3"},it={class:"group-input-file"},lt=["onClick"],dt=["onClick"],nt=["onChange","name"],rt=["onClick"],ct=t("i",{class:"bi bi-eye icon-eye"},null,-1),_t=[ct],ht=["disabled","onClick"],pt=t("img",{src:M,alt:"",class:"image-trash"},null,-1),ut=[pt],ft=t("div",{class:"line"},null,-1),gt={class:"send-to"},mt={class:"group-input"},bt=t("div",{class:"name"},"ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) ",-1),yt={class:"group-input left"},vt={class:"name d-flex justify-content-between"},kt=t("div",null,"ความเห็น / คำสั่ง",-1),wt=t("img",{src:O,alt:"",class:"icon-paperclip"},null,-1),St=t("img",{src:B,alt:"",class:"image-x"},null,-1),Vt={class:"group-between"},Ct={class:"group-input left"},Tt=t("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Lt={class:"group-input"},qt=t("div",{class:"name"},"การมองเห็น",-1),Ut={class:"d-flex align-items-center justify-content-between"},xt=t("img",{src:z,alt:"times-circle",class:"icon-times-circle"},null,-1),Ft=t("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),At={key:0,class:"line mt-3"},Mt={class:"d-flex justify-content-between"},It={class:"title"},zt=["onClick"],Dt={class:"d-flex ms-2 mt-2"},Rt={class:"name"},jt={class:"name ms-5"},Et={class:"name ms-5"},Ot={class:"name ms-2 mt-1"},Bt={class:"name ms-2 mt-1"},Nt=t("div",{class:"line mt-4"},null,-1),Pt={class:"group-footer"},Jt={class:"footer-left d-flex"},Kt=t("img",{src:z,alt:"times-circle",class:"icon-times-circle"},null,-1),Gt={class:"footer-right"},Ht={type:"button",class:"confirm-receive"},Qt=t("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),Wt=["disabled"],Xt=t("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),Yt={key:0,class:"detail-history"},Zt={class:"history"},$t=t("div",{class:"group-left"},[t("i",{class:"bi bi-clock icon-size"}),t("div",{class:"name"},"ประวัติการแก้ไข")],-1),es={class:"group-right"},ts={class:"bi bi-chevron-right icon-angle"},ss={class:"bi bi-chevron-down icon-angle"},as={class:"line"},os={class:"content"},is={class:"content-head"},ls=t("i",{class:"bi bi-border-all icon-size"},null,-1),ds=t("i",{class:"bi bi-chat-left icon-size"},null,-1),ns=t("i",{class:"bi bi-pencil-square icon-size"},null,-1),rs={key:0},cs={class:"detail-head"},_s={class:"number"},hs={class:"create"},ps=t("i",{class:"bi bi-person icon-size"},null,-1),us={class:"date"},fs={class:"time"},gs=t("i",{class:"bi bi-clock icon-size"},null,-1),ms=["onClick"],bs={key:0,class:"detail-signager"},ys=["src"],vs={key:0,class:"line"},ks={key:1,class:"content-detail first end"},ws=t("div",{class:"detail-head"},[t("div",{class:"topic"},"ไม่มีข้อมูล")],-1),Ss=[ws];function Vs(o,s,l,n,e,i){const d=V("cpn-select"),c=V("cpn-datepicker"),y=V("cpn-textArea"),L=V("cpn-input-tags"),q=V("cpn-input"),U=V("Form"),x=V("cpn-modal-alert"),F=V("cpn-loading");return p(),u("div",P,[t("div",J,[t("div",K,[t("div",G,[t("div",H,[Q,t("div",W,[_(m(e.edit?"แก้ไขบันทึกรับเข้า":"สร้างบันทึกรับเข้า")+" ",1),t("label",null,m(e.data.document_number),1)])])]),X,f(U,{onSubmit:i.on_submit,onInvalidSubmit:o.onInvalidSubmit},{default:j(()=>{var r,k,b;return[t("div",Y,[t("div",Z,[t("div",$,[ee,f(d,{modelValue:e.data.book_category_id,"onUpdate:modelValue":s[0]||(s[0]=a=>e.data.book_category_id=a),name:"book_category_id",rules:"required",disabled:e.edit,optionSelect:e.optionSelectDefault.book_category_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),t("div",te,[se,f(c,{modelValue:e.data.as_of_date,"onUpdate:modelValue":s[1]||(s[1]=a=>e.data.as_of_date=a),name:"as_of_date",disabled:e.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),t("div",ae,[oe,f(c,{modelValue:e.data.create_date,"onUpdate:modelValue":s[2]||(s[2]=a=>e.data.create_date=a),name:"create_date",rules:"required",disabled:e.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),t("div",ie,[le,f(c,{modelValue:e.data.receive_date,"onUpdate:modelValue":s[3]||(s[3]=a=>e.data.receive_date=a),name:"receive_date",rules:"required",disabled:e.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])]),t("div",de,[t("div",ne,[re,f(d,{modelValue:e.data.book_type_id,"onUpdate:modelValue":s[4]||(s[4]=a=>e.data.book_type_id=a),name:"book_type_id",disabled:e.edit,rules:"required",optionSelect:e.optionSelect.book_type_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),t("div",ce,[t("div",_e,[he,f(d,{modelValue:e.data.secret_id,"onUpdate:modelValue":s[5]||(s[5]=a=>e.data.secret_id=a),name:"secret_id",rules:"required",optionSelect:e.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:e.edit},null,8,["modelValue","optionSelect","disabled"])]),t("div",pe,[ue,f(d,{modelValue:e.data.speed_id,"onUpdate:modelValue":s[6]||(s[6]=a=>e.data.speed_id=a),name:"speed_id",rules:"required",optionSelect:e.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:e.edit},null,8,["modelValue","optionSelect","disabled"])])])]),t("div",fe,[t("div",ge,[me,f(y,{modelValue:e.data.subject,"onUpdate:modelValue":s[7]||(s[7]=a=>e.data.subject=a),name:"subject",rules:"required",disabled:e.edit,rows:"1"},null,8,["modelValue","disabled"])])]),t("div",be,[ye,f(y,{modelValue:e.data.send_to,"onUpdate:modelValue":s[8]||(s[8]=a=>e.data.send_to=a),name:"send_to",rows:"1",disabled:e.edit},null,8,["modelValue","disabled"])]),t("div",ve,[ke,f(y,{modelValue:e.data.book_desc,"onUpdate:modelValue":s[9]||(s[9]=a=>e.data.book_desc=a),name:"book_desc",disabled:e.edit,rows:"1"},null,8,["modelValue","disabled"])]),t("div",we,[Se,f(L,{modelValue:e.data.tag,"onUpdate:modelValue":s[10]||(s[10]=a=>e.data.tag=a),name:"tag"},null,8,["modelValue"])]),t("div",Ve,[Ce,t("button",{type:"button",class:"add-booking-receive",onClick:s[11]||(s[11]=a=>i.add_booking_refers()),disabled:e.edit},qe,8,Te)]),(p(!0),u(C,null,T(e.data.booking_refers,(a,h)=>w((p(),u("div",{class:"group-between",key:h},[t("div",Ue,[f(q,{modelValue:a.receive_document_number,"onUpdate:modelValue":g=>a.receive_document_number=g,name:`codeRefers${h}`,type:"text",searchFlag:!0,disabled:e.edit,onSearchClick:g=>i.booking_refers_click(a),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","disabled","onSearchClick"])]),t("div",xe,[f(q,{modelValue:a.desc,"onUpdate:modelValue":g=>a.desc=g,name:`nameRefers${h}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),t("div",Fe,[f(c,{modelValue:a.receive_date,"onUpdate:modelValue":g=>a.receive_date=g,name:`dateRefers${h}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),t("button",{type:"button",onClick:g=>i.delete_booking_refers(a,h),class:"button-delete ms-3"},Ie,8,Ae)])])),[[S,a.flag!="delete"]])),128)),ze]),De,t("div",Re,[t("div",je,[t("div",Ee,[Oe,(p(!0),u(C,null,T(e.data.main_docs,(a,h)=>w((p(),u("div",{key:h},[t("div",Be,[t("div",Ne,[t("button",{type:"button",class:v([e.edit?"none-pointer":"","button-file"]),onClick:g=>e.edit?"":i.upload_file(`main_docs${h}`)},[t("span",{class:v(a.filename?"":"no-data")},m(a.filename?a.filename:"บันทึกต้นเรื่อง"),3)],10,Pe),t("div",{class:v(e.edit?"text disabled":"text pointer"),onClick:g=>e.edit?"":i.upload_file(`main_docs${h}`)},"แนบเอกสาร",10,Je),t("input",{type:"file",onChange:g=>i.file_set_change2(`main_docs${h}`,a,"main_docs"),name:`main_docs${h}`,style:{display:"none"},accept:"application/pdf"},null,40,Ke)]),t("button",{type:"button",onClick:g=>i.download_file(a),class:"button-eye"},Qe,8,Ge),t("button",{type:"button",class:"del-department-3",disabled:e.edit,onClick:g=>i.delete_main_doc(a,h)},Ye,8,We)])])),[[S,a.flag!="delete"]])),128))]),t("div",Ze,[t("div",$e,[et,t("button",{type:"button",class:"add-booking-receive",disabled:e.edit,onClick:s[12]||(s[12]=a=>i.upload_file("fileAttachment"))},at,8,tt),t("input",{type:"file",multiple:"",onChange:s[13]||(s[13]=a=>i.file_attachment_add_change("fileAttachment")),name:"fileAttachment",style:{display:"none"}},null,32)]),(p(!0),u(C,null,T(e.data.attachments,(a,h)=>w((p(),u("div",{key:h},[t("div",ot,[t("div",it,[t("button",{type:"button",class:v([e.edit?"none-pointer":"","button-file"]),onClick:g=>e.edit?"":i.upload_file(`attachments${h}`)},[t("span",{class:v(a.filename?"":"no-data")},m(a.filename?a.filename:"สิ่งที่ส่งมาด้วย"),3)],10,lt),t("div",{class:v(e.edit?"text disabled":"text pointer"),onClick:g=>e.edit?"":i.upload_file(`attachments${h}`)},"แนบเอกสาร",10,dt),t("input",{type:"file",onChange:g=>i.file_set_change2(`attachments${h}`,a,"attachments"),name:`attachments${h}`,style:{display:"none"}},null,40,nt)]),t("button",{type:"button",onClick:g=>i.download_file(a),class:"button-eye"},_t,8,rt),t("button",{type:"button",class:"del-department-3",disabled:e.edit,onClick:g=>i.delete_attachments(a,h)},ut,8,ht)])])),[[S,a.flag!="delete"]])),128))])])]),ft,t("div",gt,[t("div",mt,[bt,f(L,{modelValue:e.data.sendTo,"onUpdate:modelValue":s[14]||(s[14]=a=>e.data.sendTo=a),flagSearch:!0,optionSelect:e.optionSelect.sendTo,onKeyup:i.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),t("div",yt,[t("div",vt,[kt,t("div",null,[t("input",{type:"file",onChange:s[15]||(s[15]=a=>i.file_set_change1("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(r=e.data.sendToFile)!=null&&r.filename?(p(),u("div",{key:1,class:"del-comment pointer",onClick:s[17]||(s[17]=a=>e.data.sendToFile.filename="")},[_(m((k=e.data.sendToFile)==null?void 0:k.filename)+" ",1),St])):(p(),u("button",{key:0,type:"button",class:"button-con pointer",onClick:s[16]||(s[16]=a=>i.upload_file("sendTo"))},[wt,_(" แนบเอกสาร ")]))])]),f(y,{modelValue:e.data.comment,"onUpdate:modelValue":s[18]||(s[18]=a=>e.data.comment=a),name:"comment",rows:"3"},null,8,["modelValue"])]),t("div",Vt,[t("div",Ct,[Tt,f(d,{modelValue:e.data.process_type_id,"onUpdate:modelValue":s[19]||(s[19]=a=>e.data.process_type_id=a),name:"process_type_id",optionSelect:e.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),t("div",Lt,[qt,f(d,{modelValue:e.data.permission_id,"onUpdate:modelValue":s[20]||(s[20]=a=>e.data.permission_id=a),name:"permission_id",optionSelect:e.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),t("div",Ut,[t("div",null,[t("button",{type:"button",class:"button button-danger",onClick:s[21]||(s[21]=a=>(e.data.sendTo=[],e.data.comment="",e.data.process_type_id="",e.data.permission_id=""))},[xt,_(" ยกเลิก ")])]),t("div",null,[t("button",{type:"button",onClick:s[22]||(s[22]=a=>i.add_booking_follows()),class:"button button-success"},[Ft,_(" เพิ่มการส่งต่อ ")])])]),e.data.booking_follows.length>0?(p(),u("div",At)):A("",!0),(p(!0),u(C,null,T(e.data.booking_follows,(a,h)=>{var g;return w((p(),u("div",{class:"group-add",key:h},[t("div",Mt,[t("div",It,"#"+m(h+1),1),t("img",{onClick:Cs=>i.delete_booking_follows(a,h),src:M,alt:"",class:"image-trash pointer"},null,8,zt)]),t("div",Dt,[t("div",Rt,"ส่งต่อ : "+m((a==null?void 0:a.department_name)||"-"),1),t("div",jt,"รูปแบบการดำเนินการ : "+m((a==null?void 0:a.process_type_name)||"-"),1),t("div",Et,"การมองเห็น : "+m((a==null?void 0:a.permission_name)||"-"),1)]),t("div",Ot,"ความเห็น / คำสั่ง : "+m((a==null?void 0:a.comment)||"-"),1),t("div",Bt,"เอกสารแนบ : "+m(((g=a==null?void 0:a.sendToFile)==null?void 0:g.filename)||"-"),1)])),[[S,a.flag!="delete"]])}),128))]),Nt,t("div",Pt,[t("div",Jt,[t("button",{type:"button",class:"button-danger",onClick:s[23]||(s[23]=a=>i.back())},[Kt,_(" ปิด ")])]),t("div",Gt,[t("button",Ht,[t("div",{class:"group-image",onClick:s[24]||(s[24]=a=>i.submitClick())},[Qt,_(" ยืนยันรับเข้า ")])]),t("button",{type:"submit",class:"button-success",onClick:s[25]||(s[25]=a=>e.flagSave=2),disabled:((b=e.data.sendTo)==null?void 0:b.length)<1},[Xt,_(" บันทึกและส่งต่อ ")],8,Wt)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])]),o.$route.params.id?(p(),u("div",Yt,[t("div",Zt,[t("div",{class:"header pointer",onClick:s[26]||(s[26]=r=>(e.data.history.hide=!e.data.history.hide,i.historyClick(e.data.history.tab)))},[$t,t("div",es,[w(t("i",ts,null,512),[[S,!e.data.history.hide]]),w(t("i",ss,null,512),[[S,e.data.history.hide]])])]),w(t("div",as,null,512),[[S,e.data.history.hide]]),w(t("div",os,[t("div",is,[t("div",{class:v(["pointer",e.data.history.tab==1?"active":""]),onClick:s[27]||(s[27]=r=>(e.data.history.tab=1,i.historyClick(1)))},[ls,_("ทั้งหมด")],2),t("div",{class:v(["pointer",e.data.history.tab==2?"active":""]),onClick:s[28]||(s[28]=r=>(e.data.history.tab=2,i.historyClick(2)))},[ds,_("ความเห็นคำสั่ง")],2),t("div",{class:v(["pointer",e.data.history.tab==3?"active":""]),onClick:s[29]||(s[29]=r=>(e.data.history.tab=3,i.historyClick(3)))},[ns,_("แก้ไขข้อมูล")],2)]),e.data.history.data.filter(r=>e.data.history.tab==2?r.type==2:e.data.history.tab==3?r.type==0||r.type==1:r).length>0?(p(),u("div",rs,[(p(!0),u(C,null,T(e.data.history.data.filter(r=>e.data.history.tab==2?r.type==2:e.data.history.tab==3?r.type==0||r.type==1:r),(r,k)=>(p(),u("div",{class:v(["content-detail",k==0?"first":k==e.data.history.data.length-1?"end":""]),key:k},[t("div",cs,[t("div",_s,"#"+m(e.data.history.data.filter(b=>e.data.history.tab==2?b.type==2:e.data.history.tab==3?b.type==0||b.type==1:b).length-k),1),t("div",{class:v(["topic",r.bookactionname=="ความเห็นคำสั่ง"?"blue":r.bookactionname=="แก้ไขหนังสือ"?"yellow":"green"])},[t("i",{class:v(["bi icon-size",r.bookactionname=="ความเห็นคำสั่ง"?"bi-chat-left":r.bookactionname=="แก้ไขหนังสือ"?"bi-pencil-square":"bi-plus-lg"])},null,2),_(" "+m(r.bookactionname),1)],2),t("div",hs,[ps,_(" โดย "+m(r.updateBy)+" / "+m(r.subName),1)]),t("div",us," วันที่ "+m(r.createDate),1),t("div",fs,[gs,_(" "+m(r.createTime),1)])]),(p(!0),u(C,null,T(r.bookingRemarks,(b,a)=>(p(),u("ul",{class:"detail-list",key:a},[w(t("button",{class:"button-file",onClick:h=>i.download_file({filename:b.filepath.split("/").pop(),link:b.link})},m(b.filepath.split("/").pop()),9,ms),[[S,b.filepath]]),t("li",null,[_(m(b.remark)+" "+m(b.comment)+" ",1),b.signature_img&&r.bookactionname=="ความเห็นคำสั่ง"?(p(),u("div",bs,[t("img",{src:b.signature_img,alt:"",class:"image-size"},null,8,ys)])):A("",!0)])]))),128)),k!=e.data.history.data.length-1?(p(),u("div",vs)):A("",!0)],2))),128))])):(p(),u("div",ks,Ss))],512),[[S,e.data.history.hide]])])])):A("",!0)]),f(x,{modalAlert:e.modalAlert},null,8,["modalAlert"]),f(F,{show:e.showLoading},null,8,["show"])])}const Fs=R(N,[["render",Vs]]);export{Fs as default};