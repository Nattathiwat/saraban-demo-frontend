<template>
  <div class="booking-receive-detail">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/ballot-duotone.svg" alt="" class="icon-size">
            <div class="name">{{edit ? 'แก้ไขหนังสือรับเข้า' : 'สร้างหนังสือรับเข้า'}}</div>
          </div>
        </div>
        <div class="line"></div>
        <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit">
          <div class="group-detail">
            <div class="group-input">
              <cpn-checkbox v-model="data.original_flag"
                            name="original_flag"
                            label="หนังสือต้นเรื่อง" />
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ทะเบียนรับ <span class="required">*</span></div>
                <cpn-select v-model="data.receive_regis_id"
                            name="receive_regis_id"
                            rules="required"
                            :optionSelect="optionSelect.receive_regis_id"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-between">
                <div class="group-input left">
                  <div class="name">วันที่รับหนังสือ <span class="required">*</span></div>
                  <cpn-datepicker v-model="data.receive_date"
                                  name="receive_date"
                                  rules="required"
                                  placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input">
                  <div class="name">เวลาที่รับหนังสือ <span class="required">*</span></div>
                  <cpn-time v-model="data.receive_time"
                            name="receive_time"
                            rules="required"
                            placeholder="กรุณาระบุ" />
                </div>
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
              <div class="group-between">
                <div class="group-input left">
                  <div class="name">เลขที่หนังสือ <span class="required">*</span></div>
                  <cpn-input v-model="data.document_number"
                                  name="document_number"
                                  rules="required"
                                  placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input">
                  <div class="name">ลงวันที่ <span class="required">*</span></div>
                  <cpn-datepicker v-model="data.as_of_date"
                                  name="as_of_date"
                                  rules="required"
                                  placeholder="กรุณาระบุ" />
                </div>
              </div>
            </div>
            <div class="group-input d-flex align-items-center">
              <div class="name">อ้างอิงถึง</div>
              <button type="button" class="add-booking-receive" @click="data.booking_refers.push({ book_refer_id: '', original_refer_id: '', book_type: '', receive_date: '', receive_document_number: '', desc: ''})">
                <div class="group-image">
                  <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                  เพิ่มเอกสารอ้างอิง
                </div>
              </button>
            </div>
            <div class="group-between" v-for="(item, index) in data.booking_refers" :key="index">
              <div class="group-input left">
                <cpn-input  v-model="item.receive_document_number"
                            :name="`codeRefers${index}`"
                            type="text"
                            :searchFlag="true"
                            @searchClick="booking_refersClick(item)"
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
                <button type="button" @click="data.booking_refers.length > 1 ? data.booking_refers.splice(index,1) : item.book_refer_id = '', item.original_refer_id = '', item.receive_document_number = '', item.desc = '', item.receive_date = ''" class="button-delete ms-3"><img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer"></button>
              </div>
            </div>
            <div class="group-input">
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ชื่อเรื่อง <span class="required">*</span></div>
                <cpn-textArea v-model="data.subject"
                              name="subject"
                              rules="required"
                              rows="3" />
              </div>
              <div class="group-between">
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
            </div>
            <div class="group-input left">
              <div class="name">เรียน <span class="required">*</span></div>
              <cpn-textArea v-model="data.send_to"
                            name="send_to"
                            rules="required"
                            rows="1" />
            </div>
            <div class="group-input left">
              <div class="name">รายละเอียดหนังสือ</div>
              <cpn-textArea v-model="data.book_desc"
                            name="book_desc"
                            rows="1" />
            </div>
            <div class="group-input">
              <div class="name">Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")</div>
              <cpn-input-tags v-model="data.tag"
                              name="tag" />
            </div>
          </div>
          <div class="line"></div>
          <div class="group-detail" v-for="(item, index) in data.contracts" :key="index">
            <div class="group-between">
              <div class="group-input left">
                <div class="name">หน่วยงานที่เสนอเรื่อง <span class="required">*</span></div>
                <cpn-select v-model="item.department_id"
                            :name="`${index}department_id`"
                            rules="required"
                            :optionSelect="optionSelect.department_id" />
              </div>
              <div class="group-input">
                <div class="name">ช่องทางการรับเอกสาร <span class="required">*</span></div>
                <cpn-select v-model="item.receive_type"
                            :name="`${index}receive_type`"
                            rules="required"
                            :optionSelect="optionSelect.receive_type" />
              </div>
            </div>

            <div class="group-between">
              <div class="group-input left">
                <div class="name">ผู้ติดต่อ</div>
                <cpn-input  v-model="item.contract_name"
                            :name="`${index}contract_name`" />
              </div>
              <div class="group-between">
                <div class="group-input left">
                  <div class="name">โทรศัพท์</div>
                  <cpn-input  v-model="item.contract_phone"
                              :isNumber="true"
                              maxlength="10"
                              :name="`${index}contract_phone`" />
                </div>
                <div class="group-input">
                  <div class="name">E-mail</div>
                  <cpn-input  v-model="item.contract_mail"
                              rules="email"
                              :name="`${index}contract_mail`" />
                </div>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="group-detail">
            <div class="group-between">
              <div class="group-input left">
                <div class="name">หนังสือต้นเรื่อง</div>
                <div class="d-flex mb-3" v-for="(item, index) in data.main_docs" :key="index">
                  <div class="group-input-file">
                    <button type="button" class="button-file" @click="uploadFile(`main_docs${index}`)">
                      <span :class="item.filename ? '' : 'no-data'">
                        {{item.filename ? item.filename : 'หนังสือต้นเรื่อง'}}
                      </span>
                    </button>
                    <div class="text pointer" @click="uploadFile(`main_docs${index}`)">แนบเอกสาร</div>
                    <input type="file" @change="fileSetChange(`main_docs${index}`, index, 'main_docs')" :name="`main_docs${index}`" style="display:none;" accept="application/pdf">
                  </div>
                  <button type="button" @click="downloadFile(item)" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
                  <button type="button" class="del-department-3" @click="data.main_docs.length > 1 ? data.main_docs.splice(index,1) : item.filename = ''">
                    <img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer">
                  </button>
                </div>
              </div>
              <div class="group-input">
                <div class="group-input d-flex align-items-center">
                  <div class="name">สิ่งที่ส่งมาด้วย</div>
                  <button type="button" class="add-booking-receive" @click="data.attachments.push({ filename: '', file: []})">
                    <div class="group-image">
                      <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                      เพิ่มไฟล์
                    </div>
                  </button>
                </div>
                <div class="d-flex mb-3" v-for="(item, index) in data.attachments" :key="index">
                  <div class="group-input-file">
                    <button type="button" class="button-file" @click="uploadFile(`attachments${index}`)">
                      <span :class="item.filename ? '' : 'no-data'">
                        {{item.filename ? item.filename : 'สิ่งที่ส่งมาด้วย'}}
                      </span>
                    </button>
                    <div class="text pointer" @click="uploadFile(`attachments${index}`)">แนบเอกสาร</div>
                    <input type="file" @change="fileSetChange(`attachments${index}`, index, 'attachments')" :name="`attachments${index}`" style="display:none;">
                  </div>
                  <button type="button" @click="downloadFile(item)" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
                  <button type="button" class="del-department-3" @click="data.attachments.length > 1 ? data.attachments.splice(index,1) : item.filename = ''">
                    <img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer">
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
                              @keyup="keyupSendTo"
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
                <button type="button" @click="sendToClick()" class="button button-success" v-if="false">
                  <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                  เพิ่มการส่งต่อ
                </button>
              </div>
            </div>
          </div>
          <div class="line mt-4"></div>
          <div class="group-footer">
            <div class="footer-left">
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
              <button type="submit" class="button-success" @click="flagSave=2" :disabled="data.sendTo?.length<1">
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
  name: 'booking-receive-detail',
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      showLoading: false,
      edit: false,
      flagSave: 1,
      data: {
        original_flag: false,
        receive_regis_id: '',
        book_type_id: '',
        receive_date: this.assetsUtils.currentDate(),
        receive_time: this.assetsUtils.currentTime(),
        document_number: '',
        as_of_date: this.assetsUtils.currentDate(),
        subject: '',
        secret_id: '',
        speed_id: '',
        send_to: 'หน่วยงาน A',
        book_desc: '',
        tag: [],
        contracts: [{
          department_id: '',
          receive_type: '',
          contract_name: '',
          contract_phone: '',
          contract_mail: '',
        }],
        main_docs: [{ filename: '', file: []}],
        attachments: [{ filename: '', file: []}],
        booking_refers: [{ receive_document_number: '', desc: '', receive_date: '', book_refer_id: '', original_refer_id: '', book_type: ''}],
        sendTo: [],
        comment: '',
        process_type_id: '',
        permission_id: '',
        book_type:'',
        regis_id:'',
      },
      optionSelect: {
        receive_regis_id: [],
        book_type_id: [],
        secret_id: [],
        speed_id: [],
        department_id: [],
        receive_type: [],
        process_type_id: [],
        permission_id: [],
        sendTo: [],
      },
    }
  },
  methods: {
    keyupSendTo(e) {
      this.optionSelect.sendTo = []
      this.axios.get('/department', {
        params: {
          keyword: e.target.value
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            item.name = item.department_full_name
            return item
          })
          this.optionSelect.sendTo = response.data.data
        }
      })
    },
    sendToClick() {
      this.axios.get('/v1/login')
    },
    booking_refersClick(item) {
      //ท584/66
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
    },
    downloadFile(data) {
      if (data.filename && data.type == 'pdf') {
        this.axios({
          method:'get',
          url: data.link,
          baseURL: '',
          responseType: 'blob',
        })
        .then(response => {
          const blob = new Blob([response.data], { type: 'application/pdf' })
          window.open(URL.createObjectURL(blob))
        })
      }
    },
    uploadFile(data) {
      document.querySelector(`[name="${data}"]`).click()
    },
    fileSetChange(data, index, name) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if (name == 'main_docs') {
          if (file.type == 'application/pdf') {
            let dataFile = {
              filename: file.name,
              type: file.type == 'application/pdf' ? 'pdf' : '',
              link: URL.createObjectURL(file),
              size: (file.size /1024 /1024).toFixed(2) + ' MB',
              file: file,
            }
            this.data[name][index] = dataFile
            document.querySelector(`[name="${data}"]`).value=null;
          }
        } else {
          let dataFile = {
            filename: file.name,
            type: file.type == 'application/pdf' ? 'pdf' : '',
            link: URL.createObjectURL(file),
            size: (file.size /1024 /1024).toFixed(2) + ' MB',
            file: file,
          }
          this.data[name][index] = dataFile
          document.querySelector(`[name="${data}"]`).value=null;
        }
      }
    },
    back() {
      this.$router.push({ 
        name: 'booking-receive',
      }).catch(()=>{});
    },
    onSubmit() {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการ${this.flagSave == 1 ? 'บันทึกแบบร่าง' : 'บันทึกและส่งต่อ'}หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          _this.showLoading = true
          if (_this.data.main_docs.length>0||_this.data.attachments.length>0) {
            _this.uploadFileAll()
          } else {
            _this.callApiSave([],[])
          }
        }
      }
    },
    uploadFileAll() {
      let currentDate = this.assetsUtils.currentDate()
      let axiosArray1 = []
      let axiosArray2 = []
      let fileMain_docs = []
      let fileAttachments = []

      this.data.main_docs.filter((item) => {
        if (item.filename) {
          let formDataFile = new FormData();
          formDataFile.append('file', item.file);
          formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
          axiosArray1.push(this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}}))
        }
      });
      this.data.attachments.filter((item) => {
        if (item.filename) {
          let formDataFile = new FormData();
          formDataFile.append('file', item.file);
          formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
          axiosArray2.push(this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}}))
        }
      });
      if (axiosArray1.length>0) {
        this.axios.all([...axiosArray1])
        .then(this.axios.spread((...responses) => {
          responses.filter(item => {
            fileMain_docs.push(item.data.data)
          })
          if (axiosArray1.length == fileMain_docs.length && axiosArray2.length == fileAttachments.length) {
            this.callApiSave(fileMain_docs,fileAttachments)
          }
        })).catch((error) => {
          this.showLoading = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      }
      if (axiosArray2.length>0) {
        this.axios.all([...axiosArray2])
        .then(this.axios.spread((...responses) => {
          responses.filter(item => {
            fileAttachments.push(item.data.data)
          })
          if (axiosArray1.length == fileMain_docs.length && axiosArray2.length == fileAttachments.length) {
            this.callApiSave(fileMain_docs,fileAttachments)
          }
        })).catch((error) => {
          this.showLoading = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      }
      if (axiosArray1.length<1 && axiosArray2.length<1) {
        this.callApiSave([],[])
      }
    },
    callApiSave(fileMain_docs,fileAttachments) {
      console.log('call')
      let _this = this
      let tag = ''
      this.data.tag.filter(item => {
        tag += item.name+','
      })
      tag = tag.slice(0, -1)
      let booking_follows = []
      this.data.sendTo.filter(item => {
        booking_follows.push({
          department_id: parseInt(item.value),
          comment: this.data.comment,
          process_type_id: parseInt(this.data.process_type_id),
          permission_id: parseInt(this.data.permission_id)
        })
      })
      console.log('save')
      let dataSave = {
        original_flag: this.data.original_flag,
        receive_regis_id: parseInt(this.data.receive_regis_id),
        book_type_id: parseInt(this.data.book_type_id),
        receive_date: this.assetsUtils.yearDel543(this.data.receive_date),
        receive_time: this.data.receive_time,
        as_of_date: this.assetsUtils.yearDel543(this.data.as_of_date),
        document_number: this.data.document_number,
        subject: this.data.subject,
        secret_id: parseInt(this.data.secret_id),
        speed_id: parseInt(this.data.speed_id),
        send_to: this.data.send_to,
        book_desc: this.data.book_desc,
        tag: tag,
        contracts: this.data.contracts,
        main_docs: fileMain_docs,
        attachments: fileAttachments,
        booking_refers: this.data.booking_refers[0].book_refer_id ? this.data.booking_refers : [],
        booking_follows: booking_follows,
        //"receive_document_number": "ท584/66",
        user_id: parseInt(localStorage.getItem('user_id')),
        flag: this.flagSave == 1 ? "draft" : '',
        book_type : parseInt(this.$route.query.book_type ),
        regis_id : parseInt(this.$route.query.regis_id ),
      }

      if (this.edit) {
        if (this.flagSave == 1) {
          this.showLoading = true
          this.axios.put(`/booking-receive/${this.$route.params.id}`, dataSave)
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
          this.axios.put(`/booking-receive/${this.$route.params.id}`, dataSave)
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
          this.axios.post(`/booking-receive`, dataSave)
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
          this.axios.post(`/booking-receive`, dataSave)
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
    apiDetail() {
      this.showLoading = true
      this.axios.get(`/booking-receive/${this.$route.params.id}`, {
        params:{
          book_type : this.$route.query.book_type ,
          regis_id: this.$route.query.regis_id,
        }
      })
      .then((response) => { 
        this.showLoading = false
        this.data = JSON.parse(JSON.stringify(response.data.data))
        this.data.tag = []
        response.data.data.tag?.split(',').filter(item => {
          if (item) {
            this.data.tag.push({value: '', name: item})
          }
        })
        this.data.sendTo = []
        response.data.data.booking_follows.filter(item => {
          this.data.sendTo.push({value: item.department_id, name: item.department_name})
          this.data.comment = item.comment
          this.data.process_type_id = item.process_type_id
          this.data.permission_id = item.permission_id
          this.data.book_type = item.book_type
        })

        this.data.booking_refers = []
        response.data.data.booking_refers.filter(item => {
          this.axios.get(`/master-data/book-refer/${item.book_type}/${item.id}`)
          .then((response2) => {
            this.data.booking_refers.push({...item, ...response2.data.data})
          })
          .catch((error) => {
            this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          })
        })

        if (this.data.main_docs?.length < 1 || !this.data.main_docs) this.data.main_docs = [{ filename: '', file: []}]
        if (this.data.attachments?.length < 1 || !this.data.attachments) this.data.attachments = [{ filename: '', file: []}]
        if (this.data.contracts?.length < 1 || !this.data.contracts) this.data.contracts = [{ department_id: '', receive_type: '', contract_name: '', contract_phone: '', contract_mail: '',}]
        if (this.data.booking_refers?.length < 1 || !this.data.booking_refers) this.data.booking_refers = [{ receive_document_number: '', desc: '', receive_date: '', book_refer_id: '', original_refer_id: '', book_type: ''}]
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    apiMaster() {
      this.showLoading = true
      const request1 = this.axios.get('/master-data/register-type')
      const request2 = this.axios.get('/master-data/book-type')
      const request3 = this.axios.get('/master-data/secret')
      const request4 = this.axios.get('/master-data/speed')
      const request5 = this.axios.get('/master-data/process-type')
      const request6 = this.axios.get('/master-data/permission-type')
      const request7 = this.axios.get('/department')
      const request8 = this.axios.get('/master-data/receive-type')

      this.axios.all([request1, request2, request3, request4, request5, request6, request7, request8])
      .then(this.axios.spread((...responses) => {
        this.showLoading = false;
        const response1 = responses[0]
        const response2 = responses[1]
        const response3 = responses[2]
        const response4 = responses[3]
        const response5 = responses[4]
        const response6 = responses[5]
        const response7 = responses[6]
        const response8 = responses[7]
        
        response1.data.data.filter(item => {
          item.value = item.id
          item.name = item.desc
          return item
        })
        response2.data.data.filter(item => {
          item.value = item.id
          item.name = item.desc
          return item
        })
        response3.data.data.filter(item => {
          item.value = item.id
          item.name = item.desc
          return item
        })
        response4.data.data.filter(item => {
          item.value = item.id
          item.name = item.desc
          return item
        })
        response5.data.data.filter(item => {
          item.value = item.id
          item.name = item.desc
          return item
        })
        response6.data.data.filter(item => {
          item.value = item.id
          item.name = item.desc
          return item
        })
        response7.data.data.filter(item => {
          item.value = item.id
          item.name = item.department_full_name
          return item
        })
        response8.data.data.filter(item => {
          item.value = item.id
          item.name = item.desc
          return item
        })
        this.optionSelect.receive_regis_id = response1.data.data
        this.optionSelect.book_type_id = response2.data.data
        this.optionSelect.secret_id = response3.data.data
        this.optionSelect.speed_id = response4.data.data
        this.optionSelect.process_type_id = response5.data.data
        this.optionSelect.permission_id = response6.data.data
        this.optionSelect.department_id = response7.data.data
        this.optionSelect.receive_type = response8.data.data

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
    'modalRegiter.showModal' () {
      document.body.style.overflow = this.modalRegiter.showModal ? 'hidden' : ''
    }
  }
}

</script>
<style lang="scss">
  .booking-receive-detail {
    .group-overflow {
      overflow: auto;
    }

    .name-checkbox {
      font-size: 20px;
      margin-top: -2px !important;
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

        .group-end {
          .button-back {
            width: 129px;
            height: 45px;
            border-radius: 5px;
            border: solid 1px #ced4da;
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

      .add-register {
        height: 50px;
        border-radius: 10px;
        box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);
        border: 0;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #007773;
        margin: 20px 23px 20px 0px;
        padding: 0 18px;

        .icon-plus {
          width: 28px;
          height: 28px;
          margin-right: 10px;
        }
      }

      .group-between {
        display: flex;
        width: 100%;

        .left {
          margin-right: 30px;
        }
      }

      .group-input {
        width: 100%;
        margin-bottom: 15px;

        .name {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin-bottom: 7px;
        }

        .add-booking-receive {
          height: 36px;
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

            .icon-plus {
              width: 24px;
              height: 24px;
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
        border-radius: 10px;

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
        border-radius: 10px;

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
        border-radius: 10px;

        .align-items-center {
          padding: 0 10px;
        }

        .button {
          height: 45px;
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
            width: 185px;
          }

          .button-primary {
            width: 185px;
            margin-right: 20px;
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