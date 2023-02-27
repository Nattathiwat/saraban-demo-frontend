<template>
  <div class="booking-receive-inex">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/ballot-duotone.svg" alt="" class="icon-users-cog">
            <div class="name">บันทึกรับเข้า</div>
          </div>
          <div class="group-end">
            <div class="search">
              <cpn-input  v-model="data.search"
                          name="search"
                          type="text"
                          :searchFlag="true"
                          @searchClick="search()"
                          placeholder="เลขรับ/เลขที่หนังสือ/ชื่อเรื่อง/Tag" />
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="group-body">
          <table class="table-booking-receive-inex">
            <thead class="thead">
              <tr class="thead-row">
                <th class="col1">ความเร่งด่วน</th>
                <th class="col2">เลขบันทึกภายใน</th>
                <th class="col3">ลงวันที่</th>
                <th class="col4">ชื่อเรื่อง</th>
                <th class="col5">หน่วยงานที่ส่งมา</th>
                <th class="col6">หน่วยงานที่รับ</th>
                <th class="col7">ชนิด</th>
                <th class="col8">ผู้รับผิดชอบ</th>
                <th class="col9">สถานะ</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="tbody-row pointer" v-for="(item, index) in data.table" :key="index" @click="editClick(item)">
                <td class="col1">{{item.speedName}}</td>
                <td class="col2">{{item.bookingNo}}</td>
                <td class="col3">{{item.date}}</td>
                <td class="col4">
                  <div class="group-show none-bg">
                    <span class="span">
                      {{item.bookingSubject}}
                    </span>
                    <div class="show-detail">{{item.bookingSubject}}
                      <div v-if="false" class="image-size"></div>
                    </div>
                  </div>
                </td>
                <td class="col5">{{item.typename}}</td>
                <td class="col6">{{item.date}}</td>
                <td class="col7">{{item.date}}</td>
                <td class="col8">
                  <div class="group-show">
                    <span class="span">
                      {{item.response}}
                    </span>
                    <div class="show-detail">{{item.response}}
                      <div v-if="false" class="image-size"></div>
                    </div>
                  </div>
                </td>
                <td class="col9">{{item.statusName}}</td>
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
  name: 'booking-receive-inex',
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
        // desc:'',
        // receive_date_str:'',
        // receive_date_end:'',
        // as_of_date_str:'',
        // as_of_date_end:'',
        // booktype:'',
        tag:'',
      },
    }
  },
  methods: {
    addClick() {
      this.$router.push({ 
        name: 'subministry-work.record-receive-create',
      }).catch(()=>{});
    },
    editClick(item) {
      this.$router.push({ 
        name: 'subministry-work.record-receive-edit',
        params: {
          id: item.id,
        },
        query:{
          book_type:item.book_type,   
          regis_id:item.regis_id,
          page: this.data.page,
          perPage: this.data.perPage
        }
      }).catch(()=>{});
    },
    pageChange(data) {
      this.data.perPage = data.perPage
      this.data.page = data.page
      this.apigetimport()
    },
    search() {
      this.data.status = true
      this.data.perPage = 50
      this.data.page = 1
      // this.data.desc = ''
      // this.data.receive_date_str = ''
      // this.data.receive_date_end = ''
      // this.data.as_of_date_str = ''
      // this.data.as_of_date_end = ''
      // this.data.booktype = ''
      this.data.tag = ''
      this.apigetimport()
    },
    apigetimport() {
      this.data.table = []
      // this.data.page = 1
      // this.data.lastPage = 1
      // // this.data.total = 1
      
      this.showLoading = true
      this.axios.get('/booking-receive', {
        params: {
          keyword: this.data.search,
          page_size: this.data.perPage,
          page: this.data.page,
          user_id: localStorage.getItem('user_id'),
          // desc: this.data.desc,
          // receive_date_str: this.data.receive_date_str,
          // receive_date_end: this.data.receive_date_end,
          // as_of_date_str: this.data.as_of_date_str,
          // as_of_date_end: this.data.as_of_date_end,
          // book_type_id: this.data.booktype,
          tag: this.data.tag,
        }
      })
      .then((response) => {
        this.showLoading = false
        if (response.data.data) {
            response.data.data.filter(row => {
            row.speedName = row.speed_name
            row.bookingNo = row.receive_document_number
            row.referBookno = row.document_number
            row.bookingSubject = row.subject
            row.typename = row.book_type_name
            row.date = row.as_of_date
            row.response = row.response_name
            row.statusName = row.status
            this.data.total = row.total
          })
          this.data.table = response.data.data
          this.data.lastPage = Math.ceil(this.data.total/this.data.perPage)
        }
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
                _this.apigetimport()
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
    this.data.page = this.$route.query?.page || this.data.page
    this.data.perPage = this.$route.query?.perPage || this.data.perPage
    this.apigetimport()
  },
}

</script>
<style lang="scss">
  .booking-receive-inex {
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

          .add-booking-receive {
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

        .table-booking-receive-inex {
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
              min-width: 300px;
              width: 30%;
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