import{_ as L,r as l,o as c,c as _,a as t,b as d,F as m,h as b,i as V,w as v,v as k,d as M,t as i,j as p,g as q,k as A}from"./index-36c1b55d.js";import{_ as R}from"./ballot-duotone-f2459825.js";import{_ as I}from"./plus-circle-duotone-64bd32fe.js";const D={name:"booking-out-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,optionSelectDefault:{regis_id:[],book_category_id:[]},data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:"",as_of_date:"",book_category_id:""},modalRegiter:{showModal:!1,booking_register_details:[]}}},methods:{addClick(){this.$router.push({name:"subministry-work.record-out-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"subministry-work.record-out-edit",params:{id:s.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apirecordout()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apirecordout()},apirecordout(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-note",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(s=>{this.showLoading=!1,s.data.data&&(s.data.data.filter(e=>{this.data.total=e.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},async on_submit_modal(){console.log("str");let s={book_category_id:parseInt(this.data.book_category_id),user_id:parseInt(localStorage.getItem("user_id")),as_of_date:this.data.as_of_date};console.log(this.data.book_category_id),this.showLoading=!0,this.axios.post("/booking-note/quick",s).then(()=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:"สร้างบันทึกข้อความสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){location.reload()}}}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}}),this.modalRegiter.showModal=!1},modal_genno(){this.modalRegiter.showModal=!0,this.modalRegiter.booking_register_details=[{}]},api_master(){this.showLoading=TextTrackCueList;const s=this.axios.get("/master-data/register-type");this.axios.all([s]).then(this.axios.spread((...e)=>{this.showLoading=!1;const u=e[0];u.data.data.filter(n=>(n.value=n.id,n.name=n.desc,n)),this.optionSelectDefault.book_category_id=u.data.data,this.$route.params.id?(this.edit=!0,this.api_detail()):this.edit=!1})).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}},mounted(){var s,e;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apirecordout(),this.api_master()}},F={class:"record-out-inex"},E={class:"group-overflow"},N={class:"detail"},T={class:"group-head"},j={class:"group-first"},z=t("img",{src:R,alt:"",class:"icon-users-cog"},null,-1),B=t("div",{class:"name"},"บันทึกส่งออก",-1),U=t("div",{class:"group-image"},[t("img",{src:I,alt:"",class:"icon-plus"}),p(" สร้างบันทึกส่งออก ")],-1),G=[U],H={class:"d-flex justify-content-end"},J={class:"group-end"},K={class:"search"},O=t("div",{class:"line"},null,-1),Q={class:"group-body"},W={class:"table-booking-out-inex"},X=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ความเร่งด่วน"),t("th",{class:"col2"},"เลขบันทึกภายใน"),t("th",{class:"col3"},"ชื่อเรื่อง"),t("th",{class:"col4"},"หน่วยงานปลายทาง"),t("th",{class:"col5"},"ลงวันที่"),t("th",{class:"col6"},"ชนิด"),t("th",{class:"col7"},"ผู้รับผิดชอบ"),t("th",{class:"col8"},"สถานะ")])],-1),Y={class:"tbody"},Z=["onClick"],$={class:"col1"},tt={class:"col2"},et={class:"col3"},st={class:"col4"},ot={class:"col5"},at={class:"col6"},it={class:"col7"},lt={class:"col8"},dt={key:0,class:"tbody-row"},nt=t("td",{colspan:"8"},"ไม่มีข้อมูล",-1),rt=[nt],ct={class:"group-footer"},_t={class:"modal-register"},ht={class:"modal-class"},gt={class:"modal-center"},ut={class:"modal-size",ref:"modalRegiterref"},pt={class:"modal-title"},mt=t("div",{class:"title-size"},"ออกเลขบันทึกภายใน",-1),bt=t("div",{class:"line"},null,-1),vt={class:"modal-detail"},kt={class:"detail-sub"},ft={class:"group-between"},yt={class:"group-input"},wt=t("div",{class:"name"},[p("ทะเบียนบันทึกข้อความ "),t("span",{class:"required"},"*")],-1),Pt={class:"group-between"},Ct={class:"group-input"},xt=t("div",{class:"name"},[p("ลงวันที่ "),t("span",{class:"required"},"*")],-1),St=t("div",{class:"line"},null,-1),Lt={class:"group-footer"},Vt=t("div",{class:"group-name"},[t("img",{src:q,alt:"times-circle",class:"image-icon"}),t("div",{class:"name"},"ยกเลิก")],-1),Mt=[Vt],qt=t("div",{class:"group-name"},[t("img",{src:A,alt:"times-circle",class:"image-icon"}),t("div",{class:"name"},"ตกลง")],-1),At=[qt];function Rt(s,e,u,n,o,r){const f=l("cpn-input"),y=l("cpn-pagination"),w=l("cpn-select"),P=l("cpn-datepicker"),C=l("Form"),x=l("cpn-modal-alert"),S=l("cpn-loading");return c(),_("div",F,[t("div",E,[t("div",N,[t("div",T,[t("div",j,[z,B,t("button",{type:"button",class:"add-booking-out",onClick:e[0]||(e[0]=a=>r.addClick())},G),t("div",H,[t("button",{type:"button",class:"add-booking-out",onClick:e[1]||(e[1]=a=>r.modal_genno())}," ออกเลขบันทึกภายใน ")])]),t("div",J,[t("div",K,[d(f,{modelValue:o.data.search,"onUpdate:modelValue":e[2]||(e[2]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:e[3]||(e[3]=a=>r.search()),placeholder:"เลขที่หนังสือออก/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),O,t("div",Q,[t("table",W,[X,t("tbody",Y,[(c(!0),_(m,null,b(o.data.table,(a,h)=>(c(),_("tr",{class:"tbody-row pointer",key:h,onClick:g=>r.editClick(a)},[t("td",$,i(a.speed_name),1),t("td",tt,i(a.booking_note_number),1),t("td",et,i(a.subject),1),t("td",st,i(a.department_name),1),t("td",ot,i(a.as_of_date),1),t("td",at,i(a.book_type),1),t("td",it,i(a.department_name),1),t("td",lt,i(a.status_name),1)],8,Z))),128)),o.data.table.length==0?(c(),_("tr",dt,rt)):V("",!0)])])]),t("div",ct,[d(y,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:r.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),v(t("div",_t,[t("div",ht,[t("div",gt,[t("div",ut,[d(C,{onSubmit:r.on_submit_modal,onInvalidSubmit:s.onInvalidSubmit},{default:M(()=>[t("div",pt,[mt,t("i",{class:"bi bi-x-lg icon-close",onClick:e[4]||(e[4]=a=>o.modalRegiter.showModal=!1)})]),bt,t("div",vt,[(c(!0),_(m,null,b(o.modalRegiter.booking_register_details,(a,h)=>(c(),_("div",{class:"message",key:h},[t("div",kt,[t("div",ft,[t("div",yt,[wt,d(w,{modelValue:o.data.book_category_id,"onUpdate:modelValue":e[5]||(e[5]=g=>o.data.book_category_id=g),name:"book_category_id",rules:"required",optionSelect:o.optionSelectDefault.book_category_id},null,8,["modelValue","optionSelect"])])]),t("div",Pt,[t("div",Ct,[xt,d(P,{modelValue:o.data.as_of_date,"onUpdate:modelValue":e[6]||(e[6]=g=>o.data.as_of_date=g),rules:"required",name:`addregis_date${h}`},null,8,["modelValue","name"])])])])]))),128))]),St,t("div",Lt,[t("button",{type:"button",onClick:e[7]||(e[7]=a=>o.modalRegiter.showModal=!1),class:"btn button-danger"},Mt),v(t("button",{type:"submit",class:"btn button-success",onClick:e[8]||(e[8]=a=>s.flagSave=3)},At,512),[[k,!o.data.booking_note_number]])])]),_:1},8,["onSubmit","onInvalidSubmit"])],512)])])],512),[[k,o.modalRegiter.showModal]]),d(x,{modalAlert:o.modalAlert},null,8,["modalAlert"]),d(S,{show:o.showLoading},null,8,["show"])])}const Et=L(D,[["render",Rt]]);export{Et as default};
