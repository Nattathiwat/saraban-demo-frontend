import{_ as T,r as b,o as g,c as f,a as t,t as k,b as c,d as R,w as F,v as E,F as x,h as A,n as S,j as m,i as j,g as I,k as q}from"./index-962b3eab.js";import{_ as P}from"./ballot-duotone-f2459825.js";import{_ as D}from"./plus-circle-duotone-64bd32fe.js";import{_ as U}from"./trash-alt-duotone-12d94c28.js";const z={name:"record-out-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},optionSelectDefault:{signer_id:[],department_dest_id:[],regis_id:[],send_method_id:[{name:"ตอบรับ",value:"0"},{name:"แจ้งเพื่อทราบ",value:"1"},{name:"ไม่ระบุ",value:"2"}]},showLoading:!1,edit:!1,flagSave:1,data:{create_type:"0",creater_id:"",book_category_id:"",book_type_id:"",secret_id:"12",speed_id:"12",booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],subject:"",tag:[],main_docs:[{filename:""}],attachments:[{filename:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"",permission_id:"",description:""},optionSelect:{creater_id:[],book_category_id:[{name:"นร : บันทึกข้อความ",value:"1"},{name:"นร : ทะเบียนบันทึกข้อความ(เวียน)",value:"2"}],book_type_id:[{name:"นร : บันทึกภายใน",value:"1"},{name:"นร : ทะเบียนบันทึกภายใน(มี Template)",value:"2"}],secret_id:[],speed_id:[],process_type_id:[],permission_id:[],sendTo:[]},modalRegiter:{showModal:!1,booking_register_details:[]}}},methods:{delete_click(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"บันทึกส่งออก ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.axios.delete(`/booking-note/${a.$route.params.id}`).then(()=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(e=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}}},keyup_send_to(a){this.optionSelect.sendTo=[],this.axios.get("/master-data/department",{params:{keyword:a.target.value}}).then(e=>{e.data.data&&(e.data.data.filter(l=>(l.value=l.id,l.name=l.department_full_name,l)),this.optionSelect.sendTo=e.data.data)})},keyupDepartment(a,e){e.optionSelect.department_dest_id=[],this.axios.get("/master-data/department",{params:{keyword:a.target.value}}).then(l=>{l.data.data&&(l.data.data.filter(i=>(i.value=i.id,i.name=i.department_full_name,i)),e.optionSelect.department_dest_id=l.data.data)})},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(a,e){a.flag=="edit"?a.flag="delete":this.data.booking_refers.splice(e,1),this.data.booking_refers.length-this.data.booking_refers.filter(l=>l.flag=="delete").length<1&&this.add_booking_refers()},add_attachments(){this.data.attachments.push({filename:"",flag:"add"})},delete_attachments(a,e){a.flag=="edit"?a.flag="delete":this.data.attachments.splice(e,1),this.data.attachments.length-this.data.attachments.filter(l=>l.flag=="delete").length<1&&this.add_attachments()},add_booking_follows(){this.data.sendTo.filter(a=>{if(!this.data.booking_follows.some(e=>e.department_id===a.value&&e.flag!="delete")){let e={department_id:parseInt(a.value),department_name:a.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add"};this.optionSelect.process_type_id.find(l=>{l.value==this.data.process_type_id&&(e.process_type_name=l.name)}),this.optionSelect.permission_id.find(l=>{l.value==this.data.permission_id&&(e.permission_name=l.name)}),this.data.booking_follows.push(e)}})},delete_booking_follows(a,e){a.flag=="edit"?a.flag="delete":this.data.booking_follows.splice(e,1)},booking_refers_click(a){a.receive_document_number?(this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:a.receive_document_number}}).then(e=>{this.showLoading=!1,e.data.data.length>0?(a.book_refer_id=e.data.data[0].id,a.original_refer_id=e.data.data[0].id,a.book_type=e.data.data[0].book_type,a.desc=e.data.data[0].desc,a.receive_date=e.data.data[0].receive_date):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(e=>{a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="")},download_file(a){a.filename&&a.link&&this.axios({method:"get",url:a.link,baseURL:"",responseType:"blob"}).then(e=>{const l=new Blob([e.data],{type:this.assetsUtils.getTypeFile(a.filename)});window.open(URL.createObjectURL(l))})},change_signer_id(a){this.data.booking_register_details[a].booking_registers.filter(e=>{e.signer_id=this.data.booking_register_details[a].signer_id})},change_signature(a){this.data.booking_register_details[a].booking_registers.filter(e=>{e.is_signed=this.data.booking_register_details[a].is_signed})},upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_set_change(a,e,l){for(var i=0;i<document.querySelector(`[name="${a}"]`).files.length;i++){let s=document.querySelector(`[name="${a}"]`).files[i];if(l=="main_docs"){if(s.type=="application/pdf"){let d={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data[l][e]={...this.data[l][e],...d},document.querySelector(`[name="${a}"]`).value=null}}else{let d={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data[l][e]={...this.data[l][e],...d},document.querySelector(`[name="${a}"]`).value=null}}},file_attachment_change(a,e){for(var l=0;l<document.querySelector(`[name="${a}"]`).files.length;l++){let i=document.querySelector(`[name="${a}"]`).files[l],s={filename:i.name,type:i.type,link:URL.createObjectURL(i),size:(i.size/1024/1024).toFixed(2)+" MB",file:i};this.data.attachments[e]={...this.data.attachments[e],...s},document.querySelector(`[name="${a}"]`).value=null}},back(){this.$router.push({name:"subministry-work.record-out",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let a=this;console.log("ccc"),this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.upload_file_all()}}},async on_submit_modal(){for(let a=0;a<this.modalRegiter.booking_register_details.length;a++){let e=this.modalRegiter.booking_register_details[a],l="",i="",s="";e.optionSelect.regis_id.find(r=>{r.value==e.regis_id&&(l=r.name)}),e.optionSelect.book_out_num_type.find(r=>{r.value==e.book_out_num_type&&(i=r.name)}),e.optionSelect.send_method_id.find(r=>{r.value==e.send_method_id&&(s=r.name)});let d={optionSelect:{signer_id:this.optionSelectDefault.signer_id},book_out_num_type:parseInt(e.book_out_num_type),book_out_num_type_desc:i,send_method_id:parseInt(e.send_method_id),send_method_id_desc:s,regis_date:e.regis_date,regis_id:parseInt(e.regis_id),regis_id_desc:l,num:"1",signer_id:"",is_signed:!1,flag:"add",main_filename:"",attach_filename:"",booking_registers:[]};if(e.department_dest_id.length>0)if(e.book_out_num_type==0)this.showLoading=!0,await this.axios.post("/booking-note/generate-number",{department_id:parseInt(localStorage.getItem("department_id")),year:this.assetsUtils.currentDate().split("/")[2]-543}).then(r=>{this.showLoading=!1,e.department_dest_id.filter(u=>{d.booking_registers.push({book_out_num:r.data.data.out_document_number,greeting:"",department_dest_id:u.value,main_filename:"",attach_filename:"",signer_id:"",is_signed:!1,flag:"add",optionSelect:{signer_id:this.optionSelectDefault.signer_id,department_dest_id:[...this.optionSelectDefault.department_dest_id,u]}})})}).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}});else for(let r=0;r<e.department_dest_id.length;r++){let u=e.department_dest_id[r];this.showLoading=!0,await this.axios.post("/booking-note/generate-number",{department_id:parseInt(localStorage.getItem("department_id")),year:this.assetsUtils.currentDate().split("/")[2]-543}).then(v=>{this.showLoading=!1,d.booking_registers.push({book_out_num:v.data.data.out_document_number,greeting:"",department_dest_id:u.value,main_filename:"",attach_filename:"",signer_id:"",is_signed:!1,flag:"add",optionSelect:{signer_id:this.optionSelectDefault.signer_id,department_dest_id:[...this.optionSelectDefault.department_dest_id,u]}})}).catch(v=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:v.response.data.message}})}else this.showLoading=!0,await this.axios.post("/booking-note/generate-number",{department_id:parseInt(localStorage.getItem("department_id")),year:this.assetsUtils.currentDate().split("/")[2]-543}).then(r=>{this.showLoading=!1,d.booking_registers.push({book_out_num:r.data.data.out_document_number,greeting:"",department_dest_id:"",main_filename:"",attach_filename:"",signer_id:"",is_signed:!1,flag:"add",optionSelect:{signer_id:this.optionSelectDefault.signer_id,department_dest_id:this.optionSelectDefault.department_dest_id}})});this.data.booking_register_details.push(d)}this.modalRegiter.showModal=!1},upload_file_all(){console.log("nnn");let a=this.assetsUtils.currentDate(),e=[],l=[];this.data.attachments.filter(i=>{if(i.file){let s=new FormData;s.append("file",i.file),s.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),e.push(this.axios.post("/upload/single",s,{headers:{"Content-Type":"multipart/form-data"}}))}}),console.log("ppp"),e.length>0?this.axios.all([...e]).then(this.axios.spread((...i)=>{i.filter((s,d)=>{l.push({...this.data.attachments[d],...s.data.data,filepath:s.data.data.path})}),e.length==l.length&&this.upload_file_all2(l)})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}):this.upload_file_all2(l)},upload_file_all2(){console.log("nnn");let a=this.assetsUtils.currentDate(),e=[],l=[];this.data.main_docs.filter(i=>{if(i.file){let s=new FormData;s.append("file",i.file),s.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),e.push(this.axios.post("/upload/single",s,{headers:{"Content-Type":"multipart/form-data"}}))}}),console.log("ppp"),e.length>0?this.axios.all([...e]).then(this.axios.spread((...i)=>{i.filter((s,d)=>{l.push({...this.data.main_docs[d],...s.data.data,filepath:s.data.data.path})}),e.length==l.length&&this.call_api_save(l)})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}}):this.call_api_save(l)},call_api_save(a){console.log("xxx");let e=a,l=this,i="";this.data.tag.filter(d=>{i+=d.name+","}),i=i.slice(0,-1),this.data.sendTo.filter(d=>{if(!this.data.booking_follows.some(r=>r.department_id===d.value&&r.flag!="delete")){let r={department_id:parseInt(d.value),department_name:d.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add"};this.optionSelect.process_type_id.find(u=>{u.value==this.data.process_type_id&&(r.process_type_name=u.name)}),this.optionSelect.permission_id.find(u=>{u.value==this.data.permission_id&&(r.permission_name=u.name)}),this.data.booking_follows.push(r)}});let s={create_type:parseInt(this.data.create_type),creater_id:this.data.creater_id?parseInt(this.data.creater_id):parseInt(localStorage.getItem("user_id")),book_category_id:parseInt(this.data.book_category_id),book_type_id:parseInt(this.data.book_type_id),secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),subject:this.data.subject,user_id:parseInt(localStorage.getItem("user_id")),tag:i,attachments:e,booking_refers:this.data.booking_refers.filter(d=>d.book_refer_id),booking_follows:this.data.booking_follows,flag:this.flagSave==1?"draft":""};this.showLoading=!1,this.edit?this.flagSave==1?(this.showLoading=!0,this.axios.put(`/booking-note/${this.$route.params.id}`,s).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(d=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})):(this.showLoading=!0,this.axios.put(`/booking-note/${this.$route.params.id}`,s).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(d=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})):this.flagSave==1?(this.showLoading=!0,this.axios.post("/booking-note",s).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(d=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})):(this.showLoading=!0,this.axios.post("/booking-note",s).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(d=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}}))},api_detail(){this.showLoading=!0,this.axios.get(`/booking-note/${this.$route.params.id}`).then(a=>{var e,l;this.showLoading=!1,this.data.regis_date=a.data.data.created_at,this.data=JSON.parse(JSON.stringify(a.data.data)),this.data.tag=[],(e=a.data.data.tag)==null||e.split(",").filter(i=>{i&&this.data.tag.push({value:"",name:i})}),this.data.sendTo=[],this.data.booking_refers=[],a.data.data.booking_refers.filter(i=>{i.flag="edit",this.axios.get(`/master-data/book-refer/${i.book_type}/${i.id}`).then(s=>{this.data.booking_refers.push({...s.data.data,...i})}).catch(s=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}),this.data.booking_register_details.filter(i=>{i.optionSelect={signer_id:this.optionSelectDefault.signer_id},i.signer_id="",i.num="1",i.flag="edit"}),this.data.attachments.filter(i=>(i.flag="edit",i.link=i.filepath?this.backendport+"/"+i.filepath:"",i)),this.data.booking_follows.filter(i=>(i.flag="edit",i)),(((l=a.data.data.booking_refers)==null?void 0:l.length)<1||!a.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}]),(this.data.attachments.length<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}])}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},api_master(){this.showLoading=!0;const a=this.axios.get("/master-data/book-type"),e=this.axios.get("/master-data/speed"),l=this.axios.get("/master-data/secret"),i=this.axios.get("/master-data/process-type"),s=this.axios.get("/master-data/permission-type"),d=this.axios.get("/user"),r=this.axios.get("/user"),u=this.axios.get("/master-data/register-type"),v=this.axios.get("/master-data/department");this.axios.all([a,e,l,i,s,d,r,u,v]).then(this.axios.spread((...h)=>{this.showLoading=!1;const y=h[0],w=h[1],V=h[2],L=h[3],C=h[4],o=h[5],_=h[6],p=h[7],M=h[8];y.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),w.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),V.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),L.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),C.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),o.data.data.filter(n=>(n.value=n.id,n.name=n.fname+" "+n.lname,n)),_.data.data.filter(n=>(n.value=n.id,n.name=n.fname+" "+n.lname,n)),p.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),M.data.data.filter(n=>(n.value=n.id,n.name=n.department_full_name,n)),this.optionSelect.book_type_id=y.data.data,this.optionSelect.speed_id=w.data.data,this.optionSelect.secret_id=V.data.data,this.optionSelect.process_type_id=L.data.data,this.optionSelect.permission_id=C.data.data,this.optionSelect.creater_id=o.data.data,this.optionSelectDefault.signer_id=_.data.data,this.optionSelectDefault.regis_id=p.data.data,this.optionSelectDefault.department_dest_id=M.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(h=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},B={class:"booking-out-detail"},N={class:"group-overflow"},O={class:"detail"},J={class:"group-head"},K={class:"group-first"},G=t("img",{src:P,alt:"",class:"icon-size"},null,-1),H={class:"name"},Q=t("div",{class:"group-image"}," ออกเลขบันทึกภายใน ",-1),W=[Q],X=t("div",{class:"line"},null,-1),Y={class:"group-detail"},Z={class:"group-input"},$=t("div",{class:"name"},"เจ้าของหนังสือ",-1),ee={class:"d-flex"},te={class:"group-input mb-0"},se=t("div",{class:"name"},[m("ชื่อ - นามสกุล "),t("span",{class:"required"},"*")],-1),ae={class:"group-between"},oe={class:"group-input left"},ie=t("div",{class:"name"},[m("ทะเบียนบันทึกข้อความ"),t("span",{class:"required"},"*")],-1),le={class:"group-input"},ne=t("div",{class:"name"},[m("ลงวันที่"),t("span",{class:"required"},"*")],-1),de={class:"group-between"},re={class:"group-input left"},_e=t("div",{class:"name"},[m("ชนิดของหนังสือ "),t("span",{class:"required"},"*")],-1),ce={class:"group-input left"},ue=t("div",{class:"name"},[m("ชั้นความลับ "),t("span",{class:"required"},"*")],-1),pe={class:"group-input"},he=t("div",{class:"name"},[m("ความเร่งด่วน "),t("span",{class:"required"},"*")],-1),me={class:"group-between"},ge={class:"group-input"},fe=t("div",{class:"name"},[m("ชื่อเรื่อง "),t("span",{class:"required"},"*")],-1),be={class:"group-between"},ve={class:"group-input"},ke=t("div",{class:"name"},"เรียน",-1),ye={class:"group-between"},Se={class:"group-input"},we=t("div",{class:"name"},"รายละเอียด",-1),Ve={class:"group-between"},Le={class:"group-input"},Ce=t("div",{class:"name"},"Tag สำหรับค้นหา",-1),xe={class:"group-input d-flex align-items-center"},Ae=t("div",{class:"name"},"อ้างอิงถึง",-1),Ue=t("div",{class:"group-image"},[t("img",{src:D,alt:"",class:"icon-plus"}),m(" เพิ่มเอกสารอ้างอิง ")],-1),qe=[Ue],Me={class:"group-input left"},Ie={class:"group-input left"},De={class:"group-input d-flex"},Te=["onClick"],Re=t("img",{src:U,alt:"",class:"image-trash pointer"},null,-1),Fe=[Re],Ee=t("div",{class:"line"},null,-1),je={class:"group-detail"},Pe={class:"group-between"},ze={class:"group-input left"},Be=t("div",{class:"name"},"บันทึกต้นเรื่อง",-1),Ne={class:"group-input-file"},Oe=["onClick"],Je=["onClick"],Ke=["onChange","name"],Ge=["onClick"],He=t("i",{class:"bi bi-eye icon-eye"},null,-1),Qe=[He],We=["disabled","onClick"],Xe=t("img",{src:U,alt:"",class:"image-trash"},null,-1),Ye=[Xe],Ze={class:"group-input"},$e={class:"group-input d-flex align-items-center"},et=t("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),tt=["disabled"],st=t("div",{class:"group-image"},[t("img",{src:D,alt:"",class:"icon-plus"}),m(" เพิ่มไฟล์ ")],-1),at=[st],ot={class:"group-input-file"},it=["onClick"],lt=["onClick"],nt=["onChange","name"],dt=["onClick"],rt=t("i",{class:"bi bi-eye icon-eye"},null,-1),_t=[rt],ct=["disabled","onClick"],ut=t("img",{src:U,alt:"",class:"image-trash"},null,-1),pt=[ut],ht=t("div",{class:"line"},null,-1),mt={class:"send-to"},gt={class:"group-input"},ft=t("div",{class:"name"},[m("ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) "),t("span",{class:"required"},"*กรุณาใส่รายชื่อที่ต้องการส่งต่อ")],-1),bt={class:"group-input"},vt=t("div",{class:"name"},"ความเห็น / คำสั่ง",-1),kt={class:"group-between"},yt={class:"group-input left"},St=t("div",{class:"name"},"รูปแบบการดำเนินการ",-1),wt={class:"group-input"},Vt=t("div",{class:"name"},"การมองเห็น",-1),Lt={class:"d-flex align-items-center justify-content-between"},Ct=t("img",{src:I,alt:"times-circle",class:"icon-times-circle"},null,-1),xt=t("img",{src:q,alt:"times-circle",class:"icon-check-circle"},null,-1),At={key:0,class:"line mt-3"},Ut={class:"d-flex justify-content-between"},qt={class:"title"},Mt=["onClick"],It={class:"d-flex ms-2 mt-2"},Dt={class:"name"},Tt={class:"name ms-5"},Rt={class:"name ms-5"},Ft={class:"name ms-2 mt-1"},Et=t("div",{class:"line mt-4"},null,-1),jt={class:"group-footer"},Pt={class:"footer-left d-flex"},zt=t("img",{src:I,alt:"times-circle",class:"icon-times-circle"},null,-1),Bt={class:"footer-right"},Nt=t("img",{src:q,alt:"times-circle",class:"icon-check-circle"},null,-1),Ot=["disabled"],Jt=t("img",{src:q,alt:"times-circle",class:"icon-check-circle"},null,-1);function Kt(a,e,l,i,s,d){const r=b("cpn-radio"),u=b("cpn-select"),v=b("cpn-datepicker"),h=b("cpn-textArea"),y=b("cpn-input"),w=b("cpn-input-tags"),V=b("Form"),L=b("cpn-modal-alert"),C=b("cpn-loading");return g(),f("div",B,[t("div",N,[t("div",O,[t("div",J,[t("div",K,[G,t("div",H,k(s.edit?"แก้ไขบันทึกส่งออก":"สร้างบันทึกส่งออก"),1)]),t("button",{type:"button",class:"add-booking-out",onClick:e[0]||(e[0]=o=>a.gennumber())},W)]),X,c(V,{onSubmit:d.on_submit,onInvalidSubmit:a.onInvalidSubmit},{default:R(()=>[t("div",Y,[t("div",Z,[$,t("div",ee,[c(r,{modelValue:s.data.create_type,"onUpdate:modelValue":e[1]||(e[1]=o=>s.data.create_type=o),name:"my1",class:"",style:{"min-width":"120px"},value:"0",label:"สร้างเอง",onChange:e[2]||(e[2]=o=>s.data.creater_id="")},null,8,["modelValue"]),c(r,{modelValue:s.data.create_type,"onUpdate:modelValue":e[3]||(e[3]=o=>s.data.create_type=o),name:"my2",class:"ms-5 me-5",style:{"min-width":"120px"},value:"1",label:"สร้างแทน",onChange:e[4]||(e[4]=o=>s.data.creater_id="")},null,8,["modelValue"]),F(t("div",te,[se,c(u,{modelValue:s.data.creater_id,"onUpdate:modelValue":e[5]||(e[5]=o=>s.data.creater_id=o),name:"creater_id",optionSelect:s.optionSelect.creater_id,rules:s.data.create_type==1?"required":"",placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect","rules"])],512),[[E,s.data.create_type==1]])])]),t("div",ae,[t("div",oe,[ie,c(u,{modelValue:s.data.book_category_id,"onUpdate:modelValue":e[6]||(e[6]=o=>s.data.book_category_id=o),name:"book_category_id",rules:"required",optionSelect:s.optionSelect.book_category_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),t("div",le,[ne,c(v,{modelValue:s.data.receive_date,"onUpdate:modelValue":e[7]||(e[7]=o=>s.data.receive_date=o),name:"receive_date",rules:"required",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])]),t("div",de,[t("div",re,[_e,c(u,{modelValue:s.data.book_type_id,"onUpdate:modelValue":e[8]||(e[8]=o=>s.data.book_type_id=o),name:"book_type_id",rules:"required",optionSelect:s.optionSelect.book_type_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),t("div",ce,[ue,c(u,{modelValue:s.data.secret_id,"onUpdate:modelValue":e[9]||(e[9]=o=>s.data.secret_id=o),name:"secret_id",rules:"required",optionSelect:s.optionSelect.secret_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),t("div",pe,[he,c(u,{modelValue:s.data.speed_id,"onUpdate:modelValue":e[10]||(e[10]=o=>s.data.speed_id=o),name:"speed_id",rules:"required",optionSelect:s.optionSelect.speed_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),t("div",me,[t("div",ge,[fe,c(h,{modelValue:s.data.subject,"onUpdate:modelValue":e[11]||(e[11]=o=>s.data.subject=o),name:"subject",rules:"required",rows:"1"},null,8,["modelValue"])])]),t("div",be,[t("div",ve,[ke,c(y,{modelValue:s.data.sendto,"onUpdate:modelValue":e[12]||(e[12]=o=>s.data.sendto=o),name:"sendto",type:"text"},null,8,["modelValue"])])]),t("div",ye,[t("div",Se,[we,c(h,{modelValue:s.data.description,"onUpdate:modelValue":e[13]||(e[13]=o=>s.data.description=o),name:"record_out_description",rows:"1"},null,8,["modelValue"])])]),t("div",Ve,[t("div",Le,[Ce,c(w,{modelValue:s.data.tag,"onUpdate:modelValue":e[14]||(e[14]=o=>s.data.tag=o),name:"tag",placeholder:"Enter a new tag"},null,8,["modelValue"])])]),t("div",xe,[Ae,t("button",{type:"button",class:"add-booking-out",onClick:e[15]||(e[15]=o=>d.add_booking_refers())},qe)]),(g(!0),f(x,null,A(s.data.booking_refers.filter(o=>o.flag!="delete"),(o,_)=>(g(),f("div",{class:"group-between",key:_},[t("div",Me,[c(y,{modelValue:o.receive_document_number,"onUpdate:modelValue":p=>o.receive_document_number=p,name:`receive_document_number${_}`,type:"text",searchFlag:!0,onSearchClick:p=>d.booking_refers_click(o),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),t("div",Ie,[c(y,{modelValue:o.desc,"onUpdate:modelValue":p=>o.desc=p,name:`nameRefers${_}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),t("div",De,[c(v,{modelValue:o.receive_date,"onUpdate:modelValue":p=>o.receive_date=p,name:`dateRefers${_}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),t("button",{type:"button",onClick:p=>d.delete_booking_refers(o,_),class:"button-delete ms-3"},Fe,8,Te)])]))),128))]),Ee,t("div",je,[t("div",Pe,[t("div",ze,[Be,(g(!0),f(x,null,A(s.data.main_docs.filter(o=>o.flag!="delete"),(o,_)=>(g(),f("div",{class:"d-flex mb-3",key:_},[t("div",Ne,[t("button",{type:"button",class:S([s.edit?"none-pointer":"","button-file"]),onClick:p=>s.edit?"":d.upload_file(`main_docs${_}`)},[t("span",{class:S(o.filename?"":"no-data")},k(o.filename?o.filename:""),3)],10,Oe),t("div",{class:S(s.edit?"text disabled":"text pointer"),onClick:p=>s.edit?"":d.upload_file(`main_docs${_}`)},"แนบเอกสาร",10,Je),t("input",{type:"file",onChange:p=>d.file_set_change(`main_docs${_}`,_,"main_docs"),name:`main_docs${_}`,style:{display:"none"},accept:"application/pdf"},null,40,Ke)]),t("button",{type:"button",onClick:p=>d.download_file(o),class:"button-eye"},Qe,8,Ge),t("button",{type:"button",class:"del-department-3",disabled:s.edit,onClick:p=>s.data.main_docs.length>1?s.data.main_docs.splice(_,1):o.filename=""},Ye,8,We)]))),128))]),t("div",Ze,[t("div",$e,[et,t("button",{type:"button",class:"add-booking-receive",disabled:s.edit,onClick:e[16]||(e[16]=o=>d.add_attachments())},at,8,tt)]),(g(!0),f(x,null,A(s.data.attachments.filter(o=>o.flag!="delete"),(o,_)=>(g(),f("div",{class:"d-flex mb-3",key:_},[t("div",ot,[t("button",{type:"button",class:S([s.edit?"none-pointer":"","button-file"]),onClick:p=>s.edit?"":d.upload_file(`attachments${_}`)},[t("span",{class:S(o.filename?"":"no-data")},k(o.filename?o.filename:""),3)],10,it),t("div",{class:S(s.edit?"text disabled":"text pointer"),onClick:p=>s.edit?"":d.upload_file(`attachments${_}`)},"แนบเอกสาร",10,lt),t("input",{type:"file",onChange:p=>d.file_set_change(`attachments${_}`,_,"attachments"),name:`attachments${_}`,style:{display:"none"}},null,40,nt)]),t("button",{type:"button",onClick:p=>d.download_file(o),class:"button-eye"},_t,8,dt),t("button",{type:"button",class:"del-department-3",disabled:s.edit,onClick:p=>d.delete_attachments(o,_)},pt,8,ct)]))),128))])])]),ht,t("div",mt,[t("div",gt,[ft,c(w,{modelValue:s.data.sendTo,"onUpdate:modelValue":e[17]||(e[17]=o=>s.data.sendTo=o),flagSearch:!0,optionSelect:s.optionSelect.sendTo,onKeyup:d.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),t("div",bt,[vt,c(h,{modelValue:s.data.comment,"onUpdate:modelValue":e[18]||(e[18]=o=>s.data.comment=o),name:"comment",rows:"3"},null,8,["modelValue"])]),t("div",kt,[t("div",yt,[St,c(u,{modelValue:s.data.process_type_id,"onUpdate:modelValue":e[19]||(e[19]=o=>s.data.process_type_id=o),name:"process_type_id",optionSelect:s.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),t("div",wt,[Vt,c(u,{modelValue:s.data.permission_id,"onUpdate:modelValue":e[20]||(e[20]=o=>s.data.permission_id=o),name:"permission_id",optionSelect:s.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),t("div",Lt,[t("div",null,[t("button",{type:"button",class:"button button-danger",onClick:e[21]||(e[21]=o=>(s.data.sendTo=[],s.data.comment="",s.data.process_type_id="",s.data.permission_id=""))},[Ct,m(" ยกเลิก ")])]),t("div",null,[t("button",{type:"button",onClick:e[22]||(e[22]=o=>d.add_booking_follows()),class:"button button-success"},[xt,m(" เพิ่มการส่งต่อ ")])])]),s.data.booking_follows.length>0?(g(),f("div",At)):j("",!0),(g(!0),f(x,null,A(s.data.booking_follows.filter(o=>o.flag!="delete"),(o,_)=>(g(),f("div",{class:"group-add",key:_},[t("div",Ut,[t("div",qt,"#"+k(_+1),1),t("img",{onClick:p=>d.delete_booking_follows(o,_),src:U,alt:"",class:"image-trash pointer"},null,8,Mt)]),t("div",It,[t("div",Dt,"ส่งต่อ : "+k((o==null?void 0:o.department_name)||"-"),1),t("div",Tt,"รูปแบบการดำเนินการ : "+k((o==null?void 0:o.process_type_name)||"-"),1),t("div",Rt,"การมองเห็น : "+k((o==null?void 0:o.permission_name)||"-"),1)]),t("div",Ft,"ความเห็น / คำสั่ง : "+k((o==null?void 0:o.comment)||"-"),1)]))),128))]),Et,t("div",jt,[t("div",Pt,[t("button",{type:"button",class:"button-danger",onClick:e[23]||(e[23]=o=>d.back())},[zt,m(" ปิด ")])]),t("div",Bt,[t("button",{type:"submit",class:"button-primary",onClick:e[24]||(e[24]=o=>s.flagSave=1)},[Nt,m(" บันทึกแบบร่าง ")]),t("button",{type:"submit",class:"button-success",onClick:e[25]||(e[25]=o=>s.flagSave=2),disabled:s.data.sendTo.length<1},[Jt,m(" บันทึกและส่งต่อ ")],8,Ot)])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),c(L,{modalAlert:s.modalAlert},null,8,["modalAlert"]),c(C,{show:s.showLoading},null,8,["show"])])}const Xt=T(z,[["render",Kt]]);export{Xt as default};