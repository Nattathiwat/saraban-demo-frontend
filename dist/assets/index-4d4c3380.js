import{_ as m}from"./ballot-duotone-f2459825.js";import{_ as b}from"./plus-circle-duotone-64bd32fe.js";import{_ as k,r as n,o as d,c as i,a as t,b as r,F as f,h as y,i as v,t as l,j as P}from"./index-c6c955aa.js";const x={name:"booking-out-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:50}}},methods:{addClick(){this.$router.push({name:"booking-out-create"}).catch(()=>{})},editClick(s){this.$router.push({name:"booking-out-edit",params:{id:s.id}}).catch(()=>{})},pageChange(s){this.data.perPage=s.perPage,this.data.page=s.page,this.apigetexport()},search(){this.data.status=!0,this.data.perPage=50,this.data.page=1,this.apigetexport()},apigetexport(){this.data.table=[],this.showLoading=!0,this.axios.get("/booking-out",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page,id:localStorage.getItem("user_id")}}).then(s=>{this.showLoading=!1,s.data.data&&(s.data.data.filter(e=>{e.speedName=e.speed_name,e.bookingNoN=e.book_out_num,e.bookingSubject=e.subject,e.department_name=e.department_name,e.date=e.regis_date,e.typename=e.book_type_name,e.prepareBy=e.creater_name,e.statusName=e.status_name,this.data.total=e.total}),this.data.table=s.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage))}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},deleteClick(s){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบหนังสือส่งออก",message:`“${s.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){e.modalAlert={showModal:!0,type:"success",title:"ทำการลบหนังสือส่งออกสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.apigetexport()}}}}}},mounted(){this.apigetexport()}},C={class:"booking-out-inex"},N={class:"group-overflow"},A={class:"detail"},S={class:"group-head"},V={class:"group-first"},L=t("img",{src:m,alt:"",class:"icon-users-cog"},null,-1),B=t("div",{class:"name"},"หนังสือส่งออก",-1),M=t("div",{class:"group-image"},[t("img",{src:b,alt:"",class:"icon-plus"}),P(" สร้างหนังสือส่งออก ")],-1),j=[M],F={class:"group-end"},E={class:"search"},z=t("div",{class:"line"},null,-1),D={class:"group-body"},I={class:"table-booking-out-inex"},T=t("thead",{class:"thead"},[t("tr",{class:"thead-row"},[t("th",{class:"col1"},"ความเร่งด่วน"),t("th",{class:"col2"},"เลขที่หนังสือออก"),t("th",{class:"col3"},"ชื่อเรื่อง"),t("th",{class:"col4"},"หน่วยงานปลายทาง"),t("th",{class:"col5"},"ลงวันที่"),t("th",{class:"col6"},"ชนิด"),t("th",{class:"col7"},"ผู้รับผิดชอบ"),t("th",{class:"col8"},"สถานะ")])],-1),U={class:"tbody"},q=["onClick"],w={class:"col1"},G={class:"col2"},H={class:"col3"},J={class:"col4"},K={class:"col5"},O={class:"col6"},Q={class:"col7"},R={class:"col8"},W={key:0,class:"tbody-row"},X=t("td",{colspan:"8"},"ไม่มีข้อมูล",-1),Y=[X],Z={class:"group-footer"};function $(s,e,tt,et,o,c){const _=n("cpn-input"),h=n("cpn-pagination"),p=n("cpn-modal-alert"),g=n("cpn-loading");return d(),i("div",C,[t("div",N,[t("div",A,[t("div",S,[t("div",V,[L,B,t("button",{type:"button",class:"add-booking-out",onClick:e[0]||(e[0]=a=>c.addClick())},j)]),t("div",F,[t("div",E,[r(_,{modelValue:o.data.search,"onUpdate:modelValue":e[1]||(e[1]=a=>o.data.search=a),name:"search",type:"text",searchFlag:!0,onSearch:e[2]||(e[2]=a=>c.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),z,t("div",D,[t("table",I,[T,t("tbody",U,[(d(!0),i(f,null,y(o.data.table,(a,u)=>(d(),i("tr",{class:"tbody-row pointer",key:u,onClick:st=>c.editClick(a)},[t("td",w,l(a.speedName),1),t("td",G,l(a.bookingNoN),1),t("td",H,l(a.bookingSubject),1),t("td",J,l(a.department_name),1),t("td",K,l(a.date),1),t("td",O,l(a.typename),1),t("td",Q,l(a.prepareBy),1),t("td",R,l(a.statusName),1)],8,q))),128)),o.data.table.length==0?(d(),i("tr",W,Y)):v("",!0)])])]),t("div",Z,[r(h,{page:o.data.page,total:o.data.total,lastPage:o.data.lastPage,perPage:o.data.perPage,onPageChange:c.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),r(p,{modalAlert:o.modalAlert},null,8,["modalAlert"]),r(g,{show:o.showLoading},null,8,["show"])])}const ct=k(x,[["render",$]]);export{ct as default};