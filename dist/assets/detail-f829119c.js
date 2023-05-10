import{_ as N,r as w,o as g,c as f,a as e,t as b,b as m,d as P,w as F,v as x,n as k,j as h,F as U,h as q,i as L,g as R,k as E}from"./index-3785cc43.js";import{_ as O}from"./ballot-duotone-f2459825.js";import{_ as j}from"./plus-circle-duotone-64bd32fe.js";import{_ as z}from"./trash-alt-duotone-12d94c28.js";import{_ as B,a as K}from"./x-solid-74fa126d.js";const J={name:"booking-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{history:{hide:!1,data:[],tab:1},original_flag:!1,receive_regis_id:"",book_type_id:"",receive_date:this.assetsUtils.currentDate(),receive_time:this.assetsUtils.currentTime(),document_number:"",as_of_date:this.assetsUtils.currentDate(),subject:"",secret_id:"",speed_id:"",send_to:"",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],sendToFile:[{filename:""}],main_docs_del:[],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[{filename:""}],booking_follows:[],comment:"",process_type_id:"12",permission_id:"9",book_type:"",regis_id:"",FileType:[]},optionSelect:{receive_regis_id:[],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]}}},methods:{historyClick(a){this.showLoading=!0,this.axios.get(`/booking-receive/${this.$route.params.id}/history`,{params:{book_type:this.$route.query.book_type,department_id:parseInt(localStorage.getItem("department_id"))}}).then(s=>{this.showLoading=!1,s.data.data.filter(l=>(l.bookingRemarks.filter(r=>(r.link=r.filepath?this.backendport+"/"+r.filepath:"",r)),l)),this.data.history.data=s.data.data}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},add_attachments(){this.data.attachments.push({filename:"",flag:"add"})},delete_attachments(a,s){a.flag=="edit"?a.flag="delete":this.data.attachments.splice(s,1),this.data.attachments.length-this.data.attachments.filter(l=>l.flag=="delete").length<1&&this.add_attachments()},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(a,s){a.flag=="edit"?a.flag="delete":this.data.booking_refers.splice(s,1),this.data.booking_refers.length-this.data.booking_refers.filter(l=>l.flag=="delete").length<1&&this.add_booking_refers()},booking_refers_click(a){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:a.receive_document_number}}).then(s=>{this.showLoading=!1,s.data.data.length>0?(a.book_refer_id=s.data.data[0].id,a.original_refer_id=s.data.data[0].id,a.book_type=s.data.data[0].book_type,a.desc=s.data.data[0].desc,a.receive_date=s.data.data[0].receive_date):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(s=>{a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},delete_click(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"หนังสือรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.axios.delete(`/booking-receive/${a.$route.params.id}`).then(()=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(s=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}}},keyup_department(a){this.optionSelect.department_id=[],this.axios.get("/master-data/department-user",{params:{keyword:a.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.department_id=s.data.data)})},keyup_send_to(a){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user",{params:{keyword:a.target.value,user_id:parseInt(localStorage.getItem("user_id"))}}).then(s=>{s.data.data&&(s.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.sendTo=s.data.data)})},add_booking_follows(){this.data.sendTo.filter(a=>{var s;if(!this.data.booking_follows.some(l=>l.department_id===a.value&&l.flag!="delete")){let l={...a,department_id:parseInt(a.value),department_name:a.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:a.human_flag,response_id:parseInt(a.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(((s=this.data.sendToFile)==null?void 0:s.filename)||""))},response_type:a.type};this.optionSelect.process_type_id.find(r=>{r.value==this.data.process_type_id&&(l.process_type_name=r.name)}),this.optionSelect.permission_id.find(r=>{r.value==this.data.permission_id&&(l.permission_name=r.name)}),this.data.booking_follows.push(l)}})},delete_booking_follows(a,s){a.flag=="edit"?a.flag="delete":this.data.booking_follows.splice(s,1)},download_file(a){a.filename&&a.link&&this.axios({method:"get",url:a.link,baseURL:"",responseType:"blob"}).then(s=>{const l=new Blob([s.data],{type:this.assetsUtils.getTypeFile(a.filename)});window.open(URL.createObjectURL(l))})},upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_set_change(a,s,l){for(var r=0;r<document.querySelector(`[name="${a}"]`).files.length;r++){let t=document.querySelector(`[name="${a}"]`).files[r];if(this.data.FileType.indexOf(t.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(l=="main_docs"){if(t.type=="application/pdf"){let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[l][s]={...this.data[l][s],...i},document.querySelector(`[name="${a}"]`).value=null}}else if(l=="sendTo"){let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data.sendToFile=i}else{let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[l][s]={...this.data[l][s],...i},document.querySelector(`[name="${a}"]`).value=null}}},back(){this.$router.push({name:"my-work.booking-receive",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.upload_file_all()}}},upload_file_all(){let a=this.assetsUtils.currentDate(),s=[],l=[],r=[],t=[],i=[];this.data.main_docs.filter(c=>{if(c.file){let d=new FormData;d.append("file",c.file),d.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),s.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}else c.id&&i.push({filename:c.filename,filepath:c.filepath})}),this.data.attachments.filter(c=>{if(c.file){let d=new FormData;d.append("file",c.file),d.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),l.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}}),s.length>0&&this.axios.all([...s]).then(this.axios.spread((...c)=>{c.filter((d,v)=>{r.push({...this.data.main_docs[v],...d.data.data,filepath:d.data.data.path})}),s.length==r.length&&l.length==t.length&&this.call_api_save([...r,...i],t)})).catch(c=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}}),l.length>0&&this.axios.all([...l]).then(this.axios.spread((...c)=>{c.filter((d,v)=>{t.push({...this.data.attachments[v],...d.data.data,filepath:d.data.data.path})}),s.length==r.length&&l.length==t.length&&this.call_api_save([...r,...i],t)})).catch(c=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}}),s.length<1&&l.length<1&&this.call_api_save([...i],[])},upload_file_all2(a){let s=this.assetsUtils.currentDate(),l=[],r=[];this.data.main_docs.filter(t=>{if(t.file){let i=new FormData;i.append("file",t.file),i.append("dst",`${s.split("/")[0]+"-"+s.split("/")[1]+"-"+s.split("/")[2]}`),l.push(this.axios.post("/upload/single",i,{headers:{"Content-Type":"multipart/form-data"}}))}}),l.length>0?this.axios.all([...l]).then(this.axios.spread((...t)=>{t.filter((i,c)=>{r.push({...this.data.main_docs[c],...i.data.data,filepath:i.data.data.path})}),l.length==r.length&&this.call_api_save(r,a)})).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}}):this.call_api_save(r,a)},upload_file_all3(a,s){var r;let l=this.assetsUtils.currentDate();if((r=this.data.sendToFile)!=null&&r.filename){let t=new FormData;t.append("file",this.data.sendToFile.file),t.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),this.axios.post("/upload/single",t,{headers:{"Content-Type":"multipart/form-data"}}).then(i=>{this.data.attach_filename=i.data.data.filename,this.data.attach_filepath=i.data.data.path,this.upload_file_all4(a,s)}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}else this.upload_file_all4(a,s)},upload_file_all4(a,s){let l=this.assetsUtils.currentDate(),r=[],t=[];this.data.booking_follows.filter(i=>{var c;if((c=i.sendToFile)!=null&&c.filename){let d=new FormData;d.append("file",i.sendToFile.file),d.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),r.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}}),r.length>0?this.axios.all([...r]).then(this.axios.spread((...i)=>{i.filter((c,d)=>{this.data.booking_follows[d].attach_filepath=c.data.data.path,this.data.booking_follows[d].attach_filename=c.data.data.filename,t.push({...this.data.booking_follows[d],...c.data.data,filepath:c.data.data.path})}),r.length==t.length&&this.call_api_save(a,s)})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}):this.call_api_save(a,s)},call_api_save(a,s){let l=this,r="";this.data.tag.filter(i=>{r+=i.name+","}),r=r.slice(0,-1),this.data.sendTo.filter(i=>{if(!this.data.booking_follows.some(c=>c.department_id===i.value&&c.flag!="delete")){let c={...i,department_id:parseInt(i.value),department_name:i.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:i.human_flag,response_id:parseInt(i.value),response_type:i.type,attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename,sendToFile:{filename:this.data.attach_filename}};this.optionSelect.process_type_id.find(d=>{d.value==this.data.process_type_id&&(c.process_type_name=d.name)}),this.optionSelect.permission_id.find(d=>{d.value==this.data.permission_id&&(c.permission_name=d.name)}),this.data.booking_follows.push(c)}});let t={original_flag:this.data.original_flag,receive_regis_id:parseInt(this.data.receive_regis_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),receive_time:this.data.receive_time,as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:r,contracts:this.data.contracts,main_docs:[...a,...this.data.main_docs_del],attachments:s,booking_refers:this.data.booking_refers.filter(i=>i.book_refer_id),booking_follows:this.data.booking_follows,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":"",book_type:parseInt(this.$route.query.book_type),regis_id:parseInt(this.$route.query.regis_id),page_flag:"owner"};this.edit?this.flagSave==1?(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):this.flagSave==1?(this.showLoading=!0,this.axios.post("/booking-receive",t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):(this.showLoading=!0,this.axios.post("/booking-receive",t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}))},api_detail(){this.showLoading=!0,this.axios.get(`/booking-receive/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id}}).then(a=>{var l,r,t,i,c;this.showLoading=!1;let s=[];a.data.data.main_docs.filter(d=>{s.push({...d,flag:"delete"})}),a.data.data={...this.data,...a.data.data,main_docs_del:s},this.data=JSON.parse(JSON.stringify(a.data.data)),this.data.tag=[],(l=a.data.data.tag)==null||l.split(",").filter(d=>{d&&this.data.tag.push({value:"",name:d})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],a.data.data.booking_refers.filter(d=>{d.flag="edit",this.axios.get(`/master-data/book-refer/${d.book_type}/${d.id}`).then(v=>{this.data.booking_refers.push({...v.data.data,...d})}).catch(v=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:v.response.data.message}})}),this.data.main_docs.filter(d=>(d.flag="add",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.attachments.filter(d=>(d.flag="add",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.contracts.filter(d=>(d.flag="add",d)),this.data.booking_follows.filter(d=>(d.flag="add",d)),this.data.booking_follows=[],(((r=this.data.main_docs)==null?void 0:r.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}]),(((t=this.data.attachments)==null?void 0:t.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(((i=this.data.contracts)==null?void 0:i.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:"",flag:"add"}]),(((c=a.data.data.booking_refers)==null?void 0:c.length)<1||!a.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}])}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},api_master(){this.showLoading=!0;const a=this.axios.get("/master-data/book-category",{params:{book_type:0}}),s=this.axios.get("/master-data/book-type"),l=this.axios.get("/master-data/secret"),r=this.axios.get("/master-data/speed"),t=this.axios.get("/master-data/process-type"),i=this.axios.get("/master-data/permission-type"),c=this.axios.get("/master-data/department-user"),d=this.axios.get("/master-data/receive-type"),v=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([a,s,l,r,t,i,c,d,v]).then(this.axios.spread((...y)=>{this.showLoading=!1;const A=y[0],V=y[1],C=y[2],T=y[3],M=y[4],I=y[5],D=y[6],_=y[7],S=y[8];A.data.data.filter(n=>(n.value=n.id,n.name=n.name,n)),V.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),C.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),T.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),M.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),I.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),D.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),_.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),this.data.FileType=[],S.data.data.filter(n=>{n.active_flag==1&&this.data.FileType.push(n.content_type)}),this.optionSelect.receive_regis_id=A.data.data,this.optionSelect.book_type_id=V.data.data,this.optionSelect.secret_id=C.data.data,this.optionSelect.speed_id=T.data.data,this.optionSelect.process_type_id=M.data.data,this.optionSelect.permission_id=I.data.data,this.optionSelect.department_id=D.data.data,this.optionSelect.receive_type=_.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(y=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:y.response.data.message}})},keyup_book_type(a){this.axios.get("/master-data/book-type",{params:{keyword:a.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l)),this.optionSelect.book_type_id=s.data.data)})},submitClick(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการรับเข้าหรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){let s={regis_id:parseInt(a.data.book_category_id),book_type:4,human_flag:a.data.human_flag,response_id:parseInt(a.data.response_id),user_id:parseInt(localStorage.getItem("user_id"))};a.showLoading=!0,a.axios.put(`/booking-receive/${a.$route.params.id}`,s).then(()=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"success",title:"ยืนยันรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(l=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}}}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},G={class:"booking-receive-detail"},H={class:"group-overflow"},Q={class:"detail"},W={class:"group-head"},X={class:"group-first"},Y=e("img",{src:O,alt:"",class:"icon-size"},null,-1),Z={class:"name"},$=e("div",{class:"line"},null,-1),ee={class:"group-detail"},te={class:"group-input"},se={class:"group-between"},ae={class:"group-input left"},oe=e("div",{class:"name"},[h("ทะเบียนรับ "),e("span",{class:"required"},"*")],-1),ie={class:"group-between"},le={class:"group-input left"},de=e("div",{class:"name"},[h("วันที่รับหนังสือ "),e("span",{class:"required"},"*")],-1),ne={class:"group-input"},re=e("div",{class:"name"},[h("เวลาที่รับหนังสือ "),e("span",{class:"required"},"*")],-1),ce={class:"group-between"},_e={class:"group-input left"},pe=e("div",{class:"name"},[h("ชนิดของหนังสือ "),e("span",{class:"required"},"*")],-1),ue={class:"group-between"},he={class:"group-input left"},me=e("div",{class:"name"},[h("เลขที่หนังสือ "),e("span",{class:"required"},"*")],-1),ge={class:"group-input"},fe=e("div",{class:"name"},[h("ลงวันที่ "),e("span",{class:"required"},"*")],-1),be={class:"group-input d-flex align-items-center"},ve=e("div",{class:"name"},"อ้างอิงถึง",-1),ye=e("div",{class:"group-image"},[e("img",{src:j,alt:"",class:"icon-plus"}),h(" เพิ่มเอกสารอ้างอิง ")],-1),ke=[ye],we={class:"group-input left"},Ve={class:"group-input left"},Se={class:"group-input d-flex"},Ce=["onClick"],Ue=e("img",{src:z,alt:"",class:"image-trash pointer"},null,-1),qe=[Ue],Le=e("div",{class:"group-input"},null,-1),Ae={class:"group-between"},Te={class:"group-input left"},Fe=e("div",{class:"name"},[h("ชื่อเรื่อง "),e("span",{class:"required"},"*")],-1),xe={class:"group-between"},Me={class:"group-input left"},Ie=e("div",{class:"name"},[h("ชั้นความลับ "),e("span",{class:"required"},"*")],-1),De={class:"group-input"},Ee=e("div",{class:"name"},[h("ความเร่งด่วน "),e("span",{class:"required"},"*")],-1),ze={class:"group-input left"},Re=e("div",{class:"name"},[h("เรียน "),e("span",{class:"required"},"*")],-1),je={class:"group-input left"},Ne=e("div",{class:"name"},"รายละเอียดหนังสือ",-1),Pe={class:"group-input"},Oe=e("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),Be=e("div",{class:"line"},null,-1),Ke={class:"group-between"},Je={class:"group-input left"},Ge=e("div",{class:"name"},[h("หน่วยงานที่เสนอเรื่อง "),e("span",{class:"required"},"*")],-1),He={class:"group-input"},Qe=e("div",{class:"name"},[h("ช่องทางการรับเอกสาร "),e("span",{class:"required"},"*")],-1),We={key:0,class:"group-between"},Xe={class:"group-input left"},Ye=e("div",{class:"name"},[h("ระบุชื่อหน่วยงานอื่นๆ "),e("span",{class:"required"},"*")],-1),Ze=e("div",{class:"group-input"},null,-1),$e={class:"group-between"},et={class:"group-input left"},tt=e("div",{class:"name"},"ผู้ติดต่อ",-1),st={class:"group-between"},at={class:"group-input left"},ot=e("div",{class:"name"},"โทรศัพท์",-1),it={class:"group-input"},lt=e("div",{class:"name"},"E-mail",-1),dt=e("div",{class:"line"},null,-1),nt={class:"group-detail"},rt={class:"group-between"},ct={class:"group-input left"},_t=e("div",{class:"name"},"หนังสือต้นเรื่อง",-1),pt={class:"group-input-file"},ut=["onClick"],ht=["onClick"],mt=["onChange","name"],gt=["onClick"],ft=e("i",{class:"bi bi-eye icon-eye"},null,-1),bt=[ft],vt=["disabled","onClick"],yt=e("img",{src:z,alt:"",class:"image-trash"},null,-1),kt=[yt],wt={class:"group-input"},Vt={class:"group-input d-flex align-items-center"},St=e("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),Ct=["disabled"],Ut=e("div",{class:"group-image"},[e("img",{src:j,alt:"",class:"icon-plus"}),h(" เพิ่มไฟล์ ")],-1),qt=[Ut],Lt={class:"group-input-file"},At=["onClick"],Tt=["onClick"],Ft=["onChange","name"],xt=["onClick"],Mt=e("i",{class:"bi bi-eye icon-eye"},null,-1),It=[Mt],Dt=["disabled","onClick"],Et=e("img",{src:z,alt:"",class:"image-trash"},null,-1),zt=[Et],Rt=e("div",{class:"line"},null,-1),jt={class:"send-to"},Nt={class:"group-input"},Pt=e("div",{class:"name"},"ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ)",-1),Ot={class:"group-input left"},Bt={class:"name d-flex justify-content-between"},Kt=e("div",null,"ความเห็น / คำสั่ง",-1),Jt=e("img",{src:B,alt:"",class:"icon-paperclip"},null,-1),Gt=e("img",{src:K,alt:"",class:"image-x"},null,-1),Ht={class:"group-between"},Qt={class:"group-input left"},Wt=e("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Xt={class:"group-input"},Yt=e("div",{class:"name"},"การมองเห็น",-1),Zt={class:"d-flex align-items-center justify-content-between"},$t=e("img",{src:R,alt:"times-circle",class:"icon-times-circle"},null,-1),es=e("img",{src:E,alt:"times-circle",class:"icon-check-circle"},null,-1),ts={key:0,class:"line mt-3"},ss={class:"d-flex justify-content-between"},as={class:"title"},os=["onClick"],is={class:"d-flex ms-2 mt-2"},ls={class:"name"},ds={class:"name ms-5"},ns={class:"name ms-5"},rs={class:"name ms-2 mt-1"},cs={class:"name ms-2 mt-1"},_s=e("div",{class:"line mt-4"},null,-1),ps={class:"group-footer"},us={class:"footer-left d-flex"},hs=e("img",{src:R,alt:"times-circle",class:"icon-times-circle"},null,-1),ms=e("img",{src:R,alt:"times-circle",class:"icon-times-circle"},null,-1),gs={type:"button",class:"confirm-receive"},fs=e("img",{src:E,alt:"times-circle",class:"icon-check-circle"},null,-1),bs={class:"footer-right"},vs=e("img",{src:E,alt:"times-circle",class:"icon-check-circle"},null,-1),ys=["disabled"],ks=e("img",{src:E,alt:"times-circle",class:"icon-check-circle"},null,-1),ws={key:0,class:"detail-history"},Vs={class:"history"},Ss=e("div",{class:"group-left"},[e("i",{class:"bi bi-clock icon-size"}),e("div",{class:"name"},"ประวัติการแก้ไข")],-1),Cs={class:"group-right"},Us={class:"bi bi-chevron-right icon-angle"},qs={class:"bi bi-chevron-down icon-angle"},Ls={class:"line"},As={class:"content"},Ts={class:"content-head"},Fs=e("i",{class:"bi bi-border-all icon-size"},null,-1),xs=e("i",{class:"bi bi-chat-left icon-size"},null,-1),Ms=e("i",{class:"bi bi-pencil-square icon-size"},null,-1),Is={class:"detail-head"},Ds={class:"number"},Es={class:"create"},zs=e("i",{class:"bi bi-person icon-size"},null,-1),Rs={class:"date"},js={class:"time"},Ns=e("i",{class:"bi bi-clock icon-size"},null,-1),Ps=["onClick"],Os={key:0,class:"detail-signager"},Bs=["src"],Ks={class:"name"},Js={class:"position"},Gs={key:1,class:"line"},Hs={key:1,class:"content-detail first end"},Qs=e("div",{class:"detail-head"},[e("div",{class:"topic"},"ไม่มีข้อมูล")],-1),Ws=[Qs];function Xs(a,s,l,r,t,i){const c=w("cpn-checkbox"),d=w("cpn-select"),v=w("cpn-datepicker"),y=w("cpn-time"),A=w("cpn-autoComplete"),V=w("cpn-input"),C=w("cpn-textArea"),T=w("cpn-input-tags"),M=w("Form"),I=w("cpn-modal-alert"),D=w("cpn-loading");return g(),f("div",G,[e("div",H,[e("div",Q,[e("div",W,[e("div",X,[Y,e("div",Z,b(t.edit?"แก้ไขหนังสือรับเข้า":"สร้างหนังสือรับเข้า"),1)])]),$,m(M,{onSubmit:i.on_submit,onInvalidSubmit:a.onInvalidSubmit},{default:P(()=>{var _,S,n;return[e("div",ee,[e("div",te,[m(c,{modelValue:t.data.original_flag,"onUpdate:modelValue":s[0]||(s[0]=o=>t.data.original_flag=o),name:"original_flag",label:"หนังสือต้นเรื่อง"},null,8,["modelValue"])]),e("div",se,[e("div",ae,[oe,m(d,{modelValue:t.data.receive_regis_id,"onUpdate:modelValue":s[1]||(s[1]=o=>t.data.receive_regis_id=o),name:"receive_regis_id",rules:"required",optionSelect:t.optionSelect.receive_regis_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",ie,[e("div",le,[de,m(v,{modelValue:t.data.receive_date,"onUpdate:modelValue":s[2]||(s[2]=o=>t.data.receive_date=o),name:"receive_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",ne,[re,m(y,{modelValue:t.data.receive_time,"onUpdate:modelValue":s[3]||(s[3]=o=>t.data.receive_time=o),name:"receive_time",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),e("div",ce,[e("div",_e,[pe,m(A,{modelValue:t.data.book_type_id,"onUpdate:modelValue":s[4]||(s[4]=o=>t.data.book_type_id=o),name:"book_type_id",rules:"required",optionSelect:t.optionSelect.book_type_id,placeholder:"กรุณาระบุ",onKeyup:i.keyup_book_type},null,8,["modelValue","optionSelect","onKeyup"])]),e("div",ue,[e("div",he,[me,m(V,{modelValue:t.data.document_number,"onUpdate:modelValue":s[5]||(s[5]=o=>t.data.document_number=o),name:"document_number",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",ge,[fe,m(v,{modelValue:t.data.as_of_date,"onUpdate:modelValue":s[6]||(s[6]=o=>t.data.as_of_date=o),name:"as_of_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])])]),e("div",be,[ve,e("button",{type:"button",class:"add-booking-receive",onClick:s[7]||(s[7]=o=>i.add_booking_refers())},ke)]),(g(!0),f(U,null,q(t.data.booking_refers.filter(o=>o.flag!="delete"),(o,p)=>(g(),f("div",{class:"group-between",key:p},[e("div",we,[m(V,{modelValue:o.receive_document_number,"onUpdate:modelValue":u=>o.receive_document_number=u,name:`codeRefers${p}`,type:"text",searchFlag:!0,onSearchClick:u=>i.booking_refers_click(o),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),e("div",Ve,[m(V,{modelValue:o.desc,"onUpdate:modelValue":u=>o.desc=u,name:`nameRefers${p}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Se,[m(v,{modelValue:o.receive_date,"onUpdate:modelValue":u=>o.receive_date=u,name:`dateRefers${p}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",onClick:u=>i.delete_booking_refers(o,p),class:"button-delete ms-3"},qe,8,Ce)])]))),128)),Le,e("div",Ae,[e("div",Te,[Fe,m(C,{modelValue:t.data.subject,"onUpdate:modelValue":s[8]||(s[8]=o=>t.data.subject=o),name:"subject",rules:"required",disabled:t.edit,rows:"3"},null,8,["modelValue","disabled"])]),e("div",xe,[e("div",Me,[Ie,m(d,{modelValue:t.data.secret_id,"onUpdate:modelValue":s[9]||(s[9]=o=>t.data.secret_id=o),name:"secret_id",rules:"required",optionSelect:t.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])]),e("div",De,[Ee,m(d,{modelValue:t.data.speed_id,"onUpdate:modelValue":s[10]||(s[10]=o=>t.data.speed_id=o),name:"speed_id",rules:"required",optionSelect:t.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])])])]),e("div",ze,[Re,m(C,{modelValue:t.data.send_to,"onUpdate:modelValue":s[11]||(s[11]=o=>t.data.send_to=o),name:"send_to",rules:"required",rows:"1",disabled:t.edit},null,8,["modelValue","disabled"])]),e("div",je,[Ne,m(C,{modelValue:t.data.book_desc,"onUpdate:modelValue":s[12]||(s[12]=o=>t.data.book_desc=o),name:"book_desc",rows:"1"},null,8,["modelValue"])]),e("div",Pe,[Oe,m(T,{modelValue:t.data.tag,"onUpdate:modelValue":s[13]||(s[13]=o=>t.data.tag=o),name:"tag"},null,8,["modelValue"])])]),Be,(g(!0),f(U,null,q(t.data.contracts,(o,p)=>(g(),f("div",{class:"group-detail",key:p},[e("div",Ke,[e("div",Je,[Ge,m(A,{modelValue:o.department_id,"onUpdate:modelValue":u=>o.department_id=u,name:`${p}department_id`,rules:"required",disabled:t.edit,onKeyup:s[14]||(s[14]=u=>i.keyup_department(u)),optionSelect:t.optionSelect.department_id},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])]),e("div",He,[Qe,m(d,{modelValue:o.receive_type,"onUpdate:modelValue":u=>o.receive_type=u,name:`${p}receive_type`,rules:"required",disabled:t.edit,optionSelect:t.optionSelect.receive_type},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])])]),o.department_id==1860?(g(),f("div",We,[e("div",Xe,[Ye,m(V,{modelValue:o.department_other,"onUpdate:modelValue":u=>o.department_other=u,name:`${p}department_other`,rules:o.department_id==1860?"required":"",disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","rules","disabled"])]),Ze])):L("",!0),e("div",$e,[e("div",et,[tt,m(V,{modelValue:o.contract_name,"onUpdate:modelValue":u=>o.contract_name=u,name:`${p}contract_name`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),e("div",st,[e("div",at,[ot,m(V,{modelValue:o.contract_phone,"onUpdate:modelValue":u=>o.contract_phone=u,isNumber:!0,maxlength:"10",name:`${p}contract_phone`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),e("div",it,[lt,m(V,{modelValue:o.contract_mail,"onUpdate:modelValue":u=>o.contract_mail=u,rules:"email",name:`${p}contract_mail`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])])])])]))),128)),dt,e("div",nt,[e("div",rt,[e("div",ct,[_t,(g(!0),f(U,null,q(t.data.main_docs.filter(o=>o.flag!="delete"),(o,p)=>(g(),f("div",{class:"d-flex mb-3",key:p},[e("div",pt,[e("button",{type:"button",class:k([t.edit?"none-pointer":"","button-file"]),onClick:u=>t.edit?"":i.upload_file(`main_docs${p}`)},[e("span",{class:k(o.filename?"":"no-data")},b(o.filename?o.filename:"หนังสือต้นเรื่อง"),3)],10,ut),e("div",{class:k(t.edit?"text disabled":"text pointer"),onClick:u=>t.edit?"":i.upload_file(`main_docs${p}`)},"แนบเอกสาร",10,ht),e("input",{type:"file",onChange:u=>i.file_set_change(`main_docs${p}`,p,"main_docs"),name:`main_docs${p}`,style:{display:"none"},accept:"application/pdf"},null,40,mt)]),e("button",{type:"button",onClick:u=>i.download_file(o),class:"button-eye"},bt,8,gt),e("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:u=>t.data.main_docs.length>1?t.data.main_docs.splice(p,1):o.filename=""},kt,8,vt)]))),128))]),e("div",wt,[e("div",Vt,[St,e("button",{type:"button",class:"add-booking-receive",disabled:t.edit,onClick:s[15]||(s[15]=o=>i.add_attachments())},qt,8,Ct)]),(g(!0),f(U,null,q(t.data.attachments.filter(o=>o.flag!="delete"),(o,p)=>(g(),f("div",{class:"d-flex mb-3",key:p},[e("div",Lt,[e("button",{type:"button",class:k([t.edit?"none-pointer":"","button-file"]),onClick:u=>t.edit?"":i.upload_file(`attachments${p}`)},[e("span",{class:k(o.filename?"":"no-data")},b(o.filename?o.filename:"สิ่งที่ส่งมาด้วย"),3)],10,At),e("div",{class:k(t.edit?"text disabled":"text pointer"),onClick:u=>t.edit?"":i.upload_file(`attachments${p}`)},"แนบเอกสาร",10,Tt),e("input",{type:"file",onChange:u=>i.file_set_change(`attachments${p}`,p,"attachments"),name:`attachments${p}`,style:{display:"none"}},null,40,Ft)]),e("button",{type:"button",onClick:u=>i.download_file(o),class:"button-eye"},It,8,xt),e("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:u=>i.delete_attachments(o,p)},zt,8,Dt)]))),128))])])]),Rt,e("div",jt,[e("div",Nt,[Pt,m(T,{modelValue:t.data.sendTo,"onUpdate:modelValue":s[16]||(s[16]=o=>t.data.sendTo=o),flagSearch:!0,optionSelect:t.optionSelect.sendTo,onKeyup:i.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),e("div",Ot,[e("div",Bt,[Kt,e("div",null,[e("input",{type:"file",onChange:s[17]||(s[17]=o=>i.file_set_change("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(_=t.data.sendToFile)!=null&&_.filename?(g(),f("div",{key:1,class:"del-comment pointer",onClick:s[19]||(s[19]=o=>t.data.sendToFile.filename="")},[h(b((S=t.data.sendToFile)==null?void 0:S.filename)+" ",1),Gt])):(g(),f("button",{key:0,type:"button",class:"button-con pointer",onClick:s[18]||(s[18]=o=>i.upload_file("sendTo"))},[Jt,h(" แนบเอกสาร ")]))])]),m(C,{modelValue:t.data.comment,"onUpdate:modelValue":s[20]||(s[20]=o=>t.data.comment=o),name:"comment",rows:"3"},null,8,["modelValue"])]),e("div",Ht,[e("div",Qt,[Wt,m(d,{modelValue:t.data.process_type_id,"onUpdate:modelValue":s[21]||(s[21]=o=>t.data.process_type_id=o),name:"process_type_id",optionSelect:t.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),e("div",Xt,[Yt,m(d,{modelValue:t.data.permission_id,"onUpdate:modelValue":s[22]||(s[22]=o=>t.data.permission_id=o),name:"permission_id",optionSelect:t.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),e("div",Zt,[e("div",null,[e("button",{type:"button",class:"button button-danger",onClick:s[23]||(s[23]=o=>(t.data.sendTo=[],t.data.comment="",t.data.process_type_id="",t.data.permission_id=""))},[$t,h(" ยกเลิก ")])]),e("div",null,[e("button",{type:"button",onClick:s[24]||(s[24]=o=>i.add_booking_follows()),class:"button button-success"},[es,h(" เพิ่มการส่งต่อ ")])])]),t.data.booking_follows.length>0?(g(),f("div",ts)):L("",!0),(g(!0),f(U,null,q(t.data.booking_follows.filter(o=>o.flag!="delete"),(o,p)=>{var u;return g(),f("div",{class:"group-add",key:p},[e("div",ss,[e("div",as,"#"+b(p+1),1),e("img",{onClick:Ys=>i.delete_booking_follows(o,p),src:z,alt:"",class:"image-trash pointer"},null,8,os)]),e("div",is,[e("div",ls,"ส่งต่อ : "+b((o==null?void 0:o.department_name)||"-"),1),e("div",ds,"รูปแบบการดำเนินการ : "+b((o==null?void 0:o.process_type_name)||"-"),1),e("div",ns,"การมองเห็น : "+b((o==null?void 0:o.permission_name)||"-"),1)]),e("div",rs,"ความเห็น / คำสั่ง : "+b((o==null?void 0:o.comment)||"-"),1),e("div",cs,"เอกสารแนบ : "+b(((u=o==null?void 0:o.sendToFile)==null?void 0:u.filename)||"-"),1)])}),128))]),_s,e("div",ps,[e("div",us,[e("button",{type:"button",class:"button-danger",onClick:s[25]||(s[25]=o=>i.back())},[hs,h(" ปิด ")]),a.$route.params.id?(g(),f("button",{key:0,type:"button",class:"button-danger ms-3",onClick:s[26]||(s[26]=o=>i.delete_click())},[ms,h(" ลบ ")])):L("",!0),e("button",gs,[e("div",{class:"group-image",onClick:s[27]||(s[27]=o=>i.submitClick())},[fs,h(" ยืนยันรับเข้า ")])])]),e("div",bs,[e("button",{type:"submit",class:"button-primary",onClick:s[28]||(s[28]=o=>t.flagSave=1)},[vs,h(" บันทึกแบบร่าง ")]),e("button",{type:"submit",class:"button-success",onClick:s[29]||(s[29]=o=>t.flagSave=2),disabled:((n=t.data.sendTo)==null?void 0:n.length)<1},[ks,h(" บันทึกและส่งต่อ ")],8,ys)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])]),a.$route.params.id?(g(),f("div",ws,[e("div",Vs,[e("div",{class:"header pointer",onClick:s[30]||(s[30]=_=>(t.data.history.hide=!t.data.history.hide,i.historyClick(t.data.history.tab)))},[Ss,e("div",Cs,[F(e("i",Us,null,512),[[x,!t.data.history.hide]]),F(e("i",qs,null,512),[[x,t.data.history.hide]])])]),F(e("div",Ls,null,512),[[x,t.data.history.hide]]),F(e("div",As,[e("div",Ts,[e("div",{class:k(["pointer",t.data.history.tab==1?"active":""]),onClick:s[31]||(s[31]=_=>(t.data.history.tab=1,i.historyClick(1)))},[Fs,h("ทั้งหมด")],2),e("div",{class:k(["pointer",t.data.history.tab==2?"active":""]),onClick:s[32]||(s[32]=_=>(t.data.history.tab=2,i.historyClick(2)))},[xs,h("ความเห็นคำสั่ง")],2),e("div",{class:k(["pointer",t.data.history.tab==3?"active":""]),onClick:s[33]||(s[33]=_=>(t.data.history.tab=3,i.historyClick(3)))},[Ms,h("แก้ไขข้อมูล")],2)]),t.data.history.data.filter(_=>t.data.history.tab==2?_.type==2:t.data.history.tab==3?_.type==0||_.type==1:_).length>0?(g(!0),f(U,{key:0},q(t.data.history.data.filter(_=>t.data.history.tab==2?_.type==2:t.data.history.tab==3?_.type==0||_.type==1:_),(_,S)=>(g(),f("div",{class:k(["content-detail",S==0?"first":S==t.data.history.data.length-1?"end":""]),key:S},[e("div",Is,[e("div",Ds,"#"+b(S+1),1),e("div",{class:k(["topic",_.bookaction_name=="ความเห็นคำสั่ง"?"blue":_.bookaction_name=="แก้ไขหนังสือ"?"yellow":"green"])},[e("i",{class:k(["bi icon-size",_.bookaction_name=="ความเห็นคำสั่ง"?"bi-chat-left":_.bookaction_name=="แก้ไขหนังสือ"?"bi-pencil-square":"bi-plus-lg"])},null,2),h(" "+b(_.bookaction_name),1)],2),e("div",Es,[zs,h(" โดย "+b(_.updateBy)+" / "+b(_.subName),1)]),e("div",Rs," วันที่ "+b(_.create_date),1),e("div",js,[Ns,h(" "+b(_.create_time),1)])]),(g(!0),f(U,null,q(_.booking_remarks,(n,o)=>(g(),f("ul",{class:"detail-list",key:o},[F(e("button",{class:"button-file",onClick:p=>i.download_file({filename:n.filepath.split("/").pop(),link:n.link})},b(n.filepath.split("/").pop()),9,Ps),[[x,n.filepath]]),e("li",null,b(n.remark)+" "+b(n.comment),1)]))),128)),_.picture2?(g(),f("div",Os,[e("img",{src:_.picture2,alt:"",class:"image-size"},null,8,Bs),e("div",Ks,"("+b(_.fullname)+")",1),e("div",Js,b(_.positionName),1)])):L("",!0),S!=t.data.history.data.length-1?(g(),f("div",Gs)):L("",!0)],2))),128)):(g(),f("div",Hs,Ws))],512),[[x,t.data.history.hide]])])])):L("",!0)]),m(I,{modalAlert:t.modalAlert},null,8,["modalAlert"]),m(D,{show:t.showLoading},null,8,["show"])])}const aa=N(J,[["render",Xs]]);export{aa as default};
