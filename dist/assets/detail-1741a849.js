import{_ as $,r as y,o as h,c as g,a as e,t as f,b as d,d as z,w as q,v as A,F as V,h as F,j as u,n as U,i as B,g as M,k as w}from"./index-63fcc095.js";import{_ as I}from"./ballot-duotone-f2459825.js";import{_ as R}from"./plus-circle-duotone-64bd32fe.js";import{_ as N}from"./trash-alt-duotone-12d94c28.js";const E={name:"department-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},optionSelectDefault:{nameSignature:[{name:"select1",value:"1"},{name:"select2",value:"2"},{name:"select3",value:"3"}],department:[{name:"select1",value:"1"},{name:"select2",value:"2"},{name:"select3",value:"3"}],sendRegistration:[{name:"select1",value:"1"},{name:"select2",value:"2"},{name:"select3",value:"3"}],issuingNumbers:[{name:"เลขเดี่ยว",value:"เลขเดี่ยว"},{name:"หลายเลข",value:"หลายเลข"}],deliveryFormat:[{name:"ตอบรับ",value:"ตอบรับ"},{name:"แจ้งเพื่อทราบ",value:"แจ้งเพื่อทราบ"},{name:"ไม่ระบุ",value:"ไม่ระบุ"}]},showLoading:!1,edit:!1,flagSave:1,data:{myBook:"1",username:"",type:"",typeBook:"",secret:"12",level:"12",refers:[{code:"",name:"",date:""}],name:"",set:[],tag:[],attachment:[{name:"",file:[]}],sendTo:[],comments:"",model:"",see:""},optionSelect:{type:[{name:"บันทึกข้อความเสนอ นรม./รอง นรม.",value:"1"},{name:"หนังสือส่งออกภายนอก",value:"2"}],typeBook:[{name:"select1",value:"1"},{name:"select2",value:"2"},{name:"select3",value:"3"}],secret:[{name:"select1",value:"1"},{name:"select2",value:"2"},{name:"select3",value:"3"}],level:[{name:"select1",value:"1"},{name:"select2",value:"2"},{name:"select3",value:"3"}],model:[{name:"select1",value:"1"},{name:"select2",value:"2"},{name:"select3",value:"3"}],see:[{name:"select1",value:"1"},{name:"select2",value:"2"},{name:"select3",value:"3"}],sendTo:[{name:"select1",value:"1"},{name:"select2",value:"2"},{name:"select3",value:"3"}]},modalRegiter:{showModal:!1,set:[]}}},methods:{sendToClick(){this.axios.get("/v1/login")},searchClick(i){i.name="aaaa",i.date="10/11/2565"},downloadFile(i){this.axios({method:"get",url:i.link,baseURL:"",responseType:"blob"}).then(s=>{const p=new Blob([s.data],{type:"application/pdf"});window.open(URL.createObjectURL(p))})},changeNameSignature(i){this.data.set[i].department.filter(s=>{s.nameSignature=this.data.set[i].nameSignature})},changeSignature(i){this.data.set[i].department.filter(s=>{s.signature=this.data.set[i].signature})},uploadFile(i){document.querySelector(`[name="${i}"]`).click()},fileAttachmentChange(i,s){for(var p=0;p<document.querySelector(`[name="${i}"]`).files.length;p++){let _=document.querySelector(`[name="${i}"]`).files[p];if(_.type=="application/pdf"){let l={name:_.name,type:_.type=="application/pdf"?"pdf":"",link:URL.createObjectURL(_),size:(_.size/1024/1024).toFixed(2)+" MB",file:_};this.data.attachment[s]=l,document.querySelector(`[name="${i}"]`).value=null}}},fileSetChange(i,s,p){for(var _=0;_<document.querySelector(`[name="${i}"]`).files.length;_++){let l=document.querySelector(`[name="${i}"]`).files[_];if(l.type=="application/pdf"){let n={name:l.name,type:l.type=="application/pdf"?"pdf":"",link:URL.createObjectURL(l),size:(l.size/1024/1024).toFixed(2)+" MB",file:l};p=="fileOriginllBook"?(this.data.set[s].originllBookFile=n,this.data.set[s].department.filter(v=>{v.originllBookFile=n})):(this.data.set[s].duplicateCopyFile=n,this.data.set[s].department.filter(v=>{v.duplicateCopyFile=n})),document.querySelector(`[name="${i}"]`).value=null}}},fileDetailChange(i,s,p,_){for(var l=0;l<document.querySelector(`[name="${i}"]`).files.length;l++){let n=document.querySelector(`[name="${i}"]`).files[l];if(n.type=="application/pdf"){let v={name:n.name,type:n.type=="application/pdf"?"pdf":"",link:URL.createObjectURL(n),size:(n.size/1024/1024).toFixed(2)+" MB",file:n};_=="fileOriginllBook"?this.data.set[s].department[p].originllBookFile=v:this.data.set[s].department[p].duplicateCopyFile=v,document.querySelector(`[name="${i}"]`).value=null}}},addFileClick(){this.data.attachment.push({name:""})},addRefersClick(){this.axios.get("/master-data/book-refer"),this.data.refers.push({code:"",name:"",date:""})},addRegister(){this.modalRegiter.showModal=!0,this.modalRegiter.set=[{sendRegistration:"",date:this.assetsUtils.currentDate(),issuingNumbers:"เลขเดี่ยว",deliveryFormat:"ไม่ระบุ",department:[],optionSelect:{sendRegistration:this.optionSelectDefault.sendRegistration,issuingNumbers:this.optionSelectDefault.issuingNumbers,deliveryFormat:this.optionSelectDefault.deliveryFormat,department:this.optionSelectDefault.department}}]},addDepartmentClick(i){i.department.push({code:"",to:"",destinationAgency:"",originllBookFile:{name:"",file:[]},duplicateCopyFile:{name:"",file:[]},nameSignature:"",signature:!1,optionSelect:{nameSignature:[]}})},addRegisterModal(){this.modalRegiter.set.push({sendRegistration:"",date:this.assetsUtils.currentDate(),issuingNumbers:"เลขเดี่ยว",deliveryFormat:"ไม่ระบุ",department:[],optionSelect:{sendRegistration:this.optionSelectDefault.sendRegistration,issuingNumbers:this.optionSelectDefault.issuingNumbers,deliveryFormat:this.optionSelectDefault.deliveryFormat}})},back(){this.$router.push({name:"export-book"}).catch(()=>{})},cancelClick(){this.back(),this.data.code="",this.data.short_name="",this.data.name=""},onSubmit(){console.log("xx",this.flagSave);let i=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flagSave==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){i.flagSave==1?i.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกแบบร่างสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){i.back()}}:i.modalAlert={showModal:!0,type:"success",title:"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){i.back()}}}}},onSubmitModal(){this.modalRegiter.set.filter(i=>{let s={optionSelect:{nameSignature:this.optionSelectDefault.nameSignature},issuingNumbers:i.issuingNumbers,deliveryFormat:i.deliveryFormat,date:i.date,sendRegistration:i.sendRegistration,num:"1",nameSignature:"",signature:!1,originllBookFile:{name:"",file:[]},duplicateCopyFile:{name:"",file:[]},department:[]};i.department.length>0?i.department.filter(p=>{s.department.push({code:"2566/63",to:"",destinationAgency:p,originllBookFile:{name:"",file:[]},duplicateCopyFile:{name:"",file:[]},nameSignature:"",signature:!1,optionSelect:{nameSignature:this.optionSelectDefault.nameSignature}})}):s.department.push({code:"2566/63",to:"",destinationAgency:"",originllBookFile:{name:"",file:[]},duplicateCopyFile:{name:"",file:[]},nameSignature:"",signature:!1,optionSelect:{nameSignature:this.optionSelectDefault.nameSignature}}),this.data.set.push(s)}),this.modalRegiter.showModal=!1},apiDetail(){this.data.code="aaaaa",this.data.short_name="bbbbb",this.data.name="aaa@aa.aa",this.data.department="สำนักงานเลขาธิการ"},apiMaster(){this.showLoading=!0;const i=this.axios.get("/master-data/book-type"),s=this.axios.get("/master-data/speed"),p=this.axios.get("/master-data/secret"),_=this.axios.get("/master-data/process-type"),l=this.axios.get("/master-data/permission-type");this.axios.all([i,s,p,_,l]).then(this.axios.spread((...n)=>{this.showLoading=!1;const v=n[0],b=n[1],k=n[2],S=n[3],C=n[4];v.data.data.filter(c=>(c.value=c.id,c.name=c.desc,c)),this.optionSelect.typeBook=v.data.data,b.data.data.filter(c=>(c.value=c.id,c.name=c.desc,c)),this.optionSelect.level=b.data.data,k.data.data.filter(c=>(c.value=c.id,c.name=c.desc,c)),this.optionSelect.secret=k.data.data,S.data.data.filter(c=>(c.value=c.id,c.name=c.desc,c)),this.optionSelect.model=S.data.data,C.data.data.filter(c=>(c.value=c.id,c.name=c.desc,c)),this.optionSelect.see=C.data.data,this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}},mounted(){this.apiMaster()},watch:{"modalRegiter.showModal"(){document.body.style.overflow=this.modalRegiter.showModal?"hidden":""}}},P={class:"export-book-detail"},G={class:"group-overflow"},H={class:"detail"},J={class:"group-head"},K={class:"group-first"},Q=e("img",{src:I,alt:"",class:"icon-size"},null,-1),W={class:"name"},X=e("div",{class:"line"},null,-1),Y={class:"group-detail"},Z={class:"group-input"},x=e("div",{class:"name"},"เจ้าของหนังสือ",-1),ee={class:"d-flex"},te={class:"group-input mb-0"},le=e("div",{class:"name"},[u("ชื่อ - นามสกุล "),e("span",{class:"required"},"*")],-1),se={class:"group-between"},oe={class:"group-input left"},ae=e("div",{class:"name"},[u("ประเภท "),e("span",{class:"required"},"*")],-1),ne={class:"group-input"},ie=e("div",{class:"name"},[u("ชนิดของหนังสือ "),e("span",{class:"required"},"*")],-1),de={class:"group-between"},ce={class:"group-input left"},ue=e("div",{class:"name"},[u("ชั้นความลับ "),e("span",{class:"required"},"*")],-1),re={class:"group-input"},me=e("div",{class:"name"},[u("ความเร่งด่วน "),e("span",{class:"required"},"*")],-1),pe={class:"group-input d-flex align-items-center"},_e=e("div",{class:"name"},"อ้างอิงถึง",-1),he=e("div",{class:"group-image"},[e("img",{src:R,alt:"",class:"icon-plus"}),u(" เพิ่มเอกสารอ้างอิง ")],-1),ge=[he],ve={class:"group-input left"},fe={class:"group-input left"},ye={class:"group-input d-flex"},be=["onClick"],ke=e("img",{src:N,alt:"",class:"image-trash pointer"},null,-1),Se=[ke],Ce={class:"group-input"},Ve=e("div",{class:"name"},"ชื่อเรื่อง",-1),Fe=e("div",{class:"line"},null,-1),Ue={class:"d-flex justify-content-end"},Be=["disabled"],Re=e("img",{src:R,alt:"",class:"icon-plus"},null,-1),we={class:"d-flex"},De={class:"col-start"},qe={class:"col-center"},Ae={class:"row"},Me={class:"col-lg-auto col-md-auto mb-3"},Ne={class:"span"},Oe={class:"group-date col-lg-auto col-md-auto mb-3"},Le=e("div",{class:"name"},"ลงวันที่ :",-1),ze={class:"col-end"},Te={class:"d-flex justify-content-end"},je={class:"group-num"},$e=e("div",{class:"name"},"จำนวน :",-1),Ie=["onClick"],Ee=e("div",{class:"group-image"},[e("img",{src:R,alt:"",class:"image-plus pointer"}),u(" เพิ่มหน่วยงาน ")],-1),Pe=[Ee],Ge=["onClick"],He={class:"group-image"},Je=e("i",{class:"bi bi-trash-fill image-trash pointer"},null,-1),Ke={class:"group-input"},Qe=e("div",{class:"name"},"ชื่อผู้เซ็น",-1),We={class:"d-flex"},Xe={class:"group-all-file"},Ye=e("div",{class:"name"}," เอกสารใช้ร่วมกัน ",-1),Ze={class:"group-input-file"},xe=["onClick"],et=["onClick"],tt=["onChange","name"],lt=["onClick"],st=e("i",{class:"bi bi-eye icon-eye"},null,-1),ot=[st],at={class:"group-input-file"},nt=["onClick"],it=["onClick"],dt=["onChange","name"],ct=["onClick"],ut=e("i",{class:"bi bi-eye icon-eye"},null,-1),rt=[ut],mt={class:"group-between"},pt={class:"group-input left w-200"},_t=e("div",{class:"name"},"เลข สลค.",-1),ht={class:"group-input"},gt=e("div",{class:"name"},"เรียน",-1),vt={class:"group-input"},ft=e("div",{class:"name"},"หน่วยงานปลายทาง",-1),yt={class:"group-between"},bt={class:"w-100 overflow-hidden"},kt={class:"d-flex"},St={class:"group-input-file"},Ct=["onClick"],Vt=["onClick"],Ft=["onChange","name"],Ut=["onClick"],Bt=e("i",{class:"bi bi-eye icon-eye"},null,-1),Rt=[Bt],wt={class:"d-flex mt-3"},Dt={class:"group-input-file"},qt=["onClick"],At=["onClick"],Mt=["onChange","name"],Nt=["onClick"],Ot=e("i",{class:"bi bi-eye icon-eye"},null,-1),Lt=[Ot],zt={class:"w-100 ms-4 m-auto"},Tt={class:"group-input"},jt=e("div",{class:"name"},"ชื่อผู้เซ็น",-1),$t={class:"d-flex"},It={class:"text-end"},Et=["onClick"],Pt=e("i",{class:"bi bi-trash-fill image-trash pointer"},null,-1),Gt=[Pt],Ht={key:0,class:"line"},Jt={key:1,class:"tag"},Kt={class:"group-input"},Qt=e("div",{class:"name"},'Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")',-1),Wt={class:"group-input d-flex align-items-center mt-4"},Xt=e("div",{class:"name"},"สิ่งที่แนบมาด้วย",-1),Yt=e("div",{class:"group-image"},[e("img",{src:R,alt:"",class:"icon-plus"}),u(" เพิ่มไฟล์ ")],-1),Zt=[Yt],xt={class:"group-input-file"},el=["onClick"],tl=["onClick"],ll=["onChange","name"],sl=["onClick"],ol=e("i",{class:"bi bi-eye icon-eye"},null,-1),al=[ol],nl=["onClick"],il=e("img",{src:N,alt:"",class:"image-trash pointer"},null,-1),dl=[il],cl={key:2,class:"line mt-4"},ul={key:3,class:"send-to"},rl={class:"group-input"},ml=e("div",{class:"name"},[u("ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) "),e("span",{class:"required"},"*กรุณาใส่รายชื่อที่ต้องการส่งต่อ")],-1),pl={class:"group-input"},_l=e("div",{class:"name"},"ความเห็น / คำสั่ง",-1),hl={class:"group-between"},gl={class:"group-input"},vl=e("div",{class:"name"},"รูปแบบการดำเนินการ",-1),fl={class:"group-input"},yl=e("div",{class:"name"},"การมองเห็น",-1),bl={class:"d-flex align-items-center justify-content-between"},kl=e("img",{src:M,alt:"times-circle",class:"icon-times-circle"},null,-1),Sl=e("img",{src:w,alt:"times-circle",class:"icon-check-circle"},null,-1),Cl=e("div",{class:"line mt-4"},null,-1),Vl={class:"group-footer"},Fl={class:"footer-left"},Ul=e("img",{src:M,alt:"times-circle",class:"icon-times-circle"},null,-1),Bl={class:"footer-right"},Rl=e("img",{src:w,alt:"times-circle",class:"icon-check-circle"},null,-1),wl=["disabled"],Dl=e("img",{src:w,alt:"times-circle",class:"icon-check-circle"},null,-1),ql={class:"modal-register"},Al={class:"modal-class"},Ml={class:"modal-center"},Nl={class:"modal-size",ref:"modalRegiterref"},Ol={class:"modal-title"},Ll=e("div",{class:"title-size"},"เพิ่มทะเบียน",-1),zl=e("div",{class:"line"},null,-1),Tl={class:"modal-detail"},jl={class:"d-flex justify-content-between"},$l={class:"set"},Il=["onClick"],El=e("img",{src:N,alt:"",class:"image-trash pointer"},null,-1),Pl=[El],Gl={class:"detail-sub"},Hl={class:"group-between"},Jl={class:"group-input"},Kl=e("div",{class:"name"},[u("ทะเบียนส่ง "),e("span",{class:"required"},"*")],-1),Ql={class:"group-input right-width"},Wl=e("div",{class:"name"},[u("ลงวันที่ "),e("span",{class:"required"},"*")],-1),Xl={class:"group-input right-width"},Yl=e("div",{class:"name"},[u("การออกเลข "),e("span",{class:"required"},"*")],-1),Zl={class:"group-input right-width"},xl=e("div",{class:"name"},[u("รูปแบบการส่ง "),e("span",{class:"required"},"*")],-1),es={class:"group-input"},ts=e("div",{class:"name"},"หน่วยงานปลายทาง",-1),ls={class:"d-flex justify-content-center"},ss=e("img",{src:R,alt:"",class:"icon-plus"},null,-1),os=e("div",{class:"line"},null,-1),as={class:"group-footer"},ns=e("div",{class:"group-name"},[e("img",{src:M,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ยกเลิก")],-1),is=[ns],ds=e("button",{type:"submit",class:"btn button-success"},[e("div",{class:"group-name"},[e("img",{src:w,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ตกลง")])],-1);function cs(i,s,p,_,l,n){const v=y("cpn-radio"),b=y("cpn-input"),k=y("cpn-select"),S=y("cpn-autoComplete"),C=y("cpn-datepicker"),c=y("cpn-textArea"),O=y("cpn-checkbox"),D=y("cpn-input-tags"),L=y("Form"),T=y("cpn-modal-alert"),j=y("cpn-loading");return h(),g("div",P,[e("div",G,[e("div",H,[e("div",J,[e("div",K,[Q,e("div",W,f(l.edit?"แก้ไขหนังสือส่งออก":"สร้างหนังสือส่งออก"),1)])]),X,d(L,{onSubmit:n.onSubmit,onInvalidSubmit:i.onInvalidSubmit},{default:z(()=>[e("div",Y,[e("div",Z,[x,e("div",ee,[d(v,{modelValue:l.data.myBook,"onUpdate:modelValue":s[0]||(s[0]=t=>l.data.myBook=t),name:"my1",class:"",style:{"min-width":"120px"},value:"1",label:"สร้างเอง",onChange:s[1]||(s[1]=t=>l.data.username="")},null,8,["modelValue"]),d(v,{modelValue:l.data.myBook,"onUpdate:modelValue":s[2]||(s[2]=t=>l.data.myBook=t),name:"my2",class:"ms-5 me-5",style:{"min-width":"120px"},value:"2",label:"สร้างแทน",onChange:s[3]||(s[3]=t=>l.data.username="")},null,8,["modelValue"]),q(e("div",te,[le,d(b,{modelValue:l.data.username,"onUpdate:modelValue":s[4]||(s[4]=t=>l.data.username=t),name:"username",rules:l.data.myBook==2?"required":"",placeholder:"กรุณาระบุ"},null,8,["modelValue","rules"])],512),[[A,l.data.myBook==2]])])]),e("div",se,[e("div",oe,[ae,d(k,{modelValue:l.data.type,"onUpdate:modelValue":s[5]||(s[5]=t=>l.data.type=t),name:"type",rules:"required",optionSelect:l.optionSelect.type,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",ne,[ie,d(S,{modelValue:l.data.typeBook,"onUpdate:modelValue":s[6]||(s[6]=t=>l.data.typeBook=t),name:"typeBook",rules:"required",optionSelect:l.optionSelect.typeBook,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),e("div",de,[e("div",ce,[ue,d(k,{modelValue:l.data.secret,"onUpdate:modelValue":s[7]||(s[7]=t=>l.data.secret=t),name:"secret",rules:"required",optionSelect:l.optionSelect.secret,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",re,[me,d(k,{modelValue:l.data.level,"onUpdate:modelValue":s[8]||(s[8]=t=>l.data.level=t),name:"level",rules:"required",optionSelect:l.optionSelect.level,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),e("div",pe,[_e,e("button",{type:"button",class:"add-export-book",onClick:s[9]||(s[9]=t=>n.addRefersClick())},ge)]),(h(!0),g(V,null,F(l.data.refers,(t,a)=>(h(),g("div",{class:"group-between",key:a},[e("div",ve,[d(b,{modelValue:t.code,"onUpdate:modelValue":o=>t.code=o,name:`codeRefers${a}`,type:"search",searchFlag:!0,onSearchClick:o=>n.searchClick(t),placeholder:"เลขที่หนังสืออ้างอิง"},null,8,["modelValue","onUpdate:modelValue","name","onSearchClick"])]),e("div",fe,[d(b,{modelValue:t.name,"onUpdate:modelValue":o=>t.name=o,name:`nameRefers${a}`,disabled:!0,placeholder:"ชื่อเรื่อง"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",ye,[d(C,{modelValue:t.date,"onUpdate:modelValue":o=>t.date=o,name:`dateRefers${a}`,disabled:!0,placeholder:"วันที่รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",onClick:o=>l.data.refers.length>1?l.data.refers.splice(a,1):"",class:"button-delete ms-3"},Se,8,be)])]))),128)),e("div",Ce,[Ve,d(c,{modelValue:l.data.name,"onUpdate:modelValue":s[10]||(s[10]=t=>l.data.name=t),name:"name",rows:"1"},null,8,["modelValue"])])]),Fe,e("div",Ue,[e("button",{type:"button",class:"add-register",disabled:!l.data.type||!l.data.typeBook||!l.data.secret||!l.data.level,onClick:s[11]||(s[11]=t=>n.addRegister())},[Re,u(" เพิ่มทะเบียน ")],8,Be)]),(h(!0),g(V,null,F(l.data.set,(t,a)=>(h(),g("div",{class:"group-detail-2",key:a},[e("div",we,[e("div",De,"ชุดที่ #"+f(a+1),1),e("div",qe,[e("div",Ae,[e("div",Me,[e("span",Ne,"การออกเลข : "+f(t.issuingNumbers),1),e("span",null,"รูปแบบการส่ง : "+f(t.deliveryFormat),1)]),e("div",Oe,[Le,d(C,{modelValue:t.date,"onUpdate:modelValue":o=>t.date=o,name:`dateAdd${a}`,class:"size-date"},null,8,["modelValue","onUpdate:modelValue","name"])])]),e("div",null,"ทะเบียนส่ง : "+f(t.sendRegistration),1)]),e("div",ze,[e("div",Te,[e("div",je,[$e,d(b,{modelValue:t.num,"onUpdate:modelValue":o=>t.num=o,name:`num${a}`,class:"size-input"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("button",{type:"button",class:"add-department",onClick:o=>n.addDepartmentClick(t)},Pe,8,Ie),e("button",{type:"button",class:"del-department",onClick:o=>l.data.set.splice(a,1)},[e("div",He,[Je,u(" ลบชุดที่ #"+f(a+1),1)])],8,Ge)]),e("div",Ke,[Qe,e("div",We,[d(S,{modelValue:t.nameSignature,"onUpdate:modelValue":o=>t.nameSignature=o,name:`nameSignature${a}`,optionSelect:t.optionSelect.nameSignature,onChange:o=>n.changeNameSignature(a)},null,8,["modelValue","onUpdate:modelValue","name","optionSelect","onChange"]),d(O,{modelValue:t.signature,"onUpdate:modelValue":o=>t.signature=o,name:`signature${a}`,class:"cpn-select",label:"ลายเซ็น",onChange:o=>n.changeSignature(a)},null,8,["modelValue","onUpdate:modelValue","name","onChange"])])])])]),e("div",Xe,[Ye,e("div",Ze,[e("button",{type:"button",class:"button-file",onClick:o=>n.uploadFile(`fileOriginllBook${a}`)},[e("span",{class:U(t.originllBookFile.name?"":"no-data")},f(t.originllBookFile.name?t.originllBookFile.name:"หนังสือต้นเรื่อง"),3)],8,xe),e("div",{class:"text pointer",onClick:o=>n.uploadFile(`fileOriginllBook${a}`)},"แนบเอกสาร",8,et),e("input",{type:"file",onChange:o=>n.fileSetChange(`fileOriginllBook${a}`,a,"fileOriginllBook"),name:`fileOriginllBook${a}`,style:{display:"none"},accept:"application/pdf"},null,40,tt)]),e("button",{type:"button",onClick:o=>n.downloadFile(t.originllBookFile),class:"button-eye"},ot,8,lt),e("div",at,[e("button",{type:"button",class:"button-file",onClick:o=>n.uploadFile(`fileDuplicateCopy${a}`)},[e("span",{class:U(t.duplicateCopyFile.name?"":"no-data")},f(t.duplicateCopyFile.name?t.duplicateCopyFile.name:"สำเนาคู่ฉลับ"),3)],8,nt),e("div",{class:"text pointer",onClick:o=>n.uploadFile(`fileDuplicateCopy${a}`)},"แนบเอกสาร",8,it),e("input",{type:"file",onChange:o=>n.fileSetChange(`fileDuplicateCopy${a}`,a,"fileDuplicateCopy"),name:`fileDuplicateCopy${a}`,style:{display:"none"},accept:"application/pdf"},null,40,dt)]),e("button",{type:"button",onClick:o=>n.downloadFile(t.duplicateCopyFile),class:"button-eye"},rt,8,ct)]),(h(!0),g(V,null,F(t.department,(o,m)=>(h(),g("div",{class:"detail-sub",key:m},[e("div",mt,[e("div",pt,[_t,d(b,{modelValue:o.code,"onUpdate:modelValue":r=>o.code=r,name:`code${a}${m}`,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",ht,[gt,d(b,{modelValue:o.to,"onUpdate:modelValue":r=>o.to=r,name:`to${a}${m}`},null,8,["modelValue","onUpdate:modelValue","name"])])]),e("div",vt,[ft,d(b,{modelValue:o.destinationAgency,"onUpdate:modelValue":r=>o.destinationAgency=r,name:`destinationAgency${a}${m}`},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",yt,[e("div",bt,[e("div",kt,[e("div",St,[e("button",{type:"button",class:"button-file",onClick:r=>n.uploadFile(`fileOriginllBook${a}${m}`)},[e("span",{class:U(o.originllBookFile.name?"":"no-data")},f(o.originllBookFile.name?o.originllBookFile.name:"หนังสือต้นเรื่อง"),3)],8,Ct),e("div",{class:"text pointer",onClick:r=>n.uploadFile(`fileOriginllBook${a}${m}`)},"แนบเอกสาร",8,Vt),e("input",{type:"file",onChange:r=>n.fileDetailChange(`fileOriginllBook${a}${m}`,a,m,"fileOriginllBook"),name:`fileOriginllBook${a}${m}`,style:{display:"none"},accept:"application/pdf"},null,40,Ft)]),e("button",{type:"button",onClick:r=>n.downloadFile(o.originllBookFile),class:"button-eye"},Rt,8,Ut)]),e("div",wt,[e("div",Dt,[e("button",{type:"button",class:"button-file",onClick:r=>n.uploadFile(`fileDuplicateCopy${a}${m}`)},[e("span",{class:U(o.duplicateCopyFile.name?"":"no-data")},f(o.duplicateCopyFile.name?o.duplicateCopyFile.name:"สำเนาคู่ฉลับ"),3)],8,qt),e("div",{class:"text pointer",onClick:r=>n.uploadFile(`fileDuplicateCopy${a}${m}`)},"แนบเอกสาร",8,At),e("input",{type:"file",onChange:r=>n.fileDetailChange(`fileDuplicateCopy${a}${m}`,a,m,"fileDuplicateCopy"),name:`fileDuplicateCopy${a}${m}`,style:{display:"none"},accept:"application/pdf"},null,40,Mt)]),e("button",{type:"button",onClick:r=>n.downloadFile(o.duplicateCopyFile),class:"button-eye"},Lt,8,Nt)])]),e("div",zt,[e("div",Tt,[jt,e("div",$t,[d(S,{modelValue:o.nameSignature,"onUpdate:modelValue":r=>o.nameSignature=r,name:`nameSignature${a}${m}`,optionSelect:o.optionSelect.nameSignature},null,8,["modelValue","onUpdate:modelValue","name","optionSelect"]),d(O,{modelValue:o.signature,"onUpdate:modelValue":r=>o.signature=r,name:`signature${a}${m}`,class:"cpn-select",label:"ลายเซ็น"},null,8,["modelValue","onUpdate:modelValue","name"])])])])]),e("div",It,[e("button",{type:"button",class:"del-department-2",onClick:r=>t.department.splice(m,1)},Gt,8,Et)])]))),128))]))),128)),l.data.set.length>0?(h(),g("div",Ht)):B("",!0),l.data.set.length>0?(h(),g("div",Jt,[e("div",Kt,[Qt,d(D,{modelValue:l.data.tag,"onUpdate:modelValue":s[12]||(s[12]=t=>l.data.tag=t),name:"tag"},null,8,["modelValue"])]),e("div",Wt,[Xt,e("button",{type:"button",class:"add-export-book",onClick:s[13]||(s[13]=t=>n.addFileClick())},Zt)]),l.data.set.length>0?(h(!0),g(V,{key:0},F(l.data.attachment,(t,a)=>(h(),g("div",{class:"d-flex mb-3 group-input-file-all",key:a},[e("div",xt,[e("button",{type:"button",class:"button-file",onClick:o=>n.uploadFile(`fileAttachment${a}`)},[e("span",{class:U(t.name?"":"no-data")},f(t.name?t.name:"หนังสือต้นเรื่อง"),3)],8,el),e("div",{class:"text pointer",onClick:o=>n.uploadFile(`fileAttachment${a}`)},"แนบเอกสาร",8,tl),e("input",{type:"file",onChange:o=>n.fileAttachmentChange(`fileAttachment${a}`,a),name:`fileAttachment${a}`,style:{display:"none"},accept:"application/pdf"},null,40,ll)]),e("button",{type:"button",onClick:o=>n.downloadFile(t),class:"button-eye"},al,8,sl),e("button",{type:"button",class:"del-department-3",onClick:o=>l.data.attachment.length>1?l.data.attachment.splice(a,1):""},dl,8,nl)]))),128)):B("",!0)])):B("",!0),l.data.set.length>0?(h(),g("div",cl)):B("",!0),l.data.set.length>0?(h(),g("div",ul,[e("div",rl,[ml,d(D,{modelValue:l.data.sendTo,"onUpdate:modelValue":s[14]||(s[14]=t=>l.data.sendTo=t),flagSearch:!0,optionSelect:l.optionSelect.sendTo,name:"sendTo"},null,8,["modelValue","optionSelect"])]),e("div",pl,[_l,d(c,{modelValue:l.data.comments,"onUpdate:modelValue":s[15]||(s[15]=t=>l.data.comments=t),name:"comments",rows:"3"},null,8,["modelValue"])]),e("div",hl,[e("div",gl,[vl,d(k,{modelValue:l.data.model,"onUpdate:modelValue":s[16]||(s[16]=t=>l.data.model=t),name:"model",optionSelect:l.optionSelect.model},null,8,["modelValue","optionSelect"])]),e("div",fl,[yl,d(k,{modelValue:l.data.see,"onUpdate:modelValue":s[17]||(s[17]=t=>l.data.see=t),name:"see",optionSelect:l.optionSelect.see},null,8,["modelValue","optionSelect"])])]),e("div",bl,[e("div",null,[e("button",{type:"button",class:"button button-danger",onClick:s[18]||(s[18]=t=>n.back())},[kl,u(" ยกเลิก ")])]),e("div",null,[e("button",{type:"button",onClick:s[19]||(s[19]=t=>n.sendToClick()),class:"button button-success"},[Sl,u(" เพิ่มการส่งต่อ ")])])])])):B("",!0),Cl,e("div",Vl,[e("div",Fl,[e("button",{type:"button",class:"button-danger",onClick:s[20]||(s[20]=t=>n.back())},[Ul,u(" ปิด ")])]),q(e("div",Bl,[e("button",{type:"submit",class:"button-primary",onClick:s[21]||(s[21]=t=>l.flagSave=1)},[Rl,u(" บันทึกแบบร่าง ")]),e("button",{type:"submit",class:"button-success",onClick:s[22]||(s[22]=t=>l.flagSave=2),disabled:l.data.sendTo.length<1},[Dl,u(" บันทึกและส่งต่อ ")],8,wl)],512),[[A,l.data.set.length>0]])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),q(e("div",ql,[e("div",Al,[e("div",Ml,[e("div",Nl,[d(L,{onSubmit:n.onSubmitModal,onInvalidSubmit:i.onInvalidSubmit},{default:z(()=>[e("div",Ol,[Ll,e("i",{class:"bi bi-x-lg icon-close",onClick:s[23]||(s[23]=t=>l.modalRegiter.showModal=!1)})]),zl,e("div",Tl,[(h(!0),g(V,null,F(l.modalRegiter.set,(t,a)=>(h(),g("div",{class:"message",key:a},[e("div",jl,[e("div",$l,"ชุดที่ #"+f(a+1+l.data.set.length),1),e("button",{type:"button",onClick:o=>l.modalRegiter.set.length>1?l.modalRegiter.set.splice(a,1):"",class:"button-delete ms-3"},Pl,8,Il)]),e("div",Gl,[e("div",Hl,[e("div",Jl,[Kl,d(S,{modelValue:t.sendRegistration,"onUpdate:modelValue":o=>t.sendRegistration=o,rules:"required",name:`addsendRegistration${a}`,optionSelect:t.optionSelect.sendRegistration},null,8,["modelValue","onUpdate:modelValue","name","optionSelect"])]),e("div",Ql,[Wl,d(C,{modelValue:t.date,"onUpdate:modelValue":o=>t.date=o,rules:"required",name:`adddate${a}`},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Xl,[Yl,d(k,{modelValue:t.issuingNumbers,"onUpdate:modelValue":o=>t.issuingNumbers=o,rules:"required",optionSelect:t.optionSelect.issuingNumbers,name:`addissuingNumbers${a}`},null,8,["modelValue","onUpdate:modelValue","optionSelect","name"])]),e("div",Zl,[xl,d(k,{modelValue:t.deliveryFormat,"onUpdate:modelValue":o=>t.deliveryFormat=o,rules:"required",optionSelect:t.optionSelect.deliveryFormat,name:`adddeliveryFormat${a}`},null,8,["modelValue","onUpdate:modelValue","optionSelect","name"])])]),e("div",es,[ts,d(D,{modelValue:t.department,"onUpdate:modelValue":o=>t.department=o,flagSearch:!0,optionSelect:t.optionSelect.department,name:`adddepartment${a}`},null,8,["modelValue","onUpdate:modelValue","optionSelect","name"])])])]))),128)),e("div",ls,[e("button",{type:"button",class:"add-register",onClick:s[24]||(s[24]=t=>n.addRegisterModal())},[ss,u(" เพิ่มทะเบียน ")])])]),os,e("div",as,[e("button",{type:"button",onClick:s[25]||(s[25]=t=>l.modalRegiter.showModal=!1),class:"btn button-danger"},is),ds])]),_:1},8,["onSubmit","onInvalidSubmit"])],512)])])],512),[[A,l.modalRegiter.showModal]]),d(T,{modalAlert:l.modalAlert},null,8,["modalAlert"]),d(j,{show:l.showLoading},null,8,["show"])])}const _s=$(E,[["render",cs]]);export{_s as default};
