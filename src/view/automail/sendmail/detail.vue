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
                  <cpn-input  v-model="data.bookout.book_type_name"
                              name="bookout.book_type_name"
                              :disabled="true"
                              placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input">
                  <div class="name">ทะเบียน</div>
                  <cpn-input  v-model="data.bookout.book_regis_name"
                              name="bookout.book_regis_name"
                              :disabled="true"
                              placeholder="กรุณาระบุ" />
                </div>
              </div>
              <div class="group-between">
                <div class="group-input">
                  <div class="name">ชั้นความลับ</div>
                  <cpn-input  v-model="data.bookout.secret_name"
                              name="bookout.secret_name"
                              :disabled="true"
                              placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input">
                  <div class="name">ความเร่งด่วน</div>
                  <cpn-input  v-model="data.bookout.speed_name"
                              name="bookout.speed_name"
                              :disabled="true"
                              placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input">
                  <div class="name">เลขที่ออก สลค.</div>
                  <cpn-input  v-model="data.bookout.book_out_document_number"
                              name="bookout.book_out_document_number"
                              :disabled="true"
                              placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input">
                  <div class="name">ลงวันที่</div>
                  <cpn-input  v-model="data.bookout.as_of_date"
                              name="bookout.as_of_date"
                              :disabled="true"
                              placeholder="กรุณาระบุ" />
                </div>
              </div>
              <div class="group-between">
                <div class="group-input">
                  <div class="name">จากสังกัด/กอง</div>
                  <cpn-input  v-model="data.bookout.from"
                              name="bookout.from"
                              :disabled="true"
                              placeholder="กรุณาระบุ" />
                </div>
                <div class="group-input">
                  <div class="name">ถึง</div>
                  <cpn-input  v-model="data.bookout.to"
                              name="bookout.to"
                              :disabled="true"
                              placeholder="กรุณาระบุ" />
                </div>
              </div>
              <div class="group-between">
                <div class="group-input">
                  <div class="name">ชื่อเรื่อง</div>
                  <cpn-input  v-model="data.bookout.subject"
                              name="bookout.subject"
                              :disabled="true"
                              placeholder="กรุณาระบุ" />
                </div>
              </div>
            </div>
            <div v-if="step == 1">
              <div class="group-input mt-4">
                <div class="name">คำขึ้นต้น <span class="required">*</span></div>
                <div class="group-recommend mb-3">
                  <cpn-input v-model="data.greeting"
                              name="greeting"
                              class="input-recommend"
                              rules="required"
                              placeholder="กรุณาระบุ" />
                  <button type="button" class="button-recommend" @click="recommendClick()">
                    <i class="bi bi-question icon-question"></i>
                    แนะนำ
                  </button>
                </div>
              </div>
              <div class="group-input">
                <div class="name">เรียน <span class="required">*</span></div>
                <cpn-input  v-model="data.bookout.greeting"
                            name="bookout-greeting"
                            rules="required"
                            placeholder="ผู้รับหนังสือ" />
              </div>
              <div class="group-input">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div class="name">ข้อความ <span class="required">*</span></div>
                  <div>
                    <button type="button" class="button-template" @click="templateClick()" v-show="false">
                      <i class="bi bi-question icon-question"></i>
                      เลือกเทมเพลต
                    </button>
                  </div>
                </div>
                <cpn-textArea v-model="data.message"
                              name="message"
                              rows="15"
                              rules="required"
                              placeholder="เนื้อความจดหมาย" />
              </div>
              <div class="group-input">
                <div class="name">รายละเอียดตามเอกสารที่ส่งมาด้วย <span class="required">*</span></div>
                <cpn-textArea v-model="data.detail"
                              name="detail"
                              rules="required"
                              rows="2"
                              placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">คำลงท้าย <span class="required">*</span></div>
                <cpn-input  v-model="data.signature"
                            name="signature"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ชื่อหน่วยงานที่ส่งหนังสือ <span class="required">*</span></div>
                <cpn-input  v-model="data.department_name"
                            name="department_name"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ข้อมูลผู้ติดต่อ <span class="required">*</span></div>
                <div class="mb-3">
                  <cpn-input  v-model="data.contact_name"
                              name="contact_name"
                              rules="required"
                              placeholder="ชื่อส่วนราชการเจ้าของเรื่องหรือหน่วยงานที่ออกหนังสือ" />
                </div>
                <cpn-input  v-model="data.contact"
                            name="contact"
                            rules="required"
                            placeholder="เบอร์โทร และชื่อผู้ติดต่อ" />
              </div>
              <div class="group-input">
                <div class="name">ข้อความใต้เส้นปิดข้อความ</div>
                <div class="line"></div>
              </div>
              <div class="group-input">
                <div class="name">ข้อความขอให้ตอบกลับ <span class="required">*</span></div>
                <cpn-input  v-model="data.reply_message"
                            name="reply_message"
                            rules="required"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">Disclaimer <span class="required">*</span></div>
                <cpn-textArea v-model="data.disclaimer"
                              name="disclaimer"
                              rules="required"
                              rows="15"
                              placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div v-if="step == 2">
              <div class="sum-size-file">
                <span>ขนาดไฟล์รวม {{sumfile()}}MB (อนุญาตให้แนบไฟล์รวมกันสูงสุด 25MB)</span>
              </div>
              <div class="group-input">
                <div class="name">วิธีการส่งไฟล์ <span class="required">*</span></div>
                <cpn-select v-model="data.send_type_id"
                            name="send_type_id"
                            rules="required"
                            :optionSelect="optionSelect.send_type_id"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ลิงก์ดาวน์โหลดเอกสาร</div>
                <div class="group-recommend">
                  <cpn-input v-model="data.link"
                              name="link"
                              class="input-link"
                              :disabled="data.send_type_id == 1"
                              placeholder="กรุณาระบุ" />
                  <button type="button" class="button-link none-pointer">
                    <i class="bi bi-link-45deg icon-question"></i>
                  </button>
                </div>
              </div>
              <div class="group-input">
                <div class="name">หนังสือต้นเรื่อง</div>
                <div class="d-flex" v-if="data.main_file_name">
                  <cpn-input  v-model="data.main_file_name"
                              name="main_file_name"
                              :disabled="true"/>
                  <button type="button" class="button-view" @click="previewFile({filename: data.main_file_name, link: data.main_file_link})">
                    <i class="bi bi-eye icon-eye"></i>
                  </button>
                </div>
                <div v-else>
                  <cpn-input  v-model="no_main_file_name"
                              name="no_main_file_name"
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
                <div class="d-flex mb-2" v-if="data.copy_main_file_name">
                  <cpn-input  v-model="data.copy_main_file_name"
                              name="copy_main_file_name"
                              :disabled="true"/>
                  <button type="button" class="button-view" @click="previewFile({filename: data.copy_main_file_name, link: data.copy_file_link})">
                    <i class="bi bi-eye icon-eye"></i>
                  </button>
                </div>
                <div v-for="(item, index) in data.attachments.filter(el => el.flag != 'delete')" :key="index" v-if="data?.attachments?.length > 0 || data.copy_main_file_name">
                  <div class="d-flex mb-2">
                    <cpn-input  v-model="item.filename"
                                :name="'filename'+index"
                                :disabled="true"/>
                    <button type="button" class="button-view" @click="previewFile(item)">
                      <i class="bi bi-eye icon-eye"></i>
                    </button>
                    <button type="button" class="button-del" @click="deleteFile(item, index)"  v-show="!item.original_flag">
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
            <div v-if="step == 3">
              <div class="group-input mt-4">
                <div class="name">Subject / Mail <span class="required">*</span></div>
                <cpn-input  v-model="data.subject"
                            name="subject"
                            rules="required"
                            placeholder="เรื่อง" />
              </div>
              <div class="group-input mt-4">
                <div class="name">ถึง / To <span class="required">*</span> (สามารถระบุได้มากกว่า 1 อีเมล โดยคั่นแต่ละอีเมลด้วยสัญลักษณ์ ,)</div>
                <cpn-input  v-model="data.to"
                            name="to"
                            rules="required"
                            placeholder="อีเมลผู้รับจดหมาย" />
              </div>
              <div class="group-input mt-4">
                <div class="name">สำเนาถึง / Cc (สามารถระบุได้มากกว่า 1 อีเมล โดยคั่นแต่ละอีเมลด้วยสัญลักษณ์ ,)</div>
                <cpn-input  v-model="data.cc"
                            name="cc"
                            placeholder="อีเมลผู้รับจดหมาย" />
              </div>
              <div class="group-input mt-4">
                <div class="name">สำเนาลับถึง / BCc (สามารถระบุได้มากกว่า 1 อีเมล โดยคั่นแต่ละอีเมลด้วยสัญลักษณ์ ,)</div>
                <cpn-input  v-model="data.bcc"
                            name="bcc"
                            placeholder="อีเมลผู้รับจดหมาย" />
              </div>
              <div class="group-input mt-4">
                <div class="name d-flex justify-content-between align-items-center mb-3 mt-3">
                  <div>ตัวอย่างข้อความ</div>
                  <button type="button" class="button-reload" @click="reloadClick()" v-show="false">
                    <i class="bi bi-arrow-clockwise icon-clockwise"></i>
                    โหลดใหม่
                  </button>
                </div>
                <div class="border-preview">
                  <table bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; background-color: #ffffff; width: 100%;" valign="top" width="100%">
                    <tbody>
                      <tr style="vertical-align: top;" valign="top">
                        <td style="word-break: break-word; vertical-align: top;" valign="top">
                          <div style="background-color:#ffffff;">
                            <div class="block-grid" style="min-width: 320px; max-width: 680px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; margin: 0 auto; background-color: transparent;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                <div class="col num12" style="min-width: 320px; max-width: 680px; display: table-cell; vertical-align: top; width: 680px;">
                                  <div class="col_cont" style="width:100% !important;">
                                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                      <div align="center" class="img-container center fixedwidth" style="padding-right: 0px;padding-left: 0px; margin-top:40px;">
                                        <a href="#" style="outline:none" tabindex="-1" target="_blank"> 
                                          <img align="center" alt="" border="0" class="center fixedwidth" :src="data.logoImage" width="110" style="text-decoration: none; height: auto; border: 0px; width: 100%; max-width: 110px; display: block;" />
                                        </a>
                                      </div>
                                      <div style="color:#666; font-family: 'Arial', sans-serif; line-height:1.5; padding-top:10px; padding-right:10px; padding-bottom:10px; padding-left:10px;">
                                        <div style="line-height: 2.0; font-size: 12px; color: #15466e; font-family: Arial, sans-serif; margin-bottom: 20px;">
                                          <p style="font-size: 14px; line-height: 2.0; word-break: break-word; text-align: center; margin: 0;"><strong><span style="font-size: 16px; font-weight: 500;">พีเคเอ็ม คอนซัลติ้ง กรุ๊ป จำกัด</span></strong></p>
                                          <p style="font-size: 14px; line-height: 1.0; word-break: break-word; text-align: center; margin: 0;"><strong><span style="font-size: 14px; font-weight: 400;">ระบบสารบรรณอิเล็กทรอนิกส์</span></strong></p>
                                        </div>
                                        <div style="color:#666; font-family: 'Arial', sans-serif; line-height:1.5; padding-top:10px; padding-right:10px; padding-bottom:10px; padding-left:10px;">
                                          <div style="line-height: 2.0; font-size: 12px; color: #15466e; font-family: Arial, sans-serif; margin-bottom: 5px;">
                                            <p style="font-size: 14px; line-height: 2.0; word-break: break-word; text-align: left; margin: 0;">
                                              <strong><span style="font-size: 20px; font-weight: 600;">{{ data.greeting }} {{ data.bookout.greeting }}</span></strong>
                                            </p>
                                          </div>
                                          <div style="line-height: 1.5; font-size: 12px; color: #333333; font-family: Arial, sans-serif;">
                                            <p style="font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; margin: 0;">
                                              {{ data.message }}
                                            </p>
                                          </div>
                                          <br>
                                          <div style="line-height: 1.5; font-size: 12px; color: #333333; font-family: Arial, sans-serif;" v-show="data.send_type_id != 1">
                                            <p style="font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; margin: 0;">
                                              <a :href="data.link" title="ลิงก์ดาวน์โหลดเอกสาร">{{ data.link }}</a>
                                            </p>
                                          </div>
                                          <div style="line-height: 2.0; font-size: 12px; color: #333333; font-family: Arial, sans-serif; margin-bottom: 5px; margin-top: 20px;">
                                            <p style="font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; margin: 0; ">
                                              {{ data.detail }}
                                            </p>
                                          </div>
                                          <div style="line-height: 2.0; font-size: 12px; color: #333333; font-family: Arial, sans-serif; margin-bottom: 20px; margin-top: 20px;">
                                            <p style="font-size: 16px; line-height: 2.0; word-break: break-word; text-align: left; margin: 0; text-indent: 50px">
                                              {{ data.signature }} 
                                            </p>
                                            <p style="font-size: 16px; line-height: 2.0; word-break: break-word; text-align: left; margin: 0;">
                                              {{ data.department_name }}
                                            </p>
                                          </div>
                                          <div style="line-height: 2.0; font-size: 12px; color: #333333; font-family: Arial, sans-serif; margin-bottom: 20px; margin-top: 20px; border-bottom: #030303 dashed 1px; padding-bottom: 15px;">
                                            <p style="font-size: 16px; line-height: 2.0; word-break: break-word; text-align: left; margin: 0;">
                                              {{ data.contact_name }}
                                            </p>
                                            <p style="font-size: 16px; line-height: 2.0; word-break: break-word; text-align: left; margin: 0;">
                                              {{ data.contact }}
                                            </p>
                                          </div>
                                          <div style="line-height: 2.0; font-size: 12px; color: #333333; font-family: Arial, sans-serif; margin-bottom: 20px; margin-top: 20px;">
                                            <p style="font-size: 16px; line-height: 2.0; word-break: break-word; text-align: left; margin: 0; margin-bottom: 15px;">
                                              {{ data.reply_message }}
                                            </p>
                                            <p id="Disclaimer" style="font-size: 15px; line-height: 2.0; color: #15466e; font-style: italic; word-break: break-word; text-align: left; margin: 0;  margin-bottom: 10px" v-html="data.disclaimer"></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
      step: 1,
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
        bookout: {
          book_type_name: '',
          book_regis_name: '',
          secret_name: '',
          speed_name: '',
          book_out_document_number: '',
          as_of_date: '',
          from: '',
          to: '',
          subject: '',
          greeting: ''
        },
        greeting: '',
        message: '',
        detail: '',
        signature: '',
        department_name: '',
        contact_name: '',
        contact: '',
        reply_message: '',
        disclaimer: '',
        send_type_id: '',
        link: '',
        main_file_name: '',
        copy_main_file_name: '',
        attachments: [],
        subject: '',
        to: '',
        cc: '',
        bcc: '',
        fileType: [],
        logoImage: new URL(`@/assets/images/default/department.png`, import.meta.url).href
      },
      no_main_file_name: 'ไม่มีหนังสือต้นเรื่อง',
      no_attachments: 'ไม่มีสิ่งที่แนบมาด้วย',
      optionSelect: {
        send_type_id: [{value: 1, name: 'แนบไฟล์ทั้งหมด ตามข้างล่างนี้'}, {value: 2, name: 'ไม่แนบไฟล์ แต่ใช้ลิงก์ข้างล่างนี้แทน'}]
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
            if ((+this.sumfile() + +(file.size /1024 /1024).toFixed(2)) <= 25) { 
              let dataFile = {
                filename: file.name,
                type: file.type,
                link: URL.createObjectURL(file),
                size: (file.size /1024 /1024).toFixed(2) + ' MB',
                file_size: file.size,
                file: file,
                flag: 'add',
                original_flag: false
              }
              this.data.attachments.push(dataFile)
            } else {
              this.modalAlert = {showModal: true, type: 'error', message: 'ขนาดไฟล์รวมเกิน 25MB'}
              document.querySelector(`[name="${data}"]`).value=null;
            }
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
      size += this.data.copy_main_file_size ? +this.data.copy_main_file_size : 0
      size += this.data.main_file_size ? + this.data.main_file_size : 0
      this.data.attachments?.filter(row => {
        size += +row.file_size
      })
      return (size /1024 /1024).toFixed(2)
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
      this.axios.get('/master-data/message-template', {
        params: {
          keyword: e.target.value,
        }
      })
      .then((response) => {
        if(response.data.data) {
          response.data.data.meta.filter(item => {
            item.value = item.id
            item.name = item.receive_name
            return item
          })
          this.modal.optionSelect.book_recipient = response.data.data.meta
        }
      })
    },
    modalClick() {
      if (this.modal.book_recipient) {
        this.axios.get(`/master-data/message-template/${this.modal.book_recipient}`, {
          params: {
            keyword: this.modal.book_recipient,
          }
        })
        .then((response) => {
          this.data.greeting = response.data.data.title_name
          this.data.bookout.greeting = response.data.data.receive_person_name
          this.data.signature = response.data.data.signature
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
      // this.axios.get('/master-data/subministry', {
      //   params: {
      //     keyword: e.target.value,
      //   }
      // })
      // .then((response) => {
      //   if(response.data.data) {
      //     response.data.data.filter(item => {
      //       item.value = item.id
      //       return item
      //     })
      //     this.modalTemplate.optionSelect.message_format = response.data.data
      //   }
      // })
      this.modalTemplate.optionSelect.message_format = [{value:'1', name: '01: ขอนำส่งหนังสือ'}]
    },
    modalTemplateClick() {
      if (this.modalTemplate.message_format) {
        // this.axios.get('/master-data/subministry', {
        //   params: {
        //     keyword: this.modalTemplate.message_format,
        //   }
        // })
        // .then((response) => {
          this.data.message = 'ขอนำส่งหนังสือ เลขที่ นร0501/48, เรื่อง ทดสอบ, ลงวันที่ 14 กุมภาพันธ์ 2566'
          this.data.detail = 'รายละเอียดตามเอกสารที่ส่งมาด้วย'
          this.data.department_name = 'สำนักเลขาธิการคณะรัฐมนตรี'
          this.data.contact = 'โทร. 0 2280 9000 ต่อ .... (ชื่อผู้ติดต่อ ...)'
          this.data.reply_message = '“หากท่านได้รับอีเมลนี้แล้วกรุณาแจ้งการได้รับกลับมายังที่อยู่อีเมลนี้ด้วยจะขอบคุณยิ่ง”'
          this.data.disclaimer = '**อีเมล(และ/หรือเอกสารแนบ) นี้เป็นข้อมูลที่เป็นความลับและอาจเป็นข้อมูลที่เป็นเอกสิทธิ์เฉพาะบุคคล การนำข้อมูลดังกล่าวไปใช้หรือเปิดเผยให้บุคคลอื่นใดล่วงรู้เป็นการกระทำที่ไม่ได้รับอนุญาติหากท่านมิได้เป็นบุคคลที่อีเมลฉบับนี้ระบุถึงแล้ว กรุณาลบอีเมลนี้ออกจากคอมพิวเตอร์ที่ท่านได้รับทั้งนี้ ขอขอบคุณหากท่านได้แจ้งผู้ส่งถึงการจัดส่งอีเมลที่ผิดพลาดด้วย\r\n**This e-mail (and/or attachments) is confidential and may be privileged. Use or disclosure of it by anyone other than a designated address is unauthorized. If you are not intented recipient, please deleate this e-mail from computer on which you received it. We thank you for notifying us immediately.'
          this.modalTemplate.showModal = false
        // })
        // .catch((error) => {
        //   this.modalTemplate.showModal = false
        //   this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
        // })
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
        title: `คุณยืนยันการ${this.flag == 1 ? 'บันทึกร่าง' : 'บันทึกและส่ง'}หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          _this.showLoading = true
          _this.uploadFileAll()
        }
      }
    },
    uploadFileAll() {
      let currentDate = this.assetsUtils.currentDate()
      let axiosArray = []
      let fileAttachments = []
      this.data.attachments.filter(item=> {
        if (item.file && item.flag == 'add') {
          axiosArray.push(true)
        }
      })
      if (axiosArray.length > 0) {
        this.data.attachments.filter(item=> {
          if (item.file && item.flag == 'add') {
            let formDataFile = new FormData();
            formDataFile.append('file', item.file);
            formDataFile.append('dst', `${currentDate.split('/')[0]+'-'+currentDate.split('/')[1]+'-'+currentDate.split('/')[2]}`)
            this.axios.post(`/upload/single`, formDataFile, {headers: {'Content-Type': 'multipart/form-data'}})
            .then((response) => {
              item.filename = response.data.data.filename
              item.filepath = response.data.data.path
              fileAttachments.push(true)
              if (axiosArray.length == fileAttachments.length) {
                this.callApiSave()
              }
            }).catch((error) => {
              this.showLoading = false
              this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
            })
          }
        })
      } else {
        this.callApiSave()
      }
    },
    callApiSave() {
      this.showLoading = true
      let _this = this
      let dataSave = {
        ... this.data,
        greeting2: this.data.bookout.greeting,
        is_draft: this.flag == 1,
        flag: this.flag == 1 ? 'draft' : '',
        user_id: parseInt(localStorage.getItem('user_id'))
      }
      this.axios.post(`/book-out-external/email-information`, dataSave)
      .then((response) => { 
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'success', title: this.flag == 1 ? 'ทำการบันทึกร่างสำเร็จแล้ว' : 'ทำการบันทึกและส่งสำเร็จแล้ว', msgSuccess: true, afterPressAgree() { _this.apiDetail() }}
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    apiDetail() {
      this.showLoading = true
      this.axios.get(`/book-out-external/book-out-automail/${this.$route.params.id}`)
      .then((response) => { 
        this.showLoading = false
        this.data = {...this.data, ...response.data.data}
        this.data.main_file_link = this.data.main_file_path ? this.backendport+'/'+this.data.main_file_path : ''
        this.data.copy_file_link = this.data.copy_file_path ? this.backendport+'/'+this.data.copy_file_path : ''
        this.data.attachments.filter(item => {
          item.flag = 'edit'
          item.link = item.filepath ? this.backendport+'/'+item.filepath : ''
          item.file_size = parseInt(item.file_size)
          item.file = {
            size: item.file_size * 1024 * 1024
          }
          return item
        })

         this.axios({
          method:'get',
          url: this.backendport+'/'+localStorage.getItem('filepath'),
          baseURL: '',
          responseType: 'blob',
        })
        .then(response2 => {
          const blob = new Blob([response2.data], { type: this.assetsUtils.getTypeFile(localStorage.getItem('filename')) })
          this.data.logoImage = URL.createObjectURL(blob)
        })
        .catch((error) => {
          this.data.logoImage = new URL(`@/assets/images/default/department.png`, import.meta.url).href
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
        this.apiDetail()
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
    'modal.showModal' () {
      document.body.style.overflow = this.modal.showModal ? 'hidden' : ''
    },
    'modalTemplate.showModal' () {
      document.body.style.overflow = this.modalTemplate.showModal ? 'hidden' : ''
    }
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
        border-color: #dae5f5 !important;
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
          border: 1px solid #dae5f5 !important;
          border-radius: 5px;
          padding: 2px;
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