import{_ as C}from"./ballot-duotone-f2459825.js";import{_ as P,r,o as _,c as g,a as e,b as h,F as x,h as A,i as p,t as c,j as u,k as L}from"./index-57914e2c.js";const S={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""},checkedList:[]}},methods:{addClick(){this.$router.push({name:"subministry-work.booking-receive-create"}).catch(()=>{})},editClick(t){this.$router.push({name:"subministry-work.booking-receive-edit",params:{id:t.id},query:{book_type:t.book_type,regis_id:t.regis_id,response_id:t.response_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(t){this.data.perPage=t.perPage,this.data.page=t.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(t=>{if(this.showLoading=!1,t.data.data){let o=[this.data.response_name],i="";o.filter(s=>{i+=s+","}),t.data.data.filter(s=>{s.speedName=s.speed_name,s.bookingNo=s.receive_document_number,s.referBookno=s.document_number,s.bookingSubject=s.subject,s.typename=s.book_type_name,s.date=s.as_of_date,s.response=s.response_name,s.statusName=s.status,s.person=i,this.data.total=s.total}),this.data.table=t.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})},deleteClick(t){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือรับเข้า",message:`“${t.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){o.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.apigetimport()}}}}},selected(){this.checkedList=this.data.table.filter(t=>t.selected)},submitClick(){let t=this;this.data.table.length>0&&(this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการรับเข้าหรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0;let o=[];t.data.table.filter(i=>{if(t.checkedList.length>0){let s={id:i.id,regis_id:parseInt(i.regis_id),book_type:parseInt(i.book_type),user_id:parseInt(localStorage.getItem("user_id")),page_flag:"owner"};i.selected&&o.push(s)}}),t.axios.put("/booking-receive/multi-receive",o).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ยืนยันรับเข้าสำเร็จ",msgSuccess:!0,afterPressAgree(){t.apigetimport()}}}).catch(i=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})}})}},mounted(){var t,o;this.data.page=((t=this.$route.query)==null?void 0:t.page)||this.data.page,this.data.perPage=((o=this.$route.query)==null?void 0:o.perPage)||this.data.perPage,this.apigetimport()}},V={class:"booking-receive-inex"},N={class:"group-overflow"},w={class:"detail"},M={class:"group-head"},j={class:"group-first"},B=e("img",{src:C,alt:"",class:"icon-users-cog"},null,-1),I=e("div",{class:"name"},"หนังสือรับเข้า",-1),q=["disabled"],E=e("div",{class:"group-image"},[e("img",{src:L,alt:"times-circle",class:"icon-check-circle"}),u(" ยืนยันรับเข้า ")],-1),F=[E],U={class:"group-end"},T={class:"search"},z=e("div",{class:"line"},null,-1),D={class:"group-body"},G={class:"table-booking-receive-inex"},H=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"}),e("th",{class:"col2"},"ความเร่งด่วน"),e("th",{class:"col3"},"เลขรับ"),e("th",{class:"col4"},"เลขที่หนังสือ"),e("th",{class:"col5"},"ชื่อเรื่อง"),e("th",{class:"col6"},"ชนิด"),e("th",{class:"col7"},"ลงวันที่"),e("th",{class:"col8"},"ผู้รับผิดชอบ"),e("th",{class:"col9"},"สถานะ")])],-1),J={class:"tbody"},K={class:"col1"},O=["onClick"],Q=["onClick"],R=["onClick"],W=["onClick"],X={class:"group-show none-bg"},Y={class:"span"},Z={class:"show-detail"},$={class:"col6"},ee={class:"col7"},te={class:"col8"},se={class:"group-show"},ae={class:"span"},oe={class:"show-detail"},le={class:"col9"},ie={key:0,class:"tbody-row"},ce=e("td",{colspan:"8"},"ไม่มีข้อมูล",-1),de=[ce],ne={class:"group-footer"};function re(t,o,i,s,l,d){const m=r("cpn-input"),k=r("cpn-checkbox"),b=r("cpn-pagination"),f=r("cpn-modal-alert"),v=r("cpn-loading");return _(),g("div",V,[e("div",N,[e("div",w,[e("div",M,[e("div",j,[B,I,e("button",{type:"button",class:"confirm-receive",onClick:o[0]||(o[0]=a=>d.submitClick()),disabled:l.checkedList.length<1},F,8,q)]),e("div",U,[e("div",T,[h(m,{modelValue:l.data.search,"onUpdate:modelValue":o[1]||(o[1]=a=>l.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:o[2]||(o[2]=a=>d.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),z,e("div",D,[e("table",G,[H,e("tbody",J,[(_(!0),g(x,null,A(l.data.table,(a,y)=>(_(),g("tr",{class:"tbody-row pointer",key:y},[e("td",K,[h(k,{modelValue:a.selected,"onUpdate:modelValue":n=>a.selected=n,name:"selected",onChange:n=>d.selected(n,a)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),e("td",{class:"col2",onClick:n=>d.editClick(a)},c(a.speedName),9,O),e("td",{class:"col3",onClick:n=>d.editClick(a)},c(a.bookingNo),9,Q),e("td",{class:"col4",onClick:n=>d.editClick(a)},c(a.referBookno),9,R),e("td",{class:"col5",onClick:n=>d.editClick(a)},[e("div",X,[e("span",Y,c(a.bookingSubject),1),e("div",Z,[u(c(a.bookingSubject)+" ",1),p("",!0)])])],8,W),e("td",$,c(a.typename),1),e("td",ee,c(a.date),1),e("td",te,[e("div",se,[e("span",ae,c(a.response),1),e("div",oe,[u(c(a.response)+" ",1),p("",!0)])])]),e("td",le,c(a.statusName),1)]))),128)),l.data.table.length==0?(_(),g("tr",ie,de)):p("",!0)])])]),e("div",ne,[h(b,{page:l.data.page,total:l.data.total,lastPage:l.data.lastPage,perPage:l.data.perPage,onPageChange:d.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),h(f,{modalAlert:l.modalAlert},null,8,["modalAlert"]),h(v,{show:l.showLoading},null,8,["show"])])}const ge=P(S,[["render",re]]);export{ge as default};
