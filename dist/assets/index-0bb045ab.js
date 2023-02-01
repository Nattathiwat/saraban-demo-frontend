import{_ as f,a as w}from"./pencil-alt-duotone-a279d8e1.js";import{_ as v}from"./plus-circle-duotone-64bd32fe.js";import{_ as b}from"./trash-alt-duotone-12d94c28.js";import{_ as k,r as l,o as r,c as i,a as t,i as c,F as y,h as C,b as h,t as d,j as x}from"./index-387e81e0.js";const A={name:"department-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:50}}},methods:{addClick(){this.$router.push({name:"department-create"}).catch(()=>{})},editClick(e){this.$router.push({name:"department-edit",params:{id:e.id}}).catch(()=>{})},pageChange(e){this.data.perPage=e.perPage,this.data.page=e.page,this.apiDepartment()},search(){this.data.status=!0,this.data.perPage=50,this.data.page=1,this.apiDepartment()},apiDepartment(){this.data.table=[],this.showLoading=!0,this.axios.get("/department").then(e=>{this.showLoading=!1,this.data.table=e.data.data}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},deleteClick(e){let s=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหน่วยงาน",message:`“${e.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){s.showLoading=!0,s.axios.delete(`/department/${e.id}`).then(()=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"success",title:"ทำการลบหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.apiDepartment()}}}).catch(_=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"error",title:"Error",message:_.response.data.message}})}}}},mounted(){this.apiDepartment()}},L={class:"department-inex"},P={class:"group-overflow"},D={class:"detail"},M={class:"group-head"},N={class:"group-first"},V=t("img",{src:f,alt:"",class:"icon-users-cog"},null,-1),$=t("div",{class:"name"},"หน่วยงาน",-1),B=t("div",{class:"group-image"},[t("img",{src:v,alt:"",class:"icon-plus"}),x(" เพิ่มหน่วยงาน ")],-1),E=[B],S={class:"group-end"},F=t("div",{class:"line"},null,-1),j={class:"group-body"},T={class:"table-department-inex"},q=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ไอดี"),t("th",{class:"col2"},"ชื่อย่อหน่วยงาน"),t("th",{class:"col3"},"ชื่อหน่วยงาน"),t("th",{class:"col7"},"เครื่องมือ")])],-1),z={class:"tbody"},G={class:"col1"},H={class:"col2"},I={class:"col3"},J={class:"col7"},K={class:"group-icon"},O=["onClick"],Q=["onClick"],R={key:0,class:"tbody-row"},U=t("td",{colspan:"4"},"ไม่มีข้อมูล",-1),W=[U];function X(e,s,_,Y,o,n){l("cpn-input"),l("cpn-pagination");const p=l("cpn-modal-alert"),m=l("cpn-loading");return r(),i("div",L,[t("div",P,[t("div",D,[t("div",M,[t("div",N,[V,$,t("button",{type:"button",class:"add-department",onClick:s[0]||(s[0]=a=>n.addClick())},E)]),t("div",S,[c("",!0)])]),F,t("div",j,[t("table",T,[q,t("tbody",z,[(r(!0),i(y,null,C(o.data.table,(a,g)=>(r(),i("tr",{class:"tbody-row",key:g},[t("td",G,d(a.id),1),t("td",H,d(a.department_short_name),1),t("td",I,d(a.department_full_name),1),t("td",J,[t("div",K,[t("img",{onClick:u=>n.editClick(a),src:w,alt:"",class:"image-pencil pointer"},null,8,O),t("img",{onClick:u=>n.deleteClick(a),src:b,alt:"",class:"image-trash pointer"},null,8,Q)])])]))),128)),o.data.table.length==0?(r(),i("tr",R,W)):c("",!0)])])]),c("",!0)])]),h(p,{modalAlert:o.modalAlert},null,8,["modalAlert"]),h(m,{show:o.showLoading},null,8,["show"])])}const at=k(A,[["render",X]]);export{at as default};