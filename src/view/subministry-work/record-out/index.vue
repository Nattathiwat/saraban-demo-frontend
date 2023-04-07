<template>
  <div class="record-out-inex">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/ballot-duotone.svg" alt="" class="icon-users-cog">
            <div class="name">บันทึกส่งออก</div>
            <button type="button" class="add-booking-out" @click="addClick()">
              <div class="group-image">
                <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                สร้างบันทึกส่งออก
              </div>
            </button>
            <div class="d-flex justify-content-end">
            <button type="button" class="add-booking-out"  @click="gennum()" v-show="false">
                ออกเลขบันทึกภายใน
            </button>
          </div>
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
                <th class="col1">ความเร่งด่วน</th>
                <th class="col2">เลขบันทึกภายใน</th>
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
                <td class="col1">{{item.speed_name}}</td>
                <td class="col2">{{item.booking_note_number}}</td>
                <td class="col3">{{item.subject}}</td>
                <td class="col4">{{item.department_name}}</td>
                <td class="col5">{{item.as_of_date}}</td>
                <td class="col6">{{item.book_type}}</td>
                <td class="col7">{{item.department_name}}</td>
                <td class="col8">{{item.status_name}}</td>
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
    
    <div class="modal-register" v-show="modalRegiter.showModal">
      <div class="modal-class">
        <div class="modal-center">
          <div class="modal-size" ref="modalRegiterref">
            <Form @submit="on_submit_modal" @invalid-submit="onInvalidSubmit">
              <div class="modal-title">
                <div class="title-size">ออกเลขบันทึกภายใน</div> 
                <i class="bi bi-x-lg icon-close" @click="modalRegiter.showModal = false"></i>
              </div>
              <div class="line"></div>
              <div class="modal-detail">
                <div class="message" v-for="(item, index) in modalRegiter.booking_register_details" :key="index">
                  <div class="detail-sub">
                    <div class="group-between">
                      <div class="group-input">
                        <div class="name">ทะเบียนส่ง <span class="required">*</span></div>
                        <cpn-select v-model="data.send_method_id"
                                    name="send_method_id"
                                    rules="required"
                                    :optionSelect="data.optionSelect.send_method_id" />
                      </div>
                    </div>
                    <div class="group-between">
                      <div class="group-input">
                        <div class="name">ลงวันที่ <span class="required">*</span></div>
                        <cpn-datepicker v-model="item.regis_date"
                                        rules="required"
                                        :name="`addregis_date${index}`"/>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
              <div class="line"></div>
              <div class="group-footer">
                <button type="button" @click="modalRegiter.showModal = false" class="btn button-danger">
                  <div class="group-name">
                    <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="image-icon"/>
                    <div class="name">ยกเลิก</div>
                  </div>
                </button>
                <button type="submit" class="btn button-success">
                  <div class="group-name">
                  <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="image-icon"/>
                    <div class="name">ตกลง</div>
                  </div>
                </button>
              </div>
            </Form>
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
  name: 'booking-out-inex',
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      showLoading: false,
      optionSelectDefault: {
        regis_id: [],
      },
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
        optionSelect:{
          send_method_id: [{ name: 'นร : บันทึกข้อความ',value: '1' },{ name: 'นร : ทะเบียนบันทึกข้อความ(เวียน)',value: '2' }],
        },
      },
      modalRegiter: {
        showModal: false,
        booking_register_details: []
      }
    }
  },
  methods: {
    addClick() {
      this.$router.push({ 
        name: 'subministry-work.record-out-create',
      }).catch(()=>{});
    },
    editClick(item) {
      this.$router.push({ 
        name: 'subministry-work.record-out-edit',
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
      this.apirecordout()      
    },
    search() {
      this.data.status = true
      this.data.perPage = 10
      this.data.page = 1
      this.data.tag = ''
      this.apirecordout()
    },
    apirecordout() {
      this.data.table = []
      
      this.showLoading = true
      this.axios.get('/booking-note', {
        params: {
          keyword: this.data.search,
          page_size: this.data.perPage,
          page: this.data.page,
          user_id: localStorage.getItem('user_id'),
          tag: this.data.tag,
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
    async on_submit_modal() {
      // for (let i = 0; i < this.modalRegiter.booking_register_details.length; i++) {
        // let item = this.modalRegiter.booking_register_details[i]
        // let regis_id_desc = ''
        // let book_out_num_type_desc = ''
        // let send_method_id_desc = ''
        // item.optionSelect.regis_id.find(item2 => {if(item2.value == item.regis_id) {regis_id_desc = item2.name}})
        // item.optionSelect.book_out_num_type.find(item2 => {if(item2.value == item.book_out_num_type) {book_out_num_type_desc = item2.name}})
        // item.optionSelect.send_method_id.find(item2 => {if(item2.value == item.send_method_id) {send_method_id_desc = item2.name}})
        let data = {
          optionSelect: {
            signer_id: this.optionSelectDefault.signer_id
          },
          book_out_num_type: parseInt(item.book_out_num_type),
          book_out_num_type_desc: book_out_num_type_desc,
          send_method_id: parseInt(item.send_method_id),
          send_method_id_desc: send_method_id_desc,
          regis_date: item.regis_date,
          regis_id: parseInt(item.regis_id),
          regis_id_desc: regis_id_desc,
          num: '1',
          signer_id: '',
          is_signed: false,
          flag: 'add',
          main_filename: '',
          attach_filename: '',
          booking_registers: []
        }
        if (item.department_dest_id.length > 0) {
          if (item.book_out_num_type == 0) {
            this.showLoading = true
            await this.axios.post(`/booking-note/generate-number`, {department_id: parseInt(localStorage.getItem('department_id')), year: this.assetsUtils.currentDate().split('/')[2]-543})
            .then((response) => {
              this.showLoading = false
              item.department_dest_id.filter(item2 => {
                data.booking_registers.push({
                  book_out_num: response.data.data.out_document_number,
                  greeting: '',
                  department_dest_id: item2.value,
                  main_filename: '',
                  attach_filename: '',
                  signer_id: '',
                  is_signed: false,
                  flag: 'add',
                  optionSelect: {
                    signer_id: this.optionSelectDefault.signer_id,
                    department_dest_id: [...this.optionSelectDefault.department_dest_id, item2]
                  },
                })
              })
            }).catch((error) => {
              this.showLoading = false
              this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            for (let i = 0; i < item.department_dest_id.length; i++) {
              let item2 = item.department_dest_id[i]
              this.showLoading = true
              await this.axios.post(`/booking-note`, {department_id: parseInt(localStorage.getItem('department_id')), year: this.assetsUtils.currentDate().split('/')[2]-543})
              .then((response) => {
                this.showLoading = false
                data.booking_registers.push({
                  book_out_num: response.data.data.out_document_number,
                  greeting: '',
                  department_dest_id: item2.value,
                  main_filename: '',
                  attach_filename: '',
                  signer_id: '',
                  is_signed: false,
                  flag: 'add',
                  optionSelect: {
                    signer_id: this.optionSelectDefault.signer_id,
                    department_dest_id: [...this.optionSelectDefault.department_dest_id, item2]
                  },
                })
              }).catch((error) => {
                this.showLoading = false
                this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
              })
            }
          }
        } else {
          this.showLoading = true
          await this.axios.post(`/booking-note`, {department_id: parseInt(localStorage.getItem('department_id')), year: this.assetsUtils.currentDate().split('/')[2]-543})
          .then((response) => {
            this.showLoading = false
            data.booking_registers.push({
              book_out_num: response.data.data.out_document_number,
              greeting: '',
              department_dest_id: '',
              main_filename: '',
              attach_filename: '',
              signer_id: '',
              is_signed: false,
              flag: 'add',
              optionSelect: {
                signer_id: this.optionSelectDefault.signer_id,
                department_dest_id: this.optionSelectDefault.department_dest_id
              },
            })
          })
        }
        // this.data.booking_register_details.push(data)
      
      this.modalRegiter.showModal = false
    },
    gennum() {
      this.modalRegiter.showModal = true
      this.modalRegiter.booking_register_details= [{
        regis_id: '',
        regis_date: this.assetsUtils.currentDate(),
        book_out_num_type: '0',
        send_method_id: '2',
        department_dest_id: [],
        optionSelect: {
          regis_id: this.optionSelectDefault.regis_id,
          book_out_num_type: this.optionSelectDefault.book_out_num_type,
          send_method_id: this.optionSelectDefault.send_method_id,
          department_dest_id: [],
        },
      }]
    },
  },
  mounted() {
    this.data.page = this.$route.query?.page || this.data.page
    this.data.perPage = this.$route.query?.perPage || this.data.perPage
    this.apirecordout()
  },
}

</script>
<style lang="scss">
  .record-out-inex {
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
              font-size: 16px;

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
  
    .modal-register {
      .modal-class {
        position: fixed;
        overflow-y: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999;
        background-color: rgba(33, 85, 163, 0.16);

        .modal-center {
          height: 85%;
          display: flex;
          justify-content: center;
          align-items: center;
      

          .modal-size {
            width: 100%;
            pointer-events: auto;
            margin: auto;
            max-width: 1100px;
            background-color: #ffffffff;
            border-radius: 15px;

            .line {
              height: 2px;
              width: 100%;
              background-color: #e2ebf7;
              margin-top: 5px;
              margin-bottom: 5px;
            }

            .modal-title {
              display: flex;
              justify-content: space-between;
              padding-top: 25px;
              margin-bottom: 16px;
              margin-right: 30px;
              margin-left: 30px;

              .title-size {
                font-size: 18px;
                font-weight: 700;
                color: #0A1629;
                margin-top: 5px;
              }

              .icon-close {
                font-size: 22px;
                cursor: pointer;
              }
            }

            .modal-detail {
              padding-top: 20px;

              .button-delete {
                width: 45px;
                height: 45px;
                color: #212529;
                background-color: #f8f9fa;
                border-color: #f8f9fa;
                border: 1px solid transparent;
                border-radius: 5px;

                .image-trash {
                  width: 18px;
                }
              }

              .message {
                background-color: rgba(218, 229, 245, 0.84);
                margin: 0px 23px 20px;
                padding: 20px 15px;
                font-size: 16px;
                font-weight: bold;
                color: #333;
                border-radius: 5px;

                .detail-sub {
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 5px;
                  margin-top: 15px;

                  .group-between {
                    display: flex;

                    .right-width {
                      width: 50%;
                    }
                  }

                  .group-input {
                    width: 100%;
                    padding: 0 10px;
                    margin-bottom: 15px;

                    .name {
                      font-size: 16px;
                      font-weight: bold;
                      color: #333;
                      margin-bottom: 7px;
                    }
                  }
                }
              }

              .add-register {
                height: 45px;
                border-radius: 5px;
                box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);
                border: 0;
                font-size: 16px;
                font-weight: 500;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #007773;
                margin: 20px 23px 20px 0px;
                padding: 0 18px;

                .icon-plus {
                  width: 25px;
                  height: 25px;
                  margin-right: 10px;
                }
              }
            }

            .group-footer {
              margin-top: 13px;
              margin-bottom: 15px;
              text-align: center;
              display: flex;
              justify-content: flex-end;
              padding: 0 30px;
              
              button {
                margin-left: 20px;
                width: 115px;
                height: 45px;
                border-radius: 5px;
                border: 0;
              }

              .group-name {
                display: flex;
                align-items: center;
                justify-content: center;

                .image-icon {
                  width: 25px;
                  height: 25px;
                  margin-right: 10px;
                }

                .name {
                  color: #ffffff;
                  font-size: 16px;
                  font-weight: 500;
                }
              }
            }
          }
        }
      }
    }
</style>