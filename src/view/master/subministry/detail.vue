<template>
  <div class="master-submin-detail">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/users-duotone.svg" alt="" class="icon-users">
            <div class="name">{{edit ? 'แก้ไขกอง' : 'สร้างกอง'}}</div>
          </div>
          <div class="group-end">
            <button type="button" class="button-back" @click="back()" >
              <img src="@/assets/images/icon/arrow-circle-left.svg" class="icon-back">
              <img src="@/assets/images/icon/line-up.svg" class="icon-line">
              ย้อนกลับ
            </button>
          </div>
        </div>
        <div class="line"></div>
        <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit">
          <div class="group-detail">
            <div class="group-between">
              <div class="group-input left">
                <div class="name">รหัสกอง<span class="required">*</span></div>
                <cpn-input  v-model="data.code"
                            name="subminist_id"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">เปิด/ปิดการใช้งาน<span class="required">*</span></div>
                <cpn-toggleSwitch v-model="data.active_flag"
                        name="active_flag"
                        class=""
                        style=""
                        :disabled="false"/>
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">ชื่อกอง <span class="required">*</span></div>
                <cpn-input  v-model="data.Name"
                            name="Name"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ชื่อย่อกอง <span class="required">*</span></div>
                <cpn-input  v-model="data.short_name"
                            name="short_name"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">กระทรวง <span class="required">*</span></div>
                <cpn-autoComplete v-model="data.organization_id"
                                  name="organization_id"
                                  rules="required"
                                  placeholder="กรุณาระบุ"
                                  type="text"
                                  :disabled="true"
                                  :optionSelect="optionSelect.organization_id"
                                  @change="change"/>
              </div>
              <div class="group-input">
                <div class="name">หน่วยงาน <span class="required">*</span></div>
                <cpn-autoComplete v-model="data.department_id"
                                  name="department_id"
                                  rules="required"
                                  placeholder="กรุณาระบุ"
                                  type="text"
                                  :optionSelect="optionSelect.department_id"
                                  @change="change"/>
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">รายละเอียด</div>
                <cpn-textArea v-model="data.desc"
                            name="desc"
                            rows="4"
                            placeholder="กรุณาระบุ"  />
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="group-footer">
            <div class="footer-left">
              <button type="button" class="button-danger" @click="cancelClick()">
                <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="icon-times-circle"/>
                ยกเลิก
              </button>
            </div>
            <div class="footer-right">
              <button type="submit" class="button-success" >
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                {{edit ? 'ยืนยันแก้ไขกอง' : 'ยืนยันสร้างกอง'}}
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
    <cpn-modal-alert  :modalAlert="modalAlert"/>
    <cpn-loading :show="showLoading"/>
  </div>
</template>
<script>
export default {
  name: 'subministry-detail',
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      showLoading: false,
      edit: false,
      data: {
        code: '',
        short_name: '',
        Name: '',
        desc: '',
        active_flag: false,
        organization_id:'',
        department_id: '',
      },
      optionSelect: {
        organization_id: [],
        department_id: []
      }
    }
  },
  methods: {
    back() {
      this.$router.push({ 
        name: 'subministry',
        query: {
          page: this.$route.query.page,
          perPage: this.$route.query.perPage
        }
      }).catch(()=>{});
    },
    cancelClick() {
      this.back()
      this.data.code = ''
      this.data.short_name = ''
      this.data.Name = ''
    },
    onSubmit() {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการ${this.edit ? 'แก้ไขกอง' : 'สร้างกอง'}หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          if (_this.edit) {
            let groupdata = {
              code: _this.data.code,
              Name: _this.data.Name,
              short_name: _this.data.short_name,
              desc: _this.data.desc,
              department_id: _this.data.department_id,
              active_flag: _this.data.active_flag ? 1 : 0
            }
            _this.showLoading = true
            _this.axios.put(`/subministry/${_this.$route.params.id}`, groupdata)
            .then(() => { 
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'success', title: 'ทำการแก้ไขกองสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
            })
            .catch((error) => {
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            let groupdata = {
              code: _this.data.code,
              Name: _this.data.Name,
              short_name: _this.data.short_name,
              desc: _this.data.desc,
              department_id: _this.data.department_id,
              active_flag: _this.data.active_flag ? 1 : 0
            }
            _this.showLoading = true
            _this.axios.post(`/subministry`, groupdata)
            .then(() => { 
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'success', title: 'ทำการสร้างกองสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
            })
            .catch((error) => {
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          }
        }
      }
    },
    apiDetail() {
      this.showLoading = true
      this.axios.get(`/subministry/${this.$route.params.id}`)
      .then((response) => { 
        this.showLoading = false
        this.data = {...this.data,...response.data.data}
        this.data.active_flag = response.data.data.active_flag == 1
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    api_master() {
      this.showLoading = true
      const response1 = this.axios.get('/organization')
      const response2 = this.axios.get('/department')

      this.axios.all([response1, response2 ])
      .then(this.axios.spread ((...responses) =>{
        this.showLoading = false;
        const response1 = responses[0]
        const response2 = responses[1]

        response1.data.data.filter(item => {
          item.value = item.id
          item.name = item.name
          return item
        })

        response2.data.data.filter(item => {
          item.value = item.id
          item.name = item.department_full_name
          return item
        })

        this.optionSelect.organization_id = response1.data.data
        this.optionSelect.department_id = response2.data.data

        if (this.$route.params.id) {
          this.edit = true
          this.api_detail()
        } else {
          this.edit = false
        }

      }
      ))
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    change(dep){
      this.optionSelect.department_id.filter(item => {
          if(item.id == dep) {
            this.optionSelect.organization_id.push({
              value: item.organization_id,  
              name: item.organization_name
            })
            this.data.organization_id = item.organization_id
          }
        })
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.edit = true
      this.apiDetail()
    } else {
      this.edit = false
    }
    this.api_master()
  }
}

</script>
<style lang="scss">
  .master-submin-detail {
    .group-overflow {
      overflow: auto;
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
      padding-bottom: 48px;

      .group-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 22px 29px;

        .group-first {
          display: flex;
          align-items: center;

          .icon-users {
            width: 45px;
            height: 41px;
            margin-right: 18px;
          }

          .name {
            color: #1a456b;
            font-weight: bold;
            font-size: 18px;
          }
        }

        .group-end {
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
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom: 7px;
          }
        }

        .group-input-file {
          position: relative;
          width: 100%;
          overflow: hidden;

          .no-data {
            font-size: 16px;
            color: #212529;
            opacity: 0.7;
            font-weight: 500;
          }

          .button-file {
            border-radius: 5px;
            border: solid 1px #ced4da;
            background-color: #fff;
            height: 45px;
            width: 100%;
            padding-left: 15px;
            text-align: left;
          }

          span {
            overflow: hidden;
            white-space: nowrap;
            display: block;
            text-overflow: ellipsis;
            padding-right: 110px;
          }

          .text {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            position: absolute;
            right: 0px;
            top: 0px;
            background-color: #15466e;
            width: 110px;
            height: 45px;
            border-bottom-right-radius: 5px;
            border-top-right-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .del-department {
          width: 45px;
          height: 45px;
          color: #212529;
          background-color: #ffffff;
          border-color: #f8f9fa;
          border: 1px solid #ced4da;
          border-radius: 5px;
          margin-left: 15px;

          .image-trash {
            width: 18px;
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
            width: 140px;
          }
        }

        .footer-right {
          display: flex;

          .button-success {
            width: 235px;
          }
        }

        button {
          height: 55px;
          border-radius: 10px;
          box-shadow: 7.4px 9.5px 13px 0 rgba(137, 148, 169, 0.14);
          border: 0;
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-times-circle {
          width: 28px;
          height: 28px;
          margin-right: 10px;
        }

        .icon-check-circle {
          width: 28px;
          height: 28px;
          margin-right: 10px;
        }
      }
    }
  }
</style>