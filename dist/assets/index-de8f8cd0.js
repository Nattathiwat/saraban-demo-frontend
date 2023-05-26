import{_ as P}from"./ballot-duotone-f2459825.js";import{_ as f}from"./plus-circle-duotone-64bd32fe.js";import{_ as v,r as _,o as i,c as d,a as t,b as h,F as C,h as x,i as g,t as l,j as p}from"./index-dbff99ee.js";const N={name:"booking-out-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{selectedAll(e){e.stopPropagation(),this.data.select=!this.data.select,this.data.table.filter(s=>{s.select=this.data.select})},selected(e,s){e.stopPropagation(),s.select=!s.select,this.data.select=this.data.table.every(r=>r.select)},addClick(){this.$router.push({name:"subministry-work.booking-out-create"}).catch(()=>{})},editClick(e){this.$router.push({name:"subministry-work.booking-out-edit",params:{id:e.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(e){this.data.perPage=e.perPage,this.data.page=e.page,this.apigetexport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetexport()},apigetexport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-out",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(e=>{this.showLoading=!1,e.data.data&&(e.data.data.filter(s=>{s.speedName=s.speed_name,s.bookingNoN=s.book_out_num,s.bookingSubject=s.subject,s.department_name=s.department_name,s.date=s.regis_date,s.typename=s.book_type,s.statusName=s.status_name,this.data.total=s.total}),this.data.table=e.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},deleteClick(e){let s=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือส่งออก",message:`“${e.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){s.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.apigetexport()}}}}}},mounted(){var e,s;this.data.page=((e=this.$route.query)==null?void 0:e.page)||this.data.page,this.data.perPage=((s=this.$route.query)==null?void 0:s.perPage)||this.data.perPage,this.apigetexport()}},A={class:"booking-out-inex"},S={class:"group-overflow"},V={class:"detail"},w={class:"group-head"},L={class:"group-first"},M=t("img",{src:P,alt:"",class:"icon-users-cog"},null,-1),j=t("div",{class:"name"},"หนังสือส่งออก",-1),q=t("div",{class:"group-image"},[t("img",{src:f,alt:"",class:"icon-plus"}),p(" สร้างหนังสือส่งออก ")],-1),B=[q],F={class:"group-end"},E={class:"search"},T=t("div",{class:"line"},null,-1),z={class:"group-body"},D={class:"table-booking-out-inex"},I={class:"thead"},U={class:"thead-row"},G={class:"col0"},H=t("i",{class:"bi bi-plus-lg"},null,-1),J=[H],K=t("th",{class:"col1"},"ความเร่งด่วน",-1),O=t("th",{class:"col2"},"เลขที่หนังสือออก",-1),Q=t("th",{class:"col3"},"ชื่อเรื่อง",-1),R=t("th",{class:"col4"},"หน่วยงานปลายทาง",-1),W=t("th",{class:"col5"},"ลงวันที่",-1),X=t("th",{class:"col6"},"ชนิด",-1),Y=t("th",{class:"col7"},"ผู้รับผิดชอบ",-1),Z=t("th",{class:"col8"},"สถานะ",-1),$={class:"tbody"},tt=["onClick"],st={class:"col0"},et=["onClick"],at=t("i",{class:"bi bi-dash-lg"},null,-1),ot=[at],lt=["onClick"],ct=t("i",{class:"bi bi-plus-lg"},null,-1),it=[ct],dt={class:"col1"},nt={class:"col2"},_t={class:"col3"},ht={class:"col4"},rt={class:"col5"},gt={class:"col6"},pt={class:"col7"},ut={class:"group-show"},mt={class:"span"},bt={class:"show-detail"},kt={class:"col8"},yt={key:0,class:"tbody-row"},Pt=t("td",{colspan:"9"},"ไม่มีข้อมูล",-1),ft=[Pt],vt={class:"group-footer"};function Ct(e,s,r,xt,o,c){const u=_("cpn-input"),m=_("cpn-pagination"),b=_("cpn-modal-alert"),k=_("cpn-loading");return i(),d("div",A,[t("div",S,[t("div",V,[t("div",w,[t("div",L,[M,j,t("button",{type:"button",class:"add-booking-out",onClick:s[0]||(s[0]=a=>c.addClick())},B)]),t("div",F,[t("div",E,[h(u,{modelValue:o.data.search,"onUpdate:modelValue":s[1]||(s[1]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:s[2]||(s[2]=a=>c.search()),placeholder:"เลขที่หนังสือออก/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),T,t("div",z,[t("table",D,[t("thead",I,[t("tr",U,[t("th",G,[t("button",{onClick:s[3]||(s[3]=a=>c.selectedAll(a))},J)]),K,O,Q,R,W,X,Y,Z])]),t("tbody",$,[(i(!0),d(C,null,x(o.data.table,(a,y)=>(i(),d("tr",{class:"tbody-row pointer",key:y,onClick:n=>c.editClick(a)},[t("td",st,[a.select?(i(),d("button",{key:0,onClick:n=>c.selected(n,a)},ot,8,et)):(i(),d("button",{key:1,onClick:n=>c.selected(n,a)},it,8,lt))]),t("td",dt,l(a.speedName),1),t("td",nt,l(a.bookingNoN),1),t("td",_t,l(a.bookingSubject),1),t("td",ht,l(a.department_name),1),t("td",rt,l(a.date),1),t("td",gt,l(a.typename),1),t("td",pt,[t("div",ut,[t("span",mt,l(a.creater_name),1),t("div",bt,[p(l(a.creater_name)+" ",1),g("",!0)])])]),t("td",kt,l(a.statusName),1)],8,tt))),128)),o.data.table.length==0?(i(),d("tr",yt,ft)):g("",!0)])])]),t("div",vt,[h(m,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:c.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),h(b,{modalAlert:o.modalAlert},null,8,["modalAlert"]),h(k,{show:o.showLoading},null,8,["show"])])}const Vt=v(N,[["render",Ct]]);export{Vt as default};