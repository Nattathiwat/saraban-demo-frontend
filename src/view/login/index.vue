<template>
  <div class="login-index">
    <div class="login-false" v-show="loginFalse">{{data.message}} !</div>
    <div class="card-center">
      <div class="group-image">
        <img class="image-logo" src="@/assets/images/logo.png" alt="logo">
        <div class="title">สำนักเลขาธิการคณะรัฐมนตรี</div>
        <div class="sub-title">ระบบสารบรรณ Demo</div>
      </div>
      <Form @submit="onSubmit(false)" @invalid-submit="onInvalidSubmit">
        <div class="group-input">
          <div :class="['input-name', !data.personNo && !focusPersonNo ? 'show-text' : '']">ชื่อผู้ใช้งาน หรือ Email</div>
          <cpn-input  v-model="data.personNo"
                  name="personNo"
                  type="text"
                  classN="input-login"
                  rules="required"
                  @focusin="focusPersonNo = true"
                  @focusout="focusPersonNo = false" />
        </div>
        <div class="group-input">
          <div :class="['input-name', !data.password && !focusPassword? 'show-text' : '']">รหัสผ่าน</div>
          <cpn-input  v-model="data.password"
                  name="password"
                  type="password"
                  classN="input-login"
                  rules="required"
                  iconN="eye"
                  @focusin="focusPassword = true"
                  @focusout="focusPassword = false"  />

        </div>
        <div class="re-password pointer" @click="repasswordClick()">ลืมรหัสผ่าน?</div>
        <div class="group-button">
          <button type="submit" class="button-login">เข้าสู่ระบบ</button>
        </div>
      </Form>
    </div>
    <div class="modal-class-repass" v-show="modalRepass">
      <div class="modal-center">
        <div class="modal-size">
          <div class="modal-detail">
            <div class="image-icon">
              <img src="@/assets/images/icon/brake-warning-duotone.svg" alt="" class="image-confirm">
            </div>
            <div class="title-size">กรุณาติดต่อผู้ดูแลระบบเพื่อทำการเปลี่ยนรหัสผ่าน</div> 
            <div class="message">Email : xxxxx123@gmail.com</div>
            <div class="message">โทร : 0xx-xxx-xxxx</div>
          </div>
          <div class="group-footer center">
            <button type="button" @click="closeModalRepass" class="button-confirm button-success">
              <div class="group-name">
                <img src="@/assets/images/icon/times-circle-duotone.svg" alt="" class="image-times">
                <div class="name">ปิด</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <cpn-modal-alert :modalAlert="modalAlert"/>
    <cpn-loading :show="showLoading"/>
  </div>
</template>

<script>
export default {
  name: "login-index",
  data() {
    return {
      modalRepass: false,
      focusPersonNo: false,
      focusPassword: false,
      data: {
        personNo: '',
        password: '',
        message: 'ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง !',
        fname: '',
        lname: '',
      },
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      showLoading: false,
      loginFalse: false
    }
  },
  methods: {
    closeModalRepass() {
      this.modalRepass = false
    },
    repasswordClick() {
      this.modalRepass = true
    },
    onSubmit(flag) { 
      let formData = {}
      formData = {
        username: this.data.personNo,
        password: this.data.password,
        // name: this.dataAd?.name,
        // email: this.dataAd?.username.split('@')[0],
        // ad_flag: true
      }
      this.showLoading = true
      this.axios.post('/auth/login',
      formData,
      {
        headers: {
          'Content-Type': "application/json"
        }
      })
      .then((response) => {    
        this.showLoading = false
        localStorage.setItem('user_id',response.data.data?.user_id || '')
        localStorage.setItem('department_name',response.data.data?.department || '')
        localStorage.setItem('department_id', response.data.data?.department_id || '')
        localStorage.setItem('fname', response.data.data?.fname || '')
        localStorage.setItem('lname', response.data.data?.lname || '')
        localStorage.setItem('login', 'true')
        this.$router.push({ 
          name: 'booking-receive',
        }).catch(()=>{});
      })
      .catch((error) => {
        this.showLoading = false
        this.data.message = error.response.data.message
        this.loginFalse = true
        this.data.personNo = ''
        this.data.password = ''
      })
    },
  },
  created() {
    localStorage.setItem('login', 'false')
  },
  watch: {
    'modalRepass' () {
      document.body.style.overflow = this.modalRepass ? 'hidden' : ''
    }
  }
}
</script>

<style lang="scss">
  .login-index {
    background-color: #1a456b;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .login-false {
      font-size: 18px;
      position: absolute;
      top: 0;
      width: 100%;
      text-align: center;
      background-color: #F2F4C3;
      height: 50px;
      padding-top: 13px;
      color: #CC0606;
    }
    .card-center {
      width: 500px;
      background-color: #ffffff;

      .group-image {
        display: block;
        text-align: center;
        background-color: #1a456b;
        margin: auto;
        margin-top: 60px;
        margin-bottom: 40px;
        padding-top: 20px;
        padding-bottom: 20px;
        width: 260px;
        color: #ffffff;

        .image-logo {
          width: 160px;
        }

        .title {
          font-size: 18px;
        }
        
        .sub-title {
          font-size: 16px;
        }
      }
      .group-input {
        position: relative;
        margin-left: 40px;
        margin-right: 40px;
        margin-bottom: 20px;
        
        .show-text {
          position: absolute;
          top: 15px;
          z-index: 1;
          color: #a7a7a7;
        }
        .input-name {
          margin-left: 15px;
          color: #1a456b;
        }
        .input-login {
          height: 56px;
          border: none;
          border-bottom: 2px solid #a7a7a7;
          border-radius: 0px;
        }
        
      }
      
      .re-password {
        text-align: right;
        margin-right: 40px;
        margin-top: 25px;
        font-size: 17px;
        color: #919191;
      }
      .group-button {
        text-align: center;
        margin-top: 40px;
        margin-bottom: 80px;

        .button-login {
          width: 350px;
          height: 50px;
          border: navajowhite;
          border-radius: 10px;
          color: #ffffff;
          font-size: 18px;
          background-color: #1a456b;
        }
        .button-ad {
          width: 350px;
          height: 50px;
          border: navajowhite;
          border-radius: 10px;
          color: #ffffff;
          font-size: 18px;
          background-color: #1a73e8;
          margin-top: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;

          .image-azure {
            width: 30px;
            margin-right: 10px;
          }
        }
      }
    }
    .modal-class-repass {
      position: fixed;
      overflow-y: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 999;
      background-color: rgba(33, 85, 163, 0.16);

      .modal-center {
        height: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
    

        .modal-size {
          width: 100%;
          pointer-events: auto;
          margin: auto;
          max-width: 758px;
          background-color: #ffffffff;
          border-radius: 15px;

          .modal-detail {
            margin-right: 38px;
            margin-left: 38px;
            padding-top: 46px;

            .image-icon {
              text-align: center;

              .image-confirm {
                width: 104px;
                height: 74px;
              }
            }

            .title-size {
              font-size: 22px;
              font-weight: 600;
              color: #333;
              text-align: center;
              margin-top: 36px;
            }

            .message {
              text-align: center;
              color: #333;
              font-size: 22px;
              font-weight: 500;
              margin-top: 30px;
            }
          }

          .group-footer {
            margin-top: 63px;
            margin-bottom: 35px;
            text-align: center;
            display: flex;
            justify-content: space-between;
            padding: 0 30px;
            
            .button-confirm {
              width: 150px;
              height: 65px;
              border-radius: 10px;
              background-color: #007773;
              border: 0;
            }


            .group-name {
              display: flex;
              align-items: center;
              justify-content: center;

              .image-times {
                width: 28px;
                height: 28px;
                margin-right: 14px;
              }

              .name {
                color: #ffffff;
                font-size: 24px;
                font-weight: 500;
              }
            }
          }

          .center {
            justify-content: center;
          }
        }
      }
  }
  }
</style>