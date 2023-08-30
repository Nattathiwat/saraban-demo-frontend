import{_ as f}from"./users-cog-duotone-50670cb2.js";import{_ as y}from"./plus-circle-duotone-64bd32fe.js";import{_ as v}from"./pencil-alt-duotone-d85ba34f.js";import{_ as P}from"./trash-alt-duotone-12d94c28.js";import{_ as w,r as c,o as r,c as n,a as t,b as d,F as C,h as k,i as x,t as l,n as A,j as L}from"./index-08742c87.js";const V={name:"agency-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"subministry-create"}).catch(()=>{})},editClick(e){this.$router.push({name:"subministry-edit",params:{id:e.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(e){this.data.perPage=e.perPage,this.data.page=e.page,this.apisubminist()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apisubminist()},apisubminist(){this.data.table=[],this.showLoading=!0,this.axios.get("/subministry",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(e=>{this.showLoading=!1,e.data.data.filter(s=>{this.data.total=s.total}),this.data.table=e.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},deleteClick(e){let s=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบกอง",message:`“${e.Name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){s.showLoading=!0,s.axios.delete(`/subministry/${e.id}`).then(()=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"success",title:"ทำการลบกองสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.apisubminist()}}}).catch(h=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}}}},mounted(){var e,s;this.data.page=((e=this.$route.query)==null?void 0:e.page)||this.data.page,this.data.perPage=((s=this.$route.query)==null?void 0:s.perPage)||this.data.perPage,this.apisubminist()}},M={class:"master-submin-inex"},N={class:"group-overflow"},S={class:"detail"},q={class:"group-head"},B={class:"group-first"},E=t("img",{src:f,alt:"",class:"icon-users-cog"},null,-1),F=t("div",{class:"name"},"กอง",-1),z=t("div",{class:"group-image"},[t("img",{src:y,alt:"",class:"icon-plus"}),L(" เพิ่มกอง ")],-1),j=[z],D={class:"group-end"},T={class:"search"},U=t("div",{class:"line"},null,-1),G={class:"group-body"},H={class:"table-department-inex"},I=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"รหัสกอง"),t("th",{class:"col2"},"ชื่อย่อกอง"),t("th",{class:"col3"},"ชื่อกอง"),t("th",{class:"col4"},"รายละเอียด"),t("th",{class:"col5"},"วันที่สร้าง"),t("th",{class:"col7"},"เครื่องมือ")])],-1),J={class:"tbody"},K={class:"col1"},O={class:"col2"},Q={class:"col3"},R={class:"col4"},W={class:"col5"},X={class:"col7"},Y={class:"group-icon"},Z=["onClick"],$=["onClick"],tt={key:0,class:"tbody-row"},st=t("td",{colspan:"6"},"ไม่มีข้อมูล",-1),et=[st],at={class:"group-footer"};function ot(e,s,h,it,o,i){const _=c("cpn-input"),p=c("cpn-pagination"),g=c("cpn-modal-alert"),m=c("cpn-loading");return r(),n("div",M,[t("div",N,[t("div",S,[t("div",q,[t("div",B,[E,F,t("button",{type:"button",class:"add-department",onClick:s[0]||(s[0]=a=>i.addClick())},j)]),t("div",D,[t("div",T,[d(_,{modelValue:o.data.search,"onUpdate:modelValue":s[1]||(s[1]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:s[2]||(s[2]=a=>i.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),U,t("div",G,[t("table",H,[I,t("tbody",J,[(r(!0),n(C,null,k(o.data.table,(a,u)=>(r(),n("tr",{class:"tbody-row",key:u},[t("td",K,l(a.code),1),t("td",O,l(a.short_name),1),t("td",Q,l(a.Name),1),t("td",R,l(a.desc),1),t("td",W,l(a.created_at),1),t("td",X,[t("div",Y,[t("div",{class:A(["image-status",a.active_flag==1?"active":""])},null,2),t("img",{onClick:b=>i.editClick(a),src:v,alt:"",class:"image-pencil pointer"},null,8,Z),t("img",{onClick:b=>i.deleteClick(a),src:P,alt:"",class:"image-trash pointer"},null,8,$)])])]))),128)),o.data.table.length==0?(r(),n("tr",tt,et)):x("",!0)])])]),t("div",at,[d(p,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:i.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),d(g,{modalAlert:o.modalAlert},null,8,["modalAlert"]),d(m,{show:o.showLoading},null,8,["show"])])}const ht=w(V,[["render",ot]]);export{ht as default};
