<template>
  <div class="user-detail">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/users-duotone.svg" alt="" class="icon-users">
            <div class="name">{{edit ? 'แก้ไขผู้ใช้งาน' : 'สร้างผู้ใช้งาน'}}</div>
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
              <div class="group-image left">
                <div class="name">โปรไฟล์</div>
                <div class="image-preview-wrapper" v-show="data.previewImage1" :style="{ 'background-image': `url(${data.previewImage1})` }"></div>
                <input ref="fileInput1" type="file" @input="pickFile('fileInput1')" accept="image/png, image/jpg, image/jpeg" style="display:none;">
                <button name="fileInput1" type="button" @click="selectImage('fileInput1')" class="button-image">เลือกรูปภาพ</button>
                <div class="warning-message">*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB</div>
              </div>
              <div class="group-image">
                <div class="name">ลายเซ็น</div>
                <div class="image-preview-wrapper" v-show="data.previewImage2" :style="{ 'background-image': `url(${data.previewImage2})` }"></div>
                <input ref="fileInput2" type="file" @input="pickFile('fileInput2')" accept="image/png, image/jpg, image/jpeg" style="display:none;">
                <button name="fileInput2" type="button" @click="selectImage('fileInput2')" class="button-image">เลือกรูปภาพ</button>
                <div class="warning-message">*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB</div>
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ชื่อ <span class="required">*</span></div>
                <cpn-input  v-model="data.fname"
                            name="fname"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">นามสกุล <span class="required">*</span></div>
                <cpn-input  v-model="data.lname"
                            name="lname"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ชื่อผู้ใช้งาน <span v-if="!edit" class="required">*</span></div>
                <cpn-input  v-model="data.username"
                            name="Usern"
                            :rules="edit ? '' : 'required'"
                            :disabled="edit"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">รหัสผ่าน <span v-if="!edit" class="required">*</span></div>
                <cpn-input  v-model="data.password"
                            name="passw"
                            type="password"
                            :rules="edit ? '' : 'required'"
                            placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">Email <span class="required">*</span></div>
                <cpn-input  v-model="data.email"
                            name="email"
                            rules="required|email"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input"></div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">กระทรวง <span class="required">*</span></div>
                <cpn-autoComplete v-model="data.organization_id"
                                  name="organization"
                                  placeholder="กรุณาระบุ"
                                  rules="required"
                                  @keyup="keyupOrganization($event)"
                                  @changeData="masterDropdown"
                                  :optionSelect="data.optionSelect.organization" />
              </div>
              <div class="group-input">
                <div class="name">หน่วยงาน <span class="required">*</span></div>
                <cpn-autoComplete v-model="data.department_id"
                                  name="department"
                                  placeholder="กรุณาระบุ"
                                  rules="required"
                                  @keyup="keyupDepartment($event)"
                                  @changeData="masterDropdown"
                                  :optionSelect="data.optionSelect.department" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">กอง <span class="required">*</span></div>
                <cpn-autoComplete v-model="data.subministry_id"
                                  name="subministry"
                                  placeholder="กรุณาระบุ"
                                  rules="required"
                                  @keyup="keyupSubministry($event)"
                                  @changeData="masterDropdown"
                                  :optionSelect="data.optionSelect.subministry" />
              </div>
              <div class="group-input">
                <div class="name">กลุ่ม</div>
                <cpn-autoComplete v-model="data.group_id"
                                  name="group"
                                  placeholder="กรุณาระบุ"
                                  @keyup="keyupGroup($event)"
                                  @changeData="masterDropdown"
                                  :optionSelect="data.optionSelect.group" />
              </div>
            </div>
          </div>
          <div class="group-level" v-show="data.optionSelect.roles.length > 0">
            <div class="level-first">
              <img src="@/assets/images/icon/crown-duotone.svg" alt="" class="icon-crown">
              <div class="name">สิทธิ์</div>
            </div>
            <div class="level-button">
              <div v-for="(item, index) in data.optionSelect.roles" :key="index">
                <button v-if="item.id == 1" type="button" class="button-admin" v-bind:class="item.check ? 'active' : ''" @click="item.check = !item.check">
                  <div class="group-user">
                    <img v-if="item.check" src="@/assets/images/icon/user-crown-duotoneffffff.svg" alt="" class="icon-user-crown">
                    <img v-else src="@/assets/images/icon/user-crown-duotone.svg" alt="" class="icon-user-crown">
                    {{item.desc}}
                  </div>
                </button>
                <button v-else type="button" class="button-roles" v-bind:class="item.check ? 'active' : ''" @click="item.check = !item.check">
                  {{item.desc}}
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
              <button type="submit" class="button-success">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                {{edit ? 'ยืนยันแก้ไขผู้ใช้งาน' : 'ยืนยันสร้างผู้ใช้งาน'}}
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
import date from '../../components/date/index.vue'
export default {
  name: 'user-manage-detail',
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
        previewImage1: '',
        previewImage2: '',
        profile_img: '',
        signature_img: '',
        fname: '',
        lname: '',
        username: '',
        password: '',
        email: '',
        department_id: '',
        organization_id: '',
        subministry_id: '',
        group_id: '',
        level: [],
        birthdate:'',
        optionSelect: {
          organization: [],
          department: [],
          subministry: [],
          group: [],
          roles: []
        },
        fileType: []
      },
    }
  },
  components:{
    date
  },
  methods: {
    selectImage (data) {
      this.$refs[data].click()
    },
    pickFile (data) {
      for (var i = 0; i < this.$refs[data].files.length; i++) {
        let file = this.$refs[data].files[i]
        if ((this.data.fileType.indexOf(file.type)==-1)) {
          this.modalAlert = {showModal: true, type: 'error', message: this.defaultMessageErrorFile}
          return false
        }
        if ((file.type == 'image/jpeg' || file.type == 'image/png') && (file.size < 500000)) {
          if (data == 'fileInput1') {
            this.data.previewImage1 = URL.createObjectURL(file)
            this.data.profile_img = file
          } else {
            this.data.previewImage2 = URL.createObjectURL(file)
            this.data.signature_img = file
          }
          this.$refs[data].value=null;
        } else {
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: '*ไฟล์ที่อัพโหลดได้ png, jpg และ jpeg ขนาดไม่เดิน 500 KB'}
        }
      }
    },
    callApiUser() {
      this.axios.get(`/user/${localStorage.getItem('user_id')}`)
      .then((response) => { 
        localStorage.setItem('profile_img', response.data.data?.profile_img || '')
        this.$emit('getUserImage', localStorage.getItem('profile_img'), localStorage.getItem('profile_img'))
      })
    },
    keyupOrganization(e) {
      this.data.optionSelect.organization = []
      this.axios.get('/master-data/organization', {
        params: {
          keyword: e.target.value,
          // department_id: this.data.department_id,
          // subministry_id: this.data.subministry_id,
          // group_id: this.data.group_id,
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            return item
          })
          this.data.optionSelect.organization = response.data.data
        }
      })
    },
    keyupDepartment(e) {
      this.data.optionSelect.department = []
      this.axios.get('/master-data/department', {
        params: {
          keyword: e.target.value,
          organization_id: this.data.organization_id,
          subministry_id: this.data.subministry_id,
          group_id: this.data.group_id,
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            item.name = item.department_full_name
            return item
          })
          this.data.optionSelect.department = response.data.data
        }
      })
    },
    keyupSubministry(e) {
      this.data.optionSelect.subministry = []
      this.axios.get('/master-data/subministry', {
        params: {
          keyword: e.target.value,
          organization_id: this.data.organization_id,
          department_id: this.data.department_id,
          group_id: this.data.group_id,
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            item.name = item.Name
            return item
          })
          this.data.optionSelect.subministry = response.data.data
        }
      })
    },
    keyupGroup(e) {
      this.data.optionSelect.group = []
      this.axios.get('/master-data/group', {
        params: {
          keyword: e.target.value,
          organization_id: this.data.organization_id,
          department_id: this.data.department_id,
          subministry_id: this.data.subministry_id,
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            return item
          })
          this.data.optionSelect.group = response.data.data
        }
      })
    },
    masterDropdown(data) {
      this.showLoading = true
      const request1 = this.axios.get(`/master-data/organization?department_id=${this.data.department_id}&subministry_id=${this.data.subministry_id}&group_id=${this.data.group_id}`)
      const request2 = this.axios.get(`/master-data/department?organization_id=${this.data.organization_id}&subministry_id=${this.data.subministry_id}&group_id=${this.data.group_id}`)
      const request3 = this.axios.get(`/master-data/subministry?organization_id=${this.data.organization_id}&department_id=${this.data.department_id}&group_id=${this.data.group_id}`)
      const request4 = this.axios.get(`/master-data/group?organization_id=${this.data.organization_id}&department_id=${this.data.department_id}&subministry_id=${this.data.subministry_id}`)

      this.axios.all([request1, request2, request3, request4])
      .then(this.axios.spread((...responses) => {
        this.showLoading = false
        const response1 = responses[0]
        const response2 = responses[1]
        const response3 = responses[2]
        const response4 = responses[3]

        response1.data.data?.filter(item => {
          item.value = item.id
          return item
        })
        response2.data.data?.filter(item => {
          item.value = item.id
          item.name = item.department_full_name
          return item
        })
        
        response3.data.data?.filter(item => {
          item.value = item.id
          return item
        })
        
        response4.data.data?.filter(item => {
          item.value = item.id
          return item
        })

        // this.data.optionSelect.organization = response1.data.data
        this.data.optionSelect.department = response2.data?.data || []
        this.data.optionSelect.subministry = response3.data?.data || []
        this.data.optionSelect.group = response4.data?.data || []

        response2.data.data ? (response2.data.data.findIndex(item => item.id == this.data.department_id) == '-1' ? this.data.department_id = '' : '') : this.data.department_id = ''
        response3.data.data ? (response3.data.data.findIndex(item => item.id == this.data.subministry_id) == '-1' ? this.data.subministry_id = '' : '') : this.data.subministry_id = '' 
        response4.data.data ? (response4.data.data.findIndex(item => item.id == this.data.group_id) == '-1' ? this.data.group_id = '' : '') : this.data.group_id = ''
      })).catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    back() {
      this.$router.push({ 
        name: 'user-manage',
        query: {
          page: this.$route.query.page,
          perPage: this.$route.query.perPage
        }
      }).catch(()=>{});
    },
    cancelClick() {
      this.back()
      this.data.previewImage1 = ''
      this.data.previewImage2 = ''
      this.data.profile_img = ''
      this.data.signature_img = ''
      this.data.username = ''
      this.data.password = ''
      this.data.email = ''
      this.data.organization_id = ''
      this.data.department_id = ''
      this.data.subministry_id = ''
      this.data.group_id = ''
      this.data.level = []
      this.data.birthdate = ''
      this.data.fileType = []
    },
    onSubmit() {
      let _this = this
      // if ((!this.data.profile_img || !this.data.signature_img) && !this.edit) {
      //   document.querySelector(`[name="fileInput1"]`).scrollIntoView({block: "center"})
      // } else {
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการ${this.edit ? 'แก้ไขผู้ใช้งาน' : 'สร้างผู้ใช้งาน'}หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          let roles = []
          _this.data.level.filter(item => {
            item.flag = 'delete'
            roles.push(item)
          })
          _this.data.optionSelect.roles.filter(item => {
            item.flag = 'add'
            item.check ? roles.push(item) : ''
          })

          let formDataFile = new FormData();
          formDataFile.append('fname', _this.data?.fname || '');
          formDataFile.append('lname', _this.data?.lname || '');
          formDataFile.append('email', _this.data?.email || '');
          formDataFile.append('department_id', _this.data?.department_id || '');
          formDataFile.append('organization_id', _this.data?.organization_id || '');
          formDataFile.append('subministry_id', _this.data?.subministry_id || '');
          formDataFile.append('group_id', _this.data?.group_id || '');
          formDataFile.append('username', _this.data?.username || '');
          formDataFile.append('password', _this.data?.password || '');
          formDataFile.append('birthdate', _this.data?.birthdate || '');
          formDataFile.append('profile_img', _this.data?.profile_img || '');
          formDataFile.append('signature_img', _this.data?.signature_img || '');
          formDataFile.append('total_role', roles?.length || 0);
          roles.filter((item, index) => {
            if (item.id) {
            formDataFile.append(`roles[${index}][id]`, item.id)
            }
            if (item.role_id) {
              formDataFile.append(`roles[${index}][role_id]`, item.role_id)
            }
            if (item.flag) {
              formDataFile.append(`roles[${index}][flag]`, item.flag)
            }
          })
          _this.showLoading = true
          _this.axios[_this.edit ? 'put' : 'post'](`/user${_this.edit ? '/' + _this.$route.params.id : ''}`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}})
          .then(() => { 
            _this.showLoading = false
            _this.callApiUser()
            _this.modalAlert = {showModal: true, type: 'success', title: _this.edit ? 'ทำการแก้ไขผู้ใช้งานสำเร็จแล้ว' : 'ทำการสร้างผู้ใช้งานสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
          })
          .catch((error) => {
            _this.showLoading = false
            _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          })
        }
      }
      // }
    },
    apiDetail() {
      this.showLoading = true
      this.axios.get(`/user/${this.$route.params.id}`)
      .then((response) => { 
        this.showLoading = false
        this.data.fname = response.data.data.fname
        this.data.lname = response.data.data.lname
        this.data.username = response.data.data.username
        this.data.password = response.data.data.password
        this.data.email = response.data.data.email
        this.data.department_id = response.data.data.department_id
        this.data.organization_id = response.data.data.organization_id
        this.data.subministry_id = response.data.data.subministry_id
        this.data.group_id = response.data.data.group_id
        this.data.birthdate = response.data.data.birthdate
        this.data.level = response.data.data.roles
        if (response.data.data.profile_img) {
          this.axios({ method:'get', url: this.backendport+'/'+response.data.data.profile_img, baseURL: '', responseType: 'blob',})
          .then(response3 => {
            const blob = new Blob([response3.data], { type: this.assetsUtils.getTypeFile(response.data.data.profile_img) })
            this.data.previewImage1 = URL.createObjectURL(blob)
          })
          .catch((error) => {
            this.data.previewImage1 = new URL(`@/assets/images/default/profile_img.jpg`, import.meta.url).href
          })
        } else {
          this.data.previewImage1 = new URL(`@/assets/images/default/profile_img.jpg`, import.meta.url).href
        }
        if (response.data.data.signature_img) {
          this.axios({ method:'get', url: this.backendport+'/'+response.data.data.signature_img, baseURL: '', responseType: 'blob',})
          .then(response3 => {
            const blob = new Blob([response3.data], { type: this.assetsUtils.getTypeFile(response.data.data.signature_img) })
            this.data.previewImage2 = URL.createObjectURL(blob)
          })
          .catch((error) => {
            this.data.previewImage2 = new URL(`@/assets/images/default/signature_img.jpg`, import.meta.url).href
          })
        } else {
          this.data.previewImage2 = new URL(`@/assets/images/default/signature_img.jpg`, import.meta.url).href
        }
        this.data.optionSelect.roles.filter(item2 => {
          item2.check = false 
          response.data.data.roles.filter(item => {
            if (item.role_id == item2.role_id) {
              item2.check = true 
            }
          })
        })
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    apiMaster() {
      this.showLoading = true
      const request1 = this.axios.get(`/master-data/department`)
      const request2 = this.axios.get(`/master-data/role`)
      const request3 = this.axios.get(`/master-data/organization`)
      const request4 = this.axios.get(`/master-data/subministry`)
      const request5 = this.axios.get(`/master-data/group`)
      const request6 = this.axios.get(`/filetype?keyword=&page_size=50&page=1`)

      this.axios.all([request1, request2, request3, request4, request5, request6])
      .then(this.axios.spread((...responses) => {
        this.showLoading = false
        const response1 = responses[0]
        const response2 = responses[1]
        const response3 = responses[2]
        const response4 = responses[3]
        const response5 = responses[4]
        const response6 = responses[5]
        
        response1.data.data.filter(item => {
          item.value = item.id
          item.name = item.department_full_name
          return item
        })

        response2.data.data.filter(item => {
          item.role_id = item.id
          return item
        })
        
        response3.data.data.filter(item => {
          item.value = item.id
          return item
        })
        
        response4.data.data.filter(item => {
          item.value = item.id
          return item
        })
        
        response5.data.data.filter(item => {
          item.value = item.id
          return item
        })

        this.data.optionSelect.department = response1.data.data
        this.data.optionSelect.roles = response2.data.data
        this.data.optionSelect.organization = response3.data.data
        this.data.optionSelect.subministry = response4.data.data
        this.data.optionSelect.group = response5.data.data
        this.data.fileType = []

        response6.data.data.filter(item => {
          if (item.active_flag == 1) {
            this.data.fileType.push(item.content_type)
          }
        })

        if (this.$route.params.id) {
          this.edit = true
          this.apiDetail()
        } else {
          this.edit = false
        }
      })).catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    }
  },
  mounted () {
    this.apiMaster()
  },
  watch: {
    // 'data.organization_id'() {
    //   this.masterDropdown()
    // },
    // 'data.department_id'() {
    //   this.masterDropdown()
    // },
    // 'data.subministry_id'() {
    //   this.masterDropdown()
    // },
    // 'data.group_id'() {
    //   this.masterDropdown()
    // },
  }
}

</script>
<style lang="scss">
  .user-detail {
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

        .group-image {
          width: 100%;
          padding: 0 10px;
          margin-bottom: 30px;
          text-align: center;

          .name {
            font-size: 16px;
            font-weight: bold;
            color: #333;
            margin-bottom: 7px;
          }

          .image-preview-wrapper {
            background-repeat: no-repeat;
            width: 250px;
            height: 250px;
            display: block;
            margin: 0 auto 30px;
            background-size: contain;
            background-position: center center;
          }

          .button-image {
            background-color: #15466e;
            color: #fff;
            padding: 5px 12px;
            font-size: 16px;
            font-weight: 500;
            border-radius: 5px;
          }

          .warning-message {
            margin-top: 15px;
            font-size: 14px;
            font-weight: 500;
            color: #9fa1a3;
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
      }



      .group-level {
        border-radius: 5px;
        background-color: #f9fafc;

        .level-first {
          display: flex;
          align-items: center;
          padding: 24px 26px;

          .icon-crown {
            width: 34px;
            height: 28px;
          }

          .name {
            font-size: 16px;
            font-weight: 500;
            color: #333;
            margin-left: 15px;
            margin-top: 5px;
          }
        }

        .level-button {
          display: flex;
          align-items: center;
          padding: 0 28px 20px;
          flex-wrap: wrap;

          .group-user {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 5px;

            .icon-user-crown {
              width: 19px;
              height: 21px;
              margin-right: 9px;
              margin-top: -5px;
            }

            .icon-badge-sheriff {
              width: 20px;
              height: 23px;
              margin-right: 9px;
            }
          }

          .button-admin {
            width: 150px;
            height: 45px;
            border-radius: 5px;
            box-shadow: 2.9px 0.8px 9.6px 0.4px rgb(137 148 169 / 35%);
            border: solid 2px #e2ebf7;
            background-color: #fff;
            font-size: 16px;
            font-weight: 500;
            color: #f94859;
            margin-right: 24px;
          }

          .button-roles {
            min-width: 88px;
            height: 45px;
            border-radius: 5px;
            box-shadow: 2.9px 0.8px 9.6px 0.4px rgb(137 148 169 / 35%);
            border: solid 2px #e2ebf7;
            background-color: #fff;
            font-size: 16px;
            font-weight: 500;
            color: #333;
            padding: 5px 12px 0;
            margin-right: 24px;
          }

          button {
            margin-bottom: 15px;
          }

          .active {
            background-color: #15466e;
            color: #fff;
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