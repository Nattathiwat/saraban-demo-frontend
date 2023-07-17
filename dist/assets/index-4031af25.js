import{_ as v}from"./users-cog-duotone-50670cb2.js";import{_ as k}from"./plus-circle-duotone-64bd32fe.js";import{_ as y}from"./pencil-alt-duotone-d85ba34f.js";import{_ as P}from"./trash-alt-duotone-12d94c28.js";import{_ as b,r as c,o as i,c as d,a as t,b as n,F as w,h as C,i as x,t as r,n as A,j as L}from"./index-a70e72f5.js";const V={name:"book-record-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"book-record-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"book-record-edit",params:{id:a.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apiDepartment()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apiDepartment()},apiDepartment(){this.data.table=[],this.showLoading=!0,this.axios.get("/bookcategory",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(a=>{this.showLoading=!1,a.data.data.filter(e=>{this.data.total=e.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบทะเบียนหนังสือ",message:`“${a.department_short_name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.showLoading=!0,e.axios.delete(`/bookcategory/${a.id}`).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการลบทะเบียนหนังสือสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apiDepartment()}}}).catch(h=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}}}},mounted(){var a,e;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apiDepartment()}},D={class:"master-book-record-inex"},M={class:"group-overflow"},N={class:"detail"},S={class:"group-head"},q={class:"group-first"},B=t("img",{src:v,alt:"",class:"icon-users-cog"},null,-1),E=t("div",{class:"name"},"ทะเบียนหนังสือ",-1),F=t("div",{class:"group-image"},[t("img",{src:k,alt:"",class:"icon-plus"}),L(" เพิ่มทะเบียนหนังสือ ")],-1),z=[F],j={class:"group-end"},T={class:"search"},U=t("div",{class:"line"},null,-1),G={class:"group-body"},H={class:"table-department-inex"},I=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"รหัสทะเบียนหนังสือ"),t("th",{class:"col2"},"ชื่อทะเบียนหนังสือ"),t("th",{class:"col3"},"ทะเบียน"),t("th",{class:"col4"},"วันที่สร้าง"),t("th",{class:"col5"},"รายละเอียด"),t("th",{class:"col7"},"เครื่องมือ")])],-1),J={class:"tbody"},K={class:"col1"},O={class:"col2"},Q={class:"col3"},R={class:"col4"},W={class:"col5"},X={class:"col7"},Y={class:"group-icon"},Z=["onClick"],$=["onClick"],tt={key:0,class:"tbody-row"},et=t("td",{colspan:"6"},"ไม่มีข้อมูล",-1),at=[et],st={class:"group-footer"};function ot(a,e,h,lt,o,l){const p=c("cpn-input"),_=c("cpn-pagination"),g=c("cpn-modal-alert"),m=c("cpn-loading");return i(),d("div",D,[t("div",M,[t("div",N,[t("div",S,[t("div",q,[B,E,t("button",{type:"button",class:"add-department",onClick:e[0]||(e[0]=s=>l.addClick())},z)]),t("div",j,[t("div",T,[n(p,{modelValue:o.data.search,"onUpdate:modelValue":e[1]||(e[1]=s=>o.data.search=s),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=s=>l.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),U,t("div",G,[t("table",H,[I,t("tbody",J,[(i(!0),d(w,null,C(o.data.table,(s,u)=>(i(),d("tr",{class:"tbody-row",key:u},[t("td",K,r(s.code),1),t("td",O,r(s.name),1),t("td",Q,r(s.type_desc),1),t("td",R,r(s.created_at),1),t("td",W,r(s.desc),1),t("td",X,[t("div",Y,[t("div",{class:A(["image-status",s.active_flag==1?"active":""])},null,2),t("img",{onClick:f=>l.editClick(s),src:y,alt:"",class:"image-pencil pointer"},null,8,Z),t("img",{onClick:f=>l.deleteClick(s),src:P,alt:"",class:"image-trash pointer"},null,8,$)])])]))),128)),o.data.table.length==0?(i(),d("tr",tt,at)):x("",!0)])])]),t("div",st,[n(_,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),n(g,{modalAlert:o.modalAlert},null,8,["modalAlert"]),n(m,{show:o.showLoading},null,8,["show"])])}const ht=b(V,[["render",ot]]);export{ht as default};
