import{_ as P,r,o as p,c as _,a as e,b as h,F as C,h as x,i as g,t as c,j as u,w as A,v as L,k as w}from"./index-52b324ab.js";import{_ as S}from"./ballot-duotone-f2459825.js";const V={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""},checkedList:[]}},methods:{addClick(){this.$router.push({name:"subministry-work.booking-receive-create"}).catch(()=>{})},editClick(t){this.$router.push({name:"subministry-work.booking-receive-edit",params:{id:t.id},query:{book_type:t.book_type,regis_id:t.regis_id,response_id:t.response_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(t){this.data.perPage=t.perPage,this.data.page=t.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(t=>{if(this.showLoading=!1,t.data.data){let a=[this.data.response_name],l="";a.filter(s=>{l+=s+","}),t.data.data.filter(s=>{s.speedName=s.speed_name,s.bookingNo=s.receive_document_number,s.referBookno=s.document_number,s.bookingSubject=s.subject,s.typename=s.book_type_name,s.date=s.as_of_date,s.response=s.response_name,s.statusName=s.status,s.person=l,this.data.total=s.total}),this.data.table=t.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})},deleteClick(t){let a=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือรับเข้า",message:`“${t.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){a.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){a.apigetimport()}}}}},selected(){this.checkedList=this.data.table.filter(t=>t.selected)},submitClick(){let t=this;this.data.table.length>0&&(this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการรับเข้าหรือไม่",confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0;let a=[];t.data.table.filter(l=>{if(t.checkedList.length>0){let s={id:l.id,regis_id:parseInt(l.regis_id),book_type:parseInt(l.book_type),user_id:parseInt(localStorage.getItem("user_id")),page_flag:"owner"};l.selected&&a.push(s)}}),t.axios.put("/booking-receive/multi-receive",a).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ยืนยันรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.apigetimport()}}}).catch(l=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}})}},mounted(){var t,a;this.data.page=((t=this.$route.query)==null?void 0:t.page)||this.data.page,this.data.perPage=((a=this.$route.query)==null?void 0:a.perPage)||this.data.perPage,this.apigetimport()}},N={class:"sub-booking-receive-inex"},M={class:"group-overflow"},j={class:"detail"},B={class:"group-head"},I={class:"group-first"},q=e("img",{src:S,alt:"",class:"icon-users-cog"},null,-1),E=e("div",{class:"name"},"หนังสือรับเข้า",-1),F=["disabled"],U=e("div",{class:"group-image"},[e("img",{src:w,alt:"times-circle",class:"icon-check-circle"}),u(" ยืนยันรับเข้า ")],-1),D=[U],T={class:"group-end"},z={class:"search"},G=e("div",{class:"line"},null,-1),H={class:"group-body"},J={class:"table-booking-receive-inex"},K=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col0"}),e("th",{class:"col1"},"ความเร่งด่วน"),e("th",{class:"col2"},"เลขรับ"),e("th",{class:"col3"},"เลขที่หนังสือ"),e("th",{class:"col4"},"ชื่อเรื่อง"),e("th",{class:"col5"},"ชนิด"),e("th",{class:"col6"},"ลงวันที่"),e("th",{class:"col7"},"ผู้รับผิดชอบ"),e("th",{class:"col8"},"สถานะ")])],-1),O={class:"tbody"},Q=["onClick"],R={class:"col1"},W={class:"col2"},X={class:"col3"},Y={class:"col4"},Z={class:"group-show none-bg"},$={class:"span"},ee={class:"show-detail"},te={class:"col5"},se={class:"col6"},ae={class:"col7"},oe={class:"group-show"},ie={class:"span"},le={class:"show-detail"},ce={class:"col8"},de={key:0,class:"tbody-row"},ne=e("td",{colspan:"9"},"ไม่มีข้อมูล",-1),re=[ne],he={class:"group-footer"};function pe(t,a,l,s,i,n){const m=r("cpn-input"),b=r("cpn-checkbox"),k=r("cpn-pagination"),f=r("cpn-modal-alert"),v=r("cpn-loading");return p(),_("div",N,[e("div",M,[e("div",j,[e("div",B,[e("div",I,[q,E,e("button",{type:"button",class:"confirm-receive",onClick:a[0]||(a[0]=o=>n.submitClick()),disabled:i.checkedList.length<1},D,8,F)]),e("div",T,[e("div",z,[h(m,{modelValue:i.data.search,"onUpdate:modelValue":a[1]||(a[1]=o=>i.data.search=o),name:"search",type:"text",searchFlag:!0,onSearchClick:a[2]||(a[2]=o=>n.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),G,e("div",H,[e("table",J,[K,e("tbody",O,[(p(!0),_(C,null,x(i.data.table,(o,y)=>(p(),_("tr",{class:"tbody-row pointer",key:y,onClick:d=>n.editClick(o)},[e("td",{class:"col0",onClick:a[3]||(a[3]=d=>{d.stopPropagation()})},[h(b,{modelValue:o.selected,"onUpdate:modelValue":d=>o.selected=d,name:"selected",onChange:d=>n.selected(d,o)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),e("td",R,c(o.speedName),1),e("td",W,c(o.bookingNo),1),e("td",X,c(o.referBookno),1),e("td",Y,[e("div",Z,[e("span",$,c(o.bookingSubject),1),e("div",ee,[u(c(o.bookingSubject)+" ",1),g("",!0)])])]),e("td",te,c(o.typename),1),e("td",se,c(o.date),1),e("td",ae,[A(e("div",oe,[e("span",ie,c(o.response),1),e("div",le,[u(c(o.response)+" ",1),g("",!0)])],512),[[L,o.response]])]),e("td",ce,c(o.statusName),1)],8,Q))),128)),i.data.table.length==0?(p(),_("tr",de,re)):g("",!0)])])]),e("div",he,[h(k,{page:i.data.page,total:i.data.total,lastPage:i.data.lastPage,perPage:i.data.perPage,onPageChange:n.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),h(f,{modalAlert:i.modalAlert},null,8,["modalAlert"]),h(v,{show:i.showLoading},null,8,["show"])])}const ue=P(V,[["render",pe]]);export{ue as default};
