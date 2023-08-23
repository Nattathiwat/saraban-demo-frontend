import{_ as y,r,o as h,c as g,a as t,b as i,d as w,F as P,h as x,i as C,e as L,j as v,t as n}from"./index-ccd86fc1.js";const U={name:"automail-sendmail-logs",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{regis_id:"",book_out_document_number:"",speed_id:"",subject:"",mnst_id:"",department_dest_id:"",as_of_date:"",to:"",cc:"",bcc:"",send_date:"",table:[],page:1,total:0,lastPage:0,perPage:10},optionSelect:{regis_id:[],speed_id:[],mnst_id:[],department_dest_id:[]}}},methods:{detail_click(d){this.$router.push({name:"subministry-work.booking-out-edit",params:{id:d.book_id}}).catch(()=>{})},cancelClick(){this.data.regis_id="",this.data.book_out_document_number="",this.data.speed_id="",this.data.subject="",this.data.mnst_id="",this.data.department_dest_id="",this.data.as_of_date="",this.data.to="",this.data.cc="",this.data.bcc="",this.data.send_date="",this.data.perPage=10,this.data.page=1,this.apiSendmailLogs()},pageChange(d){this.data.perPage=d.perPage,this.data.page=d.page,this.apiSendmailLogs()},apiSendmailLogs(){var d,a,l,p;this.data.table=[],this.showLoading=!0,this.axios.get("/book-out-external/email-history",{params:{regis_id:this.data.regis_id,book_out_document_number:this.data.book_out_document_number,speed_id:this.data.speed_id,subject:this.data.subject,mnst_id:this.data.mnst_id,department_dest_id:this.data.department_dest_id,as_of_date_from:(d=this.data)==null?void 0:d.as_of_date[0],as_of_date_to:(a=this.data)==null?void 0:a.as_of_date[1],to:this.data.to,cc:this.data.cc,bcc:this.data.bcc,send_date_from:(l=this.data)==null?void 0:l.send_date[0],send_date_to:(p=this.data)==null?void 0:p.send_date[1],page_size:this.data.perPage,page:this.data.page}}).then(e=>{this.showLoading=!1,e.data.data.meta.filter(c=>c.disabled=!0),this.data.table=e.data.data.meta,this.data.total=e.data.data.total,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},keyupDepartment(d){this.optionSelect.department_dest_id=[],this.axios.get("/master-data/department",{params:{keyword:d.target.value}}).then(a=>{a.data.data&&(a.data.data.filter(l=>(l.value=l.id,l.name=l.department_full_name,l)),this.optionSelect.department_dest_id=a.data.data)})},keyupSubministry(d){this.optionSelect.mnst_id=[],this.axios.get("/master-data/subministry",{params:{keyword:d.target.value}}).then(a=>{a.data.data&&(a.data.data.filter(l=>(l.value=l.id,l)),this.optionSelect.mnst_id=a.data.data)})},api_master(){this.showLoading=!0;const d=this.axios.get("/master-data/book-type"),a=this.axios.get("/master-data/speed"),l=this.axios.get("/master-data/subministry"),p=this.axios.get("/master-data/department");this.axios.all([d,a,l,p]).then(this.axios.spread((...e)=>{this.showLoading=!1;const c=e[0],u=e[1],_=e[2],m=e[3];c.data.data.filter(o=>(o.value=o.id,o.name=o.desc,o)),u.data.data.filter(o=>(o.value=o.id,o.name=o.desc,o)),_.data.data.filter(o=>(o.value=o.id,o)),m.data.data.filter(o=>(o.value=o.id,o.name=o.department_full_name,o)),this.optionSelect.regis_id=c.data.data,this.optionSelect.speed_id=u.data.data,this.optionSelect.mnst_id=_.data.data,this.optionSelect.department_dest_id=m.data.data,this.apiSendmailLogs()})).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}},mounted(){var d,a;this.data.page=((d=this.$route.query)==null?void 0:d.page)||this.data.page,this.data.perPage=((a=this.$route.query)==null?void 0:a.perPage)||this.data.perPage,this.api_master()}},j={class:"automail-sendmail-logs"},q={class:"group-overflow"},A={class:"detail"},B=L('<div class="group-head"><div class="group-first"><i class="bi bi-envelope icon-envelope"></i><div class="name">บันทึกการส่งอีเมลอัตโนมัติ</div></div></div><div class="line"></div>',2),N={class:"group-detail"},F={class:"group-between"},M={class:"group-input"},D=t("div",{class:"name"},"ทะเบียน ",-1),E={class:"group-input"},I=t("div",{class:"name"},"เลขออก สลค. ",-1),T={class:"group-input"},K=t("div",{class:"name"},"ความเร่งด่วน",-1),R={class:"group-input"},z=t("div",{class:"name"},"ชื่อเรื่อง ",-1),O={class:"group-between"},G={class:"group-input"},H=t("div",{class:"name"},"กอง/สำนัก ",-1),J={class:"group-input"},Q=t("div",{class:"name"},"ถึง ",-1),W={class:"group-input"},X=t("div",{class:"name"},"ลงวันที่ตั้งแต่ - ถึง ",-1),Y={class:"group-between"},Z={class:"group-input"},$=t("div",{class:"name"},"ส่งถึง (TO) ",-1),tt={class:"group-input"},et=t("div",{class:"name"},"สำเนาถึง (Cc) ",-1),at={class:"group-input"},st=t("div",{class:"name"},"สำเนาลับถึง (Bcc)",-1),ot={class:"group-input"},dt=t("div",{class:"name"},"วันที่ส่งตั้งแต่ - ถึง ",-1),lt={class:"group-button"},it={class:"button-left"},nt=t("i",{class:"bi bi-arrow-clockwise icon-clockwise"},null,-1),ct=t("div",{class:"button-right"},[t("button",{type:"submit",class:"button-search"},[t("i",{class:"bi bi-search icon-search"}),v(" ค้นหา ")])],-1),_t=t("div",{class:"line"},null,-1),rt={class:"group-body"},pt={class:"table-automail-sendmail-logs"},ut=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ลำดับ"),t("th",{class:"col2"},"สถานะ"),t("th",{class:"col3"},"วันและเวลาที่ส่ง"),t("th",{class:"col4"},"เลขที่หนังสือส่งออก"),t("th",{class:"col5"},"ทะเบียนหนังสือ"),t("th",{class:"col6"},"ความเร่งด่วน"),t("th",{class:"col7"},"ชื่อเรื่อง"),t("th",{class:"col8"},"ลงวันที่"),t("th",{class:"col9"},"จาก"),t("th",{class:"col10"},"ถึง"),t("th",{class:"col11"},"To"),t("th",{class:"col12"},"Cc"),t("th",{class:"col13"},"Bcc")])],-1),mt={class:"tbody"},ht={class:"col1"},gt={class:"col2"},bt={class:"col3"},vt=["onClick"],ft={class:"col5"},Vt={class:"col6"},kt={class:"col7"},St={class:"col8"},yt={class:"col9"},wt={class:"col10"},Pt={class:"col11"},xt={class:"col12"},Ct={class:"col13"},Lt={key:0,class:"tbody-row"},Ut=t("td",{colspan:"13"},"ไม่มีข้อมูล",-1),jt=[Ut],qt={class:"group-footer"};function At(d,a,l,p,e,c){const u=r("cpn-select"),_=r("cpn-input"),m=r("cpn-autoComplete"),o=r("cpn-datepickerRange"),f=r("Form"),V=r("cpn-pagination"),k=r("cpn-modal-alert"),S=r("cpn-loading");return h(),g("div",j,[t("div",q,[t("div",A,[B,i(f,{onSubmit:c.apiSendmailLogs,onInvalidSubmit:d.onInvalidSubmit},{default:w(()=>[t("div",N,[t("div",F,[t("div",M,[D,i(u,{modelValue:e.data.regis_id,"onUpdate:modelValue":a[0]||(a[0]=s=>e.data.regis_id=s),name:"regis_id",optionSelect:e.optionSelect.regis_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),t("div",E,[I,i(_,{modelValue:e.data.book_out_document_number,"onUpdate:modelValue":a[1]||(a[1]=s=>e.data.book_out_document_number=s),name:"book_out_document_number",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",T,[K,i(u,{modelValue:e.data.speed_id,"onUpdate:modelValue":a[2]||(a[2]=s=>e.data.speed_id=s),name:"speed_id",optionSelect:e.optionSelect.speed_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),t("div",R,[z,i(_,{modelValue:e.data.subject,"onUpdate:modelValue":a[3]||(a[3]=s=>e.data.subject=s),name:"subject",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",O,[t("div",G,[H,i(m,{modelValue:e.data.mnst_id,"onUpdate:modelValue":a[4]||(a[4]=s=>e.data.mnst_id=s),name:"mnst_id",optionSelect:e.optionSelect.mnst_id,onKeyup:a[5]||(a[5]=s=>c.keyupSubministry(s)),placeholder:"เลือกกอง/สำนัก"},null,8,["modelValue","optionSelect"])]),t("div",J,[Q,i(m,{modelValue:e.data.department_dest_id,"onUpdate:modelValue":a[6]||(a[6]=s=>e.data.department_dest_id=s),name:"department_dest_id",optionSelect:e.optionSelect.department_dest_id,onKeyup:a[7]||(a[7]=s=>c.keyupDepartment(s)),placeholder:"เลือกหน่วยงานปลายทาง"},null,8,["modelValue","optionSelect"])])]),t("div",W,[X,i(o,{modelValue:e.data.as_of_date,"onUpdate:modelValue":a[8]||(a[8]=s=>e.data.as_of_date=s),name:"as_of_date",placeholder:"เลือกวันที่ - ถึงวันที่"},null,8,["modelValue"])]),t("div",Y,[t("div",Z,[$,i(_,{modelValue:e.data.to,"onUpdate:modelValue":a[9]||(a[9]=s=>e.data.to=s),name:"to",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",tt,[et,i(_,{modelValue:e.data.cc,"onUpdate:modelValue":a[10]||(a[10]=s=>e.data.cc=s),name:"cc",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",at,[st,i(_,{modelValue:e.data.bcc,"onUpdate:modelValue":a[11]||(a[11]=s=>e.data.bcc=s),name:"bcc",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",ot,[dt,i(o,{modelValue:e.data.send_date,"onUpdate:modelValue":a[12]||(a[12]=s=>e.data.send_date=s),name:"send_date",placeholder:"เลือกวันที่ - ถึงวันที่"},null,8,["modelValue"])]),t("div",lt,[t("div",it,[t("button",{type:"button",class:"button-warning",onClick:a[13]||(a[13]=s=>c.cancelClick())},[nt,v(" ล้างการค้นหา ")])]),ct])])]),_:1},8,["onSubmit","onInvalidSubmit"]),_t,t("div",rt,[t("table",pt,[ut,t("tbody",mt,[(h(!0),g(P,null,x(e.data.table,(s,b)=>(h(),g("tr",{class:"tbody-row",key:b},[t("td",ht,n(b+1+e.data.perPage*(e.data.page-1)),1),t("td",gt,n(s.status_name),1),t("td",bt,n(s.send_date),1),t("td",{class:"col4",onClick:Bt=>c.detail_click(s)},n(s.book_out_document_number),9,vt),t("td",ft,n(s.book_regis_name),1),t("td",Vt,n(s.speed_name),1),t("td",kt,n(s.subject),1),t("td",St,n(s.as_of_date),1),t("td",yt,n(s.from),1),t("td",wt,n(s.department_dest_name),1),t("td",Pt,n(s.to),1),t("td",xt,n(s.cc),1),t("td",Ct,n(s.bcc),1)]))),128)),e.data.table.length==0?(h(),g("tr",Lt,jt)):C("",!0)])])]),t("div",qt,[i(V,{page:e.data.page,total:e.data.total,lastPage:e.data.lastPage,perPage:e.data.perPage,onPageChange:c.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),i(k,{modalAlert:e.modalAlert},null,8,["modalAlert"]),i(S,{show:e.showLoading},null,8,["show"])])}const Ft=y(U,[["render",At]]);export{Ft as default};
