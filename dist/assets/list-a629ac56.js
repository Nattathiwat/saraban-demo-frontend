import{_ as F,r as b,o as m,c as h,a as e,j as r,b as d,w as g,v as f,n as L,F as U,h as C,i as x,k as V,t as v,g as q}from"./index-8500e484.js";import{_ as z,a as D}from"./line-up-c54e1bbb.js";const B={name:"automail-sendmail-list",data(){return{noData:"ไม่มีสิ่งที่แนบมาด้วย",modalAlert:{showModal:!1,title:"",message:""},modal:{showModal:!1,book_recipient:"",optionSelect:{book_recipient:[]}},showLoading:!1,data:{greeting:"",signature:"",contact:"โทร. 0 2280 9000 ต่อ .... (ชื่อผู้ติดต่อ ...)",table:[],fileType:[]},optionSelect:{send_type_id:[{value:1,name:"แนบไฟล์ทั้งหมด ตามข้างล่างนี้"},{value:2,name:"ไม่แนบไฟล์ แต่ใช้ลิงค์ข้างล่างนี้แทน"}]},indexTable:0,flgTable:!1}},methods:{save(l){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${l==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0,t.uploadFileAll(l)}}},uploadFileAll(l){let t=this.assetsUtils.currentDate(),a=[],_=[];this.data.table.filter(n=>{n.attachments.filter(i=>{i.file&&i.flag=="add"&&a.push(!0)})}),a.length>0?this.data.table.filter(n=>{n.attachments.filter(i=>{let c=new FormData;c.append("file",i.file),c.append("dst",`${t.split("/")[0]+"-"+t.split("/")[1]+"-"+t.split("/")[2]}`),this.axios.post("/upload/single",c,{headers:{"Content-Type":"multipart/form-data"}}).then(p=>{i.filename=p.data.data.filename,i.filepath=p.data.data.path,_.push(!0),a.length==_.length&&this.callApiSave(l)}).catch(p=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:p.response.data.message}})})}):this.callApiSave(l)},callApiSave(l){let t=this;this.showLoading=!0,this.data.table.filter(a=>{a.user_id=parseInt(localStorage.getItem("user_id")),a.flag=l==1?"draft":""}),this.axios.post("/book-out-external/book-out-automail/series",this.data.table).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:l==1?"ทำการบันทึกแบบร่างสำเร็จแล้ว":"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},sumfile(l){var a;let t=0;return(a=l==null?void 0:l.attachments)==null||a.filter(_=>{t+=_.file.size}),(t/1024/1024).toFixed(2)},uploadFile(l){document.querySelector(`[name="${l}"]`).click()},fileChange(l,t){for(var a=0;a<document.querySelector(`[name="${l}"]`).files.length;a++){let _=document.querySelector(`[name="${l}"]`).files[a];if(this.data.fileType.indexOf(_.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(l=="attachments"&&(t!=null&&t.attachments||(t.attachments=[]),_.type=="application/pdf"))if(+this.sumfile(t)+ +(_.size/1024/1024).toFixed(2)<=25){let n={filename:_.name,type:_.type,link:URL.createObjectURL(_),size:(_.size/1024/1024).toFixed(2)+" MB",file_size:(_.size/1024/1024).toFixed(2),file:_,flag:"add"};t.attachments.push(n)}else this.modalAlert={showModal:!0,type:"error",message:"ขนาดไฟล์รวมเกิน 25MB"},document.querySelector(`[name="${l}"]`).value=null}document.querySelector(`[name="${l}"]`).value=null},previewFile(l){l.filename&&l.link&&this.axios({method:"get",url:l.link,baseURL:"",responseType:"blob"}).then(t=>{const a=new Blob([t.data],{type:this.assetsUtils.getTypeFile(l.filename)});window.open(URL.createObjectURL(a))})},deleteFile(l,t,a){t.flag=="edit"?t.flag="delete":l.attachments.splice(a,1)},keyupModal(l){this.modal.optionSelect.book_recipient=[],this.axios.get("/master-data/message-template",{params:{keyword:l.target.value}}).then(t=>{t.data.data&&(t.data.data.meta.filter(a=>(a.value=a.id,a.name=a.receive_name,a)),this.modal.optionSelect.book_recipient=t.data.data.meta)})},modalClick(){this.modal.book_recipient?this.axios.get(`/master-data/message-template/${this.modal.book_recipient}`,{params:{keyword:this.modal.book_recipient}}).then(l=>{this.flgTable?(this.data.table[this.indexTable].receive_name=l.data.data.receive_person_name,this.data.table[this.indexTable].greeting=l.data.data.title_name,this.data.table[this.indexTable].signature=l.data.data.signature):(this.data.greeting=l.data.data.title_name,this.data.signature=l.data.data.signature),this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1}).catch(l=>{this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}}):(this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1)},recommendClick(l){this.modal.book_recipient="",this.keyupModal({target:{value:""}}),this.modal.showModal=!0},amendClick(l){this.data.table.filter(t=>{l==1?(t.greeting=this.data.greeting,t.signature=this.data.signature):t.contact=this.data.contact})},back(){this.$router.push({name:"automail-sendmail",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},apiSendmailList(){this.data.table=[],this.showLoading=!0,this.axios.get(`/book-out-external/book-out-automail/series/${this.$route.params.id}`).then(l=>{this.showLoading=!1,l.data.data.filter(t=>{t.attachments.filter(a=>{a.flag="edit"})}),this.data.table=l.data.data}).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})},apiMaster(){this.showLoading=!0;const l=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([l]).then(this.axios.spread((...t)=>{this.showLoading=!1;const a=t[0];this.data.fileType=[],a.data.data.filter(_=>{_.active_flag==1&&this.data.fileType.push(_.content_type)}),this.apiSendmailList()})).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}},mounted(){this.apiMaster()},watch:{"modal.showModal"(){document.body.style.overflow=this.modal.showModal?"hidden":""}}},j={class:"automail-sendmail-list"},E={class:"group-overflow"},R={class:"detail"},N={class:"group-head"},O=e("div",{class:"group-first"},[e("i",{class:"bi bi-envelope icon-envelope"}),e("div",{class:"name"},"ส่งหนังสือส่งออก ผ่านอีเมลอัตโนมัติ")],-1),P={class:"group-end"},I=e("img",{src:z,class:"icon-back"},null,-1),K=e("img",{src:D,class:"icon-line"},null,-1),G=e("div",{class:"line"},null,-1),H={class:"group-detail"},J={class:"group-between"},Q={class:"group-input w-50"},W=e("div",{class:"name"},"คำขึ้นต้น ",-1),X={class:"group-recommend"},Y=e("i",{class:"bi bi-question icon-question"},null,-1),Z={class:"group-input"},$=e("div",{class:"name"},"คำลงท้าย ",-1),ee={class:"d-flex"},te=e("i",{class:"bi bi-check icon-check"},null,-1),se={class:"group-between"},le={class:"group-input"},oe=e("div",{class:"name"},"ข้อมูลผู้ติดต่อ ",-1),ae={class:"d-flex"},ne=e("i",{class:"bi bi-check icon-check"},null,-1),ie=e("div",{class:"line"},null,-1),de={class:"group-body"},ce={class:"table-automail-sendmail-list"},_e={class:"thead"},ue={class:"thead-row"},re=e("th",{class:"col1"},"ลำดับ",-1),me=e("th",{class:"col2"},[r("เลขที่ออก สลค."),e("br"),e("span",null,"ลงวันที่")],-1),he={class:"col3"},pe=e("br",null,null,-1),be=e("span",{class:"ms-2"},"เรียน",-1),ge=e("br",null,null,-1),fe=e("span",{class:"ms-4"},"คำขึ้นต้น",-1),ve=e("br",null,null,-1),ye=e("span",{class:"ms-6"},"คำลงท้าย",-1),ke=e("br",null,null,-1),Ve=e("span",{class:"ms-8"},"ข้อมูลผู้ติดต่อ",-1),we={class:"col4"},Ue=e("br",null,null,-1),Ce=e("span",{class:"ms-2"},"สำเนาถึง (Cc)",-1),Me=e("br",null,null,-1),Se=e("span",{class:"ms-4"},"สำเนาลับถึง (Bcc)",-1),Ae=e("br",null,null,-1),Te=e("span",{class:"ms-6"},"เรื่อง",-1),Fe=e("br",null,null,-1),Le=e("span",{class:"ms-8"},"ข้อความ",-1),xe={class:"col5"},qe=e("br",null,null,-1),ze=e("span",{class:"ms-2"},"ไฟล์ต้นเรื่อง",-1),De=e("br",null,null,-1),Be=e("span",{class:"ms-4"},"ไฟล์แนบ",-1),je=e("th",{class:"col3"},"ข้อมูลผู้ติดต่อ",-1),Ee=e("th",{class:"col4"},null,-1),Re=e("th",{class:"col5"},"วิธีส่งไฟล์",-1),Ne={class:"col1"},Oe={class:"col2"},Pe=e("br",null,null,-1),Ie={class:"col3"},Ke={class:"new-line"},Ge=e("div",{class:"name"},"ถึง",-1),He={class:"new-line"},Je=e("div",{class:"name"},"เรียน",-1),Qe={class:"new-line"},We=e("div",{class:"name"},"คำขึ้นต้น",-1),Xe={class:"group-recommend"},Ye=["onClick"],Ze=e("i",{class:"bi bi-question icon-question"},null,-1),$e={class:"new-line"},et=e("div",{class:"name"},"คำลงท้าย",-1),tt={class:"new-line"},st=e("div",{class:"name"},"ข้อมูลผู้ติดต่อ",-1),lt={class:"col4"},ot={class:"new-line"},at=e("div",{class:"name"},"ส่งถึง (TO)",-1),nt={class:"new-line"},it=e("div",{class:"name"},"สำเนาถึง (Cc)",-1),dt={class:"new-line"},ct=e("div",{class:"name"},"สำเนาลับถึง (Bcc)",-1),_t={class:"new-line"},ut=e("div",{class:"name"},"เรื่อง",-1),rt={class:"new-line"},mt=e("div",{class:"name"},"ข้อความ",-1),ht={class:"col5"},pt={class:"sum-size-file"},bt={class:"new-line"},gt=e("div",{class:"name"},"วิธีการส่งไฟล์",-1),ft={class:"new-line"},vt=e("div",{class:"name"},"ลิงค์ดาวน์โหลดเอกสาร",-1),yt={class:"group-recommend"},kt=e("button",{type:"button",class:"button-link none-pointer"},[e("i",{class:"bi bi-link-45deg icon-question"})],-1),Vt={class:"new-line"},wt=e("div",{class:"name"},"ไฟล์ต้นเรื่อง",-1),Ut={class:"d-flex"},Ct=["onClick"],Mt=e("i",{class:"bi bi-eye icon-eye"},null,-1),St=[Mt],At={class:"new-line"},Tt=e("div",{class:"name"},"สำเนาคู่ฉบับ",-1),Ft={class:"d-flex"},Lt=["onClick"],xt=e("i",{class:"bi bi-eye icon-eye"},null,-1),qt=[xt],zt={class:"new-line"},Dt={class:"name d-flex justify-content-between align-items-center mb-2"},Bt=e("div",null,"สิ่งที่แนบมาด้วย",-1),jt=["onChange"],Et=e("i",{class:"bi bi-plus icon-plus"},null,-1),Rt={class:"d-flex mb-2"},Nt=["onClick"],Ot=e("i",{class:"bi bi-eye icon-eye"},null,-1),Pt=[Ot],It=["onClick"],Kt=e("i",{class:"bi bi-trash icon-trash"},null,-1),Gt=[Kt],Ht={key:1},Jt={key:0,class:"tbody-row"},Qt=e("td",{colspan:"5"},"ไม่มีข้อมูล",-1),Wt=[Qt],Xt=e("div",{class:"line"},null,-1),Yt={class:"group-footer"},Zt={class:"footer-right"},$t=e("img",{src:V,alt:"times-circle",class:"icon-check-circle"},null,-1),es=e("img",{src:V,alt:"times-circle",class:"icon-check-circle"},null,-1),ts={class:"modal-recommend"},ss={class:"modal-class"},ls={class:"modal-center"},os={class:"modal-size"},as={class:"modal-title"},ns=e("div",{class:"title-size"},"เลือกผู้รับหนังสือ",-1),is=e("div",{class:"line"},null,-1),ds={class:"modal-detail"},cs={class:"group-input"},_s=e("div",{class:"name"},"ผู้รับหนังสือ ",-1),us=e("div",{class:"line"},null,-1),rs={class:"group-footer"},ms=e("div",{class:"group-name"},[e("img",{src:q,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ยกเลิก")],-1),hs=[ms],ps=e("div",{class:"group-name"},[e("img",{src:V,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ตกลง")],-1),bs=[ps];function gs(l,t,a,_,n,i){const c=b("cpn-input"),p=b("cpn-textArea"),M=b("cpn-select"),S=b("cpn-autoComplete"),A=b("cpn-modal-alert"),T=b("cpn-loading");return m(),h("div",j,[e("div",E,[e("div",R,[e("div",N,[O,e("div",P,[e("button",{type:"button",class:"button-back",onClick:t[0]||(t[0]=s=>i.back())},[I,K,r(" ย้อนกลับ ")])])]),G,e("div",H,[e("div",J,[e("div",Q,[W,e("div",X,[d(c,{modelValue:n.data.greeting,"onUpdate:modelValue":t[1]||(t[1]=s=>n.data.greeting=s),name:"greeting",class:"input-recommend",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-recommend",onClick:t[2]||(t[2]=s=>i.recommendClick())},[Y,r(" แนะนำ ")])])]),e("div",Z,[$,e("div",ee,[d(c,{modelValue:n.data.signature,"onUpdate:modelValue":t[3]||(t[3]=s=>n.data.signature=s),name:"signature",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-check",onClick:t[4]||(t[4]=s=>i.amendClick(1))},[te,r(" ปรับปรุงทั้งหมด ")])])])]),e("div",se,[e("div",le,[oe,e("div",ae,[d(c,{modelValue:n.data.contact,"onUpdate:modelValue":t[5]||(t[5]=s=>n.data.contact=s),name:"contact",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-check",onClick:t[6]||(t[6]=s=>i.amendClick(2))},[ne,r(" ปรับปรุงทั้งหมด ")])])])])]),ie,e("div",de,[e("table",ce,[e("thead",_e,[e("tr",ue,[re,me,g(e("th",he,[r("ถึง"),pe,be,ge,fe,ve,ye,ke,Ve],512),[[f,!1]]),g(e("th",we,[r("ส่งถึง (To)"),Ue,Ce,Me,Se,Ae,Te,Fe,Le],512),[[f,!1]]),g(e("th",xe,[r("วิธีการส่งไฟล์"),qe,ze,De,Be],512),[[f,!1]]),je,Ee,Re])]),e("tbody",{class:L(["tbody",n.data.table.length>0?"tbody-top":""])},[(m(!0),h(U,null,C(n.data.table,(s,u)=>{var w;return m(),h("tr",{class:"tbody-row",key:u},[e("td",Ne,v(u+1),1),e("td",Oe,[r(v(s.book_out_document_number),1),Pe,r(v(s.as_of_date),1)]),e("td",Ie,[e("div",Ke,[Ge,d(c,{modelValue:s.contact_name,"onUpdate:modelValue":o=>s.contact_name=o,name:"contact_name"+u,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",He,[Je,d(c,{modelValue:s.receive_name,"onUpdate:modelValue":o=>s.receive_name=o,name:"receive_name"+u,class:"input-recommend",placeholder:"ผู้รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Qe,[We,e("div",Xe,[d(c,{modelValue:s.greeting,"onUpdate:modelValue":o=>s.greeting=o,name:"greeting"+u,class:"input-recommend",placeholder:"กรุณาระบุ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-recommend",onClick:o=>(i.recommendClick(),n.indexTable=u,n.flgTable=!0)},[Ze,r(" แนะนำ ")],8,Ye)])]),e("div",$e,[et,d(c,{modelValue:s.signature,"onUpdate:modelValue":o=>s.signature=o,name:"signature"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",tt,[st,d(c,{modelValue:s.contact,"onUpdate:modelValue":o=>s.contact=o,name:"contact"+u},null,8,["modelValue","onUpdate:modelValue","name"])])]),e("td",lt,[e("div",ot,[at,d(c,{modelValue:s.to,"onUpdate:modelValue":o=>s.to=o,name:"to"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",nt,[it,d(c,{modelValue:s.cc,"onUpdate:modelValue":o=>s.cc=o,name:"cc"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",dt,[ct,d(c,{modelValue:s.bcc,"onUpdate:modelValue":o=>s.bcc=o,name:"bcc"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",_t,[ut,d(c,{modelValue:s.subject,"onUpdate:modelValue":o=>s.subject=o,name:"subject"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",rt,[mt,d(p,{modelValue:s.message,"onUpdate:modelValue":o=>s.message=o,name:"message"+u,rows:"5"},null,8,["modelValue","onUpdate:modelValue","name"])])]),e("td",ht,[e("div",pt,[e("span",null,"ขนาดไฟล์รวม "+v(i.sumfile(s))+"MB",1)]),e("div",bt,[gt,d(M,{modelValue:s.send_type_id,"onUpdate:modelValue":o=>s.send_type_id=o,name:"send_type_id"+u,optionSelect:n.optionSelect.send_type_id},null,8,["modelValue","onUpdate:modelValue","name","optionSelect"])]),e("div",ft,[vt,e("div",yt,[d(c,{modelValue:s.link,"onUpdate:modelValue":o=>s.link=o,name:"link"+u,class:"input-link",disabled:s.send_type_id==1,placeholder:"กรุณาระบุ"},null,8,["modelValue","onUpdate:modelValue","name","disabled"]),kt])]),e("div",Vt,[wt,e("div",Ut,[d(c,{modelValue:s.main_file_name,"onUpdate:modelValue":o=>s.main_file_name=o,name:"main_file_name"+u,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-view",onClick:o=>i.previewFile({filename:s.main_file_name,link:s.main_file_path?l.backendport+"/"+s.main_file_path:""})},St,8,Ct)])]),e("div",At,[Tt,e("div",Ft,[d(c,{modelValue:s.copy_main_file_name,"onUpdate:modelValue":o=>s.copy_main_file_name=o,name:"copy_main_file_name"+u,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-view",onClick:o=>i.previewFile({filename:s.copy_main_file_name,link:s.copy_main_file_path?l.backendport+"/"+s.copy_main_file_path:""})},qt,8,Lt)])]),e("div",zt,[e("div",Dt,[Bt,e("input",{type:"file",multiple:"",onChange:o=>i.fileChange("attachments",s),name:"attachments",style:{display:"none"},accept:"application/pdf"},null,40,jt),e("button",{type:"button",class:"button-file",onClick:t[7]||(t[7]=o=>i.uploadFile("attachments"))},[Et,r(" แนบเอกสาร ")])]),((w=s==null?void 0:s.attachments)==null?void 0:w.length)>0?(m(!0),h(U,{key:0},C(s.attachments.filter(o=>o.flag!="delete"),(o,y)=>(m(),h("div",{key:y},[e("div",Rt,[d(c,{modelValue:o.filename,"onUpdate:modelValue":k=>o.filename=k,name:"filename"+y,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-view",onClick:k=>i.previewFile({filename:o.filename,link:o.filepath?l.backendport+"/"+o.filepath:""})},Pt,8,Nt),e("button",{type:"button",class:"button-del",onClick:k=>i.deleteFile(s,o,y)},Gt,8,It)])]))),128)):(m(),h("div",Ht,[d(c,{modelValue:n.noData,"onUpdate:modelValue":t[8]||(t[8]=o=>n.noData=o),name:"noData"+u,disabled:!0},null,8,["modelValue","name"])]))])])])}),128)),n.data.table.length==0?(m(),h("tr",Jt,Wt)):x("",!0)],2)])]),Xt,e("div",Yt,[e("div",Zt,[e("button",{type:"button",class:"button-primary",onClick:t[9]||(t[9]=s=>i.save(1))},[$t,r(" บันทึกร่าง ")]),e("button",{type:"button",class:"button-success",onClick:t[10]||(t[10]=s=>i.save(2))},[es,r(" บันทึกและส่ง ")])])])])]),g(e("div",ts,[e("div",ss,[e("div",ls,[e("div",os,[e("div",as,[ns,e("i",{class:"bi bi-x-lg icon-close",onClick:t[11]||(t[11]=s=>n.modal.showModal=!1)})]),is,e("div",ds,[e("div",cs,[_s,d(S,{modelValue:n.modal.book_recipient,"onUpdate:modelValue":t[12]||(t[12]=s=>n.modal.book_recipient=s),name:"book_recipient",optionSelect:n.modal.optionSelect.book_recipient,onKeyup:t[13]||(t[13]=s=>i.keyupModal(s)),placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),us,e("div",rs,[e("button",{type:"button",onClick:t[14]||(t[14]=s=>n.modal.showModal=!1),class:"btn button-danger"},hs),e("button",{type:"submit",class:"btn button-success",onClick:t[15]||(t[15]=s=>i.modalClick())},bs)])])])])],512),[[f,n.modal.showModal]]),d(A,{modalAlert:n.modalAlert},null,8,["modalAlert"]),d(T,{show:n.showLoading},null,8,["show"])])}const ys=F(B,[["render",gs]]);export{ys as default};
