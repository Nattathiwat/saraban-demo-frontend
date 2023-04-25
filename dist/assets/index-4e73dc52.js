import{_ as y}from"./ballot-duotone-f2459825.js";import{_ as f}from"./plus-circle-duotone-64bd32fe.js";import{_ as P,r as d,o as n,c as r,a as e,b as h,F as C,h as x,i as p,t as c,j as g}from"./index-cfcf06cf.js";const N={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{addClick(){this.$router.push({name:"my-work.booking-receive-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"my-work.booking-receive-edit",params:{id:s.id},query:{book_type:s.book_type,regis_id:s.regis_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(s=>{if(this.showLoading=!1,s.data.data){let o=[this.data.response_name],_="";o.filter(t=>{_+=t+","}),s.data.data.filter(t=>{t.speedName=t.speed_name,t.bookingNo=t.receive_document_number,t.referBookno=t.document_number,t.bookingSubject=t.subject,t.typename=t.book_type_name,t.date=t.as_of_date,t.response=t.response_name,t.statusName=t.status,t.person=_,this.data.total=t.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},deleteClick(s){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือรับเข้า",message:`“${s.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){o.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.apigetimport()}}}}}},mounted(){var s,o;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((o=this.$route.query)==null?void 0:o.perPage)||this.data.perPage,this.apigetimport()}},A={class:"booking-receive-inex"},S={class:"group-overflow"},V={class:"detail"},L={class:"group-head"},j={class:"group-first"},w=e("img",{src:y,alt:"",class:"icon-users-cog"},null,-1),B=e("div",{class:"name"},"หนังสือรับเข้า",-1),M=e("div",{class:"group-image"},[e("img",{src:f,alt:"",class:"icon-plus"}),g(" สร้างหนังสือรับเข้า ")],-1),q=[M],F={class:"group-end"},E={class:"search"},T=e("div",{class:"line"},null,-1),z={class:"group-body"},D={class:"table-booking-receive-inex"},I=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"},"ความเร่งด่วน"),e("th",{class:"col2"},"เลขรับ"),e("th",{class:"col3"},"เลขที่หนังสือ"),e("th",{class:"col4"},"ชื่อเรื่อง"),e("th",{class:"col5"},"ชนิด"),e("th",{class:"col6"},"ลงวันที่"),e("th",{class:"col7"},"ผู้รับผิดชอบ"),e("th",{class:"col8"},"สถานะ")])],-1),U={class:"tbody"},G=["onClick"],H={class:"col1"},J={class:"col2"},K={class:"col3"},O={class:"col4"},Q={class:"group-show none-bg"},R={class:"span"},W={class:"show-detail"},X={class:"col5"},Y={class:"col6"},Z={class:"col7"},$={class:"group-show"},ee={class:"span"},te={class:"show-detail"},se={class:"col8"},ae={key:0,class:"tbody-row"},oe=e("td",{colspan:"8"},"ไม่มีข้อมูล",-1),ie=[oe],ce={class:"group-footer"};function le(s,o,_,t,i,l){const u=d("cpn-input"),m=d("cpn-pagination"),b=d("cpn-modal-alert"),k=d("cpn-loading");return n(),r("div",A,[e("div",S,[e("div",V,[e("div",L,[e("div",j,[w,B,e("button",{type:"button",class:"add-booking-receive",onClick:o[0]||(o[0]=a=>l.addClick())},q)]),e("div",F,[e("div",E,[h(u,{modelValue:i.data.search,"onUpdate:modelValue":o[1]||(o[1]=a=>i.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:o[2]||(o[2]=a=>l.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),T,e("div",z,[e("table",D,[I,e("tbody",U,[(n(!0),r(C,null,x(i.data.table,(a,v)=>(n(),r("tr",{class:"tbody-row pointer",key:v,onClick:de=>l.editClick(a)},[e("td",H,c(a.speedName),1),e("td",J,c(a.bookingNo),1),e("td",K,c(a.referBookno),1),e("td",O,[e("div",Q,[e("span",R,c(a.bookingSubject),1),e("div",W,[g(c(a.bookingSubject)+" ",1),p("",!0)])])]),e("td",X,c(a.typename),1),e("td",Y,c(a.date),1),e("td",Z,[e("div",$,[e("span",ee,c(a.response),1),e("div",te,[g(c(a.response)+" ",1),p("",!0)])])]),e("td",se,c(a.statusName),1)],8,G))),128)),i.data.table.length==0?(n(),r("tr",ae,ie)):p("",!0)])])]),e("div",ce,[h(m,{page:i.data.page,total:i.data.total,lastPage:i.data.lastPage,perPage:i.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),h(b,{modalAlert:i.modalAlert},null,8,["modalAlert"]),h(k,{show:i.showLoading},null,8,["show"])])}const _e=P(N,[["render",le]]);export{_e as default};
