import{_ as u}from"./ballot-duotone-f2459825.js";import{_ as b}from"./plus-circle-duotone-64bd32fe.js";import{_ as k,r as n,o as d,c as r,a as t,b as i,F as f,h as v,i as x,t as l,j as y}from"./index-387e81e0.js";const P={name:"export-book-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:50}}},methods:{addClick(){this.$router.push({name:"export-book-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"export-book-edit",params:{id:a.id}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apiDepartment()},search(){this.data.status=!0,this.data.perPage=50,this.data.page=1,this.apiDepartment()},apiDepartment(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-out",{params:{}}).then(a=>{this.showLoading=!1,a.data.data.filter(e=>{e.speedName=e.speed_name,e.bookingSubject=e.subject,e.amtbook=e.department_name}),this.data.table=a.data.data}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือส่งออก",message:`“${a.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apiDepartment()}}}}}},mounted(){this.apiDepartment()}},C={class:"export-book-inex"},w={class:"group-overflow"},A={class:"detail"},N={class:"group-head"},V={class:"group-first"},D=t("img",{src:u,alt:"",class:"icon-users-cog"},null,-1),L=t("div",{class:"name"},"หนังสือส่งออก",-1),S=t("div",{class:"group-image"},[t("img",{src:b,alt:"",class:"icon-plus"}),y(" สร้างหนังสือส่งออก ")],-1),j=[S],B={class:"group-end"},M={class:"search"},F=t("div",{class:"line"},null,-1),E={class:"group-body"},T={class:"table-export-book-inex"},U=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ความเร่งด่วน"),t("th",{class:"col2"},"เลขที่หนังสือออก"),t("th",{class:"col3"},"ชื่อเรื่อง"),t("th",{class:"col4"},"หน่วยงานปลายทาง"),t("th",{class:"col5"},"ลงวันที่"),t("th",{class:"col6"},"ชนิด"),t("th",{class:"col7"},"ผู้รับผิดชอบ"),t("th",{class:"col8"},"สถานะ")])],-1),q={class:"tbody"},z=["onClick"],G={class:"col1"},H={class:"col2"},I={class:"col3"},J={class:"col4"},K={class:"col5"},O={class:"col6"},Q={class:"col7"},R={class:"col8"},W={key:0,class:"tbody-row"},X=t("td",{colspan:"8"},"ไม่มีข้อมูล",-1),Y=[X],Z={class:"group-footer"};function $(a,e,tt,et,o,c){const h=n("cpn-input"),_=n("cpn-pagination"),p=n("cpn-modal-alert"),g=n("cpn-loading");return d(),r("div",C,[t("div",w,[t("div",A,[t("div",N,[t("div",V,[D,L,t("button",{type:"button",class:"add-export-book",onClick:e[0]||(e[0]=s=>c.addClick())},j)]),t("div",B,[t("div",M,[i(h,{modelValue:o.data.search,"onUpdate:modelValue":e[1]||(e[1]=s=>o.data.search=s),name:"search",type:"search",searchFlag:!0,onSearch:e[2]||(e[2]=s=>c.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),F,t("div",E,[t("table",T,[U,t("tbody",q,[(d(!0),r(f,null,v(o.data.table,(s,m)=>(d(),r("tr",{class:"tbody-row pointer",key:m,onClick:st=>c.editClick(s)},[t("td",G,l(s.speedName),1),t("td",H,l(s.bookingNoN),1),t("td",I,l(s.bookingSubject),1),t("td",J,l(s.amtbook),1),t("td",K,l(s.date),1),t("td",O,l(s.typename),1),t("td",Q,l(s.prepareBy),1),t("td",R,l(s.statusName),1)],8,z))),128)),o.data.table.length==0?(d(),r("tr",W,Y)):x("",!0)])])]),t("div",Z,[i(_,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:c.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),i(p,{modalAlert:o.modalAlert},null,8,["modalAlert"]),i(g,{show:o.showLoading},null,8,["show"])])}const ct=k(P,[["render",$]]);export{ct as default};
