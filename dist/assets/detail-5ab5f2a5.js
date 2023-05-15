import{_ as R}from"./ballot-duotone-f2459825.js";import{_ as j}from"./plus-circle-duotone-64bd32fe.js";import{_ as M}from"./trash-alt-duotone-12d94c28.js";import{_ as z,a as N}from"./x-solid-74fa126d.js";import{_ as O,r as v,o as m,c as f,a as e,t as k,b as u,d as P,F as q,h as C,i as D,n as V,j as h,g as I,k as E}from"./index-844bee46.js";const B={name:"booking-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{original_flag:!1,receive_regis_id:"",book_type_id:"",receive_date:this.assetsUtils.currentDate(),receive_time:this.assetsUtils.currentTime(),document_number:"",as_of_date:this.assetsUtils.currentDate(),subject:"",secret_id:"",speed_id:"",send_to:"",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],main_docs_del:[],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"",permission_id:"",book_type:"",regis_id:"",FileType:[]},optionSelect:{receive_regis_id:[],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]}}},methods:{add_attachments(){this.data.attachments.push({filename:"",flag:"add"})},delete_attachments(o,s){o.flag=="edit"?o.flag="delete":this.data.attachments.splice(s,1),this.data.attachments.length-this.data.attachments.filter(d=>d.flag=="delete").length<1&&this.add_attachments()},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(o,s){o.flag=="edit"?o.flag="delete":this.data.booking_refers.splice(s,1),this.data.booking_refers.length-this.data.booking_refers.filter(d=>d.flag=="delete").length<1&&this.add_booking_refers()},booking_refers_click(o){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:o.receive_document_number}}).then(s=>{this.showLoading=!1,s.data.data.length>0?(o.book_refer_id=s.data.data[0].id,o.original_refer_id=s.data.data[0].id,o.book_type=s.data.data[0].book_type,o.desc=s.data.data[0].desc,o.receive_date=s.data.data[0].receive_date):(o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(s=>{o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},delete_click(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"หนังสือรอรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.axios.delete(`/booking-receive/${o.$route.params.id}`).then(()=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรอรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.back()}}}).catch(s=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}}},keyup_department(o){this.optionSelect.department_id=[],this.axios.get("/master-data/department",{params:{keyword:o.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(d=>(d.value=d.id,d.name=d.department_full_name,d)),this.optionSelect.department_id=s.data.data)})},keyup_send_to(o){this.optionSelect.sendTo=[],this.axios.get("/master-data/department",{params:{keyword:o.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(d=>(d.value=d.id,d.name=d.department_full_name,d)),this.optionSelect.sendTo=s.data.data)})},add_booking_follows(){this.data.sendTo.filter(o=>{var s;if(!this.data.booking_follows.some(d=>d.department_id===o.value&&d.flag!="delete")){let d={department_id:parseInt(o.value),department_name:o.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:o.human_flag,response_id:parseInt(o.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(((s=this.data.sendToFile)==null?void 0:s.filename)||""))},response_type:o.type};this.optionSelect.process_type_id.find(c=>{c.value==this.data.process_type_id&&(d.process_type_name=c.name)}),this.optionSelect.permission_id.find(c=>{c.value==this.data.permission_id&&(d.permission_name=c.name)}),this.data.booking_follows.push(d)}})},delete_booking_follows(o,s){o.flag=="edit"?o.flag="delete":this.data.booking_follows.splice(s,1)},download_file(o){o.filename&&o.link&&this.axios({method:"get",url:o.link,baseURL:"",responseType:"blob"}).then(s=>{const d=new Blob([s.data],{type:this.assetsUtils.getTypeFile(o.filename)});window.open(URL.createObjectURL(d))})},upload_file(o){document.querySelector(`[name="${o}"]`).click()},file_set_change(o,s,d){for(var c=0;c<document.querySelector(`[name="${o}"]`).files.length;c++){let t=document.querySelector(`[name="${o}"]`).files[c];if(this.data.FileType.indexOf(t.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(d=="main_docs"){if(t.type=="application/pdf"){let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[d][s]={...this.data[d][s],...i},document.querySelector(`[name="${o}"]`).value=null}}else if(d=="sendTo"){let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data.sendToFile=i}else{let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[d][s]={...this.data[d][s],...i},document.querySelector(`[name="${o}"]`).value=null}}},back(){this.$router.push({name:"my-work.booking-receive",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.upload_file_all()}}},upload_file_all(){let o=this.assetsUtils.currentDate(),s=[],d=[],c=[],t=[],i=[];this.data.main_docs.filter(r=>{if(r.file){let l=new FormData;l.append("file",r.file),l.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),s.push(this.axios.post("/upload/single",l,{headers:{"Content-Type":"multipart/form-data"}}))}else r.id&&i.push({filename:r.filename,filepath:r.filepath})}),this.data.attachments.filter(r=>{if(r.file){let l=new FormData;l.append("file",r.file),l.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),d.push(this.axios.post("/upload/single",l,{headers:{"Content-Type":"multipart/form-data"}}))}}),s.length>0&&this.axios.all([...s]).then(this.axios.spread((...r)=>{r.filter((l,g)=>{c.push({...this.data.main_docs[g],...l.data.data,filepath:l.data.data.path})}),s.length==c.length&&d.length==t.length&&this.upload_file_all3([...c,...i],t)})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}}),d.length>0&&this.axios.all([...d]).then(this.axios.spread((...r)=>{r.filter((l,g)=>{t.push({...this.data.attachments[g],...l.data.data,filepath:l.data.data.path})}),s.length==c.length&&d.length==t.length&&this.upload_file_all3([...c,...i],t)})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}}),s.length<1&&d.length<1&&this.upload_file_all3([...i],[])},upload_file_all3(o,s){var c;let d=this.assetsUtils.currentDate();if((c=this.data.sendToFile)!=null&&c.filename){let t=new FormData;t.append("file",this.data.sendToFile.file),t.append("dst",`${d.split("/")[0]+"-"+d.split("/")[1]+"-"+d.split("/")[2]}`),this.axios.post("/upload/single",t,{headers:{"Content-Type":"multipart/form-data"}}).then(i=>{this.data.attach_filename=i.data.data.filename,this.data.attach_filepath=i.data.data.path,this.upload_file_all4(o,s)}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}else this.upload_file_all4(o,s)},upload_file_all4(o,s){let d=this.assetsUtils.currentDate(),c=[],t=[];this.data.booking_follows.filter(i=>{var r;if((r=i.sendToFile)!=null&&r.filename){let l=new FormData;l.append("file",i.sendToFile.file),l.append("dst",`${d.split("/")[0]+"-"+d.split("/")[1]+"-"+d.split("/")[2]}`),c.push(this.axios.post("/upload/single",l,{headers:{"Content-Type":"multipart/form-data"}}))}}),c.length>0?this.axios.all([...c]).then(this.axios.spread((...i)=>{i.filter((r,l)=>{this.data.booking_follows[l].attach_filepath=r.data.data.path,this.data.booking_follows[l].attach_filename=r.data.data.filename,t.push({...this.data.booking_follows[l],...r.data.data,filepath:r.data.data.path})}),c.length==t.length&&this.call_api_save(o,s)})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}):this.call_api_save(o,s)},call_api_save(o,s){let d=this,c="";this.data.tag.filter(i=>{c+=i.name+","}),c=c.slice(0,-1),this.data.sendTo.filter(i=>{if(!this.data.booking_follows.some(r=>r.department_id===i.value&&r.flag!="delete")){let r={department_id:parseInt(i.value),department_name:i.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:i.human_flag,response_id:parseInt(i.value),response_type:i.type,attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename,sendToFile:{filename:this.data.attach_filename}};this.optionSelect.process_type_id.find(l=>{l.value==this.data.process_type_id&&(r.process_type_name=l.name)}),this.optionSelect.permission_id.find(l=>{l.value==this.data.permission_id&&(r.permission_name=l.name)}),this.data.booking_follows.push(r)}});let t={original_flag:this.data.original_flag,receive_regis_id:parseInt(this.data.receive_regis_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),receive_time:this.data.receive_time,as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:c,contracts:this.data.contracts,main_docs:[...o,...this.data.main_docs_del],attachments:s,booking_refers:this.data.booking_refers.filter(i=>i.book_refer_id),booking_follows:this.data.booking_follows,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":"",book_type:parseInt(this.$route.query.book_type),regis_id:parseInt(this.$route.query.regis_id)};this.edit?this.flagSave==1?(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){d.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){d.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):this.flagSave==1?(this.showLoading=!0,this.axios.post("/booking-receive",t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){d.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):(this.showLoading=!0,this.axios.post("/booking-receive",t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){d.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}))},api_detail(){this.showLoading=!0,this.axios.get(`/booking-receive/waiting-receive/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id}}).then(o=>{var d,c,t,i,r;this.showLoading=!1;let s=[];o.data.data.main_docs.filter(l=>{s.push({...l,flag:"delete"})}),o.data.data={...o.data.data,main_docs_del:s},this.data={...this.data,...JSON.parse(JSON.stringify(o.data.data))},this.data.tag=[],(d=o.data.data.tag)==null||d.split(",").filter(l=>{l&&this.data.tag.push({value:"",name:l})}),this.data.sendTo=[],this.data.booking_refers=[],o.data.data.booking_refers.filter(l=>{l.flag="edit",this.axios.get(`/master-data/book-refer/${l.book_type}/${l.id}`).then(g=>{this.data.booking_refers.push({...g.data.data,...l})}).catch(g=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:g.response.data.message}})}),this.data.main_docs.filter(l=>(l.flag="edit",l.link=l.filepath?this.backendport+"/"+l.filepath:"",l)),this.data.attachments.filter(l=>(l.flag="edit",l.link=l.filepath?this.backendport+"/"+l.filepath:"",l)),this.data.contracts.filter(l=>(l.flag="edit",l)),this.data.booking_follows.filter(l=>(l.flag="edit",l)),(((c=this.data.main_docs)==null?void 0:c.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}]),(((t=this.data.attachments)==null?void 0:t.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(((i=this.data.contracts)==null?void 0:i.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:"",flag:"add"}]),(((r=o.data.data.booking_refers)==null?void 0:r.length)<1||!o.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}])}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},api_master(){this.showLoading=!0;const o=this.axios.get("/master-data/register-type"),s=this.axios.get("/master-data/book-type"),d=this.axios.get("/master-data/secret"),c=this.axios.get("/master-data/speed"),t=this.axios.get("/master-data/process-type"),i=this.axios.get("/master-data/permission-type"),r=this.axios.get("/master-data/department"),l=this.axios.get("/master-data/receive-type"),g=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([o,s,d,c,t,i,r,l,g]).then(this.axios.spread((...b)=>{this.showLoading=!1;const y=b[0],w=b[1],S=b[2],T=b[3],L=b[4],A=b[5],F=b[6],U=b[7],x=b[8];y.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),w.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),S.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),T.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),L.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),A.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),F.data.data.filter(n=>(n.value=n.id,n.name=n.department_full_name,n)),U.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),this.data.FileType=[],x.data.data.filter(n=>{n.active_flag==1&&this.data.FileType.push(n.content_type)}),this.optionSelect.receive_regis_id=y.data.data,this.optionSelect.book_type_id=w.data.data,this.optionSelect.secret_id=S.data.data,this.optionSelect.speed_id=T.data.data,this.optionSelect.process_type_id=L.data.data,this.optionSelect.permission_id=A.data.data,this.optionSelect.department_id=F.data.data,this.optionSelect.receive_type=U.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(b=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:b.response.data.message}})}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},J={class:"booking-receive-detail"},K={class:"group-overflow"},G={class:"detail"},H={class:"group-head"},Q={class:"group-first"},W=e("img",{src:R,alt:"",class:"icon-size"},null,-1),X={class:"name"},Y=e("div",{class:"line"},null,-1),Z={class:"group-detail"},$={class:"group-input"},ee={class:"group-between"},te={class:"group-input left"},se=e("div",{class:"name"},[h("ทะเบียนรับ "),e("span",{class:"required"},"*")],-1),ae={class:"group-between"},oe={class:"group-input left"},ie=e("div",{class:"name"},[h("วันที่รับหนังสือ "),e("span",{class:"required"},"*")],-1),le={class:"group-input"},de=e("div",{class:"name"},[h("เวลาที่รับหนังสือ "),e("span",{class:"required"},"*")],-1),ne={class:"group-between"},re={class:"group-input left"},ce=e("div",{class:"name"},[h("ชนิดของหนังสือ "),e("span",{class:"required"},"*")],-1),_e={class:"group-between"},pe={class:"group-input left"},ue=e("div",{class:"name"},[h("เลขที่หนังสือ "),e("span",{class:"required"},"*")],-1),he={class:"group-input"},me=e("div",{class:"name"},[h("ลงวันที่ "),e("span",{class:"required"},"*")],-1),fe={class:"group-input d-flex align-items-center"},ge=e("div",{class:"name"},"อ้างอิงถึง",-1),be=e("div",{class:"group-image"},[e("img",{src:j,alt:"",class:"icon-plus"}),h(" เพิ่มเอกสารอ้างอิง ")],-1),ve=[be],ye={class:"group-input left"},ke={class:"group-input left"},we={class:"group-input d-flex"},Ve=["onClick"],Se=e("img",{src:M,alt:"",class:"image-trash pointer"},null,-1),Ue=[Se],qe=e("div",{class:"group-input"},null,-1),Ce={class:"group-between"},Te={class:"group-input left"},Le=e("div",{class:"name"},[h("ชื่อเรื่อง "),e("span",{class:"required"},"*")],-1),Ae={class:"group-between"},Fe={class:"group-input left"},xe=e("div",{class:"name"},[h("ชั้นความลับ "),e("span",{class:"required"},"*")],-1),Me={class:"group-input"},De=e("div",{class:"name"},[h("ความเร่งด่วน "),e("span",{class:"required"},"*")],-1),Ie={class:"group-input left"},Ee=e("div",{class:"name"},[h("เรียน "),e("span",{class:"required"},"*")],-1),je={class:"group-input left"},Re=e("div",{class:"name"},"รายละเอียดหนังสือ",-1),ze={class:"group-input"},Ne=e("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),Oe=e("div",{class:"line"},null,-1),Pe={class:"group-between"},Be={class:"group-input left"},Je=e("div",{class:"name"},[h("หน่วยงานที่เสนอเรื่อง "),e("span",{class:"required"},"*")],-1),Ke={class:"group-input"},Ge=e("div",{class:"name"},[h("ช่องทางการรับเอกสาร "),e("span",{class:"required"},"*")],-1),He={key:0,class:"group-between"},Qe={class:"group-input left"},We=e("div",{class:"name"},[h("ระบุชื่อหน่วยงานอื่นๆ "),e("span",{class:"required"},"*")],-1),Xe=e("div",{class:"group-input"},null,-1),Ye={class:"group-between"},Ze={class:"group-input left"},$e=e("div",{class:"name"},"ผู้ติดต่อ",-1),et={class:"group-between"},tt={class:"group-input left"},st=e("div",{class:"name"},"โทรศัพท์",-1),at={class:"group-input"},ot=e("div",{class:"name"},"E-mail",-1),it=e("div",{class:"line"},null,-1),lt={class:"group-detail"},dt={class:"group-between"},nt={class:"group-input left"},rt=e("div",{class:"name"},"หนังสือต้นเรื่อง",-1),ct={class:"group-input-file"},_t=["onClick"],pt=["onClick"],ut=["onChange","name"],ht=["onClick"],mt=e("i",{class:"bi bi-eye icon-eye"},null,-1),ft=[mt],gt=["disabled","onClick"],bt=e("img",{src:M,alt:"",class:"image-trash"},null,-1),vt=[bt],yt={class:"group-input"},kt={class:"group-input d-flex align-items-center"},wt=e("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),Vt=["disabled"],St=e("div",{class:"group-image"},[e("img",{src:j,alt:"",class:"icon-plus"}),h(" เพิ่มไฟล์ ")],-1),Ut=[St],qt={class:"group-input-file"},Ct=["onClick"],Tt=["onClick"],Lt=["onChange","name"],At=["onClick"],Ft=e("i",{class:"bi bi-eye icon-eye"},null,-1),xt=[Ft],Mt=["disabled","onClick"],Dt=e("img",{src:M,alt:"",class:"image-trash"},null,-1),It=[Dt],Et=e("div",{class:"line"},null,-1),jt={class:"send-to"},Rt={class:"group-input"},zt=e("div",{class:"name"},"ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) ",-1),Nt={class:"group-input"},Ot={class:"name d-flex justify-content-between"},Pt=e("div",null,"ความเห็น / คำสั่ง",-1),Bt=e("img",{src:z,alt:"",class:"icon-paperclip"},null,-1),Jt=e("img",{src:N,alt:"",class:"image-x"},null,-1),Kt={class:"group-between"},Gt={class:"group-input left"},Ht=e("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Qt={class:"group-input"},Wt=e("div",{class:"name"},"การมองเห็น",-1),Xt={class:"d-flex align-items-center justify-content-between"},Yt=e("img",{src:I,alt:"times-circle",class:"icon-times-circle"},null,-1),Zt=e("img",{src:E,alt:"times-circle",class:"icon-check-circle"},null,-1),$t={key:0,class:"line mt-3"},es={class:"d-flex justify-content-between"},ts={class:"title"},ss=["onClick"],as={class:"d-flex ms-2 mt-2"},os={class:"name"},is={class:"name ms-5"},ls={class:"name ms-5"},ds={class:"name ms-2 mt-1"},ns=e("div",{class:"line mt-4"},null,-1),rs={class:"group-footer"},cs={class:"footer-left d-flex"},_s=e("img",{src:I,alt:"times-circle",class:"icon-times-circle"},null,-1),ps=e("img",{src:I,alt:"times-circle",class:"icon-times-circle"},null,-1),us={class:"footer-right"},hs=e("img",{src:E,alt:"times-circle",class:"icon-check-circle"},null,-1),ms=["disabled"],fs=e("img",{src:E,alt:"times-circle",class:"icon-check-circle"},null,-1);function gs(o,s,d,c,t,i){const r=v("cpn-checkbox"),l=v("cpn-select"),g=v("cpn-datepicker"),b=v("cpn-time"),y=v("cpn-input"),w=v("cpn-textArea"),S=v("cpn-input-tags"),T=v("cpn-autoComplete"),L=v("Form"),A=v("cpn-modal-alert"),F=v("cpn-loading");return m(),f("div",J,[e("div",K,[e("div",G,[e("div",H,[e("div",Q,[W,e("div",X,k(t.edit?"แก้ไขหนังสือรอรับเข้า":"สร้างหนังสือรอรับเข้า"),1)])]),Y,u(L,{onSubmit:i.on_submit,onInvalidSubmit:o.onInvalidSubmit},{default:P(()=>{var U,x,n;return[e("div",Z,[e("div",$,[u(r,{modelValue:t.data.original_flag,"onUpdate:modelValue":s[0]||(s[0]=a=>t.data.original_flag=a),name:"original_flag",label:"หนังสือต้นเรื่อง"},null,8,["modelValue"])]),e("div",ee,[e("div",te,[se,u(l,{modelValue:t.data.receive_regis_id,"onUpdate:modelValue":s[1]||(s[1]=a=>t.data.receive_regis_id=a),name:"receive_regis_id",rules:"required",optionSelect:t.optionSelect.receive_regis_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",ae,[e("div",oe,[ie,u(g,{modelValue:t.data.receive_date,"onUpdate:modelValue":s[2]||(s[2]=a=>t.data.receive_date=a),name:"receive_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",le,[de,u(b,{modelValue:t.data.receive_time,"onUpdate:modelValue":s[3]||(s[3]=a=>t.data.receive_time=a),name:"receive_time",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),e("div",ne,[e("div",re,[ce,u(l,{modelValue:t.data.book_type_id,"onUpdate:modelValue":s[4]||(s[4]=a=>t.data.book_type_id=a),name:"book_type_id",rules:"required",optionSelect:t.optionSelect.book_type_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",_e,[e("div",pe,[ue,u(y,{modelValue:t.data.document_number,"onUpdate:modelValue":s[5]||(s[5]=a=>t.data.document_number=a),name:"document_number",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",he,[me,u(g,{modelValue:t.data.as_of_date,"onUpdate:modelValue":s[6]||(s[6]=a=>t.data.as_of_date=a),name:"as_of_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])])]),e("div",fe,[ge,e("button",{type:"button",class:"add-booking-receive",onClick:s[7]||(s[7]=a=>i.add_booking_refers())},ve)]),(m(!0),f(q,null,C(t.data.booking_refers.filter(a=>a.flag!="delete"),(a,_)=>(m(),f("div",{class:"group-between",key:_},[e("div",ye,[u(y,{modelValue:a.receive_document_number,"onUpdate:modelValue":p=>a.receive_document_number=p,name:`codeRefers${_}`,type:"text",searchFlag:!0,onSearchClick:p=>i.booking_refers_click(a),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),e("div",ke,[u(y,{modelValue:a.desc,"onUpdate:modelValue":p=>a.desc=p,name:`nameRefers${_}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",we,[u(g,{modelValue:a.receive_date,"onUpdate:modelValue":p=>a.receive_date=p,name:`dateRefers${_}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",onClick:p=>i.delete_booking_refers(a,_),class:"button-delete ms-3"},Ue,8,Ve)])]))),128)),qe,e("div",Ce,[e("div",Te,[Le,u(w,{modelValue:t.data.subject,"onUpdate:modelValue":s[8]||(s[8]=a=>t.data.subject=a),name:"subject",rules:"required",disabled:t.edit,rows:"3"},null,8,["modelValue","disabled"])]),e("div",Ae,[e("div",Fe,[xe,u(l,{modelValue:t.data.secret_id,"onUpdate:modelValue":s[9]||(s[9]=a=>t.data.secret_id=a),name:"secret_id",rules:"required",optionSelect:t.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])]),e("div",Me,[De,u(l,{modelValue:t.data.speed_id,"onUpdate:modelValue":s[10]||(s[10]=a=>t.data.speed_id=a),name:"speed_id",rules:"required",optionSelect:t.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])])])]),e("div",Ie,[Ee,u(w,{modelValue:t.data.send_to,"onUpdate:modelValue":s[11]||(s[11]=a=>t.data.send_to=a),name:"send_to",rules:"required",rows:"1",disabled:t.edit},null,8,["modelValue","disabled"])]),e("div",je,[Re,u(w,{modelValue:t.data.book_desc,"onUpdate:modelValue":s[12]||(s[12]=a=>t.data.book_desc=a),name:"book_desc",rows:"1"},null,8,["modelValue"])]),e("div",ze,[Ne,u(S,{modelValue:t.data.tag,"onUpdate:modelValue":s[13]||(s[13]=a=>t.data.tag=a),name:"tag"},null,8,["modelValue"])])]),Oe,(m(!0),f(q,null,C(t.data.contracts,(a,_)=>(m(),f("div",{class:"group-detail",key:_},[e("div",Pe,[e("div",Be,[Je,u(T,{modelValue:a.department_id,"onUpdate:modelValue":p=>a.department_id=p,name:`${_}department_id`,rules:"required",disabled:t.edit,onKeyup:s[14]||(s[14]=p=>i.keyup_department(p)),optionSelect:t.optionSelect.department_id},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])]),e("div",Ke,[Ge,u(l,{modelValue:a.receive_type,"onUpdate:modelValue":p=>a.receive_type=p,name:`${_}receive_type`,rules:"required",disabled:t.edit,optionSelect:t.optionSelect.receive_type},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])])]),a.department_id==1860?(m(),f("div",He,[e("div",Qe,[We,u(y,{modelValue:a.department_other,"onUpdate:modelValue":p=>a.department_other=p,name:`${_}department_other`,rules:a.department_id==1860?"required":"",disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","rules","disabled"])]),Xe])):D("",!0),e("div",Ye,[e("div",Ze,[$e,u(y,{modelValue:a.contract_name,"onUpdate:modelValue":p=>a.contract_name=p,name:`${_}contract_name`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),e("div",et,[e("div",tt,[st,u(y,{modelValue:a.contract_phone,"onUpdate:modelValue":p=>a.contract_phone=p,isNumber:!0,maxlength:"10",name:`${_}contract_phone`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),e("div",at,[ot,u(y,{modelValue:a.contract_mail,"onUpdate:modelValue":p=>a.contract_mail=p,rules:"email",name:`${_}contract_mail`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])])])])]))),128)),it,e("div",lt,[e("div",dt,[e("div",nt,[rt,(m(!0),f(q,null,C(t.data.main_docs.filter(a=>a.flag!="delete"),(a,_)=>(m(),f("div",{class:"d-flex mb-3",key:_},[e("div",ct,[e("button",{type:"button",class:V([t.edit?"none-pointer":"","button-file"]),onClick:p=>t.edit?"":i.upload_file(`main_docs${_}`)},[e("span",{class:V(a.filename?"":"no-data")},k(a.filename?a.filename:"หนังสือต้นเรื่อง"),3)],10,_t),e("div",{class:V(t.edit?"text disabled":"text pointer"),onClick:p=>t.edit?"":i.upload_file(`main_docs${_}`)},"แนบเอกสาร",10,pt),e("input",{type:"file",onChange:p=>i.file_set_change(`main_docs${_}`,_,"main_docs"),name:`main_docs${_}`,style:{display:"none"},accept:"application/pdf"},null,40,ut)]),e("button",{type:"button",onClick:p=>i.download_file(a),class:"button-eye"},ft,8,ht),e("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:p=>t.data.main_docs.length>1?t.data.main_docs.splice(_,1):a.filename=""},vt,8,gt)]))),128))]),e("div",yt,[e("div",kt,[wt,e("button",{type:"button",class:"add-booking-receive",disabled:t.edit,onClick:s[15]||(s[15]=a=>i.add_attachments())},Ut,8,Vt)]),(m(!0),f(q,null,C(t.data.attachments.filter(a=>a.flag!="delete"),(a,_)=>(m(),f("div",{class:"d-flex mb-3",key:_},[e("div",qt,[e("button",{type:"button",class:V([t.edit?"none-pointer":"","button-file"]),onClick:p=>t.edit?"":i.upload_file(`attachments${_}`)},[e("span",{class:V(a.filename?"":"no-data")},k(a.filename?a.filename:"สิ่งที่ส่งมาด้วย"),3)],10,Ct),e("div",{class:V(t.edit?"text disabled":"text pointer"),onClick:p=>t.edit?"":i.upload_file(`attachments${_}`)},"แนบเอกสาร",10,Tt),e("input",{type:"file",onChange:p=>i.file_set_change(`attachments${_}`,_,"attachments"),name:`attachments${_}`,style:{display:"none"}},null,40,Lt)]),e("button",{type:"button",onClick:p=>i.download_file(a),class:"button-eye"},xt,8,At),e("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:p=>i.delete_attachments(a,_)},It,8,Mt)]))),128))])])]),Et,e("div",jt,[e("div",Rt,[zt,u(S,{modelValue:t.data.sendTo,"onUpdate:modelValue":s[16]||(s[16]=a=>t.data.sendTo=a),flagSearch:!0,optionSelect:t.optionSelect.sendTo,onKeyup:i.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),e("div",Nt,[e("div",Ot,[Pt,e("div",null,[e("input",{type:"file",onChange:s[17]||(s[17]=a=>i.file_set_change("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(U=t.data.sendToFile)!=null&&U.filename?(m(),f("div",{key:1,class:"del-comment pointer",onClick:s[19]||(s[19]=a=>t.data.sendToFile.filename="")},[h(k((x=t.data.sendToFile)==null?void 0:x.filename)+" ",1),Jt])):(m(),f("button",{key:0,type:"button",class:"button-con pointer",onClick:s[18]||(s[18]=a=>i.upload_file("sendTo"))},[Bt,h(" แนบเอกสาร ")]))])]),u(w,{modelValue:t.data.comment,"onUpdate:modelValue":s[20]||(s[20]=a=>t.data.comment=a),name:"comment",rows:"3"},null,8,["modelValue"])]),e("div",Kt,[e("div",Gt,[Ht,u(l,{modelValue:t.data.process_type_id,"onUpdate:modelValue":s[21]||(s[21]=a=>t.data.process_type_id=a),name:"process_type_id",optionSelect:t.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),e("div",Qt,[Wt,u(l,{modelValue:t.data.permission_id,"onUpdate:modelValue":s[22]||(s[22]=a=>t.data.permission_id=a),name:"permission_id",optionSelect:t.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),e("div",Xt,[e("div",null,[e("button",{type:"button",class:"button button-danger",onClick:s[23]||(s[23]=a=>(t.data.sendTo=[],t.data.comment="",t.data.process_type_id="",t.data.permission_id=""))},[Yt,h(" ยกเลิก ")])]),e("div",null,[e("button",{type:"button",onClick:s[24]||(s[24]=a=>i.add_booking_follows()),class:"button button-success"},[Zt,h(" เพิ่มการส่งต่อ ")])])]),t.data.booking_follows.length>0?(m(),f("div",$t)):D("",!0),(m(!0),f(q,null,C(t.data.booking_follows.filter(a=>a.flag!="delete"),(a,_)=>(m(),f("div",{class:"group-add",key:_},[e("div",es,[e("div",ts,"#"+k(_+1),1),e("img",{onClick:p=>i.delete_booking_follows(a,_),src:M,alt:"",class:"image-trash pointer"},null,8,ss)]),e("div",as,[e("div",os,"ส่งต่อ : "+k((a==null?void 0:a.department_name)||"-"),1),e("div",is,"รูปแบบการดำเนินการ : "+k((a==null?void 0:a.process_type_name)||"-"),1),e("div",ls,"การมองเห็น : "+k((a==null?void 0:a.permission_name)||"-"),1)]),e("div",ds,"ความเห็น / คำสั่ง : "+k((a==null?void 0:a.comment)||"-"),1)]))),128))]),ns,e("div",rs,[e("div",cs,[e("button",{type:"button",class:"button-danger",onClick:s[25]||(s[25]=a=>i.back())},[_s,h(" ปิด ")]),o.$route.params.id?(m(),f("button",{key:0,type:"button",class:"button-danger ms-3",onClick:s[26]||(s[26]=a=>i.delete_click())},[ps,h(" ลบ ")])):D("",!0)]),e("div",us,[e("button",{type:"submit",class:"button-primary",onClick:s[27]||(s[27]=a=>t.flagSave=1)},[hs,h(" บันทึกแบบร่าง ")]),e("button",{type:"submit",class:"button-success",onClick:s[28]||(s[28]=a=>t.flagSave=2),disabled:((n=t.data.sendTo)==null?void 0:n.length)<1},[fs,h(" บันทึกและส่งต่อ ")],8,ms)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])])]),u(A,{modalAlert:t.modalAlert},null,8,["modalAlert"]),u(F,{show:t.showLoading},null,8,["show"])])}const Vs=O(B,[["render",gs]]);export{Vs as default};