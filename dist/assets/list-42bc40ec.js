import{_ as L,r as p,o as r,c as m,a as e,j as h,b as i,w as v,v as g,n as A,F as C,h as M,i as x,k,t as w,g as q}from"./index-0d489e4b.js";import{_ as D,a as z}from"./line-up-c54e1bbb.js";const B={name:"automail-sendmail-list",data(){return{noData:"ไม่มีสิ่งที่แนบมาด้วย",modalAlert:{showModal:!1,title:"",message:""},modal:{showModal:!1,book_recipient:"",optionSelect:{book_recipient:[]}},showLoading:!1,data:{salutation:"",postscript:"",contact_information:"",table:[],fileType:[]},optionSelect:{how_to_send_files:[{value:1,name:"แนบไฟล์ทั้งหมด ตามข้างล่างนี้"},{value:2,name:"ไม่แนบไฟล์ แต่ใช้ลิงค์ข้างล่างนี้แทน"}]},indexTable:0,flgTable:!1}},methods:{save(o){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${o==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0,t.uploadFileAll(o)}}},uploadFileAll(o){let t=this.assetsUtils.currentDate(),n=[];this.data.table.filter(d=>{var c;let a=[];((c=d==null?void 0:d.attachments)==null?void 0:c.length)>0?d.attachments.filter(_=>{let b=new FormData;b.append("file",_.file),b.append("dst",`${t.split("/")[0]+"-"+t.split("/")[1]+"-"+t.split("/")[2]}`),this.axios.post("/upload/single",b,{headers:{"Content-Type":"multipart/form-data"}}).then(f=>{item2.attach_filepath=f.data.data.path,a.push(!0),a.length==d.attachments.length&&n.push(!0),n.length==this.data.table.length&&this.callApiSave(o)}).catch(f=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:f.response.data.message}})}):n.push(!0)})},callApiSave(o){let t=this;this.showLoading=!0;let n={table:this.data.table,user_id:parseInt(localStorage.getItem("user_id"))};this.axios.put(`/booking-outx/${this.$route.params.id}`,n).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:o==1?"ทำการบันทึกแบบร่างสำเร็จแล้ว":"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(d=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})},sumfile(o){var n;let t=0;return(n=o==null?void 0:o.attachments)==null||n.filter(d=>{t+=d.file.size}),(t/1024/1024).toFixed(2)+" MB"},uploadFile(o){document.querySelector(`[name="${o}"]`).click()},fileChange(o,t){for(var n=0;n<document.querySelector(`[name="${o}"]`).files.length;n++){let d=document.querySelector(`[name="${o}"]`).files[n];if(this.data.fileType.indexOf(d.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(o=="attachments"&&(t!=null&&t.attachments||(t.attachments=[]),d.type=="application/pdf")){let a={filename:d.name,type:d.type,link:URL.createObjectURL(d),size:(d.size/1024/1024).toFixed(2)+" MB",file:d,flag:"add"};t.attachments.push(a)}}document.querySelector(`[name="${o}"]`).value=null},previewFile(o){o.filename&&o.link&&this.axios({method:"get",url:o.link,baseURL:"",responseType:"blob"}).then(t=>{const n=new Blob([t.data],{type:this.assetsUtils.getTypeFile(o.filename)});window.open(URL.createObjectURL(n))})},deleteFile(o,t,n){t.flag=="edit"?t.flag="delete":o.attachments.splice(n,1)},keyupModal(o){this.modal.optionSelect.book_recipient=[],this.axios.get("/master-data/subministry",{params:{keyword:o.target.value}}).then(t=>{t.data.data&&(t.data.data.filter(n=>(n.value=n.id,n)),this.modal.optionSelect.book_recipient=t.data.data)})},modalClick(){this.modal.book_recipient?this.axios.get("/master-data/subministry",{params:{keyword:this.modal.book_recipient}}).then(o=>{this.flgTable?(this.data.table[this.indexTable].table_dear="aa",this.data.table[this.indexTable].table_salutation="bb",this.data.table[this.indexTable].table_postscript="cc"):(this.data.salutation="test1",this.data.postscript="test2"),this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1}).catch(o=>{this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}}):(this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1)},recommendClick(o){this.modal.book_recipient="",this.keyupModal({target:{value:""}}),this.modal.showModal=!0},amendClick(o){this.data.table.filter(t=>{o==1?(t.table_salutation=this.data.salutation,t.table_postscript=this.data.postscript):t.table_contact_information=this.data.contact_information})},back(){this.$router.push({name:"automail-sendmail",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},apiSendmailList(){this.data.table=[],this.showLoading=!0,this.axios.get("/master-data/department-contact").then(o=>{this.showLoading=!1,this.data.table=o.data.data.meta}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},apiMaster(){this.showLoading=!0;const o=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([o]).then(this.axios.spread((...t)=>{this.showLoading=!1;const n=t[0];this.data.fileType=[],n.data.data.filter(d=>{d.active_flag==1&&this.data.fileType.push(d.content_type)}),this.apiSendmailList()})).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}},mounted(){this.apiMaster()},watch:{"modal.showModal"(){document.body.style.overflow=this.modal.showModal?"hidden":""}}},j={class:"automail-sendmail-list"},E={class:"group-overflow"},R={class:"detail"},N={class:"group-head"},O=e("div",{class:"group-first"},[e("i",{class:"bi bi-envelope icon-envelope"}),e("div",{class:"name"},"ส่งหนังสือส่งออก ผ่านอีเมลอัตโนมัติ")],-1),P={class:"group-end"},I=e("img",{src:D,class:"icon-back"},null,-1),K=e("img",{src:z,class:"icon-line"},null,-1),G=e("div",{class:"line"},null,-1),H={class:"group-detail"},J={class:"group-between"},Q={class:"group-input w-50"},W=e("div",{class:"name"},"คำขึ้นต้น ",-1),X={class:"group-recommend"},Y=e("i",{class:"bi bi-question icon-question"},null,-1),Z={class:"group-input"},$=e("div",{class:"name"},"คำลงท้าย ",-1),ee={class:"d-flex"},te=e("i",{class:"bi bi-check icon-check"},null,-1),se={class:"group-between"},le={class:"group-input"},oe=e("div",{class:"name"},"ข้อมูลผู้ติดต่อ ",-1),ae={class:"d-flex"},ne=e("i",{class:"bi bi-check icon-check"},null,-1),ie=e("div",{class:"line"},null,-1),de={class:"group-body"},ce={class:"table-automail-sendmail-list"},_e={class:"thead"},ue={class:"thead-row"},he=e("th",{class:"col1"},"ลำดับ",-1),re=e("th",{class:"col2"},[h("เลขที่ออก สลค."),e("br"),e("span",null,"ลงวันที่")],-1),me={class:"col3"},pe=e("br",null,null,-1),be=e("span",{class:"ms-2"},"เรียน",-1),fe=e("br",null,null,-1),ve=e("span",{class:"ms-4"},"คำขึ้นต้น",-1),ge=e("br",null,null,-1),ye=e("span",{class:"ms-6"},"คำลงท้าย",-1),Ve=e("br",null,null,-1),we=e("span",{class:"ms-8"},"ข้อมูลผู้ติดต่อ",-1),ke={class:"col4"},Ue=e("br",null,null,-1),Ce=e("span",{class:"ms-2"},"สำเนาถึง (Cc)",-1),Me=e("br",null,null,-1),Se=e("span",{class:"ms-4"},"สำเนาลับถึง (Bcc)",-1),Te=e("br",null,null,-1),Fe=e("span",{class:"ms-6"},"เรื่อง",-1),Le=e("br",null,null,-1),Ae=e("span",{class:"ms-8"},"ข้อความ",-1),xe={class:"col5"},qe=e("br",null,null,-1),De=e("span",{class:"ms-2"},"ไฟล์ต้นเรื่อง",-1),ze=e("br",null,null,-1),Be=e("span",{class:"ms-4"},"ไฟล์แนบ",-1),je=e("th",{class:"col3"},"ข้อมูลผู้ติดต่อ",-1),Ee=e("th",{class:"col4"},"ข้อความ",-1),Re=e("th",{class:"col5"},"วิธีส่งไฟล์",-1),Ne={class:"col1"},Oe={class:"col2"},Pe={class:"col3"},Ie={class:"new-line"},Ke=e("div",{class:"name"},"ถึง",-1),Ge={class:"new-line"},He=e("div",{class:"name"},"เรียน",-1),Je={class:"new-line"},Qe=e("div",{class:"name"},"คำขึ้นต้น",-1),We={class:"group-recommend"},Xe=["onClick"],Ye=e("i",{class:"bi bi-question icon-question"},null,-1),Ze={class:"new-line"},$e=e("div",{class:"name"},"คำลงท้าย",-1),et={class:"new-line"},tt=e("div",{class:"name"},"ข้อมูลผู้ติดต่อ",-1),st={class:"col4"},lt={class:"new-line"},ot=e("div",{class:"name"},"ส่งถึง (TO)",-1),at={class:"new-line"},nt=e("div",{class:"name"},"สำเนาถึง (Cc)",-1),it={class:"new-line"},dt=e("div",{class:"name"},"สำเนาลับถึง (Bcc)",-1),ct={class:"new-line"},_t=e("div",{class:"name"},"เรื่อง",-1),ut={class:"new-line"},ht=e("div",{class:"name"},"ข้อความ",-1),rt={class:"col5"},mt={class:"sum-size-file"},pt={class:"new-line"},bt=e("div",{class:"name"},"วิธีการส่งไฟล์",-1),ft={class:"new-line"},vt=e("div",{class:"name"},"ลิงค์ดาวน์โหลดเอกสาร",-1),gt={class:"group-recommend"},yt=e("button",{type:"button",class:"button-link none-pointer"},[e("i",{class:"bi bi-link-45deg icon-question"})],-1),Vt={class:"new-line"},wt=e("div",{class:"name"},"ไฟล์ต้นเรื่อง",-1),kt={class:"d-flex"},Ut=["onClick"],Ct=e("i",{class:"bi bi-eye icon-eye"},null,-1),Mt=[Ct],St={class:"new-line"},Tt=e("div",{class:"name"},"สำเนาคู่ฉบับ",-1),Ft={class:"d-flex"},Lt=["onClick"],At=e("i",{class:"bi bi-eye icon-eye"},null,-1),xt=[At],qt={class:"new-line"},Dt={class:"name d-flex justify-content-between align-items-center mb-2"},zt=e("div",null,"สิ่งที่แนบมาด้วย",-1),Bt=["onChange"],jt=e("i",{class:"bi bi-plus icon-plus"},null,-1),Et={class:"d-flex mb-2"},Rt=["onClick"],Nt=e("i",{class:"bi bi-eye icon-eye"},null,-1),Ot=[Nt],Pt=["onClick"],It=e("i",{class:"bi bi-trash icon-trash"},null,-1),Kt=[It],Gt={key:1},Ht={key:0,class:"tbody-row"},Jt=e("td",{colspan:"5"},"ไม่มีข้อมูล",-1),Qt=[Jt],Wt=e("div",{class:"line"},null,-1),Xt={class:"group-footer"},Yt={class:"footer-right"},Zt=e("img",{src:k,alt:"times-circle",class:"icon-check-circle"},null,-1),$t=e("img",{src:k,alt:"times-circle",class:"icon-check-circle"},null,-1),es={class:"modal-recommend"},ts={class:"modal-class"},ss={class:"modal-center"},ls={class:"modal-size"},os={class:"modal-title"},as=e("div",{class:"title-size"},"เลือกผู้รับหนังสือ",-1),ns=e("div",{class:"line"},null,-1),is={class:"modal-detail"},ds={class:"group-input"},cs=e("div",{class:"name"},"ผู้รับหนังสือ ",-1),_s=e("div",{class:"line"},null,-1),us={class:"group-footer"},hs=e("div",{class:"group-name"},[e("img",{src:q,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ยกเลิก")],-1),rs=[hs],ms=e("div",{class:"group-name"},[e("img",{src:k,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ตกลง")],-1),ps=[ms];function bs(o,t,n,d,a,c){const _=p("cpn-input"),b=p("cpn-textArea"),f=p("cpn-select"),S=p("cpn-autoComplete"),T=p("cpn-modal-alert"),F=p("cpn-loading");return r(),m("div",j,[e("div",E,[e("div",R,[e("div",N,[O,e("div",P,[e("button",{type:"button",class:"button-back",onClick:t[0]||(t[0]=s=>c.back())},[I,K,h(" ย้อนกลับ ")])])]),G,e("div",H,[e("div",J,[e("div",Q,[W,e("div",X,[i(_,{modelValue:a.data.salutation,"onUpdate:modelValue":t[1]||(t[1]=s=>a.data.salutation=s),name:"salutation",class:"input-recommend",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-recommend",onClick:t[2]||(t[2]=s=>c.recommendClick())},[Y,h(" แนะนำ ")])])]),e("div",Z,[$,e("div",ee,[i(_,{modelValue:a.data.postscript,"onUpdate:modelValue":t[3]||(t[3]=s=>a.data.postscript=s),name:"postscript",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-check",onClick:t[4]||(t[4]=s=>c.amendClick(1))},[te,h(" ปรับปรุงทั้งหมด ")])])])]),e("div",se,[e("div",le,[oe,e("div",ae,[i(_,{modelValue:a.data.contact_information,"onUpdate:modelValue":t[5]||(t[5]=s=>a.data.contact_information=s),name:"contact_information",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-check",onClick:t[6]||(t[6]=s=>c.amendClick(2))},[ne,h(" ปรับปรุงทั้งหมด ")])])])])]),ie,e("div",de,[e("table",ce,[e("thead",_e,[e("tr",ue,[he,re,v(e("th",me,[h("ถึง"),pe,be,fe,ve,ge,ye,Ve,we],512),[[g,!1]]),v(e("th",ke,[h("ส่งถึง (To)"),Ue,Ce,Me,Se,Te,Fe,Le,Ae],512),[[g,!1]]),v(e("th",xe,[h("วิธีการส่งไฟล์"),qe,De,ze,Be],512),[[g,!1]]),je,Ee,Re])]),e("tbody",{class:A(["tbody",a.data.table.length>0?"tbody-top":""])},[(r(!0),m(C,null,M(a.data.table,(s,u)=>{var U;return r(),m("tr",{class:"tbody-row",key:u},[e("td",Ne,w(u+1),1),e("td",Oe,w(s.department_name),1),e("td",Pe,[e("div",Ie,[Ke,i(_,{modelValue:s.table_to,"onUpdate:modelValue":l=>s.table_to=l,name:"table_to"+u,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Ge,[He,i(_,{modelValue:s.table_dear,"onUpdate:modelValue":l=>s.table_dear=l,name:"table_dear"+u,class:"input-recommend",placeholder:"กรุณาระบุ"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Je,[Qe,e("div",We,[i(_,{modelValue:s.table_salutation,"onUpdate:modelValue":l=>s.table_salutation=l,name:"table_salutation"+u,class:"input-recommend",placeholder:"กรุณาระบุ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-recommend",onClick:l=>(c.recommendClick(),a.indexTable=u,a.flgTable=!0)},[Ye,h(" แนะนำ ")],8,Xe)])]),e("div",Ze,[$e,i(_,{modelValue:s.table_postscript,"onUpdate:modelValue":l=>s.table_postscript=l,name:"table_postscript"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",et,[tt,i(_,{modelValue:s.table_contact_information,"onUpdate:modelValue":l=>s.table_contact_information=l,name:"table_contact_information"+u},null,8,["modelValue","onUpdate:modelValue","name"])])]),e("td",st,[e("div",lt,[ot,i(_,{modelValue:s.table_to,"onUpdate:modelValue":l=>s.table_to=l,name:"table_to"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",at,[nt,i(_,{modelValue:s.table_cc,"onUpdate:modelValue":l=>s.table_cc=l,name:"table_cc"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",it,[dt,i(_,{modelValue:s.table_bcc,"onUpdate:modelValue":l=>s.table_bcc=l,name:"table_bcc"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",ct,[_t,i(_,{modelValue:s.table_subject,"onUpdate:modelValue":l=>s.table_subject=l,name:"table_subject"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",ut,[ht,i(b,{modelValue:s.table_message,"onUpdate:modelValue":l=>s.table_message=l,name:"table_message"+u,rows:"5"},null,8,["modelValue","onUpdate:modelValue","name"])])]),e("td",rt,[e("div",mt,[e("span",null,"ขนาดไฟล์รวม "+w(c.sumfile(s)),1)]),e("div",pt,[bt,i(f,{modelValue:s.how_to_send_files,"onUpdate:modelValue":l=>s.how_to_send_files=l,name:"how_to_send_files"+u,optionSelect:a.optionSelect.how_to_send_files},null,8,["modelValue","onUpdate:modelValue","name","optionSelect"])]),e("div",ft,[vt,e("div",gt,[i(_,{modelValue:s.link_download,"onUpdate:modelValue":l=>s.link_download=l,name:"link_download"+u,class:"input-link",disabled:s.how_to_send_files==1,placeholder:"กรุณาระบุ"},null,8,["modelValue","onUpdate:modelValue","name","disabled"]),yt])]),e("div",Vt,[wt,e("div",kt,[i(_,{modelValue:s.original_file,"onUpdate:modelValue":l=>s.original_file=l,name:"original_file"+u,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-view",onClick:l=>c.previewFile(s)},Mt,8,Ut)])]),e("div",St,[Tt,e("div",Ft,[i(_,{modelValue:s.duplicate_copy,"onUpdate:modelValue":l=>s.duplicate_copy=l,name:"duplicate_copy"+u,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-view",onClick:l=>c.previewFile(s)},xt,8,Lt)])]),e("div",qt,[e("div",Dt,[zt,e("input",{type:"file",multiple:"",onChange:l=>c.fileChange("attachments",s),name:"attachments",style:{display:"none"},accept:"application/pdf"},null,40,Bt),e("button",{type:"button",class:"button-file",onClick:t[7]||(t[7]=l=>c.uploadFile("attachments"))},[jt,h(" แนบเอกสาร ")])]),((U=s==null?void 0:s.attachments)==null?void 0:U.length)>0?(r(!0),m(C,{key:0},M(s.attachments.filter(l=>l.flag!="delete"),(l,y)=>(r(),m("div",{key:y},[e("div",Et,[i(_,{modelValue:l.filename,"onUpdate:modelValue":V=>l.filename=V,name:"filename"+y,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-view",onClick:V=>c.previewFile(l)},Ot,8,Rt),e("button",{type:"button",class:"button-del",onClick:V=>c.deleteFile(s,l,y)},Kt,8,Pt)])]))),128)):(r(),m("div",Gt,[i(_,{modelValue:a.noData,"onUpdate:modelValue":t[8]||(t[8]=l=>a.noData=l),name:"noData"+u,disabled:!0},null,8,["modelValue","name"])]))])])])}),128)),a.data.table.length==0?(r(),m("tr",Ht,Qt)):x("",!0)],2)])]),Wt,e("div",Xt,[e("div",Yt,[e("button",{type:"button",class:"button-primary",onClick:t[9]||(t[9]=s=>c.save(1))},[Zt,h(" บันทึกร่าง ")]),e("button",{type:"button",class:"button-success",onClick:t[10]||(t[10]=s=>c.save(2))},[$t,h(" บันทึกและส่ง ")])])])])]),v(e("div",es,[e("div",ts,[e("div",ss,[e("div",ls,[e("div",os,[as,e("i",{class:"bi bi-x-lg icon-close",onClick:t[11]||(t[11]=s=>a.modal.showModal=!1)})]),ns,e("div",is,[e("div",ds,[cs,i(S,{modelValue:a.modal.book_recipient,"onUpdate:modelValue":t[12]||(t[12]=s=>a.modal.book_recipient=s),name:"book_recipient",optionSelect:a.modal.optionSelect.book_recipient,onKeyup:t[13]||(t[13]=s=>c.keyupModal(s)),placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),_s,e("div",us,[e("button",{type:"button",onClick:t[14]||(t[14]=s=>a.modal.showModal=!1),class:"btn button-danger"},rs),e("button",{type:"submit",class:"btn button-success",onClick:t[15]||(t[15]=s=>c.modalClick())},ps)])])])])],512),[[g,a.modal.showModal]]),i(T,{modalAlert:a.modalAlert},null,8,["modalAlert"]),i(F,{show:a.showLoading},null,8,["show"])])}const gs=L(B,[["render",bs]]);export{gs as default};
