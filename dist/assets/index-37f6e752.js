import{_ as f,r as c,o as h,c as w,w as u,v as g,a as o,t as x,b as d,d as b,e as N,n as _,f as S,g as y}from"./index-756f06f7.js";const I="/assets/pkm_logo-dc0ab453.svg";const k={name:"login-index",data(){return{modalRepass:!1,focusPersonNo:!1,focusPassword:!1,data:{personNo:"",password:"",message:"ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง !",fname:"",lname:""},modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,loginFalse:!1}},methods:{closeModalRepass(){this.modalRepass=!1},repasswordClick(){this.modalRepass=!0},onSubmit(p){let s={};s={username:this.data.personNo,password:this.data.password},this.showLoading=!0,this.axios.post("/auth/login",s,{headers:{"Content-Type":"application/json"}}).then(t=>{this.axios.get(`/department/${t.data.data.department_id}`).then(n=>{var e,l,i,r,m;this.showLoading=!1,localStorage.setItem("logo_department",n.data.data.filepath?this.backendport+"/"+n.data.data.filepath:""),localStorage.setItem("user_id",((e=t.data.data)==null?void 0:e.user_id)||""),localStorage.setItem("department_name",((l=t.data.data)==null?void 0:l.department)||""),localStorage.setItem("department_id",((i=t.data.data)==null?void 0:i.department_id)||""),localStorage.setItem("fname",((r=t.data.data)==null?void 0:r.fname)||""),localStorage.setItem("lname",((m=t.data.data)==null?void 0:m.lname)||""),localStorage.setItem("login","true"),this.$router.push({name:"booking-receive"}).catch(()=>{})}).catch(n=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:n.response.data.message}})}).catch(t=>{this.showLoading=!1,this.data.message=t.response.data.message,this.loginFalse=!0,this.data.personNo="",this.data.password=""})}},created(){localStorage.setItem("login","false")},watch:{modalRepass(){document.body.style.overflow=this.modalRepass?"hidden":""}}},F={class:"login-index"},R={class:"card-center"},V=o("div",{class:"group-image"},[o("img",{class:"image-logo",src:I,alt:"logo"}),o("div",{class:"title"},"ระบบสารบรรณ Demo")],-1),C={class:"group-input"},P={class:"group-input"},L=o("div",{class:"group-button"},[o("button",{type:"submit",class:"button-login"},"เข้าสู่ระบบ")],-1),A={class:"modal-class-repass"},M={class:"modal-center"},D={class:"modal-size"},E=N('<div class="modal-detail"><div class="image-icon"><img src="'+S+'" alt="" class="image-confirm"></div><div class="title-size">กรุณาติดต่อผู้ดูแลระบบเพื่อทำการเปลี่ยนรหัสผ่าน</div><div class="message">Email : xxxxx123@gmail.com</div><div class="message">โทร : 0xx-xxx-xxxx</div></div>',1),z={class:"group-footer center"},B=o("div",{class:"group-name"},[o("img",{src:y,alt:"",class:"image-times"}),o("div",{class:"name"},"ปิด")],-1),q=[B];function U(p,s,t,n,e,l){const i=c("cpn-input"),r=c("Form"),m=c("cpn-modal-alert"),v=c("cpn-loading");return h(),w("div",F,[u(o("div",{class:"login-false"},x(e.data.message)+" !",513),[[g,e.loginFalse]]),o("div",R,[V,d(r,{onSubmit:s[7]||(s[7]=a=>l.onSubmit(!1)),onInvalidSubmit:p.onInvalidSubmit},{default:b(()=>[o("div",C,[o("div",{class:_(["input-name",!e.data.personNo&&!e.focusPersonNo?"show-text":""])},"ชื่อผู้ใช้งาน หรือ Email",2),d(i,{modelValue:e.data.personNo,"onUpdate:modelValue":s[0]||(s[0]=a=>e.data.personNo=a),name:"personNo",type:"text",classN:"input-login",rules:"required",onFocusin:s[1]||(s[1]=a=>e.focusPersonNo=!0),onFocusout:s[2]||(s[2]=a=>e.focusPersonNo=!1)},null,8,["modelValue"])]),o("div",P,[o("div",{class:_(["input-name",!e.data.password&&!e.focusPassword?"show-text":""])},"รหัสผ่าน",2),d(i,{modelValue:e.data.password,"onUpdate:modelValue":s[3]||(s[3]=a=>e.data.password=a),name:"password",type:"password",classN:"input-login",rules:"required",iconN:"eye",onFocusin:s[4]||(s[4]=a=>e.focusPassword=!0),onFocusout:s[5]||(s[5]=a=>e.focusPassword=!1)},null,8,["modelValue"])]),o("div",{class:"re-password pointer",onClick:s[6]||(s[6]=a=>l.repasswordClick())},"ลืมรหัสผ่าน?"),L]),_:1},8,["onInvalidSubmit"])]),u(o("div",A,[o("div",M,[o("div",D,[E,o("div",z,[o("button",{type:"button",onClick:s[8]||(s[8]=(...a)=>l.closeModalRepass&&l.closeModalRepass(...a)),class:"button-confirm button-success"},q)])])])],512),[[g,e.modalRepass]]),d(m,{modalAlert:e.modalAlert},null,8,["modalAlert"]),d(v,{show:e.showLoading},null,8,["show"])])}const T=f(k,[["render",U]]);export{T as default};