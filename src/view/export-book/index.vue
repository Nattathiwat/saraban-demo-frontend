<template>
  <div class="export-book-inex">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/ballot-duotone.svg" alt="" class="icon-users-cog">
            <div class="name">หนังสือส่งออก</div>
            <button type="button" class="add-export-book" @click="addClick()">
              <div class="group-image">
                <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                สร้างหนังสือส่งออก
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
          <table class="table-export-book-inex">
            <thead class="thead">
              <tr class="thead-row">
                <th class="col1">ความเร่งด่วน</th>
                <th class="col2">เลขที่หนังสือออก</th>
                <th class="col3">ชื่อเรื่อง</th>
                <th class="col4">หน่วยงานปลายทาง</th>
                <th class="col5">ลงวันที่</th>
                <th class="col6">ชนิด</th>
                <th class="col7">ผู้รับผิดชอบ</th>
                <th class="col8">สถานะ</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="tbody-row pointer" v-for="(item, index) in data.table" :key="index" @click="editClick(item)">
                <td class="col1">{{item.speedName}}</td>
                <td class="col2">{{item.bookingNoN}}</td>
                <td class="col3">{{item.bookingSubject}}</td>
                <td class="col4">{{item.amtbook}}</td>
                <td class="col5">{{item.date}}</td>
                <td class="col6">{{item.typename}}</td>
                <td class="col7">{{item.prepareBy}}</td>
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
  name: 'export-book-inex',
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
        // desc:'',
        // receive_date_str:'',
        // receive_date_end:'',
        // as_of_date_str:'',
        // as_of_date_end:'',
        // booktype:'',
        // tag:'',
      },
    }
  },
  methods: {
    addClick() {
      this.$router.push({ 
        name: 'export-book-create',
      }).catch(()=>{});
    },
    editClick(item) {
      this.$router.push({ 
        name: 'export-book-edit',
        params: {id: item.id}
      }).catch(()=>{});
    },
    pageChange(data) {
      this.data.perPage = data.perPage
      this.data.page = data.page
      this.apigetexport()
      console.log('page')
      
    },
    search() {
      this.data.status = true
      this.data.perPage = 50
      this.data.page = 1
      this.data.total = 0
      this.data.lastPage = 1
      // this.data.desc = ''
      // this.data.receive_date_str = ''
      // this.data.receive_date_end = ''
      // this.data.as_of_date_str = ''
      // this.data.as_of_date_end = ''
      // this.data.booktype = ''
      // this.data.tag = ''
      this.apigetexport()
    },
    apigetexport() {
      this.data.table = []
      this.data.page = 1
      this.data.lastPage = 1
      this.data.total = 1
      
      this.showLoading = true
      this.axios.get('/booking-out', {
        params: {
          keyword: this.data.search,
          page_size: this.data.pageSize,
          page: this.data.page,
          // desc: this.data.desc,
          // receive_date_str: this.data.receive_date_str,
          // receive_date_end: this.data.receive_date_end,
          // as_of_date_str: this.data.as_of_date_str,
          // as_of_date_end: this.data.as_of_date_end,
          // book_type_id: this.data.booktype,
          // tag: this.data.tag,
        }
      })
      .then((response) => {
        this.showLoading = false
        response.data.data.filter(row => {
          row.speedName = row.speed_name
          row.bookingNoN = row.book_out_num
          row.bookingSubject = row.subject
          row.amtbook = row.department_name
          row.date = row.regis_date
          row.typename = row.book_type_name
          row.prepareBy = row.creater_name
          row.statusName = row.status_name
        })
        this.data.table = response.data.data
        this.data.lastPage = response.data.data.last_page
        this.data.total = response.data.data.total
        this.data.active = response.data.data.page
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
        title: `คุณยืนยันการลบหนังสือส่งออก`,
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
              title: 'ทำการลบหนังสือส่งออกสำเร็จแล้ว',
              msgSuccess: true,
              afterPressAgree() {
                _this.apigetexport()
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
    this.apigetexport()
  },
}

</script>
<style lang="scss">
  .export-book-inex {
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

          .add-export-book {
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

        .table-export-book-inex {
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
              min-width: 250px;
              width: 25%;
            }

            .col4 {
              min-width: 170px;
              width: 15%;
            }

            .col5 {
              min-width: 170px;
              width: 15%;
            }

            .col6 {
              min-width: 170px;
              width: 15%;
            }

            .col7 {
              min-width: 170px;
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

              .col3 {
                text-align: left;
              }

              .col1 {
                padding-left: 28px;
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