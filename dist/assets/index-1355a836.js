import{_ as y,r as c,o as F,c as R,w as S,v as N,a as e,t as V,b as d,d as k,e as C,n as b,f as P,g as L}from"./index-36c1b55d.js";const A="/assets/department-94349e4f.png";const M={name:"login-index",data(){return{modalRepass:!1,focusPersonNo:!1,focusPassword:!1,data:{personNo:"",password:"",message:"ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง !",fname:"",lname:""},modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,loginFalse:!1}},methods:{closeModalRepass(){this.modalRepass=!1},repasswordClick(){this.modalRepass=!0},onSubmit(u){let s={};s={username:this.data.personNo,password:this.data.password},this.showLoading=!0,this.axios.post("/auth/login",s,{headers:{"Content-Type":"application/json"}}).then(o=>{const p=this.axios.get(`/department/${o.data.data.department_id}`),a=this.axios.get(`/user/${o.data.data.user_id}`);this.axios.all([p,a]).then(this.axios.spread((...l)=>{var m,t,g,_,f,h,v,w,x;this.showLoading=!1;const i=l[0],n=l[1];localStorage.setItem("profile_img",((m=n.data.data)==null?void 0:m.profile_img)||""),localStorage.setItem("filename",((t=i.data.data)==null?void 0:t.filename)||""),localStorage.setItem("filename",((g=i.data.data)==null?void 0:g.filename)||""),localStorage.setItem("filepath",((_=i.data.data)==null?void 0:_.filepath)||""),localStorage.setItem("user_id",((f=o.data.data)==null?void 0:f.user_id)||""),localStorage.setItem("department_name",((h=o.data.data)==null?void 0:h.department)||""),localStorage.setItem("department_id",((v=o.data.data)==null?void 0:v.department_id)||""),localStorage.setItem("fname",((w=o.data.data)==null?void 0:w.fname)||""),localStorage.setItem("lname",((x=o.data.data)==null?void 0:x.lname)||""),localStorage.setItem("login","true"),localStorage.setItem("data_rule",JSON.stringify(n.data.data.roles));let r={};n.data.data.roles.filter(I=>{r[`user${I.role_id}`]=!0}),this.ruleSet(r),this.$router.push({name:"my-work.waiting-booking-receive"}).catch(()=>{})})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}).catch(o=>{this.showLoading=!1,this.data.message=o.response.data.message,this.loginFalse=!0,this.data.personNo="",this.data.password=""})}},created(){localStorage.setItem("login","false")},watch:{modalRepass(){document.body.style.overflow=this.modalRepass?"hidden":""}}},q={class:"login-index"},E={class:"card-center"},z=e("div",{class:"group-image"},[e("img",{class:"image-logo",src:A,alt:"logo"}),e("div",{class:"title"},"ระบบสารบรรณอิเล็กทรอนิกส์")],-1),B={class:"group-input"},D={class:"group-input"},U=e("div",{class:"group-button"},[e("button",{type:"submit",class:"button-login"},"เข้าสู่ระบบ")],-1),j={class:"modal-class-repass"},J={class:"modal-center"},O={class:"modal-size"},T=C('<div class="modal-detail"><div class="image-icon"><img src="'+P+'" alt="" class="image-confirm"></div><div class="title-size">กรุณาติดต่อผู้ดูแลระบบเพื่อทำการเปลี่ยนรหัสผ่าน</div><div class="message">Email : xxxxx123@gmail.com</div><div class="message">โทร : 0xx-xxx-xxxx</div></div>',1),G={class:"group-footer center"},H=e("div",{class:"group-name"},[e("img",{src:L,alt:"",class:"image-times"}),e("div",{class:"name"},"ปิด")],-1),K=[H];function Q(u,s,o,p,a,l){const i=c("cpn-input"),n=c("Form"),r=c("cpn-modal-alert"),m=c("cpn-loading");return F(),R("div",q,[S(e("div",{class:"login-false"},V(a.data.message)+" !",513),[[N,a.loginFalse]]),e("div",E,[z,d(n,{onSubmit:s[7]||(s[7]=t=>l.onSubmit(!1)),onInvalidSubmit:u.onInvalidSubmit},{default:k(()=>[e("div",B,[e("div",{class:b(["input-name",!a.data.personNo&&!a.focusPersonNo?"show-text":""])},"ชื่อผู้ใช้งาน หรือ Email",2),d(i,{modelValue:a.data.personNo,"onUpdate:modelValue":s[0]||(s[0]=t=>a.data.personNo=t),name:"personNo",type:"text",classN:"input-login",rules:"required",onFocusin:s[1]||(s[1]=t=>a.focusPersonNo=!0),onFocusout:s[2]||(s[2]=t=>a.focusPersonNo=!1)},null,8,["modelValue"])]),e("div",D,[e("div",{class:b(["input-name",!a.data.password&&!a.focusPassword?"show-text":""])},"รหัสผ่าน",2),d(i,{modelValue:a.data.password,"onUpdate:modelValue":s[3]||(s[3]=t=>a.data.password=t),name:"password",type:"password",classN:"input-login",rules:"required",iconN:"eye",onFocusin:s[4]||(s[4]=t=>a.focusPassword=!0),onFocusout:s[5]||(s[5]=t=>a.focusPassword=!1)},null,8,["modelValue"])]),e("div",{class:"re-password pointer",onClick:s[6]||(s[6]=t=>l.repasswordClick())},"ลืมรหัสผ่าน?"),U]),_:1},8,["onInvalidSubmit"])]),S(e("div",j,[e("div",J,[e("div",O,[T,e("div",G,[e("button",{type:"button",onClick:s[8]||(s[8]=(...t)=>l.closeModalRepass&&l.closeModalRepass(...t)),class:"button-confirm button-success"},K)])])])],512),[[N,a.modalRepass]]),d(r,{modalAlert:a.modalAlert},null,8,["modalAlert"]),d(m,{show:a.showLoading},null,8,["show"])])}const X=y(M,[["render",Q]]);export{X as default};
