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
                <cpn-autoComplete v-model="data.department_id"
                                  name="department_id"
                                  rules="required"
                                  placeholder="กรุณาระบุ"
                                  :optionSelect="optionSelect.department_id"
                                  @keyup="keyupDepartment($event)" />
              </div>
              <div class="group-input left"></div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">Email delivery method</div>
                <cpn-select v-model="data.deliver_method_id"
                            name="deliver_method_id"
                            placeholder="กรุณาระบุ"
                            :optionSelect="optionSelect.deliver_method_id" />
              </div>
              <div class="group-input">
                <div class="name">SMTP username</div>
                <cpn-input  v-model="data.smtp_username"
                            name="smtp_username"
                            placeholder="กรุณาระบุ"
                            type="text" />
              </div>
              <div class="group-input">
                <div class="name">SMTP password</div>
                <cpn-input  v-model="data.smtp_password"
                            name="smtp_password"
                            placeholder="กรุณาระบุ"
                            type="password" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">SMTP server</div>
                <cpn-input  v-model="data.smtp_server"
                            name="smtp_server"
                            placeholder="กรุณาระบุ"
                            type="text" />
              </div>
              <div class="group-input">
                <div class="name">SMTP port</div>
                <cpn-input  v-model="data.smtp_port"
                            name="smtp_port"
                            placeholder="กรุณาระบุ"
                            type="text" />
              </div>
              <div class="group-input">
                <div class="name">SMTP HELLO domain</div>
                <cpn-input  v-model="data.smtp_hello_domain"
                            name="smtp_hello_domain"
                            placeholder="กรุณาระบุ"
                            type="text" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">SMTP authentication</div>
                <cpn-select v-model="data.smtp_authen_id"
                            name="smtp_authen_id"
                            placeholder="กรุณาระบุ"
                            :optionSelect="optionSelect.smtp_authen_id" />
              </div>
              <div class="group-input d-flex align-items-center mb-0">
                <cpn-checkbox v-model="data.is_start_tls"
                              name="is_start_tls" />
                <div class="name mb-0">Automatically use STARTTLS if available</div>
              </div>
              <div class="group-input d-flex align-items-center mb-0">
                <cpn-checkbox v-model="data.is_ssl_connection"
                              name="is_ssl_connection" />
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
              <button type="button" class="button-primary" @click="testmailClick()">
                Send a test email
              </button>
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
        department_id: '',
        deliver_method_id: '',
        smtp_username: '',
        smtp_password: '',
        smtp_server: '',
        smtp_port: '',
        smtp_hello_domain: '',
        smtp_authen_id: '',
        is_start_tls: false,
        is_ssl_connection: false
      },
      optionSelect:{
          department_id:[],
          deliver_method_id: [],
          smtp_authen_id: []
        }
    }
  },
  methods: {
    testmailClick() {
      this.showLoading = true
      let dataSave = {
        department_id: parseInt(this.data.department_id),
        department_name: this.optionSelect.department_id.filter(item => item.value == this.data.department_id)?.[0].name,
        deliver_method_id: parseInt(this.data.deliver_method_id),
        smtp_username: this.data.smtp_username,
        smtp_server: this.data.smtp_server,
        smtp_password: this.data.smtp_password,
        smtp_port: this.data.smtp_port,
        smtp_hello_domain: this.data.smtp_hello_domain,
        smtp_authen_id: parseInt(this.data.smtp_authen_id),
        is_start_tls: this.data.is_start_tls,
        is_ssl_connection: this.data.is_ssl_connection,
        user_id: parseInt(localStorage.getItem('user_id'))
      }
      this.axios.post(`/email-config/testing`, dataSave)
      .then((response) => { 
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'success', title: response.data.message,  message: response.data.data}
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
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
      this.data.department_id = ''
      this.data.deliver_method_id = ''
      this.data.smtp_username = ''
      this.data.smtp_password = ''
      this.data.smtp_server = ''
      this.data.smtp_port = ''
      this.data.smtp_hello_domain = ''
      this.data.smtp_authen_id = ''
      this.data.is_start_tls = false
      this.data.is_ssl_connection = false
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
            department_id: parseInt(_this.data.department_id),
            department_name: _this.optionSelect.department_id.filter(item => item.value == _this.data.department_id)?.[0].name,
            deliver_method_id: parseInt(_this.data.deliver_method_id),
            smtp_username: _this.data.smtp_username,
            smtp_server: _this.data.smtp_server,
            smtp_password: _this.data.smtp_password,
            smtp_port: _this.data.smtp_port,
            smtp_hello_domain: _this.data.smtp_hello_domain,
            smtp_authen_id: parseInt(_this.data.smtp_authen_id),
            is_start_tls: _this.data.is_start_tls,
            is_ssl_connection: _this.data.is_ssl_connection,
            user_id: parseInt(localStorage.getItem('user_id'))
          }
          _this.showLoading = true
          _this.axios[_this.edit ? 'put' : 'post'](`/email-config${_this.edit ? '/' + _this.$route.params.id : ''}`, dataSave)
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
      this.axios.get(`/email-config/${this.$route.params.id}`)
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
      // const response2 = this.axios.get('/department')
      // const response3 = this.axios.get('/subministry')

      // this.axios.all([response1, response2, response3])
      this.axios.all([response1])
      .then(this.axios.spread ((...responses) =>{
        this.showLoading = false;
        const response1 = responses[0]
        // const response2 = responses[1]
        // const response3 = responses[2]

        response1.data.data.filter(item => {
          item.value = item.id
          item.name = item.department_full_name
          return item
        })

        // response2.data.data.filter(item => {
        //   item.value = item.id
        //   item.name = item.name
        //   return item
        // })

        // response3.data.data.filter(item => {
        //   item.value = item.id
        //   item.name = item.Name
        //   return item
        // })

        this.optionSelect.department_id = response1.data.data
        // this.optionSelect.deliver_method_id = response2.data.data
        // this.optionSelect.smtp_authen_id = response3.data.data
        this.optionSelect.deliver_method_id = [{ value: 1, name: 'smtp'}]
        this.optionSelect.smtp_authen_id = [{ value: 1, name: 'login'}]

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
      this.optionSelect.department_id = []
      this.axios.get('/master-data/department', {
        params: {
          keyword: e.target.value,
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            item.name = item.department_full_name
            return item
          })
          this.optionSelect.department_id = response.data.data
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

          .button-primary {
            width: 180px;
            margin-right: 20px;
          }

          .button-success {
            width: 150px;
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