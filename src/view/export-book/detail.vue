<template>
  <div class="department-detail">
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
                <cpn-radio  v-model="data.myBook"
                            name="my1"
                            class=""
                            style="min-width: 120px;"
                            value="1"
                            label="สร้างเอง"
                            @change="data.username = ''" />
                        
                <cpn-radio  v-model="data.myBook"
                            name="my2"
                            class="ms-5 me-5"
                            style="min-width: 120px;"
                            value="2"
                            label="สร้างแทน"
                            @change="data.username = ''" />

              <div class="group-input mb-0" v-show="data.myBook == 2">
                <div class="name">ชื่อ - นามสกุล <span class="required">*</span></div>
                <cpn-input  v-model="data.username"
                            name="username"
                            :rules="data.myBook == 2 ? 'required' : ''"
                            placeholder="กรุณาระบุ" />
              </div>
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ประเภท <span class="required">*</span></div>
                <cpn-select v-model="data.type"
                            name="type"
                            rules="required"
                            :optionSelect="optionSelect.type"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ชนิดของหนังสือ <span class="required">*</span></div>
                <cpn-autoComplete v-model="data.typeBook"
                                  name="typeBook"
                                  rules="required"
                                  :optionSelect="optionSelect.typeBook"
                                  placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-between">
              <div class="group-input left">
                <div class="name">ชั้นความลับ <span class="required">*</span></div>
                <cpn-select v-model="data.secret"
                            name="secret"
                            rules="required"
                            :optionSelect="optionSelect.secret"
                            placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">ความเร่งด่วน <span class="required">*</span></div>
                <cpn-select v-model="data.level"
                            name="level"
                            rules="required"
                            :optionSelect="optionSelect.level"
                            placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-input d-flex align-items-center">
              <div class="name">อ้างอิงถึง</div>
              <button type="button" class="add-export-book" @click="addRefersClick()">
                <div class="group-image">
                  <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                  เพิ่มเอกสารอ้างอิง
                </div>
              </button>
            </div>
            <div class="group-between" v-for="(item, index) in data.refers" :key="index">
              <div class="group-input left">
                <cpn-input  v-model="item.code"
                            :name="`codeRefers${index}`"
                            type="search"
                            :searchFlag="true"
                            @searchClick="searchClick(item)"
                            placeholder="เลขที่หนังสืออ้างอิง" />
              </div>
              <div class="group-input left">
                <cpn-input  v-model="item.name"
                            :name="`nameRefers${index}`"
                            :disabled="true"
                            placeholder="ชื่อเรื่อง" />
              </div>
              <div class="group-input d-flex">
                <cpn-datepicker v-model="item.date"
                                :name="`dateRefers${index}`"
                                :disabled="true"
                                placeholder="วันที่รับหนังสือ" />
                <button type="button" @click="data.refers.length > 1 ? data.refers.splice(index,1) : ''" class="button-delete ms-3"><img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer"></button>
              </div>
            </div>
            <div class="group-input">
              <div class="name">ชื่อเรื่อง</div>
              <cpn-textArea v-model="data.name"
                            name="name"
                            rows="1" />
            </div>
          </div>
          <div class="line"></div>
          <div class="d-flex justify-content-end">
            <button type="button" class="add-register" :disabled="(!data.type || !data.typeBook || !data.secret || !data.level)" @click="addRegister()">
                <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                เพิ่มทะเบียน
            </button>
          </div>
          <div class="group-detail-2" v-for="(item, index) in data.set" :key="index">
            <div class="d-flex">
              <div class="col-start">ชุดที่ #{{index+1}}</div>
              <div class="col-center">
                <div class="row">
                  <div class="col-lg-auto col-md-auto mb-3">
                    <span class="span">การออกเลข : {{item.issuingNumbers}}</span><span>รูปแบบการส่ง : {{item.deliveryFormat}}</span>
                  </div>
                  <div class="group-date col-lg-auto col-md-auto mb-3">
                    <div class="name">ลงวันที่ :</div>
                    <cpn-datepicker v-model="item.date"
                                    :name="`dateAdd${index}`"
                                    class="size-date" />
                  </div>
                </div>
                <div>ทะเบียนส่ง : {{item.sendRegistration}}</div>
              </div>
              <div class="col-end">
                <div class="d-flex justify-content-end">
                  <div class="group-num">
                    <div class="name">จำนวน :</div>
                    <cpn-input  v-model="item.num"
                                :name="`num${index}`"
                                class="size-input"/>
                  </div>
                  <button type="button" class="add-department" @click="addDepartmentClick(item)">
                    <div class="group-image">
                      <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="image-plus pointer">
                      เพิ่มหน่วยงาน
                    </div>
                  </button>
                  <button type="button" class="del-department" @click="data.set.splice(index,1)">
                    <div class="group-image">
                      <i class="bi bi-trash-fill image-trash pointer"></i>
                      ลบชุดที่ #{{index+1}}
                    </div>
                  </button>
                </div>
                <div class="group-input">
                  <div class="name">ชื่อผู้เซ็น</div>
                  <div class="d-flex">
                    <cpn-autoComplete v-model="item.nameSignature"
                                      :name="`nameSignature${index}`"
                                      :optionSelect="item.optionSelect.nameSignature"
                                      @change="changeNameSignature(index)" />

                    <cpn-checkbox v-model="item.signature"
                                  :name="`signature${index}`"
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
                <button type="button" class="button-file" @click="uploadFile(`fileOriginllBook${index}`)">
                  <span :class="item.originllBookFile.name ? '' : 'no-data'">
                    {{item.originllBookFile.name ? item.originllBookFile.name : 'หนังสือต้นเรื่อง'}}
                  </span>
                </button>
                <div class="text pointer" @click="uploadFile(`fileOriginllBook${index}`)">แนบเอกสาร</div>
                <input type="file" @change="fileSetChange(`fileOriginllBook${index}`, index, 'fileOriginllBook')" :name="`fileOriginllBook${index}`" style="display:none;" accept="application/pdf">
              </div>
              <button type="button" @click="downloadFile(item.originllBookFile)" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
              <div class="group-input-file">
                <button type="button" class="button-file" @click="uploadFile(`fileDuplicateCopy${index}`)">
                  <span :class="item.duplicateCopyFile.name ? '' : 'no-data'">
                    {{item.duplicateCopyFile.name ? item.duplicateCopyFile.name : 'สำเนาคู่ฉลับ'}}
                  </span>
                </button>
                <div class="text pointer" @click="uploadFile(`fileDuplicateCopy${index}`)">แนบเอกสาร</div>
                <input type="file" @change="fileSetChange(`fileDuplicateCopy${index}`, index, 'fileDuplicateCopy')" :name="`fileDuplicateCopy${index}`" style="display:none;" accept="application/pdf">
              </div>
              <button type="button" @click="downloadFile(item.duplicateCopyFile)" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
            </div>
            <div class="detail-sub" v-for="(item2, index2) in item.department" :key="index2">
              <div class="group-between">
                <div class="group-input left w-200">
                  <div class="name">เลข สลค.</div>
                  <cpn-input  v-model="item2.code"
                              :name="`code${index}${index2}`"
                              :disabled="true" />
                </div>
                <div class="group-input">
                  <div class="name">เรียน</div>
                  <cpn-input  v-model="item2.to"
                              :name="`to${index}${index2}`"/>
                </div>
              </div>
              <div class="group-input">
                <div class="name">หน่วยงานปลายทาง</div>
                <cpn-input  v-model="item2.destinationAgency"
                            :name="`destinationAgency${index}${index2}`" />
              </div>
              <div class="group-between">
                <div class="w-100 overflow-hidden">
                  <div class="d-flex">
                    <div class="group-input-file">
                      <button type="button" class="button-file" @click="uploadFile(`fileOriginllBook${index}${index2}`)">
                        <span :class="item2.originllBookFile.name ? '' : 'no-data'">
                          {{item2.originllBookFile.name ? item2.originllBookFile.name : 'หนังสือต้นเรื่อง'}}
                        </span>
                      </button>
                      <div class="text pointer" @click="uploadFile(`fileOriginllBook${index}${index2}`)">แนบเอกสาร</div>
                      <input type="file" @change="fileDetailChange(`fileOriginllBook${index}${index2}`, index, index2, 'fileOriginllBook')" :name="`fileOriginllBook${index}${index2}`" style="display:none;" accept="application/pdf">
                    </div>
                    <button type="button" @click="downloadFile(item2.originllBookFile)" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
                  </div>
                  <div class="d-flex mt-3">
                    <div class="group-input-file">
                      <button type="button" class="button-file" @click="uploadFile(`fileDuplicateCopy${index}${index2}`)">
                        <span :class="item2.duplicateCopyFile.name ? '' : 'no-data'">
                          {{item2.duplicateCopyFile.name ? item2.duplicateCopyFile.name : 'สำเนาคู่ฉลับ'}}
                        </span>
                      </button>
                      <div class="text pointer" @click="uploadFile(`fileDuplicateCopy${index}${index2}`)">แนบเอกสาร</div>
                      <input type="file" @change="fileDetailChange(`fileDuplicateCopy${index}${index2}`, index, index2, 'fileDuplicateCopy')" :name="`fileDuplicateCopy${index}${index2}`" style="display:none;" accept="application/pdf">
                    </div>
                    <button type="button" @click="downloadFile(item2.duplicateCopyFile)" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
                  </div>
                </div>
                <div class="w-100 ms-4 m-auto">
                  <div class="group-input">
                    <div class="name">ชื่อผู้เซ็น</div>
                    <div class="d-flex">
                      <cpn-autoComplete v-model="item2.nameSignature"
                                        :name="`nameSignature${index}${index2}`"
                                        :optionSelect="item2.optionSelect.nameSignature"  />

                      <cpn-checkbox v-model="item2.signature"
                                    :name="`signature${index}${index2}`"
                                    class="cpn-select"
                                    label="ลายเซ็น" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-end"> 
                <button type="button" class="del-department-2" @click="item.department.splice(index2,1)">
                  <i class="bi bi-trash-fill image-trash pointer"></i>
                </button>
              </div>
            </div>
          </div>
          <div v-if="data.set.length>0" class="line"></div>
          <div v-if="data.set.length>0" class="tag">
            <div class="group-input">
              <div class="name">Tag สำหรับค้นหา (กรอกข้อมูลจบ 1 ประโยค ให้กด "Enter")</div>
              <cpn-input-tags v-model="data.tag"
                              name="tag" />
            </div>
            <div class="group-input d-flex align-items-center mt-4">
              <div class="name">สิ่งที่แนบมาด้วย</div>
              <button type="button" class="add-export-book" @click="addFileClick()">
                <div class="group-image">
                  <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                  เพิ่มไฟล์
                </div>
              </button>
            </div>
            <div v-if="data.set.length>0" class="d-flex mb-3 group-input-file-all" v-for="(item, index) in data.attachment" :key="index">
              <div class="group-input-file">
                <button type="button" class="button-file" @click="uploadFile(`fileAttachment${index}`)">
                  <span :class="item.name ? '' : 'no-data'">
                    {{item.name ? item.name : 'หนังสือต้นเรื่อง'}}
                  </span>
                </button>
                <div class="text pointer" @click="uploadFile(`fileAttachment${index}`)">แนบเอกสาร</div>
                <input type="file" @change="fileAttachmentChange(`fileAttachment${index}`, index)" :name="`fileAttachment${index}`" style="display:none;" accept="application/pdf">
              </div>
              <button type="button" @click="downloadFile(item)" class="button-eye"><i class="bi bi-eye icon-eye"></i></button>
              <button type="button" class="del-department-3" @click="data.attachment.length > 1 ? data.attachment.splice(index,1) : ''">
                <img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer">
              </button>
            </div>
          </div>
          <div class="line mt-4" v-if="data.set.length>0"></div>
          <div class="send-to" v-if="data.set.length>0 || true">
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
              <div class="group-input">
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
            <div class="footer-right" v-show="data.set.length>0">
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
                <div class="message" v-for="(item, index) in modalRegiter.set" :key="index">
                  <div class="d-flex justify-content-between">
                    <div class="set">ชุดที่ #{{(index+1)+data.set.length}}</div>
                    <button type="button" @click="modalRegiter.set.length > 1 ? modalRegiter.set.splice(index,1) : ''" class="button-delete ms-3"><img src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer"></button>
                  </div>
                  <div class="detail-sub">
                    <div class="group-between">
                      <div class="group-input">
                        <div class="name">ทะเบียนส่ง <span class="required">*</span></div>
                        <cpn-autoComplete v-model="item.sendRegistration"
                                          rules="required"
                                          :name="`addsendRegistration${index}`"
                                          :optionSelect="item.optionSelect.sendRegistration"  />
                      </div>
                      <div class="group-input right-width">
                        <div class="name">ลงวันที่ <span class="required">*</span></div>
                        <cpn-datepicker v-model="item.date"
                                        rules="required"
                                        :name="`adddate${index}`"/>
                      </div>
                      <div class="group-input right-width">
                        <div class="name">การออกเลข <span class="required">*</span></div>
                        <cpn-select v-model="item.issuingNumbers"
                                    rules="required"
                                    :optionSelect="item.optionSelect.issuingNumbers"
                                    :name="`addissuingNumbers${index}`"/>
                      </div>
                      <div class="group-input right-width">
                        <div class="name">รูปแบบการส่ง <span class="required">*</span></div>
                        <cpn-select v-model="item.deliveryFormat"
                                    rules="required"
                                    :optionSelect="item.optionSelect.deliveryFormat"
                                    :name="`adddeliveryFormat${index}`"/>
                      </div>
                    </div>
                    <div class="group-input">
                      <div class="name">หน่วยงานปลายทาง</div>
                      <cpn-input-tags v-model="item.department"
                                      :flagSearch="true"
                                      :optionSelect="item.optionSelect.department"
                                      :name="`adddepartment${index}`"/>
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
        myBook: '1',
        username: '',
        type: '1',
        typeBook: '1',
        secret: '1',
        level: '1',
        refers: [{code: '', name: '', date: ''}],
        name: '',
        set: [],
        tag: [],
        attachment: [{ name: '', file: []}],
        sendTo: [],
        comments: '',
        model: '',
        see: '',
      },
      optionSelect: {
        type: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        typeBook: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        secret: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        level: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        model: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        see: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
        sendTo: [{ name: 'select1',value: '1' },{ name: 'select2',value: '2' },{ name: 'select3',value: '3' }],
      },
      modalRegiter: {
        showModal: false,
        set: []
      }
    }
  },
  methods: {
    sendToClick() {
      this.axios.get('/v1/login')
    },
    searchClick(item) {
      item.name='aaaa'
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
    changeNameSignature(index) {
      this.data.set[index].department.filter(item => {
        item.nameSignature = this.data.set[index].nameSignature
      })
    },
    changeSignature(index) {
      this.data.set[index].department.filter(item => {
        item.signature = this.data.set[index].signature
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
            name: file.name,
            type: file.type == 'application/pdf' ? 'pdf' : '',
            link: URL.createObjectURL(file),
            size: (file.size /1024 /1024).toFixed(2) + ' MB',
            file: file,
          }
          this.data.attachment[index] = dataFile
          document.querySelector(`[name="${data}"]`).value=null;
        }
      }
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
    fileDetailChange(data, index, index2, name) {
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
            this.data.set[index].department[index2].originllBookFile = dataFile
          } else {
            this.data.set[index].department[index2].duplicateCopyFile = dataFile
          }
          document.querySelector(`[name="${data}"]`).value=null;
        }
      }
    },
    addFileClick() {
      this.data.attachment.push({name: ''})
    },
    addRefersClick() {
      this.data.refers.push({code: '', name: '', date: ''})
    },
    addRegister() {
      this.modalRegiter.showModal = true
      this.modalRegiter.set= [{
        sendRegistration: '',
        date: this.assetsUtils.currentDate(),
        issuingNumbers: 'เลขเดี่ยว',
        deliveryFormat: 'ไม่ระบุ',
        department: [],
        optionSelect: {
          sendRegistration: this.optionSelectDefault.sendRegistration,
          issuingNumbers: this.optionSelectDefault.issuingNumbers,
          deliveryFormat: this.optionSelectDefault.deliveryFormat,
          department: this.optionSelectDefault.department,
        },
      }]
    },
    addDepartmentClick(item) {
      item.department.push({
        code: '',
        to: '',
        destinationAgency: '',
        originllBookFile: {name: '', file: []},
        duplicateCopyFile: {name: '', file: []},
        nameSignature: '',
        signature: false,
        optionSelect: {
          nameSignature: []
        },
      })
    },
    addRegisterModal() {
      this.modalRegiter.set.push({
        sendRegistration: '',
        date: this.assetsUtils.currentDate(),
        issuingNumbers: 'เลขเดี่ยว',
        deliveryFormat: 'ไม่ระบุ',
        department: [],
        optionSelect: {
          sendRegistration: this.optionSelectDefault.sendRegistration,
          issuingNumbers: this.optionSelectDefault.issuingNumbers,
          deliveryFormat: this.optionSelectDefault.deliveryFormat
        },
      })
    },
    back() {
      this.$router.push({ 
        name: 'export-book',
      }).catch(()=>{});
    },
    cancelClick() {
      this.back()
      this.data.code = ''
      this.data.short_name = ''
      this.data.name = ''
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
    onSubmitModal() {
      this.modalRegiter.set.filter(item => {
        let data = {
          optionSelect: {
            nameSignature: this.optionSelectDefault.nameSignature
          },
          issuingNumbers: item.issuingNumbers,
          deliveryFormat: item.deliveryFormat,
          date: item.date,
          sendRegistration: item.sendRegistration,
          num: '1',
          nameSignature: '',
          signature: false,
          originllBookFile: {name: '', file: []},
          duplicateCopyFile: {name: '', file: []},
          department: []
        }
        if (item.department.length > 0) {
          item.department.filter(item2 => {
            data.department.push({
              code: '2566/63',
              to: '',
              destinationAgency: item2,
              originllBookFile: {name: '', file: []},
              duplicateCopyFile: {name: '', file: []},
              nameSignature: '',
              signature: false,
              optionSelect: {
                nameSignature: this.optionSelectDefault.nameSignature
              },
            })
          })
        } else {
          data.department.push({
            code: '2566/63',
            to: '',
            destinationAgency: '',
            originllBookFile: {name: '', file: []},
            duplicateCopyFile: {name: '', file: []},
            nameSignature: '',
            signature: false,
            optionSelect: {
              nameSignature: this.optionSelectDefault.nameSignature
            },
          })
        }
        this.data.set.push(data)
      })
      this.modalRegiter.showModal = false
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
  .department-detail {
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

        .add-export-book {
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