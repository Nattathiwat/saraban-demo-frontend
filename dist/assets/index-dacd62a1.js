import{_ as L,r as l,o as r,c as _,a as t,b as d,F as b,h as v,i as m,w as k,v as f,d as M,t as i,j as h,g as q,k as A}from"./index-3785cc43.js";import{_ as R}from"./ballot-duotone-f2459825.js";import{_ as I}from"./plus-circle-duotone-64bd32fe.js";const D={name:"booking-out-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,optionSelectDefault:{regis_id:[],book_category_id:[]},data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:"",as_of_date:"",book_category_id:""},modalRegiter:{showModal:!1,booking_register_details:[]}}},methods:{addClick(){this.$router.push({name:"subministry-work.record-out-create"}).catch(()=>{})},editClick(e){this.$router.push({name:"subministry-work.record-out-edit",params:{id:e.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(e){this.data.perPage=e.perPage,this.data.page=e.page,this.apirecordout()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apirecordout()},apirecordout(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-note",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(e=>{this.showLoading=!1,e.data.data&&(e.data.data.filter(s=>{this.data.total=s.total}),this.data.table=e.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},async on_submit_modal(){console.log("str");let e={book_category_id:parseInt(this.data.book_category_id),user_id:parseInt(localStorage.getItem("user_id")),as_of_date:this.data.as_of_date};console.log(this.data.book_category_id),this.showLoading=!0,this.axios.post("/booking-note/quick",e).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"สร้างบันทึกข้อความสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){location.reload()}}}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}}),this.modalRegiter.showModal=!1},modal_genno(){this.modalRegiter.showModal=!0,this.modalRegiter.booking_register_details=[{}]},api_master(){this.showLoading=!0;const e=this.axios.get("/master-data/book-category",{params:{book_type:1}});this.axios.all([e]).then(this.axios.spread((...s)=>{this.showLoading=!1;const u=s[0];u.data.data.filter(n=>(n.value=n.id,n.name=n.name,n)),this.optionSelectDefault.book_category_id=u.data.data,this.apirecordout()})).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})}},mounted(){var e,s;this.data.page=((e=this.$route.query)==null?void 0:e.page)||this.data.page,this.data.perPage=((s=this.$route.query)==null?void 0:s.perPage)||this.data.perPage,this.api_master()}},F={class:"record-out-inex"},E={class:"group-overflow"},N={class:"detail"},j={class:"group-head"},z={class:"group-first"},B=t("img",{src:R,alt:"",class:"icon-users-cog"},null,-1),U=t("div",{class:"name"},"บันทึกส่งออก",-1),T=t("div",{class:"group-image"},[t("img",{src:I,alt:"",class:"icon-plus"}),h(" สร้างบันทึกส่งออก ")],-1),G=[T],H={class:"d-flex justify-content-end"},J={class:"group-end"},K={class:"search"},O=t("div",{class:"line"},null,-1),Q={class:"group-body"},W={class:"table-booking-out-inex"},X=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ความเร่งด่วน"),t("th",{class:"col2"},"เลขบันทึกภายใน"),t("th",{class:"col3"},"ชื่อเรื่อง"),t("th",{class:"col4"},"หน่วยงานปลายทาง"),t("th",{class:"col5"},"ลงวันที่"),t("th",{class:"col6"},"ชนิด"),t("th",{class:"col7"},"ผู้รับผิดชอบ"),t("th",{class:"col8"},"สถานะ")])],-1),Y={class:"tbody"},Z=["onClick"],$={class:"col1"},tt={class:"col2"},st={class:"col3"},et={class:"col4"},ot={class:"group-show"},at={class:"span"},it={class:"show-detail"},lt={class:"col5"},dt={class:"col6"},nt={class:"col7"},ct={class:"group-show"},rt={class:"span"},_t={class:"show-detail"},ht={class:"col8"},gt={key:0,class:"tbody-row"},pt=t("td",{colspan:"8"},"ไม่มีข้อมูล",-1),ut=[pt],mt={class:"group-footer"},bt={class:"modal-register"},vt={class:"modal-class"},kt={class:"modal-center"},ft={class:"modal-size",ref:"modalRegiterref"},yt={class:"modal-title"},wt=t("div",{class:"title-size"},"ออกเลขบันทึกภายใน",-1),Pt=t("div",{class:"line"},null,-1),Ct={class:"modal-detail"},St={class:"detail-sub"},xt={class:"group-between"},Vt={class:"group-input"},Lt=t("div",{class:"name"},[h("ทะเบียนบันทึกข้อความ "),t("span",{class:"required"},"*")],-1),Mt={class:"group-between"},qt={class:"group-input"},At=t("div",{class:"name"},[h("ลงวันที่ "),t("span",{class:"required"},"*")],-1),Rt=t("div",{class:"line"},null,-1),It={class:"group-footer"},Dt=t("div",{class:"group-name"},[t("img",{src:q,alt:"times-circle",class:"image-icon"}),t("div",{class:"name"},"ยกเลิก")],-1),Ft=[Dt],Et=t("div",{class:"group-name"},[t("img",{src:A,alt:"times-circle",class:"image-icon"}),t("div",{class:"name"},"ตกลง")],-1),Nt=[Et];function jt(e,s,u,n,o,c){const y=l("cpn-input"),w=l("cpn-pagination"),P=l("cpn-select"),C=l("cpn-datepicker"),S=l("Form"),x=l("cpn-modal-alert"),V=l("cpn-loading");return r(),_("div",F,[t("div",E,[t("div",N,[t("div",j,[t("div",z,[B,U,t("button",{type:"button",class:"add-booking-out",onClick:s[0]||(s[0]=a=>c.addClick())},G),t("div",H,[t("button",{type:"button",class:"add-booking-out",onClick:s[1]||(s[1]=a=>c.modal_genno())}," ออกเลขบันทึกภายใน ")])]),t("div",J,[t("div",K,[d(y,{modelValue:o.data.search,"onUpdate:modelValue":s[2]||(s[2]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:s[3]||(s[3]=a=>c.search()),placeholder:"เลขที่หนังสือออก/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),O,t("div",Q,[t("table",W,[X,t("tbody",Y,[(r(!0),_(b,null,v(o.data.table,(a,g)=>(r(),_("tr",{class:"tbody-row pointer",key:g,onClick:p=>c.editClick(a)},[t("td",$,i(a.speed_name),1),t("td",tt,i(a.booking_note_number),1),t("td",st,i(a.subject),1),t("td",et,[t("div",ot,[t("span",at,i(a.department_name),1),t("div",it,[h(i(a.department_name)+" ",1),m("",!0)])])]),t("td",lt,i(a.as_of_date),1),t("td",dt,i(a.book_type),1),t("td",nt,[t("div",ct,[t("span",rt,i(a.response_name),1),t("div",_t,[h(i(a.response_name)+" ",1),m("",!0)])])]),t("td",ht,i(a.status_name),1)],8,Z))),128)),o.data.table.length==0?(r(),_("tr",gt,ut)):m("",!0)])])]),t("div",mt,[d(w,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:c.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),k(t("div",bt,[t("div",vt,[t("div",kt,[t("div",ft,[d(S,{onSubmit:c.on_submit_modal,onInvalidSubmit:e.onInvalidSubmit},{default:M(()=>[t("div",yt,[wt,t("i",{class:"bi bi-x-lg icon-close",onClick:s[4]||(s[4]=a=>o.modalRegiter.showModal=!1)})]),Pt,t("div",Ct,[(r(!0),_(b,null,v(o.modalRegiter.booking_register_details,(a,g)=>(r(),_("div",{class:"message",key:g},[t("div",St,[t("div",xt,[t("div",Vt,[Lt,d(P,{modelValue:o.data.book_category_id,"onUpdate:modelValue":s[5]||(s[5]=p=>o.data.book_category_id=p),name:"book_category_id",rules:"required",optionSelect:o.optionSelectDefault.book_category_id},null,8,["modelValue","optionSelect"])])]),t("div",Mt,[t("div",qt,[At,d(C,{modelValue:o.data.as_of_date,"onUpdate:modelValue":s[6]||(s[6]=p=>o.data.as_of_date=p),rules:"required",name:`addregis_date${g}`},null,8,["modelValue","name"])])])])]))),128))]),Rt,t("div",It,[t("button",{type:"button",onClick:s[7]||(s[7]=a=>o.modalRegiter.showModal=!1),class:"btn button-danger"},Ft),k(t("button",{type:"submit",class:"btn button-success",onClick:s[8]||(s[8]=a=>e.flagSave=3)},Nt,512),[[f,!o.data.booking_note_number]])])]),_:1},8,["onSubmit","onInvalidSubmit"])],512)])])],512),[[f,o.modalRegiter.showModal]]),d(x,{modalAlert:o.modalAlert},null,8,["modalAlert"]),d(V,{show:o.showLoading},null,8,["show"])])}const Tt=L(D,[["render",jt]]);export{Tt as default};
