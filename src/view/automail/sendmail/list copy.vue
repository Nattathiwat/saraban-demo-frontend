<template>
  <div class="automail-sendmail-list">
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
        <div class="group-detail">
          <div class="group-between">
            <div class="group-input w-50">
              <div class="name">คำขึ้นต้น </div>
              <div class="group-recommend">
                <cpn-input v-model="data.salutation"
                            name="salutation"
                            class="input-recommend"
                            placeholder="กรุณาระบุ" />
                <button type="button" class="button-recommend" @click="recommendClick()">
                  <i class="bi bi-question icon-question"></i>
                  แนะนำ
                </button>
              </div>
            </div>
            <div class="group-input">
              <div class="name">คำลงท้าย </div>
              <div class="d-flex">
                <cpn-input  v-model="data.postscript"
                            name="postscript"
                            placeholder="กรุณาระบุ" />

                <button type="button" class="button-check" @click="amendClick(1)">
                  <i class="bi bi-check icon-check"></i>
                  ปรับปรุงทั้งหมด
                </button>
              </div>
            </div>
          </div>
          <div class="group-between">
            <div class="group-input">
              <div class="name">ข้อมูลผู้ติดต่อ </div>
              <div class="d-flex">
                <cpn-input  v-model="data.contact_information"
                            name="contact_information"
                            placeholder="กรุณาระบุ" />

                <button type="button" class="button-check" @click="amendClick(2)">
                  <i class="bi bi-check icon-check"></i>
                  ปรับปรุงทั้งหมด
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="group-body">
          <table class="table-automail-sendmail-list">
            <thead class="thead">
              <tr class="thead-row">
                <th class="col1">ลำดับ</th>
                <th class="col2">เลขที่ออก สลค.<br><span>ลงวันที่</span></th>
                <th class="col3" v-show="false">ถึง<br><span class="ms-2">เรียน</span><br><span class="ms-4">คำขึ้นต้น</span><br><span class="ms-6">คำลงท้าย</span><br><span class="ms-8">ข้อมูลผู้ติดต่อ</span></th>
                <th class="col4" v-show="false">ส่งถึง (To)<br><span class="ms-2">สำเนาถึง (Cc)</span><br><span class="ms-4">สำเนาลับถึง (Bcc)</span><br><span class="ms-6">เรื่อง</span><br><span class="ms-8">ข้อความ</span></th>
                <th class="col5" v-show="false">วิธีการส่งไฟล์<br><span class="ms-2">ไฟล์ต้นเรื่อง</span><br><span class="ms-4">ไฟล์แนบ</span></th>
                <th class="col3">ข้อมูลผู้ติดต่อ</th>
                <th class="col4">ข้อความ</th>
                <th class="col5">วิธีส่งไฟล์</th>
              </tr>
            </thead>
            <tbody class="tbody" :class="data.table.length > 0 ? 'tbody-top' : ''">
              <tr class="tbody-row" v-for="(item, index) in data.table" :key="index">
                <td class="col1">{{index + 1}}</td>
                <td class="col2">{{item.department_name}}</td>
                <td class="col3">
                  <div class="new-line">
                    <div class="name">ถึง</div>
                    <cpn-input  v-model="item.table_to"
                                :name="'table_to'+index"
                                :disabled="true"  />
                  </div>
                  <div class="new-line">
                    <div class="name">เรียน</div>
                    <cpn-input  v-model="item.table_dear"
                                :name="'table_dear'+index"
                                class="input-recommend"
                                placeholder="กรุณาระบุ" />
                  </div>
                  <div class="new-line">
                    <div class="name">คำขึ้นต้น</div>
                    <div class="group-recommend">
                      <cpn-input  v-model="item.table_salutation"
                                  :name="'table_salutation'+index"
                                  class="input-recommend"
                                  placeholder="กรุณาระบุ" />
                      <button type="button" class="button-recommend" @click="recommendClick(), indexTable = index, flgTable = true">
                        <i class="bi bi-question icon-question"></i>
                        แนะนำ
                      </button>
                    </div>
                  </div>
                  <div class="new-line">
                    <div class="name">คำลงท้าย</div>
                    <cpn-input  v-model="item.table_postscript"
                                :name="'table_postscript'+index"/>
                  </div>
                  <div class="new-line">
                    <div class="name">ข้อมูลผู้ติดต่อ</div>
                    <cpn-input  v-model="item.table_contact_information"
                                :name="'table_contact_information'+index"/>
                  </div>
                </td>
                <td class="col4">
                  <div class="new-line">
                    <div class="name">ส่งถึง (TO)</div>
                    <cpn-input  v-model="item.table_to"
                                :name="'table_to'+index"/>
                  </div>
                  <div class="new-line">
                    <div class="name">สำเนาถึง (Cc)</div>
                    <cpn-input  v-model="item.table_cc"
                                :name="'table_cc'+index"/>
                  </div>
                  <div class="new-line">
                    <div class="name">สำเนาลับถึง (Bcc)</div>
                    <cpn-input  v-model="item.table_bcc"
                                :name="'table_bcc'+index"/>
                  </div>
                  <div class="new-line">
                    <div class="name">เรื่อง</div>
                    <cpn-input  v-model="item.table_subject"
                                :name="'table_subject'+index"/>
                  </div>
                  <div class="new-line">
                    <div class="name">ข้อความ</div>
                    <cpn-textArea v-model="item.table_message"
                                  :name="'table_message'+index"
                                  rows="5"/>
                  </div>
                </td>
                <td class="col5">
                  <div class="sum-size-file">
                    <span>ขนาดไฟล์รวม {{sumfile(item)}}</span>
                  </div>
                  <div class="new-line">
                    <div class="name">วิธีการส่งไฟล์</div>
                    <cpn-select v-model="item.how_to_send_files"
                                :name="'how_to_send_files'+index"
                                :optionSelect="optionSelect.how_to_send_files"/>
                  </div>
                  <div class="new-line">
                    <div class="name">ลิงค์ดาวน์โหลดเอกสาร</div>
                    <div class="group-recommend">
                      <cpn-input  v-model="item.cc"
                                  :name="'cc'+index"
                                  class="input-link"
                                  :disabled="item.how_to_send_files == 1"
                                  placeholder="กรุณาระบุ" />
                      <button type="button" class="button-link none-pointer">
                        <i class="bi bi-link-45deg icon-question"></i>
                      </button>
                    </div>
                  </div>
                  <div class="new-line">
                    <div class="name">ไฟล์ต้นเรื่อง</div>
                    <div class="d-flex">
                      <cpn-input  v-model="item.original_file"
                                  :name="'original_file'+index"
                                  :disabled="true"/>
                      <button type="button" class="button-view" @click="previewFile(item)">
                        <i class="bi bi-eye icon-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div class="new-line">
                    <div class="name">สำเนาคู่ฉบับ</div>
                    <div class="d-flex">
                      <cpn-input  v-model="item.duplicate_copy"
                                  :name="'duplicate_copy'+index"
                                  :disabled="true"/>
                      <button type="button" class="button-view" @click="previewFile(item)">
                        <i class="bi bi-eye icon-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div class="new-line">
                    <div class="name d-flex justify-content-between align-items-center mb-2">
                      <div>สิ่งที่แนบมาด้วย</div>
                      <input type="file" multiple @change="fileChange('attachments', item)" name="attachments" style="display:none;" accept="application/pdf">
                      <button type="button" class="button-file"  @click="uploadFile('attachments')">
                        <i class="bi bi-plus icon-plus"></i>
                        แนบเอกสาร
                      </button>
                    </div>
                    <div v-for="(item2, index2) in item.attachments.filter(el => el.flag != 'delete')" :key="index2" v-if="item?.attachments?.length > 0">
                      <div class="d-flex mb-2">
                        <cpn-input  v-model="item2.filename"
                                    :name="'filename'+index2"
                                    :disabled="true"/>
                        <button type="button" class="button-view" @click="previewFile(item2)">
                          <i class="bi bi-eye icon-eye"></i>
                        </button>
                        <button type="button" class="button-del" @click="deleteFile(item, index2)">
                          <i class="bi bi-trash icon-trash"></i>
                        </button>
                      </div>
                    </div>
                    <div v-else>
                      <cpn-input  v-model="noData"
                                  :name="'noData'+index"
                                  :disabled="true"/>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="tbody-row" v-if="data.table.length == 0">
                <td colspan="5">ไม่มีข้อมูล</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="line"></div>
        <div class="group-footer">
          <div class="footer-right">
            <button type="button" class="button-primary" @click="save(1)">
              <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
              บันทึกร่าง
            </button>
            <button type="button" class="button-success" @click="save(2)">
              <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
              บันทึกและส่ง
            </button>
          </div>
        </div>
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
    <cpn-modal-alert :modalAlert="modalAlert"/>
    <cpn-loading :show="showLoading"/>
  </div>
</template>
<script>
export default {
  name: 'automail-sendmail-list',
  data() {
    return {
      noData: 'ไม่มีสิ่งที่แนบมาด้วย',
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
      showLoading: false,
      data: {
        salutation: '',
        postscript: '',
        contact_information: '',
        table: [],
        fileType: []
      },
      optionSelect: {
        how_to_send_files: [{value: 1, name: 'แนบไฟล์ทั้งหมด ตามข้างล่างนี้'}, {value: 2, name: 'ไม่แนบไฟล์ แต่ใช้ลิงค์ข้างล่างนี้แทน'}]
      },
      indexTable: 0,
      flgTable: false
    }
  },
  methods: {
    save(flag) {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการ${flag == 1 ? 'บันทึกแบบร่าง' : 'บันทึกและส่งต่อ'}หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          _this.showLoading = true
          _this.uploadFileAll(flag)
        }
      }
    },
    uploadFileAll(flag) {
      let currentDate = this.assetsUtils.currentDate()
      let completeFile = []
      this.data.table.filter(row => {
        let completeFile2 = []
        if (row?.attachments?.length > 0) {
          row.attachments.filter(row2 => {
            let formDataFile = new FormData();
            formDataFile.append('file', row2.file);
            formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
            this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}})
            .then((responses) => {
              item2.attach_filepath = responses.data.data.path
              completeFile2.push(true)
              if (completeFile2.length == row.attachments.length) {
                completeFile.push(true)
              }
              if (completeFile.length == this.data.table.length) {
                this.callApiSave(flag)
              }
            }).catch((error) => {
              this.showLoading = false
              this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          })
        } else {
          completeFile.push(true)
        }
      })
    },
    callApiSave(flag) {
      let _this = this
      this.showLoading = true
      let dataSave = {
        table: this.data.table,
        user_id: parseInt(localStorage.getItem('user_id')),
      }
      this.axios.put(`/booking-outx/${this.$route.params.id}`, dataSave)
      .then(() => { 
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'success', title: flag == 1 ? 'ทำการบันทึกแบบร่างสำเร็จแล้ว' : 'ทำการบันทึกและส่งต่อสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    sumfile(item) {
      let size = 0
      item?.attachments?.filter(row => {
        size += row.file.size
      })
      return (size /1024 /1024).toFixed(2) + ' MB'
    },
    uploadFile(data) {
      document.querySelector(`[name="${data}"]` ).click()
    },
    fileChange(data,item) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if ((this.data.fileType.indexOf(file.type)==-1)) {
          this.modalAlert = {showModal: true, type: 'error', message: this.defaultMessageErrorFile}
          return false
        }
        if (data == 'attachments') {
          item?.attachments ? '' : (item.attachments = [])
          if (file.type == 'application/pdf') {
            let dataFile = {
              filename: file.name,
              type: file.type,
              link: URL.createObjectURL(file),
              size: (file.size /1024 /1024).toFixed(2) + ' MB',
              file: file,
              flag: 'add'
            }
            item.attachments.push(dataFile)
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
        item.attachments.splice(index,1)
      }
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
          if (this.flgTable) {
            this.data.table[this.indexTable].table_dear = 'aa'
            this.data.table[this.indexTable].table_salutation = 'bb'
            this.data.table[this.indexTable].table_postscript = 'cc'
          } else {
            this.data.salutation = 'test1'
            this.data.postscript = 'test2'
          }
          this.modal.showModal = false
          this.indexTable = 0
          this.flgTable = false
        })
        .catch((error) => {
          this.modal.showModal = false
          this.indexTable = 0
          this.flgTable = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      } else {
        this.modal.showModal = false
        this.indexTable = 0
        this.flgTable = false
      }
    },
    recommendClick(item) {
      this.modal.book_recipient = ''
      this.keyupModal({target: {value: ''}})
      this.modal.showModal = true
    },
    amendClick(flg) {
      this.data.table.filter(row => {
        if (flg == 1) {
          row.table_salutation = this.data.salutation
          row.table_postscript = this.data.postscript
        } else {
          row.table_contact_information = this.data.contact_information
        }
      })
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
    apiSendmailList() {
      this.data.table = []
      this.showLoading = true
      this.axios.get('/master-data/department-contact')
      .then((response) => {
        this.showLoading = false
        this.data.table = response.data.data.meta
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
        this.apiSendmailList()
      })).catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    }
  },
  mounted() {
    this.apiMaster()
  },
  watch: {
    'modal.showModal' () {
      document.body.style.overflow = this.modal.showModal ? 'hidden' : ''
    }
  }
}

</script>
<style lang="scss">
  .automail-sendmail-list {
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

        .button-check {
          background-color: #1a456b;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          min-width: 160px;
          max-width: 160px;
          height: 45px;
          border: 0;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 15px;
          padding-right: 10px;

          .icon-check {
            font-size: 30px;
            margin-right: 5px;
          }
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

        .table-automail-sendmail-list {
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
              // vertical-align: bottom;

              th {
                border-bottom: solid 1px #c1cfe3;
                // padding: 20px 10px;
                padding: 0px 10px;
              }

              .ms-6 {
                margin-left: 2.5rem!important;
              }

              .ms-8 {
                margin-left: 3.5rem!important;
              }
            }

            .col1 {
              min-width: 180px;
              max-width: 180px;
              width: 0%;
              padding-left: 28px !important;
              text-align: center;
            }

            .col2 {
              min-width: 250px;
              max-width: 250px;
              width: 0%;
              text-align: center;
            }

            .col3 {
              min-width: 450px;
              width: 15%;
            }

            .col4 {
              min-width: 450px;
              width: 15%;
            }

            .col5 {
              min-width: 450px;
              width: 15%;
              padding-right: 28px !important;
            }
          }

          .tbody-top {
            vertical-align: inherit;
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
                padding: 20px 10px;
                vertical-align: top;
              }

              .col3, .col4, .col5 {
                text-align: left;
              }

              .col1 {
                padding-left: 28px;
              }

              .col3, .col4, .col5 {
                padding: 20px;

                .name {
                  margin-bottom: 5px;
                }

                .new-line {
                  padding-bottom: 10px;
                }
              }

              .col5 {
                padding-right: 28px;

                .sum-size-file {
                  color: #055160;
                  background-color: #cff4fc;
                  border-color: #b6effb;
                  height: 45px;
                  border-radius: 5px;
                  position: relative;
                  margin-bottom: 20px;

                  span {
                    font-size: 18px;
                    position: absolute;
                    top: 10px;
                    left: 20px;
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
              }
            }
          }
        }
      }

      .group-footer {
        margin-top: 23px;
        margin-bottom: 15px;
        text-align: center;
        display: flex;
        justify-content: flex-end;
        padding: 0 30px;
        
        button {
          height: 45px;
          border-radius: 5px;
          box-shadow: 7.4px 9.5px 13px 0 rgba(137, 148, 169, 0.14);
          border: 0;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
        }

        .button-primary {
          width: 170px;
        }

        .button-success {
          width: 175px;
          margin-left: 20px;
        }
        
        .icon-check-circle {
            width: 25px;
            height: 25px;
            margin-right: 10px;
        }
      }
    }

    .modal-recommend {
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