<template>
  <div v-if="$route.name == 'login'">
    <router-view></router-view>
  </div>

  <div class="index-templete" v-else>
    <div class="detail-index-page">
      <transition name="navigation-ham" @enter="enter" @after-enter="afterEnter" @leave="leave">
        <div v-if="!hamburger" class="navigation">
          <div class="group-image-logo">
            <img class="image-logo" :src="data.logoImage" alt="logo" v-if="data.logoImage">
            <div class="title mt-3">
              ระบบสารบรรณอิเล็กทรอนิกส์
            </div>
          </div>
          <div class="group-list-head">
            <div  class="list-navbar-group" v-if="rule?.user1 || rule?.user3">
              <div class="list-navbar pointer" :class="routePath('/my-work/') ? 'active': ''" @click="removeSelect(), $router.push({name: 'my-work'})">
                <div class="group-image">
                  <img class="icon-square" src="@/assets/images/navbar/square.svg">
                  <img class="icon-memo" src="@/assets/images/navbar/memo-pad-duotone.svg">
                </div>
                งานรับ-ส่งหนังสือ
              </div>
            </div>
            <div class="list-navbar-group" v-if="rule?.user1 || rule?.user2 || rule?.user4">
              <div class="list-navbar pointer" :class="routePath('/subministry-work/') ? 'active': ''" @click="removeSelect(), $router.push({name: 'subministry-work'})">
                <div class="group-image">
                  <img class="icon-square" src="@/assets/images/navbar/square.svg">
                  <img class="icon-memo" src="@/assets/images/navbar/memo-pad-duotone.svg">
                </div>
                งานของกอง
              </div>
            </div>
            <div class="list-navbar-group" v-if="false">
              <div class="list-navbar pointer" @click="removeSelect('automail'), iconAngle.automail = !iconAngle.automail">
                <div class="group-image">
                  <img src="@/assets/images/navbar/square.svg" class="icon-square">
                  <img class="icon-memo" src="@/assets/images/navbar/memo-pad-duotone.svg">
                </div>
                รายการส่งอีเมล
                <i class="bi bi-chevron-right icon-angle" v-show="!iconAngle.automail"></i>
                <i class="bi bi-chevron-down icon-angle" v-show="iconAngle.automail"></i>
              </div>
              <div v-show="iconAngle.automail" class="list-navbar-sub pointer" @click="automailClick('automail-sendmail')">
                <div class="icon-circle"></div>
                รายการหนังสือส่งออกที่ส่งผ่านอีเมล (อัตโนมัติ)
              </div>
              <div v-show="iconAngle.automail" class="list-navbar-sub pointer" @click="automailClick('automail-sendmail-logs')">
                <div class="icon-circle"></div>
                บันทึกการส่งอีเมล
              </div>
            </div>
            <div class="list-navbar-group" v-if="rule?.user1 || rule?.user2 || rule?.user4">
              <div class="list-navbar pointer" :class="routePath('/automail/sendmail') ? 'active' : ''" @click="removeSelect('automail'), iconAngle.automail = !iconAngle.automail">
                <div class="group-image">
                  <img src="@/assets/images/navbar/square.svg" class="icon-square">
                  <img src="@/assets/images/navbar/users-cog.svg" class="icon-square-list">
                </div>
                รายการส่งอีเมล
                <i class="bi bi-chevron-right icon-angle" v-show="!iconAngle.automail"></i>
                <i class="bi bi-chevron-down icon-angle" v-show="iconAngle.automail"></i>
              </div>
              <div v-show="iconAngle.automail" class="list-navbar-sub pointer" :class="$route.name == 'automail-sendmail' || $route.name == 'automail-sendmail-list' || $route.name == 'automail-sendmail-edit' ? 'active2' : ''" @click="$router.push({name: 'automail-sendmail'})">
                <div class="icon-circle"></div>
                รายการหนังสือส่งออกที่ส่งผ่านอีเมล (อัตโนมัติ)
              </div>
              <div v-show="iconAngle.automail" class="list-navbar-sub pointer" :class="$route.name == 'automail-sendmail-logs' ? 'active2' : ''" @click="$router.push({name: 'automail-sendmail-logs'})">
                <div class="icon-circle"></div>
                บันทึกการส่งอีเมล
              </div>
            </div>
            <div class="list-navbar-group" v-if="rule?.user1">
              <div class="list-navbar pointer" :class="$route.name == 'user-manage'|| $route.name == 'user-manage-create' || $route.name == 'user-manage-edit' ? 'active': ''" @click="removeSelect(), $router.push({name: 'user-manage'})">
                <div class="group-image">
                  <img src="@/assets/images/navbar/square.svg" class="icon-square">
                  <img src="@/assets/images/navbar/users-cog.svg" class="icon-square-list">
                </div>
                จัดการผู้ใช้งาน
              </div>
            </div>
            <div class="list-navbar-group" v-if="rule?.user1">
              <div class="list-navbar pointer" :class="routePath('/master/') ? 'active' : '' " @click="removeSelect('master'), iconAngle.master = !iconAngle.master">
                <div class="group-image">
                  <img src="@/assets/images/navbar/square.svg" class="icon-square">
                  <img class="icon-memo" src="@/assets/images/navbar/memo-pad-duotone.svg">
                </div>
                มาสเตอร์
                <i class="bi bi-chevron-right icon-angle" v-show="!iconAngle.master"></i>
                <i class="bi bi-chevron-down icon-angle" v-show="iconAngle.master"></i>
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'book-type' || $route.name == 'book-type-create' || $route.name == 'book-type-edit' ? 'active2' : ''" @click="$router.push({name: 'book-type'})">
                <div class="icon-circle"></div>
                ชนิดหนังสือ
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'record-type' || $route.name == 'record-type-create' || $route.name == 'record-type-edit' ? 'active2' : ''" @click="$router.push({name: 'record-type'})">
                <div class="icon-circle"></div>
                  ชนิดบันทึกข้อความ
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'book-record' || $route.name == 'book-record-create' || $route.name == 'book-record-edit' ? 'active2' : ''" @click="$router.push({name: 'book-record'})">
                <div class="icon-circle"></div>
                ทะเบียนหนังสือ
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'organization' || $route.name == 'organization-create' || $route.name == 'organization-edit' ? 'active2': ''" @click="$router.push({name: 'organization'})">
                <div class="icon-circle"></div>
                กระทรวง
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'agency' || $route.name == 'agency-create' || $route.name == 'agency-edit' ? 'active2': ''" @click="$router.push({name: 'agency'})">
                <div class="icon-circle"></div>
                หน่วยงาน
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'subministry' || $route.name == 'subministry-create' || $route.name == 'subministry-edit' ? 'active2': ''" @click="$router.push({name: 'subministry'})">
                <div class="icon-circle"></div>
                กอง
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'group' || $route.name == 'group-create' || $route.name == 'group-edit' ? 'active2': ''" @click="$router.push({name: 'group'})">
                <div class="icon-circle"></div>
                กลุ่ม
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'book-method' || $route.name == 'book-method-create' || $route.name == 'book-method-edit' ? 'active2': ''" @click="$router.push({name: 'book-method'})">
                <div class="icon-circle"></div>
                รูปแบบการรับ-ส่งหนังสือ
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'file' || $route.name == 'file-create' || $route.name == 'file-edit' ? 'active2': ''" @click="$router.push({name: 'file'})">
                <div class="icon-circle"></div>
                ตั้งค่าประเภทไฟล์
              </div>
              <div v-show="iconAngle.master && false" class="list-navbar-sub pointer" :class="$route.name == 'automail-mail-addresses' ? 'active2' : ''" @click="$router.push({name: 'automail-mail-addresses'})">
                <div class="icon-circle"></div>
                ข้อมูลติดต่อหน่วยงาน
              </div>
              <div v-show="iconAngle.master && false" class="list-navbar-sub pointer" :class="$route.name == 'automail-receiver-profile' || $route.name == 'automail-receiver-profile-create' || $route.name == 'automail-receiver-profile-edit' ? 'active2' : ''" @click="$router.push({name: 'automail-receiver-profile'})">
                <div class="icon-circle"></div>
                ตั้งค่ารูปแบบข้อความตามผู้รับจดหมาย
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'email-agency' || $route.name == 'email-agency-create' || $route.name == 'email-agency-edit' ? 'active2': ''" @click="$router.push({name: 'email-agency'})">
                <div class="icon-circle"></div>
                ตั้งค่าอีเมลสำหรับส่งหนังสือ
              </div>
            </div>
          </div>
          <div class="version">
            Version {{version}}
          </div>
        </div>
      </transition>
      <div :style="hamburger ?'padding-left: 0px;':''" class="header-index">
        <div class="header-index-left">
          <img src="@/assets/images/navbar/hamburger.svg" class="icon-hamburger pointer" alt="hamburger" @click="hamburger = !hamburger">
          <ul class="breadcrumbs">
            <li v-for="(item, index) in breadcrumbs" :key="index">
              <span :class="[$route.name == item.path ? 'active' : '', item.path ? 'pointer' : 'none-pointer']" @click="$router.push({name: item.path, query: item.query})">{{item.name}}</span>
              <span v-show="breadcrumbs.length>0 && index!=(breadcrumbs.length-1)" class="none-pointer space">/</span>
            </li>
          </ul>
        </div>
        <div class="header-index-right">
          <div class="group-user">
            <img class="image-user" :src="dataUser.image" alt="user-image" v-if="dataUser.image">
            <div class="group-name">
              <div class="name">
                {{ dataUser.name }}
              </div>
              <div class="sub-name">
                {{ dataUser.position }}
              </div>
            </div>
          </div>
          <i class="bi bi-box-arrow-right icon-exit pointer" @click="logoutClick()"></i>
        </div>
      </div>
      <div :style="hamburger ?'padding-left: 30px;':''" class="detail-index">
        <router-view  @getLogoImage="getLogoImage"
                      @getUserImage="getUserImage" />
      </div>
    </div>
    <div :style="hamburger ?'padding-left: 0px;':''" class="foot-index">
      สงวนลิขสิทธิ์  2566 พีเคเอ็ม คอนซัลติ้ง กรุ๊ป จำกัด
    </div>
    <cpn-modal-alert :modal-alert="modalAlert" />
    <cpn-loading :show="showLoading" />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      version: '1.3.8',
      hamburger: false,
      showLoading: false,
      data:{
        logoImage: ''
      },
      iconAngle: {
        master: false,
        automail: false
      },
      dataUser: {
        name: localStorage.getItem('fname') + ' ' + localStorage.getItem('lname'),
        position: localStorage.getItem('department_name'),
        image: ''
      },
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      rule: {}
    }
  },
  computed: {
    breadcrumbs() {
      if (this.$route.name == 'user-manage') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'การจัดการผู้ใช้งาน', path: 'user-manage'}]
      } else if (this.$route.name == 'user-manage-edit') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'การจัดการผู้ใช้งาน', path: 'user-manage'}, {name: 'แก้ไขผู้ใช้งาน', path: 'user-manage-edit', query: this.$route.query}]
      } else if (this.$route.name == 'user-manage-create') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'การจัดการผู้ใช้งาน', path: 'user-manage'}, {name: 'เพิ่มผู้ใช้งาน', path: 'user-manage-create'}]
      } else if (this.$route.name == 'book-type') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ชนิดหนังสือ', path: 'book-type'}]
      } else if (this.$route.name == 'book-type-edit') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ชนิดหนังสือ', path: 'book-type'}, {name: 'แก้ไขชนิดหนังสือ', path: 'book-type-edit', query: this.$route.query}]
      } else if (this.$route.name == 'book-type-create') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ชนิดหนังสือ', path: 'book-type'}, {name: 'เพิ่มชนิดหนังสือ', path: 'book-type-create'}]
      } else if (this.$route.name == 'record-type') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ชนิดบันทึกข้อความ', path: 'record-type'}]
      } else if (this.$route.name == 'record-type-edit') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ชนิดบันทึกข้อความ', path: 'record-type'}, {name: 'แก้ไขชนิดบันทึกข้อความ', path: 'record-type-edit', query: this.$route.query}]
      } else if (this.$route.name == 'record-type-create') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ชนิดบันทึกข้อความ', path: 'record-type'}, {name: 'เพิ่มชนิดบันทึกข้อความ', path: 'record-type-create'}]
      } else if (this.$route.name == 'book-record') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ทะเบียนหนังสือ', path: 'book-record'}]
      } else if (this.$route.name == 'book-record-edit') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ทะเบียนหนังสือ', path: 'book-record'}, {name: 'แก้ไขทะเบียนหนังสือ', path: 'book-record-edit', query: this.$route.query}]
      } else if (this.$route.name == 'book-record-create') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ทะเบียนหนังสือ', path: 'book-record'}, {name: 'เพิ่มทะเบียนหนังสือ', path: 'book-record-create'}]
      } else if (this.$route.name == 'organization') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กระทรวง', path: 'organization'}]
      } else if (this.$route.name == 'organization-edit') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กระทรวง', path: 'organization'}, {name: 'แก้ไขกระทรวง', path: 'organization-edit', query: this.$route.query}]
      } else if (this.$route.name == 'organization-create') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กระทรวง', path: 'organization'}, {name: 'เพิ่มกระทรวง', path: 'organization-create'}]
      } else if (this.$route.name == 'agency') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'หน่วยงาน', path: 'agency'}]
      } else if (this.$route.name == 'agency-edit') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'หน่วยงาน', path: 'agency'}, {name: 'แก้ไขหน่วยงาน', path: 'agency-edit', query: this.$route.query}]
      } else if (this.$route.name == 'agency-create') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'หน่วยงาน', path: 'agency'}, {name: 'เพิ่มหน่วยงาน', path: 'agency-create'}]
      } else if (this.$route.name == 'subministry') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กอง', path: 'subministry'}]
      } else if (this.$route.name == 'subministry-edit') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กอง', path: 'subministry'}, {name: 'แก้ไขกอง', path: 'subministry-edit', query: this.$route.query}]
      } else if (this.$route.name == 'subministry-create') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กอง', path: 'subministry'}, {name: 'เพิ่มกอง', path: 'subministry-create'}]
      } else if (this.$route.name == 'group') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กลุ่ม', path: 'group'}]
      } else if (this.$route.name == 'group-edit') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กลุ่ม', path: 'group'}, {name: 'แก้ไขกลุ่ม', path: 'group-edit', query: this.$route.query}]
      } else if (this.$route.name == 'group-create') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กลุ่ม', path: 'group'}, {name: 'เพิ่มกลุ่ม', path: 'group-create'}]
      } else if (this.$route.name == 'book-method') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'รูปแบบการรับ-ส่งหนังสือ', path: 'book-method'}]
      } else if (this.$route.name == 'book-method-edit') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'รูปแบบการรับ-ส่งหนังสือ', path: 'book-method'}, {name: 'แก้ไขรูปแบบการรับ-ส่งหนังสือ', path: 'book-method-edit', query: this.$route.query}]
      } else if (this.$route.name == 'book-method-create') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'รูปแบบการรับ-ส่งหนังสือ', path: 'book-method'}, {name: 'เพิ่มรูปแบบการรับ-ส่งหนังสือ', path: 'book-method-create'}]
      } else if (this.$route.name == 'file') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ตั้งค่าประเภทไฟล์', path: 'file'}]
      } else if (this.$route.name == 'file-edit') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ตั้งค่าประเภทไฟล์', path: 'file'}, {name: 'แก้ไขตั้งค่าประเภทไฟล์', path: 'file-edit', query: this.$route.query}]
      } else if (this.$route.name == 'file-create') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ตั้งค่าประเภทไฟล์', path: 'file'}, {name: 'เพิ่มตั้งค่าประเภทไฟล์', path: 'file-create'}]
      } else if (this.$route.name == 'my-work.waiting-booking-receive') {
        if (!(this.rule?.user1 || this.rule?.user3)) this.defaultUrl()
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือรอรับเข้า', path: 'my-work.waiting-booking-receive'}]
      } else if (this.$route.name == 'my-work.waiting-booking-receive-create') {
        if (!(this.rule?.user1 || this.rule?.user3)) this.defaultUrl()
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือรอรับเข้า', path: 'my-work.waiting-booking-receive'}, {name: 'สร้างหนังสือรอรับเข้า', path: 'my-work.waiting-booking-receive-create'}]
      } else if (this.$route.name == 'my-work.waiting-booking-receive-edit') {
        if (!(this.rule?.user1 || this.rule?.user3)) this.defaultUrl()
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือรอรับเข้า', path: 'my-work.waiting-booking-receive'}, {name: 'แก้ไขหนังสือรอรับเข้า', path: 'my-work.waiting-booking-receive-edit', query: this.$route.query}]
      } else if (this.$route.name == 'my-work.booking-receive') {
        if (!(this.rule?.user1 || this.rule?.user3)) this.defaultUrl()
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือรับเข้า', path: 'my-work.booking-receive'}]
      } else if (this.$route.name == 'my-work.booking-receive-create') {
        if (!(this.rule?.user1 || this.rule?.user3)) this.defaultUrl()
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือรับเข้า', path: 'my-work.booking-receive'}, {name: 'สร้างหนังสือรับเข้า', path: 'my-work.booking-receive-create'}]
      } else if (this.$route.name == 'my-work.booking-receive-edit') {
        if (!(this.rule?.user1 || this.rule?.user3)) this.defaultUrl()
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือรับเข้า', path: 'my-work.booking-receive'}, {name: 'แก้ไขหนังสือรับเข้า', path: 'my-work.booking-receive-edit', query: this.$route.query}]
      } else if (this.$route.name == 'my-work.booking-out') {
        if (!(this.rule?.user1 || this.rule?.user3)) this.defaultUrl()
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือส่งออก', path: 'my-work.booking-out'}]
      } else if (this.$route.name == 'my-work.booking-out-create') {
        if (!(this.rule?.user1 || this.rule?.user3)) this.defaultUrl()
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือส่งออก', path: 'my-work.booking-out'}, {name: 'สร้างหนังสือส่งออก', path: 'my-work.booking-out-create'}]
      } else if (this.$route.name == 'my-work.booking-out-edit') {
        if (!(this.rule?.user1 || this.rule?.user3)) this.defaultUrl()
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือส่งออก', path: 'my-work.booking-out'}, {name: 'แก้ไขหนังสือส่งออก', path: 'my-work.booking-out-edit', query: this.$route.query}]
      } else if (this.$route.name == 'subministry-work.booking-receive') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'หนังสือรับเข้า', path: 'subministry-work.booking-receive'}]
      } else if (this.$route.name == 'subministry-work.booking-receive-create') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'หนังสือรับเข้า', path: 'subministry-work.booking-receive'}, {name: 'สร้างหนังสือรับเข้า', path: 'subministry-work.booking-receive-create'}]
      } else if (this.$route.name == 'subministry-work.booking-receive-edit') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'หนังสือรับเข้า', path: 'subministry-work.booking-receive'}, {name: 'แก้ไขหนังสือรับเข้า', path: 'subministry-work.booking-receive-edit', query: this.$route.query}]
      } else if (this.$route.name == 'subministry-work.booking-out') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'หนังสือส่งออก', path: 'subministry-work.booking-out'}]
      } else if (this.$route.name == 'subministry-work.booking-out-create') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'หนังสือส่งออก', path: 'subministry-work.booking-out'}, {name: 'สร้างหนังสือส่งออก', path: 'subministry-work.booking-out-create'}]
      } else if (this.$route.name == 'subministry-work.booking-out-edit') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'หนังสือส่งออก', path: 'subministry-work.booking-out'}, {name: 'แก้ไขหนังสือส่งออก', path: 'subministry-work.booking-out-edit', query: this.$route.query}]
      } else if (this.$route.name == 'subministry-work.record-receive') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'บันทึกรับเข้า', path: 'subministry-work.record-receive'}]
      } else if (this.$route.name == 'subministry-work.record-receive-create') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'บันทึกรับเข้า', path: 'subministry-work.record-receive'}, {name: 'สร้างบันทึกรับเข้า', path: 'subministry-work.record-receive-create'}]
      } else if (this.$route.name == 'subministry-work.record-receive-edit') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'บันทึกรับเข้า', path: 'subministry-work.record-receive'}, {name: 'แก้ไขบันทึกรับเข้า', path: 'subministry-work.record-receive-edit', query: this.$route.query}]
      } else if (this.$route.name == 'subministry-work.record-out') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'บันทึกส่งออก', path: 'subministry-work.record-out'}]
      } else if (this.$route.name == 'subministry-work.record-out-create') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'บันทึกส่งออก', path: 'subministry-work.record-out'}, {name: 'สร้างบันทึกส่งออก', path: 'subministry-work.record-out-create'}]
      } else if (this.$route.name == 'subministry-work.record-out-edit') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'บันทึกส่งออก', path: 'subministry-work.record-out'}, {name: 'แก้ไขบันทึกส่งออก', path: 'subministry-work.record-out-edit', query: this.$route.query}]
      } else if (this.$route.name == 'automail-mail-addresses') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'อีเมลติดต่อหน่วยงาน', path: 'automail-mail-addresses'}]
      } else if (this.$route.name == 'automail-receiver-profile') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ตั้งค่ารูปแบบข้อความตามผู้รับจดหมาย', path: 'automail-receiver-profile'}]
      } else if (this.$route.name == 'automail-receiver-profile-create') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ตั้งค่ารูปแบบข้อความตามผู้รับจดหมาย', path: 'automail-receiver-profile'}, {name: 'สร้างตั้งค่ารูปแบบข้อความตามผู้รับจดหมาย', path: 'automail-receiver-profile-create'}]
      } else if (this.$route.name == 'automail-receiver-profile-edit') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ตั้งค่ารูปแบบข้อความตามผู้รับจดหมาย', path: 'automail-receiver-profile'}, {name: 'แก้ไขตั้งค่ารูปแบบข้อความตามผู้รับจดหมาย', path: 'automail-receiver-profile-edit', query: this.$route.query}]
      } else if (this.$route.name == 'automail-sendmail-logs') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'รายการส่งอีเมล', path: ''}, {name: 'บันทึกการส่งอีเมลอัตโนมัติ', path: 'automail-sendmail-logs'}]
      } else if (this.$route.name == 'automail-sendmail') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'รายการส่งอีเมล', path: ''}, {name: 'รายการหนังสือส่งออก ที่ส่งผ่านอีเมลอัตโนมัติ', path: 'automail-sendmail'}]
      } else if (this.$route.name == 'automail-sendmail-list') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'รายการส่งอีเมล', path: ''}, {name: 'รายการหนังสือส่งออก ที่ส่งผ่านอีเมลอัตโนมัติ', path: 'automail-sendmail'}, {name: 'ส่งหนังสือส่งออก ผ่านอีเมลอัตโนมัติ', path: 'automail-sendmail-list', query: this.$route.query}]
      } else if (this.$route.name == 'automail-sendmail-edit') {
        if (!(this.rule?.user1 || this.rule?.user2 || this.rule?.user4)) this.defaultUrl()
        return [{name: 'รายการส่งอีเมล', path: ''}, {name: 'รายการหนังสือส่งออก ที่ส่งผ่านอีเมลอัตโนมัติ', path: 'automail-sendmail'}, {name: 'ส่งหนังสือส่งออก ผ่านอีเมลอัตโนมัติ', path: 'automail-sendmail-edit', query: this.$route.query}]
      } else if (this.$route.name == 'email-agency') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ตั้งค่าอีเมลสำหรับส่งหนังสือ', path: 'email-agency'}]
      } else if (this.$route.name == 'email-agency-create') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ตั้งค่าอีเมลสำหรับส่งหนังสือ', path: 'email-agency'}, {name: 'สร้างอีเมลสำหรับส่งหนังสือของหน่วยงาน', path: 'email-agency-create'}]
      } else if (this.$route.name == 'email-agency-edit') {
        if (!(this.rule?.user1)) this.defaultUrl()
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ตั้งค่าอีเมลสำหรับส่งหนังสือ', path: 'email-agency'}, {name: 'แก้ไขอีเมลสำหรับส่งหนังสือของหน่วยงาน', path: 'email-agency-edit', query: this.$route.query}]
      } else {
        return [{name: this.$route.name , path: this.$route.name }]
      }
    },
  },
  methods: {
    automailClick(name) {
      let routeData = this.$router.resolve({ 
        name: name,
      })
      window.open(routeData.href, '_blank');
    },
    routePath (path) {
      return this.$route.path.indexOf(path) != -1
    },
    clearData() {
      localStorage.setItem('login', 'false')
      this.data.logoImage = ''
      this.dataUser.image = ''
    },
    logoutClick() {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: 'ยืนยันออกจากระบบ หรือไม่',
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          _this.clearData()
          _this.ruleSet()
          _this.$router.push({name: 'login'})
        }
      }
    },
    removeSelect(data) {
      for (let item in this.iconAngle) {
        if (item != data) {
          this.iconAngle[item] = false
        }
      }
    },
    enter(element) {
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.width = 'auto';

      const width = getComputedStyle(element).width;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.width = 0;

      getComputedStyle(element).width;

      requestAnimationFrame(() => {
        element.style.width = width;
      });
    },
    afterEnter(element) {
      element.style.width = 'auto';
    },
    leave(element) {
      const width = getComputedStyle(element).width;
      
      element.style.width = width;

      getComputedStyle(element).width;

      requestAnimationFrame(() => {
        element.style.width = 0;
      });
    },
    checkPathRoute() {
      if (this.$route.name == 'login') {
        this.clearData()
      } else {
        if (this.$router.options.history.state.back == '/login' || !this.data.logoImage) {
          if (!(!localStorage.getItem('filename') && !localStorage.getItem('filepath'))) {
            this.getLogoImage(localStorage.getItem('filename'), localStorage.getItem('filepath'))
          } else {
            this.data.logoImage = new URL(`@/assets/images/default/department.png`, import.meta.url).href
          }
          if (!(!localStorage.getItem('profile_img'))) {
            this.getUserImage(localStorage.getItem('profile_img'), localStorage.getItem('profile_img'))
          } else {
            this.dataUser.name = localStorage.getItem('fname') + ' ' + localStorage.getItem('lname')
            this.dataUser.position = localStorage.getItem('department_name')
            this.dataUser.image = new URL(`@/assets/images/default/profile_img.jpg`, import.meta.url).href
          }
        }
      }
    },
    getLogoImage(filename, filepath) {
      this.axios({
        method:'get',
        url: this.backendport+'/'+filepath,
        baseURL: '',
        responseType: 'blob',
      })
      .then(response3 => {
        const blob = new Blob([response3.data], { type: this.assetsUtils.getTypeFile(filename) })
        this.data.logoImage = URL.createObjectURL(blob)
      })
      .catch((error) => {
        this.data.logoImage = new URL(`@/assets/images/default/department.png`, import.meta.url).href
      })
    },
    getUserImage(filename, filepath) {
      this.dataUser.name = localStorage.getItem('fname') + ' ' + localStorage.getItem('lname')
      this.dataUser.position = localStorage.getItem('department_name')
      if (filepath) {
        this.axios({
          method:'get',
          url: this.backendport+'/'+filepath,
          baseURL: '',
          responseType: 'blob',
        })
        .then(response3 => {
          const blob = new Blob([response3.data], { type: this.assetsUtils.getTypeFile(filename) })
          this.dataUser.image = URL.createObjectURL(blob)
        })
        .catch((error) => {
          this.dataUser.image = new URL(`@/assets/images/default/profile_img.jpg`, import.meta.url).href
        })
      } else {
        this.dataUser.image = new URL(`@/assets/images/default/profile_img.jpg`, import.meta.url).href
      }
    },
    setRoles(data) {
      if (data) {
        let rule = {}
        data.filter(row => {
          rule[`user${row.role_id}`] = true
        })
        this.ruleSet(rule)
        this.rule = rule
      }
    },
    defaultUrl() {
      if (this.rule?.user1 || this.rule?.user3) {
        this.$router.push({ 
          name: 'my-work.waiting-booking-receive',
        }).catch(()=>{});
      } else {
        this.$router.push({ 
          name: 'subministry-work.booking-receive',
        }).catch(()=>{});
      }
    }
  },
  mounted() {
    this.showLoading = true
    this.axios.get(`/user/${localStorage.getItem('user_id')}`)
    .then((response) => {
      this.showLoading = false
      localStorage.setItem('data_rule', JSON.stringify(response.data.data.roles))
      this.setRoles(response.data.data.roles)
    })
    .catch((error) => {
      this.showLoading = false
      this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
    })
  },
  watch: {
    '$route.name'() {
      this.checkPathRoute()
      let data = JSON.parse(localStorage.getItem('data_rule'))
      if (data) {
        this.setRoles(data)
      }
      this.iconAngle = {
        master: false,
        automail: false
      }
      if (this.routePath('/master/')) {
        this.removeSelect('master')
        this.iconAngle.master = true
      }
      if (this.routePath('/automail/sendmail')) {
        this.removeSelect('automail')
        this.iconAngle.automail = true
      }
    }
  }
};
</script>

<style lang="scss">
.index-templete {
  .detail-index-page {
    min-height: 100vh;
    min-width: 900px;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    overflow: auto;
    margin-bottom: -80px;
    padding-bottom: 80px;
    
    .header-index {
      transition: padding 1s ease-in-out;
      height: 75px;
      background-color: #f5f5f5;
      position: fixed;
      width: 100%;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 310px;
      min-width: 600px;
      box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);

      .header-index-left {
        font-size: 18px;
        color: #0f3a64;
        margin-left: 25px;
        display: flex;
        align-items: center;

        .icon-hamburger {
          width: 29px;
          height: 24px;
          margin-right: 25px;
        }

        .breadcrumbs {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;

          .breadcrumb-cut {
            margin: 0 26px;
          }

          .active {
            font-size: 18px;
            font-weight: bold;
            color: #0f3a64;
          }

          .space {
            margin: 0 8px;
          }
        }
      }

      .header-index-right {
        display: flex;
        align-items: center;
        margin-right: 10px;

        .image-user {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          margin: auto 15px;
          object-fit: cover;
        }

        .group-user {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          text-align: center;
          
          .group-name {
            margin-right: 10px;
            margin-top: 5px;
            color: #1a456b;

            .name {
              font-size: 19px;
              line-height: 25px;
              font-weight: 600;
            }

            .sub-name {
              font-size: 14px;
            }
          }
        }

        .icon-exit {
          margin-right: 25px;
          font-size: 30px;
        }
      }
    }

    .navigation {
      position: fixed;
      height: 100vh;
      width: 310px;
      background-color: #1a456b;
      z-index: 99;

      .group-image-logo {
        text-align: center;
        background-color: #1a456b;
        margin: auto;
        margin-top: 31px;
        padding-bottom: 25px;
        width: 310px;
        color: #ffffff;
        border-bottom: 1px solid #446b8b;

        .image-logo {
          max-height: 100px;
          max-width: 280px;
          height: 100%;
          width: 100%;
          // background-color: #ffffff;
          border-radius: 5px;
          padding: 5px;
          object-fit: contain;
        }

        .title {
          font-size: 18px;
          font-weight: bold;
          margin-top: 2px;
        }

        .sub-title {
          font-size: 16px;
          font-weight: normal;
          margin-top: 5px;
        }
      }

      .group-list-head::-webkit-scrollbar {
          display: none;
      }

      .group-list-head {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      
      .group-list-head {
        overflow: auto;
        height: 100vh;
        padding-bottom: 265px;
        width: 310px;
        position: relative;
        
        .active {
          background-color: #0d304d;
        }

        .active2 {
          background-color: #062238 !important;
        }

        .list-navbar-group {
          color: #ffffff;
          font-size: 14px;
          
          .list-navbar {
            padding-left: 25px;
            padding-right: 22px;
            height: 64px;
            border-bottom: 1px solid #446b8b;
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: normal;

            .group-image {
              position: relative;
              margin-right: 15px;

              .icon-square {
                width: 51px;
                margin-top: 7px;
              }

              .icon-square-list{
                position: absolute;
                left: 14.7px;
                top: 20px;
                width: 21px;
              }

              .icon-memo{
                position: absolute;
                left: 15px;
                top: 20px;
                width: 20px;
              }
            }

            .icon-angle {
              margin-left: auto;
              font-size: 20px;
              color: #8aa3b7;
            }
          }

          .list-navbar-sub {
            padding-left: 60px;
            padding-right: 18px;
            height: 64px;
            border-bottom: 1px solid #446b8b;
            display: flex;
            justify-content: flex-start;
            background-color: #0d304d;
            align-items: center;
            font-size: 16px;
            font-weight: normal;

            .icon-circle {
              min-width: 10px;
              min-height: 10px;
              background-color: #8aa3b7;
              border-radius: 50%;
              margin-right: 12px;
            }
          }
        }
      }

      .version {
        position: absolute;
        bottom: 0px;
        width: 310px;
        color: #ffffff;
        font-size: 16px;
        font-weight: normal;
        background-color: #1a456b;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .detail-index {
      transition: padding 1s ease-in-out;
      width: 100%;
      position: relative;
      min-height: 100%;
      padding-top: 104px;
      padding-left: 340px;
      padding-right: 30px;
      padding-bottom: 100px;
    }
  }
  .foot-index {
    transition: padding 1s ease-in-out;
    width: 100%;
    height: 80px;
    background-color: #f5f5f5;
    color: #15466e;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 310px;
    box-shadow: 7.4px 9.5px 15px 15px rgb(137 148 169 / 14%)
  }
}
</style>
