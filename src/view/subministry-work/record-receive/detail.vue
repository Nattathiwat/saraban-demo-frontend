<template>
  <div class="booking-receive-detail">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/ballot-duotone.svg" alt="" class="icon-size">
            <div class="name">{{edit ? 'แก้ไขบันทึกรับเข้า' : 'สร้างบันทึกรับเข้า'}} <label>{{data.document_number}}</label></div>
          </div>
        </div>
        <div class="line"></div>
        <Form @submit="on_submit" @invalid-submit="onInvalidSubmit">
          <div class="group-detail">
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ทะเบียนบันทึกข้อความ <span class="required">*</span></div>
                <cpn-select v-model="data.book_category_id"
                            name="book_category_id"
                            rules="required"
                            :disabled="edit"
                            :optionSelect="optionSelectDefault.book_category_id"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input left">
                  <div class="name">ลงวันที่ <span class="required">*</span></div>
                  <cpn-datepicker v-model="data.as_of_date"
                                  name="as_of_date"
                                  :disabled="edit"
                                  placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input left">
                  <div class="name">วันที่ส่งมา <span class="required">*</span></div>
                  <cpn-datepicker v-model="data.create_date"
                                  name="create_date"
                                  rules="required"
                                  :disabled="edit"
                                  placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input ">
                  <div class="name">วันที่กองรับเรื่อง <span class="required">*</span></div>
                  <cpn-datepicker v-model="data.receive_date"
                                  name="receive_date"                                                                                                                                                                                                                                                                                                                                                                                                                                         
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
                            :disabled="edit"
                            rules="required"
                            :optionSelect="optionSelect.book_type_id"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-between">
                <div class="group-input left">
                  <div class="name">ชั้นความลับ <span class="required">*</span></div>
                  <cpn-select v-model="data.secret_id"
                              name="secret_id"
                              rules="required"
                              :optionSelect="optionSelect.secret_id"
                              placeholder="กรุณาระบุ"
                              :disabled="edit" />
                </div>
                <div class="group-input">
                  <div class="name">ความเร่งด่วน <span class="required">*</span></div>
                  <cpn-select v-model="data.speed_id"
                              name="speed_id"
                              rules="required"
                              :optionSelect="optionSelect.speed_id"
                              placeholder="กรุณาระบุ"
                              :disabled="edit" />
                </div>
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ชื่อเรื่อง <span class="required">*</span></div>
                <cpn-textArea v-model="data.subject"
                              name="subject"
                              rules="required"
                              :disabled="edit"
                              rows="1" />
              </div>
            </div>
            <div class="group-input left">
              <div class="name">เรียน <span class="required">*</span></div>
              <cpn-textArea v-model="data.send_to"
                            name="send_to"
                            rows="1"
                            :disabled="edit" />
            </div>
            <div class="group-input left">
              <div class="name">รายละเอียดหนังสือ</div>
              <cpn-textArea v-model="data.book_desc"
                            name="book_desc"
                            :disabled="edit"
                            rows="1" />
            </div>
            <div class="group-input">
              <div class="name">Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")</div>
              <cpn-input-tags v-model="data.tag"
                              name="tag" />
            </div>
            <div class="group-input d-flex align-items-center">
              <div class="name">อ้างอิงถึง</div>
              <button type="button" class="add-booking-receive" @click="add_booking_refers()" :disabled="edit">
                <div class="group-image">
                  <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                  เพิ่มเอกสารอ้างอิง
                </div>
              </button>
            </div>
            <div class="group-between" v-for="(item, index) in data.booking_refers.filter(el => el.flag != 'delete')" :key="index">
              <div class="group-input left">
                <cpn-input  v-model="item.receive_document_number"
                            :name="`codeRefers${index}`"
                            type="text"
                            :searchFlag="true"
                            :disabled="edit"
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
            <div class="group-input">
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
                        {{item.filename ? item.filename : 'บันทึกต้นเรื่อง'}}
                      </span>
                    </button>
                    <div :class="edit ? 'text disabled' : 'text pointer'" @click="edit ? '' : upload_file(`main_docs${index}`)" >แนบเอกสาร</div>
                    <input type="file" @change="file_set_change(`main_docs${index}`, index, 'main_docs')" :name="`main_docs${index}`" style="display:none;" accept="application/pdf">
                  </div>
                  <button type="button" @click="download_file(item)" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
                  <button type="button" class="del-department-3" :disabled="edit" @click="delete_main_doc(item, index)">
                    <img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash">
                  </button>
                </div>
              </div>
              <div class="group-input">
                <div class="group-input d-flex align-items-center">
                  <div class="name">สิ่งที่ส่งมาด้วย</div>
                  <button type="button" class="add-booking-receive" :disabled="edit" @click="upload_file('fileAttachment')">
                    <div class="group-image">
                      <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                      เพิ่มไฟล์
                    </div>
                  </button>
                  <input type="file" multiple @change="file_attachment_add_change(`fileAttachment`)" :name="`fileAttachment`" style="display:none;">
                </div>
                <div class="d-flex mb-3" v-for="(item, index) in data.attachments.filter(el => el.flag != 'delete')" :key="index">
                  <div class="group-input-file">
                    <button type="button" :class="edit ? 'none-pointer':''" class="button-file" @click="edit ? '' : upload_file(`attachments${index}`)">
                      <span :class="item.filename ? '' : 'no-data'">
                        {{item.filename ? item.filename : 'สิ่งที่ส่งมาด้วย'}}
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
              <div class="name">ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) </div> 
              <cpn-input-tags v-model="data.sendTo"
                              :flagSearch="true"
                              :optionSelect="optionSelect.sendTo"
                              @keyup="keyup_send_to"
                              name="sendTo" />
            </div>
            <div class="group-input left">
              <div class="name d-flex justify-content-between">
                <div>ความเห็น / คำสั่ง</div>
                <div>
                  <input type="file" @change="file_set_change('sendTo', 0, 'sendTo')" name="sendTo" style="display:none;">
                  <button v-if="!data.sendToFile?.filename" type="button" class="button-con pointer" @click="upload_file('sendTo')">
                    <img src="@/assets/images/icon/paperclip-solid.svg" alt="" class="icon-paperclip">
                    แนบเอกสาร
                  </button>
                  <div v-else class="del-comment pointer" @click="data.sendToFile.filename = ''" >
                    {{data.sendToFile?.filename}}
                    <img src="@/assets/images/icon/x-solid.svg" alt="" class="image-x">
                  </div>
               </div>
              </div>
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
              <div class="name ms-2 mt-1">เอกสารแนบ : {{item?.sendToFile?.filename || '-'}}</div>
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
              <button type="button" class="confirm-receive"  >
              <div class="group-image" @click="submitClick()">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                ยืนยันรับเข้า
              </div>
            </button>
              <button type="submit" class="button-success" @click="flagSave=2" :disabled="data.sendTo?.length<1">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                บันทึกและส่งต่อ
              </button>
            </div>
          </div>
        </Form>
      </div>
      <div class="detail-history" v-if="$route.params.id">
        <div class="history" >
          <div class="header pointer" @click="data.history.hide = !data.history.hide, historyClick(data.history.tab)">
            <div class="group-left">
              <i class="bi bi-clock icon-size"></i>
              <div class="name">ประวัติการแก้ไข</div>
            </div>
            <div class="group-right">
              <i class="bi bi-chevron-right icon-angle" v-show="!data.history.hide"></i>
              <i class="bi bi-chevron-down icon-angle" v-show="data.history.hide"></i>
            </div>
          </div>
          <div class="line" v-show="data.history.hide"></div>
          <div class="content" v-show="data.history.hide">
            <div class="content-head">
              <div class="pointer" :class="data.history.tab == 1 ? 'active' : ''" @click="data.history.tab = 1, historyClick(1)"><i class="bi bi-border-all icon-size"></i>ทั้งหมด</div>
              <div class="pointer" :class="data.history.tab == 2 ? 'active' : ''" @click="data.history.tab = 2, historyClick(2)"><i class="bi bi-chat-left icon-size"></i>ความเห็นคำสั่ง</div>
              <div class="pointer" :class="data.history.tab == 3 ? 'active' : ''" @click="data.history.tab = 3, historyClick(3)"><i class="bi bi-pencil-square icon-size"></i>แก้ไขข้อมูล</div>
            </div>
            <div class="content-detail" v-if="data.history.data.filter(
              el => data.history.tab == 2 ? el.type == 2 : data.history.tab == 3 ? 
              (el.type == 0 || el.type == 1) : el).length > 0" v-for="(item, index) in data.history.data.filter(el => data.history.tab == 2 ?
               el.type == 2 : data.history.tab == 3 ? (el.type == 0 || el.type == 1) : el)" 
               :key="index" :class="index == 0 ? 'first' : index == (data.history.data.length-1) ? 'end' : ''">
              <div class="detail-head">
                <div class="number">#{{data.history.data.filter(
              el => data.history.tab == 2 ? el.type == 2 : data.history.tab == 3 ? 
              (el.type == 0 || el.type == 1) : el).length-index}}</div>
                <div class="topic" :class="item.bookactionname == 'ความเห็นคำสั่ง' ? 'blue' : item.bookactionname == 'แก้ไขหนังสือ' ? 'yellow' : 'green'">
                  <i class="bi icon-size" :class="item.bookactionname == 'ความเห็นคำสั่ง' ? 'bi-chat-left' : item.bookactionname == 'แก้ไขหนังสือ' ? 'bi-pencil-square' : 'bi-plus-lg'"></i>
                  {{item.bookactionname}}
                </div>
                <div class="create">
                  <i class="bi bi-person icon-size"></i> 
                  โดย {{item.updateBy}} / {{item.subName}}
                </div>
                <div class="date">
                  วันที่ {{item.createDate}}
                </div>
                <div class="time">
                  <i class="bi bi-clock icon-size"></i>
                  {{item.createTime}}
                </div>
              </div>
              <ul class="detail-list" v-for="(item2, index2) in item.bookingRemarks" :key="index2" >
                <button v-show="item2.filepath" class="button-file" 
                @click="download_file({filename:item2.filepath.split('/').pop(),link:item2.link})">{{item2.filepath.split("/").pop()}}</button>
                <li>
                  {{item2.remark}}
                  {{item2.comment}}
                  <div class="detail-signager" v-if="item2.signature_img && item.bookactionname == 'ความเห็นคำสั่ง'">
                    <img :src="item2.signature_img" alt="" class="image-size">
                    <!-- <div class="name">({{item.fullname}})</div>
                    <div class="position">{{item.positionName}}</div> -->
                  </div>
                </li>
              </ul>
              <div v-if="index != (data.history.data.length-1)" class="line"></div>
            </div>
            <div v-else class="content-detail first end">
              <div class="detail-head">
                <div class="topic">ไม่มีข้อมูล</div>
              </div>
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
  name: 'record-receive-detail',
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
        book_category_id: '',
        book_type_id: '',
        receive_date: '',
        receive_time: '',
        document_number: '',
        as_of_date: '',
        subject: '',
        secret_id: '',
        speed_id: '',
        send_to: '',
        book_desc: '',
        tag: [],
        contracts: [{
          department_id: '',
          department_other: '',
          receive_type: '',
          contract_name: '',
          contract_phone: '',
          contract_mail: '',
        }],
        main_docs: [{ filename: ''}],
        attachments: [{ filename: ''}],
        booking_refers: [{ receive_document_number: '', desc: '', receive_date: '', book_refer_id: '', original_refer_id: '', book_type: ''}],
        sendTo: [],
        booking_follows: [],
        comment: '',
        process_type_id: '12',
        permission_id: '8',
        book_type:'',
        human_flag: false,
        response_id: '',
        history: {
          hide: false,
          data: [],
          tab: 1
        },
        FileType: [],
        regis_id:'',

      },
      optionSelect: {
        book_category_id: [],
        book_type_id: [],
        secret_id: [],
        speed_id: [],
        department_id: [],
        receive_type: [],
        process_type_id: [],
        permission_id: [],
        sendTo: [],
      },
      optionSelectDefault: {
        book_category_id: [],
      },
    }
  },
  methods: {
    historyClick(data) {
      this.showLoading = true
      this.axios.get(`/booking-note/${this.$route.params.id}/history`, {
        params: {
          book_type: this.$route.query.book_type,
        }
      })
      .then((response) => {
        this.showLoading = false
        this.data.history.data = response.data.data
        this.data.history.data.filter((item, index) => {
          item.bookingRemarks.filter((item2, index2) =>{
            item2.link = item2.filepath ? this.backendport+'/'+item2.filepath : ''
            if (item2.signature_img) {
              this.axios({ method:'get', url: this.backendport+'/'+item2.signature_img, baseURL: '', responseType: 'blob',})
              .then(response3 => {
                const blob = new Blob([response3.data], { type: this.assetsUtils.getTypeFile(item2.signature_img) })
                item2.signature_img = URL.createObjectURL(blob)
              })
              .catch((error) => {
                item2.signature_img = new URL(`@/assets/images/default/signature_img.jpg`, import.meta.url).href
              })
            } else {
              item2.signature_img = new URL(`@/assets/images/default/signature_img.jpg`, import.meta.url).href
            }
          })
        })
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    delete_main_doc(item, index) {
      if (item.flag == 'edit') {
        item.flag = 'delete'
      } else {
        this.data.main_docs.splice(index,1)
      }
      if ((this.data.main_docs.length - this.data.main_docs.filter(item => item.flag == 'delete').length) < 1) {
        this.data.main_docs.push({ 
          filename: '',
          flag: 'add'
        })
      }
    },
    delete_attachments(item, index) {
      if (item.flag == 'edit') {
        item.flag = 'delete'
      } else {
        this.data.attachments.splice(index,1)
      }
      if ((this.data.attachments.length - this.data.attachments.filter(item => item.flag == 'delete').length) < 1) {
        this.data.attachments.push({ 
          filename: '',
          flag: 'add'
        })
      }
    },
    delete_main_docs(item, index) {
      if (item.flag == 'edit') {
        item.flag = 'delete'
      } else {
        this.data.main_docs.splice(index,1)
      }
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
    booking_refers_click(item) {
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
    delete_click() {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการลบ`,
        message: `บันทึกรับเข้า ใช่หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          _this.showLoading = true
          _this.axios.delete(`/booking-receive/receive-note/${_this.$route.params.id}`)
          .then(() => { 
            _this.showLoading = false
            _this.modalAlert = {
              showModal: true,
              type: 'success',
              title: 'ทำการลบบันทึกรับเข้าสำเร็จแล้ว',
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
      this.axios.get('/master-data/department-user/receive-note', {
        params: {
          keyword: e.target.value,
          user_id: parseInt(localStorage.getItem('user_id')),
          subministry_id: parseInt(localStorage.getItem('subministry_id')),
          type : 0
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            item.name = item.desc
            item.human_flag = item.human_flag
            item.response_type = item.type
            return item
          })
          this.optionSelect.sendTo = response.data.data
        }
      })
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
            response_id: parseInt(item.value),
            sendToFile: {
              ...this.data.sendToFile,
              filename: JSON.parse(JSON.stringify(this.data.sendToFile?.filename || ''))
            },
            response_type: item.type,
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
    upload_file(data) {
      document.querySelector(`[name="${data}"]` ).click()
    },
    file_attachment_add_change(data) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if ((this.data.FileType.indexOf(file.type)==-1)) {
          this.modalAlert = {showModal: true, type: 'error', message: this.defaultMessageErrorFile}
          return false
        }
        let dataFile = {
          filename: file.name,
          type: file.type,
          link: URL.createObjectURL(file),
          size: (file.size /1024 /1024).toFixed(2) + ' MB',
          filesize: file.size.toString(),
          file: file,
          flag: 'add'
        }
        this.data.attachments.push(dataFile)
      }
      document.querySelector(`[name="${data}"]`).value=null;
    },
    file_set_change(data, index, name) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if ((this.data.FileType.indexOf(file.type)==-1)) {
          this.modalAlert = {showModal: true, type: 'error', message: this.defaultMessageErrorFile}
          return false
        }
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
        } else if (name == 'sendTo') {
          let dataFile = {
            filename: file.name,
            type: file.type,
            link: URL.createObjectURL(file),
            size: (file.size /1024 /1024).toFixed(2) + ' MB',
            file: file,
          }
          this.data.sendToFile = dataFile
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
    back() {
      this.$router.push({ 
        name: 'subministry-work.record-receive',
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
      let axiosArray2 = []
      let file_attachments = []

      this.data.attachments.filter((item) => {
        if (item.file) {
          let formDataFile = new FormData();
          formDataFile.append('file', item.file);
          formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
          axiosArray2.push(this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}}))
        }
      });
      if (axiosArray2.length>0) {
        this.axios.all([...axiosArray2])
        .then(this.axios.spread((...responses) => {
          responses.filter((item, index) => {
            file_attachments.push({...this.data.attachments[index], ...item.data.data, filepath: item.data.data.path})
          })
          if (axiosArray2.length == file_attachments.length) {
            this.upload_file_all2(file_attachments)
          }
        })).catch((error) => {
          this.showLoading = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      }
      if (axiosArray2.length<1) {
        this.upload_file_all2(file_attachments)
      }
    },
    upload_file_all2(file_attachments) {
      let currentDate = this.assetsUtils.currentDate()
      let axiosArray1 = []
      let filemain_docs = []
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
            filemain_docs.push({...this.data.main_docs[index], ...item.data.data, filepath: item.data.data.path})
          })
          if (axiosArray1.length == filemain_docs.length) {
            this.upload_file_all3(filemain_docs,file_attachments)
          }
        })).catch((error) => {
          this.showLoading = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      } else {
        this.upload_file_all3(filemain_docs,file_attachments)
      }
    },
    upload_file_all3(filemain_docs,file_attachments) {
      let currentDate = this.assetsUtils.currentDate()
      if (this.data.sendToFile?.filename) {
        let formDataFile = new FormData();
        formDataFile.append('file', this.data.sendToFile.file);
        formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
        this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}})
        .then((response) => {
          this.data.attach_filename = response.data.data.filename
          this.data.attach_filepath = response.data.data.path
          this.upload_file_all4(filemain_docs,file_attachments)
        }).catch((error) => {
          this.showLoading = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      } else {
        this.upload_file_all4(filemain_docs,file_attachments)
      }
    },
    upload_file_all4(filemain_docs,file_attachments) {
      let currentDate = this.assetsUtils.currentDate()
      let axiosArray1 = []
      let fileSendTo = []
      this.data.booking_follows.filter(item=> {
        if (item.sendToFile?.filename) {
          let formDataFile = new FormData();
          formDataFile.append('file', item.sendToFile.file);
          formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
          axiosArray1.push(this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}}))
        }
      })
      if (axiosArray1.length>0) {
        this.axios.all([...axiosArray1])
        .then(this.axios.spread((...responses) => {
          responses.filter((item, index) => {
            this.data.booking_follows[index].attach_filepath = item.data.data.path
            this.data.booking_follows[index].attach_filename = item.data.data.filename
            fileSendTo.push({...this.data.booking_follows[index], ...item.data.data, filepath: item.data.data.path})
          })
          if (axiosArray1.length == fileSendTo.length) {
            this.call_api_save(filemain_docs,file_attachments)
          }
        })).catch((error) => {
          this.showLoading = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      } else {
        this.call_api_save(filemain_docs,file_attachments)
      }
    },
    call_api_save(fileMain_docs,fileAttachments) {
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
            response_id: parseInt(item.value),
            response_type: item.type,
            attach_filepath: this.data.attach_filepath,
            attach_filename: this.data.attach_filename,
            sendToFile :{filename : this.data.attach_filename}
          }
          this.optionSelect.process_type_id.find(item => {if(item.value == this.data.process_type_id) {data.process_type_name = item.name}})
          this.optionSelect.permission_id.find(item => {if(item.value == this.data.permission_id) {data.permission_name = item.name}})
          this.data.booking_follows.push(data)
        }
      })
      this.data.main_docs.filter(item => {
        if (item.flag == 'delete') {
          fileMain_docs.push(item)
        }
      })
      this.data.attachments.filter(item => {
        if (item.flag == 'delete') {
          fileAttachments.push(item)
        }
      })
      let dataSave = {
        original_flag: this.data.original_flag,
        regis_id: parseInt(this.data.book_category_id),
        book_type_id: parseInt(this.data.book_type_id),
        receive_date: this.assetsUtils.yearDel543(this.data.receive_date),
        as_of_date: this.assetsUtils.yearDel543(this.data.as_of_date),
        document_number: this.data.document_number,
        subject: this.data.subject,
        secret_id: parseInt(this.data.secret_id),
        speed_id: parseInt(this.data.speed_id),
        send_to: this.data.send_to,
        book_desc: this.data.book_desc,
        tag: tag,
        main_docs: fileMain_docs,
        attachments: fileAttachments,
        booking_refers: this.data.booking_refers.filter(el => el.book_refer_id),
        booking_follows: this.data.booking_follows,
        user_id: parseInt(localStorage.getItem('user_id')),
        flag: this.flagSave == 1 ? "draft" : '',
        book_type : parseInt(this.$route.query.book_type ),
        receive_regis_id : parseInt(this.$route.query.regis_id),
        // human_flag: this.data.human_flag,
        // response_type:this.data.response_type
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
      } 
    },
    api_detail() {
      this.showLoading = true
      this.axios.get(`/booking-receive/receive-note/${this.$route.params.id}`, {
        params:{
          book_type : this.$route.query.book_type ,
          regis_id: this.$route.query.regis_id,
          response_id: this.$route.query.response_id,
        }
      })
      .then((response) => { 
        this.showLoading = false
        response.data.data = {...this.data,...response.data.data}
        this.data = JSON.parse(JSON.stringify(response.data.data))
        this.data.tag = []
        response.data.data.tag?.split(',').filter(item => {
          if (item) {
            this.data.tag.push({value: '', name: item})
          }
        })
        this.data.sendTo = []
        this.data.order=[{
          filename: ''
        }]
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
        this.data.main_docs.filter(item => {
          item.flag = 'edit'
          item.link = item.filepath ? this.backendport+'/'+item.filepath : ''
          return item
        })
        this.data.attachments.filter(item => {
          item.flag = 'edit'
          item.link = item.filepath ? this.backendport+'/'+item.filepath : ''
          return item
        })
        this.data.booking_follows = []
        if (this.data.main_docs?.length < 1 || !this.data.main_docs) this.data.main_docs = [{ filename: '', flag: 'add'}]
        if (this.data.attachments?.length < 1 || !this.data.attachments) this.data.attachments = [{ filename: '', flag: 'add'}]
        if (this.data.contracts?.length < 1 || !this.data.contracts) this.data.contracts = [{ department_id: '', receive_type: '', contract_name: '', contract_phone: '', contract_mail: '', department_other: '', flag: 'add'}]
        if (response.data.data.booking_refers?.length < 1 || !response.data.data.booking_refers) this.data.booking_refers = [{ receive_document_number: '', desc: '', receive_date: '', book_refer_id: '', original_refer_id: '', book_type: '', flag: 'add'}]
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    api_master() {
      this.showLoading = true
      const request2 = this.axios.get('/master-data/book-type-note')
      const request3 = this.axios.get('/master-data/secret')
      const request4 = this.axios.get('/master-data/speed')
      const request5 = this.axios.get('/master-data/process-type')
      const request6 = this.axios.get('/master-data/permission-type')
      const request7 = this.axios.get('/master-data/department')
      const request8 = this.axios.get(`/master-data/book-category` ,{
        params: {
          book_type : 1
        }
      })
      const request10 = this.axios.get(`/filetype?keyword=&page_size=50&page=1`)

      this.axios.all([request2, request3, request4, request5, request6, request7, request8, request10])
      .then(this.axios.spread((...responses) => {
        this.showLoading = false;
        const response2 = responses[0]
        const response3 = responses[1]
        const response4 = responses[2]
        const response5 = responses[3]
        const response6 = responses[4]
        const response7 = responses[5]
        const response8 = responses[6]
        const response10 = responses[7]

        response2.data.data.filter(item => {
          item.value = item.id
          item.name = item.name
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
          item.name = item.name
          return item
        })

        this.data.FileType = []

        response10.data.data.filter(item => {
          if (item.active_flag == 1) {
            this.data.FileType.push(item.content_type)
          }
        })

        this.optionSelect.book_type_id = response2.data.data
        this.optionSelect.secret_id = response3.data.data
        this.optionSelect.speed_id = response4.data.data
        this.optionSelect.process_type_id = response5.data.data
        this.optionSelect.permission_id = response6.data.data
        this.optionSelect.department_id = response7.data.data
        this.optionSelectDefault.book_category_id = response8.data.data

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
    submitClick(){
      let _this = this
        this.modalAlert = {
          showModal: true,
          type: 'confirm',
          title: `คุณยืนยันการรับเข้าหรือไม่`,
          confirm: true,
          msgSuccess: true,
          afterPressAgree() {
            let groupdata = {
              regis_id: parseInt(_this.data.book_category_id),
              book_type: 4,
              human_flag: _this.data.human_flag,
              response_id: parseInt(_this.$route.query.response_id),
              user_id: parseInt(localStorage.getItem('user_id')),
              page_flag : 'owner',
              flag: 'confirm',
            }
              _this.showLoading = true
              _this.axios.put(`/booking-receive/${_this.$route.params.id}`, groupdata)
              .then(() => { 
              _this.showLoading = false
              _this.modalAlert = {
                showModal: true, 
                type: 'success', 
                title: 'ยืนยันรับเข้าสำเร็จแล้ว', 
                msgSuccess: true, 
                afterPressAgree() { 
                  _this.back() }}
            })
              .catch((error) => {
                _this.showLoading = false
                _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
              })
          }
        }
    },
  },
  mounted () {
    this.api_master()
    // if (this.$route.params.id){
    //   this.submitClick()
    // }
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
      font-size: 16px;
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

            label {
              margin-left: 10px;
              font-size: 22px;
            }
          }
        }

        .add-booking-receive {
            height: 45px;
            border: 0;
            border-radius: 5px;
            background-color: #007773;
            font-size: 16px;
            font-weight: 500;
            color: #ffffff;
            margin-left: 35px;
            padding: 0 20px 0 20px;

            .group-image {
              display: flex;
              align-items: center;
              justify-content: center;

              .icon-check-circle {
                width: 24px;
                height: 24px;
                margin-right: 10px;
              }
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
        
        .icon-paperclip {
          color: #8aa3b7;
          // font-size: 14px;
          margin-right: 2px;
          width: 18px;
          height: 18px;
        }

        .button-con {
          width: auto;
          height: 30px;
          background-color: transparent;
          color: #000;
          font-size: 15px;
          font-weight: 500;
          border: 0;
          border-radius: 5px;
          
          .right{
            margin-left: 500px;
          }
        }

        .del-comment {
          // width: 45px;
          // height: 45px;
          color: #212529;
          background-color: transparent;
          // border-color: #f8f9fa;
          border: none;
          border-radius: 5px;
          margin-left: 15px;

          .image-x {
            width: 14px;
            margin-left: 5px;
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
          width: 25px;
          height: 25px;
          margin-right: 10px;
        }

        .icon-check-circle {
          width: 25px;
          height: 25px;
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

          .confirm-receive {
            height: 45px;
            border: 0;
            border-radius: 5px;
            background-color: #007773;
            font-size: 16px;
            font-weight: 500;
            color: #ffffff;
            margin-right: 25px;
            padding: 0 20px 0 20px;

            .group-image {
              display: flex;
              align-items: center;
              justify-content: center;

              .icon-check-circle {
                width: 24px;
                height: 24px;
                margin-right: 10px;
              }
            }
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

    .detail-history {
      width: 100%;
      height: 100%;
      min-width: 1550px;
      border-radius: 15px;
      background-color: #fff;
      border: 0px;

      .history{
        margin-top: 30px;
        border-radius: 10px;

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 29px;

          .group-left {
            display: flex;

            .icon-size {
              font-size: 25px;
              margin-right: 18px;
              color: #1a456b;
            }

            .name {
              margin-top: 5px;
              color: #1a456b;
              font-weight: bold;
              font-size: 18px;
            }
          }
        }

        .content {
          padding: 22px 29px;

          .content-head {
            display: flex;
            margin-left: 20px;

            .icon-size {
              font-size: 18px;
              margin-right: 10px;
              color: #1a456b;
            }

            div {
              font-size: 18px;
              color: #1a456b;
              padding: 10px 15px;
            }

            div.active {
              background-color: #1a456b;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
              color: #ffffff;

              .icon-size {
                color: #ffffff;
              }
            }
          }

          .content-detail.first {
            border-top: 2px solid #e2ebf7;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
          }

          .content-detail.end {
            border-bottom: 2px solid #e2ebf7;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
          }

          .content-detail {
            padding: 22px;
            border-left: 2px solid #e2ebf7;
            border-right: 2px solid #e2ebf7;

            .detail-head {
              display: flex;

              .number {
                font-size: 18px;
                background-color: #1a456b;
                padding: 5px 10px;
                border-radius: 5px;
                color: #ffffff;
              }

              .topic {
                border-radius: 20px;
                color: #15466e;
                padding: 5px 10px;
                margin-left: 20px;
                font-size: 18px;

                .icon-size {
                  font-size: 18px;
                }
              }

              .topic.blue {
                background-color: #a8d0f1;
              }

              .topic.yellow {
                background-color: #faee85;
              }

              .topic.green {
                background-color: #aaf1a8;
              }

              .create {
                color: #15466e;
                padding: 5px 10px;
                margin-left: 20px;
                font-size: 18px;
                margin-top: -5px;

                .icon-size {
                  font-size: 22px;
                }
              }

              .date {
                color: #15466e;
                padding: 5px 10px;
                margin-left: 10px;
                font-size: 18px;

                .icon-size {
                  font-size: 18px;
                }
              }

              .time {
                color: #15466e;
                padding: 5px 10px;
                font-size: 18px;

                .icon-size {
                  font-size: 18px;
                }
              }
            }

            .button-file {
              margin-bottom: 10px;
              color: #fff;
              font-size: 18px;
              background-color: #0f324e;
              border-color: #0d2b43;
              padding: 8px 12px;
              border-radius: 10px;
            }

            .detail-list {
              font-size: 18px;
              margin-top: 20px;
              margin-left: 30px;
            }
            

            .detail-signager {
              margin-left: 30px;
              font-size: 18px;
              width: 200px;
              text-align: center;


              .image-size {
                width: 200px;
              }
            }

            .line {
              margin-top: 30px;
            }
          }
        }
      }
    }
  }
</style>