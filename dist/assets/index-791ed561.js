import{_ as b,r as l,o as c,c as n,a as s,i as d,F as k,h as y,b as u,t as a,n as C,w as _,v as h,j as p}from"./index-7a328f4c.js";import{_ as x,a as A}from"./pencil-alt-duotone-a279d8e1.js";import{_ as L}from"./plus-circle-duotone-64bd32fe.js";import{_ as P}from"./user-crown-duotone-30417741.js";import{_ as $}from"./trash-alt-duotone-12d94c28.js";const M="/assets/badge-sheriff-duotone-96ec685f.svg";const U={name:"user-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:50}}},methods:{addClick(){this.$router.push({name:"user-create"}).catch(()=>{})},editClick(o){this.$router.push({name:"user-edit",params:{id:o.id}}).catch(()=>{})},pageChange(o){this.data.perPage=o.perPage,this.data.page=o.page,this.apiUser()},search(){this.data.status=!0,this.data.perPage=50,this.data.page=1,this.apiUser()},apiUser(){this.data.table=[],this.showLoading=!0,this.axios.get("/user",{}).then(o=>{this.showLoading=!1,o.data.data.filter(t=>{t.permission_id=t.role_id,t.permission_name=t.role_name}),this.data.table=o.data.data}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},deleteClick(o){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบผู้ใช้งาน",message:`“${o.fname}  ${o.lname}”  ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0,t.axios.delete(`/user/${o.id}`).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการลบผู้ใช้งานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.apiUser()}}}).catch(m=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:m.response.data.message}})}}}},mounted(){this.apiUser()}},D={class:"user-inex"},E={class:"group-overflow"},N={class:"detail"},S={class:"group-head"},V={class:"group-first"},B=s("img",{src:x,alt:"",class:"icon-users-cog"},null,-1),z=s("div",{class:"name"},"ผู้ใช้งาน",-1),F=s("div",{class:"group-image"},[s("img",{src:L,alt:"",class:"icon-plus"}),p(" เพิ่มผู้ใช้งาน ")],-1),j=[F],T={class:"group-end"},q=s("div",{class:"line"},null,-1),G={class:"group-body"},H={class:"table-user-inex"},I=s("thead",{class:"thead"},[s("tr",{class:"thead-row"},[s("th",{class:"col1"},"ไอดี"),s("th",{class:"col2"},"ชื่อ-นามสกุล"),s("th",{class:"col3"},"หน่วยงาน"),s("th",{class:"col4"},"ชื่อผู้ใช้งาน"),s("th",{class:"col5"},"Email"),s("th",{class:"col6"},"สิทธิ์"),s("th",{class:"col7"},"เครื่องมือ")])],-1),J={class:"tbody"},K={class:"col1"},O={class:"col2"},Q={class:"col3"},R={class:"col4"},W={class:"col5"},X={class:"col6"},Y={class:"group-col6"},Z={src:P,alt:"",class:"icon-user-crown"},ss={src:M,alt:"",class:"icon-badge-sheriff"},es={class:"col6-detail"},ts=s("div",{class:"image-size"},null,-1),os={class:"col7"},as={class:"group-icon"},is=["onClick"],ls=["onClick"],cs={key:0,class:"tbody-row"},ns=s("td",{colspan:"7"},"ไม่มีข้อมูล",-1),rs=[ns];function ds(o,t,m,_s,i,r){l("cpn-input"),l("cpn-pagination");const g=l("cpn-modal-alert"),f=l("cpn-loading");return c(),n("div",D,[s("div",E,[s("div",N,[s("div",S,[s("div",V,[B,z,s("button",{type:"button",class:"add-user",onClick:t[0]||(t[0]=e=>r.addClick())},j)]),s("div",T,[d("",!0)])]),q,s("div",G,[s("table",H,[I,s("tbody",J,[(c(!0),n(k,null,y(i.data.table,(e,v)=>(c(),n("tr",{class:"tbody-row",key:v},[s("td",K,a(e.id),1),s("td",O,a(e.fname)+" "+a(e.lname),1),s("td",Q,a(e.department_name),1),s("td",R,a(e.username),1),s("td",W,a(e.email),1),s("td",X,[s("div",Y,[s("span",{class:C(["span",e.permission_id==1?"admin1":e.permission_id==2?"admin2":""])},[_(s("img",Z,null,512),[[h,e.permission_id==1]]),_(s("img",ss,null,512),[[h,e.permission_id==2]]),p(" "+a(e.permission_name),1)],2),_(s("div",es,[p(a(e.levelDesc)+" ",1),ts],512),[[h,e.permission_id!=1&&e.permission_id!=2&&e.levelDesc!=""]])])]),s("td",os,[s("div",as,[s("img",{onClick:w=>r.editClick(e),src:A,alt:"",class:"image-pencil pointer"},null,8,is),s("img",{onClick:w=>r.deleteClick(e),src:$,alt:"",class:"image-trash pointer"},null,8,ls)])])]))),128)),i.data.table.length==0?(c(),n("tr",cs,rs)):d("",!0)])])]),d("",!0)])]),u(g,{modalAlert:i.modalAlert},null,8,["modalAlert"]),u(f,{show:i.showLoading},null,8,["show"])])}const fs=b(U,[["render",ds]]);export{fs as default};
