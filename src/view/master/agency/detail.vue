<template>
  <div class="master-agency-detail">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/users-duotone.svg" alt="" class="icon-users">
            <div class="name">{{edit ? 'แก้ไขหน่วยงาน' : 'สร้างหน่วยงาน'}}</div>
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
                <div class="name">รหัสหน่วยงาน <span class="required">*</span></div>
                <cpn-input  v-model="data.code"
                            name="code"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input left">
                <div class="name">เลขโรมัน</div>
                <cpn-input  v-model="data.roman_number"
                            name="roman_number"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">เปิด/ปิด การใช้งาน</div>
                <cpn-toggleSwitch v-model="data.active_flag"
                            name="active_flag" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ชื่อย่อหน่วยงาน <span class="required">*</span></div>
                <cpn-input  v-model="data.department_short_name"
                            name="department_short_name"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input left">
                <div class="name">ชื่อหน่วยงาน <span class="required">*</span></div>
                <cpn-input  v-model="data.department_full_name"
                            name="department_full_name"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">กระทรวง <span class="required">*</span></div>
                <cpn-autoComplete v-model="data.organization_id"
                            name="organization_id"
                            rules="required"
                            placeholder="กรุณาระบุ"
                            type="text"
                            :optionSelect="optionSelect.organization_id"
                            @keyup="keyup_org"/>
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
            <div class="group-input">
              <div class="name">รูปหน่วยงาน <span class="required">*</span></div>
              <div class="d-flex mb-3">
                <div class="group-input-file">
                  <button type="button" class="button-file" @click="upload_file('main_docs')" >
                    <span :class="data.filename ? '' : 'no-data'">
                      {{data.filename ? data.filename : 'รูปหน่วยงาน'}}
                    </span>
                  </button>
                  <div class="text pointer" @click="upload_file('main_docs')" >แนบไฟล์</div>
                  <input type="file" @change="file_change('main_docs')" :name="'main_docs'" style="display:none;" accept="image/*,">
                </div>
                <button type="button" class="del-department" @click="data.filename = ''">
                  <img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash">
                </button>
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
                {{edit ? 'ยืนยันแก้ไขหน่วยงาน' : 'ยืนยันสร้างหน่วยงาน'}}
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
        roman_number: '',
        department_short_name: '',
        department_full_name: '',
        desc: '',
        organization_id:'',
        filename: '',
        filepath: '',
        active_flag: true
      },
      optionSelect: {
          organization_id: []
        }
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
        query: {
          page: this.$route.query.page,
          perPage: this.$route.query.perPage
        }
      }).catch(()=>{});
    },
    cancelClick() {
      this.back()
      this.data.code = ''
      this.data.roman_number = ''
      this.data.department_short_name = ''
      this.data.department_full_name = ''
      this.data.desc = ''
      this.data.organization_id = ''
      this.data.filename = ''
      this.data.filepath = ''
      this.data.active_flag = true
    },
    callApiDepartment() {
      this.axios.get(`/department/${localStorage.getItem('department_id')}`)
      .then((response2) => { 
        localStorage.setItem('filename', response2.data.data?.filename || '')
        localStorage.setItem('filepath', response2.data.data?.filepath || '')
        this.$emit('getLogoImage', localStorage.getItem('filename'), localStorage.getItem('filepath'))
      })
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
              let groupdata = {
                code: _this.data.code,
                roman_number: _this.data.roman_number,
                department_full_name: _this.data.department_full_name,
                department_short_name: _this.data.department_short_name,
                organization_id: _this.data.organization_id,
                desc: _this.data.desc,
                filename: _this.data.filename,
                filepath: _this.data.filepath,
                active_flag: _this.data.active_flag ? 1 : 0
              }
              _this.showLoading = true
              _this.axios[_this.edit ? 'put' : 'post'](`/department${_this.edit ? '/' + _this.$route.params.id : ''}`, groupdata)
              .then(() => { 
                _this.showLoading = false
                _this.callApiDepartment()
                _this.modalAlert = {showModal: true, type: 'success', title: _this.edit ? 'ทำการแก้ไขหน่วยงานสำเร็จแล้ว' : 'ทำการสร้างหน่วยงานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
              })
              .catch((error) => {
                _this.showLoading = false
                _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
              })
            }).catch((error) => {
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            let groupdata = {
              code: _this.data.code,
              roman_number: _this.data.roman_number,
              department_full_name: _this.data.department_full_name,
              department_short_name: _this.data.department_short_name,
              organization_id: _this.data.organization_id,
              desc: _this.data.desc,
              filename: _this.data.filename,
              filepath: _this.data.filepath,
              active_flag: _this.data.active_flag ? 1 : 0
            }
            _this.showLoading = true
            _this.axios[_this.edit ? 'put' : 'post'](`/department${_this.edit ? '/' + _this.$route.params.id : ''}`, groupdata)
            .then(() => { 
              _this.showLoading = false
              _this.callApiDepartment()
              _this.modalAlert = {showModal: true, type: 'success', title: _this.edit ? 'ทำการแก้ไขหน่วยงานสำเร็จแล้ว' : 'ทำการสร้างหน่วยงานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
            })
            .catch((error) => {
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })

          }
        }
      }
    },
    api_detail() {
      this.showLoading = true
      this.axios.get(`/department/${this.$route.params.id}`)
      .then((response) => { 
        this.showLoading = false
        let checkOptionSelect = this.optionSelect.organization_id.every(item => item.id != response.data.data.organization_id) 
        if (checkOptionSelect) {
          this.optionSelect.organization_id.push({value: response.data.data.organization_id, name: response.data.data.organization_name})
        }
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

      this.axios.get('/organization')
      .then((response1) =>  {
        this.showLoading = false;
        
        response1.data.data.filter(item => {
          item.value = item.id
          item.name = item.name
          return item
        })
        this.optionSelect.organization_id = response1.data.data

        if (this.$route.params.id) {
          this.edit = true
          this.api_detail()
        } else {
          this.edit = false
        }
      }).catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    keyup_org(e) {
      this.axios.get('/organization', {
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
          this.optionSelect.organization_id = response.data.data
        }
      })
    },
  },
  mounted () {
    this.api_master()
  }
}

</script>
<style lang="scss">
  .master-agency-detail {
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
            width: 210px;
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