import{_ as y}from"./users-duotone-57e3c13d.js";import{_ as f,a as b}from"./line-up-c54e1bbb.js";import{_ as S,r,o as V,c as w,a as e,t as x,j as p,b as i,d as k,g as L,k as A}from"./index-ab241729.js";const D={name:"email-agency-detail",data(){return{modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,edit:!1,data:{department:"",emailDelivery:"",username:"",password:"",server:"",port:"",domain:"",authentication:"",automatically:"",connection:""},optionSelect:{department:[],emailDelivery:[],authentication:[]}}},methods:{back(){this.$router.push({name:"email-agency",query:{page:this.$route.query.page,perPage:this.$route.query.perPage}}).catch(()=>{})},cancelClick(){this.back(),this.data.department="",this.data.emailDelivery="",this.data.username="",this.data.password="",this.data.server="",this.data.port="",this.data.domain="",this.data.authentication="",this.data.automatically="",this.data.connection=""},onSubmit(){let o=this;this.modalAlert={showModal:!0,type:"confirm",title:`คุณยืนยันการ${this.edit?"แก้ไขหน่วยงาน":"สร้างหน่วยงาน"}หรือไม่`,confirm:!0,msgSuccess:!0,afterPressAgree(){let t={desc:o.data.desc,name:o.data.name,short_name:o.data.short_name,subministry_id:o.data.subministry_id,organization_id:o.data.organization_id,department_id:o.data.department_id};o.showLoading=!0,o.axios[o.edit?"put":"post"](`/group${o.edit?"/"+o.$route.params.id:""}`,t).then(()=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"success",title:o.edit?"ทำการแก้ไขหน่วยงานสำเร็จแล้ว":"ทำการสร้างหน่วยงานสำเร็จแล้ว",msgSuccess:!0,afterPressAgree(){o.back()}}}).catch(l=>{o.showLoading=!1,o.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}}},apiDetail(){this.showLoading=!0,this.axios.get(`/group/${this.$route.params.id}`).then(o=>{this.showLoading=!1,this.data={...this.data,...o.data.data}}).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})},api_master(){this.showLoading=!0;const o=this.axios.get("/master-data/department"),t=this.axios.get("/department"),l=this.axios.get("/subministry");this.axios.all([o,t,l]).then(this.axios.spread((...c)=>{this.showLoading=!1;const a=c[0],d=c[1],u=c[2];a.data.data.filter(n=>(n.value=n.id,n.name=n.name,n)),d.data.data.filter(n=>(n.value=n.id,n.name=n.department_full_name,n)),u.data.data.filter(n=>(n.value=n.id,n.name=n.Name,n)),this.optionSelect.department=a.data.data,this.optionSelect.emailDelivery=d.data.data,this.optionSelect.authentication=u.data.data,this.$route.params.id?(this.edit=!0,this.apiDetail()):this.edit=!1})).catch(c=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:c.response.data.message}})},keyupDepartment(o){this.optionSelect.department=[],this.axios.get("/master-data/department",{params:{keyword:o.target.value,organization_id:this.data.organization_id}}).then(t=>{t.data.data&&(t.data.data.filter(l=>(l.value=l.id,l.name=l.department_full_name,l)),this.optionSelect.department=t.data.data)})}},mounted(){this.api_master()}},M={class:"master-email-agency-detail"},U={class:"group-overflow"},P={class:"detail"},T={class:"group-head"},C={class:"group-first"},E=e("img",{src:y,alt:"",class:"icon-users"},null,-1),q={class:"name"},z={class:"group-end"},N=e("img",{src:f,class:"icon-back"},null,-1),B=e("img",{src:b,class:"icon-line"},null,-1),I=e("div",{class:"line"},null,-1),F={class:"group-detail"},j={class:"group-between"},H={class:"group-input left"},K=e("div",{class:"name"},[p("หน่วยงาน "),e("span",{class:"required"},"*")],-1),O=e("div",{class:"group-input left"},null,-1),R={class:"group-between"},G={class:"group-input"},J=e("div",{class:"name"},"Email delivery method",-1),Q={class:"group-input"},W=e("div",{class:"name"},"SMTP username",-1),X={class:"group-input"},Y=e("div",{class:"name"},"SMTP password",-1),Z={class:"group-between"},$={class:"group-input"},ee=e("div",{class:"name"},"SMTP server",-1),te={class:"group-input"},ae=e("div",{class:"name"},"SMTP port",-1),oe={class:"group-input"},se=e("div",{class:"name"},"SMTP HELLO domain",-1),ne={class:"group-between"},ie={class:"group-input"},le=e("div",{class:"name"},"SMTP authentication",-1),de={class:"group-input d-flex align-items-center mb-0"},re=e("div",{class:"name mb-0"},"Automatically use STARTTLS if available",-1),ce={class:"group-input d-flex align-items-center mb-0"},me=e("div",{class:"name mb-0"},"Use SSL connection",-1),ue=e("div",{class:"line"},null,-1),pe={class:"group-footer"},_e={class:"footer-left"},he=e("img",{src:L,alt:"times-circle",class:"icon-times-circle"},null,-1),ge=e("div",{class:"footer-right"},[e("button",{type:"submit",class:"button-success"},[e("img",{src:A,alt:"times-circle",class:"icon-check-circle"}),p(" บันทึก ")])],-1);function ve(o,t,l,c,a,d){const u=r("cpn-autoComplete"),n=r("cpn-select"),m=r("cpn-input"),_=r("cpn-checkbox"),h=r("Form"),g=r("cpn-modal-alert"),v=r("cpn-loading");return V(),w("div",M,[e("div",U,[e("div",P,[e("div",T,[e("div",C,[E,e("div",q,x(a.edit?"แก้ไขอีเมลสำหรับส่งหนังสือของหน่วยงาน":"สร้างอีเมลสำหรับส่งหนังสือของหน่วยงาน"),1)]),e("div",z,[e("button",{type:"button",class:"button-back",onClick:t[0]||(t[0]=s=>d.back())},[N,B,p(" ย้อนกลับ ")])])]),I,i(h,{onSubmit:d.onSubmit,onInvalidSubmit:o.onInvalidSubmit},{default:k(()=>[e("div",F,[e("div",j,[e("div",H,[K,i(u,{modelValue:a.data.department,"onUpdate:modelValue":t[1]||(t[1]=s=>a.data.department=s),name:"department",rules:"required",placeholder:"กรุณาระบุ",optionSelect:a.optionSelect.department,onKeyup:t[2]||(t[2]=s=>d.keyupDepartment(s))},null,8,["modelValue","optionSelect"])]),O]),e("div",R,[e("div",G,[J,i(n,{modelValue:a.data.emailDelivery,"onUpdate:modelValue":t[3]||(t[3]=s=>a.data.emailDelivery=s),name:"emailDelivery",placeholder:"กรุณาระบุ",optionSelect:a.optionSelect.emailDelivery},null,8,["modelValue","optionSelect"])]),e("div",Q,[W,i(m,{modelValue:a.data.username,"onUpdate:modelValue":t[4]||(t[4]=s=>a.data.username=s),name:"username",placeholder:"กรุณาระบุ",type:"text"},null,8,["modelValue"])]),e("div",X,[Y,i(m,{modelValue:a.data.password,"onUpdate:modelValue":t[5]||(t[5]=s=>a.data.password=s),name:"password",placeholder:"กรุณาระบุ",type:"text"},null,8,["modelValue"])])]),e("div",Z,[e("div",$,[ee,i(m,{modelValue:a.data.server,"onUpdate:modelValue":t[6]||(t[6]=s=>a.data.server=s),name:"server",placeholder:"กรุณาระบุ",type:"text"},null,8,["modelValue"])]),e("div",te,[ae,i(m,{modelValue:a.data.port,"onUpdate:modelValue":t[7]||(t[7]=s=>a.data.port=s),name:"port",placeholder:"กรุณาระบุ",type:"text"},null,8,["modelValue"])]),e("div",oe,[se,i(m,{modelValue:a.data.domain,"onUpdate:modelValue":t[8]||(t[8]=s=>a.data.domain=s),name:"domain",placeholder:"กรุณาระบุ",type:"text"},null,8,["modelValue"])])]),e("div",ne,[e("div",ie,[le,i(n,{modelValue:a.data.authentication,"onUpdate:modelValue":t[9]||(t[9]=s=>a.data.authentication=s),name:"authentication",placeholder:"กรุณาระบุ",optionSelect:a.optionSelect.authentication},null,8,["modelValue","optionSelect"])]),e("div",de,[i(_,{modelValue:a.data.automatically,"onUpdate:modelValue":t[10]||(t[10]=s=>a.data.automatically=s),name:"automatically"},null,8,["modelValue"]),re]),e("div",ce,[i(_,{modelValue:a.data.connection,"onUpdate:modelValue":t[11]||(t[11]=s=>a.data.connection=s),name:"connection"},null,8,["modelValue"]),me])])]),ue,e("div",pe,[e("div",_e,[e("button",{type:"button",class:"button-danger",onClick:t[12]||(t[12]=s=>d.cancelClick())},[he,p(" ยกเลิก ")])]),ge])]),_:1},8,["onSubmit","onInvalidSubmit"])])]),i(g,{modalAlert:a.modalAlert},null,8,["modalAlert"]),i(v,{show:a.showLoading},null,8,["show"])])}const Se=S(D,[["render",ve]]);export{Se as default};
