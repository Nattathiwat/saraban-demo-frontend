import{_ as k}from"./ballot-duotone-f2459825.js";import{_ as y}from"./plus-circle-duotone-64bd32fe.js";import{_ as P,r as d,o as i,c as n,a as t,b as r,F as f,h as v,i as h,t as l,j as _}from"./index-0d489e4b.js";const x={name:"booking-out-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{addClick(){this.$router.push({name:"my-work.booking-out-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"my-work.booking-out-edit",params:{id:a.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apigetexport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetexport()},apigetexport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-out",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(a=>{this.showLoading=!1,a.data.data&&(a.data.data.filter(e=>{e.speedName=e.speed_name,e.bookingNoN=e.book_out_num,e.bookingSubject=e.subject,e.department_name=e.department_name,e.date=e.regis_date,e.typename=e.book_type,e.statusName=e.status_name,this.data.total=e.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือส่งออก",message:`“${a.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apigetexport()}}}}}},mounted(){var a,e;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apigetexport()}},C={class:"booking-out-inex"},N={class:"group-overflow"},A={class:"detail"},S={class:"group-head"},V={class:"group-first"},w=t("img",{src:k,alt:"",class:"icon-users-cog"},null,-1),L=t("div",{class:"name"},"หนังสือส่งออก",-1),M=t("div",{class:"group-image"},[t("img",{src:y,alt:"",class:"icon-plus"}),_(" สร้างหนังสือส่งออก ")],-1),j=[M],q={class:"group-end"},B={class:"search"},F=t("div",{class:"line"},null,-1),E={class:"group-body"},T={class:"table-booking-out-inex"},z=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ความเร่งด่วน"),t("th",{class:"col2"},"เลขที่หนังสือออก"),t("th",{class:"col3"},"ชื่อเรื่อง"),t("th",{class:"col4"},"หน่วยงานปลายทาง"),t("th",{class:"col5"},"ลงวันที่"),t("th",{class:"col6"},"ชนิด"),t("th",{class:"col7"},"ผู้รับผิดชอบ"),t("th",{class:"col8"},"สถานะ")])],-1),D={class:"tbody"},I=["onClick"],U={class:"col1"},G={class:"col2"},H={class:"col3"},J={class:"col4"},K={class:"col5"},O={class:"col6"},Q={class:"col7"},R={class:"group-show"},W={class:"span"},X={class:"show-detail"},Y={class:"col8"},Z={key:0,class:"tbody-row"},$=t("td",{colspan:"8"},"ไม่มีข้อมูล",-1),tt=[$],et={class:"group-footer"};function at(a,e,st,ot,o,c){const g=d("cpn-input"),p=d("cpn-pagination"),u=d("cpn-modal-alert"),m=d("cpn-loading");return i(),n("div",C,[t("div",N,[t("div",A,[t("div",S,[t("div",V,[w,L,t("button",{type:"button",class:"add-booking-out",onClick:e[0]||(e[0]=s=>c.addClick())},j)]),t("div",q,[t("div",B,[r(g,{modelValue:o.data.search,"onUpdate:modelValue":e[1]||(e[1]=s=>o.data.search=s),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=s=>c.search()),placeholder:"เลขที่หนังสือออก/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),F,t("div",E,[t("table",T,[z,t("tbody",D,[(i(!0),n(f,null,v(o.data.table,(s,b)=>(i(),n("tr",{class:"tbody-row pointer",key:b,onClick:lt=>c.editClick(s)},[t("td",U,l(s.speedName),1),t("td",G,l(s.bookingNoN),1),t("td",H,l(s.bookingSubject),1),t("td",J,l(s.department_name),1),t("td",K,l(s.date),1),t("td",O,l(s.typename),1),t("td",Q,[t("div",R,[t("span",W,l(s.creater_name),1),t("div",X,[_(l(s.creater_name)+" ",1),h("",!0)])])]),t("td",Y,l(s.statusName),1)],8,I))),128)),o.data.table.length==0?(i(),n("tr",Z,tt)):h("",!0)])])]),t("div",et,[r(p,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:c.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),r(u,{modalAlert:o.modalAlert},null,8,["modalAlert"]),r(m,{show:o.showLoading},null,8,["show"])])}const nt=P(x,[["render",at]]);export{nt as default};
