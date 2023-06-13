import{_ as U}from"./users-cog-duotone-50670cb2.js";import{_ as A,r as p,o as c,c as r,a as t,b as i,d as K,F as m,h as y,i as N,e as F,j as S,n as g,t as n}from"./index-7a618079.js";const V="/assets/envelope-solid-83ddb2ac.svg",M="/assets/share-from-square-solid-59b40d2c.svg";const B={name:"mail-manage-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,regis_id:"",department_id:"",department_dest_id:""},optionSelect:{regis_id:[],department_id:[],department_dest_id:[]}}},methods:{sendmailClick(d){this.$router.push({name:"automail-sendmail-edit",params:{id:d.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},listClick(d){this.$router.push({name:"automail-sendmail-list",params:{id:d.book_regis_id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(d){this.data.perPage=d.perPage,this.data.page=d.page,this.apiSendmailLists()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apiSendmailLists()},apiSendmailLists(){this.data.table=[],this.showLoading=!0,this.axios.get("/book-out-external/book-out-automail",{params:{regis_id:this.data.regis_id,department_id:this.data.department_id,department_dest_id:this.data.department_dest_id,page_size:this.data.perPage,page:this.data.page}}).then(d=>{this.showLoading=!1,d.data.data.meta.filter(e=>{let a=0;e.book_series.filter(h=>{a+=h.subs.length}),a+=e.book_series.length,a+=2,e.rowspan=a}),this.data.table=d.data.data.meta,this.data.total=d.data.data.total,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(d=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})},api_master(){this.showLoading=!0;const d=this.axios.get("/master-data/book-category",{params:{book_type:1}}),e=this.axios.get("/master-data/department-user");this.axios.all([d,e]).then(this.axios.spread((...a)=>{this.showLoading=!1;const h=a[0],s=a[1];h.data.data.filter(l=>(l.value=l.id,l.name=l.name,l)),s.data.data.filter(l=>(l.value=l.id,l.name=l.desc,l.human_flag=l.human_flag,l.response_type=l.type,l)),this.optionSelect.regis_id=h.data.data,this.optionSelect.department_dest_id=s.data.data,this.apiSendmailLists()})).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},keyup_regis_type(d){this.optionSelect.sendTo=[],this.axios.get("/master-data/book-category",{params:{keyword:d.target.value}}).then(e=>{e.data.data&&(e.data.data.filter(a=>(a.value=a.id,a.name=a.name,a)),this.optionSelect.regis_id=e.data.data)})},keyup_department(d){this.optionSelect.sendTo=[],this.axios.get("/master-data/department-user",{params:{keyword:d.target.value}}).then(e=>{e.data.data&&(e.data.data.filter(a=>(a.value=a.id,a.name=a.desc,a.human_flag=a.human_flag,a.response_type=a.type,a)),this.optionSelect.regis_id=e.data.data)})}},mounted(){var d,e;this.data.page=((d=this.$route.query)==null?void 0:d.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.api_master()}},E={class:"mail-inex"},I={class:"group-overflow"},T={class:"detail"},j=F('<div class="group-head"><div class="group-first"><img src="'+U+'" alt="" class="icon-users-cog"><div class="name">รายการหนังสือส่งออก ที่ส่งผ่านอีเมลอัตโนมัติ</div></div></div><div class="line"></div>',2),z={class:"group-detail"},D={class:"group-between"},G={class:"group-input left"},H=t("div",{class:"name"},"ทะเบียน ",-1),J={class:"group-input"},O=t("div",{class:"name"},"เลขออก สลค.",-1),Q={class:"group-between"},R={class:"group-input"},W=t("div",{class:"name"},"เรื่อง",-1),X={class:"group-between"},Y={class:"group-input left"},Z=t("div",{class:"name"},"จาก",-1),$={class:"group-input"},tt=t("div",{class:"name"},"ถึง",-1),et={class:"group-between"},st={class:"group-input left"},at=t("div",{class:"name"},"จากวันที่",-1),ot={class:"group-input"},dt=t("div",{class:"name"},"ถึงวันที่",-1),lt={class:"group-button"},nt={class:"button-left"},it=t("i",{class:"bi bi-arrow-clockwise icon-clockwise"},null,-1),ct=t("div",{class:"button-right"},[t("button",{type:"submit",class:"button-search"},[t("i",{class:"bi bi-search icon-search"}),S(" ค้นหา ")])],-1),rt={class:"group-body"},_t={class:"table-department-inex"},pt=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ลำดับ"),t("th",{class:"col2"},"ความเร่งด่วน"),t("th",{class:"col3"},"ชั้นความลับ"),t("th",{class:"col4"},"เลขออก สลค."),t("th",{class:"col5"},"ทะเบียนหนังสือ"),t("th",{class:"col6"},"ชื่อเรื่อง"),t("th",{class:"col7"},"ชนิดหนังสือ"),t("th",{class:"col8"},"ลงวันที่"),t("th",{class:"col9"},"จาก"),t("th",{class:"col10"},"ถึง"),t("th",{class:"col11"},[t("img",{src:V,alt:"",class:"icon-send"})])])],-1),ut={class:"tbody"},ht=["rowspan"],mt={class:"col2"},gt={class:"col3"},bt={class:"col4"},vt={class:"col5"},yt={class:"col6"},kt={class:"col7"},ft={class:"col8"},wt={class:"col9"},St={class:"col10"},Vt=t("td",{class:"col11"},null,-1),Pt={colspan:"9",class:"col2",style:{"text-align":"left"}},Ct={class:"col11"},Lt={class:"group-icon"},xt=["onClick"],qt=t("td",{class:"col1"},[t("div")],-1),Ut=t("td",{class:"col2"},null,-1),At={class:"col3"},Kt={class:"col4"},Nt=t("td",{class:"col5"},null,-1),Ft=t("td",{class:"col6"},null,-1),Mt={class:"col7"},Bt={class:"col8"},Et={class:"col9"},It={class:"col11"},Tt={class:"group-icon"},jt=["onClick"],zt=t("tr",{class:"tbody-row-end2"},[t("td",{colspan:"11"})],-1),Dt=t("td",{colspan:"11"},null,-1),Gt=[Dt],Ht={key:0,class:"tbody-row"},Jt=t("td",{colspan:"11"},"ไม่มีข้อมูล",-1),Ot=[Jt],Qt={class:"group-footer"};function Rt(d,e,a,h,s,l){const b=p("cpn-autoComplete"),k=p("cpn-input"),f=p("cpn-datepicker"),P=p("Form"),C=p("cpn-pagination"),L=p("cpn-modal-alert"),x=p("cpn-loading");return c(),r("div",E,[t("div",I,[t("div",T,[j,i(P,{onSubmit:l.apiSendmailLists,onInvalidSubmit:d.onInvalidSubmit},{default:K(()=>[t("div",z,[t("div",D,[t("div",G,[H,i(b,{modelValue:s.data.regis_id,"onUpdate:modelValue":e[0]||(e[0]=o=>s.data.regis_id=o),name:"regis_id",onKeyup:l.keyup_regis_type,optionSelect:s.optionSelect.regis_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","onKeyup","optionSelect"])]),t("div",J,[O,i(k,{modelValue:s.data.document_number,"onUpdate:modelValue":e[1]||(e[1]=o=>s.data.document_number=o),name:"document_number",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",Q,[t("div",R,[W,i(k,{modelValue:s.data.name,"onUpdate:modelValue":e[2]||(e[2]=o=>s.data.name=o),name:"name",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",X,[t("div",Y,[Z,i(b,{modelValue:s.data.department_id,"onUpdate:modelValue":e[3]||(e[3]=o=>s.data.department_id=o),name:"department_id",onKeyup:l.keyup_department,optionSelect:s.optionSelect.department_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","onKeyup","optionSelect"])]),t("div",$,[tt,i(b,{modelValue:s.data.department_dest_id,"onUpdate:modelValue":e[4]||(e[4]=o=>s.data.department_dest_id=o),name:"department_dest_id",onKeyup:l.keyup_department,optionSelect:s.optionSelect.department_dest_id,placeholder:"เลือกหน่วยงานปลายทาง"},null,8,["modelValue","onKeyup","optionSelect"])])]),t("div",et,[t("div",st,[at,i(f,{modelValue:s.data.start_date,"onUpdate:modelValue":e[5]||(e[5]=o=>s.data.start_date=o),name:"start_date",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",ot,[dt,i(f,{modelValue:s.data.end_date,"onUpdate:modelValue":e[6]||(e[6]=o=>s.data.end_date=o),name:"end_date",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",lt,[t("div",nt,[t("button",{type:"button",class:"button-warning",onClick:e[7]||(e[7]=o=>d.cancelClick())},[it,S(" ล้างการค้นหา ")])]),ct])])]),_:1},8,["onSubmit","onInvalidSubmit"]),t("div",rt,[t("table",_t,[pt,t("tbody",ut,[(c(!0),r(m,null,y(s.data.table,(o,u)=>(c(),r(m,{key:u},[t("tr",{class:g(["tbody-row tbody-row-index",u%2!=0?"color-tr1":"color-tr2"])},[t("td",{class:g(["col1",u%2!=0?"color-tr1":"color-tr2"]),rowspan:o.rowspan},n(u+1+s.data.perPage*(s.data.page-1)),11,ht),t("td",mt,n(o.speed_name),1),t("td",gt,n(o.secret_name),1),t("td",bt,n(o.book_out_document_number),1),t("td",vt,n(o.book_regis_name),1),t("td",yt,n(o.subject),1),t("td",kt,n(o.book_type_name),1),t("td",ft,n(o.as_of_date),1),t("td",wt,n(o.from),1),t("td",St,n(o.to),1),Vt],2),(c(!0),r(m,null,y(o.book_series,(v,q)=>(c(),r(m,{key:q},[t("tr",{class:g(["tbody-row",(u%2==0,"color-tr3")])},[t("td",Pt,"ชุดที่ #"+n(v.no),1),t("td",Ct,[t("div",Lt,[t("img",{onClick:_=>l.listClick(v),src:M,alt:"",class:"icon-send pointer"},null,8,xt)])])],2),(c(!0),r(m,null,y(v.subs,(_,w)=>(c(),r("tr",{class:g(["tbody-row",w%2!=0?"color-tr1":"color-tr2"]),key:w},[qt,Ut,t("td",At,n(_.book_out_document_number),1),t("td",Kt,n(_.book_regis_name),1),Nt,Ft,t("td",Mt,n(_.as_of_date),1),t("td",Bt,n(_.from),1),t("td",Et,n(_.to),1),t("td",It,[t("div",Tt,[t("img",{onClick:Wt=>l.sendmailClick(_),src:V,alt:"",class:"icon-send pointer"},null,8,jt)])])],2))),128)),zt],64))),128)),t("tr",{class:g(u%2!=0?"tbody-row-end1":"tbody-row-end2")},Gt,2)],64))),128)),s.data.table.length==0?(c(),r("tr",Ht,Ot)):N("",!0)])])]),t("div",Qt,[i(C,{page:s.data.page,total:s.data.total,lastPage:s.data.lastPage,perPage:s.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),i(L,{modalAlert:s.modalAlert},null,8,["modalAlert"]),i(x,{show:s.showLoading},null,8,["show"])])}const Zt=A(B,[["render",Rt]]);export{Zt as default};
