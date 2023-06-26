import{_ as O,r as w,o as g,c as f,a as t,j as h,t as b,b as m,d as B,w as U,v as q,n as k,F as T,h as F,i as L,g as j,k as z}from"./index-a7a524a3.js";import{_ as N}from"./ballot-duotone-f2459825.js";import{_ as E}from"./plus-circle-duotone-64bd32fe.js";import{_ as R}from"./trash-alt-duotone-12d94c28.js";import{_ as P,a as K}from"./x-solid-74fa126d.js";const J={name:"booking-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{history:{hide:!1,data:[],tab:1},original_flag:!0,receive_regis_id:"",book_type_id:"",receive_date:this.assetsUtils.currentDate(),receive_time:this.assetsUtils.currentTime(),document_number:"",as_of_date:this.assetsUtils.currentDate(),subject:"",secret_id:"13",speed_id:"12",send_to:"",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],sendToFile:[{filename:""}],main_docs_del:[],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"12",permission_id:"9",book_type:"",regis_id:"",FileType:[],status:0},optionSelect:{receive_regis_id:[],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]}}},methods:{historyClick(a){this.showLoading=!0,this.axios.get(`/booking-receive/${this.$route.params.id}/history`,{params:{book_type:this.$route.query.book_type,department_id:parseInt(localStorage.getItem("department_id"))}}).then(s=>{this.showLoading=!1,this.data.history.data=s.data.data,this.data.history.data.filter((i,c)=>{i.booking_remarks.filter((e,l)=>{e.link=e.filepath?this.backendport+"/"+e.filepath:"",e.signature_img?this.axios({method:"get",url:this.backendport+"/"+e.signature_img,baseURL:"",responseType:"blob"}).then(r=>{const n=new Blob([r.data],{type:this.assetsUtils.getTypeFile(e.signature_img)});e.signature_img=URL.createObjectURL(n)}).catch(r=>{e.signature_img=new URL("/assets/signature_img-526e80c1.jpg",self.location).href}):e.signature_img=new URL("/assets/signature_img-526e80c1.jpg",self.location).href})})}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},delete_attachments(a,s){a.flag=="edit"?a.flag="delete":this.data.attachments.splice(s,1),this.data.attachments.length-this.data.attachments.filter(i=>i.flag=="delete").length<1&&this.data.attachments.push({filename:"",flag:"add"})},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(a,s){a.flag=="edit"?a.flag="delete":this.data.booking_refers.splice(s,1),this.data.booking_refers.length-this.data.booking_refers.filter(i=>i.flag=="delete").length<1&&this.add_booking_refers()},booking_refers_click(a){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:a.receive_document_number}}).then(s=>{this.showLoading=!1,s.data.data.length>0?(a.book_refer_id=s.data.data[0].id,a.original_refer_id=s.data.data[0].id,a.book_type=s.data.data[0].book_type,a.desc=s.data.data[0].desc,a.receive_date=s.data.data[0].receive_date):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(s=>{a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},delete_click(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"หนังสือรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.axios.delete(`/booking-receive/${a.$route.params.id}`).then(()=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(s=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}}},keyup_department(a){this.optionSelect.department_id=[],this.axios.get("/master-data/department-user",{params:{keyword:a.target.value,type:1}}).then(s=>{s.data.data&&(s.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i.human_flag=i.human_flag,i.response_type=i.type,i)),this.optionSelect.department_id=s.data.data)})},keyup_send_to(a){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user/booking-note-out",{params:{keyword:a.target.value,department_id:localStorage.getItem("department_id")}}).then(s=>{s.data.data&&(s.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i.human_flag=i.human_flag,i.response_type=i.type,i)),this.optionSelect.sendTo=s.data.data)})},add_booking_follows(){this.data.sendTo.filter(a=>{var s;if(!this.data.booking_follows.some(i=>i.department_id===a.value&&i.flag!="delete")){let i={...a,department_id:parseInt(a.value),department_name:a.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:a.human_flag,response_id:parseInt(a.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(((s=this.data.sendToFile)==null?void 0:s.filename)||""))},response_type:a.type};this.optionSelect.process_type_id.find(c=>{c.value==this.data.process_type_id&&(i.process_type_name=c.name)}),this.optionSelect.permission_id.find(c=>{c.value==this.data.permission_id&&(i.permission_name=c.name)}),this.data.booking_follows.push(i)}})},delete_booking_follows(a,s){a.flag=="edit"?a.flag="delete":this.data.booking_follows.splice(s,1)},download_file(a){a.filename&&a.link&&this.axios({method:"get",url:a.link,baseURL:"",responseType:"blob"}).then(s=>{const i=new Blob([s.data],{type:this.assetsUtils.getTypeFile(a.filename)});window.open(URL.createObjectURL(i))})},upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_attachment_add_change(a){for(var s=0;s<document.querySelector(`[name="${a}"]`).files.length;s++){let i=document.querySelector(`[name="${a}"]`).files[s];if(this.data.FileType.indexOf(i.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;let c={filename:i.name,type:i.type,link:URL.createObjectURL(i),size:(i.size/1024/1024).toFixed(2)+" MB",filesize:i.size.toString(),file:i,flag:"add"};this.data.attachments.push(c)}document.querySelector(`[name="${a}"]`).value=null},file_set_change(a,s,i){for(var c=0;c<document.querySelector(`[name="${a}"]`).files.length;c++){let e=document.querySelector(`[name="${a}"]`).files[c];if(this.data.FileType.indexOf(e.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(i=="main_docs"){if(e.type=="application/pdf"){let l={filename:e.name,type:e.type,link:URL.createObjectURL(e),size:(e.size/1024/1024).toFixed(2)+" MB",file:e};this.data[i][s]={...this.data[i][s],...l},document.querySelector(`[name="${a}"]`).value=null}}else if(i=="sendTo"){let l={filename:e.name,type:e.type,link:URL.createObjectURL(e),size:(e.size/1024/1024).toFixed(2)+" MB",file:e};this.data.sendToFile=l}else{let l={filename:e.name,type:e.type,link:URL.createObjectURL(e),size:(e.size/1024/1024).toFixed(2)+" MB",file:e};this.data[i][s]={...this.data[i][s],...l},document.querySelector(`[name="${a}"]`).value=null}}},back(){this.$router.push({name:"my-work.booking-receive",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":this.flagSave==3?"บันทึก":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.upload_file_all()}}},upload_file_all(){let a=this.assetsUtils.currentDate(),s=[],i=[],c=[],e=[],l=[];this.data.main_docs.filter(r=>{if(r.file){let n=new FormData;n.append("file",r.file),n.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),s.push(this.axios.post("/upload/single",n,{headers:{"Content-Type":"multipart/form-data"}}))}else r.id&&l.push({filename:r.filename,filepath:r.filepath})}),this.data.attachments.filter(r=>{if(r.file){let n=new FormData;n.append("file",r.file),n.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),i.push(this.axios.post("/upload/single",n,{headers:{"Content-Type":"multipart/form-data"}}))}}),s.length>0&&this.axios.all([...s]).then(this.axios.spread((...r)=>{r.filter((n,y)=>{c.push({...this.data.main_docs[y],...n.data.data,filepath:n.data.data.path})}),s.length==c.length&&i.length==e.length&&this.call_api_save([...c,...l],e)})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}}),i.length>0&&this.axios.all([...i]).then(this.axios.spread((...r)=>{r.filter((n,y)=>{e.push({...this.data.attachments[y],...n.data.data,filepath:n.data.data.path})}),s.length==c.length&&i.length==e.length&&this.call_api_save([...c,...l],e)})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}}),s.length<1&&i.length<1&&this.call_api_save([...l],[])},upload_file_all2(a){let s=this.assetsUtils.currentDate(),i=[],c=[];this.data.main_docs.filter(e=>{if(e.file){let l=new FormData;l.append("file",e.file),l.append("dst",`${s.split("/")[0]+"-"+s.split("/")[1]+"-"+s.split("/")[2]}`),i.push(this.axios.post("/upload/single",l,{headers:{"Content-Type":"multipart/form-data"}}))}}),i.length>0?this.axios.all([...i]).then(this.axios.spread((...e)=>{e.filter((l,r)=>{c.push({...this.data.main_docs[r],...l.data.data,filepath:l.data.data.path})}),i.length==c.length&&this.call_api_save(c,a)})).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}}):this.call_api_save(c,a)},upload_file_all3(a,s){var c;let i=this.assetsUtils.currentDate();if((c=this.data.sendToFile)!=null&&c.filename){let e=new FormData;e.append("file",this.data.sendToFile.file),e.append("dst",`${i.split("/")[0]+"-"+i.split("/")[1]+"-"+i.split("/")[2]}`),this.axios.post("/upload/single",e,{headers:{"Content-Type":"multipart/form-data"}}).then(l=>{this.data.attach_filename=l.data.data.filename,this.data.attach_filepath=l.data.data.path,this.upload_file_all4(a,s)}).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}else this.upload_file_all4(a,s)},upload_file_all4(a,s){let i=this.assetsUtils.currentDate(),c=[],e=[];this.data.booking_follows.filter(l=>{var r;if((r=l.sendToFile)!=null&&r.filename){let n=new FormData;n.append("file",l.sendToFile.file),n.append("dst",`${i.split("/")[0]+"-"+i.split("/")[1]+"-"+i.split("/")[2]}`),c.push(this.axios.post("/upload/single",n,{headers:{"Content-Type":"multipart/form-data"}}))}}),c.length>0?this.axios.all([...c]).then(this.axios.spread((...l)=>{l.filter((r,n)=>{this.data.booking_follows[n].attach_filepath=r.data.data.path,this.data.booking_follows[n].attach_filename=r.data.data.filename,e.push({...this.data.booking_follows[n],...r.data.data,filepath:r.data.data.path})}),c.length==e.length&&this.call_api_save(a,s)})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}}):this.call_api_save(a,s)},call_api_save(a,s){let i=this,c="";this.data.tag.filter(l=>{c+=l.name+","}),c=c.slice(0,-1),this.data.sendTo.filter(l=>{if(!this.data.booking_follows.some(r=>r.department_id===l.value&&r.flag!="delete")){let r={...l,department_id:parseInt(l.value),department_name:l.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:l.human_flag,response_id:parseInt(l.value),response_type:l.type,attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename,sendToFile:{filename:this.data.attach_filename}};this.optionSelect.process_type_id.find(n=>{n.value==this.data.process_type_id&&(r.process_type_name=n.name)}),this.optionSelect.permission_id.find(n=>{n.value==this.data.permission_id&&(r.permission_name=n.name)}),this.data.booking_follows.push(r)}});let e={original_flag:this.data.original_flag,receive_regis_id:parseInt(this.data.receive_regis_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),receive_time:this.data.receive_time,as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:c,contracts:this.data.contracts,main_docs:[...a,...this.data.main_docs_del],attachments:s,booking_refers:this.data.booking_refers.filter(l=>l.book_refer_id),booking_follows:this.data.booking_follows,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":(this.flagSave==2,""),book_type:parseInt(this.$route.query.book_type),regis_id:parseInt(this.$route.query.regis_id),page_flag:""};this.showLoading=!0,this.axios[this.edit?"put":"post"](`/booking-receive${this.edit?"/"+this.$route.params.id:""}`,e).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:this.flagSave==1?"ทำการบันทึกแบบร่างสำเร็จแล้ว":this.flagSave==3?"ทำการบันทึกสำเร็จแล้ว":"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){i.back()}}}).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})},api_detail(){this.showLoading=!0,this.axios.get(`/booking-receive/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id,response_id:this.$route.query.response_id}}).then(a=>{var i,c,e,l,r;this.showLoading=!1;let s=[];a.data.data.main_docs.filter(n=>{s.push({...n,flag:"delete"})}),a.data.data={...this.data,...a.data.data,main_docs_del:s},this.data=JSON.parse(JSON.stringify(a.data.data)),this.data.tag=[],(i=a.data.data.tag)==null||i.split(",").filter(n=>{n&&this.data.tag.push({value:"",name:n})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],a.data.data.booking_refers.filter(n=>{n.flag="edit",this.axios.get(`/master-data/book-refer/${n.book_type}/${n.id}`).then(y=>{this.data.booking_refers.push({...y.data.data,...n})}).catch(y=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:y.response.data.message}})}),this.data.main_docs.filter(n=>(n.flag="add",n.link=n.filepath?this.backendport+"/"+n.filepath:"",n)),this.data.attachments.filter(n=>(n.flag="add",n.link=n.filepath?this.backendport+"/"+n.filepath:"",n)),this.data.contracts.filter(n=>(n.flag="add",n)),this.data.booking_follows.filter(n=>(n.flag="add",n)),this.data.booking_follows=[],(((c=this.data.main_docs)==null?void 0:c.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}]),(((e=this.data.attachments)==null?void 0:e.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(((l=this.data.contracts)==null?void 0:l.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:"",flag:"add"}]),(((r=a.data.data.booking_refers)==null?void 0:r.length)<1||!a.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}]),this.data.book_type=this.data.book_type?this.data.book_type:this.$route.query.book_type}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},api_master(){this.showLoading=!0;const a=this.axios.get("/master-data/book-category",{params:{book_type:0}}),s=this.axios.get("/master-data/book-type",{params:{book_type:0}}),i=this.axios.get("/master-data/secret"),c=this.axios.get("/master-data/speed"),e=this.axios.get("/master-data/process-type"),l=this.axios.get("/master-data/permission-type"),r=this.axios.get("/master-data/department-user?type=1"),n=this.axios.get("/master-data/receive-type"),y=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([a,s,i,c,e,l,r,n,y]).then(this.axios.spread((...v)=>{this.showLoading=!1;const A=v[0],V=v[1],C=v[2],x=v[3],M=v[4],I=v[5],D=v[6],u=v[7],S=v[8];A.data.data.filter(d=>(d.value=d.id,d.name=d.name,d)),V.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),C.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),x.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),M.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),I.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),D.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),u.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),this.data.FileType=[],S.data.data.filter(d=>{d.active_flag==1&&this.data.FileType.push(d.content_type)}),this.optionSelect.receive_regis_id=A.data.data,this.optionSelect.book_type_id=V.data.data,this.optionSelect.secret_id=C.data.data,this.optionSelect.speed_id=x.data.data,this.optionSelect.process_type_id=M.data.data,this.optionSelect.permission_id=I.data.data,this.optionSelect.department_id=D.data.data,this.optionSelect.receive_type=u.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(v=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:v.response.data.message}})},keyup_book_type(a){this.axios.get("/master-data/book-type",{params:{keyword:a.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i)),this.optionSelect.book_type_id=s.data.data)})},submitClick(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการรับเข้าหรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){let s={regis_id:parseInt(a.data.book_category_id),book_type:4,user_id:parseInt(localStorage.getItem("user_id"))};a.showLoading=!0,a.axios.put(`/booking-receive/${a.$route.params.id}`,s).then(()=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"success",title:"ยืนยันรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(i=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}}}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},G={class:"booking-receive-detail"},H={class:"group-overflow"},Q={class:"detail"},W={class:"group-head"},X={class:"group-first"},Y=t("img",{src:N,alt:"",class:"icon-size"},null,-1),Z={class:"name"},$=t("div",{class:"line"},null,-1),ee={class:"group-detail"},te={class:"group-input"},se={class:"group-between"},ae={class:"group-input left"},oe=t("div",{class:"name"},[h("ทะเบียนรับ "),t("span",{class:"required"},"*")],-1),ie={class:"group-between"},le={class:"group-input left"},de=t("div",{class:"name"},[h("วันที่รับหนังสือ "),t("span",{class:"required"},"*")],-1),ne={class:"group-input"},re=t("div",{class:"name"},[h("เวลาที่รับหนังสือ "),t("span",{class:"required"},"*")],-1),ce={class:"group-between"},_e={class:"group-input left"},pe=t("div",{class:"name"},[h("ชนิดของหนังสือ "),t("span",{class:"required"},"*")],-1),ue={class:"group-between"},he={class:"group-input left"},me=t("div",{class:"name"},[h("เลขที่หนังสือ "),t("span",{class:"required"},"*")],-1),ge={class:"group-input"},fe=t("div",{class:"name"},[h("ลงวันที่ "),t("span",{class:"required"},"*")],-1),be={class:"group-input d-flex align-items-center"},ye=t("div",{class:"name"},"อ้างอิงถึง",-1),ve=t("div",{class:"group-image"},[t("img",{src:E,alt:"",class:"icon-plus"}),h(" เพิ่มเอกสารอ้างอิง ")],-1),ke=[ve],we={class:"group-input left"},Ve={class:"group-input left"},Se={class:"group-input d-flex"},Ce=["onClick"],Ue=t("img",{src:R,alt:"",class:"image-trash pointer"},null,-1),qe=[Ue],Te=t("div",{class:"group-input"},null,-1),Fe={class:"group-between"},Le={class:"group-input left"},Ae=t("div",{class:"name"},[h("ชื่อเรื่อง "),t("span",{class:"required"},"*")],-1),xe={class:"group-between"},Me={class:"group-input left"},Ie=t("div",{class:"name"},[h("ชั้นความลับ "),t("span",{class:"required"},"*")],-1),De={class:"group-input"},ze=t("div",{class:"name"},[h("ความเร่งด่วน "),t("span",{class:"required"},"*")],-1),Re={class:"group-input left"},je=t("div",{class:"name"},"เรียน ",-1),Ee={class:"group-input left"},Oe=t("div",{class:"name"},"รายละเอียดหนังสือ",-1),Be={class:"group-input"},Ne=t("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),Pe=t("div",{class:"line"},null,-1),Ke={class:"group-between"},Je={class:"group-input left"},Ge=t("div",{class:"name"},[h("หน่วยงานที่เสนอเรื่อง "),t("span",{class:"required"},"*")],-1),He={class:"group-input"},Qe=t("div",{class:"name"},[h("ช่องทางการรับเอกสาร "),t("span",{class:"required"},"*")],-1),We={key:0,class:"group-between"},Xe={class:"group-input left"},Ye=t("div",{class:"name"},[h("ระบุชื่อหน่วยงานอื่นๆ "),t("span",{class:"required"},"*")],-1),Ze=t("div",{class:"group-input"},null,-1),$e={class:"group-between"},et={class:"group-input left"},tt=t("div",{class:"name"},"ผู้ติดต่อ",-1),st={class:"group-between"},at={class:"group-input left"},ot=t("div",{class:"name"},"โทรศัพท์",-1),it={class:"group-input"},lt=t("div",{class:"name"},"E-mail",-1),dt=t("div",{class:"line"},null,-1),nt={class:"group-detail"},rt={class:"group-between"},ct={class:"group-input left"},_t=t("div",{class:"name"},"หนังสือต้นเรื่อง",-1),pt={class:"group-input-file"},ut=["onClick"],ht=["onClick"],mt=["onChange","name"],gt=["onClick"],ft=t("i",{class:"bi bi-eye icon-eye"},null,-1),bt=[ft],yt=["disabled","onClick"],vt=t("img",{src:R,alt:"",class:"image-trash"},null,-1),kt=[vt],wt={class:"group-input"},Vt={class:"group-input d-flex align-items-center"},St=t("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),Ct=["disabled"],Ut=t("div",{class:"group-image"},[t("img",{src:E,alt:"",class:"icon-plus"}),h(" เพิ่มไฟล์ ")],-1),qt=[Ut],Tt={class:"group-input-file"},Ft=["onClick"],Lt=["onClick"],At=["onChange","name"],xt=["onClick"],Mt=t("i",{class:"bi bi-eye icon-eye"},null,-1),It=[Mt],Dt=["disabled","onClick"],zt=t("img",{src:R,alt:"",class:"image-trash"},null,-1),Rt=[zt],jt=t("div",{class:"line"},null,-1),Et={class:"send-to"},Ot={class:"group-input"},Bt=t("div",{class:"name"},"ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) ",-1),Nt={class:"group-input left"},Pt={class:"name d-flex justify-content-between"},Kt=t("div",null,"ความเห็น / คำสั่ง",-1),Jt=t("img",{src:P,alt:"",class:"icon-paperclip"},null,-1),Gt=t("img",{src:K,alt:"",class:"image-x"},null,-1),Ht={class:"group-between"},Qt={class:"group-input left"},Wt=t("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Xt={class:"group-input"},Yt=t("div",{class:"name"},"การมองเห็น",-1),Zt={class:"d-flex align-items-center justify-content-between"},$t=t("img",{src:j,alt:"times-circle",class:"icon-times-circle"},null,-1),es=t("img",{src:z,alt:"times-circle",class:"icon-check-circle"},null,-1),ts={key:0,class:"line mt-3"},ss={class:"d-flex justify-content-between"},as={class:"title"},os=["onClick"],is={class:"d-flex ms-2 mt-2"},ls={class:"name"},ds={class:"name ms-5"},ns={class:"name ms-5"},rs={class:"name ms-2 mt-1"},cs={class:"name ms-2 mt-1"},_s=t("div",{class:"line mt-4"},null,-1),ps={class:"group-footer"},us={class:"footer-left d-flex"},hs=t("img",{src:j,alt:"times-circle",class:"icon-times-circle"},null,-1),ms=t("img",{src:j,alt:"times-circle",class:"icon-times-circle"},null,-1),gs={class:"footer-right"},fs=t("img",{src:z,alt:"times-circle",class:"icon-check-circle"},null,-1),bs=t("img",{src:z,alt:"times-circle",class:"icon-check-circle"},null,-1),ys=["disabled"],vs=t("img",{src:z,alt:"times-circle",class:"icon-check-circle"},null,-1),ks={key:0,class:"detail-history"},ws={class:"history"},Vs=t("div",{class:"group-left"},[t("i",{class:"bi bi-clock icon-size"}),t("div",{class:"name"},"ประวัติการแก้ไข")],-1),Ss={class:"group-right"},Cs={class:"bi bi-chevron-right icon-angle"},Us={class:"bi bi-chevron-down icon-angle"},qs={class:"line"},Ts={class:"content"},Fs={class:"content-head"},Ls=t("i",{class:"bi bi-border-all icon-size"},null,-1),As=t("i",{class:"bi bi-chat-left icon-size"},null,-1),xs=t("i",{class:"bi bi-pencil-square icon-size"},null,-1),Ms={class:"detail-head"},Is={class:"number"},Ds={class:"create"},zs=t("i",{class:"bi bi-person icon-size"},null,-1),Rs={class:"date"},js={class:"time"},Es=t("i",{class:"bi bi-clock icon-size"},null,-1),Os=["onClick"],Bs={key:0,class:"detail-signager"},Ns=["src"],Ps={key:0,class:"line"},Ks={key:1,class:"content-detail first end"},Js=t("div",{class:"detail-head"},[t("div",{class:"topic"},"ไม่มีข้อมูล")],-1),Gs=[Js];function Hs(a,s,i,c,e,l){const r=w("cpn-checkbox"),n=w("cpn-select"),y=w("cpn-datepicker"),v=w("cpn-time"),A=w("cpn-autoComplete"),V=w("cpn-input"),C=w("cpn-textArea"),x=w("cpn-input-tags"),M=w("Form"),I=w("cpn-modal-alert"),D=w("cpn-loading");return g(),f("div",G,[t("div",H,[t("div",Q,[t("div",W,[t("div",X,[Y,t("div",Z,[h(b(e.edit?"แก้ไขหนังสือรับเข้า":"สร้างหนังสือรับเข้า")+" ",1),t("label",null,b(e.data.receive_document_number),1)])])]),$,m(M,{onSubmit:l.on_submit,onInvalidSubmit:a.onInvalidSubmit},{default:B(()=>{var u,S,d;return[t("div",ee,[t("div",te,[m(r,{modelValue:e.data.original_flag,"onUpdate:modelValue":s[0]||(s[0]=o=>e.data.original_flag=o),name:"original_flag",label:"หนังสือต้นเรื่อง"},null,8,["modelValue"])]),t("div",se,[t("div",ae,[oe,m(n,{modelValue:e.data.receive_regis_id,"onUpdate:modelValue":s[1]||(s[1]=o=>e.data.receive_regis_id=o),name:"receive_regis_id",rules:"required",optionSelect:e.optionSelect.receive_regis_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),t("div",ie,[t("div",le,[de,m(y,{modelValue:e.data.receive_date,"onUpdate:modelValue":s[2]||(s[2]=o=>e.data.receive_date=o),name:"receive_date",rules:"required",disabled:e.edit&&e.data.book_type!=0||e.data.status==2||e.data.status==3,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),t("div",ne,[re,m(v,{modelValue:e.data.receive_time,"onUpdate:modelValue":s[3]||(s[3]=o=>e.data.receive_time=o),name:"receive_time",rules:"required",disabled:e.data.status==2||e.data.status==3,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])])]),t("div",ce,[t("div",_e,[pe,m(A,{modelValue:e.data.book_type_id,"onUpdate:modelValue":s[4]||(s[4]=o=>e.data.book_type_id=o),name:"book_type_id",rules:"required",optionSelect:e.optionSelect.book_type_id,placeholder:"กรุณาระบุ",onKeyup:l.keyup_book_type},null,8,["modelValue","optionSelect","onKeyup"])]),t("div",ue,[t("div",he,[me,m(V,{modelValue:e.data.document_number,"onUpdate:modelValue":s[5]||(s[5]=o=>e.data.document_number=o),name:"document_number",rules:"required",disabled:e.edit&&e.data.book_type!=0,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),t("div",ge,[fe,m(y,{modelValue:e.data.as_of_date,"onUpdate:modelValue":s[6]||(s[6]=o=>e.data.as_of_date=o),name:"as_of_date",rules:"required",disabled:e.edit&&e.data.book_type!=0,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])])]),t("div",be,[ye,t("button",{type:"button",class:"add-booking-receive",onClick:s[7]||(s[7]=o=>l.add_booking_refers())},ke)]),(g(!0),f(T,null,F(e.data.booking_refers.filter(o=>o.flag!="delete"),(o,_)=>(g(),f("div",{class:"group-between",key:_},[t("div",we,[m(V,{modelValue:o.receive_document_number,"onUpdate:modelValue":p=>o.receive_document_number=p,name:`codeRefers${_}`,type:"text",searchFlag:!0,onSearchClick:p=>l.booking_refers_click(o),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),t("div",Ve,[m(V,{modelValue:o.desc,"onUpdate:modelValue":p=>o.desc=p,name:`nameRefers${_}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),t("div",Se,[m(y,{modelValue:o.receive_date,"onUpdate:modelValue":p=>o.receive_date=p,name:`dateRefers${_}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),t("button",{type:"button",onClick:p=>l.delete_booking_refers(o,_),class:"button-delete ms-3"},qe,8,Ce)])]))),128)),Te,t("div",Fe,[t("div",Le,[Ae,m(C,{modelValue:e.data.subject,"onUpdate:modelValue":s[8]||(s[8]=o=>e.data.subject=o),name:"subject",rules:"required",disabled:e.edit&&e.data.book_type!=0,rows:"3"},null,8,["modelValue","disabled"])]),t("div",xe,[t("div",Me,[Ie,m(n,{modelValue:e.data.secret_id,"onUpdate:modelValue":s[9]||(s[9]=o=>e.data.secret_id=o),name:"secret_id",rules:"required",optionSelect:e.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","optionSelect","disabled"])]),t("div",De,[ze,m(n,{modelValue:e.data.speed_id,"onUpdate:modelValue":s[10]||(s[10]=o=>e.data.speed_id=o),name:"speed_id",rules:"required",optionSelect:e.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","optionSelect","disabled"])])])]),t("div",Re,[je,m(C,{modelValue:e.data.send_to,"onUpdate:modelValue":s[11]||(s[11]=o=>e.data.send_to=o),name:"send_to",rows:"1",disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","disabled"])]),t("div",Ee,[Oe,m(C,{modelValue:e.data.book_desc,"onUpdate:modelValue":s[12]||(s[12]=o=>e.data.book_desc=o),name:"book_desc",rows:"1"},null,8,["modelValue"])]),t("div",Be,[Ne,m(x,{modelValue:e.data.tag,"onUpdate:modelValue":s[13]||(s[13]=o=>e.data.tag=o),name:"tag"},null,8,["modelValue"])])]),Pe,(g(!0),f(T,null,F(e.data.contracts,(o,_)=>(g(),f("div",{class:"group-detail",key:_},[t("div",Ke,[t("div",Je,[Ge,m(A,{modelValue:o.department_id,"onUpdate:modelValue":p=>o.department_id=p,name:`${_}department_id`,rules:"required",disabled:e.edit&&e.data.book_type!=0,onKeyup:s[14]||(s[14]=p=>l.keyup_department(p)),optionSelect:e.optionSelect.department_id},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])]),t("div",He,[Qe,m(n,{modelValue:o.receive_type,"onUpdate:modelValue":p=>o.receive_type=p,name:`${_}receive_type`,rules:"required",disabled:e.edit&&e.data.book_type!=0,optionSelect:e.optionSelect.receive_type},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])])]),o.department_id==1860?(g(),f("div",We,[t("div",Xe,[Ye,m(V,{modelValue:o.department_other,"onUpdate:modelValue":p=>o.department_other=p,name:`${_}department_other`,rules:o.department_id==1860?"required":"",disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","onUpdate:modelValue","name","rules","disabled"])]),Ze])):L("",!0),t("div",$e,[t("div",et,[tt,m(V,{modelValue:o.contract_name,"onUpdate:modelValue":p=>o.contract_name=p,name:`${_}contract_name`,disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),t("div",st,[t("div",at,[ot,m(V,{modelValue:o.contract_phone,"onUpdate:modelValue":p=>o.contract_phone=p,isNumber:!0,maxlength:"10",name:`${_}contract_phone`,disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),t("div",it,[lt,m(V,{modelValue:o.contract_mail,"onUpdate:modelValue":p=>o.contract_mail=p,rules:"email",name:`${_}contract_mail`,disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","onUpdate:modelValue","name","disabled"])])])])]))),128)),dt,t("div",nt,[t("div",rt,[t("div",ct,[_t,(g(!0),f(T,null,F(e.data.main_docs.filter(o=>o.flag!="delete"),(o,_)=>(g(),f("div",{class:"d-flex mb-3",key:_},[t("div",pt,[t("button",{type:"button",class:k([e.edit&&e.data.book_type!=0?"none-pointer":"","button-file"]),onClick:p=>e.edit&&e.data.book_type!=0?"":l.upload_file(`main_docs${_}`)},[t("span",{class:k(o.filename?"":"no-data")},b(o.filename?o.filename:"หนังสือต้นเรื่อง"),3)],10,ut),t("div",{class:k(e.edit&&e.data.book_type!=0?"text disabled":"text pointer"),onClick:p=>e.edit&&e.data.book_type!=0?"":l.upload_file(`main_docs${_}`)},"แนบเอกสาร",10,ht),t("input",{type:"file",onChange:p=>l.file_set_change(`main_docs${_}`,_,"main_docs"),name:`main_docs${_}`,style:{display:"none"},accept:"application/pdf"},null,40,mt)]),t("button",{type:"button",onClick:p=>l.download_file(o),class:"button-eye"},bt,8,gt),t("button",{type:"button",class:"del-department-3",disabled:e.edit&&e.data.book_type!=0,onClick:p=>e.data.main_docs.length>1?e.data.main_docs.splice(_,1):o.filename=""},kt,8,yt)]))),128))]),t("div",wt,[t("div",Vt,[St,t("button",{type:"button",class:"add-booking-receive",disabled:e.edit&&e.data.book_type!=0,onClick:s[15]||(s[15]=o=>l.upload_file("fileAttachment"))},qt,8,Ct),t("input",{type:"file",multiple:"",onChange:s[16]||(s[16]=o=>l.file_attachment_add_change("fileAttachment")),name:"fileAttachment",style:{display:"none"}},null,32)]),(g(!0),f(T,null,F(e.data.attachments.filter(o=>o.flag!="delete"),(o,_)=>(g(),f("div",{class:"d-flex mb-3",key:_},[t("div",Tt,[t("button",{type:"button",class:k([e.edit&&e.data.book_type!=0?"none-pointer":"","button-file"]),onClick:p=>e.edit&&e.data.book_type!=0?"":l.upload_file(`attachments${_}`)},[t("span",{class:k(o.filename?"":"no-data")},b(o.filename?o.filename:"สิ่งที่ส่งมาด้วย"),3)],10,Ft),t("div",{class:k(e.edit&&e.data.book_type!=0?"text disabled":"text pointer"),onClick:p=>e.edit&&e.data.book_type!=0?"":l.upload_file(`attachments${_}`)},"แนบเอกสาร",10,Lt),t("input",{type:"file",onChange:p=>l.file_set_change(`attachments${_}`,_,"attachments"),name:`attachments${_}`,style:{display:"none"}},null,40,At)]),t("button",{type:"button",onClick:p=>l.download_file(o),class:"button-eye"},It,8,xt),t("button",{type:"button",class:"del-department-3",disabled:e.edit&&e.data.book_type!=0,onClick:p=>l.delete_attachments(o,_)},Rt,8,Dt)]))),128))])])]),jt,t("div",Et,[t("div",Ot,[Bt,m(x,{modelValue:e.data.sendTo,"onUpdate:modelValue":s[17]||(s[17]=o=>e.data.sendTo=o),flagSearch:!0,optionSelect:e.optionSelect.sendTo,onKeyup:l.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),t("div",Nt,[t("div",Pt,[Kt,t("div",null,[t("input",{type:"file",onChange:s[18]||(s[18]=o=>l.file_set_change("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(u=e.data.sendToFile)!=null&&u.filename?(g(),f("div",{key:1,class:"del-comment pointer",onClick:s[20]||(s[20]=o=>e.data.sendToFile.filename="")},[h(b((S=e.data.sendToFile)==null?void 0:S.filename)+" ",1),Gt])):(g(),f("button",{key:0,type:"button",class:"button-con pointer",onClick:s[19]||(s[19]=o=>l.upload_file("sendTo"))},[Jt,h(" แนบเอกสาร ")]))])]),m(C,{modelValue:e.data.comment,"onUpdate:modelValue":s[21]||(s[21]=o=>e.data.comment=o),name:"comment",rows:"3"},null,8,["modelValue"])]),t("div",Ht,[t("div",Qt,[Wt,m(n,{modelValue:e.data.process_type_id,"onUpdate:modelValue":s[22]||(s[22]=o=>e.data.process_type_id=o),name:"process_type_id",optionSelect:e.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),t("div",Xt,[Yt,m(n,{modelValue:e.data.permission_id,"onUpdate:modelValue":s[23]||(s[23]=o=>e.data.permission_id=o),name:"permission_id",optionSelect:e.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),t("div",Zt,[t("div",null,[t("button",{type:"button",class:"button button-danger",onClick:s[24]||(s[24]=o=>(e.data.sendTo=[],e.data.comment="",e.data.process_type_id="",e.data.permission_id=""))},[$t,h(" ยกเลิก ")])]),t("div",null,[t("button",{type:"button",onClick:s[25]||(s[25]=o=>l.add_booking_follows()),class:"button button-success"},[es,h(" เพิ่มการส่งต่อ ")])])]),e.data.booking_follows.length>0?(g(),f("div",ts)):L("",!0),(g(!0),f(T,null,F(e.data.booking_follows.filter(o=>o.flag!="delete"),(o,_)=>{var p;return g(),f("div",{class:"group-add",key:_},[t("div",ss,[t("div",as,"#"+b(_+1),1),t("img",{onClick:Qs=>l.delete_booking_follows(o,_),src:R,alt:"",class:"image-trash pointer"},null,8,os)]),t("div",is,[t("div",ls,"ส่งต่อ : "+b((o==null?void 0:o.department_name)||"-"),1),t("div",ds,"รูปแบบการดำเนินการ : "+b((o==null?void 0:o.process_type_name)||"-"),1),t("div",ns,"การมองเห็น : "+b((o==null?void 0:o.permission_name)||"-"),1)]),t("div",rs,"ความเห็น / คำสั่ง : "+b((o==null?void 0:o.comment)||"-"),1),t("div",cs,"เอกสารแนบ : "+b(((p=o==null?void 0:o.sendToFile)==null?void 0:p.filename)||"-"),1)])}),128))]),_s,t("div",ps,[t("div",us,[t("button",{type:"button",class:"button-danger",onClick:s[26]||(s[26]=o=>l.back())},[hs,h(" ปิด ")]),a.$route.params.id?(g(),f("button",{key:0,type:"button",class:"button-danger ms-3",onClick:s[27]||(s[27]=o=>l.delete_click())},[ms,h(" ลบ ")])):L("",!0)]),t("div",gs,[U(t("button",{type:"submit",class:"button-success button-save",onClick:s[28]||(s[28]=o=>e.flagSave=3)},[fs,h(" บันทึก ")],512),[[q,e.edit]]),U(t("button",{type:"submit",class:"button-primary",onClick:s[29]||(s[29]=o=>e.flagSave=1)},[bs,h(" บันทึกแบบร่าง ")],512),[[q,!e.edit]]),t("button",{type:"submit",class:"button-success",onClick:s[30]||(s[30]=o=>e.flagSave=2),disabled:((d=e.data.sendTo)==null?void 0:d.length)<1},[vs,h(" บันทึกและส่งต่อ ")],8,ys)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])]),a.$route.params.id?(g(),f("div",ks,[t("div",ws,[t("div",{class:"header pointer",onClick:s[31]||(s[31]=u=>(e.data.history.hide=!e.data.history.hide,l.historyClick(e.data.history.tab)))},[Vs,t("div",Ss,[U(t("i",Cs,null,512),[[q,!e.data.history.hide]]),U(t("i",Us,null,512),[[q,e.data.history.hide]])])]),U(t("div",qs,null,512),[[q,e.data.history.hide]]),U(t("div",Ts,[t("div",Fs,[t("div",{class:k(["pointer",e.data.history.tab==1?"active":""]),onClick:s[32]||(s[32]=u=>(e.data.history.tab=1,l.historyClick(1)))},[Ls,h("ทั้งหมด")],2),t("div",{class:k(["pointer",e.data.history.tab==2?"active":""]),onClick:s[33]||(s[33]=u=>(e.data.history.tab=2,l.historyClick(2)))},[As,h("ความเห็นคำสั่ง")],2),t("div",{class:k(["pointer",e.data.history.tab==3?"active":""]),onClick:s[34]||(s[34]=u=>(e.data.history.tab=3,l.historyClick(3)))},[xs,h("แก้ไขข้อมูล")],2)]),e.data.history.data.filter(u=>e.data.history.tab==2?u.type==2:e.data.history.tab==3?u.type==0||u.type==1:u).length>0?(g(!0),f(T,{key:0},F(e.data.history.data.filter(u=>e.data.history.tab==2?u.type==2:e.data.history.tab==3?u.type==0||u.type==1:u),(u,S)=>(g(),f("div",{class:k(["content-detail",S==0?"first":S==e.data.history.data.length-1?"end":""]),key:S},[t("div",Ms,[t("div",Is,"#"+b(e.data.history.data.filter(d=>e.data.history.tab==2?d.type==2:e.data.history.tab==3?d.type==0||d.type==1:d).length-S),1),t("div",{class:k(["topic",u.bookaction_name=="ความเห็นคำสั่ง"?"blue":u.bookaction_name=="แก้ไขหนังสือ"?"yellow":"green"])},[t("i",{class:k(["bi icon-size",u.bookaction_name=="ความเห็นคำสั่ง"?"bi-chat-left":u.bookaction_name=="แก้ไขหนังสือ"?"bi-pencil-square":"bi-plus-lg"])},null,2),h(" "+b(u.bookaction_name),1)],2),t("div",Ds,[zs,h(" โดย "+b(u.updateBy)+" / "+b(u.subName),1)]),t("div",Rs," วันที่ "+b(u.create_date),1),t("div",js,[Es,h(" "+b(u.create_time),1)])]),(g(!0),f(T,null,F(u.booking_remarks,(d,o)=>(g(),f("ul",{class:"detail-list",key:o},[U(t("button",{class:"button-file",onClick:_=>l.download_file({filename:d.filepath.split("/").pop(),link:d.link})},b(d.filepath.split("/").pop()),9,Os),[[q,d.filepath]]),t("li",null,[h(b(d.remark)+" "+b(d.comment)+" ",1),d.signature_img&&u.bookaction_name=="ความเห็นคำสั่ง"?(g(),f("div",Bs,[t("img",{src:d.signature_img,alt:"",class:"image-size"},null,8,Ns)])):L("",!0)])]))),128)),S!=e.data.history.data.length-1?(g(),f("div",Ps)):L("",!0)],2))),128)):(g(),f("div",Ks,Gs))],512),[[q,e.data.history.hide]])])])):L("",!0)]),m(I,{modalAlert:e.modalAlert},null,8,["modalAlert"]),m(D,{show:e.showLoading},null,8,["show"])])}const ea=O(J,[["render",Hs]]);export{ea as default};
