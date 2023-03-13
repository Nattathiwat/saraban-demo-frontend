import{_ as T}from"./ballot-duotone-f2459825.js";import{_ as U}from"./plus-circle-duotone-64bd32fe.js";import{_ as A}from"./trash-alt-duotone-12d94c28.js";import{_ as I,r as f,o as m,c as g,a as t,t as b,b as c,d as F,F as L,h as q,n as v,j as u,i as j,g as x,k as M}from"./index-dfdbcd0e.js";const E={name:"record-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{original_flag:!1,book_category_id:"",book_type_id:"",receive_date:"",receive_time:"",document_number:"",as_of_date:"",subject:"",secret_id:"",speed_id:"",send_to:"",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],main_docs_del:[],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"",permission_id:"",book_type:"",regis_id:""},optionSelect:{book_category_id:[{name:"นร : บันทึกข้อความ",value:"1"},{name:"นร : ทะเบียนบันทึกข้อความ(เวียน)",value:"2"}],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]}}},methods:{add_attachments(){this.data.attachments.push({filename:"",flag:"add"})},delete_attachments(a,o){a.flag=="edit"?a.flag="delete":this.data.attachments.splice(o,1),this.data.attachments.length-this.data.attachments.filter(l=>l.flag=="delete").length<1&&this.add_attachments()},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(a,o){a.flag=="edit"?a.flag="delete":this.data.booking_refers.splice(o,1),this.data.booking_refers.length-this.data.booking_refers.filter(l=>l.flag=="delete").length<1&&this.add_booking_refers()},booking_refers_click(a){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:a.receive_document_number}}).then(o=>{this.showLoading=!1,o.data.data.length>0?(a.book_refer_id=o.data.data[0].id,a.original_refer_id=o.data.data[0].id,a.book_type=o.data.data[0].book_type,a.desc=o.data.data[0].desc,a.receive_date=o.data.data[0].receive_date):(a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(o=>{a.receive_document_number="",a.book_refer_id="",a.original_refer_id="",a.book_type="",a.desc="",a.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},delete_click(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"บันทึกรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.axios.delete(`/booking-receive/receive-note/${a.$route.params.id}`).then(()=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(o=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})}}},keyup_department(a){this.optionSelect.department_id=[],this.axios.get("/master-data/department-user",{params:{keyword:a.target.value}}).then(o=>{o.data.data&&(o.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l)),this.optionSelect.department_id=o.data.data)})},keyup_send_to(a){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user",{params:{keyword:a.target.value}}).then(o=>{o.data.data&&(o.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l)),this.optionSelect.sendTo=o.data.data)})},add_booking_follows(){this.data.sendTo.filter(a=>{if(!this.data.booking_follows.some(o=>o.department_id===a.value&&o.flag!="delete")){let o={department_id:parseInt(a.value),department_name:a.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add",human_flag:a.human_flag};this.optionSelect.process_type_id.find(l=>{l.value==this.data.process_type_id&&(o.process_type_name=l.name)}),this.optionSelect.permission_id.find(l=>{l.value==this.data.permission_id&&(o.permission_name=l.name)}),this.data.booking_follows.push(o)}})},delete_booking_follows(a,o){a.flag=="edit"?a.flag="delete":this.data.booking_follows.splice(o,1)},download_file(a){a.filename&&a.link&&this.axios({method:"get",url:a.link,baseURL:"",responseType:"blob"}).then(o=>{const l=new Blob([o.data],{type:this.assetsUtils.getTypeFile(a.filename)});window.open(URL.createObjectURL(l))})},upload_file(a){document.querySelector(`[name="${a}"]`).click()},file_set_change(a,o,l){for(var _=0;_<document.querySelector(`[name="${a}"]`).files.length;_++){let s=document.querySelector(`[name="${a}"]`).files[_];if(l=="main_docs"){if(s.type=="application/pdf"){let d={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data[l][o]={...this.data[l][o],...d},document.querySelector(`[name="${a}"]`).value=null}}else{let d={filename:s.name,type:s.type,link:URL.createObjectURL(s),size:(s.size/1024/1024).toFixed(2)+" MB",file:s};this.data[l][o]={...this.data[l][o],...d},document.querySelector(`[name="${a}"]`).value=null}}},back(){this.$router.push({name:"subministry-work.record-receive",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let a=this;console.log("start"),this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){a.showLoading=!0,a.upload_file_all()}}},upload_file_all(){let a=this.assetsUtils.currentDate(),o=[],l=[],_=[],s=[],d=[];this.data.main_docs.filter(n=>{if(console.log("upload1"),n.file){let i=new FormData;i.append("file",n.file),i.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),o.push(this.axios.post("/upload/single",i,{headers:{"Content-Type":"multipart/form-data"}}))}else n.id&&d.push({filename:n.filename,filepath:n.filepath})}),this.data.attachments.filter(n=>{if(n.file){let i=new FormData;i.append("file",n.file),i.append("dst",`${a.split("/")[0]+"-"+a.split("/")[1]+"-"+a.split("/")[2]}`),l.push(this.axios.post("/upload/single",i,{headers:{"Content-Type":"multipart/form-data"}}))}}),o.length>0&&this.axios.all([...o]).then(this.axios.spread((...n)=>{n.filter((i,h)=>{_.push({...this.data.main_docs[h],...i.data.data,filepath:i.data.data.path})}),o.length==_.length&&l.length==s.length&&this.call_api_save([..._,...d],s)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}),l.length>0&&this.axios.all([...l]).then(this.axios.spread((...n)=>{n.filter((i,h)=>{s.push({...this.data.attachments[h],...i.data.data,filepath:i.data.data.path})}),o.length==_.length&&l.length==s.length&&this.call_api_save([..._,...d],s)})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}),o.length<1&&l.length<1&&this.call_api_save([...d],[])},call_api_save(a,o){let l=this,_="";this.data.tag.filter(d=>{_+=d.name+","}),_=_.slice(0,-1),this.data.sendTo.filter(d=>{if(!this.data.booking_follows.some(n=>n.department_id===d.value&&n.flag!="delete")){let n={department_id:parseInt(d.value),department_name:d.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add"};this.optionSelect.process_type_id.find(i=>{i.value==this.data.process_type_id&&(n.process_type_name=i.name)}),this.optionSelect.permission_id.find(i=>{i.value==this.data.permission_id&&(n.permission_name=i.name)}),this.data.booking_follows.push(n)}});let s={original_flag:this.data.original_flag,book_category_id:parseInt(this.data.book_category_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:_,main_docs:[...a,...this.data.main_docs_del],attachments:o,booking_refers:this.data.booking_refers.filter(d=>d.book_refer_id),booking_follows:this.data.booking_follows,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":"",book_type:parseInt(this.$route.query.book_type),regis_id:parseInt(this.$route.query.regis_id)};this.edit&&(this.flagSave==1?(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,s).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(d=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})):(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,s).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.back()}}}).catch(d=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})))},api_detail(){this.showLoading=!0,this.axios.get(`/booking-receive/receive-note/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id}}).then(a=>{var l,_,s,d,n;this.showLoading=!1;let o=[];a.data.data.main_docs.filter(i=>{o.push({...i,flag:"delete"})}),a.data.data={...a.data.data,main_docs_del:o},this.data=JSON.parse(JSON.stringify(a.data.data)),this.data.tag=[],(l=a.data.data.tag)==null||l.split(",").filter(i=>{i&&this.data.tag.push({value:"",name:i})}),this.data.sendTo=[],this.data.booking_refers=[],a.data.data.booking_refers.filter(i=>{i.flag="edit",this.axios.get(`/master-data/book-refer/${i.book_type}/${i.id}`).then(h=>{this.data.booking_refers.push({...h.data.data,...i})}).catch(h=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}),this.data.main_docs.filter(i=>(i.flag="edit",i.link=i.filepath?this.backendport+"/"+i.filepath:"",i)),this.data.attachments.filter(i=>(i.flag="edit",i.link=i.filepath?this.backendport+"/"+i.filepath:"",i)),this.data.contracts.filter(i=>(i.flag="edit",i)),this.data.booking_follows.filter(i=>(i.flag="edit",i)),(((_=this.data.main_docs)==null?void 0:_.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}]),(((s=this.data.attachments)==null?void 0:s.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(((d=this.data.contracts)==null?void 0:d.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:"",flag:"add"}]),(((n=a.data.data.booking_refers)==null?void 0:n.length)<1||!a.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}])}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},api_master(){this.showLoading=!0;const a=this.axios.get("/master-data/book-type"),o=this.axios.get("/master-data/secret"),l=this.axios.get("/master-data/speed"),_=this.axios.get("/master-data/process-type"),s=this.axios.get("/master-data/permission-type"),d=this.axios.get("/master-data/department"),n=this.axios.get("/master-data/receive-type");this.axios.all([a,o,l,_,s,d,n]).then(this.axios.spread((...i)=>{this.showLoading=!1;const h=i[0],k=i[1],y=i[2],S=i[3],V=i[4],C=i[5],w=i[6];h.data.data.filter(e=>(e.value=e.id,e.name=e.desc,e)),k.data.data.filter(e=>(e.value=e.id,e.name=e.desc,e)),y.data.data.filter(e=>(e.value=e.id,e.name=e.desc,e)),S.data.data.filter(e=>(e.value=e.id,e.name=e.desc,e)),V.data.data.filter(e=>(e.value=e.id,e.name=e.desc,e)),C.data.data.filter(e=>(e.value=e.id,e.name=e.department_full_name,e)),w.data.data.filter(e=>(e.value=e.id,e.name=e.desc,e)),this.optionSelect.book_type_id=h.data.data,this.optionSelect.secret_id=k.data.data,this.optionSelect.speed_id=y.data.data,this.optionSelect.process_type_id=S.data.data,this.optionSelect.permission_id=V.data.data,this.optionSelect.department_id=C.data.data,this.optionSelect.receive_type=w.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})},submitClick(){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการรับเข้าหรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){if(this.checkedList=this.data.table){let o={name:a.data.org_name,book_type:a.data.book_type};a.showLoading=!0,a.axios.put(`/booking-receive/${a.$route.params.id}`,o).then(()=>{a.showLoading=!1}).catch(l=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}else{let o={name:a.data.org_name};a.showLoading=!0,a.axios.post("/organization",o).then(()=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างกระทรวงสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.back()}}}).catch(l=>{a.showLoading=!1,a.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}}}}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},R={class:"booking-receive-detail"},D={class:"group-overflow"},P={class:"detail"},z={class:"group-head"},B={class:"group-first"},N=t("img",{src:T,alt:"",class:"icon-size"},null,-1),O={class:"name"},J=t("div",{class:"line"},null,-1),K={class:"group-detail"},G={class:"group-between"},H={class:"group-input left"},Q=t("div",{class:"name"},[u("ทะเบียนบันทึกข้อความ "),t("span",{class:"required"},"*")],-1),W={class:"group-input left"},X=t("div",{class:"name"},[u("ลงวันที่ "),t("span",{class:"required"},"*")],-1),Y={class:"group-input left"},Z=t("div",{class:"name"},[u("วันที่ส่งมา "),t("span",{class:"required"},"*")],-1),$={class:"group-input"},ee=t("div",{class:"name"},[u("วันที่กองรับเรื่อง "),t("span",{class:"required"},"*")],-1),te={class:"group-between"},se={class:"group-input left"},ae=t("div",{class:"name"},[u("ชนิดของหนังสือ "),t("span",{class:"required"},"*")],-1),oe={class:"group-between"},ie={class:"group-input left"},le=t("div",{class:"name"},[u("ชั้นความลับ "),t("span",{class:"required"},"*")],-1),de={class:"group-input"},ne=t("div",{class:"name"},[u("ความเร่งด่วน "),t("span",{class:"required"},"*")],-1),re={class:"group-between"},ce={class:"group-input left"},_e=t("div",{class:"name"},[u("ชื่อเรื่อง "),t("span",{class:"required"},"*")],-1),pe={class:"group-input left"},ue=t("div",{class:"name"},[u("เรียน "),t("span",{class:"required"},"*")],-1),he={class:"group-input left"},me=t("div",{class:"name"},"รายละเอียดหนังสือ",-1),ge={class:"group-input"},fe=t("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),be={class:"group-input d-flex align-items-center"},ve=t("div",{class:"name"},"อ้างอิงถึง",-1),ke=["disabled"],ye=t("div",{class:"group-image"},[t("img",{src:U,alt:"",class:"icon-plus"}),u(" เพิ่มเอกสารอ้างอิง ")],-1),we=[ye],Se={class:"group-input left"},Ve={class:"group-input left"},Ce={class:"group-input d-flex"},Le=["onClick"],qe=t("img",{src:A,alt:"",class:"image-trash pointer"},null,-1),Ae=[qe],Ue=t("div",{class:"group-input"},null,-1),xe=t("div",{class:"line"},null,-1),Me={class:"group-detail"},Te={class:"group-between"},Ie={class:"group-input left"},Fe=t("div",{class:"name"},"บันทึกต้นเรื่อง",-1),je={class:"group-input-file"},Ee=["onClick"],Re=["onClick"],De=["onChange","name"],Pe=["onClick"],ze=t("i",{class:"bi bi-eye icon-eye"},null,-1),Be=[ze],Ne=["disabled","onClick"],Oe=t("img",{src:A,alt:"",class:"image-trash"},null,-1),Je=[Oe],Ke={class:"group-input"},Ge={class:"group-input d-flex align-items-center"},He=t("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),Qe=["disabled"],We=t("div",{class:"group-image"},[t("img",{src:U,alt:"",class:"icon-plus"}),u(" เพิ่มไฟล์ ")],-1),Xe=[We],Ye={class:"group-input-file"},Ze=["onClick"],$e=["onClick"],et=["onChange","name"],tt=["onClick"],st=t("i",{class:"bi bi-eye icon-eye"},null,-1),at=[st],ot=["disabled","onClick"],it=t("img",{src:A,alt:"",class:"image-trash"},null,-1),lt=[it],dt=t("div",{class:"line"},null,-1),nt={class:"send-to"},rt={class:"group-input"},ct=t("div",{class:"name"},[u("ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) "),t("span",{class:"required"},"*กรุณาใส่รายชื่อที่ต้องการส่งต่อ")],-1),_t={class:"group-input"},pt=t("div",{class:"name"},"ความเห็น / คำสั่ง",-1),ut={class:"group-between"},ht={class:"group-input left"},mt=t("div",{class:"name"},"รูปแบบการดำเนินการ",-1),gt={class:"group-input"},ft=t("div",{class:"name"},"การมองเห็น",-1),bt={class:"d-flex align-items-center justify-content-between"},vt=t("img",{src:x,alt:"times-circle",class:"icon-times-circle"},null,-1),kt=t("img",{src:M,alt:"times-circle",class:"icon-check-circle"},null,-1),yt={key:0,class:"line mt-3"},wt={class:"d-flex justify-content-between"},St={class:"title"},Vt=["onClick"],Ct={class:"d-flex ms-2 mt-2"},Lt={class:"name"},qt={class:"name ms-5"},At={class:"name ms-5"},Ut={class:"name ms-2 mt-1"},xt=t("div",{class:"line mt-4"},null,-1),Mt={class:"group-footer"},Tt={class:"footer-left d-flex"},It=t("img",{src:x,alt:"times-circle",class:"icon-times-circle"},null,-1),Ft={class:"footer-right"},jt=["disabled"],Et=t("img",{src:M,alt:"times-circle",class:"icon-check-circle"},null,-1);function Rt(a,o,l,_,s,d){const n=f("cpn-select"),i=f("cpn-datepicker"),h=f("cpn-textArea"),k=f("cpn-input-tags"),y=f("cpn-input"),S=f("Form"),V=f("cpn-modal-alert"),C=f("cpn-loading");return m(),g("div",R,[t("div",D,[t("div",P,[t("div",z,[t("div",B,[N,t("div",O,b(s.edit?"แก้ไขบันทึกรับเข้า":"สร้างบันทึกรับเข้า"),1)])]),J,c(S,{onSubmit:d.on_submit,onInvalidSubmit:a.onInvalidSubmit},{default:F(()=>{var w;return[t("div",K,[t("div",G,[t("div",H,[Q,c(n,{modelValue:s.data.book_category_id,"onUpdate:modelValue":o[0]||(o[0]=e=>s.data.book_category_id=e),name:"book_category_id",rules:"required",disabled:s.edit,optionSelect:s.optionSelect.book_category_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),t("div",W,[X,c(i,{modelValue:s.data.as_of_date,"onUpdate:modelValue":o[1]||(o[1]=e=>s.data.as_of_date=e),name:"as_of_date",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),t("div",Y,[Z,c(i,{modelValue:s.data.create_date,"onUpdate:modelValue":o[2]||(o[2]=e=>s.data.create_date=e),name:"create_date",rules:"required",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),t("div",$,[ee,c(i,{modelValue:s.data.receive_date,"onUpdate:modelValue":o[3]||(o[3]=e=>s.data.receive_date=e),name:"receive_date",rules:"required",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])]),t("div",te,[t("div",se,[ae,c(n,{modelValue:s.data.book_type_id,"onUpdate:modelValue":o[4]||(o[4]=e=>s.data.book_type_id=e),name:"book_type_id",rules:"required",disabled:s.edit,optionSelect:s.optionSelect.book_type_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled","optionSelect"])]),t("div",oe,[t("div",ie,[le,c(n,{modelValue:s.data.secret_id,"onUpdate:modelValue":o[5]||(o[5]=e=>s.data.secret_id=e),name:"secret_id",rules:"required",optionSelect:s.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:s.edit},null,8,["modelValue","optionSelect","disabled"])]),t("div",de,[ne,c(n,{modelValue:s.data.speed_id,"onUpdate:modelValue":o[6]||(o[6]=e=>s.data.speed_id=e),name:"speed_id",rules:"required",optionSelect:s.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:s.edit},null,8,["modelValue","optionSelect","disabled"])])])]),t("div",re,[t("div",ce,[_e,c(h,{modelValue:s.data.subject,"onUpdate:modelValue":o[7]||(o[7]=e=>s.data.subject=e),name:"subject",rules:"required",disabled:s.edit,rows:"1"},null,8,["modelValue","disabled"])])]),t("div",pe,[ue,c(h,{modelValue:s.data.send_to,"onUpdate:modelValue":o[8]||(o[8]=e=>s.data.send_to=e),name:"send_to",rows:"1",disabled:s.edit},null,8,["modelValue","disabled"])]),t("div",he,[me,c(h,{modelValue:s.data.book_desc,"onUpdate:modelValue":o[9]||(o[9]=e=>s.data.book_desc=e),name:"book_desc",disabled:s.edit,rows:"1"},null,8,["modelValue","disabled"])]),t("div",ge,[fe,c(k,{modelValue:s.data.tag,"onUpdate:modelValue":o[10]||(o[10]=e=>s.data.tag=e),name:"tag"},null,8,["modelValue"])]),t("div",be,[ve,t("button",{type:"button",class:"add-booking-receive",onClick:o[11]||(o[11]=e=>d.add_booking_refers()),disabled:s.edit},we,8,ke)]),(m(!0),g(L,null,q(s.data.booking_refers.filter(e=>e.flag!="delete"),(e,r)=>(m(),g("div",{class:"group-between",key:r},[t("div",Se,[c(y,{modelValue:e.receive_document_number,"onUpdate:modelValue":p=>e.receive_document_number=p,name:`codeRefers${r}`,type:"text",searchFlag:!0,disabled:s.edit,onSearchClick:p=>d.booking_refers_click(e),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","disabled","onSearchClick"])]),t("div",Ve,[c(y,{modelValue:e.desc,"onUpdate:modelValue":p=>e.desc=p,name:`nameRefers${r}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),t("div",Ce,[c(i,{modelValue:e.receive_date,"onUpdate:modelValue":p=>e.receive_date=p,name:`dateRefers${r}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),t("button",{type:"button",onClick:p=>d.delete_booking_refers(e,r),class:"button-delete ms-3"},Ae,8,Le)])]))),128)),Ue]),xe,t("div",Me,[t("div",Te,[t("div",Ie,[Fe,(m(!0),g(L,null,q(s.data.main_docs.filter(e=>e.flag!="delete"),(e,r)=>(m(),g("div",{class:"d-flex mb-3",key:r},[t("div",je,[t("button",{type:"button",class:v([s.edit?"none-pointer":"","button-file"]),onClick:p=>s.edit?"":d.upload_file(`main_docs${r}`)},[t("span",{class:v(e.filename?"":"no-data")},b(e.filename?e.filename:"บันทึกต้นเรื่อง"),3)],10,Ee),t("div",{class:v(s.edit?"text disabled":"text pointer"),onClick:p=>s.edit?"":d.upload_file(`main_docs${r}`)},"แนบเอกสาร",10,Re),t("input",{type:"file",onChange:p=>d.file_set_change(`main_docs${r}`,r,"main_docs"),name:`main_docs${r}`,style:{display:"none"},accept:"application/pdf"},null,40,De)]),t("button",{type:"button",onClick:p=>d.download_file(e),class:"button-eye"},Be,8,Pe),t("button",{type:"button",class:"del-department-3",disabled:s.edit,onClick:p=>s.data.main_docs.length>1?s.data.main_docs.splice(r,1):e.filename=""},Je,8,Ne)]))),128))]),t("div",Ke,[t("div",Ge,[He,t("button",{type:"button",class:"add-booking-receive",disabled:s.edit,onClick:o[12]||(o[12]=e=>d.add_attachments())},Xe,8,Qe)]),(m(!0),g(L,null,q(s.data.attachments.filter(e=>e.flag!="delete"),(e,r)=>(m(),g("div",{class:"d-flex mb-3",key:r},[t("div",Ye,[t("button",{type:"button",class:v([s.edit?"none-pointer":"","button-file"]),onClick:p=>s.edit?"":d.upload_file(`attachments${r}`)},[t("span",{class:v(e.filename?"":"no-data")},b(e.filename?e.filename:"สิ่งที่ส่งมาด้วย"),3)],10,Ze),t("div",{class:v(s.edit?"text disabled":"text pointer"),onClick:p=>s.edit?"":d.upload_file(`attachments${r}`)},"แนบเอกสาร",10,$e),t("input",{type:"file",onChange:p=>d.file_set_change(`attachments${r}`,r,"attachments"),name:`attachments${r}`,style:{display:"none"}},null,40,et)]),t("button",{type:"button",onClick:p=>d.download_file(e),class:"button-eye"},at,8,tt),t("button",{type:"button",class:"del-department-3",disabled:s.edit,onClick:p=>d.delete_attachments(e,r)},lt,8,ot)]))),128))])])]),dt,t("div",nt,[t("div",rt,[ct,c(k,{modelValue:s.data.sendTo,"onUpdate:modelValue":o[13]||(o[13]=e=>s.data.sendTo=e),flagSearch:!0,optionSelect:s.optionSelect.sendTo,onKeyup:d.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),t("div",_t,[pt,c(h,{modelValue:s.data.comment,"onUpdate:modelValue":o[14]||(o[14]=e=>s.data.comment=e),name:"comment",rows:"3"},null,8,["modelValue"])]),t("div",ut,[t("div",ht,[mt,c(n,{modelValue:s.data.process_type_id,"onUpdate:modelValue":o[15]||(o[15]=e=>s.data.process_type_id=e),name:"process_type_id",optionSelect:s.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),t("div",gt,[ft,c(n,{modelValue:s.data.permission_id,"onUpdate:modelValue":o[16]||(o[16]=e=>s.data.permission_id=e),name:"permission_id",optionSelect:s.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),t("div",bt,[t("div",null,[t("button",{type:"button",class:"button button-danger",onClick:o[17]||(o[17]=e=>(s.data.sendTo=[],s.data.comment="",s.data.process_type_id="",s.data.permission_id=""))},[vt,u(" ยกเลิก ")])]),t("div",null,[t("button",{type:"button",onClick:o[18]||(o[18]=e=>d.add_booking_follows()),class:"button button-success"},[kt,u(" เพิ่มการส่งต่อ ")])])]),s.data.booking_follows.length>0?(m(),g("div",yt)):j("",!0),(m(!0),g(L,null,q(s.data.booking_follows.filter(e=>e.flag!="delete"),(e,r)=>(m(),g("div",{class:"group-add",key:r},[t("div",wt,[t("div",St,"#"+b(r+1),1),t("img",{onClick:p=>d.delete_booking_follows(e,r),src:A,alt:"",class:"image-trash pointer"},null,8,Vt)]),t("div",Ct,[t("div",Lt,"ส่งต่อ : "+b((e==null?void 0:e.department_name)||"-"),1),t("div",qt,"รูปแบบการดำเนินการ : "+b((e==null?void 0:e.process_type_name)||"-"),1),t("div",At,"การมองเห็น : "+b((e==null?void 0:e.permission_name)||"-"),1)]),t("div",Ut,"ความเห็น / คำสั่ง : "+b((e==null?void 0:e.comment)||"-"),1)]))),128))]),xt,t("div",Mt,[t("div",Tt,[t("button",{type:"button",class:"button-danger",onClick:o[19]||(o[19]=e=>d.back())},[It,u(" ปิด ")])]),t("div",Ft,[t("button",{type:"submit",class:"button-success",onClick:o[20]||(o[20]=e=>s.flagSave=2),disabled:((w=s.data.sendTo)==null?void 0:w.length)<1},[Et,u(" บันทึกและส่งต่อ ")],8,jt)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])])]),c(V,{modalAlert:s.modalAlert},null,8,["modalAlert"]),c(C,{show:s.showLoading},null,8,["show"])])}const Nt=I(E,[["render",Rt]]);export{Nt as default};
