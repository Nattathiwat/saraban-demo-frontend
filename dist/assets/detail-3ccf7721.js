import{_ as f}from"./users-duotone-57e3c13d.js";import{_ as w,a as S}from"./line-up-c54e1bbb.js";import{_ as b,r as n,o as V,c as y,a as t,t as k,j as m,b as d,d as x,g as L,k as A}from"./index-a2f0c34f.js";const M={name:"email-agency-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{department_id:"",deliver_method_id:"",smtp_username:"",smtp_password:"",smtp_server:"",smtp_port:"",smtp_hello_domain:"",smtp_authen_id:"",is_start_tls:!1,is_ssl_connection:!1},optionSelect:{department_id:[],deliver_method_id:[],smtp_authen_id:[]}}},methods:{testmailClick(){var e;this.showLoading=!0;let s={department_id:parseInt(this.data.department_id),department_name:(e=this.optionSelect.department_id.filter(i=>i.value==this.data.department_id))==null?void 0:e[0].name,deliver_method_id:parseInt(this.data.deliver_method_id),smtp_username:this.data.smtp_username,smtp_server:this.data.smtp_server,smtp_password:this.data.smtp_password,smtp_port:this.data.smtp_port,smtp_hello_domain:this.data.smtp_hello_domain,smtp_authen_id:parseInt(this.data.smtp_authen_id),is_start_tls:this.data.is_start_tls,is_ssl_connection:this.data.is_ssl_connection,user_id:parseInt(localStorage.getItem("user_id"))};this.axios.post("/email-config/testing",s).then(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"success",title:i.data.message,message:i.data.data}}).catch(i=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:i.response.data.message}})},back(){this.$router.push({name:"email-agency",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.department_id="",this.data.deliver_method_id="",this.data.smtp_username="",this.data.smtp_password="",this.data.smtp_server="",this.data.smtp_port="",this.data.smtp_hello_domain="",this.data.smtp_authen_id="",this.data.is_start_tls=!1,this.data.is_ssl_connection=!1},onSubmit(){let s=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){var i;let e={department_id:parseInt(s.data.department_id),department_name:(i=s.optionSelect.department_id.filter(l=>l.value==s.data.department_id))==null?void 0:i[0].name,deliver_method_id:parseInt(s.data.deliver_method_id),smtp_username:s.data.smtp_username,smtp_server:s.data.smtp_server,smtp_password:s.data.smtp_password,smtp_port:s.data.smtp_port,smtp_hello_domain:s.data.smtp_hello_domain,smtp_authen_id:parseInt(s.data.smtp_authen_id),is_start_tls:s.data.is_start_tls,is_ssl_connection:s.data.is_ssl_connection,user_id:parseInt(localStorage.getItem("user_id"))};s.showLoading=!0,s.axios[s.edit?"put":"post"](`/email-config${s.edit?"/"+s.$route.params.id:""}`,e).then(()=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"success",title:s.edit?"ทำการแก้ไขหน่วยงานสำเร็จแล้ว":"ทำการสร้างหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){s.back()}}}).catch(l=>{s.showLoading=!1,s.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}}},apiDetail(){this.showLoading=!0,this.axios.get(`/email-config/${this.$route.params.id}`).then(s=>{this.showLoading=!1,this.data={...this.data,...s.data.data}}).catch(s=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:s.response.data.message}})},api_master(){this.showLoading=!0;const s=this.axios.get("/master-data/department");this.axios.all([s]).then(this.axios.spread((...e)=>{this.showLoading=!1;const i=e[0];i.data.data.filter(l=>(l.value=l.id,l.name=l.department_full_name,l)),this.optionSelect.department_id=i.data.data,this.optionSelect.deliver_method_id=[{value:1,name:"smtp"}],this.optionSelect.smtp_authen_id=[{value:1,name:"login"}],this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(e=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:e.response.data.message}})},keyupDepartment(s){this.optionSelect.department_id=[],this.axios.get("/master-data/department",{params:{keyword:s.target.value}}).then(e=>{e.data.data&&(e.data.data.filter(i=>(i.value=i.id,i.name=i.department_full_name,i)),this.optionSelect.department_id=e.data.data)})}},mounted(){this.api_master()}},I={class:"master-email-agency-detail"},C={class:"group-overflow"},U={class:"detail"},P={class:"group-head"},T={class:"group-first"},E=t("img",{src:f,alt:"",class:"icon-users"},null,-1),q={class:"name"},D={class:"group-end"},B=t("img",{src:w,class:"icon-back"},null,-1),N=t("img",{src:S,class:"icon-line"},null,-1),F=t("div",{class:"line"},null,-1),j={class:"group-detail"},H={class:"group-between"},K={class:"group-input left"},O=t("div",{class:"name"},[m("หน่วยงาน "),t("span",{class:"required"},"*")],-1),R=t("div",{class:"group-input left"},null,-1),z={class:"group-between"},G={class:"group-input"},J=t("div",{class:"name"},"Email delivery method",-1),Q={class:"group-input"},W=t("div",{class:"name"},"SMTP username",-1),X={class:"group-input"},Y=t("div",{class:"name"},"SMTP password",-1),Z={class:"group-between"},$={class:"group-input"},tt=t("div",{class:"name"},"SMTP server",-1),et={class:"group-input"},st=t("div",{class:"name"},"SMTP port",-1),at={class:"group-input"},ot=t("div",{class:"name"},"SMTP HELLO domain",-1),it={class:"group-between"},dt={class:"group-input"},lt=t("div",{class:"name"},"SMTP authentication",-1),nt={class:"group-input d-flex align-items-center mb-0"},rt=t("div",{class:"name mb-0"},"Automatically use STARTTLS if available",-1),_t={class:"group-input d-flex align-items-center mb-0"},mt=t("div",{class:"name mb-0"},"Use SSL connection",-1),pt=t("div",{class:"line"},null,-1),ct={class:"group-footer"},ut={class:"footer-left"},ht=t("img",{src:L,alt:"times-circle",class:"icon-times-circle"},null,-1),gt={class:"footer-right"},vt=t("button",{type:"submit",class:"button-success"},[t("img",{src:A,alt:"times-circle",class:"icon-check-circle"}),m(" บันทึก ")],-1);function ft(s,e,i,l,a,r){const u=n("cpn-autoComplete"),p=n("cpn-select"),_=n("cpn-input"),c=n("cpn-checkbox"),h=n("Form"),g=n("cpn-modal-alert"),v=n("cpn-loading");return V(),y("div",I,[t("div",C,[t("div",U,[t("div",P,[t("div",T,[E,t("div",q,k(a.edit?"แก้ไขอีเมลสำหรับส่งหนังสือของหน่วยงาน":"สร้างอีเมลสำหรับส่งหนังสือของหน่วยงาน"),1)]),t("div",D,[t("button",{type:"button",class:"button-back",onClick:e[0]||(e[0]=o=>r.back())},[B,N,m(" ย้อนกลับ ")])])]),F,d(h,{onSubmit:r.onSubmit,onInvalidSubmit:s.onInvalidSubmit},{default:x(()=>[t("div",j,[t("div",H,[t("div",K,[O,d(u,{modelValue:a.data.department_id,"onUpdate:modelValue":e[1]||(e[1]=o=>a.data.department_id=o),name:"department_id",rules:"required",placeholder:"กรุณาระบุ",optionSelect:a.optionSelect.department_id,onKeyup:e[2]||(e[2]=o=>r.keyupDepartment(o))},null,8,["modelValue","optionSelect"])]),R]),t("div",z,[t("div",G,[J,d(p,{modelValue:a.data.deliver_method_id,"onUpdate:modelValue":e[3]||(e[3]=o=>a.data.deliver_method_id=o),name:"deliver_method_id",placeholder:"กรุณาระบุ",optionSelect:a.optionSelect.deliver_method_id},null,8,["modelValue","optionSelect"])]),t("div",Q,[W,d(_,{modelValue:a.data.smtp_username,"onUpdate:modelValue":e[4]||(e[4]=o=>a.data.smtp_username=o),name:"smtp_username",placeholder:"กรุณาระบุ",type:"text"},null,8,["modelValue"])]),t("div",X,[Y,d(_,{modelValue:a.data.smtp_password,"onUpdate:modelValue":e[5]||(e[5]=o=>a.data.smtp_password=o),name:"smtp_password",placeholder:"กรุณาระบุ",type:"password"},null,8,["modelValue"])])]),t("div",Z,[t("div",$,[tt,d(_,{modelValue:a.data.smtp_server,"onUpdate:modelValue":e[6]||(e[6]=o=>a.data.smtp_server=o),name:"smtp_server",placeholder:"กรุณาระบุ",type:"text"},null,8,["modelValue"])]),t("div",et,[st,d(_,{modelValue:a.data.smtp_port,"onUpdate:modelValue":e[7]||(e[7]=o=>a.data.smtp_port=o),name:"smtp_port",placeholder:"กรุณาระบุ",type:"text"},null,8,["modelValue"])]),t("div",at,[ot,d(_,{modelValue:a.data.smtp_hello_domain,"onUpdate:modelValue":e[8]||(e[8]=o=>a.data.smtp_hello_domain=o),name:"smtp_hello_domain",placeholder:"กรุณาระบุ",type:"text"},null,8,["modelValue"])])]),t("div",it,[t("div",dt,[lt,d(p,{modelValue:a.data.smtp_authen_id,"onUpdate:modelValue":e[9]||(e[9]=o=>a.data.smtp_authen_id=o),name:"smtp_authen_id",placeholder:"กรุณาระบุ",optionSelect:a.optionSelect.smtp_authen_id},null,8,["modelValue","optionSelect"])]),t("div",nt,[d(c,{modelValue:a.data.is_start_tls,"onUpdate:modelValue":e[10]||(e[10]=o=>a.data.is_start_tls=o),name:"is_start_tls"},null,8,["modelValue"]),rt]),t("div",_t,[d(c,{modelValue:a.data.is_ssl_connection,"onUpdate:modelValue":e[11]||(e[11]=o=>a.data.is_ssl_connection=o),name:"is_ssl_connection"},null,8,["modelValue"]),mt])])]),pt,t("div",ct,[t("div",ut,[t("button",{type:"button",class:"button-danger",onClick:e[12]||(e[12]=o=>r.cancelClick())},[ht,m(" ยกเลิก ")])]),t("div",gt,[t("button",{type:"button",class:"button-primary",onClick:e[13]||(e[13]=o=>r.testmailClick())}," Send a test email "),vt])])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),d(g,{modalAlert:a.modalAlert},null,8,["modalAlert"]),d(v,{show:a.showLoading},null,8,["show"])])}const Vt=b(M,[["render",ft]]);export{Vt as default};
