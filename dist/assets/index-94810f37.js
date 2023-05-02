import{_ as P}from"./plus-circle-duotone-64bd32fe.js";import{_ as k}from"./pencil-alt-duotone-d85ba34f.js";import{_ as y}from"./trash-alt-duotone-12d94c28.js";import{_ as C,r,o as d,c as n,a as e,b as i,d as S,F as V,h as x,i as A,e as L,j as _,t as p}from"./index-714135ea.js";const M={name:"receiver-profile",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{template_code:"",group_receive_id:"",keyword:"",table:[],page:1,total:0,lastPage:0,perPage:10},optionSelect:{group_receive_id:[{value:1,name:"พระราชวงศ์"},{value:2,name:"พระภิกษุ"},{value:3,name:"บุคคลธรรมดา"},{value:4,name:"อื่นๆ"}]}}},methods:{cancelClick(){this.data.template_code="",this.data.keyword="",this.data.group_receive_id="",this.data.perPage=10,this.data.page=1,this.apiReceiverProfile()},addClick(){this.$router.push({name:"automail-receiver-profile-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"automail-receiver-profile-edit",params:{id:a.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apiReceiverProfile()},apiReceiverProfile(){this.data.table=[],this.showLoading=!0,this.axios.get("/master-data/message-template",{params:{template_code:this.data.template_code,group_receive_id:this.data.group_receive_id,keyword:this.data.keyword,page_size:this.data.perPage,page:this.data.page}}).then(a=>{this.showLoading=!1,a.data.data.meta.filter(t=>{this.optionSelect.group_receive_id.filter(c=>{c.value==t.group_receive_id&&(t.group_receive_name=c.name)})}),this.data.table=a.data.data.meta,this.data.total=a.data.data.total,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบตั้งค่ารูปแบบข้อความตามผู้รับจดหมาย",message:`“${a.receive_name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0,t.axios.delete(`/master-data/message-template/${a.id}`).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการลบตั้งค่ารูปแบบข้อความตามผู้รับจดหมายสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.apiReceiverProfile()}}}).catch(c=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}})}}}},mounted(){var a,t;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((t=this.$route.query)==null?void 0:t.perPage)||this.data.perPage,this.apiReceiverProfile()}},N={class:"master-receiver-profile"},R={class:"group-overflow"},F={class:"detail"},q=L('<div class="group-head"><div class="group-first"><i class="bi bi-inbox-fill icon-inbox"></i><div class="name">ตั้งค่ารูปแบบข้อความตามผู้รับจดหมาย</div></div></div><div class="line"></div>',2),B={class:"group-detail"},E={class:"group-between"},I={class:"group-input left"},U=e("div",{class:"name"},"รหัส ",-1),j={class:"group-input left"},z=e("div",{class:"name"},"กลุ่มผู้รับหนังสือ",-1),D={class:"group-input"},T=e("div",{class:"name"},"ชื่อเรียก",-1),G={class:"group-button"},H={class:"button-left"},J=e("i",{class:"bi bi-arrow-clockwise icon-clockwise"},null,-1),K=e("div",{class:"button-right"},[e("button",{type:"submit",class:"button-search"},[e("i",{class:"bi bi-search icon-search"}),_(" ค้นหา ")])],-1),O=e("div",{class:"line"},null,-1),Q=e("div",{class:"group-image"},[e("img",{src:P,alt:"",class:"icon-plus"}),_(" เพิ่มรูปแบบการรับ-ส่งหนังสือ ")],-1),W=[Q],X={class:"group-body"},Y={class:"table-master-receiver-profile"},Z=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"},"ลำดับ"),e("th",{class:"col2"},"รหัส"),e("th",{class:"col3"},"กลุ่มผู้รับหนังสือ"),e("th",{class:"col4"},"ชื่อเรียก"),e("th",{class:"col5"},"เครื่องมือ")])],-1),$={class:"tbody"},ee={class:"col1"},te={class:"col2"},ae={class:"col3"},se={class:"col4"},oe={class:"col5"},ie={class:"group-icon"},le=["onClick"],re=["onClick"],ce={key:0,class:"tbody-row"},de=e("td",{colspan:"5"},"ไม่มีข้อมูล",-1),ne=[de],pe={class:"group-footer"};function _e(a,t,c,he,s,l){const h=r("cpn-input"),g=r("cpn-select"),m=r("Form"),v=r("cpn-pagination"),f=r("cpn-modal-alert"),b=r("cpn-loading");return d(),n("div",N,[e("div",R,[e("div",F,[q,i(m,{onSubmit:l.apiReceiverProfile,onInvalidSubmit:a.onInvalidSubmit},{default:S(()=>[e("div",B,[e("div",E,[e("div",I,[U,i(h,{modelValue:s.data.template_code,"onUpdate:modelValue":t[0]||(t[0]=o=>s.data.template_code=o),name:"template_code",isNumber:!0,maxlength:"3",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",j,[z,i(g,{modelValue:s.data.group_receive_id,"onUpdate:modelValue":t[1]||(t[1]=o=>s.data.group_receive_id=o),name:"group_receive_id",optionSelect:s.optionSelect.group_receive_id,placeholder:"กรุณาระบุ"},null,8,["modelValue","optionSelect"])]),e("div",D,[T,i(h,{modelValue:s.data.keyword,"onUpdate:modelValue":t[2]||(t[2]=o=>s.data.keyword=o),name:"keyword",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",G,[e("div",H,[e("button",{type:"button",class:"button-warning",onClick:t[3]||(t[3]=o=>l.cancelClick())},[J,_(" ล้างการค้นหา ")])]),K])])]),_:1},8,["onSubmit","onInvalidSubmit"]),O,e("button",{type:"button",class:"add-button",onClick:t[4]||(t[4]=o=>l.addClick())},W),e("div",X,[e("table",Y,[Z,e("tbody",$,[(d(!0),n(V,null,x(s.data.table,(o,u)=>(d(),n("tr",{class:"tbody-row",key:u},[e("td",ee,p(u+1+s.data.perPage*(s.data.page-1)),1),e("td",te,p(o.template_code),1),e("td",ae,p(o.group_receive_name),1),e("td",se,p(o.receive_name),1),e("td",oe,[e("div",ie,[e("img",{onClick:w=>l.editClick(o),src:k,alt:"",class:"image-pencil pointer"},null,8,le),e("img",{onClick:w=>l.deleteClick(o),src:y,alt:"",class:"image-trash pointer"},null,8,re)])])]))),128)),s.data.table.length==0?(d(),n("tr",ce,ne)):A("",!0)])])]),e("div",pe,[i(v,{page:s.data.page,total:s.data.total,lastPage:s.data.lastPage,perPage:s.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),i(f,{modalAlert:s.modalAlert},null,8,["modalAlert"]),i(b,{show:s.showLoading},null,8,["show"])])}const fe=C(M,[["render",_e]]);export{fe as default};
