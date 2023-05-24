import{_ as p}from"./users-duotone-57e3c13d.js";import{_ as g,a as f}from"./line-up-c54e1bbb.js";import{_ as b,r as i,o as v,c as w,a as t,t as d,j as l,b as n,d as k,g as y,k as A}from"./index-65bbf0ff.js";const L={name:"org-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{code:"",department_short_name:"",department_full_name:"",filename:"",filepath:""}}},methods:{back(){this.$router.push({name:"organization",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.name=""},onSubmit(){let e=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขกระทรวง":"สร้างกระทรวง"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){if(e.edit){let s={name:e.data.name};e.showLoading=!0,e.axios.put(`/organization/${e.$route.params.id}`,s).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการแก้ไขกระทรวงสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(a=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})}else{let s={name:e.data.name};e.showLoading=!0,e.axios.post("/organization",s).then(()=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"success",title:"ทำการสร้างกระทรวงสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){e.back()}}}).catch(a=>{e.showLoading=!1,e.modalAlert={showModal:!0,type:"error",title:"Error",message:a.response.data.message}})}}}},apiDetail(){this.showLoading=!0,this.axios.get(`/organization/${this.$route.params.id}`).then(e=>{this.showLoading=!1,this.data=e.data.data}).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})}},mounted(){this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1}},S={class:"master-org-detail"},x={class:"group-overflow"},M={class:"detail"},$={class:"group-head"},C={class:"group-first"},V=t("img",{src:p,alt:"",class:"icon-users"},null,-1),q={class:"name"},P={class:"group-end"},z=t("img",{src:g,class:"icon-back"},null,-1),E=t("img",{src:f,class:"icon-line"},null,-1),B=t("div",{class:"line"},null,-1),D={class:"group-detail"},I={class:"group-between"},N={class:"group-input left"},F=t("div",{class:"name"},[l("ชื่อกระทรวง "),t("span",{class:"required"},"*")],-1),j=t("div",{class:"line"},null,-1),T={class:"group-footer"},U={class:"footer-left"},G=t("img",{src:y,alt:"times-circle",class:"icon-times-circle"},null,-1),H={class:"footer-right"},J={type:"submit",class:"button-success"},K=t("img",{src:A,alt:"times-circle",class:"icon-check-circle"},null,-1);function O(e,s,a,Q,o,r){const m=i("cpn-input"),u=i("Form"),_=i("cpn-modal-alert"),h=i("cpn-loading");return v(),w("div",S,[t("div",x,[t("div",M,[t("div",$,[t("div",C,[V,t("div",q,d(o.edit?"แก้ไขกระทรวง":"สร้างกระทรวง "),1)]),t("div",P,[t("button",{type:"button",class:"button-back",onClick:s[0]||(s[0]=c=>r.back())},[z,E,l(" ย้อนกลับ ")])])]),B,n(u,{onSubmit:r.onSubmit,onInvalidSubmit:e.onInvalidSubmit},{default:k(()=>[t("div",D,[t("div",I,[t("div",N,[F,n(m,{modelValue:o.data.name,"onUpdate:modelValue":s[1]||(s[1]=c=>o.data.name=c),name:"name",rules:"required",placeholder:"กรุณาระบุ"},null,8,["modelValue"])])])]),j,t("div",T,[t("div",U,[t("button",{type:"button",class:"button-danger",onClick:s[2]||(s[2]=c=>r.cancelClick())},[G,l(" ยกเลิก ")])]),t("div",H,[t("button",J,[K,l(" "+d(o.edit?"ยืนยันแก้ไขกระทรวง":"ยืนยันสร้างกระทรวง"),1)])])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),n(_,{modalAlert:o.modalAlert},null,8,["modalAlert"]),n(h,{show:o.showLoading},null,8,["show"])])}const Y=b(L,[["render",O]]);export{Y as default};
