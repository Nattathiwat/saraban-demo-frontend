<template>
  <div class="mail-inex">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/users-cog-duotone.svg" alt="" class="icon-users-cog">
            <div class="name">รายการหนังสือส่งออก ที่ส่งผ่านอีเมลอัตโนมัติ</div>
          </div>
        </div>
        <div class="line"></div>
        <Form @submit="apiSendmailLists" @invalid-submit="onInvalidSubmit">
          <div class="group-detail">
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ทะเบียน </div>
                <cpn-autoComplete   v-model="data.regis_id"
                                    name="regis_id"
                                    @keyup="keyup_regis_type"
                                    :optionSelect="optionSelect.regis_id"
                                    placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">เลขออก สลค.</div>
                <cpn-input  v-model="data.document_number"
                            name="document_number"
                            placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">เรื่อง</div>
                <cpn-input  v-model="data.name"
                            name="name"
                            placeholder="กรุณาระบุ"  />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">จาก</div>
                <cpn-autoComplete  v-model="data.department_id"
                            name="department_id"
                            @keyup="keyup_department"
                            :optionSelect="optionSelect.department_id"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ถึง</div>
                <cpn-autoComplete  v-model="data.department_dest_id"
                            name="department_dest_id"
                            @keyup="keyup_department"
                            :optionSelect="optionSelect.department_dest_id"
                            placeholder="เลือกหน่วยงานปลายทาง" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">จากวันที่</div>
                <cpn-datepicker  v-model="data.start_date"
                            name="start_date"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ถึงวันที่</div>
                <cpn-datepicker  v-model="data.end_date"
                            name="end_date"
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
        <div class="group-body">
          <table class="table-department-inex">
            <thead class="thead">
              <tr class="thead-row">
                <th class="col1">ลำดับ</th>
                <th class="col2">ความเร่งด่วน</th>
                <th class="col3">ชั้นความลับ</th>
                <th class="col4">เลขออก สลค.</th>
                <th class="col5">ทะเบียนหนังสือ</th>
                <th class="col6">ชื่อเรื่อง</th>
                <th class="col7">ชนิดหนังสือ</th>
                <th class="col8">ลงวันที่</th>
                <th class="col9">จาก</th>
                <th class="col10">ถึง</th>
                <th class="col11">                    
                  <img src="@/assets/images/icon/envelope-solid.svg" alt="" class="icon-send">
                </th>
              </tr>
            </thead>
            <tbody class="tbody">
              <template v-for="(item, index) in data.table" :key="index">
                <tr class="tbody-row tbody-row-index" :class="index%2 !=0 ? 'color-tr1': 'color-tr2'">
                  <td class="col1" :rowspan="item.rowspan" :class="index%2 !=0 ? 'color-tr1': 'color-tr2'">{{index + 1 + (data.perPage * (data.page - 1))}}</td>
                  <td class="col2">{{item.speed_name}}</td>
                  <td class="col3">{{ item.secret_name }}</td>
                  <td class="col4">{{item.book_out_document_number}}</td>
                  <td class="col5">{{item.book_regis_name}}</td>
                  <td class="col6">{{ item.subject }}</td>
                  <td class="col7">{{item.book_type_name}}</td>
                  <td class="col8">{{item.as_of_date}}</td>
                  <td class="col9">{{item.from }}</td>
                  <td class="col10">{{item.to}}</td>
                  <td class="col11">
                    <div class="group-icon">
                      <img @click="listClick(item)" src="@/assets/images/icon/share-from-square-solid.svg" alt="" class="icon-send pointer">
                      <img @click="sendmailClick(item)" src="@/assets/images/icon/envelope-solid.svg" alt="" class="icon-send pointer">
                    </div>
                  </td>
                </tr>
                <template v-for="(item2, index2) in item.book_series" :key="index2">
                  <tr class="tbody-row" :class="(index%2 == 0) ? 'color-tr3': 'color-tr3'">
                    <td colspan="10" class="col2" style="text-align: left;">ชุดที่{{item2.no}}</td>
                  </tr>
                  <tr class="tbody-row" v-for="(item3, index3) in item2.subs" :key="index3"  :class="(index3%2 != 0) ? 'color-tr1': 'color-tr2'">
                    <td class="col1">
                      <div>{{index3+1}} {{item3.book_out_document_number}}</div>
                      <div>{{item3.book_regis_name}}</div>
                    </td>
                    <td class="col2">
                      <div>{{item3.as_of_date}}</div>
                      <div>{{item3.from}} ถึง {{item3.to}}</div>
                    </td>
                    <td class="col3"></td>
                    <td class="col4"></td>
                    <td class="col5"></td>
                    <td class="col6"></td>
                    <td class="col7"></td>
                    <td class="col8"></td>
                    <td class="col9"></td>
                    <td class="col11">
                      <div class="group-icon">
                        <img @click="listClick(item)" src="@/assets/images/icon/share-from-square-solid.svg" alt="" class="icon-send pointer">
                        <img @click="sendmailClick(item)" src="@/assets/images/icon/envelope-solid.svg" alt="" class="icon-send pointer">
                      </div>
                    </td>
                  </tr>
                  <tr class="tbody-row-end2">
                    <td colspan="11"></td>
                  </tr>
                  </template>
                  <tr :class="index%2 !=0 ? 'tbody-row-end1': 'tbody-row-end2'">
                    <td colspan="11"></td>
                  </tr>
                </template>
              <tr class="tbody-row" v-if="data.table.length == 0">
                <td colspan="11">ไม่มีข้อมูล</td>
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
  name: 'mail-manage-inex',
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
        regis_id: '',
        department_id: '',
        department_dest_id: '',
      },
      optionSelect: {
        regis_id:[],
        department_id:[],
        department_dest_id:[],
      }
    }
  },
  methods: {
    sendmailClick(item) {
      this.$router.push({ 
        name: 'automail-sendmail-edit',
        params: {id: item.id},
        query: {
          page: this.data.page,
          perPage: this.data.perPage
        }
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
      this.apiSendmailLists()
    },
    search() {
      this.data.status = true
      this.data.perPage = 10
      this.data.page = 1
      this.apiSendmailLists()
    },
    apiSendmailLists() {
      this.data.table = []
      this.showLoading = true
      this.axios.get('/book-out-external/book-out-automail', {
        params:{
          regis_id: this.data.regis_id,
          department_id: this.data.department_id,
          department_dest_id: this.data.department_dest_id,
          page_size: this.data.perPage,
          page: this.data.page,
        }
      })
      .then((response) => {
        this.showLoading = false
        response.data.data.meta.filter(item1=> {
          let sum = 0
          item1.book_series.filter(item2=> {
            sum += item2.subs.length
          })
          sum += item1.book_series.length
          sum += 2
          item1.rowspan = sum
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
    api_master() {
      this.showLoading = true
      const request8 = this.axios.get(`/master-data/book-category` ,{
        params: {
          book_type: 1
        }
      })
      const request9 = this.axios.get('/master-data/department-user')

      this.axios.all([ request8, request9])
      .then(this.axios.spread((...responses) => {
        this.showLoading = false
        const response8 = responses[0]
        const response9 = responses[1]
        
        response8.data.data.filter(row => {
          row.value = row.id
          row.name = row.name
          return row
        })
        response9.data.data.filter(item => {
          item.value = item.id
            item.name = item.desc
            item.human_flag = item.human_flag
            item.response_type = item.type
          return item
        })

        this.optionSelect.regis_id = response8.data.data
        this.optionSelect.department_dest_id = response9.data.data
        
        this.apiSendmailLists()
        
      })).catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
      
    },
    keyup_regis_type(e) {
      this.optionSelect.sendTo = []
      this.axios.get('/master-data/book-category', {
        params: {
          keyword: e.target.value
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            item.name = item.name
            return item
          })
          this.optionSelect.regis_id = response.data.data
        }
      })
    },
    keyup_department(e) {
      this.optionSelect.sendTo = []
      this.axios.get('/master-data/department-user', {
        params: {
          keyword: e.target.value
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            item.name = item.desc
            item.human_flag = item.human_flag
            item.response_type = item.type
            return item
          })
          this.optionSelect.regis_id = response.data.data
        }
      })
    },
  },
  mounted() {
    this.data.page = this.$route.query?.page || this.data.page
    this.data.perPage = this.$route.query?.perPage || this.data.perPage
    this.api_master()
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

        // table tbody tr:nth-child(odd) {
        //   background-color: #ffffff;
        // }

        // table tbody tr:nth-child(even) {
        //   background-color: #f1f5fa;
        // }

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
              min-width: 140px;
              max-width: 140px;
              width: 0%;
              padding-left: 28px !important;
            }

            .col2 {
              min-width: 160px;
              max-width: 160px;
              width: 0%;
            }

            .col3 {
              min-width: 160px;
              max-width: 160px;
              width: 0%;
            }
            
            .col4 {
              min-width: 180px;
              max-width: 180px;
              width: 0%;
            }

            .col5 {
              min-width: 180px;
              max-width: 180px;
              width: 0%;
            }

            .col6 {
              min-width: 450px;
              width: 15%;
            }

            .col7 {
              min-width: 180px;
              max-width: 180px;
              width: 0%;
            }

            .col8 {
              min-width: 150px;
              max-width: 150px;
              width: 0%;
            }

            .col9 {
              min-width: 150px;
              width: 15%;
            }

            .col10 {
              min-width: 150px;
              width: 15%;
            }

            .col11 {
              min-width: 200px;
              max-width: 200px;
              width: 0%;
              padding-right: 28px !important;

              .icon-send {
                margin-right: 10px;
                color: #0f3a64;
                width: 20px;
                height: 20px;
              }
            }
          }

          .tbody {
            .color-tr1 {
              background-color: #f1f5fa !important;
            }
            .color-tr2 {
              background-color: #ffffff !important;
            }
            .color-tr3 {
              background-color: #f5f5f5 !important;
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
                padding: 15px;
              }

              .col2, .col3 {
                text-align: left;
              }

              .col1 {
                padding-left: 28px;
              }


              .col11 {
                padding-right: 28px;

                .group-icon {
                  display: flex;
                  height: 70px;
                  align-items: center;
                  justify-content: center;

                  .icon-send {
                    margin-right: 10px;
                    color: #0f3a64;
                    width: 20px;
                    height: 20px;
                  }

                  .icon-envelope {
                    // margin-right: 10px;
                    // color: #0f3a64;
                    width: 20px;
                    height: 20px;
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

            .tbody-row-index {
              vertical-align: text-top;
            }

            .tbody-row-end1 {
              width: 100%;
              height: 1px;
              background-color: #f1f5fa !important;
            }
            .tbody-row-end2 {
              width: 100%;
              height: 1px;
              background-color: #ffffff !important;
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