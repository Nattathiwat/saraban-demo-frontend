import{_ as b}from"./users-cog-duotone-50670cb2.js";import{_ as f}from"./plus-circle-duotone-64bd32fe.js";import{_ as P}from"./pencil-alt-duotone-d85ba34f.js";import{_ as v}from"./trash-alt-duotone-12d94c28.js";import{_ as y,r as d,o as i,c as r,a as t,b as c,F as w,h as C,i as x,t as n,j as A}from"./index-32749137.js";const L={name:"book-method-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"book-method-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"book-method-edit",params:{id:s.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apibookmethod()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apibookmethod()},apibookmethod(){this.data.table=[],this.showLoading=!0,this.axios.get("/bookmethod",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(s=>{this.showLoading=!1,s.data.data.filter(e=>{this.data.total=e.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},deleteClick(s){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบรูปแบบการรับ-ส่งหนังสือ",message:`“${s.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.showLoading=!0,e.axios.delete(`/bookmethod/${s.id}`).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการลบรูปแบบการรับ-ส่งหนังสือสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apibookmethod()}}}).catch(h=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}}}},mounted(){var s,e;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apibookmethod()}},V={class:"master-book-method-inex"},M={class:"group-overflow"},N={class:"detail"},S={class:"group-head"},q={class:"group-first"},B=t("img",{src:b,alt:"",class:"icon-users-cog"},null,-1),E=t("div",{class:"name"},"รูปแบบการรับ-ส่งหนังสือ",-1),F=t("div",{class:"group-image"},[t("img",{src:f,alt:"",class:"icon-plus"}),A(" เพิ่มรูปแบบการรับ-ส่งหนังสือ ")],-1),j=[F],z={class:"group-end"},D={class:"search"},T=t("div",{class:"line"},null,-1),U={class:"group-body"},G={class:"table-department-inex"},H=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ชื่อรูปแบบการรับ-ส่งหนังสือ"),t("th",{class:"col2"},"รายละเอียด"),t("th",{class:"col3"},"ประเภทหนังสือ"),t("th",{class:"col3"},"วันที่สร้าง"),t("th",{class:"col7"},"เครื่องมือ")])],-1),I={class:"tbody"},J={class:"col1"},K={class:"col2"},O={class:"col3"},Q={class:"col3"},R={class:"col7"},W={class:"group-icon"},X=["onClick"],Y=["onClick"],Z={key:0,class:"tbody-row"},$=t("td",{colspan:"4"},"ไม่มีข้อมูล",-1),tt=[$],et={class:"group-footer"};function st(s,e,h,at,a,l){const p=d("cpn-input"),_=d("cpn-pagination"),g=d("cpn-modal-alert"),m=d("cpn-loading");return i(),r("div",V,[t("div",M,[t("div",N,[t("div",S,[t("div",q,[B,E,t("button",{type:"button",class:"add-department",onClick:e[0]||(e[0]=o=>l.addClick())},j)]),t("div",z,[t("div",D,[c(p,{modelValue:a.data.search,"onUpdate:modelValue":e[1]||(e[1]=o=>a.data.search=o),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=o=>l.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),T,t("div",U,[t("table",G,[H,t("tbody",I,[(i(!0),r(w,null,C(a.data.table,(o,u)=>(i(),r("tr",{class:"tbody-row",key:u},[t("td",J,n(o.name),1),t("td",K,n(o.desc),1),t("td",O,n(o.type_desc),1),t("td",Q,n(o.created_at),1),t("td",R,[t("div",W,[t("img",{onClick:k=>l.editClick(o),src:P,alt:"",class:"image-pencil pointer"},null,8,X),t("img",{onClick:k=>l.deleteClick(o),src:v,alt:"",class:"image-trash pointer"},null,8,Y)])])]))),128)),a.data.table.length==0?(i(),r("tr",Z,tt)):x("",!0)])])]),t("div",et,[c(_,{page:a.data.page,total:a.data.total,lastPage:a.data.lastPage,perPage:a.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),c(g,{modalAlert:a.modalAlert},null,8,["modalAlert"]),c(m,{show:a.showLoading},null,8,["show"])])}const ct=y(L,[["render",st]]);export{ct as default};
