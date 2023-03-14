<template>
  <div class="booking-out-detail">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/ballot-duotone.svg" alt="" class="icon-size">
            <div class="name">{{edit ? 'แก้ไขบันทึกส่งออก' : 'สร้างบันทึกส่งออก'}}</div>
          </div>
          <button type="button" class="add-booking-out" @click="gennumber()" v-show="false">
              <div class="group-image">
                ออกเลขบันทึกภายใน
              </div>
            </button>
        </div>
        <div class="line"></div>
        <Form @submit="on_submit" @invalid-submit="onInvalidSubmit">
          <div class="group-detail">
            <div class="group-input">
              <div class="name">เจ้าของหนังสือ</div>
              <div class="d-flex">
                <cpn-radio  v-model="data.create_type"
                            name="my1"
                            class=""
                            style="min-width: 120px;"
                            value="0"
                            label="สร้างเอง"
                            @change="data.creater_id = ''" />
                        
                <cpn-radio  v-model="data.create_type"
                            name="my2"
                            class="ms-5 me-5"
                            style="min-width: 120px;"
                            value="1"
                            label="สร้างแทน"
                            @change="data.creater_id = ''" />

              <div class="group-input mb-0" v-show="data.create_type == 1">
                <div class="name">ชื่อ - นามสกุล <span class="required">*</span></div>
                <cpn-select v-model="data.creater_id"
                            name="creater_id"
                            :optionSelect="optionSelect.creater_id"
                            :rules="data.create_type == 1 ? 'required' : ''"
                            placeholder="กรุณาระบุ" />
              </div>
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ทะเบียนบันทึกข้อความ<span class="required">*</span></div>
                <cpn-select v-model="data.book_category_id"
                            name="book_category_id"
                            rules="required"
                            :optionSelect="optionSelectDefault.book_category_id"
                            placeholder="กรุณาระบุ" /> 
              </div>
              <div class="group-input">
                <div class="name">ลงวันที่<span class="required">*</span></div>
                <cpn-datepicker v-model="data.regis_date"
                                  name="regis_date"
                                  rules="required"
                                  :disabled="edit"
                                  placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ชนิดของหนังสือ <span class="required">*</span></div>
                <cpn-select v-model="data.book_type_id"
                            name="book_type_id"
                            rules="required"
                            :optionSelect="optionSelect.book_type_id"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input left">
                <div class="name">ชั้นความลับ <span class="required">*</span></div>
                <cpn-select v-model="data.secret_id"
                            name="secret_id"
                            rules="required"
                            :optionSelect="optionSelect.secret_id"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ความเร่งด่วน <span class="required">*</span></div>
                <cpn-select v-model="data.speed_id"
                            name="speed_id"
                            rules="required"
                            :optionSelect="optionSelect.speed_id"
                            placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
              <div class="name">ชื่อเรื่อง <span class="required">*</span></div>
              <cpn-textArea v-model="data.subject"
                            name="subject"
                            rules="required"
                            rows="1" />
            </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">เรียน</div>
                <cpn-input  v-model="data.dear"
                            name="dear" 
                            type="text"/>
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">รายละเอียด</div>
                <cpn-textArea v-model="data.description"
                              name="record_out_description"
                              rows="1"  />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">Tag สำหรับค้นหา</div>
              <cpn-input-tags v-model="data.tag"
                              name="tag"
                              placeholder="Enter a new tag"  />
              </div>
            </div>
            <div class="group-input d-flex align-items-center">
              <div class="name">อ้างอิงถึง</div>
              <button type="button" class="add-booking-out" @click="add_booking_refers()">
                <div class="group-image">
                  <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                  เพิ่มเอกสารอ้างอิง
                </div>
              </button>
            </div>
            <div class="group-between" v-for="(item, index) in data.booking_refers.filter(el => el.flag != 'delete')" :key="index">
              <div class="group-input left">
                <cpn-input  v-model="item.receive_document_number"
                            :name="`receive_document_number${index}`"
                            type="text"
                            :searchFlag="true"
                            @searchClick="booking_refers_click(item)"
                            placeholder="เลขที่หนังสืออ้างอิง" />
              </div>
              <div class="group-input left">
                <cpn-input  v-model="item.desc"
                            :name="`nameRefers${index}`"
                            :disabled="true"
                            placeholder="ชื่อเรื่อง" />
              </div>
              <div class="group-input d-flex">
                <cpn-datepicker v-model="item.receive_date"
                                :name="`dateRefers${index}`"
                                :disabled="true"
                                placeholder="วันที่รับหนังสือ" />
                <button type="button" @click="delete_booking_refers(item, index)" class="button-delete ms-3"><img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer"></button>
              </div>
            </div>
          </div>
          <div class="line"></div>
            <div class="group-detail">
              <div class="group-between">
                <div class="group-input left">
                  <div class="name">บันทึกต้นเรื่อง</div>
                  <div class="d-flex mb-3" v-for="(item, index) in data.main_docs.filter(el => el.flag != 'delete')" :key="index">
                    <div class="group-input-file">
                      <button type="button" :class="edit ? 'none-pointer':''" class="button-file" @click="edit ? '' : upload_file(`main_docs${index}`)" >
                        <span :class="item.filename ? '' : 'no-data'">
                          {{item.filename ? item.filename : ''}}
                        </span>
                      </button>
                      <div :class="edit ? 'text disabled' : 'text pointer'" @click="edit ? '' : upload_file(`main_docs${index}`)" >แนบเอกสาร</div>
                      <input type="file" @change="file_set_change(`main_docs${index}`, index, 'main_docs')" :name="`main_docs${index}`" style="display:none;" accept="application/pdf">
                    </div>
                    <button type="button" @click="download_file(item)" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
                    <button type="button" class="del-department-3" :disabled="edit" @click="data.main_docs.length > 1 ? data.main_docs.splice(index,1) : item.filename = ''">
                      <img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash">
                    </button>
                  </div>
                </div>
                <div class="group-input">
                  <div class="group-input d-flex align-items-center">
                    <div class="name">สิ่งที่ส่งมาด้วย</div>
                    <button type="button" class="add-booking-receive" :disabled="edit" @click="add_attachments()" >
                      <div class="group-image">
                        <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                        เพิ่มไฟล์
                      </div>
                    </button>
                  </div>
                  <div class="d-flex mb-3" v-for="(item, index) in data.attachments.filter(el => el.flag != 'delete')" :key="index">
                    <div class="group-input-file">
                      <button type="button" :class="edit ? 'none-pointer':''" class="button-file" @click="edit ? '' : upload_file(`attachments${index}`)">
                        <span :class="item.filename ? '' : 'no-data'">
                          {{item.filename ? item.filename : ''}}
                        </span>
                      </button>
                      <div :class="edit ? 'text disabled' : 'text pointer'" @click="edit ? '' : upload_file(`attachments${index}`)">แนบเอกสาร</div>
                      <input type="file" @change="file_set_change(`attachments${index}`, index, 'attachments')" :name="`attachments${index}`" style="display:none;">
                    </div>
                    <button type="button" @click="download_file(item)" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
                    <button type="button" class="del-department-3" :disabled="edit" @click="delete_attachments(item, index)">
                      <img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash">
                    </button>
                  </div>
                </div>
              </div>
          </div>
          <div class="line"></div>
          <div class="send-to">
            <div class="group-input">
              <div class="name">ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) <span class="required">*กรุณาใส่รายชื่อที่ต้องการส่งต่อ</span></div>
              <cpn-input-tags v-model="data.sendTo"
                              :flagSearch="true"
                              :optionSelect="optionSelect.sendTo"
                              @keyup="keyup_send_to"
                              name="sendTo" />
            </div>
            <div class="group-input">
              <div class="name">ความเห็น / คำสั่ง</div>
              <cpn-textArea v-model="data.comment"
                            name="comment"
                            rows="3" />
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">รูปแบบการดำเนินการ</div>
                <cpn-select v-model="data.process_type_id"
                            name="process_type_id"
                            :optionSelect="optionSelect.process_type_id" />
              </div>
              <div class="group-input">
                <div class="name">การมองเห็น</div>
                <cpn-select v-model="data.permission_id"
                            name="permission_id"
                            :optionSelect="optionSelect.permission_id" />
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <div>
                <button type="button" class="button button-danger" @click="data.sendTo=[], data.comment='', data.process_type_id='', data.permission_id=''">
                  <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="icon-times-circle"/>
                  ยกเลิก
                </button>
              </div>
              <div>
                <button type="button" @click="add_booking_follows()" class="button button-success">
                  <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                  เพิ่มการส่งต่อ
                </button>
              </div>
            </div>
            <div class="line mt-3" v-if="data.booking_follows.length>0"></div>
            <div class="group-add" v-for="(item, index) in data.booking_follows.filter(el => el.flag != 'delete')" :key="index">
              <div class="d-flex justify-content-between">
                <div class="title">#{{index+1}}</div>
                <img @click="delete_booking_follows(item, index)" src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer">
              </div>
              <div class="d-flex ms-2 mt-2">
                <div class="name">ส่งต่อ : {{item?.department_name || '-'}}</div>
                <div class="name ms-5">รูปแบบการดำเนินการ : {{item?.process_type_name || '-'}}</div>
                <div class="name ms-5">การมองเห็น : {{item?.permission_name || '-'}}</div>
              </div>
              <div class="name ms-2 mt-1">ความเห็น / คำสั่ง : {{item?.comment || '-'}}</div>
            </div>
          </div>
          <div class="line mt-4"></div>
          <div class="group-footer">
            <div class="footer-left d-flex">
              <button type="button" class="button-danger" @click="back()">
                <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="icon-times-circle"/>
                ปิด
              </button>
            </div>
            <div class="footer-right">
              <button type="submit" class="button-primary" @click="flagSave=1">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                บันทึกแบบร่าง
              </button>
              <button type="submit" class="button-success" @click="flagSave=2" :disabled="data.sendTo.length<1">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                บันทึกและส่งต่อ
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
  name: 'record-out-detail',
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      optionSelectDefault: {
        book_category_id: [],
      },
      showLoading: false,
      edit: false,
      flagSave: 1,
      data: {
        create_type: '0',
        creater_id: '',
        book_category_id: '',
        book_type_id: '',
        secret_id: '12',
        speed_id: '12',
        booking_refers: [{ receive_document_number: '', desc: '', receive_date: '', book_refer_id: '', original_refer_id: '', book_type: ''}],
        subject: '',
        tag: [],
        main_docs: [{ filename: ''}],
        attachments: [{ filename: ''}],
        sendTo: [],
        booking_follows: [],
        comment: '',
        process_type_id: '',
        permission_id: '',
        description: '',
        regis_date: '',
        human_flag:false,
        response_id:''
      },
      optionSelect: {
        creater_id: [],
        book_category_id: [],
        book_type_id: [],
        secret_id: [],
        speed_id: [],
        process_type_id: [],
        permission_id: [],
        sendTo: [],
      },
      modalRegiter: {
        showModal: false,
        booking_register_details: []
      }
    }
  },
  methods: {
    delete_click() {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการลบ`,
        message: `บันทึกส่งออก ใช่หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          _this.showLoading = true
          _this.axios.delete(`/booking-note/${_this.$route.params.id}`)
          .then(() => { 
            _this.showLoading = false
            _this.modalAlert = {
              showModal: true,
              type: 'success',
              title: 'ทำการลบบันทึกส่งออกสำเร็จแล้ว',
              msgSuccess: true,
              afterPressAgree() {
                _this.back()
              }
            }
          })
          .catch((error) => {
            _this.showLoading = false
            _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          })
        }
      }
    },
    keyup_send_to(e) {
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
            return item
          })
          this.optionSelect.sendTo = response.data.data
        }
      })
    },
    keyupDepartment(e, data) {
      data.optionSelect.department_dest_id = []
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
            return item
          })
          data.optionSelect.department_dest_id = response.data.data
        }
      })
    },
    add_booking_refers() {
      this.data.booking_refers.push({ 
        book_refer_id: '', 
        original_refer_id: '', 
        book_type: '', 
        receive_date: '', 
        receive_document_number: '', 
        desc: '', 
        flag: 'add'
      })
    },
    delete_booking_refers(item, index) {
      if (item.flag == 'edit') {
        item.flag = 'delete'
      } else {
        this.data.booking_refers.splice(index,1)
      }
      if ((this.data.booking_refers.length - this.data.booking_refers.filter(item => item.flag == 'delete').length) < 1) {
        this.add_booking_refers()
      }
    },
    add_attachments() {
      this.data.attachments.push({ 
        filename: '',
        flag: 'add'
      })
    },
    delete_attachments(item, index) {
      if (item.flag == 'edit') {
        item.flag = 'delete'
      } else {
        this.data.attachments.splice(index,1)
      }
      if ((this.data.attachments.length - this.data.attachments.filter(item => item.flag == 'delete').length) < 1) {
        this.add_attachments()
      }
    },
    add_booking_follows() {
      this.data.sendTo.filter(item => {
        if (!this.data.booking_follows.some(el => el.department_id === item.value && el.flag != 'delete')) {
          let data = {
            department_id: parseInt(item.value),
            department_name: item.name,
            comment: this.data.comment,
            process_type_id: parseInt(this.data.process_type_id),
            process_type_name: '',
            permission_id: parseInt(this.data.permission_id),
            permission_name: '',
            flag: 'add',
            human_flag: item.human_flag,
            response_id: parseInt(item.value)
          }
          this.optionSelect.process_type_id.find(item => {if(item.value == this.data.process_type_id) {data.process_type_name = item.name}})
          this.optionSelect.permission_id.find(item => {if(item.value == this.data.permission_id) {data.permission_name = item.name}})
          this.data.booking_follows.push(data)
        }
      })
    },
    delete_booking_follows(item, index) {
      if (item.flag == 'edit') {
        item.flag = 'delete'
      } else {
        this.data.booking_follows.splice(index,1)
      }
    },
    booking_refers_click(item) {
      if (item.receive_document_number) {
        this.showLoading = true
        this.axios.get('/master-data/book-refer', {
          params: {
            keyword: item.receive_document_number
          }
        })
        .then((response) => {
          this.showLoading = false
          if (response.data.data.length > 0) {
            item.book_refer_id = response.data.data[0].id
            item.original_refer_id = response.data.data[0].id
            item.book_type = response.data.data[0].book_type
            item.desc = response.data.data[0].desc
            item.receive_date = response.data.data[0].receive_date
          } else {
            item.receive_document_number = ''
            item.book_refer_id = ''
            item.original_refer_id = ''
            item.book_type = ''
            item.desc = ''
            item.receive_date = ''
            this.modalAlert = {showModal: true, type: 'error', title: '', message: 'ไม่พบหนังสืออ้างอิง'}
          }
        })
        .catch((error) => {
          item.receive_document_number = ''
          item.book_refer_id = ''
          item.original_refer_id = ''
          item.book_type = ''
          item.desc = ''
          item.receive_date = ''
          this.showLoading = false
          this.modalAlert = {showModal: true, type: 'error', title: '', message: 'ไม่พบหนังสืออ้างอิง'}
        })
      } else {
        item.receive_document_number = ''
        item.book_refer_id = ''
        item.original_refer_id = ''
        item.book_type = ''
        item.desc = ''
        item.receive_date = ''
      }
    },
    download_file(data) {
      if (data.filename && data.link) {
        this.axios({
          method:'get',
          url: data.link,
          baseURL: '',
          responseType: 'blob',
        })
        .then(response => {
          const blob = new Blob([response.data], { type: this.assetsUtils.getTypeFile(data.filename) })
          window.open(URL.createObjectURL(blob))
        })
      }
    },
    change_signer_id(index) {
      this.data.booking_register_details[index].booking_registers.filter(item => {
        item.signer_id = this.data.booking_register_details[index].signer_id
      })
    },
    change_signature(index) {
      this.data.booking_register_details[index].booking_registers.filter(item => {
        item.is_signed = this.data.booking_register_details[index].is_signed
      })
    },
    upload_file(data) {
      document.querySelector(`[name="${data}"]`).click()
    },
    file_set_change(data, index, name) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if (name == 'main_docs') {
          if (file.type == 'application/pdf') {
            let dataFile = {
              filename: file.name,
              type: file.type,
              link: URL.createObjectURL(file),
              size: (file.size /1024 /1024).toFixed(2) + ' MB',
              file: file,
            }
            this.data[name][index] = {...this.data[name][index], ...dataFile}
            document.querySelector(`[name="${data}"]`).value=null;
          }
        } else {
          let dataFile = {
            filename: file.name,
            type: file.type,
            link: URL.createObjectURL(file),
            size: (file.size /1024 /1024).toFixed(2) + ' MB',
            file: file,
          }
          this.data[name][index] = {...this.data[name][index], ...dataFile}
          document.querySelector(`[name="${data}"]`).value=null;
        }
      }
    },
    file_attachment_change(data, index) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        let dataFile = {
          filename: file.name,
          type: file.type,
          link: URL.createObjectURL(file),
          size: (file.size /1024 /1024).toFixed(2) + ' MB',
          file: file,
        }
        this.data.attachments[index] = {...this.data.attachments[index], ...dataFile}
        document.querySelector(`[name="${data}"]`).value=null;
      }
    },
    back() {
      this.$router.push({ 
        name: 'subministry-work.record-out',
        query: {
          page: this.$route.query.page,
          perPage: this.$route.query.perPage
        }
      }).catch(()=>{});
    },
    on_submit() {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการ${this.flagSave == 1 ? 'บันทึกแบบร่าง' : 'บันทึกและส่งต่อ'}หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          _this.showLoading = true
          _this.upload_file_all()
        }
      }
    },
    upload_file_all() {
      let currentDate = this.assetsUtils.currentDate()
      let axiosArray1 = []
      let fileAttachments = []
      this.data.attachments.filter(item=> {
        if (item.file) {
          let formDataFile = new FormData();
          formDataFile.append('file', item.file);
          formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
          axiosArray1.push(this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}}))
        }
      })
      if (axiosArray1.length>0) {
        this.axios.all([...axiosArray1])
        .then(this.axios.spread((...responses) => {
          responses.filter((item, index) => {
            fileAttachments.push({...this.data.attachments[index], ...item.data.data, filepath: item.data.data.path})
          })
          if (axiosArray1.length == fileAttachments.length) {
            this.upload_file_all2(fileAttachments)
          }
        })).catch((error) => {
          this.showLoading = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      } else {
        this.upload_file_all2(fileAttachments)
      }
    },
    upload_file_all2() {
      let currentDate = this.assetsUtils.currentDate()
      let axiosArray1 = []
      let fileAttachments = []
      this.data.main_docs.filter(item=> {
        if (item.file) {
          let formDataFile = new FormData();
          formDataFile.append('file', item.file);
          formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
          axiosArray1.push(this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}}))
        }
      })
      if (axiosArray1.length>0) {
        this.axios.all([...axiosArray1])
        .then(this.axios.spread((...responses) => {
          responses.filter((item, index) => {
            fileAttachments.push({...this.data.main_docs[index], ...item.data.data, filepath: item.data.data.path})
          })
          if (axiosArray1.length == fileAttachments.length) {
            this.call_api_save(fileAttachments)
          }
        })).catch((error) => {
          this.showLoading = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      } else {
        this.call_api_save(fileAttachments)
      }
    },
    call_api_save(data) {
      let fileAttachments = data
      let _this = this
      let tag = ''
      this.data.tag.filter(item => {
        tag += item.name+','
      })
      tag = tag.slice(0, -1)
      this.data.sendTo.filter(item => {
        if (!this.data.booking_follows.some(el => el.department_id === item.value && el.flag != 'delete')) {
          let data = {
            department_id: parseInt(item.value),
            department_name: item.name,
            comment: this.data.comment,
            process_type_id: parseInt(this.data.process_type_id),
            process_type_name: '',
            permission_id: parseInt(this.data.permission_id),
            permission_name: '',
            flag: 'add',
            human_flag: item.human_flag,
            response_id: parseInt(item.value)
          }
          this.optionSelect.process_type_id.find(item => {if(item.value == this.data.process_type_id) {data.process_type_name = item.name}})
          this.optionSelect.permission_id.find(item => {if(item.value == this.data.permission_id) {data.permission_name = item.name}})
          this.data.booking_follows.push(data)
        }
      })
      let dataSave = {
        create_type: parseInt(this.data.create_type),
        creater_id: this.data.creater_id ? parseInt(this.data.creater_id) : parseInt(localStorage.getItem('user_id')),
        book_category_id: parseInt(this.data.book_category_id),
        book_type_id: parseInt(this.data.book_type_id),
        secret_id: parseInt(this.data.secret_id),
        speed_id: parseInt(this.data.speed_id),
        subject: this.data.subject,
        user_id: parseInt(localStorage.getItem('user_id')),
        tag: tag,
        attachments: fileAttachments,
        booking_refers: this.data.booking_refers.filter(el => el.book_refer_id),
        booking_follows: this.data.booking_follows,
        flag: this.flagSave == 1 ? "draft" : '',
      }
      this.showLoading = false
      if (this.edit) {
        if (this.flagSave == 1) {
          this.showLoading = true
          this.axios.put(`/booking-note/${this.$route.params.id}`, dataSave)
          .then(() => { 
            this.showLoading = false
            this.modalAlert = {showModal: true, type: 'success', title: 'ทำการบันทึกแบบร่างสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
          })
          .catch((error) => {
            this.showLoading = false
            this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          })
        } else {
          this.showLoading = true
          this.axios.put(`/booking-note/${this.$route.params.id}`, dataSave)
          .then(() => { 
            this.showLoading = false
            this.modalAlert = {showModal: true, type: 'success', title: 'ทำการบันทึกและส่งต่อสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
          })
          .catch((error) => {
            this.showLoading = false
            this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          })
        }
      } else {
        if (this.flagSave == 1) {
          this.showLoading = true
          this.axios.post(`/booking-note`, dataSave)
          .then(() => { 
            this.showLoading = false
            this.modalAlert = {showModal: true, type: 'success', title: 'ทำการบันทึกแบบร่างสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
          })
          .catch((error) => {
            this.showLoading = false
            this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          })
        } else {
          this.showLoading = true
          this.axios.post(`/booking-note`, dataSave)
          .then(() => { 
            this.showLoading = false
            this.modalAlert = {showModal: true, type: 'success', title: 'ทำการบันทึกและส่งต่อสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
          })
          .catch((error) => {
            this.showLoading = false
            this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          })
        }
      }
    },
    api_detail() {
      this.showLoading = true
      this.axios.get(`/booking-note/${this.$route.params.id}`)
      .then((response) => { 
        this.showLoading = false
        this.data = JSON.parse(JSON.stringify(response.data.data))
        this.data.regis_date = response.data.data.created_at
        this.data.tag = []
        response.data.data.tag?.split(',').filter(item => {
          if (item) {
            this.data.tag.push({value: '', name: item})
          }
        })
        this.data.sendTo = []
        this.data.booking_refers = []
        response.data.data.booking_refers.filter(item => {
          item.flag = 'edit'
          this.axios.get(`/master-data/book-refer/${item.book_type}/${item.id}`)
          .then((response2) => {
            this.data.booking_refers.push({...response2.data.data, ...item})
          })
          .catch((error) => {
            this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          })
        })
        this.data.attachments.filter(item => {
          item.flag = 'edit'
          item.link = item.filepath ? this.backendport+'/'+item.filepath : ''
          return item
        })
        this.data.booking_follows.filter(item => {
          item.flag = 'edit'
          return item
        })
        if (response.data.data.booking_refers?.length < 1 || !response.data.data.booking_refers) this.data.booking_refers = [{ receive_document_number: '', desc: '', receive_date: '', book_refer_id: '', original_refer_id: '', book_type: '', flag: 'add'}]
        if (this.data.attachments.length < 1 || !this.data.attachments) this.data.attachments = [{ filename: '', flag: 'add'}]
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    api_master() {
      this.showLoading = true
      const request1 = this.axios.get(`/master-data/book-type`)
      const request2 = this.axios.get(`/master-data/speed`)
      const request3 = this.axios.get(`/master-data/secret`)
      const request4 = this.axios.get(`/master-data/process-type`)
      const request5 = this.axios.get(`/master-data/permission-type`)
      const request6 = this.axios.get(`/user`)
      const request7 = this.axios.get(`/user`)
      const request8 = this.axios.get(`/master-data/register-type`)
      const request9 = this.axios.get('/master-data/department-user')

      this.axios.all([request1, request2, request3, request4, request5, request6, request7, request8, request9])
      .then(this.axios.spread((...responses) => {
        this.showLoading = false
        const response1 = responses[0]
        const response2 = responses[1]
        const response3 = responses[2]
        const response4 = responses[3]
        const response5 = responses[4]
        const response6 = responses[5]
        const response7 = responses[6]
        const response8 = responses[7]
        const response9 = responses[8]
        
        response1.data.data.filter(row => {
          row.value = row.id
          row.name = row.desc
          return row
        })
        response2.data.data.filter(row => {
          row.value = row.id
          row.name = row.desc
          return row
        })
        response3.data.data.filter(row => {
          row.value = row.id
          row.name = row.desc
          return row
        })
        response4.data.data.filter(row => {
          row.value = row.id
          row.name = row.desc
          return row
        })
        response5.data.data.filter(row => {
          row.value = row.id
          row.name = row.desc
          return row
        })
        response6.data.data.filter(row => {
          row.value = row.id
          row.name = row.fname + ' ' + row.lname
          return row
        })
        response7.data.data.filter(row => {
          row.value = row.id
          row.name = row.fname + ' ' + row.lname
          return row
        })
        response8.data.data.filter(row => {
          row.value = row.id
          row.name = row.desc
          return row
        })
        response9.data.data.filter(item => {
          item.value = item.id
          item.name = item.department_full_name
          return item
        })

        this.optionSelect.book_type_id = response1.data.data
        this.optionSelect.speed_id = response2.data.data
        this.optionSelect.secret_id = response3.data.data
        this.optionSelect.process_type_id = response4.data.data
        this.optionSelect.permission_id = response5.data.data
        this.optionSelect.creater_id = response6.data.data
        this.optionSelectDefault.signer_id = response7.data.data
        this.optionSelectDefault.book_category_id = response8.data.data
        this.optionSelectDefault.department_dest_id = response9.data.data
        
        if (this.$route.params.id) {
          this.edit = true
          this.api_detail()
        } else {
          this.edit = false
        }
        
      })).catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
      
    },
  },
  mounted () {
    this.api_master()
  },
  watch: {
    'modalRegiter.showModal' () {
      document.body.style.overflow = this.modalRegiter.showModal ? 'hidden' : ''
    }
  }
}

</script>
<style lang="scss">
  .booking-out-detail {
    .group-overflow {
      overflow: auto;
    }

    .detail {
      width: 100%;
      height: 100%;
      min-width: 1550px;
      min-height: 200px;
      border-radius: 15px;
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

          .icon-size {
            width: 46px;
            height: 32px;
            margin-right: 18px;
          }

          .name {
            color: #1a456b;
            font-weight: bold;
            font-size: 18px;
          }
        }
          .add-booking-out {
          height: 40px;
          border: 0;
          border-radius: 5px;
          background-color: #007773;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          margin-left: 15px;
          padding: 0 8px 0 8px;

          .group-image {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 10px;

            .icon-plus {
              width: 22px;
              height: 22px;
              margin-right: 7px;
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

      .group-between {
        display: flex;

        .left {
          margin-right: 30px;
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

        .add-booking-receive {
          height: 40px;
          border: 0;
          border-radius: 5px;
          background-color: #007773;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          margin-left: 15px;
          padding: 0 8px 0 8px;

          .group-image {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 10px;

            .icon-plus {
              width: 22px;
              height: 22px;
              margin-right: 7px;
            }
          }
        }

        .add-booking-out {
          height: 40px;
          border: 0;
          border-radius: 5px;
          background-color: #007773;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          margin-left: 15px;
          padding: 0 8px 0 8px;

          .group-image {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 10px;

            .icon-plus {
              width: 22px;
              height: 22px;
              margin-right: 7px;
            }
          }
        }

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
      }

      .group-detail {
        padding: 20px 23px;
      }

      .group-detail-2 {
        background-color: rgba(218,229,245,.84);
        margin: 0px 23px 20px;
        padding: 20px 15px;
        font-size: 16px;
        font-weight: bold;
        color: #333;
        border-radius: 5px;

        .col-start {
          width: 10%;
        }

        .col-center {
          width: 40%;
          margin: auto;
          margin-right: 30px;

          .span {
            margin-right: 30px;
          }

          .group-date {
            display: flex;

            .name {
              width: 80px;
            }

            .size-date {
              width: 300px;
            }
          }
        }

        .col-end {
          width: 50%;
          padding-left: 5%;

          .group-num {
            display: flex;

            .name {
              width: 100px;
            }

            .size-input {
              width: 90px;
            }
          }

          .add-department {
            height: 45px;
            min-width: 150px;
            border: 0;
            border-radius: 5px;
            background-color: #007773;
            font-size: 16px;
            font-weight: 500;
            color: #ffffff;
            margin-left: 35px;
            padding: 0 8px 0 8px;

            .image-plus {
              width: 24px;
              height: 24px;
              margin-right: 7px;
            }
          }

          .del-department {
            height: 45px;
            min-width: 150px;
            border: 0;
            border-radius: 5px;
            background-color: #f74756;
            font-size: 16px;
            font-weight: 500;
            color: #ffffff;
            margin-left: 15px;
            padding: 0 8px 0 8px;

            .image-trash {
              font-size: 22px;
              margin-right: 7px;
            }
          }

          .group-image {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .group-all-file {
          align-items: center;
          display: flex;
          margin-top: 20px;

          .name {
            min-width: 125px;;
          }
        }
      }

      .group-input-file {
        position: relative;
        width: 100%;
        margin-left: 30px;
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

      .del-department-3 {
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

      .button-eye {
        min-width: 45px;
        height: 45px;
        border-radius: 5px;
        border: solid 1px #ced4da;
        background-color: #fff;
        margin-left: 15px;

        .icon-eye {
          color: #212529;
          font-size: 22px;
        }
      }

      .cpn-select {
        width: 150px;
        margin-left: 30px;
        margin-top: 5px;
      }

      .detail-sub {
        background: #ffffff;
        padding: 20px;
        margin-top: 20px;
        border-radius: 5px;

        .w-200 {
          min-width: 200px;
          max-width: 200px;
        }

        .group-input-file {
          margin-left: 10px;
        }

        .del-department-2 {
          height: 45px;
          width: 45px;
          border: 0;
          border-radius: 5px;
          background-color: #f74756;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;

          .image-trash {
            font-size: 22px;
          }
        }
      }

      .tag {
        padding: 20px 23px;
        padding-bottom: 0;

        .group-input-file-all {
          padding: 0 10px;
        }

        .group-input-file {
          margin-left: 0px;
        }
      }

      .send-to {
        padding: 20px 23px;
        background-color: #eeeff4;
        margin: 35px;
        border-radius: 5px;

        .align-items-center {
          padding: 0 10px;
        }

        .button {
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

        .button-danger {
          width: 110px;
        }

        .button-success {
          width: 165px;
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

        .group-add {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin-bottom: 7px;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 5px;
          margin-top: 20px;

          .title { 
            font-size: 18px;
          }

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
            width: 100px;
          }
        }

        .footer-right {
          display: flex;

          .button-success {
            width: 175px;
          }

          .button-primary {
            width: 170px;
            margin-right: 20px;
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
  }
</style>