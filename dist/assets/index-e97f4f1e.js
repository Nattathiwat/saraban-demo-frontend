import{_ as x,r as p,o as l,c as d,a as t,b as g,F as b,h as k,i,n as v,t as o,j as m,w as N,v as S}from"./index-4e2f919c.js";import{_ as A}from"./ballot-duotone-f2459825.js";import{_ as V}from"./plus-circle-duotone-64bd32fe.js";const L={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{select:!1,search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{selectedAll(a){a.stopPropagation(),this.data.select=!this.data.select,this.data.table.filter(s=>{s.select=this.data.select})},selected(a,s){a.stopPropagation(),s.select=!s.select,this.data.select=this.data.table.every(r=>r.select)},addClick(){this.$router.push({name:"my-work.booking-receive-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"my-work.booking-receive-edit",params:{id:a.id},query:{book_type:a.book_type,regis_id:a.regis_id,response_id:a.response_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive/deliver",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(a=>{this.showLoading=!1,a.data.data&&(a.data.data.filter(s=>{s.speedName=s.speed_name,s.bookingNo=s.receive_document_number,s.referBookno=s.document_number,s.bookingSubject=s.subject,s.typename=s.book_type_name,s.date=s.as_of_date,s.response=s.response_name,s.statusName=s.status,this.data.total=s.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage),this.data.table.filter(s=>{s.has_sub&&this.axios.get(`/booking-receive/sub/${s.book_type}/${s.id}`,{params:{user_id:localStorage.getItem("user_id")}}).then(r=>{s.sub=r.data.data})}))}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})}},mounted(){var a,s;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((s=this.$route.query)==null?void 0:s.perPage)||this.data.perPage,this.apigetimport()}},j={class:"booking-receive-inex"},w={class:"group-overflow"},B={class:"detail"},q={class:"group-head"},F={class:"group-first"},M=t("img",{src:A,alt:"",class:"icon-users-cog"},null,-1),z=t("div",{class:"name"},"หนังสือรับเข้า",-1),D=t("div",{class:"group-image"},[t("img",{src:V,alt:"",class:"icon-plus"}),m(" สร้างหนังสือรับเข้า ")],-1),E=[D],I={class:"group-end"},T={class:"search"},U=t("div",{class:"line"},null,-1),G={class:"group-body"},H={class:"table-booking-receive-inex"},J={class:"thead"},K={class:"thead-row"},O={class:"col0"},Q=t("i",{class:"bi bi-plus-lg"},null,-1),R=[Q],W=t("th",{class:"col1"},"ความเร่งด่วน",-1),X=t("th",{class:"col2"},"เลขรับ",-1),Y=t("th",{class:"col3"},"เลขที่หนังสือ",-1),Z=t("th",{class:"col4"},"ชื่อเรื่อง",-1),$=t("th",{class:"col5"},"ชนิด",-1),tt=t("th",{class:"col6"},"ลงวันที่",-1),st=t("th",{class:"col7"},"ผู้รับผิดชอบ",-1),et=t("th",{class:"col8"},"สถานะ",-1),at={class:"tbody"},ot=["onClick"],ct=["onClick"],lt={key:0},dt=t("i",{class:"bi bi-dash-lg"},null,-1),it=[dt],nt={key:1},_t=t("i",{class:"bi bi-plus-lg"},null,-1),rt=[_t],ht={class:"col1"},pt={class:"col2"},gt={class:"col3"},ut={class:"col4"},bt={class:"group-show none-bg"},mt={class:"span"},kt={class:"show-detail"},vt={class:"col5"},yt={class:"col6"},ft={class:"col7"},Pt={class:"group-show"},Ct={class:"span"},xt={class:"show-detail"},Nt={class:"col8"},St={class:"col0"},At={class:"col1"},Vt={class:"col2 text-start ps-5",colspan:"6"},Lt={class:"col8"},jt={key:1},wt=t("td",{colspan:"9",style:{"border-bottom":"solid 1px #c1cfe3"}},null,-1),Bt=[wt],qt={key:0,class:"tbody-row"},Ft=t("td",{colspan:"9"},"ไม่มีข้อมูล",-1),Mt=[Ft],zt={class:"group-footer"};function Dt(a,s,r,Et,c,n){const y=p("cpn-input"),f=p("cpn-pagination"),P=p("cpn-modal-alert"),C=p("cpn-loading");return l(),d("div",j,[t("div",w,[t("div",B,[t("div",q,[t("div",F,[M,z,t("button",{type:"button",class:"add-booking-receive",onClick:s[0]||(s[0]=e=>n.addClick())},E)]),t("div",I,[t("div",T,[g(y,{modelValue:c.data.search,"onUpdate:modelValue":s[1]||(s[1]=e=>c.data.search=e),name:"search",type:"text",searchFlag:!0,onSearchClick:s[2]||(s[2]=e=>n.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),U,t("div",G,[t("table",H,[t("thead",J,[t("tr",K,[t("th",O,[t("button",{onClick:s[3]||(s[3]=e=>n.selectedAll(e))},R)]),W,X,Y,Z,$,tt,st,et])]),t("tbody",at,[(l(!0),d(b,null,k(c.data.table,(e,u)=>(l(),d(b,{key:u},[t("tr",{class:v(["tbody-row pointer",u%2!=0?"color-tr1":"color-tr2"]),onClick:_=>n.editClick(e)},[t("td",{class:"col0",onClick:_=>n.selected(_,e)},[e.select&&e.has_sub?(l(),d("button",lt,it)):i("",!0),!e.select&&e.has_sub?(l(),d("button",nt,rt)):i("",!0)],8,ct),t("td",ht,o(e.speedName),1),t("td",pt,o(e.bookingNo),1),t("td",gt,o(e.referBookno),1),t("td",ut,[t("div",bt,[t("span",mt,o(e.bookingSubject),1),t("div",kt,[m(o(e.bookingSubject)+" ",1),i("",!0)])])]),t("td",vt,o(e.typename),1),t("td",yt,o(e.date),1),t("td",ft,[N(t("div",Pt,[t("span",Ct,o(e.response),1),t("div",xt,[m(o(e.response)+" ",1),i("",!0)])],512),[[S,e.response]])]),t("td",Nt,o(e.sub.length>0?e.statusName:""),1)],10,ot),e.select?(l(!0),d(b,{key:0},k(e.sub,(_,h)=>(l(),d("tr",{key:h,class:v(["tbody-row",u%2!=0?h%2!=0?"color-tr1":"color-tr2":h%2!=0?"color-tr2":"color-tr1"])},[t("td",St,o(h+1),1),t("td",At,o(_.speed_name),1),t("td",Vt,o(_.sub_ministry_name),1),t("td",Lt,o(_.status),1)],2))),128)):i("",!0),e.select?(l(),d("tr",jt,Bt)):i("",!0)],64))),128)),c.data.table.length==0?(l(),d("tr",qt,Mt)):i("",!0)])])]),t("div",zt,[g(f,{page:c.data.page,total:c.data.total,lastPage:c.data.lastPage,perPage:c.data.perPage,onPageChange:n.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),g(P,{modalAlert:c.modalAlert},null,8,["modalAlert"]),g(C,{show:c.showLoading},null,8,["show"])])}const Gt=x(L,[["render",Dt]]);export{Gt as default};
