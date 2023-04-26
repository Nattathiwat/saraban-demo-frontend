<template>
  <div class="master-book-method-detail">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <i class="bi bi-inbox-fill icon-inbox"></i>
            <div class="name">{{edit ? 'แก้ไข' : 'เพิ่ม'}}รูปแบบข้อความตามผู้รับจดหมาย</div>
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
              <div class="group-input w-25">
                <div class="name">รหัส <span class="required">*</span></div>
                <cpn-input  v-model="data.template_code"
                            name="template_code"
                            rules="required|min:3"
                            :isNumber="true"
                            maxlength="3"
                            placeholder="กรุณาระบุ" />
              </div>              
              <div class="group-input w-25">
                <div class="name">กลุ่มผู้รับหนังสือ <span class="required">*</span></div>
                <cpn-select v-model="data.group_receive_id"
                            name="group_receive_id"
                            rules="required"
                            :optionSelect="optionSelect.group_receive_id"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input w-50">
                <div class="name">ผู้รับหนังสือ <span class="required">*</span></div>
                <cpn-input  v-model="data.receive_name"
                            name="receive_name"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>   
            </div>
            <div class="group-between">
              <div class="group-input w-25">
                <div class="name">คำขึ้นต้น</div>
                <cpn-input  v-model="data.title_name"
                            name="title_name"
                            placeholder="กรุณาระบุ" />
              </div>              
              <div class="group-input w-75">
                <div class="name">ชื่อผู้รับหนังสือ</div>
                <cpn-input  v-model="data.receive_person_name"
                            name="receive_person_name"
                            placeholder="กรุณาระบุ" />
              </div>   
            </div>
            <div class="group-input">
              <div class="name">คำลงท้าย</div>
              <cpn-input  v-model="data.address_to"
                          name="address_to"
                          placeholder="กรุณาระบุ" />
            </div>
            <div class="group-input">
              <div class="name">คำนำหน้าชื่อผู้เซ็น</div>
              <cpn-input  v-model="data.title_signature"
                          name="title_signature"
                          placeholder="กรุณาระบุ" />
            </div>
            <div class="group-input">
              <div class="name">คำที่ใช้ในการจ่าหน้าซอง</div>
              <cpn-input  v-model="data.signature"
                          name="signature"
                          placeholder="กรุณาระบุ" />
            </div>
          </div>
          <div class="line"></div>
          <div class="group-footer">
            <div class="footer-left"></div>
            <div class="footer-right">
              <button type="submit" class="button-success">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                บันทึก
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
  name: 'book-method-detail',
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
        template_code: '',
        group_receive_id: '',
        receive_name: '',
        title_name: '',
        receive_person_name: '',
        address_to: '',
        title_signature: '',
        signature: '',
      },
      optionSelect: {
        group_receive_id: [{value: 1, name: 'พระราชวงศ์'}, {value: 2, name: 'พระภิกษุ'}, {value: 3, name: 'บุคคลธรรมดา'}, {value: 4, name: 'อื่นๆ'}]
      }
    }
  },
  methods: {
    back() {
      this.$router.push({ 
        name: 'automail-receiver-profile',
        query: {
          page: this.$route.query.page,
          perPage: this.$route.query.perPage
        }
      }).catch(()=>{});
    },
    cancelClick() {
      this.back()
      this.data.template_code = ''
      this.data.group_receive_id = ''
      this.data.receive_name = ''
      this.data.title_name = ''
      this.data.receive_person_name = ''
      this.data.address_to = ''
      this.data.title_signature = ''
      this.data.signature = ''
    },
    onSubmit() {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการ${this.edit ? 'แก้ไขรูปแบบการรับ-ส่งหนังสือ' : 'สร้างรูปแบบการรับ-ส่งหนังสือ'}หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          let formDataFile = {
            template_code: _this.data.template_code,
            group_receive_id: _this.data.group_receive_id,
            receive_name: _this.data.receive_name,
            title_name: _this.data.title_name,
            receive_person_name: _this.data.receive_person_name,
            address_to: _this.data.address_to,
            title_signature: _this.data.title_signature,
            signature: _this.data.signature,
            user_id: parseInt(localStorage.getItem('user_id'))
          }
          _this.showLoading = true
          _this.axios[_this.edit ? 'put' : 'post'](`/master-data/message-template${_this.edit ? '/' + _this.$route.params.id : ''}`, formDataFile)
          .then(() => { 
            _this.showLoading = false
            _this.modalAlert = {showModal: true, type: 'success', title: _this.edit ? 'ทำการแก้ไขรูปแบบข้อความตามผู้รับจดหมายงานสำเร็จแล้ว' : 'ทำการเพิ่มรูปแบบข้อความตามผู้รับจดหมายงานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
          })
          .catch((error) => {
            _this.showLoading = false
            _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          })
        }
      }
    },
    apiDetail() {
      this.showLoading = true
      this.axios.get(`/master-data/message-template/${this.$route.params.id}`)
      .then((response) => { 
        this.showLoading = false
        this.data.template_code = response.data.data.template_code
        this.data.group_receive_id = response.data.data.group_receive_id
        this.data.receive_name = response.data.data.receive_name
        this.data.title_name = response.data.data.title_name
        this.data.receive_person_name = response.data.data.receive_person_name
        this.data.address_to = response.data.data.address_to
        this.data.title_signature = response.data.data.title_signature
        this.data.signature = response.data.data.signature
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
  },
  mounted () {
    if (this.$route.params.id) {
      this.edit = true
      this.apiDetail()
    } else {
      this.edit = false
    }
  }
}

</script>
<style lang="scss">
  .master-book-method-detail {
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

        .group-end {
          .button-back {
            width: 129px;
            height: 45px;
            border-radius: 5px;
            border: solid 1px #c1cfe3;
            background-color: transparent;
            display: flex;
            align-items: center;
            font-size: 16px;
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
          width: 100%;
          display: flex;


          .left {
            margin-right: 30px;
          }

          .w-30 {
            width: 30% !important;
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
            width: 120px;
          }
        }

        .footer-right {
          display: flex;

          .button-success {
            width: 130px;
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