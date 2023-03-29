import{_ as D,r as v,o as m,c as g,a as e,t as b,b as p,d as I,F as x,h as U,n as y,j as h,i as j,w as R,g as A,k as L,v as E}from"./index-2bae115c.js";import{_ as z}from"./ballot-duotone-f2459825.js";import{_ as M}from"./plus-circle-duotone-64bd32fe.js";import{_ as q}from"./trash-alt-duotone-12d94c28.js";import{_ as N,a as O}from"./x-solid-74fa126d.js";const B={name:"record-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{original_flag:!1,book_category_id:"",book_type_id:"",receive_date:"",receive_time:"",document_number:"",as_of_date:"",subject:"",secret_id:"",speed_id:"",send_to:"",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],main_docs_del:[],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"12",permission_id:"8",book_type:"",human_flag:!1,response_id:""},optionSelect:{book_category_id:[],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]},optionSelectDefault:{book_category_id:[]}}},methods:{add_attachments(){this.data.attachments.push({filename:"",flag:"add"})},delete_attachments(a,s){a.flag=="edit"?a.flag="delete":this.data.attachments.splice(s,1),this.data.attachments.length-this.data.attachments.filter(d=>d.flag=="delete").length<1&&this.add_attachments()},delete_main_docs(a,s){a.flag=="edit"?a.flag="delete":this.data.main_docs.splice(s,1)},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(a,s){a.flag=="edit"?a.flag="delete":this.data.booking_refers.splice(s,1),this.data.booking_refers.length-this.data.booking_refers.filter(d=>d.flag=="delete").length<1&&this.add_booking_refers()},booking_refers_click(a){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:a.receive_document_number}}).then(s=>{this.showLoading=!1,s.data.data.length>0?(a.book_refer_id=s.data.data[0].id,a.original_refer_id=s.data.data[0].id,a.book_type=s.data.data[0].book_type,a.desc=s.data.data[0].desc,a.receive_date=s.data.data[0].receive_date):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(s=>{a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},delete_click(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"บันทึกรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.axios.delete(`/booking-receive/receive-note/${a.$route.params.id}`).then(()=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(s=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}}},keyup_department(a){this.optionSelect.department_id=[],this.axios.get("/master-data/department-user",{params:{keyword:a.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d.human_flag=d.human_flag,d.response_type=d.type,d)),this.optionSelect.department_id=s.data.data)})},keyup_send_to(a){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user",{params:{keyword:a.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d.human_flag=d.human_flag,d.response_type=d.type,d)),this.optionSelect.sendTo=s.data.data)})},add_booking_follows(){this.data.sendTo.filter(a=>{if(!this.data.booking_follows.some(s=>s.department_id===a.value&&s.flag!="delete")){let s={department_id:parseInt(a.value),department_name:a.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:a.human_flag,response_id:parseInt(a.value),sendToFile:{...this.data.sendToFile,filename:JSON.parse(JSON.stringify(this.data.sendToFile.filename))},response_type:a.type};this.optionSelect.process_type_id.find(d=>{d.value==this.data.process_type_id&&(s.process_type_name=d.name)}),this.optionSelect.permission_id.find(d=>{d.value==this.data.permission_id&&(s.permission_name=d.name)}),this.data.booking_follows.push(s)}})},delete_booking_follows(a,s){a.flag=="edit"?a.flag="delete":this.data.booking_follows.splice(s,1)},download_file(a){a.filename&&a.link&&this.axios({method:"get",url:a.link,baseURL:"",responseType:"blob"}).then(s=>{const d=new Blob([s.data],{type:this.assetsUtils.getTypeFile(a.filename)});window.open(URL.createObjectURL(d))})},upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_set_change(a,s,d){for(var c=0;c<document.querySelector(`[name="${a}"]`).files.length;c++){let t=document.querySelector(`[name="${a}"]`).files[c];if(d=="main_docs"){if(t.type=="application/pdf"){let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[d][s]={...this.data[d][s],...i},document.querySelector(`[name="${a}"]`).value=null}}else if(d=="sendTo"){let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data.sendToFile=i}else{let i={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[d][s]={...this.data[d][s],...i},document.querySelector(`[name="${a}"]`).value=null}}},back(){this.$router.push({name:"subministry-work.record-receive",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.upload_file_all()}}},upload_file_all(){let a=this.assetsUtils.currentDate(),s=[],d=[],c=[],t=[],i=[];this.data.main_docs.filter(n=>{if(console.log("upload1"),n.file){let l=new FormData;l.append("file",n.file),l.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),s.push(this.axios.post("/upload/single",l,{headers:{"Content-Type":"multipart/form-data"}}))}else n.id&&i.push({filename:n.filename,filepath:n.filepath})}),this.data.attachments.filter(n=>{if(n.file){let l=new FormData;l.append("file",n.file),l.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),d.push(this.axios.post("/upload/single",l,{headers:{"Content-Type":"multipart/form-data"}}))}}),s.length>0&&this.axios.all([...s]).then(this.axios.spread((...n)=>{n.filter((l,f)=>{c.push({...this.data.main_docs[f],...l.data.data,filepath:l.data.data.path})}),s.length==c.length&&d.length==t.length&&this.call_api_save([...c,...i],t)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}),d.length>0&&this.axios.all([...d]).then(this.axios.spread((...n)=>{n.filter((l,f)=>{t.push({...this.data.attachments[f],...l.data.data,filepath:l.data.data.path})}),s.length==c.length&&d.length==t.length&&this.call_api_save([...c,...i],t)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}),s.length<1&&d.length<1&&this.call_api_save([...i],[])},upload_file_all2(a){let s=this.assetsUtils.currentDate(),d=[],c=[];this.data.main_docs.filter(t=>{if(t.file){let i=new FormData;i.append("file",t.file),i.append("dst",`${s.split("/")[0]+"-"+s.split("/")[1]+"-"+s.split("/")[2]}`),d.push(this.axios.post("/upload/single",i,{headers:{"Content-Type":"multipart/form-data"}}))}}),d.length>0?this.axios.all([...d]).then(this.axios.spread((...t)=>{t.filter((i,n)=>{c.push({...this.data.main_docs[n],...i.data.data,filepath:i.data.data.path})}),d.length==c.length&&this.call_api_save(c,a)})).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}}):this.call_api_save(c,a)},upload_file_all3(a,s){var c;let d=this.assetsUtils.currentDate();if((c=this.data.sendToFile)!=null&&c.filename){let t=new FormData;t.append("file",this.data.sendToFile.file),t.append("dst",`${d.split("/")[0]+"-"+d.split("/")[1]+"-"+d.split("/")[2]}`),this.axios.post("/upload/single",t,{headers:{"Content-Type":"multipart/form-data"}}).then(i=>{this.data.attach_filename=i.data.data.filename,this.data.attach_filepath=i.data.data.path,this.upload_file_all4(a,s)}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}else console.log("elseup3"),this.upload_file_all4(a,s)},upload_file_all4(a,s){let d=this.assetsUtils.currentDate(),c=[],t=[];this.data.booking_follows.filter(i=>{var n;if((n=i.sendToFile)!=null&&n.filename){console.log("up4");let l=new FormData;l.append("file",i.sendToFile.file),l.append("dst",`${d.split("/")[0]+"-"+d.split("/")[1]+"-"+d.split("/")[2]}`),c.push(this.axios.post("/upload/single",l,{headers:{"Content-Type":"multipart/form-data"}}))}}),c.length>0?(console.log("arr3"),this.axios.all([...c]).then(this.axios.spread((...i)=>{console.log("then4"),i.filter((n,l)=>{this.data.booking_follows[l].attach_filepath=n.data.data.path,this.data.booking_follows[l].attach_filename=n.data.data.filename,t.push({...this.data.booking_follows[l],...n.data.data,filepath:n.data.data.path})}),c.length==t.length&&(console.log("call"),this.call_api_save(a,s))})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):(console.log("elseup4"),this.call_api_save(a,s))},call_api_save([...a],[],s){let d=this,c="";this.data.tag.filter(i=>{c+=i.name+","}),c=c.slice(0,-1),this.data.sendTo.filter(i=>{if(!this.data.booking_follows.some(n=>n.department_id===i.value&&n.flag!="delete")){let n={department_id:parseInt(i.value),department_name:i.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:i.human_flag,response_id:parseInt(i.value),response_type:i.type,attach_filepath:this.data.attach_filepath,attach_filename:this.data.attach_filename,sendToFile:{filename:this.data.attach_filename}};console.log(i),this.optionSelect.process_type_id.find(l=>{l.value==this.data.process_type_id&&(n.process_type_name=l.name)}),this.optionSelect.permission_id.find(l=>{l.value==this.data.permission_id&&(n.permission_name=l.name)}),this.data.booking_follows.push(n)}});let t={original_flag:this.data.original_flag,regis_id:parseInt(this.data.book_category_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:c,main_docs:[...a,...this.data.main_docs_del],attachments:s,booking_refers:this.data.booking_refers.filter(i=>i.book_refer_id),booking_follows:this.data.booking_follows,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":"",book_type:parseInt(this.$route.query.book_type),receive_regis_id:parseInt(this.$route.query.regis_id)};this.edit&&(this.flagSave==1?(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){d.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})):(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){d.back()}}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})))},api_detail(){this.showLoading=!0,this.axios.get(`/booking-receive/receive-note/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id}}).then(a=>{var d,c,t,i,n;this.showLoading=!1;let s=[];a.data.data.main_docs.filter(l=>{s.push({...l,flag:"delete"})}),a.data.data={...a.data.data,main_docs_del:s},this.data=JSON.parse(JSON.stringify(a.data.data)),this.data.tag=[],(d=a.data.data.tag)==null||d.split(",").filter(l=>{l&&this.data.tag.push({value:"",name:l})}),this.data.sendTo=[],this.data.order=[{filename:""}],this.data.booking_refers=[],a.data.data.booking_refers.filter(l=>{l.flag="edit",this.axios.get(`/master-data/book-refer/${l.book_type}/${l.id}`).then(f=>{this.data.booking_refers.push({...f.data.data,...l})}).catch(f=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:f.response.data.message}})}),this.data.main_docs.filter(l=>(l.flag="edit",l.link=l.filepath?this.backendport+"/"+l.filepath:"",l)),this.data.attachments.filter(l=>(l.flag="edit",l.link=l.filepath?this.backendport+"/"+l.filepath:"",l)),this.data.contracts.filter(l=>(l.flag="edit",l)),this.data.booking_follows.filter(l=>(l.flag="edit",l)),this.data.booking_follows=[],(((c=this.data.main_docs)==null?void 0:c.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}]),(((t=this.data.attachments)==null?void 0:t.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(((i=this.data.contracts)==null?void 0:i.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:"",flag:"add"}]),(((n=a.data.data.booking_refers)==null?void 0:n.length)<1||!a.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}])}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},api_master(){this.showLoading=!0;const a=this.axios.get("/master-data/book-type-note"),s=this.axios.get("/master-data/secret"),d=this.axios.get("/master-data/speed"),c=this.axios.get("/master-data/process-type"),t=this.axios.get("/master-data/permission-type"),i=this.axios.get("/master-data/department"),n=this.axios.get("/master-data/register-type");this.axios.all([a,s,d,c,t,i,n]).then(this.axios.spread((...l)=>{this.showLoading=!1;const f=l[0],k=l[1],w=l[2],V=l[3],C=l[4],T=l[5],S=l[6];f.data.data.filter(r=>(r.value=r.id,r.name=r.name,r)),k.data.data.filter(r=>(r.value=r.id,r.name=r.desc,r)),w.data.data.filter(r=>(r.value=r.id,r.name=r.desc,r)),V.data.data.filter(r=>(r.value=r.id,r.name=r.desc,r)),C.data.data.filter(r=>(r.value=r.id,r.name=r.desc,r)),T.data.data.filter(r=>(r.value=r.id,r.name=r.department_full_name,r)),S.data.data.filter(r=>(r.value=r.id,r.name=r.desc,r)),this.optionSelect.book_type_id=f.data.data,this.optionSelect.secret_id=k.data.data,this.optionSelect.speed_id=w.data.data,this.optionSelect.process_type_id=V.data.data,this.optionSelect.permission_id=C.data.data,this.optionSelect.department_id=T.data.data,this.optionSelectDefault.book_category_id=S.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},P={class:"booking-receive-detail"},J={class:"group-overflow"},K={class:"detail"},G={class:"group-head"},H={class:"group-first"},Q=e("img",{src:z,alt:"",class:"icon-size"},null,-1),W={class:"name"},X=e("div",{class:"line"},null,-1),Y={class:"group-detail"},Z={class:"group-between"},$={class:"group-input left"},ee=e("div",{class:"name"},[h("ทะเบียนบันทึกข้อความ "),e("span",{class:"required"},"*")],-1),te={class:"group-input left"},se=e("div",{class:"name"},[h("ลงวันที่ "),e("span",{class:"required"},"*")],-1),ae={class:"group-input left"},oe=e("div",{class:"name"},[h("วันที่ส่งมา "),e("span",{class:"required"},"*")],-1),ie={class:"group-input"},le=e("div",{class:"name"},[h("วันที่กองรับเรื่อง "),e("span",{class:"required"},"*")],-1),de={class:"group-between"},ne={class:"group-input left"},re=e("div",{class:"name"},[h("ชนิดของหนังสือ "),e("span",{class:"required"},"*")],-1),ce={class:"group-between"},_e={class:"group-input left"},pe=e("div",{class:"name"},[h("ชั้นความลับ "),e("span",{class:"required"},"*")],-1),he={class:"group-input"},ue=e("div",{class:"name"},[h("ความเร่งด่วน "),e("span",{class:"required"},"*")],-1),fe={class:"group-between"},me={class:"group-input left"},ge=e("div",{class:"name"},[h("ชื่อเรื่อง "),e("span",{class:"required"},"*")],-1),be={class:"group-input left"},ve=e("div",{class:"name"},[h("เรียน "),e("span",{class:"required"},"*")],-1),ye={class:"group-input left"},ke=e("div",{class:"name"},"รายละเอียดหนังสือ",-1),we={class:"group-input"},Se=e("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),Ve={class:"group-input d-flex align-items-center"},Ce=e("div",{class:"name"},"อ้างอิงถึง",-1),Te=["disabled"],xe=e("div",{class:"group-image"},[e("img",{src:M,alt:"",class:"icon-plus"}),h(" เพิ่มเอกสารอ้างอิง ")],-1),Ue=[xe],qe={class:"group-input left"},Le={class:"group-input left"},Fe={class:"group-input d-flex"},Ae=["onClick"],Me=e("img",{src:q,alt:"",class:"image-trash pointer"},null,-1),De=[Me],Ie=e("div",{class:"group-input"},null,-1),je=e("div",{class:"line"},null,-1),Re={class:"group-detail"},Ee={class:"group-between"},ze={class:"group-input left"},Ne=e("div",{class:"name"},"บันทึกต้นเรื่อง",-1),Oe={class:"group-input-file"},Be=["onClick"],Pe=["onClick"],Je=["onChange","name"],Ke=["onClick"],Ge=e("i",{class:"bi bi-eye icon-eye"},null,-1),He=[Ge],Qe=["disabled","onClick"],We=e("img",{src:q,alt:"",class:"image-trash"},null,-1),Xe=[We],Ye={class:"group-input"},Ze={class:"group-input d-flex align-items-center"},$e=e("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),et=["disabled"],tt=e("div",{class:"group-image"},[e("img",{src:M,alt:"",class:"icon-plus"}),h(" เพิ่มไฟล์ ")],-1),st=[tt],at={class:"group-input-file"},ot=["onClick"],it=["onClick"],lt=["onChange","name"],dt=["onClick"],nt=e("i",{class:"bi bi-eye icon-eye"},null,-1),rt=[nt],ct=["disabled","onClick"],_t=e("img",{src:q,alt:"",class:"image-trash"},null,-1),pt=[_t],ht=e("div",{class:"line"},null,-1),ut={class:"send-to"},ft={class:"group-input"},mt=e("div",{class:"name"},[h("ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) "),e("span",{class:"required"},"*กรุณาใส่รายชื่อที่ต้องการส่งต่อ")],-1),gt={class:"group-input left"},bt={class:"name d-flex justify-content-between"},vt=e("div",null,"ความเห็น / คำสั่ง",-1),yt=e("img",{src:N,alt:"",class:"icon-paperclip"},null,-1),kt=e("img",{src:O,alt:"",class:"image-x"},null,-1),wt={class:"group-between"},St={class:"group-input left"},Vt=e("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Ct={class:"group-input"},Tt=e("div",{class:"name"},"การมองเห็น",-1),xt={class:"d-flex align-items-center justify-content-between"},Ut=e("img",{src:A,alt:"times-circle",class:"icon-times-circle"},null,-1),qt=e("img",{src:L,alt:"times-circle",class:"icon-check-circle"},null,-1),Lt={key:0,class:"line mt-3"},Ft={class:"d-flex justify-content-between"},At={class:"title"},Mt=["onClick"],Dt={class:"d-flex ms-2 mt-2"},It={class:"name"},jt={class:"name ms-5"},Rt={class:"name ms-5"},Et={class:"name ms-2 mt-1"},zt={class:"name ms-2 mt-1"},Nt=e("div",{class:"line mt-4"},null,-1),Ot={class:"group-footer"},Bt={class:"footer-left d-flex"},Pt=e("img",{src:A,alt:"times-circle",class:"icon-times-circle"},null,-1),Jt={class:"footer-right"},Kt={type:"button",class:"confirm-receive"},Gt=e("img",{src:L,alt:"times-circle",class:"icon-check-circle"},null,-1),Ht=["disabled"],Qt=e("img",{src:L,alt:"times-circle",class:"icon-check-circle"},null,-1);function Wt(a,s,d,c,t,i){const n=v("cpn-select"),l=v("cpn-datepicker"),f=v("cpn-textArea"),k=v("cpn-input-tags"),w=v("cpn-input"),V=v("Form"),C=v("cpn-modal-alert"),T=v("cpn-loading");return m(),g("div",P,[e("div",J,[e("div",K,[e("div",G,[e("div",H,[Q,e("div",W,b(t.edit?"แก้ไขบันทึกรับเข้า":"สร้างบันทึกรับเข้า"),1)])]),X,p(V,{onSubmit:i.on_submit,onInvalidSubmit:a.onInvalidSubmit},{default:I(()=>{var S,r,F;return[e("div",Y,[e("div",Z,[e("div",$,[ee,p(n,{modelValue:t.data.book_category_id,"onUpdate:modelValue":s[0]||(s[0]=o=>t.data.book_category_id=o),name:"book_category_id",rules:"required",disabled:t.edit,optionSelect:t.optionSelectDefault.book_category_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),e("div",te,[se,p(l,{modelValue:t.data.as_of_date,"onUpdate:modelValue":s[1]||(s[1]=o=>t.data.as_of_date=o),name:"as_of_date",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",ae,[oe,p(l,{modelValue:t.data.create_date,"onUpdate:modelValue":s[2]||(s[2]=o=>t.data.create_date=o),name:"create_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",ie,[le,p(l,{modelValue:t.data.receive_date,"onUpdate:modelValue":s[3]||(s[3]=o=>t.data.receive_date=o),name:"receive_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])]),e("div",de,[e("div",ne,[re,p(n,{modelValue:t.data.book_type_id,"onUpdate:modelValue":s[4]||(s[4]=o=>t.data.book_type_id=o),name:"book_type_id",disabled:t.edit,rules:"required",optionSelect:t.optionSelect.book_type_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),e("div",ce,[e("div",_e,[pe,p(n,{modelValue:t.data.secret_id,"onUpdate:modelValue":s[5]||(s[5]=o=>t.data.secret_id=o),name:"secret_id",rules:"required",optionSelect:t.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])]),e("div",he,[ue,p(n,{modelValue:t.data.speed_id,"onUpdate:modelValue":s[6]||(s[6]=o=>t.data.speed_id=o),name:"speed_id",rules:"required",optionSelect:t.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])])])]),e("div",fe,[e("div",me,[ge,p(f,{modelValue:t.data.subject,"onUpdate:modelValue":s[7]||(s[7]=o=>t.data.subject=o),name:"subject",rules:"required",disabled:t.edit,rows:"1"},null,8,["modelValue","disabled"])])]),e("div",be,[ve,p(f,{modelValue:t.data.send_to,"onUpdate:modelValue":s[8]||(s[8]=o=>t.data.send_to=o),name:"send_to",rows:"1",disabled:t.edit},null,8,["modelValue","disabled"])]),e("div",ye,[ke,p(f,{modelValue:t.data.book_desc,"onUpdate:modelValue":s[9]||(s[9]=o=>t.data.book_desc=o),name:"book_desc",disabled:t.edit,rows:"1"},null,8,["modelValue","disabled"])]),e("div",we,[Se,p(k,{modelValue:t.data.tag,"onUpdate:modelValue":s[10]||(s[10]=o=>t.data.tag=o),name:"tag"},null,8,["modelValue"])]),e("div",Ve,[Ce,e("button",{type:"button",class:"add-booking-receive",onClick:s[11]||(s[11]=o=>i.add_booking_refers()),disabled:t.edit},Ue,8,Te)]),(m(!0),g(x,null,U(t.data.booking_refers.filter(o=>o.flag!="delete"),(o,_)=>(m(),g("div",{class:"group-between",key:_},[e("div",qe,[p(w,{modelValue:o.receive_document_number,"onUpdate:modelValue":u=>o.receive_document_number=u,name:`codeRefers${_}`,type:"text",searchFlag:!0,disabled:t.edit,onSearchClick:u=>i.booking_refers_click(o),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","disabled","onSearchClick"])]),e("div",Le,[p(w,{modelValue:o.desc,"onUpdate:modelValue":u=>o.desc=u,name:`nameRefers${_}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Fe,[p(l,{modelValue:o.receive_date,"onUpdate:modelValue":u=>o.receive_date=u,name:`dateRefers${_}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",onClick:u=>i.delete_booking_refers(o,_),class:"button-delete ms-3"},De,8,Ae)])]))),128)),Ie]),je,e("div",Re,[e("div",Ee,[e("div",ze,[Ne,(m(!0),g(x,null,U(t.data.main_docs.filter(o=>o.flag!="delete"),(o,_)=>(m(),g("div",{class:"d-flex mb-3",key:_},[e("div",Oe,[e("button",{type:"button",class:y([t.edit?"none-pointer":"","button-file"]),onClick:u=>t.edit?"":i.upload_file(`main_docs${_}`)},[e("span",{class:y(o.filename?"":"no-data")},b(o.filename?o.filename:"บันทึกต้นเรื่อง"),3)],10,Be),e("div",{class:y(t.edit?"text disabled":"text pointer"),onClick:u=>t.edit?"":i.upload_file(`main_docs${_}`)},"แนบเอกสาร",10,Pe),e("input",{type:"file",onChange:u=>i.file_set_change(`main_docs${_}`,_,"main_docs"),name:`main_docs${_}`,style:{display:"none"},accept:"application/pdf"},null,40,Je)]),e("button",{type:"button",onClick:u=>i.download_file(o),class:"button-eye"},He,8,Ke),e("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:u=>t.data.main_docs.length>1?t.data.main_docs.splice(_,1):o.filename=""},Xe,8,Qe)]))),128))]),e("div",Ye,[e("div",Ze,[$e,e("button",{type:"button",class:"add-booking-receive",disabled:t.edit,onClick:s[12]||(s[12]=o=>i.add_attachments())},st,8,et)]),(m(!0),g(x,null,U(t.data.attachments.filter(o=>o.flag!="delete"),(o,_)=>(m(),g("div",{class:"d-flex mb-3",key:_},[e("div",at,[e("button",{type:"button",class:y([t.edit?"none-pointer":"","button-file"]),onClick:u=>t.edit?"":i.upload_file(`attachments${_}`)},[e("span",{class:y(o.filename?"":"no-data")},b(o.filename?o.filename:"สิ่งที่ส่งมาด้วย"),3)],10,ot),e("div",{class:y(t.edit?"text disabled":"text pointer"),onClick:u=>t.edit?"":i.upload_file(`attachments${_}`)},"แนบเอกสาร",10,it),e("input",{type:"file",onChange:u=>i.file_set_change(`attachments${_}`,_,"attachments"),name:`attachments${_}`,style:{display:"none"}},null,40,lt)]),e("button",{type:"button",onClick:u=>i.download_file(o),class:"button-eye"},rt,8,dt),e("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:u=>i.delete_attachments(o,_)},pt,8,ct)]))),128))])])]),ht,e("div",ut,[e("div",ft,[mt,p(k,{modelValue:t.data.sendTo,"onUpdate:modelValue":s[13]||(s[13]=o=>t.data.sendTo=o),flagSearch:!0,optionSelect:t.optionSelect.sendTo,onKeyup:i.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),e("div",gt,[e("div",bt,[vt,e("div",null,[e("input",{type:"file",onChange:s[14]||(s[14]=o=>i.file_set_change("sendTo",0,"sendTo")),name:"sendTo",style:{display:"none"}},null,32),(S=t.data.sendToFile)!=null&&S.filename?(m(),g("div",{key:1,class:"del-comment pointer",onClick:s[16]||(s[16]=o=>t.data.sendToFile.filename="")},[h(b((r=t.data.sendToFile)==null?void 0:r.filename)+" ",1),kt])):(m(),g("button",{key:0,type:"button",class:"button-con pointer",onClick:s[15]||(s[15]=o=>i.upload_file("sendTo"))},[yt,h(" แนบเอกสาร ")]))])]),p(f,{modelValue:t.data.comment,"onUpdate:modelValue":s[17]||(s[17]=o=>t.data.comment=o),name:"comment",rows:"3"},null,8,["modelValue"])]),e("div",wt,[e("div",St,[Vt,p(n,{modelValue:t.data.process_type_id,"onUpdate:modelValue":s[18]||(s[18]=o=>t.data.process_type_id=o),name:"process_type_id",optionSelect:t.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),e("div",Ct,[Tt,p(n,{modelValue:t.data.permission_id,"onUpdate:modelValue":s[19]||(s[19]=o=>t.data.permission_id=o),name:"permission_id",optionSelect:t.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),e("div",xt,[e("div",null,[e("button",{type:"button",class:"button button-danger",onClick:s[20]||(s[20]=o=>(t.data.sendTo=[],t.data.comment="",t.data.process_type_id="",t.data.permission_id=""))},[Ut,h(" ยกเลิก ")])]),e("div",null,[e("button",{type:"button",onClick:s[21]||(s[21]=o=>i.add_booking_follows()),class:"button button-success"},[qt,h(" เพิ่มการส่งต่อ ")])])]),t.data.booking_follows.length>0?(m(),g("div",Lt)):j("",!0),(m(!0),g(x,null,U(t.data.booking_follows.filter(o=>o.flag!="delete"),(o,_)=>(m(),g("div",{class:"group-add",key:_},[e("div",Ft,[e("div",At,"#"+b(_+1),1),e("img",{onClick:u=>i.delete_booking_follows(o,_),src:q,alt:"",class:"image-trash pointer"},null,8,Mt)]),e("div",Dt,[e("div",It,"ส่งต่อ : "+b((o==null?void 0:o.department_name)||"-"),1),e("div",jt,"รูปแบบการดำเนินการ : "+b((o==null?void 0:o.process_type_name)||"-"),1),e("div",Rt,"การมองเห็น : "+b((o==null?void 0:o.permission_name)||"-"),1)]),e("div",Et,"ความเห็น / คำสั่ง : "+b((o==null?void 0:o.comment)||"-"),1),e("div",zt,"เอกสารแนบ : "+b((o==null?void 0:o.sendToFile.filename)||"-"),1)]))),128))]),Nt,e("div",Ot,[e("div",Bt,[e("button",{type:"button",class:"button-danger",onClick:s[22]||(s[22]=o=>i.back())},[Pt,h(" ปิด ")])]),e("div",Jt,[R(e("button",Kt,[e("div",{class:"group-image",onClick:s[23]||(s[23]=o=>a.submitClick())},[Gt,h(" ยืนยันรับเข้า ")])],512),[[E,!1]]),e("button",{type:"submit",class:"button-success",onClick:s[24]||(s[24]=o=>t.flagSave=2),disabled:((F=t.data.sendTo)==null?void 0:F.length)<1},[Qt,h(" บันทึกและส่งต่อ ")],8,Ht)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])])]),p(C,{modalAlert:t.modalAlert},null,8,["modalAlert"]),p(T,{show:t.showLoading},null,8,["show"])])}const ts=D(B,[["render",Wt]]);export{ts as default};
