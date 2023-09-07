import{_ as x,r as p,o as l,c as d,a as s,b as g,F as b,h as k,i,n as v,t as o,j as m,w as N,v as S}from"./index-ce5d5a2c.js";import{_ as A}from"./ballot-duotone-f2459825.js";import{_ as V}from"./plus-circle-duotone-64bd32fe.js";const L={name:"booking-receive-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{select:!1,search:"",table:[],page:1,total:0,lastPage:0,perPage:1,tag:""}}},methods:{selectedAll(a){a.stopPropagation(),this.data.select=!this.data.select,this.data.table.filter(t=>{t.select=this.data.select})},selected(a,t){a.stopPropagation(),t.select=!t.select,this.data.select=this.data.table.every(r=>r.select)},addClick(){this.$router.push({name:"my-work.booking-receive-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"my-work.booking-receive-edit",params:{id:a.id},query:{book_type:a.book_type,regis_id:a.regis_id,response_id:a.response_id,page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apigetimport()},search(){this.data.status=!0,this.data.perPage=1,this.data.page=1,this.data.tag="",this.apigetimport()},apigetimport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-receive/deliver",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(a=>{this.showLoading=!1,a.data.data&&(a.data.data.filter(t=>{t.speedName=t.speed_name,t.bookingNo=t.receive_document_number,t.referBookno=t.document_number,t.bookingSubject=t.subject,t.typename=t.book_type_name,t.date=t.as_of_date,t.response=t.response_name,t.statusName=t.status,this.data.total=t.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage),this.data.table.filter(t=>{t.has_sub&&this.axios.get(`/booking-receive/sub/${t.book_type}/${t.id}`,{params:{user_id:localStorage.getItem("user_id")}}).then(r=>{t.sub=r.data.data})}))}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})}},mounted(){var a,t;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((t=this.$route.query)==null?void 0:t.perPage)||this.data.perPage,this.apigetimport()}},j={class:"booking-receive-inex"},w={class:"group-overflow"},B={class:"detail"},q={class:"group-head"},F={class:"group-first"},M=s("img",{src:A,alt:"",class:"icon-users-cog"},null,-1),z=s("div",{class:"name"},"หนังสือรับเข้า",-1),D=s("div",{class:"group-image"},[s("img",{src:V,alt:"",class:"icon-plus"}),m(" สร้างหนังสือรับเข้า ")],-1),E=[D],I={class:"group-end"},T={class:"search"},U=s("div",{class:"line"},null,-1),G={class:"group-body"},H={class:"table-booking-receive-inex"},J={class:"thead"},K={class:"thead-row"},O={class:"col0"},Q=s("i",{class:"bi bi-plus-lg"},null,-1),R=[Q],W=s("th",{class:"col1"},"ความเร่งด่วน",-1),X=s("th",{class:"col2"},"เลขรับ",-1),Y=s("th",{class:"col3"},"เลขที่หนังสือ",-1),Z=s("th",{class:"col4"},"ชื่อเรื่อง",-1),$=s("th",{class:"col5"},"ชนิด",-1),ss=s("th",{class:"col6"},"ลงวันที่",-1),ts=s("th",{class:"col7"},"ผู้รับผิดชอบ",-1),es=s("th",{class:"col8"},"สถานะ",-1),as={class:"tbody"},os=["onClick"],cs=["onClick"],ls={key:0},ds=s("i",{class:"bi bi-dash-lg"},null,-1),is=[ds],ns={key:1},_s=s("i",{class:"bi bi-plus-lg"},null,-1),rs=[_s],hs={class:"col1"},ps={class:"col2"},gs={class:"col3"},us={class:"col4"},bs={class:"group-show none-bg"},ms={class:"span"},ks={class:"show-detail"},vs={class:"col5"},ys={class:"col6"},fs={class:"col7"},Ps={class:"group-show"},Cs={class:"span"},xs={class:"show-detail"},Ns={class:"col8"},Ss={class:"col0"},As={class:"col1"},Vs={class:"col2 text-start ps-5",colspan:"6"},Ls={class:"col8"},js={key:1},ws=s("td",{colspan:"9",style:{"border-bottom":"solid 1px #c1cfe3"}},null,-1),Bs=[ws],qs={key:0,class:"tbody-row"},Fs=s("td",{colspan:"9"},"ไม่มีข้อมูล",-1),Ms=[Fs],zs={class:"group-footer"};function Ds(a,t,r,Es,c,n){const y=p("cpn-input"),f=p("cpn-pagination"),P=p("cpn-modal-alert"),C=p("cpn-loading");return l(),d("div",j,[s("div",w,[s("div",B,[s("div",q,[s("div",F,[M,z,s("button",{type:"button",class:"add-booking-receive",onClick:t[0]||(t[0]=e=>n.addClick())},E)]),s("div",I,[s("div",T,[g(y,{modelValue:c.data.search,"onUpdate:modelValue":t[1]||(t[1]=e=>c.data.search=e),name:"search",type:"text",searchFlag:!0,onSearchClick:t[2]||(t[2]=e=>n.search()),placeholder:"เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),U,s("div",G,[s("table",H,[s("thead",J,[s("tr",K,[s("th",O,[s("button",{onClick:t[3]||(t[3]=e=>n.selectedAll(e))},R)]),W,X,Y,Z,$,ss,ts,es])]),s("tbody",as,[(l(!0),d(b,null,k(c.data.table,(e,u)=>(l(),d(b,{key:u},[s("tr",{class:v(["tbody-row pointer",u%2!=0?"color-tr1":"color-tr2"]),onClick:_=>n.editClick(e)},[s("td",{class:"col0",onClick:_=>n.selected(_,e)},[e.select&&e.has_sub?(l(),d("button",ls,is)):i("",!0),!e.select&&e.has_sub?(l(),d("button",ns,rs)):i("",!0)],8,cs),s("td",hs,o(e.speedName),1),s("td",ps,o(e.bookingNo),1),s("td",gs,o(e.referBookno),1),s("td",us,[s("div",bs,[s("span",ms,o(e.bookingSubject),1),s("div",ks,[m(o(e.bookingSubject)+" ",1),i("",!0)])])]),s("td",vs,o(e.typename),1),s("td",ys,o(e.date),1),s("td",fs,[N(s("div",Ps,[s("span",Cs,o(e.response),1),s("div",xs,[m(o(e.response)+" ",1),i("",!0)])],512),[[S,e.response]])]),s("td",Ns,o(e.has_sub?"":e.statusName),1)],10,os),e.select?(l(!0),d(b,{key:0},k(e.sub,(_,h)=>(l(),d("tr",{key:h,class:v(["tbody-row",u%2!=0?h%2!=0?"color-tr1":"color-tr2":h%2!=0?"color-tr2":"color-tr1"])},[s("td",Ss,o(h+1),1),s("td",As,o(_.speed_name),1),s("td",Vs,o(_.sub_ministry_name),1),s("td",Ls,o(_.status),1)],2))),128)):i("",!0),e.select?(l(),d("tr",js,Bs)):i("",!0)],64))),128)),c.data.table.length==0?(l(),d("tr",qs,Ms)):i("",!0)])])]),s("div",zs,[g(f,{page:c.data.page,total:c.data.total,lastPage:c.data.lastPage,perPage:c.data.perPage,onPageChange:n.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),g(P,{modalAlert:c.modalAlert},null,8,["modalAlert"]),g(C,{show:c.showLoading},null,8,["show"])])}const Gs=x(L,[["render",Ds]]);export{Gs as default};
