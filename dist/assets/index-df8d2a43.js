import{_ as P}from"./users-cog-duotone-50670cb2.js";import{_ as v}from"./plus-circle-duotone-64bd32fe.js";import{_ as w}from"./pencil-alt-duotone-d85ba34f.js";import{_ as y}from"./trash-alt-duotone-12d94c28.js";import{_ as C,r,o as l,c as n,a as t,b as d,F as k,h as b,i as x,t as h,j as A}from"./index-adb267a0.js";const L={name:"org-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"organization-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"organization-edit",params:{id:a.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apiorg()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apiorg()},apiorg(){this.data.table=[],this.showLoading=!0,this.axios.get("/organization",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(a=>{this.showLoading=!1,a.data.data.filter(e=>{this.data.total=e.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบกระทรวง",message:`“${a.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.showLoading=!0,e.axios.delete(`/organization/${a.id}`).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการลบกระทรวงสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apiorg()}}}).catch(c=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}})}}}},mounted(){var a,e;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apiorg()}},V={class:"master-org-inex"},M={class:"group-overflow"},z={class:"detail"},N={class:"group-head"},S={class:"group-first"},q=t("img",{src:P,alt:"",class:"icon-users-cog"},null,-1),B=t("div",{class:"name"},"กระทรวง",-1),E=t("div",{class:"group-image"},[t("img",{src:v,alt:"",class:"icon-plus"}),A(" เพิ่มกระทรวง ")],-1),F=[E],j={class:"group-end"},D={class:"search"},T=t("div",{class:"line"},null,-1),U={class:"group-body"},G={class:"table-department-inex"},H=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ชื่อกระทรวง"),t("th",{class:"col2"},"วันที่สร้าง"),t("th",{class:"col7"},"เครื่องมือ")])],-1),I={class:"tbody"},J={class:"col1"},K={class:"col2"},O={class:"col7"},Q={class:"group-icon"},R=["onClick"],W=["onClick"],X={key:0,class:"tbody-row"},Y=t("td",{colspan:"4"},"ไม่มีข้อมูล",-1),Z=[Y],$={class:"group-footer"};function tt(a,e,c,et,s,i){const g=r("cpn-input"),p=r("cpn-pagination"),_=r("cpn-modal-alert"),m=r("cpn-loading");return l(),n("div",V,[t("div",M,[t("div",z,[t("div",N,[t("div",S,[q,B,t("button",{type:"button",class:"add-department",onClick:e[0]||(e[0]=o=>i.addClick())},F)]),t("div",j,[t("div",D,[d(g,{modelValue:s.data.search,"onUpdate:modelValue":e[1]||(e[1]=o=>s.data.search=o),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=o=>i.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),T,t("div",U,[t("table",G,[H,t("tbody",I,[(l(!0),n(k,null,b(s.data.table,(o,u)=>(l(),n("tr",{class:"tbody-row",key:u},[t("td",J,h(o.name),1),t("td",K,h(o.created_at),1),t("td",O,[t("div",Q,[t("img",{onClick:f=>i.editClick(o),src:w,alt:"",class:"image-pencil pointer"},null,8,R),t("img",{onClick:f=>i.deleteClick(o),src:y,alt:"",class:"image-trash pointer"},null,8,W)])])]))),128)),s.data.table.length==0?(l(),n("tr",X,Z)):x("",!0)])])]),t("div",$,[d(p,{page:s.data.page,total:s.data.total,lastPage:s.data.lastPage,perPage:s.data.perPage,onPageChange:i.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),d(_,{modalAlert:s.modalAlert},null,8,["modalAlert"]),d(m,{show:s.showLoading},null,8,["show"])])}const lt=C(L,[["render",tt]]);export{lt as default};
