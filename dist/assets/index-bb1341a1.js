import{_ as P}from"./users-cog-duotone-50670cb2.js";import{_ as v}from"./plus-circle-duotone-64bd32fe.js";import{_ as w}from"./pencil-alt-duotone-d85ba34f.js";import{_ as y}from"./trash-alt-duotone-12d94c28.js";import{_ as C,r as l,o as i,c as n,a as e,h as k,b as d,F as b,i as x,j as A,t as g}from"./index-6f9b4dc9.js";const L={name:"org-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"organization-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"organization-edit",params:{id:a.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apiorg()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apiorg()},apiorg(){this.data.table=[],this.showLoading=!0,this.axios.get("/organization",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(a=>{this.showLoading=!1,a.data.data.filter(t=>{this.data.total=t.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบกระทรวง",message:`“${a.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0,t.axios.delete(`/organization/${a.id}`).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการลบกระทรวงสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.apiorg()}}}).catch(c=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}})}}}},mounted(){var a,t;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((t=this.$route.query)==null?void 0:t.perPage)||this.data.perPage,this.apiorg()}},V={class:"master-org-inex"},M={class:"group-overflow"},z={class:"detail"},N={class:"group-head"},S={class:"group-first"},q={class:"group-end"},B={class:"search"},E={class:"group-body"},F={class:"table-department-inex"},j={class:"tbody"},D={class:"col1"},T={class:"col2"},U={class:"col7"},G={class:"group-icon"},H=["onClick"],I=["onClick"],J={key:0,class:"tbody-row"},K={class:"group-footer"};function O(a,t,c,Q,s,r){const p=l("cpn-input"),h=l("cpn-pagination"),m=l("cpn-modal-alert"),_=l("cpn-loading");return i(),n("div",V,[e("div",M,[e("div",z,[e("div",N,[e("div",S,[t[4]||(t[4]=e("img",{src:P,alt:"",class:"icon-users-cog"},null,-1)),t[5]||(t[5]=e("div",{class:"name"},"กระทรวง",-1)),e("button",{type:"button",class:"add-department",onClick:t[0]||(t[0]=o=>r.addClick())},t[3]||(t[3]=[e("div",{class:"group-image"},[e("img",{src:v,alt:"",class:"icon-plus"}),k(" เพิ่มกระทรวง ")],-1)]))]),e("div",q,[e("div",B,[d(p,{modelValue:s.data.search,"onUpdate:modelValue":t[1]||(t[1]=o=>s.data.search=o),name:"search",type:"text",searchFlag:!0,onSearchClick:t[2]||(t[2]=o=>r.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),t[8]||(t[8]=e("div",{class:"line"},null,-1)),e("div",E,[e("table",F,[t[7]||(t[7]=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"},"ชื่อกระทรวง"),e("th",{class:"col2"},"วันที่สร้าง"),e("th",{class:"col7"},"เครื่องมือ")])],-1)),e("tbody",j,[(i(!0),n(b,null,x(s.data.table,(o,u)=>(i(),n("tr",{class:"tbody-row",key:u},[e("td",D,g(o.name),1),e("td",T,g(o.created_at),1),e("td",U,[e("div",G,[e("img",{onClick:f=>r.editClick(o),src:w,alt:"",class:"image-pencil pointer"},null,8,H),e("img",{onClick:f=>r.deleteClick(o),src:y,alt:"",class:"image-trash pointer"},null,8,I)])])]))),128)),s.data.table.length==0?(i(),n("tr",J,t[6]||(t[6]=[e("td",{colspan:"4"},"ไม่มีข้อมูล",-1)]))):A("",!0)])])]),e("div",K,[d(h,{page:s.data.page,total:s.data.total,lastPage:s.data.lastPage,perPage:s.data.perPage,onPageChange:r.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),d(m,{modalAlert:s.modalAlert},null,8,["modalAlert"]),d(_,{show:s.showLoading},null,8,["show"])])}const $=C(L,[["render",O]]);export{$ as default};
