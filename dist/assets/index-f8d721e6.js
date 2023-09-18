import{_ as I,r as c,o as C,c as P,w as b,v as N,a as e,t as F,b as r,d as R,e as V,n as y,f as q,g as L}from"./index-7ce099a6.js";const A="/assets/department-94349e4f.png";const M={name:"login-index",data(){return{modalRepass:!1,focusPersonNo:!1,focusPassword:!1,data:{personNo:"",password:"",message:"ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง !",fname:"",lname:""},modalAlert:{showModal:!1,title:"",message:""},showLoading:!1,loginFalse:!1}},methods:{nameClick(){this.focusPersonNo=!0,document.querySelector('[name="personNoInput"]').focus()},passClick(){this.focusPassword=!0,document.querySelector('[name="passwordInput"]').focus()},closeModalRepass(){this.modalRepass=!1},repasswordClick(){this.modalRepass=!0},onSubmit(u){let s={};s={username:this.data.personNo,password:this.data.password},this.showLoading=!0,this.axios.post("/auth/login",s,{headers:{"Content-Type":"application/json"}}).then(l=>{const p=this.axios.get(`/department/${l.data.data.department_id}`),t=this.axios.get(`/user/${l.data.data.user_id}`);this.axios.all([p,t]).then(this.axios.spread((...o)=>{var m,a,g,f,_,h,v,w,x,S;this.showLoading=!1;const n=o[0],d=o[1];localStorage.setItem("profile_img",((m=d.data.data)==null?void 0:m.profile_img)||""),localStorage.setItem("filename",((a=n.data.data)==null?void 0:a.filename)||""),localStorage.setItem("filename",((g=n.data.data)==null?void 0:g.filename)||""),localStorage.setItem("filepath",((f=n.data.data)==null?void 0:f.filepath)||""),localStorage.setItem("user_id",((_=l.data.data)==null?void 0:_.user_id)||""),localStorage.setItem("department_name",((h=l.data.data)==null?void 0:h.department)||""),localStorage.setItem("department_id",((v=l.data.data)==null?void 0:v.department_id)||""),localStorage.setItem("fname",((w=l.data.data)==null?void 0:w.fname)||""),localStorage.setItem("lname",((x=l.data.data)==null?void 0:x.lname)||""),localStorage.setItem("login","true"),localStorage.setItem("data_rule",JSON.stringify(d.data.data.roles)),localStorage.setItem("subministry_id",((S=d.data.data)==null?void 0:S.subministry_id)||"");let i={};d.data.data.roles.filter(k=>{i[`user${k.role_id}`]=!0}),this.ruleSet(i),i!=null&&i.user1||i!=null&&i.user3?this.$router.push({name:"my-work.waiting-booking-receive"}).catch(()=>{}):this.$router.push({name:"subministry-work.booking-receive"}).catch(()=>{})})).catch(o=>{this.showLoading=!1,this.modalAlert={showModal:!0,type:"error",title:"Error",message:o.response.data.message}})}).catch(l=>{this.showLoading=!1,this.data.message=l.response.data.message,this.loginFalse=!0,this.data.personNo="",this.data.password=""})}},created(){localStorage.setItem("login","false")},watch:{modalRepass(){document.body.style.overflow=this.modalRepass?"hidden":""}}},E={class:"login-index"},z={class:"card-center"},B=e("div",{class:"group-image"},[e("img",{class:"image-logo",src:A,alt:"logo"}),e("div",{class:"title"},"ระบบสารบรรณอิเล็กทรอนิกส์")],-1),D={class:"group-input"},U={class:"group-input"},j=e("div",{class:"group-button"},[e("button",{type:"submit",class:"button-login"},"เข้าสู่ระบบ")],-1),J={class:"modal-class-repass"},O={class:"modal-center"},T={class:"modal-size"},G=V('<div class="modal-detail"><div class="image-icon"><img src="'+q+'" alt="" class="image-confirm"></div><div class="title-size">กรุณาติดต่อผู้ดูแลระบบเพื่อทำการเปลี่ยนรหัสผ่าน</div><div class="message">Email : xxxxx123@gmail.com</div><div class="message">โทร : 0xx-xxx-xxxx</div></div>',1),H={class:"group-footer center"},K=e("div",{class:"group-name"},[e("img",{src:L,alt:"",class:"image-times"}),e("div",{class:"name"},"ปิด")],-1),Q=[K];function W(u,s,l,p,t,o){const n=c("cpn-input"),d=c("Form"),i=c("cpn-modal-alert"),m=c("cpn-loading");return C(),P("div",E,[b(e("div",{class:"login-false"},F(t.data.message)+" !",513),[[N,t.loginFalse]]),e("div",z,[B,r(d,{onSubmit:s[9]||(s[9]=a=>o.onSubmit(!1)),onInvalidSubmit:u.onInvalidSubmit},{default:R(()=>[e("div",D,[e("div",{class:y(["input-name",!t.data.personNo&&!t.focusPersonNo?"show-text":""]),onClick:s[0]||(s[0]=(...a)=>o.nameClick&&o.nameClick(...a))},"ชื่อผู้ใช้งาน หรือ Email",2),r(n,{modelValue:t.data.personNo,"onUpdate:modelValue":s[1]||(s[1]=a=>t.data.personNo=a),name:"personNo",type:"text",classN:"input-login",rules:"required",onFocusin:s[2]||(s[2]=a=>t.focusPersonNo=!0),onFocusout:s[3]||(s[3]=a=>t.focusPersonNo=!1)},null,8,["modelValue"])]),e("div",U,[e("div",{class:y(["input-name",!t.data.password&&!t.focusPassword?"show-text":""]),onClick:s[4]||(s[4]=(...a)=>o.passClick&&o.passClick(...a))},"รหัสผ่าน",2),r(n,{modelValue:t.data.password,"onUpdate:modelValue":s[5]||(s[5]=a=>t.data.password=a),name:"password",type:"password",classN:"input-login",rules:"required",iconN:"eye",onFocusin:s[6]||(s[6]=a=>t.focusPassword=!0),onFocusout:s[7]||(s[7]=a=>t.focusPassword=!1)},null,8,["modelValue"])]),e("div",{class:"re-password pointer",onClick:s[8]||(s[8]=a=>o.repasswordClick())},"ลืมรหัสผ่าน?"),j]),_:1},8,["onInvalidSubmit"])]),b(e("div",J,[e("div",O,[e("div",T,[G,e("div",H,[e("button",{type:"button",onClick:s[10]||(s[10]=(...a)=>o.closeModalRepass&&o.closeModalRepass(...a)),class:"button-confirm button-success"},Q)])])])],512),[[N,t.modalRepass]]),r(i,{modalAlert:t.modalAlert},null,8,["modalAlert"]),r(m,{show:t.showLoading},null,8,["show"])])}const Y=I(M,[["render",W]]);export{Y as default};
