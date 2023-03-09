import{_ as j}from"./ballot-duotone-f2459825.js";import{_ as E}from"./plus-circle-duotone-64bd32fe.js";import{_ as M}from"./trash-alt-duotone-12d94c28.js";import{_ as R,r as b,o as g,c as f,a as e,t as k,b as u,d as D,F as S,h as U,i as T,n as w,j as h,g as I,k as F}from"./index-de66d52e.js";const P={name:"booking-receive-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,flagSave:1,data:{original_flag:!1,receive_regis_id:"",book_type_id:"",receive_date:this.assetsUtils.currentDate(),receive_time:this.assetsUtils.currentTime(),document_number:"",as_of_date:this.assetsUtils.currentDate(),subject:"",secret_id:"",speed_id:"",send_to:"",book_desc:"",tag:[],contracts:[{department_id:"",department_other:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:""}],main_docs:[{filename:""}],attachments:[{filename:""}],main_docs_del:[],booking_refers:[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:""}],sendTo:[],booking_follows:[],comment:"",process_type_id:"",permission_id:"",book_type:"",regis_id:""},optionSelect:{receive_regis_id:[],book_type_id:[],secret_id:[],speed_id:[],department_id:[],receive_type:[],process_type_id:[],permission_id:[],sendTo:[]}}},methods:{add_attachments(){this.data.attachments.push({filename:"",flag:"add"})},delete_attachments(o,s){o.flag=="edit"?o.flag="delete":this.data.attachments.splice(s,1),this.data.attachments.length-this.data.attachments.filter(n=>n.flag=="delete").length<1&&this.add_attachments()},add_booking_refers(){this.data.booking_refers.push({book_refer_id:"",original_refer_id:"",book_type:"",receive_date:"",receive_document_number:"",desc:"",flag:"add"})},delete_booking_refers(o,s){o.flag=="edit"?o.flag="delete":this.data.booking_refers.splice(s,1),this.data.booking_refers.length-this.data.booking_refers.filter(n=>n.flag=="delete").length<1&&this.add_booking_refers()},booking_refers_click(o){this.showLoading=!0,this.axios.get("/master-data/book-refer",{params:{keyword:o.receive_document_number}}).then(s=>{this.showLoading=!1,s.data.data.length>0?(o.book_refer_id=s.data.data[0].id,o.original_refer_id=s.data.data[0].id,o.book_type=s.data.data[0].book_type,o.desc=s.data.data[0].desc,o.receive_date=s.data.data[0].receive_date):(o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"})}).catch(s=>{o.receive_document_number="",o.book_refer_id="",o.original_refer_id="",o.book_type="",o.desc="",o.receive_date="",this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"",message:"ไม่พบหนังสืออ้างอิง"}})},delete_click(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบ",message:"หนังสือรับเข้า ใช่หรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.axios.delete(`/booking-receive/${o.$route.params.id}`).then(()=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.back()}}}).catch(s=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}}},keyup_department(o){this.optionSelect.department_id=[],this.axios.get("/master-data/department",{params:{keyword:o.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(n=>(n.value=n.id,n.name=n.department_full_name,n)),this.optionSelect.department_id=s.data.data)})},keyup_send_to(o){this.optionSelect.sendTo=[],this.axios.get("/master-data/department",{params:{keyword:o.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(n=>(n.value=n.id,n.name=n.department_full_name,n)),this.optionSelect.sendTo=s.data.data)})},add_booking_follows(){this.data.sendTo.filter(o=>{if(!this.data.booking_follows.some(s=>s.department_id===o.value&&s.flag!="delete")){let s={department_id:parseInt(o.value),department_name:o.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add"};this.optionSelect.process_type_id.find(n=>{n.value==this.data.process_type_id&&(s.process_type_name=n.name)}),this.optionSelect.permission_id.find(n=>{n.value==this.data.permission_id&&(s.permission_name=n.name)}),this.data.booking_follows.push(s)}})},delete_booking_follows(o,s){o.flag=="edit"?o.flag="delete":this.data.booking_follows.splice(s,1)},download_file(o){o.filename&&o.link&&this.axios({method:"get",url:o.link,baseURL:"",responseType:"blob"}).then(s=>{const n=new Blob([s.data],{type:this.assetsUtils.getTypeFile(o.filename)});window.open(URL.createObjectURL(n))})},upload_file(o){document.querySelector(`[name="${o}"]`).click()},file_set_change(o,s,n){for(var m=0;m<document.querySelector(`[name="${o}"]`).files.length;m++){let t=document.querySelector(`[name="${o}"]`).files[m];if(n=="main_docs"){if(t.type=="application/pdf"){let l={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[n][s]={...this.data[n][s],...l},document.querySelector(`[name="${o}"]`).value=null}}else{let l={filename:t.name,type:t.type,link:URL.createObjectURL(t),size:(t.size/1024/1024).toFixed(2)+" MB",file:t};this.data[n][s]={...this.data[n][s],...l},document.querySelector(`[name="${o}"]`).value=null}}},back(){this.$router.push({name:"my-work.booking-receive",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},on_submit(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){o.showLoading=!0,o.upload_file_all()}}},upload_file_all(){let o=this.assetsUtils.currentDate(),s=[],n=[],m=[],t=[],l=[];this.data.main_docs.filter(_=>{if(_.file){let i=new FormData;i.append("file",_.file),i.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),s.push(this.axios.post("/upload/single",i,{headers:{"Content-Type":"multipart/form-data"}}))}else _.id&&l.push({filename:_.filename,filepath:_.filepath})}),this.data.attachments.filter(_=>{if(_.file){let i=new FormData;i.append("file",_.file),i.append("dst",`${o.split("/")[0]+"-"+o.split("/")[1]+"-"+o.split("/")[2]}`),n.push(this.axios.post("/upload/single",i,{headers:{"Content-Type":"multipart/form-data"}}))}}),s.length>0&&this.axios.all([...s]).then(this.axios.spread((..._)=>{_.filter((i,p)=>{m.push({...this.data.main_docs[p],...i.data.data,filepath:i.data.data.path})}),s.length==m.length&&n.length==t.length&&this.call_api_save([...m,...l],t)})).catch(_=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:_.response.data.message}}),n.length>0&&this.axios.all([...n]).then(this.axios.spread((..._)=>{_.filter((i,p)=>{t.push({...this.data.attachments[p],...i.data.data,filepath:i.data.data.path})}),s.length==m.length&&n.length==t.length&&this.call_api_save([...m,...l],t)})).catch(_=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:_.response.data.message}}),s.length<1&&n.length<1&&this.call_api_save([...l],[])},call_api_save(o,s){let n=this,m="";this.data.tag.filter(l=>{m+=l.name+","}),m=m.slice(0,-1),this.data.sendTo.filter(l=>{if(!this.data.booking_follows.some(_=>_.department_id===l.value&&_.flag!="delete")){let _={department_id:parseInt(l.value),department_name:l.name,comment:this.data.comment,process_type_id:parseInt(this.data.process_type_id),process_type_name:"",permission_id:parseInt(this.data.permission_id),permission_name:"",flag:"add"};this.optionSelect.process_type_id.find(i=>{i.value==this.data.process_type_id&&(_.process_type_name=i.name)}),this.optionSelect.permission_id.find(i=>{i.value==this.data.permission_id&&(_.permission_name=i.name)}),this.data.booking_follows.push(_)}});let t={original_flag:this.data.original_flag,receive_regis_id:parseInt(this.data.receive_regis_id),book_type_id:parseInt(this.data.book_type_id),receive_date:this.assetsUtils.yearDel543(this.data.receive_date),receive_time:this.data.receive_time,as_of_date:this.assetsUtils.yearDel543(this.data.as_of_date),document_number:this.data.document_number,subject:this.data.subject,secret_id:parseInt(this.data.secret_id),speed_id:parseInt(this.data.speed_id),send_to:this.data.send_to,book_desc:this.data.book_desc,tag:m,contracts:this.data.contracts,main_docs:[...o,...this.data.main_docs_del],attachments:s,booking_refers:this.data.booking_refers.filter(l=>l.book_refer_id),booking_follows:this.data.booking_follows,user_id:parseInt(localStorage.getItem("user_id")),flag:this.flagSave==1?"draft":"",book_type:parseInt(this.$route.query.book_type),regis_id:parseInt(this.$route.query.regis_id)};this.edit?this.flagSave==1?(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){n.back()}}}).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})):(this.showLoading=!0,this.axios.put(`/booking-receive/${this.$route.params.id}`,t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){n.back()}}}).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})):this.flagSave==1?(this.showLoading=!0,this.axios.post("/booking-receive",t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){n.back()}}}).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})):(this.showLoading=!0,this.axios.post("/booking-receive",t).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){n.back()}}}).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}}))},api_detail(){this.showLoading=!0,this.axios.get(`/booking-receive/${this.$route.params.id}`,{params:{book_type:this.$route.query.book_type,regis_id:this.$route.query.regis_id}}).then(o=>{var n,m,t,l,_;this.showLoading=!1;let s=[];o.data.data.main_docs.filter(i=>{s.push({...i,flag:"delete"})}),o.data.data={...o.data.data,main_docs_del:s},this.data=JSON.parse(JSON.stringify(o.data.data)),this.data.tag=[],(n=o.data.data.tag)==null||n.split(",").filter(i=>{i&&this.data.tag.push({value:"",name:i})}),this.data.sendTo=[],this.data.booking_refers=[],o.data.data.booking_refers.filter(i=>{i.flag="edit",this.axios.get(`/master-data/book-refer/${i.book_type}/${i.id}`).then(p=>{this.data.booking_refers.push({...p.data.data,...i})}).catch(p=>{this.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})}),this.data.main_docs.filter(i=>(i.flag="edit",i.link=i.filepath?this.backendport+"/"+i.filepath:"",i)),this.data.attachments.filter(i=>(i.flag="edit",i.link=i.filepath?this.backendport+"/"+i.filepath:"",i)),this.data.contracts.filter(i=>(i.flag="edit",i)),this.data.booking_follows.filter(i=>(i.flag="edit",i)),(((m=this.data.main_docs)==null?void 0:m.length)<1||!this.data.main_docs)&&(this.data.main_docs=[{filename:"",flag:"add"}]),(((t=this.data.attachments)==null?void 0:t.length)<1||!this.data.attachments)&&(this.data.attachments=[{filename:"",flag:"add"}]),(((l=this.data.contracts)==null?void 0:l.length)<1||!this.data.contracts)&&(this.data.contracts=[{department_id:"",receive_type:"",contract_name:"",contract_phone:"",contract_mail:"",department_other:"",flag:"add"}]),(((_=o.data.data.booking_refers)==null?void 0:_.length)<1||!o.data.data.booking_refers)&&(this.data.booking_refers=[{receive_document_number:"",desc:"",receive_date:"",book_refer_id:"",original_refer_id:"",book_type:"",flag:"add"}])}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},api_master(){this.showLoading=!0;const o=this.axios.get("/master-data/register-type"),s=this.axios.get("/master-data/book-type"),n=this.axios.get("/master-data/secret"),m=this.axios.get("/master-data/speed"),t=this.axios.get("/master-data/process-type"),l=this.axios.get("/master-data/permission-type"),_=this.axios.get("/master-data/department"),i=this.axios.get("/master-data/receive-type");this.axios.all([o,s,n,m,t,l,_,i]).then(this.axios.spread((...p)=>{this.showLoading=!1;const q=p[0],v=p[1],y=p[2],V=p[3],C=p[4],L=p[5],A=p[6],x=p[7];q.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),v.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),y.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),V.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),C.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),L.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),A.data.data.filter(d=>(d.value=d.id,d.name=d.department_full_name,d)),x.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d)),this.optionSelect.receive_regis_id=q.data.data,this.optionSelect.book_type_id=v.data.data,this.optionSelect.secret_id=y.data.data,this.optionSelect.speed_id=V.data.data,this.optionSelect.process_type_id=C.data.data,this.optionSelect.permission_id=L.data.data,this.optionSelect.department_id=A.data.data,this.optionSelect.receive_type=x.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(p=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})}},mounted(){this.api_master()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},N={class:"booking-receive-detail"},z={class:"group-overflow"},B={class:"detail"},O={class:"group-head"},K={class:"group-first"},J=e("img",{src:j,alt:"",class:"icon-size"},null,-1),G={class:"name"},H=e("div",{class:"line"},null,-1),Q={class:"group-detail"},W={class:"group-input"},X={class:"group-between"},Y={class:"group-input left"},Z=e("div",{class:"name"},[h("ทะเบียนรับ "),e("span",{class:"required"},"*")],-1),$={class:"group-between"},ee={class:"group-input left"},te=e("div",{class:"name"},[h("วันที่รับหนังสือ "),e("span",{class:"required"},"*")],-1),se={class:"group-input"},ae=e("div",{class:"name"},[h("เวลาที่รับหนังสือ "),e("span",{class:"required"},"*")],-1),oe={class:"group-between"},ie={class:"group-input left"},le=e("div",{class:"name"},[h("ชนิดของหนังสือ "),e("span",{class:"required"},"*")],-1),de={class:"group-between"},ne={class:"group-input left"},re=e("div",{class:"name"},[h("เลขที่หนังสือ "),e("span",{class:"required"},"*")],-1),ce={class:"group-input"},_e=e("div",{class:"name"},[h("ลงวันที่ "),e("span",{class:"required"},"*")],-1),ue={class:"group-input d-flex align-items-center"},pe=e("div",{class:"name"},"อ้างอิงถึง",-1),he=e("div",{class:"group-image"},[e("img",{src:E,alt:"",class:"icon-plus"}),h(" เพิ่มเอกสารอ้างอิง ")],-1),me=[he],ge={class:"group-input left"},fe={class:"group-input left"},be={class:"group-input d-flex"},ve=["onClick"],ke=e("img",{src:M,alt:"",class:"image-trash pointer"},null,-1),ye=[ke],we=e("div",{class:"group-input"},null,-1),Ve={class:"group-between"},Se={class:"group-input left"},Ue=e("div",{class:"name"},[h("ชื่อเรื่อง "),e("span",{class:"required"},"*")],-1),qe={class:"group-between"},Ce={class:"group-input left"},Le=e("div",{class:"name"},[h("ชั้นความลับ "),e("span",{class:"required"},"*")],-1),Ae={class:"group-input"},xe=e("div",{class:"name"},[h("ความเร่งด่วน "),e("span",{class:"required"},"*")],-1),Me={class:"group-input left"},Te=e("div",{class:"name"},[h("เรียน "),e("span",{class:"required"},"*")],-1),Ie={class:"group-input left"},Fe=e("div",{class:"name"},"รายละเอียดหนังสือ",-1),Ee={class:"group-input"},je=e("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),Re=e("div",{class:"line"},null,-1),De={class:"group-between"},Pe={class:"group-input left"},Ne=e("div",{class:"name"},[h("หน่วยงานที่เสนอเรื่อง "),e("span",{class:"required"},"*")],-1),ze={class:"group-input"},Be=e("div",{class:"name"},[h("ช่องทางการรับเอกสาร "),e("span",{class:"required"},"*")],-1),Oe={key:0,class:"group-between"},Ke={class:"group-input left"},Je=e("div",{class:"name"},[h("ระบุชื่อหน่วยงานอื่นๆ "),e("span",{class:"required"},"*")],-1),Ge=e("div",{class:"group-input"},null,-1),He={class:"group-between"},Qe={class:"group-input left"},We=e("div",{class:"name"},"ผู้ติดต่อ",-1),Xe={class:"group-between"},Ye={class:"group-input left"},Ze=e("div",{class:"name"},"โทรศัพท์",-1),$e={class:"group-input"},et=e("div",{class:"name"},"E-mail",-1),tt=e("div",{class:"line"},null,-1),st={class:"group-detail"},at={class:"group-between"},ot={class:"group-input left"},it=e("div",{class:"name"},"หนังสือต้นเรื่อง",-1),lt={class:"group-input-file"},dt=["onClick"],nt=["onClick"],rt=["onChange","name"],ct=["onClick"],_t=e("i",{class:"bi bi-eye icon-eye"},null,-1),ut=[_t],pt=["disabled","onClick"],ht=e("img",{src:M,alt:"",class:"image-trash"},null,-1),mt=[ht],gt={class:"group-input"},ft={class:"group-input d-flex align-items-center"},bt=e("div",{class:"name"},"สิ่งที่ส่งมาด้วย",-1),vt=["disabled"],kt=e("div",{class:"group-image"},[e("img",{src:E,alt:"",class:"icon-plus"}),h(" เพิ่มไฟล์ ")],-1),yt=[kt],wt={class:"group-input-file"},Vt=["onClick"],St=["onClick"],Ut=["onChange","name"],qt=["onClick"],Ct=e("i",{class:"bi bi-eye icon-eye"},null,-1),Lt=[Ct],At=["disabled","onClick"],xt=e("img",{src:M,alt:"",class:"image-trash"},null,-1),Mt=[xt],Tt=e("div",{class:"line"},null,-1),It={class:"send-to"},Ft={class:"group-input"},Et=e("div",{class:"name"},[h("ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) "),e("span",{class:"required"},"*กรุณาใส่รายชื่อที่ต้องการส่งต่อ")],-1),jt={class:"group-input"},Rt=e("div",{class:"name"},"ความเห็น / คำสั่ง",-1),Dt={class:"group-between"},Pt={class:"group-input left"},Nt=e("div",{class:"name"},"รูปแบบการดำเนินการ",-1),zt={class:"group-input"},Bt=e("div",{class:"name"},"การมองเห็น",-1),Ot={class:"d-flex align-items-center justify-content-between"},Kt=e("img",{src:I,alt:"times-circle",class:"icon-times-circle"},null,-1),Jt=e("img",{src:F,alt:"times-circle",class:"icon-check-circle"},null,-1),Gt={key:0,class:"line mt-3"},Ht={class:"d-flex justify-content-between"},Qt={class:"title"},Wt=["onClick"],Xt={class:"d-flex ms-2 mt-2"},Yt={class:"name"},Zt={class:"name ms-5"},$t={class:"name ms-5"},es={class:"name ms-2 mt-1"},ts=e("div",{class:"line mt-4"},null,-1),ss={class:"group-footer"},as={class:"footer-left d-flex"},os=e("img",{src:I,alt:"times-circle",class:"icon-times-circle"},null,-1),is=e("img",{src:I,alt:"times-circle",class:"icon-times-circle"},null,-1),ls={class:"footer-right"},ds=e("img",{src:F,alt:"times-circle",class:"icon-check-circle"},null,-1),ns=["disabled"],rs=e("img",{src:F,alt:"times-circle",class:"icon-check-circle"},null,-1);function cs(o,s,n,m,t,l){const _=b("cpn-checkbox"),i=b("cpn-select"),p=b("cpn-datepicker"),q=b("cpn-time"),v=b("cpn-input"),y=b("cpn-textArea"),V=b("cpn-input-tags"),C=b("cpn-autoComplete"),L=b("Form"),A=b("cpn-modal-alert"),x=b("cpn-loading");return g(),f("div",N,[e("div",z,[e("div",B,[e("div",O,[e("div",K,[J,e("div",G,k(t.edit?"แก้ไขหนังสือรับเข้า":"สร้างหนังสือรับเข้า"),1)])]),H,u(L,{onSubmit:l.on_submit,onInvalidSubmit:o.onInvalidSubmit},{default:D(()=>{var d;return[e("div",Q,[e("div",W,[u(_,{modelValue:t.data.original_flag,"onUpdate:modelValue":s[0]||(s[0]=a=>t.data.original_flag=a),name:"original_flag",label:"หนังสือต้นเรื่อง"},null,8,["modelValue"])]),e("div",X,[e("div",Y,[Z,u(i,{modelValue:t.data.receive_regis_id,"onUpdate:modelValue":s[1]||(s[1]=a=>t.data.receive_regis_id=a),name:"receive_regis_id",rules:"required",optionSelect:t.optionSelect.receive_regis_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",$,[e("div",ee,[te,u(p,{modelValue:t.data.receive_date,"onUpdate:modelValue":s[2]||(s[2]=a=>t.data.receive_date=a),name:"receive_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",se,[ae,u(q,{modelValue:t.data.receive_time,"onUpdate:modelValue":s[3]||(s[3]=a=>t.data.receive_time=a),name:"receive_time",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),e("div",oe,[e("div",ie,[le,u(i,{modelValue:t.data.book_type_id,"onUpdate:modelValue":s[4]||(s[4]=a=>t.data.book_type_id=a),name:"book_type_id",rules:"required",optionSelect:t.optionSelect.book_type_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",de,[e("div",ne,[re,u(v,{modelValue:t.data.document_number,"onUpdate:modelValue":s[5]||(s[5]=a=>t.data.document_number=a),name:"document_number",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])]),e("div",ce,[_e,u(p,{modelValue:t.data.as_of_date,"onUpdate:modelValue":s[6]||(s[6]=a=>t.data.as_of_date=a),name:"as_of_date",rules:"required",disabled:t.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"])])])]),e("div",ue,[pe,e("button",{type:"button",class:"add-booking-receive",onClick:s[7]||(s[7]=a=>l.add_booking_refers())},me)]),(g(!0),f(S,null,U(t.data.booking_refers.filter(a=>a.flag!="delete"),(a,r)=>(g(),f("div",{class:"group-between",key:r},[e("div",ge,[u(v,{modelValue:a.receive_document_number,"onUpdate:modelValue":c=>a.receive_document_number=c,name:`codeRefers${r}`,type:"text",searchFlag:!0,onSearchClick:c=>l.booking_refers_click(a),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),e("div",fe,[u(v,{modelValue:a.desc,"onUpdate:modelValue":c=>a.desc=c,name:`nameRefers${r}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",be,[u(p,{modelValue:a.receive_date,"onUpdate:modelValue":c=>a.receive_date=c,name:`dateRefers${r}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",onClick:c=>l.delete_booking_refers(a,r),class:"button-delete ms-3"},ye,8,ve)])]))),128)),we,e("div",Ve,[e("div",Se,[Ue,u(y,{modelValue:t.data.subject,"onUpdate:modelValue":s[8]||(s[8]=a=>t.data.subject=a),name:"subject",rules:"required",disabled:t.edit,rows:"3"},null,8,["modelValue","disabled"])]),e("div",qe,[e("div",Ce,[Le,u(i,{modelValue:t.data.secret_id,"onUpdate:modelValue":s[9]||(s[9]=a=>t.data.secret_id=a),name:"secret_id",rules:"required",optionSelect:t.optionSelect.secret_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])]),e("div",Ae,[xe,u(i,{modelValue:t.data.speed_id,"onUpdate:modelValue":s[10]||(s[10]=a=>t.data.speed_id=a),name:"speed_id",rules:"required",optionSelect:t.optionSelect.speed_id,placeholder:"กรุณาระบุ",disabled:t.edit},null,8,["modelValue","optionSelect","disabled"])])])]),e("div",Me,[Te,u(y,{modelValue:t.data.send_to,"onUpdate:modelValue":s[11]||(s[11]=a=>t.data.send_to=a),name:"send_to",rules:"required",rows:"1",disabled:t.edit},null,8,["modelValue","disabled"])]),e("div",Ie,[Fe,u(y,{modelValue:t.data.book_desc,"onUpdate:modelValue":s[12]||(s[12]=a=>t.data.book_desc=a),name:"book_desc",rows:"1"},null,8,["modelValue"])]),e("div",Ee,[je,u(V,{modelValue:t.data.tag,"onUpdate:modelValue":s[13]||(s[13]=a=>t.data.tag=a),name:"tag"},null,8,["modelValue"])])]),Re,(g(!0),f(S,null,U(t.data.contracts,(a,r)=>(g(),f("div",{class:"group-detail",key:r},[e("div",De,[e("div",Pe,[Ne,u(C,{modelValue:a.department_id,"onUpdate:modelValue":c=>a.department_id=c,name:`${r}department_id`,rules:"required",disabled:t.edit,onKeyup:s[14]||(s[14]=c=>l.keyup_department(c)),optionSelect:t.optionSelect.department_id},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])]),e("div",ze,[Be,u(i,{modelValue:a.receive_type,"onUpdate:modelValue":c=>a.receive_type=c,name:`${r}receive_type`,rules:"required",disabled:t.edit,optionSelect:t.optionSelect.receive_type},null,8,["modelValue","onUpdate:modelValue","name","disabled","optionSelect"])])]),a.department_id==1860?(g(),f("div",Oe,[e("div",Ke,[Je,u(v,{modelValue:a.department_other,"onUpdate:modelValue":c=>a.department_other=c,name:`${r}department_other`,rules:a.department_id==1860?"required":"",disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","rules","disabled"])]),Ge])):T("",!0),e("div",He,[e("div",Qe,[We,u(v,{modelValue:a.contract_name,"onUpdate:modelValue":c=>a.contract_name=c,name:`${r}contract_name`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),e("div",Xe,[e("div",Ye,[Ze,u(v,{modelValue:a.contract_phone,"onUpdate:modelValue":c=>a.contract_phone=c,isNumber:!0,maxlength:"10",name:`${r}contract_phone`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])]),e("div",$e,[et,u(v,{modelValue:a.contract_mail,"onUpdate:modelValue":c=>a.contract_mail=c,rules:"email",name:`${r}contract_mail`,disabled:t.edit},null,8,["modelValue","onUpdate:modelValue","name","disabled"])])])])]))),128)),tt,e("div",st,[e("div",at,[e("div",ot,[it,(g(!0),f(S,null,U(t.data.main_docs.filter(a=>a.flag!="delete"),(a,r)=>(g(),f("div",{class:"d-flex mb-3",key:r},[e("div",lt,[e("button",{type:"button",class:w([t.edit?"none-pointer":"","button-file"]),onClick:c=>t.edit?"":l.upload_file(`main_docs${r}`)},[e("span",{class:w(a.filename?"":"no-data")},k(a.filename?a.filename:"หนังสือต้นเรื่อง"),3)],10,dt),e("div",{class:w(t.edit?"text disabled":"text pointer"),onClick:c=>t.edit?"":l.upload_file(`main_docs${r}`)},"แนบเอกสาร",10,nt),e("input",{type:"file",onChange:c=>l.file_set_change(`main_docs${r}`,r,"main_docs"),name:`main_docs${r}`,style:{display:"none"},accept:"application/pdf"},null,40,rt)]),e("button",{type:"button",onClick:c=>l.download_file(a),class:"button-eye"},ut,8,ct),e("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:c=>t.data.main_docs.length>1?t.data.main_docs.splice(r,1):a.filename=""},mt,8,pt)]))),128))]),e("div",gt,[e("div",ft,[bt,e("button",{type:"button",class:"add-booking-receive",disabled:t.edit,onClick:s[15]||(s[15]=a=>l.add_attachments())},yt,8,vt)]),(g(!0),f(S,null,U(t.data.attachments.filter(a=>a.flag!="delete"),(a,r)=>(g(),f("div",{class:"d-flex mb-3",key:r},[e("div",wt,[e("button",{type:"button",class:w([t.edit?"none-pointer":"","button-file"]),onClick:c=>t.edit?"":l.upload_file(`attachments${r}`)},[e("span",{class:w(a.filename?"":"no-data")},k(a.filename?a.filename:"สิ่งที่ส่งมาด้วย"),3)],10,Vt),e("div",{class:w(t.edit?"text disabled":"text pointer"),onClick:c=>t.edit?"":l.upload_file(`attachments${r}`)},"แนบเอกสาร",10,St),e("input",{type:"file",onChange:c=>l.file_set_change(`attachments${r}`,r,"attachments"),name:`attachments${r}`,style:{display:"none"}},null,40,Ut)]),e("button",{type:"button",onClick:c=>l.download_file(a),class:"button-eye"},Lt,8,qt),e("button",{type:"button",class:"del-department-3",disabled:t.edit,onClick:c=>l.delete_attachments(a,r)},Mt,8,At)]))),128))])])]),Tt,e("div",It,[e("div",Ft,[Et,u(V,{modelValue:t.data.sendTo,"onUpdate:modelValue":s[16]||(s[16]=a=>t.data.sendTo=a),flagSearch:!0,optionSelect:t.optionSelect.sendTo,onKeyup:l.keyup_send_to,name:"sendTo"},null,8,["modelValue","optionSelect","onKeyup"])]),e("div",jt,[Rt,u(y,{modelValue:t.data.comment,"onUpdate:modelValue":s[17]||(s[17]=a=>t.data.comment=a),name:"comment",rows:"3"},null,8,["modelValue"])]),e("div",Dt,[e("div",Pt,[Nt,u(i,{modelValue:t.data.process_type_id,"onUpdate:modelValue":s[18]||(s[18]=a=>t.data.process_type_id=a),name:"process_type_id",optionSelect:t.optionSelect.process_type_id},null,8,["modelValue","optionSelect"])]),e("div",zt,[Bt,u(i,{modelValue:t.data.permission_id,"onUpdate:modelValue":s[19]||(s[19]=a=>t.data.permission_id=a),name:"permission_id",optionSelect:t.optionSelect.permission_id},null,8,["modelValue","optionSelect"])])]),e("div",Ot,[e("div",null,[e("button",{type:"button",class:"button button-danger",onClick:s[20]||(s[20]=a=>(t.data.sendTo=[],t.data.comment="",t.data.process_type_id="",t.data.permission_id=""))},[Kt,h(" ยกเลิก ")])]),e("div",null,[e("button",{type:"button",onClick:s[21]||(s[21]=a=>l.add_booking_follows()),class:"button button-success"},[Jt,h(" เพิ่มการส่งต่อ ")])])]),t.data.booking_follows.length>0?(g(),f("div",Gt)):T("",!0),(g(!0),f(S,null,U(t.data.booking_follows.filter(a=>a.flag!="delete"),(a,r)=>(g(),f("div",{class:"group-add",key:r},[e("div",Ht,[e("div",Qt,"#"+k(r+1),1),e("img",{onClick:c=>l.delete_booking_follows(a,r),src:M,alt:"",class:"image-trash pointer"},null,8,Wt)]),e("div",Xt,[e("div",Yt,"ส่งต่อ : "+k((a==null?void 0:a.department_name)||"-"),1),e("div",Zt,"รูปแบบการดำเนินการ : "+k((a==null?void 0:a.process_type_name)||"-"),1),e("div",$t,"การมองเห็น : "+k((a==null?void 0:a.permission_name)||"-"),1)]),e("div",es,"ความเห็น / คำสั่ง : "+k((a==null?void 0:a.comment)||"-"),1)]))),128))]),ts,e("div",ss,[e("div",as,[e("button",{type:"button",class:"button-danger",onClick:s[22]||(s[22]=a=>l.back())},[os,h(" ปิด ")]),o.$route.params.id?(g(),f("button",{key:0,type:"button",class:"button-danger ms-3",onClick:s[23]||(s[23]=a=>l.delete_click())},[is,h(" ลบ ")])):T("",!0)]),e("div",ls,[e("button",{type:"submit",class:"button-primary",onClick:s[24]||(s[24]=a=>t.flagSave=1)},[ds,h(" บันทึกแบบร่าง ")]),e("button",{type:"submit",class:"button-success",onClick:s[25]||(s[25]=a=>t.flagSave=2),disabled:((d=t.data.sendTo)==null?void 0:d.length)<1},[rs,h(" บันทึกและส่งต่อ ")],8,ns)])])]}),_:1},8,["onSubmit","onInvalidSubmit"])])]),u(A,{modalAlert:t.modalAlert},null,8,["modalAlert"]),u(x,{show:t.showLoading},null,8,["show"])])}const ms=R(P,[["render",cs]]);export{ms as default};
