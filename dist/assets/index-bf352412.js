import{_ as A}from"./ballot-duotone-f2459825.js";import{_ as x}from"./plus-circle-duotone-64bd32fe.js";import{_ as N,r as p,o as l,c as i,a as t,b as g,F as b,h as k,i as d,n as y,t as o,j as m}from"./index-57914e2c.js";const S={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{select:!1,search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:""}}},methods:{selectedAll(a){a.stopPropagation(),this.data.select=!this.data.select,this.data.table.filter(s=>{s.select=this.data.select})},selected(a,s){a.stopPropagation(),s.select=!s.select,this.data.select=this.data.table.every(_=>_.select)},addClick(){this.$router.push({name:"my-work.booking-receive-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"my-work.booking-receive-edit",params:{id:a.id},query:{book_type:a.book_type,regis_id:a.regis_id,response_id:a.response_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(a=>{this.showLoading=!1,a.data.data&&(a.data.data.filter(s=>{s.speedName=s.speed_name,s.bookingNo=s.receive_document_number,s.referBookno=s.document_number,s.bookingSubject=s.subject,s.typename=s.book_type_name,s.date=s.as_of_date,s.response=s.response_name,s.statusName=s.status,this.data.total=s.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage),this.data.table.filter(s=>{s.has_sub&&this.axios.get(`/booking-receive/sub/${s.book_type}/${s.id}`).then(_=>{s.sub=_.data.data})}))}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let s=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือรับเข้า",message:`“${a.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){s.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือรับเข้าสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.apigetimport()}}}}}},mounted(){var a,s;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((s=this.$route.query)==null?void 0:s.perPage)||this.data.perPage,this.apigetimport()}},V={class:"booking-receive-inex"},L={class:"group-overflow"},j={class:"detail"},B={class:"group-head"},M={class:"group-first"},w=t("img",{src:A,alt:"",class:"icon-users-cog"},null,-1),q=t("div",{class:"name"},"หนังสือรับเข้า",-1),F=t("div",{class:"group-image"},[t("img",{src:x,alt:"",class:"icon-plus"}),m(" สร้างหนังสือรับเข้า ")],-1),z=[F],E={class:"group-end"},T={class:"search"},D=t("div",{class:"line"},null,-1),I={class:"group-body"},U={class:"table-booking-receive-inex"},G={class:"thead"},H={class:"thead-row"},J={class:"col0"},K=t("i",{class:"bi bi-plus-lg"},null,-1),O=[K],Q=t("th",{class:"col1"},"ความเร่งด่วน",-1),R=t("th",{class:"col2"},"เลขรับ",-1),W=t("th",{class:"col3"},"เลขที่หนังสือ",-1),X=t("th",{class:"col4"},"ชื่อเรื่อง",-1),Y=t("th",{class:"col5"},"ชนิด",-1),Z=t("th",{class:"col6"},"ลงวันที่",-1),$=t("th",{class:"col7"},"ผู้รับผิดชอบ",-1),tt=t("th",{class:"col8"},"สถานะ",-1),st={class:"tbody"},et=["onClick"],at=["onClick"],ot={key:0},ct=t("i",{class:"bi bi-dash-lg"},null,-1),lt=[ct],it={key:1},dt=t("i",{class:"bi bi-plus-lg"},null,-1),nt=[dt],rt={class:"col1"},_t={class:"col2"},ht={class:"col3"},pt={class:"col4"},gt={class:"group-show none-bg"},ut={class:"span"},bt={class:"show-detail"},mt={class:"col5"},kt={class:"col6"},yt={class:"col7"},vt={class:"group-show"},ft={class:"span"},Pt={class:"show-detail"},Ct={class:"col8"},At={class:"col0"},xt={class:"col1"},Nt={class:"col2 text-start",colspan:"6"},St={class:"col8"},Vt={key:1},Lt=t("td",{colspan:"9",style:{"border-bottom":"solid 1px #c1cfe3"}},null,-1),jt=[Lt],Bt={key:0,class:"tbody-row"},Mt=t("td",{colspan:"9"},"ไม่มีข้อมูล",-1),wt=[Mt],qt={class:"group-footer"};function Ft(a,s,_,zt,c,n){const v=p("cpn-input"),f=p("cpn-pagination"),P=p("cpn-modal-alert"),C=p("cpn-loading");return l(),i("div",V,[t("div",L,[t("div",j,[t("div",B,[t("div",M,[w,q,t("button",{type:"button",class:"add-booking-receive",onClick:s[0]||(s[0]=e=>n.addClick())},z)]),t("div",E,[t("div",T,[g(v,{modelValue:c.data.search,"onUpdate:modelValue":s[1]||(s[1]=e=>c.data.search=e),name:"search",type:"text",searchFlag:!0,onSearchClick:s[2]||(s[2]=e=>n.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),D,t("div",I,[t("table",U,[t("thead",G,[t("tr",H,[t("th",J,[t("button",{onClick:s[3]||(s[3]=e=>n.selectedAll(e))},O)]),Q,R,W,X,Y,Z,$,tt])]),t("tbody",st,[(l(!0),i(b,null,k(c.data.table,(e,u)=>(l(),i(b,{key:u},[t("tr",{class:y(["tbody-row pointer",u%2!=0?"color-tr1":"color-tr2"]),onClick:r=>n.editClick(e)},[t("td",{class:"col0",onClick:r=>n.selected(r,e)},[e.select&&e.has_sub?(l(),i("button",ot,lt)):d("",!0),!e.select&&e.has_sub?(l(),i("button",it,nt)):d("",!0)],8,at),t("td",rt,o(e.speedName),1),t("td",_t,o(e.bookingNo),1),t("td",ht,o(e.referBookno),1),t("td",pt,[t("div",gt,[t("span",ut,o(e.bookingSubject),1),t("div",bt,[m(o(e.bookingSubject)+" ",1),d("",!0)])])]),t("td",mt,o(e.typename),1),t("td",kt,o(e.date),1),t("td",yt,[t("div",vt,[t("span",ft,o(e.response),1),t("div",Pt,[m(o(e.response)+" ",1),d("",!0)])])]),t("td",Ct,o(e.statusName),1)],10,et),e.select?(l(!0),i(b,{key:0},k(e.sub,(r,h)=>(l(),i("tr",{key:h,class:y(["tbody-row",u%2!=0?h%2!=0?"color-tr1":"color-tr2":h%2!=0?"color-tr2":"color-tr1"])},[t("td",At,o(h+1),1),t("td",xt,o(r.speed_name),1),t("td",Nt,o(r.department_name),1),t("td",St,o(r.status),1)],2))),128)):d("",!0),e.select?(l(),i("tr",Vt,jt)):d("",!0)],64))),128)),c.data.table.length==0?(l(),i("tr",Bt,wt)):d("",!0)])])]),t("div",qt,[g(f,{page:c.data.page,total:c.data.total,lastPage:c.data.lastPage,perPage:c.data.perPage,onPageChange:n.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),g(P,{modalAlert:c.modalAlert},null,8,["modalAlert"]),g(C,{show:c.showLoading},null,8,["show"])])}const It=N(S,[["render",Ft]]);export{It as default};
