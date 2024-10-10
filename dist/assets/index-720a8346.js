import{_ as y,r as d,o as c,c as p,a as e,h,b as g,w as r,F as C,i as b,j as k,t as l,n as x,v as n}from"./index-6f9b4dc9.js";import{_ as A}from"./users-cog-duotone-50670cb2.js";import{_ as L}from"./plus-circle-duotone-64bd32fe.js";import{_ as V}from"./user-crown-duotone-30417741.js";import{_ as M}from"./pencil-alt-duotone-d85ba34f.js";import{_ as U}from"./trash-alt-duotone-12d94c28.js";const S="/assets/badge-sheriff-duotone-96ec685f.svg";const D={name:"user-manage-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"user-manage-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"user-manage-edit",params:{id:a.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apiUser()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apiUser()},apiUser(){this.data.table=[],this.showLoading=!0,this.axios.get("/user",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(a=>{this.showLoading=!1,a.data.data.filter(s=>{s.permission_id=s.role_id,s.permission_name=s.role_name,this.data.total=s.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let s=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบผู้ใช้งาน",message:`“${a.fname}  ${a.lname}”  ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){s.showLoading=!0,s.axios.delete(`/user/${a.id}`).then(()=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"success",title:"ทำการลบผู้ใช้งานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.apiUser()}}}).catch(_=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"error",title:"Error",message:_.response.data.message}})}}}},mounted(){var a,s;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((s=this.$route.query)==null?void 0:s.perPage)||this.data.perPage,this.apiUser()}},E={class:"user-inex"},N={class:"group-overflow"},q={class:"detail"},z={class:"group-head"},B={class:"group-first"},F={class:"group-end"},j={class:"search"},T={class:"group-body"},$={class:"table-user-inex"},G={class:"thead"},H={class:"thead-row"},I={class:"col6"},J={class:"tbody"},K={class:"col1"},O={class:"col2"},Q={class:"col3"},R={class:"col4"},W={class:"col5"},X={class:"col6"},Y={class:"group-col6"},Z={src:V,alt:"",class:"icon-user-crown"},ss={src:S,alt:"",class:"icon-badge-sheriff"},es={class:"col6-detail"},ts={class:"col7"},as={class:"group-icon"},os=["onClick"],ls=["onClick"],is={key:0,class:"tbody-row"},rs={class:"group-footer"};function ns(a,s,_,ds,o,i){const m=d("cpn-input"),u=d("cpn-pagination"),f=d("cpn-modal-alert"),v=d("cpn-loading");return c(),p("div",E,[e("div",N,[e("div",q,[e("div",z,[e("div",B,[s[4]||(s[4]=e("img",{src:A,alt:"",class:"icon-users-cog"},null,-1)),s[5]||(s[5]=e("div",{class:"name"},"ผู้ใช้งาน",-1)),e("button",{type:"button",class:"add-user",onClick:s[0]||(s[0]=t=>i.addClick())},s[3]||(s[3]=[e("div",{class:"group-image"},[e("img",{src:L,alt:"",class:"icon-plus"}),h(" เพิ่มผู้ใช้งาน ")],-1)]))]),e("div",F,[e("div",j,[g(m,{modelValue:o.data.search,"onUpdate:modelValue":s[1]||(s[1]=t=>o.data.search=t),name:"search",type:"text",searchFlag:!0,onSearchClick:s[2]||(s[2]=t=>i.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),s[14]||(s[14]=e("div",{class:"line"},null,-1)),e("div",T,[e("table",$,[e("thead",G,[e("tr",H,[s[6]||(s[6]=e("th",{class:"col1"},"ไอดี",-1)),s[7]||(s[7]=e("th",{class:"col2"},"ชื่อ-นามสกุล",-1)),s[8]||(s[8]=e("th",{class:"col3"},"หน่วยงาน",-1)),s[9]||(s[9]=e("th",{class:"col4"},"ชื่อผู้ใช้งาน",-1)),s[10]||(s[10]=e("th",{class:"col5"},"Email",-1)),r(e("th",I,"สิทธิ์",512),[[n,!1]]),s[11]||(s[11]=e("th",{class:"col7"},"เครื่องมือ",-1))])]),e("tbody",J,[(c(!0),p(C,null,b(o.data.table,(t,P)=>(c(),p("tr",{class:"tbody-row",key:P},[e("td",K,l(t.id),1),e("td",O,l(t.fname)+" "+l(t.lname),1),e("td",Q,l(t.department_name),1),e("td",R,l(t.username),1),e("td",W,l(t.email),1),r(e("td",X,[e("div",Y,[e("span",{class:x(["span",t.permission_id==1?"admin1":t.permission_id==2?"admin2":""])},[r(e("img",Z,null,512),[[n,t.permission_id==1]]),r(e("img",ss,null,512),[[n,t.permission_id==2]]),h(" "+l(t.permission_name),1)],2),r(e("div",es,[h(l(t.levelDesc)+" ",1),s[12]||(s[12]=e("div",{class:"image-size"},null,-1))],512),[[n,t.permission_id!=1&&t.permission_id!=2&&t.levelDesc!=""]])])],512),[[n,!1]]),e("td",ts,[e("div",as,[e("img",{onClick:w=>i.editClick(t),src:M,alt:"",class:"image-pencil pointer"},null,8,os),e("img",{onClick:w=>i.deleteClick(t),src:U,alt:"",class:"image-trash pointer"},null,8,ls)])])]))),128)),o.data.table.length==0?(c(),p("tr",is,s[13]||(s[13]=[e("td",{colspan:"7"},"ไม่มีข้อมูล",-1)]))):k("",!0)])])]),e("div",rs,[g(u,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:i.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),g(f,{modalAlert:o.modalAlert},null,8,["modalAlert"]),g(v,{show:o.showLoading},null,8,["show"])])}const us=y(D,[["render",ns]]);export{us as default};
