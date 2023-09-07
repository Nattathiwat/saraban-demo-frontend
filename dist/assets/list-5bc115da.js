import{_ as z,r as p,o as r,c as h,a as e,b as d,d as q,w as g,v as f,j as m,n as x,F as U,h as C,t as v,i as S,k as V,g as D}from"./index-ce5d5a2c.js";import{_ as B,a as I}from"./line-up-c54e1bbb.js";const j={name:"automail-sendmail-list",data(){return{noData:"ไม่มีสิ่งที่แนบมาด้วย",modalAlert:{showModal:!1,title:"",message:""},modal:{showModal:!1,book_recipient:"",optionSelect:{book_recipient:[]}},showLoading:!1,data:{greeting:"",signature:"",contact:"",table:[],fileType:[]},optionSelect:{send_type_id:[{value:1,name:"แนบไฟล์ทั้งหมด ตามข้างล่างนี้"},{value:2,name:"ไม่แนบไฟล์ แต่ใช้ลิงก์ข้างล่างนี้แทน"}]},indexTable:0,flgTable:!1}},methods:{save(l){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${l==1?"บันทึกแบบร่าง":"บันทึกและส่งต่อ"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0,t.uploadFileAll(l)}}},uploadFileAll(l){let t=this.assetsUtils.currentDate(),o=[],c=[];this.data.table.filter(n=>{n.attachments.filter(i=>{i.file&&i.flag=="add"&&o.push(!0)})}),o.length>0?this.data.table.filter(n=>{n.attachments.filter(i=>{if(i.file&&i.flag=="add"){let _=new FormData;_.append("file",i.file),_.append("dst",`${t.split("/")[0]+"-"+t.split("/")[1]+"-"+t.split("/")[2]}`),this.axios.post("/upload/single",_,{headers:{"Content-Type":"multipart/form-data"}}).then(b=>{i.filename=b.data.data.filename,i.filepath=b.data.data.path,c.push(!0),o.length==c.length&&this.callApiSave(l)}).catch(b=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:b.response.data.message}})}})}):this.callApiSave(l)},callApiSave(l){let t=this;this.showLoading=!0,this.data.table.filter(o=>{o.user_id=parseInt(localStorage.getItem("user_id")),o.is_draft=l==1,o.flag=l==1?"draft":"",o.greeting2=o.bookout.greeting,o.department_id=parseInt(localStorage.getItem("department_id")),o.attachments.filter(c=>{c.flag=c.flag=="edit"?o.id==0?"add":"":c.flag})}),this.axios.post("/book-out-external/book-out-automail/series",this.data.table).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:l==1?"ทำการบันทึกแบบร่างสำเร็จแล้ว":"ทำการบันทึกและส่งต่อสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},sumfile(l){var o;let t=0;return t+=l.copy_main_file_size?+l.copy_main_file_size:0,t+=l.main_file_size?+l.main_file_size:0,(o=l==null?void 0:l.attachments)==null||o.filter(c=>{c.flag!="delete"&&(t+=+c.file_size)}),(t/1024/1024).toFixed(2)},uploadFile(l){document.querySelector(`[name="${l}"]`).click()},fileChange(l,t){for(var o=0;o<document.querySelector(`[name="${l}"]`).files.length;o++){let c=document.querySelector(`[name="${l}"]`).files[o];if(this.data.fileType.indexOf(c.type)==-1)return this.modalAlert={showModal:!0,type:"error",message:this.defaultMessageErrorFile},!1;if(t!=null&&t.attachments||(t.attachments=[]),c.type=="application/pdf")if(+this.sumfile(t)+ +(c.size/1024/1024).toFixed(2)<=25){let n={filename:c.name,type:c.type,link:URL.createObjectURL(c),size:(c.size/1024/1024).toFixed(2)+" MB",file_size:c.size,file:c,flag:"add",original_flag:!1};t.attachments.push(n)}else this.modalAlert={showModal:!0,type:"error",message:"ขนาดไฟล์รวมเกิน 25MB"},document.querySelector(`[name="${l}"]`).value=null}document.querySelector(`[name="${l}"]`).value=null},previewFile(l){l.filename&&l.link&&this.axios({method:"get",url:l.link,baseURL:"",responseType:"blob"}).then(t=>{const o=new Blob([t.data],{type:this.assetsUtils.getTypeFile(l.filename)});window.open(URL.createObjectURL(o))})},deleteFile(l,t,o){t.flag=="edit"?t.flag="delete":l.attachments.splice(o,1)},keyupModal(l){this.modal.optionSelect.book_recipient=[],this.axios.get("/master-data/message-template",{params:{keyword:l.target.value}}).then(t=>{t.data.data&&(t.data.data.meta.filter(o=>(o.value=o.id,o.name=o.receive_name,o)),this.modal.optionSelect.book_recipient=t.data.data.meta)})},modalClick(){this.modal.book_recipient?this.axios.get(`/master-data/message-template/${this.modal.book_recipient}`,{params:{keyword:this.modal.book_recipient}}).then(l=>{this.flgTable?(this.data.table[this.indexTable].greeting=l.data.data.title_name,this.data.table[this.indexTable].signature=l.data.data.signature):(this.data.greeting=l.data.data.title_name,this.data.signature=l.data.data.signature),this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1}).catch(l=>{this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}}):(this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1)},recommendClick(l){this.modal.book_recipient="",this.keyupModal({target:{value:""}}),this.modal.showModal=!0},amendClick(l){this.data.table.filter(t=>{l==1?(t.greeting=this.data.greeting,t.signature=this.data.signature):t.contact=this.data.contact})},back(){this.$router.push({name:"automail-sendmail",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},apiSendmailList(){this.data.table=[],this.showLoading=!0,this.axios.get(`/book-out-external/book-out-automail/series/${this.$route.params.id}`).then(l=>{this.showLoading=!1,l.data.data.filter(t=>{t.attachments.filter(o=>{o.flag="edit",o.file_size=parseInt(o.file_size),o.file={size:o.file_size*1024*1024}}),t.send_type_id=t.send_type_id?t.send_type_id:1}),this.data.table=l.data.data}).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})},apiMaster(){this.showLoading=!0;const l=this.axios.get("/filetype?keyword=&page_size=50&page=1");this.axios.all([l]).then(this.axios.spread((...t)=>{this.showLoading=!1;const o=t[0];this.data.fileType=[],o.data.data.filter(c=>{c.active_flag==1&&this.data.fileType.push(c.content_type)}),this.apiSendmailList()})).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}},mounted(){this.apiMaster()},watch:{"modal.showModal"(){document.body.style.overflow=this.modal.showModal?"hidden":""}}},E={class:"automail-sendmail-list"},R={class:"group-overflow"},N={class:"detail"},O={class:"group-head"},P=e("div",{class:"group-first"},[e("i",{class:"bi bi-envelope icon-envelope"}),e("div",{class:"name"},"ส่งหนังสือส่งออก ผ่านอีเมลอัตโนมัติ")],-1),K={class:"group-end"},G=e("img",{src:B,class:"icon-back"},null,-1),H=e("img",{src:I,class:"icon-line"},null,-1),J=e("div",{class:"line"},null,-1),Q={class:"group-detail"},W={class:"group-between"},X={class:"group-input w-50"},Y=e("div",{class:"name"},"คำขึ้นต้น ",-1),Z={class:"group-recommend"},$=e("i",{class:"bi bi-question icon-question"},null,-1),ee={class:"group-input"},te=e("div",{class:"name"},"คำลงท้าย ",-1),se={class:"d-flex"},le=e("i",{class:"bi bi-check icon-check"},null,-1),ae={class:"group-between"},oe={class:"group-input"},ne=e("div",{class:"name"},"ข้อมูลผู้ติดต่อ ",-1),ie={class:"d-flex"},de=e("i",{class:"bi bi-check icon-check"},null,-1),ce=e("div",{class:"line"},null,-1),_e={class:"group-body"},ue={class:"table-automail-sendmail-list"},me={class:"thead"},re={class:"thead-row"},he=e("th",{class:"col1"},"ลำดับ",-1),pe=e("th",{class:"col2"},[m("เลขที่ออก สลค."),e("br"),e("span",null,"ลงวันที่")],-1),be={class:"col3"},ge=e("br",null,null,-1),fe=e("span",{class:"ms-2"},"เรียน",-1),ve=e("br",null,null,-1),ye=e("span",{class:"ms-4"},"คำขึ้นต้น",-1),ke=e("br",null,null,-1),Ve=e("span",{class:"ms-6"},"คำลงท้าย",-1),we=e("br",null,null,-1),Ue=e("span",{class:"ms-8"},"ข้อมูลผู้ติดต่อ",-1),Ce={class:"col4"},Se=e("br",null,null,-1),Me=e("span",{class:"ms-2"},"สำเนาถึง (Cc)",-1),Ae=e("br",null,null,-1),Te=e("span",{class:"ms-4"},"สำเนาลับถึง (Bcc)",-1),Fe=e("br",null,null,-1),Le=e("span",{class:"ms-6"},"เรื่อง",-1),ze=e("br",null,null,-1),qe=e("span",{class:"ms-8"},"ข้อความ",-1),xe={class:"col5"},De=e("br",null,null,-1),Be=e("span",{class:"ms-2"},"ไฟล์ต้นเรื่อง",-1),Ie=e("br",null,null,-1),je=e("span",{class:"ms-4"},"ไฟล์แนบ",-1),Ee=e("th",{class:"col3"},"ข้อมูลผู้ติดต่อ",-1),Re=e("th",{class:"col4"},null,-1),Ne=e("th",{class:"col5"},"วิธีส่งไฟล์",-1),Oe={class:"col1"},Pe={class:"col2"},Ke=e("br",null,null,-1),Ge={class:"col3"},He={class:"new-line"},Je=e("div",{class:"name"},"ถึง",-1),Qe={class:"new-line"},We=e("div",{class:"name"},"เรียน",-1),Xe={class:"new-line"},Ye=e("div",{class:"name"},"คำขึ้นต้น",-1),Ze={class:"group-recommend"},$e=["onClick"],et=e("i",{class:"bi bi-question icon-question"},null,-1),tt={class:"new-line"},st=e("div",{class:"name"},"คำลงท้าย",-1),lt={class:"new-line"},at=e("div",{class:"name"},"ชื่อหน่วยงานที่ส่งหนังสือ",-1),ot={class:"new-line"},nt=e("div",{class:"name"},"ข้อมูลผู้ติดต่อ",-1),it={class:"new-line"},dt={class:"col4"},ct={class:"new-line"},_t=e("div",{class:"name"},[m("ส่งถึง (TO) "),e("span",{class:"required"},"*")],-1),ut={class:"new-line"},mt=e("div",{class:"name"},"สำเนาถึง (Cc)",-1),rt={class:"new-line"},ht=e("div",{class:"name"},"สำเนาลับถึง (Bcc)",-1),pt={class:"new-line"},bt=e("div",{class:"name"},"เรื่อง",-1),gt={class:"new-line"},ft=e("div",{class:"name"},"ข้อความ",-1),vt={class:"col5"},yt={class:"sum-size-file"},kt={class:"new-line"},Vt=e("div",{class:"name"},"วิธีการส่งไฟล์",-1),wt={class:"new-line"},Ut=e("div",{class:"name"},"ลิงก์ดาวน์โหลดเอกสาร",-1),Ct={class:"group-recommend"},St=e("button",{type:"button",class:"button-link none-pointer"},[e("i",{class:"bi bi-link-45deg icon-question"})],-1),Mt={class:"new-line"},At=e("div",{class:"name"},"ไฟล์ต้นเรื่อง",-1),Tt={class:"d-flex"},Ft=["onClick"],Lt=e("i",{class:"bi bi-eye icon-eye"},null,-1),zt=[Lt],qt={class:"new-line"},xt={class:"name d-flex justify-content-between align-items-center mb-2"},Dt=e("div",null,"สิ่งที่แนบมาด้วย",-1),Bt=["onChange","name"],It=["onClick"],jt=e("i",{class:"bi bi-plus icon-plus"},null,-1),Et={key:0,class:"d-flex mb-2"},Rt=["onClick"],Nt=e("i",{class:"bi bi-eye icon-eye"},null,-1),Ot=[Nt],Pt={key:1},Kt={class:"d-flex mb-2"},Gt=["onClick"],Ht=e("i",{class:"bi bi-eye icon-eye"},null,-1),Jt=[Ht],Qt=["onClick"],Wt=e("i",{class:"bi bi-trash icon-trash"},null,-1),Xt=[Wt],Yt={key:2},Zt={key:0,class:"tbody-row"},$t=e("td",{colspan:"5"},"ไม่มีข้อมูล",-1),es=[$t],ts=e("div",{class:"line"},null,-1),ss={class:"group-footer"},ls={class:"footer-right"},as=e("img",{src:V,alt:"times-circle",class:"icon-check-circle"},null,-1),os=e("button",{type:"submit",class:"button-success"},[e("img",{src:V,alt:"times-circle",class:"icon-check-circle"}),m(" บันทึกและส่ง ")],-1),ns={class:"modal-recommend"},is={class:"modal-class"},ds={class:"modal-center"},cs={class:"modal-size"},_s={class:"modal-title"},us=e("div",{class:"title-size"},"เลือกผู้รับหนังสือ",-1),ms=e("div",{class:"line"},null,-1),rs={class:"modal-detail"},hs={class:"group-input"},ps=e("div",{class:"name"},"ผู้รับหนังสือ ",-1),bs=e("div",{class:"line"},null,-1),gs={class:"group-footer"},fs=e("div",{class:"group-name"},[e("img",{src:D,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ยกเลิก")],-1),vs=[fs],ys=e("div",{class:"group-name"},[e("img",{src:V,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ตกลง")],-1),ks=[ys];function Vs(l,t,o,c,n,i){const _=p("cpn-input"),b=p("cpn-textArea"),M=p("cpn-select"),A=p("Form"),T=p("cpn-autoComplete"),F=p("cpn-modal-alert"),L=p("cpn-loading");return r(),h("div",E,[e("div",R,[e("div",N,[d(A,{onSubmit:t[9]||(t[9]=s=>i.save(2)),onInvalidSubmit:l.onInvalidSubmit},{default:q(()=>[e("div",O,[P,e("div",K,[e("button",{type:"button",class:"button-back",onClick:t[0]||(t[0]=s=>i.back())},[G,H,m(" ย้อนกลับ ")])])]),J,e("div",Q,[e("div",W,[e("div",X,[Y,e("div",Z,[d(_,{modelValue:n.data.greeting,"onUpdate:modelValue":t[1]||(t[1]=s=>n.data.greeting=s),name:"greeting",class:"input-recommend",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-recommend",onClick:t[2]||(t[2]=s=>i.recommendClick())},[$,m(" แนะนำ ")])])]),e("div",ee,[te,e("div",se,[d(_,{modelValue:n.data.signature,"onUpdate:modelValue":t[3]||(t[3]=s=>n.data.signature=s),name:"signature",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-check",onClick:t[4]||(t[4]=s=>i.amendClick(1))},[le,m(" ปรับปรุงทั้งหมด ")])])])]),e("div",ae,[e("div",oe,[ne,e("div",ie,[d(_,{modelValue:n.data.contact,"onUpdate:modelValue":t[5]||(t[5]=s=>n.data.contact=s),name:"contact",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-check",onClick:t[6]||(t[6]=s=>i.amendClick(2))},[de,m(" ปรับปรุงทั้งหมด ")])])])])]),ce,e("div",_e,[e("table",ue,[e("thead",me,[e("tr",re,[he,pe,g(e("th",be,[m("ถึง"),ge,fe,ve,ye,ke,Ve,we,Ue],512),[[f,!1]]),g(e("th",Ce,[m("ส่งถึง (To)"),Se,Me,Ae,Te,Fe,Le,ze,qe],512),[[f,!1]]),g(e("th",xe,[m("วิธีการส่งไฟล์"),De,Be,Ie,je],512),[[f,!1]]),Ee,Re,Ne])]),e("tbody",{class:x(["tbody",n.data.table.length>0?"tbody-top":""])},[(r(!0),h(U,null,C(n.data.table,(s,u)=>{var w;return r(),h("tr",{class:"tbody-row",key:u},[e("td",Oe,v(u+1),1),e("td",Pe,[m(v(s.book_out_document_number),1),Ke,m(v(s.as_of_date),1)]),e("td",Ge,[e("div",He,[Je,d(_,{modelValue:s.bookout.to,"onUpdate:modelValue":a=>s.bookout.to=a,name:"bookout-to"+u,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Qe,[We,d(_,{modelValue:s.bookout.greeting,"onUpdate:modelValue":a=>s.bookout.greeting=a,name:"bookout-greeting"+u,class:"input-recommend",placeholder:"ผู้รับหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Xe,[Ye,e("div",Ze,[d(_,{modelValue:s.greeting,"onUpdate:modelValue":a=>s.greeting=a,name:"greeting"+u,class:"input-recommend",placeholder:"กรุณาระบุ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-recommend",onClick:a=>(i.recommendClick(),n.indexTable=u,n.flgTable=!0)},[et,m(" แนะนำ ")],8,$e)])]),e("div",tt,[st,d(_,{modelValue:s.signature,"onUpdate:modelValue":a=>s.signature=a,name:"signature"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",lt,[at,d(_,{modelValue:s.department_name,"onUpdate:modelValue":a=>s.department_name=a,name:"department_name"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",ot,[nt,d(_,{modelValue:s.contact_name,"onUpdate:modelValue":a=>s.contact_name=a,name:"contact_name"+u,placeholder:"ชื่อส่วนราชการเจ้าของเรื่องหรือหน่วยงานที่ออกหนังสือ"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",it,[d(_,{modelValue:s.contact,"onUpdate:modelValue":a=>s.contact=a,name:"contact"+u,placeholder:"เบอร์โทร และชื่อผู้ติดต่อ"},null,8,["modelValue","onUpdate:modelValue","name"])])]),e("td",dt,[e("div",ct,[_t,d(_,{modelValue:s.to,"onUpdate:modelValue":a=>s.to=a,rules:"required",name:"to"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",ut,[mt,d(_,{modelValue:s.cc,"onUpdate:modelValue":a=>s.cc=a,name:"cc"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",rt,[ht,d(_,{modelValue:s.bcc,"onUpdate:modelValue":a=>s.bcc=a,name:"bcc"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",pt,[bt,d(_,{modelValue:s.subject,"onUpdate:modelValue":a=>s.subject=a,name:"subject"+u},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",gt,[ft,d(b,{modelValue:s.message,"onUpdate:modelValue":a=>s.message=a,name:"message"+u,rows:"5"},null,8,["modelValue","onUpdate:modelValue","name"])])]),e("td",vt,[e("div",yt,[e("span",null,"ขนาดไฟล์รวม "+v(i.sumfile(s))+"MB",1)]),e("div",kt,[Vt,d(M,{modelValue:s.send_type_id,"onUpdate:modelValue":a=>s.send_type_id=a,name:"send_type_id"+u,optionSelect:n.optionSelect.send_type_id},null,8,["modelValue","onUpdate:modelValue","name","optionSelect"])]),e("div",wt,[Ut,e("div",Ct,[d(_,{modelValue:s.link,"onUpdate:modelValue":a=>s.link=a,name:"link"+u,class:"input-link",disabled:s.send_type_id==1,placeholder:"กรุณาระบุ"},null,8,["modelValue","onUpdate:modelValue","name","disabled"]),St])]),e("div",Mt,[At,e("div",Tt,[d(_,{modelValue:s.main_file_name,"onUpdate:modelValue":a=>s.main_file_name=a,name:"main_file_name"+u,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-view",onClick:a=>i.previewFile({filename:s.main_file_name,link:s.main_file_path?l.backendport+"/"+s.main_file_path:""})},zt,8,Ft)])]),e("div",qt,[e("div",xt,[Dt,e("input",{type:"file",multiple:"",onChange:a=>i.fileChange("attachments"+u,s),name:"attachments"+u,style:{display:"none"},accept:"application/pdf"},null,40,Bt),e("button",{type:"button",class:"button-file",onClick:a=>i.uploadFile("attachments"+u)},[jt,m(" แนบเอกสาร ")],8,It)]),s.copy_main_file_name?(r(),h("div",Et,[d(_,{modelValue:s.copy_main_file_name,"onUpdate:modelValue":a=>s.copy_main_file_name=a,name:"copy_main_file_name"+u,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-view",onClick:a=>i.previewFile({filename:s.copy_main_file_name,link:s.copy_main_file_path?l.backendport+"/"+s.copy_main_file_path:""})},Ot,8,Rt)])):S("",!0),((w=s==null?void 0:s.attachments.filter(a=>a.flag!="delete"))==null?void 0:w.length)>0||s.copy_main_file_name?(r(),h("div",Pt,[(r(!0),h(U,null,C(s.attachments,(a,y)=>g((r(),h("div",{key:y},[e("div",Kt,[d(_,{modelValue:a.filename,"onUpdate:modelValue":k=>a.filename=k,name:"filename"+y,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-view",onClick:k=>i.previewFile({filename:a.filename,link:a.filepath?l.backendport+"/"+a.filepath:a.link})},Jt,8,Gt),g(e("button",{type:"button",class:"button-del",onClick:k=>i.deleteFile(s,a,y)},Xt,8,Qt),[[f,!a.original_flag]])])])),[[f,a.flag!="delete"]])),128))])):(r(),h("div",Yt,[d(_,{modelValue:n.noData,"onUpdate:modelValue":t[7]||(t[7]=a=>n.noData=a),name:"noData"+u,disabled:!0},null,8,["modelValue","name"])]))])])])}),128)),n.data.table.length==0?(r(),h("tr",Zt,es)):S("",!0)],2)])]),ts,e("div",ss,[e("div",ls,[e("button",{type:"button",class:"button-primary",onClick:t[8]||(t[8]=s=>i.save(1))},[as,m(" บันทึกร่าง ")]),os])])]),_:1},8,["onInvalidSubmit"])])]),g(e("div",ns,[e("div",is,[e("div",ds,[e("div",cs,[e("div",_s,[us,e("i",{class:"bi bi-x-lg icon-close",onClick:t[10]||(t[10]=s=>n.modal.showModal=!1)})]),ms,e("div",rs,[e("div",hs,[ps,d(T,{modelValue:n.modal.book_recipient,"onUpdate:modelValue":t[11]||(t[11]=s=>n.modal.book_recipient=s),name:"book_recipient",optionSelect:n.modal.optionSelect.book_recipient,onKeyup:t[12]||(t[12]=s=>i.keyupModal(s)),placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),bs,e("div",gs,[e("button",{type:"button",onClick:t[13]||(t[13]=s=>n.modal.showModal=!1),class:"btn button-danger"},vs),e("button",{type:"submit",class:"btn button-success",onClick:t[14]||(t[14]=s=>i.modalClick())},ks)])])])])],512),[[f,n.modal.showModal]]),d(F,{modalAlert:n.modalAlert},null,8,["modalAlert"]),d(L,{show:n.showLoading},null,8,["show"])])}const Cs=z(j,[["render",Vs]]);export{Cs as default};
