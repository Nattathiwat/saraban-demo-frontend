import{_ as v,r as n,o as d,c as l,a as t,b as r,F as k,h as y,i as _,t as i,j as h,w as P,v as f}from"./index-4e2f919c.js";import{_ as w}from"./ballot-duotone-f2459825.js";import{_ as C}from"./plus-circle-duotone-64bd32fe.js";const N={name:"my-work-waiting-booking-receive",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{addClick(){this.$router.push({name:"my-work.waiting-booking-receive-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"my-work.waiting-booking-receive-edit",params:{id:s.id},query:{book_type:s.book_type,regis_id:s.regis_id,response_id:s.response_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive/deliver/waiting-receive",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(s=>{this.showLoading=!1,s.data.data&&(s.data.data.filter(e=>{e.speedName=e.speed_name,e.bookingNo=e.receive_document_number,e.referBookno=e.document_number,e.bookingSubject=e.subject,e.typename=e.book_type_name,e.date=e.as_of_date,e.response=e.response_name,e.statusName=e.status,this.data.total=e.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}},mounted(){var s,e;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apigetimport()}},x={class:"my-work-waiting-booking-receive"},S={class:"group-overflow"},V={class:"detail"},L={class:"group-head"},j={class:"group-first"},A=t("img",{src:w,alt:"",class:"icon-users-cog"},null,-1),B=t("div",{class:"name"},"หนังสือรอรับเข้า",-1),q=t("div",{class:"group-image"},[t("img",{src:C,alt:"",class:"icon-plus"}),h(" สร้างหนังสือรับเข้า ")],-1),F=[q],M={class:"group-end"},D={class:"search"},E=t("div",{class:"line"},null,-1),T={class:"group-body"},z={class:"table-my-work-waiting-booking-receive"},I=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ความเร่งด่วน"),t("th",{class:"col2"},"เลขรับ"),t("th",{class:"col3"},"เลขที่หนังสือ"),t("th",{class:"col4"},"ชื่อเรื่อง"),t("th",{class:"col5"},"ชนิด"),t("th",{class:"col6"},"ลงวันที่"),t("th",{class:"col7"},"ผู้รับผิดชอบ"),t("th",{class:"col8"},"สถานะ")])],-1),U={class:"tbody"},G=["onClick"],H={class:"col1"},J={class:"col2"},K={class:"col3"},O={class:"col4"},Q={class:"group-show none-bg"},R={class:"span"},W={class:"show-detail"},X={class:"col5"},Y={class:"col6"},Z={class:"col7"},$={class:"group-show"},tt={class:"span"},et={class:"show-detail"},st={class:"col8"},at={key:0,class:"tbody-row"},ot=t("td",{colspan:"8"},"ไม่มีข้อมูล",-1),it=[ot],ct={class:"group-footer"};function nt(s,e,dt,lt,o,c){const g=n("cpn-input"),p=n("cpn-pagination"),u=n("cpn-modal-alert"),m=n("cpn-loading");return d(),l("div",x,[t("div",S,[t("div",V,[t("div",L,[t("div",j,[A,B,t("button",{type:"button",class:"add-booking-receive",onClick:e[0]||(e[0]=a=>c.addClick())},F)]),t("div",M,[t("div",D,[r(g,{modelValue:o.data.search,"onUpdate:modelValue":e[1]||(e[1]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=a=>c.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),E,t("div",T,[t("table",z,[I,t("tbody",U,[(d(!0),l(k,null,y(o.data.table,(a,b)=>(d(),l("tr",{key:b,class:"tbody-row pointer",onClick:rt=>c.editClick(a)},[t("td",H,i(a.speedName),1),t("td",J,i(a.bookingNo),1),t("td",K,i(a.referBookno),1),t("td",O,[t("div",Q,[t("span",R,i(a.bookingSubject),1),t("div",W,[h(i(a.bookingSubject)+" ",1),_("",!0)])])]),t("td",X,i(a.typename),1),t("td",Y,i(a.date),1),t("td",Z,[P(t("div",$,[t("span",tt,i(a.response),1),t("div",et,[h(i(a.response)+" ",1),_("",!0)])],512),[[f,a.response]])]),t("td",st,i(a.statusName=="ร่าง"?"รอรับเข้า":a.statusName),1)],8,G))),128)),o.data.table.length==0?(d(),l("tr",at,it)):_("",!0)])])]),t("div",ct,[r(p,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:c.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),r(u,{modalAlert:o.modalAlert},null,8,["modalAlert"]),r(m,{show:o.showLoading},null,8,["show"])])}const pt=v(N,[["render",nt]]);export{pt as default};
