import{_ as x,r as d,o as r,c,a as e,w as p,v as b,b as n,F as f,h as v,i as L,d as V,t as i,j as u,k as I,g as M}from"./index-82ba2c20.js";import{_ as R}from"./ballot-duotone-f2459825.js";import{_ as U}from"./plus-circle-duotone-64bd32fe.js";const q={name:"booking-out-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,optionSelectDefault:{regis_id:[]},data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10,tag:"",optionSelect:{send_method_id:[{name:"นร : บันทึกข้อความ",value:"1"},{name:"นร : ทะเบียนบันทึกข้อความ(เวียน)",value:"2"}]}},modalRegiter:{showModal:!1,booking_register_details:[]}}},methods:{addClick(){this.$router.push({name:"subministry-work.record-out-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"subministry-work.record-out-edit",params:{id:s.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apirecordout()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.data.tag="",this.apirecordout()},apirecordout(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-note",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:localStorage.getItem("user_id"),tag:this.data.tag}}).then(s=>{this.showLoading=!1,s.data.data&&(s.data.data.filter(t=>{this.data.total=t.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},async on_submit_modal(){let s={optionSelect:{signer_id:this.optionSelectDefault.signer_id},book_out_num_type:parseInt(item.book_out_num_type),book_out_num_type_desc,send_method_id:parseInt(item.send_method_id),send_method_id_desc,regis_date:item.regis_date,regis_id:parseInt(item.regis_id),regis_id_desc,num:"1",signer_id:"",is_signed:!1,flag:"add",main_filename:"",attach_filename:"",booking_registers:[]};if(item.department_dest_id.length>0)if(item.book_out_num_type==0)this.showLoading=!0,await this.axios.post("/booking-note/generate-number",{department_id:parseInt(localStorage.getItem("department_id")),year:this.assetsUtils.currentDate().split("/")[2]-543}).then(t=>{this.showLoading=!1,item.department_dest_id.filter(l=>{s.booking_registers.push({book_out_num:t.data.data.out_document_number,greeting:"",department_dest_id:l.value,main_filename:"",attach_filename:"",signer_id:"",is_signed:!1,flag:"add",optionSelect:{signer_id:this.optionSelectDefault.signer_id,department_dest_id:[...this.optionSelectDefault.department_dest_id,l]}})})}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}});else for(let t=0;t<item.department_dest_id.length;t++){let l=item.department_dest_id[t];this.showLoading=!0,await this.axios.post("/booking-note",{department_id:parseInt(localStorage.getItem("department_id")),year:this.assetsUtils.currentDate().split("/")[2]-543}).then(h=>{this.showLoading=!1,s.booking_registers.push({book_out_num:h.data.data.out_document_number,greeting:"",department_dest_id:l.value,main_filename:"",attach_filename:"",signer_id:"",is_signed:!1,flag:"add",optionSelect:{signer_id:this.optionSelectDefault.signer_id,department_dest_id:[...this.optionSelectDefault.department_dest_id,l]}})}).catch(h=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}else this.showLoading=!0,await this.axios.post("/booking-note",{department_id:parseInt(localStorage.getItem("department_id")),year:this.assetsUtils.currentDate().split("/")[2]-543}).then(t=>{this.showLoading=!1,s.booking_registers.push({book_out_num:t.data.data.out_document_number,greeting:"",department_dest_id:"",main_filename:"",attach_filename:"",signer_id:"",is_signed:!1,flag:"add",optionSelect:{signer_id:this.optionSelectDefault.signer_id,department_dest_id:this.optionSelectDefault.department_dest_id}})});this.modalRegiter.showModal=!1},gennum(){console.log("start"),this.modalRegiter.showModal=!0,console.log("uuu"),this.modalRegiter.booking_register_details=[{regis_id:"",regis_date:this.assetsUtils.currentDate(),book_out_num_type:"0",send_method_id:"2",department_dest_id:[],optionSelect:{regis_id:this.optionSelectDefault.regis_id,book_out_num_type:this.optionSelectDefault.book_out_num_type,send_method_id:this.optionSelectDefault.send_method_id,department_dest_id:[]}}]}},mounted(){var s,t;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((t=this.$route.query)==null?void 0:t.perPage)||this.data.perPage,this.apirecordout()}},A={class:"record-out-inex"},F={class:"group-overflow"},E={class:"detail"},N={class:"group-head"},j={class:"group-first"},z=e("img",{src:R,alt:"",class:"icon-users-cog"},null,-1),B=e("div",{class:"name"},"บันทึกส่งออก",-1),T=e("div",{class:"group-image"},[e("img",{src:U,alt:"",class:"icon-plus"}),u(" สร้างบันทึกส่งออก ")],-1),G=[T],H={class:"d-flex justify-content-end"},J={class:"group-end"},K={class:"search"},O=e("div",{class:"line"},null,-1),Q={class:"group-body"},W={class:"table-booking-out-inex"},X=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"},"ความเร่งด่วน"),e("th",{class:"col2"},"เลขบันทึกภายใน"),e("th",{class:"col3"},"ชื่อเรื่อง"),e("th",{class:"col4"},"หน่วยงานปลายทาง"),e("th",{class:"col5"},"ลงวันที่"),e("th",{class:"col6"},"ชนิด"),e("th",{class:"col7"},"ผู้รับผิดชอบ"),e("th",{class:"col8"},"สถานะ")])],-1),Y={class:"tbody"},Z=["onClick"],$={class:"col1"},ee={class:"col2"},te={class:"col3"},se={class:"col4"},ae={class:"col5"},oe={class:"col6"},ie={class:"col7"},de={class:"col8"},ne={key:0,class:"tbody-row"},le=e("td",{colspan:"8"},"ไม่มีข้อมูล",-1),_e=[le],re={class:"group-footer"},ce={class:"modal-register"},he={class:"modal-class"},ge={class:"modal-center"},me={class:"modal-size",ref:"modalRegiterref"},ue={class:"modal-title"},pe=e("div",{class:"title-size"},"ออกเลขบันทึกภายใน",-1),be=e("div",{class:"line"},null,-1),fe={class:"modal-detail"},ve={class:"detail-sub"},ke={class:"group-between"},we={class:"group-input"},ye=e("div",{class:"name"},[u("ทะเบียนส่ง "),e("span",{class:"required"},"*")],-1),Se={class:"group-between"},Pe={class:"group-input"},Ce=e("div",{class:"name"},[u("ลงวันที่ "),e("span",{class:"required"},"*")],-1),De=e("div",{class:"line"},null,-1),xe={class:"group-footer"},Le=e("div",{class:"group-name"},[e("img",{src:M,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ยกเลิก")],-1),Ve=[Le],Ie=e("button",{type:"submit",class:"btn button-success"},[e("div",{class:"group-name"},[e("img",{src:I,alt:"times-circle",class:"image-icon"}),e("div",{class:"name"},"ตกลง")])],-1);function Me(s,t,l,h,o,_){const k=d("cpn-input"),w=d("cpn-pagination"),y=d("cpn-select"),S=d("cpn-datepicker"),P=d("Form"),C=d("cpn-modal-alert"),D=d("cpn-loading");return r(),c("div",A,[e("div",F,[e("div",E,[e("div",N,[e("div",j,[z,B,e("button",{type:"button",class:"add-booking-out",onClick:t[0]||(t[0]=a=>_.addClick())},G),e("div",H,[p(e("button",{type:"button",class:"add-booking-out",onClick:t[1]||(t[1]=a=>_.gennum())}," ออกเลขบันทึกภายใน ",512),[[b,!1]])])]),e("div",J,[e("div",K,[n(k,{modelValue:o.data.search,"onUpdate:modelValue":t[2]||(t[2]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:t[3]||(t[3]=a=>_.search()),placeholder:"เลขที่หนังสือออก/ชื่อเรื่อง/Tag"},null,8,["modelValue"])])])]),O,e("div",Q,[e("table",W,[X,e("tbody",Y,[(r(!0),c(f,null,v(o.data.table,(a,g)=>(r(),c("tr",{class:"tbody-row pointer",key:g,onClick:m=>_.editClick(a)},[e("td",$,i(a.speed_name),1),e("td",ee,i(a.booking_note_number),1),e("td",te,i(a.subject),1),e("td",se,i(a.department_name),1),e("td",ae,i(a.as_of_date),1),e("td",oe,i(a.book_type),1),e("td",ie,i(a.department_name),1),e("td",de,i(a.status_name),1)],8,Z))),128)),o.data.table.length==0?(r(),c("tr",ne,_e)):L("",!0)])])]),e("div",re,[n(w,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:_.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),p(e("div",ce,[e("div",he,[e("div",ge,[e("div",me,[n(P,{onSubmit:_.on_submit_modal,onInvalidSubmit:s.onInvalidSubmit},{default:V(()=>[e("div",ue,[pe,e("i",{class:"bi bi-x-lg icon-close",onClick:t[4]||(t[4]=a=>o.modalRegiter.showModal=!1)})]),be,e("div",fe,[(r(!0),c(f,null,v(o.modalRegiter.booking_register_details,(a,g)=>(r(),c("div",{class:"message",key:g},[e("div",ve,[e("div",ke,[e("div",we,[ye,n(y,{modelValue:o.data.send_method_id,"onUpdate:modelValue":t[5]||(t[5]=m=>o.data.send_method_id=m),name:"send_method_id",rules:"required",optionSelect:o.data.optionSelect.send_method_id},null,8,["modelValue","optionSelect"])])]),e("div",Se,[e("div",Pe,[Ce,n(S,{modelValue:a.regis_date,"onUpdate:modelValue":m=>a.regis_date=m,rules:"required",name:`addregis_date${g}`},null,8,["modelValue","onUpdate:modelValue","name"])])])])]))),128))]),De,e("div",xe,[e("button",{type:"button",onClick:t[6]||(t[6]=a=>o.modalRegiter.showModal=!1),class:"btn button-danger"},Ve),Ie])]),_:1},8,["onSubmit","onInvalidSubmit"])],512)])])],512),[[b,o.modalRegiter.showModal]]),n(C,{modalAlert:o.modalAlert},null,8,["modalAlert"]),n(D,{show:o.showLoading},null,8,["show"])])}const Ae=x(q,[["render",Me]]);export{Ae as default};
