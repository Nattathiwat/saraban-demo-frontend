<template>
  <div class="master-receiver-profile">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <i class="bi bi-inbox-fill icon-inbox"></i>
            <div class="name">ตั้งค่ารูปแบบข้อความตามผู้รับจดหมาย</div>
          </div>
        </div>
        <div class="line"></div>
        <Form @submit="apiReceiverProfile" @invalid-submit="onInvalidSubmit">
          <div class="group-detail">
            <div class="group-between">
              <div class="group-input left">
                <div class="name">รหัส </div>
                <cpn-input  v-model="data.template_code"
                            name="template_code"
                            :isNumber="true"
                            maxlength="3"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input left">
                <div class="name">กลุ่มผู้รับหนังสือ</div>
                <cpn-select v-model="data.group_receive_id"
                            name="group_receive_id"
                            :optionSelect="optionSelect.group_receive_id"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ชื่อเรียก</div>
                <cpn-input  v-model="data.keyword"
                            name="keyword"
                            placeholder="กรุณาระบุ" />
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
        <button type="button" class="add-button" @click="addClick()">
          <div class="group-image">
            <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
            เพิ่มรูปแบบการรับ-ส่งหนังสือ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
          </div>
        </button>
        <div class="group-body">
          <table class="table-master-receiver-profile">
            <thead class="thead">
              <tr class="thead-row">
                <th class="col1">ลำดับ</th>
                <th class="col2">รหัส</th>
                <th class="col3">กลุ่มผู้รับหนังสือ</th>
                <th class="col4">ชื่อเรียก</th>
                <th class="col5">เครื่องมือ</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="tbody-row" v-for="(item, index) in data.table" :key="index">
                <td class="col1">{{index + 1 + (data.perPage * (data.page - 1))}}</td>
                <td class="col2">{{item.template_code}}</td>
                <td class="col3">{{item.group_receive_name}}</td>
                <td class="col4">{{item.receive_name}}</td>
                <td class="col5">
                  <div class="group-icon">
                    <img @click="editClick(item)" src="@/assets/images/icon/pencil-alt-duotone.svg" alt="" class="image-pencil pointer">
                    <img @click="deleteClick(item)" src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer">
                  </div>
                </td>
              </tr>
              <tr class="tbody-row" v-if="data.table.length == 0">
                <td colspan="5">ไม่มีข้อมูล</td>
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
  name: 'receiver-profile',
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      showLoading: false,
      data: {
        template_code: '',
        group_receive_id: '',
        keyword: '',
        table: [],
        page: 1,
        total: 0,
        lastPage: 0,
        perPage: 10,
      },
      optionSelect: {
        group_receive_id: [{value: 1, name: 'พระราชวงศ์'}, {value: 2, name: 'พระภิกษุ'}, {value: 3, name: 'บุคคลธรรมดา'}, {value: 4, name: 'อื่นๆ'}]
      }
    }
  },
  methods: {
    cancelClick() {
      this.data.template_code = ''
      this.data.keyword = ''
      this.data.group_receive_id = ''
      this.data.perPage = 10
      this.data.page = 1
      this.apiReceiverProfile()
    },
    addClick() {
      this.$router.push({ 
        name: 'automail-receiver-profile-create',
      }).catch(()=>{});
    },
    editClick(item) {
      this.$router.push({ 
        name: 'automail-receiver-profile-edit',
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
      this.apiReceiverProfile()
    },
    apiReceiverProfile() {
      this.data.table = []
      this.showLoading = true
      this.axios.get('/master-data/message-template', {
        params:{
          template_code: this.data.template_code,
          group_receive_id: this.data.group_receive_id,
          keyword: this.data.keyword,
          page_size: this.data.perPage,
          page: this.data.page,
        }
      })
      .then((response) => {
        this.showLoading = false
        response.data.data.meta.filter(row=> {
          this.optionSelect.group_receive_id.filter(row2 => {
            if (row2.value == row.group_receive_id) {
              row.group_receive_name = row2.name
            }
          })
        })
        this.data.table = response.data.data.meta
        this.data.total = response.data.data.total
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
        title: `คุณยืนยันการลบตั้งค่ารูปแบบข้อความตามผู้รับจดหมาย`,
        message: `“${data.receive_name}” ใช่หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          _this.showLoading = true
          _this.axios.delete(`/master-data/message-template/${data.id}`)
          .then(() => { 
            _this.showLoading = false
            _this.modalAlert = {
              showModal: true,
              type: 'success',
              title: 'ทำการลบตั้งค่ารูปแบบข้อความตามผู้รับจดหมายสำเร็จแล้ว',
              msgSuccess: true,
              afterPressAgree() {
                _this.apiReceiverProfile()
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
    this.apiReceiverProfile()
  },
}

</script>
<style lang="scss">
  .master-receiver-profile {
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

          .icon-inbox {
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
              width: 100px;
              height: 45px;
              border: 0;
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

      .add-button {
        height: 45px;
        border: 0;
        border-radius: 5px;
        background-color: #007773;
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
        margin-top: 20px;
        padding: 0 20px 0 20px;
        margin-left: auto;
        margin-right: 30px;
        display: block;

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

        .table-master-receiver-profile {
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
              min-width: 120px;
              max-width: 120px;
              width: 0%;
              padding-left: 28px !important;
            }

            .col2 {
              min-width: 180px;
              max-width: 180px;
              width: 0%;
            }

            .col3 {
              min-width: 220px;
              max-width: 220px;
              width: 0%;
            }

            .col4 {
              min-width: 250px;
              width: 15%;
            }

            .col5 {
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

              .col4 {
                text-align: left;
              }

              .col1 {
                padding-left: 28px;
              }

              .col5 {
                padding-right: 28px;

                .group-icon {
                  display: flex;
                  height: 70px;
                  align-items: center;
                  justify-content: center;

                  .image-pencil {
                    width: 21px;
                    height: 21px;
                    margin-right: 28px;
                  }

                  .image-trash {
                    width: 20px;
                    height: 23px;
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