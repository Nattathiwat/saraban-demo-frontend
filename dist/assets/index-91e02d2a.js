import{_ as y,r,o as d,c as _,a as s,b as h,w as c,v as n,F as C,h as b,i as k,t as i,n as x,j as p}from"./index-a70e72f5.js";import{_ as A}from"./users-cog-duotone-50670cb2.js";import{_ as L}from"./plus-circle-duotone-64bd32fe.js";import{_ as V}from"./user-crown-duotone-30417741.js";import{_ as M}from"./pencil-alt-duotone-d85ba34f.js";import{_ as U}from"./trash-alt-duotone-12d94c28.js";const S="/assets/badge-sheriff-duotone-96ec685f.svg";const D={name:"user-manage-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"user-manage-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"user-manage-edit",params:{id:a.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apiUser()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apiUser()},apiUser(){this.data.table=[],this.showLoading=!0,this.axios.get("/user",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(a=>{this.showLoading=!1,a.data.data.filter(e=>{e.permission_id=e.role_id,e.permission_name=e.role_name,this.data.total=e.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบผู้ใช้งาน",message:`“${a.fname}  ${a.lname}”  ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.showLoading=!0,e.axios.delete(`/user/${a.id}`).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการลบผู้ใช้งานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apiUser()}}}).catch(g=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:g.response.data.message}})}}}},mounted(){var a,e;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((e=this.$route.query)==null?void 0:e.perPage)||this.data.perPage,this.apiUser()}},E={class:"user-inex"},N={class:"group-overflow"},q={class:"detail"},z={class:"group-head"},B={class:"group-first"},F=s("img",{src:A,alt:"",class:"icon-users-cog"},null,-1),j=s("div",{class:"name"},"ผู้ใช้งาน",-1),T=s("div",{class:"group-image"},[s("img",{src:L,alt:"",class:"icon-plus"}),p(" เพิ่มผู้ใช้งาน ")],-1),$=[T],G={class:"group-end"},H={class:"search"},I=s("div",{class:"line"},null,-1),J={class:"group-body"},K={class:"table-user-inex"},O={class:"thead"},Q={class:"thead-row"},R=s("th",{class:"col1"},"ไอดี",-1),W=s("th",{class:"col2"},"ชื่อ-นามสกุล",-1),X=s("th",{class:"col3"},"หน่วยงาน",-1),Y=s("th",{class:"col4"},"ชื่อผู้ใช้งาน",-1),Z=s("th",{class:"col5"},"Email",-1),ss={class:"col6"},es=s("th",{class:"col7"},"เครื่องมือ",-1),ts={class:"tbody"},as={class:"col1"},os={class:"col2"},is={class:"col3"},ls={class:"col4"},cs={class:"col5"},ns={class:"col6"},rs={class:"group-col6"},ds={src:V,alt:"",class:"icon-user-crown"},_s={src:S,alt:"",class:"icon-badge-sheriff"},hs={class:"col6-detail"},ps=s("div",{class:"image-size"},null,-1),gs={class:"col7"},ms={class:"group-icon"},us=["onClick"],fs=["onClick"],vs={key:0,class:"tbody-row"},Ps=s("td",{colspan:"7"},"ไม่มีข้อมูล",-1),ws=[Ps],ys={class:"group-footer"};function Cs(a,e,g,bs,o,l){const m=r("cpn-input"),u=r("cpn-pagination"),f=r("cpn-modal-alert"),v=r("cpn-loading");return d(),_("div",E,[s("div",N,[s("div",q,[s("div",z,[s("div",B,[F,j,s("button",{type:"button",class:"add-user",onClick:e[0]||(e[0]=t=>l.addClick())},$)]),s("div",G,[s("div",H,[h(m,{modelValue:o.data.search,"onUpdate:modelValue":e[1]||(e[1]=t=>o.data.search=t),name:"search",type:"text",searchFlag:!0,onSearchClick:e[2]||(e[2]=t=>l.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),I,s("div",J,[s("table",K,[s("thead",O,[s("tr",Q,[R,W,X,Y,Z,c(s("th",ss,"สิทธิ์",512),[[n,!1]]),es])]),s("tbody",ts,[(d(!0),_(C,null,b(o.data.table,(t,P)=>(d(),_("tr",{class:"tbody-row",key:P},[s("td",as,i(t.id),1),s("td",os,i(t.fname)+" "+i(t.lname),1),s("td",is,i(t.department_name),1),s("td",ls,i(t.username),1),s("td",cs,i(t.email),1),c(s("td",ns,[s("div",rs,[s("span",{class:x(["span",t.permission_id==1?"admin1":t.permission_id==2?"admin2":""])},[c(s("img",ds,null,512),[[n,t.permission_id==1]]),c(s("img",_s,null,512),[[n,t.permission_id==2]]),p(" "+i(t.permission_name),1)],2),c(s("div",hs,[p(i(t.levelDesc)+" ",1),ps],512),[[n,t.permission_id!=1&&t.permission_id!=2&&t.levelDesc!=""]])])],512),[[n,!1]]),s("td",gs,[s("div",ms,[s("img",{onClick:w=>l.editClick(t),src:M,alt:"",class:"image-pencil pointer"},null,8,us),s("img",{onClick:w=>l.deleteClick(t),src:U,alt:"",class:"image-trash pointer"},null,8,fs)])])]))),128)),o.data.table.length==0?(d(),_("tr",vs,ws)):k("",!0)])])]),s("div",ys,[h(u,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),h(f,{modalAlert:o.modalAlert},null,8,["modalAlert"]),h(v,{show:o.showLoading},null,8,["show"])])}const Us=y(D,[["render",Cs]]);export{Us as default};
