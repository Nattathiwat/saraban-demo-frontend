<template>
  <div class="booking-out-detail">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/ballot-duotone.svg" alt="" class="icon-size">
            <div class="name">{{edit ? 'แก้ไขหนังสือส่งออก' : 'สร้างหนังสือส่งออก'}}</div>
          </div>
        </div>
        <div class="line"></div>
        <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit">
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
                <div class="name">ประเภท <span class="required">*</span></div>
                <cpn-select v-model="data.book_category_id"
                            name="book_category_id"
                            rules="required"
                            :optionSelect="optionSelect.book_category_id"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ชนิดของหนังสือ <span class="required">*</span></div>
                <cpn-select v-model="data.book_type_id"
                            name="book_type_id"
                            rules="required"
                            :optionSelect="optionSelect.book_type_id"
                            placeholder="กรุณาระบุ" />
              </div>
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
            <div class="group-input d-flex align-items-center">
              <div class="name">อ้างอิงถึง</div>
              <button type="button" class="add-booking-out" @click="data.booking_refers.push({ book_refer_id: '', original_refer_id: '', book_type: '', receive_date: '', receive_document_number: '', desc: ''})">
                <div class="group-image">
                  <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                  เพิ่มเอกสารอ้างอิง
                </div>
              </button>
            </div>
            <div class="group-between" v-for="(item, index) in data.booking_refers" :key="index">
              <div class="group-input left">
                <cpn-input  v-model="item.receive_document_number"
                            :name="`receive_document_number${index}`"
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
              <div class="name">ชื่อเรื่อง</div>
              <cpn-textArea v-model="data.subject"
                            name="subject"
                            rows="1" />
            </div>
          </div>
          <div class="line"></div>
          <div class="d-flex justify-content-end">
            <button type="button" class="add-register" :disabled="(!data.book_category_id || !data.book_type_id || !data.secret_id || !data.speed_id)" @click="addRegister()">
                <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                เพิ่มทะเบียน
            </button>
          </div>
          <div class="group-detail-2" v-for="(item, index) in data.booking_register_details" :key="index">
            <div class="d-flex">
              <div class="col-start">ชุดที่ #{{index+1}}</div>
              <div class="col-center">
                <div class="row">
                  <div class="col-lg-auto col-md-auto mb-3">
                    <span class="span">การออกเลข : {{item.book_out_num_type_desc}}</span><span>รูปแบบการส่ง : {{item.send_method_id_desc}}</span>
                  </div>
                  <div class="group-date col-lg-auto col-md-auto mb-3">
                    <div class="name">ลงวันที่ :</div>
                    <cpn-datepicker v-model="item.regis_date"
                                    :name="`regis_dateAdd${index}`"
                                    class="size-date" />
                  </div>
                </div>
                <div>ทะเบียนส่ง : {{item.regis_id_desc}}</div>
              </div>
              <div class="col-end">
                <div class="d-flex justify-content-end">
                  <div class="group-num">
                    <div class="name">จำนวน :</div>
                    <cpn-input  v-model="item.num"
                                :name="`num${index}`"
                                type="number"
                                class="size-input"/>
                  </div>
                  <button type="button" class="add-department" @click="addDepartmentClick(item)">
                    <div class="group-image">
                      <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="image-plus pointer">
                      เพิ่มหน่วยงาน
                    </div>
                  </button>
                  <button type="button" class="del-department" @click="data.booking_register_details.splice(index,1)">
                    <div class="group-image">
                      <i class="bi bi-trash-fill image-trash pointer"></i>
                      ลบชุดที่ #{{index+1}}
                    </div>
                  </button>
                </div>
                <div class="group-input">
                  <div class="name">ชื่อผู้เซ็น</div>
                  <div class="d-flex">
                    <cpn-autoComplete v-model="item.signer_id"
                                      :name="`signer_id${index}`"
                                      :optionSelect="item.optionSelect.signer_id"
                                      @change="changeSigner_id(index)" />

                    <cpn-checkbox v-model="item.is_signed"
                                  :name="`is_signed${index}`"
                                  class="cpn-select"
                                  label="ลายเซ็น"
                                  @change="changeSignature(index)" />
                  </div>
                </div>
              </div>
            </div>
            <div class="group-all-file">
              <div class="name">
                เอกสารใช้ร่วมกัน
              </div>
              <div class="group-input-file">
                <button type="button" class="button-file" @click="uploadFile(`main_docs${index}`)">
                  <span :class="item.main_filename ? '' : 'no-data'">
                    {{item.main_filename ? item.main_filename : 'หนังสือต้นเรื่อง'}}
                  </span>
                </button>
                <div class="text pointer" @click="uploadFile(`main_docs${index}`)">แนบเอกสาร</div>
                <input type="file" @change="fileSetChange(`main_docs${index}`, index, 'main_docs')" :name="`main_docs${index}`" style="display:none;" accept="application/pdf">
              </div>
              <button type="button" @click="downloadFile({filename: item.main_filename, type: item.main_type, filepath: item.main_filepath, link: item.main_link})" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
              <div class="group-input-file">
                <button type="button" class="button-file" @click="uploadFile(`dupplicate_copy${index}`)">
                  <span :class="item.attach_filename ? '' : 'no-data'">
                    {{item.attach_filename ? item.attach_filename : 'สำเนาคู่ฉลับ'}}
                  </span>
                </button>
                <div class="text pointer" @click="uploadFile(`dupplicate_copy${index}`)">แนบเอกสาร</div>
                <input type="file" @change="fileSetChange(`dupplicate_copy${index}`, index, 'dupplicate_copy')" :name="`dupplicate_copy${index}`" style="display:none;" accept="application/pdf">
              </div>
              <button type="button" @click="downloadFile({filename: item.attach_filename, type: item.attach_type, filepath: item.attach_filepath, link: item.attach_link})" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
            </div>
            <div class="detail-sub" v-for="(item2, index2) in item.booking_registers" :key="index2">
              <div class="group-between">
                <div class="group-input left w-200">
                  <div class="name">เลข ส่งออก</div>
                  <cpn-input  v-model="item2.book_out_num"
                              :name="`book_out_num${index}${index2}`"
                              :disabled="true" />
                </div>
                <div class="group-input">
                  <div class="name">เรียน</div>
                  <cpn-input  v-model="item2.greeting"
                              :name="`greeting${index}${index2}`"/>
                </div>
              </div>
              <div class="group-input">
                <div class="name">หน่วยงานปลายทาง</div>
                <cpn-autoComplete v-model="item2.department_dest_id"
                                  :optionSelect="item2.optionSelect.department_dest_id"
                                  @keyup="keyupDepartment($event, item2)"
                                  :name="`department_dest_id${index}${index2}`" />
              </div>
              <div class="group-between">
                <div class="w-100 overflow-hidden">
                  <div class="d-flex">
                    <div class="group-input-file">
                      <button type="button" class="button-file" @click="uploadFile(`main_docs${index}${index2}`)">
                        <span :class="item2.main_filename ? '' : 'no-data'">
                          {{item2.main_filename ? item2.main_filename : 'หนังสือต้นเรื่อง'}}
                        </span>
                      </button>
                      <div class="text pointer" @click="uploadFile(`main_docs${index}${index2}`)">แนบเอกสาร</div>
                      <input type="file" @change="fileDetailChange(`main_docs${index}${index2}`, index, index2, 'main_docs')" :name="`main_docs${index}${index2}`" style="display:none;" accept="application/pdf">
                    </div>
                    <button type="button" @click="downloadFile({filename: item2.main_filename, type: item2.main_type, filepath: item2.main_filepath, link: item2.main_link})" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
                  </div>
                  <div class="d-flex mt-3">
                    <div class="group-input-file">
                      <button type="button" class="button-file" @click="uploadFile(`dupplicate_copy${index}${index2}`)">
                        <span :class="item2.attach_filename ? '' : 'no-data'">
                          {{item2.attach_filename ? item2.attach_filename : 'สำเนาคู่ฉลับ'}}
                        </span>
                      </button>
                      <div class="text pointer" @click="uploadFile(`dupplicate_copy${index}${index2}`)">แนบเอกสาร</div>
                      <input type="file" @change="fileDetailChange(`dupplicate_copy${index}${index2}`, index, index2, 'dupplicate_copy')" :name="`dupplicate_copy${index}${index2}`" style="display:none;" accept="application/pdf">
                    </div>
                    <button type="button" @click="downloadFile({filename: item2.attach_filename, type: item2.attach_type, filepath: item2.attach_filepath, link: item2.attach_link})" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
                  </div>
                </div>
                <div class="w-100 ms-4 m-auto">
                  <div class="group-input">
                    <div class="name">ชื่อผู้เซ็น</div>
                    <div class="d-flex">
                      <cpn-autoComplete v-model="item2.signer_id"
                                        :name="`signer_id${index}${index2}`"
                                        :optionSelect="item2.optionSelect.signer_id"  />

                      <cpn-checkbox v-model="item2.is_signed"
                                    :name="`is_signed${index}${index2}`"
                                    class="cpn-select"
                                    label="ลายเซ็น" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-end"> 
                <button type="button" class="del-department-2" @click="item.booking_registers.splice(index2,1)">
                  <i class="bi bi-trash-fill image-trash pointer"></i>
                </button>
              </div>
            </div>
          </div>
          <div v-if="data.booking_register_details.length>0" class="line"></div>
          <div v-if="data.booking_register_details.length>0" class="tag">
            <div class="group-input">
              <div class="name">Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")</div>
              <cpn-input-tags v-model="data.tag"
                              name="tag" />
            </div>
            <div class="group-input d-flex align-items-center mt-4">
              <div class="name">สิ่งที่แนบมาด้วย</div>
              <button type="button" class="add-booking-out" @click="data.attachments.push({ filename: '', file: []})">
                <div class="group-image">
                  <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                  เพิ่มไฟล์
                </div>
              </button>
            </div>
            <div v-if="data.booking_register_details.length>0" class="d-flex mb-3 group-input-file-all" v-for="(item, index) in data.attachments" :key="index">
              <div class="group-input-file">
                <button type="button" class="button-file" @click="uploadFile(`fileAttachment${index}`)">
                  <span :class="item.filename ? '' : 'no-data'">
                    {{item.filename ? item.filename : 'หนังสือต้นเรื่อง'}}
                  </span>
                </button>
                <div class="text pointer" @click="uploadFile(`fileAttachment${index}`)">แนบเอกสาร</div>
                <input type="file" @change="fileAttachmentChange(`fileAttachment${index}`, index)" :name="`fileAttachment${index}`" style="display:none;" accept="application/pdf">
              </div>
              <button type="button" @click="downloadFile(item)" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
              <button type="button" class="del-department-3" @click="data.attachments.length > 1 ? data.attachments.splice(index,1) : item.filename = ''">
                <img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer">
              </button>
            </div>
          </div>
          <div class="line mt-4" v-if="data.booking_register_details.length>0"></div>
          <div class="send-to" v-if="data.booking_register_details.length>0">
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
              <div class="group-input">
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
            <div class="footer-right" v-show="data.booking_register_details.length>0">
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
    <div class="modal-register" v-show="modalRegiter.showModal">
      <div class="modal-class">
        <div class="modal-center">
          <div class="modal-size" ref="modalRegiterref">
            <Form @submit="onSubmitModal" @invalid-submit="onInvalidSubmit">
              <div class="modal-title">
                <div class="title-size">เพิ่มทะเบียน</div> 
                <i class="bi bi-x-lg icon-close" @click="modalRegiter.showModal = false"></i>
              </div>
              <div class="line"></div>
              <div class="modal-detail">
                <div class="message" v-for="(item, index) in modalRegiter.booking_register_details" :key="index">
                  <div class="d-flex justify-content-between">
                    <div class="set">ชุดที่ #{{(index+1)+data.booking_register_details.length}}</div>
                    <button type="button" @click="modalRegiter.booking_register_details.length > 1 ? modalRegiter.booking_register_details.splice(index,1) : ''" class="button-delete ms-3"><img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer"></button>
                  </div>
                  <div class="detail-sub">
                    <div class="group-between">
                      <div class="group-input">
                        <div class="name">ทะเบียนส่ง <span class="required">*</span></div>
                        <cpn-autoComplete v-model="item.regis_id"
                                          rules="required"
                                          :name="`addregis_id${index}`"
                                          :optionSelect="item.optionSelect.regis_id"  />
                      </div>
                      <div class="group-input right-width">
                        <div class="name">ลงวันที่ <span class="required">*</span></div>
                        <cpn-datepicker v-model="item.regis_date"
                                        rules="required"
                                        :name="`addregis_date${index}`"/>
                      </div>
                      <div class="group-input right-width">
                        <div class="name">การออกเลข <span class="required">*</span></div>
                        <cpn-select v-model="item.book_out_num_type"
                                    rules="required"
                                    :optionSelect="item.optionSelect.book_out_num_type"
                                    :name="`addbook_out_num_type${index}`"/>
                      </div>
                      <div class="group-input right-width">
                        <div class="name">รูปแบบการส่ง <span class="required">*</span></div>
                        <cpn-select v-model="item.send_method_id"
                                    rules="required"
                                    :optionSelect="item.optionSelect.send_method_id"
                                    :name="`addsend_method_id${index}`"/>
                      </div>
                    </div>
                    <div class="group-input">
                      <div class="name">หน่วยงานปลายทาง</div>
                      <cpn-input-tags v-model="item.department_dest_id"
                                      :flagSearch="true"
                                      :optionSelect="item.optionSelect.department_dest_id"
                                      @keyup="keyupDepartment($event, item)"
                                      :name="`adddepartment_dest_id${index}`"/>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <button type="button" class="add-register" @click="addRegisterModal()">
                    <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                    เพิ่มทะเบียน
                  </button>
                </div>
              </div>
              <div class="line"></div>
              <div class="group-footer">
                <button type="button" @click="modalRegiter.showModal = false" class="btn button-danger">
                  <div class="group-name">
                    <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="image-icon"/>
                    <div class="name">ยกเลิก</div>
                  </div>
                </button>
                <button type="submit" class="btn button-success">
                  <div class="group-name">
                  <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="image-icon"/>
                    <div class="name">ตกลง</div>
                  </div>
                </button>
              </div>
            </Form>
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
  name: 'department-detail',
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      optionSelectDefault: {
        signer_id: [],
        department_dest_id: [],
        regis_id: [],
        book_out_num_type: [{name: 'เลขเดียว', value: '0'}, {name: 'หลายเลข', value: '1'}],
        send_method_id: [{name: 'ตอบรับ', value: '0'}, {name: 'แจ้งเพื่อทราบ', value: '1'}, {name: 'ไม่ระบุ', value: '2'}],
      },
      showLoading: false,
      edit: false,
      flagSave: 1,
      data: {
        create_type: '0',
        creater_id: '',
        book_category_id: '1',
        book_type_id: '92',
        secret_id: '12',
        speed_id: '12',
        booking_refers: [{ receive_document_number: 'ท584/66', desc: '', receive_date: '', book_refer_id: '', original_refer_id: '', book_type: ''}],
        subject: '',
        booking_register_details: [],
        tag: [],
        attachments: [{ filename: '', file: []}],
        sendTo: [],
        comment: '',
        process_type_id: '',
        permission_id: '',
      },
      optionSelect: {
        creater_id: [],
        book_category_id: [{ name: 'บันทึกข้อความเสนอ นรม./รอง นรม.',value: '1' },{ name: 'หนังสือส่งออกภายนอก',value: '2' }],
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
    keyupSendTo(e) {
      this.optionSelect.sendTo = []
      this.axios.get('/master-data/department', {
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
    keyupDepartment(e, data) {
      data.optionSelect.department_dest_id = []
      this.axios.get('/master-data/department', {
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
          data.optionSelect.department_dest_id = response.data.data
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
    changeSigner_id(index) {
      this.data.booking_register_details[index].booking_registers.filter(item => {
        item.signer_id = this.data.booking_register_details[index].signer_id
      })
    },
    changeSignature(index) {
      this.data.booking_register_details[index].booking_registers.filter(item => {
        item.is_signed = this.data.booking_register_details[index].is_signed
      })
    },
    uploadFile(data) {
      document.querySelector(`[name="${data}"]`).click()
    },
    fileAttachmentChange(data, index) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if (file.type == 'application/pdf') {
          let dataFile = {
            filename: file.name,
            type: file.type == 'application/pdf' ? 'pdf' : '',
            link: URL.createObjectURL(file),
            size: (file.size /1024 /1024).toFixed(2) + ' MB',
            file: file,
          }
          this.data.attachments[index] = dataFile
          document.querySelector(`[name="${data}"]`).value=null;
        }
      }
    },
    fileSetChange(data, index, name) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if (file.type == 'application/pdf') {
          if (name == 'main_docs') {
            let dataFile = {
              main_filename: file.name,
              main_type: file.type == 'application/pdf' ? 'pdf' : '',
              main_link: URL.createObjectURL(file),
              main_size: (file.size /1024 /1024).toFixed(2) + ' MB',
              main_file: file,
            }
            this.data.booking_register_details[index] = {...this.data.booking_register_details[index], ...dataFile}
            this.data.booking_register_details[index].booking_registers.filter((item, index2) => {
              this.data.booking_register_details[index].booking_registers[index2] = {...item, ...dataFile}
            })
          } else {
            let dataFile = {
              attach_filename: file.name,
              attach_type: file.type == 'application/pdf' ? 'pdf' : '',
              attach_link: URL.createObjectURL(file),
              attach_size: (file.size /1024 /1024).toFixed(2) + ' MB',
              attach_file: file,
            }
            this.data.booking_register_details[index] = {...this.data.booking_register_details[index], ...dataFile}
            this.data.booking_register_details[index].booking_registers.filter((item, index2) => {
              this.data.booking_register_details[index].booking_registers[index2] = {...item, ...dataFile}
            })
          }
          document.querySelector(`[name="${data}"]`).value=null;
        }
      }
    },
    fileDetailChange(data, index, index2, name) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if (file.type == 'application/pdf') {
          if (name == 'main_docs') {
            let dataFile = {
              main_filename: file.name,
              main_type: file.type == 'application/pdf' ? 'pdf' : '',
              main_link: URL.createObjectURL(file),
              main_size: (file.size /1024 /1024).toFixed(2) + ' MB',
              main_file: file,
            }
            this.data.booking_register_details[index].booking_registers[index2] = {...this.data.booking_register_details[index].booking_registers[index2], ...dataFile}
          } else {
            let dataFile = {
              attach_filename: file.name,
              attach_type: file.type == 'application/pdf' ? 'pdf' : '',
              attach_link: URL.createObjectURL(file),
              attach_size: (file.size /1024 /1024).toFixed(2) + ' MB',
              attach_file: file,
            }
            this.data.booking_register_details[index].booking_registers[index2] = {...this.data.booking_register_details[index].booking_registers[index2], ...dataFile}
          }
          document.querySelector(`[name="${data}"]`).value=null;
        }
      }
    },
    addRegister() {
      this.modalRegiter.showModal = true
      this.modalRegiter.booking_register_details= [{
        regis_id: '',
        regis_date: this.assetsUtils.currentDate(),
        book_out_num_type: '0',
        send_method_id: '2',
        department_dest_id: [],
        optionSelect: {
          regis_id: this.optionSelectDefault.regis_id,
          book_out_num_type: this.optionSelectDefault.book_out_num_type,
          send_method_id: this.optionSelectDefault.send_method_id,
          department_dest_id: [],
        },
      }]
    },
    async addDepartmentClick(item) {
      for (let i = 0; i < item.num; i++) {
        if (item.book_out_num_type == 0) {
          if (item.booking_registers.length < 1) {
            await this.axios.post(`/booking-out/generate-number`, {department_id: parseInt(localStorage.getItem('department_id')), year: this.assetsUtils.currentDate().split('/')[2]-543})
            .then((response) => {
              item.booking_registers.push({
                book_out_num: response.data.data.out_document_number,
                greeting: '',
                department_dest_id: '',
                main_filename: '',
                attach_filename: '',
                signer_id: '',
                is_signed: false,
                optionSelect: {
                  signer_id: this.optionSelectDefault.signer_id,
                  department_dest_id: this.optionSelectDefault.department_dest_id
                },
              })
            })
          } else {
            item.booking_registers.push({
              book_out_num: item.booking_registers[0].book_out_num,
              greeting: '',
              department_dest_id: '',
              main_filename: '',
              attach_filename: '',
              signer_id: '',
              is_signed: false,
              optionSelect: {
                signer_id: this.optionSelectDefault.signer_id,
                department_dest_id: this.optionSelectDefault.department_dest_id
              },
            })
          }
        } else {
          await this.axios.post(`/booking-out/generate-number`, {department_id: parseInt(localStorage.getItem('department_id')), year: this.assetsUtils.currentDate().split('/')[2]-543})
          .then((response) => {
            item.booking_registers.push({
              book_out_num: response.data.data.out_document_number,
              greeting: '',
              department_dest_id: '',
              main_filename: '',
              attach_filename: '',
              signer_id: '',
              is_signed: false,
              optionSelect: {
                signer_id: this.optionSelectDefault.signer_id,
                department_dest_id: this.optionSelectDefault.department_dest_id
              },
            })
          })
        }
      }
    },
    addRegisterModal() {
      this.modalRegiter.booking_register_details.push({
        regis_id: '',
        regis_date: this.assetsUtils.currentDate(),
        book_out_num_type: 'เลขเดียว',
        send_method_id: 'ไม่ระบุ',
        department_dest_id: [],
        optionSelect: {
          regis_id: this.optionSelectDefault.regis_id,
          book_out_num_type: this.optionSelectDefault.book_out_num_type,
          send_method_id: this.optionSelectDefault.send_method_id
        },
      })
    },
    back() {
      this.$router.push({ 
        name: 'booking-out',
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
          _this.uploadFileAll()
        }
      }
    },
    onSubmitModal() {
      this.modalRegiter.booking_register_details.filter(item => {
        let regis_id_desc = ''
        let book_out_num_type_desc = ''
        let send_method_id_desc = ''
        item.optionSelect.regis_id.find(item2 => {if(item2.value == item.regis_id) {regis_id_desc = item2.name}})
        item.optionSelect.book_out_num_type.find(item2 => {if(item2.value == item.book_out_num_type) {book_out_num_type_desc = item2.name}})
        item.optionSelect.send_method_id.find(item2 => {if(item2.value == item.send_method_id) {send_method_id_desc = item2.name}})
        let data = {
          optionSelect: {
            signer_id: this.optionSelectDefault.signer_id
          },
          book_out_num_type: parseInt(item.book_out_num_type),
          book_out_num_type_desc: book_out_num_type_desc,
          send_method_id: parseInt(item.send_method_id),
          send_method_id_desc: send_method_id_desc,
          regis_date: item.regis_date,
          regis_id: parseInt(item.regis_id),
          regis_id_desc: regis_id_desc,
          num: '1',
          signer_id: '',
          is_signed: false,
          main_filename: '',
          attach_filename: '',
          booking_registers: []
        }
        if (item.department_dest_id.length > 0) {
          item.department_dest_id.filter(item2 => {
            data.booking_registers.push({
              book_out_num: '2566/63',
              greeting: '',
              department_dest_id: item2.value,
              main_filename: '',
              attach_filename: '',
              signer_id: '',
              is_signed: false,
              optionSelect: {
                signer_id: this.optionSelectDefault.signer_id,
                department_dest_id: [...this.optionSelectDefault.department_dest_id, item2]
              },
            })
          })
        } else {
          data.booking_registers.push({
            book_out_num: '2566/63',
            greeting: '',
            department_dest_id: '',
            main_filename: '',
            attach_filename: '',
            signer_id: '',
            is_signed: false,
            optionSelect: {
              signer_id: this.optionSelectDefault.signer_id,
              department_dest_id: this.optionSelectDefault.department_dest_id
            },
          })
        }
        this.data.booking_register_details.push(data)
      })
      this.modalRegiter.showModal = false
    },
    uploadFileAll() {
      let currentDate = this.assetsUtils.currentDate()
      let axiosArray1 = []
      let fileAttachments = []
      this.data.attachments.filter(item=> {
        if (item.filename) {
          let formDataFile = new FormData();
          formDataFile.append('file', item.file);
          formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
          axiosArray1.push(this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}}))
        }
      })
      if (axiosArray1.length>0) {
        this.axios.all([...axiosArray1])
        .then(this.axios.spread((...responses) => {
          responses.filter(item => {
            fileAttachments.push(item.data.data)
          })
          if (axiosArray1.length == fileAttachments.length) {
            this.uploadFileAll2(fileAttachments)
          }
        })).catch((error) => {
          this.showLoading = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      } else {
        this.uploadFileAll2(fileAttachments)
      }
    },
    uploadFileAll2(data) {
      let currentDate = this.assetsUtils.currentDate()
      let completeFile = []
      this.data.booking_register_details.filter(item => {
        let completeFile2 = []
        item.booking_registers.filter(item2 => {
          let check_main = false
          let check_attach = false
          if (item2.main_filename) {
            let formDataFile = new FormData();
            formDataFile.append('file', item2.main_file);
            formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
            this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}})
            .then((responses) => {
              item2.main_filepath = responses.data.data.filepath
              if (check_main && check_attach) {
                completeFile2.push(true)
                if (completeFile2.length == item.booking_registers.length) {
                  completeFile.push(true)
                }
                if (completeFile.length == this.data.booking_register_details.length) {
                  this.callApiSave(data)
                }
              }
            }).catch((error) => {
              this.showLoading = false
              this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            check_main = true
          }
          if (item2.attach_filename) {
            let formDataFile = new FormData();
            formDataFile.append('file', item2.attach_file);
            formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
            this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}})
            .then((responses) => {
              item2.attach_filepath = responses.data.data.filepath
              if (check_main && check_attach) {
                completeFile2.push(true)
                if (completeFile2.length == item.booking_registers.length) {
                  completeFile.push(true)
                }
                if (completeFile.length == this.data.booking_register_details.length) {
                  this.callApiSave(data)
                }
              }
            }).catch((error) => {
              this.showLoading = false
              this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            check_main = true
          }
          if (!item2.main_filename && !item2.attach_filename) {
            completeFile2.push(true)
            if (completeFile2.length == item.booking_registers.length) {
              completeFile.push(true)
            }
            if (completeFile.length == this.data.booking_register_details.length) {
              this.callApiSave(data)
            }
          }
        })
        if (item.booking_registers.length < 1) {
          completeFile.push(true)
          if (completeFile.length == this.data.booking_register_details.length) {
            this.callApiSave(data)
          }
        }
      })
    },
    callApiSave(data) {
      let fileAttachments = data
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
        booking_refers: this.data.booking_refers[0].book_refer_id ? this.data.booking_refers : [],
        booking_follows: booking_follows,
        booking_register_details: this.data.booking_register_details.filter(item => {
          item.signer_id = item.signer_id ? parseInt(item.signer_id) : null
          item.booking_registers.filter(item2 => {
            item2.signer_id = item2.signer_id ? parseInt(item2.signer_id) : null
            item2.department_dest_id = item2.department_dest_id ? parseInt(item2.department_dest_id) : null
            return item2
          })
          return item
        }),
        flag: this.flagSave == 1 ? "draft" : '',
      }
      if (this.edit) {
        if (this.flagSave == 1) {
          this.showLoading = true
          this.axios.put(`/booking-out/${this.$route.params.id}`, dataSave)
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
          this.axios.put(`/booking-out/${this.$route.params.id}`, dataSave)
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
          this.axios.post(`/booking-out`, dataSave)
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
          this.axios.post(`/booking-out`, dataSave)
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
      this.axios.get(`/booking-out/${this.$route.params.id}`)
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
        this.data.booking_register_details.filter(item=>{
          item.optionSelect = {signer_id: this.optionSelectDefault.signer_id}
          item.signer_id = ''
          item.num = '1'
          item.booking_registers.filter(item2 => {
            item2.optionSelect = {signer_id: this.optionSelectDefault.signer_id, department_dest_id: this.optionSelectDefault.department_dest_id}
            return item2
          })
          return item
        })

        if (this.data.main_docs.length < 1) this.data.main_docs = [{ filename: '', file: []}]
        if (this.data.attachments.length < 1) this.data.attachments = [{ filename: '', file: []}]
        
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    apiMaster() {
      this.showLoading = true
      const request1 = this.axios.get(`/master-data/book-type`)
      const request2 = this.axios.get(`/master-data/speed`)
      const request3 = this.axios.get(`/master-data/secret`)
      const request4 = this.axios.get(`/master-data/process-type`)
      const request5 = this.axios.get(`/master-data/permission-type`)
      const request6 = this.axios.get(`/user`)
      const request7 = this.axios.get(`/user`)
      const request8 = this.axios.get(`/master-data/register-type`)
      const request9 = this.axios.get('/master-data/department')

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
        this.optionSelectDefault.regis_id = response8.data.data
        this.optionSelectDefault.department_dest_id = response9.data.data
        
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
      
    },
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

        .add-booking-out {
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
                font-size: 22px;
                font-weight: 700;
                color: #0A1629;
                margin-top: 5px;
              }

              .icon-close {
                font-size: 30px;
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
                border-radius: 10px;

                .detail-sub {
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 10px;
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
                width: 130px;
                height: 50px;
                border-radius: 10px;
                border: 0;
              }

              .group-name {
                display: flex;
                align-items: center;
                justify-content: center;

                .image-icon {
                  width: 28px;
                  height: 28px;
                  margin-right: 10px;
                }

                .name {
                  color: #ffffff;
                  font-size: 20px;
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