import{_ as f}from"./users-cog-duotone-50670cb2.js";import{_ as P}from"./plus-circle-duotone-64bd32fe.js";import{_ as v}from"./pencil-alt-duotone-d85ba34f.js";import{_ as w}from"./trash-alt-duotone-12d94c28.js";import{_ as C,r as l,o as r,c as n,a as e,b as c,F as k,h as b,i as A,t as h,j as x}from"./index-3bfa50d1.js";const L={name:"email-agency-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"email-agency-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"email-agency-edit",params:{id:a.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apiEmailAgency()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apiEmailAgency()},apiEmailAgency(){this.data.table=[],this.showLoading=!0,this.axios.get("/email-config",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,user_id:parseInt(localStorage.getItem("user_id"))}}).then(a=>{this.showLoading=!1,a.data.data.filter(t=>{this.data.total=t.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหน่วยงาน",message:`“${a.department_name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0,t.axios.delete(`/email-config/${a.id}`).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการลบหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.apiEmailAgency()}}}).catch(d=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:d.response.data.message}})}}}},mounted(){var a,t;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((t=this.$route.query)==null?void 0:t.perPage)||this.data.perPage,this.apiEmailAgency()}},E={class:"master-email-agency-inex"},V={class:"group-overflow"},M={class:"detail"},S={class:"group-head"},N={class:"group-first"},q=e("img",{src:f,alt:"",class:"icon-users-cog"},null,-1),B=e("div",{class:"name"},"ตั้งค่าอีเมลสำหรับส่งหนังสือ",-1),F=e("div",{class:"group-image"},[e("img",{src:P,alt:"",class:"icon-plus"}),x(" เพิ่มอีเมลหน่วยงาน ")],-1),I=[F],j={class:"group-end"},z={class:"search"},D=e("div",{class:"line"},null,-1),T={class:"group-body"},U={class:"table-department-inex"},G=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"},"ชื่อหน่วยงาน"),e("th",{class:"col2"},"วันที่สร้าง"),e("th",{class:"col3"},"เครื่องมือ")])],-1),H={class:"tbody"},J={class:"col1"},K={class:"col2"},O={class:"col3"},Q={class:"group-icon"},R=["onClick"],W=["onClick"],X={key:0,class:"tbody-row"},Y=e("td",{colspan:"3"},"ไม่มีข้อมูล",-1),Z=[Y],$={class:"group-footer"};function ee(a,t,d,te,s,i){const g=l("cpn-input"),p=l("cpn-pagination"),_=l("cpn-modal-alert"),m=l("cpn-loading");return r(),n("div",E,[e("div",V,[e("div",M,[e("div",S,[e("div",N,[q,B,e("button",{type:"button",class:"add-department",onClick:t[0]||(t[0]=o=>i.addClick())},I)]),e("div",j,[e("div",z,[c(g,{modelValue:s.data.search,"onUpdate:modelValue":t[1]||(t[1]=o=>s.data.search=o),name:"search",type:"text",searchFlag:!0,onSearchClick:t[2]||(t[2]=o=>i.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),D,e("div",T,[e("table",U,[G,e("tbody",H,[(r(!0),n(k,null,b(s.data.table,(o,u)=>(r(),n("tr",{class:"tbody-row",key:u},[e("td",J,h(o.department_name),1),e("td",K,h(o.create_date),1),e("td",O,[e("div",Q,[e("img",{onClick:y=>i.editClick(o),src:v,alt:"",class:"image-pencil pointer"},null,8,R),e("img",{onClick:y=>i.deleteClick(o),src:w,alt:"",class:"image-trash pointer"},null,8,W)])])]))),128)),s.data.table.length==0?(r(),n("tr",X,Z)):A("",!0)])])]),e("div",$,[c(p,{page:s.data.page,total:s.data.total,lastPage:s.data.lastPage,perPage:s.data.perPage,onPageChange:i.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),c(_,{modalAlert:s.modalAlert},null,8,["modalAlert"]),c(m,{show:s.showLoading},null,8,["show"])])}const re=C(L,[["render",ee]]);export{re as default};
