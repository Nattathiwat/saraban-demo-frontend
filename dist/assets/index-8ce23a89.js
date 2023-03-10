import{_ as y}from"./users-cog-duotone-50670cb2.js";import{_ as P}from"./plus-circle-duotone-64bd32fe.js";import{_ as v}from"./pencil-alt-duotone-d85ba34f.js";import{_ as w}from"./trash-alt-duotone-12d94c28.js";import{_ as C,r as n,o as i,c,a as t,b as d,F as k,h as b,i as x,t as r,j as A}from"./index-014b7ee1.js";const L={name:"agency-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"agency-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"agency-edit",params:{id:a.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apiDepartment()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apiDepartment()},apiDepartment(){this.data.table=[],this.showLoading=!0,this.axios.get("/department",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(a=>{this.showLoading=!1,a.data.data.filter(e=>{this.data.total=e.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหน่วยงาน",message:`“${a.department_short_name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.showLoading=!0,e.axios.delete(`/department/${a.id}`).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการลบหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apiDepartment()}}}).catch(h=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}}}},mounted(){var a,e;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apiDepartment()}},V={class:"master-agency-inex"},D={class:"group-overflow"},M={class:"detail"},N={class:"group-head"},S={class:"group-first"},q=t("img",{src:y,alt:"",class:"icon-users-cog"},null,-1),B=t("div",{class:"name"},"หน่วยงาน",-1),E=t("div",{class:"group-image"},[t("img",{src:P,alt:"",class:"icon-plus"}),A(" เพิ่มหน่วยงาน ")],-1),F=[E],z={class:"group-end"},j={class:"search"},T=t("div",{class:"line"},null,-1),U={class:"group-body"},G={class:"table-department-inex"},H=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"รหัสหน่วยงาน"),t("th",{class:"col2"},"ชื่อย่อหน่วยงาน"),t("th",{class:"col3"},"ชื่อหน่วยงาน"),t("th",{class:"col4"},"รายละเอียด"),t("th",{class:"col5"},"กระทรวง"),t("th",{class:"col7"},"เครื่องมือ")])],-1),I={class:"tbody"},J={class:"col1"},K={class:"col2"},O={class:"col3"},Q={class:"col4"},R={class:"col5"},W={class:"col7"},X={class:"group-icon"},Y=["onClick"],Z=["onClick"],$={key:0,class:"tbody-row"},tt=t("td",{colspan:"4"},"ไม่มีข้อมูล",-1),et=[tt],at={class:"group-footer"};function st(a,e,h,ot,o,l){const p=n("cpn-input"),_=n("cpn-pagination"),g=n("cpn-modal-alert"),m=n("cpn-loading");return i(),c("div",V,[t("div",D,[t("div",M,[t("div",N,[t("div",S,[q,B,t("button",{type:"button",class:"add-department",onClick:e[0]||(e[0]=s=>l.addClick())},F)]),t("div",z,[t("div",j,[d(p,{modelValue:o.data.search,"onUpdate:modelValue":e[1]||(e[1]=s=>o.data.search=s),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=s=>l.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),T,t("div",U,[t("table",G,[H,t("tbody",I,[(i(!0),c(k,null,b(o.data.table,(s,u)=>(i(),c("tr",{class:"tbody-row",key:u},[t("td",J,r(s.code),1),t("td",K,r(s.department_short_name),1),t("td",O,r(s.department_full_name),1),t("td",Q,r(s.desc),1),t("td",R,r(s.organization_name),1),t("td",W,[t("div",X,[t("img",{onClick:f=>l.editClick(s),src:v,alt:"",class:"image-pencil pointer"},null,8,Y),t("img",{onClick:f=>l.deleteClick(s),src:w,alt:"",class:"image-trash pointer"},null,8,Z)])])]))),128)),o.data.table.length==0?(i(),c("tr",$,et)):x("",!0)])])]),t("div",at,[d(_,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),d(g,{modalAlert:o.modalAlert},null,8,["modalAlert"]),d(m,{show:o.showLoading},null,8,["show"])])}const dt=C(L,[["render",st]]);export{dt as default};
