import{_ as C}from"./ballot-duotone-f2459825.js";import{_ as P,r as i,o as _,c as h,a as e,b as r,F as x,h as A,i as p,t as o,j as g,k as L}from"./index-d55e1864.js";const V={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:"",selected:[]}}},methods:{addClick(){this.$router.push({name:"subministry-work.record-receive-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"subministry-work.record-receive-edit",params:{id:s.id},query:{book_type:s.book_type,regis_id:s.regis_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apigetrecord()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetrecord()},apigetrecord(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive/receive-note",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(s=>{this.showLoading=!1,s.data.data&&(s.data.data.filter(t=>{t.speed_name=t.speed_name,t.document_number=t.document_number,t.subject=t.subject,t.book_type_name=t.book_type_name,t.as_of_date=t.as_of_date,t.response_name=t.response_name,t.status_name=t.status_name,t.send_department_name=t.send_department_name,t.department_receive_name=t.department_receive_name,this.data.total=t.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},selected(){this.checkedList=this.data.table.filter(s=>s.selected)},submitClick(){let s=this;this.data.table.length>0&&(this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการรับเข้าหรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){s.showLoading=!0;let t=[];s.data.table.filter(d=>{if(s.checkedList.length>0){let u={regis_id:d.regis_id,book_type:parseInt(d.book_type)};d.selected&&t.push(s.axios.put(`/booking-receive/receive-note/${d.id}`,u))}}),s.axios.all([...t]).then(s.axios.spread(()=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"success",title:"ยืนยันรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.apigetrecord()}}})).catch(d=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}})}},mounted(){var s,t;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((t=this.$route.query)==null?void 0:t.perPage)||this.data.perPage,this.apigetrecord(),this.$route.params.id&&this.submitClick()}},M={class:"booking-receive-inex"},j={class:"group-overflow"},w={class:"detail"},S={class:"group-head"},N={class:"group-first"},q=e("img",{src:C,alt:"",class:"icon-users-cog"},null,-1),B=e("div",{class:"name"},"บันทึกรับเข้า",-1),E=e("div",{class:"group-image"},[e("img",{src:L,alt:"times-circle",class:"icon-check-circle"}),g(" ยืนยันรับเข้า ")],-1),F=[E],U={class:"group-end"},I={class:"search"},T=e("div",{class:"line"},null,-1),z={class:"group-body"},D={class:"table-booking-receive-inex"},G=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"}),e("th",{class:"col2"},"ความเร่งด่วน"),e("th",{class:"col3"},"เลขบันทึกภายใน"),e("th",{class:"col4"},"ลงวันที่"),e("th",{class:"col5"},"ชื่อเรื่อง"),e("th",{class:"col6"},"หน่วยงานที่ส่งมา"),e("th",{class:"col7"},"หน่วยงานที่รับ"),e("th",{class:"col8"},"ชนิด"),e("th",{class:"col9"},"ผู้รับผิดชอบ"),e("th",{class:"col10"},"สถานะ")])],-1),H={class:"tbody"},J={class:"col1"},K=["onClick"],O=["onClick"],Q=["onClick"],R=["onClick"],W={class:"group-show none-bg"},X={class:"span"},Y={class:"show-detail"},Z={class:"col6"},$={class:"col7"},ee={class:"col8"},te={class:"col9"},se={class:"group-show"},ae={class:"span"},oe={class:"show-detail"},ce={class:"col10"},le={key:0,class:"tbody-row"},de=e("td",{colspan:"8"},"ไม่มีข้อมูล",-1),ne=[de],ie={class:"group-footer"};function re(s,t,d,u,c,l){const m=i("cpn-input"),b=i("cpn-checkbox"),k=i("cpn-pagination"),v=i("cpn-modal-alert"),f=i("cpn-loading");return _(),h("div",M,[e("div",j,[e("div",w,[e("div",S,[e("div",N,[q,B,e("button",{type:"button",class:"add-booking-receive",onClick:t[0]||(t[0]=a=>l.submitClick())},F)]),e("div",U,[e("div",I,[r(m,{modelValue:c.data.search,"onUpdate:modelValue":t[1]||(t[1]=a=>c.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:t[2]||(t[2]=a=>l.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),T,e("div",z,[e("table",D,[G,e("tbody",H,[(_(!0),h(x,null,A(c.data.table,(a,y)=>(_(),h("tr",{class:"tbody-row pointer",key:y},[e("td",J,[r(b,{modelValue:a.selected,"onUpdate:modelValue":n=>a.selected=n,name:"selected",onChange:n=>l.selected(n,a)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),e("td",{class:"col2",onClick:n=>l.editClick(a)},o(a.speed_name),9,K),e("td",{class:"col3",onClick:n=>l.editClick(a)},o(a.document_number),9,O),e("td",{class:"col4",onClick:n=>l.editClick(a)},o(a.as_of_date),9,Q),e("td",{class:"col5",onClick:n=>l.editClick(a)},[e("div",W,[e("span",X,o(a.subject),1),e("div",Y,[g(o(a.subject)+" ",1),p("",!0)])])],8,R),e("td",Z,o(a.send_department_name),1),e("td",$,o(a.department_receive_name),1),e("td",ee,o(a.book_type_name),1),e("td",te,[e("div",se,[e("span",ae,o(a.response_name),1),e("div",oe,[g(o(a.response_name)+" ",1),p("",!0)])])]),e("td",ce,o(a.status_name),1)]))),128)),c.data.table.length==0?(_(),h("tr",le,ne)):p("",!0)])])]),e("div",ie,[r(k,{page:c.data.page,total:c.data.total,lastPage:c.data.lastPage,perPage:c.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),r(v,{modalAlert:c.modalAlert},null,8,["modalAlert"]),r(f,{show:c.showLoading},null,8,["show"])])}const pe=P(V,[["render",re]]);export{pe as default};
