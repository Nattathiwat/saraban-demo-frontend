import{_ as A,r as b,o as u,c as p,a as e,j as r,b as i,d as T,w as h,v as g,i as w,t as _,F as L,h as F,g as x,k as f}from"./index-dd07de24.js";import{_ as j,a as D}from"./line-up-c54e1bbb.js";const C="/assets/arrow-circle-leftffffff-ecc4a1ca.svg";const I={name:"automail-sendmail-detail",data(){return{flag:1,step:1,modalAlert:{showModal:!1,title:"",message:""},modal:{showModal:!1,book_recipient:"",optionSelect:{book_recipient:[]}},modalTemplate:{showModal:!1,message_format:"",optionSelect:{message_format:[]}},showLoading:!1,edit:!1,data:{bookout:{book_type_name:"",book_regis_name:"",secret_name:"",speed_name:"",book_out_document_number:"",as_of_date:"",from:"",to:"",subject:""},greeting:"",receive_name:"",message:"",detail:"",signature:"",department_name:"",contact_name:"",contact:"",reply_message:"",disclaimer:"",send_type_id:"",link:"",main_file_name:"",copy_file_name:"",attachments:[],subject:"",to:"",cc:"",bcc:"",fileType:[],logoImage:new URL("/assets/department-94349e4f.png",self.location).href},no_main_file_name:"ไม่มีหนังสือต้นเรื่อง",no_copy_file_name:"ไม่มีสำเนาคู่ฉบับ",no_attachments:"ไม่มีสิ่งที่แนบมาด้วย",optionSelect:{send_type_id:[{value:1,name:"แนบไฟล์ทั้งหมด ตามข้างล่างนี้"},{value:2,name:"ไม่แนบไฟล์ แต่ใช้ลิงค์ข้างล่างนี้แทน"}]}}},methods:{reloadClick(){console.log("reloadClick")},uploadFile(l){document.querySelector(`[name="${l}"]`).click()},fileChange(l){for(var t=0;t<document.querySelector(`[name="${l}"]`).files.length;t++){let a=document.querySelector(`[name="${l}"]`).files[t];if(this.data.fileType.indexOf(a.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(l=="attachments"&&a.type=="application/pdf")if(+this.sumfile()+ +(a.size/1024/1024).toFixed(2)<=25){let c={filename:a.name,type:a.type,link:URL.createObjectURL(a),size:(a.size/1024/1024).toFixed(2)+" MB",file_size:(a.size/1024/1024).toFixed(2),file:a,flag:"add"};this.data.attachments.push(c)}else this.modalAlert={showModal:!0,type:"error",message:"ขนาดไฟล์รวมเกิน 25MB"},document.querySelector(`[name="${l}"]`).value=null}document.querySelector(`[name="${l}"]`).value=null},previewFile(l){l.filename&&l.link&&this.axios({method:"get",url:l.link,baseURL:"",responseType:"blob"}).then(t=>{const a=new Blob([t.data],{type:this.assetsUtils.getTypeFile(l.filename)});window.open(URL.createObjectURL(a))})},deleteFile(l,t){l.flag=="edit"?l.flag="delete":this.data.attachments.splice(t,1)},sumfile(){var t;let l=0;return(t=this.data.attachments)==null||t.filter(a=>{l+=a.file.size}),(l/1024/1024).toFixed(2)},cancelClick(){console.log("cancelClick")},recommendClick(l){this.modal.book_recipient="",this.keyupModal({target:{value:""}}),this.modal.showModal=!0},keyupModal(l){this.modal.optionSelect.book_recipient=[],this.axios.get("/master-data/message-template",{params:{keyword:l.target.value}}).then(t=>{t.data.data&&(t.data.data.meta.filter(a=>(a.value=a.id,a.name=a.receive_name,a)),this.modal.optionSelect.book_recipient=t.data.data.meta)})},modalClick(){this.modal.book_recipient?this.axios.get(`/master-data/message-template/${this.modal.book_recipient}`,{params:{keyword:this.modal.book_recipient}}).then(l=>{this.data.greeting=l.data.data.title_name,this.data.receive_name=l.data.data.receive_person_name,this.data.signature=l.data.data.signature,this.modal.showModal=!1}).catch(l=>{this.modal.showModal=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}}):this.modal.showModal=!1},templateClick(l){this.modalTemplate.message_format="",this.keyupModalTeamplate({target:{value:""}}),this.modalTemplate.showModal=!0},keyupModalTeamplate(l){this.modalTemplate.optionSelect.message_format=[],this.modalTemplate.optionSelect.message_format=[{value:"1",name:"01: ขอนำส่งหนังสือ"}]},modalTemplateClick(){this.modalTemplate.message_format?(this.data.message="ขอนำส่งหนังสือ เลขที่ นร0501/48, เรื่อง ทดสอบ, ลงวันที่ 14 กุมภาพันธ์ 2566",this.data.detail="รายละเอียดตามเอกสารที่ส่งมาด้วย",this.data.department_name="สำนักเลขาธิการคณะรัฐมนตรี",this.data.contact="โทร. 0 2280 9000 ต่อ .... (ชื่อผู้ติดต่อ ...)",this.data.reply_message="“หากท่านได้รับอีเมลนี้แล้วกรุณาแจ้งการได้รับกลับมายังที่อยู่อีเมลนี้ด้วยจะขอบคุณยิ่ง”",this.data.disclaimer=`**อีเมล(และ/หรือเอกสารแนบ) นี้เป็นข้อมูลที่เป็นความลับและอาจเป็นข้อมูลที่เป็นเอกสิทธิ์เฉพาะบุคคล การนำข้อมูลดังกล่าวไปใช้หรือเปิดเผยให้บุคคลอื่นใดล่วงรู้เป็นการกระทำที่ไม่ได้รับอนุญาติหากท่านมิได้เป็นบุคคลที่อีเมลฉบับนี้ระบุถึงแล้ว กรุณาลบอีเมลนี้ออกจากคอมพิวเตอร์ที่ท่านได้รับทั้งนี้ ขอขอบคุณหากท่านได้แจ้งผู้ส่งถึงการจัดส่งอีเมลที่ผิดพลาดด้วย\r
**This e-mail (and/or attachments) is confidential and may be privileged. Use or disclosure of it by anyone other than a designated address is unauthorized. If you are not intented recipient, please deleate this e-mail from computer on which you received it. We thank you for notifying us immediately.`,this.modalTemplate.showModal=!1):this.modalTemplate.showModal=!1},back(){this.$router.push({name:"automail-sendmail",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},onSubmit(){let l=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.flag==1?"บันทึกร่าง":"บันทึกและส่ง"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){l.showLoading=!0,l.uploadFileAll()}}},uploadFileAll(){let l=this.assetsUtils.currentDate(),t=[],a=[];this.data.attachments.filter(c=>{c.file&&c.flag=="add"&&t.push(!0)}),t.length>0?this.data.attachments.filter(c=>{if(c.file&&c.flag=="add"){let o=new FormData;o.append("file",c.file),o.append("dst",`${l.split("/")[0]+"-"+l.split("/")[1]+"-"+l.split("/")[2]}`),this.axios.post("/upload/single",o,{headers:{"Content-Type":"multipart/form-data"}}).then(d=>{c.filename=d.data.data.filename,c.filepath=d.data.data.path,a.push(!0),t.length==a.length&&this.callApiSave()}).catch(d=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}}):this.callApiSave()},callApiSave(){this.showLoading=!0;let l=this,t={...this.data,is_draft:this.flag==1,user_id:parseInt(localStorage.getItem("user_id"))};this.axios.put(`/book-out-external/email-information/${this.data.id}`,t).then(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:this.flag==1?"ทำการบันทึกร่างสำเร็จแล้ว":"ทำการบันทึกและส่งสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){l.apiDetail()}}}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},apiDetail(){this.showLoading=!0,this.axios.get(`/book-out-external/book-out-automail/${this.$route.params.id}`).then(l=>{this.showLoading=!1,this.data={...this.data,...l.data.data},this.data.main_file_link=this.data.main_file_path?this.backendport+"/"+this.data.main_file_path:"",this.data.copy_file_link=this.data.copy_file_path?this.backendport+"/"+this.data.copy_file_path:"",this.data.attachments.filter(t=>(t.flag="edit",t.link=t.filepath?this.backendport+"/"+t.filepath:"",t)),this.axios({method:"get",url:this.backendport+"/"+localStorage.getItem("filepath"),baseURL:"",responseType:"blob"}).then(t=>{const a=new Blob([t.data],{type:this.assetsUtils.getTypeFile(localStorage.getItem("filename"))});this.data.logoImage=URL.createObjectURL(a)}).catch(t=>{this.data.logoImage=new URL("/assets/department-94349e4f.png",self.location).href})}).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})},apiMaster(){this.showLoading=!0;const l=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([l]).then(this.axios.spread((...t)=>{this.showLoading=!1;const a=t[0];this.data.fileType=[],a.data.data.filter(c=>{c.active_flag==1&&this.data.fileType.push(c.content_type)}),this.apiDetail()})).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}},mounted(){this.apiMaster()},watch:{"data.organization_id"(){this.masterDropdown()},"data.department_id"(){this.masterDropdown()},"data.subministry_id"(){this.masterDropdown()},"data.group_id"(){this.masterDropdown()}}},B={class:"automail-sendmail-detail"},R={class:"group-overflow"},E={class:"detail"},N={class:"group-head"},O=e("div",{class:"group-first"},[e("i",{class:"bi bi-envelope icon-envelope"}),e("div",{class:"name"},"ส่งหนังสือส่งออก ผ่านอีเมลอัตโนมัติ")],-1),P={class:"group-end"},H=e("img",{src:j,class:"icon-back"},null,-1),K=e("img",{src:D,class:"icon-line"},null,-1),W=e("div",{class:"line"},null,-1),G={class:"group-detail"},J={class:"d-flex justify-content-between align-items-center mb-4"},Q={class:"title"},X={class:"title"},Y={class:"title"},Z=e("img",{src:C,class:"icon-after"},null,-1),$=e("img",{src:x,alt:"times-circle",class:"icon-times-circle"},null,-1),ee=e("img",{src:f,alt:"times-circle",class:"icon-check-circle"},null,-1),te=e("img",{src:f,alt:"times-circle",class:"icon-check-circle"},null,-1),oe=e("img",{src:C,class:"icon-next"},null,-1),se=e("div",{class:"head"},"เกี่ยวกับหนังสือส่งออก",-1),le={class:"border"},ie={class:"group-between"},ae={class:"group-input"},ne=e("div",{class:"name"},"ประเภท",-1),de={class:"group-input"},re=e("div",{class:"name"},"ทะเบียน",-1),me={class:"group-between"},ce={class:"group-input"},ue=e("div",{class:"name"},"ชั้นความลับ",-1),pe={class:"group-input"},_e=e("div",{class:"name"},"ความเร่งด่วน",-1),he={class:"group-input"},ge=e("div",{class:"name"},"เลขที่ออก สลค.",-1),be={class:"group-input"},fe=e("div",{class:"name"},"ลงวันที่",-1),ve={class:"group-between"},ye={class:"group-input"},ke=e("div",{class:"name"},"จากสังกัด/กอง",-1),we={class:"group-input"},xe=e("div",{class:"name"},"ถึง",-1),Ve={class:"group-between"},Ue={class:"group-input"},Ce=e("div",{class:"name"},"ชื่อเรื่อง",-1),Me={key:0},Se={class:"group-input mt-4"},qe=e("div",{class:"name"},[r("คำขึ้นต้น "),e("span",{class:"required"},"*")],-1),ze={class:"group-recommend mb-3"},Ae=e("i",{class:"bi bi-question icon-question"},null,-1),Te={class:"group-input"},Le={class:"d-flex justify-content-between align-items-center mb-3"},Fe=e("div",{class:"name"},[r("ข้อความ "),e("span",{class:"required"},"*")],-1),je=e("i",{class:"bi bi-question icon-question"},null,-1),De={class:"group-input"},Ie=e("div",{class:"name"},[r("รายละเอียดตามเอกสารที่ส่งมาด้วย "),e("span",{class:"required"},"*")],-1),Be={class:"group-input"},Re=e("div",{class:"name"},[r("คำลงท้าย "),e("span",{class:"required"},"*")],-1),Ee={class:"group-input"},Ne=e("div",{class:"name"},[r("ชื่อส่วนราชการที่ส่งหนังสือ "),e("span",{class:"required"},"*")],-1),Oe={class:"group-input"},Pe=e("div",{class:"name"},[r("ข้อมูลผู้ติดต่อ "),e("span",{class:"required"},"*")],-1),He={class:"mb-3"},Ke=e("div",{class:"group-input"},[e("div",{class:"name"},"ข้อความใต้เส้นปิดข้อความ"),e("div",{class:"line"})],-1),We={class:"group-input"},Ge=e("div",{class:"name"},[r("ข้อความขอให้ตอบกลับ "),e("span",{class:"required"},"*")],-1),Je={class:"group-input"},Qe=e("div",{class:"name"},[r("Disclaimer "),e("span",{class:"required"},"*")],-1),Xe={key:1},Ye={class:"sum-size-file"},Ze={class:"group-input"},$e=e("div",{class:"name"},[r("วิธีการส่งไฟล์ "),e("span",{class:"required"},"*")],-1),et={class:"group-input"},tt=e("div",{class:"name"},"ลิงค์ดาวน์โหลดเอกสาร",-1),ot={class:"group-recommend"},st=e("button",{type:"button",class:"button-link none-pointer"},[e("i",{class:"bi bi-link-45deg icon-question"})],-1),lt={class:"group-input"},it=e("div",{class:"name"},"หนังสือต้นเรื่อง",-1),at={key:0,class:"d-flex"},nt=e("i",{class:"bi bi-eye icon-eye"},null,-1),dt=[nt],rt={key:1},mt={class:"group-input"},ct=e("div",{class:"name"},"สำเนาคู่ฉบับ",-1),ut={key:0,class:"d-flex"},pt=e("i",{class:"bi bi-eye icon-eye"},null,-1),_t=[pt],ht={key:1},gt=e("div",{class:"line"},null,-1),bt={class:"group-input"},ft={class:"name d-flex justify-content-between align-items-center mb-3 mt-3"},vt=e("div",null,"สิ่งที่แนบมาด้วย",-1),yt=e("i",{class:"bi bi-plus icon-plus"},null,-1),kt={class:"d-flex mb-2"},wt=["onClick"],xt=e("i",{class:"bi bi-eye icon-eye"},null,-1),Vt=[xt],Ut=["onClick"],Ct=e("i",{class:"bi bi-trash icon-trash"},null,-1),Mt=[Ct],St={key:1},qt={key:2},zt={class:"group-input mt-4"},At=e("div",{class:"name"},[r("Subject / Mail "),e("span",{class:"required"},"*")],-1),Tt={class:"group-input mt-4"},Lt=e("div",{class:"name"},[r("ถึง / To "),e("span",{class:"required"},"*"),r(" (สามารถระบุได้มากกว่า 1 อีเมล โดยคั่นแต่ละอีเมลด้วยสัญลักษณ์ ,)")],-1),Ft={class:"group-input mt-4"},jt=e("div",{class:"name"},"สำเนาถึง / Cc (สามารถระบุได้มากกว่า 1 อีเมล โดยคั่นแต่ละอีเมลด้วยสัญลักษณ์ ,)",-1),Dt={class:"group-input mt-4"},It=e("div",{class:"name"},"สำเนาลับถึง / BCc (สามารถระบุได้มากกว่า 1 อีเมล โดยคั่นแต่ละอีเมลด้วยสัญลักษณ์ ,)",-1),Bt={class:"group-input mt-4"},Rt={class:"name d-flex justify-content-between align-items-center mb-3 mt-3"},Et=e("div",null,"ตัวอย่างข้อความ",-1),Nt=e("i",{class:"bi bi-arrow-clockwise icon-clockwise"},null,-1),Ot={class:"border-preview"},Pt={bgcolor:"#ffffff",cellpadding:"0",cellspacing:"0",class:"nl-container",role:"presentation",style:{"table-layout":"fixed","vertical-align":"top","min-width":"320px","border-spacing":"0","border-collapse":"collapse","background-color":"#ffffff",width:"100%"},valign:"top",width:"100%"},Ht={style:{"vertical-align":"top"},valign:"top"},Kt={style:{"word-break":"break-word","vertical-align":"top"},valign:"top"},Wt={style:{"background-color":"#ffffff"}},Gt={class:"block-grid",style:{"min-width":"320px","max-width":"680px","overflow-wrap":"break-word","word-wrap":"break-word","word-break":"break-word",margin:"0 auto","background-color":"transparent"}},Jt={style:{"border-collapse":"collapse",display:"table",width:"100%","background-color":"transparent"}},Qt={class:"col num12",style:{"min-width":"320px","max-width":"680px",display:"table-cell","vertical-align":"top",width:"680px"}},Xt={class:"col_cont",style:{width:"100% !important"}},Yt={style:{"border-top":"0px solid transparent","border-left":"0px solid transparent","border-bottom":"0px solid transparent","border-right":"0px solid transparent","padding-top":"5px","padding-bottom":"5px","padding-right":"0px","padding-left":"0px"}},Zt={align:"center",class:"img-container center fixedwidth",style:{"padding-right":"0px","padding-left":"0px","margin-top":"40px"}},$t={href:"#",style:{outline:"none"},tabindex:"-1",target:"_blank"},eo=["src"],to={style:{color:"#666","font-family":"'Arial', sans-serif","line-height":"1.5","padding-top":"10px","padding-right":"10px","padding-bottom":"10px","padding-left":"10px"}},oo=e("div",{style:{"line-height":"2.0","font-size":"12px",color:"#15466e","font-family":"Arial, sans-serif","margin-bottom":"20px"}},[e("p",{style:{"font-size":"14px","line-height":"2.0","word-break":"break-word","text-align":"center",margin:"0"}},[e("strong",null,[e("span",{style:{"font-size":"16px","font-weight":"500"}},"พีเคเอ็ม คอนซัลติ้ง กรุ๊ป จำกัด")])]),e("p",{style:{"font-size":"14px","line-height":"1.0","word-break":"break-word","text-align":"center",margin:"0"}},[e("strong",null,[e("span",{style:{"font-size":"14px","font-weight":"400"}},"ระบบสารบรรณอิเล็กทรอนิกส์")])])],-1),so={style:{color:"#666","font-family":"'Arial', sans-serif","line-height":"1.5","padding-top":"10px","padding-right":"10px","padding-bottom":"10px","padding-left":"10px"}},lo={style:{"line-height":"2.0","font-size":"12px",color:"#15466e","font-family":"Arial, sans-serif","margin-bottom":"5px"}},io={style:{"font-size":"14px","line-height":"2.0","word-break":"break-word","text-align":"left",margin:"0"}},ao={style:{"font-size":"20px","font-weight":"600"}},no={style:{"line-height":"1.5","font-size":"12px",color:"#333333","font-family":"Arial, sans-serif"}},ro={style:{"font-size":"16px","line-height":"1.5","word-break":"break-word","text-align":"left",margin:"0"}},mo=e("br",null,null,-1),co={style:{"line-height":"1.5","font-size":"12px",color:"#333333","font-family":"Arial, sans-serif"}},uo={style:{"font-size":"16px","line-height":"1.5","word-break":"break-word","text-align":"left",margin:"0"}},po=["href"],_o={style:{"line-height":"2.0","font-size":"12px",color:"#333333","font-family":"Arial, sans-serif","margin-bottom":"5px","margin-top":"20px"}},ho={style:{"font-size":"16px","line-height":"1.5","word-break":"break-word","text-align":"left",margin:"0"}},go={style:{"line-height":"2.0","font-size":"12px",color:"#333333","font-family":"Arial, sans-serif","margin-bottom":"20px","margin-top":"20px"}},bo={style:{"font-size":"16px","line-height":"2.0","word-break":"break-word","text-align":"left",margin:"0","text-indent":"50px"}},fo={style:{"font-size":"16px","line-height":"2.0","word-break":"break-word","text-align":"left",margin:"0"}},vo={style:{"line-height":"2.0","font-size":"12px",color:"#333333","font-family":"Arial, sans-serif","margin-bottom":"20px","margin-top":"20px","border-bottom":"#030303 dashed 1px","padding-bottom":"15px"}},yo={style:{"font-size":"16px","line-height":"2.0","word-break":"break-word","text-align":"left",margin:"0"}},ko={style:{"font-size":"16px","line-height":"2.0","word-break":"break-word","text-align":"left",margin:"0"}},wo={style:{"line-height":"2.0","font-size":"12px",color:"#333333","font-family":"Arial, sans-serif","margin-bottom":"20px","margin-top":"20px"}},xo={style:{"font-size":"16px","line-height":"2.0","word-break":"break-word","text-align":"left",margin:"0","margin-bottom":"15px"}},Vo=["innerHTML"],Uo={class:"modal-recommend"},Co={class:"modal-class"},Mo={class:"modal-center"},So={class:"modal-size"},qo={class:"modal-title"},zo=e("div",{class:"title-size"},"เลือกผู้รับหนังสือ",-1),Ao=e("div",{class:"line"},null,-1),To={class:"modal-detail"},Lo={class:"group-input"},Fo=e("div",{class:"name"},"ผู้รับหนังสือ ",-1),jo=e("div",{class:"line"},null,-1),Do={class:"group-footer"},Io=e("div",{class:"group-name"},[e("img",{src:x,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ยกเลิก")],-1),Bo=[Io],Ro=e("div",{class:"group-name"},[e("img",{src:f,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ตกลง")],-1),Eo=[Ro],No={class:"modal-template"},Oo={class:"modal-class"},Po={class:"modal-center"},Ho={class:"modal-size"},Ko={class:"modal-title"},Wo=e("div",{class:"title-size"},"เลือกรูปแบบข้อความ",-1),Go=e("div",{class:"line"},null,-1),Jo={class:"modal-detail"},Qo={class:"group-input"},Xo=e("div",{class:"name"},"รูปแบบข้อความ ",-1),Yo=e("div",{class:"line"},null,-1),Zo={class:"group-footer"},$o=e("div",{class:"group-name"},[e("img",{src:x,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ยกเลิก")],-1),es=[$o],ts=e("div",{class:"group-name"},[e("img",{src:f,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ตกลง")],-1),os=[ts];function ss(l,t,a,c,o,d){const n=b("cpn-input"),v=b("cpn-textArea"),M=b("cpn-select"),S=b("Form"),V=b("cpn-autoComplete"),q=b("cpn-modal-alert"),z=b("cpn-loading");return u(),p("div",B,[e("div",R,[e("div",E,[e("div",N,[O,e("div",P,[e("button",{type:"button",class:"button-back",onClick:t[0]||(t[0]=m=>d.back())},[H,K,r(" ย้อนกลับ ")])])]),W,i(S,{onSubmit:d.onSubmit,onInvalidSubmit:l.onInvalidSubmit},{default:T(()=>{var m,U;return[e("div",G,[e("div",J,[h(e("div",Q,"๑. ร่างเนื้อหาจดหมาย",512),[[g,o.step==1]]),h(e("div",X,"๒. แนบเอกสาร",512),[[g,o.step==2]]),h(e("div",Y,"๓. บันทึกและส่งจดหมาย",512),[[g,o.step==3]]),e("div",null,[h(e("button",{type:"button",class:"button-after button-primary",onClick:t[1]||(t[1]=s=>o.step-=1)},[Z,r(" ก่อนหน้า ")],512),[[g,o.step!=1]]),e("button",{type:"button",class:"button-cancel button-danger",onClick:t[2]||(t[2]=s=>d.cancelClick())},[$,r(" ยกเลิกร่าง ")]),e("button",{type:"submit",class:"button-save button-success",onClick:t[3]||(t[3]=s=>o.flag=1)},[ee,r(" บันทึกร่าง ")]),h(e("button",{type:"submit",class:"button-save2 button-primary",onClick:t[4]||(t[4]=s=>o.flag=2)},[te,r(" บันทึกและส่ง ")],512),[[g,o.step==3]]),h(e("button",{type:"button",class:"button-next button-primary",onClick:t[5]||(t[5]=s=>o.step+=1)},[r(" ถัดไป "),oe],512),[[g,o.step!=3]])])]),se,e("div",le,[e("div",ie,[e("div",ae,[ne,i(n,{modelValue:o.data.bookout.book_type_name,"onUpdate:modelValue":t[6]||(t[6]=s=>o.data.bookout.book_type_name=s),name:"bookout.book_type_name",disabled:!0,placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",de,[re,i(n,{modelValue:o.data.bookout.book_regis_name,"onUpdate:modelValue":t[7]||(t[7]=s=>o.data.bookout.book_regis_name=s),name:"bookout.book_regis_name",disabled:!0,placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",me,[e("div",ce,[ue,i(n,{modelValue:o.data.bookout.secret_name,"onUpdate:modelValue":t[8]||(t[8]=s=>o.data.bookout.secret_name=s),name:"bookout.secret_name",disabled:!0,placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",pe,[_e,i(n,{modelValue:o.data.bookout.speed_name,"onUpdate:modelValue":t[9]||(t[9]=s=>o.data.bookout.speed_name=s),name:"bookout.speed_name",disabled:!0,placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",he,[ge,i(n,{modelValue:o.data.bookout.book_out_document_number,"onUpdate:modelValue":t[10]||(t[10]=s=>o.data.bookout.book_out_document_number=s),name:"bookout.book_out_document_number",disabled:!0,placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",be,[fe,i(n,{modelValue:o.data.bookout.as_of_date,"onUpdate:modelValue":t[11]||(t[11]=s=>o.data.bookout.as_of_date=s),name:"bookout.as_of_date",disabled:!0,placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",ve,[e("div",ye,[ke,i(n,{modelValue:o.data.bookout.from,"onUpdate:modelValue":t[12]||(t[12]=s=>o.data.bookout.from=s),name:"bookout.from",disabled:!0,placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",we,[xe,i(n,{modelValue:o.data.bookout.to,"onUpdate:modelValue":t[13]||(t[13]=s=>o.data.bookout.to=s),name:"bookout.to",disabled:!0,placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",Ve,[e("div",Ue,[Ce,i(n,{modelValue:o.data.bookout.subject,"onUpdate:modelValue":t[14]||(t[14]=s=>o.data.bookout.subject=s),name:"bookout.subject",disabled:!0,placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),o.step==1?(u(),p("div",Me,[e("div",Se,[qe,e("div",ze,[i(n,{modelValue:o.data.greeting,"onUpdate:modelValue":t[15]||(t[15]=s=>o.data.greeting=s),name:"greeting",class:"input-recommend",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-recommend",onClick:t[16]||(t[16]=s=>d.recommendClick())},[Ae,r(" แนะนำ ")])]),i(n,{modelValue:o.data.receive_name,"onUpdate:modelValue":t[17]||(t[17]=s=>o.data.receive_name=s),name:"receive_name",rules:"required",placeholder:"ผู้รับหนังสือ"},null,8,["modelValue"])]),e("div",Te,[e("div",Le,[Fe,e("div",null,[e("button",{type:"button",class:"button-template",onClick:t[18]||(t[18]=s=>d.templateClick())},[je,r(" เลือกเทมเพลต ")])])]),i(v,{modelValue:o.data.message,"onUpdate:modelValue":t[19]||(t[19]=s=>o.data.message=s),name:"message",rows:"15",rules:"required",placeholder:"เนื้อความจดหมาย"},null,8,["modelValue"])]),e("div",De,[Ie,i(v,{modelValue:o.data.detail,"onUpdate:modelValue":t[20]||(t[20]=s=>o.data.detail=s),name:"detail",rules:"required",rows:"2",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",Be,[Re,i(n,{modelValue:o.data.signature,"onUpdate:modelValue":t[21]||(t[21]=s=>o.data.signature=s),name:"signature",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",Ee,[Ne,i(n,{modelValue:o.data.department_name,"onUpdate:modelValue":t[22]||(t[22]=s=>o.data.department_name=s),name:"department_name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",Oe,[Pe,e("div",He,[i(n,{modelValue:o.data.contact_name,"onUpdate:modelValue":t[23]||(t[23]=s=>o.data.contact_name=s),name:"contact_name",rules:"required",placeholder:"ชื่อส่วนราชการเจ้าของเรื่องหรือหน่วยงานที่ออกหนังสือ"},null,8,["modelValue"])]),i(n,{modelValue:o.data.contact,"onUpdate:modelValue":t[24]||(t[24]=s=>o.data.contact=s),name:"contact",rules:"required",placeholder:"เบอร์โทร และชื่อผู้ติดต่อ"},null,8,["modelValue"])]),Ke,e("div",We,[Ge,i(n,{modelValue:o.data.reply_message,"onUpdate:modelValue":t[25]||(t[25]=s=>o.data.reply_message=s),name:"reply_message",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",Je,[Qe,i(v,{modelValue:o.data.disclaimer,"onUpdate:modelValue":t[26]||(t[26]=s=>o.data.disclaimer=s),name:"disclaimer",rules:"required",rows:"15",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])):w("",!0),o.step==2?(u(),p("div",Xe,[e("div",Ye,[e("span",null,"ขนาดไฟล์รวม "+_(d.sumfile())+"MB (อนุญาตให้แนบไฟล์รวมกันสูงสุด 25MB)",1)]),e("div",Ze,[$e,i(M,{modelValue:o.data.send_type_id,"onUpdate:modelValue":t[27]||(t[27]=s=>o.data.send_type_id=s),name:"send_type_id",rules:"required",optionSelect:o.optionSelect.send_type_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",et,[tt,e("div",ot,[i(n,{modelValue:o.data.link,"onUpdate:modelValue":t[28]||(t[28]=s=>o.data.link=s),name:"link",class:"input-link",disabled:o.data.send_type_id==1,placeholder:"กรุณาระบุ"},null,8,["modelValue","disabled"]),st])]),e("div",lt,[it,o.data.main_file_name?(u(),p("div",at,[i(n,{modelValue:o.data.main_file_name,"onUpdate:modelValue":t[29]||(t[29]=s=>o.data.main_file_name=s),name:"main_file_name",disabled:!0},null,8,["modelValue"]),e("button",{type:"button",class:"button-view",onClick:t[30]||(t[30]=s=>d.previewFile({filename:o.data.main_file_name,link:o.data.main_file_link}))},dt)])):(u(),p("div",rt,[i(n,{modelValue:o.no_main_file_name,"onUpdate:modelValue":t[31]||(t[31]=s=>o.no_main_file_name=s),name:"no_main_file_name",disabled:!0},null,8,["modelValue"])]))]),e("div",mt,[ct,o.data.copy_file_name?(u(),p("div",ut,[i(n,{modelValue:o.data.copy_file_name,"onUpdate:modelValue":t[32]||(t[32]=s=>o.data.copy_file_name=s),name:"copy_file_name",disabled:!0},null,8,["modelValue"]),e("button",{type:"button",class:"button-view",onClick:t[33]||(t[33]=s=>d.previewFile({filename:o.data.copy_file_name,link:o.data.copy_file_link}))},_t)])):(u(),p("div",ht,[i(n,{modelValue:o.no_copy_file_name,"onUpdate:modelValue":t[34]||(t[34]=s=>o.no_copy_file_name=s),name:"no_copy_file_name",disabled:!0},null,8,["modelValue"])]))]),gt,e("div",bt,[e("div",ft,[vt,e("input",{type:"file",multiple:"",onChange:t[35]||(t[35]=s=>d.fileChange("attachments")),name:"attachments",style:{display:"none"},accept:"application/pdf"},null,32),e("button",{type:"button",class:"button-file",onClick:t[36]||(t[36]=s=>d.uploadFile("attachments"))},[yt,r(" แนบเอกสาร ")])]),((U=(m=o.data)==null?void 0:m.attachments)==null?void 0:U.length)>0?(u(!0),p(L,{key:0},F(o.data.attachments.filter(s=>s.flag!="delete"),(s,y)=>(u(),p("div",{key:y},[e("div",kt,[i(n,{modelValue:s.filename,"onUpdate:modelValue":k=>s.filename=k,name:"filename"+y,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-view",onClick:k=>d.previewFile(s)},Vt,8,wt),e("button",{type:"button",class:"button-del",onClick:k=>d.deleteFile(s,y)},Mt,8,Ut)])]))),128)):(u(),p("div",St,[i(n,{modelValue:o.no_attachments,"onUpdate:modelValue":t[37]||(t[37]=s=>o.no_attachments=s),name:"no_attachments",disabled:!0},null,8,["modelValue"])]))])])):w("",!0),o.step==3?(u(),p("div",qt,[e("div",zt,[At,i(n,{modelValue:o.data.subject,"onUpdate:modelValue":t[38]||(t[38]=s=>o.data.subject=s),name:"subject",rules:"required",placeholder:"เรื่อง"},null,8,["modelValue"])]),e("div",Tt,[Lt,i(n,{modelValue:o.data.to,"onUpdate:modelValue":t[39]||(t[39]=s=>o.data.to=s),name:"to",rules:"required",placeholder:"อีเมลผู้รับจดหมาย"},null,8,["modelValue"])]),e("div",Ft,[jt,i(n,{modelValue:o.data.cc,"onUpdate:modelValue":t[40]||(t[40]=s=>o.data.cc=s),name:"cc",placeholder:"อีเมลผู้รับจดหมาย"},null,8,["modelValue"])]),e("div",Dt,[It,i(n,{modelValue:o.data.bcc,"onUpdate:modelValue":t[41]||(t[41]=s=>o.data.bcc=s),name:"bcc",placeholder:"อีเมลผู้รับจดหมาย"},null,8,["modelValue"])]),e("div",Bt,[e("div",Rt,[Et,h(e("button",{type:"button",class:"button-reload",onClick:t[42]||(t[42]=s=>d.reloadClick())},[Nt,r(" โหลดใหม่ ")],512),[[g,!1]])]),e("div",Ot,[e("table",Pt,[e("tbody",null,[e("tr",Ht,[e("td",Kt,[e("div",Wt,[e("div",Gt,[e("div",Jt,[e("div",Qt,[e("div",Xt,[e("div",Yt,[e("div",Zt,[e("a",$t,[e("img",{align:"center",alt:"",border:"0",class:"center fixedwidth",src:o.data.logoImage,width:"110",style:{"text-decoration":"none",height:"auto",border:"0px",width:"100%","max-width":"110px",display:"block"}},null,8,eo)])]),e("div",to,[oo,e("div",so,[e("div",lo,[e("p",io,[e("strong",null,[e("span",ao,_(o.data.greeting)+" "+_(o.data.receive_name),1)])])]),e("div",no,[e("p",ro,_(o.data.message),1)]),mo,h(e("div",co,[e("p",uo,[e("a",{href:o.data.link,title:"ลิงค์ดาวน์โหลดเอกสาร"},_(o.data.link),9,po)])],512),[[g,o.data.send_type_id!=1]]),e("div",_o,[e("p",ho,_(o.data.detail),1)]),e("div",go,[e("p",bo,_(o.data.signature),1),e("p",fo,_(o.data.department_name),1)]),e("div",vo,[e("p",yo,_(o.data.contact_name),1),e("p",ko,_(o.data.contact),1)]),e("div",wo,[e("p",xo,_(o.data.reply_message),1),e("p",{id:"Disclaimer",style:{"font-size":"15px","line-height":"2.0",color:"#15466e","font-style":"italic","word-break":"break-word","text-align":"left",margin:"0","margin-bottom":"10px"},innerHTML:o.data.disclaimer},null,8,Vo)])])])])])])])])])])])])])])])])):w("",!0)])]}),_:1},8,["onSubmit","onInvalidSubmit"])])]),h(e("div",Uo,[e("div",Co,[e("div",Mo,[e("div",So,[e("div",qo,[zo,e("i",{class:"bi bi-x-lg icon-close",onClick:t[43]||(t[43]=m=>o.modal.showModal=!1)})]),Ao,e("div",To,[e("div",Lo,[Fo,i(V,{modelValue:o.modal.book_recipient,"onUpdate:modelValue":t[44]||(t[44]=m=>o.modal.book_recipient=m),name:"book_recipient",optionSelect:o.modal.optionSelect.book_recipient,onKeyup:t[45]||(t[45]=m=>d.keyupModal(m)),placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),jo,e("div",Do,[e("button",{type:"button",onClick:t[46]||(t[46]=m=>o.modal.showModal=!1),class:"btn button-danger"},Bo),e("button",{type:"submit",class:"btn button-success",onClick:t[47]||(t[47]=m=>d.modalClick())},Eo)])])])])],512),[[g,o.modal.showModal]]),h(e("div",No,[e("div",Oo,[e("div",Po,[e("div",Ho,[e("div",Ko,[Wo,e("i",{class:"bi bi-x-lg icon-close",onClick:t[48]||(t[48]=m=>o.modalTemplate.showModal=!1)})]),Go,e("div",Jo,[e("div",Qo,[Xo,i(V,{modelValue:o.modalTemplate.message_format,"onUpdate:modelValue":t[49]||(t[49]=m=>o.modalTemplate.message_format=m),name:"message_format",optionSelect:o.modalTemplate.optionSelect.message_format,onKeyup:t[50]||(t[50]=m=>d.keyupModalTeamplate(m)),placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),Yo,e("div",Zo,[e("button",{type:"button",onClick:t[51]||(t[51]=m=>o.modalTemplate.showModal=!1),class:"btn button-danger"},es),e("button",{type:"submit",class:"btn button-success",onClick:t[52]||(t[52]=m=>d.modalTemplateClick())},os)])])])])],512),[[g,o.modalTemplate.showModal]]),i(q,{modalAlert:o.modalAlert},null,8,["modalAlert"]),i(z,{show:o.showLoading},null,8,["show"])])}const as=A(I,[["render",ss]]);export{as as default};
