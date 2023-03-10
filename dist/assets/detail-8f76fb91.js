import{_ as S,l as V,r as p,o as n,c as r,a as t,t as h,j as i,b as c,d as q,i as _,w as L,v as A,F as C,h as x,n as g,g as M,k as U}from"./index-014b7ee1.js";import{_ as D,a as E,b as I}from"./line-up-32057639.js";import{_ as P}from"./user-crown-duotone-30417741.js";const F="/assets/crown-duotone-c5406971.svg",N="/assets/user-crown-duotoneffffff-d1278e98.svg";const B={name:"user-manage-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{fname:"",lname:"",username:"",password:"",email:"",department_id:"",level:[],birthdate:"",optionSelect:{department:[],roles:[]}}}},components:{date:V},methods:{keyupDepartment(e){this.data.optionSelect.department=[],this.axios.get("/master-data/department",{params:{keyword:e.target.value}}).then(a=>{a.data.data&&(a.data.data.filter(l=>(l.value=l.id,l.name=l.department_full_name,l)),this.data.optionSelect.department=a.data.data)})},back(){this.$router.push({name:"user-manage",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.username="",this.data.password="",this.data.email="",this.data.department_id="",this.data.level=[],this.data.birthdate=""},onSubmit(){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){let a=[];if(e.data.level.filter(l=>{l.flag="delete",a.push(l)}),e.data.optionSelect.roles.filter(l=>{l.flag="add",l.check&&a.push(l)}),e.edit){let l={fname:e.data.fname,lname:e.data.lname,email:e.data.email,department_id:parseInt(e.data.department_id),username:e.data.username,password:e.data.password,roles:a,birthdate:e.data.birthdate};e.showLoading=!0,e.axios.put(`/user/${e.$route.params.id}`,l).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขผู้ใช้งานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(u=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:u.response.data.message}})}else{let l={fname:e.data.fname,lname:e.data.lname,email:e.data.email,department_id:parseInt(e.data.department_id),username:e.data.username,password:e.data.password,roles:a,birthdate:e.data.birthdate};e.showLoading=!0,e.axios.post("/user",l).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างผู้ใช้งานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(u=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:u.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/user/${this.$route.params.id}`).then(e=>{this.showLoading=!1,this.data.fname=e.data.data.fname,this.data.lname=e.data.data.lname,this.data.username=e.data.data.username,this.data.password=e.data.data.password,this.data.email=e.data.data.email,this.data.department_id=e.data.data.department_id,this.data.birthdate=e.data.data.birthdate,this.data.level=e.data.data.roles,this.data.optionSelect.roles.filter(a=>{a.check=!1,e.data.data.roles.filter(l=>{l.role_id==a.role_id&&(a.check=!0)})})}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},apiMaster(){this.showLoading=!0;const e=this.axios.get("/master-data/department"),a=this.axios.get("/master-data/role");this.axios.all([e,a]).then(this.axios.spread((...l)=>{this.showLoading=!1;const u=l[0],s=l[1];u.data.data.filter(d=>(d.value=d.id,d.name=d.department_full_name,d)),s.data.data.filter(d=>(d.role_id=d.id,d)),this.data.optionSelect.department=u.data.data,this.data.optionSelect.roles=s.data.data,this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}},mounted(){this.apiMaster()}},j={class:"user-detail"},z={class:"group-overflow"},K={class:"detail"},T={class:"group-head"},G={class:"group-first"},H=t("img",{src:D,alt:"",class:"icon-users"},null,-1),J={class:"name"},O={class:"group-end"},Q=t("img",{src:E,class:"icon-back"},null,-1),R=t("img",{src:I,class:"icon-line"},null,-1),W=t("div",{class:"line"},null,-1),X={class:"group-detail"},Y={class:"group-between"},Z={class:"group-input left"},$=t("div",{class:"name"},[i("ชื่อ"),t("span",{class:"required"},"*")],-1),ee={class:"group-input"},te=t("div",{class:"name"},[i("นามสกุล"),t("span",{class:"required"},"*")],-1),ae={class:"group-between"},se={class:"group-input left"},oe={class:"name"},le={key:0,class:"required"},de={class:"group-input"},ie={class:"name"},ne={key:0,class:"required"},re={class:"group-between"},ce={class:"group-input left"},ue=t("div",{class:"name"},[i("Email "),t("span",{class:"required"},"*")],-1),me={class:"group-input"},pe=t("div",{class:"name"},[i("หน่วยงาน "),t("span",{class:"required"},"*")],-1),he={class:"group-level"},_e=t("div",{class:"level-first"},[t("img",{src:F,alt:"",class:"icon-crown"}),t("div",{class:"name"},[i("สิทธิ์ "),t("span",{class:"required"},"*")])],-1),ge={class:"level-button"},fe=["onClick"],ve={class:"group-user"},be={key:0,src:N,alt:"",class:"icon-user-crown"},we={key:1,src:P,alt:"",class:"icon-user-crown"},ke=["onClick"],ye=t("div",{class:"line"},null,-1),Se={class:"group-footer"},Ve={class:"footer-left"},qe=t("img",{src:M,alt:"times-circle",class:"icon-times-circle"},null,-1),Le={class:"footer-right"},Ae={type:"submit",class:"button-success"},Ce=t("img",{src:U,alt:"times-circle",class:"icon-check-circle"},null,-1);function xe(e,a,l,u,s,d){const m=p("cpn-input"),f=p("cpn-autoComplete"),v=p("Form"),b=p("cpn-modal-alert"),w=p("cpn-loading");return n(),r("div",j,[t("div",z,[t("div",K,[t("div",T,[t("div",G,[H,t("div",J,h(s.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"),1)]),t("div",O,[t("button",{type:"button",class:"button-back",onClick:a[0]||(a[0]=o=>d.back())},[Q,R,i(" ย้อนกลับ ")])])]),W,c(v,{onSubmit:d.onSubmit,onInvalidSubmit:e.onInvalidSubmit},{default:q(()=>[t("div",X,[t("div",Y,[t("div",Z,[$,c(m,{modelValue:s.data.fname,"onUpdate:modelValue":a[1]||(a[1]=o=>s.data.fname=o),name:"fname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",ee,[te,c(m,{modelValue:s.data.lname,"onUpdate:modelValue":a[2]||(a[2]=o=>s.data.lname=o),name:"lname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",ae,[t("div",se,[t("div",oe,[i("ชื่อผู้ใช้งาน "),s.edit?_("",!0):(n(),r("span",le,"*"))]),c(m,{modelValue:s.data.username,"onUpdate:modelValue":a[3]||(a[3]=o=>s.data.username=o),name:"Usern",rules:s.edit?"":"required",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","rules","disabled"])]),t("div",de,[t("div",ie,[i("รหัสผ่าน "),s.edit?_("",!0):(n(),r("span",ne,"*"))]),c(m,{modelValue:s.data.password,"onUpdate:modelValue":a[4]||(a[4]=o=>s.data.password=o),name:"passw",type:"password",rules:s.edit?"":"required",disabled:s.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","rules","disabled"])])]),t("div",re,[t("div",ce,[ue,c(m,{modelValue:s.data.email,"onUpdate:modelValue":a[5]||(a[5]=o=>s.data.email=o),name:"email",rules:"required|email",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",me,[pe,c(f,{modelValue:s.data.department_id,"onUpdate:modelValue":a[6]||(a[6]=o=>s.data.department_id=o),name:"department",placeholder:"กรุณาระบุ",rules:"required",onKeyup:a[7]||(a[7]=o=>d.keyupDepartment(o)),optionSelect:s.data.optionSelect.department},null,8,["modelValue","optionSelect"])])])]),L(t("div",he,[_e,t("div",ge,[(n(!0),r(C,null,x(s.data.optionSelect.roles,(o,k)=>(n(),r("div",{key:k},[o.id==1?(n(),r("button",{key:0,type:"button",class:g(["button-admin",o.check?"active":""]),onClick:y=>o.check=!o.check},[t("div",ve,[o.check?(n(),r("img",be)):(n(),r("img",we)),i(" "+h(o.desc),1)])],10,fe)):(n(),r("button",{key:1,type:"button",class:g(["button-roles",o.check?"active":""]),onClick:y=>o.check=!o.check},h(o.desc),11,ke))]))),128))])],512),[[A,s.data.optionSelect.roles.length>0]]),ye,t("div",Se,[t("div",Ve,[t("button",{type:"button",class:"button-danger",onClick:a[8]||(a[8]=o=>d.cancelClick())},[qe,i(" ยกเลิก ")])]),t("div",Le,[t("button",Ae,[Ce,i(" "+h(s.edit?"ยืนยันแก้ไขผู้ใช้งาน":"ยืนยันสร้างผู้ใช้งาน"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),c(b,{modalAlert:s.modalAlert},null,8,["modalAlert"]),c(w,{show:s.showLoading},null,8,["show"])])}const Ee=S(B,[["render",xe]]);export{Ee as default};
