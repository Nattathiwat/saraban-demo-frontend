<template>
  <div class="department-inex">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/users-cog-duotone.svg" alt="" class="icon-users-cog">
            <div class="name">ประวัติกการแก้ไขชนิดหนังสือ</div>
            <button type="button" class="button-back" @click="back()">
                <img src="@/assets/images/icon/arrow-circle-left.svg" class="icon-back">
                <img src="@/assets/images/icon/line-up.svg" class="icon-line">
                ย้อนกลับ
            </button>
          </div>
          <div class="group-end">
            <div class="search" >
              <cpn-input  v-model="data.search"
                          name="search"
                          type="text"
                          :searchFlag="true"
                          @searchClick="search()"
                          placeholder="กรุณากรอกข้อมูลที่ต้องการค้นหา" />
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="group-body">
          <table class="table-department-inex">
            <thead class="thead">
              <tr class="thead-row">
                <th class="col1">วันที่</th>
                <th class="col2">สถานะ</th>
                <th class="col3">เลขชนิดหนังสือใหม่</th>
                <th class="col4">ชื่อชนิดหนังสือใหม่</th>
                <th class="col5">เลขชนิดหนังสือเก่า</th>
                <th class="col6">ชื่อชนิดหนังสือเก่า</th>
                <th class="col7">สร้างโดย</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="tbody-row" v-for="(item, index) in data.table" :key="index">
                <td class="col1">{{item.code}}</td>
                <td class="col2">{{item.department_short_name}}</td>
                <td class="col3">{{item.department_full_name}}</td>
                <td class="col4">{{item.department_full_name}}</td>
                <td class="col5">{{item.department_full_name}}</td>
                <td class="col6">{{item.department_short_name}}</td>
                <td class="col7">{{item.department_short_name}}</td>
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
  name: 'book-type-hist',
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
    back() {
      this.$router.push({ 
        name: 'book-type',
      }).catch(()=>{});
    },
    pageChange(data) {
      this.data.perPage = data.perPage
      this.data.page = data.page
      this.apiDepartment()
    },
    search() {
      this.data.status = true
      this.data.perPage = 10
      this.data.page = 1
      this.apiDepartment()
    },
    apiDepartment() {
      this.data.table = []
      this.showLoading = true
      this.axios.get('/department', {
        params:{
          keyword: this.data.search,
          page_size: this.data.perPage,
          page: this.data.page,
        }
      })
      .then((response) => {
        this.showLoading = false
        response.data.data.filter(row => {
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
    this.apiDepartment()
  },
}

</script>
<style lang="scss">
  .department-inex {
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
            margin-left: 35px;
            
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
              min-width: 250px;
              width: 15%;
              padding-left: 28px !important;
            }

            .col2 {
              min-width: 170px;
              width: 15%;
            }

            .col3 {
              min-width: 170px;
              width: 15%;
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

              .text-left {
                text-align: left;
              }

              .col1 {
                padding-left: 28px;
              }

              .col7 {
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