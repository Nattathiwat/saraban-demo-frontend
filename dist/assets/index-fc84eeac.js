import{_ as f}from"./users-cog-duotone-50670cb2.js";import{_ as y}from"./plus-circle-duotone-64bd32fe.js";import{_ as v}from"./pencil-alt-duotone-d85ba34f.js";import{_ as w}from"./trash-alt-duotone-12d94c28.js";import{_ as C,r as c,o as n,c as r,a as t,b as d,F as P,h as k,i as x,t as i,j as A}from"./index-426ec220.js";const L={name:"agency-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"subministry-create"}).catch(()=>{})},editClick(e){this.$router.push({name:"subministry-edit",params:{id:e.id}}).catch(()=>{})},pageChange(e){this.data.perPage=e.perPage,this.data.page=e.page,this.apisubminist()},search(){this.data.status=!0,this.data.perPage=50,this.data.page=1,this.apisubminist()},apisubminist(){this.data.table=[],this.showLoading=!0,this.axios.get("/subministry",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(e=>{this.showLoading=!1,e.data.data.filter(s=>{this.data.total=s.total}),this.data.table=e.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},deleteClick(e){let s=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบกอง",message:`“${e.Name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){s.showLoading=!0,s.axios.delete(`/subministry/${e.id}`).then(()=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"success",title:"ทำการลบกองสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.apisubminist()}}}).catch(h=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}}}},mounted(){this.apisubminist()}},V={class:"master-submin-inex"},M={class:"group-overflow"},N={class:"detail"},S={class:"group-head"},B={class:"group-first"},E=t("img",{src:f,alt:"",class:"icon-users-cog"},null,-1),F=t("div",{class:"name"},"กอง",-1),j=t("div",{class:"group-image"},[t("img",{src:y,alt:"",class:"icon-plus"}),A(" เพิ่มกอง ")],-1),z=[j],D={class:"group-end"},T={class:"search"},U=t("div",{class:"line"},null,-1),q={class:"group-body"},G={class:"table-department-inex"},H=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"รหัสกอง"),t("th",{class:"col2"},"ชื่อย่อกอง"),t("th",{class:"col3"},"ชื่อกอง"),t("th",{class:"col4"},"รายละเอียด"),t("th",{class:"col5"},"วันที่สร้าง"),t("th",{class:"col7"},"เครื่องมือ")])],-1),I={class:"tbody"},J={class:"col1"},K={class:"col2"},O={class:"col3"},Q={class:"col4"},R={class:"col5"},W={class:"col7"},X={class:"group-icon"},Y=["onClick"],Z=["onClick"],$={key:0,class:"tbody-row"},tt=t("td",{colspan:"4"},"ไม่มีข้อมูล",-1),st=[tt],et={class:"group-footer"};function at(e,s,h,ot,o,l){const _=c("cpn-input"),p=c("cpn-pagination"),g=c("cpn-modal-alert"),m=c("cpn-loading");return n(),r("div",V,[t("div",M,[t("div",N,[t("div",S,[t("div",B,[E,F,t("button",{type:"button",class:"add-department",onClick:s[0]||(s[0]=a=>l.addClick())},z)]),t("div",D,[t("div",T,[d(_,{modelValue:o.data.search,"onUpdate:modelValue":s[1]||(s[1]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:s[2]||(s[2]=a=>l.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),U,t("div",q,[t("table",G,[H,t("tbody",I,[(n(!0),r(P,null,k(o.data.table,(a,u)=>(n(),r("tr",{class:"tbody-row",key:u},[t("td",J,i(a.code),1),t("td",K,i(a.short_name),1),t("td",O,i(a.Name),1),t("td",Q,i(a.desc),1),t("td",R,i(a.created_at),1),t("td",W,[t("div",X,[t("img",{onClick:b=>l.editClick(a),src:v,alt:"",class:"image-pencil pointer"},null,8,Y),t("img",{onClick:b=>l.deleteClick(a),src:w,alt:"",class:"image-trash pointer"},null,8,Z)])])]))),128)),o.data.table.length==0?(n(),r("tr",$,st)):x("",!0)])])]),t("div",et,[d(p,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),d(g,{modalAlert:o.modalAlert},null,8,["modalAlert"]),d(m,{show:o.showLoading},null,8,["show"])])}const dt=C(L,[["render",at]]);export{dt as default};
