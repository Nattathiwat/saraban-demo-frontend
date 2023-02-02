import{_ as v,a as w}from"./pencil-alt-duotone-a279d8e1.js";import{_ as C}from"./plus-circle-duotone-64bd32fe.js";import{_ as P}from"./trash-alt-duotone-12d94c28.js";import{_ as k,r as n,o as r,c as i,a as t,b as d,F as y,h as b,i as x,t as c,j as A}from"./index-756f06f7.js";const L={name:"department-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:50}}},methods:{addClick(){this.$router.push({name:"department-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"department-edit",params:{id:a.id}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apiDepartment()},search(){this.data.status=!0,this.data.perPage=50,this.data.page=1,this.apiDepartment()},apiDepartment(){this.data.table=[],this.showLoading=!0,this.axios.get("/department",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(a=>{this.showLoading=!1,a.data.data.filter(e=>{this.data.total=e.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหน่วยงาน",message:`“${a.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.showLoading=!0,e.axios.delete(`/department/${a.id}`).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการลบหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apiDepartment()}}}).catch(h=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}}}},mounted(){this.apiDepartment()}},V={class:"department-inex"},D={class:"group-overflow"},M={class:"detail"},N={class:"group-head"},S={class:"group-first"},B=t("img",{src:v,alt:"",class:"icon-users-cog"},null,-1),E=t("div",{class:"name"},"หน่วยงาน",-1),F=t("div",{class:"group-image"},[t("img",{src:C,alt:"",class:"icon-plus"}),A(" เพิ่มหน่วยงาน ")],-1),j=[F],z={class:"group-end"},T={class:"search"},U=t("div",{class:"line"},null,-1),q={class:"group-body"},G={class:"table-department-inex"},H=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"รหัสหน่วยงาน"),t("th",{class:"col2"},"ชื่อย่อหน่วยงาน"),t("th",{class:"col3"},"ชื่อหน่วยงาน"),t("th",{class:"col7"},"เครื่องมือ")])],-1),I={class:"tbody"},J={class:"col1"},K={class:"col2"},O={class:"col3"},Q={class:"col7"},R={class:"group-icon"},W=["onClick"],X=["onClick"],Y={key:0,class:"tbody-row"},Z=t("td",{colspan:"4"},"ไม่มีข้อมูล",-1),$=[Z],tt={class:"group-footer"};function et(a,e,h,at,s,l){const p=n("cpn-input"),_=n("cpn-pagination"),g=n("cpn-modal-alert"),m=n("cpn-loading");return r(),i("div",V,[t("div",D,[t("div",M,[t("div",N,[t("div",S,[B,E,t("button",{type:"button",class:"add-department",onClick:e[0]||(e[0]=o=>l.addClick())},j)]),t("div",z,[t("div",T,[d(p,{modelValue:s.data.search,"onUpdate:modelValue":e[1]||(e[1]=o=>s.data.search=o),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=o=>l.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),U,t("div",q,[t("table",G,[H,t("tbody",I,[(r(!0),i(y,null,b(s.data.table,(o,u)=>(r(),i("tr",{class:"tbody-row",key:u},[t("td",J,c(o.code),1),t("td",K,c(o.department_short_name),1),t("td",O,c(o.department_full_name),1),t("td",Q,[t("div",R,[t("img",{onClick:f=>l.editClick(o),src:w,alt:"",class:"image-pencil pointer"},null,8,W),t("img",{onClick:f=>l.deleteClick(o),src:P,alt:"",class:"image-trash pointer"},null,8,X)])])]))),128)),s.data.table.length==0?(r(),i("tr",Y,$)):x("",!0)])])]),t("div",tt,[d(_,{page:s.data.page,total:s.data.total,lastPage:s.data.lastPage,perPage:s.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),d(g,{modalAlert:s.modalAlert},null,8,["modalAlert"]),d(m,{show:s.showLoading},null,8,["show"])])}const rt=k(L,[["render",et]]);export{rt as default};
