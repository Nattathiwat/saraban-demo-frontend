import{_ as x,r as h,o as d,c as i,a as s,h as b,b as _,F as m,i as k,j as n,n as v,t as o,w as N,v as S}from"./index-6f9b4dc9.js";import{_ as A}from"./ballot-duotone-f2459825.js";import{_ as V}from"./plus-circle-duotone-64bd32fe.js";const L={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{select:!1,search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{selectedAll(a){a.stopPropagation(),this.data.select=!this.data.select,this.data.table.filter(t=>{t.select=this.data.select})},selected(a,t){a.stopPropagation(),t.select=!t.select,this.data.select=this.data.table.every(p=>p.select)},addClick(){this.$router.push({name:"my-work.booking-receive-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"my-work.booking-receive-edit",params:{id:a.id},query:{book_type:a.book_type,regis_id:a.regis_id,response_id:a.response_id,status:a.status,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive/deliver",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(a=>{this.showLoading=!1,a.data.data&&(a.data.data.filter(t=>{t.speedName=t.speed_name,t.bookingNo=t.receive_document_number,t.referBookno=t.document_number,t.bookingSubject=t.subject,t.typename=t.book_type_name,t.date=t.as_of_date,t.response=t.response_name,t.statusName=t.status,this.data.total=t.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage),this.data.table.filter(t=>{t.has_sub&&this.axios.get(`/booking-receive/sub/${t.book_type}/${t.id}`,{params:{user_id:localStorage.getItem("user_id")}}).then(p=>{t.sub=p.data.data})}))}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})}},mounted(){var a,t;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((t=this.$route.query)==null?void 0:t.perPage)||this.data.perPage,this.apigetimport()}},j={class:"booking-receive-inex"},w={class:"group-overflow"},B={class:"detail"},q={class:"group-head"},F={class:"group-first"},M={class:"group-end"},z={class:"search"},D={class:"group-body"},E={class:"table-booking-receive-inex"},I={class:"thead"},T={class:"thead-row"},U={class:"col0"},G={class:"tbody"},H=["onClick"],J=["onClick"],K={key:0},O={key:1},Q={class:"col1"},R={class:"col2"},W={class:"col3"},X={class:"col4"},Y={class:"group-show none-bg"},Z={class:"span"},$={class:"show-detail"},tt={class:"col5"},st={class:"col6"},et={class:"col7"},at={class:"group-show"},ot={class:"span"},lt={class:"show-detail"},dt={class:"col8"},it={class:"col0"},nt={class:"col1"},rt={class:"col2 text-start ps-5",colspan:"6"},ct={class:"col8"},pt={key:1},gt={key:0,class:"tbody-row"},ht={class:"group-footer"};function _t(a,t,p,ut,l,r){const y=h("cpn-input"),f=h("cpn-pagination"),P=h("cpn-modal-alert"),C=h("cpn-loading");return d(),i("div",j,[s("div",w,[s("div",B,[s("div",q,[s("div",F,[t[5]||(t[5]=s("img",{src:A,alt:"",class:"icon-users-cog"},null,-1)),t[6]||(t[6]=s("div",{class:"name"},"หนังสือรับเข้า",-1)),s("button",{type:"button",class:"add-booking-receive",onClick:t[0]||(t[0]=e=>r.addClick())},t[4]||(t[4]=[s("div",{class:"group-image"},[s("img",{src:V,alt:"",class:"icon-plus"}),b(" สร้างหนังสือรับเข้า ")],-1)]))]),s("div",M,[s("div",z,[_(y,{modelValue:l.data.search,"onUpdate:modelValue":t[1]||(t[1]=e=>l.data.search=e),name:"search",type:"text",searchFlag:!0,onSearchClick:t[2]||(t[2]=e=>r.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),t[20]||(t[20]=s("div",{class:"line"},null,-1)),s("div",D,[s("table",E,[s("thead",I,[s("tr",T,[s("th",U,[s("button",{onClick:t[3]||(t[3]=e=>r.selectedAll(e))},t[7]||(t[7]=[s("i",{class:"bi bi-plus-lg"},null,-1)]))]),t[8]||(t[8]=s("th",{class:"col1"},"ความเร่งด่วน",-1)),t[9]||(t[9]=s("th",{class:"col2"},"เลขรับ",-1)),t[10]||(t[10]=s("th",{class:"col3"},"เลขที่หนังสือ",-1)),t[11]||(t[11]=s("th",{class:"col4"},"ชื่อเรื่อง",-1)),t[12]||(t[12]=s("th",{class:"col5"},"ชนิด",-1)),t[13]||(t[13]=s("th",{class:"col6"},"ลงวันที่",-1)),t[14]||(t[14]=s("th",{class:"col7"},"ผู้รับผิดชอบ",-1)),t[15]||(t[15]=s("th",{class:"col8"},"สถานะ",-1))])]),s("tbody",G,[(d(!0),i(m,null,k(l.data.table,(e,u)=>(d(),i(m,{key:u},[s("tr",{class:v(["tbody-row pointer",u%2!=0?"color-tr1":"color-tr2"]),onClick:c=>r.editClick(e)},[s("td",{class:"col0",onClick:c=>r.selected(c,e)},[e.select&&e.has_sub?(d(),i("button",K,t[16]||(t[16]=[s("i",{class:"bi bi-dash-lg"},null,-1)]))):n("",!0),!e.select&&e.has_sub?(d(),i("button",O,t[17]||(t[17]=[s("i",{class:"bi bi-plus-lg"},null,-1)]))):n("",!0)],8,J),s("td",Q,o(e.speedName),1),s("td",R,o(e.bookingNo),1),s("td",W,o(e.referBookno),1),s("td",X,[s("div",Y,[s("span",Z,o(e.bookingSubject),1),s("div",$,[b(o(e.bookingSubject)+" ",1),n("",!0)])])]),s("td",tt,o(e.typename),1),s("td",st,o(e.date),1),s("td",et,[N(s("div",at,[s("span",ot,o(e.response),1),s("div",lt,[b(o(e.response)+" ",1),n("",!0)])],512),[[S,e.response]])]),s("td",dt,o(e.statusName),1)],10,H),e.select?(d(!0),i(m,{key:0},k(e.sub,(c,g)=>(d(),i("tr",{key:g,class:v(["tbody-row",u%2!=0?g%2!=0?"color-tr1":"color-tr2":g%2!=0?"color-tr2":"color-tr1"])},[s("td",it,o(g+1),1),s("td",nt,o(c.speed_name),1),s("td",rt,o(c.sub_ministry_name),1),s("td",ct,o(c.status),1)],2))),128)):n("",!0),e.select?(d(),i("tr",pt,t[18]||(t[18]=[s("td",{colspan:"9",style:{"border-bottom":"solid 1px #c1cfe3"}},null,-1)]))):n("",!0)],64))),128)),l.data.table.length==0?(d(),i("tr",gt,t[19]||(t[19]=[s("td",{colspan:"9"},"ไม่มีข้อมูล",-1)]))):n("",!0)])])]),s("div",ht,[_(f,{page:l.data.page,total:l.data.total,lastPage:l.data.lastPage,perPage:l.data.perPage,onPageChange:r.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),_(P,{modalAlert:l.modalAlert},null,8,["modalAlert"]),_(C,{show:l.showLoading},null,8,["show"])])}const vt=x(L,[["render",_t]]);export{vt as default};
