<template>
  <div class="master-email-agency-detail">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/users-duotone.svg" alt="" class="icon-users">
            <div class="name">{{edit ? 'แก้ไขอีเมลสำหรับส่งหนังสือของหน่วยงาน' : 'สร้างอีเมลสำหรับส่งหนังสือของหน่วยงาน'}}</div>
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
                <div class="name">หน่วยงาน <span class="required">*</span></div>
                <cpn-autoComplete v-model="data.department"
                                  name="department"
                                  rules="required"
                                  placeholder="กรุณาระบุ"
                                  :optionSelect="optionSelect.department"
                                  @keyup="keyupDepartment($event)" />
              </div>
              <div class="group-input left"></div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">Email delivery method</div>
                <cpn-select v-model="data.emailDelivery"
                            name="emailDelivery"
                            placeholder="กรุณาระบุ"
                            :optionSelect="optionSelect.emailDelivery" />
              </div>
              <div class="group-input">
                <div class="name">SMTP username</div>
                <cpn-input  v-model="data.username"
                            name="username"
                            placeholder="กรุณาระบุ"
                            type="text" />
              </div>
              <div class="group-input">
                <div class="name">SMTP password</div>
                <cpn-input  v-model="data.password"
                            name="password"
                            placeholder="กรุณาระบุ"
                            type="text" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">SMTP server</div>
                <cpn-input  v-model="data.server"
                            name="server"
                            placeholder="กรุณาระบุ"
                            type="text" />
              </div>
              <div class="group-input">
                <div class="name">SMTP port</div>
                <cpn-input  v-model="data.port"
                            name="port"
                            placeholder="กรุณาระบุ"
                            type="text" />
              </div>
              <div class="group-input">
                <div class="name">SMTP HELLO domain</div>
                <cpn-input  v-model="data.domain"
                            name="domain"
                            placeholder="กรุณาระบุ"
                            type="text" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">SMTP authentication</div>
                <cpn-select v-model="data.authentication"
                            name="authentication"
                            placeholder="กรุณาระบุ"
                            :optionSelect="optionSelect.authentication" />
              </div>
              <div class="group-input d-flex align-items-center mb-0">
                <cpn-checkbox v-model="data.automatically"
                              name="automatically" />
                <div class="name mb-0">Automatically use STARTTLS if available</div>
              </div>
              <div class="group-input d-flex align-items-center mb-0">
                <cpn-checkbox v-model="data.connection"
                              name="connection" />
                <div class="name mb-0">Use SSL connection</div>
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
                บันทึก
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
  name: 'email-agency-detail',
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
        department: '',
        emailDelivery: '',
        username: '',
        password: '',
        server: '',
        port: '',
        domain: '',
        authentication: '',
        automatically: '',
        connection: ''
      },
      optionSelect:{
          department:[],
          emailDelivery: [],
          authentication: []
        }
    }
  },
  methods: {
    back() {
      this.$router.push({ 
        name: 'email-agency',
        query: {
          page: this.$route.query.page,
          perPage: this.$route.query.perPage
        }
      }).catch(()=>{});
    },
    cancelClick() {
      this.back()
      this.data.department = ''
      this.data.emailDelivery = ''
      this.data.username = ''
      this.data.password = ''
      this.data.server = ''
      this.data.port = ''
      this.data.domain = ''
      this.data.authentication = ''
      this.data.automatically = ''
      this.data.connection = ''
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
          let dataSave = {
            desc: _this.data.desc,
            name: _this.data.name,
            short_name: _this.data.short_name,
            subministry_id: _this.data.subministry_id,
            organization_id: _this.data.organization_id,
            department_id: _this.data.department_id
          }
          _this.showLoading = true
          _this.axios[_this.edit ? 'put' : 'post'](`/group${_this.edit ? '/' + _this.$route.params.id : ''}`, dataSave)
          .then(() => { 
            _this.showLoading = false
            _this.modalAlert = {showModal: true, type: 'success', title: _this.edit ? 'ทำการแก้ไขหน่วยงานสำเร็จแล้ว' : 'ทำการสร้างหน่วยงานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
          })
          .catch((error) => {
            _this.showLoading = false
            _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          })
        }
      }
    },
    apiDetail() {
      this.showLoading = true
      this.axios.get(`/group/${this.$route.params.id}`)
      .then((response) => { 
        this.showLoading = false
        this.data = {...this.data,...response.data.data}
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    api_master() {
      this.showLoading = true
      const response1 = this.axios.get('/master-data/department')
      const response2 = this.axios.get('/department')
      const response3 = this.axios.get('/subministry')

      this.axios.all([response1, response2, response3])
      .then(this.axios.spread ((...responses) =>{
        this.showLoading = false;
        const response1 = responses[0]
        const response2 = responses[1]
        const response3 = responses[2]

        response1.data.data.filter(item => {
          item.value = item.id
          item.name = item.name
          return item
        })

        response2.data.data.filter(item => {
          item.value = item.id
          item.name = item.department_full_name
          return item
        })

        response3.data.data.filter(item => {
          item.value = item.id
          item.name = item.Name
          return item
        })

        this.optionSelect.department = response1.data.data
        this.optionSelect.emailDelivery = response2.data.data
        this.optionSelect.authentication = response3.data.data

        if (this.$route.params.id) {
          this.edit = true
          this.apiDetail()
        } else {
          this.edit = false
        }

      }
      ))
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    keyupDepartment(e) {
      this.optionSelect.department = []
      this.axios.get('/master-data/department', {
        params: {
          keyword: e.target.value,
          organization_id: this.data.organization_id,
          // subministry_id: this.data.subministry_id,
          // group_id: this.data.group_id,
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            item.name = item.department_full_name
            return item
          })
          this.optionSelect.department = response.data.data
        }
      })
    }
  },
  mounted () {
    this.api_master()
  }
}

</script>
<style lang="scss">
  .master-email-agency-detail {
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

        .group-input-file {
          position: relative;
          width: 100%;
          overflow: hidden;

          .no-data {
            font-size: 16px;
            color: #212529;
            opacity: 0.7;
            font-weight: 500;
          }

          .button-file {
            border-radius: 5px;
            border: solid 1px #ced4da;
            background-color: #fff;
            height: 45px;
            width: 100%;
            padding-left: 15px;
            text-align: left;
          }

          span {
            overflow: hidden;
            white-space: nowrap;
            display: block;
            text-overflow: ellipsis;
            padding-right: 110px;
          }

          .text {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            position: absolute;
            right: 0px;
            top: 0px;
            background-color: #15466e;
            width: 110px;
            height: 45px;
            border-bottom-right-radius: 5px;
            border-top-right-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .del-department {
          width: 45px;
          height: 45px;
          color: #212529;
          background-color: #ffffff;
          border-color: #f8f9fa;
          border: 1px solid #ced4da;
          border-radius: 5px;
          margin-left: 15px;

          .image-trash {
            width: 18px;
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
            width: 160px;
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