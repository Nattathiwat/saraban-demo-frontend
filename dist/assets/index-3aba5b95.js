import{_ as k}from"./ballot-duotone-f2459825.js";import{_ as v}from"./plus-circle-duotone-64bd32fe.js";import{_ as y,r as l,o as d,c as n,a as e,b as r,F as f,h as P,i as h,t as i,j as _}from"./index-19a6b528.js";const C={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{addClick(){this.$router.push({name:"my-work.booking-receive-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"my-work.booking-receive-edit",params:{id:s.id},query:{book_type:s.book_type,regis_id:s.regis_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(s=>{this.showLoading=!1,s.data.data&&(s.data.data.filter(t=>{t.speedName=t.speed_name,t.bookingNo=t.receive_document_number,t.referBookno=t.document_number,t.bookingSubject=t.subject,t.typename=t.book_type_name,t.date=t.as_of_date,t.response=t.response_name,t.statusName=t.status,this.data.total=t.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},deleteClick(s){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือรับเข้า",message:`“${s.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){t.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.apigetimport()}}}}}},mounted(){var s,t;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((t=this.$route.query)==null?void 0:t.perPage)||this.data.perPage,this.apigetimport()}},x={class:"booking-receive-inex"},N={class:"group-overflow"},A={class:"detail"},S={class:"group-head"},V={class:"group-first"},w=e("img",{src:k,alt:"",class:"icon-users-cog"},null,-1),L=e("div",{class:"name"},"หนังสือรับเข้า",-1),j=e("div",{class:"group-image"},[e("img",{src:v,alt:"",class:"icon-plus"}),_(" สร้างหนังสือรับเข้า ")],-1),B=[j],M={class:"group-end"},q={class:"search"},F=e("div",{class:"line"},null,-1),E={class:"group-body"},T={class:"table-booking-receive-inex"},z=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"},"ความเร่งด่วน"),e("th",{class:"col2"},"เลขรับ"),e("th",{class:"col3"},"เลขที่หนังสือ"),e("th",{class:"col4"},"ชื่อเรื่อง"),e("th",{class:"col5"},"ชนิด"),e("th",{class:"col6"},"ลงวันที่"),e("th",{class:"col7"},"ผู้รับผิดชอบ"),e("th",{class:"col8"},"สถานะ")])],-1),D={class:"tbody"},I=["onClick"],U={class:"col1"},G={class:"col2"},H={class:"col3"},J={class:"col4"},K={class:"group-show none-bg"},O={class:"span"},Q={class:"show-detail"},R={class:"col5"},W={class:"col6"},X={class:"col7"},Y={class:"group-show"},Z={class:"span"},$={class:"show-detail"},ee={class:"col8"},te={key:0,class:"tbody-row"},se=e("td",{colspan:"8"},"ไม่มีข้อมูล",-1),ae=[se],oe={class:"group-footer"};function ie(s,t,ce,le,o,c){const p=l("cpn-input"),g=l("cpn-pagination"),u=l("cpn-modal-alert"),m=l("cpn-loading");return d(),n("div",x,[e("div",N,[e("div",A,[e("div",S,[e("div",V,[w,L,e("button",{type:"button",class:"add-booking-receive",onClick:t[0]||(t[0]=a=>c.addClick())},B)]),e("div",M,[e("div",q,[r(p,{modelValue:o.data.search,"onUpdate:modelValue":t[1]||(t[1]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:t[2]||(t[2]=a=>c.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),F,e("div",E,[e("table",T,[z,e("tbody",D,[(d(!0),n(f,null,P(o.data.table,(a,b)=>(d(),n("tr",{class:"tbody-row pointer",key:b,onClick:de=>c.editClick(a)},[e("td",U,i(a.speedName),1),e("td",G,i(a.bookingNo),1),e("td",H,i(a.referBookno),1),e("td",J,[e("div",K,[e("span",O,i(a.bookingSubject),1),e("div",Q,[_(i(a.bookingSubject)+" ",1),h("",!0)])])]),e("td",R,i(a.typename),1),e("td",W,i(a.date),1),e("td",X,[e("div",Y,[e("span",Z,i(a.response),1),e("div",$,[_(i(a.response)+" ",1),h("",!0)])])]),e("td",ee,i(a.statusName),1)],8,I))),128)),o.data.table.length==0?(d(),n("tr",te,ae)):h("",!0)])])]),e("div",oe,[r(g,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:c.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),r(u,{modalAlert:o.modalAlert},null,8,["modalAlert"]),r(m,{show:o.showLoading},null,8,["show"])])}const _e=y(C,[["render",ie]]);export{_e as default};
