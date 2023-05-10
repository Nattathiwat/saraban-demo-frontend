import{_ as C}from"./ballot-duotone-f2459825.js";import{_ as P,r as i,o as _,c as h,a as e,b as r,F as x,h as L,i as p,t as c,j as g,k as A}from"./index-844bee46.js";const V={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:"",selected:[]},checkedList:[]}},methods:{addClick(){this.$router.push({name:"subministry-work.record-receive-create"}).catch(()=>{})},editClick(t){this.$router.push({name:"subministry-work.record-receive-edit",params:{id:t.id},query:{book_type:t.book_type,regis_id:t.regis_id,human_flag:t.human_flag,response_id:t.response,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(t){this.data.perPage=t.perPage,this.data.page=t.page,this.apigetrecord()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetrecord()},apigetrecord(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive/receive-note",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(t=>{this.showLoading=!1,t.data.data&&(t.data.data.filter(s=>{s.speed_name=s.speed_name,s.document_number=s.document_number,s.subject=s.subject,s.book_type_name=s.book_type_name,s.as_of_date=s.as_of_date,s.response_name=s.response_name,s.status_name=s.status_name,s.send_department_name=s.send_department_name,s.department_receive_name=s.department_receive_name,this.data.total=s.total}),this.data.table=t.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})},selected(){this.checkedList=this.data.table.filter(t=>t.selected)},submitClick(){let t=this;this.data.table.length>0&&(this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการรับเข้าหรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0;let s=[];t.data.table.filter(l=>{if(t.checkedList.length>0){let u={regis_id:l.regis_id,book_type:parseInt(l.book_type),human_flag:l.human_flag,response_id:parseInt(l.response)};l.selected&&s.push(t.axios.put(`/booking-receive/receive-note/${l.id}`,u))}}),t.axios.all([...s]).then(t.axios.spread(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ยืนยันรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.apigetrecord()}}})).catch(l=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}})}},mounted(){var t,s;this.data.page=((t=this.$route.query)==null?void 0:t.page)||this.data.page,this.data.perPage=((s=this.$route.query)==null?void 0:s.perPage)||this.data.perPage,this.apigetrecord(),this.$route.params.id&&this.submitClick()}},M={class:"booking-receive-inex"},j={class:"group-overflow"},S={class:"detail"},N={class:"group-head"},q={class:"group-first"},w=e("img",{src:C,alt:"",class:"icon-users-cog"},null,-1),B=e("div",{class:"name"},"บันทึกรับเข้า",-1),E=["disabled"],F=e("div",{class:"group-image"},[e("img",{src:A,alt:"times-circle",class:"icon-check-circle"}),g(" ยืนยันรับเข้า ")],-1),I=[F],U={class:"group-end"},T={class:"search"},z=e("div",{class:"line"},null,-1),D={class:"group-body"},G={class:"table-booking-receive-inex"},H=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"}),e("th",{class:"col2"},"ความเร่งด่วน"),e("th",{class:"col3"},"เลขบันทึกภายใน"),e("th",{class:"col4"},"ลงวันที่"),e("th",{class:"col5"},"ชื่อเรื่อง"),e("th",{class:"col6"},"หน่วยงานที่ส่งมา"),e("th",{class:"col7"},"หน่วยงานที่รับ"),e("th",{class:"col8"},"ชนิด"),e("th",{class:"col9"},"ผู้รับผิดชอบ"),e("th",{class:"col10"},"สถานะ")])],-1),J={class:"tbody"},K={class:"col1"},O=["onClick"],Q=["onClick"],R=["onClick"],W=["onClick"],X={class:"group-show none-bg"},Y={class:"span"},Z={class:"show-detail"},$={class:"col6"},ee={class:"col7"},te={class:"col8"},se={class:"col9"},ae={class:"group-show"},oe={class:"span"},ce={class:"show-detail"},le={class:"col10"},de={key:0,class:"tbody-row"},ne=e("td",{colspan:"8"},"ไม่มีข้อมูล",-1),ie=[ne],re={class:"group-footer"};function _e(t,s,l,u,o,d){const m=i("cpn-input"),b=i("cpn-checkbox"),k=i("cpn-pagination"),v=i("cpn-modal-alert"),f=i("cpn-loading");return _(),h("div",M,[e("div",j,[e("div",S,[e("div",N,[e("div",q,[w,B,e("button",{type:"button",class:"confirm-receive",onClick:s[0]||(s[0]=a=>d.submitClick()),disabled:o.checkedList.length<1},I,8,E)]),e("div",U,[e("div",T,[r(m,{modelValue:o.data.search,"onUpdate:modelValue":s[1]||(s[1]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:s[2]||(s[2]=a=>d.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),z,e("div",D,[e("table",G,[H,e("tbody",J,[(_(!0),h(x,null,L(o.data.table,(a,y)=>(_(),h("tr",{class:"tbody-row pointer",key:y},[e("td",K,[r(b,{modelValue:a.selected,"onUpdate:modelValue":n=>a.selected=n,name:"selected",onChange:n=>d.selected(n,a)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),e("td",{class:"col2",onClick:n=>d.editClick(a)},c(a.speed_name),9,O),e("td",{class:"col3",onClick:n=>d.editClick(a)},c(a.document_number),9,Q),e("td",{class:"col4",onClick:n=>d.editClick(a)},c(a.as_of_date),9,R),e("td",{class:"col5",onClick:n=>d.editClick(a)},[e("div",X,[e("span",Y,c(a.subject),1),e("div",Z,[g(c(a.subject)+" ",1),p("",!0)])])],8,W),e("td",$,c(a.send_department_name),1),e("td",ee,c(a.department_receive_name),1),e("td",te,c(a.book_type_name),1),e("td",se,[e("div",ae,[e("span",oe,c(a.response_name),1),e("div",ce,[g(c(a.response_name)+" ",1),p("",!0)])])]),e("td",le,c(a.status_name),1)]))),128)),o.data.table.length==0?(_(),h("tr",de,ie)):p("",!0)])])]),e("div",re,[r(k,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:d.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),r(v,{modalAlert:o.modalAlert},null,8,["modalAlert"]),r(f,{show:o.showLoading},null,8,["show"])])}const ge=P(V,[["render",_e]]);export{ge as default};
