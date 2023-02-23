<template>
  <div class="department-detail">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/users-duotone.svg" alt="" class="icon-users">
            <div class="name">{{edit ? 'แก้ไขชนิดหนังสือ' : 'สร้างชนิดหนังสือ'}}</div>
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
                <div class="name">เลขชนิดหนังสือ<span class="required">*</span></div>
                <cpn-input  v-model="data.code"
                            name="department_id"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ชื่อชนิดหนังสือ<span class="required">*</span></div>
                <cpn-input  v-model="data.department_short_name"
                            name="department_short_name"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">ทะเบียน <span class="required">*</span></div>
                <cpn-autoComplete v-model="input3"
                            name="book_type_record"
                            :optionSelect="optionSelect2"
                            @keyup="keyupDepartment($event)"
                            placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">รายละเอียด<span class="required">*</span></div>
                <cpn-textArea v-model="input4"
                    name="book-type_description"
                    class=""
                    style=""
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
              <button type="submit" class="button-success" :disabled="!data.filename">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                {{edit ? 'ยืนยันแก้ไขชนิดหนังสือ' : 'ยืนยันสร้างชนิดหนังสือ'}}
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
  name: 'agency-detail',
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
        department_short_name: '',
        department_full_name: '',
        filename: '',
        filepath: '',
        optionSelect: {
          book_type_record: [{name:'สำนักงานเลขาธิการ', value: 'สำนักงานเลขาธิการ'}]
        }
      },
    }
  },
  methods: {
    upload_file(data) {
      document.querySelector(`[name="${data}"]`).click()
    },
    file_change(data) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if (file.type.split('image').length > 1) {
          let dataFile = {
            filename: file.name,
            type: file.type,
            link: URL.createObjectURL(file),
            size: (file.size /1024 /1024).toFixed(2) + ' MB',
            file: file,
          }
          this.data = {...this.data, ...dataFile}
          document.querySelector(`[name="${data}"]`).value=null;
        }
      }
    },
    back() {
      this.$router.push({ 
        name: 'agency',
      }).catch(()=>{});
    },
    cancelClick() {
      this.back()
      this.data.code = ''
      this.data.department_short_name = ''
      this.data.department_full_name = ''
    },
    onSubmit() {
      let currentDate = this.assetsUtils.currentDate()
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการ${this.edit ? 'แก้ไขหน่วยงาน' : 'สร้างหน่วยงาน'}หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          if (_this.data.file) {
            let formDataFile = new FormData();
            formDataFile.append('file', _this.data.file);
            formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
            _this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}})
            .then((responses) => {
              _this.data.filepath = responses.data.data.path
              if (_this.edit) {
                let groupdata = {
                  code: _this.data.code,
                  department_full_name: _this.data.department_full_name,
                  department_short_name: _this.data.department_short_name,
                  filename: _this.data.filename,
                  filepath: _this.data.filepath
                }
                _this.showLoading = true
                _this.axios.put(`/department/${_this.$route.params.id}`, groupdata)
                .then(() => { 
                  _this.showLoading = false
                  _this.modalAlert = {showModal: true, type: 'success', title: 'ทำการแก้ไขหน่วยงานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
                })
                .catch((error) => {
                  _this.showLoading = false
                  _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
                })
              } else {
                let groupdata = {
                  code: _this.data.code,
                  department_full_name: _this.data.department_full_name,
                  department_short_name: _this.data.department_short_name,
                  filename: _this.data.filename,
                  filepath: _this.data.filepath
                }
                _this.showLoading = true
                _this.axios.post(`/department`, groupdata)
                .then(() => { 
                  _this.showLoading = false
                  _this.modalAlert = {showModal: true, type: 'success', title: 'ทำการสร้างหน่วยงานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
                })
                .catch((error) => {
                  _this.showLoading = false
                  _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
                })
              }
            }).catch((error) => {
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            if (_this.edit) {
              let groupdata = {
                code: _this.data.code,
                department_full_name: _this.data.department_full_name,
                department_short_name: _this.data.department_short_name,
                filename: _this.data.filename,
                filepath: _this.data.filepath
              }
              _this.showLoading = true
              _this.axios.put(`/department/${_this.$route.params.id}`, groupdata)
              .then(() => { 
                _this.showLoading = false
                _this.modalAlert = {showModal: true, type: 'success', title: 'ทำการแก้ไขหน่วยงานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
              })
              .catch((error) => {
                _this.showLoading = false
                _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
              })
            } else {
              let groupdata = {
                code: _this.data.code,
                department_full_name: _this.data.department_full_name,
                department_short_name: _this.data.department_short_name,
                filename: _this.data.filename,
                filepath: _this.data.filepath
              }
              _this.showLoading = true
              _this.axios.post(`/department`, groupdata)
              .then(() => { 
                _this.showLoading = false
                _this.modalAlert = {showModal: true, type: 'success', title: 'ทำการสร้างหน่วยงานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
              })
              .catch((error) => {
                _this.showLoading = false
                _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
              })
            }
          }
        }
      }
    },
    apiDetail() {
      this.showLoading = true
      this.axios.get(`/department/${this.$route.params.id}`)
      .then((response) => { 
        this.showLoading = false
        this.data.code = response.data.data.code
        this.data.department_short_name = response.data.data.department_short_name
        this.data.department_full_name = response.data.data.department_full_name
        this.data.filename = response.data.data.filename
        this.data.filepath = response.data.data.filepath
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
  .department-detail {
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