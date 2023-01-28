import{_ as V,l as y,r,o as m,c as u,a as t,t as p,j as l,b as i,d as S,i as _,n as h,w as v,v as g,g as A,k as L}from"./index-c3032b26.js";import{_ as q,a as C,b as M}from"./line-up-32057639.js";import{_ as x}from"./user-crown-duotone-30417741.js";const U="/assets/crown-duotone-c5406971.svg",E="/assets/user-crown-duotoneffffff-d1278e98.svg";const I={name:"user-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{fname:"",lname:"",username:"",password:"",email:"",department_id:"",level:2,birthdate:"",optionSelect:{department:[{name:"สำนักงานเลขาธิการ",value:"สำนักงานเลขาธิการ"}]}}}},components:{date:y},methods:{levelClick(e){this.data.level=e},back(){this.$router.push({name:"user"}).catch(()=>{})},cancelClick(){this.back(),this.data.username="",this.data.password="",this.data.email="",this.data.department_id="",this.data.level=2,this.data.birthdate=""},onSubmit(){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(e.edit){let s={fname:e.data.fname,lname:e.data.lname,email:e.data.email,department_id:parseInt(e.data.department_id),username:e.data.username,password:e.data.password,role_id:e.data.level,birthdate:e.data.birthdate};e.showLoading=!0,e.axios.put(`/user/${e.$route.params.id}`,s).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขผู้ใช้งานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(c=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}})}else{let s={fname:e.data.fname,lname:e.data.lname,email:e.data.email,department_id:parseInt(e.data.department_id),username:e.data.username,password:e.data.password,role_id:e.data.level,birthdate:e.data.birthdate};e.showLoading=!0,e.axios.post("/user",s).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างผู้ใช้งานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(c=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/user/${this.$route.params.id}`).then(e=>{this.showLoading=!1,this.data.fname=e.data.data.fname,this.data.lname=e.data.data.lname,this.data.username=e.data.data.username,this.data.password=e.data.data.password,this.data.email=e.data.data.email,this.data.department_id=e.data.data.department_id,this.data.birthdate=e.data.data.birthdate,this.data.level=e.data.data.role_id}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},apiMaster(){this.showLoading=!0,this.axios.get("/department").then(e=>{this.showLoading=!1,e.data.data.filter(s=>(s.value=s.id,s.name=s.department_full_name,s)),this.data.optionSelect.department=e.data.data,this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}},mounted(){this.apiMaster()}},D={class:"user-detail"},N={class:"group-overflow"},B={class:"detail"},P={class:"group-head"},F={class:"group-first"},j=t("img",{src:q,alt:"",class:"icon-users"},null,-1),z={class:"name"},T={class:"group-end"},G=t("img",{src:C,class:"icon-back"},null,-1),H=t("img",{src:M,class:"icon-line"},null,-1),J=t("div",{class:"line"},null,-1),K={class:"group-detail"},O={class:"group-between"},Q={class:"group-input left"},R=t("div",{class:"name"},[l("ชื่อ"),t("span",{class:"required"},"*")],-1),W={class:"group-input"},X=t("div",{class:"name"},[l("นามสกุล"),t("span",{class:"required"},"*")],-1),Y={class:"group-between"},Z={class:"group-input left"},$={class:"name"},ee={key:0,class:"required"},te={class:"group-input"},se={class:"name"},ae={key:0,class:"required"},oe={class:"group-between"},le={class:"group-input left"},ie=t("div",{class:"name"},[l("Email "),t("span",{class:"required"},"*")],-1),de={class:"group-input"},ne=t("div",{class:"name"},[l("หน่วยงาน "),t("span",{class:"required"},"*")],-1),re={class:"group-level"},ce=t("div",{class:"level-first"},[t("img",{src:U,alt:"",class:"icon-crown"}),t("div",{class:"name"},[l("สิทธิ์ "),t("span",{class:"required"},"*")])],-1),me={class:"level-button"},ue={class:"group-user"},pe={src:E,alt:"",class:"icon-user-crown"},_e={src:x,alt:"",class:"icon-user-crown"},he=t("div",{class:"line"},null,-1),ve={class:"group-footer"},ge={class:"footer-left"},fe=t("img",{src:A,alt:"times-circle",class:"icon-times-circle"},null,-1),be={class:"footer-right"},we={type:"submit",class:"button-success"},ke=t("img",{src:L,alt:"times-circle",class:"icon-check-circle"},null,-1);function Ve(e,s,c,ye,a,d){const n=r("cpn-input"),f=r("cpn-select"),b=r("Form"),w=r("cpn-modal-alert"),k=r("cpn-loading");return m(),u("div",D,[t("div",N,[t("div",B,[t("div",P,[t("div",F,[j,t("div",z,p(a.edit?"แก้ไขผู้ใช้งาน":"สร้างผู้ใช้งาน"),1)]),t("div",T,[t("button",{type:"button",class:"button-back",onClick:s[0]||(s[0]=o=>d.back())},[G,H,l(" ย้อนกลับ ")])])]),J,i(b,{onSubmit:d.onSubmit,onInvalidSubmit:e.onInvalidSubmit},{default:S(()=>[t("div",K,[t("div",O,[t("div",Q,[R,i(n,{modelValue:a.data.fname,"onUpdate:modelValue":s[1]||(s[1]=o=>a.data.fname=o),name:"fname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",W,[X,i(n,{modelValue:a.data.lname,"onUpdate:modelValue":s[2]||(s[2]=o=>a.data.lname=o),name:"lname",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])]),t("div",Y,[t("div",Z,[t("div",$,[l("ชื่อผู้ใช้งาน "),a.edit?_("",!0):(m(),u("span",ee,"*"))]),i(n,{modelValue:a.data.username,"onUpdate:modelValue":s[3]||(s[3]=o=>a.data.username=o),name:"Usern",rules:a.edit?"":"required",disabled:a.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","rules","disabled"])]),t("div",te,[t("div",se,[l("รหัสผ่าน "),a.edit?_("",!0):(m(),u("span",ae,"*"))]),i(n,{modelValue:a.data.password,"onUpdate:modelValue":s[4]||(s[4]=o=>a.data.password=o),name:"passw",type:"password",rules:a.edit?"":"required",disabled:a.edit,placeholder:"กรุณาระบุ"},null,8,["modelValue","rules","disabled"])])]),t("div",oe,[t("div",le,[ie,i(n,{modelValue:a.data.email,"onUpdate:modelValue":s[5]||(s[5]=o=>a.data.email=o),name:"email",rules:"required|email",placeholder:"กรุณาระบุ"},null,8,["modelValue"])]),t("div",de,[ne,i(f,{modelValue:a.data.department_id,"onUpdate:modelValue":s[6]||(s[6]=o=>a.data.department_id=o),name:"department",placeholder:"กรุณาระบุ",rules:"required",optionSelect:a.data.optionSelect.department},null,8,["modelValue","optionSelect"])])])]),t("div",re,[ce,t("div",me,[t("button",{type:"button",class:h(["button-admin",a.data.level==1?"active":""]),onClick:s[7]||(s[7]=o=>d.levelClick(1))},[t("div",ue,[v(t("img",pe,null,512),[[g,a.data.level==1]]),v(t("img",_e,null,512),[[g,a.data.level!=1]]),l(" User Admin ")])],2),t("button",{type:"button",class:h(["button-user",a.data.level==2?"active":""]),onClick:s[8]||(s[8]=o=>d.levelClick(2))}," User ",2)])]),he,t("div",ve,[t("div",ge,[t("button",{type:"button",class:"button-danger",onClick:s[9]||(s[9]=o=>d.cancelClick())},[fe,l(" ยกเลิก ")])]),t("div",be,[t("button",we,[ke,l(" "+p(a.edit?"ยืนยันแก้ไขผู้ใช้งาน":"ยืนยันสร้างผู้ใช้งาน"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),i(w,{modalAlert:a.modalAlert},null,8,["modalAlert"]),i(k,{show:a.showLoading},null,8,["show"])])}const qe=V(I,[["render",Ve]]);export{qe as default};
