<template>
  <div class="booking-out-inex">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/ballot-duotone.svg" alt="" class="icon-users-cog">
            <div class="name">หนังสือส่งออก</div>
            <button type="button" class="add-booking-out" @click="addClick()">
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
                          type="text"
                          :searchFlag="true"
                          @searchClick="search()"
                          placeholder="เลขที่หนังสือออก/ชื่อเรื่อง/Tag" />
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="group-body">
          <table class="table-booking-out-inex">
            <thead class="thead">
              <tr class="thead-row">
                <th class="col0">
                  <button @click="selectedAll($event)"><i class="bi bi-plus-lg"></i></button>
                </th>
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
              <template v-for="(item, index) in data.table" :key="index">
                <tr class="tbody-row pointer" :class="index%2 !=0 ? 'color-tr1': 'color-tr2'" @click="editClick(item)">
                  <td class="col0" @click="item.register_count > 1 ? selected($event, item) : ''">
                    <button v-if="item.select && item.register_count > 1"><i class="bi bi-dash-lg"></i></button>
                    <button v-if="!item.select && item.register_count > 1"><i class="bi bi-plus-lg"></i></button>
                  </td>
                  <td class="col1">{{item.speed_name}}</td>
                  <td class="col2">{{item.book_out_num}}</td>
                  <td class="col3">{{item.subject}}</td>
                  <td class="col4">{{item.register_count > 1 ? item.register_count : item.department_name}}</td>
                  <td class="col5">{{item.regis_date}}</td>
                  <td class="col6">{{item.book_type}}</td>
                  <td class="col7">
                    <div class="group-show">
                      <span class="span">
                        {{item.booking_follows.length > 0 ? item.booking_follows[0].response_name+'...' : ''}}
                      </span>
                      <div class="show-detail" v-show="item.booking_follows.length > 0">{{creater_name(item.booking_follows)}}</div>
                    </div>
                  </td>
                  <td class="col8">{{item.status_name}}</td>
                </tr>
                <template v-if="item.select && item.register_count > 1" v-for="(item2, index2) in item.booking_registers" :key="index2">
                  <tr class="tbody-row" :class="index%2 !=0 ? index2%2 !=0 ? 'color-tr1': 'color-tr2': index2%2 !=0 ? 'color-tr2': 'color-tr1'">
                    <td class="col0">{{}}</td>
                    <td class="col1">{{index2+1}}</td>
                    <td class="col2">{{item2.book_out_num}}</td>
                    <td class="col3">{{item2.subject}}</td>
                    <td class="col4">{{item2.department_name}}</td>
                    <td class="col5">{{item2.regis_date}}</td>
                    <td class="col6">{{item2.book_type}}</td>
                    <td class="col7">
                      <div class="group-show">
                        <span class="span">
                          {{item2.creater_name}}
                        </span>
                        <div class="show-detail">{{item2.creater_name}}</div>
                      </div>
                    </td>
                    <td class="col8">{{item2.status_name}}</td>
                  </tr>
                </template>
                <tr v-if="item.select && item.register_count > 1">
                  <td colspan="9" style="border-bottom: solid 1px #c1cfe3;"></td>
                </tr>
              </template>
              <tr class="tbody-row" v-if="data.table.length == 0">
                <td colspan="9">ไม่มีข้อมูล</td>
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
  name: 'booking-out-inex',
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      showLoading: false,
      data: {
        select: false,
        search: '',
        table: [],
        page: 1,
        total: 0,
        lastPage: 0,
        perPage: 10,
        tag:'',
      },
    }
  },
  methods: {
    creater_name(data) {
      let text = ''
      data.filter(row=>{
        text += row.response_name + ', '
      })
      return text.slice(0, -2)
    },
    selectedAll(event) {
      event.stopPropagation();
      this.data.select = !this.data.select;
      this.data.table.filter((row) => {
        row.select = this.data.select;
      })
    },
    selected(event, item) {
      event.stopPropagation();
      item.select = !item.select
      this.data.select = this.data.table.every((row) => {
        return row.select;
      })
    },
    addClick() {
      this.$router.push({ 
        name: 'subministry-work.booking-out-create',
      }).catch(()=>{});
    },
    editClick(item) {
      this.$router.push({ 
        name: 'subministry-work.booking-out-edit',
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
      this.apigetexport()      
    },
    search() {
      this.data.status = true
      this.data.perPage = 10
      this.data.page = 1
      this.data.tag = ''
      this.apigetexport()
    },
    apigetexport() {
      this.data.table = []
      
      this.showLoading = true
      this.axios.get('/booking-out', {
        params: {
          keyword: this.data.search,
          page_size: this.data.perPage,
          page: this.data.page,
          user_id: localStorage.getItem('user_id'),
          tag: this.data.tag,
          flag: 'subministry',
        }
      })
      .then((response) => {
        this.showLoading = false
        if (response.data.data ) {
          response.data.data.filter(row => {
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
    this.data.page = this.$route.query?.page || this.data.page
    this.data.perPage = this.$route.query?.perPage || this.data.perPage
    this.apigetexport()
  },
}

</script>
<style lang="scss">
  .booking-out-inex {
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

          .add-booking-out {
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

        .color-tr1 {
          background-color: #ffffff;
        }

        .color-tr2 {
          background-color: #f1f5fa;
        }

        .table-booking-out-inex {
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

            .col0 {
              min-width: 70px;
              max-width: 70px;
              width: 0px;
              padding-left: 28px !important;

              button {
                border: 0;
                border-radius: 5px;
                background-color: #1a456b;
                font-size: 16px;
                font-weight: bold;
                color: #ffffff;
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
              min-width: 200px;
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
              
              .col0 {
                min-width: 70px;
                max-width: 70px;
                width: 0px;
                padding-left: 28px !important;
                
                button {
                  border: 0;
                  border-radius: 5px;
                  background-color: transparent;
                  font-size: 16px;
                  font-weight: bold;
                  color: #1a456b;
                }
              }

              .col3 {
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