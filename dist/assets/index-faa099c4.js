import{_ as k}from"./users-cog-duotone-50670cb2.js";import{_ as b}from"./plus-circle-duotone-64bd32fe.js";import{_ as f}from"./pencil-alt-duotone-d85ba34f.js";import{_ as P}from"./trash-alt-duotone-12d94c28.js";import{_ as v,r as c,o as d,c as r,a as t,b as n,F as w,h as C,i as x,t as i,j as A}from"./index-79489136.js";const L={name:"book-type-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"book-type-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"book-type-edit",params:{id:s.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apibooktype()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apibooktype()},apibooktype(){this.data.table=[],this.showLoading=!0,this.axios.get("/booktype",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(s=>{this.showLoading=!1,s.data.data.filter(e=>{this.data.total=e.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},deleteClick(s){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบชนิดหนังสือ",message:`“${s.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.showLoading=!0,e.axios.delete(`/booktype/${s.id}`).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการลบชนิดหนังสือสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apibooktype()}}}).catch(h=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}}}},mounted(){var s,e;this.data.page=((s=this.$route.query)==null?void 0:s.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apibooktype()}},V={class:"master-book-type-inex"},M={class:"group-overflow"},N={class:"detail"},S={class:"group-head"},q={class:"group-first"},B=t("img",{src:k,alt:"",class:"icon-users-cog"},null,-1),E=t("div",{class:"name"},"ชนิดหนังสือ",-1),F=t("div",{class:"group-image"},[t("img",{src:b,alt:"",class:"icon-plus"}),A(" เพิ่มชนิดหนังสือ ")],-1),j=[F],z={class:"group-end"},D={class:"search"},T=t("div",{class:"line"},null,-1),U={class:"group-body"},G={class:"table-department-inex"},H=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"เลขชนิดหนังสือ"),t("th",{class:"col2"},"ชื่อชนิดหนังสือ"),t("th",{class:"col3"},"รายละเอียด"),t("th",{class:"col4"},"ทะเบียน"),t("th",{class:"col5"},"วันที่สร้าง"),t("th",{class:"col7"},"เครื่องมือ")])],-1),I={class:"tbody"},J={class:"col1"},K={class:"col2"},O={class:"col3"},Q={class:"col4"},R={class:"col5"},W={class:"col7"},X={class:"group-icon"},Y=["onClick"],Z=["onClick"],$={key:0,class:"tbody-row"},tt=t("td",{colspan:"4"},"ไม่มีข้อมูล",-1),et=[tt],st={class:"group-footer"};function at(s,e,h,ot,o,l){const p=c("cpn-input"),_=c("cpn-pagination"),g=c("cpn-modal-alert"),m=c("cpn-loading");return d(),r("div",V,[t("div",M,[t("div",N,[t("div",S,[t("div",q,[B,E,t("button",{type:"button",class:"add-department",onClick:e[0]||(e[0]=a=>l.addClick())},j)]),t("div",z,[t("div",D,[n(p,{modelValue:o.data.search,"onUpdate:modelValue":e[1]||(e[1]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=a=>l.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),T,t("div",U,[t("table",G,[H,t("tbody",I,[(d(!0),r(w,null,C(o.data.table,(a,u)=>(d(),r("tr",{class:"tbody-row",key:u},[t("td",J,i(a.code),1),t("td",K,i(a.name),1),t("td",O,i(a.desc),1),t("td",Q,i(a.type_desc),1),t("td",R,i(a.created_at),1),t("td",W,[t("div",X,[t("img",{onClick:y=>l.editClick(a),src:f,alt:"",class:"image-pencil pointer"},null,8,Y),t("img",{onClick:y=>l.deleteClick(a),src:P,alt:"",class:"image-trash pointer"},null,8,Z)])])]))),128)),o.data.table.length==0?(d(),r("tr",$,et)):x("",!0)])])]),t("div",st,[n(_,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),n(g,{modalAlert:o.modalAlert},null,8,["modalAlert"]),n(m,{show:o.showLoading},null,8,["show"])])}const nt=v(L,[["render",at]]);export{nt as default};
