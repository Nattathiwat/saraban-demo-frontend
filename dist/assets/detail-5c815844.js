import{_ as T,r as g,o as m,c as f,a as t,t as b,b as _,d as D,F as q,h as U,n as v,j as u,i as F,w as I,g as A,k as x,v as j}from"./index-b82631cc.js";import{_ as R}from"./ballot-duotone-f2459825.js";import{_ as M}from"./plus-circle-duotone-64bd32fe.js";import{_ as L}from"./trash-alt-duotone-12d94c28.js";const E={name:"record-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{original_flag:!1,book_category_id:"",book_type_id:"",receive_date:"",receive_time:"",document_number:"",as_of_date:"",subject:"",secret_id:"",speed_id:"",send_to:"",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],main_docs_del:[],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"",permission_id:"",book_type:"",human_flag:!1,response_id:""},optionSelect:{book_category_id:[],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]},optionSelectDefault:{book_category_id:[]}}},methods:{add_attachments(){this.data.attachments.push({filename:"",flag:"add"})},delete_attachments(o,a){o.flag=="edit"?o.flag="delete":this.data.attachments.splice(a,1),this.data.attachments.length-this.data.attachments.filter(i=>i.flag=="delete").length<1&&this.add_attachments()},delete_main_docs(o,a){o.flag=="edit"?o.flag="delete":this.data.main_docs.splice(a,1)},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(o,a){o.flag=="edit"?o.flag="delete":this.data.booking_refers.splice(a,1),this.data.booking_refers.length-this.data.booking_refers.filter(i=>i.flag=="delete").length<1&&this.add_booking_refers()},booking_refers_click(o){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:o.receive_document_number}}).then(a=>{this.showLoading=!1,a.data.data.length>0?(o.book_refer_id=a.data.data[0].id,o.original_refer_id=a.data.data[0].id,o.book_type=a.data.data[0].book_type,o.desc=a.data.data[0].desc,o.receive_date=a.data.data[0].receive_date):(o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(a=>{o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},delete_click(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"บันทึกรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.axios.delete(`/booking-receive/receive-note/${o.$route.params.id}`).then(()=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.back()}}}).catch(a=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})}}},keyup_department(o){this.optionSelect.department_id=[],this.axios.get("/master-data/department-user",{params:{keyword:o.target.value}}).then(a=>{a.data.data&&(a.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i.human_flag=i.human_flag,i)),this.optionSelect.department_id=a.data.data)})},keyup_send_to(o){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user",{params:{keyword:o.target.value}}).then(a=>{a.data.data&&(a.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i.human_flag=i.human_flag,i)),this.optionSelect.sendTo=a.data.data)})},add_booking_follows(){this.data.sendTo.filter(o=>{if(!this.data.booking_follows.some(a=>a.department_id===o.value&&a.flag!="delete")){let a={department_id:parseInt(o.value),department_name:o.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:o.human_flag};this.optionSelect.process_type_id.find(i=>{i.value==this.data.process_type_id&&(a.process_type_name=i.name)}),this.optionSelect.permission_id.find(i=>{i.value==this.data.permission_id&&(a.permission_name=i.name)}),this.data.booking_follows.push(a)}})},delete_booking_follows(o,a){o.flag=="edit"?o.flag="delete":this.data.booking_follows.splice(a,1)},download_file(o){o.filename&&o.link&&this.axios({method:"get",url:o.link,baseURL:"",responseType:"blob"}).then(a=>{const i=new Blob([a.data],{type:this.assetsUtils.getTypeFile(o.filename)});window.open(URL.createObjectURL(i))})},upload_file(o){document.querySelector(`[name="${o}"]`).click()},file_set_change(o,a,i){for(var c=0;c<document.querySelector(`[name="${o}"]`).files.length;c++){let s=document.querySelector(`[name="${o}"]`).files[c];if(i=="main_docs"){if(s.type=="application/pdf"){let d={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data[i][a]={...this.data[i][a],...d},document.querySelector(`[name="${o}"]`).value=null}}else{let d={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data[i][a]={...this.data[i][a],...d},document.querySelector(`[name="${o}"]`).value=null}}},back(){this.$router.push({name:"subministry-work.record-receive",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let o=this;console.log("start"),this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.upload_file_all()}}},upload_file_all(){let o=this.assetsUtils.currentDate(),a=[],i=[],c=[],s=[],d=[];this.data.main_docs.filter(n=>{if(console.log("upload1"),n.file){let l=new FormData;l.append("file",n.file),l.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),a.push(this.axios.post("/upload/single",l,{headers:{"Content-Type":"multipart/form-data"}}))}else n.id&&d.push({filename:n.filename,filepath:n.filepath})}),this.data.attachments.filter(n=>{if(n.file){let l=new FormData;l.append("file",n.file),l.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),i.push(this.axios.post("/upload/single",l,{headers:{"Content-Type":"multipart/form-data"}}))}}),a.length>0&&this.axios.all([...a]).then(this.axios.spread((...n)=>{n.filter((l,h)=>{c.push({...this.data.main_docs[h],...l.data.data,filepath:l.data.data.path})}),a.length==c.length&&i.length==s.length&&this.call_api_save([...c,...d],s)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}),i.length>0&&this.axios.all([...i]).then(this.axios.spread((...n)=>{n.filter((l,h)=>{s.push({...this.data.attachments[h],...l.data.data,filepath:l.data.data.path})}),a.length==c.length&&i.length==s.length&&this.call_api_save([...c,...d],s)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}),a.length<1&&i.length<1&&this.call_api_save([...d],[])},upload_file_all2(o){let a=this.assetsUtils.currentDate(),i=[],c=[];this.data.main_docs.filter(s=>{if(s.file){let d=new FormData;d.append("file",s.file),d.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),i.push(this.axios.post("/upload/single",d,{headers:{"Content-Type":"multipart/form-data"}}))}}),i.length>0?this.axios.all([...i]).then(this.axios.spread((...s)=>{s.filter((d,n)=>{c.push({...this.data.main_docs[n],...d.data.data,filepath:d.data.data.path})}),i.length==c.length&&this.call_api_save(c,o)})).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}}):this.call_api_save(c,o)},call_api_save([...o],[]){let a=this,i="";this.data.tag.filter(s=>{i+=s.name+","}),i=i.slice(0,-1),this.data.sendTo.filter(s=>{if(!this.data.booking_follows.some(d=>d.department_id===s.value&&d.flag!="delete")){let d={department_id:parseInt(s.value),department_name:s.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:s.human_flag};console.log(s),this.optionSelect.process_type_id.find(n=>{n.value==this.data.process_type_id&&(d.process_type_name=n.name)}),this.optionSelect.permission_id.find(n=>{n.value==this.data.permission_id&&(d.permission_name=n.name)}),this.data.booking_follows.push(d)}});let c={original_flag:this.data.original_flag,regis_id:parseInt(this.data.book_category_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:i,main_docs:[...fileMain_docs,...this.data.main_docs_del],attachments:fileAttachments,booking_refers:this.data.booking_refers.filter(s=>s.book_refer_id),booking_follows:this.data.booking_follows,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":"",book_type:parseInt(this.$route.query.book_type)};this.edit&&(this.flagSave==1?(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,c).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})):(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,c).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})))},api_detail(){this.showLoading=!0,this.axios.get(`/booking-receive/receive-note/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id}}).then(o=>{var i,c,s,d,n;this.showLoading=!1;let a=[];o.data.data.main_docs.filter(l=>{a.push({...l,flag:"delete"})}),o.data.data={...o.data.data,main_docs_del:a},this.data=JSON.parse(JSON.stringify(o.data.data)),this.data.tag=[],(i=o.data.data.tag)==null||i.split(",").filter(l=>{l&&this.data.tag.push({value:"",name:l})}),this.data.sendTo=[],this.data.booking_refers=[],o.data.data.booking_refers.filter(l=>{l.flag="edit",this.axios.get(`/master-data/book-refer/${l.book_type}/${l.id}`).then(h=>{this.data.booking_refers.push({...h.data.data,...l})}).catch(h=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}),this.data.main_docs.filter(l=>(l.flag="edit",l.link=l.filepath?this.backendport+"/"+l.filepath:"",l)),this.data.attachments.filter(l=>(l.flag="edit",l.link=l.filepath?this.backendport+"/"+l.filepath:"",l)),this.data.contracts.filter(l=>(l.flag="edit",l)),this.data.booking_follows.filter(l=>(l.flag="edit",l)),(((c=this.data.main_docs)==null?void 0:c.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}]),(((s=this.data.attachments)==null?void 0:s.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(((d=this.data.contracts)==null?void 0:d.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:"",flag:"add"}]),(((n=o.data.data.booking_refers)==null?void 0:n.length)<1||!o.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}])}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},api_master(){this.showLoading=!0;const o=this.axios.get("/master-data/book-type-note"),a=this.axios.get("/master-data/secret"),i=this.axios.get("/master-data/speed"),c=this.axios.get("/master-data/process-type"),s=this.axios.get("/master-data/permission-type"),d=this.axios.get("/master-data/department"),n=this.axios.get("/master-data/register-type");this.axios.all([o,a,i,c,s,d,n]).then(this.axios.spread((...l)=>{this.showLoading=!1;const h=l[0],k=l[1],y=l[2],S=l[3],V=l[4],C=l[5],w=l[6];h.data.data.filter(e=>(e.value=e.id,e.name=e.desc,e)),k.data.data.filter(e=>(e.value=e.id,e.name=e.desc,e)),y.data.data.filter(e=>(e.value=e.id,e.name=e.desc,e)),S.data.data.filter(e=>(e.value=e.id,e.name=e.desc,e)),V.data.data.filter(e=>(e.value=e.id,e.name=e.desc,e)),C.data.data.filter(e=>(e.value=e.id,e.name=e.department_full_name,e)),w.data.data.filter(e=>(e.value=e.id,e.name=e.desc,e)),this.optionSelect.book_type_id=h.data.data,this.optionSelect.secret_id=k.data.data,this.optionSelect.speed_id=y.data.data,this.optionSelect.process_type_id=S.data.data,this.optionSelect.permission_id=V.data.data,this.optionSelect.department_id=C.data.data,this.optionSelectDefault.book_category_id=w.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},P={class:"booking-receive-detail"},z={class:"group-overflow"},B={class:"detail"},N={class:"group-head"},O={class:"group-first"},J=t("img",{src:R,alt:"",class:"icon-size"},null,-1),K={class:"name"},G=t("div",{class:"line"},null,-1),H={class:"group-detail"},Q={class:"group-between"},W={class:"group-input left"},X=t("div",{class:"name"},[u("ทะเบียนบันทึกข้อความ "),t("span",{class:"required"},"*")],-1),Y={class:"group-input left"},Z=t("div",{class:"name"},[u("ลงวันที่ "),t("span",{class:"required"},"*")],-1),$={class:"group-input left"},ee=t("div",{class:"name"},[u("วันที่ส่งมา "),t("span",{class:"required"},"*")],-1),te={class:"group-input"},se=t("div",{class:"name"},[u("วันที่กองรับเรื่อง "),t("span",{class:"required"},"*")],-1),ae={class:"group-between"},oe={class:"group-input left"},ie=t("div",{class:"name"},[u("ชนิดของหนังสือ "),t("span",{class:"required"},"*")],-1),le={class:"group-between"},de={class:"group-input left"},ne=t("div",{class:"name"},[u("ชั้นความลับ "),t("span",{class:"required"},"*")],-1),re={class:"group-input"},ce=t("div",{class:"name"},[u("ความเร่งด่วน "),t("span",{class:"required"},"*")],-1),_e={class:"group-between"},pe={class:"group-input left"},ue=t("div",{class:"name"},[u("ชื่อเรื่อง "),t("span",{class:"required"},"*")],-1),he={class:"group-input left"},me=t("div",{class:"name"},[u("เรียน "),t("span",{class:"required"},"*")],-1),fe={class:"group-input left"},ge=t("div",{class:"name"},"รายละเอียดหนังสือ",-1),be={class:"group-input"},ve=t("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),ke={class:"group-input d-flex align-items-center"},ye=t("div",{class:"name"},"อ้างอิงถึง",-1),we=["disabled"],Se=t("div",{class:"group-image"},[t("img",{src:M,alt:"",class:"icon-plus"}),u(" เพิ่มเอกสารอ้างอิง ")],-1),Ve=[Se],Ce={class:"group-input left"},qe={class:"group-input left"},Ue={class:"group-input d-flex"},Le=["onClick"],xe=t("img",{src:L,alt:"",class:"image-trash pointer"},null,-1),Ae=[xe],Me=t("div",{class:"group-input"},null,-1),Te=t("div",{class:"line"},null,-1),De={class:"group-detail"},Fe={class:"group-between"},Ie={class:"group-input left"},je=t("div",{class:"name"},"บันทึกต้นเรื่อง",-1),Re={class:"group-input-file"},Ee=["onClick"],Pe=["onClick"],ze=["onChange","name"],Be=["onClick"],Ne=t("i",{class:"bi bi-eye icon-eye"},null,-1),Oe=[Ne],Je=["disabled","onClick"],Ke=t("img",{src:L,alt:"",class:"image-trash"},null,-1),Ge=[Ke],He={class:"group-input"},Qe={class:"group-input d-flex align-items-center"},We=t("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),Xe=["disabled"],Ye=t("div",{class:"group-image"},[t("img",{src:M,alt:"",class:"icon-plus"}),u(" เพิ่มไฟล์ ")],-1),Ze=[Ye],$e={class:"group-input-file"},et=["onClick"],tt=["onClick"],st=["onChange","name"],at=["onClick"],ot=t("i",{class:"bi bi-eye icon-eye"},null,-1),it=[ot],lt=["disabled","onClick"],dt=t("img",{src:L,alt:"",class:"image-trash"},null,-1),nt=[dt],rt=t("div",{class:"line"},null,-1),ct={class:"send-to"},_t={class:"group-input"},pt=t("div",{class:"name"},[u("ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) "),t("span",{class:"required"},"*กรุณาใส่รายชื่อที่ต้องการส่งต่อ")],-1),ut={class:"group-input"},ht=t("div",{class:"name"},"ความเห็น / คำสั่ง",-1),mt={class:"group-between"},ft={class:"group-input left"},gt=t("div",{class:"name"},"รูปแบบการดำเนินการ",-1),bt={class:"group-input"},vt=t("div",{class:"name"},"การมองเห็น",-1),kt={class:"d-flex align-items-center justify-content-between"},yt=t("img",{src:A,alt:"times-circle",class:"icon-times-circle"},null,-1),wt=t("img",{src:x,alt:"times-circle",class:"icon-check-circle"},null,-1),St={key:0,class:"line mt-3"},Vt={class:"d-flex justify-content-between"},Ct={class:"title"},qt=["onClick"],Ut={class:"d-flex ms-2 mt-2"},Lt={class:"name"},xt={class:"name ms-5"},At={class:"name ms-5"},Mt={class:"name ms-2 mt-1"},Tt=t("div",{class:"line mt-4"},null,-1),Dt={class:"group-footer"},Ft={class:"footer-left d-flex"},It=t("img",{src:A,alt:"times-circle",class:"icon-times-circle"},null,-1),jt={class:"footer-right"},Rt={type:"button",class:"confirm-receive"},Et=t("img",{src:x,alt:"times-circle",class:"icon-check-circle"},null,-1),Pt=["disabled"],zt=t("img",{src:x,alt:"times-circle",class:"icon-check-circle"},null,-1);function Bt(o,a,i,c,s,d){const n=g("cpn-select"),l=g("cpn-datepicker"),h=g("cpn-textArea"),k=g("cpn-input-tags"),y=g("cpn-input"),S=g("Form"),V=g("cpn-modal-alert"),C=g("cpn-loading");return m(),f("div",P,[t("div",z,[t("div",B,[t("div",N,[t("div",O,[J,t("div",K,b(s.edit?"แก้ไขบันทึกรับเข้า":"สร้างบันทึกรับเข้า"),1)])]),G,_(S,{onSubmit:d.on_submit,onInvalidSubmit:o.onInvalidSubmit},{default:D(()=>{var w;return[t("div",H,[t("div",Q,[t("div",W,[X,_(n,{modelValue:s.data.book_category_id,"onUpdate:modelValue":a[0]||(a[0]=e=>s.data.book_category_id=e),name:"book_category_id",rules:"required",disabled:s.edit,optionSelect:s.optionSelectDefault.book_category_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),t("div",Y,[Z,_(l,{modelValue:s.data.as_of_date,"onUpdate:modelValue":a[1]||(a[1]=e=>s.data.as_of_date=e),name:"as_of_date",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),t("div",$,[ee,_(l,{modelValue:s.data.create_date,"onUpdate:modelValue":a[2]||(a[2]=e=>s.data.create_date=e),name:"create_date",rules:"required",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),t("div",te,[se,_(l,{modelValue:s.data.receive_date,"onUpdate:modelValue":a[3]||(a[3]=e=>s.data.receive_date=e),name:"receive_date",rules:"required",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])]),t("div",ae,[t("div",oe,[ie,_(n,{modelValue:s.data.book_type_id,"onUpdate:modelValue":a[4]||(a[4]=e=>s.data.book_type_id=e),name:"book_type_id",rules:"required",disabled:s.edit,optionSelect:s.optionSelect.book_type_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),t("div",le,[t("div",de,[ne,_(n,{modelValue:s.data.secret_id,"onUpdate:modelValue":a[5]||(a[5]=e=>s.data.secret_id=e),name:"secret_id",rules:"required",optionSelect:s.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:s.edit},null,8,["modelValue","optionSelect","disabled"])]),t("div",re,[ce,_(n,{modelValue:s.data.speed_id,"onUpdate:modelValue":a[6]||(a[6]=e=>s.data.speed_id=e),name:"speed_id",rules:"required",optionSelect:s.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:s.edit},null,8,["modelValue","optionSelect","disabled"])])])]),t("div",_e,[t("div",pe,[ue,_(h,{modelValue:s.data.subject,"onUpdate:modelValue":a[7]||(a[7]=e=>s.data.subject=e),name:"subject",rules:"required",disabled:s.edit,rows:"1"},null,8,["modelValue","disabled"])])]),t("div",he,[me,_(h,{modelValue:s.data.send_to,"onUpdate:modelValue":a[8]||(a[8]=e=>s.data.send_to=e),name:"send_to",rows:"1",disabled:s.edit},null,8,["modelValue","disabled"])]),t("div",fe,[ge,_(h,{modelValue:s.data.book_desc,"onUpdate:modelValue":a[9]||(a[9]=e=>s.data.book_desc=e),name:"book_desc",disabled:s.edit,rows:"1"},null,8,["modelValue","disabled"])]),t("div",be,[ve,_(k,{modelValue:s.data.tag,"onUpdate:modelValue":a[10]||(a[10]=e=>s.data.tag=e),name:"tag"},null,8,["modelValue"])]),t("div",ke,[ye,t("button",{type:"button",class:"add-booking-receive",onClick:a[11]||(a[11]=e=>d.add_booking_refers()),disabled:s.edit},Ve,8,we)]),(m(!0),f(q,null,U(s.data.booking_refers.filter(e=>e.flag!="delete"),(e,r)=>(m(),f("div",{class:"group-between",key:r},[t("div",Ce,[_(y,{modelValue:e.receive_document_number,"onUpdate:modelValue":p=>e.receive_document_number=p,name:`codeRefers${r}`,type:"text",searchFlag:!0,disabled:s.edit,onSearchClick:p=>d.booking_refers_click(e),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","disabled","onSearchClick"])]),t("div",qe,[_(y,{modelValue:e.desc,"onUpdate:modelValue":p=>e.desc=p,name:`nameRefers${r}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),t("div",Ue,[_(l,{modelValue:e.receive_date,"onUpdate:modelValue":p=>e.receive_date=p,name:`dateRefers${r}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),t("button",{type:"button",onClick:p=>d.delete_booking_refers(e,r),class:"button-delete ms-3"},Ae,8,Le)])]))),128)),Me]),Te,t("div",De,[t("div",Fe,[t("div",Ie,[je,(m(!0),f(q,null,U(s.data.main_docs.filter(e=>e.flag!="delete"),(e,r)=>(m(),f("div",{class:"d-flex mb-3",key:r},[t("div",Re,[t("button",{type:"button",class:v([s.edit?"none-pointer":"","button-file"]),onClick:p=>s.edit?"":d.upload_file(`main_docs${r}`)},[t("span",{class:v(e.filename?"":"no-data")},b(e.filename?e.filename:"บันทึกต้นเรื่อง"),3)],10,Ee),t("div",{class:v(s.edit?"text disabled":"text pointer"),onClick:p=>s.edit?"":d.upload_file(`main_docs${r}`)},"แนบเอกสาร",10,Pe),t("input",{type:"file",onChange:p=>d.file_set_change(`main_docs${r}`,r,"main_docs"),name:`main_docs${r}`,style:{display:"none"},accept:"application/pdf"},null,40,ze)]),t("button",{type:"button",onClick:p=>d.download_file(e),class:"button-eye"},Oe,8,Be),t("button",{type:"button",class:"del-department-3",disabled:s.edit,onClick:p=>d.delete_main_docs(e,r)},Ge,8,Je)]))),128))]),t("div",He,[t("div",Qe,[We,t("button",{type:"button",class:"add-booking-receive",disabled:s.edit,onClick:a[12]||(a[12]=e=>d.add_attachments())},Ze,8,Xe)]),(m(!0),f(q,null,U(s.data.attachments.filter(e=>e.flag!="delete"),(e,r)=>(m(),f("div",{class:"d-flex mb-3",key:r},[t("div",$e,[t("button",{type:"button",class:v([s.edit?"none-pointer":"","button-file"]),onClick:p=>s.edit?"":d.upload_file(`attachments${r}`)},[t("span",{class:v(e.filename?"":"no-data")},b(e.filename?e.filename:"สิ่งที่ส่งมาด้วย"),3)],10,et),t("div",{class:v(s.edit?"text disabled":"text pointer"),onClick:p=>s.edit?"":d.upload_file(`attachments${r}`)},"แนบเอกสาร",10,tt),t("input",{type:"file",onChange:p=>d.file_set_change(`attachments${r}`,r,"attachments"),name:`attachments${r}`,style:{display:"none"}},null,40,st)]),t("button",{type:"button",onClick:p=>d.download_file(e),class:"button-eye"},it,8,at),t("button",{type:"button",class:"del-department-3",disabled:s.edit,onClick:p=>d.delete_attachments(e,r)},nt,8,lt)]))),128))])])]),rt,t("div",ct,[t("div",_t,[pt,_(k,{modelValue:s.data.sendTo,"onUpdate:modelValue":a[13]||(a[13]=e=>s.data.sendTo=e),flagSearch:!0,optionSelect:s.optionSelect.sendTo,onKeyup:d.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),t("div",ut,[ht,_(h,{modelValue:s.data.comment,"onUpdate:modelValue":a[14]||(a[14]=e=>s.data.comment=e),name:"comment",rows:"3"},null,8,["modelValue"])]),t("div",mt,[t("div",ft,[gt,_(n,{modelValue:s.data.process_type_id,"onUpdate:modelValue":a[15]||(a[15]=e=>s.data.process_type_id=e),name:"process_type_id",optionSelect:s.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),t("div",bt,[vt,_(n,{modelValue:s.data.permission_id,"onUpdate:modelValue":a[16]||(a[16]=e=>s.data.permission_id=e),name:"permission_id",optionSelect:s.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),t("div",kt,[t("div",null,[t("button",{type:"button",class:"button button-danger",onClick:a[17]||(a[17]=e=>(s.data.sendTo=[],s.data.comment="",s.data.process_type_id="",s.data.permission_id=""))},[yt,u(" ยกเลิก ")])]),t("div",null,[t("button",{type:"button",onClick:a[18]||(a[18]=e=>d.add_booking_follows()),class:"button button-success"},[wt,u(" เพิ่มการส่งต่อ ")])])]),s.data.booking_follows.length>0?(m(),f("div",St)):F("",!0),(m(!0),f(q,null,U(s.data.booking_follows.filter(e=>e.flag!="delete"),(e,r)=>(m(),f("div",{class:"group-add",key:r},[t("div",Vt,[t("div",Ct,"#"+b(r+1),1),t("img",{onClick:p=>d.delete_booking_follows(e,r),src:L,alt:"",class:"image-trash pointer"},null,8,qt)]),t("div",Ut,[t("div",Lt,"ส่งต่อ : "+b((e==null?void 0:e.department_name)||"-"),1),t("div",xt,"รูปแบบการดำเนินการ : "+b((e==null?void 0:e.process_type_name)||"-"),1),t("div",At,"การมองเห็น : "+b((e==null?void 0:e.permission_name)||"-"),1)]),t("div",Mt,"ความเห็น / คำสั่ง : "+b((e==null?void 0:e.comment)||"-"),1)]))),128))]),Tt,t("div",Dt,[t("div",Ft,[t("button",{type:"button",class:"button-danger",onClick:a[19]||(a[19]=e=>d.back())},[It,u(" ปิด ")])]),t("div",jt,[I(t("button",Rt,[t("div",{class:"group-image",onClick:a[20]||(a[20]=e=>o.submitClick())},[Et,u(" ยืนยันรับเข้า ")])],512),[[j,!1]]),t("button",{type:"submit",class:"button-success",onClick:a[21]||(a[21]=e=>s.flagSave=2),disabled:((w=s.data.sendTo)==null?void 0:w.length)<1},[zt,u(" บันทึกและส่งต่อ ")],8,Pt)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])])]),_(V,{modalAlert:s.modalAlert},null,8,["modalAlert"]),_(C,{show:s.showLoading},null,8,["show"])])}const Gt=T(E,[["render",Bt]]);export{Gt as default};
