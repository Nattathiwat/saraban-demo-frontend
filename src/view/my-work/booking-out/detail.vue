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
              <!-- <div class="group-input left">
                <div class="name">ประเภท <span class="required">*</span></div>
                <cpn-select v-model="data.book_category_id"
                            name="book_category_id"
                            rules="required"
                            :optionSelect="optionSelect.book_category_id"
                            placeholder="กรุณาระบุ" />
              </div> -->
              <div class="group-input left">
                <div class="name">ชนิดของหนังสือ <span class="required">*</span></div>
                <cpn-autoComplete v-model="data.book_type_id"
                                  name="book_type_id"
                                  rules="required"
                                  :optionSelect="optionSelect.book_type_id"
                                  placeholder="กรุณาระบุ" 
                                  @keyup="keyup_book_type"/>
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
            <!-- <div class="group-between">
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
            </div> -->
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
            <div class="group-input">
              <div class="name">ชื่อเรื่อง <span class="required">*</span></div>
              <cpn-textArea v-model="data.subject"
                            name="subject"
                            rules="required"
                            rows="1" />
            </div>
          </div>
          <div class="line"></div>
          <div class="d-flex justify-content-end">
            <button type="button" class="add-send" @click="modal_number()" v-if="check_modal_number()">
                <i class="bi bi-list-ol me-2"></i>
                ออกเลขทั้งหมด
            </button>
            <button type="button" class="add-send" @click="modal_send()" v-if="check_modal_send()">
                <i class="bi bi-send"></i>
                เลือกวิธีการส่ง
            </button>
            <button type="button" class="add-register" :disabled="(!data.book_type_id || !data.secret_id || !data.speed_id)" @click="add_booking_register_details()">
                <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                เพิ่มทะเบียน
            </button>
          </div>
          <div class="group-detail-2" v-for="(item, index) in data.booking_register_details.filter(el => el.flag != 'delete')" :key="index">
            <div class="d-flex">
              <div class="col-start">ชุดที่ #{{index+1}}</div>
              <div class="col-center">
                <div class="row">
                  <div class="col-lg-auto col-md-auto mb-3">
                    <span class="span">การออกเลข : {{item.book_out_num_type_name}}</span><span>รูปแบบการส่ง : {{item.send_method_name}}</span>
                  </div>
                  <div class="group-date col-lg-auto col-md-auto mb-3">
                    <div class="name">ลงวันที่ :</div>
                    <cpn-datepicker v-model="item.regis_date"
                                    :name="`regis_dateAdd${index}`"
                                    class="size-date" />
                  </div>
                </div>
                <div>ทะเบียนส่ง : {{item.regis_name}}</div>
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
                  <button type="button" class="add-department" @click="add_booking_registers(item)">
                    <div class="group-image">
                      <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="image-plus pointer">
                      เพิ่มหน่วยงาน
                    </div>
                  </button>
                  <button type="button" class="del-department" @click="delete_booking_register_details(item, index)">
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
                                      @change="change_signer_id(index)" 
                                      @keyup="keyup_signer($event,item)"/>

                    <cpn-checkbox v-model="item.is_signed"
                                  :name="`is_signed${index}`"
                                  class="cpn-select"
                                  label="ลายเซ็น"
                                  :disabled="!rule.user6"
                                  @change="change_signature(index)" />
                  </div>
                </div>
              </div>
            </div>
            <div class="group-all-file">
              <div class="name">
                เอกสารใช้ร่วมกัน
              </div>
              <div class="group-input-file">
                <button type="button" class="button-file" @click="upload_file(`main_docs${index}`)">
                  <span :class="item.main_filename ? '' : 'no-data'">
                    {{item.main_filename ? item.main_filename : 'หนังสือต้นเรื่อง'}}
                  </span>
                </button>
                <div class="text pointer" @click="upload_file(`main_docs${index}`)">แนบเอกสาร</div>
                <input type="file" @change="file_booking_register_details_change(`main_docs${index}`, index, 'main_docs')" :name="`main_docs${index}`" style="display:none;" accept="application/pdf">
              </div>
              <button type="button" @click="download_file({filename: item.main_filename, type: item.main_type, filepath: item.main_filepath, link: item.main_link})" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
              <div class="group-input-file">
                <button type="button" class="button-file" @click="upload_file(`dupplicate_copy${index}`)">
                  <span :class="item.attach_filename ? '' : 'no-data'">
                    {{item.attach_filename ? item.attach_filename : 'สิ่งที่แนบมาด้วย'}}
                  </span>
                </button>
                <div class="text pointer" @click="upload_file(`dupplicate_copy${index}`)">แนบเอกสาร</div>
                <input type="file" @change="file_booking_register_details_change(`dupplicate_copy${index}`, index, 'dupplicate_copy')" :name="`dupplicate_copy${index}`" style="display:none;">
              </div>
              <button type="button" @click="download_file({filename: item.attach_filename, type: item.attach_type, filepath: item.attach_filepath, link: item.attach_link})" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
            </div>
            <div class="detail-sub" v-for="(item2, index2) in item.booking_registers.filter(el => el.flag != 'delete')" :key="index2">
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
                      <button type="button" class="button-file" @click="upload_file(`main_docs${index}${index2}`)">
                        <span :class="item2.main_filename ? '' : 'no-data'">
                          {{item2.main_filename ? item2.main_filename : 'หนังสือต้นเรื่อง'}}
                        </span>
                      </button>
                      <div class="text pointer" @click="upload_file(`main_docs${index}${index2}`)">แนบเอกสาร</div>
                      <input type="file" @change="file_booking_registers_change(`main_docs${index}${index2}`, index, index2, 'main_docs')" :name="`main_docs${index}${index2}`" style="display:none;" accept="application/pdf">
                    </div>
                    <button type="button" @click="download_file({filename: item2.main_filename, type: item2.main_type, filepath: item2.main_filepath, link: item2.main_link})" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
                    <button type="button" class="del-department-3" @click="item2.main_filename = '', item2.main_filepath = ''">
                      <img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer">
                    </button>
                  </div>
                  <div class="d-flex mt-3">
                    <div class="group-input-file">
                      <button type="button" class="button-file" @click="upload_file(`dupplicate_copy${index}${index2}`)">
                        <span :class="item2.attach_filename ? '' : 'no-data'">
                          {{item2.attach_filename ? item2.attach_filename : 'สิ่งที่แนบมาด้วย'}}
                        </span>
                      </button>
                      <div class="text pointer" @click="upload_file(`dupplicate_copy${index}${index2}`)">แนบเอกสาร</div>
                      <input multiple type="file" @change="file_booking_registers_change(`dupplicate_copy${index}${index2}`, index, index2, 'dupplicate_copy')" :name="`dupplicate_copy${index}${index2}`" style="display:none;" >
                    </div>
                    <button type="button" @click="download_file({filename: item2.attach_filename, type: item2.attach_type, filepath: item2.attach_filepath, link: item2.attach_link})" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
                    <button type="button" class="del-department-3" @click="item2.attach_filename = '', item2.attach_filepath = ''">
                      <img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer">
                    </button>
                  </div>
                </div>
                <div class="w-100 ms-4 m-auto">
                  <div class="group-input">
                    <div class="name">ชื่อผู้เซ็น</div>
                    <div class="d-flex">
                      <cpn-autoComplete v-model="item2.signer_id"
                                        :name="`signer_id${index}${index2}`"
                                        :optionSelect="item2.optionSelect.signer_id" 
                                        @keyup="keyup_signer2($event,item2)"/>

                      <cpn-checkbox v-model="item2.is_signed"
                                    :name="`is_signed${index}${index2}`"
                                    class="cpn-select"
                                    label="ลายเซ็น"
                                    :disabled="!rule.user6" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="name mt-3 ms-2 required" v-show="item2.send_style_desc">วิธีการส่ง : {{item2.send_style_desc}}</div>
              <div class="text-end"> 
                <button type="button" class="del-department-2" @click="delete_booking_registers(item2, item, index2)">
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
              <button type="button" class="add-booking-out" @click="upload_file('fileAttachment')">
                <div class="group-image">
                  <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                  เพิ่มไฟล์
                </div>
              </button>
              <input type="file" multiple @change="file_attachment_add_change(`fileAttachment`)" :name="`fileAttachment`" style="display:none;">
            </div>
            <div v-if="data.booking_register_details.length>0" class="d-flex mb-3 group-input-file-all" v-for="(item, index) in data.attachments.filter(el => el.flag != 'delete')" :key="index">
              <div class="group-input-file">
                <button type="button" class="button-file" @click="upload_file(`fileAttachment${index}`)">
                  <span :class="item.filename ? '' : 'no-data'">
                    {{item.filename ? item.filename : 'สิ่งที่แนบมาด้วย'}}
                  </span>
                </button>
                <div class="text pointer" @click="upload_file(`fileAttachment${index}`)">แนบเอกสาร</div>
                <input type="file" @change="file_attachment_change(`fileAttachment${index}`, item)" :name="`fileAttachment${index}`" style="display:none;">
              </div>
              <button type="button" @click="download_file(item)" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
              <button type="button" class="del-department-3" @click="delete_attachments(item, index)">
                <img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer">
              </button>
            </div>
          </div>
          <div class="line mt-4" v-if="data.booking_register_details.length>0"></div>
          <div class="send-to" v-if="data.booking_register_details.length>0">
            <div class="group-input">
              <div class="name">ส่งต่อ(กรอกข้อมูล และคลิกเลือกรายชื่อ)</div>
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
              <button type="button" class="button-danger ms-3" @click="delete_click()" v-if="$route.params.id">
                <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="icon-times-circle"/>
                ลบ
              </button>
            </div>
            <div class="footer-right" v-show="data.booking_register_details.length>0">
              <button type="submit" class="button-success button-save" @click="flagSave = 3" v-show="edit">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                บันทึก
              </button>
              <button type="submit" class="button-primary" @click="flagSave = 1" v-show="!edit">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                บันทึกแบบร่าง
              </button>
              <button type="submit" class="button-success" @click="flagSave = 5" v-if="button_send_bookout && !data.is_show_send_style_button">
                <img src="~@/assets/images/icon/check-circle-duotone.svg" alt="times-circle" class="icon-check-circle"/>
                ส่งหนังสือออก
              </button>
              <button type="submit" class="button-success" @click="flagSave = 2" :disabled="data.sendTo.length<1" v-if="!button_send_bookout">
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
            <Form @submit="on_submit_modal" @invalid-submit="onInvalidSubmit">
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
                  <button type="button" class="add-register" @click="add_booking_register_details_modal()">
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
    <div class="modal-send" v-show="modalSend.showModal">
      <div class="modal-class">
        <div class="modal-center">
          <div class="modal-size" ref="modalSendref">
            <div class="modal-title">
              <div class="title-size">วิธีการส่ง</div> 
              <i class="bi bi-x-lg icon-close" @click="modalSend.showModal = false"></i>
            </div>
            <div class="line"></div>
            <div class="modal-detail">
              <div class="group-head">
                <div class="group-input">
                  <cpn-checkbox v-model="modalSend.select"
                                :name="`select`"
                                @change="selectedAll()"
                                label="ทั้งหมด" />
                </div>
                <div class="group-input w-25">
                  <div class="name">วิธีการส่ง</div>
                  <cpn-select v-model="modalSend.send_style_id"
                              name="send_style_id"
                              placeholder="กรุณาเลือกวิธีการส่งหนังสือ"
                              :optionSelect="modalSend.optionSelect.send_style" />
                </div>
              </div>
              <div class="message" v-for="(item, index) in modalSend.booking_register_details.filter(el => el.flag != 'delete')" :key="index">
                <div class="d-flex">
                  <div class="col-checkbox">
                    <cpn-checkbox v-model="item.select"
                                  @change="selected1(item)"
                                  :name="`select${index}`" />
                  </div>
                  <div class="col-start">ชุดที่ #{{index+1}}</div>
                  <div class="col-center">
                    <div class="row">
                      <div class="col-lg-auto col-md-auto mb-3">
                        <span class="span">การออกเลข : {{item.book_out_num_type_name}}</span><span>รูปแบบการส่ง : {{item.send_method_name}}</span>
                      </div>
                      <div class="col-lg-auto col-md-auto mb-3">
                        <div class="name">ลงวันที่ : {{item.regis_date}}</div>
                      </div>
                    </div>
                    <div>ทะเบียนส่ง : {{item.regis_name}}</div>
                  </div>
                </div>
                <div class="detail-sub">
                  <div class="mb-3">หน่วยงานปลายทาง</div>
                  <div class="d-flex justify-content-between align-items-center" v-for="(item2, index2) in item.booking_registers.filter(el => el.flag != 'delete')" :key="index2">
                    <div class="group-input checkbox">
                    <cpn-checkbox v-model="item2.select"
                                  @change="selected2(item, item2)"
                                  :name="`select${index}${index2}`" />
                    </div>
                    <div class="group-input index">{{index2+1}}.</div>
                    <div class="group-input">
                      <cpn-input  v-model="item2.department_dest_name"
                                  :disabled="true"
                                  :name="`department_dest_name${index}${index2}`" />
                    </div>
                    <div class="group-input w-50">
                      <cpn-select v-model="item2.send_style_id"
                                  :name="`send_style_id${index}${index2}`"
                                  :optionSelect="modalSend.optionSelect.send_style"
                                  :disabled="true"  />
                    </div>
                  </div>
                </div> 
              </div>
            </div>
            <div class="line"></div>
            <div class="group-footer">
              <button type="button" @click="modalSend.showModal = false" class="btn button-danger">
                <div class="group-name">
                  <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="image-icon"/>
                  <div class="name">ปิด</div>
                </div>
              </button>
              <button type="button" class="btn button-success" :disabled="!modalSend.send_style_id" @click="sendMailClick()">
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
    <div class="modal-send" v-show="modalNumber.showModal">
      <div class="modal-class">
        <div class="modal-center">
          <div class="modal-size" ref="modalNumberref">
            <div class="modal-title">
              <div class="title-size">ออกเลขทั้งหมด</div> 
              <i class="bi bi-x-lg icon-close" @click="modalNumber.showModal = false"></i>
            </div>
            <div class="line"></div>
            <div class="modal-detail">
              <div class="group-head">
                <div class="group-input">
                  <cpn-checkbox v-model="modalNumber.select"
                                :name="`select`"
                                @change="selectedAll('number')"
                                label="ทั้งหมด" />
                </div>
              </div>
              <div v-for="(item, index) in data.booking_register_details.filter(el => el.flag != 'delete')" :key="index">
                <div class="message" v-if="check_all_gen_number(item)">
                  <div class="d-flex">
                    <div class="col-checkbox">
                      <cpn-checkbox v-model="item.select"
                                    @change="selected1(item, 'number')"
                                    :name="`select${index}`" />
                    </div>
                    <div class="col-start">ชุดที่ #{{index+1}}</div>
                    <div class="col-center">
                      <div class="row">
                        <div class="col-lg-auto col-md-auto mb-3">
                          <span class="span">การออกเลข : {{item.book_out_num_type_name}}</span><span>รูปแบบการส่ง : {{item.send_method_name}}</span>
                        </div>
                        <div class="col-lg-auto col-md-auto mb-3">
                          <div class="name">ลงวันที่ : {{item.regis_date}}</div>
                        </div>
                      </div>
                      <div>ทะเบียนส่ง : {{item.regis_name}}</div>
                    </div>
                  </div>
                  <div class="detail-sub">
                    <div class="mb-3">หน่วยงานปลายทาง</div>
                    <div class="d-flex justify-content-between align-items-center" v-for="(item2, index2) in item.booking_registers.filter(el => el.flag != 'delete')" :key="index2">
                      <div class="group-input index">{{index2+1}}.</div>
                      <div class="group-input">
                        <cpn-input  v-model="item2.department_dest_name"
                                    :disabled="true"
                                    :name="`department_dest_name${index}${index2}`" />
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            <div class="line"></div>
            <div class="group-footer">
              <button type="button" @click="modalNumber.showModal = false" class="btn button-danger">
                <div class="group-name">
                  <img src="~@/assets/images/icon/times-circle-duotone.svg" alt="times-circle" class="image-icon"/>
                  <div class="name">ยกเลิก</div>
                </div>
              </button>
              <button type="button" class="btn button-success" @click="sendNumberClick()">
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
    <div class="detail-history" v-if="$route.params.id">
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
              <button v-show="item2.filepath" class="button-file" @click="download_file({filename:item2.filepath.split('/').pop(),link:item2.link})">{{item2.filepath.split("/").pop()}}</button>
              <li>
                {{item2.remark}}
                {{item2.comment}}
                <div class="detail-signager" v-if="item2.signature_img && item.bookactionname == 'ความเห็นคำสั่ง'">
                  <img :src="item2.signature_img " alt="" class="image-size">
                  <!-- <div class="name">({{item2.fullname}})</div>
                  <div class="position">{{item2.positionName}}</div> -->
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
        book_category_id: '',
        book_type_id: '',
        secret_id: '13',
        speed_id: '12',
        booking_refers: [{ receive_document_number: '', desc: '', receive_date: '', book_refer_id: '', original_refer_id: '', book_type: ''}],
        subject: '',
        booking_register_details: [],
        tag: [],
        attachments: [{ filename: ''}],
        sendTo: [],
        booking_follows: [],
        comment: '',
        process_type_id: '12',
        permission_id: '8',
        history: {
          hide: false,
          data: [],
          tab: 1
        },
        FileType: []
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
      },
      modalSend: {
        showModal: false,
        select: false,
        send_style_id: '',
        booking_register_details: [],
        optionSelect: {
          send_style: [{value: 1, name:'Email'}, {value: 2, name:'ไปรษณีย์'}, {value: 3, name:'รถนำส่ง'}, {value: 4, name:'รับด้วยตนเอง'}, {value: 5, name:'เจ้าของเรื่องส่งเอง'}, {value: 6, name:'ส่งผ่านระบบสารบรรณ'}, {value: 7, name:'ไม่ระบุ'}]
        }
      },
      modalNumber: {
        showModal: false,
        select: false,
        booking_register_details: [],
      },
      button_send_bookout: false
    }
  },
  methods: {
    check_all_gen_number(item) {
      let show = false
      item.booking_registers.filter(el => el.flag != 'delete').filter(row2 => {
        if (!row2.is_real_book_out_num) {
          show = true
        }
      })
      return show
    },
    clear_data() {
      this.data.sendTo = []
      this.data.booking_follows = []
      this.data.comment = ''
      this.data.process_type_id = '12'
      this.data.permission_id = '8'
      this.data.history = {
        hide: false,
        data: [],
        tab: 1
      }
    },
    check_modal_number() {
      let show = false
      this.data.booking_register_details.filter(el => el.flag != 'delete').filter(row => {
        row.booking_registers.filter(el => el.flag != 'delete').filter(row2 => {
          if (!row2.is_real_book_out_num) {
            show = true
          }
        })
      })
      return show
    },
    check_modal_send() {
      let show = false
      this.data.booking_register_details.filter(el => el.flag != 'delete').filter(row => {
        row.booking_registers.filter(el => el.flag != 'delete').filter(row2 => {
          show = true
        })
      })
      return this.data.is_show_send_style_button ? show : false
    },
    async sendNumberClick() {
      for (let i = 0; i < this.data.booking_register_details.filter(el => el.flag != 'delete').length; i++) {
        let row = this.data.booking_register_details.filter(el => el.flag != 'delete')[i]
        if (row.select) {
          if (row.book_out_num_type != 1) {
            this.showLoading = true
            await this.axios.post(`/booking-out/generate-number`, {
              department_id: parseInt(localStorage.getItem('department_id')), 
              year: this.assetsUtils.currentDate().split('/')[2]-543,
              user_id: parseInt(localStorage.getItem('user_id')),
              regis_id: parseInt(row.regis_id),
            })
            .then((response) => {
              this.showLoading = false
              row.booking_registers.filter(row2 => {
                row2.book_out_num = response.data.data.out_document_number
                row2.is_real_book_out_num = true
              })
            }).catch((error) => {
              this.showLoading = false
              this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            for (let i2 = 0; i2 < row.booking_registers.filter(el => el.flag != 'delete').length; i2++) {
              let row2 = row.booking_registers.filter(el => el.flag != 'delete')[i2]
              this.showLoading = true
              await this.axios.post(`/booking-out/generate-number`, {
                department_id: parseInt(localStorage.getItem('department_id')), 
                year: this.assetsUtils.currentDate().split('/')[2]-543,
                user_id: parseInt(localStorage.getItem('user_id')),
                regis_id: parseInt(row.regis_id),
              })
              .then((response) => {
                this.showLoading = false
                row2.book_out_num = response.data.data.out_document_number
                row2.is_real_book_out_num = true
              }).catch((error) => {
                this.showLoading = false
                this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
              })
            }
          }
        }
      }
      this.flagSave = 4
      this.upload_file_all()
      this.modalNumber.showModal = false
    },
    sendMailClick() {
      let axiosArray = []
      this.modalSend.booking_register_details.filter((row, index) => {
        row.booking_registers.filter((row2, index2) => {
          if(row2.select && (row2.book_id || row2.book_id == 0) && (row2.regis_id || row2.regis_id == 0)) {
            row2.send_style_id = this.modalSend.send_style_id
            this.data.booking_register_details[index].booking_registers[index2].send_style_id = this.modalSend.send_style_id
            this.data.booking_register_details[index].booking_registers[index2].send_style_desc = this.modalSend.optionSelect.send_style.filter(row=>row.value == this.modalSend.send_style_id)[0]?.name || ''
            let dataSave = {
              send_style_id: parseInt(this.modalSend.send_style_id),
              book_id: parseInt(row2.book_id),
              book_regis_id: parseInt(row.id),
              user_id: parseInt(localStorage.getItem('user_id')),
              book_regis_sub_id: parseInt(row2.id),
            }
            if (this.modalSend.send_style_id == 1) {
              axiosArray.push(this.axios.post(`/book-out-external`, dataSave))
            } else {
              axiosArray.push('')
            }
          }
        })
      })
      if (axiosArray.length>0) {
        if (this.modalSend.send_style_id == 1) {
          this.axios.all([...axiosArray])
          .then(this.axios.spread(() => {
            // this.modalSend.showModal = false
            this.flagSave = 6
            this.upload_file_all()
          })).catch((error) => {
            this.showLoading = false
            this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          })
        } else {
          // this.modalSend.showModal = false
          this.flagSave = 6
          this.upload_file_all()
        }
      } else {
        // this.modalSend.showModal = false
      }
    },
    selectedAll(name) {
      if (name == 'number') {
        this.data.booking_register_details.filter((row) => {
          row.select = this.modalNumber.select;
          row.booking_registers.filter((row2) => {
            row2.select = this.modalNumber.select;
          })
        })
      } else {
        this.modalSend.booking_register_details.filter((row) => {
          row.select = this.modalSend.select;
          row.booking_registers.filter((row2) => {
            row2.select = this.modalSend.select;
          })
        })
      }
    },
    selected1(item, name) {
      if (name == 'number') {
        this.modalNumber.select = this.data.booking_register_details.every((row) => {
          return row.select;
        })
        item.booking_registers.filter((row2) => {
          row2.select = item.select;
        })
      } else {
        this.modalSend.select = this.modalSend.booking_register_details.every((row) => {
          return row.select;
        })
        item.booking_registers.filter((row2) => {
          row2.select = item.select;
        })
      }
    },
    selected2(item, item2) {
      item.select = item.booking_registers.every((row) => {
        return row.select;
      })
      this.modalSend.select = this.modalSend.booking_register_details.every((row) => {
        return row.select;
      })
    },
    modal_send() {
      this.modalSend.select = false
      this.modalSend.booking_register_details = this.data.booking_register_details
      this.modalSend.booking_register_details.filter(item => {
        item.select = false
        item.booking_registers.filter(item2 => {
          item2.select = false
          item2.optionSelect.department_dest_id.filter(item3 => {
            if (item3.id == item2.department_dest_id) {
              item2.department_dest_name = item3.desc
            }
          })
        })
      })
      this.modalSend.showModal = true
    },
    modal_number() {
      this.modalNumber.select = false
      this.data.booking_register_details.filter(item => {
        item.select = false
        item.booking_registers.filter(item2 => {
          item2.select = false
          item2.optionSelect.department_dest_id.filter(item3 => {
            if (item3.id == item2.department_dest_id) {
              item2.department_dest_name = item3.desc
            }
          })
        })
      })
      this.modalNumber.showModal = true
    },
    historyClick(data) {
      this.showLoading = true
      this.axios.get(`/booking-out/${this.$route.params.id}/history`, {
        params: {
          book_type: 1,
          department_id: parseInt(localStorage.getItem('department_id'))        
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
    delete_click() {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการลบ`,
        message: `หนังสือส่งออก ใช่หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          _this.showLoading = true
          _this.axios.delete(`/booking-out/${_this.$route.params.id}`)
          .then(() => { 
            _this.showLoading = false
            _this.modalAlert = {
              showModal: true,
              type: 'success',
              title: 'ทำการลบหนังสือส่งออกสำเร็จแล้ว',
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
    keyup_signer2(e,item2){
      this.axios.get('/user/signer', {
        params: {
          keyword: e.target.value,
          user_id : localStorage.getItem('user_id'),
          department_id: parseInt(localStorage.getItem('department_id'))
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            item.name = item.fname + ' ' + item.lname
            return item
          })
          item2.optionSelect.signer_id = response.data.data
        }
      })
    },
    keyup_signer(e,item){
      this.axios.get('/user/signer', {
        params: {
          keyword: e.target.value,
          user_id : localStorage.getItem('user_id'),
          department_id: parseInt(localStorage.getItem('department_id'))
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            item.name = item.fname + ' ' + item.lname
            return item
          })
          item.optionSelect.signer_id = response.data.data
        }
      })
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
          keyword: e.target.value,
          type: 1
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
    delete_booking_register_details(item, index) {
      if (item.flag == 'edit') {
        item.flag = 'delete'
      } else {
        this.data.booking_register_details.splice(index,1)
      }
    },
    async add_booking_registers(item) {
      for (let i = 0; i < item.num; i++) {
        if (item.book_out_num_type == 0) {
          if (item.booking_registers.filter(el => el.flag != 'delete').length < 1) {
            this.showLoading = true
            await this.axios.post(`/booking-out/generate-number-draft`, {
              department_id: parseInt(localStorage.getItem('department_id')), 
              year: this.assetsUtils.currentDate().split('/')[2]-543,
              user_id: parseInt(localStorage.getItem('user_id')),
            })
            .then((response) => {
              this.showLoading = false
              item.booking_registers.push({
                book_out_num: response.data.data.out_document_number,
                greeting: '',
                department_dest_id: '',
                main_filename: '',
                attach_filename: '',
                signer_id: '',
                is_signed: false,
                flag: 'add',
                optionSelect: {
                  signer_id: this.optionSelectDefault.signer_id,
                  department_dest_id: this.optionSelectDefault.department_dest_id
                },
                human_flag: item.human_flag,
                response_id: parseInt(item.value),
                response_type: item.type,
                is_real_book_out_num: false
              })
            }).catch((error) => {
              this.showLoading = false
              this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
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
              flag: 'add',
              optionSelect: {
                signer_id: this.optionSelectDefault.signer_id,
                department_dest_id: this.optionSelectDefault.department_dest_id
              },
              human_flag: item.human_flag,
              response_id: parseInt(item.value),
              response_type: item.type,
              is_real_book_out_num: item.booking_registers[0].is_real_book_out_num
            })
          }
        } else {
          if (item.booking_registers.filter(el => el.flag != 'delete').length < 1) {
            this.showLoading = true
            await this.axios.post(`/booking-out/generate-number-draft`, {
              department_id: parseInt(localStorage.getItem('department_id')),
              year: this.assetsUtils.currentDate().split('/')[2]-543,
              user_id: parseInt(localStorage.getItem('user_id'))
              })
            .then((response) => {
              this.showLoading = false
              item.booking_registers.push({
                book_out_num: response.data.data.out_document_number,
                greeting: '',
                department_dest_id: '',
                main_filename: '',
                attach_filename: '',
                signer_id: '',
                is_signed: false,
                flag: 'add',
                optionSelect: {
                  signer_id: this.optionSelectDefault.signer_id,
                  department_dest_id: this.optionSelectDefault.department_dest_id
                },
                human_flag: item.human_flag,
                response_id: parseInt(item.value),
                response_type: item.type,
                is_real_book_out_num: false
              })
            }).catch((error) => {
              this.showLoading = false
              this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            if (item.booking_registers[0].is_real_book_out_num) {
              this.showLoading = true
              await this.axios.post(`/booking-out/generate-number`, {
                department_id: parseInt(localStorage.getItem('department_id')), 
                year: this.assetsUtils.currentDate().split('/')[2]-543,
                user_id: parseInt(localStorage.getItem('user_id')),
                regis_id: parseInt(item.regis_id),
              })
              .then((response) => {
                this.showLoading = false
                item.booking_registers.push({
                  book_out_num: response.data.data.out_document_number,
                  greeting: '',
                  department_dest_id: '',
                  main_filename: '',
                  attach_filename: '',
                  signer_id: '',
                  is_signed: false,
                  flag: 'add',
                  optionSelect: {
                    signer_id: this.optionSelectDefault.signer_id,
                    department_dest_id: this.optionSelectDefault.department_dest_id
                  },
                  human_flag: item.human_flag,
                  response_id: parseInt(item.value),
                  response_type: item.type,
                  is_real_book_out_num: true
                })
              }).catch((error) => {
                this.showLoading = false
                this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
              })
            } else {
              this.showLoading = true
              await this.axios.post(`/booking-out/generate-number-draft`, {
                department_id: parseInt(localStorage.getItem('department_id')),
                year: this.assetsUtils.currentDate().split('/')[2]-543,
                user_id: parseInt(localStorage.getItem('user_id'))
                })
              .then((response) => {
                this.showLoading = false
                item.booking_registers.push({
                  book_out_num: response.data.data.out_document_number,
                  greeting: '',
                  department_dest_id: '',
                  main_filename: '',
                  attach_filename: '',
                  signer_id: '',
                  is_signed: false,
                  flag: 'add',
                  optionSelect: {
                    signer_id: this.optionSelectDefault.signer_id,
                    department_dest_id: this.optionSelectDefault.department_dest_id
                  },
                  human_flag: item.human_flag,
                  response_id: parseInt(item.value),
                  response_type: item.type,
                  is_real_book_out_num: false
                })
              }).catch((error) => {
                this.showLoading = false
                this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
              })
            }
          }
        }
      }
      this.flagSave = 4
      this.upload_file_all()
    },
    delete_booking_registers(item2, item, index2) {
      if (item2.flag == 'edit') {
        item2.flag = 'delete'
      } else {
        item.booking_registers.splice(index2,1)
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
    add_booking_follows() {
      this.data.sendTo.filter(item => {
        if (!this.data.booking_follows.some(el => el.department_id === item.value && el.flag != 'delete')) {
          let data = {
            ...item,
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
    booking_refers_click(item) {
      //RA04/66
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
            filesize: file.size.toString(),
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
            filesize: file.size.toString(),
            file: file,
          }
          this.data.sendToFile = dataFile
        } else {
          let dataFile = {
            filename: file.name,
            type: file.type,
            link: URL.createObjectURL(file),
            size: (file.size /1024 /1024).toFixed(2) + ' MB',
            filesize: file.size.toString(),
            file: file,
          }
          this.data[name][index] = {...this.data[name][index], ...dataFile}
          document.querySelector(`[name="${data}"]`).value=null;
        }
      }
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
    file_attachment_change(data, item) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if ((this.data.FileType.indexOf(file.type)==-1)) {
          this.modalAlert = {showModal: true, type: 'error', message: this.defaultMessageErrorFile}
          return false
        }
        item.filename = file.name
        item.type = file.type
        item.link = URL.createObjectURL(file)
        item.size = (file.size /1024 /1024).toFixed(2) + ' MB'
        item.filesize = file.size.toString()
        item.file = file
        document.querySelector(`[name="${data}"]`).value=null;
      }
    },
    file_booking_register_details_change(data, index, name) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if ((this.data.FileType.indexOf(file.type)==-1)) {
          this.modalAlert = {showModal: true, type: 'error', message: this.defaultMessageErrorFile}
          return false
        }
        if (name == 'main_docs') {
          if (file.type == 'application/pdf') {
            let dataFile = {
              main_filename: file.name,
              main_type: file.type,
              main_link: URL.createObjectURL(file),
              main_size: (file.size /1024 /1024).toFixed(2) + ' MB',
              main_filesize: file.size.toString(),
              main_file: file,
            }
            this.data.booking_register_details[index] = {...this.data.booking_register_details[index], ...dataFile}
            this.data.booking_register_details[index].booking_registers.filter((item, index2) => {
              this.data.booking_register_details[index].booking_registers[index2] = {...item, ...dataFile}
            })
            document.querySelector(`[name="${data}"]`).value=null;
          }
        } else {
            let dataFile = {
              attach_filename: file.name,
              attach_type: file.type,
              attach_link: URL.createObjectURL(file),
              attach_size: (file.size /1024 /1024).toFixed(2) + ' MB',
              attach_filesize: file.size.toString(),
              attach_file: file,
            }
            this.data.booking_register_details[index] = {...this.data.booking_register_details[index], ...dataFile}
            this.data.booking_register_details[index].booking_registers.filter((item, index2) => {
              this.data.booking_register_details[index].booking_registers[index2] = {...item, ...dataFile}
            })
            document.querySelector(`[name="${data}"]`).value=null;
          }
      }
    },
    file_booking_registers_change(data, index, index2, name) {
      for (var i = 0; i < document.querySelector(`[name="${data}"]`).files.length; i++) {
        let file = document.querySelector(`[name="${data}"]`).files[i]
        if ((this.data.FileType.indexOf(file.type)==-1)) {
          this.modalAlert = {showModal: true, type: 'error', message: this.defaultMessageErrorFile}
          return false
        }
        if (name == 'main_docs') {
          if (file.type == 'application/pdf') {
            let dataFile = {
              main_filename: file.name,
              main_type: file.type,
              main_link: URL.createObjectURL(file),
              main_size: (file.size /1024 /1024).toFixed(2) + ' MB',
              main_filesize: file.size.toString(),
              main_file: file,
            }
            this.data.booking_register_details[index].booking_registers[index2] = {...this.data.booking_register_details[index].booking_registers[index2], ...dataFile}
            document.querySelector(`[name="${data}"]`).value=null;
          } 
        } else {
            let dataFile = {
              attach_filename: file.name,
              attach_type: file.type,
              attach_link: URL.createObjectURL(file),
              attach_size: (file.size /1024 /1024).toFixed(2) + ' MB',
              attach_filesize: file.size.toString(),
              attach_file: file,
            }
            this.data.booking_register_details[index].booking_registers[index2] = {...this.data.booking_register_details[index].booking_registers[index2], ...dataFile}
            document.querySelector(`[name="${data}"]`).value=null;
          }
      }
    },
    add_booking_register_details() {
      this.modalRegiter.showModal = true
      this.modalRegiter.booking_register_details= [{
        regis_id: '',
        regis_date: this.assetsUtils.currentDate(),
        book_out_num_type: '0',
        send_method_id: '2',
        department_dest_id: [],
        flag: 'add',
        optionSelect: {
          regis_id: this.optionSelectDefault.regis_id,
          book_out_num_type: this.optionSelectDefault.book_out_num_type,
          send_method_id: this.optionSelectDefault.send_method_id,
          department_dest_id: [],
        },
      }]
    },
    add_booking_register_details_modal() {
      this.modalRegiter.booking_register_details.push({
        regis_id: '',
        regis_date: this.assetsUtils.currentDate(),
        book_out_num_type: '0',
        send_method_id: '2',
        department_dest_id: [],
        optionSelect: {
          regis_id: this.optionSelectDefault.regis_id,
          book_out_num_type: this.optionSelectDefault.book_out_num_type,
          send_method_id: this.optionSelectDefault.send_method_id
        },
        flag: 'add',
      })
    },
    back() {
      this.$router.push({ 
        name: 'my-work.booking-out',
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
        title: `คุณยืนยันการ${this.flagSave == 1 ? 'บันทึกแบบร่าง' : this.flagSave == 3 ? 'บันทึกแบบ' : this.flagSave == 5 ? 'ส่งหนังสือออก' : 'บันทึกและส่งต่อ'}หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          _this.showLoading = true
          _this.upload_file_all()
        }
      }
    },
    async on_submit_modal() {
      for (let i = 0; i < this.modalRegiter.booking_register_details.length; i++) {
        let item = this.modalRegiter.booking_register_details[i]
        let regis_name = ''
        let book_out_num_type_name = ''
        let send_method_name = ''
        item.optionSelect.regis_id.find(item2 => {if(item2.value == item.regis_id) {regis_name = item2.name}})
        item.optionSelect.book_out_num_type.find(item2 => {if(item2.value == item.book_out_num_type) {book_out_num_type_name = item2.name}})
        item.optionSelect.send_method_id.find(item2 => {if(item2.value == item.send_method_id) {send_method_name = item2.name}})
        let data = {
          optionSelect: {
            signer_id: this.optionSelectDefault.signer_id
          },
          book_out_num_type: parseInt(item.book_out_num_type),
          book_out_num_type_name: book_out_num_type_name,
          send_method_id: parseInt(item.send_method_id),
          send_method_name: send_method_name,
          regis_date: item.regis_date,
          regis_id: parseInt(item.regis_id),
          regis_name: regis_name,
          num: '1',
          signer_id: '',
          is_signed: false,
          flag: 'add',
          main_filename: '',
          attach_filename: '',
          booking_registers: []
        }
        if (item.department_dest_id.length > 0) {
          if (item.book_out_num_type == 0) {
            this.showLoading = true
            await this.axios.post(`/booking-out/generate-number-draft`, {
              department_id: parseInt(localStorage.getItem('department_id')), 
              year: this.assetsUtils.currentDate().split('/')[2]-543,
              user_id: parseInt(localStorage.getItem('user_id')),
            })
            .then((response) => {
              this.showLoading = false
              item.department_dest_id.filter(item2 => {
                data.booking_registers.push({
                  book_out_num: response.data.data.out_document_number,
                  greeting: '',
                  department_dest_id: item2.value,
                  main_filename: '',
                  attach_filename: '',
                  signer_id: '',
                  is_signed: false,
                  flag: 'add',
                  optionSelect: {
                    signer_id: this.optionSelectDefault.signer_id,
                    department_dest_id: [...this.optionSelectDefault.department_dest_id, item2]
                  },
                  response_type: item2.type,
                  response_id: item2.id
                })
              })
            }).catch((error) => {
              this.showLoading = false
              this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            for (let i = 0; i < item.department_dest_id.length; i++) {
              let item2 = item.department_dest_id[i]
              this.showLoading = true
              await this.axios.post(`/booking-out/generate-number-draft`, {
                department_id: parseInt(localStorage.getItem('department_id')), 
                year: this.assetsUtils.currentDate().split('/')[2]-543,
                user_id: parseInt(localStorage.getItem('user_id')),
              })
              .then((response) => {
                this.showLoading = false
                data.booking_registers.push({
                  book_out_num: response.data.data.out_document_number,
                  greeting: '',
                  department_dest_id: item2.value,
                  main_filename: '',
                  attach_filename: '',
                  signer_id: '',
                  is_signed: false,
                  flag: 'add',
                  optionSelect: {
                    signer_id: this.optionSelectDefault.signer_id,
                    department_dest_id: [...this.optionSelectDefault.department_dest_id, item2]
                  },
                })
              }).catch((error) => {
                this.showLoading = false
                this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
              })
            }
          }
        } else {
          this.showLoading = true
          await this.axios.post(`/booking-out/generate-number-draft`, {
            department_id: parseInt(localStorage.getItem('department_id')), 
            year: this.assetsUtils.currentDate().split('/')[2]-543,
            user_id: parseInt(localStorage.getItem('user_id')),
          })
          .then((response) => {
            this.showLoading = false
            data.booking_registers.push({
              book_out_num: response.data.data.out_document_number,
              greeting: '',
              department_dest_id: '',
              main_filename: '',
              attach_filename: '',
              signer_id: '',
              is_signed: false,
              flag: 'add',
              optionSelect: {
                signer_id: this.optionSelectDefault.signer_id,
                department_dest_id: this.optionSelectDefault.department_dest_id
              },
            })
          })
        }
        this.data.booking_register_details.push(data)
      }
      this.modalRegiter.showModal = false
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
            fileAttachments.push({...this.data.attachments.filter(el => el.file)[index], ...item.data.data, filepath: item.data.data.path})
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
    upload_file_all2(data) {
      let currentDate = this.assetsUtils.currentDate()
      let completeFile = []
      this.data.booking_register_details.filter(item => {
        let completeFile2 = []
        item.booking_registers.filter(item2 => {
          let check_main = false
          let check_attach = false
          if (item2.main_file && item2.main_filename) {
            let formDataFile = new FormData();
            formDataFile.append('file', item2.main_file);
            formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
            this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}})
            .then((responses) => {
              item2.main_filepath = responses.data.data.path
              check_main = true
              if (check_main && check_attach) {
                completeFile2.push(true)
                if (completeFile2.length == item.booking_registers.length) {
                  completeFile.push(true)
                }
                if (completeFile.length == this.data.booking_register_details.length) {
                  this.upload_file_all3(data)
                }
              }
            }).catch((error) => {
              this.showLoading = false
              this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            check_main = true
          }
          if (item2.attach_file && item2.attach_filename) {
            let formDataFile = new FormData();
            formDataFile.append('file', item2.attach_file);
            formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
            this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}})
            .then((responses) => {
              item2.attach_filepath = responses.data.data.path
              check_attach = true
              if (check_main && check_attach) {
                completeFile2.push(true)
                if (completeFile2.length == item.booking_registers.length) {
                  completeFile.push(true)
                }
                if (completeFile.length == this.data.booking_register_details.length) {
                  this.upload_file_all3(data)
                }
              }
            }).catch((error) => {
              this.showLoading = false
              this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          } else {
            check_attach = true
          }
          if (!item2.main_file && !item2.attach_file) {
            completeFile2.push(true)
            if (completeFile2.length == item.booking_registers.length) {
              completeFile.push(true)
            }
            if (completeFile.length == this.data.booking_register_details.length) {
              this.upload_file_all3(data)
            }
          }
        })
        if (item.booking_registers.length < 1) {
          completeFile.push(true)
          if (completeFile.length == this.data.booking_register_details.length) {
            this.upload_file_all3(data)
          }
        }
      })
    },
    upload_file_all3(data) {
      let currentDate = this.assetsUtils.currentDate()
      if (this.data.sendToFile?.filename) {
        let formDataFile = new FormData();
        formDataFile.append('file', this.data.sendToFile.file);
        formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
        this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}})
        .then((response) => {
          this.data.attach_filename = response.data.data.filename
          this.data.attach_filepath = response.data.data.path
          this.upload_file_all4(data)
        }).catch((error) => {
          this.showLoading = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      } else {
        this.upload_file_all4(data)
      }
    },
    upload_file_all4(data) {
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
            this.call_api_save(data)
          }
        })).catch((error) => {
          this.showLoading = false
          this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        })
      } else {
        this.call_api_save(data)
      }
    },
    call_api_save(data) {
      let _this = this
      let fileAttachments = data
      this.data.attachments.filter(item => {
        if (item.flag == 'delete') {
          fileAttachments.push(item)
        }
      })
      let tag = ''
      this.data.tag.filter(item => {
        tag += item.name+','
      })
      tag = tag.slice(0, -1)
      this.data.sendTo.filter(item => {
        if (!this.data.booking_follows.some(el => el.department_id === item.value && el.flag != 'delete')) {
          let data = {
            ...item,
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
        attachments: fileAttachments,
        booking_refers: this.data.booking_refers.filter(el => el.book_refer_id),
        booking_follows: this.data.booking_follows,
        booking_register_details: this.data.booking_register_details.filter(item => {
          item.signer_id = item.signer_id ? parseInt(item.signer_id) : null
          item.optionSelect.signer_id = []
          item.booking_registers.filter(item2 => {
            item2.signer_id = item2.signer_id ? parseInt(item2.signer_id) : null
            item2.department_dest_id = item2.department_dest_id ? parseInt(item2.department_dest_id) : null
            if (item2.department_dest_id) {
              item2.optionSelect.department_dest_id.find(item3 => {
                if(item3.value == item2.department_dest_id) {
                  item2.human_flag = item3.human_flag 
                  item2.response_type = item3.type
                  item2.response_id = item3.id
                }
              })
            } else {
              item2.response_type = 1
            }
            return item2
          })
          return item
        }),
        flag: this.flagSave == 1 ? 'draft' : this.flagSave == 2 ? '' : this.flagSave == 3 ? 'update' : this.flagSave == 5 ? 'update_send_to' : this.flagSave == 6 ? 'update_send_style' : (this.flagSave == 4 && this.edit) ? 'update' : 'draft',
        is_draft: this.flagSave == 1 ? 1 : this.flagSave == 3 && this.data.is_draft == 1 ? 1 : 0,
        is_show_send_style_button: this.flagSave == 5 || this.data.is_show_send_style_button
      }
      dataSave = JSON.parse(JSON.stringify(dataSave))
      dataSave.booking_register_details.filter(item => {
        item.booking_registers.filter(item2 => {
          item2.optionSelect = {}
        })
      })
      this.showLoading = true
      this.axios[this.edit ? 'put' : 'post'](`/booking-out${this.edit ? '/' + this.$route.params.id : ''}`, dataSave)
      .then((response) => { 
        this.showLoading = false
        if (this.flagSave != 4 && this.flagSave != 5 && this.flagSave != 6) {
          this.modalAlert = {showModal: true, type: 'success', title: this.flagSave == 1  ? 'ทำการบันทึกแบบร่างสำเร็จแล้ว' : this.flagSave == 3  ? 'ทำการบันทึกสำเร็จแล้ว' : 'ทำการบันทึกและส่งต่อสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.checkPage(response) }}
        } else {
          this.checkPage(response)
        }
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    checkPage(response) {
      this.clear_data()
      if (this.edit) {
        this.api_detail()
      } else {
        this.$router.push({ 
          name: 'subministry-work.booking-out-edit',
          params: {id: response.data.data.id},
          query: {
            page: this.$route.query.page,
            perPage: this.$route.query.perPage
          }
        }).catch(()=>{});
        if (response.data.data.id) {
          this.edit = true
          this.api_detail(response.data.data.id)
        }
      }
    },
    api_detail(id) {
      this.showLoading = true
      this.axios.get(`/booking-out/${id ? id : this.$route.params.id}`)
      .then((response) => { 
        this.showLoading = false
        this.data = {...this.data, ...JSON.parse(JSON.stringify(response.data.data))}
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
        let button_send_bookout = []
        this.data.booking_register_details.filter(item=>{
          item.optionSelect = {signer_id: this.optionSelectDefault.signer_id}
          item.signer_id = ''
          item.num = '1'
          item.flag = 'edit'
          item.booking_registers.filter(item2 => {
            if (item2.is_real_book_out_num && item2.department_dest_id && item2.is_signed) {
              button_send_bookout.push(true)
            } else {
              button_send_bookout.push(false)
            }
            item2.optionSelect = {signer_id: this.optionSelectDefault.signer_id, department_dest_id: this.optionSelectDefault.department_dest_id}
            item2.flag = 'edit'
            item2.main_link = item2.main_filepath? this.backendport+'/'+item2.main_filepath : ''
            item2.attach_link = item2.attach_filepath ? this.backendport+'/'+item2.attach_filepath : ''
            item2.signer_id = item2.signer_id == 0 ? '' : item2.signer_id
            item2.send_style_desc = this.modalSend.optionSelect.send_style.filter(row=>row.value == item2.send_style_id)[0]?.name || ''
            item2.department_dest_id = item2.department_dest_id == 0 ? '' : item2.department_dest_id
            return item2
          })
          return item
        })
        this.button_send_bookout = button_send_bookout.every(status => status)
        this.data.attachments.filter(item => {
          item.flag = 'edit'
          item.link = item.filepath ? this.backendport+'/'+item.filepath : ''
          return item
        })
        this.data.booking_follows.filter(item => {
          item.flag = 'edit'
          return item
        })
        this.data.booking_follows = []
        if (response.data.data.booking_refers?.length < 1 || !response.data.data.booking_refers) 
        this.data.booking_refers = [{ 
          receive_document_number: '', 
          desc: '', 
          receive_date: '', 
          book_refer_id: '', 
          original_refer_id: '', 
          book_type: '', 
          flag: 'add'
        }]
        if (this.data.attachments.length < 1 || !this.data.attachments) this.data.attachments = [{ filename: '', flag: 'add'}]
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    api_master() {
      this.showLoading = true
      const request1 = this.axios.get(`/master-data/book-type`, {
        params: {
          book_type : 1
        }
      })
      const request2 = this.axios.get(`/master-data/speed`)
      const request3 = this.axios.get(`/master-data/secret`)
      const request4 = this.axios.get(`/master-data/process-type`)
      const request5 = this.axios.get(`/master-data/permission-type`)
      const request6 = this.axios.get(`/user`)
      const request7 = this.axios.get(`/user/signer?user_id=${localStorage.getItem('user_id')}&department_id=${parseInt(localStorage.getItem('department_id'))}`)
      const request8 = this.axios.get(`/master-data/book-category` ,{
        params: {
          book_type : 2
        }
      })
      const request9 = this.axios.get(`/master-data/department-user?type=1`)
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
          row.name = row.name
          return row
        })
        response9.data.data.filter(item => {
          item.value = item.id
          item.name = item.desc
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
        this.optionSelectDefault.regis_id = response8.data.data
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
    keyup_book_type(e) {
      this.axios.get('/master-data/book-type', {
        params: {
          keyword: e.target.value,
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.filter(item => {
            item.value = item.id
            item.name = item.desc
            return item
          })
          this.optionSelect.book_type_id = response.data.data
        }
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
      }

      .line {
        height: 2px;
        width: 100%;
        background-color: #e2ebf7;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      .add-send {
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
        margin: 20px 15px 20px 0px;
        padding: 0 12px;

        .bi-send {
          font-size: 18px;
          margin-right: 10px;
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
        min-width: 45px;
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
            margin-right: 20px;
          }

          .button-save {
            width: 120px;
            margin-right: 20px;
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

    .modal-send {
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

              .group-head {
                justify-content: space-between;
                align-items: center;
                margin: 0px 23px 20px;
                display: flex;
              }

              .col-checkbox {
                width: 50px;
              }

              .col-start {
                width: 100px;
              }

              .col-center {
                width: 100%;

                .span {
                  margin-right: 30px;
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

                  .checkbox {
                    width: 70px;
                  }

                  .index {
                    width: 100px;
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