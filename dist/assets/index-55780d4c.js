import{_ as f,r,o as h,c as w,w as u,v as p,a as e,t as x,b as i,d as b,e as N,n as g,f as S,g as y}from"./index-ad652525.js";const I="/assets/logo-62142f9e.png";const F={name:"login-index",data(){return{modalRepass:!1,focusPersonNo:!1,focusPassword:!1,data:{personNo:"",password:"",message:"ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง !",fname:"",lname:""},modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,loginFalse:!1}},methods:{closeModalRepass(){this.modalRepass=!1},repasswordClick(){this.modalRepass=!0},onSubmit(c){let s={};s={username:this.data.personNo,password:this.data.password},this.showLoading=!0,this.axios.post("/auth/login",s,{headers:{"Content-Type":"application/json"}}).then(a=>{var m,o,l,n,d;this.showLoading=!1,localStorage.setItem("user_id",((m=a.data.data)==null?void 0:m.user_id)||""),localStorage.setItem("department_name",((o=a.data.data)==null?void 0:o.department)||""),localStorage.setItem("department_id",((l=a.data.data)==null?void 0:l.department_id)||""),localStorage.setItem("fname",((n=a.data.data)==null?void 0:n.fname)||""),localStorage.setItem("lname",((d=a.data.data)==null?void 0:d.lname)||""),localStorage.setItem("login","true"),this.$router.push({name:"user"}).catch(()=>{})}).catch(a=>{this.showLoading=!1,this.data.message=a.response.data.message,this.loginFalse=!0,this.data.personNo="",this.data.password=""})}},created(){localStorage.setItem("login","false")},watch:{modalRepass(){document.body.style.overflow=this.modalRepass?"hidden":""}}},R={class:"login-index"},V={class:"card-center"},C=e("div",{class:"group-image"},[e("img",{class:"image-logo",src:I,alt:"logo"}),e("div",{class:"title"},"สำนักเลขาธิการคณะรัฐมนตรี"),e("div",{class:"sub-title"},"ระบบสารบรรณ Demo")],-1),P={class:"group-input"},k={class:"group-input"},L=e("div",{class:"group-button"},[e("button",{type:"submit",class:"button-login"},"เข้าสู่ระบบ")],-1),A={class:"modal-class-repass"},D={class:"modal-center"},M={class:"modal-size"},z=N('<div class="modal-detail"><div class="image-icon"><img src="'+S+'" alt="" class="image-confirm"></div><div class="title-size">กรุณาติดต่อผู้ดูแลระบบเพื่อทำการเปลี่ยนรหัสผ่าน</div><div class="message">Email : xxxxx123@gmail.com</div><div class="message">โทร : 0xx-xxx-xxxx</div></div>',1),B={class:"group-footer center"},E=e("div",{class:"group-name"},[e("img",{src:y,alt:"",class:"image-times"}),e("div",{class:"name"},"ปิด")],-1),q=[E];function U(c,s,a,m,o,l){const n=r("cpn-input"),d=r("Form"),_=r("cpn-modal-alert"),v=r("cpn-loading");return h(),w("div",R,[u(e("div",{class:"login-false"},x(o.data.message)+" !",513),[[p,o.loginFalse]]),e("div",V,[C,i(d,{onSubmit:s[7]||(s[7]=t=>l.onSubmit(!1)),onInvalidSubmit:c.onInvalidSubmit},{default:b(()=>[e("div",P,[e("div",{class:g(["input-name",!o.data.personNo&&!o.focusPersonNo?"show-text":""])},"ชื่อผู้ใช้งาน หรือ Email",2),i(n,{modelValue:o.data.personNo,"onUpdate:modelValue":s[0]||(s[0]=t=>o.data.personNo=t),name:"personNo",type:"text",classN:"input-login",rules:"required",onFocusin:s[1]||(s[1]=t=>o.focusPersonNo=!0),onFocusout:s[2]||(s[2]=t=>o.focusPersonNo=!1)},null,8,["modelValue"])]),e("div",k,[e("div",{class:g(["input-name",!o.data.password&&!o.focusPassword?"show-text":""])},"รหัสผ่าน",2),i(n,{modelValue:o.data.password,"onUpdate:modelValue":s[3]||(s[3]=t=>o.data.password=t),name:"password",type:"password",classN:"input-login",rules:"required",iconN:"eye",onFocusin:s[4]||(s[4]=t=>o.focusPassword=!0),onFocusout:s[5]||(s[5]=t=>o.focusPassword=!1)},null,8,["modelValue"])]),e("div",{class:"re-password pointer",onClick:s[6]||(s[6]=t=>l.repasswordClick())},"ลืมรหัสผ่าน?"),L]),_:1},8,["onInvalidSubmit"])]),u(e("div",A,[e("div",D,[e("div",M,[z,e("div",B,[e("button",{type:"button",onClick:s[8]||(s[8]=(...t)=>l.closeModalRepass&&l.closeModalRepass(...t)),class:"button-confirm button-success"},q)])])])],512),[[p,o.modalRepass]]),i(_,{modalAlert:o.modalAlert},null,8,["modalAlert"]),i(v,{show:o.showLoading},null,8,["show"])])}const T=f(F,[["render",U]]);export{T as default};
