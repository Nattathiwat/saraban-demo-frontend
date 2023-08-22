import{_ as A,r,o as i,c,a as s,b as h,F as v,h as k,i as n,w as f,v as y,d as q,n as w,t as e,j as m,g as R,k as I}from"./index-ce19147e.js";import{_ as D}from"./ballot-duotone-f2459825.js";import{_ as F}from"./plus-circle-duotone-64bd32fe.js";const j={name:"booking-out-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,optionSelectDefault:{regis_id:[],book_category_id:[]},data:{select:!1,search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:"",as_of_date:"",book_category_id:""},modalRegiter:{showModal:!1,booking_register_details:[]}}},methods:{selectedAll(a){a.stopPropagation(),this.data.select=!this.data.select,this.data.table.filter(o=>{o.select=this.data.select})},selected(a,o){a.stopPropagation(),o.select=!o.select,this.data.select=this.data.table.every(p=>p.select)},addClick(){this.$router.push({name:"subministry-work.record-out-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"subministry-work.record-out-edit",params:{id:a.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apirecordout()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apirecordout()},apirecordout(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-note",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(a=>{this.showLoading=!1,a.data.data&&(a.data.data.filter(o=>{this.data.total=o.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},async on_submit_modal(){let a={book_category_id:parseInt(this.data.book_category_id),user_id:parseInt(localStorage.getItem("user_id")),as_of_date:this.data.as_of_date};this.showLoading=!0,this.axios.post("/booking-note/quick",a).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"สร้างบันทึกข้อความสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){location.reload()}}}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}}),this.modalRegiter.showModal=!1},modal_genno(){this.modalRegiter.showModal=!0,this.modalRegiter.booking_register_details=[{}]},api_master(){this.showLoading=!0;const a=this.axios.get("/master-data/book-category",{params:{book_type:1}});this.axios.all([a]).then(this.axios.spread((...o)=>{this.showLoading=!1;const p=o[0];p.data.data.filter(g=>(g.value=g.id,g.name=g.name,g)),this.optionSelectDefault.book_category_id=p.data.data,this.apirecordout()})).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})}},mounted(){var a,o;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((o=this.$route.query)==null?void 0:o.perPage)||this.data.perPage,this.api_master()}},z={class:"record-out-inex"},E={class:"group-overflow"},N={class:"detail"},B={class:"group-head"},U={class:"group-first"},T=s("img",{src:D,alt:"",class:"icon-users-cog"},null,-1),G=s("div",{class:"name"},"บันทึกส่งออก",-1),H=s("div",{class:"group-image"},[s("img",{src:F,alt:"",class:"icon-plus"}),m(" สร้างบันทึกส่งออก ")],-1),J=[H],K={class:"d-flex justify-content-end"},O={class:"group-end"},Q={class:"search"},W=s("div",{class:"line"},null,-1),X={class:"group-body"},Y={class:"table-booking-out-inex"},Z={class:"thead"},$={class:"thead-row"},ss={class:"col0"},ts=s("i",{class:"bi bi-plus-lg"},null,-1),os=[ts],es=s("th",{class:"col1"},"ความเร่งด่วน",-1),as=s("th",{class:"col2"},"เลขบันทึกภายใน",-1),ls=s("th",{class:"col3"},"ชื่อเรื่อง",-1),ds=s("th",{class:"col4"},"หน่วยงานปลายทาง",-1),is=s("th",{class:"col5"},"ลงวันที่",-1),cs=s("th",{class:"col6"},"ชนิด",-1),ns=s("th",{class:"col7"},"ผู้รับผิดชอบ",-1),_s=s("th",{class:"col8"},"สถานะ",-1),rs={class:"tbody"},hs=["onClick"],gs=["onClick"],us={key:0},ps=s("i",{class:"bi bi-dash-lg"},null,-1),ms=[ps],bs={key:1},vs=s("i",{class:"bi bi-plus-lg"},null,-1),ks=[vs],fs={class:"col1"},ys={class:"col2"},ws={class:"col3"},Ps={class:"col4"},Cs={class:"col5"},Ss={class:"col6"},Vs={class:"col7"},xs={class:"group-show"},Ls={class:"span"},Ms={key:0,class:"show-detail"},As={class:"col8"},qs={class:"group-show date"},Rs={class:"span"},Is={class:"show-detail date"},Ds={key:0},Fs={key:1},js={class:"col0"},zs={class:"col1"},Es={class:"col2"},Ns={class:"group-show date"},Bs={class:"span"},Us={class:"col3"},Ts={class:"col4"},Gs={class:"col5"},Hs={class:"col6"},Js={class:"col7"},Ks={class:"group-show"},Os={class:"span"},Qs={key:0,class:"show-detail"},Ws={class:"col8"},Xs={class:"group-show date"},Ys={class:"span"},Zs={class:"show-detail date"},$s={key:0},st={key:1},tt={key:1},ot=s("td",{colspan:"9",style:{"border-bottom":"solid 1px #c1cfe3"}},null,-1),et=[ot],at={key:0,class:"tbody-row"},lt=s("td",{colspan:"9"},"ไม่มีข้อมูล",-1),dt=[lt],it={class:"group-footer"},ct={class:"modal-register"},nt={class:"modal-class"},_t={class:"modal-center"},rt={class:"modal-size",ref:"modalRegiterref"},ht={class:"modal-title"},gt=s("div",{class:"title-size"},"ออกเลขบันทึกภายใน",-1),ut=s("div",{class:"line"},null,-1),pt={class:"modal-detail"},mt={class:"detail-sub"},bt={class:"group-between"},vt={class:"group-input"},kt=s("div",{class:"name"},[m("ทะเบียนบันทึกข้อความ "),s("span",{class:"required"},"*")],-1),ft={class:"group-between"},yt={class:"group-input"},wt=s("div",{class:"name"},[m("ลงวันที่ "),s("span",{class:"required"},"*")],-1),Pt=s("div",{class:"line"},null,-1),Ct={class:"group-footer"},St=s("div",{class:"group-name"},[s("img",{src:R,alt:"times-circle",class:"image-icon"}),s("div",{class:"name"},"ยกเลิก")],-1),Vt=[St],xt=s("div",{class:"group-name"},[s("img",{src:I,alt:"times-circle",class:"image-icon"}),s("div",{class:"name"},"ตกลง")],-1),Lt=[xt];function Mt(a,o,p,g,l,_){const P=r("cpn-input"),C=r("cpn-pagination"),S=r("cpn-select"),V=r("cpn-datepicker"),x=r("Form"),L=r("cpn-modal-alert"),M=r("cpn-loading");return i(),c("div",z,[s("div",E,[s("div",N,[s("div",B,[s("div",U,[T,G,s("button",{type:"button",class:"add-booking-out",onClick:o[0]||(o[0]=t=>_.addClick())},J),s("div",K,[s("button",{type:"button",class:"add-booking-out",onClick:o[1]||(o[1]=t=>_.modal_genno())}," ออกเลขบันทึกภายใน ")])]),s("div",O,[s("div",Q,[h(P,{modelValue:l.data.search,"onUpdate:modelValue":o[2]||(o[2]=t=>l.data.search=t),name:"search",type:"text",searchFlag:!0,onSearchClick:o[3]||(o[3]=t=>_.search()),placeholder:"เลขที่หนังสือออก/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),W,s("div",X,[s("table",Y,[s("thead",Z,[s("tr",$,[s("th",ss,[s("button",{onClick:o[4]||(o[4]=t=>_.selectedAll(t))},os)]),es,as,ls,ds,is,cs,ns,_s])]),s("tbody",rs,[(i(!0),c(v,null,k(l.data.table,(t,u)=>(i(),c(v,{key:u},[s("tr",{class:w(["tbody-row pointer",u%2!=0?"color-tr1":"color-tr2"]),onClick:d=>_.editClick(t)},[s("td",{class:"col0",onClick:d=>t.booking_follows.length>1?_.selected(d,t):""},[t.select&&t.booking_follows.length>1?(i(),c("button",us,ms)):n("",!0),!t.select&&t.booking_follows.length>1?(i(),c("button",bs,ks)):n("",!0)],8,gs),s("td",fs,e(t.speed_name),1),s("td",ys,e(t.booking_note_number),1),s("td",ws,e(t.subject),1),s("td",Ps,e(t.booking_follows.length>1?t.booking_follows.length:t.department_name),1),s("td",Cs,e(t.as_of_date),1),s("td",Ss,e(t.book_type),1),s("td",Vs,[s("div",xs,[s("span",Ls,e(t.response_name),1),t.response_name?(i(),c("div",Ms,e(t.response_name),1)):n("",!0)])]),s("td",As,[s("div",qs,[s("span",Rs,e(t.status_name),1),s("div",Is,[t.receive_date?(i(),c("div",Ds," วันที่รับเข้า: "+e(t.receive_date),1)):n("",!0),t.created_at?(i(),c("div",Fs," วันที่ส่งออก: "+e(t.created_at),1)):n("",!0)])])])],10,hs),t.select&&t.booking_follows.length>1?(i(!0),c(v,{key:0},k(t.booking_follows,(d,b)=>(i(),c("tr",{key:b,class:w(["tbody-row",u%2!=0?b%2!=0?"color-tr1":"color-tr2":b%2!=0?"color-tr2":"color-tr1"])},[s("td",js,e(),1),s("td",zs,e(b+1),1),s("td",Es,[m(e()+" ",1),s("div",Ns,[s("span",Bs,e(d.department_name),1)])]),s("td",Us,e(d.subject),1),s("td",Ts,e(),1),s("td",Gs,e(d.as_of_date),1),s("td",Hs,e(d.book_type),1),s("td",Js,[s("div",Ks,[s("span",Os,e(d.creater_name),1),d.creater_name?(i(),c("div",Qs,e(d.creater_name),1)):n("",!0)])]),s("td",Ws,[m(e()+" ",1),s("div",Xs,[s("span",Ys,e(d.status_name),1),s("div",Zs,[d.receive_date?(i(),c("div",$s," วันที่รับเข้า: "+e(d.receive_date),1)):n("",!0),d.created_at?(i(),c("div",st," วันที่ส่งออก: "+e(d.created_at),1)):n("",!0)])])])],2))),128)):n("",!0),t.select&&t.booking_follows.length>1?(i(),c("tr",tt,et)):n("",!0)],64))),128)),l.data.table.length==0?(i(),c("tr",at,dt)):n("",!0)])])]),s("div",it,[h(C,{page:l.data.page,total:l.data.total,lastPage:l.data.lastPage,perPage:l.data.perPage,onPageChange:_.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),f(s("div",ct,[s("div",nt,[s("div",_t,[s("div",rt,[h(x,{onSubmit:_.on_submit_modal,onInvalidSubmit:a.onInvalidSubmit},{default:q(()=>[s("div",ht,[gt,s("i",{class:"bi bi-x-lg icon-close",onClick:o[5]||(o[5]=t=>l.modalRegiter.showModal=!1)})]),ut,s("div",pt,[(i(!0),c(v,null,k(l.modalRegiter.booking_register_details,(t,u)=>(i(),c("div",{class:"message",key:u},[s("div",mt,[s("div",bt,[s("div",vt,[kt,h(S,{modelValue:l.data.book_category_id,"onUpdate:modelValue":o[6]||(o[6]=d=>l.data.book_category_id=d),name:"book_category_id",rules:"required",optionSelect:l.optionSelectDefault.book_category_id},null,8,["modelValue","optionSelect"])])]),s("div",ft,[s("div",yt,[wt,h(V,{modelValue:l.data.as_of_date,"onUpdate:modelValue":o[7]||(o[7]=d=>l.data.as_of_date=d),rules:"required",name:`addregis_date${u}`},null,8,["modelValue","name"])])])])]))),128))]),Pt,s("div",Ct,[s("button",{type:"button",onClick:o[8]||(o[8]=t=>l.modalRegiter.showModal=!1),class:"btn button-danger"},Vt),f(s("button",{type:"submit",class:"btn button-success",onClick:o[9]||(o[9]=t=>a.flagSave=3)},Lt,512),[[y,!l.data.booking_note_number]])])]),_:1},8,["onSubmit","onInvalidSubmit"])],512)])])],512),[[y,l.modalRegiter.showModal]]),h(L,{modalAlert:l.modalAlert},null,8,["modalAlert"]),h(M,{show:l.showLoading},null,8,["show"])])}const It=A(j,[["render",Mt]]);export{It as default};
