<template>
  <div v-if="$route.name == 'login'">
    <router-view></router-view>
  </div>

  <div class="index-templete" v-else>
    <div class="detail-index-page">
      <transition name="navigation-ham" @enter="enter" @after-enter="afterEnter" @leave="leave">
        <div v-if="!hamburger" class="navigation">
          <div class="group-image-logo">
            <img class="image-logo" src="@/assets/images/pkm_logo.png" alt="logo" v-if="data.logoImage">
            <div class="title mt-3">
              ระบบสารบรรณอิเล็กทรอนิกส์
            </div>
          </div>
          <div class="group-list-head">
            <div  class="list-navbar-group" >
              <div class="list-navbar pointer" :class="$route.name == 'my-work.booking-receive'|| $route.name == 'my-work.booking-receive-create' || $route.name == 'my-work.booking-receive-edit' ||
              $route.name == 'my-work.booking-out'|| $route.name == 'my-work.booking-out-create' || $route.name == 'my-work.booking-out-edit' ||
              $route.name == 'my-work.waiting-booking-receive'|| $route.name == 'my-work.waiting-booking-receive-create' || $route.name == 'my-work.waiting-booking-receive-edit' ? 'active': ''" @click="removeSelect(), $router.push({name: 'my-work'})">
                <div class="group-image">
                  <img class="icon-square" src="@/assets/images/navbar/square.svg">
                  <img class="icon-memo" src="@/assets/images/navbar/memo-pad-duotone.svg">
                </div>
                งานรับ-ส่งหนังสือ
              </div>
            </div>
            <div class="list-navbar-group">
              <div class="list-navbar pointer" :class="$route.name == 'subministry-work.booking-receive'|| $route.name == 'subministry-work.booking-receive-create' || $route.name == 'subministry-work.booking-receive-edit' ||
              $route.name == 'subministry-work.booking-out'|| $route.name == 'subministry-work.booking-out-create' || $route.name == 'subministry-work.booking-out-edit' ||
              $route.name == 'subministry-work.record-receive'|| $route.name == 'subministry-work.record-receive-create' || $route.name == 'subministry-work.record-receive-edit' ||
              $route.name == 'subministry-work.record-out'|| $route.name == 'subministry-work.record-out-create' || $route.name == 'subministry-work.record-out-edit' ? 'active': ''" @click="removeSelect(), $router.push({name: 'subministry-work'})">
                <div class="group-image">
                  <img class="icon-square" src="@/assets/images/navbar/square.svg">
                  <img class="icon-memo" src="@/assets/images/navbar/memo-pad-duotone.svg">
                </div>
                งานของกอง
              </div>
            </div>
            <div class="list-navbar-group">
              <div class="list-navbar pointer" :class="$route.name == 'user-manage'|| $route.name == 'user-manage-create' || $route.name == 'user-manage-edit' ? 'active': ''" @click="removeSelect(), $router.push({name: 'user-manage'})">
                <div class="group-image">
                  <img src="@/assets/images/navbar/square.svg" class="icon-square">
                  <img src="@/assets/images/navbar/users-cog.svg" class="icon-square-list">
                </div>
                จัดการผู้ใช้งาน
              </div>
            </div>
            <div class="list-navbar-group">
              <div class="list-navbar pointer" :class="$route.name == 'agency' || $route.name == 'agency-create' || $route.name == 'agency-edit' ||
              $route.name == 'book-type' || $route.name == 'book-type-create' || $route.name == 'book-type-edit' ||
              $route.name == 'record-type' || $route.name == 'record-type-create' || $route.name == 'record-type-edit' ||
              $route.name == 'book-record' || $route.name == 'book-record-create' || $route.name == 'book-record-edit' ||
              $route.name == 'subministry' || $route.name == 'subministry-create' || $route.name == 'subministry-edit' ||
              $route.name == 'group' || $route.name == 'group-create' || $route.name == 'group-edit' ||
              $route.name == 'book-method' || $route.name == 'book-method-create' || $route.name == 'book-method-edit' || 
              $route.name == 'file' || $route.name == 'file-create' || $route.name == 'file-edit' ||
              $route.name == 'organization' || $route.name == 'organization-create' || $route.name == 'organization-edit' ? 'active' : '' " @click="removeSelect('master'), iconAngle.master = !iconAngle.master">
                <div class="group-image">
                  <img src="@/assets/images/navbar/square.svg" class="icon-square">
                  <img src="@/assets/images/navbar/users-cog.svg" class="icon-square-list">
                </div>
                มาสเตอร์
                <i class="bi bi-chevron-right icon-angle" v-show="!iconAngle.master"></i>
                <i class="bi bi-chevron-down icon-angle" v-show="iconAngle.master"></i>
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'book-type' || $route.name == 'book-type-create' || $route.name == 'book-type-edit' ? 'active2' : ''" @click="$router.push({name: 'book-type'})">
                <div class="icon-circle" />
                ชนิดหนังสือ
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'record-type' || $route.name == 'record-type-create' || $route.name == 'record-type-edit' ? 'active2' : ''" @click="$router.push({name: 'record-type'})">
                <div class="icon-circle" />
                  ชนิดบันทึกข้อความ
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'book-record' || $route.name == 'book-record-create' || $route.name == 'book-record-edit' ? 'active2' : ''" @click="$router.push({name: 'book-record'})">
                <div class="icon-circle" />
                ทะเบียนหนังสือ
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'organization' || $route.name == 'organization-create' || $route.name == 'organization-edit' ? 'active2': ''" @click="$router.push({name: 'organization'})">
                <div class="icon-circle" />
                กระทรวง
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'agency' || $route.name == 'agency-create' || $route.name == 'agency-edit' ? 'active2': ''" @click="$router.push({name: 'agency'})">
                <div class="icon-circle" />
                หน่วยงาน
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'subministry' || $route.name == 'subministry-create' || $route.name == 'subministry-edit' ? 'active2': ''" @click="$router.push({name: 'subministry'})">
                <div class="icon-circle" />
                กอง
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'group' || $route.name == 'group-create' || $route.name == 'group-edit' ? 'active2': ''" @click="$router.push({name: 'group'})">
                <div class="icon-circle" />
                กลุ่ม
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'book-method' || $route.name == 'book-method-create' || $route.name == 'book-method-edit' ? 'active2': ''" @click="$router.push({name: 'book-method'})">
                <div class="icon-circle" />
                รูปแบบการรับ-ส่งหนังสือ
              </div>
              <div v-show="iconAngle.master" class="list-navbar-sub pointer" :class="$route.name == 'file' || $route.name == 'file-create' || $route.name == 'file-edit' ? 'active2': ''" @click="$router.push({name: 'file'})">
                <div class="icon-circle" />
                ตั้งค่าประเภทไฟล์
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
              <span :class="[$route.name == item.path ? 'active' : '', item.path ? 'pointer' : 'none-pointer']" @click="$router.push({name: item.path})">{{item.name}}</span>
              <span v-show="breadcrumbs.length>0 && index!=(breadcrumbs.length-1)" class="none-pointer space">/</span>
            </li>
          </ul>
        </div>
        <div class="header-index-right">
          <div class="group-user">
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
        <router-view></router-view>
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
      version: '1.0.2',
      hamburger: false,
      showLoading: false,
      data:{
        logoImage: ''
      },
      iconAngle: {
        master: false
      },
      dataUser: {
        name: localStorage.getItem('fname') + ' ' + localStorage.getItem('lname'),
        position: localStorage.getItem('department_name')
      },
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      showLoading: false,
    }
  },
  computed: {
    breadcrumbs() {
      if (this.$route.name == 'user-manage') {
        return [{name: 'การจัดการผู้ใช้งาน', path: 'user-manage'}]
      } else if (this.$route.name == 'user-manage-edit') {
        return [{name: 'การจัดการผู้ใช้งาน', path: 'user-manage'}, {name: 'แก้ไขผู้ใช้งาน', path: 'user-manage-edit'}]
      } else if (this.$route.name == 'user-manage-create') {
        return [{name: 'การจัดการผู้ใช้งาน', path: 'user-manage'}, {name: 'เพิ่มผู้ใช้งาน', path: 'user-manage-create'}]
      } else if (this.$route.name == 'book-type') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ชนิดหนังสือ', path: 'book-type'}]
      } else if (this.$route.name == 'book-type-edit') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ชนิดหนังสือ', path: 'book-type'}, {name: 'แก้ไขชนิดหนังสือ', path: 'book-type-edit'}]
      } else if (this.$route.name == 'book-type-create') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ชนิดหนังสือ', path: 'book-type'}, {name: 'เพิ่มชนิดหนังสือ', path: 'book-type-create'}]
      } else if (this.$route.name == 'record-type') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ชนิดบันทึกข้อความ', path: 'record-type'}]
      } else if (this.$route.name == 'record-type-edit') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ชนิดบันทึกข้อความ', path: 'record-type'}, {name: 'แก้ไขชนิดบันทึกข้อความ', path: 'record-type-edit'}]
      } else if (this.$route.name == 'record-type-create') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ชนิดบันทึกข้อความ', path: 'record-type'}, {name: 'เพิ่มชนิดบันทึกข้อความ', path: 'record-type-create'}]
      } else if (this.$route.name == 'book-record') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ทะเบียนหนังสือ', path: 'book-record'}]
      } else if (this.$route.name == 'book-record-edit') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ทะเบียนหนังสือ', path: 'book-record'}, {name: 'แก้ไขทะเบียนหนังสือ', path: 'book-record-edit'}]
      } else if (this.$route.name == 'book-record-create') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ทะเบียนหนังสือ', path: 'book-record'}, {name: 'เพิ่มทะเบียนหนังสือ', path: 'book-record-create'}]
      } else if (this.$route.name == 'organization') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กระทรวง', path: 'organization'}]
      } else if (this.$route.name == 'organization-edit') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กระทรวง', path: 'organization'}, {name: 'แก้ไขกระทรวง', path: 'organization-edit'}]
      } else if (this.$route.name == 'organization-create') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กระทรวง', path: 'organization'}, {name: 'เพิ่มกระทรวง', path: 'organization-create'}]
      } else if (this.$route.name == 'agency') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'หน่วยงาน', path: 'agency'}]
      } else if (this.$route.name == 'agency-edit') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'หน่วยงาน', path: 'agency'}, {name: 'แก้ไขหน่วยงาน', path: 'agency-edit'}]
      } else if (this.$route.name == 'agency-create') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'หน่วยงาน', path: 'agency'}, {name: 'เพิ่มหน่วยงาน', path: 'agency-create'}]
      } else if (this.$route.name == 'subministry') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กอง', path: 'subministry'}]
      } else if (this.$route.name == 'subministry-edit') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กอง', path: 'subministry'}, {name: 'แก้ไขกอง', path: 'subministry-edit'}]
      } else if (this.$route.name == 'subministry-create') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กอง', path: 'subministry'}, {name: 'เพิ่มกอง', path: 'subministry-create'}]
      } else if (this.$route.name == 'group') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กลุ่ม', path: 'group'}]
      } else if (this.$route.name == 'group-edit') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กลุ่ม', path: 'group'}, {name: 'แก้ไขกลุ่ม', path: 'group-edit'}]
      } else if (this.$route.name == 'group-create') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'กลุ่ม', path: 'group'}, {name: 'เพิ่มกลุ่ม', path: 'group-create'}]
      } else if (this.$route.name == 'book-method') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'รูปแบบการรับ-ส่งหนังสือ', path: 'book-method'}]
      } else if (this.$route.name == 'book-method-edit') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'รูปแบบการรับ-ส่งหนังสือ', path: 'book-method'}, {name: 'แก้ไขรูปแบบการรับ-ส่งหนังสือ', path: 'book-method-edit'}]
      } else if (this.$route.name == 'book-method-create') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'รูปแบบการรับ-ส่งหนังสือ', path: 'book-method'}, {name: 'เพิ่มรูปแบบการรับ-ส่งหนังสือ', path: 'book-method-create'}]
      } else if (this.$route.name == 'file') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ตั้งค่าประเภทไฟล์', path: 'file'}]
      } else if (this.$route.name == 'file-edit') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ตั้งค่าประเภทไฟล์', path: 'file'}, {name: 'แก้ไขตั้งค่าประเภทไฟล์', path: 'file-edit'}]
      } else if (this.$route.name == 'file-create') {
        return [{name: 'มาสเตอร์', path: ''}, {name: 'ตั้งค่าประเภทไฟล์', path: 'file'}, {name: 'เพิ่มตั้งค่าประเภทไฟล์', path: 'file-create'}]
      } else if (this.$route.name == 'my-work.waiting-booking-receive') {
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือรอรับเข้า', path: 'my-work.waiting-booking-receive'}]
      } else if (this.$route.name == 'my-work.waiting-booking-receive-create') {
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือรอรับเข้า', path: 'my-work.waiting-booking-receive'}, {name: 'สร้างหนังสือรอรับเข้า', path: 'my-work.waiting-booking-receive-create'}]
      } else if (this.$route.name == 'my-work.waiting-booking-receive-edit') {
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือรอรับเข้า', path: 'my-work.waiting-booking-receive'}, {name: 'แก้ไขหนังสือรอรับเข้า', path: 'my-work.waiting-booking-receive-edit'}]
      } else if (this.$route.name == 'my-work.booking-receive') {
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือรับเข้า', path: 'my-work.booking-receive'}]
      } else if (this.$route.name == 'my-work.booking-receive-create') {
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือรับเข้า', path: 'my-work.booking-receive'}, {name: 'สร้างหนังสือรับเข้า', path: 'my-work.booking-receive-create'}]
      } else if (this.$route.name == 'my-work.booking-receive-edit') {
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือรับเข้า', path: 'my-work.booking-receive'}, {name: 'แก้ไขหนังสือรับเข้า', path: 'my-work.booking-receive-edit'}]
      } else if (this.$route.name == 'my-work.booking-out') {
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือส่งออก', path: 'my-work.booking-out'}]
      } else if (this.$route.name == 'my-work.booking-out-create') {
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือส่งออก', path: 'my-work.booking-out'}, {name: 'สร้างหนังสือส่งออก', path: 'my-work.booking-out-create'}]
      } else if (this.$route.name == 'my-work.booking-out-edit') {
        return [{name: 'งานรับ-ส่งหนังสือ', path: 'my-work'}, {name: 'หนังสือส่งออก', path: 'my-work.booking-out'}, {name: 'แก้ไขหนังสือส่งออก', path: 'my-work.booking-out-edit'}]
      } else if (this.$route.name == 'subministry-work.booking-receive') {
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'หนังสือรับเข้า', path: 'subministry-work.booking-receive'}]
      } else if (this.$route.name == 'subministry-work.booking-receive-create') {
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'หนังสือรับเข้า', path: 'subministry-work.booking-receive'}, {name: 'สร้างหนังสือรับเข้า', path: 'subministry-work.booking-receive-create'}]
      } else if (this.$route.name == 'subministry-work.booking-receive-edit') {
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'หนังสือรับเข้า', path: 'subministry-work.booking-receive'}, {name: 'แก้ไขหนังสือรับเข้า', path: 'subministry-work.booking-receive-edit'}]
      } else if (this.$route.name == 'subministry-work.booking-out') {
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'หนังสือส่งออก', path: 'subministry-work.booking-out'}]
      } else if (this.$route.name == 'subministry-work.booking-out-create') {
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'หนังสือส่งออก', path: 'subministry-work.booking-out'}, {name: 'สร้างหนังสือส่งออก', path: 'subministry-work.booking-out-create'}]
      } else if (this.$route.name == 'subministry-work.booking-out-edit') {
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'หนังสือส่งออก', path: 'subministry-work.booking-out'}, {name: 'แก้ไขหนังสือส่งออก', path: 'subministry-work.booking-out-edit'}]
      } else if (this.$route.name == 'subministry-work.record-receive') {
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'บันทึกรับเข้า', path: 'subministry-work.record-receive'}]
      } else if (this.$route.name == 'subministry-work.record-receive-create') {
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'บันทึกรับเข้า', path: 'subministry-work.record-receive'}, {name: 'สร้างบันทึกรับเข้า', path: 'subministry-work.record-receive-create'}]
      } else if (this.$route.name == 'subministry-work.record-receive-edit') {
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'บันทึกรับเข้า', path: 'subministry-work.record-receive'}, {name: 'แก้ไขบันทึกรับเข้า', path: 'subministry-work.record-receive-edit'}]
      } else if (this.$route.name == 'subministry-work.record-out') {
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'บันทึกส่งออก', path: 'subministry-work.record-out'}]
      } else if (this.$route.name == 'subministry-work.record-out-create') {
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'บันทึกส่งออก', path: 'subministry-work.record-out'}, {name: 'สร้างบันทึกส่งออก', path: 'subministry-work.record-out-create'}]
      } else if (this.$route.name == 'subministry-work.record-out-edit') {
        return [{name: 'งานของกอง', path: 'subministry-work'}, {name: 'บันทึกส่งออก', path: 'subministry-work.record-out'}, {name: 'แก้ไขบันทึกส่งออก', path: 'subministry-work.record-out-edit'}]
      } else {
        return [{name: this.$route.name , path: this.$route.name }]
      }
    },
  },
  methods: {
    clearData() {
      localStorage.setItem('login', 'false')
      this.data.logoImage = ''
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
            this.data.logoImage = new URL(`./assets/images/pkm_logo.svg`, import.meta.url).href
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
        this.data.logoImage = new URL(`./assets/images/pkm_logo.svg`, import.meta.url).href
      })
    }
  },
  watch: {
    '$route.name'() {
      this.checkPathRoute()
      this.dataUser = {
        name: localStorage.getItem('fname') + ' ' + localStorage.getItem('lname'),
        position: localStorage.getItem('department_name')
      }
      if (this.$route.name == 'book-type' || this.$route.name == 'book-type-create' || this.$route.name == 'book-type-edit' || 
      this.$route.name == 'organization' || this.$route.name == 'organization-create' || this.$route.name == 'organization-edit' || 
      this.$route.name == 'agency' || this.$route.name == 'agency-create' || this.$route.name == 'agency-edit' || 
      this.$route.name == 'subministry' || this.$route.name == 'subministry-create' || this.$route.name == 'subministry-edit' || 
      this.$route.name == 'group' || this.$route.name == 'group-create' || this.$route.name == 'group-edit' || 
      this.$route.name == 'book-method' || this.$route.name == 'book-method-create' || this.$route.name == 'book-method-edit' || 
      this.$route.name == 'file' || this.$route.name == 'file-create' || this.$route.name == 'file-edit') {
        this.iconAngle.master = true
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
