<template>
  <div class="automail-sendmail-list">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <i class="bi bi-envelope icon-envelope"></i>
            <div class="name">ส่งหนังสือส่งออก ผ่านอีเมลอัตโนมัติ</div>
          </div>
        </div>
        <div class="line"></div>
        <Form @submit="apiSendmailLogs" @invalid-submit="onInvalidSubmit">
          <div class="group-detail">
            <div class="group-between">
              <div class="group-input w-50">
                <div class="name">คำขึ้นต้น </div>
                <div class="group-recommend">
                  <cpn-input v-model="data.mail_register"
                              name="mail_register"
                              class="input-recommend"
                              placeholder="กรุณาระบุ" />
                  <button type="button" class="button-recommend">
                    <i class="bi bi-question icon-question"></i>
                    แนะนำ
                  </button>
                </div>
              </div>
              <div class="group-input">
                <div class="name">คำลงท้าย </div>
                <div class="d-flex">
                  <cpn-input  v-model="data.mail_number_out"
                              name="mail_number_out"
                              placeholder="กรุณาระบุ" />

                  <button type="button" class="button-check">
                    <i class="bi bi-check icon-check"></i>
                    ปรับปรุงทั้งหมด
                  </button>
                </div>
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">ข้อมูลผู้ติดต่อ </div>
                <div class="d-flex">
                  <cpn-input  v-model="data.mail_division"
                              name="mail_division"
                              placeholder="เลือกกอง/สำนัก" />

                  <button type="button" class="button-check">
                    <i class="bi bi-check icon-check"></i>
                    ปรับปรุงทั้งหมด
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
        <div class="line"></div>
        <div class="group-body">
          <table class="table-automail-sendmail-list">
            <thead class="thead">
              <tr class="thead-row">
                <th class="col1">ลำดับ</th>
                <th class="col2">หน่วยงาน</th>
                <th class="col3">อีเมล์ติดต่อหน่วยงาน</th>
                <th class="col4">เครื่องมือ</th>
              </tr>
            </thead>
            <tbody class="tbody" :class="data.table.length > 0 ? 'tbody-top' : ''">
              <tr class="tbody-row" v-for="(item, index) in data.table" :key="index">
                <td class="col1">{{index + 1 + (data.perPage * (data.page - 1))}}</td>
                <td class="col2">{{item.department_name}}</td>
                <td class="col3">
                  <div class="new-line">
                    <div class="name">ส่งถึง (TO)</div>
                    <cpn-input  v-model="item.to"
                                :name="'to'+index"
                                :disabled="item.disabled"  />
                  </div>
                  <div class="new-line">
                    <div class="name">สำเนาถึง (Cc)</div>
                    <cpn-input  v-model="item.cc"
                                :name="'cc'+index"
                                :disabled="item.disabled"  />
                  </div>
                  <div class="new-line">
                    <div class="name">สำเนาลับถึง (Bcc)</div>
                    <cpn-input  v-model="item.bcc"
                                :name="'bcc'+index"
                                :disabled="item.disabled"  />
                  </div>
                </td>
                <td class="col4">
                  <div class="group-icon">
                    <img v-show="item.disabled" @click="item.disabled = false" src="@/assets/images/icon/pencil-alt-duotone.svg" alt="" class="icon-pencil pointer">
                    <button @click="save(item)" v-show="!item.disabled" type="button" class="button-success">
                      <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle pointer"/>
                    </button>
                    <button v-show="!item.disabled" @click="item.disabled = true" type="button" class="button-danger">
                      <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="icon-times-circle"/>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="tbody-row" v-if="data.table.length == 0">
                <td colspan="4">ไม่มีข้อมูล</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="group-footer">
          <cpn-pagination :page="data.page"
                          :total="data.total"
                          :lastPage="data.lastPage"
                          :perPage="data.perPage"
                          @pageChange="pageChange" />
        </div>
      </div>
    </div>
    <cpn-modal-alert :modalAlert="modalAlert"/>
    <cpn-loading :show="showLoading"/>
  </div>
</template>
<script>
export default {
  name: 'automail-sendmail-list',
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      showLoading: false,
      data: {
        mail_register: '',
        mail_number_out: '',
        mail_speed: '',
        mail_title: '',
        mail_division: '',
        mail_to: '',
        mail_date_st: '',
        mail_send_to: '',
        mail_send_cc: '',
        mail_send_bcc: '',
        mail_date_send: '',
        table: [],
        page: 1,
        total: 0,
        lastPage: 0,
        perPage: 10,
      },
      optionSelect: {
        mail_register: [],
        mail_speed: [],
        mail_division: [],
        mail_to: []
      }
    }
  },
  methods: {
    cancelClick() {
      this.data.mail_register = ''
      this.data.mail_number_out = ''
      this.data.mail_speed = ''
      this.data.mail_title = ''
      this.data.mail_division = ''
      this.data.mail_to = ''
      this.data.mail_date_st = ''
      this.data.mail_send_to = ''
      this.data.mail_send_cc = ''
      this.data.mail_send_bcc = ''
      this.data.mail_date_send = ''
      this.data.perPage = 10
      this.data.page = 1
      this.apiSendmailLogs()
    },
    pageChange(data) {
      this.data.perPage = data.perPage
      this.data.page = data.page
      this.apiSendmailLogs()
    },
    apiSendmailLogs() {
      this.data.table = []
      this.showLoading = true
      this.axios.get('/master-data/department-contact', {
        params:{
          mail_register: this.data.mail_register,
          mail_number_out: this.data.mail_number_out,
          mail_speed: this.data.mail_speed,
          mail_title: this.data.mail_title,
          mail_division: this.data.mail_division,
          mail_to: this.data.mail_to,
          mail_date_st: this.data.mail_date_st,
          mail_send_to: this.data.mail_send_to,
          mail_send_cc: this.data.mail_send_cc,
          mail_send_bcc: this.data.mail_send_bcc,
          mail_date_send: this.data.mail_date_send,
          page_size: this.data.perPage,
          page: this.data.page,
        }
      })
      .then((response) => {
        this.showLoading = false
        response.data.data.meta.filter(row => row.disabled = true)
        this.data.table = response.data.data.meta
        this.data.total = response.data.data.total
        this.data.lastPage = Math.ceil(this.data.total/this.data.perPage)
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    keyupDepartment(e) {
      this.optionSelect.mail_to = []
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
          this.optionSelect.mail_to = response.data.data
        }
      })
    },
    keyupSubministry(e) {
      this.optionSelect.mail_division = []
      this.axios.get('/master-data/subministry', {
        params: {
          keyword: e.target.value,
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            item.name = item.Name
            return item
          })
          this.optionSelect.mail_division = response.data.data
        }
      })
    },
    api_master() {
      this.showLoading = true
      const request1 = this.axios.get(`/master-data/book-type`)
      const request2 = this.axios.get(`/master-data/speed`)
      const request3 = this.axios.get(`/master-data/subministry`)
      const request4 = this.axios.get(`/master-data/department`)

      this.axios.all([request1, request2, request3, request4])
      .then(this.axios.spread((...responses) => {
        this.showLoading = false
        const response1 = responses[0]
        const response2 = responses[1]
        const response3 = responses[2]
        const response4 = responses[3]

        response1.data.data.filter(row => {
          row.value = row.id
          row.name = row.desc
          return row
        })
        response2.data.data.filter(row => {
          row.value = row.id
          row.name = row.desc
          return row
        })
        response3.data.data.filter(item => {
          item.value = item.id
          return item
        })
        response4.data.data.filter(item => {
          item.value = item.id
          item.name = item.department_full_name
          return item
        })

        this.optionSelect.mail_register = response1.data.data
        this.optionSelect.mail_speed = response2.data.data
        this.optionSelect.mail_division = response3.data.data
        this.optionSelect.mail_to = response4.data.data
        
        this.apiSendmailLogs()
        
      })).catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
      
    },
  },
  mounted() {
    this.data.page = this.$route.query?.page || this.data.page
    this.data.perPage = this.$route.query?.perPage || this.data.perPage
    // this.api_master()
  },
}

</script>
<style lang="scss">
  .automail-sendmail-list {
    .group-overflow {
      // overflow: auto;
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
      padding-bottom: 22px;

      .group-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 22px 29px;

        .group-first {
          display: flex;
          align-items: center;

          .icon-envelope {
            margin-right: 10px;
            color: #0f3a64;
            font-size: 26px;
          }

          .name {
            color: #1a456b;
            font-weight: bold;
            font-size: 18px;
          }
        }
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

        .group-recommend {
          position: relative;

          .input-recommend {
            margin-right: 90px;
          }

          .button-recommend {
            position: absolute;
            top: 0;
            right: 0;
            background-color: #1a456b;
            font-size: 16px;
            font-weight: 500;
            color: #ffffff;
            min-width: 100px;
            max-width: 100px;
            height: 45px;
            border: 0;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-right: 15px;

            .icon-question {
              font-size: 30px;
            }
          }
        }

        .button-check {
          background-color: #1a456b;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          min-width: 160px;
          max-width: 160px;
          height: 45px;
          border: 0;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 15px;
          padding-right: 10px;

          .icon-check {
            font-size: 30px;
            margin-right: 5px;
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

      .group-body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 26px 30px;
        overflow: auto;
        margin-bottom: 1px;

        table tbody tr:nth-child(odd) {
          background-color: #ffffff;
        }

        table tbody tr:nth-child(even) {
          background-color: #f1f5fa;
        }

        .table-automail-sendmail-list {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0px;
          border-radius: 5px;
          border: solid 1px #c1cfe3;
          background-color: #fff;
          overflow: hidden;
          
          .thead {
            .thead-row {
              font-weight: bold;
              font-size: 16px;
              color: #333333;
              height: 71px;

              th {
                border-bottom: solid 1px #c1cfe3;
                padding: 0 10px;
                text-align: center !important;
              }
            }

            .col1 {
              min-width: 180px;
              max-width: 180px;
              width: 0%;
              padding-left: 28px !important;
            }

            .col2 {
              min-width: 350px;
              max-width: 350px;
              width: 0%;
            }

            .col3 {
              min-width: 450px;
              width: 15%;
            }

            .col4 {
              min-width: 200px;
              max-width: 200px;
              width: 0%;
              padding-right: 28px !important;
            }
          }

          .tbody-top {
            vertical-align: inherit;
          }

          .tbody {
            .color-tr {
              background-color: #f1f5fa;
            }

            .tbody-row {
              width: 100%;
              height: 70px;
              text-align: center;
              color: #333333;
              border-bottom: 0px;
              font-weight: 500;
              font-size: 16px;

              td {
                padding: 0 10px;
              }

              .col2, .col3 {
                text-align: left;
              }

              .col1 {
                padding-left: 28px;
              }

              .col3 {
                padding: 20px;

                .name {
                  margin-bottom: 5px;
                }

                .new-line {
                  padding-bottom: 10px;
                }
              }

              .col4 {
                padding-right: 28px;
                position: relative;

                .group-icon {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: absolute;
                  left: 50%;
                  transform: translate(-50%, 20px);

                  .icon-pencil {
                    width: 22px;
                    height: 22px;
                    margin-top: 5px;
                  }


                  .icon-times-circle {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                  }

                  .icon-check-circle {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                  }

                  button {
                    width: 30px;
                    padding: 0;
                    margin: 0;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                  }

                  .button-danger {
                    margin-left: 15px;
                  }
                }
              }
            }
          }
        }
      }

      .group-footer {
        margin: 0px 29px;
      }
    }
  }
</style>