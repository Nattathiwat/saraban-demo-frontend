import{_ as C,r as u,o as h,c as p,a as e,b as l,d as S,w as r,v as b,j as c,n as P,F as M,h as T,i as q,e as L,t as v,g as x,k as A}from"./index-36c1b55d.js";const j={name:"automail-sendmail-list",data(){return{modalAlert:{showModal:!1,title:"",message:""},modal:{showModal:!1,book_recipient:"",optionSelect:{book_recipient:[]}},showLoading:!1,data:{salutation:"",postscript:"",contact_information:"",table:[],page:1,total:0,lastPage:0,perPage:10},optionSelect:{how_to_send_files:[{value:1,name:"แนบไฟล์ทั้งหมด ตามข้างล่างนี้"},{value:2,name:"ไม่แนบไฟล์ แต่ใช้ลิงค์ข้างล่างนี้แทน"}]},indexTable:0,flgTable:!1}},methods:{keyupModal(n){this.modal.optionSelect.book_recipient=[],this.axios.get("/master-data/subministry",{params:{keyword:n.target.value}}).then(s=>{s.data.data&&(s.data.data.filter(m=>(m.value=m.id,m)),this.modal.optionSelect.book_recipient=s.data.data)})},modalClick(){this.modal.book_recipient?this.axios.get("/master-data/subministry",{params:{keyword:this.modal.book_recipient}}).then(n=>{this.flgTable?(this.data.table[this.indexTable].table_dear="aa",this.data.table[this.indexTable].table_salutation="bb",this.data.table[this.indexTable].table_postscript="cc"):(this.data.salutation="test1",this.data.postscript="test2"),this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1}).catch(n=>{this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}}):(this.modal.showModal=!1,this.indexTable=0,this.flgTable=!1)},recommendClick(n){this.modal.book_recipient="",this.keyupModal({target:{value:""}}),this.modal.showModal=!0},amendClick(n){this.data.table.filter(s=>{n==1?(s.table_salutation=this.data.salutation,s.table_postscript=this.data.postscript):s.table_contact_information=this.data.contact_information})},back(){this.$router.push({name:"automail-sendmail",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},pageChange(n){this.data.perPage=n.perPage,this.data.page=n.page,this.apiSendmailList()},apiSendmailList(){this.data.table=[],this.showLoading=!0,this.axios.get("/master-data/department-contact",{params:{page_size:this.data.perPage,page:this.data.page}}).then(n=>{this.showLoading=!1,n.data.data.meta.filter(s=>s.disabled=!0),this.data.table=n.data.data.meta,this.data.total=n.data.data.total,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}},mounted(){var n,s;this.data.page=((n=this.$route.query)==null?void 0:n.page)||this.data.page,this.data.perPage=((s=this.$route.query)==null?void 0:s.perPage)||this.data.perPage,this.apiSendmailList()},watch:{"modal.showModal"(){document.body.style.overflow=this.modal.showModal?"hidden":""}}},z={class:"automail-sendmail-list"},B={class:"group-overflow"},N={class:"detail"},F=L('<div class="group-head"><div class="group-first"><i class="bi bi-envelope icon-envelope"></i><div class="name">ส่งหนังสือส่งออก ผ่านอีเมลอัตโนมัติ</div></div></div><div class="line"></div>',2),E={class:"group-detail"},I={class:"group-between"},D={class:"group-input w-50"},K=e("div",{class:"name"},"คำขึ้นต้น ",-1),O={class:"group-recommend"},G=e("i",{class:"bi bi-question icon-question"},null,-1),H={class:"group-input"},J=e("div",{class:"name"},"คำลงท้าย ",-1),Q={class:"d-flex"},R=e("i",{class:"bi bi-check icon-check"},null,-1),W={class:"group-between"},X={class:"group-input"},Y=e("div",{class:"name"},"ข้อมูลผู้ติดต่อ ",-1),Z={class:"d-flex"},$=e("i",{class:"bi bi-check icon-check"},null,-1),ee=e("div",{class:"line"},null,-1),te={class:"group-body"},se={class:"table-automail-sendmail-list"},oe={class:"thead"},ae={class:"thead-row"},le=e("th",{class:"col1"},"ลำดับ",-1),ne=e("th",{class:"col2"},[c("เลขที่ออก สลค."),e("br"),e("span",null,"ลงวันที่")],-1),ie={class:"col3"},de=e("br",null,null,-1),ce=e("span",{class:"ms-2"},"เรียน",-1),_e=e("br",null,null,-1),ue=e("span",{class:"ms-4"},"คำขึ้นต้น",-1),me=e("br",null,null,-1),he=e("span",{class:"ms-6"},"คำลงท้าย",-1),pe=e("br",null,null,-1),re=e("span",{class:"ms-8"},"ข้อมูลผู้ติดต่อ",-1),be={class:"col4"},ve=e("br",null,null,-1),ge=e("span",{class:"ms-2"},"สำเนาถึง (Cc)",-1),Ve=e("br",null,null,-1),fe=e("span",{class:"ms-4"},"สำเนาลับถึง (Bcc)",-1),we=e("br",null,null,-1),ke=e("span",{class:"ms-6"},"เรื่อง",-1),ye=e("br",null,null,-1),Ue=e("span",{class:"ms-8"},"ข้อความ",-1),Ce={class:"col5"},Se=e("br",null,null,-1),Pe=e("span",{class:"ms-2"},"ไฟล์ต้นเรื่อง",-1),Me=e("br",null,null,-1),Te=e("span",{class:"ms-4"},"ไฟล์แนบ",-1),qe=e("th",{class:"col3"},"ข้อมูลผู้ติดต่อ",-1),Le=e("th",{class:"col4"},"ข้อความ",-1),xe=e("th",{class:"col5"},"วิธีส่งไฟล์",-1),Ae={class:"col1"},je={class:"col2"},ze={class:"col3"},Be={class:"new-line"},Ne=e("div",{class:"name"},"ถึง",-1),Fe={class:"new-line"},Ee=e("div",{class:"name"},"เรียน",-1),Ie={class:"new-line"},De=e("div",{class:"name"},"คำขึ้นต้น",-1),Ke={class:"group-recommend"},Oe=["onClick"],Ge=e("i",{class:"bi bi-question icon-question"},null,-1),He={class:"new-line"},Je=e("div",{class:"name"},"คำลงท้าย",-1),Qe={class:"new-line"},Re=e("div",{class:"name"},"ข้อมูลผู้ติดต่อ",-1),We={class:"col4"},Xe={class:"new-line"},Ye=e("div",{class:"name"},"ส่งถึง (TO)",-1),Ze={class:"new-line"},$e=e("div",{class:"name"},"สำเนาถึง (Cc)",-1),et={class:"new-line"},tt=e("div",{class:"name"},"สำเนาลับถึง (Bcc)",-1),st={class:"new-line"},ot=e("div",{class:"name"},"เรื่อง",-1),at={class:"new-line"},lt=e("div",{class:"name"},"ข้อความ",-1),nt={class:"col5"},it=e("div",{class:"sum-size-file"},[e("span",null,"ขนาดไฟล์รวม")],-1),dt={class:"new-line"},ct=e("div",{class:"name"},"วิธีการส่งไฟล์",-1),_t={class:"new-line"},ut=e("div",{class:"name"},"ลิงค์ดาวน์โหลดเอกสาร",-1),mt={class:"group-recommend"},ht=e("button",{type:"button",class:"button-link none-pointer"},[e("i",{class:"bi bi-link-45deg icon-question"})],-1),pt={class:"new-line"},rt=e("div",{class:"name"},"ไฟล์ต้นเรื่อง",-1),bt={class:"d-flex"},vt=e("button",{type:"button",class:"button-view"},[e("i",{class:"bi bi-eye icon-eye"})],-1),gt={class:"new-line"},Vt=e("div",{class:"name"},"สำเนาคู่ฉบับ",-1),ft={class:"d-flex"},wt=e("button",{type:"button",class:"button-view"},[e("i",{class:"bi bi-eye icon-eye"})],-1),kt={class:"new-line"},yt=e("div",{class:"name d-flex justify-content-between align-items-center mb-2"},[e("div",null,"สิ่งที่แนบมาด้วย"),e("button",{type:"button",class:"button-file"},[e("i",{class:"bi bi-plus icon-plus"}),c(" แนบเอกสาร ")])],-1),Ut={class:"d-flex"},Ct=e("button",{type:"button",class:"button-view"},[e("i",{class:"bi bi-eye icon-eye"})],-1),St={key:0,class:"tbody-row"},Pt=e("td",{colspan:"5"},"ไม่มีข้อมูล",-1),Mt=[Pt],Tt={class:"group-footer"},qt={class:"modal-recommend"},Lt={class:"modal-class"},xt={class:"modal-center"},At={class:"modal-size"},jt={class:"modal-title"},zt=e("div",{class:"title-size"},"เลือกผู้รับหนังสือ",-1),Bt=e("div",{class:"line"},null,-1),Nt={class:"modal-detail"},Ft={class:"group-input"},Et=e("div",{class:"name"},"ผู้รับหนังสือ ",-1),It=e("div",{class:"line"},null,-1),Dt={class:"group-footer"},Kt=e("div",{class:"group-name"},[e("img",{src:x,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ยกเลิก")],-1),Ot=[Kt],Gt=e("div",{class:"group-name"},[e("img",{src:A,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ตกลง")],-1),Ht=[Gt];function Jt(n,s,m,Qt,a,_){const d=u("cpn-input"),g=u("Form"),V=u("cpn-textArea"),f=u("cpn-select"),w=u("cpn-pagination"),k=u("cpn-autoComplete"),y=u("cpn-modal-alert"),U=u("cpn-loading");return h(),p("div",z,[e("div",B,[e("div",N,[F,l(g,{onSubmit:_.apiSendmailList,onInvalidSubmit:n.onInvalidSubmit},{default:S(()=>[e("div",E,[e("div",I,[e("div",D,[K,e("div",O,[l(d,{modelValue:a.data.salutation,"onUpdate:modelValue":s[0]||(s[0]=t=>a.data.salutation=t),name:"salutation",class:"input-recommend",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-recommend",onClick:s[1]||(s[1]=t=>_.recommendClick())},[G,c(" แนะนำ ")])])]),e("div",H,[J,e("div",Q,[l(d,{modelValue:a.data.postscript,"onUpdate:modelValue":s[2]||(s[2]=t=>a.data.postscript=t),name:"postscript",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-check",onClick:s[3]||(s[3]=t=>_.amendClick(1))},[R,c(" ปรับปรุงทั้งหมด ")])])])]),e("div",W,[e("div",X,[Y,e("div",Z,[l(d,{modelValue:a.data.contact_information,"onUpdate:modelValue":s[4]||(s[4]=t=>a.data.contact_information=t),name:"contact_information",placeholder:"กรุณาระบุ"},null,8,["modelValue"]),e("button",{type:"button",class:"button-check",onClick:s[5]||(s[5]=t=>_.amendClick(2))},[$,c(" ปรับปรุงทั้งหมด ")])])])])])]),_:1},8,["onSubmit","onInvalidSubmit"]),ee,e("div",te,[e("table",se,[e("thead",oe,[e("tr",ae,[le,ne,r(e("th",ie,[c("ถึง"),de,ce,_e,ue,me,he,pe,re],512),[[b,!1]]),r(e("th",be,[c("ส่งถึง (To)"),ve,ge,Ve,fe,we,ke,ye,Ue],512),[[b,!1]]),r(e("th",Ce,[c("วิธีการส่งไฟล์"),Se,Pe,Me,Te],512),[[b,!1]]),qe,Le,xe])]),e("tbody",{class:P(["tbody",a.data.table.length>0?"tbody-top":""])},[(h(!0),p(M,null,T(a.data.table,(t,i)=>(h(),p("tr",{class:"tbody-row",key:i},[e("td",Ae,v(i+1+a.data.perPage*(a.data.page-1)),1),e("td",je,v(t.department_name),1),e("td",ze,[e("div",Be,[Ne,l(d,{modelValue:t.table_to,"onUpdate:modelValue":o=>t.table_to=o,name:"table_to"+i,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Fe,[Ee,l(d,{modelValue:t.table_dear,"onUpdate:modelValue":o=>t.table_dear=o,name:"table_dear"+i,class:"input-recommend",placeholder:"กรุณาระบุ"},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Ie,[De,e("div",Ke,[l(d,{modelValue:t.table_salutation,"onUpdate:modelValue":o=>t.table_salutation=o,name:"table_salutation"+i,class:"input-recommend",placeholder:"กรุณาระบุ"},null,8,["modelValue","onUpdate:modelValue","name"]),e("button",{type:"button",class:"button-recommend",onClick:o=>(_.recommendClick(),a.indexTable=i,a.flgTable=!0)},[Ge,c(" แนะนำ ")],8,Oe)])]),e("div",He,[Je,l(d,{modelValue:t.table_postscript,"onUpdate:modelValue":o=>t.table_postscript=o,name:"table_postscript"+i},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Qe,[Re,l(d,{modelValue:t.table_contact_information,"onUpdate:modelValue":o=>t.table_contact_information=o,name:"table_contact_information"+i},null,8,["modelValue","onUpdate:modelValue","name"])])]),e("td",We,[e("div",Xe,[Ye,l(d,{modelValue:t.table_to,"onUpdate:modelValue":o=>t.table_to=o,name:"table_to"+i},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",Ze,[$e,l(d,{modelValue:t.table_cc,"onUpdate:modelValue":o=>t.table_cc=o,name:"table_cc"+i},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",et,[tt,l(d,{modelValue:t.table_bcc,"onUpdate:modelValue":o=>t.table_bcc=o,name:"table_bcc"+i},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",st,[ot,l(d,{modelValue:t.table_subject,"onUpdate:modelValue":o=>t.table_subject=o,name:"table_subject"+i},null,8,["modelValue","onUpdate:modelValue","name"])]),e("div",at,[lt,l(V,{modelValue:t.table_message,"onUpdate:modelValue":o=>t.table_message=o,name:"table_message"+i,rows:"5"},null,8,["modelValue","onUpdate:modelValue","name"])])]),e("td",nt,[it,e("div",dt,[ct,l(f,{modelValue:t.how_to_send_files,"onUpdate:modelValue":o=>t.how_to_send_files=o,name:"how_to_send_files"+i,optionSelect:a.optionSelect.how_to_send_files},null,8,["modelValue","onUpdate:modelValue","name","optionSelect"])]),e("div",_t,[ut,e("div",mt,[l(d,{modelValue:t.cc,"onUpdate:modelValue":o=>t.cc=o,name:"cc"+i,class:"input-link",disabled:t.how_to_send_files==1,placeholder:"กรุณาระบุ"},null,8,["modelValue","onUpdate:modelValue","name","disabled"]),ht])]),e("div",pt,[rt,e("div",bt,[l(d,{modelValue:t.cc,"onUpdate:modelValue":o=>t.cc=o,name:"cc"+i,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),vt])]),e("div",gt,[Vt,e("div",ft,[l(d,{modelValue:t.cc,"onUpdate:modelValue":o=>t.cc=o,name:"cc"+i,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),wt])]),e("div",kt,[yt,e("div",Ut,[l(d,{modelValue:t.cc,"onUpdate:modelValue":o=>t.cc=o,name:"cc"+i,disabled:!0},null,8,["modelValue","onUpdate:modelValue","name"]),Ct])])])]))),128)),a.data.table.length==0?(h(),p("tr",St,Mt)):q("",!0)],2)])]),e("div",Tt,[l(w,{page:a.data.page,total:a.data.total,lastPage:a.data.lastPage,perPage:a.data.perPage,onPageChange:_.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),r(e("div",qt,[e("div",Lt,[e("div",xt,[e("div",At,[e("div",jt,[zt,e("i",{class:"bi bi-x-lg icon-close",onClick:s[6]||(s[6]=t=>a.modal.showModal=!1)})]),Bt,e("div",Nt,[e("div",Ft,[Et,l(k,{modelValue:a.modal.book_recipient,"onUpdate:modelValue":s[7]||(s[7]=t=>a.modal.book_recipient=t),name:"book_recipient",optionSelect:a.modal.optionSelect.book_recipient,onKeyup:s[8]||(s[8]=t=>_.keyupModal(t)),placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),It,e("div",Dt,[e("button",{type:"button",onClick:s[9]||(s[9]=t=>a.modal.showModal=!1),class:"btn button-danger"},Ot),e("button",{type:"submit",class:"btn button-success",onClick:s[10]||(s[10]=t=>_.modalClick())},Ht)])])])])],512),[[b,a.modal.showModal]]),l(y,{modalAlert:a.modalAlert},null,8,["modalAlert"]),l(U,{show:a.showLoading},null,8,["show"])])}const Wt=C(j,[["render",Jt]]);export{Wt as default};
