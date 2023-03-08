import{_ as v}from"./ballot-duotone-f2459825.js";import{_ as k,r as d,o as i,c as l,a as e,b as n,F as y,h as P,i as h,t as o,j as _}from"./index-962b3eab.js";const f={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{addClick(){this.$router.push({name:"subministry-work.record-receive-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"subministry-work.record-receive-edit",params:{id:s.id},query:{book_type:s.book_type,regis_id:s.regis_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=50,this.data.page=1,this.data.tag="",this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive/receive-note",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(s=>{this.showLoading=!1,s.data.data&&(s.data.data.filter(t=>{t.speedName=t.speed_name,t.bookingNo=t.receive_document_number,t.referBookno=t.document_number,t.bookingSubject=t.subject,t.typename=t.book_type_name,t.date=t.as_of_date,t.response=t.response_name,t.statusName=t.status,t.send_dep=t.send_department_name,t.receive_dep=t.department_receive_name,this.data.total=t.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},deleteClick(s){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบบันทึกรับเข้า",message:`“${s.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){t.modalAlert={showModal:!0,type:"success",title:"ทำการลบบันทึกรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.apigetimport()}}}}}},mounted(){var s,t;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((t=this.$route.query)==null?void 0:t.perPage)||this.data.perPage,this.apigetimport()}},C={class:"booking-receive-inex"},x={class:"group-overflow"},N={class:"detail"},A={class:"group-head"},S=e("div",{class:"group-first"},[e("img",{src:v,alt:"",class:"icon-users-cog"}),e("div",{class:"name"},"บันทึกรับเข้า")],-1),V={class:"group-end"},L={class:"search"},j=e("div",{class:"line"},null,-1),M={class:"group-body"},B={class:"table-booking-receive-inex"},q=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"},"ความเร่งด่วน"),e("th",{class:"col2"},"เลขบันทึกภายใน"),e("th",{class:"col3"},"ลงวันที่"),e("th",{class:"col4"},"ชื่อเรื่อง"),e("th",{class:"col5"},"หน่วยงานที่ส่งมา"),e("th",{class:"col6"},"หน่วยงานที่รับ"),e("th",{class:"col7"},"ชนิด"),e("th",{class:"col8"},"ผู้รับผิดชอบ"),e("th",{class:"col9"},"สถานะ")])],-1),F={class:"tbody"},w=["onClick"],E={class:"col1"},T={class:"col2"},z={class:"col3"},D={class:"col4"},I={class:"group-show none-bg"},U={class:"span"},G={class:"show-detail"},H={class:"col5"},J={class:"col6"},K={class:"col7"},O={class:"col8"},Q={class:"group-show"},R={class:"span"},W={class:"show-detail"},X={class:"col9"},Y={key:0,class:"tbody-row"},Z=e("td",{colspan:"8"},"ไม่มีข้อมูล",-1),$=[Z],ee={class:"group-footer"};function te(s,t,se,ae,c,r){const p=d("cpn-input"),g=d("cpn-pagination"),u=d("cpn-modal-alert"),m=d("cpn-loading");return i(),l("div",C,[e("div",x,[e("div",N,[e("div",A,[S,e("div",V,[e("div",L,[n(p,{modelValue:c.data.search,"onUpdate:modelValue":t[0]||(t[0]=a=>c.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:t[1]||(t[1]=a=>r.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),j,e("div",M,[e("table",B,[q,e("tbody",F,[(i(!0),l(y,null,P(c.data.table,(a,b)=>(i(),l("tr",{class:"tbody-row pointer",key:b,onClick:oe=>r.editClick(a)},[e("td",E,o(a.speedName),1),e("td",T,o(a.bookingNo),1),e("td",z,o(a.date),1),e("td",D,[e("div",I,[e("span",U,o(a.bookingSubject),1),e("div",G,[_(o(a.bookingSubject)+" ",1),h("",!0)])])]),e("td",H,o(a.send_dep),1),e("td",J,o(a.receive_dep),1),e("td",K,o(a.typename),1),e("td",O,[e("div",Q,[e("span",R,o(a.response),1),e("div",W,[_(o(a.response)+" ",1),h("",!0)])])]),e("td",X,o(a.statusName),1)],8,w))),128)),c.data.table.length==0?(i(),l("tr",Y,$)):h("",!0)])])]),e("div",ee,[n(g,{page:c.data.page,total:c.data.total,lastPage:c.data.lastPage,perPage:c.data.perPage,onPageChange:r.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),n(u,{modalAlert:c.modalAlert},null,8,["modalAlert"]),n(m,{show:c.showLoading},null,8,["show"])])}const ie=k(f,[["render",te]]);export{ie as default};
