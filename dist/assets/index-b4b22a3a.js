import{_ as P,r as m,o as u,c as h,a as t,b as i,d as w,F as k,h as x,i as C,e as L,j as b,t as d}from"./index-7bb6a3cd.js";const U={name:"automail-sendmail-logs",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{mail_register:"",mail_number_out:"",mail_speed:"",mail_title:"",mail_division:"",mail_to:"",mail_date_st:"",mail_send_to:"",mail_send_cc:"",mail_send_bcc:"",mail_date_send:"",table:[],page:1,total:0,lastPage:0,perPage:10},optionSelect:{mail_register:[],mail_speed:[],mail_division:[],mail_to:[]}}},methods:{cancelClick(){this.data.mail_register="",this.data.mail_number_out="",this.data.mail_speed="",this.data.mail_title="",this.data.mail_division="",this.data.mail_to="",this.data.mail_date_st="",this.data.mail_send_to="",this.data.mail_send_cc="",this.data.mail_send_bcc="",this.data.mail_date_send="",this.data.perPage=10,this.data.page=1,this.apiSendmailLogs()},pageChange(o){this.data.perPage=o.perPage,this.data.page=o.page,this.apiSendmailLogs()},apiSendmailLogs(){this.data.table=[],this.showLoading=!0,this.axios.get("/master-data/department-contact",{params:{mail_register:this.data.mail_register,mail_number_out:this.data.mail_number_out,mail_speed:this.data.mail_speed,mail_title:this.data.mail_title,mail_division:this.data.mail_division,mail_to:this.data.mail_to,mail_date_st:this.data.mail_date_st,mail_send_to:this.data.mail_send_to,mail_send_cc:this.data.mail_send_cc,mail_send_bcc:this.data.mail_send_bcc,mail_date_send:this.data.mail_date_send,page_size:this.data.perPage,page:this.data.page}}).then(o=>{this.showLoading=!1,o.data.data.meta.filter(a=>a.disabled=!0),this.data.table=o.data.data.meta,this.data.total=o.data.data.total,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},keyupDepartment(o){this.optionSelect.mail_to=[],this.axios.get("/master-data/department",{params:{keyword:o.target.value}}).then(a=>{a.data.data&&(a.data.data.filter(n=>(n.value=n.id,n.name=n.department_full_name,n)),this.optionSelect.mail_to=a.data.data)})},keyupSubministry(o){this.optionSelect.mail_division=[],this.axios.get("/master-data/subministry",{params:{keyword:o.target.value}}).then(a=>{a.data.data&&(a.data.data.filter(n=>(n.value=n.id,n)),this.optionSelect.mail_division=a.data.data)})},api_master(){this.showLoading=!0;const o=this.axios.get("/master-data/book-type"),a=this.axios.get("/master-data/speed"),n=this.axios.get("/master-data/subministry"),g=this.axios.get("/master-data/department");this.axios.all([o,a,n,g]).then(this.axios.spread((...e)=>{this.showLoading=!1;const _=e[0],r=e[1],c=e[2],p=e[3];_.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l)),r.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l)),c.data.data.filter(l=>(l.value=l.id,l)),p.data.data.filter(l=>(l.value=l.id,l.name=l.department_full_name,l)),this.optionSelect.mail_register=_.data.data,this.optionSelect.mail_speed=r.data.data,this.optionSelect.mail_division=c.data.data,this.optionSelect.mail_to=p.data.data,this.apiSendmailLogs()})).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}},mounted(){var o,a;this.data.page=((o=this.$route.query)==null?void 0:o.page)||this.data.page,this.data.perPage=((a=this.$route.query)==null?void 0:a.perPage)||this.data.perPage,this.api_master()}},q={class:"automail-sendmail-logs"},A={class:"group-overflow"},B={class:"detail"},N=L('<div class="group-head"><div class="group-first"><i class="bi bi-envelope icon-envelope"></i><div class="name">บันทึกการส่งอีเมลอัตโนมัติ</div></div></div><div class="line"></div>',2),F={class:"group-detail"},M={class:"group-between"},D={class:"group-input"},E=t("div",{class:"name"},"ทะเบียน ",-1),I={class:"group-input"},T=t("div",{class:"name"},"เลขออก สลค. ",-1),K={class:"group-input"},R=t("div",{class:"name"},"ความเร่งด่วน",-1),j={class:"group-input"},z=t("div",{class:"name"},"ชื่อเรื่อง ",-1),O={class:"group-between"},G={class:"group-input"},H=t("div",{class:"name"},"กอง/สำนัก ",-1),J={class:"group-input"},Q=t("div",{class:"name"},"ถึง ",-1),W={class:"group-input"},X=t("div",{class:"name"},"ลงวันที่ตั้งแต่ - ถึง ",-1),Y={class:"group-between"},Z={class:"group-input"},$=t("div",{class:"name"},"ส่งถึง (TO) ",-1),tt={class:"group-input"},at=t("div",{class:"name"},"สำเนาถึง (Cc) ",-1),et={class:"group-input"},st=t("div",{class:"name"},"สำเนาลับถึง (Bcc)",-1),lt={class:"group-input"},ot=t("div",{class:"name"},"วันที่ส่งตั้งแต่ - ถึง ",-1),it={class:"group-button"},dt={class:"button-left"},nt=t("i",{class:"bi bi-arrow-clockwise icon-clockwise"},null,-1),_t=t("div",{class:"button-right"},[t("button",{type:"submit",class:"button-search"},[t("i",{class:"bi bi-search icon-search"}),b(" ค้นหา ")])],-1),ct=t("div",{class:"line"},null,-1),mt={class:"group-body"},rt={class:"table-automail-sendmail-logs"},pt=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ลำดับ"),t("th",{class:"col2"},"สถานะ"),t("th",{class:"col3"},"วันและเวลาที่ส่ง"),t("th",{class:"col4"},"เลขออกสลค."),t("th",{class:"col5"},"ทะเบียนหนังสือ"),t("th",{class:"col6"},"ความเร่งด่วน"),t("th",{class:"col7"},"ชื่อเรื่อง"),t("th",{class:"col8"},"ลงวันที่"),t("th",{class:"col9"},"จาก"),t("th",{class:"col10"},"ถึง"),t("th",{class:"col11"},"To"),t("th",{class:"col12"},"Cc"),t("th",{class:"col13"},"Bcc")])],-1),ut={class:"tbody"},ht={class:"col1"},gt={class:"col2"},vt={class:"col3"},bt={class:"col4"},Vt={class:"col5"},St={class:"col6"},yt={class:"col7"},ft={class:"col8"},Pt={class:"col9"},wt={class:"col10"},kt={class:"col11"},xt={class:"col12"},Ct={class:"col13"},Lt={key:0,class:"tbody-row"},Ut=t("td",{colspan:"13"},"ไม่มีข้อมูล",-1),qt=[Ut],At={class:"group-footer"};function Bt(o,a,n,g,e,_){const r=m("cpn-select"),c=m("cpn-input"),p=m("cpn-autoComplete"),l=m("cpn-datepickerRange"),V=m("Form"),S=m("cpn-pagination"),y=m("cpn-modal-alert"),f=m("cpn-loading");return u(),h("div",q,[t("div",A,[t("div",B,[N,i(V,{onSubmit:_.apiSendmailLogs,onInvalidSubmit:o.onInvalidSubmit},{default:w(()=>[t("div",F,[t("div",M,[t("div",D,[E,i(r,{modelValue:e.data.mail_register,"onUpdate:modelValue":a[0]||(a[0]=s=>e.data.mail_register=s),name:"mail_register",optionSelect:e.optionSelect.mail_register,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),t("div",I,[T,i(c,{modelValue:e.data.mail_number_out,"onUpdate:modelValue":a[1]||(a[1]=s=>e.data.mail_number_out=s),name:"mail_number_out",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",K,[R,i(r,{modelValue:e.data.mail_speed,"onUpdate:modelValue":a[2]||(a[2]=s=>e.data.mail_speed=s),name:"mail_speed",optionSelect:e.optionSelect.mail_speed,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])])]),t("div",j,[z,i(c,{modelValue:e.data.mail_title,"onUpdate:modelValue":a[3]||(a[3]=s=>e.data.mail_title=s),name:"mail_title",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",O,[t("div",G,[H,i(p,{modelValue:e.data.mail_division,"onUpdate:modelValue":a[4]||(a[4]=s=>e.data.mail_division=s),name:"mail_division",optionSelect:e.optionSelect.mail_division,onKeyup:a[5]||(a[5]=s=>_.keyupSubministry(s)),placeholder:"เลือกกอง/สำนัก"},null,8,["modelValue","optionSelect"])]),t("div",J,[Q,i(p,{modelValue:e.data.mail_to,"onUpdate:modelValue":a[6]||(a[6]=s=>e.data.mail_to=s),name:"mail_to",optionSelect:e.optionSelect.mail_to,onKeyup:a[7]||(a[7]=s=>_.keyupDepartment(s)),placeholder:"เลือกหน่วยงานปลายทาง"},null,8,["modelValue","optionSelect"])])]),t("div",W,[X,i(l,{modelValue:e.data.mail_date_st,"onUpdate:modelValue":a[8]||(a[8]=s=>e.data.mail_date_st=s),name:"mail_date_st",placeholder:"เลือกวันที่ - ถึงวันที่"},null,8,["modelValue"])]),t("div",Y,[t("div",Z,[$,i(c,{modelValue:e.data.mail_send_to,"onUpdate:modelValue":a[9]||(a[9]=s=>e.data.mail_send_to=s),name:"mail_send_to",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",tt,[at,i(c,{modelValue:e.data.mail_send_cc,"onUpdate:modelValue":a[10]||(a[10]=s=>e.data.mail_send_cc=s),name:"mail_send_cc",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",et,[st,i(c,{modelValue:e.data.mail_send_bcc,"onUpdate:modelValue":a[11]||(a[11]=s=>e.data.mail_send_bcc=s),name:"mail_send_bcc",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",lt,[ot,i(l,{modelValue:e.data.mail_date_send,"onUpdate:modelValue":a[12]||(a[12]=s=>e.data.mail_date_send=s),name:"mail_date_send",placeholder:"เลือกวันที่ - ถึงวันที่"},null,8,["modelValue"])]),t("div",it,[t("div",dt,[t("button",{type:"button",class:"button-warning",onClick:a[13]||(a[13]=s=>_.cancelClick())},[nt,b(" ล้างการค้นหา ")])]),_t])])]),_:1},8,["onSubmit","onInvalidSubmit"]),ct,t("div",mt,[t("table",rt,[pt,t("tbody",ut,[(u(!0),h(k,null,x(e.data.table,(s,v)=>(u(),h("tr",{class:"tbody-row",key:v},[t("td",ht,d(v+1+e.data.perPage*(e.data.page-1)),1),t("td",gt,d(s.status),1),t("td",vt,d(s.mail_date_send),1),t("td",bt,d(s.mail_number_out),1),t("td",Vt,d(s.mail_register),1),t("td",St,d(s.mail_speed),1),t("td",yt,d(s.mail_title),1),t("td",ft,d(s.mail_date_st),1),t("td",Pt,d(s.mail_division),1),t("td",wt,d(s.mail_to),1),t("td",kt,d(s.mail_send_to),1),t("td",xt,d(s.mail_send_cc),1),t("td",Ct,d(s.mail_send_bcc),1)]))),128)),e.data.table.length==0?(u(),h("tr",Lt,qt)):C("",!0)])])]),t("div",At,[i(S,{page:e.data.page,total:e.data.total,lastPage:e.data.lastPage,perPage:e.data.perPage,onPageChange:_.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),i(y,{modalAlert:e.modalAlert},null,8,["modalAlert"]),i(f,{show:e.showLoading},null,8,["show"])])}const Ft=P(U,[["render",Bt]]);export{Ft as default};
