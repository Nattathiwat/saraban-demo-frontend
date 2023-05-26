import{_ as A,r as _,o as i,c as n,a as s,b as r,F as k,h as v,i as h,w as f,v as y,d as q,n as w,t as a,j as g,g as R,k as I}from"./index-3da08e5d.js";import{_ as D}from"./ballot-duotone-f2459825.js";import{_ as F}from"./plus-circle-duotone-64bd32fe.js";const j={name:"booking-out-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,optionSelectDefault:{regis_id:[],book_category_id:[]},data:{select:!1,search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:"",as_of_date:"",book_category_id:""},modalRegiter:{showModal:!1,booking_register_details:[]}}},methods:{selectedAll(e){e.stopPropagation(),this.data.select=!this.data.select,this.data.table.filter(t=>{t.select=this.data.select})},selected(e,t){e.stopPropagation(),t.select=!t.select,this.data.select=this.data.table.every(m=>m.select)},addClick(){this.$router.push({name:"subministry-work.record-out-create"}).catch(()=>{})},editClick(e){this.$router.push({name:"subministry-work.record-out-edit",params:{id:e.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(e){this.data.perPage=e.perPage,this.data.page=e.page,this.apirecordout()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apirecordout()},apirecordout(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-note",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(e=>{this.showLoading=!1,e.data.data&&(e.data.data.filter(t=>{this.data.total=t.total}),this.data.table=e.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},async on_submit_modal(){let e={book_category_id:parseInt(this.data.book_category_id),user_id:parseInt(localStorage.getItem("user_id")),as_of_date:this.data.as_of_date};this.showLoading=!0,this.axios.post("/booking-note/quick",e).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"สร้างบันทึกข้อความสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){location.reload()}}}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}}),this.modalRegiter.showModal=!1},modal_genno(){this.modalRegiter.showModal=!0,this.modalRegiter.booking_register_details=[{}]},api_master(){this.showLoading=!0;const e=this.axios.get("/master-data/book-category",{params:{book_type:1}});this.axios.all([e]).then(this.axios.spread((...t)=>{this.showLoading=!1;const m=t[0];m.data.data.filter(u=>(u.value=u.id,u.name=u.name,u)),this.optionSelectDefault.book_category_id=m.data.data,this.apirecordout()})).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}},mounted(){var e,t;this.data.page=((e=this.$route.query)==null?void 0:e.page)||this.data.page,this.data.perPage=((t=this.$route.query)==null?void 0:t.perPage)||this.data.perPage,this.api_master()}},z={class:"record-out-inex"},E={class:"group-overflow"},N={class:"detail"},B={class:"group-head"},U={class:"group-first"},T=s("img",{src:D,alt:"",class:"icon-users-cog"},null,-1),G=s("div",{class:"name"},"บันทึกส่งออก",-1),H=s("div",{class:"group-image"},[s("img",{src:F,alt:"",class:"icon-plus"}),g(" สร้างบันทึกส่งออก ")],-1),J=[H],K={class:"d-flex justify-content-end"},O={class:"group-end"},Q={class:"search"},W=s("div",{class:"line"},null,-1),X={class:"group-body"},Y={class:"table-booking-out-inex"},Z={class:"thead"},$={class:"thead-row"},ss={class:"col0"},ts=s("i",{class:"bi bi-plus-lg"},null,-1),os=[ts],es=s("th",{class:"col1"},"ความเร่งด่วน",-1),as=s("th",{class:"col2"},"เลขบันทึกภายใน",-1),ls=s("th",{class:"col3"},"ชื่อเรื่อง",-1),ds=s("th",{class:"col4"},"หน่วยงานปลายทาง",-1),is=s("th",{class:"col5"},"ลงวันที่",-1),ns=s("th",{class:"col6"},"ชนิด",-1),cs=s("th",{class:"col7"},"ผู้รับผิดชอบ",-1),_s=s("th",{class:"col8"},"สถานะ",-1),rs={class:"tbody"},hs=["onClick"],gs=["onClick"],us={key:0},ps=s("i",{class:"bi bi-dash-lg"},null,-1),ms=[ps],bs={key:1},ks=s("i",{class:"bi bi-plus-lg"},null,-1),vs=[ks],fs={class:"col1"},ys={class:"col2"},ws={class:"col3"},Ps={class:"col4"},Cs={class:"col5"},Ss={class:"col6"},Vs={class:"col7"},xs={class:"group-show"},Ls={class:"span"},Ms={class:"show-detail"},As={class:"col8"},qs={class:"col0"},Rs={class:"col1"},Is={class:"col2"},Ds={class:"group-show date"},Fs={class:"span"},js={class:"col3"},zs={class:"col4"},Es={class:"col5"},Ns={class:"col6"},Bs={class:"col7"},Us={class:"group-show"},Ts={class:"span"},Gs={class:"show-detail"},Hs={class:"col8"},Js={class:"group-show date"},Ks={class:"span"},Os={key:0,class:"show-detail date"},Qs={key:1,class:"show-detail date"},Ws={key:1},Xs=s("td",{colspan:"9",style:{"border-bottom":"solid 1px #c1cfe3"}},null,-1),Ys=[Xs],Zs={key:0,class:"tbody-row"},$s=s("td",{colspan:"9"},"ไม่มีข้อมูล",-1),st=[$s],tt={class:"group-footer"},ot={class:"modal-register"},et={class:"modal-class"},at={class:"modal-center"},lt={class:"modal-size",ref:"modalRegiterref"},dt={class:"modal-title"},it=s("div",{class:"title-size"},"ออกเลขบันทึกภายใน",-1),nt=s("div",{class:"line"},null,-1),ct={class:"modal-detail"},_t={class:"detail-sub"},rt={class:"group-between"},ht={class:"group-input"},gt=s("div",{class:"name"},[g("ทะเบียนบันทึกข้อความ "),s("span",{class:"required"},"*")],-1),ut={class:"group-between"},pt={class:"group-input"},mt=s("div",{class:"name"},[g("ลงวันที่ "),s("span",{class:"required"},"*")],-1),bt=s("div",{class:"line"},null,-1),kt={class:"group-footer"},vt=s("div",{class:"group-name"},[s("img",{src:R,alt:"times-circle",class:"image-icon"}),s("div",{class:"name"},"ยกเลิก")],-1),ft=[vt],yt=s("div",{class:"group-name"},[s("img",{src:I,alt:"times-circle",class:"image-icon"}),s("div",{class:"name"},"ตกลง")],-1),wt=[yt];function Pt(e,t,m,u,l,c){const P=_("cpn-input"),C=_("cpn-pagination"),S=_("cpn-select"),V=_("cpn-datepicker"),x=_("Form"),L=_("cpn-modal-alert"),M=_("cpn-loading");return i(),n("div",z,[s("div",E,[s("div",N,[s("div",B,[s("div",U,[T,G,s("button",{type:"button",class:"add-booking-out",onClick:t[0]||(t[0]=o=>c.addClick())},J),s("div",K,[s("button",{type:"button",class:"add-booking-out",onClick:t[1]||(t[1]=o=>c.modal_genno())}," ออกเลขบันทึกภายใน ")])]),s("div",O,[s("div",Q,[r(P,{modelValue:l.data.search,"onUpdate:modelValue":t[2]||(t[2]=o=>l.data.search=o),name:"search",type:"text",searchFlag:!0,onSearchClick:t[3]||(t[3]=o=>c.search()),placeholder:"เลขที่หนังสือออก/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),W,s("div",X,[s("table",Y,[s("thead",Z,[s("tr",$,[s("th",ss,[s("button",{onClick:t[4]||(t[4]=o=>c.selectedAll(o))},os)]),es,as,ls,ds,is,ns,cs,_s])]),s("tbody",rs,[(i(!0),n(k,null,v(l.data.table,(o,p)=>(i(),n(k,{key:p},[s("tr",{class:w(["tbody-row pointer",p%2!=0?"color-tr1":"color-tr2"]),onClick:d=>c.editClick(o)},[s("td",{class:"col0",onClick:d=>o.booking_follows.length>1?c.selected(d,o):""},[o.select&&o.booking_follows.length>1?(i(),n("button",us,ms)):h("",!0),!o.select&&o.booking_follows.length>1?(i(),n("button",bs,vs)):h("",!0)],8,gs),s("td",fs,a(o.speed_name),1),s("td",ys,a(o.booking_note_number),1),s("td",ws,a(o.subject),1),s("td",Ps,a(o.booking_follows.length>1?o.booking_follows.length:o.department_name),1),s("td",Cs,a(o.as_of_date),1),s("td",Ss,a(o.book_type),1),s("td",Vs,[s("div",xs,[s("span",Ls,a(o.response_name),1),s("div",Ms,[g(a(o.response_name)+" ",1),h("",!0)])])]),s("td",As,a(o.status_name),1)],10,hs),o.select&&o.booking_follows.length>1?(i(!0),n(k,{key:0},v(o.booking_follows,(d,b)=>(i(),n("tr",{key:b,class:w(["tbody-row",p%2!=0?b%2!=0?"color-tr1":"color-tr2":b%2!=0?"color-tr2":"color-tr1"])},[s("td",qs,a(),1),s("td",Rs,a(b+1),1),s("td",Is,[g(a()+" ",1),s("div",Ds,[s("span",Fs,a(d.department_name),1)])]),s("td",js,a(d.subject),1),s("td",zs,a(),1),s("td",Es,a(d.as_of_date),1),s("td",Ns,a(d.book_type),1),s("td",Bs,[s("div",Us,[s("span",Ts,a(d.creater_name),1),s("div",Gs,[g(a(d.creater_name)+" ",1),h("",!0)])])]),s("td",Hs,[g(a()+" ",1),s("div",Js,[s("span",Ks,a(d.status_name),1),d.receive_date?(i(),n("div",Os,"วันที่รับเข้า: "+a(d.receive_date),1)):(i(),n("div",Qs,"วันที่ส่งออก: "+a(d.created_at),1))])])],2))),128)):h("",!0),o.select&&o.booking_follows.length>1?(i(),n("tr",Ws,Ys)):h("",!0)],64))),128)),l.data.table.length==0?(i(),n("tr",Zs,st)):h("",!0)])])]),s("div",tt,[r(C,{page:l.data.page,total:l.data.total,lastPage:l.data.lastPage,perPage:l.data.perPage,onPageChange:c.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),f(s("div",ot,[s("div",et,[s("div",at,[s("div",lt,[r(x,{onSubmit:c.on_submit_modal,onInvalidSubmit:e.onInvalidSubmit},{default:q(()=>[s("div",dt,[it,s("i",{class:"bi bi-x-lg icon-close",onClick:t[5]||(t[5]=o=>l.modalRegiter.showModal=!1)})]),nt,s("div",ct,[(i(!0),n(k,null,v(l.modalRegiter.booking_register_details,(o,p)=>(i(),n("div",{class:"message",key:p},[s("div",_t,[s("div",rt,[s("div",ht,[gt,r(S,{modelValue:l.data.book_category_id,"onUpdate:modelValue":t[6]||(t[6]=d=>l.data.book_category_id=d),name:"book_category_id",rules:"required",optionSelect:l.optionSelectDefault.book_category_id},null,8,["modelValue","optionSelect"])])]),s("div",ut,[s("div",pt,[mt,r(V,{modelValue:l.data.as_of_date,"onUpdate:modelValue":t[7]||(t[7]=d=>l.data.as_of_date=d),rules:"required",name:`addregis_date${p}`},null,8,["modelValue","name"])])])])]))),128))]),bt,s("div",kt,[s("button",{type:"button",onClick:t[8]||(t[8]=o=>l.modalRegiter.showModal=!1),class:"btn button-danger"},ft),f(s("button",{type:"submit",class:"btn button-success",onClick:t[9]||(t[9]=o=>e.flagSave=3)},wt,512),[[y,!l.data.booking_note_number]])])]),_:1},8,["onSubmit","onInvalidSubmit"])],512)])])],512),[[y,l.modalRegiter.showModal]]),r(L,{modalAlert:l.modalAlert},null,8,["modalAlert"]),r(M,{show:l.showLoading},null,8,["show"])])}const xt=A(j,[["render",Pt]]);export{xt as default};