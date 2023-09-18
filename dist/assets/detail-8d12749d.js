import{_ as O,r as k,o as f,c as g,a as t,t as b,b as m,d as B,w,v as S,n as v,j as h,F as q,h as T,i as F,g as j,k as R}from"./index-1e0d1486.js";import{_ as N}from"./ballot-duotone-f2459825.js";import{_ as E}from"./plus-circle-duotone-64bd32fe.js";import{_ as D}from"./trash-alt-duotone-12d94c28.js";import{_ as P,a as K}from"./x-solid-74fa126d.js";const J={name:"booking-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{history:{hide:!1,data:[],tab:1},original_flag:!0,receive_regis_id:"",book_type_id:"",receive_date:this.assetsUtils.currentDate(),receive_time:this.assetsUtils.currentTime(),document_number:"",as_of_date:this.assetsUtils.currentDate(),subject:"",secret_id:"13",speed_id:"12",send_to:"",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"13",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],sendToFile:[{filename:""}],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"12",permission_id:"9",book_type:"",regis_id:"",FileType:[],status:0},optionSelect:{receive_regis_id:[],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]}}},methods:{historyClick(a){this.showLoading=!0,this.axios.get(`/booking-receive/${this.$route.params.id}/history`,{params:{book_type:this.$route.query.book_type,department_id:parseInt(localStorage.getItem("department_id"))}}).then(s=>{this.showLoading=!1,this.data.history.data=s.data.data,this.data.history.data.filter((l,r)=>{l.booking_remarks.filter((e,i)=>{e.link=e.filepath?this.backendport+"/"+e.filepath:"",e.signature_img?this.axios({method:"get",url:this.backendport+"/"+e.signature_img,baseURL:"",responseType:"blob"}).then(d=>{const u=new Blob([d.data],{type:this.assetsUtils.getTypeFile(e.signature_img)});e.signature_img=URL.createObjectURL(u)}).catch(d=>{e.signature_img=new URL("/assets/signature_img-526e80c1.jpg",self.location).href}):e.signature_img=new URL("/assets/signature_img-526e80c1.jpg",self.location).href})})}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},delete_main_doc(a,s){a.flag=="edit"?a.flag="delete":this.data.main_docs.splice(s,1),this.data.main_docs.length-this.data.main_docs.filter(l=>l.flag=="delete").length<1&&this.data.main_docs.push({filename:"",flag:"add"})},delete_attachments(a,s){a.flag=="edit"?a.flag="delete":this.data.attachments.splice(s,1),this.data.attachments.length-this.data.attachments.filter(l=>l.flag=="delete").length<1&&this.data.attachments.push({filename:"",flag:"add"})},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(a,s){a.flag=="edit"?a.flag="delete":this.data.booking_refers.splice(s,1),this.data.booking_refers.length-this.data.booking_refers.filter(l=>l.flag=="delete").length<1&&this.add_booking_refers()},booking_refers_click(a){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:a.receive_document_number}}).then(s=>{this.showLoading=!1,s.data.data.length>0?(a.book_refer_id=s.data.data[0].id,a.original_refer_id=s.data.data[0].id,a.book_type=s.data.data[0].book_type,a.desc=s.data.data[0].desc,a.receive_date=s.data.data[0].receive_date):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(s=>{a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},delete_click(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"หนังสือรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.axios.delete(`/booking-receive/${a.$route.params.id}`).then(()=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(s=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}}},keyup_department(a){this.optionSelect.department_id=[],this.axios.get("/master-data/department-user",{params:{keyword:a.target.value,type:1}}).then(s=>{s.data.data&&(s.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.department_id=s.data.data)})},keyup_send_to(a){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user/booking-note-out",{params:{keyword:a.target.value,department_id:localStorage.getItem("department_id"),subministry_id:localStorage.getItem("subministry_id ")}}).then(s=>{s.data.data&&(s.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.sendTo=s.data.data)})},add_booking_follows(){this.data.sendTo.filter(a=>{var s;if(!this.data.booking_follows.some(l=>l.department_id===a.value&&l.flag!="delete")){let l={...a,department_id:parseInt(a.value),department_name:a.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:a.human_flag,response_id:parseInt(a.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(((s=this.data.sendToFile)==null?void 0:s.filename)||""))},response_type:a.type};this.optionSelect.process_type_id.find(r=>{r.value==this.data.process_type_id&&(l.process_type_name=r.name)}),this.optionSelect.permission_id.find(r=>{r.value==this.data.permission_id&&(l.permission_name=r.name)}),this.data.booking_follows.push(l)}})},delete_booking_follows(a,s){a.flag=="edit"?a.flag="delete":this.data.booking_follows.splice(s,1)},download_file(a){a.filename&&a.link&&this.axios({method:"get",url:a.link,baseURL:"",responseType:"blob"}).then(s=>{const l=new Blob([s.data],{type:this.assetsUtils.getTypeFile(a.filename)});window.open(URL.createObjectURL(l))})},upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_attachment_add_change(a){for(var s=0;s<document.querySelector(`[name="${a}"]`).files.length;s++){let l=document.querySelector(`[name="${a}"]`).files[s];if(this.data.FileType.indexOf(l.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;let r={filename:l.name,type:l.type,link:URL.createObjectURL(l),size:(l.size/1024/1024).toFixed(2)+" MB",filesize:l.size.toString(),file:l,flag:"add"};this.data.attachments.push(r)}document.querySelector(`[name="${a}"]`).value=null},file_set_change1(a,s,l){for(var r=0;r<document.querySelector(`[name="${a}"]`).files.length;r++){let e=document.querySelector(`[name="${a}"]`).files[r];if(this.data.FileType.indexOf(e.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(l=="sendTo"){let i={filename:e.name,type:e.type,link:URL.createObjectURL(e),size:(e.size/1024/1024).toFixed(2)+" MB",file:e};this.data.sendToFile=i}}},file_set_change2(a,s,l){for(var r=0;r<document.querySelector(`[name="${a}"]`).files.length;r++){let e=document.querySelector(`[name="${a}"]`).files[r];if(this.data.FileType.indexOf(e.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;l=="main_docs"?e.type=="application/pdf"&&(s.flag=="edit"?(s.flag="delete",this.data.main_docs.push({filename:e.name,type:e.type,link:URL.createObjectURL(e),size:(e.size/1024/1024).toFixed(2)+" MB",filesize:e.size.toString(),file:e,flag:"add"})):(s.filename=e.name,s.type=e.type,s.link=URL.createObjectURL(e),s.size=(e.size/1024/1024).toFixed(2)+" MB",s.filesize=e.size.toString(),s.file=e),document.querySelector(`[name="${a}"]`).value=null):(s.filename=e.name,s.type=e.type,s.link=URL.createObjectURL(e),s.size=(e.size/1024/1024).toFixed(2)+" MB",s.filesize=e.size.toString(),s.file=e,document.querySelector(`[name="${a}"]`).value=null)}},back(){this.$router.push({name:"my-work.waiting-booking-receive",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":this.flagSave==3?"บันทึกแบบ":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.upload_file_all()}}},upload_file_all(){let a=this.assetsUtils.currentDate(),s=[],l=[];this.data.attachments.filter(r=>{if(r.file){let e=new FormData;e.append("file",r.file),e.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),s.push(this.axios.post("/upload/single",e,{headers:{"Content-Type":"multipart/form-data"}}))}}),s.length>0&&this.axios.all([...s]).then(this.axios.spread((...r)=>{r.filter((e,i)=>{l.push({...this.data.attachments.filter(d=>d.file)[i],...e.data.data,filepath:e.data.data.path})}),s.length==l.length&&this.upload_file_all2(l)})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}}),s.length<1&&this.upload_file_all2(l)},upload_file_all2(a){let s=this.assetsUtils.currentDate(),l=[],r=[];this.data.main_docs.filter(e=>{if(e.file){let i=new FormData;i.append("file",e.file),i.append("dst",`${s.split("/")[0]+"-"+s.split("/")[1]+"-"+s.split("/")[2]}`),l.push(this.axios.post("/upload/single",i,{headers:{"Content-Type":"multipart/form-data"}}))}}),l.length>0?this.axios.all([...l]).then(this.axios.spread((...e)=>{e.filter((i,d)=>{r.push({...this.data.main_docs.filter(u=>u.file)[d],...i.data.data,filepath:i.data.data.path})}),l.length==r.length&&this.upload_file_all3(r,a)})).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}}):this.upload_file_all3(r,a)},upload_file_all3(a,s){var r;let l=this.assetsUtils.currentDate();if((r=this.data.sendToFile)!=null&&r.filename){let e=new FormData;e.append("file",this.data.sendToFile.file),e.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),this.axios.post("/upload/single",e,{headers:{"Content-Type":"multipart/form-data"}}).then(i=>{this.data.attach_filename=i.data.data.filename,this.data.attach_filepath=i.data.data.path,this.upload_file_all4(a,s)}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}else this.upload_file_all4(a,s)},upload_file_all4(a,s){let l=this.assetsUtils.currentDate(),r=[],e=[];this.data.booking_follows.filter(i=>{var d;if((d=i.sendToFile)!=null&&d.filename){let u=new FormData;u.append("file",i.sendToFile.file),u.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),r.push(this.axios.post("/upload/single",u,{headers:{"Content-Type":"multipart/form-data"}}))}}),r.length>0?this.axios.all([...r]).then(this.axios.spread((...i)=>{i.filter((d,u)=>{this.data.booking_follows[u].attach_filepath=d.data.data.path,this.data.booking_follows[u].attach_filename=d.data.data.filename,e.push({...this.data.booking_follows[u],...d.data.data,filepath:d.data.data.path})}),r.length==e.length&&this.call_api_save(a,s)})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}):this.call_api_save(a,s)},call_api_save(a,s){let l=this,r="";this.data.tag.filter(i=>{r+=i.name+","}),r=r.slice(0,-1),this.data.sendTo.filter(i=>{if(!this.data.booking_follows.some(d=>d.department_id===i.value&&d.flag!="delete")){let d={...i,department_id:parseInt(i.value),department_name:i.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:i.human_flag,response_id:parseInt(i.value),response_type:i.type,attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename};this.optionSelect.process_type_id.find(u=>{u.value==this.data.process_type_id&&(d.process_type_name=u.name)}),this.optionSelect.permission_id.find(u=>{u.value==this.data.permission_id&&(d.permission_name=u.name)}),this.data.booking_follows.push(d)}}),this.data.main_docs.filter(i=>{i.flag=="delete"&&a.push(i)}),this.data.attachments.filter(i=>{i.flag=="delete"&&s.push(i)});let e={original_flag:this.data.original_flag,receive_regis_id:parseInt(this.data.receive_regis_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),receive_time:this.data.receive_time,as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:r,contracts:this.data.contracts.filter(i=>(this.optionSelect.department_id.find(d=>{d.value==i.department_id&&(i.department_name=d.name)}),i)),main_docs:a,attachments:s,booking_refers:this.data.booking_refers.filter(i=>i.book_refer_id),booking_follows:this.data.booking_follows,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":this.flagSave==2?"confirm":"draft",book_type:this.edit?parseInt(this.$route.query.book_type):0,regis_id:parseInt(this.$route.query.regis_id),page_flag:"",response_id:parseInt(this.$route.query.response_id),status:parseInt(this.data.status)};this.showLoading=!0,this.axios[this.edit?"put":"post"](`/booking-receive${this.edit?"/"+this.$route.params.id:""}`,e).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:this.flagSave==1?"ทำการบันทึกแบบร่างสำเร็จแล้ว":this.flagSave==3?"ทำการบันทึกสำเร็จแล้ว":"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})},api_detail(){this.showLoading=!0,this.axios.get(`/booking-receive/waiting-receive/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id,response_id:this.$route.query.response_id}}).then(a=>{var s,l,r,e,i;this.showLoading=!1,a.data.data={...this.data,...a.data.data},this.data=JSON.parse(JSON.stringify(a.data.data)),this.data.tag=[],(s=a.data.data.tag)==null||s.split(",").filter(d=>{d&&this.data.tag.push({value:"",name:d})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],a.data.data.booking_refers.filter(d=>{d.flag="edit",this.axios.get(`/master-data/book-refer/${d.book_type}/${d.id}`).then(u=>{this.data.booking_refers.push({...u.data.data,...d})}).catch(u=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:u.response.data.message}})}),this.data.main_docs.filter(d=>(d.flag="edit",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.attachments.filter(d=>(d.flag="edit",d.link=d.filepath?this.backendport+"/"+d.filepath:"",d)),this.data.booking_follows=[],(((l=this.data.main_docs)==null?void 0:l.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}]),(((r=this.data.attachments)==null?void 0:r.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(((e=this.data.contracts)==null?void 0:e.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:"",flag:"add"}]),(((i=a.data.data.booking_refers)==null?void 0:i.length)<1||!a.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}]),this.data.book_type=this.data.book_type?this.data.book_type:this.$route.query.book_type}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},api_master(){this.showLoading=!0;const a=this.axios.get("/master-data/book-category",{params:{book_type:0}}),s=this.axios.get("/master-data/book-type",{params:{book_type:0}}),l=this.axios.get("/master-data/secret"),r=this.axios.get("/master-data/speed"),e=this.axios.get("/master-data/process-type"),i=this.axios.get("/master-data/permission-type"),d=this.axios.get("/master-data/department-user",{params:{type:1}}),u=this.axios.get("/master-data/bookmethod",{params:{book_type:0}}),L=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([a,s,l,r,e,i,d,u,L]).then(this.axios.spread((...y)=>{this.showLoading=!1;const x=y[0],V=y[1],C=y[2],A=y[3],z=y[4],M=y[5],I=y[6],p=y[7],U=y[8];x.data.data.filter(n=>(n.value=n.id,n.name=n.name,n)),V.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),C.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),A.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),z.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),M.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),I.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),p.data.data.filter(n=>(n.value=n.id,n.name=n.name,n)),this.data.FileType=[],U.data.data.filter(n=>{n.active_flag==1&&this.data.FileType.push(n.content_type)}),this.optionSelect.receive_regis_id=x.data.data,this.optionSelect.book_type_id=V.data.data,this.optionSelect.secret_id=C.data.data,this.optionSelect.speed_id=A.data.data,this.optionSelect.process_type_id=z.data.data,this.optionSelect.permission_id=M.data.data,this.optionSelect.department_id=I.data.data,this.optionSelect.receive_type=p.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(y=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:y.response.data.message}})},keyup_book_type(a){this.axios.get("/master-data/book-type",{params:{keyword:a.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l)),this.optionSelect.book_type_id=s.data.data)})}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},G={class:"booking-receive-detail"},H={class:"group-overflow"},Q={class:"detail"},W={class:"group-head"},X={class:"group-first"},Y=t("img",{src:N,alt:"",class:"icon-size"},null,-1),Z={class:"name"},$=t("div",{class:"line"},null,-1),ee={class:"group-detail"},te={class:"group-input"},se={class:"group-between"},ae={class:"group-input left"},oe=t("div",{class:"name"},[h("ทะเบียนรับ "),t("span",{class:"required"},"*")],-1),ie={class:"group-between"},le={class:"group-input left"},ne=t("div",{class:"name"},[h("วันที่รับหนังสือ "),t("span",{class:"required"},"*")],-1),de={class:"group-input"},re=t("div",{class:"name"},[h("เวลาที่รับหนังสือ "),t("span",{class:"required"},"*")],-1),ce={class:"group-between"},_e={class:"group-input left"},pe=t("div",{class:"name"},[h("ชนิดของหนังสือ "),t("span",{class:"required"},"*")],-1),ue={class:"group-between"},he={class:"group-input left"},me=t("div",{class:"name"},[h("เลขที่หนังสือ "),t("span",{class:"required"},"*")],-1),fe={class:"group-input"},ge=t("div",{class:"name"},[h("ลงวันที่ "),t("span",{class:"required"},"*")],-1),be={class:"group-input d-flex align-items-center"},ye=t("div",{class:"name"},"อ้างอิงถึง",-1),ve=t("div",{class:"group-image"},[t("img",{src:E,alt:"",class:"icon-plus"}),h(" เพิ่มเอกสารอ้างอิง ")],-1),ke=[ve],we={class:"group-input left"},Se={class:"group-input left"},Ve={class:"group-input d-flex"},Ue=["onClick"],Ce=t("img",{src:D,alt:"",class:"image-trash pointer"},null,-1),qe=[Ce],Te=t("div",{class:"group-input"},null,-1),Fe={class:"group-between"},Le={class:"group-input left"},xe=t("div",{class:"name"},[h("ชื่อเรื่อง "),t("span",{class:"required"},"*")],-1),Ae={class:"group-between"},ze={class:"group-input left"},Me=t("div",{class:"name"},[h("ชั้นความลับ "),t("span",{class:"required"},"*")],-1),Ie={class:"group-input"},Re=t("div",{class:"name"},[h("ความเร่งด่วน "),t("span",{class:"required"},"*")],-1),De={class:"group-input left"},je=t("div",{class:"name"},"เรียน ",-1),Ee={class:"group-input left"},Oe=t("div",{class:"name"},"รายละเอียดหนังสือ",-1),Be={class:"group-input"},Ne=t("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),Pe=t("div",{class:"line"},null,-1),Ke={class:"group-between"},Je={class:"group-input left"},Ge=t("div",{class:"name"},[h("หน่วยงานที่เสนอเรื่อง "),t("span",{class:"required"},"*")],-1),He={class:"group-input"},Qe=t("div",{class:"name"},[h("ช่องทางการรับเอกสาร "),t("span",{class:"required"},"*")],-1),We={key:0,class:"group-between"},Xe={class:"group-input left"},Ye=t("div",{class:"name"},[h("ระบุชื่อหน่วยงานอื่นๆ "),t("span",{class:"required"},"*")],-1),Ze=t("div",{class:"group-input"},null,-1),$e={class:"group-between"},et={class:"group-input left"},tt=t("div",{class:"name"},"ผู้ติดต่อ",-1),st={class:"group-between"},at={class:"group-input left"},ot=t("div",{class:"name"},"โทรศัพท์",-1),it={class:"group-input"},lt=t("div",{class:"name"},"E-mail",-1),nt=t("div",{class:"line"},null,-1),dt={class:"group-detail"},rt={class:"group-between"},ct={class:"group-input left"},_t=t("div",{class:"name"},"หนังสือต้นเรื่อง",-1),pt={class:"d-flex mb-3"},ut={class:"group-input-file"},ht=["onClick"],mt=["onClick"],ft=["onChange","name"],gt=["onClick"],bt=t("i",{class:"bi bi-eye icon-eye"},null,-1),yt=[bt],vt=["disabled","onClick"],kt=t("img",{src:D,alt:"",class:"image-trash"},null,-1),wt=[kt],St={class:"group-input"},Vt={class:"group-input d-flex align-items-center"},Ut=t("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),Ct=["disabled"],qt=t("div",{class:"group-image"},[t("img",{src:E,alt:"",class:"icon-plus"}),h(" เพิ่มไฟล์ ")],-1),Tt=[qt],Ft={class:"d-flex mb-3"},Lt={class:"group-input-file"},xt=["onClick"],At=["onClick"],zt=["onChange","name"],Mt=["onClick"],It=t("i",{class:"bi bi-eye icon-eye"},null,-1),Rt=[It],Dt=["disabled","onClick"],jt=t("img",{src:D,alt:"",class:"image-trash"},null,-1),Et=[jt],Ot=t("div",{class:"line"},null,-1),Bt={class:"send-to"},Nt={class:"group-input"},Pt=t("div",{class:"name"},"ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) ",-1),Kt={class:"group-input left"},Jt={class:"name d-flex justify-content-between"},Gt=t("div",null,"ความเห็น / คำสั่ง",-1),Ht=t("img",{src:P,alt:"",class:"icon-paperclip"},null,-1),Qt=t("img",{src:K,alt:"",class:"image-x"},null,-1),Wt={class:"group-between"},Xt={class:"group-input left"},Yt=t("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Zt={class:"group-input"},$t=t("div",{class:"name"},"การมองเห็น",-1),es={class:"d-flex align-items-center justify-content-between"},ts=t("img",{src:j,alt:"times-circle",class:"icon-times-circle"},null,-1),ss=t("img",{src:R,alt:"times-circle",class:"icon-check-circle"},null,-1),as={key:0,class:"line mt-3"},os={class:"d-flex justify-content-between"},is={class:"title"},ls=["onClick"],ns={class:"d-flex ms-2 mt-2"},ds={class:"name"},rs={class:"name ms-5"},cs={class:"name ms-5"},_s={class:"name ms-2 mt-1"},ps={class:"name ms-2 mt-1"},us=t("div",{class:"line mt-4"},null,-1),hs={class:"group-footer"},ms={class:"footer-left d-flex"},fs=t("img",{src:j,alt:"times-circle",class:"icon-times-circle"},null,-1),gs=t("img",{src:j,alt:"times-circle",class:"icon-times-circle"},null,-1),bs={class:"footer-right"},ys=t("img",{src:R,alt:"times-circle",class:"icon-check-circle"},null,-1),vs=t("img",{src:R,alt:"times-circle",class:"icon-check-circle"},null,-1),ks=["disabled"],ws=t("img",{src:R,alt:"times-circle",class:"icon-check-circle"},null,-1),Ss={key:0,class:"detail-history"},Vs={class:"history"},Us=t("div",{class:"group-left"},[t("i",{class:"bi bi-clock icon-size"}),t("div",{class:"name"},"ประวัติการแก้ไข")],-1),Cs={class:"group-right"},qs={class:"bi bi-chevron-right icon-angle"},Ts={class:"bi bi-chevron-down icon-angle"},Fs={class:"line"},Ls={class:"content"},xs={class:"content-head"},As=t("i",{class:"bi bi-border-all icon-size"},null,-1),zs=t("i",{class:"bi bi-chat-left icon-size"},null,-1),Ms=t("i",{class:"bi bi-pencil-square icon-size"},null,-1),Is={key:0},Rs={class:"detail-head"},Ds={class:"number"},js={class:"create"},Es=t("i",{class:"bi bi-person icon-size"},null,-1),Os={class:"date"},Bs={class:"time"},Ns=t("i",{class:"bi bi-clock icon-size"},null,-1),Ps=["onClick"],Ks={key:0,class:"detail-signager"},Js=["src"],Gs={key:0,class:"line"},Hs={key:1,class:"content-detail first end"},Qs=t("div",{class:"detail-head"},[t("div",{class:"topic"},"ไม่มีข้อมูล")],-1),Ws=[Qs];function Xs(a,s,l,r,e,i){const d=k("cpn-checkbox"),u=k("cpn-select"),L=k("cpn-datepicker"),y=k("cpn-time"),x=k("cpn-autoComplete"),V=k("cpn-input"),C=k("cpn-textArea"),A=k("cpn-input-tags"),z=k("Form"),M=k("cpn-modal-alert"),I=k("cpn-loading");return f(),g("div",G,[t("div",H,[t("div",Q,[t("div",W,[t("div",X,[Y,t("div",Z,b(e.edit?"แก้ไขหนังสือรับเข้า":"สร้างหนังสือรับเข้า"),1)])]),$,m(z,{onSubmit:i.on_submit,onInvalidSubmit:a.onInvalidSubmit},{default:B(()=>{var p,U,n;return[t("div",ee,[t("div",te,[m(d,{modelValue:e.data.original_flag,"onUpdate:modelValue":s[0]||(s[0]=o=>e.data.original_flag=o),name:"original_flag",label:"หนังสือต้นเรื่อง"},null,8,["modelValue"])]),t("div",se,[t("div",ae,[oe,m(u,{modelValue:e.data.receive_regis_id,"onUpdate:modelValue":s[1]||(s[1]=o=>e.data.receive_regis_id=o),name:"receive_regis_id",rules:"required",optionSelect:e.optionSelect.receive_regis_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),t("div",ie,[t("div",le,[ne,m(L,{modelValue:e.data.receive_date,"onUpdate:modelValue":s[2]||(s[2]=o=>e.data.receive_date=o),name:"receive_date",rules:"required",disabled:e.edit&&e.data.book_type!=0||e.data.status==2||e.data.status==3,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),t("div",de,[re,m(y,{modelValue:e.data.receive_time,"onUpdate:modelValue":s[3]||(s[3]=o=>e.data.receive_time=o),name:"receive_time",rules:"required",disabled:e.data.status==2||e.data.status==3,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])])]),t("div",ce,[t("div",_e,[pe,m(x,{modelValue:e.data.book_type_id,"onUpdate:modelValue":s[4]||(s[4]=o=>e.data.book_type_id=o),name:"book_type_id",rules:"required",optionSelect:e.optionSelect.book_type_id,placeholder:"กรุณาระบุ",onKeyup:i.keyup_book_type},null,8,["modelValue","optionSelect","onKeyup"])]),t("div",ue,[t("div",he,[me,m(V,{modelValue:e.data.document_number,"onUpdate:modelValue":s[5]||(s[5]=o=>e.data.document_number=o),name:"document_number",rules:"required",disabled:e.edit&&e.data.book_type!=0,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),t("div",fe,[ge,m(L,{modelValue:e.data.as_of_date,"onUpdate:modelValue":s[6]||(s[6]=o=>e.data.as_of_date=o),name:"as_of_date",rules:"required",disabled:e.edit&&e.data.book_type!=0,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])])]),t("div",be,[ye,t("button",{type:"button",class:"add-booking-receive",onClick:s[7]||(s[7]=o=>i.add_booking_refers())},ke)]),(f(!0),g(q,null,T(e.data.booking_refers,(o,_)=>w((f(),g("div",{class:"group-between",key:_},[t("div",we,[m(V,{modelValue:o.receive_document_number,"onUpdate:modelValue":c=>o.receive_document_number=c,name:`codeRefers${_}`,type:"text",searchFlag:!0,onSearchClick:c=>i.booking_refers_click(o),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),t("div",Se,[m(V,{modelValue:o.desc,"onUpdate:modelValue":c=>o.desc=c,name:`nameRefers${_}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),t("div",Ve,[m(L,{modelValue:o.receive_date,"onUpdate:modelValue":c=>o.receive_date=c,name:`dateRefers${_}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),t("button",{type:"button",onClick:c=>i.delete_booking_refers(o,_),class:"button-delete ms-3"},qe,8,Ue)])])),[[S,o.flag!="delete"]])),128)),Te,t("div",Fe,[t("div",Le,[xe,m(C,{modelValue:e.data.subject,"onUpdate:modelValue":s[8]||(s[8]=o=>e.data.subject=o),name:"subject",rules:"required",disabled:e.edit&&e.data.book_type!=0,rows:"3"},null,8,["modelValue","disabled"])]),t("div",Ae,[t("div",ze,[Me,m(u,{modelValue:e.data.secret_id,"onUpdate:modelValue":s[9]||(s[9]=o=>e.data.secret_id=o),name:"secret_id",rules:"required",optionSelect:e.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","optionSelect","disabled"])]),t("div",Ie,[Re,m(u,{modelValue:e.data.speed_id,"onUpdate:modelValue":s[10]||(s[10]=o=>e.data.speed_id=o),name:"speed_id",rules:"required",optionSelect:e.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","optionSelect","disabled"])])])]),t("div",De,[je,m(C,{modelValue:e.data.send_to,"onUpdate:modelValue":s[11]||(s[11]=o=>e.data.send_to=o),name:"send_to",rows:"1",disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","disabled"])]),t("div",Ee,[Oe,m(C,{modelValue:e.data.book_desc,"onUpdate:modelValue":s[12]||(s[12]=o=>e.data.book_desc=o),name:"book_desc",rows:"1"},null,8,["modelValue"])]),t("div",Be,[Ne,m(A,{modelValue:e.data.tag,"onUpdate:modelValue":s[13]||(s[13]=o=>e.data.tag=o),name:"tag"},null,8,["modelValue"])])]),Pe,(f(!0),g(q,null,T(e.data.contracts,(o,_)=>(f(),g("div",{class:"group-detail",key:_},[t("div",Ke,[t("div",Je,[Ge,m(x,{modelValue:o.department_id,"onUpdate:modelValue":c=>o.department_id=c,name:`${_}department_id`,rules:"required",disabled:e.edit&&e.data.book_type!=0,onKeyup:s[14]||(s[14]=c=>i.keyup_department(c)),optionSelect:e.optionSelect.department_id},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])]),t("div",He,[Qe,m(u,{modelValue:o.receive_type,"onUpdate:modelValue":c=>o.receive_type=c,name:`${_}receive_type`,rules:"required",disabled:e.edit&&e.data.book_type!=0,optionSelect:e.optionSelect.receive_type},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])])]),o.department_id==1860?(f(),g("div",We,[t("div",Xe,[Ye,m(V,{modelValue:o.department_other,"onUpdate:modelValue":c=>o.department_other=c,name:`${_}department_other`,rules:o.department_id==1860?"required":"",disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","onUpdate:modelValue","name","rules","disabled"])]),Ze])):F("",!0),t("div",$e,[t("div",et,[tt,m(V,{modelValue:o.contract_name,"onUpdate:modelValue":c=>o.contract_name=c,name:`${_}contract_name`,disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),t("div",st,[t("div",at,[ot,m(V,{modelValue:o.contract_phone,"onUpdate:modelValue":c=>o.contract_phone=c,isNumber:!0,maxlength:"10",name:`${_}contract_phone`,disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),t("div",it,[lt,m(V,{modelValue:o.contract_mail,"onUpdate:modelValue":c=>o.contract_mail=c,rules:"email",name:`${_}contract_mail`,disabled:e.edit&&e.data.book_type!=0},null,8,["modelValue","onUpdate:modelValue","name","disabled"])])])])]))),128)),nt,t("div",dt,[t("div",rt,[t("div",ct,[_t,(f(!0),g(q,null,T(e.data.main_docs,(o,_)=>w((f(),g("div",{key:_},[t("div",pt,[t("div",ut,[t("button",{type:"button",class:v([e.edit&&e.data.book_type!=0?"none-pointer":"","button-file"]),onClick:c=>e.edit&&e.data.book_type!=0?"":i.upload_file(`main_docs${_}`)},[t("span",{class:v(o.filename?"":"no-data")},b(o.filename?o.filename:"หนังสือต้นเรื่อง"),3)],10,ht),t("div",{class:v(e.edit&&e.data.book_type!=0?"text disabled":"text pointer"),onClick:c=>e.edit&&e.data.book_type!=0?"":i.upload_file(`main_docs${_}`)},"แนบเอกสาร",10,mt),t("input",{type:"file",onChange:c=>i.file_set_change2(`main_docs${_}`,o,"main_docs"),name:`main_docs${_}`,style:{display:"none"},accept:"application/pdf"},null,40,ft)]),t("button",{type:"button",onClick:c=>i.download_file(o),class:"button-eye"},yt,8,gt),t("button",{type:"button",class:"del-department-3",disabled:e.edit&&e.data.book_type!=0,onClick:c=>i.delete_main_doc(o,_)},wt,8,vt)])])),[[S,o.flag!="delete"]])),128))]),t("div",St,[t("div",Vt,[Ut,t("button",{type:"button",class:"add-booking-receive",disabled:e.edit&&e.data.book_type!=0,onClick:s[15]||(s[15]=o=>i.upload_file("fileAttachment"))},Tt,8,Ct),t("input",{type:"file",multiple:"",onChange:s[16]||(s[16]=o=>i.file_attachment_add_change("fileAttachment")),name:"fileAttachment",style:{display:"none"}},null,32)]),(f(!0),g(q,null,T(e.data.attachments,(o,_)=>w((f(),g("div",{key:_},[t("div",Ft,[t("div",Lt,[t("button",{type:"button",class:v([e.edit&&e.data.book_type!=0?"none-pointer":"","button-file"]),onClick:c=>e.edit&&e.data.book_type!=0?"":i.upload_file(`attachments${_}`)},[t("span",{class:v(o.filename?"":"no-data")},b(o.filename?o.filename:"สิ่งที่ส่งมาด้วย"),3)],10,xt),t("div",{class:v(e.edit&&e.data.book_type!=0?"text disabled":"text pointer"),onClick:c=>e.edit&&e.data.book_type!=0?"":i.upload_file(`attachments${_}`)},"แนบเอกสาร",10,At),t("input",{type:"file",onChange:c=>i.file_set_change2(`attachments${_}`,o,"attachments"),name:`attachments${_}`,style:{display:"none"}},null,40,zt)]),t("button",{type:"button",onClick:c=>i.download_file(o),class:"button-eye"},Rt,8,Mt),t("button",{type:"button",class:"del-department-3",disabled:e.edit&&e.data.book_type!=0,onClick:c=>i.delete_attachments(o,_)},Et,8,Dt)])])),[[S,o.flag!="delete"]])),128))])])]),Ot,t("div",Bt,[t("div",Nt,[Pt,m(A,{modelValue:e.data.sendTo,"onUpdate:modelValue":s[17]||(s[17]=o=>e.data.sendTo=o),flagSearch:!0,optionSelect:e.optionSelect.sendTo,onKeyup:i.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),t("div",Kt,[t("div",Jt,[Gt,t("div",null,[t("input",{type:"file",onChange:s[18]||(s[18]=o=>i.file_set_change1("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(p=e.data.sendToFile)!=null&&p.filename?(f(),g("div",{key:1,class:"del-comment pointer",onClick:s[20]||(s[20]=o=>e.data.sendToFile.filename="")},[h(b((U=e.data.sendToFile)==null?void 0:U.filename)+" ",1),Qt])):(f(),g("button",{key:0,type:"button",class:"button-con pointer",onClick:s[19]||(s[19]=o=>i.upload_file("sendTo"))},[Ht,h(" แนบเอกสาร ")]))])]),m(C,{modelValue:e.data.comment,"onUpdate:modelValue":s[21]||(s[21]=o=>e.data.comment=o),name:"comment",rows:"3"},null,8,["modelValue"])]),t("div",Wt,[t("div",Xt,[Yt,m(u,{modelValue:e.data.process_type_id,"onUpdate:modelValue":s[22]||(s[22]=o=>e.data.process_type_id=o),name:"process_type_id",optionSelect:e.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),t("div",Zt,[$t,m(u,{modelValue:e.data.permission_id,"onUpdate:modelValue":s[23]||(s[23]=o=>e.data.permission_id=o),name:"permission_id",optionSelect:e.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),t("div",es,[t("div",null,[t("button",{type:"button",class:"button button-danger",onClick:s[24]||(s[24]=o=>(e.data.sendTo=[],e.data.comment="",e.data.process_type_id="",e.data.permission_id=""))},[ts,h(" ยกเลิก ")])]),t("div",null,[t("button",{type:"button",onClick:s[25]||(s[25]=o=>i.add_booking_follows()),class:"button button-success"},[ss,h(" เพิ่มการส่งต่อ ")])])]),e.data.booking_follows.length>0?(f(),g("div",as)):F("",!0),(f(!0),g(q,null,T(e.data.booking_follows,(o,_)=>{var c;return w((f(),g("div",{class:"group-add",key:_},[t("div",os,[t("div",is,"#"+b(_+1),1),t("img",{onClick:Ys=>i.delete_booking_follows(o,_),src:D,alt:"",class:"image-trash pointer"},null,8,ls)]),t("div",ns,[t("div",ds,"ส่งต่อ : "+b((o==null?void 0:o.department_name)||"-"),1),t("div",rs,"รูปแบบการดำเนินการ : "+b((o==null?void 0:o.process_type_name)||"-"),1),t("div",cs,"การมองเห็น : "+b((o==null?void 0:o.permission_name)||"-"),1)]),t("div",_s,"ความเห็น / คำสั่ง : "+b((o==null?void 0:o.comment)||"-"),1),t("div",ps,"เอกสารแนบ : "+b(((c=o==null?void 0:o.sendToFile)==null?void 0:c.filename)||"-"),1)])),[[S,o.flag!="delete"]])}),128))]),us,t("div",hs,[t("div",ms,[t("button",{type:"button",class:"button-danger",onClick:s[26]||(s[26]=o=>i.back())},[fs,h(" ปิด ")]),a.$route.params.id?(f(),g("button",{key:0,type:"button",class:"button-danger ms-3",onClick:s[27]||(s[27]=o=>i.delete_click())},[gs,h(" ลบ ")])):F("",!0)]),t("div",bs,[w(t("button",{type:"submit",class:"button-success button-save",onClick:s[28]||(s[28]=o=>e.flagSave=3)},[ys,h(" บันทึก ")],512),[[S,e.edit]]),w(t("button",{type:"submit",class:"button-primary",onClick:s[29]||(s[29]=o=>e.flagSave=1)},[vs,h(" บันทึกแบบร่าง ")],512),[[S,!e.edit]]),t("button",{type:"submit",class:"button-success",onClick:s[30]||(s[30]=o=>e.flagSave=2),disabled:((n=e.data.sendTo)==null?void 0:n.length)<1},[ws,h(" บันทึกและส่งต่อ ")],8,ks)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])]),a.$route.params.id?(f(),g("div",Ss,[t("div",Vs,[t("div",{class:"header pointer",onClick:s[31]||(s[31]=p=>(e.data.history.hide=!e.data.history.hide,i.historyClick(e.data.history.tab)))},[Us,t("div",Cs,[w(t("i",qs,null,512),[[S,!e.data.history.hide]]),w(t("i",Ts,null,512),[[S,e.data.history.hide]])])]),w(t("div",Fs,null,512),[[S,e.data.history.hide]]),w(t("div",Ls,[t("div",xs,[t("div",{class:v(["pointer",e.data.history.tab==1?"active":""]),onClick:s[32]||(s[32]=p=>(e.data.history.tab=1,i.historyClick(1)))},[As,h("ทั้งหมด")],2),t("div",{class:v(["pointer",e.data.history.tab==2?"active":""]),onClick:s[33]||(s[33]=p=>(e.data.history.tab=2,i.historyClick(2)))},[zs,h("ความเห็นคำสั่ง")],2),t("div",{class:v(["pointer",e.data.history.tab==3?"active":""]),onClick:s[34]||(s[34]=p=>(e.data.history.tab=3,i.historyClick(3)))},[Ms,h("แก้ไขข้อมูล")],2)]),e.data.history.data.filter(p=>e.data.history.tab==2?p.type==2:e.data.history.tab==3?p.type==0||p.type==1:p).length>0?(f(),g("div",Is,[(f(!0),g(q,null,T(e.data.history.data.filter(p=>e.data.history.tab==2?p.type==2:e.data.history.tab==3?p.type==0||p.type==1:p),(p,U)=>(f(),g("div",{class:v(["content-detail",U==0?"first":U==e.data.history.data.length-1?"end":""]),key:U},[t("div",Rs,[t("div",Ds,"#"+b(e.data.history.data.filter(n=>e.data.history.tab==2?n.type==2:e.data.history.tab==3?n.type==0||n.type==1:n).length-U),1),t("div",{class:v(["topic",p.bookaction_name=="ความเห็นคำสั่ง"?"blue":p.bookaction_name=="แก้ไขหนังสือ"?"yellow":"green"])},[t("i",{class:v(["bi icon-size",p.bookaction_name=="ความเห็นคำสั่ง"?"bi-chat-left":p.bookaction_name=="แก้ไขหนังสือ"?"bi-pencil-square":"bi-plus-lg"])},null,2),h(" "+b(p.bookaction_name),1)],2),t("div",js,[Es,h(" โดย "+b(p.updateBy)+" / "+b(p.subName),1)]),t("div",Os," วันที่ "+b(p.create_date),1),t("div",Bs,[Ns,h(" "+b(p.create_time),1)])]),(f(!0),g(q,null,T(p.booking_remarks,(n,o)=>(f(),g("ul",{class:"detail-list",key:o},[w(t("button",{class:"button-file",onClick:_=>i.download_file({filename:n.filepath.split("/").pop(),link:n.link})},b(n.filepath.split("/").pop()),9,Ps),[[S,n.filepath]]),t("li",null,[h(b(n.remark)+" "+b(n.comment)+" ",1),n.signature_img&&p.bookaction_name=="ความเห็นคำสั่ง"?(f(),g("div",Ks,[t("img",{src:n.signature_img,alt:"",class:"image-size"},null,8,Js)])):F("",!0)])]))),128)),U!=e.data.history.data.length-1?(f(),g("div",Gs)):F("",!0)],2))),128))])):(f(),g("div",Hs,Ws))],512),[[S,e.data.history.hide]])])])):F("",!0)]),m(M,{modalAlert:e.modalAlert},null,8,["modalAlert"]),m(I,{show:e.showLoading},null,8,["show"])])}const aa=O(J,[["render",Xs]]);export{aa as default};
