import{_ as I}from"./ballot-duotone-f2459825.js";import{_ as D}from"./plus-circle-duotone-64bd32fe.js";import{_ as T}from"./trash-alt-duotone-12d94c28.js";import{_ as R,r as g,o as f,c as b,a as e,t as x,b as u,d as j,F as q,h as A,i as M,n as L,j as h,g as F,k as E}from"./index-c6c955aa.js";const B={name:"booking-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{original_flag:!1,receive_regis_id:"",book_type_id:"",receive_date:this.assetsUtils.currentDate(),receive_time:this.assetsUtils.currentTime(),document_number:"",as_of_date:this.assetsUtils.currentDate(),subject:"",secret_id:"",speed_id:"",send_to:"หน่วยงาน A",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[],comment:"",process_type_id:"",permission_id:"",book_type:"",regis_id:""},optionSelect:{receive_regis_id:[],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]}}},methods:{deleteClick(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"หนังสือรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.axios.delete(`/booking-receive/${o.$route.params.id}`).then(()=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.back()}}}).catch(s=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}}},keyupDepartment(o){this.optionSelect.department_id=[],this.axios.get("/master-data/department",{params:{keyword:o.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(d=>(d.value=d.id,d.name=d.department_full_name,d)),this.optionSelect.department_id=s.data.data)})},keyupSendTo(o){this.optionSelect.sendTo=[],this.axios.get("/master-data/department",{params:{keyword:o.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(d=>(d.value=d.id,d.name=d.department_full_name,d)),this.optionSelect.sendTo=s.data.data)})},sendToClick(){this.axios.get("/v1/login")},booking_refersClick(o){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:o.receive_document_number}}).then(s=>{this.showLoading=!1,s.data.data.length>0?(o.book_refer_id=s.data.data[0].id,o.original_refer_id=s.data.data[0].id,o.book_type=s.data.data[0].book_type,o.desc=s.data.data[0].desc,o.receive_date=s.data.data[0].receive_date):(o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(s=>{o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},downloadFile(o){o.filename&&o.type=="pdf"&&this.axios({method:"get",url:o.link,baseURL:"",responseType:"blob"}).then(s=>{const d=new Blob([s.data],{type:"application/pdf"});window.open(URL.createObjectURL(d))})},uploadFile(o){document.querySelector(`[name="${o}"]`).click()},fileSetChange(o,s,d){for(var m=0;m<document.querySelector(`[name="${o}"]`).files.length;m++){let t=document.querySelector(`[name="${o}"]`).files[m];if(d=="main_docs"){if(t.type=="application/pdf"){let n={filename:t.name,type:t.type=="application/pdf"?"pdf":"",link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[d][s]=n,document.querySelector(`[name="${o}"]`).value=null}}else{let n={filename:t.name,type:t.type=="application/pdf"?"pdf":"",link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[d][s]=n,document.querySelector(`[name="${o}"]`).value=null}}},back(){this.$router.push({name:"booking-receive"}).catch(()=>{})},onSubmit(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.uploadFileAll()}}},uploadFileAll(){let o=this.assetsUtils.currentDate(),s=[],d=[],m=[],t=[],n=[],p=[];this.data.main_docs.filter(r=>{if(r.file){let l=new FormData;l.append("file",r.file),l.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),s.push(this.axios.post("/upload/single",l,{headers:{"Content-Type":"multipart/form-data"}}))}else r.id&&n.push({filename:r.filename,filepath:r.filepath})}),this.data.attachments.filter(r=>{if(r.file){let l=new FormData;l.append("file",r.file),l.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),d.push(this.axios.post("/upload/single",l,{headers:{"Content-Type":"multipart/form-data"}}))}else r.id&&p.push({filename:r.filename,filepath:r.filepath})}),s.length>0&&this.axios.all([...s]).then(this.axios.spread((...r)=>{r.filter(l=>{m.push({...l.data.data,filepath:l.data.data.path})}),s.length==m.length&&d.length==t.length&&this.callApiSave([...m,...n],[...t,...p])})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}}),d.length>0&&this.axios.all([...d]).then(this.axios.spread((...r)=>{r.filter(l=>{t.push({...l.data.data,filepath:l.data.data.path})}),s.length==m.length&&d.length==t.length&&this.callApiSave([...m,...n],[...t,...p])})).catch(r=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:r.response.data.message}}),s.length<1&&d.length<1&&this.callApiSave([...n],[...p])},callApiSave(o,s){let d=this,m="";this.data.tag.filter(p=>{m+=p.name+","}),m=m.slice(0,-1);let t=[];this.data.sendTo.filter(p=>{t.push({department_id:parseInt(p.value),comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),permission_id:parseInt(this.data.permission_id)})});let n={original_flag:this.data.original_flag,receive_regis_id:parseInt(this.data.receive_regis_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),receive_time:this.data.receive_time,as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:m,contracts:this.data.contracts,main_docs:[...o,...this.data.main_docs_del],attachments:[...s,...this.data.attachments_del],booking_refers:this.data.booking_refers[0].book_refer_id?this.data.booking_refers:[],booking_follows:t,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":"",book_type:parseInt(this.$route.query.book_type),regis_id:parseInt(this.$route.query.regis_id)};this.edit?this.flagSave==1?(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,n).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){d.back()}}}).catch(p=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})):(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,n).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){d.back()}}}).catch(p=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})):this.flagSave==1?(this.showLoading=!0,this.axios.post("/booking-receive",n).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){d.back()}}}).catch(p=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})):(this.showLoading=!0,this.axios.post("/booking-receive",n).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){d.back()}}}).catch(p=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}}))},apiDetail(){this.showLoading=!0,this.axios.get(`/booking-receive/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id}}).then(o=>{var m,t,n,p,r;this.showLoading=!1;let s=[],d=[];o.data.data.main_docs.filter(l=>{s.push({...l,flag:"delete"})}),o.data.data.attachments.filter(l=>{d.push({...l,flag:"delete"})}),o.data.data={...o.data.data,main_docs_del:s,attachments_del:d},this.data=JSON.parse(JSON.stringify(o.data.data)),this.data.tag=[],(m=o.data.data.tag)==null||m.split(",").filter(l=>{l&&this.data.tag.push({value:"",name:l})}),this.data.sendTo=[],o.data.data.booking_follows.filter(l=>{this.data.sendTo.push({value:l.department_id,name:l.department_name}),this.data.comment=l.comment,this.data.process_type_id=l.process_type_id,this.data.permission_id=l.permission_id,this.data.book_type=l.book_type}),this.data.booking_refers=[],o.data.data.booking_refers.filter(l=>{this.axios.get(`/master-data/book-refer/${l.book_type}/${l.id}`).then(y=>{this.data.booking_refers.push({...l,...y.data.data})}).catch(y=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:y.response.data.message}})}),(((t=this.data.main_docs)==null?void 0:t.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:""}]),(((n=this.data.attachments)==null?void 0:n.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:""}]),(((p=this.data.contracts)==null?void 0:p.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:""}]),(((r=this.data.booking_refers)==null?void 0:r.length)<1||!this.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}])}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},apiMaster(){this.showLoading=!0;const o=this.axios.get("/master-data/register-type"),s=this.axios.get("/master-data/book-type"),d=this.axios.get("/master-data/secret"),m=this.axios.get("/master-data/speed"),t=this.axios.get("/master-data/process-type"),n=this.axios.get("/master-data/permission-type"),p=this.axios.get("/master-data/department"),r=this.axios.get("/master-data/receive-type");this.axios.all([o,s,d,m,t,n,p,r]).then(this.axios.spread((...l)=>{this.showLoading=!1;const y=l[0],v=l[1],k=l[2],V=l[3],w=l[4],S=l[5],C=l[6],U=l[7];y.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i)),v.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i)),k.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i)),V.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i)),w.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i)),S.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i)),C.data.data.filter(i=>(i.value=i.id,i.name=i.department_full_name,i)),U.data.data.filter(i=>(i.value=i.id,i.name=i.desc,i)),this.optionSelect.receive_regis_id=y.data.data,this.optionSelect.book_type_id=v.data.data,this.optionSelect.secret_id=k.data.data,this.optionSelect.speed_id=V.data.data,this.optionSelect.process_type_id=w.data.data,this.optionSelect.permission_id=S.data.data,this.optionSelect.department_id=C.data.data,this.optionSelect.receive_type=U.data.data,this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}},mounted(){this.apiMaster()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},N={class:"booking-receive-detail"},P={class:"group-overflow"},z={class:"detail"},O={class:"group-head"},K={class:"group-first"},J=e("img",{src:I,alt:"",class:"icon-size"},null,-1),G={class:"name"},H=e("div",{class:"line"},null,-1),Q={class:"group-detail"},W={class:"group-input"},X={class:"group-between"},Y={class:"group-input left"},Z=e("div",{class:"name"},[h("ทะเบียนรับ "),e("span",{class:"required"},"*")],-1),$={class:"group-between"},ee={class:"group-input left"},te=e("div",{class:"name"},[h("วันที่รับหนังสือ "),e("span",{class:"required"},"*")],-1),se={class:"group-input"},ae=e("div",{class:"name"},[h("เวลาที่รับหนังสือ "),e("span",{class:"required"},"*")],-1),oe={class:"group-between"},ie={class:"group-input left"},le=e("div",{class:"name"},[h("ชนิดของหนังสือ "),e("span",{class:"required"},"*")],-1),de={class:"group-between"},ne={class:"group-input left"},re=e("div",{class:"name"},[h("เลขที่หนังสือ "),e("span",{class:"required"},"*")],-1),ce={class:"group-input"},_e=e("div",{class:"name"},[h("ลงวันที่ "),e("span",{class:"required"},"*")],-1),ue={class:"group-input d-flex align-items-center"},pe=e("div",{class:"name"},"อ้างอิงถึง",-1),he=e("div",{class:"group-image"},[e("img",{src:D,alt:"",class:"icon-plus"}),h(" เพิ่มเอกสารอ้างอิง ")],-1),me=[he],ge={class:"group-input left"},fe={class:"group-input left"},be={class:"group-input d-flex"},ve=["onClick"],ye=e("img",{src:T,alt:"",class:"image-trash pointer"},null,-1),ke=[ye],Ve=e("div",{class:"group-input"},null,-1),we={class:"group-between"},Se={class:"group-input left"},Ce=e("div",{class:"name"},[h("ชื่อเรื่อง "),e("span",{class:"required"},"*")],-1),Ue={class:"group-between"},qe={class:"group-input left"},Ae=e("div",{class:"name"},[h("ชั้นความลับ "),e("span",{class:"required"},"*")],-1),Le={class:"group-input"},xe=e("div",{class:"name"},[h("ความเร่งด่วน "),e("span",{class:"required"},"*")],-1),Me={class:"group-input left"},Te=e("div",{class:"name"},[h("เรียน "),e("span",{class:"required"},"*")],-1),Fe={class:"group-input left"},De=e("div",{class:"name"},"รายละเอียดหนังสือ",-1),Ee={class:"group-input"},Ie=e("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),Re=e("div",{class:"line"},null,-1),je={class:"group-between"},Be={class:"group-input left"},Ne=e("div",{class:"name"},[h("หน่วยงานที่เสนอเรื่อง "),e("span",{class:"required"},"*")],-1),Pe={class:"group-input"},ze=e("div",{class:"name"},[h("ช่องทางการรับเอกสาร "),e("span",{class:"required"},"*")],-1),Oe={key:0,class:"group-between"},Ke={class:"group-input left"},Je=e("div",{class:"name"},[h("ระบุชื่อหน่วยงานอื่นๆ "),e("span",{class:"required"},"*")],-1),Ge=e("div",{class:"group-input"},null,-1),He={class:"group-between"},Qe={class:"group-input left"},We=e("div",{class:"name"},"ผู้ติดต่อ",-1),Xe={class:"group-between"},Ye={class:"group-input left"},Ze=e("div",{class:"name"},"โทรศัพท์",-1),$e={class:"group-input"},et=e("div",{class:"name"},"E-mail",-1),tt=e("div",{class:"line"},null,-1),st={class:"group-detail"},at={class:"group-between"},ot={class:"group-input left"},it=e("div",{class:"name"},"หนังสือต้นเรื่อง",-1),lt={class:"group-input-file"},dt=["onClick","disabled"],nt=["onClick"],rt=["onChange","name"],ct=["onClick"],_t=e("i",{class:"bi bi-eye icon-eye"},null,-1),ut=[_t],pt=["onClick"],ht=e("img",{src:T,alt:"",class:"image-trash pointer"},null,-1),mt=[ht],gt={class:"group-input"},ft={class:"group-input d-flex align-items-center"},bt=e("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),vt=e("div",{class:"group-image"},[e("img",{src:D,alt:"",class:"icon-plus"}),h(" เพิ่มไฟล์ ")],-1),yt=[vt],kt={class:"group-input-file"},Vt=["onClick","disabled"],wt=["onClick"],St=["onChange","name"],Ct=["onClick"],Ut=e("i",{class:"bi bi-eye icon-eye"},null,-1),qt=[Ut],At=["onClick"],Lt=e("img",{src:T,alt:"",class:"image-trash pointer"},null,-1),xt=[Lt],Mt=e("div",{class:"line"},null,-1),Tt={class:"send-to"},Ft={class:"group-input"},Dt=e("div",{class:"name"},[h("ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) "),e("span",{class:"required"},"*กรุณาใส่รายชื่อที่ต้องการส่งต่อ")],-1),Et={class:"group-input"},It=e("div",{class:"name"},"ความเห็น / คำสั่ง",-1),Rt={class:"group-between"},jt={class:"group-input left"},Bt=e("div",{class:"name"},"รูปแบบการดำเนินการ",-1),Nt={class:"group-input"},Pt=e("div",{class:"name"},"การมองเห็น",-1),zt={class:"d-flex align-items-center justify-content-between"},Ot=e("img",{src:F,alt:"times-circle",class:"icon-times-circle"},null,-1);const Kt=e("div",{class:"line mt-4"},null,-1),Jt={class:"group-footer"},Gt={class:"footer-left d-flex"},Ht=e("img",{src:F,alt:"times-circle",class:"icon-times-circle"},null,-1),Qt=e("img",{src:F,alt:"times-circle",class:"icon-times-circle"},null,-1),Wt={class:"footer-right"},Xt=e("img",{src:E,alt:"times-circle",class:"icon-check-circle"},null,-1),Yt=["disabled"],Zt=e("img",{src:E,alt:"times-circle",class:"icon-check-circle"},null,-1);function $t(o,s,d,m,t,n){const p=g("cpn-checkbox"),r=g("cpn-select"),l=g("cpn-datepicker"),y=g("cpn-time"),v=g("cpn-input"),k=g("cpn-textArea"),V=g("cpn-input-tags"),w=g("cpn-autoComplete"),S=g("Form"),C=g("cpn-modal-alert"),U=g("cpn-loading");return f(),b("div",N,[e("div",P,[e("div",z,[e("div",O,[e("div",K,[J,e("div",G,x(t.edit?"แก้ไขหนังสือรับเข้า":"สร้างหนังสือรับเข้า"),1)])]),H,u(S,{onSubmit:n.onSubmit,onInvalidSubmit:o.onInvalidSubmit},{default:j(()=>{var i;return[e("div",Q,[e("div",W,[u(p,{modelValue:t.data.original_flag,"onUpdate:modelValue":s[0]||(s[0]=a=>t.data.original_flag=a),name:"original_flag",label:"หนังสือต้นเรื่อง"},null,8,["modelValue"])]),e("div",X,[e("div",Y,[Z,u(r,{modelValue:t.data.receive_regis_id,"onUpdate:modelValue":s[1]||(s[1]=a=>t.data.receive_regis_id=a),name:"receive_regis_id",rules:"required",optionSelect:t.optionSelect.receive_regis_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",$,[e("div",ee,[te,u(l,{modelValue:t.data.receive_date,"onUpdate:modelValue":s[2]||(s[2]=a=>t.data.receive_date=a),name:"receive_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",se,[ae,u(y,{modelValue:t.data.receive_time,"onUpdate:modelValue":s[3]||(s[3]=a=>t.data.receive_time=a),name:"receive_time",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),e("div",oe,[e("div",ie,[le,u(r,{modelValue:t.data.book_type_id,"onUpdate:modelValue":s[4]||(s[4]=a=>t.data.book_type_id=a),name:"book_type_id",rules:"required",optionSelect:t.optionSelect.book_type_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",de,[e("div",ne,[re,u(v,{modelValue:t.data.document_number,"onUpdate:modelValue":s[5]||(s[5]=a=>t.data.document_number=a),name:"document_number",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",ce,[_e,u(l,{modelValue:t.data.as_of_date,"onUpdate:modelValue":s[6]||(s[6]=a=>t.data.as_of_date=a),name:"as_of_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])])]),e("div",ue,[pe,e("button",{type:"button",class:"add-booking-receive",onClick:s[7]||(s[7]=a=>t.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:""}))},me)]),(f(!0),b(q,null,A(t.data.booking_refers,(a,_)=>(f(),b("div",{class:"group-between",key:_},[e("div",ge,[u(v,{modelValue:a.receive_document_number,"onUpdate:modelValue":c=>a.receive_document_number=c,name:`codeRefers${_}`,type:"text",searchFlag:!0,onSearchClick:c=>n.booking_refersClick(a),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),e("div",fe,[u(v,{modelValue:a.desc,"onUpdate:modelValue":c=>a.desc=c,name:`nameRefers${_}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",be,[u(l,{modelValue:a.receive_date,"onUpdate:modelValue":c=>a.receive_date=c,name:`dateRefers${_}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",onClick:c=>(t.data.booking_refers.length>1?t.data.booking_refers.splice(_,1):a.book_refer_id="",a.original_refer_id="",a.receive_document_number="",a.desc="",a.receive_date=""),class:"button-delete ms-3"},ke,8,ve)])]))),128)),Ve,e("div",we,[e("div",Se,[Ce,u(k,{modelValue:t.data.subject,"onUpdate:modelValue":s[8]||(s[8]=a=>t.data.subject=a),name:"subject",rules:"required",disabled:t.edit,rows:"3"},null,8,["modelValue","disabled"])]),e("div",Ue,[e("div",qe,[Ae,u(r,{modelValue:t.data.secret_id,"onUpdate:modelValue":s[9]||(s[9]=a=>t.data.secret_id=a),name:"secret_id",rules:"required",optionSelect:t.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])]),e("div",Le,[xe,u(r,{modelValue:t.data.speed_id,"onUpdate:modelValue":s[10]||(s[10]=a=>t.data.speed_id=a),name:"speed_id",rules:"required",optionSelect:t.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])])])]),e("div",Me,[Te,u(k,{modelValue:t.data.send_to,"onUpdate:modelValue":s[11]||(s[11]=a=>t.data.send_to=a),name:"send_to",rules:"required",rows:"1",disabled:t.edit},null,8,["modelValue","disabled"])]),e("div",Fe,[De,u(k,{modelValue:t.data.book_desc,"onUpdate:modelValue":s[12]||(s[12]=a=>t.data.book_desc=a),name:"book_desc",rows:"1"},null,8,["modelValue"])]),e("div",Ee,[Ie,u(V,{modelValue:t.data.tag,"onUpdate:modelValue":s[13]||(s[13]=a=>t.data.tag=a),name:"tag"},null,8,["modelValue"])])]),Re,(f(!0),b(q,null,A(t.data.contracts,(a,_)=>(f(),b("div",{class:"group-detail",key:_},[e("div",je,[e("div",Be,[Ne,u(w,{modelValue:a.department_id,"onUpdate:modelValue":c=>a.department_id=c,name:`${_}department_id`,rules:"required",disabled:t.edit,onKeyup:s[14]||(s[14]=c=>n.keyupDepartment(c)),optionSelect:t.optionSelect.department_id},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])]),e("div",Pe,[ze,u(r,{modelValue:a.receive_type,"onUpdate:modelValue":c=>a.receive_type=c,name:`${_}receive_type`,rules:"required",disabled:t.edit,optionSelect:t.optionSelect.receive_type},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])])]),a.department_id==1860?(f(),b("div",Oe,[e("div",Ke,[Je,u(v,{modelValue:a.department_other,"onUpdate:modelValue":c=>a.department_other=c,name:`${_}department_other`,rules:a.department_id==1860?"required":"",disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","rules","disabled"])]),Ge])):M("",!0),e("div",He,[e("div",Qe,[We,u(v,{modelValue:a.contract_name,"onUpdate:modelValue":c=>a.contract_name=c,name:`${_}contract_name`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),e("div",Xe,[e("div",Ye,[Ze,u(v,{modelValue:a.contract_phone,"onUpdate:modelValue":c=>a.contract_phone=c,isNumber:!0,maxlength:"10",name:`${_}contract_phone`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),e("div",$e,[et,u(v,{modelValue:a.contract_mail,"onUpdate:modelValue":c=>a.contract_mail=c,rules:"email",name:`${_}contract_mail`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])])])])]))),128)),tt,e("div",st,[e("div",at,[e("div",ot,[it,(f(!0),b(q,null,A(t.data.main_docs,(a,_)=>(f(),b("div",{class:"d-flex mb-3",key:_},[e("div",lt,[e("button",{type:"button",class:"button-file",onClick:c=>t.edit?"":n.uploadFile(`main_docs${_}`),disabled:t.edit},[e("span",{class:L(a.filename?"":"no-data")},x(a.filename?a.filename:"หนังสือต้นเรื่อง"),3)],8,dt),e("div",{class:L(t.edit?"text disabled":"text pointer"),onClick:c=>t.edit?"":n.uploadFile(`main_docs${_}`)},"แนบเอกสาร",10,nt),e("input",{type:"file",onChange:c=>n.fileSetChange(`main_docs${_}`,_,"main_docs"),name:`main_docs${_}`,style:{display:"none"},accept:"application/pdf"},null,40,rt)]),e("button",{type:"button",onClick:c=>n.downloadFile(a),class:"button-eye"},ut,8,ct),e("button",{type:"button",class:"del-department-3",onClick:c=>t.data.main_docs.length>1?t.data.main_docs.splice(_,1):a.filename=""},mt,8,pt)]))),128))]),e("div",gt,[e("div",ft,[bt,e("button",{type:"button",class:"add-booking-receive",onClick:s[15]||(s[15]=a=>t.edit?"":t.data.attachments.push({filename:""}))},yt)]),(f(!0),b(q,null,A(t.data.attachments,(a,_)=>(f(),b("div",{class:"d-flex mb-3",key:_},[e("div",kt,[e("button",{type:"button",class:"button-file",onClick:c=>t.edit?"":n.uploadFile(`attachments${_}`),disabled:t.edit},[e("span",{class:L(a.filename?"":"no-data")},x(a.filename?a.filename:"สิ่งที่ส่งมาด้วย"),3)],8,Vt),e("div",{class:L(t.edit?"text disabled":"text pointer"),onClick:c=>t.edit?"":n.uploadFile(`attachments${_}`)},"แนบเอกสาร",10,wt),e("input",{type:"file",onChange:c=>n.fileSetChange(`attachments${_}`,_,"attachments"),name:`attachments${_}`,style:{display:"none"}},null,40,St)]),e("button",{type:"button",onClick:c=>n.downloadFile(a),class:"button-eye"},qt,8,Ct),e("button",{type:"button",class:"del-department-3",onClick:c=>t.data.attachments.length>1?t.data.attachments.splice(_,1):a.filename=""},xt,8,At)]))),128))])])]),Mt,e("div",Tt,[e("div",Ft,[Dt,u(V,{modelValue:t.data.sendTo,"onUpdate:modelValue":s[16]||(s[16]=a=>t.data.sendTo=a),flagSearch:!0,optionSelect:t.optionSelect.sendTo,onKeyup:n.keyupSendTo,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),e("div",Et,[It,u(k,{modelValue:t.data.comment,"onUpdate:modelValue":s[17]||(s[17]=a=>t.data.comment=a),name:"comment",rows:"3"},null,8,["modelValue"])]),e("div",Rt,[e("div",jt,[Bt,u(r,{modelValue:t.data.process_type_id,"onUpdate:modelValue":s[18]||(s[18]=a=>t.data.process_type_id=a),name:"process_type_id",optionSelect:t.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),e("div",Nt,[Pt,u(r,{modelValue:t.data.permission_id,"onUpdate:modelValue":s[19]||(s[19]=a=>t.data.permission_id=a),name:"permission_id",optionSelect:t.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),e("div",zt,[e("div",null,[e("button",{type:"button",class:"button button-danger",onClick:s[20]||(s[20]=a=>(t.data.sendTo=[],t.data.comment="",t.data.process_type_id="",t.data.permission_id=""))},[Ot,h(" ยกเลิก ")])]),e("div",null,[M("",!0)])])]),Kt,e("div",Jt,[e("div",Gt,[e("button",{type:"button",class:"button-danger",onClick:s[22]||(s[22]=a=>n.back())},[Ht,h(" ปิด ")]),o.$route.params.id?(f(),b("button",{key:0,type:"button",class:"button-danger ms-3",onClick:s[23]||(s[23]=a=>n.deleteClick())},[Qt,h(" ลบ ")])):M("",!0)]),e("div",Wt,[e("button",{type:"submit",class:"button-primary",onClick:s[24]||(s[24]=a=>t.flagSave=1)},[Xt,h(" บันทึกแบบร่าง ")]),e("button",{type:"submit",class:"button-success",onClick:s[25]||(s[25]=a=>t.flagSave=2),disabled:((i=t.data.sendTo)==null?void 0:i.length)<1},[Zt,h(" บันทึกและส่งต่อ ")],8,Yt)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])])]),u(C,{modalAlert:t.modalAlert},null,8,["modalAlert"]),u(U,{show:t.showLoading},null,8,["show"])])}const os=R(B,[["render",$t]]);export{os as default};
