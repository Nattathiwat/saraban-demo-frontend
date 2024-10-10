import{_ as R,r as V,o as _,c as h,a as s,h as u,t as g,b as f,d as j,w,v as S,n as v,F as C,i as T,j as A,f as z,k as I}from"./index-6f9b4dc9.js";import{_ as E}from"./ballot-duotone-f2459825.js";import{_ as D}from"./plus-circle-duotone-64bd32fe.js";import{_ as M}from"./trash-alt-duotone-12d94c28.js";import{_ as O,a as B}from"./x-solid-74fa126d.js";const N={name:"record-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{original_flag:!1,book_category_id:"",book_type_id:"",receive_date:"",receive_time:"",document_number:"",as_of_date:"",subject:"",secret_id:"",speed_id:"",send_to:"",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"12",permission_id:"8",book_type:"",human_flag:!1,response_id:"",history:{hide:!1,data:[],tab:1},FileType:[],regis_id:""},optionSelect:{book_category_id:[],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]},optionSelectDefault:{book_category_id:[]}}},methods:{historyClick(i){this.showLoading=!0,this.axios.get(`/booking-note/${this.$route.params.id}/history`,{params:{book_type:this.$route.query.book_type}}).then(e=>{this.showLoading=!1,this.data.history.data=e.data.data,this.data.history.data.filter((l,n)=>{l.bookingRemarks.filter((t,o)=>{t.link=t.filepath?this.backendport+"/"+t.filepath:"",t.signature_img?this.axios({method:"get",url:this.backendport+"/"+t.signature_img,baseURL:"",responseType:"blob"}).then(d=>{const p=new Blob([d.data],{type:this.assetsUtils.getTypeFile(t.signature_img)});t.signature_img=URL.createObjectURL(p)}).catch(d=>{t.signature_img=new URL("/assets/signature_img-526e80c1.jpg",self.location).href}):t.signature_img=new URL("/assets/signature_img-526e80c1.jpg",self.location).href})})}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},delete_main_doc(i,e){i.flag=="edit"?i.flag="delete":this.data.main_docs.splice(e,1),this.data.main_docs.length-this.data.main_docs.filter(l=>l.flag=="delete").length<1&&this.data.main_docs.push({filename:"",flag:"add"})},delete_attachments(i,e){i.flag=="edit"?i.flag="delete":this.data.attachments.splice(e,1),this.data.attachments.length-this.data.attachments.filter(l=>l.flag=="delete").length<1&&this.data.attachments.push({filename:"",flag:"add"})},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(i,e){i.flag=="edit"?i.flag="delete":this.data.booking_refers.splice(e,1),this.data.booking_refers.length-this.data.booking_refers.filter(l=>l.flag=="delete").length<1&&this.add_booking_refers()},booking_refers_click(i){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:i.receive_document_number}}).then(e=>{this.showLoading=!1,e.data.data.length>0?(i.book_refer_id=e.data.data[0].id,i.original_refer_id=e.data.data[0].id,i.book_type=e.data.data[0].book_type,i.desc=e.data.data[0].desc,i.receive_date=e.data.data[0].receive_date):(i.receive_document_number="",i.book_refer_id="",i.original_refer_id="",i.book_type="",i.desc="",i.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(e=>{i.receive_document_number="",i.book_refer_id="",i.original_refer_id="",i.book_type="",i.desc="",i.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},delete_click(){let i=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"บันทึกรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){i.showLoading=!0,i.axios.delete(`/booking-receive/receive-note/${i.$route.params.id}`).then(()=>{i.showLoading=!1,i.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){i.back()}}}).catch(e=>{i.showLoading=!1,i.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}}},keyup_send_to(i){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user/receive-note",{params:{keyword:i.target.value,user_id:parseInt(localStorage.getItem("user_id")),subministry_id:parseInt(localStorage.getItem("subministry_id")),type:0}}).then(e=>{e.data.data&&(e.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.sendTo=e.data.data)})},add_booking_follows(){this.data.sendTo.filter(i=>{var e;if(!this.data.booking_follows.some(l=>l.department_id===i.value&&l.flag!="delete")){let l={department_id:parseInt(i.value),department_name:i.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:i.human_flag,response_id:parseInt(i.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(((e=this.data.sendToFile)==null?void 0:e.filename)||""))},response_type:i.type};this.optionSelect.process_type_id.find(n=>{n.value==this.data.process_type_id&&(l.process_type_name=n.name)}),this.optionSelect.permission_id.find(n=>{n.value==this.data.permission_id&&(l.permission_name=n.name)}),this.data.booking_follows.push(l)}})},delete_booking_follows(i,e){i.flag=="edit"?i.flag="delete":this.data.booking_follows.splice(e,1)},download_file(i){i.filename&&i.link&&this.axios({method:"get",url:i.link,baseURL:"",responseType:"blob"}).then(e=>{const l=new Blob([e.data],{type:this.assetsUtils.getTypeFile(i.filename)});window.open(URL.createObjectURL(l))})},upload_file(i){document.querySelector(`[name="${i}"]`).click()},file_attachment_add_change(i){for(var e=0;e<document.querySelector(`[name="${i}"]`).files.length;e++){let l=document.querySelector(`[name="${i}"]`).files[e];if(this.data.FileType.indexOf(l.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;let n={filename:l.name,type:l.type,link:URL.createObjectURL(l),size:(l.size/1024/1024).toFixed(2)+" MB",filesize:l.size.toString(),file:l,flag:"add"};this.data.attachments.push(n)}document.querySelector(`[name="${i}"]`).value=null},file_set_change1(i,e,l){for(var n=0;n<document.querySelector(`[name="${i}"]`).files.length;n++){let t=document.querySelector(`[name="${i}"]`).files[n];if(this.data.FileType.indexOf(t.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(l=="sendTo"){let o={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data.sendToFile=o}}},file_set_change2(i,e,l){for(var n=0;n<document.querySelector(`[name="${i}"]`).files.length;n++){let t=document.querySelector(`[name="${i}"]`).files[n];if(this.data.FileType.indexOf(t.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;l=="main_docs"?t.type=="application/pdf"&&(e.filename=t.name,e.type=t.type,e.link=URL.createObjectURL(t),e.size=(t.size/1024/1024).toFixed(2)+" MB",e.filesize=t.size.toString(),e.file=t,document.querySelector(`[name="${i}"]`).value=null):(e.filename=t.name,e.type=t.type,e.link=URL.createObjectURL(t),e.size=(t.size/1024/1024).toFixed(2)+" MB",e.filesize=t.size.toString(),e.file=t,document.querySelector(`[name="${i}"]`).value=null)}},back(){this.$router.push({name:"subministry-work.record-receive",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let i=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){i.showLoading=!0,i.upload_file_all()}}},upload_file_all(){let i=this.assetsUtils.currentDate(),e=[],l=[];this.data.attachments.filter(n=>{if(n.file){let t=new FormData;t.append("file",n.file),t.append("dst",`${i.split("/")[0]+"-"+i.split("/")[1]+"-"+i.split("/")[2]}`),e.push(this.axios.post("/upload/single",t,{headers:{"Content-Type":"multipart/form-data"}}))}}),e.length>0&&this.axios.all([...e]).then(this.axios.spread((...n)=>{n.filter((t,o)=>{l.push({...this.data.attachments.filter(d=>d.file)[o],...t.data.data,filepath:t.data.data.path})}),e.length==l.length&&this.upload_file_all2(l)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}),e.length<1&&this.upload_file_all2(l)},upload_file_all2(i){let e=this.assetsUtils.currentDate(),l=[],n=[];this.data.main_docs.filter(t=>{if(t.file){let o=new FormData;o.append("file",t.file),o.append("dst",`${e.split("/")[0]+"-"+e.split("/")[1]+"-"+e.split("/")[2]}`),l.push(this.axios.post("/upload/single",o,{headers:{"Content-Type":"multipart/form-data"}}))}}),l.length>0?this.axios.all([...l]).then(this.axios.spread((...t)=>{t.filter((o,d)=>{n.push({...this.data.main_docs.filter(p=>p.file)[d],...o.data.data,filepath:o.data.data.path})}),l.length==n.length&&this.upload_file_all3(n,i)})).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}}):this.upload_file_all3(n,i)},upload_file_all3(i,e){var n;let l=this.assetsUtils.currentDate();if((n=this.data.sendToFile)!=null&&n.filename){let t=new FormData;t.append("file",this.data.sendToFile.file),t.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),this.axios.post("/upload/single",t,{headers:{"Content-Type":"multipart/form-data"}}).then(o=>{this.data.attach_filename=o.data.data.filename,this.data.attach_filepath=o.data.data.path,this.upload_file_all4(i,e)}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})}else this.upload_file_all4(i,e)},upload_file_all4(i,e){let l=this.assetsUtils.currentDate(),n=[],t=[];this.data.booking_follows.filter(o=>{var d;if((d=o.sendToFile)!=null&&d.filename){let p=new FormData;p.append("file",o.sendToFile.file),p.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),n.push(this.axios.post("/upload/single",p,{headers:{"Content-Type":"multipart/form-data"}}))}}),n.length>0?this.axios.all([...n]).then(this.axios.spread((...o)=>{o.filter((d,p)=>{this.data.booking_follows[p].attach_filepath=d.data.data.path,this.data.booking_follows[p].attach_filename=d.data.data.filename,t.push({...this.data.booking_follows[p],...d.data.data,filepath:d.data.data.path})}),n.length==t.length&&this.call_api_save(i,e)})).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}}):this.call_api_save(i,e)},call_api_save(i,e){let l=this,n="";this.data.tag.filter(o=>{n+=o.name+","}),n=n.slice(0,-1),this.data.sendTo.filter(o=>{if(!this.data.booking_follows.some(d=>d.department_id===o.value&&d.flag!="delete")){let d={department_id:parseInt(o.value),department_name:o.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:o.human_flag,response_id:parseInt(o.value),response_type:o.type,attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename,sendToFile:{filename:this.data.attach_filename}};this.optionSelect.process_type_id.find(p=>{p.value==this.data.process_type_id&&(d.process_type_name=p.name)}),this.optionSelect.permission_id.find(p=>{p.value==this.data.permission_id&&(d.permission_name=p.name)}),this.data.booking_follows.push(d)}}),this.data.main_docs.filter(o=>{o.flag=="delete"&&i.push(o)}),this.data.attachments.filter(o=>{o.flag=="delete"&&e.push(o)});let t={original_flag:this.data.original_flag,regis_id:parseInt(this.data.book_category_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:n,main_docs:i,attachments:e,booking_refers:this.data.booking_refers.filter(o=>o.book_refer_id),booking_follows:this.data.booking_follows,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":"",book_type:parseInt(this.$route.query.book_type),receive_regis_id:parseInt(this.$route.query.regis_id)};this.edit&&(this.flagSave==1?(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})):(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})))},api_detail(){this.showLoading=!0,this.axios.get(`/booking-receive/receive-note/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id,response_id:this.$route.query.response_id}}).then(i=>{var e,l,n,t,o;this.showLoading=!1,i.data.data={...this.data,...i.data.data},this.data=JSON.parse(JSON.stringify(i.data.data)),this.data.tag=[],(e=i.data.data.tag)==null||e.split(",").filter(d=>{d&&this.data.tag.push({value:"",name:d})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],i.data.data.booking_refers.filter(d=>{d.flag="edit",this.axios.get(`/master-data/book-refer/${d.book_type}/${d.id}`).then(p=>{this.data.booking_refers.push({...p.data.data,...d})}).catch(p=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})}),this.data.main_docs.filter(d=>(d.flag="edit",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.attachments.filter(d=>(d.flag="edit",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.booking_follows=[],(((l=this.data.main_docs)==null?void 0:l.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}]),(((n=this.data.attachments)==null?void 0:n.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(((t=this.data.contracts)==null?void 0:t.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:"",flag:"add"}]),(((o=i.data.data.booking_refers)==null?void 0:o.length)<1||!i.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}])}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})},api_master(){this.showLoading=!0;const i=this.axios.get("/master-data/book-type-note"),e=this.axios.get("/master-data/secret"),l=this.axios.get("/master-data/speed"),n=this.axios.get("/master-data/process-type"),t=this.axios.get("/master-data/permission-type"),o=this.axios.get("/master-data/department"),d=this.axios.get("/master-data/book-category",{params:{book_type:1}}),p=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([i,e,l,n,t,o,d,p]).then(this.axios.spread((...y)=>{this.showLoading=!1;const L=y[0],q=y[1],U=y[2],x=y[3],F=y[4],r=y[5],k=y[6],b=y[7];L.data.data.filter(a=>(a.value=a.id,a.name=a.name,a)),q.data.data.filter(a=>(a.value=a.id,a.name=a.desc,a)),U.data.data.filter(a=>(a.value=a.id,a.name=a.desc,a)),x.data.data.filter(a=>(a.value=a.id,a.name=a.desc,a)),F.data.data.filter(a=>(a.value=a.id,a.name=a.desc,a)),r.data.data.filter(a=>(a.value=a.id,a.name=a.department_full_name,a)),k.data.data.filter(a=>(a.value=a.id,a.name=a.name,a)),this.data.FileType=[],b.data.data.filter(a=>{a.active_flag==1&&this.data.FileType.push(a.content_type)}),this.optionSelect.book_type_id=L.data.data,this.optionSelect.secret_id=q.data.data,this.optionSelect.speed_id=U.data.data,this.optionSelect.process_type_id=x.data.data,this.optionSelect.permission_id=F.data.data,this.optionSelect.department_id=r.data.data,this.optionSelectDefault.book_category_id=k.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(y=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:y.response.data.message}})},submitClick(){let i=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการรับเข้าหรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){let e={regis_id:parseInt(i.data.book_category_id),book_type:4,human_flag:i.data.human_flag,response_id:parseInt(i.$route.query.response_id),user_id:parseInt(localStorage.getItem("user_id")),page_flag:"owner",flag:"confirm"};i.showLoading=!0,i.axios.put(`/booking-receive/${i.$route.params.id}`,e).then(()=>{i.showLoading=!1,i.modalAlert={showModal:!0,type:"success",title:"ยืนยันรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){i.back()}}}).catch(l=>{i.showLoading=!1,i.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}}}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},P={class:"booking-receive-detail"},J={class:"group-overflow"},K={class:"detail"},G={class:"group-head"},H={class:"group-first"},Q={class:"name"},W={class:"group-detail"},X={class:"group-between"},Y={class:"group-input left"},Z={class:"group-input left"},$={class:"group-input left"},ee={class:"group-input"},te={class:"group-between"},se={class:"group-input left"},ae={class:"group-between"},ie={class:"group-input left"},oe={class:"group-input"},le={class:"group-between"},de={class:"group-input left"},ne={class:"group-input left"},re={class:"group-input left"},pe={class:"group-input"},ue={class:"group-input d-flex align-items-center"},ce=["disabled"],_e={class:"group-input left"},he={class:"group-input left"},fe={class:"group-input d-flex"},me=["onClick"],ge={class:"group-detail"},be={class:"group-between"},ye={class:"group-input left"},ve={class:"d-flex mb-3"},ke={class:"group-input-file"},we=["onClick"],Se=["onClick"],Ve=["onChange","name"],Ce=["onClick"],Te=["disabled","onClick"],Le={class:"group-input"},qe={class:"group-input d-flex align-items-center"},Ue=["disabled"],xe={class:"d-flex mb-3"},Fe={class:"group-input-file"},Ae=["onClick"],Me=["onClick"],Ie=["onChange","name"],ze=["onClick"],De=["disabled","onClick"],Re={class:"send-to"},je={class:"group-input"},Ee={class:"group-input left"},Oe={class:"name d-flex justify-content-between"},Be={class:"group-between"},Ne={class:"group-input left"},Pe={class:"group-input"},Je={class:"d-flex align-items-center justify-content-between"},Ke={key:0,class:"line mt-3"},Ge={class:"d-flex justify-content-between"},He={class:"title"},Qe=["onClick"],We={class:"d-flex ms-2 mt-2"},Xe={class:"name"},Ye={class:"name ms-5"},Ze={class:"name ms-5"},$e={class:"name ms-2 mt-1"},et={class:"name ms-2 mt-1"},tt={class:"group-footer"},st={class:"footer-left d-flex"},at={class:"footer-right"},it={type:"button",class:"confirm-receive"},ot=["disabled"],lt={key:0,class:"detail-history"},dt={class:"history"},nt={class:"group-right"},rt={class:"bi bi-chevron-right icon-angle"},pt={class:"bi bi-chevron-down icon-angle"},ut={class:"line"},ct={class:"content"},_t={class:"content-head"},ht={key:0},ft={class:"detail-head"},mt={class:"number"},gt={class:"create"},bt={class:"date"},yt={class:"time"},vt=["onClick"],kt={key:0,class:"detail-signager"},wt=["src"],St={key:0,class:"line"},Vt={key:1,class:"content-detail first end"};function Ct(i,e,l,n,t,o){const d=V("cpn-select"),p=V("cpn-datepicker"),y=V("cpn-textArea"),L=V("cpn-input-tags"),q=V("cpn-input"),U=V("Form"),x=V("cpn-modal-alert"),F=V("cpn-loading");return _(),h("div",P,[s("div",J,[s("div",K,[s("div",G,[s("div",H,[e[30]||(e[30]=s("img",{src:E,alt:"",class:"icon-size"},null,-1)),s("div",Q,[u(g(t.edit?"แก้ไขบันทึกรับเข้า":"สร้างบันทึกรับเข้า")+" ",1),s("label",null,g(t.data.document_number),1)])])]),e[67]||(e[67]=s("div",{class:"line"},null,-1)),f(U,{onSubmit:o.on_submit,onInvalidSubmit:i.onInvalidSubmit},{default:j(()=>{var r,k,b;return[s("div",W,[s("div",X,[s("div",Y,[e[31]||(e[31]=s("div",{class:"name"},[u("ทะเบียนบันทึกข้อความ "),s("span",{class:"required"},"*")],-1)),f(d,{modelValue:t.data.book_category_id,"onUpdate:modelValue":e[0]||(e[0]=a=>t.data.book_category_id=a),name:"book_category_id",rules:"required",disabled:t.edit,optionSelect:t.optionSelectDefault.book_category_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),s("div",Z,[e[32]||(e[32]=s("div",{class:"name"},[u("ลงวันที่ "),s("span",{class:"required"},"*")],-1)),f(p,{modelValue:t.data.as_of_date,"onUpdate:modelValue":e[1]||(e[1]=a=>t.data.as_of_date=a),name:"as_of_date",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),s("div",$,[e[33]||(e[33]=s("div",{class:"name"},[u("วันที่ส่งมา "),s("span",{class:"required"},"*")],-1)),f(p,{modelValue:t.data.create_date,"onUpdate:modelValue":e[2]||(e[2]=a=>t.data.create_date=a),name:"create_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),s("div",ee,[e[34]||(e[34]=s("div",{class:"name"},[u("วันที่กองรับเรื่อง "),s("span",{class:"required"},"*")],-1)),f(p,{modelValue:t.data.receive_date,"onUpdate:modelValue":e[3]||(e[3]=a=>t.data.receive_date=a),name:"receive_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])]),s("div",te,[s("div",se,[e[35]||(e[35]=s("div",{class:"name"},[u("ชนิดของหนังสือ "),s("span",{class:"required"},"*")],-1)),f(d,{modelValue:t.data.book_type_id,"onUpdate:modelValue":e[4]||(e[4]=a=>t.data.book_type_id=a),name:"book_type_id",disabled:t.edit,rules:"required",optionSelect:t.optionSelect.book_type_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),s("div",ae,[s("div",ie,[e[36]||(e[36]=s("div",{class:"name"},[u("ชั้นความลับ "),s("span",{class:"required"},"*")],-1)),f(d,{modelValue:t.data.secret_id,"onUpdate:modelValue":e[5]||(e[5]=a=>t.data.secret_id=a),name:"secret_id",rules:"required",optionSelect:t.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])]),s("div",oe,[e[37]||(e[37]=s("div",{class:"name"},[u("ความเร่งด่วน "),s("span",{class:"required"},"*")],-1)),f(d,{modelValue:t.data.speed_id,"onUpdate:modelValue":e[6]||(e[6]=a=>t.data.speed_id=a),name:"speed_id",rules:"required",optionSelect:t.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])])])]),s("div",le,[s("div",de,[e[38]||(e[38]=s("div",{class:"name"},[u("ชื่อเรื่อง "),s("span",{class:"required"},"*")],-1)),f(y,{modelValue:t.data.subject,"onUpdate:modelValue":e[7]||(e[7]=a=>t.data.subject=a),name:"subject",rules:"required",disabled:t.edit,rows:"1"},null,8,["modelValue","disabled"])])]),s("div",ne,[e[39]||(e[39]=s("div",{class:"name"},[u("เรียน "),s("span",{class:"required"},"*")],-1)),f(y,{modelValue:t.data.send_to,"onUpdate:modelValue":e[8]||(e[8]=a=>t.data.send_to=a),name:"send_to",rows:"1",disabled:t.edit},null,8,["modelValue","disabled"])]),s("div",re,[e[40]||(e[40]=s("div",{class:"name"},"รายละเอียดหนังสือ",-1)),f(y,{modelValue:t.data.book_desc,"onUpdate:modelValue":e[9]||(e[9]=a=>t.data.book_desc=a),name:"book_desc",disabled:t.edit,rows:"1"},null,8,["modelValue","disabled"])]),s("div",pe,[e[41]||(e[41]=s("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1)),f(L,{modelValue:t.data.tag,"onUpdate:modelValue":e[10]||(e[10]=a=>t.data.tag=a),name:"tag"},null,8,["modelValue"])]),s("div",ue,[e[43]||(e[43]=s("div",{class:"name"},"อ้างอิงถึง",-1)),s("button",{type:"button",class:"add-booking-receive",onClick:e[11]||(e[11]=a=>o.add_booking_refers()),disabled:t.edit},e[42]||(e[42]=[s("div",{class:"group-image"},[s("img",{src:D,alt:"",class:"icon-plus"}),u(" เพิ่มเอกสารอ้างอิง ")],-1)]),8,ce)]),(_(!0),h(C,null,T(t.data.booking_refers,(a,c)=>w((_(),h("div",{class:"group-between",key:c},[s("div",_e,[f(q,{modelValue:a.receive_document_number,"onUpdate:modelValue":m=>a.receive_document_number=m,name:`codeRefers${c}`,type:"text",searchFlag:!0,disabled:t.edit,onSearchClick:m=>o.booking_refers_click(a),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","disabled","onSearchClick"])]),s("div",he,[f(q,{modelValue:a.desc,"onUpdate:modelValue":m=>a.desc=m,name:`nameRefers${c}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),s("div",fe,[f(p,{modelValue:a.receive_date,"onUpdate:modelValue":m=>a.receive_date=m,name:`dateRefers${c}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),s("button",{type:"button",onClick:m=>o.delete_booking_refers(a,c),class:"button-delete ms-3"},e[44]||(e[44]=[s("img",{src:M,alt:"",class:"image-trash pointer"},null,-1)]),8,me)])])),[[S,a.flag!="delete"]])),128)),e[45]||(e[45]=s("div",{class:"group-input"},null,-1))]),e[64]||(e[64]=s("div",{class:"line"},null,-1)),s("div",ge,[s("div",be,[s("div",ye,[e[48]||(e[48]=s("div",{class:"name"},"บันทึกต้นเรื่อง",-1)),(_(!0),h(C,null,T(t.data.main_docs,(a,c)=>w((_(),h("div",{key:c},[s("div",ve,[s("div",ke,[s("button",{type:"button",class:v([t.edit?"none-pointer":"","button-file"]),onClick:m=>t.edit?"":o.upload_file(`main_docs${c}`)},[s("span",{class:v(a.filename?"":"no-data")},g(a.filename?a.filename:"บันทึกต้นเรื่อง"),3)],10,we),s("div",{class:v(t.edit?"text disabled":"text pointer"),onClick:m=>t.edit?"":o.upload_file(`main_docs${c}`)},"แนบเอกสาร",10,Se),s("input",{type:"file",onChange:m=>o.file_set_change2(`main_docs${c}`,a,"main_docs"),name:`main_docs${c}`,style:{display:"none"},accept:"application/pdf"},null,40,Ve)]),s("button",{type:"button",onClick:m=>o.download_file(a),class:"button-eye"},e[46]||(e[46]=[s("i",{class:"bi bi-eye icon-eye"},null,-1)]),8,Ce),s("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:m=>o.delete_main_doc(a,c)},e[47]||(e[47]=[s("img",{src:M,alt:"",class:"image-trash"},null,-1)]),8,Te)])])),[[S,a.flag!="delete"]])),128))]),s("div",Le,[s("div",qe,[e[50]||(e[50]=s("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1)),s("button",{type:"button",class:"add-booking-receive",disabled:t.edit,onClick:e[12]||(e[12]=a=>o.upload_file("fileAttachment"))},e[49]||(e[49]=[s("div",{class:"group-image"},[s("img",{src:D,alt:"",class:"icon-plus"}),u(" เพิ่มไฟล์ ")],-1)]),8,Ue),s("input",{type:"file",multiple:"",onChange:e[13]||(e[13]=a=>o.file_attachment_add_change("fileAttachment")),name:"fileAttachment",style:{display:"none"}},null,32)]),(_(!0),h(C,null,T(t.data.attachments,(a,c)=>w((_(),h("div",{key:c},[s("div",xe,[s("div",Fe,[s("button",{type:"button",class:v([t.edit?"none-pointer":"","button-file"]),onClick:m=>t.edit?"":o.upload_file(`attachments${c}`)},[s("span",{class:v(a.filename?"":"no-data")},g(a.filename?a.filename:"สิ่งที่ส่งมาด้วย"),3)],10,Ae),s("div",{class:v(t.edit?"text disabled":"text pointer"),onClick:m=>t.edit?"":o.upload_file(`attachments${c}`)},"แนบเอกสาร",10,Me),s("input",{type:"file",onChange:m=>o.file_set_change2(`attachments${c}`,a,"attachments"),name:`attachments${c}`,style:{display:"none"}},null,40,Ie)]),s("button",{type:"button",onClick:m=>o.download_file(a),class:"button-eye"},e[51]||(e[51]=[s("i",{class:"bi bi-eye icon-eye"},null,-1)]),8,ze),s("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:m=>o.delete_attachments(a,c)},e[52]||(e[52]=[s("img",{src:M,alt:"",class:"image-trash"},null,-1)]),8,De)])])),[[S,a.flag!="delete"]])),128))])])]),e[65]||(e[65]=s("div",{class:"line"},null,-1)),s("div",Re,[s("div",je,[e[53]||(e[53]=s("div",{class:"name"},"ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) ",-1)),f(L,{modelValue:t.data.sendTo,"onUpdate:modelValue":e[14]||(e[14]=a=>t.data.sendTo=a),flagSearch:!0,optionSelect:t.optionSelect.sendTo,onKeyup:o.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),s("div",Ee,[s("div",Oe,[e[56]||(e[56]=s("div",null,"ความเห็น / คำสั่ง",-1)),s("div",null,[s("input",{type:"file",onChange:e[15]||(e[15]=a=>o.file_set_change1("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(r=t.data.sendToFile)!=null&&r.filename?(_(),h("div",{key:1,class:"del-comment pointer",onClick:e[17]||(e[17]=a=>t.data.sendToFile.filename="")},[u(g((k=t.data.sendToFile)==null?void 0:k.filename)+" ",1),e[55]||(e[55]=s("img",{src:B,alt:"",class:"image-x"},null,-1))])):(_(),h("button",{key:0,type:"button",class:"button-con pointer",onClick:e[16]||(e[16]=a=>o.upload_file("sendTo"))},e[54]||(e[54]=[s("img",{src:O,alt:"",class:"icon-paperclip"},null,-1),u(" แนบเอกสาร ")])))])]),f(y,{modelValue:t.data.comment,"onUpdate:modelValue":e[18]||(e[18]=a=>t.data.comment=a),name:"comment",rows:"3"},null,8,["modelValue"])]),s("div",Be,[s("div",Ne,[e[57]||(e[57]=s("div",{class:"name"},"รูปแบบการดำเนินการ",-1)),f(d,{modelValue:t.data.process_type_id,"onUpdate:modelValue":e[19]||(e[19]=a=>t.data.process_type_id=a),name:"process_type_id",optionSelect:t.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),s("div",Pe,[e[58]||(e[58]=s("div",{class:"name"},"การมองเห็น",-1)),f(d,{modelValue:t.data.permission_id,"onUpdate:modelValue":e[20]||(e[20]=a=>t.data.permission_id=a),name:"permission_id",optionSelect:t.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),s("div",Je,[s("div",null,[s("button",{type:"button",class:"button button-danger",onClick:e[21]||(e[21]=a=>(t.data.sendTo=[],t.data.comment="",t.data.process_type_id="",t.data.permission_id=""))},e[59]||(e[59]=[s("img",{src:z,alt:"times-circle",class:"icon-times-circle"},null,-1),u(" ยกเลิก ")]))]),s("div",null,[s("button",{type:"button",onClick:e[22]||(e[22]=a=>o.add_booking_follows()),class:"button button-success"},e[60]||(e[60]=[s("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),u(" เพิ่มการส่งต่อ ")]))])]),t.data.booking_follows.length>0?(_(),h("div",Ke)):A("",!0),(_(!0),h(C,null,T(t.data.booking_follows,(a,c)=>{var m;return w((_(),h("div",{class:"group-add",key:c},[s("div",Ge,[s("div",He,"#"+g(c+1),1),s("img",{onClick:Tt=>o.delete_booking_follows(a,c),src:M,alt:"",class:"image-trash pointer"},null,8,Qe)]),s("div",We,[s("div",Xe,"ส่งต่อ : "+g((a==null?void 0:a.department_name)||"-"),1),s("div",Ye,"รูปแบบการดำเนินการ : "+g((a==null?void 0:a.process_type_name)||"-"),1),s("div",Ze,"การมองเห็น : "+g((a==null?void 0:a.permission_name)||"-"),1)]),s("div",$e,"ความเห็น / คำสั่ง : "+g((a==null?void 0:a.comment)||"-"),1),s("div",et,"เอกสารแนบ : "+g(((m=a==null?void 0:a.sendToFile)==null?void 0:m.filename)||"-"),1)])),[[S,a.flag!="delete"]])}),128))]),e[66]||(e[66]=s("div",{class:"line mt-4"},null,-1)),s("div",tt,[s("div",st,[s("button",{type:"button",class:"button-danger",onClick:e[23]||(e[23]=a=>o.back())},e[61]||(e[61]=[s("img",{src:z,alt:"times-circle",class:"icon-times-circle"},null,-1),u(" ปิด ")]))]),s("div",at,[s("button",it,[s("div",{class:"group-image",onClick:e[24]||(e[24]=a=>o.submitClick())},e[62]||(e[62]=[s("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),u(" ยืนยันรับเข้า ")]))]),s("button",{type:"submit",class:"button-success",onClick:e[25]||(e[25]=a=>t.flagSave=2),disabled:((b=t.data.sendTo)==null?void 0:b.length)<1},e[63]||(e[63]=[s("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),u(" บันทึกและส่งต่อ ")]),8,ot)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])]),i.$route.params.id?(_(),h("div",lt,[s("div",dt,[s("div",{class:"header pointer",onClick:e[26]||(e[26]=r=>(t.data.history.hide=!t.data.history.hide,o.historyClick(t.data.history.tab)))},[e[68]||(e[68]=s("div",{class:"group-left"},[s("i",{class:"bi bi-clock icon-size"}),s("div",{class:"name"},"ประวัติการแก้ไข")],-1)),s("div",nt,[w(s("i",rt,null,512),[[S,!t.data.history.hide]]),w(s("i",pt,null,512),[[S,t.data.history.hide]])])]),w(s("div",ut,null,512),[[S,t.data.history.hide]]),w(s("div",ct,[s("div",_t,[s("div",{class:v(["pointer",t.data.history.tab==1?"active":""]),onClick:e[27]||(e[27]=r=>(t.data.history.tab=1,o.historyClick(1)))},e[69]||(e[69]=[s("i",{class:"bi bi-border-all icon-size"},null,-1),u("ทั้งหมด")]),2),s("div",{class:v(["pointer",t.data.history.tab==2?"active":""]),onClick:e[28]||(e[28]=r=>(t.data.history.tab=2,o.historyClick(2)))},e[70]||(e[70]=[s("i",{class:"bi bi-chat-left icon-size"},null,-1),u("ความเห็นคำสั่ง")]),2),s("div",{class:v(["pointer",t.data.history.tab==3?"active":""]),onClick:e[29]||(e[29]=r=>(t.data.history.tab=3,o.historyClick(3)))},e[71]||(e[71]=[s("i",{class:"bi bi-pencil-square icon-size"},null,-1),u("แก้ไขข้อมูล")]),2)]),t.data.history.data.filter(r=>t.data.history.tab==2?r.type==2:t.data.history.tab==3?r.type==0||r.type==1:r).length>0?(_(),h("div",ht,[(_(!0),h(C,null,T(t.data.history.data.filter(r=>t.data.history.tab==2?r.type==2:t.data.history.tab==3?r.type==0||r.type==1:r),(r,k)=>(_(),h("div",{class:v(["content-detail",k==0?"first":k==t.data.history.data.length-1?"end":""]),key:k},[s("div",ft,[s("div",mt,"#"+g(t.data.history.data.filter(b=>t.data.history.tab==2?b.type==2:t.data.history.tab==3?b.type==0||b.type==1:b).length-k),1),s("div",{class:v(["topic",r.bookactionname=="ความเห็นคำสั่ง"?"blue":r.bookactionname=="แก้ไขหนังสือ"?"yellow":"green"])},[s("i",{class:v(["bi icon-size",r.bookactionname=="ความเห็นคำสั่ง"?"bi-chat-left":r.bookactionname=="แก้ไขหนังสือ"?"bi-pencil-square":"bi-plus-lg"])},null,2),u(" "+g(r.bookactionname),1)],2),s("div",gt,[e[72]||(e[72]=s("i",{class:"bi bi-person icon-size"},null,-1)),u(" โดย "+g(r.updateBy)+" / "+g(r.subName),1)]),s("div",bt," วันที่ "+g(r.createDate),1),s("div",yt,[e[73]||(e[73]=s("i",{class:"bi bi-clock icon-size"},null,-1)),u(" "+g(r.createTime),1)])]),(_(!0),h(C,null,T(r.bookingRemarks,(b,a)=>(_(),h("ul",{class:"detail-list",key:a},[w(s("button",{class:"button-file",onClick:c=>o.download_file({filename:b.filepath.split("/").pop(),link:b.link})},g(b.filepath.split("/").pop()),9,vt),[[S,b.filepath]]),s("li",null,[u(g(b.remark)+" "+g(b.comment)+" ",1),b.signature_img&&r.bookactionname=="ความเห็นคำสั่ง"?(_(),h("div",kt,[s("img",{src:b.signature_img,alt:"",class:"image-size"},null,8,wt)])):A("",!0)])]))),128)),k!=t.data.history.data.length-1?(_(),h("div",St)):A("",!0)],2))),128))])):(_(),h("div",Vt,e[74]||(e[74]=[s("div",{class:"detail-head"},[s("div",{class:"topic"},"ไม่มีข้อมูล")],-1)])))],512),[[S,t.data.history.hide]])])])):A("",!0)]),f(x,{modalAlert:t.modalAlert},null,8,["modalAlert"]),f(F,{show:t.showLoading},null,8,["show"])])}const At=R(N,[["render",Ct]]);export{At as default};
