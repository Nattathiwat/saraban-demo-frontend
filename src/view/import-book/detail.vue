<template>
  <div class="import-book-detail">
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
              <cpn-checkbox v-model="data.originalBook"
                            name="originalBook"
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
              <button type="button" class="add-import-book" @click="data.booking_refers.push({ book_refer_id: '', original_refer_id: '', book_type: '', date: ''})">
                <div class="group-image">
                  <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                  เพิ่มเอกสารอ้างอิง
                </div>
              </button>
            </div>
            <div class="group-between" v-for="(item, index) in data.booking_refers" :key="index">
              <div class="group-input left">
                <cpn-input  v-model="item.book_refer_id"
                            :name="`codeRefers${index}`"
                            type="search"
                            :searchFlag="true"
                            @searchClick="searchClick(item)"
                            placeholder="เลขที่หนังสืออ้างอิง" />
              </div>
              <div class="group-input left">
                <cpn-input  v-model="item.original_refer_id"
                            :name="`nameRefers${index}`"
                            :disabled="true"
                            placeholder="ชื่อเรื่อง" />
              </div>
              <div class="group-input d-flex">
                <cpn-datepicker v-model="item.date"
                                :name="`dateRefers${index}`"
                                :disabled="true"
                                placeholder="วันที่รับหนังสือ" />
                <button type="button" @click="data.booking_refers.length > 1 ? data.booking_refers.splice(index,1) : item.book_refer_id = '', item.original_refer_id = '', item.date = ''" class="button-delete ms-3"><img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer"></button>
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
                              :name="`${index}contract_phone`" />
                </div>
                <div class="group-input">
                  <div class="name">โทรสาร</div>
                  <cpn-input  v-model="item.contract_fax"
                              :isNumber="true"
                              :name="`${index}contract_fax`" />
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
                  <button type="button" class="add-import-book" @click="data.attachments.push({ filename: '', file: []})">
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
                              name="sendTo" />
            </div>
            <div class="group-input">
              <div class="name">ความเห็น / คำสั่ง</div>
              <cpn-textArea v-model="data.comments"
                            name="comments"
                            rows="3" />
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">รูปแบบการดำเนินการ</div>
                <cpn-select v-model="data.model"
                            name="model"
                            :optionSelect="optionSelect.model" />
              </div>
              <div class="group-input">
                <div class="name">การมองเห็น</div>
                <cpn-select v-model="data.see"
                            name="see"
                            :optionSelect="optionSelect.see" />
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <div>
                <button type="button" class="button button-danger" @click="back()">
                  <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="icon-times-circle"/>
                  ยกเลิก
                </button>
              </div>
              <div>
                <button type="button" @click="sendToClick()" class="button button-success">
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
  name: 'import-book-detail',
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      optionSelectDefault: {
        nameSignature: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        department: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        sendRegistration: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        issuingNumbers: [{name: 'เลขเดี่ยว', value: 'เลขเดี่ยว'}, {name: 'หลายเลข', value: 'หลายเลข'}],
        deliveryFormat: [{name: 'ตอบรับ', value: 'ตอบรับ'}, {name: 'แจ้งเพื่อทราบ', value: 'แจ้งเพื่อทราบ'}, {name: 'ไม่ระบุ', value: 'ไม่ระบุ'}],
      },
      showLoading: false,
      edit: false,
      flagSave: 1,
      data: {
        receive_regis_id: '',
        book_type_id: '',
        receive_date: '',
        receive_time: '',
        document_number: '',
        as_of_date: '',
        subject: '',
        secret_id: '',
        send_to: '',
        book_desc: '',
        contracts: [{
          department_id: '',
          receive_type: '',
          contract_name: '',
          contract_phone: '',
          contract_fax: '',
        }],
        main_docs: [{ filename: '', file: []}],
        attachments: [{ filename: '', file: []}],
        booking_refers: [{ book_refer_id: '', original_refer_id: '', book_type: '', date: ''}],
        sendTo: [],
        comments: '',
        model: '',
        see: '',
      },
      optionSelect: {
        receive_regis_id: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        book_type_id: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        secret_id: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        speed_id: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        department_id: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        receive_type: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        model: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        see: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        sendTo: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
      },
    }
  },
  methods: {
    sendToClick() {
      this.axios.get('/v1/login')
    },
    searchClick(item) {
      item.original_refer_id='aaaa'
      item.date='10/11/2565'
    },
    downloadFile(data) {
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
    },
    uploadFile(data) {
      document.querySelector(`[name="${data}"]`).click()
    },
    fileSetChange(data, index, name) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if (file.type == 'application/pdf') {
          let dataFile = {
            name: file.name,
            type: file.type == 'application/pdf' ? 'pdf' : '',
            link: URL.createObjectURL(file),
            size: (file.size /1024 /1024).toFixed(2) + ' MB',
            file: file,
          }
          if (name == 'fileOriginllBook') {
            this.data.set[index].originllBookFile = dataFile
            this.data.set[index].department.filter(item => {
              item.originllBookFile = dataFile
            })
          } else {
            this.data.set[index].duplicateCopyFile = dataFile
            this.data.set[index].department.filter(item => {
              item.duplicateCopyFile = dataFile
            })
          }
          document.querySelector(`[name="${data}"]`).value=null;
        }
      }
    },
    back() {
      this.$router.push({ 
        name: 'import-book',
      }).catch(()=>{});
    },
    onSubmit() {
      console.log('xx', this.flagSave)
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการ${this.flagSave == 1 ? 'บันทึกแบบร่าง' : 'บันทึกและส่งต่อ'}หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          if (_this.flagSave == 1) {
            // let groupdata = {
            //   name: _this.data.name,
            //   active: _this.data.active,
            //   description: _this.data.description,
            //   name: _this.data.name,
            //   code: _this.data.code,
            //   short_name: _this.data.short_name,
            //   user_id: parseInt(_this.data.user_id)
            // }
            // _this.showLoading = true
            // _this.axios.put(`/v1/master_data/department/${_this.$route.params.id}`, groupdata)
            // .then(() => { 
            //   _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'success', title: 'ทำการบันทึกแบบร่างสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
            // })
            // .catch((error) => {
            //   _this.showLoading = false
            //   _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            // })
          } else {
            // let groupdata = {
            //   name: _this.data.name,
            //   active: _this.data.active,
            //   description: _this.data.description,
            //   name: _this.data.name,
            //   department: parseInt(_this.data.department),
            //   code: _this.data.code,
            //   short_name: _this.data.short_name
            // }
            // _this.showLoading = true
            // _this.axios.post(`/v1/master_data/department`, groupdata)
            // .then(() => { 
            //   _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'success', title: 'ทำการบันทึกและส่งต่อสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
            // })
            // .catch((error) => {
            //   _this.showLoading = false
            //   _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            // })
          }
        }
      }
    },
    apiDetail() {
        this.data.code = 'aaaaa'
        this.data.short_name = 'bbbbb'
        this.data.name = 'aaa@aa.aa'
        this.data.department = 'สำนักงานเลขาธิการ'
      // this.showLoading = true
      // this.axios.get(`/v1/master_data/department/${this.$route.params.id}`)
      // .then((response) => { 
      //   this.showLoading = false
      //   this.data.code = response.data.data.code
      //   this.data.short_name = response.data.data.short_name
      //   this.data.name = response.data.data.name
      //   this.data.department = response.data.data.department
      //   this.data.user_id = response.data.data.user_id
      // })
      // .catch((error) => {
      //   this.showLoading = false
      //   this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      // })
    },
  },
  mounted () {
    if (this.$route.params.id) {
      this.edit = true
      this.apiDetail()
    } else {
      this.edit = false
    }
  },
  watch: {
    'modalRegiter.showModal' () {
      document.body.style.overflow = this.modalRegiter.showModal ? 'hidden' : ''
    }
  }
}

</script>
<style lang="scss">
  .import-book-detail {
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

        .add-import-book {
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