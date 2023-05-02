<template>
  <div class="automail-sendmail-detail">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <i class="bi bi-envelope icon-envelope"></i>
            <div class="name">ส่งหนังสือส่งออก ผ่านอีเมลอัตโนมัติ</div>
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
            <div class="d-flex justify-content-between align-items-center mb-4">
              <div class="title" v-show="step == 1">๑. ร่างเนื้อหาจดหมาย</div>
              <div class="title" v-show="step == 2">๒. แนบเอกสาร</div>
              <div class="title" v-show="step == 3">๓. บันทึกและส่งจดหมาย</div>
              <div>
                <button type="button" class="button-after button-primary" @click="step -= 1" v-show="step != 1">
                  <img src="@/assets/images/icon/arrow-circle-leftffffff.svg" class="icon-after">
                  ก่อนหน้า
                </button>
                <button type="button" class="button-cancel button-danger" @click="cancelClick()" >
                  <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="icon-times-circle"/>
                  ยกเลิกร่าง
                </button>
                <button type="submit" class="button-save button-success" @click="flag = 1">
                  <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                  บันทึกร่าง
                </button>
                <button type="submit" class="button-save2 button-primary" v-show="step == 3"  @click="flag = 2">
                  <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                  บันทึกและส่ง
                </button>
                <button type="button" class="button-next button-primary" @click="step += 1" v-show="step != 3">
                  ถัดไป
                  <img src="@/assets/images/icon/arrow-circle-leftffffff.svg" class="icon-next">
                </button>
              </div>
            </div>
            <div class="head">เกี่ยวกับหนังสือส่งออก</div>
            <div class="border">
              <div class="group-between">
                <div class="group-input">
                  <div class="name">ประเภท</div>
                  <cpn-input  v-model="data.detail_type"
                              name="detail_type"
                              placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input">
                  <div class="name">ทะเบียน</div>
                  <cpn-input  v-model="data.detal_register"
                              name="detal_register"
                              placeholder="กรุณาระบุ" />
                </div>
              </div>
              <div class="group-between">
                <div class="group-input">
                  <div class="name">ชั้นความลับ</div>
                  <cpn-input  v-model="data.detail_secret"
                              name="detail_secret"
                              placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input">
                  <div class="name">ความเร่งด่วน</div>
                  <cpn-input  v-model="data.detail_speed"
                              name="detail_speed"
                              placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input">
                  <div class="name">เลขที่ออก สลค.</div>
                  <cpn-input  v-model="data.detail_issued_number"
                              name="detail_issued_number"
                              :disabled="edit"
                              placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input">
                  <div class="name">ลงวันที่</div>
                  <cpn-input  v-model="data.detail_dated"
                              name="detail_dated"
                              placeholder="กรุณาระบุ" />
                </div>
              </div>
              <div class="group-between">
                <div class="group-input">
                  <div class="name">จากสังกัด/กอง</div>
                  <cpn-input  v-model="data.detail_from_affiliation"
                              name="detail_from_affiliation"
                              placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input">
                  <div class="name">ถึง</div>
                  <cpn-input  v-model="data.detail_from_affiliation_to"
                              name="detail_from_affiliation_to"
                              placeholder="กรุณาระบุ" />
                </div>
              </div>
              <div class="group-between">
                <div class="group-input">
                  <div class="name">ชื่อเรื่อง</div>
                  <cpn-input  v-model="data.detail_title"
                              name="detail_title"
                              placeholder="กรุณาระบุ" />
                </div>
              </div>
            </div>
            <div v-show="step == 1">
              <div class="group-input mt-4">
                <div class="name">คำขึ้นต้น <span class="required">*</span></div>
                <div class="group-recommend mb-3">
                  <cpn-input v-model="data.detail_recommend"
                              name="detail_recommend"
                              class="input-recommend"
                              rules="required"
                              placeholder="กรุณาระบุ" />
                  <button type="button" class="button-recommend" @click="recommendClick()">
                    <i class="bi bi-question icon-question"></i>
                    แนะนำ
                  </button>
                </div>
                <cpn-input  v-model="data.detail_book_recipient"
                            name="detail_book_recipient"
                            rules="required"
                            placeholder="ผู้รับหนังสือ" />
              </div>
              <div class="group-input">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div class="name">ข้อความ <span class="required">*</span></div>
                  <div>
                    <button type="button" class="button-template" @click="templateClick()">
                      <i class="bi bi-question icon-question"></i>
                      เลือกเทมเพลต
                    </button>
                  </div>
                </div>
                <cpn-textArea v-model="data.detail_message"
                              name="detail_message"
                              rows="15"
                              rules="required"
                              placeholder="เนื้อความจดหมาย" />
              </div>
              <div class="group-input">
                <div class="name">รายละเอียดตามเอกสารที่ส่งมาด้วย <span class="required">*</span></div>
                <cpn-textArea v-model="data.detail_message_documents"
                              name="detail_message_documents"
                              rules="required"
                              rows="2"
                              placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">คำลงท้าย <span class="required">*</span></div>
                <cpn-input  v-model="data.detail_postscript"
                            name="detail_postscript"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ชื่อส่วนราชการที่ส่งหนังสือ <span class="required">*</span></div>
                <cpn-input  v-model="data.detail_government"
                            name="detail_government"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ข้อมูลผู้ติดต่อ <span class="required">*</span></div>
                <div class="mb-3">
                  <cpn-input  v-model="data.detail_contact_name"
                              name="detail_contact_name"
                              rules="required"
                              placeholder="ชื่อส่วนราชการเจ้าของเรื่องหรือหน่วยงานที่ออกหนังสือ" />
                </div>
                <cpn-input  v-model="data.detail_contact_phone"
                            name="detail_contact_phone"
                            rules="required"
                            placeholder="เบอร์โทร และชื่อผู้ติดต่อ" />
              </div>
              <div class="group-input">
                <div class="name">ข้อความใต้เส้นปิดข้อความ</div>
                <div class="line"></div>
              </div>
              <div class="group-input">
                <div class="name">ข้อความขอให้ตอบกลับ <span class="required">*</span></div>
                <cpn-input  v-model="data.detail_reply_message"
                            name="detail_reply_message"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">Disclaimer <span class="required">*</span></div>
                <cpn-textArea v-model="data.detail_disclaimer"
                              name="detail_disclaimer"
                              rules="required"
                              rows="15"
                              placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div v-show="step == 2">
              <div class="sum-size-file">
                <span>ขนาดไฟล์รวม {{sumfile()}} (อนุญาตให้แนบไฟล์รวมกันสูงสุด 25MB)</span>
              </div>
              <div class="group-input">
                <div class="name">วิธีการส่งไฟล์ <span class="required">*</span></div>
                <cpn-select v-model="data.detail_how_to_send_files"
                            name="detail_how_to_send_files"
                            rules="required"
                            :optionSelect="optionSelect.detail_how_to_send_files"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ลิงค์ดาวน์โหลดเอกสาร</div>
                <div class="group-recommend">
                  <cpn-input v-model="data.detail_recommend"
                              name="detail_recommend"
                              class="input-link"
                              :disabled="data.detail_how_to_send_files == 1"
                              placeholder="กรุณาระบุ" />
                  <button type="button" class="button-link none-pointer">
                    <i class="bi bi-link-45deg icon-question"></i>
                  </button>
                </div>
              </div>
              <div class="group-input">
                <div class="name">หนังสือต้นเรื่อง</div>
                <div class="d-flex" v-if="data.detail_original_file">
                  <cpn-input  v-model="data.detail_original_file"
                              name="detail_original_file"
                              :disabled="true"/>
                  <button type="button" class="button-view" @click="previewFile(data)">
                    <i class="bi bi-eye icon-eye"></i>
                  </button>
                </div>
                <div v-else>
                  <cpn-input  v-model="no_detail_original_file"
                              name="no_detail_original_file"
                              :disabled="true"/>
                </div>
              </div>
              <div class="group-input">
                <div class="name">สำเนาคู่ฉบับ</div>
                <div class="d-flex" v-if="data.detail_duplicate_copy">
                  <cpn-input  v-model="data.detail_duplicate_copy"
                              name="detail_duplicate_copy"
                              :disabled="true"/>
                  <button type="button" class="button-view" @click="previewFile(data)">
                    <i class="bi bi-eye icon-eye"></i>
                  </button>
                </div>
                <div v-else>
                  <cpn-input  v-model="no_detail_duplicate_copy"
                              name="no_detail_duplicate_copy"
                              :disabled="true"/>
                </div>
              </div>
              <div class="line"></div>
              <div class="group-input">
                <div class="name d-flex justify-content-between align-items-center mb-3 mt-3">
                  <div>สิ่งที่แนบมาด้วย</div>
                  <input type="file" multiple @change="fileChange('attachments')" name="attachments" style="display:none;" accept="application/pdf">
                  <button type="button" class="button-file" @click="uploadFile('attachments')">
                    <i class="bi bi-plus icon-plus"></i>
                    แนบเอกสาร
                  </button>
                </div>
                <div v-for="(item, index) in data.attachments.filter(el => el.flag != 'delete')" :key="index" v-if="data?.attachments?.length > 0">
                  <div class="d-flex mb-2">
                    <cpn-input  v-model="item.filename"
                                :name="'filename'+index"
                                :disabled="true"/>
                    <button type="button" class="button-view" @click="previewFile(item)">
                      <i class="bi bi-eye icon-eye"></i>
                    </button>
                    <button type="button" class="button-del" @click="deleteFile(item, index)">
                      <i class="bi bi-trash icon-trash"></i>
                    </button>
                  </div>
                </div>
                <div v-else>
                  <cpn-input  v-model="no_attachments"
                              name="no_attachments"
                              :disabled="true"/>
                </div>
              </div>
            </div>
            <div v-show="step == 3">
              <div class="group-input mt-4">
                <div class="name">Subject / Mail <span class="required">*</span></div>
                <cpn-input  v-model="data.detail_subject"
                            name="detail_subject"
                            rules="required"
                            placeholder="เรื่อง" />
              </div>
              <div class="group-input mt-4">
                <div class="name">ถึง / To <span class="required">*</span> (สามารถระบุได้มากกว่า 1 อีเมล โดยคั่นแต่ละอีเมลด้วยสัญลักษณ์ ,)</div>
                <cpn-input  v-model="data.detail_subject"
                            name="detail_subject"
                            rules="required"
                            placeholder="อีเมลผู้รับจดหมาย" />
              </div>
              <div class="group-input mt-4">
                <div class="name">สำเนาถึง / Cc (สามารถระบุได้มากกว่า 1 อีเมล โดยคั่นแต่ละอีเมลด้วยสัญลักษณ์ ,)</div>
                <cpn-input  v-model="data.detail_subject"
                            name="detail_subject"
                            placeholder="อีเมลผู้รับจดหมาย" />
              </div>
              <div class="group-input mt-4">
                <div class="name">สำเนาลับถึง / BCc (สามารถระบุได้มากกว่า 1 อีเมล โดยคั่นแต่ละอีเมลด้วยสัญลักษณ์ ,)</div>
                <cpn-input  v-model="data.detail_subject"
                            name="detail_subject"
                            placeholder="อีเมลผู้รับจดหมาย" />
              </div>
              <div class="group-input mt-4">
                <div class="name d-flex justify-content-between align-items-center mb-3 mt-3">
                  <div>ตัวอย่างข้อความ</div>
                  <button type="button" class="button-reload" @click="reloadClick()">
                    <i class="bi bi-arrow-clockwise icon-clockwise"></i>
                    โหลดใหม่
                  </button>
                </div>
                <div class="border-preview">
                  <iframe :src="data.detail_file_preview"
                          width="100%" 
                          height="1070px"
                          frameborder="1"
                          class="mx-auto border d-block"
                          style="margin: 0 auto;" />
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
    <div class="modal-recommend" v-show="modal.showModal">
      <div class="modal-class">
        <div class="modal-center">
          <div class="modal-size">
            <div class="modal-title">
              <div class="title-size">เลือกผู้รับหนังสือ</div> 
              <i class="bi bi-x-lg icon-close" @click="modal.showModal = false"></i>
            </div>
            <div class="line"></div>
            <div class="modal-detail">
              <div class="group-input">
                <div class="name">ผู้รับหนังสือ </div>
                <cpn-autoComplete v-model="modal.book_recipient"
                                  name="book_recipient"
                                  :optionSelect="modal.optionSelect.book_recipient"
                                  @keyup="keyupModal($event)"
                                  placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="line"></div>
            <div class="group-footer">
              <button type="button" @click="modal.showModal = false" class="btn button-danger">
                <div class="group-name">
                  <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="image-icon"/>
                  <div class="name">ยกเลิก</div>
                </div>
              </button>
              <button type="submit" class="btn button-success" @click="modalClick()">
                <div class="group-name">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="image-icon"/>
                  <div class="name">ตกลง</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-template" v-show="modalTemplate.showModal">
      <div class="modal-class">
        <div class="modal-center">
          <div class="modal-size">
            <div class="modal-title">
              <div class="title-size">เลือกรูปแบบข้อความ</div> 
              <i class="bi bi-x-lg icon-close" @click="modalTemplate.showModal = false"></i>
            </div>
            <div class="line"></div>
            <div class="modal-detail">
              <div class="group-input">
                <div class="name">รูปแบบข้อความ </div>
                <cpn-autoComplete v-model="modalTemplate.message_format"
                                  name="message_format"
                                  :optionSelect="modalTemplate.optionSelect.message_format"
                                  @keyup="keyupModalTeamplate($event)"
                                  placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="line"></div>
            <div class="group-footer">
              <button type="button" @click="modalTemplate.showModal = false" class="btn button-danger">
                <div class="group-name">
                  <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="image-icon"/>
                  <div class="name">ยกเลิก</div>
                </div>
              </button>
              <button type="submit" class="btn button-success" @click="modalTemplateClick()">
                <div class="group-name">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="image-icon"/>
                  <div class="name">ตกลง</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <cpn-modal-alert  :modalAlert="modalAlert"/>
    <cpn-loading :show="showLoading"/>
  </div>
</template>
<script>
export default {
  name: 'automail-sendmail-detail',
  data() {
    return {
      flag: 1,
      step: 3,
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      modal: {
        showModal: false,
        book_recipient: '',
        optionSelect: {
          book_recipient: []
        }
      },
      modalTemplate: {
        showModal: false,
        message_format: '',
        optionSelect: {
          message_format: []
        }
      },
      showLoading: false,
      edit: false,
      data: {
        detail_type: '',
        detal_register: '',
        detail_secret: '',
        detail_speed: '',
        detail_issued_number: '',
        detail_dated: '',
        detail_from_affiliation: '',
        detail_from_affiliation_to: '',
        detail_title: '',
        detail_recommend: '',
        detail_book_recipient: '',
        detail_message: '',
        detail_message_documents: '',
        detail_postscript: '',
        detail_government: '',
        detail_contact_name: '',
        detail_contact_phone: '',
        detail_reply_message: '',
        detail_disclaimer: '',
        detail_how_to_send_files: '',
        detail_recommend: '',
        detail_original_file: '',
        detail_duplicate_copy: '',
        attachments: [],
        fileType: [],
        detail_file_preview: new URL(`@/assets/images/default/department.png`, import.meta.url).href
      },
      no_detail_original_file: 'ไม่มีหนังสือต้นเรื่อง',
      no_detail_duplicate_copy: 'ไม่มีสำเนาคู่ฉบับ',
      no_attachments: 'ไม่มีสิ่งที่แนบมาด้วย',
      optionSelect: {
        detail_how_to_send_files: [{value: 1, name: 'แนบไฟล์ทั้งหมด ตามข้างล่างนี้'}, {value: 2, name: 'ไม่แนบไฟล์ แต่ใช้ลิงค์ข้างล่างนี้แทน'}]
      },
    }
  },
  methods: {
    reloadClick() {
      console.log('reloadClick')
    },
    uploadFile(data) {
      document.querySelector(`[name="${data}"]` ).click()
    },
    fileChange(data) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if ((this.data.fileType.indexOf(file.type)==-1)) {
          this.modalAlert = {showModal: true, type: 'error', message: this.defaultMessageErrorFile}
          return false
        }
        if (data == 'attachments') {
          if (file.type == 'application/pdf') {
            let dataFile = {
              filename: file.name,
              type: file.type,
              link: URL.createObjectURL(file),
              size: (file.size /1024 /1024).toFixed(2) + ' MB',
              file: file,
              flag: 'add'
            }
            this.data.attachments.push(dataFile)
          }
        }
      }
      document.querySelector(`[name="${data}"]`).value=null;
    },
    previewFile(data) {
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
    deleteFile(item, index) {
      if (item.flag == 'edit') {
        item.flag = 'delete'
      } else {
        this.data.attachments.splice(index,1)
      }
    },
    sumfile() {
      let size = 0
      this.data.attachments?.filter(row => {
        size += row.file.size
      })
      return (size /1024 /1024).toFixed(2) + ' MB'
    },
    cancelClick() {
      console.log('cancelClick')
    },
    recommendClick(item) {
      this.modal.book_recipient = ''
      this.keyupModal({target: {value: ''}})
      this.modal.showModal = true
    },
    keyupModal(e) {
      this.modal.optionSelect.book_recipient = []
      this.axios.get('/master-data/subministry', {
        params: {
          keyword: e.target.value,
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            return item
          })
          this.modal.optionSelect.book_recipient = response.data.data
        }
      })
    },
    modalClick() {
      if (this.modal.book_recipient) {
        this.axios.get('/master-data/subministry', {
          params: {
            keyword: this.modal.book_recipient,
          }
        })
        .then((response) => {
          this.data.detail_recommend = 'test1'
          this.data.detail_book_recipient = 'test2'
          this.data.detail_postscript = 'test3'
          this.modal.showModal = false
        })
        .catch((error) => {
          this.modal.showModal = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      } else {
        this.modal.showModal = false
      }
    },
    templateClick(item) {
      this.modalTemplate.message_format = ''
      this.keyupModalTeamplate({target: {value: ''}})
      this.modalTemplate.showModal = true
    },
    keyupModalTeamplate(e) {
      this.modalTemplate.optionSelect.message_format = []
      this.axios.get('/master-data/subministry', {
        params: {
          keyword: e.target.value,
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            return item
          })
          this.modalTemplate.optionSelect.message_format = response.data.data
        }
      })
    },
    modalTemplateClick() {
      if (this.modalTemplate.message_format) {
        this.axios.get('/master-data/subministry', {
          params: {
            keyword: this.modalTemplate.message_format,
          }
        })
        .then((response) => {
          this.data.detail_message = 'template_test1'
          this.data.detail_message_documents = 'template_test2'
          this.data.detail_government = 'template_test3'
          this.data.detail_contact_phone = 'template_test4'
          this.data.detail_reply_message = 'template_test5'
          this.data.detail_disclaimer = 'template_test6'
          this.modalTemplate.showModal = false
        })
        .catch((error) => {
          this.modalTemplate.showModal = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      } else {
        this.modalTemplate.showModal = false
      }
    },
    back() {
      this.$router.push({ 
        name: 'automail-sendmail',
        query: {
          page: this.$route.query.page,
          perPage: this.$route.query.perPage
        }
      }).catch(()=>{});
    },
    onSubmit() {
      let _this = this
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
          _this.axios[_this.edit ? 'put' : 'post'](`/usexr${_this.edit ? '/' + _this.$route.params.id : ''}`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}})
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
      const request1 = this.axios.get(`/filetype?keyword=&page_size=50&page=1`)
      this.axios.all([request1])
      .then(this.axios.spread((...responses) => {
        this.showLoading = false
        const response1 = responses[0]
        this.data.fileType = []
        response1.data.data.filter(item => {
          if (item.active_flag == 1) {
            this.data.fileType.push(item.content_type)
          }
        })
        // this.apiDetail()
      })).catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    }
  },
  mounted () {
    // this.apiMaster()
  },
  watch: {
    'data.organization_id'() {
      this.masterDropdown()
    },
    'data.department_id'() {
      this.masterDropdown()
    },
    'data.subministry_id'() {
      this.masterDropdown()
    },
    'data.group_id'() {
      this.masterDropdown()
    },
  }
}

</script>
<style lang="scss">
  .automail-sendmail-detail {
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

          .icon-envelope {
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

      .border {
        border-color: #dae5f5!important;
        border-radius: 5px;
        padding: 20px;
      }

      .group-detail {
        padding: 20px 23px;

        .title {
          font-size: 22px;
          font-weight: 500;
          margin-bottom: 10px;
        }

        .head {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 10px;
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
          margin-bottom: 30px;

          .name {
            font-size: 16px;
            font-weight: bold;
            color: #333;
            margin-bottom: 7px;
          }
        }

        .button-reload {
          background-color: #1a456b;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          min-width: 130px;
          max-width: 130px;
          height: 40px;
          border: 0;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 15px;
          padding-right: 10px;

          .icon-clockwise {
            font-size: 26px;
            margin-right: 10px;
          }
        }

        .border-preview {
          border-color: #dae5f5!important;
          border-radius: 5px;
        }
        
        .sum-size-file {
          color: #055160;
          background-color: #cff4fc;
          border-color: #b6effb;
          height: 45px;
          border-radius: 5px;
          position: relative;
          margin-bottom: 20px;
          margin-top: 20px;

          span {
            font-size: 18px;
            position: absolute;
            top: 10px;
            left: 20px;
          }
        }

        .button-cancel {
          width: 135px;
          height: 45px;
          border-radius: 5px;
          border: solid 1px #c1cfe3;
          background-color: transparent;
          font-size: 16px;
          font-weight: 500;
          color: #15466e;
          margin-left: 10px;

          .icon-times-circle {
            width: 25px;
            height: 25px;
            margin-right: 10px;
          }
        }

        .button-save2 {
          width: 155px;
          height: 45px;
          border-radius: 5px;
          border: solid 1px #c1cfe3;
          background-color: transparent;
          font-size: 16px;
          font-weight: 500;
          color: #15466e;
          margin-left: 10px;

          .icon-check-circle {
            width: 25px;
            height: 25px;
            margin-right: 10px;
          }
        }

        .button-save {
          width: 135px;
          height: 45px;
          border-radius: 5px;
          border: solid 1px #c1cfe3;
          background-color: transparent;
          font-size: 16px;
          font-weight: 500;
          color: #15466e;
          margin-left: 10px;

          .icon-check-circle {
            width: 25px;
            height: 25px;
            margin-right: 10px;
          }
        }

        .button-next {
          width: 110px;
          height: 45px;
          border-radius: 5px;
          border: solid 1px #c1cfe3;
          background-color: transparent;
          font-size: 16px;
          font-weight: 500;
          color: #15466e;
          margin-left: 10px;

          .icon-next {
            transform: rotate(180deg);
            width: 25px;
            height: 25px;
            margin-left: 10px;
          }
        }

        .button-after {
          width: 120px;
          height: 45px;
          border-radius: 5px;
          border: solid 1px #c1cfe3;
          background-color: transparent;
          font-size: 16px;
          font-weight: 500;
          color: #15466e;
          margin-left: 10px;

          .icon-after {
            width: 25px;
            height: 25px;
            margin-right: 10px;
          }
        }
      }

      .button-template {
        background-color: #ffffff;
        font-size: 16px;
        font-weight: 500;
        color: #1a456b;
        min-width: 150px;
        max-width: 150px;
        height: 45px;
        border: 1px solid #1a456b;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 15px;

        .icon-question {
          font-size: 30px;
        }
      }

      .button-file {
        background-color: #1a456b;
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
        min-width: 130px;
        max-width: 130px;
        height: 40px;
        border: 0;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
        padding-right: 10px;

        .icon-plus {
          font-size: 26px;
        }
      }

      .button-view {
        min-width: 45px;
        height: 45px;
        border-radius: 5px;
        border: solid 1px #ced4da;
        background-color: #fff;
        margin-left: 15px;

        .icon-eye {
          font-size: 22px;
          color: #1a456b;
        }
      }

      .button-del {
        min-width: 45px;
        height: 45px;
        border-radius: 5px;
        border: solid 1px #ced4da;
        background-color: #fff;
        margin-left: 5px;

        .icon-trash {
          font-size: 22px;
          color: #f74756;
        }
      }

      .group-recommend {
        position: relative;

        .input-recommend {
          margin-right: 90px;
        }

        .input-link {
          margin-right: 50px;
        }

        .button-recommend {
          position: absolute;
          top: 0;
          right: 0;
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
          padding-right: 15px;

          .icon-question {
            font-size: 30px;
          }
        }

        .button-link {
          position: absolute;
          top: 0;
          right: 0;
          background-color: #1a456b;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          min-width: 60px;
          max-width: 60px;
          height: 45px;
          border: 0;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;

          .icon-question {
            font-size: 30px;
          }
        }
      }
    }

    .modal-recommend, .modal-template {
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
            max-width: 800px;
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
              padding: 20px 30px 50px;

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