import{_ as k}from"./ballot-duotone-f2459825.js";import{_ as v}from"./plus-circle-duotone-64bd32fe.js";import{_ as y,r as l,o as n,c as d,a as t,b as r,F as f,h as P,i as h,t as i,j as _}from"./index-76f1aa95.js";const w={name:"my-work-waiting-booking-receive",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{addClick(){this.$router.push({name:"my-work.waiting-booking-receive-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"my-work.waiting-booking-receive-edit",params:{id:s.id},query:{book_type:s.book_type,regis_id:s.regis_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive/waiting-receive",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(s=>{this.showLoading=!1,s.data.data&&(s.data.data.filter(e=>{e.speedName=e.speed_name,e.bookingNo=e.receive_document_number,e.referBookno=e.document_number,e.bookingSubject=e.subject,e.typename=e.book_type_name,e.date=e.as_of_date,e.response=e.response_name,e.statusName=e.status,this.data.total=e.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},deleteClick(s){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือรอรับเข้า",message:`“${s.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรอรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apigetimport()}}}}}},mounted(){var s,e;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apigetimport()}},C={class:"my-work-waiting-booking-receive"},N={class:"group-overflow"},x={class:"detail"},A={class:"group-head"},S={class:"group-first"},V=t("img",{src:k,alt:"",class:"icon-users-cog"},null,-1),L=t("div",{class:"name"},"หนังสือรอรับเข้า",-1),j=t("div",{class:"group-image"},[t("img",{src:v,alt:"",class:"icon-plus"}),_(" สร้างหนังสือรอรับเข้า ")],-1),B=[j],M={class:"group-end"},q={class:"search"},F=t("div",{class:"line"},null,-1),E={class:"group-body"},T={class:"table-my-work-waiting-booking-receive"},z=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ความเร่งด่วน"),t("th",{class:"col2"},"เลขรับ"),t("th",{class:"col3"},"เลขที่หนังสือ"),t("th",{class:"col4"},"ชื่อเรื่อง"),t("th",{class:"col5"},"ชนิด"),t("th",{class:"col6"},"ลงวันที่"),t("th",{class:"col7"},"ผู้รับผิดชอบ"),t("th",{class:"col8"},"สถานะ")])],-1),D={class:"tbody"},I=["onClick"],U={class:"col1"},G={class:"col2"},H={class:"col3"},J={class:"col4"},K={class:"group-show none-bg"},O={class:"span"},Q={class:"show-detail"},R={class:"col5"},W={class:"col6"},X={class:"col7"},Y={class:"group-show"},Z={class:"span"},$={class:"show-detail"},tt={class:"col8"},et={key:0,class:"tbody-row"},st=t("td",{colspan:"8"},"ไม่มีข้อมูล",-1),at=[st],ot={class:"group-footer"};function it(s,e,ct,lt,o,c){const g=l("cpn-input"),p=l("cpn-pagination"),u=l("cpn-modal-alert"),m=l("cpn-loading");return n(),d("div",C,[t("div",N,[t("div",x,[t("div",A,[t("div",S,[V,L,t("button",{type:"button",class:"add-booking-receive",onClick:e[0]||(e[0]=a=>c.addClick())},B)]),t("div",M,[t("div",q,[r(g,{modelValue:o.data.search,"onUpdate:modelValue":e[1]||(e[1]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=a=>c.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),F,t("div",E,[t("table",T,[z,t("tbody",D,[(n(!0),d(f,null,P(o.data.table,(a,b)=>(n(),d("tr",{key:b,class:"tbody-row pointer",onClick:nt=>c.editClick(a)},[t("td",U,i(a.speedName),1),t("td",G,i(a.bookingNo),1),t("td",H,i(a.referBookno),1),t("td",J,[t("div",K,[t("span",O,i(a.bookingSubject),1),t("div",Q,[_(i(a.bookingSubject)+" ",1),h("",!0)])])]),t("td",R,i(a.typename),1),t("td",W,i(a.date),1),t("td",X,[t("div",Y,[t("span",Z,i(a.response),1),t("div",$,[_(i(a.response)+" ",1),h("",!0)])])]),t("td",tt,i(a.statusName),1)],8,I))),128)),o.data.table.length==0?(n(),d("tr",et,at)):h("",!0)])])]),t("div",ot,[r(p,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:c.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),r(u,{modalAlert:o.modalAlert},null,8,["modalAlert"]),r(m,{show:o.showLoading},null,8,["show"])])}const _t=y(w,[["render",it]]);export{_t as default};