<template>
  <div class="department-detail">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/users-duotone.svg" alt="" class="icon-users">
            <div class="name">{{edit ? 'แก้ไขหน่วยงาน' : 'สร้างหน่วยงาน'}}</div>
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
                <div class="name">ชื่อย่อหน่วยงาน <span class="required">*</span></div>
                <cpn-input  v-model="data.department_short_name"
                            name="department_short_name"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ชื่อหน่วยงาน <span class="required">*</span></div>
                <cpn-input  v-model="data.department_full_name"
                            name="department_full_name"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
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
                {{edit ? 'ยืนยันแก้ไขหน่วยงาน' : 'ยืนยันสร้างหน่วยงาน'}}
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
export default {
  name: 'department-detail',
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
        department_short_name: '',
        department_full_name: '',
      },
    }
  },
  methods: {
    back() {
      this.$router.push({ 
        name: 'department',
      }).catch(()=>{});
    },
    cancelClick() {
      this.back()
      this.data.department_short_name = ''
      this.data.department_full_name = ''
    },
    onSubmit() {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการ${this.edit ? 'แก้ไขหน่วยงาน' : 'สร้างหน่วยงาน'}หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          if (_this.edit) {
            let groupdata = {
              department_full_name: _this.data.department_full_name,
              department_short_name: _this.data.department_short_name,
            }
            _this.showLoading = true
            _this.axios.put(`/department/${_this.$route.params.id}`, groupdata)
            .then(() => { 
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'success', title: 'ทำการแก้ไขหน่วยงานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
            })
            .catch((error) => {
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            let groupdata = {
              department_full_name: _this.data.department_full_name,
              department_short_name: _this.data.department_short_name,
            }
            _this.showLoading = true
            _this.axios.post(`/department`, groupdata)
            .then(() => { 
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'success', title: 'ทำการสร้างหน่วยงานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
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
      this.axios.get(`/department/${this.$route.params.id}`)
      .then((response) => { 
        this.showLoading = false
        this.data.department_short_name = response.data.data.department_short_name
        this.data.department_full_name = response.data.data.department_full_name
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
  },
  mounted () {
    if (this.$route.params.id) {
      this.edit = true
      this.apiDetail()
    } else {
      this.edit = false
    }
  }
}

</script>
<style lang="scss">
  .department-detail {
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
            font-size: 18px;
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
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom: 7px;
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
            width: 140px;
          }
        }

        .footer-right {
          display: flex;

          .button-success {
            width: 235px;
          }
        }

        button {
          height: 55px;
          border-radius: 10px;
          box-shadow: 7.4px 9.5px 13px 0 rgba(137, 148, 169, 0.14);
          border: 0;
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-times-circle {
          width: 28px;
          height: 28px;
          margin-right: 10px;
        }

        .icon-check-circle {
          width: 28px;
          height: 28px;
          margin-right: 10px;
        }
      }
    }
  }
</style>