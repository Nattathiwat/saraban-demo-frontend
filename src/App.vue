<template>
  <div v-if="$route.name == 'login'">
    <router-view></router-view>
  </div>

  <div class="index-templete" v-else>
    <div class="detail-index-page">
      <transition name="navigation-ham" @enter="enter" @after-enter="afterEnter" @leave="leave">
        <div v-if="!hamburger" class="navigation">
          <img src="@/assets/images/navbar/triangle.png" class="icon-triangle" alt="logo" v-if="false">
          <img src="@/assets/images/navbar/logo2.svg" class="icon-logo2" alt="logo" v-if="false">
          <div class="group-image-logo">
            <img class="image-logo" src="~@/assets/images/navbar/logo.png" alt="logo">
            <div class="title mt-3">
              ระบบสารบรรณ Demo
            </div>
            <div class="sub-title" v-if="false">
              ระบบสารบรรณ Demo
            </div>
          </div>
          <div class="group-list-head">
            <div class="list-navbar-group">
              <div class="list-navbar pointer" :class="$route.name == 'booking-receive'|| $route.name == 'booking-receive-create' || $route.name == 'booking-receive-edit' ? 'active': ''" @click="removeSelect(), $router.push({name: 'booking-receive'})">
                <div class="group-image">
                  <img class="icon-square" src="@/assets/images/navbar/square.svg">
                  <img class="icon-memo" src="@/assets/images/navbar/memo-pad-duotone.svg">
                </div>
                หนังสือรับเข้า
              </div>
            </div>
            <div class="list-navbar-group">
              <div class="list-navbar pointer" :class="$route.name == 'booking-out'|| $route.name == 'booking-out-create' || $route.name == 'booking-out-edit' ? 'active': ''" @click="removeSelect(), $router.push({name: 'booking-out'})">
                <div class="group-image">
                  <img class="icon-square" src="@/assets/images/navbar/square.svg">
                  <img class="icon-memo" src="@/assets/images/navbar/memo-pad-duotone.svg">
                </div>
                หนังสือส่งออก
              </div>
            </div>
            <div class="list-navbar-group">
              <div class="list-navbar pointer" :class="$route.name == 'department' || $route.name == 'department-create' || $route.name == 'department-edit' || $route.name == 'user' || $route.name == 'user-create' || $route.name == 'user-edit' ? 'active' : '' " @click="removeSelect('userManage'), iconAngle.userManage = !iconAngle.userManage">
                <div class="group-image">
                  <img src="@/assets/images/navbar/square.svg" class="icon-square">
                  <img src="@/assets/images/navbar/users-cog.svg" class="icon-square-list">
                </div>
                จัดการผู้ใช้งาน
                <i class="bi bi-chevron-right icon-angle" v-show="!iconAngle.userManage"></i>
                <i class="bi bi-chevron-down icon-angle" v-show="iconAngle.userManage"></i>
              </div>
              <div v-show="iconAngle.userManage" class="list-navbar-sub pointer" :class="$route.name == 'department' || $route.name == 'department-create' || $route.name == 'department-edit' ? 'active2' : ''" @click="$router.push({name: 'department'})">
                <div class="icon-circle" />
                หน่วยงาน
              </div>
              <div v-show="iconAngle.userManage" class="list-navbar-sub pointer" :class="$route.name == 'user' || $route.name == 'user-create' || $route.name == 'user-edit' ? 'active2': ''" @click="$router.push({name: 'user'})">
                <div class="icon-circle" />
                ผู้ใช้งาน
              </div>
            </div>
          </div>
          <div class="version">
            Version {{version}}
          </div>
        </div>
      </transition>
      <div :style="hamburger ?'padding-left: 0px;':''" class="header-index">
        <div class="header-index-left">
          <img src="@/assets/images/navbar/hamburger.svg" class="icon-hamburger pointer" alt="hamburger" @click="hamburger = !hamburger">
          <div class="breadcrumbs">
            <div class='active'>
              {{ breadcrumbs }}
            </div>
          </div>
        </div>
        <div class="header-index-right">
          <div class="group-user">
            <div class="group-name">
              <div class="name">
                {{ dataUser.name }}
              </div>
              <div class="sub-name">
                {{ dataUser.position }}
              </div>
            </div>
          </div>
          <i class="bi bi-box-arrow-right icon-exit pointer" @click="logoutClick()"></i>
        </div>
      </div>
      <div :style="hamburger ?'padding-left: 30px;':''" class="detail-index">
        <router-view></router-view>
      </div>
    </div>
    <div :style="hamburger ?'padding-left: 0px;':''" class="foot-index">
      สงวนลิขสิทธิ์ © 2566 ระบบสารบรรณ Demo
    </div>
    <cpn-modal-alert :modal-alert="modalAlert" />
    <cpn-loading :show="showLoading" />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      version: '1.0.0',
      hamburger: false,
      showLoading: false,
      data:{
        logoImage: ''
      },
      iconAngle: {
        userManage: false
      },
      dataUser: {
        name: localStorage.getItem('fname') + ' ' + localStorage.getItem('lname'),
        position: localStorage.getItem('department_name')
      },
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      showLoading: false,
    }
  },
  computed: {
    breadcrumbs() {
      if (this.$route.name == 'user') {
        return 'การจัดการผู้ใช้งาน / ผู้ใช้งาน'
      } else if (this.$route.name == 'user-edit') {
        return 'การจัดการผู้ใช้งาน / ผู้ใช้งาน / แก้ไขผู้ใช้งาน'
      } else if (this.$route.name == 'user-create') {
        return 'การจัดการผู้ใช้งาน / ผู้ใช้งาน / เพิ่มผู้ใช้งาน'
      } else if (this.$route.name == 'department') {
        return 'การจัดการผู้ใช้งาน / หน่วยงาน'
      } else if (this.$route.name == 'department-edit') {
        return 'การจัดการผู้ใช้งาน / หน่วยงาน / แก้ไขหน่วยงาน'
      } else if (this.$route.name == 'department-create') {
        return 'การจัดการผู้ใช้งาน / หน่วยงาน / เพิ่มหน่วยงาน'
      } else if (this.$route.name == 'booking-out') {
        return 'หนังสือส่งออก'
      } else if (this.$route.name == 'booking-out-create') {
        return 'หนังสือส่งออก / สร้างหนังสือส่งออก'
      } else if (this.$route.name == 'booking-out-edit') {
        return 'หนังสือส่งออก / แก้ไขหนังสือส่งออก'
      } else if (this.$route.name == 'booking-receive') {
        return 'หนังสือรับเข้า'
      } else if (this.$route.name == 'booking-receive-create') {
        return 'หนังสือรับเข้า / สร้างหนังสือรับเข้า'
      } else if (this.$route.name == 'booking-receive-edit') {
        return 'หนังสือรับเข้า / แก้ไขหนังสือรับเข้า'
      } else {
        return this.$route.name
      }
    },
  },
  methods: {
    logoutClick() {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: 'ยืนยันออกจากระบบ หรือไม่',
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          _this.$router.push({name: 'login'})
          localStorage.setItem('login', 'false')
        }
      }
    },
    removeSelect(data) {
      for (let item in this.iconAngle) {
        if (item != data) {
          this.iconAngle[item] = false
        }
      }
    },
    enter(element) {
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.width = 'auto';

      const width = getComputedStyle(element).width;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.width = 0;

      getComputedStyle(element).width;

      requestAnimationFrame(() => {
        element.style.width = width;
      });
    },
    afterEnter(element) {
      element.style.width = 'auto';
    },
    leave(element) {
      const width = getComputedStyle(element).width;
      
      element.style.width = width;

      getComputedStyle(element).width;

      requestAnimationFrame(() => {
        element.style.width = 0;
      });
    },
  },
  mounted() {
    this.dataUser = {
      name: localStorage.getItem('fname') + ' ' + localStorage.getItem('lname'),
      position: localStorage.getItem('department_name')
    }
  },
  watch: {
    '$route.name'() {
      this.dataUser = {
        name: localStorage.getItem('fname') + ' ' + localStorage.getItem('lname'),
        position: localStorage.getItem('department_name')
      }
      if (this.$route.name == 'user' || this.$route.name == 'user-create' || this.$route.name == 'user-edit' || this.$route.name == 'department' || this.$route.name == 'department-create' || this.$route.name == 'department-edit') {
        this.iconAngle.userManage = true
      }
    },
    
  }
};
</script>

<style lang="scss">
.index-templete {
  .detail-index-page {
    min-height: 100vh;
    min-width: 900px;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    overflow: auto;
    margin-bottom: -80px;
    padding-bottom: 80px;
    
    .header-index {
      transition: padding 1s ease-in-out;
      height: 75px;
      background-color: #f5f5f5;
      position: fixed;
      width: 100%;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 310px;
      min-width: 600px;
      box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);

      .header-index-left {
        font-size: 18px;
        color: #0f3a64;
        margin-left: 25px;
        display: flex;
        align-items: center;

        .icon-hamburger {
          width: 29px;
          height: 24px;
          margin-right: 25px;
        }

        .breadcrumbs {
          display: flex;

          .breadcrumb-cut {
            margin: 0 26px;
          }

          .active {
            font-size: 18px;
            font-weight: bold;
            color: #0f3a64;
          }
        }
      }

      .header-index-right {
        display: flex;
        align-items: center;
        margin-right: 10px;

        .nav-lang{
          margin-right: 50px;
        }

        .group-user {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          text-align: center;
          
          .image-user {
            width: 56px;
            border-radius: 50%;
          }
          
          .group-name {
            margin-right: 10px;
            margin-top: 5px;
            color: #1a456b;

            .name {
              font-size: 19px;
              line-height: 25px;
              font-weight: 600;
            }

            .sub-name {
              font-size: 14px;
            }
          }
        }

        .icon-search {
          margin-right: 30px;
        }

        .icon-exit {
          margin-right: 25px;
          font-size: 30px;
        }
      }
    }

    .navigation {
      position: fixed;
      height: 100vh;
      width: 310px;
      background-color: #1a456b;
      z-index: 99;

      .icon-triangle {
        width: 150px;
        position: absolute;
        left: -15px;
        top: -15px;
        z-index: 1;
      }

      .icon-logo2 {
        width: 45px;
        position: absolute;
        left: 11px;
        top: 8px;
        z-index: 2;
      }

      .group-image-logo {
        text-align: center;
        background-color: #1a456b;
        margin: auto;
        margin-top: 31px;
        padding-bottom: 25px;
        width: 310px;
        color: #ffffff;
        border-bottom: 1px solid #446b8b;

        .image-logo {
          width: 126px;
        }

        .title {
          font-size: 18px;
          font-weight: bold;
          margin-top: 2px;
        }

        .sub-title {
          font-size: 16px;
          font-weight: normal;
          margin-top: 5px;
        }
      }

      .group-list-head::-webkit-scrollbar {
          display: none;
      }

      .group-list-head {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      
      .group-list-head {
        overflow: auto;
        height: 100vh;
        padding-bottom: 265px;
        width: 310px;
        position: relative;
        
        .active {
          background-color: #0d304d;
        }

        .active2 {
          background-color: #062238 !important;
        }

        .list-navbar-group {
          color: #ffffff;
          font-size: 14px;
          
          .list-navbar {
            padding-left: 25px;
            padding-right: 22px;
            height: 64px;
            border-bottom: 1px solid #446b8b;
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: normal;

            .group-image {
              position: relative;
              margin-right: 15px;

              .icon-square {
                width: 51px;
                margin-top: 7px;
              }

              .icon-square-list{
                position: absolute;
                left: 14.7px;
                top: 20px;
                width: 21px;
              }

              .icon-memo{
                position: absolute;
                left: 15px;
                top: 20px;
                width: 20px;
              }
              
              .icon-file-list, .icon-file-line {
                position: absolute;
                left: 17px;
                top: 19px;
                width: 18px;
              }

              .icon-user-clock{
                position: absolute;
                left: 16px;
                top: 20px;
                width: 25px;
              }

              .icon-clock{
                position: absolute;
                left: 16px;
                top: 22px;
                width: 22px;
              }

              .icon-chart{
                position: absolute;
                left: 15px;
                top: 21px;
                width: 21px;
              }

              .icon-chart-bar {
                position: absolute;
                left: 15px;
                top: 21px;
                width: 23px;
              }

              .icon-pencil {
                position: absolute;
                left: 15px;
                top: 20px;
                width: 26px;
              }

              .icon-users-cog {
                position: absolute;
                left: 13px;
                top: 21px;
                width: 27px;
              }
            }

            .icon-angle {
              margin-left: auto;
              font-size: 20px;
              color: #8aa3b7;
            }
          }

          .list-navbar-sub {
            padding-left: 60px;
            padding-right: 18px;
            height: 64px;
            border-bottom: 1px solid #446b8b;
            display: flex;
            justify-content: flex-start;
            background-color: #0d304d;
            align-items: center;
            font-size: 16px;
            font-weight: normal;

            .icon-circle {
              min-width: 10px;
              min-height: 10px;
              background-color: #8aa3b7;
              border-radius: 50%;
              margin-right: 12px;
            }
          }
        }
      }

      .version {
        position: absolute;
        bottom: 0px;
        width: 310px;
        color: #ffffff;
        font-size: 16px;
        font-weight: normal;
        background-color: #1a456b;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .detail-index {
      transition: padding 1s ease-in-out;
      width: 100%;
      position: relative;
      min-height: 100%;
      padding-top: 104px;
      padding-left: 340px;
      padding-right: 30px;
      padding-bottom: 100px;
    }
  }
  .foot-index {
    transition: padding 1s ease-in-out;
    width: 100%;
    height: 80px;
    background-color: #f5f5f5;
    color: #15466e;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 310px;
    box-shadow: 7.4px 9.5px 15px 15px rgb(137 148 169 / 14%)
  }
}
</style>
