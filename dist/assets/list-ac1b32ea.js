import{_ as L,r as f,o as m,c as h,a as e,b as i,d as q,w as p,v as b,j as r,n as B,F as U,h as C,t as v,i as S,k as V,g as D}from"./index-c5ec6fd3.js";import{_ as x,a as I}from"./line-up-ff8a3ab8.js";const j={name:"automail-sendmail-list",data(){return{noData:"ไม่มีสิ่งที่แนบมาด้วย",modalAlert:{showModal:!1,title:"",message:""},modal:{showModal:!1,book_recipient:"",optionSelect:{book_recipient:[]}},showLoading:!1,data:{greeting:"",signature:"",contact:"",table:[],fileType:[]},optionSelect:{send_type_id:[{value:1,name:"แนบไฟล์ทั้งหมด ตามข้างล่างนี้"},{value:2,name:"ไม่แนบไฟล์ แต่ใช้ลิงก์ข้างล่างนี้แทน"}]},indexTable:0,flgTable:!1,errorFileSize:!1}},methods:{save(l){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${l==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0,t.uploadFileAll(l)}}},uploadFileAll(l){let t=this.assetsUtils.currentDate(),a=[],u=[];this.data.table.filter(n=>{n.attachments.filter(d=>{d.file&&d.flag=="add"&&a.push(!0)})}),a.length>0?this.data.table.filter(n=>{n.attachments.filter(d=>{if(d.file&&d.flag=="add"){let c=new FormData;c.append("file",d.file),c.append("dst",`${t.split("/")[0]+"-"+t.split("/")[1]+"-"+t.split("/")[2]}`),this.axios.post("/upload/single",c,{headers:{"Content-Type":"multipart/form-data"}}).then(g=>{d.filename=g.data.data.filename,d.filepath=g.data.data.path,u.push(!0),a.length==u.length&&this.callApiSave(l)}).catch(g=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:g.response.data.message}})}})}):this.callApiSave(l)},callApiSave(l){let t=this;this.showLoading=!0,this.data.table.filter(a=>{a.user_id=parseInt(localStorage.getItem("user_id")),a.is_draft=l==1,a.flag=l==1?"draft":"",a.greeting2=a.bookout.greeting,a.department_id=parseInt(localStorage.getItem("department_id")),a.attachments.filter(u=>{u.flag=u.flag=="edit"?a.id==0?"add":"":u.flag})}),this.axios.post("/book-out-external/book-out-automail/series",this.data.table).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:l==1?"ทำการบันทึกแบบร่างสำเร็จแล้ว":"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},sumfile(l){var a;let t=0;l.copy_main_file_name&&(t+=l.copy_main_file_size?+l.copy_main_file_size:0),l.main_file_name&&(t+=l.main_file_size?+l.main_file_size:0),(a=l==null?void 0:l.attachments)==null||a.filter(u=>{u.flag!="delete"&&(t+=+u.file_size)}),t/1024/1024>25?(this.errorFileSize=!0,l.send_type_id=2):this.errorFileSize=!1,l.sumfile=(t/1024/1024).toFixed(2)},uploadFile(l){document.querySelector(`[name="${l}"]`).click()},fileChange(l,t){for(var a=0;a<document.querySelector(`[name="${l}"]`).files.length;a++){let u=document.querySelector(`[name="${l}"]`).files[a];if(this.data.fileType.indexOf(u.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(t!=null&&t.attachments||(t.attachments=[]),u.type=="application/pdf"){let n={filename:u.name,type:u.type,link:URL.createObjectURL(u),size:(u.size/1024/1024).toFixed(2)+" MB",file_size:u.size,file:u,flag:"add",original_flag:!1};t.attachments.push(n)}}this.sumfile(t),document.querySelector(`[name="${l}"]`).value=null},previewFile(l){l.filename&&l.link&&this.axios({method:"get",url:l.link,baseURL:"",responseType:"blob"}).then(t=>{const a=new Blob([t.data],{type:this.assetsUtils.getTypeFile(l.filename)});window.open(URL.createObjectURL(a))})},deleteFile(l,t,a){t.flag=="edit"?t.flag="delete":l.attachments.splice(a,1),this.sumfile(l)},keyupModal(l){this.modal.optionSelect.book_recipient=[],this.axios.get("/master-data/message-template",{params:{keyword:l.target.value}}).then(t=>{t.data.data&&(t.data.data.meta.filter(a=>(a.value=a.id,a.name=a.receive_name,a)),this.modal.optionSelect.book_recipient=t.data.data.meta)})},modalClick(){this.modal.book_recipient?this.axios.get(`/master-data/message-template/${this.modal.book_recipient}`,{params:{keyword:this.modal.book_recipient}}).then(l=>{this.flgTable?(this.data.table[this.indexTable].greeting=l.data.data.title_name,this.data.table[this.indexTable].signature=l.data.data.signature):(this.data.greeting=l.data.data.title_name,this.data.signature=l.data.data.signature),this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1}).catch(l=>{this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}}):(this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1)},recommendClick(l){this.modal.book_recipient="",this.keyupModal({target:{value:""}}),this.modal.showModal=!0},amendClick(l){this.data.table.filter(t=>{l==1?(t.greeting=this.data.greeting,t.signature=this.data.signature):t.contact=this.data.contact})},back(){this.$router.push({name:"automail-sendmail",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},apiSendmailList(){this.data.table=[],this.showLoading=!0,this.axios.get(`/book-out-external/book-out-automail/series/${this.$route.params.id}`).then(l=>{this.showLoading=!1,l.data.data.filter(t=>{t.attachments.filter(a=>{a.flag="edit",a.file_size=parseInt(a.file_size),a.file={size:a.file_size*1024*1024}}),t.send_type_id=t.send_type_id?t.send_type_id:1,this.sumfile(t)}),this.data.table=l.data.data}).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})},apiMaster(){this.showLoading=!0;const l=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([l]).then(this.axios.spread((...t)=>{this.showLoading=!1;const a=t[0];this.data.fileType=[],a.data.data.filter(u=>{u.active_flag==1&&this.data.fileType.push(u.content_type)}),this.apiSendmailList()})).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}},mounted(){this.apiMaster()},watch:{"modal.showModal"(){document.body.style.overflow=this.modal.showModal?"hidden":""}}},E={class:"automail-sendmail-list"},R={class:"group-overflow"},N={class:"detail"},O={class:"group-head"},P=e("div",{class:"group-first"},[e("i",{class:"bi bi-envelope icon-envelope"}),e("div",{class:"name"},"ส่งหนังสือส่งออก ผ่านอีเมลอัตโนมัติ")],-1),K={class:"group-end"},G=e("img",{src:x,class:"icon-back"},null,-1),H=e("img",{src:I,class:"icon-line"},null,-1),J=e("div",{class:"line"},null,-1),Q={class:"group-detail"},W={class:"group-between"},X={class:"group-input w-50"},Y=e("div",{class:"name"},"คำขึ้นต้น ",-1),Z={class:"group-recommend"},$=e("i",{class:"bi bi-question icon-question"},null,-1),ee={class:"group-input"},te=e("div",{class:"name"},"คำลงท้าย ",-1),se={class:"d-flex"},le=e("i",{class:"bi bi-check icon-check"},null,-1),oe={class:"group-between"},ae={class:"group-input"},ne=e("div",{class:"name"},"ข้อมูลผู้ติดต่อ ",-1),ie={class:"d-flex"},de=e("i",{class:"bi bi-check icon-check"},null,-1),ce=e("div",{class:"line"},null,-1),_e={class:"group-body"},ue={class:"table-automail-sendmail-list"},re={class:"thead"},me={class:"thead-row"},he=e("th",{class:"col1"},"ลำดับ",-1),pe=e("th",{class:"col2"},[r("เลขที่ออก สลค."),e("br"),e("span",null,"ลงวันที่")],-1),be={class:"col3"},fe=e("br",null,null,-1),ge=e("span",{class:"ms-2"},"เรียน",-1),ve=e("br",null,null,-1),ye=e("span",{class:"ms-4"},"คำขึ้นต้น",-1),ke=e("br",null,null,-1),Ve=e("span",{class:"ms-6"},"คำลงท้าย",-1),we=e("br",null,null,-1),Ue=e("span",{class:"ms-8"},"ข้อมูลผู้ติดต่อ",-1),Ce={class:"col4"},Se=e("br",null,null,-1),Me=e("span",{class:"ms-2"},"สำเนาถึง (Cc)",-1),Fe=e("br",null,null,-1),ze=e("span",{class:"ms-4"},"สำเนาลับถึง (Bcc)",-1),Ae=e("br",null,null,-1),Te=e("span",{class:"ms-6"},"เรื่อง",-1),Le=e("br",null,null,-1),qe=e("span",{class:"ms-8"},"ข้อความ",-1),Be={class:"col5"},De=e("br",null,null,-1),xe=e("span",{class:"ms-2"},"ไฟล์ต้นเรื่อง",-1),Ie=e("br",null,null,-1),je=e("span",{class:"ms-4"},"ไฟล์แนบ",-1),Ee=e("th",{class:"col3"},"ข้อมูลผู้ติดต่อ",-1),Re=e("th",{class:"col4"},null,-1),Ne=e("th",{class:"col5"},"วิธีส่งไฟล์",-1),Oe={class:"col1"},Pe={class:"col2"},Ke=e("br",null,null,-1),Ge={class:"col3"},He={class:"new-line"},Je=e("div",{class:"name"},"ถึง",-1),Qe={class:"new-line"},We=e("div",{class:"name"},"เรียน",-1),Xe={class:"new-line"},Ye=e("div",{class:"name"},"คำขึ้นต้น",-1),Ze={class:"group-recommend"},$e=["onClick"],et=e("i",{class:"bi bi-question icon-question"},null,-1),tt={class:"new-line"},st=e("div",{class:"name"},"คำลงท้าย",-1),lt={class:"new-line"},ot=e("div",{class:"name"},"ชื่อหน่วยงานที่ส่งหนังสือ",-1),at={class:"new-line"},nt=e("div",{class:"name"},"ข้อมูลผู้ติดต่อ",-1),it={class:"new-line"},dt={class:"col4"},ct={class:"new-line"},_t=e("div",{class:"name"},[r("ส่งถึง (TO) "),e("span",{class:"required"},"*")],-1),ut={class:"new-line"},rt=e("div",{class:"name"},"สำเนาถึง (Cc)",-1),mt={class:"new-line"},ht=e("div",{class:"name"},"สำเนาลับถึง (Bcc)",-1),pt={class:"new-line"},bt=e("div",{class:"name"},"เรื่อง",-1),ft={class:"new-line"},gt=e("div",{class:"name"},"ข้อความ",-1),vt={class:"col5"},yt={class:"sum-size-file"},kt={class:"new-line"},Vt=e("div",{class:"name"},"วิธีการส่งไฟล์",-1),wt={class:"new-line"},Ut=e("div",{class:"name"},"ลิงก์ดาวน์โหลดเอกสาร",-1),Ct={class:"group-recommend"},St=e("button",{type:"button",class:"button-link none-pointer"},[e("i",{class:"bi bi-link-45deg icon-question"})],-1),Mt={class:"new-line"},Ft=e("div",{class:"name"},"ไฟล์ต้นเรื่อง",-1),zt={class:"d-flex"},At=["onClick"],Tt=e("i",{class:"bi bi-eye icon-eye"},null,-1),Lt=[Tt],qt={class:"new-line"},Bt={class:"name d-flex justify-content-between align-items-center mb-2"},Dt=e("div",null,"สิ่งที่แนบมาด้วย",-1),xt=["onChange","name"],It=["onClick"],jt=e("i",{class:"bi bi-plus icon-plus"},null,-1),Et={key:0,class:"d-flex mb-2"},Rt=["onClick"],Nt=e("i",{class:"bi bi-eye icon-eye"},null,-1),Ot=[Nt],Pt={key:1},Kt={class:"d-flex mb-2"},Gt=["onClick"],Ht=e("i",{class:"bi bi-eye icon-eye"},null,-1),Jt=[Ht],Qt=["onClick"],Wt=e("i",{class:"bi bi-trash icon-trash"},null,-1),Xt=[Wt],Yt={key:2},Zt={key:0,class:"tbody-row"},$t=e("td",{colspan:"5"},"ไม่มีข้อมูล",-1),es=[$t],ts=e("div",{class:"line"},null,-1),ss={class:"group-footer"},ls={class:"footer-right"},os=e("img",{src:V,alt:"times-circle",class:"icon-check-circle"},null,-1),as=e("button",{type:"submit",class:"button-success"},[e("img",{src:V,alt:"times-circle",class:"icon-check-circle"}),r(" บันทึกและส่ง ")],-1),ns={class:"modal-recommend"},is={class:"modal-class"},ds={class:"modal-center"},cs={class:"modal-size"},_s={class:"modal-title"},us=e("div",{class:"title-size"},"เลือกผู้รับหนังสือ",-1),rs=e("div",{class:"line"},null,-1),ms={class:"modal-detail"},hs={class:"group-input"},ps=e("div",{class:"name"},"ผู้รับหนังสือ ",-1),bs=e("div",{class:"line"},null,-1),fs={class:"group-footer"},gs=e("div",{class:"group-name"},[e("img",{src:D,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ยกเลิก")],-1),vs=[gs],ys=e("div",{class:"group-name"},[e("img",{src:V,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ตกลง")],-1),ks=[ys];function Vs(l,t,a,u,n,d){const c=f("cpn-input"),g=f("cpn-textArea"),M=f("cpn-select"),F=f("Form"),z=f("cpn-autoComplete"),A=f("cpn-modal-alert"),T=f("cpn-loading");return m(),h("div",E,[e("div",R,[e("div",N,[i(F,{onSubmit:t[9]||(t[9]=s=>d.save(2)),onInvalidSubmit:l.onInvalidSubmit},{default:q(()=>[e("div",O,[P,e("div",K,[e("button",{type:"button",class:"button-back",onClick:t[0]||(t[0]=s=>d.back())},[G,H,r(" ย้อนกลับ ")])])]),J,e("div",Q,[e("div",W,[e("div",X,[Y,e("div",Z,[i(c,{modelValue:n.data.greeting,"onUpdate:modelValue":t[1]||(t[1]=s=>n.data.greeting=s),name:"greeting",class:"input-recommend",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-recommend",onClick:t[2]||(t[2]=s=>d.recommendClick())},[$,r(" แนะนำ ")])])]),e("div",ee,[te,e("div",se,[i(c,{modelValue:n.data.signature,"onUpdate:modelValue":t[3]||(t[3]=s=>n.data.signature=s),name:"signature",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-check",onClick:t[4]||(t[4]=s=>d.amendClick(1))},[le,r(" ปรับปรุงทั้งหมด ")])])])]),e("div",oe,[e("div",ae,[ne,e("div",ie,[i(c,{modelValue:n.data.contact,"onUpdate:modelValue":t[5]||(t[5]=s=>n.data.contact=s),name:"contact",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-check",onClick:t[6]||(t[6]=s=>d.amendClick(2))},[de,r(" ปรับปรุงทั้งหมด ")])])])])]),ce,e("div",_e,[e("table",ue,[e("thead",re,[e("tr",me,[he,pe,p(e("th",be,[r("ถึง"),fe,ge,ve,ye,ke,Ve,we,Ue],512),[[b,!1]]),p(e("th",Ce,[r("ส่งถึง (To)"),Se,Me,Fe,ze,Ae,Te,Le,qe],512),[[b,!1]]),p(e("th",Be,[r("วิธีการส่งไฟล์"),De,xe,Ie,je],512),[[b,!1]]),Ee,Re,Ne])]),e("tbody",{class:B(["tbody",n.data.table.length>0?"tbody-top":""])},[(m(!0),h(U,null,C(n.data.table,(s,_)=>{var w;return m(),h("tr",{class:"tbody-row",key:_},[e("td",Oe,v(_+1),1),e("td",Pe,[r(v(s.book_out_document_number),1),Ke,r(v(s.as_of_date),1)]),e("td",Ge,[e("div",He,[Je,i(c,{modelValue:s.bookout.to,"onUpdate:modelValue":o=>s.bookout.to=o,name:"bookout-to"+_,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Qe,[We,i(c,{modelValue:s.bookout.greeting,"onUpdate:modelValue":o=>s.bookout.greeting=o,name:"bookout-greeting"+_,class:"input-recommend",placeholder:"ผู้รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Xe,[Ye,e("div",Ze,[i(c,{modelValue:s.greeting,"onUpdate:modelValue":o=>s.greeting=o,name:"greeting"+_,class:"input-recommend",placeholder:"กรุณาระบุ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-recommend",onClick:o=>(d.recommendClick(),n.indexTable=_,n.flgTable=!0)},[et,r(" แนะนำ ")],8,$e)])]),e("div",tt,[st,i(c,{modelValue:s.signature,"onUpdate:modelValue":o=>s.signature=o,name:"signature"+_},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",lt,[ot,i(c,{modelValue:s.department_name,"onUpdate:modelValue":o=>s.department_name=o,name:"department_name"+_},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",at,[nt,i(c,{modelValue:s.contact_name,"onUpdate:modelValue":o=>s.contact_name=o,name:"contact_name"+_,placeholder:"ชื่อส่วนราชการเจ้าของเรื่องหรือหน่วยงานที่ออกหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",it,[i(c,{modelValue:s.contact,"onUpdate:modelValue":o=>s.contact=o,name:"contact"+_,placeholder:"เบอร์โทร และชื่อผู้ติดต่อ"},null,8,["modelValue","onUpdate:modelValue","name"])])]),e("td",dt,[e("div",ct,[_t,i(c,{modelValue:s.to,"onUpdate:modelValue":o=>s.to=o,rules:"required",name:"to"+_},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",ut,[rt,i(c,{modelValue:s.cc,"onUpdate:modelValue":o=>s.cc=o,name:"cc"+_},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",mt,[ht,i(c,{modelValue:s.bcc,"onUpdate:modelValue":o=>s.bcc=o,name:"bcc"+_},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",pt,[bt,i(c,{modelValue:s.subject,"onUpdate:modelValue":o=>s.subject=o,name:"subject"+_},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",ft,[gt,i(g,{modelValue:s.message,"onUpdate:modelValue":o=>s.message=o,name:"message"+_,rows:"5"},null,8,["modelValue","onUpdate:modelValue","name"])])]),e("td",vt,[p(e("div",{class:"sum-size-file-error"}," คำเตือน: ขนาดไฟล์แนบรวม "+v(s.sumfile)+"MB เกินกว่า 25MB ระบบไม่สามารถส่งหนังสือโดยการแนบไฟล์ได้ ",513),[[b,n.errorFileSize]]),p(e("div",yt,[e("span",null,"ขนาดไฟล์รวม "+v(s.sumfile)+"MB",1)],512),[[b,!n.errorFileSize]]),e("div",kt,[Vt,i(M,{modelValue:s.send_type_id,"onUpdate:modelValue":o=>s.send_type_id=o,name:"send_type_id"+_,optionSelect:n.optionSelect.send_type_id,disabled:n.errorFileSize},null,8,["modelValue","onUpdate:modelValue","name","optionSelect","disabled"])]),e("div",wt,[Ut,e("div",Ct,[i(c,{modelValue:s.link,"onUpdate:modelValue":o=>s.link=o,name:"link"+_,class:"input-link",disabled:s.send_type_id==1,rules:n.errorFileSize||s.send_type_id==2?"required":"",placeholder:"กรุณาระบุ"},null,8,["modelValue","onUpdate:modelValue","name","disabled","rules"]),St])]),e("div",Mt,[Ft,e("div",zt,[i(c,{modelValue:s.main_file_name,"onUpdate:modelValue":o=>s.main_file_name=o,name:"main_file_name"+_,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-view",onClick:o=>d.previewFile({filename:s.main_file_name,link:s.main_file_path?l.backendport+"/"+s.main_file_path:""})},Lt,8,At)])]),e("div",qt,[e("div",Bt,[Dt,e("input",{type:"file",multiple:"",onChange:o=>d.fileChange("attachments"+_,s),name:"attachments"+_,style:{display:"none"},accept:"application/pdf"},null,40,xt),e("button",{type:"button",class:"button-file",onClick:o=>d.uploadFile("attachments"+_)},[jt,r(" แนบเอกสาร ")],8,It)]),s.copy_main_file_name?(m(),h("div",Et,[i(c,{modelValue:s.copy_main_file_name,"onUpdate:modelValue":o=>s.copy_main_file_name=o,name:"copy_main_file_name"+_,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-view",onClick:o=>d.previewFile({filename:s.copy_main_file_name,link:s.copy_main_file_path?l.backendport+"/"+s.copy_main_file_path:""})},Ot,8,Rt)])):S("",!0),((w=s==null?void 0:s.attachments.filter(o=>o.flag!="delete"))==null?void 0:w.length)>0||s.copy_main_file_name?(m(),h("div",Pt,[(m(!0),h(U,null,C(s.attachments,(o,y)=>p((m(),h("div",{key:y},[e("div",Kt,[i(c,{modelValue:o.filename,"onUpdate:modelValue":k=>o.filename=k,name:"filename"+y,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-view",onClick:k=>d.previewFile({filename:o.filename,link:o.filepath?l.backendport+"/"+o.filepath:o.link})},Jt,8,Gt),p(e("button",{type:"button",class:"button-del",onClick:k=>d.deleteFile(s,o,y)},Xt,8,Qt),[[b,!o.original_flag]])])])),[[b,o.flag!="delete"]])),128))])):(m(),h("div",Yt,[i(c,{modelValue:n.noData,"onUpdate:modelValue":t[7]||(t[7]=o=>n.noData=o),name:"noData"+_,disabled:!0},null,8,["modelValue","name"])]))])])])}),128)),n.data.table.length==0?(m(),h("tr",Zt,es)):S("",!0)],2)])]),ts,e("div",ss,[e("div",ls,[e("button",{type:"button",class:"button-primary",onClick:t[8]||(t[8]=s=>d.save(1))},[os,r(" บันทึกร่าง ")]),as])])]),_:1},8,["onInvalidSubmit"])])]),p(e("div",ns,[e("div",is,[e("div",ds,[e("div",cs,[e("div",_s,[us,e("i",{class:"bi bi-x-lg icon-close",onClick:t[10]||(t[10]=s=>n.modal.showModal=!1)})]),rs,e("div",ms,[e("div",hs,[ps,i(z,{modelValue:n.modal.book_recipient,"onUpdate:modelValue":t[11]||(t[11]=s=>n.modal.book_recipient=s),name:"book_recipient",optionSelect:n.modal.optionSelect.book_recipient,onKeyup:t[12]||(t[12]=s=>d.keyupModal(s)),placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),bs,e("div",fs,[e("button",{type:"button",onClick:t[13]||(t[13]=s=>n.modal.showModal=!1),class:"btn button-danger"},vs),e("button",{type:"submit",class:"btn button-success",onClick:t[14]||(t[14]=s=>d.modalClick())},ks)])])])])],512),[[b,n.modal.showModal]]),i(A,{modalAlert:n.modalAlert},null,8,["modalAlert"]),i(T,{show:n.showLoading},null,8,["show"])])}const Cs=L(j,[["render",Vs]]);export{Cs as default};
