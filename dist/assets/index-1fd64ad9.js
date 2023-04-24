import{_ as y,r as c,o as F,c as R,w as S,v as b,a as e,t as V,b as n,d as k,e as C,n as N,f as P,g as L}from"./index-a2177c45.js";const A="/assets/department-94349e4f.png";const M={name:"login-index",data(){return{modalRepass:!1,focusPersonNo:!1,focusPassword:!1,data:{personNo:"",password:"",message:"ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง !",fname:"",lname:""},modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,loginFalse:!1}},methods:{closeModalRepass(){this.modalRepass=!1},repasswordClick(){this.modalRepass=!0},onSubmit(u){let s={};s={username:this.data.personNo,password:this.data.password},this.showLoading=!0,this.axios.post("/auth/login",s,{headers:{"Content-Type":"application/json"}}).then(o=>{const p=this.axios.get(`/department/${o.data.data.department_id}`),t=this.axios.get(`/user/${o.data.data.user_id}`);this.axios.all([p,t]).then(this.axios.spread((...l)=>{var m,a,g,_,f,h,v,w,x;this.showLoading=!1;const i=l[0],d=l[1];localStorage.setItem("profile_img",((m=d.data.data)==null?void 0:m.profile_img)||""),localStorage.setItem("filename",((a=i.data.data)==null?void 0:a.filename)||""),localStorage.setItem("filename",((g=i.data.data)==null?void 0:g.filename)||""),localStorage.setItem("filepath",((_=i.data.data)==null?void 0:_.filepath)||""),localStorage.setItem("user_id",((f=o.data.data)==null?void 0:f.user_id)||""),localStorage.setItem("department_name",((h=o.data.data)==null?void 0:h.department)||""),localStorage.setItem("department_id",((v=o.data.data)==null?void 0:v.department_id)||""),localStorage.setItem("fname",((w=o.data.data)==null?void 0:w.fname)||""),localStorage.setItem("lname",((x=o.data.data)==null?void 0:x.lname)||""),localStorage.setItem("login","true");let r={};d.data.data.roles.filter(I=>{r[`user${I.role_id}`]=!0}),this.ruleSet(r),this.$router.push({name:"my-work.waiting-booking-receive"}).catch(()=>{})})).catch(l=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:l.response.data.message}})}).catch(o=>{this.showLoading=!1,this.data.message=o.response.data.message,this.loginFalse=!0,this.data.personNo="",this.data.password=""})}},created(){localStorage.setItem("login","false")},watch:{modalRepass(){document.body.style.overflow=this.modalRepass?"hidden":""}}},q={class:"login-index"},E={class:"card-center"},z=e("div",{class:"group-image"},[e("img",{class:"image-logo",src:A,alt:"logo"}),e("div",{class:"title"},"ระบบสารบรรณอิเล็กทรอนิกส์")],-1),B={class:"group-input"},D={class:"group-input"},U=e("div",{class:"group-button"},[e("button",{type:"submit",class:"button-login"},"เข้าสู่ระบบ")],-1),j={class:"modal-class-repass"},T={class:"modal-center"},G={class:"modal-size"},H=C('<div class="modal-detail"><div class="image-icon"><img src="'+P+'" alt="" class="image-confirm"></div><div class="title-size">กรุณาติดต่อผู้ดูแลระบบเพื่อทำการเปลี่ยนรหัสผ่าน</div><div class="message">Email : xxxxx123@gmail.com</div><div class="message">โทร : 0xx-xxx-xxxx</div></div>',1),J={class:"group-footer center"},K=e("div",{class:"group-name"},[e("img",{src:L,alt:"",class:"image-times"}),e("div",{class:"name"},"ปิด")],-1),O=[K];function Q(u,s,o,p,t,l){const i=c("cpn-input"),d=c("Form"),r=c("cpn-modal-alert"),m=c("cpn-loading");return F(),R("div",q,[S(e("div",{class:"login-false"},V(t.data.message)+" !",513),[[b,t.loginFalse]]),e("div",E,[z,n(d,{onSubmit:s[7]||(s[7]=a=>l.onSubmit(!1)),onInvalidSubmit:u.onInvalidSubmit},{default:k(()=>[e("div",B,[e("div",{class:N(["input-name",!t.data.personNo&&!t.focusPersonNo?"show-text":""])},"ชื่อผู้ใช้งาน หรือ Email",2),n(i,{modelValue:t.data.personNo,"onUpdate:modelValue":s[0]||(s[0]=a=>t.data.personNo=a),name:"personNo",type:"text",classN:"input-login",rules:"required",onFocusin:s[1]||(s[1]=a=>t.focusPersonNo=!0),onFocusout:s[2]||(s[2]=a=>t.focusPersonNo=!1)},null,8,["modelValue"])]),e("div",D,[e("div",{class:N(["input-name",!t.data.password&&!t.focusPassword?"show-text":""])},"รหัสผ่าน",2),n(i,{modelValue:t.data.password,"onUpdate:modelValue":s[3]||(s[3]=a=>t.data.password=a),name:"password",type:"password",classN:"input-login",rules:"required",iconN:"eye",onFocusin:s[4]||(s[4]=a=>t.focusPassword=!0),onFocusout:s[5]||(s[5]=a=>t.focusPassword=!1)},null,8,["modelValue"])]),e("div",{class:"re-password pointer",onClick:s[6]||(s[6]=a=>l.repasswordClick())},"ลืมรหัสผ่าน?"),U]),_:1},8,["onInvalidSubmit"])]),S(e("div",j,[e("div",T,[e("div",G,[H,e("div",J,[e("button",{type:"button",onClick:s[8]||(s[8]=(...a)=>l.closeModalRepass&&l.closeModalRepass(...a)),class:"button-confirm button-success"},O)])])])],512),[[b,t.modalRepass]]),n(r,{modalAlert:t.modalAlert},null,8,["modalAlert"]),n(m,{show:t.showLoading},null,8,["show"])])}const X=y(M,[["render",Q]]);export{X as default};
