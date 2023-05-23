import{_ as F,r as c,o as R,c as V,w as b,v as N,a as e,t as k,b as d,d as C,e as P,n as y,f as L,g as A}from"./index-a3fdf352.js";const M="/assets/department-94349e4f.png";const q={name:"login-index",data(){return{modalRepass:!1,focusPersonNo:!1,focusPassword:!1,data:{personNo:"",password:"",message:"ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง !",fname:"",lname:""},modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,loginFalse:!1}},methods:{closeModalRepass(){this.modalRepass=!1},repasswordClick(){this.modalRepass=!0},onSubmit(u){let s={};s={username:this.data.personNo,password:this.data.password},this.showLoading=!0,this.axios.post("/auth/login",s,{headers:{"Content-Type":"application/json"}}).then(o=>{const p=this.axios.get(`/department/${o.data.data.department_id}`),t=this.axios.get(`/user/${o.data.data.user_id}`);this.axios.all([p,t]).then(this.axios.spread((...l)=>{var m,a,g,_,f,h,v,w,x,S;this.showLoading=!1;const i=l[0],n=l[1];localStorage.setItem("profile_img",((m=n.data.data)==null?void 0:m.profile_img)||""),localStorage.setItem("filename",((a=i.data.data)==null?void 0:a.filename)||""),localStorage.setItem("filename",((g=i.data.data)==null?void 0:g.filename)||""),localStorage.setItem("filepath",((_=i.data.data)==null?void 0:_.filepath)||""),localStorage.setItem("user_id",((f=o.data.data)==null?void 0:f.user_id)||""),localStorage.setItem("department_name",((h=o.data.data)==null?void 0:h.department)||""),localStorage.setItem("department_id",((v=o.data.data)==null?void 0:v.department_id)||""),localStorage.setItem("fname",((w=o.data.data)==null?void 0:w.fname)||""),localStorage.setItem("lname",((x=o.data.data)==null?void 0:x.lname)||""),localStorage.setItem("login","true"),localStorage.setItem("data_rule",JSON.stringify(n.data.data.roles)),localStorage.setItem("subministry_id",((S=n.data.data)==null?void 0:S.subministry_id)||"");let r={};n.data.data.roles.filter(I=>{r[`user${I.role_id}`]=!0}),this.ruleSet(r),this.$router.push({name:"my-work.waiting-booking-receive"}).catch(()=>{})})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}).catch(o=>{this.showLoading=!1,this.data.message=o.response.data.message,this.loginFalse=!0,this.data.personNo="",this.data.password=""})}},created(){localStorage.setItem("login","false")},watch:{modalRepass(){document.body.style.overflow=this.modalRepass?"hidden":""}}},E={class:"login-index"},z={class:"card-center"},B=e("div",{class:"group-image"},[e("img",{class:"image-logo",src:M,alt:"logo"}),e("div",{class:"title"},"ระบบสารบรรณอิเล็กทรอนิกส์")],-1),D={class:"group-input"},U={class:"group-input"},j=e("div",{class:"group-button"},[e("button",{type:"submit",class:"button-login"},"เข้าสู่ระบบ")],-1),J={class:"modal-class-repass"},O={class:"modal-center"},T={class:"modal-size"},G=P('<div class="modal-detail"><div class="image-icon"><img src="'+L+'" alt="" class="image-confirm"></div><div class="title-size">กรุณาติดต่อผู้ดูแลระบบเพื่อทำการเปลี่ยนรหัสผ่าน</div><div class="message">Email : xxxxx123@gmail.com</div><div class="message">โทร : 0xx-xxx-xxxx</div></div>',1),H={class:"group-footer center"},K=e("div",{class:"group-name"},[e("img",{src:A,alt:"",class:"image-times"}),e("div",{class:"name"},"ปิด")],-1),Q=[K];function W(u,s,o,p,t,l){const i=c("cpn-input"),n=c("Form"),r=c("cpn-modal-alert"),m=c("cpn-loading");return R(),V("div",E,[b(e("div",{class:"login-false"},k(t.data.message)+" !",513),[[N,t.loginFalse]]),e("div",z,[B,d(n,{onSubmit:s[7]||(s[7]=a=>l.onSubmit(!1)),onInvalidSubmit:u.onInvalidSubmit},{default:C(()=>[e("div",D,[e("div",{class:y(["input-name",!t.data.personNo&&!t.focusPersonNo?"show-text":""])},"ชื่อผู้ใช้งาน หรือ Email",2),d(i,{modelValue:t.data.personNo,"onUpdate:modelValue":s[0]||(s[0]=a=>t.data.personNo=a),name:"personNo",type:"text",classN:"input-login",rules:"required",onFocusin:s[1]||(s[1]=a=>t.focusPersonNo=!0),onFocusout:s[2]||(s[2]=a=>t.focusPersonNo=!1)},null,8,["modelValue"])]),e("div",U,[e("div",{class:y(["input-name",!t.data.password&&!t.focusPassword?"show-text":""])},"รหัสผ่าน",2),d(i,{modelValue:t.data.password,"onUpdate:modelValue":s[3]||(s[3]=a=>t.data.password=a),name:"password",type:"password",classN:"input-login",rules:"required",iconN:"eye",onFocusin:s[4]||(s[4]=a=>t.focusPassword=!0),onFocusout:s[5]||(s[5]=a=>t.focusPassword=!1)},null,8,["modelValue"])]),e("div",{class:"re-password pointer",onClick:s[6]||(s[6]=a=>l.repasswordClick())},"ลืมรหัสผ่าน?"),j]),_:1},8,["onInvalidSubmit"])]),b(e("div",J,[e("div",O,[e("div",T,[G,e("div",H,[e("button",{type:"button",onClick:s[8]||(s[8]=(...a)=>l.closeModalRepass&&l.closeModalRepass(...a)),class:"button-confirm button-success"},Q)])])])],512),[[N,t.modalRepass]]),d(r,{modalAlert:t.modalAlert},null,8,["modalAlert"]),d(m,{show:t.showLoading},null,8,["show"])])}const Y=F(q,[["render",W]]);export{Y as default};
