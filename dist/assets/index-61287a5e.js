import{_ as P}from"./users-cog-duotone-50670cb2.js";import{_ as v}from"./plus-circle-duotone-64bd32fe.js";import{_ as y}from"./pencil-alt-duotone-d85ba34f.js";import{_ as w}from"./trash-alt-duotone-12d94c28.js";import{_ as C,r as i,o as c,c as d,a as t,b as n,F as k,h as b,i as x,t as r,j as A}from"./index-bcfb9eeb.js";const L={name:"group-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"group-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"group-edit",params:{id:s.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apigroup()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apigroup()},apigroup(){this.data.table=[],this.showLoading=!0,this.axios.get("/group",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(s=>{this.showLoading=!1,s.data.data.filter(e=>{this.data.total=e.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},deleteClick(s){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบกลุ่ม",message:`“${s.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.showLoading=!0,e.axios.delete(`/group/${s.id}`).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการลบกลุ่มสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apigroup()}}}).catch(h=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}}}},mounted(){var s,e;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apigroup()}},V={class:"master-group-inex"},M={class:"group-overflow"},N={class:"detail"},S={class:"group-head"},q={class:"group-first"},B=t("img",{src:P,alt:"",class:"icon-users-cog"},null,-1),E=t("div",{class:"name"},"กลุ่ม",-1),F=t("div",{class:"group-image"},[t("img",{src:v,alt:"",class:"icon-plus"}),A(" เพิ่มกลุ่ม ")],-1),j=[F],z={class:"group-end"},D={class:"search"},T=t("div",{class:"line"},null,-1),U={class:"group-body"},G={class:"table-department-inex"},H=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ชื่อย่อกลุ่ม"),t("th",{class:"col2"},"ชื่อกลุ่ม"),t("th",{class:"col3"},"รายละเอียด"),t("th",{class:"col4"},"กอง"),t("th",{class:"col4"},"วันที่สร้าง"),t("th",{class:"col7"},"เครื่องมือ")])],-1),I={class:"tbody"},J={class:"col1"},K={class:"col2"},O={class:"col3"},Q={class:"col4"},R={class:"col5"},W={class:"col7"},X={class:"group-icon"},Y=["onClick"],Z=["onClick"],$={key:0,class:"tbody-row"},tt=t("td",{colspan:"4"},"ไม่มีข้อมูล",-1),et=[tt],st={class:"group-footer"};function at(s,e,h,ot,o,l){const p=i("cpn-input"),_=i("cpn-pagination"),g=i("cpn-modal-alert"),u=i("cpn-loading");return c(),d("div",V,[t("div",M,[t("div",N,[t("div",S,[t("div",q,[B,E,t("button",{type:"button",class:"add-department",onClick:e[0]||(e[0]=a=>l.addClick())},j)]),t("div",z,[t("div",D,[n(p,{modelValue:o.data.search,"onUpdate:modelValue":e[1]||(e[1]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=a=>l.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),T,t("div",U,[t("table",G,[H,t("tbody",I,[(c(!0),d(k,null,b(o.data.table,(a,m)=>(c(),d("tr",{class:"tbody-row",key:m},[t("td",J,r(a.short_name),1),t("td",K,r(a.name),1),t("td",O,r(a.desc),1),t("td",Q,r(a.subministry_name),1),t("td",R,r(a.created_at),1),t("td",W,[t("div",X,[t("img",{onClick:f=>l.editClick(a),src:y,alt:"",class:"image-pencil pointer"},null,8,Y),t("img",{onClick:f=>l.deleteClick(a),src:w,alt:"",class:"image-trash pointer"},null,8,Z)])])]))),128)),o.data.table.length==0?(c(),d("tr",$,et)):x("",!0)])])]),t("div",st,[n(_,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),n(g,{modalAlert:o.modalAlert},null,8,["modalAlert"]),n(u,{show:o.showLoading},null,8,["show"])])}const nt=C(L,[["render",at]]);export{nt as default};
