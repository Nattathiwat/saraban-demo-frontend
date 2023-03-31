<template>
  <div class="booking-out-detail">
    <div class="group-overflow">
      <div class="detail">
        <Form @submit="on_submit" @invalid-submit="onInvalidSubmit">
          <div class="group-head">
            <div class="group-first">
              <img src="@/assets/images/icon/ballot-duotone.svg" alt="" class="icon-size">
              <div class="name">{{edit ? 'แก้ไขบันทึกส่งออก' : 'สร้างบันทึกส่งออก'}} <label>{{data.booking_note_number}}</label></div> 
            </div>
            <button type="submit" class="add-booking-out" @click="flagSave=3" v-show="!data.booking_note_number">
                <div class="group-image">
                  ออกเลขบันทึกภายใน
                </div>
              </button>
          </div>
        <div class="line"></div>
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
                <cpn-datepicker v-model="data.as_of_date"
                                  name="as_of_date"
                                  rules="required"
                                  :disabled="edit"
                                  placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ชนิดของบันทึกข้อความ <span class="required">*</span></div>
                <cpn-autoComplete v-model="data.book_type_id"
                            name="book_type_id"
                            rules="required"
                            :optionSelect="optionSelect.book_type_id"
                            @keyup="keyup_record_type"
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
                <cpn-input  v-model="data.greeting"
                            name="greeting" 
                            type="text"/>
              </div>
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">รายละเอียด</div>
                <cpn-textArea v-model="data.desc"
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
                    <button type="button"  class="button-file" @click="edit ? '' : upload_file(`main_docs${index}`)" >
                      <span :class="item.filename ? '' : 'no-data'">
                        {{item.filename ? item.filename : 'บันทึกต้นเรื่อง'}}
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
                  <button type="button" class="add-booking-receive" :disabled="edit" @click="upload_file('addAttachments')" >
                    <div class="group-image">
                      <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                      เพิ่มไฟล์
                    </div>
                  </button>
                  <input multiple type="file" @change="add_attachments_change('addAttachments')" name="addAttachments" style="display:none;">
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
              <div class="name">ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ) <span class="required">*กรุณาใส่รายชื่อที่ต้องการส่งต่อ</span></div>
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
              <div class="name ms-2 mt-1">เอกสารแนบ : {{item?.sendToFile.filename || '-'}}</div>
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
      <div class="detail-history">
        <div class="history">
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
            <div class="content-detail" v-for="(item, index) in data.history.data" :key="index" :class="index == 0 ? 'first' : index == (data.history.data.length-1) ? 'end' : ''">
              <div class="detail-head">
                <div class="number">#{{index+1}}</div>
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
              <button v-show="item.filename" class="button-file" @click="download_file(item)">{{item.filename}}</button>
              <ul class="detail-list">
                <li v-for="(item2, index2) in item?.bookingRemark.split('<br>')" :key="index2" v-show="item2.toString().replace(/\s/g, '')">
                  {{item2}}
                </li>
              </ul>
              <div class="detail-signager" v-if="item.picture2">
                <img :src="item.picture2" alt="" class="image-size">
                <div class="name">({{item.fullname}})</div>
                <div class="position">{{item.positionName}}</div>
              </div>
              <div v-if="index != (data.history.data.length-1)" class="line"></div>
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
  name: 'record-out-detail',
  data() {
    return {
      iconAngle: false,
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
        sendToFile: [{ filename: ''}],
        sendTo: [],
        booking_follows: [],
        comment: '',
        process_type_id: '12',
        permission_id: '8',
        desc: '',
        regis_date: this.assetsUtils.currentDate(),
        human_flag:false,
        response_id:'',
        greeting:'',
        as_of_date:'',
        history: {
          hide: false,
          data: [],
          tab: 1
        }
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
      },
      FileType: []
    }
  },
  methods: {
    historyClick(data) {
      let dataMock = [
        {
            "bookingId": 6073,
            "bookactionname": "ความเห็นคำสั่ง",
            "createDate": "11/03/2566",
            "createTime": "10:54",
            "updateBy": "user18",
            "fullname": "วิไลวรรณ แสนพันธ์",
            "positionId": 8,
            "positionName": "ผู้อำนวยการกอง",
            "picture2": "data:image/png;base64, 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",
            "picture2Name": "ลายเซ้น.png",
            "subid": 1,
            "subName": "สำนักงานเลขาธิการ",
            "subShortName": "สลธ.",
            "followid": 7467,
            "histFlag": 2,
            "uid": 36,
            "bookingRemark": "ส่งต่อ PKM Test <br>  <br> ไฟล์แนบ หนังสือนำ.pdf",
            "followFileId": 50,
            "filename": "หนังสือนำ.pdf",
            "link": "./storage/29-03-2566/33bd162e8d79d7ad.pdf",
            "logid": 7467,
            "nodeRef": "workspace://SpacesStore/4e4cadd3-0d02-485b-b17b-a67740edcc34",
            "rno": 2
        },
        {
            "bookingId": 6073,
            "bookactionname": "แก้ไขหนังสือ",
            "createDate": "11/04/2566",
            "createTime": "05:34",
            "updateBy": "user18",
            "fullname": "วิไลวรรณ แสนพันธ์",
            "positionId": 8,
            "positionName": "ผู้อำนวยการกอง",
            "picture2": "data:image/png;base64, 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",
            "picture2Name": "ลายเซ้น.png",
            "subid": 1,
            "subName": "สำนักงานเลขาธิการ",
            "subShortName": "สลธ.",
            "followid": null,
            "histFlag": 1,
            "uid": 36,
            "bookingRemark": "ออกเลขหนังสือ  เป็น นร0501(กบท.)/139 <br> ",
            "followFileId": null,
            "fileName": "",
            "logid": 26274,
            "nodeRef": null,
            "rno": 1
        },
        {
            "bookingId": 6073,
            "bookactionname": "สร้างหนังสือ",
            "createDate": "21/03/2566",
            "createTime": "10:34",
            "updateBy": "user18",
            "fullname": "วิไลวรรณ แสนพันธ์",
            "positionId": 8,
            "positionName": "ผู้อำนวยการกอง",
            "picture2": "data:image/png;base64, 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",
            "picture2Name": "ลายเซ้น.png",
            "subid": 1,
            "subName": "สำนักงานเลขาธิการ",
            "subShortName": "สลธ.",
            "followid": null,
            "histFlag": 1,
            "uid": 36,
            "bookingRemark": "สร้างหนังสือ <br> ",
            "followFileId": null,
            "fileName": "",
            "logid": 26273,
            "nodeRef": "",
            "rno": 0
        }
      ]
      this.data.history.data = dataMock
      // this.showLoading = true
      // this.axios.get('/master-data/department-user', {
      //   params: {
      //     histFlag: data,
      //   }
      // })
      // .then((response) => {
      //   this.showLoading = false
      //   this.data.history.data = response.data.data
      // })
      // .catch((error) => {
      //   this.showLoading = false
      //   this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      // })
    },
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
          keyword: e.target.value,
          department_id: localStorage.getItem('department_id'),
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
            item.response_type = item.type
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
    add_attachments_change(data) {
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
          file: file,
          flag: 'add'
        }
        this.data.attachments.push(dataFile)
      }
      document.querySelector(`[name="${data}"]`).value=null;
    },
    delete_attachments(item, index) {
      if (item.flag == 'edit') {
        item.flag = 'delete'
      } else {
        this.data.attachments.splice(index,1)
      }
    },
    delete_main_docs(item, index) {
      if (item.flag == 'edit') {
        item.flag = 'delete'
      } else {
        this.data.main_docs.splice(index,1)
      }
    },
    delete_order(item, index) {
      if (item.flag == 'edit') {
        item.flag = 'delete'
      } else {
        this.data.order.splice(index,1)
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
            response_id: parseInt(item.value),
            sendToFile: {
              ...this.data.sendToFile?.filename,
              filename: this.data.sendToFile?.filename ? JSON.parse(JSON.stringify(this.data.sendToFile?.filename)) : ''
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
        title: `คุณยืนยันการ${this.flagSave == 1 ? 'บันทึกแบบร่าง' : this.flagSave == 2 ? 'บันทึกและส่งต่อ' : 'ออกเลขบันทึกภายใน'}หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          if (_this.flagSave == 3) {
            console.log('if')
            _this.showLoading = true
            _this.axios.post(`/booking-note/generate-number`,{
              department_id: parseInt(localStorage.getItem('department_id')),
              creater_id: _this.data.creater_id ? parseInt(_this.data.creater_id) : parseInt(localStorage.getItem('user_id')), 
              book_category_id: parseInt(_this.data.book_category_id), year: _this.data.as_of_date.split('/')[2]-543
            })
            .then((response) => {
              _this.data.booking_note_number = response.data.data.out_document_number
              _this.upload_file_all()
            }).catch((error) => {
              _this.showLoading = false
              _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            _this.showLoading = true
            _this.upload_file_all()
          }
        }
      }
    },
    upload_file_all() {
      let currentDate = this.assetsUtils.currentDate()
      let axiosArray1 = []
      let file_attachments = []
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
            file_attachments.push({...this.data.attachments[index], ...item.data.data, filepath: item.data.data.path})
          })
          if (axiosArray1.length == file_attachments.length) {
            this.upload_file_all2(file_attachments)
          }
        })).catch((error) => {
          this.showLoading = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      } else {
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
    call_api_save(filemain_docs,file_attachments) {
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
        attachments: file_attachments,
        main_docs: filemain_docs,
        booking_refers: this.data.booking_refers.filter(el => el.book_refer_id),
        booking_follows: this.data.booking_follows,
        flag: this.flagSave == 1 ? "draft" : '',
        greeting: this.data.greeting,
        desc: this.data.desc,
        regis_date: this.assetsUtils.currentDate(),
        as_of_date: this.data.as_of_date,
        is_draft: this.flagSave == 1 || this.flagSave == 3 ? 1 : 0,
        booking_note_number: this.data.booking_note_number
      }
      this.showLoading = true
      this.axios[this.edit ? 'put' : 'post'](`/booking-note${this.edit ? '/' + this.$route.params.id : ''}`, dataSave)
      .then(() => { 
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'success', title: this.flagSave == 1  ? 'ทำการบันทึกแบบร่างสำเร็จแล้ว' : this.flagSave == 3 ? 'ทำการออกเลขบันทึกภายในสำเร็จ' : 'ทำการบันทึกและส่งต่อสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.back() }}
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    api_detail() {
      this.showLoading = true
      this.axios.get(`/booking-note/${this.$route.params.id}`)
      .then((response) => { 
        this.showLoading = false
        this.data = {...this.data, ...JSON.parse(JSON.stringify(response.data.data))}
        this.data.regis_date = response.data.data.created_at
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
        this.data.attachments.filter(item => {
          item.flag = 'edit'
          item.link = item.filepath ? this.backendport+'/'+item.filepath : ''
          return item
        })
        this.data.main_docs.filter(item => {
          item.link = item.filepath ? this.backendport+'/'+item.filepath : ''
          return item
        })
        this.data.booking_follows.filter(item => {
          item.flag = 'edit'
          return item
        })
        this.data.booking_follows = []
        if (response.data.data.booking_refers?.length < 1 || !response.data.data.booking_refers) this.data.booking_refers = [{ receive_document_number: '', desc: '', receive_date: '', book_refer_id: '', original_refer_id: '', book_type: '', flag: 'add'}]
        if (this.data.attachments.length < 1 || !this.data.attachments) this.data.attachments = [{ filename: '', flag: 'add'}]
        if (this.data.main_docs.length < 1 || !this.data.main_docs) this.data.main_docs = [{ filename: '', flag: 'add'}]
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    api_master() {
      this.showLoading = true
      const request1 = this.axios.get(`/master-data/book-type-note`)
      const request2 = this.axios.get(`/master-data/speed`)
      const request3 = this.axios.get(`/master-data/secret`)
      const request4 = this.axios.get(`/master-data/process-type`)
      const request5 = this.axios.get(`/master-data/permission-type`)
      const request6 = this.axios.get(`/user`)
      const request7 = this.axios.get(`/user`)
      const request8 = this.axios.get(`/master-data/register-type`)
      const request9 = this.axios.get('/master-data/department-user')
      const request10 = this.axios.get(`/filetype?keyword=&page_size=50&page=1`)

      this.axios.all([request1, request2, request3, request4, request5, request6, request7, request8, request9, request10])
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
        const response10 = responses[9]
        
        response1.data.data.filter(row => {
          row.value = row.id
          row.name = row.name
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

        this.data.FileType = []

        response10.data.data.filter(item => {
          if (item.active_flag == 1) {
            this.data.FileType.push(item.content_type)
          }
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
    keyup_record_type(e) {
      this.optionSelect.sendTo = []
      this.axios.get('/master-data/book-type-note', {
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
          this.optionSelect.book_type_id = response.data.data
        }
      })
    },
  },
  mounted () {
    // this.api_master()
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

            label {
              margin-left: 10px;
              font-size: 22px;
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

    .line {
      height: 2px;
      width: 100%;
      background-color: #e2ebf7;
      margin-top: 5px;
      margin-bottom: 5px;
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
              margin-top: 20px;
              margin-left: 50px;
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