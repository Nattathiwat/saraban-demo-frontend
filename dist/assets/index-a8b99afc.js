import{_ as f}from"./users-cog-duotone-50670cb2.js";import{_ as k}from"./plus-circle-duotone-64bd32fe.js";import{_ as v}from"./pencil-alt-duotone-d85ba34f.js";import{_ as P}from"./trash-alt-duotone-12d94c28.js";import{_ as b,r as i,o as r,c,a as e,b as d,F as w,h as C,i as x,t as n,n as A,j as L}from"./index-0c2ad568.js";const V={name:"record-type-inex",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,data:{search:"",table:[],page:1,total:0,lastPage:0,perPage:10}}},methods:{addClick(){this.$router.push({name:"record-type-create"}).catch(()=>{})},editClick(a){this.$router.push({name:"record-type-edit",params:{id:a.id},query:{page:this.data.page,perPage:this.data.perPage}}).catch(()=>{})},pageChange(a){this.data.perPage=a.perPage,this.data.page=a.page,this.apibooktype()},search(){this.data.status=!0,this.data.perPage=10,this.data.page=1,this.apibooktype()},apibooktype(){this.data.table=[],this.showLoading=!0,this.axios.get("/booktypenote",{params:{keyword:this.data.search,page_size:this.data.perPage,page:this.data.page}}).then(a=>{this.showLoading=!1,a.data.data.filter(t=>{this.data.total=t.total}),this.data.table=a.data.data,this.data.lastPage=Math.ceil(this.data.total/this.data.perPage)}).catch(a=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})},deleteClick(a){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:"คุณยืนยันการลบชนิดบันทึกข้อความ",message:`“${a.name}” ใช่หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){t.showLoading=!0,t.axios.delete(`/booktypenote/${a.id}`).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการลบชนิดบันทึกข้อความสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.apibooktype()}}}).catch(h=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:h.response.data.message}})}}}},mounted(){var a,t;this.data.page=((a=this.$route.query)==null?void 0:a.page)||this.data.page,this.data.perPage=((t=this.$route.query)==null?void 0:t.perPage)||this.data.perPage,this.apibooktype()}},M={class:"master-record-type-inex"},N={class:"group-overflow"},S={class:"detail"},q={class:"group-head"},B={class:"group-first"},E=e("img",{src:f,alt:"",class:"icon-users-cog"},null,-1),F=e("div",{class:"name"},"ชนิดบันทึกข้อความ",-1),z=e("div",{class:"group-image"},[e("img",{src:k,alt:"",class:"icon-plus"}),L(" เพิ่มชนิดบันทึกข้อความ ")],-1),j=[z],D={class:"group-end"},T={class:"search"},U=e("div",{class:"line"},null,-1),G={class:"group-body"},H={class:"table-department-inex"},I=e("thead",{class:"thead"},[e("tr",{class:"thead-row"},[e("th",{class:"col1"},"ชื่อชนิดบันทึกข้อความ"),e("th",{class:"col2"},"รายละเอียด"),e("th",{class:"col3"},"วันที่สร้าง"),e("th",{class:"col7"},"เครื่องมือ")])],-1),J={class:"tbody"},K={class:"col1"},O={class:"col2"},Q={class:"col3"},R={class:"col7"},W={class:"group-icon"},X=["onClick"],Y=["onClick"],Z={key:0,class:"tbody-row"},$=e("td",{colspan:"4"},"ไม่มีข้อมูล",-1),ee=[$],te={class:"group-footer"};function ae(a,t,h,se,s,l){const p=i("cpn-input"),_=i("cpn-pagination"),g=i("cpn-modal-alert"),m=i("cpn-loading");return r(),c("div",M,[e("div",N,[e("div",S,[e("div",q,[e("div",B,[E,F,e("button",{type:"button",class:"add-department",onClick:t[0]||(t[0]=o=>l.addClick())},j)]),e("div",D,[e("div",T,[d(p,{modelValue:s.data.search,"onUpdate:modelValue":t[1]||(t[1]=o=>s.data.search=o),name:"search",type:"text",searchFlag:!0,onSearchClick:t[2]||(t[2]=o=>l.search()),placeholder:"กรุณากรอกข้อมูลที่ต้องการค้นหา"},null,8,["modelValue"])])])]),U,e("div",G,[e("table",H,[I,e("tbody",J,[(r(!0),c(w,null,C(s.data.table,(o,u)=>(r(),c("tr",{class:"tbody-row",key:u},[e("td",K,n(o.name),1),e("td",O,n(o.desc),1),e("td",Q,n(o.created_at),1),e("td",R,[e("div",W,[e("div",{class:A(["image-status",o.active_flag==1?"active":""])},null,2),e("img",{onClick:y=>l.editClick(o),src:v,alt:"",class:"image-pencil pointer"},null,8,X),e("img",{onClick:y=>l.deleteClick(o),src:P,alt:"",class:"image-trash pointer"},null,8,Y)])])]))),128)),s.data.table.length==0?(r(),c("tr",Z,ee)):x("",!0)])])]),e("div",te,[d(_,{page:s.data.page,total:s.data.total,lastPage:s.data.lastPage,perPage:s.data.perPage,onPageChange:l.pageChange},null,8,["page","total","lastPage","perPage","onPageChange"])])])]),d(g,{modalAlert:s.modalAlert},null,8,["modalAlert"]),d(m,{show:s.showLoading},null,8,["show"])])}const de=b(V,[["render",ae]]);export{de as default};
