import{_ as N,r as m,o as I,c as y,w as x,v as S,a as e,t as F,b as n,d as R,e as V,n as b,f as k,g as C}from"./index-bee733ef.js";const P="/assets/department-94349e4f.png";const L={name:"login-index",data(){return{modalRepass:!1,focusPersonNo:!1,focusPassword:!1,data:{personNo:"",password:"",message:"ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง !",fname:"",lname:""},modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,loginFalse:!1}},methods:{closeModalRepass(){this.modalRepass=!1},repasswordClick(){this.modalRepass=!0},onSubmit(p){let s={};s={username:this.data.personNo,password:this.data.password},this.showLoading=!0,this.axios.post("/auth/login",s,{headers:{"Content-Type":"application/json"}}).then(o=>{const u=this.axios.get(`/department/${o.data.data.department_id}`),a=this.axios.get(`/user/${o.data.data.user_id}`);this.axios.all([u,a]).then(this.axios.spread((...l)=>{var d,r,t,g,_,f,h,v,w;this.showLoading=!1;const i=l[0],c=l[1];localStorage.setItem("profile_img",((d=c.data.data)==null?void 0:d.profile_img)||""),localStorage.setItem("filename",((r=i.data.data)==null?void 0:r.filename)||""),localStorage.setItem("filename",((t=i.data.data)==null?void 0:t.filename)||""),localStorage.setItem("filepath",((g=i.data.data)==null?void 0:g.filepath)||""),localStorage.setItem("user_id",((_=o.data.data)==null?void 0:_.user_id)||""),localStorage.setItem("department_name",((f=o.data.data)==null?void 0:f.department)||""),localStorage.setItem("department_id",((h=o.data.data)==null?void 0:h.department_id)||""),localStorage.setItem("fname",((v=o.data.data)==null?void 0:v.fname)||""),localStorage.setItem("lname",((w=o.data.data)==null?void 0:w.lname)||""),localStorage.setItem("login","true"),this.$router.push({name:"my-work.waiting-booking-receive"}).catch(()=>{})})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}).catch(o=>{this.showLoading=!1,this.data.message=o.response.data.message,this.loginFalse=!0,this.data.personNo="",this.data.password=""})}},created(){localStorage.setItem("login","false")},watch:{modalRepass(){document.body.style.overflow=this.modalRepass?"hidden":""}}},A={class:"login-index"},M={class:"card-center"},q=e("div",{class:"group-image"},[e("img",{class:"image-logo",src:P,alt:"logo"}),e("div",{class:"title"},"ระบบสารบรรณอิเล็กทรอนิกส์")],-1),E={class:"group-input"},z={class:"group-input"},B=e("div",{class:"group-button"},[e("button",{type:"submit",class:"button-login"},"เข้าสู่ระบบ")],-1),D={class:"modal-class-repass"},U={class:"modal-center"},j={class:"modal-size"},T=V('<div class="modal-detail"><div class="image-icon"><img src="'+k+'" alt="" class="image-confirm"></div><div class="title-size">กรุณาติดต่อผู้ดูแลระบบเพื่อทำการเปลี่ยนรหัสผ่าน</div><div class="message">Email : xxxxx123@gmail.com</div><div class="message">โทร : 0xx-xxx-xxxx</div></div>',1),G={class:"group-footer center"},H=e("div",{class:"group-name"},[e("img",{src:C,alt:"",class:"image-times"}),e("div",{class:"name"},"ปิด")],-1),J=[H];function K(p,s,o,u,a,l){const i=m("cpn-input"),c=m("Form"),d=m("cpn-modal-alert"),r=m("cpn-loading");return I(),y("div",A,[x(e("div",{class:"login-false"},F(a.data.message)+" !",513),[[S,a.loginFalse]]),e("div",M,[q,n(c,{onSubmit:s[7]||(s[7]=t=>l.onSubmit(!1)),onInvalidSubmit:p.onInvalidSubmit},{default:R(()=>[e("div",E,[e("div",{class:b(["input-name",!a.data.personNo&&!a.focusPersonNo?"show-text":""])},"ชื่อผู้ใช้งาน หรือ Email",2),n(i,{modelValue:a.data.personNo,"onUpdate:modelValue":s[0]||(s[0]=t=>a.data.personNo=t),name:"personNo",type:"text",classN:"input-login",rules:"required",onFocusin:s[1]||(s[1]=t=>a.focusPersonNo=!0),onFocusout:s[2]||(s[2]=t=>a.focusPersonNo=!1)},null,8,["modelValue"])]),e("div",z,[e("div",{class:b(["input-name",!a.data.password&&!a.focusPassword?"show-text":""])},"รหัสผ่าน",2),n(i,{modelValue:a.data.password,"onUpdate:modelValue":s[3]||(s[3]=t=>a.data.password=t),name:"password",type:"password",classN:"input-login",rules:"required",iconN:"eye",onFocusin:s[4]||(s[4]=t=>a.focusPassword=!0),onFocusout:s[5]||(s[5]=t=>a.focusPassword=!1)},null,8,["modelValue"])]),e("div",{class:"re-password pointer",onClick:s[6]||(s[6]=t=>l.repasswordClick())},"ลืมรหัสผ่าน?"),B]),_:1},8,["onInvalidSubmit"])]),x(e("div",D,[e("div",U,[e("div",j,[T,e("div",G,[e("button",{type:"button",onClick:s[8]||(s[8]=(...t)=>l.closeModalRepass&&l.closeModalRepass(...t)),class:"button-confirm button-success"},J)])])])],512),[[S,a.modalRepass]]),n(d,{modalAlert:a.modalAlert},null,8,["modalAlert"]),n(r,{show:a.showLoading},null,8,["show"])])}const Q=N(L,[["render",K]]);export{Q as default};
