<template>
  <div v-show="modalAlert.showModal">
    <div class="modal-alert-class">
      <div class="modal-center">
        <div class="modal-size" ref="modalAlert">
          <div class="modal-title" v-show="false">
            <div class="title-size">{{modalAlert.title}}</div> 
            <i class="bi bi-x-lg icon-close" @click="closeModal()"></i>
          </div>
          <div class="modal-detail">
            <div class="image-icon">
              <img v-show="modalAlert.type !== 'success'" src="@/assets/images/icon/brake-warning-duotone.svg" alt="" class="image-confirm">
              <img v-show="modalAlert.type === 'success'" src="@/assets/images/icon/check-circle-duotone007773.svg" alt="" class="image-success">
            </div>
            <div class="title-size">{{modalAlert.title}}</div>
            <div class="message">{{modalAlert.message}}</div>
          </div>
          <div class="group-footer center" v-show="!modalAlert.confirm">
            <button type="button" @click="closeModal()" class="button-confirm button-success">
              <div class="group-name">
                <img v-show="!modalAlert.confirm" src="@/assets/images/icon/times-circle-duotone.svg" alt="" class="image-times">
                <div class="name">ปิด</div>
              </div>
            </button>
          </div>
          <div class="group-footer" v-show="modalAlert.confirm">
            <button type="button" @click="confirmModal()" class="button-confirm button-success">
              <div class="group-name">
                <img src="@/assets/images/icon/check-circle-duotone.svg" alt="" class="image-times">
                <div class="name">ยืนยัน</div>
              </div>
            </button>
            <button type="button" @click="closeModal()" class="button-confirm button-danger">
              <div class="group-name">
                <img src="@/assets/images/icon/times-circle-duotone.svg" alt="" class="image-times">
                <div class="name">ยกเลิก</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'component-modal-alert',
  data() {
    return {
      myTimeout: ''
    }
  },
  props: ['modalAlert'],
  methods: {
    focusoutBtn (e) {
      if (this.modalAlert.showModal && !this.modalAlert.confirm) {
        if (this.$refs.modalAlert ) {
          let target = e.target
          if ((this.$refs.modalAlert !== target) && !this.$refs.modalAlert.contains(target)) {
            this.closeModal()
          }
        }
      }
    },
    closeModal() {
      this.modalAlert.showModal = false
      // clearTimeout(this.myTimeout);
      if (this.modalAlert.msgSuccess && !this.modalAlert.confirm) {
        this.modalAlert.afterPressAgree()
      }
    },
    confirmModal() {
      this.modalAlert.showModal = false
      // clearTimeout(this.myTimeout);
      if (this.modalAlert.msgSuccess) {
        this.modalAlert.afterPressAgree()
      } else {
        this.$emit('confirm-modal', this.modalAlert.status)
      }
    }
  },
  created() {
    // document.addEventListener('click', this.focusoutBtn)
  },
  watch: {
    'modalAlert.showModal' () {
      document.body.style.overflow = this.modalAlert.showModal ? 'hidden' : ''
      // if (this.modalAlert.showModal && !this.modalAlert.confirm) {
      //   this.myTimeout = setTimeout(() => this.closeModal(), 3000);
      // }
    }
  }
}
</script>

<style scoped lang="scss">
  .modal-alert-class {
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
        max-width: 758px;
        background-color: #ffffffff;
        border-radius: 15px;

        .modal-title {
          display: flex;
          justify-content: space-between;
          padding-top: 30px;
          margin-bottom: 24px;
          margin-right: 30px;
          margin-left: 60px;

          .title-size {
            font-size: 24px;
            font-weight: 700;
            color: #0A1629;
            margin-top: 5px;
          }

          .close-size {
            padding: 13px;
            width: 44px;
            height: 44px;
            border-radius: 14px;
            background-color: #F4F9FD;
            cursor: pointer;
          }
           .icon-file {
            font-size: 25px;
            cursor: pointer;
          }
        }

        .modal-detail {
          margin-right: 38px;
          margin-left: 38px;
          padding-top: 46px;

          .image-icon {
            text-align: center;

            .image-confirm {
              width: 104px;
              height: 74px;
            }

            .image-success {
              width: 80px;
              height: 80px;
            }
          }

          .title-size {
            font-size: 22px;
            font-weight: 600;
            color: #333;
            text-align: center;
            margin-top: 36px;
          }

          .message {
            text-align: center;
            color: #333;
            font-size: 22px;
            font-weight: 500;
            margin-top: 30px;
          }
        }

        .group-footer {
          margin-top: 63px;
          margin-bottom: 35px;
          text-align: center;
          display: flex;
          justify-content: space-between;
          padding: 0 30px;
          
          .button-cancel {
            width: 150px;
            height: 55px;
            border-radius: 10px;
            background-color: #cd7a82;
            border: 0;
          }

          .button-confirm {
            width: 130px;
            height: 55px;
            border-radius: 10px;
            background-color: #007773;
            border: 0;
          }

          .group-name {
            display: flex;
            align-items: center;
            justify-content: center;

            .image-times {
              width: 28px;
              height: 28px;
              margin-right: 14px;
            }

            .name {
              color: #ffffff;
              font-size: 18px;
              font-weight: 500;
            }
          }
          .button-ok {
            width: 130px;
            height: 48px;
            border-radius: 14px;
            background-color: #3B85DE;
            color: #ffffff;
            font-size: 14px;
            font-weight: 500;
            border: 0;
            margin-left: 10px;
          }
        }

        .center {
          justify-content: center;
        }
      }
    }
  }
</style>
