import{_ as P,r as g,o as n,c as d,a as t,b as p,F as b,h as k,i,n as m,t as a,w as C,v as x,j as A}from"./index-ab241729.js";import{_ as V}from"./ballot-duotone-f2459825.js";import{_ as L}from"./plus-circle-duotone-64bd32fe.js";const S={name:"booking-out-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{select:!1,search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{creater_name(o){let e="";return o.filter(_=>{e+=_.response_name+", "}),e.slice(0,-2)},selectedAll(o){o.stopPropagation(),this.data.select=!this.data.select,this.data.table.filter(e=>{e.select=this.data.select})},selected(o,e){o.stopPropagation(),e.select=!e.select,this.data.select=this.data.table.every(_=>_.select)},addClick(){this.$router.push({name:"subministry-work.booking-out-create"}).catch(()=>{})},editClick(o){this.$router.push({name:"subministry-work.booking-out-edit",params:{id:o.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(o){this.data.perPage=o.perPage,this.data.page=o.page,this.apigetexport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetexport()},apigetexport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-out",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(o=>{this.showLoading=!1,o.data.data&&(o.data.data.filter(e=>{this.data.total=e.total}),this.data.table=o.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},deleteClick(o){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือส่งออก",message:`“${o.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apigetexport()}}}}}},mounted(){var o,e;this.data.page=((o=this.$route.query)==null?void 0:o.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apigetexport()}},M={class:"booking-out-inex"},N={class:"group-overflow"},j={class:"detail"},q={class:"group-head"},B={class:"group-first"},F=t("img",{src:V,alt:"",class:"icon-users-cog"},null,-1),z=t("div",{class:"name"},"หนังสือส่งออก",-1),D=t("div",{class:"group-image"},[t("img",{src:L,alt:"",class:"icon-plus"}),A(" สร้างหนังสือส่งออก ")],-1),E=[D],T={class:"group-end"},I={class:"search"},U=t("div",{class:"line"},null,-1),G={class:"group-body"},H={class:"table-booking-out-inex"},J={class:"thead"},K={class:"thead-row"},O={class:"col0"},Q=t("i",{class:"bi bi-plus-lg"},null,-1),R=[Q],W=t("th",{class:"col1"},"ความเร่งด่วน",-1),X=t("th",{class:"col2"},"เลขที่หนังสือออก",-1),Y=t("th",{class:"col3"},"ชื่อเรื่อง",-1),Z=t("th",{class:"col4"},"หน่วยงานปลายทาง",-1),$=t("th",{class:"col5"},"ลงวันที่",-1),tt=t("th",{class:"col6"},"ชนิด",-1),st=t("th",{class:"col7"},"ผู้รับผิดชอบ",-1),et=t("th",{class:"col8"},"สถานะ",-1),ot={class:"tbody"},at=["onClick"],lt=["onClick"],ct={key:0},nt=t("i",{class:"bi bi-dash-lg"},null,-1),dt=[nt],rt={key:1},it=t("i",{class:"bi bi-plus-lg"},null,-1),_t=[it],ht={class:"col1"},gt={class:"col2"},pt={class:"col3"},ut={class:"col4"},bt={class:"col5"},kt={class:"col6"},mt={class:"col7"},yt={class:"group-show"},wt={class:"span"},ft={class:"col8"},vt={class:"col0"},Pt={class:"col1"},Ct={class:"col2"},xt={class:"col3"},At={class:"col4"},Vt={class:"col5"},Lt={class:"col6"},St={class:"col7"},Mt={class:"group-show"},Nt={class:"span"},jt={class:"show-detail"},qt={class:"col8"},Bt={key:1},Ft=t("td",{colspan:"9",style:{"border-bottom":"solid 1px #c1cfe3"}},null,-1),zt=[Ft],Dt={key:0,class:"tbody-row"},Et=t("td",{colspan:"9"},"ไม่มีข้อมูล",-1),Tt=[Et],It={class:"group-footer"};function Ut(o,e,_,Gt,c,r){const y=g("cpn-input"),w=g("cpn-pagination"),f=g("cpn-modal-alert"),v=g("cpn-loading");return n(),d("div",M,[t("div",N,[t("div",j,[t("div",q,[t("div",B,[F,z,t("button",{type:"button",class:"add-booking-out",onClick:e[0]||(e[0]=s=>r.addClick())},E)]),t("div",T,[t("div",I,[p(y,{modelValue:c.data.search,"onUpdate:modelValue":e[1]||(e[1]=s=>c.data.search=s),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=s=>r.search()),placeholder:"เลขที่หนังสือออก/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),U,t("div",G,[t("table",H,[t("thead",J,[t("tr",K,[t("th",O,[t("button",{onClick:e[3]||(e[3]=s=>r.selectedAll(s))},R)]),W,X,Y,Z,$,tt,st,et])]),t("tbody",ot,[(n(!0),d(b,null,k(c.data.table,(s,u)=>(n(),d(b,{key:u},[t("tr",{class:m(["tbody-row pointer",u%2!=0?"color-tr1":"color-tr2"]),onClick:l=>r.editClick(s)},[t("td",{class:"col0",onClick:l=>s.register_count>1?r.selected(l,s):""},[s.select&&s.register_count>1?(n(),d("button",ct,dt)):i("",!0),!s.select&&s.register_count>1?(n(),d("button",rt,_t)):i("",!0)],8,lt),t("td",ht,a(s.speed_name),1),t("td",gt,a(s.book_out_num),1),t("td",pt,a(s.subject),1),t("td",ut,a(s.register_count>1?s.register_count:s.department_name),1),t("td",bt,a(s.regis_date),1),t("td",kt,a(s.book_type),1),t("td",mt,[t("div",yt,[t("span",wt,a(s.booking_follows.length>0?s.booking_follows[0].response_name+"...":""),1),C(t("div",{class:"show-detail"},a(r.creater_name(s.booking_follows)),513),[[x,s.booking_follows.length>0]])])]),t("td",ft,a(s.status_name),1)],10,at),s.select&&s.register_count>1?(n(!0),d(b,{key:0},k(s.booking_registers,(l,h)=>(n(),d("tr",{key:h,class:m(["tbody-row",u%2!=0?h%2!=0?"color-tr1":"color-tr2":h%2!=0?"color-tr2":"color-tr1"])},[t("td",vt,a(),1),t("td",Pt,a(h+1),1),t("td",Ct,a(l.book_out_num),1),t("td",xt,a(l.subject),1),t("td",At,a(l.department_name),1),t("td",Vt,a(l.regis_date),1),t("td",Lt,a(l.book_type),1),t("td",St,[t("div",Mt,[t("span",Nt,a(l.creater_name),1),t("div",jt,a(l.creater_name),1)])]),t("td",qt,a(l.status_name),1)],2))),128)):i("",!0),s.select&&s.register_count>1?(n(),d("tr",Bt,zt)):i("",!0)],64))),128)),c.data.table.length==0?(n(),d("tr",Dt,Tt)):i("",!0)])])]),t("div",It,[p(w,{page:c.data.page,total:c.data.total,lastPage:c.data.lastPage,perPage:c.data.perPage,onPageChange:r.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),p(f,{modalAlert:c.modalAlert},null,8,["modalAlert"]),p(v,{show:c.showLoading},null,8,["show"])])}const Ot=P(S,[["render",Ut]]);export{Ot as default};
