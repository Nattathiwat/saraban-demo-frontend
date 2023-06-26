import{_ as z,r as w,o as m,c as g,a as t,j as h,t as b,b as u,d as j,w as T,v as F,n as v,F as S,h as V,i as x,g as D,k as I}from"./index-f6249681.js";import{_ as E}from"./ballot-duotone-f2459825.js";import{_ as R}from"./plus-circle-duotone-64bd32fe.js";import{_ as M}from"./trash-alt-duotone-12d94c28.js";import{_ as O,a as B}from"./x-solid-74fa126d.js";const N={name:"record-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{original_flag:!1,book_category_id:"",book_type_id:"",receive_date:"",receive_time:"",document_number:"",as_of_date:"",subject:"",secret_id:"",speed_id:"",send_to:"",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],main_docs_del:[],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"12",permission_id:"8",book_type:"",human_flag:!1,response_id:"",history:{hide:!1,data:[],tab:1},FileType:[],regis_id:""},optionSelect:{book_category_id:[],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]},optionSelectDefault:{book_category_id:[]}}},methods:{historyClick(o){this.showLoading=!0,this.axios.get(`/booking-note/${this.$route.params.id}/history`,{params:{book_type:this.$route.query.book_type}}).then(a=>{this.showLoading=!1,this.data.history.data=a.data.data,this.data.history.data.filter((l,r)=>{l.bookingRemarks.filter((e,i)=>{e.link=e.filepath?this.backendport+"/"+e.filepath:"",e.signature_img?this.axios({method:"get",url:this.backendport+"/"+e.signature_img,baseURL:"",responseType:"blob"}).then(n=>{const d=new Blob([n.data],{type:this.assetsUtils.getTypeFile(e.signature_img)});e.signature_img=URL.createObjectURL(d)}).catch(n=>{e.signature_img=new URL("/assets/signature_img-526e80c1.jpg",self.location).href}):e.signature_img=new URL("/assets/signature_img-526e80c1.jpg",self.location).href})})}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},delete_attachments(o,a){o.flag=="edit"?o.flag="delete":this.data.attachments.splice(a,1),this.data.attachments.length-this.data.attachments.filter(l=>l.flag=="delete").length<1&&this.data.attachments.push({filename:"",flag:"add"})},delete_main_docs(o,a){o.flag=="edit"?o.flag="delete":this.data.main_docs.splice(a,1)},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(o,a){o.flag=="edit"?o.flag="delete":this.data.booking_refers.splice(a,1),this.data.booking_refers.length-this.data.booking_refers.filter(l=>l.flag=="delete").length<1&&this.add_booking_refers()},booking_refers_click(o){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:o.receive_document_number}}).then(a=>{this.showLoading=!1,a.data.data.length>0?(o.book_refer_id=a.data.data[0].id,o.original_refer_id=a.data.data[0].id,o.book_type=a.data.data[0].book_type,o.desc=a.data.data[0].desc,o.receive_date=a.data.data[0].receive_date):(o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(a=>{o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},delete_click(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"บันทึกรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.axios.delete(`/booking-receive/receive-note/${o.$route.params.id}`).then(()=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.back()}}}).catch(a=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})}}},keyup_send_to(o){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user/receive-note",{params:{keyword:o.target.value,user_id:parseInt(localStorage.getItem("user_id")),subministry_id:parseInt(localStorage.getItem("subministry_id")),type:0}}).then(a=>{a.data.data&&(a.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.sendTo=a.data.data)})},add_booking_follows(){this.data.sendTo.filter(o=>{var a;if(!this.data.booking_follows.some(l=>l.department_id===o.value&&l.flag!="delete")){let l={department_id:parseInt(o.value),department_name:o.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:o.human_flag,response_id:parseInt(o.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(((a=this.data.sendToFile)==null?void 0:a.filename)||""))},response_type:o.type};this.optionSelect.process_type_id.find(r=>{r.value==this.data.process_type_id&&(l.process_type_name=r.name)}),this.optionSelect.permission_id.find(r=>{r.value==this.data.permission_id&&(l.permission_name=r.name)}),this.data.booking_follows.push(l)}})},delete_booking_follows(o,a){o.flag=="edit"?o.flag="delete":this.data.booking_follows.splice(a,1)},download_file(o){o.filename&&o.link&&this.axios({method:"get",url:o.link,baseURL:"",responseType:"blob"}).then(a=>{const l=new Blob([a.data],{type:this.assetsUtils.getTypeFile(o.filename)});window.open(URL.createObjectURL(l))})},upload_file(o){document.querySelector(`[name="${o}"]`).click()},file_attachment_add_change(o){for(var a=0;a<document.querySelector(`[name="${o}"]`).files.length;a++){let l=document.querySelector(`[name="${o}"]`).files[a];if(this.data.FileType.indexOf(l.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;let r={filename:l.name,type:l.type,link:URL.createObjectURL(l),size:(l.size/1024/1024).toFixed(2)+" MB",filesize:l.size.toString(),file:l,flag:"add"};this.data.attachments.push(r)}document.querySelector(`[name="${o}"]`).value=null},file_set_change(o,a,l){for(var r=0;r<document.querySelector(`[name="${o}"]`).files.length;r++){let e=document.querySelector(`[name="${o}"]`).files[r];if(this.data.FileType.indexOf(e.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(l=="main_docs"){if(e.type=="application/pdf"){let i={filename:e.name,type:e.type,link:URL.createObjectURL(e),size:(e.size/1024/1024).toFixed(2)+" MB",file:e};this.data[l][a]={...this.data[l][a],...i},document.querySelector(`[name="${o}"]`).value=null}}else if(l=="sendTo"){let i={filename:e.name,type:e.type,link:URL.createObjectURL(e),size:(e.size/1024/1024).toFixed(2)+" MB",file:e};this.data.sendToFile=i}else{let i={filename:e.name,type:e.type,link:URL.createObjectURL(e),size:(e.size/1024/1024).toFixed(2)+" MB",file:e};this.data[l][a]={...this.data[l][a],...i},document.querySelector(`[name="${o}"]`).value=null}}},back(){this.$router.push({name:"subministry-work.record-receive",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.upload_file_all()}}},upload_file_all(){let o=this.assetsUtils.currentDate(),a=[],l=[],r=[],e=[],i=[];this.data.main_docs.filter(n=>{if(n.file){let d=new FormData;d.append("file",n.file),d.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),a.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}else n.id&&i.push({filename:n.filename,filepath:n.filepath})}),this.data.attachments.filter(n=>{if(n.file){let d=new FormData;d.append("file",n.file),d.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),l.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}}),a.length>0&&this.axios.all([...a]).then(this.axios.spread((...n)=>{n.filter((d,p)=>{r.push({...this.data.main_docs[p],...d.data.data,filepath:d.data.data.path})}),a.length==r.length&&l.length==e.length&&this.upload_file_all2(e)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}),l.length>0&&this.axios.all([...l]).then(this.axios.spread((...n)=>{n.filter((d,p)=>{e.push({...this.data.attachments[p],...d.data.data,filepath:d.data.data.path})}),a.length==r.length&&l.length==e.length&&this.upload_file_all2(e)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}),a.length<1&&l.length<1&&this.upload_file_all2(e)},upload_file_all2(o){let a=this.assetsUtils.currentDate(),l=[],r=[];this.data.main_docs.filter(e=>{if(e.file){let i=new FormData;i.append("file",e.file),i.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),l.push(this.axios.post("/upload/single",i,{headers:{"Content-Type":"multipart/form-data"}}))}}),l.length>0?this.axios.all([...l]).then(this.axios.spread((...e)=>{e.filter((i,n)=>{r.push({...this.data.main_docs[n],...i.data.data,filepath:i.data.data.path})}),l.length==r.length&&this.upload_file_all3(r,o)})).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}}):this.upload_file_all3(r,o)},upload_file_all3(o,a){var r;let l=this.assetsUtils.currentDate();if((r=this.data.sendToFile)!=null&&r.filename){let e=new FormData;e.append("file",this.data.sendToFile.file),e.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),this.axios.post("/upload/single",e,{headers:{"Content-Type":"multipart/form-data"}}).then(i=>{this.data.attach_filename=i.data.data.filename,this.data.attach_filepath=i.data.data.path,this.upload_file_all4(o,a)}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}else this.upload_file_all4(o,a)},upload_file_all4(o,a){let l=this.assetsUtils.currentDate(),r=[],e=[];this.data.booking_follows.filter(i=>{var n;if((n=i.sendToFile)!=null&&n.filename){let d=new FormData;d.append("file",i.sendToFile.file),d.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),r.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}}),r.length>0?this.axios.all([...r]).then(this.axios.spread((...i)=>{i.filter((n,d)=>{this.data.booking_follows[d].attach_filepath=n.data.data.path,this.data.booking_follows[d].attach_filename=n.data.data.filename,e.push({...this.data.booking_follows[d],...n.data.data,filepath:n.data.data.path})}),r.length==e.length&&this.call_api_save(o,a)})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}):this.call_api_save(o,a)},call_api_save([...o],[],a){let l=this,r="";this.data.tag.filter(i=>{r+=i.name+","}),r=r.slice(0,-1),this.data.sendTo.filter(i=>{if(!this.data.booking_follows.some(n=>n.department_id===i.value&&n.flag!="delete")){let n={department_id:parseInt(i.value),department_name:i.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:i.human_flag,response_id:parseInt(i.value),response_type:i.type,attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename,sendToFile:{filename:this.data.attach_filename}};this.optionSelect.process_type_id.find(d=>{d.value==this.data.process_type_id&&(n.process_type_name=d.name)}),this.optionSelect.permission_id.find(d=>{d.value==this.data.permission_id&&(n.permission_name=d.name)}),this.data.booking_follows.push(n)}});let e={original_flag:this.data.original_flag,regis_id:parseInt(this.data.book_category_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:r,main_docs:[...o,...this.data.main_docs_del],attachments:a,booking_refers:this.data.booking_refers.filter(i=>i.book_refer_id),booking_follows:this.data.booking_follows,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":"",book_type:parseInt(this.$route.query.book_type),receive_regis_id:parseInt(this.$route.query.regis_id)};this.edit&&(this.flagSave==1?(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,e).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,e).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})))},api_detail(){this.showLoading=!0,this.axios.get(`/booking-receive/receive-note/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id,response_id:this.$route.query.response_id}}).then(o=>{var l,r,e,i,n;this.showLoading=!1;let a=[];o.data.data.main_docs.filter(d=>{a.push({...d,flag:"delete"})}),o.data.data={...this.data,...o.data.data,main_docs_del:a},this.data=JSON.parse(JSON.stringify(o.data.data)),this.data.tag=[],(l=o.data.data.tag)==null||l.split(",").filter(d=>{d&&this.data.tag.push({value:"",name:d})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],o.data.data.booking_refers.filter(d=>{d.flag="edit",this.axios.get(`/master-data/book-refer/${d.book_type}/${d.id}`).then(p=>{this.data.booking_refers.push({...p.data.data,...d})}).catch(p=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})}),this.data.main_docs.filter(d=>(d.flag="edit",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.attachments.filter(d=>(d.flag="edit",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.contracts.filter(d=>(d.flag="edit",d)),this.data.booking_follows.filter(d=>(d.flag="edit",d)),this.data.booking_follows=[],(((r=this.data.main_docs)==null?void 0:r.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}]),(((e=this.data.attachments)==null?void 0:e.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(((i=this.data.contracts)==null?void 0:i.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:"",flag:"add"}]),(((n=o.data.data.booking_refers)==null?void 0:n.length)<1||!o.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}])}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},api_master(){this.showLoading=!0;const o=this.axios.get("/master-data/book-type-note"),a=this.axios.get("/master-data/secret"),l=this.axios.get("/master-data/speed"),r=this.axios.get("/master-data/process-type"),e=this.axios.get("/master-data/permission-type"),i=this.axios.get("/master-data/department"),n=this.axios.get("/master-data/book-category",{params:{book_type:1}}),d=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([o,a,l,r,e,i,n,d]).then(this.axios.spread((...p)=>{this.showLoading=!1;const C=p[0],L=p[1],U=p[2],q=p[3],A=p[4],c=p[5],k=p[6],y=p[7];C.data.data.filter(s=>(s.value=s.id,s.name=s.name,s)),L.data.data.filter(s=>(s.value=s.id,s.name=s.desc,s)),U.data.data.filter(s=>(s.value=s.id,s.name=s.desc,s)),q.data.data.filter(s=>(s.value=s.id,s.name=s.desc,s)),A.data.data.filter(s=>(s.value=s.id,s.name=s.desc,s)),c.data.data.filter(s=>(s.value=s.id,s.name=s.department_full_name,s)),k.data.data.filter(s=>(s.value=s.id,s.name=s.name,s)),this.data.FileType=[],y.data.data.filter(s=>{s.active_flag==1&&this.data.FileType.push(s.content_type)}),this.optionSelect.book_type_id=C.data.data,this.optionSelect.secret_id=L.data.data,this.optionSelect.speed_id=U.data.data,this.optionSelect.process_type_id=q.data.data,this.optionSelect.permission_id=A.data.data,this.optionSelect.department_id=c.data.data,this.optionSelectDefault.book_category_id=k.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(p=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})},submitClick(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการรับเข้าหรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){let a={regis_id:parseInt(o.data.book_category_id),book_type:4,human_flag:o.data.human_flag,response_id:parseInt(o.$route.query.response_id),user_id:parseInt(localStorage.getItem("user_id")),page_flag:"owner",flag:"confirm"};o.showLoading=!0,o.axios.put(`/booking-receive/${o.$route.params.id}`,a).then(()=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"success",title:"ยืนยันรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.back()}}}).catch(l=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}}}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},P={class:"booking-receive-detail"},J={class:"group-overflow"},K={class:"detail"},G={class:"group-head"},H={class:"group-first"},Q=t("img",{src:E,alt:"",class:"icon-size"},null,-1),W={class:"name"},X=t("div",{class:"line"},null,-1),Y={class:"group-detail"},Z={class:"group-between"},$={class:"group-input left"},ee=t("div",{class:"name"},[h("ทะเบียนบันทึกข้อความ "),t("span",{class:"required"},"*")],-1),te={class:"group-input left"},se=t("div",{class:"name"},[h("ลงวันที่ "),t("span",{class:"required"},"*")],-1),ae={class:"group-input left"},oe=t("div",{class:"name"},[h("วันที่ส่งมา "),t("span",{class:"required"},"*")],-1),ie={class:"group-input"},le=t("div",{class:"name"},[h("วันที่กองรับเรื่อง "),t("span",{class:"required"},"*")],-1),de={class:"group-between"},ne={class:"group-input left"},re=t("div",{class:"name"},[h("ชนิดของหนังสือ "),t("span",{class:"required"},"*")],-1),ce={class:"group-between"},_e={class:"group-input left"},he=t("div",{class:"name"},[h("ชั้นความลับ "),t("span",{class:"required"},"*")],-1),pe={class:"group-input"},ue=t("div",{class:"name"},[h("ความเร่งด่วน "),t("span",{class:"required"},"*")],-1),fe={class:"group-between"},me={class:"group-input left"},ge=t("div",{class:"name"},[h("ชื่อเรื่อง "),t("span",{class:"required"},"*")],-1),be={class:"group-input left"},ye=t("div",{class:"name"},[h("เรียน "),t("span",{class:"required"},"*")],-1),ve={class:"group-input left"},ke=t("div",{class:"name"},"รายละเอียดหนังสือ",-1),we={class:"group-input"},Se=t("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),Ve={class:"group-input d-flex align-items-center"},Ce=t("div",{class:"name"},"อ้างอิงถึง",-1),Le=["disabled"],Te=t("div",{class:"group-image"},[t("img",{src:R,alt:"",class:"icon-plus"}),h(" เพิ่มเอกสารอ้างอิง ")],-1),Fe=[Te],Ue={class:"group-input left"},qe={class:"group-input left"},Ae={class:"group-input d-flex"},xe=["onClick"],Me=t("img",{src:M,alt:"",class:"image-trash pointer"},null,-1),Ie=[Me],De=t("div",{class:"group-input"},null,-1),Re=t("div",{class:"line"},null,-1),ze={class:"group-detail"},je={class:"group-between"},Ee={class:"group-input left"},Oe=t("div",{class:"name"},"บันทึกต้นเรื่อง",-1),Be={class:"group-input-file"},Ne=["onClick"],Pe=["onClick"],Je=["onChange","name"],Ke=["onClick"],Ge=t("i",{class:"bi bi-eye icon-eye"},null,-1),He=[Ge],Qe=["disabled","onClick"],We=t("img",{src:M,alt:"",class:"image-trash"},null,-1),Xe=[We],Ye={class:"group-input"},Ze={class:"group-input d-flex align-items-center"},$e=t("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),et=["disabled"],tt=t("div",{class:"group-image"},[t("img",{src:R,alt:"",class:"icon-plus"}),h(" เพิ่มไฟล์ ")],-1),st=[tt],at={class:"group-input-file"},ot=["onClick"],it=["onClick"],lt=["onChange","name"],dt=["onClick"],nt=t("i",{class:"bi bi-eye icon-eye"},null,-1),rt=[nt],ct=["disabled","onClick"],_t=t("img",{src:M,alt:"",class:"image-trash"},null,-1),ht=[_t],pt=t("div",{class:"line"},null,-1),ut={class:"send-to"},ft={class:"group-input"},mt=t("div",{class:"name"},"ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) ",-1),gt={class:"group-input left"},bt={class:"name d-flex justify-content-between"},yt=t("div",null,"ความเห็น / คำสั่ง",-1),vt=t("img",{src:O,alt:"",class:"icon-paperclip"},null,-1),kt=t("img",{src:B,alt:"",class:"image-x"},null,-1),wt={class:"group-between"},St={class:"group-input left"},Vt=t("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Ct={class:"group-input"},Lt=t("div",{class:"name"},"การมองเห็น",-1),Tt={class:"d-flex align-items-center justify-content-between"},Ft=t("img",{src:D,alt:"times-circle",class:"icon-times-circle"},null,-1),Ut=t("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),qt={key:0,class:"line mt-3"},At={class:"d-flex justify-content-between"},xt={class:"title"},Mt=["onClick"],It={class:"d-flex ms-2 mt-2"},Dt={class:"name"},Rt={class:"name ms-5"},zt={class:"name ms-5"},jt={class:"name ms-2 mt-1"},Et={class:"name ms-2 mt-1"},Ot=t("div",{class:"line mt-4"},null,-1),Bt={class:"group-footer"},Nt={class:"footer-left d-flex"},Pt=t("img",{src:D,alt:"times-circle",class:"icon-times-circle"},null,-1),Jt={class:"footer-right"},Kt={type:"button",class:"confirm-receive"},Gt=t("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),Ht=["disabled"],Qt=t("img",{src:I,alt:"times-circle",class:"icon-check-circle"},null,-1),Wt={key:0,class:"detail-history"},Xt={class:"history"},Yt=t("div",{class:"group-left"},[t("i",{class:"bi bi-clock icon-size"}),t("div",{class:"name"},"ประวัติการแก้ไข")],-1),Zt={class:"group-right"},$t={class:"bi bi-chevron-right icon-angle"},es={class:"bi bi-chevron-down icon-angle"},ts={class:"line"},ss={class:"content"},as={class:"content-head"},os=t("i",{class:"bi bi-border-all icon-size"},null,-1),is=t("i",{class:"bi bi-chat-left icon-size"},null,-1),ls=t("i",{class:"bi bi-pencil-square icon-size"},null,-1),ds={class:"detail-head"},ns={class:"number"},rs={class:"create"},cs=t("i",{class:"bi bi-person icon-size"},null,-1),_s={class:"date"},hs={class:"time"},ps=t("i",{class:"bi bi-clock icon-size"},null,-1),us=["onClick"],fs={key:0,class:"detail-signager"},ms=["src"],gs={key:0,class:"line"},bs={key:1,class:"content-detail first end"},ys=t("div",{class:"detail-head"},[t("div",{class:"topic"},"ไม่มีข้อมูล")],-1),vs=[ys];function ks(o,a,l,r,e,i){const n=w("cpn-select"),d=w("cpn-datepicker"),p=w("cpn-textArea"),C=w("cpn-input-tags"),L=w("cpn-input"),U=w("Form"),q=w("cpn-modal-alert"),A=w("cpn-loading");return m(),g("div",P,[t("div",J,[t("div",K,[t("div",G,[t("div",H,[Q,t("div",W,[h(b(e.edit?"แก้ไขบันทึกรับเข้า":"สร้างบันทึกรับเข้า")+" ",1),t("label",null,b(e.data.document_number),1)])])]),X,u(U,{onSubmit:i.on_submit,onInvalidSubmit:o.onInvalidSubmit},{default:j(()=>{var c,k,y;return[t("div",Y,[t("div",Z,[t("div",$,[ee,u(n,{modelValue:e.data.book_category_id,"onUpdate:modelValue":a[0]||(a[0]=s=>e.data.book_category_id=s),name:"book_category_id",rules:"required",disabled:e.edit,optionSelect:e.optionSelectDefault.book_category_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),t("div",te,[se,u(d,{modelValue:e.data.as_of_date,"onUpdate:modelValue":a[1]||(a[1]=s=>e.data.as_of_date=s),name:"as_of_date",disabled:e.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),t("div",ae,[oe,u(d,{modelValue:e.data.create_date,"onUpdate:modelValue":a[2]||(a[2]=s=>e.data.create_date=s),name:"create_date",rules:"required",disabled:e.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),t("div",ie,[le,u(d,{modelValue:e.data.receive_date,"onUpdate:modelValue":a[3]||(a[3]=s=>e.data.receive_date=s),name:"receive_date",rules:"required",disabled:e.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])]),t("div",de,[t("div",ne,[re,u(n,{modelValue:e.data.book_type_id,"onUpdate:modelValue":a[4]||(a[4]=s=>e.data.book_type_id=s),name:"book_type_id",disabled:e.edit,rules:"required",optionSelect:e.optionSelect.book_type_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),t("div",ce,[t("div",_e,[he,u(n,{modelValue:e.data.secret_id,"onUpdate:modelValue":a[5]||(a[5]=s=>e.data.secret_id=s),name:"secret_id",rules:"required",optionSelect:e.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:e.edit},null,8,["modelValue","optionSelect","disabled"])]),t("div",pe,[ue,u(n,{modelValue:e.data.speed_id,"onUpdate:modelValue":a[6]||(a[6]=s=>e.data.speed_id=s),name:"speed_id",rules:"required",optionSelect:e.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:e.edit},null,8,["modelValue","optionSelect","disabled"])])])]),t("div",fe,[t("div",me,[ge,u(p,{modelValue:e.data.subject,"onUpdate:modelValue":a[7]||(a[7]=s=>e.data.subject=s),name:"subject",rules:"required",disabled:e.edit,rows:"1"},null,8,["modelValue","disabled"])])]),t("div",be,[ye,u(p,{modelValue:e.data.send_to,"onUpdate:modelValue":a[8]||(a[8]=s=>e.data.send_to=s),name:"send_to",rows:"1",disabled:e.edit},null,8,["modelValue","disabled"])]),t("div",ve,[ke,u(p,{modelValue:e.data.book_desc,"onUpdate:modelValue":a[9]||(a[9]=s=>e.data.book_desc=s),name:"book_desc",disabled:e.edit,rows:"1"},null,8,["modelValue","disabled"])]),t("div",we,[Se,u(C,{modelValue:e.data.tag,"onUpdate:modelValue":a[10]||(a[10]=s=>e.data.tag=s),name:"tag"},null,8,["modelValue"])]),t("div",Ve,[Ce,t("button",{type:"button",class:"add-booking-receive",onClick:a[11]||(a[11]=s=>i.add_booking_refers()),disabled:e.edit},Fe,8,Le)]),(m(!0),g(S,null,V(e.data.booking_refers.filter(s=>s.flag!="delete"),(s,_)=>(m(),g("div",{class:"group-between",key:_},[t("div",Ue,[u(L,{modelValue:s.receive_document_number,"onUpdate:modelValue":f=>s.receive_document_number=f,name:`codeRefers${_}`,type:"text",searchFlag:!0,disabled:e.edit,onSearchClick:f=>i.booking_refers_click(s),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","disabled","onSearchClick"])]),t("div",qe,[u(L,{modelValue:s.desc,"onUpdate:modelValue":f=>s.desc=f,name:`nameRefers${_}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),t("div",Ae,[u(d,{modelValue:s.receive_date,"onUpdate:modelValue":f=>s.receive_date=f,name:`dateRefers${_}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),t("button",{type:"button",onClick:f=>i.delete_booking_refers(s,_),class:"button-delete ms-3"},Ie,8,xe)])]))),128)),De]),Re,t("div",ze,[t("div",je,[t("div",Ee,[Oe,(m(!0),g(S,null,V(e.data.main_docs.filter(s=>s.flag!="delete"),(s,_)=>(m(),g("div",{class:"d-flex mb-3",key:_},[t("div",Be,[t("button",{type:"button",class:v([e.edit?"none-pointer":"","button-file"]),onClick:f=>e.edit?"":i.upload_file(`main_docs${_}`)},[t("span",{class:v(s.filename?"":"no-data")},b(s.filename?s.filename:"บันทึกต้นเรื่อง"),3)],10,Ne),t("div",{class:v(e.edit?"text disabled":"text pointer"),onClick:f=>e.edit?"":i.upload_file(`main_docs${_}`)},"แนบเอกสาร",10,Pe),t("input",{type:"file",onChange:f=>i.file_set_change(`main_docs${_}`,_,"main_docs"),name:`main_docs${_}`,style:{display:"none"},accept:"application/pdf"},null,40,Je)]),t("button",{type:"button",onClick:f=>i.download_file(s),class:"button-eye"},He,8,Ke),t("button",{type:"button",class:"del-department-3",disabled:e.edit,onClick:f=>e.data.main_docs.length>1?e.data.main_docs.splice(_,1):s.filename=""},Xe,8,Qe)]))),128))]),t("div",Ye,[t("div",Ze,[$e,t("button",{type:"button",class:"add-booking-receive",disabled:e.edit,onClick:a[12]||(a[12]=s=>i.upload_file("fileAttachment"))},st,8,et),t("input",{type:"file",multiple:"",onChange:a[13]||(a[13]=s=>i.file_attachment_add_change("fileAttachment")),name:"fileAttachment",style:{display:"none"}},null,32)]),(m(!0),g(S,null,V(e.data.attachments.filter(s=>s.flag!="delete"),(s,_)=>(m(),g("div",{class:"d-flex mb-3",key:_},[t("div",at,[t("button",{type:"button",class:v([e.edit?"none-pointer":"","button-file"]),onClick:f=>e.edit?"":i.upload_file(`attachments${_}`)},[t("span",{class:v(s.filename?"":"no-data")},b(s.filename?s.filename:"สิ่งที่ส่งมาด้วย"),3)],10,ot),t("div",{class:v(e.edit?"text disabled":"text pointer"),onClick:f=>e.edit?"":i.upload_file(`attachments${_}`)},"แนบเอกสาร",10,it),t("input",{type:"file",onChange:f=>i.file_set_change(`attachments${_}`,_,"attachments"),name:`attachments${_}`,style:{display:"none"}},null,40,lt)]),t("button",{type:"button",onClick:f=>i.download_file(s),class:"button-eye"},rt,8,dt),t("button",{type:"button",class:"del-department-3",disabled:e.edit,onClick:f=>i.delete_attachments(s,_)},ht,8,ct)]))),128))])])]),pt,t("div",ut,[t("div",ft,[mt,u(C,{modelValue:e.data.sendTo,"onUpdate:modelValue":a[14]||(a[14]=s=>e.data.sendTo=s),flagSearch:!0,optionSelect:e.optionSelect.sendTo,onKeyup:i.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),t("div",gt,[t("div",bt,[yt,t("div",null,[t("input",{type:"file",onChange:a[15]||(a[15]=s=>i.file_set_change("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(c=e.data.sendToFile)!=null&&c.filename?(m(),g("div",{key:1,class:"del-comment pointer",onClick:a[17]||(a[17]=s=>e.data.sendToFile.filename="")},[h(b((k=e.data.sendToFile)==null?void 0:k.filename)+" ",1),kt])):(m(),g("button",{key:0,type:"button",class:"button-con pointer",onClick:a[16]||(a[16]=s=>i.upload_file("sendTo"))},[vt,h(" แนบเอกสาร ")]))])]),u(p,{modelValue:e.data.comment,"onUpdate:modelValue":a[18]||(a[18]=s=>e.data.comment=s),name:"comment",rows:"3"},null,8,["modelValue"])]),t("div",wt,[t("div",St,[Vt,u(n,{modelValue:e.data.process_type_id,"onUpdate:modelValue":a[19]||(a[19]=s=>e.data.process_type_id=s),name:"process_type_id",optionSelect:e.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),t("div",Ct,[Lt,u(n,{modelValue:e.data.permission_id,"onUpdate:modelValue":a[20]||(a[20]=s=>e.data.permission_id=s),name:"permission_id",optionSelect:e.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),t("div",Tt,[t("div",null,[t("button",{type:"button",class:"button button-danger",onClick:a[21]||(a[21]=s=>(e.data.sendTo=[],e.data.comment="",e.data.process_type_id="",e.data.permission_id=""))},[Ft,h(" ยกเลิก ")])]),t("div",null,[t("button",{type:"button",onClick:a[22]||(a[22]=s=>i.add_booking_follows()),class:"button button-success"},[Ut,h(" เพิ่มการส่งต่อ ")])])]),e.data.booking_follows.length>0?(m(),g("div",qt)):x("",!0),(m(!0),g(S,null,V(e.data.booking_follows.filter(s=>s.flag!="delete"),(s,_)=>{var f;return m(),g("div",{class:"group-add",key:_},[t("div",At,[t("div",xt,"#"+b(_+1),1),t("img",{onClick:ws=>i.delete_booking_follows(s,_),src:M,alt:"",class:"image-trash pointer"},null,8,Mt)]),t("div",It,[t("div",Dt,"ส่งต่อ : "+b((s==null?void 0:s.department_name)||"-"),1),t("div",Rt,"รูปแบบการดำเนินการ : "+b((s==null?void 0:s.process_type_name)||"-"),1),t("div",zt,"การมองเห็น : "+b((s==null?void 0:s.permission_name)||"-"),1)]),t("div",jt,"ความเห็น / คำสั่ง : "+b((s==null?void 0:s.comment)||"-"),1),t("div",Et,"เอกสารแนบ : "+b(((f=s==null?void 0:s.sendToFile)==null?void 0:f.filename)||"-"),1)])}),128))]),Ot,t("div",Bt,[t("div",Nt,[t("button",{type:"button",class:"button-danger",onClick:a[23]||(a[23]=s=>i.back())},[Pt,h(" ปิด ")])]),t("div",Jt,[t("button",Kt,[t("div",{class:"group-image",onClick:a[24]||(a[24]=s=>i.submitClick())},[Gt,h(" ยืนยันรับเข้า ")])]),t("button",{type:"submit",class:"button-success",onClick:a[25]||(a[25]=s=>e.flagSave=2),disabled:((y=e.data.sendTo)==null?void 0:y.length)<1},[Qt,h(" บันทึกและส่งต่อ ")],8,Ht)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])]),o.$route.params.id?(m(),g("div",Wt,[t("div",Xt,[t("div",{class:"header pointer",onClick:a[26]||(a[26]=c=>(e.data.history.hide=!e.data.history.hide,i.historyClick(e.data.history.tab)))},[Yt,t("div",Zt,[T(t("i",$t,null,512),[[F,!e.data.history.hide]]),T(t("i",es,null,512),[[F,e.data.history.hide]])])]),T(t("div",ts,null,512),[[F,e.data.history.hide]]),T(t("div",ss,[t("div",as,[t("div",{class:v(["pointer",e.data.history.tab==1?"active":""]),onClick:a[27]||(a[27]=c=>(e.data.history.tab=1,i.historyClick(1)))},[os,h("ทั้งหมด")],2),t("div",{class:v(["pointer",e.data.history.tab==2?"active":""]),onClick:a[28]||(a[28]=c=>(e.data.history.tab=2,i.historyClick(2)))},[is,h("ความเห็นคำสั่ง")],2),t("div",{class:v(["pointer",e.data.history.tab==3?"active":""]),onClick:a[29]||(a[29]=c=>(e.data.history.tab=3,i.historyClick(3)))},[ls,h("แก้ไขข้อมูล")],2)]),e.data.history.data.filter(c=>e.data.history.tab==2?c.type==2:e.data.history.tab==3?c.type==0||c.type==1:c).length>0?(m(!0),g(S,{key:0},V(e.data.history.data.filter(c=>e.data.history.tab==2?c.type==2:e.data.history.tab==3?c.type==0||c.type==1:c),(c,k)=>(m(),g("div",{class:v(["content-detail",k==0?"first":k==e.data.history.data.length-1?"end":""]),key:k},[t("div",ds,[t("div",ns,"#"+b(e.data.history.data.filter(y=>e.data.history.tab==2?y.type==2:e.data.history.tab==3?y.type==0||y.type==1:y).length-k),1),t("div",{class:v(["topic",c.bookactionname=="ความเห็นคำสั่ง"?"blue":c.bookactionname=="แก้ไขหนังสือ"?"yellow":"green"])},[t("i",{class:v(["bi icon-size",c.bookactionname=="ความเห็นคำสั่ง"?"bi-chat-left":c.bookactionname=="แก้ไขหนังสือ"?"bi-pencil-square":"bi-plus-lg"])},null,2),h(" "+b(c.bookactionname),1)],2),t("div",rs,[cs,h(" โดย "+b(c.updateBy)+" / "+b(c.subName),1)]),t("div",_s," วันที่ "+b(c.createDate),1),t("div",hs,[ps,h(" "+b(c.createTime),1)])]),(m(!0),g(S,null,V(c.bookingRemarks,(y,s)=>(m(),g("ul",{class:"detail-list",key:s},[T(t("button",{class:"button-file",onClick:_=>i.download_file({filename:y.filepath.split("/").pop(),link:y.link})},b(y.filepath.split("/").pop()),9,us),[[F,y.filepath]]),t("li",null,[h(b(y.remark)+" "+b(y.comment)+" ",1),y.signature_img&&c.bookactionname=="ความเห็นคำสั่ง"?(m(),g("div",fs,[t("img",{src:y.signature_img,alt:"",class:"image-size"},null,8,ms)])):x("",!0)])]))),128)),k!=e.data.history.data.length-1?(m(),g("div",gs)):x("",!0)],2))),128)):(m(),g("div",bs,vs))],512),[[F,e.data.history.hide]])])])):x("",!0)]),u(q,{modalAlert:e.modalAlert},null,8,["modalAlert"]),u(A,{show:e.showLoading},null,8,["show"])])}const Fs=z(N,[["render",ks]]);export{Fs as default};
