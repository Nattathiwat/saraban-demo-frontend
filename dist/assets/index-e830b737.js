import{_ as C}from"./ballot-duotone-f2459825.js";import{_ as x,r as h,o as d,c as n,a as t,b as g,F as u,h as m,i as r,n as k,t as a,j as y}from"./index-64243335.js";const A={name:"booking-out-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{select:!1,search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{selectedAll(e){e.stopPropagation(),this.data.select=!this.data.select,this.data.table.filter(o=>{o.select=this.data.select})},selected(e,o){e.stopPropagation(),o.select=!o.select,this.data.select=this.data.table.every(b=>b.select)},addClick(){this.$router.push({name:"my-work.booking-out-create"}).catch(()=>{})},editClick(e){this.$router.push({name:"my-work.booking-out-edit",params:{id:e.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(e){this.data.perPage=e.perPage,this.data.page=e.page,this.apigetexport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetexport()},apigetexport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-out",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(e=>{this.showLoading=!1,e.data.data&&(e.data.data.filter(o=>{this.data.total=o.total}),this.data.table=e.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},deleteClick(e){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือส่งออก",message:`“${e.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){o.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.apigetexport()}}}}}},mounted(){var e,o;this.data.page=((e=this.$route.query)==null?void 0:e.page)||this.data.page,this.data.perPage=((o=this.$route.query)==null?void 0:o.perPage)||this.data.perPage,this.apigetexport()}},V={class:"booking-out-inex"},L={class:"group-overflow"},M={class:"detail"},S={class:"group-head"},N=t("div",{class:"group-first"},[t("img",{src:C,alt:"",class:"icon-users-cog"}),t("div",{class:"name"},"หนังสือส่งออก")],-1),j={class:"group-end"},q={class:"search"},B=t("div",{class:"line"},null,-1),F={class:"group-body"},z={class:"table-booking-out-inex"},E={class:"thead"},T={class:"thead-row"},D={class:"col0"},I=t("i",{class:"bi bi-plus-lg"},null,-1),U=[I],G=t("th",{class:"col1"},"ความเร่งด่วน",-1),H=t("th",{class:"col2"},"เลขที่หนังสือออก",-1),J=t("th",{class:"col3"},"ชื่อเรื่อง",-1),K=t("th",{class:"col4"},"หน่วยงานปลายทาง",-1),O=t("th",{class:"col5"},"ลงวันที่",-1),Q=t("th",{class:"col6"},"ชนิด",-1),R=t("th",{class:"col7"},"ผู้รับผิดชอบ",-1),W=t("th",{class:"col8"},"สถานะ",-1),X={class:"tbody"},Y=["onClick"],Z=["onClick"],$={key:0},tt=t("i",{class:"bi bi-dash-lg"},null,-1),st=[tt],et={key:1},ot=t("i",{class:"bi bi-plus-lg"},null,-1),at=[ot],ct={class:"col1"},lt={class:"col2"},dt={class:"col3"},nt={class:"col4"},rt={class:"col5"},it={class:"col6"},_t={class:"col7"},ht={class:"group-show"},gt={class:"span"},pt={class:"show-detail"},ut={class:"col8"},bt={class:"col0"},mt={class:"col1"},kt={class:"col2"},yt={class:"col3"},Pt={class:"col4"},ft={class:"col5"},wt={class:"col6"},vt={class:"col7"},Ct={class:"group-show"},xt={class:"span"},At={class:"show-detail"},Vt={class:"col8"},Lt={key:1},Mt=t("td",{colspan:"9",style:{"border-bottom":"solid 1px #c1cfe3"}},null,-1),St=[Mt],Nt={key:0,class:"tbody-row"},jt=t("td",{colspan:"9"},"ไม่มีข้อมูล",-1),qt=[jt],Bt={class:"group-footer"};function Ft(e,o,b,zt,l,i){const P=h("cpn-input"),f=h("cpn-pagination"),w=h("cpn-modal-alert"),v=h("cpn-loading");return d(),n("div",V,[t("div",L,[t("div",M,[t("div",S,[N,t("div",j,[t("div",q,[g(P,{modelValue:l.data.search,"onUpdate:modelValue":o[0]||(o[0]=s=>l.data.search=s),name:"search",type:"text",searchFlag:!0,onSearchClick:o[1]||(o[1]=s=>i.search()),placeholder:"เลขที่หนังสือออก/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),B,t("div",F,[t("table",z,[t("thead",E,[t("tr",T,[t("th",D,[t("button",{onClick:o[2]||(o[2]=s=>i.selectedAll(s))},U)]),G,H,J,K,O,Q,R,W])]),t("tbody",X,[(d(!0),n(u,null,m(l.data.table,(s,p)=>(d(),n(u,{key:p},[t("tr",{class:k(["tbody-row pointer",p%2!=0?"color-tr1":"color-tr2"]),onClick:c=>i.editClick(s)},[t("td",{class:"col0",onClick:c=>s.register_count>1?i.selected(c,s):""},[s.select&&s.register_count>1?(d(),n("button",$,st)):r("",!0),!s.select&&s.register_count>1?(d(),n("button",et,at)):r("",!0)],8,Z),t("td",ct,a(s.speed_name),1),t("td",lt,a(s.book_out_num),1),t("td",dt,a(s.subject),1),t("td",nt,a(s.register_count>1?s.register_count:s.department_name),1),t("td",rt,a(s.regis_date),1),t("td",it,a(s.book_type),1),t("td",_t,[t("div",ht,[t("span",gt,a(s.creater_name),1),t("div",pt,[y(a(s.creater_name)+" ",1),r("",!0)])])]),t("td",ut,a(s.status_name),1)],10,Y),s.select&&s.register_count>1?(d(!0),n(u,{key:0},m(s.booking_registers,(c,_)=>(d(),n("tr",{key:_,class:k(["tbody-row",p%2!=0?_%2!=0?"color-tr1":"color-tr2":_%2!=0?"color-tr2":"color-tr1"])},[t("td",bt,a(_+1),1),t("td",mt,a(c.speed_name),1),t("td",kt,a(c.book_out_num),1),t("td",yt,a(c.subject),1),t("td",Pt,a(c.department_name),1),t("td",ft,a(c.regis_date),1),t("td",wt,a(c.book_type),1),t("td",vt,[t("div",Ct,[t("span",xt,a(c.creater_name),1),t("div",At,[y(a(c.creater_name)+" ",1),r("",!0)])])]),t("td",Vt,a(c.status_name),1)],2))),128)):r("",!0),s.select&&s.register_count>1?(d(),n("tr",Lt,St)):r("",!0)],64))),128)),l.data.table.length==0?(d(),n("tr",Nt,qt)):r("",!0)])])]),t("div",Bt,[g(f,{page:l.data.page,total:l.data.total,lastPage:l.data.lastPage,perPage:l.data.perPage,onPageChange:i.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),g(w,{modalAlert:l.modalAlert},null,8,["modalAlert"]),g(v,{show:l.showLoading},null,8,["show"])])}const Dt=x(A,[["render",Ft]]);export{Dt as default};