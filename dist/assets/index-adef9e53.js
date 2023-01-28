import{_ as v}from"./ballot-duotone-f2459825.js";import{_ as k}from"./plus-circle-duotone-64bd32fe.js";import{_ as f,r as n,o as i,c as d,a as e,b as r,F as y,h as P,i as _,t as c,j as h}from"./index-c3032b26.js";const C={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:50}}},methods:{addClick(){this.$router.push({name:"booking-receive-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"booking-receive-edit",params:{id:a.id},query:{book_type:a.book_type,regis_id:a.regis_id}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=50,this.data.page=1,this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(a=>{this.showLoading=!1,a.data.data.filter(s=>{s.speedName=s.speed_name,s.bookingNo=s.receive_document_number,s.referBookno=s.document_number,s.bookingSubject=s.subject,s.typename=s.receive_type_name,s.date=s.as_of_date,s.response=s.response_name,s.statusName=s.status,this.data.total=s.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let s=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือรับเข้า",message:`“${a.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){s.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.apigetimport()}}}}}},mounted(){this.apigetimport()}},x={class:"booking-receive-inex"},N={class:"group-overflow"},A={class:"detail"},S={class:"group-head"},V={class:"group-first"},L=e("img",{src:v,alt:"",class:"icon-users-cog"},null,-1),j=e("div",{class:"name"},"หนังสือรับเข้า",-1),B=e("div",{class:"group-image"},[e("img",{src:k,alt:"",class:"icon-plus"}),h(" สร้างหนังสือรับเข้า ")],-1),M=[B],w={class:"group-end"},F={class:"search"},E=e("div",{class:"line"},null,-1),q={class:"group-body"},z={class:"table-booking-receive-inex"},D=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"},"ความเร่งด่วน"),e("th",{class:"col2"},"เลขรับ สลค."),e("th",{class:"col3"},"เลขที่หนังสือ"),e("th",{class:"col4"},"ชื่อเรื่อง"),e("th",{class:"col5"},"ชนิด"),e("th",{class:"col6"},"ลงวันที่"),e("th",{class:"col7"},"ผู้รับผิดชอบ"),e("th",{class:"col8"},"สถานะ")])],-1),T={class:"tbody"},U=["onClick"],G={class:"col1"},H={class:"col2"},I={class:"col3"},J={class:"col4"},K={class:"group-show none-bg"},O={class:"span"},Q={class:"show-detail"},R={class:"col5"},W={class:"col6"},X={class:"col7"},Y={class:"group-show"},Z={class:"span"},$={class:"show-detail"},ee={class:"col8"},se={key:0,class:"tbody-row"},te=e("td",{colspan:"8"},"ไม่มีข้อมูล",-1),ae=[te],oe={class:"group-footer"};function ce(a,s,le,ne,o,l){const p=n("cpn-input"),g=n("cpn-pagination"),u=n("cpn-modal-alert"),m=n("cpn-loading");return i(),d("div",x,[e("div",N,[e("div",A,[e("div",S,[e("div",V,[L,j,e("button",{type:"button",class:"add-booking-receive",onClick:s[0]||(s[0]=t=>l.addClick())},M)]),e("div",w,[e("div",F,[r(p,{modelValue:o.data.search,"onUpdate:modelValue":s[1]||(s[1]=t=>o.data.search=t),name:"search",type:"text",searchFlag:!0,onSearchClick:s[2]||(s[2]=t=>l.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),E,e("div",q,[e("table",z,[D,e("tbody",T,[(i(!0),d(y,null,P(o.data.table,(t,b)=>(i(),d("tr",{class:"tbody-row pointer",key:b,onClick:ie=>l.editClick(t)},[e("td",G,c(t.speedName),1),e("td",H,c(t.bookingNo),1),e("td",I,c(t.referBookno),1),e("td",J,[e("div",K,[e("span",O,c(t.bookingSubject),1),e("div",Q,[h(c(t.bookingSubject)+" ",1),_("",!0)])])]),e("td",R,c(t.typename),1),e("td",W,c(t.date),1),e("td",X,[e("div",Y,[e("span",Z,c(t.response),1),e("div",$,[h(c(t.response)+" ",1),_("",!0)])])]),e("td",ee,c(t.statusName),1)],8,U))),128)),o.data.table.length==0?(i(),d("tr",se,ae)):_("",!0)])])]),e("div",oe,[r(g,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),r(u,{modalAlert:o.modalAlert},null,8,["modalAlert"]),r(m,{show:o.showLoading},null,8,["show"])])}const he=f(C,[["render",ce]]);export{he as default};
