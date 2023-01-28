import{_ as m}from"./ballot-duotone-f2459825.js";import{_ as b}from"./plus-circle-duotone-64bd32fe.js";import{_ as k,r as n,o as d,c as i,a as t,b as r,F as y,h as f,i as v,t as l,j as P}from"./index-ad652525.js";const x={name:"booking-out-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:50}}},methods:{addClick(){this.$router.push({name:"booking-out-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"booking-out-edit",params:{id:a.id}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apigetexport()},search(){this.data.status=!0,this.data.perPage=50,this.data.page=1,this.apigetexport()},apigetexport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-out",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(a=>{this.showLoading=!1,a.data.data.filter(e=>{e.speedName=e.speed_name,e.bookingNoN=e.book_out_num,e.bookingSubject=e.subject,e.amtbook=e.department_name,e.date=e.regis_date,e.typename=e.book_type_name,e.prepareBy=e.creater_name,e.statusName=e.status_name,this.data.total=e.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือส่งออก",message:`“${a.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apigetexport()}}}}}},mounted(){this.apigetexport()}},C={class:"booking-out-inex"},N={class:"group-overflow"},A={class:"detail"},V={class:"group-head"},L={class:"group-first"},S=t("img",{src:m,alt:"",class:"icon-users-cog"},null,-1),B=t("div",{class:"name"},"หนังสือส่งออก",-1),M=t("div",{class:"group-image"},[t("img",{src:b,alt:"",class:"icon-plus"}),P(" สร้างหนังสือส่งออก ")],-1),j=[M],F={class:"group-end"},E={class:"search"},z=t("div",{class:"line"},null,-1),D={class:"group-body"},T={class:"table-booking-out-inex"},U=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ความเร่งด่วน"),t("th",{class:"col2"},"เลขที่หนังสือออก"),t("th",{class:"col3"},"ชื่อเรื่อง"),t("th",{class:"col4"},"หน่วยงานปลายทาง"),t("th",{class:"col5"},"ลงวันที่"),t("th",{class:"col6"},"ชนิด"),t("th",{class:"col7"},"ผู้รับผิดชอบ"),t("th",{class:"col8"},"สถานะ")])],-1),q={class:"tbody"},w=["onClick"],G={class:"col1"},H={class:"col2"},I={class:"col3"},J={class:"col4"},K={class:"col5"},O={class:"col6"},Q={class:"col7"},R={class:"col8"},W={key:0,class:"tbody-row"},X=t("td",{colspan:"8"},"ไม่มีข้อมูล",-1),Y=[X],Z={class:"group-footer"};function $(a,e,tt,et,o,c){const h=n("cpn-input"),_=n("cpn-pagination"),p=n("cpn-modal-alert"),g=n("cpn-loading");return d(),i("div",C,[t("div",N,[t("div",A,[t("div",V,[t("div",L,[S,B,t("button",{type:"button",class:"add-booking-out",onClick:e[0]||(e[0]=s=>c.addClick())},j)]),t("div",F,[t("div",E,[r(h,{modelValue:o.data.search,"onUpdate:modelValue":e[1]||(e[1]=s=>o.data.search=s),name:"search",type:"text",searchFlag:!0,onSearch:e[2]||(e[2]=s=>c.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),z,t("div",D,[t("table",T,[U,t("tbody",q,[(d(!0),i(y,null,f(o.data.table,(s,u)=>(d(),i("tr",{class:"tbody-row pointer",key:u,onClick:st=>c.editClick(s)},[t("td",G,l(s.speedName),1),t("td",H,l(s.bookingNoN),1),t("td",I,l(s.bookingSubject),1),t("td",J,l(s.amtbook),1),t("td",K,l(s.date),1),t("td",O,l(s.typename),1),t("td",Q,l(s.prepareBy),1),t("td",R,l(s.statusName),1)],8,w))),128)),o.data.table.length==0?(d(),i("tr",W,Y)):v("",!0)])])]),t("div",Z,[r(_,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:c.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),r(p,{modalAlert:o.modalAlert},null,8,["modalAlert"]),r(g,{show:o.showLoading},null,8,["show"])])}const ct=k(x,[["render",$]]);export{ct as default};
