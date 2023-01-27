<template>
  <div class="import-book-inex">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/ballot-duotone.svg" alt="" class="icon-users-cog">
            <div class="name">หนังสือรับเข้า</div>
            <button type="button" class="add-import-book" @click="addClick()">
              <div class="group-image">
                <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                สร้างหนังสือรับเข้า
              </div>
            </button>
          </div>
          <div class="group-end">
            <div class="search">
              <cpn-input  v-model="data.search"
                          name="search"
                          type="search"
                          :searchFlag="true"
                          @search="search()"
                          placeholder="กรุณากรอกข้อมูลที่ต้องการค้นหา" />
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="group-body">
          <table class="table-import-book-inex">
            <thead class="thead">
              <tr class="thead-row">
                <th class="col1">ความเร่งด่วน</th>
                <th class="col2">เลขรับ สลค.</th>
                <th class="col3">เลขที่หนังสือ</th>
                <th class="col4">ชื่อเรื่อง</th>
                <th class="col5">ชนิด</th>
                <th class="col6">ลงวันที่</th>
                <th class="col7">ผู้รับผิดชอบ</th>
                <th class="col8">สถานะ</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="tbody-row pointer" v-for="(item, index) in data.table" :key="index" @click="editClick(item)">
                <td class="col1">{{item.speedName}}</td>
                <td class="col2">{{item.bookingNo}}</td>
                <td class="col3">{{item.referBookno}}</td>
                <td class="col4">
                  <div class="group-show none-bg">
                    <span class="span">
                      {{item.bookingSubject}}
                    </span>
                    <div v-if="false" class="show-detail">{{item.bookingSubject}}
                    </div>
                  </div>
                </td>
                <td class="col5">{{item.typename}}</td>
                <td class="col6">{{item.date}}</td>
                <td class="col7">
                  <div class="group-show">
                    <span class="span">
                      {{item.response}}
                    </span>
                    <div class="show-detail">{{item.response}}
                      <div v-if="false" class="image-size"></div>
                    </div>
                  </div>
                </td>
                <td class="col8">{{item.statusName}}</td>
              </tr>
              <tr class="tbody-row" v-if="data.table.length == 0">
                <td colspan="8">ไม่มีข้อมูล</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="group-footer">
          <cpn-pagination :page="data.page"
                          :total="data.total"
                          :lastPage="data.lastPage"
                          :perPage="data.perPage"
                          @pageChange="pageChange"
                    />
        </div>
      </div>
    </div>
    <cpn-modal-alert :modalAlert="modalAlert"/>
    <cpn-loading :show="showLoading"/>
  </div>
</template>
<script>
export default {
  name: 'import-book-inex',
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
        perPage: 50,
      },
    }
  },
  methods: {
    addClick() {
      this.$router.push({ 
        name: 'import-book-create',
      }).catch(()=>{});
    },
    editClick(item) {
      this.$router.push({ 
        name: 'import-book-edit',
        params: {id: item.id}
      }).catch(()=>{});
    },
    pageChange(data) {
      this.data.perPage = data.perPage
      this.data.page = data.page
      this.apiDepartment()
    },
    search() {
      this.data.status = true
      this.data.perPage = 50
      this.data.page = 1
      this.apiDepartment()
    },
    apiDepartment() {
      this.data.table = []
    //   this.data.table = [{
    //     "bookingNo": "ธ14/66",
    //     "categoryId": 3,
    //     "referBookno": "01",
    //     "typeId": null,
    //     "secretId": 4,
    //     "speedId": 4,
    //     "bookingSubject": "ทดสอบเข้าใหม่",
    //     "bookingSendto": "ลคร.",
    //     "methodId": 0,
    //     "contactName": "",
    //     "contactTel": "",
    //     "contactFax": "",
    //     "bookingStatus": 0,
    //     "bookingHint": "",
    //     "id": 5976,
    //     "bookingId": 5976,
    //     "date": "13/01/2566",
    //     "createDate": "2023-01-23T17:21:14.676528",
    //     "createBy": "pkm.test",
    //     "updateDate": "2023-01-23T17:21:14.676535",
    //     "updateBy": "pkm.test",
    //     "deleteFlag": 0,
    //     "bookingGetdate": "2023-01-23",
    //     "bookingIssuesDate": "2023-01-23T17:21:00",
    //     "departmentId": null,
    //     "bookingInoutFlag": 0,
    //     "statusName": "รอข้อมูล",
    //     "speedName": "ธรรมดา",
    //     "secretName": "ธรรมดา",
    //     "departmentName": "",
    //     "departmentShortName": null,
    //     "typename": "เรื่องเข้าใหม่ (สายครม.)",
    //     "categoryName": "01 : รับเข้า(สาย ครม)",
    //     "methodName": "ไม่ระบุ",
    //     "cnt": 0,
    //     "countday": 0,
    //     "speedPicName": "icon_bookSpeed(02-09-2020)_LSA.png",
    //     "speedPic": "/files/icon/speed/4/icon_bookSpeed(02-09-2020)_LSA.png",
    //     "statusPicName": "clipart949598.png",
    //     "statusPic": "/files/icon/status/0/clipart949598.png",
    //     "statusId": null,
    //     "subid": 1,
    //     "noteId": null,
    //     "govtSector": null,
    //     "uidApprove": null,
    //     "response": "กลุ่มงานราชกิจจานุเบกษา(ส่งประกาศราชกิจ)",
    //     "bookingContent": "",
    //     "bookingContent2": null,
    //     "originalFlag": 0,
    //     "cntbookwaitdata": 1,
    //     "cntBookNew": 0,
    //     "cntBookWalk": 0,
    //     "cntBookGet": 0,
    //     "cntBookReturn": 0,
    //     "cntBookCancel": 0,
    //     "cntBookReject": 0,
    //     "cntBookClose": 0,
    //     "total": 376,
    //     "createByFullname": null,
    //     "createBySub": null,
    //     "sendoutdate": null,
    //     "processId": null,
    //     "processTime": null,
    //     "receive_processid": null,
    //     "receive_processtime": null,
    //     "receive_acceptdate": null,
    //     "receive_acceptdepartmentcode": null,
    //     "receive_acceptdepartmentname": "",
    //     "accept_processid": null,
    //     "accept_processtime": null,
    //     "accept_acceptdate": null,
    //     "accept_acceptdepartmentcode": null,
    //     "accept_acceptdepartmentname": "",
    //     "reject_processid": null,
    //     "reject_processtime": null,
    //     "reject_acceptdate": null,
    //     "reject_acceptdepartmentcode": null,
    //     "reject_acceptdepartmentname": "",
    //     "invalid_processid": null,
    //     "invalid_processtime": null,
    //     "invalid_acceptdate": null,
    //     "invalid_acceptdepartmentcode": null,
    //     "invalid_acceptdepartmentname": "",
    //     "invalidacceptid_processid": null,
    //     "invalidacceptid_processtime": null,
    //     "invalidacceptid_acceptid": null,
    //     "invalidacceptid_acceptdate": null,
    //     "invalidacceptid_acceptdepartmentcode": null,
    //     "invalidacceptid_acceptdepartmentname": "",
    //     "status": null,
    //     "message": null,
    //     "prepareBy": null
    // }]
      // this.data.page = 1
      // this.data.lastPage = 1
      // this.data.total = 1
      
      this.showLoading = true
      this.axios.get('/booking-receive', {
        params: {
          // month_str: this.assetsUtils.year543(this.data.dateSt),
          // month_end: this.assetsUtils.year543(this.data.dateEn),
          // page: this.data.page,
          // import-book: 'INTERNAL',
          // page_size: this.data.pageSize
        }
      })
      .then((response) => {
        this.showLoading = false
        response.data.data.filter(row => {
          row.speedName = row.speed_name
          row.bookingNo = row.receive_document_number
          row.referBookno = row.document_number
          row.bookingSubject = row.subject
          row.typename = row.receive_type_name
          row.date = row.as_of_date
          row.response = row.response_name
          row.statusName = row.status
        })
        this.data.table = response.data.data
        // this.data.lastPage = response.data.data.last_page
        // this.data.total = response.data.data.total
        // this.data.active = response.data.data.page
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
        title: `คุณยืนยันการลบหนังสือรับเข้า`,
        message: `“${data.name}” ใช่หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          // _this.showLoading = true
          // _this.axios.delete(`/v1/master_data/division/${data.id}`)
          // .then(() => { 
          //   _this.showLoading = false
            _this.modalAlert = {
              showModal: true,
              type: 'success',
              title: 'ทำการลบหนังสือรับเข้าสำเร็จแล้ว',
              msgSuccess: true,
              afterPressAgree() {
                _this.apiDepartment()
              }
            }
          // })
          // .catch((error) => {
          //   _this.showLoading = false
          //   _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          // })
        }
      }
    },
  },
  mounted() {
    this.apiDepartment()
  },
}

</script>
<style lang="scss">
  .import-book-inex {
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

          .add-import-book {
            height: 46px;
            border: 0;
            border-radius: 5px;
            background-color: #007773;
            font-size: 18px;
            font-weight: 500;
            color: #ffffff;
            margin-left: 35px;
            padding: 0 25px 0 21px;

            .group-image {
              display: flex;
              align-items: center;
              justify-content: center;

              .icon-plus {
                width: 24px;
                height: 24px;
                margin-right: 17px;
              }
            }
          }
        }

        .group-end {
          display: flex;

          .date {
            margin-right: 25px;
            width: 230px;
          }

          .search {
            min-width: 480px;
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

        .table-import-book-inex {
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
              font-size: 18px;
              color: #333333;
              height: 71px;

              th {
                border-bottom: solid 1px #c1cfe3;
                padding: 0 10px;
                text-align: center !important;
              }
            }

            .col1 {
              min-width: 170px;
              width: 15%;
              padding-left: 28px !important;
            }

            .col2 {
              min-width: 170px;
              width: 15%;
            }

            .col3 {
              min-width: 150px;
              width: 15%;
            }

            .col4 {
              min-width: 250px;
              width: 25%;
            }

            .col5 {
              min-width: 250px;
              width: 25%;
            }

            .col6 {
              min-width: 170px;
              width: 15%;
            }

            .col7 {
              min-width: 170px;
              max-width: 170px;
              width: 15%;
            }

            .col8 {
              min-width: 200px;
              width: 20%;
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
              font-size: 18px;

              td {
                padding: 0 10px;
              }

              .col4 {
                text-align: left;
              }

              .col1 {
                padding-left: 28px;
              }

              .none-bg {
                background-color: transparent !important;
              }

              .group-show {
                text-align: left;
                position: relative;
                height: 100%;
                display: flex;
                align-items: center;
                padding: 5px 10px;
                border-radius: 5px;
                background-color: #f8f9fa;


                .span {
                  display: -webkit-box;
                  -webkit-line-clamp: 1;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  line-height: 40px;
                }

                .show-detail {
                  width: 100%;
                  overflow: auto;
                  max-height: 85px;
                  color: #fff;
                  position: absolute;
                  bottom: 45px;
                  left: 50%;
                  transform: translate(-50%, 0px);
                  padding: 9px 13px 9px 13px;
                  display: none;
                  font-size: 16px;
                  font-weight: 500;
                  text-align: left;
                  z-index: 1;
                  background-color: #15466e;
                  border-radius: 9px;

                  .image-size {
                    position: absolute;
                    left: 50%;
                    z-index: -1;
                    bottom: -5px;
                    width: 22px;
                    height: 22px;
                    background-color: #15466e;
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                    margin-left: -11px;
                  }
                }
              }

              .group-show {
                float: left;

                .icon-user-crown {
                  width: 19px;
                  height: 21px;
                  margin-right: 8px;
                }

                .icon-badge-sheriff {
                  width: 20px;
                  height: 23px;
                  margin-right: 7px;
                }
              }

              .group-show:hover{
                .show-detail{
                  display: block;
                }
              }

              .col8 {
                padding-right: 28px;
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