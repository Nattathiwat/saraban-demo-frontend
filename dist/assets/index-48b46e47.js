import{_ as f}from"./users-cog-duotone-50670cb2.js";import{_ as P}from"./plus-circle-duotone-64bd32fe.js";import{_ as y}from"./pencil-alt-duotone-d85ba34f.js";import{_ as v}from"./trash-alt-duotone-12d94c28.js";import{_ as w,r,o as d,c as i,a as t,b as c,F as C,h as x,i as _,t as n,j as A}from"./index-3bfa50d1.js";const L={name:"book-method-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"book-method-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"book-method-edit",params:{id:a.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apibookmethod()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apibookmethod()},apibookmethod(){this.data.table=[],this.showLoading=!0,this.axios.get("/bookmethod",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(a=>{this.showLoading=!1,a.data.data.filter(e=>{this.data.total=e.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบรูปแบบการรับ-ส่งหนังสือ",message:`“${a.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.showLoading=!0,e.axios.delete(`/bookmethod/${a.id}`).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการลบรูปแบบการรับ-ส่งหนังสือสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apibookmethod()}}}).catch(h=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}}}},mounted(){var a,e;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apibookmethod()}},V={class:"master-book-method-inex"},M={class:"group-overflow"},N={class:"detail"},S={class:"group-head"},q={class:"group-first"},B=t("img",{src:f,alt:"",class:"icon-users-cog"},null,-1),E=t("div",{class:"name"},"รูปแบบการรับ-ส่งหนังสือ",-1),F=t("div",{class:"group-image"},[t("img",{src:P,alt:"",class:"icon-plus"}),A(" เพิ่มรูปแบบการรับ-ส่งหนังสือ ")],-1),j=[F],z={class:"group-end"},D={class:"search"},T=t("div",{class:"line"},null,-1),U={class:"group-body"},G={class:"table-department-inex"},H=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ชื่อรูปแบบการรับ-ส่งหนังสือ"),t("th",{class:"col2"},"รายละเอียด"),t("th",{class:"col3"},"ประเภทหนังสือ"),t("th",{class:"col3"},"วันที่สร้าง"),t("th",{class:"col7"},"เครื่องมือ")])],-1),I={class:"tbody"},J={class:"col1"},K={class:"col2"},O={class:"col3"},Q={class:"col3"},R={class:"col7"},W={class:"group-icon"},X=["onClick"],Y=["onClick"],Z={key:0,class:"tbody-row"},$=t("td",{colspan:"5"},"ไม่มีข้อมูล",-1),tt=[$],et={class:"group-footer"};function at(a,e,h,st,o,l){const p=r("cpn-input"),g=r("cpn-pagination"),m=r("cpn-modal-alert"),u=r("cpn-loading");return d(),i("div",V,[t("div",M,[t("div",N,[t("div",S,[t("div",q,[B,E,t("button",{type:"button",class:"add-department",onClick:e[0]||(e[0]=s=>l.addClick())},j)]),t("div",z,[t("div",D,[c(p,{modelValue:o.data.search,"onUpdate:modelValue":e[1]||(e[1]=s=>o.data.search=s),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=s=>l.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),T,t("div",U,[t("table",G,[H,t("tbody",I,[(d(!0),i(C,null,x(o.data.table,(s,k)=>(d(),i("tr",{class:"tbody-row",key:k},[t("td",J,n(s.name),1),t("td",K,n(s.desc),1),t("td",O,n(s.type_desc),1),t("td",Q,n(s.created_at),1),t("td",R,[t("div",W,[t("img",{onClick:b=>l.editClick(s),src:y,alt:"",class:"image-pencil pointer"},null,8,X),s.can_delete==1?(d(),i("img",{key:0,onClick:b=>l.deleteClick(s),src:v,alt:"",class:"image-trash pointer"},null,8,Y)):_("",!0)])])]))),128)),o.data.table.length==0?(d(),i("tr",Z,tt)):_("",!0)])])]),t("div",et,[c(g,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),c(m,{modalAlert:o.modalAlert},null,8,["modalAlert"]),c(u,{show:o.showLoading},null,8,["show"])])}const ct=w(L,[["render",at]]);export{ct as default};