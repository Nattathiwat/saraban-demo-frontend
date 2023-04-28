<template>
  <div class="mail-inex">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/users-cog-duotone.svg" alt="" class="icon-users-cog">
            <div class="name">ส่งหนังสือส่งออก ผ่านอีเมลอัตโนมัติ</div>
          </div>
        </div>
        <div class="line"></div>
        <Form @submit="apiMailAddress" @invalid-submit="onInvalidSubmit">
          <div class="group-detail">
            <div class="group-between">
              <div class="group-input left">
                <div class="name">คำขึ้นต้น </div>
                <cpn-input  v-model="data.search"
                            name="search"
                            type="text"
                            searchFlag="true"
                            @searchClick="search()"
                            placeholder="กรุณาระบุ" />
                <!-- <button type="button" class="suggest-bt" @click="suggest()">คำแนะนำ</button> -->
              </div>
              <div class="group-input">
                <div class="name">คำลงท้าย</div>
                <cpn-input  v-model="data.doc_num"
                            name="doc_num"
                            placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">ข้อมูลผู้ติดต่อ</div>
                <cpn-input  v-model="data.name"
                            name="name"
                            placeholder="กรุณาระบุ"  />
              </div>
            </div>
            <!-- <div class="group-button">
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
            </div> -->
          </div>
        </Form>
        <div class="group-body">
          <table class="table-department-inex">
            <thead class="thead">
              <tr class="thead-row">
                <th class="col1">ลำดับ</th>
                <th class="col2">เลขออก สลค.</th>
                <th class="col3">ถึง</th>
                <th class="col4">ข้อความ</th>
                <th class="col5">แนบไฟล์</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="tbody-row" v-for="(item, index) in data.table" :key="index">
                <td class="col1">{{index + 1 + (data.perPage * (data.page - 1))}}</td>
                <td class="col2">{{data.department_full_name}}</td>
                <td class="col3">
                  <div class="new-line">
                    <div class="name">สำเนาลับถึง (Bcc)</div>
                    <cpn-input  v-model="item.bcc"
                                :name="'bcc'+index"
                                :disabled="item.disabled"  />
                  </div>
                  <div class="new-line">
                    <div class="name">สำเนาลับถึง (Bcc)</div>
                    <cpn-input  v-model="item.bcc"
                                :name="'bcc'+index"
                                :disabled="item.disabled"  />
                  </div>
                  <div class="new-line">
                    <div class="name">สำเนาลับถึง (Bcc)</div>
                    <cpn-input  v-model="item.bcc"
                                :name="'bcc'+index"
                                :disabled="item.disabled"  />
                  </div>
                  <div class="new-line">
                    <div class="name">สำเนาลับถึง (Bcc)</div>
                    <cpn-input  v-model="item.bcc"
                                :name="'bcc'+index"
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
                  <div class="new-line">
                    <div class="name">สำเนาลับถึง (Bcc)</div>
                    <cpn-input  v-model="item.bcc"
                                :name="'bcc'+index"
                                :disabled="item.disabled"  />
                  </div>
                </td>
                <td class="col5">
                  <div class="new-line">
                    <div class="name">สำเนาลับถึง (Bcc)</div>
                    <cpn-input  v-model="item.bcc"
                                :name="'bcc'+index"
                                :disabled="item.disabled"  />
                  </div>
                </td>
              </tr>
              <tr class="tbody-row" v-if="data.table.length == 0">
                <td colspan="6">ไม่มีข้อมูล</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="group-footer">
          <div class="footer-left d-flex">
              <button type="button" class="button-danger" >
                <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="icon-times-circle"/>
                ปิด
              </button>
            </div>
            <div class="footer-right">
              <button type="submit" class="button-primary" >
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                บันทึกแบบร่าง
              </button>
              <button type="submit" class="button-success">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                บันทึกและส่งต่อ
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
  name: 'mail-list-inex',
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      showLoading: false,
      data: {
        search: '',
        table: [],
        page: 1,
        total: 0,
        lastPage: 0,
        perPage: 10,
        department_full_name: 'Test'
      },
    }
  },
  methods: {
    addClick() {
      this.$router.push({ 
        name: 'user-manage-create',
      }).catch(()=>{});
    },
    listClick(item) {
      this.$router.push({ 
        name: 'automail-sendmail-list',
        params: {id: item.id},
        query: {
          page: this.data.page,
          perPage: this.data.perPage
        }
      }).catch(()=>{});
    },
    pageChange(data) {
      this.data.perPage = data.perPage
      this.data.page = data.page
      this.apiUser()
    },
    search() {
      this.data.status = true
      this.data.perPage = 10
      this.data.page = 1
      this.apiUser()
    },
    apiUser() {
      this.data.table = []
      // this.data.page = 1
      // this.data.lastPage = 1
      // this.data.total = 1
      
      this.showLoading = true
      this.axios.get('/user' , {
        params: {
          keyword: this.data.search,
          page_size: this.data.perPage,
          page: this.data.page, 
        }
      })
      .then((response) => {
        this.showLoading = false
        response.data.data.filter(row => {
          row.permission_id = row.role_id
          row.permission_name = row.role_name
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
    deleteClick(data) {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการลบผู้ใช้งาน`,
        message: `“${data.fname}  ${data. lname}”  ใช่หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          _this.showLoading = true
          _this.axios.delete(`/user/${data.id}`)
          .then(() => { 
            _this.showLoading = false
            _this.modalAlert = {
              showModal: true,
              type: 'success',
              title: 'ทำการลบผู้ใช้งานสำเร็จแล้ว',
              msgSuccess: true,
              afterPressAgree() {
                _this.apiUser()
              }
            }
          })
          .catch((error) => {
            _this.showLoading = false
            _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          })
        }
      }
    },
  },
  mounted() {
    this.data.page = this.$route.query?.page || this.data.page
    this.data.perPage = this.$route.query?.perPage || this.data.perPage
    this.apiUser()
  },
}

</script>
<style lang="scss">
  .mail-inex {
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

          .icon-users-cog {
            width: 46px;
            height: 32px;
            margin-right: 16px;
            color: #0f3a64;
          }

          .name {
            color: #1a456b;
            font-weight: bold;
            font-size: 18px;
          }

          .add-user {
            height: 45px;
            border: 0;
            border-radius: 5px;
            background-color: #007773;
            font-size: 16px;
            font-weight: 500;
            color: #ffffff;
            margin-left: 35px;
            padding: 0 20px 0 20px;

            .group-image {
              display: flex;
              align-items: center;
              justify-content: center;

              .icon-plus {
                width: 24px;
                height: 24px;
                margin-right: 10px;
              }
            }
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
          // display: flex;

          .name {
            font-size: 16px;
            font-weight: bold;
            color: #333;
            margin-bottom: 7px;
          }

          .suggest-bt{
            height: 45px;
            border: 0;
            border-radius: 5px;
            background-color: #1a456b;
            font-size: 16px;
            font-weight: 500;
            color: #ffffff;
            margin-left: 35px;
            padding: 0 20px 0 20px;
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 23px;
        padding: 0 23px;

        .footer-left {
          .button-danger {
            width: 100px;
          }
        }

        .footer-right {
          display: flex;

          .button-success {
            width: 175px;
          }

          .button-primary {
            width: 170px;
            margin-right: 20px;
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