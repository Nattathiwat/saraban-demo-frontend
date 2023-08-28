import{_ as P,r as g,o as n,c as d,a as t,b as p,F as b,h as k,i,n as m,t as a,w as C,v as x}from"./index-4b6d3cf1.js";import{_ as A}from"./ballot-duotone-f2459825.js";const L={name:"booking-out-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{select:!1,search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{creater_name(e){let o="";return e.filter(_=>{o+=_.response_name+", "}),o.slice(0,-2)},selectedAll(e){e.stopPropagation(),this.data.select=!this.data.select,this.data.table.filter(o=>{o.select=this.data.select})},selected(e,o){e.stopPropagation(),o.select=!o.select,this.data.select=this.data.table.every(_=>_.select)},addClick(){this.$router.push({name:"my-work.booking-out-create"}).catch(()=>{})},editClick(e){this.$router.push({name:"my-work.booking-out-edit",params:{id:e.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(e){this.data.perPage=e.perPage,this.data.page=e.page,this.apigetexport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetexport()},apigetexport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-out",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(e=>{this.showLoading=!1,e.data.data&&(e.data.data.filter(o=>{this.data.total=o.total}),this.data.table=e.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},deleteClick(e){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือส่งออก",message:`“${e.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){o.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.apigetexport()}}}}}},mounted(){var e,o;this.data.page=((e=this.$route.query)==null?void 0:e.page)||this.data.page,this.data.perPage=((o=this.$route.query)==null?void 0:o.perPage)||this.data.perPage,this.apigetexport()}},S={class:"booking-out-inex"},V={class:"group-overflow"},M={class:"detail"},q={class:"group-head"},B=t("div",{class:"group-first"},[t("img",{src:A,alt:"",class:"icon-users-cog"}),t("div",{class:"name"},"หนังสือส่งออก")],-1),F={class:"group-end"},N={class:"search"},j=t("div",{class:"line"},null,-1),z={class:"group-body"},D={class:"table-booking-out-inex"},E={class:"thead"},I={class:"thead-row"},T={class:"col0"},U=t("i",{class:"bi bi-plus-lg"},null,-1),G=[U],H=t("th",{class:"col1"},"ความเร่งด่วน",-1),J=t("th",{class:"col2"},"เลขที่หนังสือออก",-1),K=t("th",{class:"col3"},"ชื่อเรื่อง",-1),O=t("th",{class:"col4"},"หน่วยงานปลายทาง",-1),Q=t("th",{class:"col5"},"ลงวันที่",-1),R=t("th",{class:"col6"},"ชนิด",-1),W=t("th",{class:"col7"},"ผู้รับผิดชอบ",-1),X=t("th",{class:"col8"},"สถานะ",-1),Y={class:"tbody"},Z=["onClick"],$=["onClick"],tt={key:0},st=t("i",{class:"bi bi-dash-lg"},null,-1),et=[st],ot={key:1},at=t("i",{class:"bi bi-plus-lg"},null,-1),lt=[at],ct={class:"col1"},nt={class:"col2"},dt={class:"col3"},rt={class:"col4"},it={class:"col5"},_t={class:"col6"},ht={class:"col7"},gt={class:"group-show"},pt={class:"span"},ut={class:"col8"},bt={class:"col0"},kt={class:"col1"},mt={class:"col2"},wt={class:"col3"},yt={class:"col4"},ft={class:"col5"},vt={class:"col6"},Pt={class:"col7"},Ct={class:"group-show"},xt={class:"span"},At={class:"show-detail"},Lt={class:"col8"},St={key:1},Vt=t("td",{colspan:"9",style:{"border-bottom":"solid 1px #c1cfe3"}},null,-1),Mt=[Vt],qt={key:0,class:"tbody-row"},Bt=t("td",{colspan:"9"},"ไม่มีข้อมูล",-1),Ft=[Bt],Nt={class:"group-footer"};function jt(e,o,_,zt,c,r){const w=g("cpn-input"),y=g("cpn-pagination"),f=g("cpn-modal-alert"),v=g("cpn-loading");return n(),d("div",S,[t("div",V,[t("div",M,[t("div",q,[B,t("div",F,[t("div",N,[p(w,{modelValue:c.data.search,"onUpdate:modelValue":o[0]||(o[0]=s=>c.data.search=s),name:"search",type:"text",searchFlag:!0,onSearchClick:o[1]||(o[1]=s=>r.search()),placeholder:"เลขที่หนังสือออก/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),j,t("div",z,[t("table",D,[t("thead",E,[t("tr",I,[t("th",T,[t("button",{onClick:o[2]||(o[2]=s=>r.selectedAll(s))},G)]),H,J,K,O,Q,R,W,X])]),t("tbody",Y,[(n(!0),d(b,null,k(c.data.table,(s,u)=>(n(),d(b,{key:u},[t("tr",{class:m(["tbody-row pointer",u%2!=0?"color-tr1":"color-tr2"]),onClick:l=>r.editClick(s)},[t("td",{class:"col0",onClick:l=>s.register_count>1?r.selected(l,s):""},[s.select&&s.register_count>1?(n(),d("button",tt,et)):i("",!0),!s.select&&s.register_count>1?(n(),d("button",ot,lt)):i("",!0)],8,$),t("td",ct,a(s.speed_name),1),t("td",nt,a(s.book_out_num),1),t("td",dt,a(s.subject),1),t("td",rt,a(s.register_count>1?s.register_count:s.department_name),1),t("td",it,a(s.regis_date),1),t("td",_t,a(s.book_type),1),t("td",ht,[t("div",gt,[t("span",pt,a(s.booking_follows.length>0?s.booking_follows[0].response_name+"...":""),1),C(t("div",{class:"show-detail"},a(r.creater_name(s.booking_follows)),513),[[x,s.booking_follows.length>0]])])]),t("td",ut,a(s.status_name),1)],10,Z),s.select&&s.register_count>1?(n(!0),d(b,{key:0},k(s.booking_registers,(l,h)=>(n(),d("tr",{key:h,class:m(["tbody-row",u%2!=0?h%2!=0?"color-tr1":"color-tr2":h%2!=0?"color-tr2":"color-tr1"])},[t("td",bt,a(),1),t("td",kt,a(h+1),1),t("td",mt,a(l.book_out_num),1),t("td",wt,a(l.subject),1),t("td",yt,a(l.department_name),1),t("td",ft,a(l.regis_date),1),t("td",vt,a(l.book_type),1),t("td",Pt,[t("div",Ct,[t("span",xt,a(l.creater_name),1),t("div",At,a(l.creater_name),1)])]),t("td",Lt,a(l.status_name),1)],2))),128)):i("",!0),s.select&&s.register_count>1?(n(),d("tr",St,Mt)):i("",!0)],64))),128)),c.data.table.length==0?(n(),d("tr",qt,Ft)):i("",!0)])])]),t("div",Nt,[p(y,{page:c.data.page,total:c.data.total,lastPage:c.data.lastPage,perPage:c.data.perPage,onPageChange:r.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),p(f,{modalAlert:c.modalAlert},null,8,["modalAlert"]),p(v,{show:c.showLoading},null,8,["show"])])}const It=P(L,[["render",jt]]);export{It as default};
