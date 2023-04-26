<template>
  <div class="master-mail-addresses">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <i class="bi bi-envelope-fill icon-envelope"></i>
            <div class="name">หน่วยงาน</div>
          </div>
        </div>
        <div class="line"></div>
        <Form @submit="apiMailAddress" @invalid-submit="onInvalidSubmit">
          <div class="group-detail">
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ชื่อย่อ </div>
                <cpn-input  v-model="data.short_name"
                            name="short_name"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">หน่วยงาน</div>
                <cpn-input  v-model="data.department_full_name"
                            name="department_full_name"
                            placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ส่งถึง (TO) </div>
                <cpn-input  v-model="data.send_to"
                            name="send_to"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">สำเนาถึง (Cc) </div>
                <cpn-input  v-model="data.send_cc"
                            name="send_cc"
                            placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">สำเนาลับถึง (Bcc)</div>
                <cpn-input  v-model="data.send_bcc"
                            name="send_bcc"
                            placeholder="กรุณาระบุ"  />
              </div>
            </div>
            <div class="group-button">
              <div class="button-left">
                <button type="button" class="button-warning" @click="cancelClick()">
                  <i class="bi bi-arrow-clockwise icon-clockwise"></i>
                  ล้างการค้นหา
                </button>
              </div>
              <div class="button-right">
                <button type="submit" class="button-search">
                  <i class="bi bi-search icon-search"></i>
                  ค้นหา
                </button>
              </div>
            </div>
          </div>
        </Form>
        <div class="line"></div>
        <div class="group-body">
          <table class="table-department-inex">
            <thead class="thead">
              <tr class="thead-row">
                <th class="col1">ลำดับ</th>
                <th class="col2">หน่วยงาน</th>
                <th class="col3">อีเมล์ติดต่อหน่วยงาน</th>
                <th class="col4">เครื่องมือ</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="tbody-row" v-for="(item, index) in data.table" :key="index">
                <td class="col1">{{index + 1 + (data.perPage * (data.page - 1))}}</td>
                <td class="col2">{{item.department_full_name}}</td>
                <td class="col3">
                  <div class="new-line">
                    <div class="name">ส่งถึง (TO)</div>
                    <cpn-input  v-model="item.department_full_name"
                                :name="'send_to'+index"
                                :disabled="item.disabled"  />
                  </div>
                  <div class="new-line">
                    <div class="name">สำเนาถึง (Cc)</div>
                    <cpn-input  v-model="item.department_full_name"
                                :name="'send_cc'+index"
                                :disabled="item.disabled"  />
                  </div>
                  <div class="new-line">
                    <div class="name">สำเนาลับถึง (Bcc)</div>
                    <cpn-input  v-model="item.department_full_name"
                                :name="'send_bcc'+index"
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
  name: 'agency-inex',
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      showLoading: false,
      data: {
        short_name: '',
        department_full_name: '',
        send_to: '',
        send_cc: '',
        send_bcc: '',
        table: [],
        page: 1,
        total: 0,
        lastPage: 0,
        perPage: 10,
      },
    }
  },
  methods: {
    cancelClick() {
      this.data.short_name = ''
      this.data.department_full_name = ''
      this.data.send_to = ''
      this.data.send_cc = ''
      this.data.send_bcc = ''
      this.data.perPage = 10
      this.data.page = 1
      this.apiMailAddress()
    },
    pageChange(data) {
      this.data.perPage = data.perPage
      this.data.page = data.page
      this.apiMailAddress()
    },
    save(item) {
      let _this = this
      let groupdata = {
        send_to: item.send_to,
        send_cc: item.send_cc,
        send_bcc: item.send_bcc
      }
      this.showLoading = true
      this.axios.put(`/bookmethodx/${item.id}`, groupdata)
      .then(() => { 
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'success', title: 'ทำการแก้ไขอีเมล์ติดต่อหน่วยงานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.apiMailAddress() }}
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    apiMailAddress() {
      this.data.table = []
      this.showLoading = true
      this.axios.get('/department', {
        params:{
          short_name: this.data.short_name,
          department_full_name: this.data.department_full_name,
          send_to: this.data.send_to,
          send_cc: this.data.send_cc,
          send_bcc: this.data.send_bcc,
          page_size: this.data.perPage,
          page: this.data.page,
        }
      })
      .then((response) => {
        this.showLoading = false
        response.data.data.filter(row => {
          row.disabled = true
          this.data.total = row.total
        })
        this.data.table = response.data.data
        this.data.lastPage = Math.ceil(this.data.total/this.data.perPage)
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
  },
  mounted() {
    this.data.page = this.$route.query?.page || this.data.page
    this.data.perPage = this.$route.query?.perPage || this.data.perPage
    this.apiMailAddress()
  },
}

</script>
<style lang="scss">
  .master-mail-addresses {
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
        .group-button {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 10px;

          .button-left {
            .button-warning {
              width: 160px;
            }
          }

          .button-right {
            display: flex;
            margin-left: 10px;

            .button-search {
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
              margin-left: -5px;
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

          .icon-clockwise {
            font-size: 22px;
            margin-right: 10px;
          }

          .icon-search {
            font-size: 20px;
            margin-right: 10px;
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

        .table-department-inex {
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
                padding: 10px 0;

                .name {
                  margin-bottom: 5px;
                }

                .new-line {
                  padding: 5px 0;
                }
              }

              .col4 {
                padding-right: 28px;

                .group-icon {
                  display: flex;
                  height: 70px;
                  align-items: center;
                  justify-content: center;

                  .icon-pencil {
                    width: 21px;
                    height: 21px;
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