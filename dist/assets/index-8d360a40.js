import{_ as k}from"./users-cog-duotone-50670cb2.js";import{_ as b}from"./plus-circle-duotone-64bd32fe.js";import{_ as f}from"./pencil-alt-duotone-d85ba34f.js";import{_ as v}from"./trash-alt-duotone-12d94c28.js";import{_ as P,r as c,o as d,c as r,a as t,b as n,F as w,h as C,i as x,t as i,n as A,j as L}from"./index-9ff3ebdd.js";const V={name:"book-type-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"book-type-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"book-type-edit",params:{id:s.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apibooktype()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apibooktype()},apibooktype(){this.data.table=[],this.showLoading=!0,this.axios.get("/booktype",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(s=>{this.showLoading=!1,s.data.data.filter(e=>{this.data.total=e.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},deleteClick(s){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบชนิดหนังสือ",message:`“${s.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.showLoading=!0,e.axios.delete(`/booktype/${s.id}`).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการลบชนิดหนังสือสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apibooktype()}}}).catch(h=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}}}},mounted(){var s,e;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apibooktype()}},M={class:"master-book-type-inex"},N={class:"group-overflow"},S={class:"detail"},q={class:"group-head"},B={class:"group-first"},E=t("img",{src:k,alt:"",class:"icon-users-cog"},null,-1),F=t("div",{class:"name"},"ชนิดหนังสือ",-1),z=t("div",{class:"group-image"},[t("img",{src:b,alt:"",class:"icon-plus"}),L(" เพิ่มชนิดหนังสือ ")],-1),j=[z],D={class:"group-end"},T={class:"search"},U=t("div",{class:"line"},null,-1),G={class:"group-body"},H={class:"table-department-inex"},I=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"เลขชนิดหนังสือ"),t("th",{class:"col2"},"ชื่อชนิดหนังสือ"),t("th",{class:"col3"},"รายละเอียด"),t("th",{class:"col4"},"ทะเบียน"),t("th",{class:"col5"},"วันที่สร้าง"),t("th",{class:"col7"},"เครื่องมือ")])],-1),J={class:"tbody"},K={class:"col1"},O={class:"col2"},Q={class:"col3"},R={class:"col4"},W={class:"col5"},X={class:"col7"},Y={class:"group-icon"},Z=["onClick"],$=["onClick"],tt={key:0,class:"tbody-row"},et=t("td",{colspan:"6"},"ไม่มีข้อมูล",-1),st=[et],at={class:"group-footer"};function ot(s,e,h,lt,o,l){const p=c("cpn-input"),_=c("cpn-pagination"),g=c("cpn-modal-alert"),m=c("cpn-loading");return d(),r("div",M,[t("div",N,[t("div",S,[t("div",q,[t("div",B,[E,F,t("button",{type:"button",class:"add-department",onClick:e[0]||(e[0]=a=>l.addClick())},j)]),t("div",D,[t("div",T,[n(p,{modelValue:o.data.search,"onUpdate:modelValue":e[1]||(e[1]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=a=>l.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),U,t("div",G,[t("table",H,[I,t("tbody",J,[(d(!0),r(w,null,C(o.data.table,(a,u)=>(d(),r("tr",{class:"tbody-row",key:u},[t("td",K,i(a.code),1),t("td",O,i(a.name),1),t("td",Q,i(a.desc),1),t("td",R,i(a.type_desc),1),t("td",W,i(a.created_at),1),t("td",X,[t("div",Y,[t("div",{class:A(["image-status",a.active_flag==1?"active":""])},null,2),t("img",{onClick:y=>l.editClick(a),src:f,alt:"",class:"image-pencil pointer"},null,8,Z),t("img",{onClick:y=>l.deleteClick(a),src:v,alt:"",class:"image-trash pointer"},null,8,$)])])]))),128)),o.data.table.length==0?(d(),r("tr",tt,st)):x("",!0)])])]),t("div",at,[n(_,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),n(g,{modalAlert:o.modalAlert},null,8,["modalAlert"]),n(m,{show:o.showLoading},null,8,["show"])])}const ht=P(V,[["render",ot]]);export{ht as default};
