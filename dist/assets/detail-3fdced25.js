import{_ as j,r as w,o as g,c as m,a as e,t as b,b as u,d as z,w as L,v as U,n as v,j as h,F as S,h as V,i as x,g as I,k as D}from"./index-dd07de24.js";import{_ as E}from"./ballot-duotone-f2459825.js";import{_ as R}from"./plus-circle-duotone-64bd32fe.js";import{_ as M}from"./trash-alt-duotone-12d94c28.js";import{_ as O,a as B}from"./x-solid-74fa126d.js";const N={name:"record-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{original_flag:!1,book_category_id:"",book_type_id:"",receive_date:"",receive_time:"",document_number:"",as_of_date:"",subject:"",secret_id:"",speed_id:"",send_to:"",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],main_docs_del:[],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"12",permission_id:"8",book_type:"",human_flag:!1,response_id:"",history:{hide:!1,data:[],tab:1},FileType:[],regis_id:""},optionSelect:{book_category_id:[],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]},optionSelectDefault:{book_category_id:[]}}},methods:{historyClick(o){this.showLoading=!0,this.axios.get(`/booking-note/${this.$route.params.id}/history`,{params:{book_type:this.$route.query.book_type}}).then(a=>{this.showLoading=!1,a.data.data.filter(l=>(l.bookingRemarks.filter(n=>(n.signature_img?this.axios({method:"get",url:this.backendport+"/"+n.signature_img,baseURL:"",responseType:"blob"}).then(t=>{const i=new Blob([t.data],{type:this.assetsUtils.getTypeFile(n.signature_img)});n.signature_img=URL.createObjectURL(i)}).catch(t=>{n.signature_img=new URL("/assets/signature_img-526e80c1.jpg",self.location).href}):n.signature_img=new URL("/assets/signature_img-526e80c1.jpg",self.location).href,n.link=n.filepath?this.backendport+"/"+n.filepath:"",n)),l)),this.data.history.data=a.data.data}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},add_attachments(){this.data.attachments.push({filename:"",flag:"add"})},delete_attachments(o,a){o.flag=="edit"?o.flag="delete":this.data.attachments.splice(a,1),this.data.attachments.length-this.data.attachments.filter(l=>l.flag=="delete").length<1&&this.add_attachments()},delete_main_docs(o,a){o.flag=="edit"?o.flag="delete":this.data.main_docs.splice(a,1)},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(o,a){o.flag=="edit"?o.flag="delete":this.data.booking_refers.splice(a,1),this.data.booking_refers.length-this.data.booking_refers.filter(l=>l.flag=="delete").length<1&&this.add_booking_refers()},booking_refers_click(o){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:o.receive_document_number}}).then(a=>{this.showLoading=!1,a.data.data.length>0?(o.book_refer_id=a.data.data[0].id,o.original_refer_id=a.data.data[0].id,o.book_type=a.data.data[0].book_type,o.desc=a.data.data[0].desc,o.receive_date=a.data.data[0].receive_date):(o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(a=>{o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},delete_click(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"บันทึกรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.axios.delete(`/booking-receive/receive-note/${o.$route.params.id}`).then(()=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.back()}}}).catch(a=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})}}},keyup_department(o){this.optionSelect.department_id=[],this.axios.get("/master-data/department-user",{params:{keyword:o.target.value}}).then(a=>{a.data.data&&(a.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.department_id=a.data.data)})},keyup_send_to(o){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user",{params:{keyword:o.target.value,user_id:parseInt(localStorage.getItem("user_id"))}}).then(a=>{a.data.data&&(a.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.sendTo=a.data.data)})},add_booking_follows(){this.data.sendTo.filter(o=>{var a;if(!this.data.booking_follows.some(l=>l.department_id===o.value&&l.flag!="delete")){let l={department_id:parseInt(o.value),department_name:o.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:o.human_flag,response_id:parseInt(o.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(((a=this.data.sendToFile)==null?void 0:a.filename)||""))},response_type:o.type};this.optionSelect.process_type_id.find(n=>{n.value==this.data.process_type_id&&(l.process_type_name=n.name)}),this.optionSelect.permission_id.find(n=>{n.value==this.data.permission_id&&(l.permission_name=n.name)}),this.data.booking_follows.push(l)}})},delete_booking_follows(o,a){o.flag=="edit"?o.flag="delete":this.data.booking_follows.splice(a,1)},download_file(o){o.filename&&o.link&&this.axios({method:"get",url:o.link,baseURL:"",responseType:"blob"}).then(a=>{const l=new Blob([a.data],{type:this.assetsUtils.getTypeFile(o.filename)});window.open(URL.createObjectURL(l))})},upload_file(o){document.querySelector(`[name="${o}"]`).click()},file_set_change(o,a,l){for(var n=0;n<document.querySelector(`[name="${o}"]`).files.length;n++){let t=document.querySelector(`[name="${o}"]`).files[n];if(this.data.FileType.indexOf(t.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(l=="main_docs"){if(t.type=="application/pdf"){let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[l][a]={...this.data[l][a],...i},document.querySelector(`[name="${o}"]`).value=null}}else if(l=="sendTo"){let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data.sendToFile=i}else{let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[l][a]={...this.data[l][a],...i},document.querySelector(`[name="${o}"]`).value=null}}},back(){this.$router.push({name:"subministry-work.record-receive",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.upload_file_all()}}},upload_file_all(){let o=this.assetsUtils.currentDate(),a=[],l=[],n=[],t=[],i=[];this.data.main_docs.filter(r=>{if(r.file){let d=new FormData;d.append("file",r.file),d.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),a.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}else r.id&&i.push({filename:r.filename,filepath:r.filepath})}),this.data.attachments.filter(r=>{if(r.file){let d=new FormData;d.append("file",r.file),d.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),l.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}}),a.length>0&&this.axios.all([...a]).then(this.axios.spread((...r)=>{r.filter((d,p)=>{n.push({...this.data.main_docs[p],...d.data.data,filepath:d.data.data.path})}),a.length==n.length&&l.length==t.length&&this.call_api_save([...n,...i],t)})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}}),l.length>0&&this.axios.all([...l]).then(this.axios.spread((...r)=>{r.filter((d,p)=>{t.push({...this.data.attachments[p],...d.data.data,filepath:d.data.data.path})}),a.length==n.length&&l.length==t.length&&this.call_api_save([...n,...i],t)})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}}),a.length<1&&l.length<1&&this.call_api_save([...i],[])},upload_file_all2(o){let a=this.assetsUtils.currentDate(),l=[],n=[];this.data.main_docs.filter(t=>{if(t.file){let i=new FormData;i.append("file",t.file),i.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),l.push(this.axios.post("/upload/single",i,{headers:{"Content-Type":"multipart/form-data"}}))}}),l.length>0?this.axios.all([...l]).then(this.axios.spread((...t)=>{t.filter((i,r)=>{n.push({...this.data.main_docs[r],...i.data.data,filepath:i.data.data.path})}),l.length==n.length&&this.call_api_save(n,o)})).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}}):this.call_api_save(n,o)},upload_file_all3(o,a){var n;let l=this.assetsUtils.currentDate();if((n=this.data.sendToFile)!=null&&n.filename){let t=new FormData;t.append("file",this.data.sendToFile.file),t.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),this.axios.post("/upload/single",t,{headers:{"Content-Type":"multipart/form-data"}}).then(i=>{this.data.attach_filename=i.data.data.filename,this.data.attach_filepath=i.data.data.path,this.upload_file_all4(o,a)}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}else this.upload_file_all4(o,a)},upload_file_all4(o,a){let l=this.assetsUtils.currentDate(),n=[],t=[];this.data.booking_follows.filter(i=>{var r;if((r=i.sendToFile)!=null&&r.filename){let d=new FormData;d.append("file",i.sendToFile.file),d.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),n.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}}),n.length>0?this.axios.all([...n]).then(this.axios.spread((...i)=>{i.filter((r,d)=>{this.data.booking_follows[d].attach_filepath=r.data.data.path,this.data.booking_follows[d].attach_filename=r.data.data.filename,t.push({...this.data.booking_follows[d],...r.data.data,filepath:r.data.data.path})}),n.length==t.length&&this.call_api_save(o,a)})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}):this.call_api_save(o,a)},call_api_save([...o],[],a){let l=this,n="";this.data.tag.filter(i=>{n+=i.name+","}),n=n.slice(0,-1),this.data.sendTo.filter(i=>{if(!this.data.booking_follows.some(r=>r.department_id===i.value&&r.flag!="delete")){let r={department_id:parseInt(i.value),department_name:i.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:i.human_flag,response_id:parseInt(i.value),response_type:i.type,attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename,sendToFile:{filename:this.data.attach_filename}};this.optionSelect.process_type_id.find(d=>{d.value==this.data.process_type_id&&(r.process_type_name=d.name)}),this.optionSelect.permission_id.find(d=>{d.value==this.data.permission_id&&(r.permission_name=d.name)}),this.data.booking_follows.push(r)}});let t={original_flag:this.data.original_flag,regis_id:parseInt(this.data.book_category_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:n,main_docs:[...o,...this.data.main_docs_del],attachments:a,booking_refers:this.data.booking_refers.filter(i=>i.book_refer_id),booking_follows:this.data.booking_follows,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":"",book_type:parseInt(this.$route.query.book_type),receive_regis_id:parseInt(this.$route.query.regis_id)};this.edit&&(this.flagSave==1?(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})))},api_detail(){this.showLoading=!0,this.axios.get(`/booking-receive/receive-note/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id}}).then(o=>{var l,n,t,i,r;this.showLoading=!1;let a=[];o.data.data.main_docs.filter(d=>{a.push({...d,flag:"delete"})}),o.data.data={...this.data,...o.data.data,main_docs_del:a},this.data=JSON.parse(JSON.stringify(o.data.data)),this.data.tag=[],(l=o.data.data.tag)==null||l.split(",").filter(d=>{d&&this.data.tag.push({value:"",name:d})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],o.data.data.booking_refers.filter(d=>{d.flag="edit",this.axios.get(`/master-data/book-refer/${d.book_type}/${d.id}`).then(p=>{this.data.booking_refers.push({...p.data.data,...d})}).catch(p=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})}),this.data.main_docs.filter(d=>(d.flag="edit",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.attachments.filter(d=>(d.flag="edit",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.contracts.filter(d=>(d.flag="edit",d)),this.data.booking_follows.filter(d=>(d.flag="edit",d)),this.data.booking_follows=[],(((n=this.data.main_docs)==null?void 0:n.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}]),(((t=this.data.attachments)==null?void 0:t.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(((i=this.data.contracts)==null?void 0:i.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:"",flag:"add"}]),(((r=o.data.data.booking_refers)==null?void 0:r.length)<1||!o.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}])}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},api_master(){this.showLoading=!0;const o=this.axios.get("/master-data/book-type-note"),a=this.axios.get("/master-data/secret"),l=this.axios.get("/master-data/speed"),n=this.axios.get("/master-data/process-type"),t=this.axios.get("/master-data/permission-type"),i=this.axios.get("/master-data/department"),r=this.axios.get("/master-data/book-category",{params:{book_type:3}}),d=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([o,a,l,n,t,i,r,d]).then(this.axios.spread((...p)=>{this.showLoading=!1;const C=p[0],T=p[1],F=p[2],A=p[3],q=p[4],c=p[5],k=p[6],y=p[7];C.data.data.filter(s=>(s.value=s.id,s.name=s.name,s)),T.data.data.filter(s=>(s.value=s.id,s.name=s.desc,s)),F.data.data.filter(s=>(s.value=s.id,s.name=s.desc,s)),A.data.data.filter(s=>(s.value=s.id,s.name=s.desc,s)),q.data.data.filter(s=>(s.value=s.id,s.name=s.desc,s)),c.data.data.filter(s=>(s.value=s.id,s.name=s.department_full_name,s)),k.data.data.filter(s=>(s.value=s.id,s.name=s.name,s)),this.data.FileType=[],y.data.data.filter(s=>{s.active_flag==1&&this.data.FileType.push(s.content_type)}),this.optionSelect.book_type_id=C.data.data,this.optionSelect.secret_id=T.data.data,this.optionSelect.speed_id=F.data.data,this.optionSelect.process_type_id=A.data.data,this.optionSelect.permission_id=q.data.data,this.optionSelect.department_id=c.data.data,this.optionSelectDefault.book_category_id=k.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(p=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})},submitClick(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการรับเข้าหรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){let a={regis_id:parseInt(o.data.book_category_id),book_type:4,human_flag:o.data.human_flag,response_id:parseInt(o.data.response_id),user_id:parseInt(localStorage.getItem("user_id"))};o.showLoading=!0,o.axios.put(`/booking-receive/${o.$route.params.id}`,a).then(()=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"success",title:"ยืนยันรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.back()}}}).catch(l=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}}}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},P={class:"booking-receive-detail"},J={class:"group-overflow"},K={class:"detail"},G={class:"group-head"},H={class:"group-first"},Q=e("img",{src:E,alt:"",class:"icon-size"},null,-1),W={class:"name"},X=e("div",{class:"line"},null,-1),Y={class:"group-detail"},Z={class:"group-between"},$={class:"group-input left"},ee=e("div",{class:"name"},[h("ทะเบียนบันทึกข้อความ "),e("span",{class:"required"},"*")],-1),te={class:"group-input left"},se=e("div",{class:"name"},[h("ลงวันที่ "),e("span",{class:"required"},"*")],-1),ae={class:"group-input left"},oe=e("div",{class:"name"},[h("วันที่ส่งมา "),e("span",{class:"required"},"*")],-1),ie={class:"group-input"},le=e("div",{class:"name"},[h("วันที่กองรับเรื่อง "),e("span",{class:"required"},"*")],-1),de={class:"group-between"},ne={class:"group-input left"},re=e("div",{class:"name"},[h("ชนิดของหนังสือ "),e("span",{class:"required"},"*")],-1),ce={class:"group-between"},_e={class:"group-input left"},he=e("div",{class:"name"},[h("ชั้นความลับ "),e("span",{class:"required"},"*")],-1),pe={class:"group-input"},ue=e("div",{class:"name"},[h("ความเร่งด่วน "),e("span",{class:"required"},"*")],-1),fe={class:"group-between"},ge={class:"group-input left"},me=e("div",{class:"name"},[h("ชื่อเรื่อง "),e("span",{class:"required"},"*")],-1),be={class:"group-input left"},ye=e("div",{class:"name"},[h("เรียน "),e("span",{class:"required"},"*")],-1),ve={class:"group-input left"},ke=e("div",{class:"name"},"รายละเอียดหนังสือ",-1),we={class:"group-input"},Se=e("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),Ve={class:"group-input d-flex align-items-center"},Ce=e("div",{class:"name"},"อ้างอิงถึง",-1),Te=["disabled"],Le=e("div",{class:"group-image"},[e("img",{src:R,alt:"",class:"icon-plus"}),h(" เพิ่มเอกสารอ้างอิง ")],-1),Ue=[Le],Fe={class:"group-input left"},Ae={class:"group-input left"},qe={class:"group-input d-flex"},xe=["onClick"],Me=e("img",{src:M,alt:"",class:"image-trash pointer"},null,-1),De=[Me],Ie=e("div",{class:"group-input"},null,-1),Re=e("div",{class:"line"},null,-1),je={class:"group-detail"},ze={class:"group-between"},Ee={class:"group-input left"},Oe=e("div",{class:"name"},"บันทึกต้นเรื่อง",-1),Be={class:"group-input-file"},Ne=["onClick"],Pe=["onClick"],Je=["onChange","name"],Ke=["onClick"],Ge=e("i",{class:"bi bi-eye icon-eye"},null,-1),He=[Ge],Qe=["disabled","onClick"],We=e("img",{src:M,alt:"",class:"image-trash"},null,-1),Xe=[We],Ye={class:"group-input"},Ze={class:"group-input d-flex align-items-center"},$e=e("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),et=["disabled"],tt=e("div",{class:"group-image"},[e("img",{src:R,alt:"",class:"icon-plus"}),h(" เพิ่มไฟล์ ")],-1),st=[tt],at={class:"group-input-file"},ot=["onClick"],it=["onClick"],lt=["onChange","name"],dt=["onClick"],nt=e("i",{class:"bi bi-eye icon-eye"},null,-1),rt=[nt],ct=["disabled","onClick"],_t=e("img",{src:M,alt:"",class:"image-trash"},null,-1),ht=[_t],pt=e("div",{class:"line"},null,-1),ut={class:"send-to"},ft={class:"group-input"},gt=e("div",{class:"name"},"ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) ",-1),mt={class:"group-input left"},bt={class:"name d-flex justify-content-between"},yt=e("div",null,"ความเห็น / คำสั่ง",-1),vt=e("img",{src:O,alt:"",class:"icon-paperclip"},null,-1),kt=e("img",{src:B,alt:"",class:"image-x"},null,-1),wt={class:"group-between"},St={class:"group-input left"},Vt=e("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Ct={class:"group-input"},Tt=e("div",{class:"name"},"การมองเห็น",-1),Lt={class:"d-flex align-items-center justify-content-between"},Ut=e("img",{src:I,alt:"times-circle",class:"icon-times-circle"},null,-1),Ft=e("img",{src:D,alt:"times-circle",class:"icon-check-circle"},null,-1),At={key:0,class:"line mt-3"},qt={class:"d-flex justify-content-between"},xt={class:"title"},Mt=["onClick"],Dt={class:"d-flex ms-2 mt-2"},It={class:"name"},Rt={class:"name ms-5"},jt={class:"name ms-5"},zt={class:"name ms-2 mt-1"},Et={class:"name ms-2 mt-1"},Ot=e("div",{class:"line mt-4"},null,-1),Bt={class:"group-footer"},Nt={class:"footer-left d-flex"},Pt=e("img",{src:I,alt:"times-circle",class:"icon-times-circle"},null,-1),Jt={class:"footer-right"},Kt={type:"button",class:"confirm-receive"},Gt=e("img",{src:D,alt:"times-circle",class:"icon-check-circle"},null,-1),Ht=["disabled"],Qt=e("img",{src:D,alt:"times-circle",class:"icon-check-circle"},null,-1),Wt={key:0,class:"detail-history"},Xt={class:"history"},Yt=e("div",{class:"group-left"},[e("i",{class:"bi bi-clock icon-size"}),e("div",{class:"name"},"ประวัติการแก้ไข")],-1),Zt={class:"group-right"},$t={class:"bi bi-chevron-right icon-angle"},es={class:"bi bi-chevron-down icon-angle"},ts={class:"line"},ss={class:"content"},as={class:"content-head"},os=e("i",{class:"bi bi-border-all icon-size"},null,-1),is=e("i",{class:"bi bi-chat-left icon-size"},null,-1),ls=e("i",{class:"bi bi-pencil-square icon-size"},null,-1),ds={class:"detail-head"},ns={class:"number"},rs={class:"create"},cs=e("i",{class:"bi bi-person icon-size"},null,-1),_s={class:"date"},hs={class:"time"},ps=e("i",{class:"bi bi-clock icon-size"},null,-1),us=["onClick"],fs={key:0,class:"detail-signager"},gs=["src"],ms={key:0,class:"line"},bs={key:1,class:"content-detail first end"},ys=e("div",{class:"detail-head"},[e("div",{class:"topic"},"ไม่มีข้อมูล")],-1),vs=[ys];function ks(o,a,l,n,t,i){const r=w("cpn-select"),d=w("cpn-datepicker"),p=w("cpn-textArea"),C=w("cpn-input-tags"),T=w("cpn-input"),F=w("Form"),A=w("cpn-modal-alert"),q=w("cpn-loading");return g(),m("div",P,[e("div",J,[e("div",K,[e("div",G,[e("div",H,[Q,e("div",W,b(t.edit?"แก้ไขบันทึกรับเข้า":"สร้างบันทึกรับเข้า"),1)])]),X,u(F,{onSubmit:i.on_submit,onInvalidSubmit:o.onInvalidSubmit},{default:z(()=>{var c,k,y;return[e("div",Y,[e("div",Z,[e("div",$,[ee,u(r,{modelValue:t.data.book_category_id,"onUpdate:modelValue":a[0]||(a[0]=s=>t.data.book_category_id=s),name:"book_category_id",rules:"required",disabled:t.edit,optionSelect:t.optionSelectDefault.book_category_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),e("div",te,[se,u(d,{modelValue:t.data.as_of_date,"onUpdate:modelValue":a[1]||(a[1]=s=>t.data.as_of_date=s),name:"as_of_date",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",ae,[oe,u(d,{modelValue:t.data.create_date,"onUpdate:modelValue":a[2]||(a[2]=s=>t.data.create_date=s),name:"create_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",ie,[le,u(d,{modelValue:t.data.receive_date,"onUpdate:modelValue":a[3]||(a[3]=s=>t.data.receive_date=s),name:"receive_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])]),e("div",de,[e("div",ne,[re,u(r,{modelValue:t.data.book_type_id,"onUpdate:modelValue":a[4]||(a[4]=s=>t.data.book_type_id=s),name:"book_type_id",disabled:t.edit,rules:"required",optionSelect:t.optionSelect.book_type_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),e("div",ce,[e("div",_e,[he,u(r,{modelValue:t.data.secret_id,"onUpdate:modelValue":a[5]||(a[5]=s=>t.data.secret_id=s),name:"secret_id",rules:"required",optionSelect:t.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])]),e("div",pe,[ue,u(r,{modelValue:t.data.speed_id,"onUpdate:modelValue":a[6]||(a[6]=s=>t.data.speed_id=s),name:"speed_id",rules:"required",optionSelect:t.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])])])]),e("div",fe,[e("div",ge,[me,u(p,{modelValue:t.data.subject,"onUpdate:modelValue":a[7]||(a[7]=s=>t.data.subject=s),name:"subject",rules:"required",disabled:t.edit,rows:"1"},null,8,["modelValue","disabled"])])]),e("div",be,[ye,u(p,{modelValue:t.data.send_to,"onUpdate:modelValue":a[8]||(a[8]=s=>t.data.send_to=s),name:"send_to",rows:"1",disabled:t.edit},null,8,["modelValue","disabled"])]),e("div",ve,[ke,u(p,{modelValue:t.data.book_desc,"onUpdate:modelValue":a[9]||(a[9]=s=>t.data.book_desc=s),name:"book_desc",disabled:t.edit,rows:"1"},null,8,["modelValue","disabled"])]),e("div",we,[Se,u(C,{modelValue:t.data.tag,"onUpdate:modelValue":a[10]||(a[10]=s=>t.data.tag=s),name:"tag"},null,8,["modelValue"])]),e("div",Ve,[Ce,e("button",{type:"button",class:"add-booking-receive",onClick:a[11]||(a[11]=s=>i.add_booking_refers()),disabled:t.edit},Ue,8,Te)]),(g(!0),m(S,null,V(t.data.booking_refers.filter(s=>s.flag!="delete"),(s,_)=>(g(),m("div",{class:"group-between",key:_},[e("div",Fe,[u(T,{modelValue:s.receive_document_number,"onUpdate:modelValue":f=>s.receive_document_number=f,name:`codeRefers${_}`,type:"text",searchFlag:!0,disabled:t.edit,onSearchClick:f=>i.booking_refers_click(s),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","disabled","onSearchClick"])]),e("div",Ae,[u(T,{modelValue:s.desc,"onUpdate:modelValue":f=>s.desc=f,name:`nameRefers${_}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",qe,[u(d,{modelValue:s.receive_date,"onUpdate:modelValue":f=>s.receive_date=f,name:`dateRefers${_}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",onClick:f=>i.delete_booking_refers(s,_),class:"button-delete ms-3"},De,8,xe)])]))),128)),Ie]),Re,e("div",je,[e("div",ze,[e("div",Ee,[Oe,(g(!0),m(S,null,V(t.data.main_docs.filter(s=>s.flag!="delete"),(s,_)=>(g(),m("div",{class:"d-flex mb-3",key:_},[e("div",Be,[e("button",{type:"button",class:v([t.edit?"none-pointer":"","button-file"]),onClick:f=>t.edit?"":i.upload_file(`main_docs${_}`)},[e("span",{class:v(s.filename?"":"no-data")},b(s.filename?s.filename:"บันทึกต้นเรื่อง"),3)],10,Ne),e("div",{class:v(t.edit?"text disabled":"text pointer"),onClick:f=>t.edit?"":i.upload_file(`main_docs${_}`)},"แนบเอกสาร",10,Pe),e("input",{type:"file",onChange:f=>i.file_set_change(`main_docs${_}`,_,"main_docs"),name:`main_docs${_}`,style:{display:"none"},accept:"application/pdf"},null,40,Je)]),e("button",{type:"button",onClick:f=>i.download_file(s),class:"button-eye"},He,8,Ke),e("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:f=>t.data.main_docs.length>1?t.data.main_docs.splice(_,1):s.filename=""},Xe,8,Qe)]))),128))]),e("div",Ye,[e("div",Ze,[$e,e("button",{type:"button",class:"add-booking-receive",disabled:t.edit,onClick:a[12]||(a[12]=s=>i.add_attachments())},st,8,et)]),(g(!0),m(S,null,V(t.data.attachments.filter(s=>s.flag!="delete"),(s,_)=>(g(),m("div",{class:"d-flex mb-3",key:_},[e("div",at,[e("button",{type:"button",class:v([t.edit?"none-pointer":"","button-file"]),onClick:f=>t.edit?"":i.upload_file(`attachments${_}`)},[e("span",{class:v(s.filename?"":"no-data")},b(s.filename?s.filename:"สิ่งที่ส่งมาด้วย"),3)],10,ot),e("div",{class:v(t.edit?"text disabled":"text pointer"),onClick:f=>t.edit?"":i.upload_file(`attachments${_}`)},"แนบเอกสาร",10,it),e("input",{type:"file",onChange:f=>i.file_set_change(`attachments${_}`,_,"attachments"),name:`attachments${_}`,style:{display:"none"}},null,40,lt)]),e("button",{type:"button",onClick:f=>i.download_file(s),class:"button-eye"},rt,8,dt),e("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:f=>i.delete_attachments(s,_)},ht,8,ct)]))),128))])])]),pt,e("div",ut,[e("div",ft,[gt,u(C,{modelValue:t.data.sendTo,"onUpdate:modelValue":a[13]||(a[13]=s=>t.data.sendTo=s),flagSearch:!0,optionSelect:t.optionSelect.sendTo,onKeyup:i.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),e("div",mt,[e("div",bt,[yt,e("div",null,[e("input",{type:"file",onChange:a[14]||(a[14]=s=>i.file_set_change("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(c=t.data.sendToFile)!=null&&c.filename?(g(),m("div",{key:1,class:"del-comment pointer",onClick:a[16]||(a[16]=s=>t.data.sendToFile.filename="")},[h(b((k=t.data.sendToFile)==null?void 0:k.filename)+" ",1),kt])):(g(),m("button",{key:0,type:"button",class:"button-con pointer",onClick:a[15]||(a[15]=s=>i.upload_file("sendTo"))},[vt,h(" แนบเอกสาร ")]))])]),u(p,{modelValue:t.data.comment,"onUpdate:modelValue":a[17]||(a[17]=s=>t.data.comment=s),name:"comment",rows:"3"},null,8,["modelValue"])]),e("div",wt,[e("div",St,[Vt,u(r,{modelValue:t.data.process_type_id,"onUpdate:modelValue":a[18]||(a[18]=s=>t.data.process_type_id=s),name:"process_type_id",optionSelect:t.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),e("div",Ct,[Tt,u(r,{modelValue:t.data.permission_id,"onUpdate:modelValue":a[19]||(a[19]=s=>t.data.permission_id=s),name:"permission_id",optionSelect:t.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),e("div",Lt,[e("div",null,[e("button",{type:"button",class:"button button-danger",onClick:a[20]||(a[20]=s=>(t.data.sendTo=[],t.data.comment="",t.data.process_type_id="",t.data.permission_id=""))},[Ut,h(" ยกเลิก ")])]),e("div",null,[e("button",{type:"button",onClick:a[21]||(a[21]=s=>i.add_booking_follows()),class:"button button-success"},[Ft,h(" เพิ่มการส่งต่อ ")])])]),t.data.booking_follows.length>0?(g(),m("div",At)):x("",!0),(g(!0),m(S,null,V(t.data.booking_follows.filter(s=>s.flag!="delete"),(s,_)=>{var f;return g(),m("div",{class:"group-add",key:_},[e("div",qt,[e("div",xt,"#"+b(_+1),1),e("img",{onClick:ws=>i.delete_booking_follows(s,_),src:M,alt:"",class:"image-trash pointer"},null,8,Mt)]),e("div",Dt,[e("div",It,"ส่งต่อ : "+b((s==null?void 0:s.department_name)||"-"),1),e("div",Rt,"รูปแบบการดำเนินการ : "+b((s==null?void 0:s.process_type_name)||"-"),1),e("div",jt,"การมองเห็น : "+b((s==null?void 0:s.permission_name)||"-"),1)]),e("div",zt,"ความเห็น / คำสั่ง : "+b((s==null?void 0:s.comment)||"-"),1),e("div",Et,"เอกสารแนบ : "+b(((f=s==null?void 0:s.sendToFile)==null?void 0:f.filename)||"-"),1)])}),128))]),Ot,e("div",Bt,[e("div",Nt,[e("button",{type:"button",class:"button-danger",onClick:a[22]||(a[22]=s=>i.back())},[Pt,h(" ปิด ")])]),e("div",Jt,[e("button",Kt,[e("div",{class:"group-image",onClick:a[23]||(a[23]=s=>i.submitClick())},[Gt,h(" ยืนยันรับเข้า ")])]),e("button",{type:"submit",class:"button-success",onClick:a[24]||(a[24]=s=>t.flagSave=2),disabled:((y=t.data.sendTo)==null?void 0:y.length)<1},[Qt,h(" บันทึกและส่งต่อ ")],8,Ht)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])]),o.$route.params.id?(g(),m("div",Wt,[e("div",Xt,[e("div",{class:"header pointer",onClick:a[25]||(a[25]=c=>(t.data.history.hide=!t.data.history.hide,i.historyClick(t.data.history.tab)))},[Yt,e("div",Zt,[L(e("i",$t,null,512),[[U,!t.data.history.hide]]),L(e("i",es,null,512),[[U,t.data.history.hide]])])]),L(e("div",ts,null,512),[[U,t.data.history.hide]]),L(e("div",ss,[e("div",as,[e("div",{class:v(["pointer",t.data.history.tab==1?"active":""]),onClick:a[26]||(a[26]=c=>(t.data.history.tab=1,i.historyClick(1)))},[os,h("ทั้งหมด")],2),e("div",{class:v(["pointer",t.data.history.tab==2?"active":""]),onClick:a[27]||(a[27]=c=>(t.data.history.tab=2,i.historyClick(2)))},[is,h("ความเห็นคำสั่ง")],2),e("div",{class:v(["pointer",t.data.history.tab==3?"active":""]),onClick:a[28]||(a[28]=c=>(t.data.history.tab=3,i.historyClick(3)))},[ls,h("แก้ไขข้อมูล")],2)]),t.data.history.data.filter(c=>t.data.history.tab==2?c.type==2:t.data.history.tab==3?c.type==0||c.type==1:c).length>0?(g(!0),m(S,{key:0},V(t.data.history.data.filter(c=>t.data.history.tab==2?c.type==2:t.data.history.tab==3?c.type==0||c.type==1:c),(c,k)=>(g(),m("div",{class:v(["content-detail",k==0?"first":k==t.data.history.data.length-1?"end":""]),key:k},[e("div",ds,[e("div",ns,"#"+b(k+1),1),e("div",{class:v(["topic",c.bookactionname=="ความเห็นคำสั่ง"?"blue":c.bookactionname=="แก้ไขหนังสือ"?"yellow":"green"])},[e("i",{class:v(["bi icon-size",c.bookactionname=="ความเห็นคำสั่ง"?"bi-chat-left":c.bookactionname=="แก้ไขหนังสือ"?"bi-pencil-square":"bi-plus-lg"])},null,2),h(" "+b(c.bookactionname),1)],2),e("div",rs,[cs,h(" โดย "+b(c.updateBy)+" / "+b(c.subName),1)]),e("div",_s," วันที่ "+b(c.createDate),1),e("div",hs,[ps,h(" "+b(c.createTime),1)])]),(g(!0),m(S,null,V(c.bookingRemarks,(y,s)=>(g(),m("ul",{class:"detail-list",key:s},[L(e("button",{class:"button-file",onClick:_=>i.download_file({filename:y.filepath.split("/").pop(),link:y.link})},b(y.filepath.split("/").pop()),9,us),[[U,y.filepath]]),e("li",null,[h(b(y.remark)+" "+b(y.comment)+" ",1),y.signature_img&&c.bookactionname=="ความเห็นคำสั่ง"?(g(),m("div",fs,[e("img",{src:y.signature_img,alt:"",class:"image-size"},null,8,gs)])):x("",!0)])]))),128)),k!=t.data.history.data.length-1?(g(),m("div",ms)):x("",!0)],2))),128)):(g(),m("div",bs,vs))],512),[[U,t.data.history.hide]])])])):x("",!0)]),u(A,{modalAlert:t.modalAlert},null,8,["modalAlert"]),u(q,{show:t.showLoading},null,8,["show"])])}const Us=j(N,[["render",ks]]);export{Us as default};
