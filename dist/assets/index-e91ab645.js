import{_ as k,r as n,o as d,c as l,a as e,b as r,F as v,h as y,i as h,t as i,j as _,w as f,v as P}from"./index-7ad4d5ad.js";import{_ as w}from"./ballot-duotone-f2459825.js";import{_ as C}from"./plus-circle-duotone-64bd32fe.js";const N={name:"my-work-waiting-booking-receive",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{addClick(){this.$router.push({name:"my-work.waiting-booking-receive-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"my-work.waiting-booking-receive-edit",params:{id:s.id},query:{book_type:s.book_type,regis_id:s.regis_id,response_id:s.response_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive/waiting-receive",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(s=>{this.showLoading=!1,s.data.data&&(s.data.data.filter(t=>{t.speedName=t.speed_name,t.bookingNo=t.receive_document_number,t.referBookno=t.document_number,t.bookingSubject=t.subject,t.typename=t.book_type_name,t.date=t.as_of_date,t.response=t.response_name,t.statusName=t.status,this.data.total=t.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},deleteClick(s){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือรอรับเข้า",message:`“${s.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){t.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรอรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.apigetimport()}}}}}},mounted(){var s,t;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((t=this.$route.query)==null?void 0:t.perPage)||this.data.perPage,this.apigetimport()}},x={class:"my-work-waiting-booking-receive"},A={class:"group-overflow"},S={class:"detail"},V={class:"group-head"},L={class:"group-first"},j=e("img",{src:w,alt:"",class:"icon-users-cog"},null,-1),B=e("div",{class:"name"},"หนังสือรอรับเข้า",-1),M=e("div",{class:"group-image"},[e("img",{src:C,alt:"",class:"icon-plus"}),_(" สร้างหนังสือรับเข้า ")],-1),q=[M],F={class:"group-end"},D={class:"search"},E=e("div",{class:"line"},null,-1),T={class:"group-body"},z={class:"table-my-work-waiting-booking-receive"},I=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"},"ความเร่งด่วน"),e("th",{class:"col2"},"เลขรับ"),e("th",{class:"col3"},"เลขที่หนังสือ"),e("th",{class:"col4"},"ชื่อเรื่อง"),e("th",{class:"col5"},"ชนิด"),e("th",{class:"col6"},"ลงวันที่"),e("th",{class:"col7"},"ผู้รับผิดชอบ"),e("th",{class:"col8"},"สถานะ")])],-1),U={class:"tbody"},G=["onClick"],H={class:"col1"},J={class:"col2"},K={class:"col3"},O={class:"col4"},Q={class:"group-show none-bg"},R={class:"span"},W={class:"show-detail"},X={class:"col5"},Y={class:"col6"},Z={class:"col7"},$={class:"group-show"},ee={class:"span"},te={class:"show-detail"},se={class:"col8"},ae={key:0,class:"tbody-row"},oe=e("td",{colspan:"8"},"ไม่มีข้อมูล",-1),ie=[oe],ce={class:"group-footer"};function ne(s,t,de,le,o,c){const g=n("cpn-input"),p=n("cpn-pagination"),u=n("cpn-modal-alert"),m=n("cpn-loading");return d(),l("div",x,[e("div",A,[e("div",S,[e("div",V,[e("div",L,[j,B,e("button",{type:"button",class:"add-booking-receive",onClick:t[0]||(t[0]=a=>c.addClick())},q)]),e("div",F,[e("div",D,[r(g,{modelValue:o.data.search,"onUpdate:modelValue":t[1]||(t[1]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:t[2]||(t[2]=a=>c.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),E,e("div",T,[e("table",z,[I,e("tbody",U,[(d(!0),l(v,null,y(o.data.table,(a,b)=>(d(),l("tr",{key:b,class:"tbody-row pointer",onClick:re=>c.editClick(a)},[e("td",H,i(a.speedName),1),e("td",J,i(a.bookingNo),1),e("td",K,i(a.referBookno),1),e("td",O,[e("div",Q,[e("span",R,i(a.bookingSubject),1),e("div",W,[_(i(a.bookingSubject)+" ",1),h("",!0)])])]),e("td",X,i(a.typename),1),e("td",Y,i(a.date),1),e("td",Z,[f(e("div",$,[e("span",ee,i(a.response),1),e("div",te,[_(i(a.response)+" ",1),h("",!0)])],512),[[P,a.response]])]),e("td",se,i(a.statusName=="ร่าง"?"รอรับเข้า":a.statusName),1)],8,G))),128)),o.data.table.length==0?(d(),l("tr",ae,ie)):h("",!0)])])]),e("div",ce,[r(p,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:c.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),r(u,{modalAlert:o.modalAlert},null,8,["modalAlert"]),r(m,{show:o.showLoading},null,8,["show"])])}const pe=k(N,[["render",ne]]);export{pe as default};
