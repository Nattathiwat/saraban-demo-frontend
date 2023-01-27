import{_ as y,l as S,r as i,o as m,c as u,a as e,t as p,j as l,b as d,d as A,i as _,n as h,w as v,v as g,g as q,k as L}from"./index-7a328f4c.js";import{_ as C,a as M,b as U}from"./line-up-32057639.js";import{_ as x}from"./user-crown-duotone-30417741.js";const E="/assets/crown-duotone-c5406971.svg",I="/assets/user-crown-duotoneffffff-d1278e98.svg";const D={name:"user-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{fname:"",lname:"",username:"",password:"",email:"",department_id:"",level:2,birthdate:"",optionSelect:{department:[{name:"สำนักงานเลขาธิการ",value:"สำนักงานเลขาธิการ"}]}}}},components:{date:S},methods:{levelClick(t){this.data.level=t},back(){this.$router.push({name:"user"}).catch(()=>{})},cancelClick(){this.back(),this.data.username="",this.data.password="",this.data.email="",this.data.department_id="",this.data.level=2,this.data.birthdate=""},onSubmit(){let t=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(t.edit){let s={fname:t.data.fname,lname:t.data.lname,email:t.data.email,department_id:parseInt(t.data.department_id),username:t.data.username,password:t.data.password,role_id:t.data.level,birthdate:t.data.birthdate};t.showLoading=!0,t.axios.put(`/user/${t.$route.params.id}`,s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขผู้ใช้งานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(c=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}})}else{let s={fname:t.data.fname,lname:t.data.lname,email:t.data.email,department_id:parseInt(t.data.department_id),username:t.data.username,password:t.data.password,role_id:t.data.level,birthdate:t.data.birthdate};t.showLoading=!0,t.axios.post("/user",s).then(()=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างผู้ใช้งานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){t.back()}}}).catch(c=>{t.showLoading=!1,t.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/user/${this.$route.params.id}`).then(t=>{this.showLoading=!1,this.data.fname=t.data.data.fname,this.data.lname=t.data.data.lname,this.data.username=t.data.data.username,this.data.password=t.data.data.password,this.data.email=t.data.data.email,this.data.department_id=t.data.data.department_id,this.data.birthdate=t.data.data.birthdate,this.data.level=t.data.data.role_id}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})},apiMaster(){this.showLoading=!0,this.axios.get("/department").then(t=>{this.showLoading=!1,t.data.data.filter(s=>(s.value=s.id,s.name=s.department_full_name,s)),this.data.optionSelect.department=t.data.data,this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1}).catch(t=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:t.response.data.message}})}},mounted(){this.apiMaster()}},N={class:"user-detail"},B={class:"group-overflow"},P={class:"detail"},F={class:"group-head"},j={class:"group-first"},z=e("img",{src:C,alt:"",class:"icon-users"},null,-1),T={class:"name"},G={class:"group-end"},H=e("img",{src:M,class:"icon-back"},null,-1),J=e("img",{src:U,class:"icon-line"},null,-1),K=e("div",{class:"line"},null,-1),O={class:"group-detail"},Q={class:"group-between"},R={class:"group-input left"},W=e("div",{class:"name"},[l("ชื่อ"),e("span",{class:"required"},"*")],-1),X={class:"group-input"},Y=e("div",{class:"name"},[l("นามสกุล"),e("span",{class:"required"},"*")],-1),Z={class:"group-between"},$={class:"group-input left"},ee={class:"name"},te={key:0,class:"required"},se={class:"group-input"},ae={class:"name"},oe={key:0,class:"required"},le={class:"group-between"},de={class:"group-input left"},ie=e("div",{class:"name"},[l("วัน เดือน ปีเกิด "),e("span",{class:"required"},"*")],-1),ne={class:"group-input"},re=e("div",{class:"name"},[l("Email "),e("span",{class:"required"},"*")],-1),ce={class:"group-between"},me={class:"group-input"},ue=e("div",{class:"name"},[l("หน่วยงาน "),e("span",{class:"required"},"*")],-1),pe={class:"group-level"},_e=e("div",{class:"level-first"},[e("img",{src:E,alt:"",class:"icon-crown"}),e("div",{class:"name"},[l("สิทธิ์ "),e("span",{class:"required"},"*")])],-1),he={class:"level-button"},ve={class:"group-user"},ge={src:I,alt:"",class:"icon-user-crown"},fe={src:x,alt:"",class:"icon-user-crown"},be=e("div",{class:"line"},null,-1),we={class:"group-footer"},Ve={class:"footer-left"},ke=e("img",{src:q,alt:"times-circle",class:"icon-times-circle"},null,-1),ye={class:"footer-right"},Se={type:"submit",class:"button-success"},Ae=e("img",{src:L,alt:"times-circle",class:"icon-check-circle"},null,-1);function qe(t,s,c,Le,a,n){const r=i("cpn-input"),f=i("cpn-datepicker"),b=i("cpn-select"),w=i("Form"),V=i("cpn-modal-alert"),k=i("cpn-loading");return m(),u("div",N,[e("div",B,[e("div",P,[e("div",F,[e("div",j,[z,e("div",T,p(a.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"),1)]),e("div",G,[e("button",{type:"button",class:"button-back",onClick:s[0]||(s[0]=o=>n.back())},[H,J,l(" ย้อนกลับ ")])])]),K,d(w,{onSubmit:n.onSubmit,onInvalidSubmit:t.onInvalidSubmit},{default:A(()=>[e("div",O,[e("div",Q,[e("div",R,[W,d(r,{modelValue:a.data.fname,"onUpdate:modelValue":s[1]||(s[1]=o=>a.data.fname=o),name:"fname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),e("div",X,[Y,d(r,{modelValue:a.data.lname,"onUpdate:modelValue":s[2]||(s[2]=o=>a.data.lname=o),name:"lname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",Z,[e("div",$,[e("div",ee,[l("ชื่อผู้ใช้งาน "),a.edit?_("",!0):(m(),u("span",te,"*"))]),d(r,{modelValue:a.data.username,"onUpdate:modelValue":s[3]||(s[3]=o=>a.data.username=o),name:"Usern",rules:a.edit?"":"required",disabled:a.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","rules","disabled"])]),e("div",se,[e("div",ae,[l("รหัสผ่าน "),a.edit?_("",!0):(m(),u("span",oe,"*"))]),d(r,{modelValue:a.data.password,"onUpdate:modelValue":s[4]||(s[4]=o=>a.data.password=o),name:"passw",type:"password",rules:a.edit?"":"required",disabled:a.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","rules","disabled"])])]),e("div",le,[e("div",de,[ie,e("div",null,[d(f,{modelValue:a.data.birthdate,"onUpdate:modelValue":s[5]||(s[5]=o=>a.data.birthdate=o),name:"birthdate "},null,8,["modelValue"])])]),e("div",ne,[re,d(r,{modelValue:a.data.email,"onUpdate:modelValue":s[6]||(s[6]=o=>a.data.email=o),name:"email",rules:"required|email",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),e("div",ce,[e("div",me,[ue,d(b,{modelValue:a.data.department_id,"onUpdate:modelValue":s[7]||(s[7]=o=>a.data.department_id=o),name:"department",placeholder:"กรุณาระบุ",rules:"required",optionSelect:a.data.optionSelect.department},null,8,["modelValue","optionSelect"])])])]),e("div",pe,[_e,e("div",he,[e("button",{type:"button",class:h(["button-admin",a.data.level==1?"active":""]),onClick:s[8]||(s[8]=o=>n.levelClick(1))},[e("div",ve,[v(e("img",ge,null,512),[[g,a.data.level==1]]),v(e("img",fe,null,512),[[g,a.data.level!=1]]),l(" User Admin ")])],2),e("button",{type:"button",class:h(["button-user",a.data.level==2?"active":""]),onClick:s[9]||(s[9]=o=>n.levelClick(2))}," User ",2)])]),be,e("div",we,[e("div",Ve,[e("button",{type:"button",class:"button-danger",onClick:s[10]||(s[10]=o=>n.cancelClick())},[ke,l(" ยกเลิก ")])]),e("div",ye,[e("button",Se,[Ae,l(" "+p(a.edit?"ยืนยันแก้ไขผู้ใช้งาน":"ยืนยันสร้างผู้ใช้งาน"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),d(V,{modalAlert:a.modalAlert},null,8,["modalAlert"]),d(k,{show:a.showLoading},null,8,["show"])])}const xe=y(D,[["render",qe]]);export{xe as default};
