import{_ as y}from"./users-cog-duotone-50670cb2.js";import{_ as w,r as l,o as i,c as d,a as e,b as n,F as P,h as b,i as x,t as p}from"./index-dbff99ee.js";const C={name:"file-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{pageChange(t){this.data.perPage=t.perPage,this.data.page=t.page,this.apiFileType()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apiFileType()},apiFileType(){this.data.table=[],this.showLoading=!0,this.axios.get("/filetype",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(t=>{this.showLoading=!1,t.data.data.filter(a=>(this.data.total=a.total,a.active_flag=a.active_flag==1,a)),this.data.table=t.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})},change(t){this.showLoading=!0;let a={active_flag:t.active_flag?1:0};this.axios.put("/filetype/"+t.id,a).then(()=>{this.showLoading=!1}).catch(h=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}},mounted(){this.apiFileType()}},V={class:"master-file-inex"},L={class:"group-overflow"},k={class:"detail"},F={class:"group-head"},A=e("div",{class:"group-first"},[e("img",{src:y,alt:"",class:"icon-users-cog"}),e("div",{class:"name"},"ตั้งค่าประเภทไฟล์")],-1),M={class:"group-end"},S={class:"search"},T=e("div",{class:"line"},null,-1),B={class:"group-body"},E={class:"table-department-inex"},N=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"},"ชื่อไฟล์"),e("th",{class:"col2"},"นามสกุลไฟล์"),e("th",{class:"col3"},"เปิดใช้งาน")])],-1),U={class:"tbody"},z={class:"col1"},D={class:"col3"},j={key:0,class:"tbody-row"},q=e("td",{colspan:"4"},"ไม่มีข้อมูล",-1),G=[q],H={class:"group-footer"};function I(t,a,h,J,s,c){const g=l("cpn-input"),_=l("cpn-toggleSwitch"),u=l("cpn-pagination"),m=l("cpn-modal-alert"),f=l("cpn-loading");return i(),d("div",V,[e("div",L,[e("div",k,[e("div",F,[A,e("div",M,[e("div",S,[n(g,{modelValue:s.data.search,"onUpdate:modelValue":a[0]||(a[0]=o=>s.data.search=o),name:"search",type:"text",searchFlag:!0,onSearchClick:a[1]||(a[1]=o=>c.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),T,e("div",B,[e("table",E,[N,e("tbody",U,[(i(!0),d(P,null,b(s.data.table,(o,v)=>(i(),d("tr",{class:"tbody-row",key:v},[e("td",z,p(o.name),1),e("td",{class:"col2",onClick:a[2]||(a[2]=r=>t.apiupdate())},p(o.file_type),1),e("td",D,[n(_,{modelValue:o.active_flag,"onUpdate:modelValue":r=>o.active_flag=r,name:"file_active_flag",onChange:r=>c.change(o)},null,8,["modelValue","onUpdate:modelValue","onChange"])])]))),128)),s.data.table.length==0?(i(),d("tr",j,G)):x("",!0)])])]),e("div",H,[n(u,{page:s.data.page,total:s.data.total,lastPage:s.data.lastPage,perPage:s.data.perPage,onPageChange:c.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),n(m,{modalAlert:s.modalAlert},null,8,["modalAlert"]),n(f,{show:s.showLoading},null,8,["show"])])}const Q=w(C,[["render",I]]);export{Q as default};