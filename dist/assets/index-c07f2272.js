import{_ as w}from"./users-cog-duotone-50670cb2.js";import{_ as P,r as c,o as _,c as p,a as t,b as i,d as C,F as x,h as L,i as q,e as U,j as v,t as n}from"./index-d7a8c2b4.js";const b="/assets/envelope-solid-83ddb2ac.svg",A="/assets/share-from-square-solid-59b40d2c.svg";const K={name:"mail-manage-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,regis_id:"",department_id:"",department_dest_id:""},optionSelect:{regis_id:[],department_id:[],department_dest_id:[]}}},methods:{sendmailClick(o){this.$router.push({name:"automail-sendmail-edit",params:{id:o.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},listClick(o){this.$router.push({name:"automail-sendmail-list",params:{id:o.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(o){this.data.perPage=o.perPage,this.data.page=o.page,this.apiSendmailLists()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apiSendmailLists()},apiSendmailLists(){this.data.table=[],this.showLoading=!0,this.axios.get("/book-out-external/book-out-automail",{params:{regis_id:this.data.regis_id,department_id:this.data.department_id,department_dest_id:this.data.department_dest_id,page_size:this.data.perPage,page:this.data.page}}).then(o=>{this.showLoading=!1,o.data.data.meta.filter(e=>{e.book_series.filter(d=>{d.subs.filter(r=>r.disabled=!0)})}),this.data.table=o.data.data.meta,this.data.total=o.data.data.total,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},api_master(){this.showLoading=!0;const o=this.axios.get("/master-data/book-category",{params:{book_type:1}}),e=this.axios.get("/master-data/department-user");this.axios.all([o,e]).then(this.axios.spread((...d)=>{this.showLoading=!1;const r=d[0],a=d[1];r.data.data.filter(l=>(l.value=l.id,l.name=l.name,l)),a.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.regis_id=r.data.data,this.optionSelect.department_dest_id=a.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(d=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})},keyup_regis_type(o){this.optionSelect.sendTo=[],this.axios.get("/master-data/book-category",{params:{keyword:o.target.value}}).then(e=>{e.data.data&&(e.data.data.filter(d=>(d.value=d.id,d.name=d.name,d)),this.optionSelect.regis_id=e.data.data)})},keyup_department(o){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user",{params:{keyword:o.target.value}}).then(e=>{e.data.data&&(e.data.data.filter(d=>(d.value=d.id,d.name=d.desc,d.human_flag=d.human_flag,d.response_type=d.type,d)),this.optionSelect.regis_id=e.data.data)})}},mounted(){var o,e;this.data.page=((o=this.$route.query)==null?void 0:o.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apiSendmailLists(),this.api_master()}},N={class:"mail-inex"},F={class:"group-overflow"},M={class:"detail"},B=U('<div class="group-head"><div class="group-first"><img src="'+w+'" alt="" class="icon-users-cog"><div class="name">รายการหนังสือส่งออก ที่ส่งผ่านอีเมลอัตโนมัติ</div></div></div><div class="line"></div>',2),E={class:"group-detail"},I={class:"group-between"},T={class:"group-input left"},j=t("div",{class:"name"},"ทะเบียน ",-1),z={class:"group-input"},D=t("div",{class:"name"},"เลขออก สลค.",-1),G={class:"group-between"},H={class:"group-input"},J=t("div",{class:"name"},"เรื่อง",-1),O={class:"group-between"},Q={class:"group-input left"},R=t("div",{class:"name"},"จาก",-1),W={class:"group-input"},X=t("div",{class:"name"},"ถึง",-1),Y={class:"group-between"},Z={class:"group-input left"},$=t("div",{class:"name"},"จากวันที่",-1),tt={class:"group-input"},et=t("div",{class:"name"},"ถึงวันที่",-1),at={class:"group-button"},st={class:"button-left"},ot=t("i",{class:"bi bi-arrow-clockwise icon-clockwise"},null,-1),dt=t("div",{class:"button-right"},[t("button",{type:"submit",class:"button-search"},[t("i",{class:"bi bi-search icon-search"}),v(" ค้นหา ")])],-1),lt={class:"group-body"},it={class:"table-department-inex"},nt=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ลำดับ"),t("th",{class:"col2"},"ความเร่งด่วน"),t("th",{class:"col3"},"ชั้นความลับ"),t("th",{class:"col4"},"เลขออก สลค."),t("th",{class:"col5"},"ทะเบียนหนังสือ"),t("th",{class:"col6"},"ชื่อเรื่อง"),t("th",{class:"col7"},"ชนิดหนังสือ"),t("th",{class:"col8"},"ลงวันที่"),t("th",{class:"col9"},"จาก"),t("th",{class:"col10"},"ถึง"),t("th",{class:"col11"},[t("img",{src:b,alt:"",class:"icon-send"})])])],-1),ct={class:"tbody"},rt={class:"col1"},_t={class:"col2"},pt={class:"col3"},ut={class:"col4"},ht={class:"col5"},mt={class:"col6"},gt={class:"col7"},vt={class:"col8"},bt={class:"col9"},yt={class:"col10"},ft={class:"col11"},kt={class:"group-icon"},St=["onClick"],Vt=["onClick"],wt={key:0,class:"tbody-row"},Pt=t("td",{colspan:"12"},"ไม่มีข้อมูล",-1),Ct=[Pt],xt={class:"group-footer"};function Lt(o,e,d,r,a,l){const u=c("cpn-autoComplete"),h=c("cpn-input"),m=c("cpn-datepicker"),y=c("Form"),f=c("cpn-pagination"),k=c("cpn-modal-alert"),S=c("cpn-loading");return _(),p("div",N,[t("div",F,[t("div",M,[B,i(y,{onSubmit:l.apiSendmailLists,onInvalidSubmit:o.onInvalidSubmit},{default:C(()=>[t("div",E,[t("div",I,[t("div",T,[j,i(u,{modelValue:a.data.regis_id,"onUpdate:modelValue":e[0]||(e[0]=s=>a.data.regis_id=s),name:"regis_id",onKeyup:l.keyup_regis_type,optionSelect:a.optionSelect.regis_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","onKeyup","optionSelect"])]),t("div",z,[D,i(h,{modelValue:a.data.document_number,"onUpdate:modelValue":e[1]||(e[1]=s=>a.data.document_number=s),name:"document_number",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",G,[t("div",H,[J,i(h,{modelValue:a.data.name,"onUpdate:modelValue":e[2]||(e[2]=s=>a.data.name=s),name:"name",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",O,[t("div",Q,[R,i(u,{modelValue:a.data.department_id,"onUpdate:modelValue":e[3]||(e[3]=s=>a.data.department_id=s),name:"department_id",onKeyup:l.keyup_department,optionSelect:a.optionSelect.department_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","onKeyup","optionSelect"])]),t("div",W,[X,i(u,{modelValue:a.data.department_dest_id,"onUpdate:modelValue":e[4]||(e[4]=s=>a.data.department_dest_id=s),name:"department_dest_id",onKeyup:l.keyup_department,optionSelect:a.optionSelect.department_dest_id,placeholder:"เลือกหน่วยงานปลายทาง"},null,8,["modelValue","onKeyup","optionSelect"])])]),t("div",Y,[t("div",Z,[$,i(m,{modelValue:a.data.start_date,"onUpdate:modelValue":e[5]||(e[5]=s=>a.data.start_date=s),name:"start_date",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",tt,[et,i(m,{modelValue:a.data.end_date,"onUpdate:modelValue":e[6]||(e[6]=s=>a.data.end_date=s),name:"end_date",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",at,[t("div",st,[t("button",{type:"button",class:"button-warning",onClick:e[7]||(e[7]=s=>o.cancelClick())},[ot,v(" ล้างการค้นหา ")])]),dt])])]),_:1},8,["onSubmit","onInvalidSubmit"]),t("div",lt,[t("table",it,[nt,t("tbody",ct,[(_(!0),p(x,null,L(a.data.table,(s,g)=>(_(),p("tr",{class:"tbody-row",key:g},[t("td",rt,n(g+1+a.data.perPage*(a.data.page-1)),1),t("td",_t,n(s.speed_name),1),t("td",pt,n(s.secret_name),1),t("td",ut,n(s.book_out_document_number),1),t("td",ht,n(s.book_regis_name),1),t("td",mt,n(s.subject),1),t("td",gt,n(s.book_type_name),1),t("td",vt,n(s.as_of_date),1),t("td",bt,n(s.from),1),t("td",yt,n(s.to),1),t("td",ft,[t("div",kt,[t("img",{onClick:V=>l.listClick(s),src:A,alt:"",class:"icon-send pointer"},null,8,St),t("img",{onClick:V=>l.sendmailClick(s),src:b,alt:"",class:"icon-send pointer"},null,8,Vt)])])]))),128)),a.data.table.length==0?(_(),p("tr",wt,Ct)):q("",!0)])])]),t("div",xt,[i(f,{page:a.data.page,total:a.data.total,lastPage:a.data.lastPage,perPage:a.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),i(k,{modalAlert:a.modalAlert},null,8,["modalAlert"]),i(S,{show:a.showLoading},null,8,["show"])])}const At=P(K,[["render",Lt]]);export{At as default};
