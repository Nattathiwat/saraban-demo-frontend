<template>
  <div class="user-detail">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/users-duotone.svg" alt="" class="icon-users">
            <div class="name">{{edit ? 'แก้ไขผู้ใช้งาน' : 'สร้างผู้ใช้งาน'}}</div>
          </div>
          <div class="group-end">
            <button type="button" class="button-back" @click="back()" >
              <img src="@/assets/images/icon/arrow-circle-left.svg" class="icon-back">
              <img src="@/assets/images/icon/line-up.svg" class="icon-line">
              ย้อนกลับ
            </button>
          </div>
        </div>
        <div class="line"></div>
        <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit">
          <div class="group-detail">
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ชื่อ<span class="required">*</span></div>
                <cpn-input  v-model="data.fname"
                            name="fname"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">นามสกุล<span class="required">*</span></div>
                <cpn-input  v-model="data.lname"
                            name="lname"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ชื่อผู้ใช้งาน <span v-if="!edit" class="required">*</span></div>
                <cpn-input  v-model="data.username"
                            name="Usern"
                            :rules="edit ? '' : 'required'"
                            :disabled="edit"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">รหัสผ่าน <span v-if="!edit" class="required">*</span></div>
                <cpn-input  v-model="data.password"
                            name="passw"
                            type="password"
                            :rules="edit ? '' : 'required'"
                            :disabled="edit"
                            placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">Email <span class="required">*</span></div>
                <cpn-input  v-model="data.email"
                            name="email"
                            rules="required|email"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">หน่วยงาน <span class="required">*</span></div>
                <cpn-autoComplete v-model="data.department_id"
                                  name="department"
                                  placeholder="กรุณาระบุ"
                                  rules="required"
                                  @keyup="keyupDepartment($event)"
                                  :optionSelect="data.optionSelect.department" />
              </div>
            </div>
          </div>
          <div class="group-level">
            <div class="level-first">
              <img src="@/assets/images/icon/crown-duotone.svg" alt="" class="icon-crown">
              <div class="name">สิทธิ์ <span class="required">*</span></div>
            </div>
            <div class="level-button">
              <button type="button" class="button-admin" v-bind:class="data.level == 1 ? 'active' : ''" @click="levelClick(1)">
                <div class="group-user">
                  <img v-show="data.level == 1" src="@/assets/images/icon/user-crown-duotoneffffff.svg" alt="" class="icon-user-crown">
                  <img v-show="data.level != 1" src="@/assets/images/icon/user-crown-duotone.svg" alt="" class="icon-user-crown">
                  User Admin
                </div>
              </button>
              <button type="button" class="button-user" v-bind:class="data.level == 2 ? 'active' : ''" @click="levelClick(2)">
                User
              </button>
            </div>
          </div>
          <div class="line"></div>
          <div class="group-footer">
            <div class="footer-left">
              <button type="button" class="button-danger" @click="cancelClick()">
                <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="icon-times-circle"/>
                ยกเลิก
              </button>
            </div>
            <div class="footer-right">
              <button type="submit" class="button-success">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                {{edit ? 'ยืนยันแก้ไขผู้ใช้งาน' : 'ยืนยันสร้างผู้ใช้งาน'}}
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
    <cpn-modal-alert  :modalAlert="modalAlert"/>
    <cpn-loading :show="showLoading"/>
  </div>
</template>
<script>
import date from '../../components/date/index.vue'
export default {
  name: 'user-manage-detail',
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      showLoading: false,
      edit: false,
      data: {
        fname: '',
        lname: '',
        username: '',
        password: '',
        email: '',
        department_id: '',
        level:  2,
        birthdate:'',
        optionSelect: {
          department: [{name:'สำนักงานเลขาธิการ', value: 'สำนักงานเลขาธิการ'}]
        }
      },
    }
  },
  components:{
    date
  },
  methods: {
    keyupDepartment(e) {
      this.data.optionSelect.department = []
      this.axios.get('/master-data/department', {
        params: {
          keyword: e.target.value
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            item.name = item.department_full_name
            return item
          })
          this.data.optionSelect.department = response.data.data
        }
      })
    },
    levelClick(data) {
      this.data.level = data
    },
    back() {
      this.$router.push({ 
        name: 'user-manage',
        query: {
          page: this.$route.query.page,
          perPage: this.$route.query.perPage
        }
      }).catch(()=>{});
    },
    cancelClick() {
      this.back()
      this.data.username = ''
      this.data.password = ''
      this.data.email = ''
      this.data.department_id = ''
      this.data.level = 2
      this.data.birthdate = ''
    },
    onSubmit() {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการ${this.edit ? 'แก้ไขผู้ใช้งาน' : 'สร้างผู้ใช้งาน'}หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          if (_this.edit) {
            let groupdata = {
              "fname": _this.data.fname,
              "lname": _this.data.lname,
              "email": _this.data.email,
              "department_id": parseInt(_this.data.department_id),
              "username": _this.data.username,
              "password": _this.data.password,
              "role_id":_this.data.level,
              "birthdate":_this.data.birthdate,
            }
            _this.showLoading = true
            _this.axios.put(`/user/${_this.$route.params.id}`, groupdata)
            .then(() => { 
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'success', title: 'ทำการแก้ไขผู้ใช้งานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
            })
            .catch((error) => {
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            let groupdata = {
              "fname": _this.data.fname,
              "lname": _this.data.lname,
              "email": _this.data.email,
              "department_id": parseInt(_this.data.department_id),
              "username": _this.data.username,
              "password": _this.data.password,
              "role_id": _this.data.level,
              "birthdate":_this.data.birthdate,
            }
            _this.showLoading = true
            _this.axios.post(`/user`, groupdata)
            .then(() => { 
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'success', title: 'ทำการสร้างผู้ใช้งานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
            })
            .catch((error) => {
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          }
        }
      }
    },
    apiDetail() {
      this.showLoading = true
      this.axios.get(`/user/${this.$route.params.id}`)
      .then((response) => { 
        this.showLoading = false
        this.data.fname = response.data.data.fname
        this.data.lname = response.data.data.lname
        this.data.username = response.data.data.username
        this.data.password = response.data.data.password
        this.data.email = response.data.data.email
        this.data.department_id = response.data.data.department_id
        this.data.birthdate = response.data.data.birthdate
        this.data.level = response.data.data.role_id
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    apiMaster() {
      this.showLoading = true
      this.axios.get(`/master-data/department`)
      .then((response) => { 
        this.showLoading = false
        response.data.data.filter(row => {
          row.value = row.id
          row.name = row.department_full_name
          return row
        })
        this.data.optionSelect.department = response.data.data
        if (this.$route.params.id) {
          this.edit = true
          this.apiDetail()
        } else {
          this.edit = false
        }
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    }
  },
  mounted () {
    this.apiMaster()
  }
}

</script>
<style lang="scss">
  .user-detail {
    .group-overflow {
      overflow: auto;
    }

    .detail {
      width: 100%;
      height: 100%;
      min-width: 1550px;
      min-height: 200px;
      border-radius: 15px;
      // box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);
      background-color: #fff;
      border: 0px;
      padding-bottom: 48px;

      .group-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 22px 29px;

        .group-first {
          display: flex;
          align-items: center;

          .icon-users {
            width: 45px;
            height: 41px;
            margin-right: 18px;
          }

          .name {
            color: #1a456b;
            font-weight: bold;
            font-size: 18px;
          }
        }

        .group-end {
          .button-back {
            width: 129px;
            height: 45px;
            border-radius: 5px;
            border: solid 1px #c1cfe3;
            background-color: transparent;
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: 500;
            color: #15466e;
            
            .icon-back {
              width: 23px;
              margin-left: 3px;
            }

            .icon-line {
              height: 45px;
              margin-left: 10px;
              margin-right: 9px;
            }
          }
        }
      }

      .line {
        height: 2px;
        width: 100%;
        background-color: #e2ebf7;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      .group-detail {
        padding: 20px 23px;

        .group-between {
          display: flex;

          .left {
            margin-right: 30px;
          }
        }

        .group-input {
          width: 100%;
          padding: 0 10px;
          margin-bottom: 30px;

          .name {
            font-size: 16px;
            font-weight: bold;
            color: #333;
            margin-bottom: 7px;
          }
        }
      }



      .group-level {
        border-radius: 5px;
        background-color: #f9fafc;

        .level-first {
          display: flex;
          align-items: center;
          padding: 24px 26px;

          .icon-crown {
            width: 34px;
            height: 28px;
          }

          .name {
            font-size: 16px;
            font-weight: 500;
            color: #333;
            margin-left: 15px;
            margin-top: 5px;
          }
        }

        .level-button {
          display: flex;
          align-items: center;
          padding: 0 28px 31px;

          .group-user {
            display: flex;
            align-items: center;
            justify-content: center;

            .icon-user-crown {
              width: 19px;
              height: 21px;
              margin-right: 9px;
            }

            .icon-badge-sheriff {
              width: 20px;
              height: 23px;
              margin-right: 9px;
            }
          }

          .button-admin {
            width: 150px;
            height: 45px;
            border-radius: 5px;
            box-shadow: 2.9px 0.8px 9.6px 0.4px rgb(137 148 169 / 35%);
            border: solid 2px #e2ebf7;
            background-color: #fff;
            font-size: 16px;
            font-weight: 500;
            color: #f94859;
            margin-right: 24px;
          }

          .button-badge {
            width: 85px;
            height: 45px;
            border-radius: 5px;
            box-shadow: 2.9px 0.8px 9.6px 0.4px rgba(137, 148, 169, 0.35);
            border: solid 2px #e2ebf7;
            background-color: #fff;
            font-size: 16px;
            font-weight: 500;
            color: #007773;
            margin-right: 24px;
          }

          .button-user {
            width: 88px;
            height: 45px;
            border-radius: 5px;
            box-shadow: 2.9px 0.8px 9.6px 0.4px rgb(137 148 169 / 35%);
            border: solid 2px #e2ebf7;
            background-color: #fff;
            font-size: 16px;
            font-weight: 500;
            color: #333;
          }

          .active {
            background-color: #15466e;
            color: #fff;
          }

        }
      }

      .group-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 23px;
        padding: 0 23px;

        .footer-left {
          .button-danger {
            width: 120px;
          }
        }

        .footer-right {
          display: flex;

          .button-success {
            width: 210px;
          }
        }

        button {
          height: 45px;
          border-radius: 5px;
          box-shadow: 7.4px 9.5px 13px 0 rgba(137, 148, 169, 0.14);
          border: 0;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-times-circle {
          width: 25px;
          height: 25px;
          margin-right: 10px;
        }

        .icon-check-circle {
          width: 25px;
          height: 25px;
          margin-right: 10px;
        }
      }
    }
  }
</style>