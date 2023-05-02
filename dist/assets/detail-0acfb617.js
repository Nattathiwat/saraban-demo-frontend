import{_ as N,r as w,o as f,c as g,a as e,t as b,b as m,d as O,w as F,v as x,n as k,j as h,F as U,h as q,i as T,g as z,k as j}from"./index-c80e8212.js";import{_ as P}from"./ballot-duotone-f2459825.js";import{_ as R}from"./plus-circle-duotone-64bd32fe.js";import{_ as E}from"./trash-alt-duotone-12d94c28.js";import{_ as B,a as K}from"./x-solid-74fa126d.js";const J={name:"booking-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{history:{hide:!1,data:[],tab:1},original_flag:!1,receive_regis_id:"",book_type_id:"",receive_date:this.assetsUtils.currentDate(),receive_time:this.assetsUtils.currentTime(),document_number:"",as_of_date:this.assetsUtils.currentDate(),subject:"",secret_id:"",speed_id:"",send_to:"",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],main_docs_del:[],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[{filename:""}],booking_follows:[],comment:"",process_type_id:"12",permission_id:"9",book_type:"",regis_id:"",FileType:[]},optionSelect:{receive_regis_id:[],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]}}},methods:{historyClick(o){this.showLoading=!0,this.axios.get(`/booking-receive/${this.$route.params.id}/history`,{params:{book_type:this.$route.query.book_type,department_id:parseInt(localStorage.getItem("department_id"))}}).then(s=>{this.showLoading=!1,this.data.history.data=s.data.data}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},add_attachments(){this.data.attachments.push({filename:"",flag:"add"})},delete_attachments(o,s){o.flag=="edit"?o.flag="delete":this.data.attachments.splice(s,1),this.data.attachments.length-this.data.attachments.filter(l=>l.flag=="delete").length<1&&this.add_attachments()},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(o,s){o.flag=="edit"?o.flag="delete":this.data.booking_refers.splice(s,1),this.data.booking_refers.length-this.data.booking_refers.filter(l=>l.flag=="delete").length<1&&this.add_booking_refers()},booking_refers_click(o){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:o.receive_document_number}}).then(s=>{this.showLoading=!1,s.data.data.length>0?(o.book_refer_id=s.data.data[0].id,o.original_refer_id=s.data.data[0].id,o.book_type=s.data.data[0].book_type,o.desc=s.data.data[0].desc,o.receive_date=s.data.data[0].receive_date):(o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(s=>{o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},delete_click(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"หนังสือรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.axios.delete(`/booking-receive/${o.$route.params.id}`).then(()=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.back()}}}).catch(s=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}}},keyup_department(o){this.optionSelect.department_id=[],this.axios.get("/master-data/department-user",{params:{keyword:o.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.department_id=s.data.data)})},keyup_send_to(o){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user",{params:{keyword:o.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.sendTo=s.data.data)})},add_booking_follows(){this.data.sendTo.filter(o=>{var s;if(!this.data.booking_follows.some(l=>l.department_id===o.value&&l.flag!="delete")){let l={...o,department_id:parseInt(o.value),department_name:o.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:o.human_flag,response_id:parseInt(o.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(((s=this.data.sendToFile)==null?void 0:s.filename)||""))},response_type:o.type};this.optionSelect.process_type_id.find(c=>{c.value==this.data.process_type_id&&(l.process_type_name=c.name)}),this.optionSelect.permission_id.find(c=>{c.value==this.data.permission_id&&(l.permission_name=c.name)}),this.data.booking_follows.push(l)}})},delete_booking_follows(o,s){o.flag=="edit"?o.flag="delete":this.data.booking_follows.splice(s,1)},download_file(o){o.filename&&o.link&&this.axios({method:"get",url:o.link,baseURL:"",responseType:"blob"}).then(s=>{const l=new Blob([s.data],{type:this.assetsUtils.getTypeFile(o.filename)});window.open(URL.createObjectURL(l))})},upload_file(o){document.querySelector(`[name="${o}"]`).click()},file_set_change(o,s,l){for(var c=0;c<document.querySelector(`[name="${o}"]`).files.length;c++){let t=document.querySelector(`[name="${o}"]`).files[c];if(this.data.FileType.indexOf(t.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(l=="main_docs"){if(t.type=="application/pdf"){let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[l][s]={...this.data[l][s],...i},document.querySelector(`[name="${o}"]`).value=null}}else if(l=="sendTo"){let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data.sendToFile=i}else{let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[l][s]={...this.data[l][s],...i},document.querySelector(`[name="${o}"]`).value=null}}},back(){this.$router.push({name:"my-work.booking-receive",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.upload_file_all()}}},upload_file_all(){let o=this.assetsUtils.currentDate(),s=[],l=[],c=[],t=[],i=[];this.data.main_docs.filter(r=>{if(r.file){let d=new FormData;d.append("file",r.file),d.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),s.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}else r.id&&i.push({filename:r.filename,filepath:r.filepath})}),this.data.attachments.filter(r=>{if(r.file){let d=new FormData;d.append("file",r.file),d.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),l.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}}),s.length>0&&this.axios.all([...s]).then(this.axios.spread((...r)=>{r.filter((d,v)=>{c.push({...this.data.main_docs[v],...d.data.data,filepath:d.data.data.path})}),s.length==c.length&&l.length==t.length&&this.call_api_save([...c,...i],t)})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}}),l.length>0&&this.axios.all([...l]).then(this.axios.spread((...r)=>{r.filter((d,v)=>{t.push({...this.data.attachments[v],...d.data.data,filepath:d.data.data.path})}),s.length==c.length&&l.length==t.length&&this.call_api_save([...c,...i],t)})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}}),s.length<1&&l.length<1&&this.call_api_save([...i],[])},upload_file_all2(o){let s=this.assetsUtils.currentDate(),l=[],c=[];this.data.main_docs.filter(t=>{if(t.file){let i=new FormData;i.append("file",t.file),i.append("dst",`${s.split("/")[0]+"-"+s.split("/")[1]+"-"+s.split("/")[2]}`),l.push(this.axios.post("/upload/single",i,{headers:{"Content-Type":"multipart/form-data"}}))}}),l.length>0?this.axios.all([...l]).then(this.axios.spread((...t)=>{t.filter((i,r)=>{c.push({...this.data.main_docs[r],...i.data.data,filepath:i.data.data.path})}),l.length==c.length&&this.call_api_save(c,o)})).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}}):this.call_api_save(c,o)},upload_file_all3(o,s){var c;let l=this.assetsUtils.currentDate();if((c=this.data.sendToFile)!=null&&c.filename){let t=new FormData;t.append("file",this.data.sendToFile.file),t.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),this.axios.post("/upload/single",t,{headers:{"Content-Type":"multipart/form-data"}}).then(i=>{this.data.attach_filename=i.data.data.filename,this.data.attach_filepath=i.data.data.path,this.upload_file_all4(o,s)}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}else this.upload_file_all4(o,s)},upload_file_all4(o,s){let l=this.assetsUtils.currentDate(),c=[],t=[];this.data.booking_follows.filter(i=>{var r;if((r=i.sendToFile)!=null&&r.filename){let d=new FormData;d.append("file",i.sendToFile.file),d.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),c.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}}),c.length>0?this.axios.all([...c]).then(this.axios.spread((...i)=>{i.filter((r,d)=>{this.data.booking_follows[d].attach_filepath=r.data.data.path,this.data.booking_follows[d].attach_filename=r.data.data.filename,t.push({...this.data.booking_follows[d],...r.data.data,filepath:r.data.data.path})}),c.length==t.length&&this.call_api_save(o,s)})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}):this.call_api_save(o,s)},call_api_save(o,s){let l=this,c="";this.data.tag.filter(i=>{c+=i.name+","}),c=c.slice(0,-1),this.data.sendTo.filter(i=>{if(!this.data.booking_follows.some(r=>r.department_id===i.value&&r.flag!="delete")){let r={...i,department_id:parseInt(i.value),department_name:i.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:i.human_flag,response_id:parseInt(i.value),response_type:i.type,attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename,sendToFile:{filename:this.data.attach_filename}};this.optionSelect.process_type_id.find(d=>{d.value==this.data.process_type_id&&(r.process_type_name=d.name)}),this.optionSelect.permission_id.find(d=>{d.value==this.data.permission_id&&(r.permission_name=d.name)}),this.data.booking_follows.push(r)}});let t={original_flag:this.data.original_flag,receive_regis_id:parseInt(this.data.receive_regis_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),receive_time:this.data.receive_time,as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:c,contracts:this.data.contracts,main_docs:[...o,...this.data.main_docs_del],attachments:s,booking_refers:this.data.booking_refers.filter(i=>i.book_refer_id),booking_follows:this.data.booking_follows,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":"",book_type:parseInt(this.$route.query.book_type),regis_id:parseInt(this.$route.query.regis_id)};this.edit?this.flagSave==1?(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):this.flagSave==1?(this.showLoading=!0,this.axios.post("/booking-receive",t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):(this.showLoading=!0,this.axios.post("/booking-receive",t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}))},api_detail(){this.showLoading=!0,this.axios.get(`/booking-receive/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id}}).then(o=>{var l,c,t,i,r;this.showLoading=!1;let s=[];o.data.data.main_docs.filter(d=>{s.push({...d,flag:"delete"})}),o.data.data={...this.data,...o.data.data,main_docs_del:s},this.data=JSON.parse(JSON.stringify(o.data.data)),this.data.tag=[],(l=o.data.data.tag)==null||l.split(",").filter(d=>{d&&this.data.tag.push({value:"",name:d})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],o.data.data.booking_refers.filter(d=>{d.flag="edit",this.axios.get(`/master-data/book-refer/${d.book_type}/${d.id}`).then(v=>{this.data.booking_refers.push({...v.data.data,...d})}).catch(v=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:v.response.data.message}})}),this.data.main_docs.filter(d=>(d.flag="add",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.attachments.filter(d=>(d.flag="add",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.contracts.filter(d=>(d.flag="add",d)),this.data.booking_follows.filter(d=>(d.flag="add",d)),this.data.booking_follows=[],(((c=this.data.main_docs)==null?void 0:c.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}]),(((t=this.data.attachments)==null?void 0:t.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(((i=this.data.contracts)==null?void 0:i.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:"",flag:"add"}]),(((r=o.data.data.booking_refers)==null?void 0:r.length)<1||!o.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}])}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},api_master(){this.showLoading=!0;const o=this.axios.get("/master-data/register-type"),s=this.axios.get("/master-data/book-type"),l=this.axios.get("/master-data/secret"),c=this.axios.get("/master-data/speed"),t=this.axios.get("/master-data/process-type"),i=this.axios.get("/master-data/permission-type"),r=this.axios.get("/master-data/department-user"),d=this.axios.get("/master-data/receive-type"),v=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([o,s,l,c,t,i,r,d,v]).then(this.axios.spread((...y)=>{this.showLoading=!1;const L=y[0],V=y[1],C=y[2],A=y[3],M=y[4],D=y[5],I=y[6],_=y[7],S=y[8];L.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),V.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),C.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),A.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),M.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),D.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),I.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),_.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),this.data.FileType=[],S.data.data.filter(n=>{n.active_flag==1&&this.data.FileType.push(n.content_type)}),this.optionSelect.receive_regis_id=L.data.data,this.optionSelect.book_type_id=V.data.data,this.optionSelect.secret_id=C.data.data,this.optionSelect.speed_id=A.data.data,this.optionSelect.process_type_id=M.data.data,this.optionSelect.permission_id=D.data.data,this.optionSelect.department_id=I.data.data,this.optionSelect.receive_type=_.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(y=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:y.response.data.message}})},keyup_book_type(o){this.axios.get("/master-data/book-type",{params:{keyword:o.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l)),this.optionSelect.book_type_id=s.data.data)})}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},G={class:"booking-receive-detail"},H={class:"group-overflow"},Q={class:"detail"},W={class:"group-head"},X={class:"group-first"},Y=e("img",{src:P,alt:"",class:"icon-size"},null,-1),Z={class:"name"},$=e("div",{class:"line"},null,-1),ee={class:"group-detail"},te={class:"group-input"},se={class:"group-between"},ae={class:"group-input left"},oe=e("div",{class:"name"},[h("ทะเบียนรับ "),e("span",{class:"required"},"*")],-1),ie={class:"group-between"},le={class:"group-input left"},de=e("div",{class:"name"},[h("วันที่รับหนังสือ "),e("span",{class:"required"},"*")],-1),ne={class:"group-input"},re=e("div",{class:"name"},[h("เวลาที่รับหนังสือ "),e("span",{class:"required"},"*")],-1),ce={class:"group-between"},_e={class:"group-input left"},pe=e("div",{class:"name"},[h("ชนิดของหนังสือ "),e("span",{class:"required"},"*")],-1),ue={class:"group-between"},he={class:"group-input left"},me=e("div",{class:"name"},[h("เลขที่หนังสือ "),e("span",{class:"required"},"*")],-1),fe={class:"group-input"},ge=e("div",{class:"name"},[h("ลงวันที่ "),e("span",{class:"required"},"*")],-1),be={class:"group-input d-flex align-items-center"},ve=e("div",{class:"name"},"อ้างอิงถึง",-1),ye=e("div",{class:"group-image"},[e("img",{src:R,alt:"",class:"icon-plus"}),h(" เพิ่มเอกสารอ้างอิง ")],-1),ke=[ye],we={class:"group-input left"},Ve={class:"group-input left"},Se={class:"group-input d-flex"},Ce=["onClick"],Ue=e("img",{src:E,alt:"",class:"image-trash pointer"},null,-1),qe=[Ue],Te=e("div",{class:"group-input"},null,-1),Le={class:"group-between"},Ae={class:"group-input left"},Fe=e("div",{class:"name"},[h("ชื่อเรื่อง "),e("span",{class:"required"},"*")],-1),xe={class:"group-between"},Me={class:"group-input left"},De=e("div",{class:"name"},[h("ชั้นความลับ "),e("span",{class:"required"},"*")],-1),Ie={class:"group-input"},Ee=e("div",{class:"name"},[h("ความเร่งด่วน "),e("span",{class:"required"},"*")],-1),ze={class:"group-input left"},je=e("div",{class:"name"},[h("เรียน "),e("span",{class:"required"},"*")],-1),Re={class:"group-input left"},Ne=e("div",{class:"name"},"รายละเอียดหนังสือ",-1),Oe={class:"group-input"},Pe=e("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),Be=e("div",{class:"line"},null,-1),Ke={class:"group-between"},Je={class:"group-input left"},Ge=e("div",{class:"name"},[h("หน่วยงานที่เสนอเรื่อง "),e("span",{class:"required"},"*")],-1),He={class:"group-input"},Qe=e("div",{class:"name"},[h("ช่องทางการรับเอกสาร "),e("span",{class:"required"},"*")],-1),We={key:0,class:"group-between"},Xe={class:"group-input left"},Ye=e("div",{class:"name"},[h("ระบุชื่อหน่วยงานอื่นๆ "),e("span",{class:"required"},"*")],-1),Ze=e("div",{class:"group-input"},null,-1),$e={class:"group-between"},et={class:"group-input left"},tt=e("div",{class:"name"},"ผู้ติดต่อ",-1),st={class:"group-between"},at={class:"group-input left"},ot=e("div",{class:"name"},"โทรศัพท์",-1),it={class:"group-input"},lt=e("div",{class:"name"},"E-mail",-1),dt=e("div",{class:"line"},null,-1),nt={class:"group-detail"},rt={class:"group-between"},ct={class:"group-input left"},_t=e("div",{class:"name"},"หนังสือต้นเรื่อง",-1),pt={class:"group-input-file"},ut=["onClick"],ht=["onClick"],mt=["onChange","name"],ft=["onClick"],gt=e("i",{class:"bi bi-eye icon-eye"},null,-1),bt=[gt],vt=["disabled","onClick"],yt=e("img",{src:E,alt:"",class:"image-trash"},null,-1),kt=[yt],wt={class:"group-input"},Vt={class:"group-input d-flex align-items-center"},St=e("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),Ct=["disabled"],Ut=e("div",{class:"group-image"},[e("img",{src:R,alt:"",class:"icon-plus"}),h(" เพิ่มไฟล์ ")],-1),qt=[Ut],Tt={class:"group-input-file"},Lt=["onClick"],At=["onClick"],Ft=["onChange","name"],xt=["onClick"],Mt=e("i",{class:"bi bi-eye icon-eye"},null,-1),Dt=[Mt],It=["disabled","onClick"],Et=e("img",{src:E,alt:"",class:"image-trash"},null,-1),zt=[Et],jt=e("div",{class:"line"},null,-1),Rt={class:"send-to"},Nt={class:"group-input"},Ot=e("div",{class:"name"},[h("ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) "),e("span",{class:"required"},"*กรุณาใส่รายชื่อที่ต้องการส่งต่อ")],-1),Pt={class:"group-input left"},Bt={class:"name d-flex justify-content-between"},Kt=e("div",null,"ความเห็น / คำสั่ง",-1),Jt=e("img",{src:B,alt:"",class:"icon-paperclip"},null,-1),Gt=e("img",{src:K,alt:"",class:"image-x"},null,-1),Ht={class:"group-between"},Qt={class:"group-input left"},Wt=e("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Xt={class:"group-input"},Yt=e("div",{class:"name"},"การมองเห็น",-1),Zt={class:"d-flex align-items-center justify-content-between"},$t=e("img",{src:z,alt:"times-circle",class:"icon-times-circle"},null,-1),es=e("img",{src:j,alt:"times-circle",class:"icon-check-circle"},null,-1),ts={key:0,class:"line mt-3"},ss={class:"d-flex justify-content-between"},as={class:"title"},os=["onClick"],is={class:"d-flex ms-2 mt-2"},ls={class:"name"},ds={class:"name ms-5"},ns={class:"name ms-5"},rs={class:"name ms-2 mt-1"},cs={class:"name ms-2 mt-1"},_s=e("div",{class:"line mt-4"},null,-1),ps={class:"group-footer"},us={class:"footer-left d-flex"},hs=e("img",{src:z,alt:"times-circle",class:"icon-times-circle"},null,-1),ms=e("img",{src:z,alt:"times-circle",class:"icon-times-circle"},null,-1),fs={class:"footer-right"},gs=e("img",{src:j,alt:"times-circle",class:"icon-check-circle"},null,-1),bs=["disabled"],vs=e("img",{src:j,alt:"times-circle",class:"icon-check-circle"},null,-1),ys={key:0,class:"detail-history"},ks={class:"history"},ws=e("div",{class:"group-left"},[e("i",{class:"bi bi-clock icon-size"}),e("div",{class:"name"},"ประวัติการแก้ไข")],-1),Vs={class:"group-right"},Ss={class:"bi bi-chevron-right icon-angle"},Cs={class:"bi bi-chevron-down icon-angle"},Us={class:"line"},qs={class:"content"},Ts={class:"content-head"},Ls=e("i",{class:"bi bi-border-all icon-size"},null,-1),As=e("i",{class:"bi bi-chat-left icon-size"},null,-1),Fs=e("i",{class:"bi bi-pencil-square icon-size"},null,-1),xs={class:"detail-head"},Ms={class:"number"},Ds={class:"create"},Is=e("i",{class:"bi bi-person icon-size"},null,-1),Es={class:"date"},zs={class:"time"},js=e("i",{class:"bi bi-clock icon-size"},null,-1),Rs=["onClick"],Ns={class:"detail-list"},Os={key:0,class:"detail-signager"},Ps=["src"],Bs={class:"name"},Ks={class:"position"},Js={key:1,class:"line"},Gs={key:1,class:"content-detail first end"},Hs=e("div",{class:"detail-head"},[e("div",{class:"topic"},"ไม่มีข้อมูล")],-1),Qs=[Hs];function Ws(o,s,l,c,t,i){const r=w("cpn-checkbox"),d=w("cpn-select"),v=w("cpn-datepicker"),y=w("cpn-time"),L=w("cpn-autoComplete"),V=w("cpn-input"),C=w("cpn-textArea"),A=w("cpn-input-tags"),M=w("Form"),D=w("cpn-modal-alert"),I=w("cpn-loading");return f(),g("div",G,[e("div",H,[e("div",Q,[e("div",W,[e("div",X,[Y,e("div",Z,b(t.edit?"แก้ไขหนังสือรับเข้า":"สร้างหนังสือรับเข้า"),1)])]),$,m(M,{onSubmit:i.on_submit,onInvalidSubmit:o.onInvalidSubmit},{default:O(()=>{var _,S,n;return[e("div",ee,[e("div",te,[m(r,{modelValue:t.data.original_flag,"onUpdate:modelValue":s[0]||(s[0]=a=>t.data.original_flag=a),name:"original_flag",label:"หนังสือต้นเรื่อง"},null,8,["modelValue"])]),e("div",se,[e("div",ae,[oe,m(d,{modelValue:t.data.receive_regis_id,"onUpdate:modelValue":s[1]||(s[1]=a=>t.data.receive_regis_id=a),name:"receive_regis_id",rules:"required",optionSelect:t.optionSelect.receive_regis_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",ie,[e("div",le,[de,m(v,{modelValue:t.data.receive_date,"onUpdate:modelValue":s[2]||(s[2]=a=>t.data.receive_date=a),name:"receive_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",ne,[re,m(y,{modelValue:t.data.receive_time,"onUpdate:modelValue":s[3]||(s[3]=a=>t.data.receive_time=a),name:"receive_time",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),e("div",ce,[e("div",_e,[pe,m(L,{modelValue:t.data.book_type_id,"onUpdate:modelValue":s[4]||(s[4]=a=>t.data.book_type_id=a),name:"book_type_id",rules:"required",optionSelect:t.optionSelect.book_type_id,placeholder:"กรุณาระบุ",onKeyup:i.keyup_book_type},null,8,["modelValue","optionSelect","onKeyup"])]),e("div",ue,[e("div",he,[me,m(V,{modelValue:t.data.document_number,"onUpdate:modelValue":s[5]||(s[5]=a=>t.data.document_number=a),name:"document_number",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",fe,[ge,m(v,{modelValue:t.data.as_of_date,"onUpdate:modelValue":s[6]||(s[6]=a=>t.data.as_of_date=a),name:"as_of_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])])]),e("div",be,[ve,e("button",{type:"button",class:"add-booking-receive",onClick:s[7]||(s[7]=a=>i.add_booking_refers())},ke)]),(f(!0),g(U,null,q(t.data.booking_refers.filter(a=>a.flag!="delete"),(a,u)=>(f(),g("div",{class:"group-between",key:u},[e("div",we,[m(V,{modelValue:a.receive_document_number,"onUpdate:modelValue":p=>a.receive_document_number=p,name:`codeRefers${u}`,type:"text",searchFlag:!0,onSearchClick:p=>i.booking_refers_click(a),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),e("div",Ve,[m(V,{modelValue:a.desc,"onUpdate:modelValue":p=>a.desc=p,name:`nameRefers${u}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Se,[m(v,{modelValue:a.receive_date,"onUpdate:modelValue":p=>a.receive_date=p,name:`dateRefers${u}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",onClick:p=>i.delete_booking_refers(a,u),class:"button-delete ms-3"},qe,8,Ce)])]))),128)),Te,e("div",Le,[e("div",Ae,[Fe,m(C,{modelValue:t.data.subject,"onUpdate:modelValue":s[8]||(s[8]=a=>t.data.subject=a),name:"subject",rules:"required",disabled:t.edit,rows:"3"},null,8,["modelValue","disabled"])]),e("div",xe,[e("div",Me,[De,m(d,{modelValue:t.data.secret_id,"onUpdate:modelValue":s[9]||(s[9]=a=>t.data.secret_id=a),name:"secret_id",rules:"required",optionSelect:t.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])]),e("div",Ie,[Ee,m(d,{modelValue:t.data.speed_id,"onUpdate:modelValue":s[10]||(s[10]=a=>t.data.speed_id=a),name:"speed_id",rules:"required",optionSelect:t.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])])])]),e("div",ze,[je,m(C,{modelValue:t.data.send_to,"onUpdate:modelValue":s[11]||(s[11]=a=>t.data.send_to=a),name:"send_to",rules:"required",rows:"1",disabled:t.edit},null,8,["modelValue","disabled"])]),e("div",Re,[Ne,m(C,{modelValue:t.data.book_desc,"onUpdate:modelValue":s[12]||(s[12]=a=>t.data.book_desc=a),name:"book_desc",rows:"1"},null,8,["modelValue"])]),e("div",Oe,[Pe,m(A,{modelValue:t.data.tag,"onUpdate:modelValue":s[13]||(s[13]=a=>t.data.tag=a),name:"tag"},null,8,["modelValue"])])]),Be,(f(!0),g(U,null,q(t.data.contracts,(a,u)=>(f(),g("div",{class:"group-detail",key:u},[e("div",Ke,[e("div",Je,[Ge,m(L,{modelValue:a.department_id,"onUpdate:modelValue":p=>a.department_id=p,name:`${u}department_id`,rules:"required",disabled:t.edit,onKeyup:s[14]||(s[14]=p=>i.keyup_department(p)),optionSelect:t.optionSelect.department_id},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])]),e("div",He,[Qe,m(d,{modelValue:a.receive_type,"onUpdate:modelValue":p=>a.receive_type=p,name:`${u}receive_type`,rules:"required",disabled:t.edit,optionSelect:t.optionSelect.receive_type},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])])]),a.department_id==1860?(f(),g("div",We,[e("div",Xe,[Ye,m(V,{modelValue:a.department_other,"onUpdate:modelValue":p=>a.department_other=p,name:`${u}department_other`,rules:a.department_id==1860?"required":"",disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","rules","disabled"])]),Ze])):T("",!0),e("div",$e,[e("div",et,[tt,m(V,{modelValue:a.contract_name,"onUpdate:modelValue":p=>a.contract_name=p,name:`${u}contract_name`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),e("div",st,[e("div",at,[ot,m(V,{modelValue:a.contract_phone,"onUpdate:modelValue":p=>a.contract_phone=p,isNumber:!0,maxlength:"10",name:`${u}contract_phone`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),e("div",it,[lt,m(V,{modelValue:a.contract_mail,"onUpdate:modelValue":p=>a.contract_mail=p,rules:"email",name:`${u}contract_mail`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])])])])]))),128)),dt,e("div",nt,[e("div",rt,[e("div",ct,[_t,(f(!0),g(U,null,q(t.data.main_docs.filter(a=>a.flag!="delete"),(a,u)=>(f(),g("div",{class:"d-flex mb-3",key:u},[e("div",pt,[e("button",{type:"button",class:k([t.edit?"none-pointer":"","button-file"]),onClick:p=>t.edit?"":i.upload_file(`main_docs${u}`)},[e("span",{class:k(a.filename?"":"no-data")},b(a.filename?a.filename:"หนังสือต้นเรื่อง"),3)],10,ut),e("div",{class:k(t.edit?"text disabled":"text pointer"),onClick:p=>t.edit?"":i.upload_file(`main_docs${u}`)},"แนบเอกสาร",10,ht),e("input",{type:"file",onChange:p=>i.file_set_change(`main_docs${u}`,u,"main_docs"),name:`main_docs${u}`,style:{display:"none"},accept:"application/pdf"},null,40,mt)]),e("button",{type:"button",onClick:p=>i.download_file(a),class:"button-eye"},bt,8,ft),e("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:p=>t.data.main_docs.length>1?t.data.main_docs.splice(u,1):a.filename=""},kt,8,vt)]))),128))]),e("div",wt,[e("div",Vt,[St,e("button",{type:"button",class:"add-booking-receive",disabled:t.edit,onClick:s[15]||(s[15]=a=>i.add_attachments())},qt,8,Ct)]),(f(!0),g(U,null,q(t.data.attachments.filter(a=>a.flag!="delete"),(a,u)=>(f(),g("div",{class:"d-flex mb-3",key:u},[e("div",Tt,[e("button",{type:"button",class:k([t.edit?"none-pointer":"","button-file"]),onClick:p=>t.edit?"":i.upload_file(`attachments${u}`)},[e("span",{class:k(a.filename?"":"no-data")},b(a.filename?a.filename:"สิ่งที่ส่งมาด้วย"),3)],10,Lt),e("div",{class:k(t.edit?"text disabled":"text pointer"),onClick:p=>t.edit?"":i.upload_file(`attachments${u}`)},"แนบเอกสาร",10,At),e("input",{type:"file",onChange:p=>i.file_set_change(`attachments${u}`,u,"attachments"),name:`attachments${u}`,style:{display:"none"}},null,40,Ft)]),e("button",{type:"button",onClick:p=>i.download_file(a),class:"button-eye"},Dt,8,xt),e("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:p=>i.delete_attachments(a,u)},zt,8,It)]))),128))])])]),jt,e("div",Rt,[e("div",Nt,[Ot,m(A,{modelValue:t.data.sendTo,"onUpdate:modelValue":s[16]||(s[16]=a=>t.data.sendTo=a),flagSearch:!0,optionSelect:t.optionSelect.sendTo,onKeyup:i.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),e("div",Pt,[e("div",Bt,[Kt,e("div",null,[e("input",{type:"file",onChange:s[17]||(s[17]=a=>i.file_set_change("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(_=t.data.sendToFile)!=null&&_.filename?(f(),g("div",{key:1,class:"del-comment pointer",onClick:s[19]||(s[19]=a=>t.data.sendToFile.filename="")},[h(b((S=t.data.sendToFile)==null?void 0:S.filename)+" ",1),Gt])):(f(),g("button",{key:0,type:"button",class:"button-con pointer",onClick:s[18]||(s[18]=a=>i.upload_file("sendTo"))},[Jt,h(" แนบเอกสาร ")]))])]),m(C,{modelValue:t.data.comment,"onUpdate:modelValue":s[20]||(s[20]=a=>t.data.comment=a),name:"comment",rows:"3"},null,8,["modelValue"])]),e("div",Ht,[e("div",Qt,[Wt,m(d,{modelValue:t.data.process_type_id,"onUpdate:modelValue":s[21]||(s[21]=a=>t.data.process_type_id=a),name:"process_type_id",optionSelect:t.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),e("div",Xt,[Yt,m(d,{modelValue:t.data.permission_id,"onUpdate:modelValue":s[22]||(s[22]=a=>t.data.permission_id=a),name:"permission_id",optionSelect:t.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),e("div",Zt,[e("div",null,[e("button",{type:"button",class:"button button-danger",onClick:s[23]||(s[23]=a=>(t.data.sendTo=[],t.data.comment="",t.data.process_type_id="",t.data.permission_id=""))},[$t,h(" ยกเลิก ")])]),e("div",null,[e("button",{type:"button",onClick:s[24]||(s[24]=a=>i.add_booking_follows()),class:"button button-success"},[es,h(" เพิ่มการส่งต่อ ")])])]),t.data.booking_follows.length>0?(f(),g("div",ts)):T("",!0),(f(!0),g(U,null,q(t.data.booking_follows.filter(a=>a.flag!="delete"),(a,u)=>{var p;return f(),g("div",{class:"group-add",key:u},[e("div",ss,[e("div",as,"#"+b(u+1),1),e("img",{onClick:Xs=>i.delete_booking_follows(a,u),src:E,alt:"",class:"image-trash pointer"},null,8,os)]),e("div",is,[e("div",ls,"ส่งต่อ : "+b((a==null?void 0:a.department_name)||"-"),1),e("div",ds,"รูปแบบการดำเนินการ : "+b((a==null?void 0:a.process_type_name)||"-"),1),e("div",ns,"การมองเห็น : "+b((a==null?void 0:a.permission_name)||"-"),1)]),e("div",rs,"ความเห็น / คำสั่ง : "+b((a==null?void 0:a.comment)||"-"),1),e("div",cs,"เอกสารแนบ : "+b(((p=a==null?void 0:a.sendToFile)==null?void 0:p.filename)||"-"),1)])}),128))]),_s,e("div",ps,[e("div",us,[e("button",{type:"button",class:"button-danger",onClick:s[25]||(s[25]=a=>i.back())},[hs,h(" ปิด ")]),o.$route.params.id?(f(),g("button",{key:0,type:"button",class:"button-danger ms-3",onClick:s[26]||(s[26]=a=>i.delete_click())},[ms,h(" ลบ ")])):T("",!0)]),e("div",fs,[e("button",{type:"submit",class:"button-primary",onClick:s[27]||(s[27]=a=>t.flagSave=1)},[gs,h(" บันทึกแบบร่าง ")]),e("button",{type:"submit",class:"button-success",onClick:s[28]||(s[28]=a=>t.flagSave=2),disabled:((n=t.data.sendTo)==null?void 0:n.length)<1},[vs,h(" บันทึกและส่งต่อ ")],8,bs)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])]),o.$route.params.id?(f(),g("div",ys,[e("div",ks,[e("div",{class:"header pointer",onClick:s[29]||(s[29]=_=>(t.data.history.hide=!t.data.history.hide,i.historyClick(t.data.history.tab)))},[ws,e("div",Vs,[F(e("i",Ss,null,512),[[x,!t.data.history.hide]]),F(e("i",Cs,null,512),[[x,t.data.history.hide]])])]),F(e("div",Us,null,512),[[x,t.data.history.hide]]),F(e("div",qs,[e("div",Ts,[e("div",{class:k(["pointer",t.data.history.tab==1?"active":""]),onClick:s[30]||(s[30]=_=>(t.data.history.tab=1,i.historyClick(1)))},[Ls,h("ทั้งหมด")],2),e("div",{class:k(["pointer",t.data.history.tab==2?"active":""]),onClick:s[31]||(s[31]=_=>(t.data.history.tab=2,i.historyClick(2)))},[As,h("ความเห็นคำสั่ง")],2),e("div",{class:k(["pointer",t.data.history.tab==3?"active":""]),onClick:s[32]||(s[32]=_=>(t.data.history.tab=3,i.historyClick(3)))},[Fs,h("แก้ไขข้อมูล")],2)]),t.data.history.data.filter(_=>t.data.history.tab==2?_.type==2:t.data.history.tab==3?_.type==0||_.type==1:_).length>0?(f(!0),g(U,{key:0},q(t.data.history.data.filter(_=>t.data.history.tab==2?_.type==2:t.data.history.tab==3?_.type==0||_.type==1:_),(_,S)=>(f(),g("div",{class:k(["content-detail",S==0?"first":S==t.data.history.data.length-1?"end":""]),key:S},[e("div",xs,[e("div",Ms,"#"+b(S+1),1),e("div",{class:k(["topic",_.bookaction_name=="ความเห็นคำสั่ง"?"blue":_.bookaction_name=="แก้ไขหนังสือ"?"yellow":"green"])},[e("i",{class:k(["bi icon-size",_.bookaction_name=="ความเห็นคำสั่ง"?"bi-chat-left":_.bookaction_name=="แก้ไขหนังสือ"?"bi-pencil-square":"bi-plus-lg"])},null,2),h(" "+b(_.bookaction_name),1)],2),e("div",Ds,[Is,h(" โดย "+b(_.updateBy)+" / "+b(_.subName),1)]),e("div",Es," วันที่ "+b(_.create_date),1),e("div",zs,[js,h(" "+b(_.create_time),1)])]),F(e("button",{class:"button-file",onClick:n=>i.download_file(_)},b(_.filename),9,Rs),[[x,_.filename]]),e("ul",Ns,[(f(!0),g(U,null,q(_.booking_remarks,(n,a)=>(f(),g("li",{key:a},b(n.remark)+" "+b(n.comment),1))),128))]),_.picture2?(f(),g("div",Os,[e("img",{src:_.picture2,alt:"",class:"image-size"},null,8,Ps),e("div",Bs,"("+b(_.fullname)+")",1),e("div",Ks,b(_.positionName),1)])):T("",!0),S!=t.data.history.data.length-1?(f(),g("div",Js)):T("",!0)],2))),128)):(f(),g("div",Gs,Qs))],512),[[x,t.data.history.hide]])])])):T("",!0)]),m(D,{modalAlert:t.modalAlert},null,8,["modalAlert"]),m(I,{show:t.showLoading},null,8,["show"])])}const sa=N(J,[["render",Ws]]);export{sa as default};
