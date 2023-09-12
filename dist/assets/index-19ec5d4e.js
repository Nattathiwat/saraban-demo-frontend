import{_ as P}from"./ballot-duotone-f2459825.js";import{_ as C,r as i,o as _,c as h,a as e,b as r,F as x,h as L,i as p,t as c,j as g,k as A}from"./index-e340fb0e.js";const V={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:"",selected:[]},checkedList:[]}},methods:{addClick(){this.$router.push({name:"subministry-work.record-receive-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"subministry-work.record-receive-edit",params:{id:s.id},query:{book_type:s.book_type,regis_id:s.regis_id,human_flag:s.human_flag,response_id:s.response_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apigetrecord()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetrecord()},apigetrecord(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive/receive-note",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(s=>{this.showLoading=!1,s.data.data&&(s.data.data.filter(t=>{t.speed_name=t.speed_name,t.document_number=t.document_number,t.subject=t.subject,t.book_type_name=t.book_type_name,t.as_of_date=t.as_of_date,t.response_name=t.response_name,t.status_name=t.status_name,t.send_department_name=t.send_department_name,t.department_receive_name=t.department_receive_name,this.data.total=t.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},selected(){this.checkedList=this.data.table.filter(s=>s.selected)},submitClick(){let s=this;this.data.table.length>0&&(this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการรับเข้าหรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){s.showLoading=!0;let t=[];s.data.table.filter(d=>{if(s.checkedList.length>0){let u={regis_id:d.regis_id,book_type:parseInt(d.book_type),human_flag:d.human_flag,response_id:parseInt(d.response_id),user_id:parseInt(localStorage.getItem("user_id"))};d.selected&&t.push(s.axios.put(`/booking-receive/receive-note/${d.id}`,u))}}),s.axios.all([...t]).then(s.axios.spread(()=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"success",title:"ยืนยันรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.apigetrecord()}}})).catch(d=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}})}},mounted(){var s,t;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((t=this.$route.query)==null?void 0:t.perPage)||this.data.perPage,this.apigetrecord(),this.$route.params.id&&this.submitClick()}},M={class:"booking-receive-inex"},S={class:"group-overflow"},j={class:"detail"},I={class:"group-head"},N={class:"group-first"},q=e("img",{src:P,alt:"",class:"icon-users-cog"},null,-1),w=e("div",{class:"name"},"บันทึกรับเข้า",-1),B=["disabled"],E=e("div",{class:"group-image"},[e("img",{src:A,alt:"times-circle",class:"icon-check-circle"}),g(" ยืนยันรับเข้า ")],-1),F=[E],U={class:"group-end"},T={class:"search"},z=e("div",{class:"line"},null,-1),D={class:"group-body"},G={class:"table-booking-receive-inex"},H=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"}),e("th",{class:"col2"},"ความเร่งด่วน"),e("th",{class:"col3"},"เลขบันทึกภายใน"),e("th",{class:"col4"},"ลงวันที่"),e("th",{class:"col5"},"ชื่อเรื่อง"),e("th",{class:"col6"},"หน่วยงานที่ส่งมา"),e("th",{class:"col7"},"หน่วยงานที่รับ"),e("th",{class:"col8"},"ชนิด"),e("th",{class:"col9"},"ผู้รับผิดชอบ"),e("th",{class:"col10"},"สถานะ")])],-1),J={class:"tbody"},K=["onClick"],O={class:"col2"},Q={class:"col3"},R={class:"col4"},W={class:"col5"},X={class:"group-show none-bg"},Y={class:"span"},Z={class:"show-detail"},$={class:"col6"},ee={class:"col7"},te={class:"col8"},se={class:"col9"},ae={class:"group-show"},oe={class:"span"},ce={class:"show-detail"},de={class:"col10"},le={key:0,class:"tbody-row"},ne=e("td",{colspan:"8"},"ไม่มีข้อมูล",-1),ie=[ne],re={class:"group-footer"};function _e(s,t,d,u,o,n){const m=i("cpn-input"),b=i("cpn-checkbox"),k=i("cpn-pagination"),f=i("cpn-modal-alert"),v=i("cpn-loading");return _(),h("div",M,[e("div",S,[e("div",j,[e("div",I,[e("div",N,[q,w,e("button",{type:"button",class:"confirm-receive",onClick:t[0]||(t[0]=a=>n.submitClick()),disabled:o.checkedList.length<1},F,8,B)]),e("div",U,[e("div",T,[r(m,{modelValue:o.data.search,"onUpdate:modelValue":t[1]||(t[1]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:t[2]||(t[2]=a=>n.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),z,e("div",D,[e("table",G,[H,e("tbody",J,[(_(!0),h(x,null,L(o.data.table,(a,y)=>(_(),h("tr",{class:"tbody-row pointer",key:y,onClick:l=>n.editClick(a)},[e("td",{class:"col1",onClick:t[3]||(t[3]=l=>{l.stopPropagation()})},[r(b,{modelValue:a.selected,"onUpdate:modelValue":l=>a.selected=l,name:"selected",onChange:l=>n.selected(l,a)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),e("td",O,c(a.speed_name),1),e("td",Q,c(a.document_number),1),e("td",R,c(a.as_of_date),1),e("td",W,[e("div",X,[e("span",Y,c(a.subject),1),e("div",Z,[g(c(a.subject)+" ",1),p("",!0)])])]),e("td",$,c(a.send_department_name),1),e("td",ee,c(a.department_receive_name),1),e("td",te,c(a.book_type_name),1),e("td",se,[e("div",ae,[e("span",oe,c(a.response_name),1),e("div",ce,[g(c(a.response_name)+" ",1),p("",!0)])])]),e("td",de,c(a.status_name),1)],8,K))),128)),o.data.table.length==0?(_(),h("tr",le,ie)):p("",!0)])])]),e("div",re,[r(k,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:n.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),r(f,{modalAlert:o.modalAlert},null,8,["modalAlert"]),r(v,{show:o.showLoading},null,8,["show"])])}const ge=C(V,[["render",_e]]);export{ge as default};
