import{_ as C,r,o as _,c as g,a as e,b as h,F as P,h as x,i as p,t as c,j as u,w as A,v as L,k as w}from"./index-f0fa3949.js";import{_ as S}from"./ballot-duotone-5ec9537a.js";const V={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""},checkedList:[]}},methods:{addClick(){this.$router.push({name:"subministry-work.booking-receive-create"}).catch(()=>{})},editClick(t){this.$router.push({name:"subministry-work.booking-receive-edit",params:{id:t.id},query:{book_type:t.book_type,regis_id:t.regis_id,response_id:t.response_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(t){this.data.perPage=t.perPage,this.data.page=t.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(t=>{if(this.showLoading=!1,t.data.data){let o=[this.data.response_name],l="";o.filter(s=>{l+=s+","}),t.data.data.filter(s=>{s.speedName=s.speed_name,s.bookingNo=s.receive_document_number,s.referBookno=s.document_number,s.bookingSubject=s.subject,s.typename=s.book_type_name,s.date=s.as_of_date,s.response=s.response_name,s.statusName=s.status,s.person=l,this.data.total=s.total}),this.data.table=t.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})},deleteClick(t){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือรับเข้า",message:`“${t.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){o.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.apigetimport()}}}}},selected(){this.checkedList=this.data.table.filter(t=>t.selected)},submitClick(){let t=this;this.data.table.length>0&&(this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการรับเข้าหรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0;let o=[];t.data.table.filter(l=>{if(t.checkedList.length>0){let s={id:l.id,regis_id:parseInt(l.regis_id),book_type:parseInt(l.book_type),user_id:parseInt(localStorage.getItem("user_id")),page_flag:"owner"};l.selected&&o.push(s)}}),t.axios.put("/booking-receive/multi-receive",o).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ยืนยันรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.apigetimport()}}}).catch(l=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}})}},mounted(){var t,o;this.data.page=((t=this.$route.query)==null?void 0:t.page)||this.data.page,this.data.perPage=((o=this.$route.query)==null?void 0:o.perPage)||this.data.perPage,this.apigetimport()}},N={class:"sub-booking-receive-inex"},M={class:"group-overflow"},j={class:"detail"},B={class:"group-head"},I={class:"group-first"},q=e("img",{src:S,alt:"",class:"icon-users-cog"},null,-1),E=e("div",{class:"name"},"หนังสือรับเข้า",-1),F=["disabled"],U=e("div",{class:"group-image"},[e("img",{src:w,alt:"times-circle",class:"icon-check-circle"}),u(" ยืนยันรับเข้า ")],-1),D=[U],T={class:"group-end"},z={class:"search"},G=e("div",{class:"line"},null,-1),H={class:"group-body"},J={class:"table-booking-receive-inex"},K=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col0"}),e("th",{class:"col1"},"ความเร่งด่วน"),e("th",{class:"col2"},"เลขรับ"),e("th",{class:"col3"},"เลขที่หนังสือ"),e("th",{class:"col4"},"ชื่อเรื่อง"),e("th",{class:"col5"},"ชนิด"),e("th",{class:"col6"},"ลงวันที่"),e("th",{class:"col7"},"ผู้รับผิดชอบ"),e("th",{class:"col8"},"สถานะ")])],-1),O={class:"tbody"},Q={class:"col0"},R=["onClick"],W=["onClick"],X=["onClick"],Y=["onClick"],Z={class:"group-show none-bg"},$={class:"span"},ee={class:"show-detail"},te={class:"col5"},se={class:"col6"},ae={class:"col7"},oe={class:"group-show"},ie={class:"span"},le={class:"show-detail"},ce={class:"col8"},de={key:0,class:"tbody-row"},ne=e("td",{colspan:"9"},"ไม่มีข้อมูล",-1),re=[ne],he={class:"group-footer"};function _e(t,o,l,s,i,d){const m=r("cpn-input"),k=r("cpn-checkbox"),b=r("cpn-pagination"),v=r("cpn-modal-alert"),f=r("cpn-loading");return _(),g("div",N,[e("div",M,[e("div",j,[e("div",B,[e("div",I,[q,E,e("button",{type:"button",class:"confirm-receive",onClick:o[0]||(o[0]=a=>d.submitClick()),disabled:i.checkedList.length<1},D,8,F)]),e("div",T,[e("div",z,[h(m,{modelValue:i.data.search,"onUpdate:modelValue":o[1]||(o[1]=a=>i.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:o[2]||(o[2]=a=>d.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),G,e("div",H,[e("table",J,[K,e("tbody",O,[(_(!0),g(P,null,x(i.data.table,(a,y)=>(_(),g("tr",{class:"tbody-row pointer",key:y},[e("td",Q,[h(k,{modelValue:a.selected,"onUpdate:modelValue":n=>a.selected=n,name:"selected",onChange:n=>d.selected(n,a)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),e("td",{class:"col1",onClick:n=>d.editClick(a)},c(a.speedName),9,R),e("td",{class:"col2",onClick:n=>d.editClick(a)},c(a.bookingNo),9,W),e("td",{class:"col3",onClick:n=>d.editClick(a)},c(a.referBookno),9,X),e("td",{class:"col4",onClick:n=>d.editClick(a)},[e("div",Z,[e("span",$,c(a.bookingSubject),1),e("div",ee,[u(c(a.bookingSubject)+" ",1),p("",!0)])])],8,Y),e("td",te,c(a.typename),1),e("td",se,c(a.date),1),e("td",ae,[A(e("div",oe,[e("span",ie,c(a.response),1),e("div",le,[u(c(a.response)+" ",1),p("",!0)])],512),[[L,a.response]])]),e("td",ce,c(a.statusName),1)]))),128)),i.data.table.length==0?(_(),g("tr",de,re)):p("",!0)])])]),e("div",he,[h(b,{page:i.data.page,total:i.data.total,lastPage:i.data.lastPage,perPage:i.data.perPage,onPageChange:d.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),h(v,{modalAlert:i.modalAlert},null,8,["modalAlert"]),h(f,{show:i.showLoading},null,8,["show"])])}const ue=C(V,[["render",_e]]);export{ue as default};
