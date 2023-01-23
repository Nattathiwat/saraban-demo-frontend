<template>
  <div class="component-modal" v-show="modalData.showModal">
    <div class="modal-class">
      <div class="modal-center">
        <div class="modal-size" ref="modalDataref">
          <div class="modal-title">
            <div class="title-size">{{modalData.title}}</div> 
            <i v-show="modalData.btnClose" class="bi bi-x-lg icon-close" @click="closeModal()"></i>
          </div>
          <div class="modal-detail">
            <div class="message">{{modalData.message}}</div>
          </div>
          <div class="group-footer">
           <button v-show="modalData.btnCancel" type="button" @click="closeModal()" class="btn btn-danger">
              <div class="group-name">
                <i class="bi bi-x-circle image-icon"></i>
                <div class="name">ยกเลิก</div>
              </div>
            </button>
            <button v-show="modalData.btnConfirm" type="button" @click="confirmModal()" class="btn btn-primary">
              <div class="group-name">
                <i class="bi bi-question-circle image-icon"></i>
                <div class="name">ยืนยัน</div>
              </div>
            </button>
            <button v-show="modalData.btnSave" type="button" @click="confirmModal()" class="btn btn-success">
              <div class="group-name">
                <i class="bi bi-check-circle image-icon"></i>
                <div class="name">บันทึก</div>
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
  name: 'component-modal',
  data() {
    return {
      firstFlag: false
    }
  },
  props: ['modalData'],
  methods: {
    focusoutBtn (e) {
      if (this.modalData.showModal) {
        if (this.firstFlag) {
          if (this.$refs.modalDataref) {
            let target = e.target
            if ((this.$refs.modalDataref !== target) && !this.$refs.modalDataref.contains(target)) {
              this.closeModal()
            }
          }
        } else {
          this.firstFlag = true
        }
      }
    },
    closeModal() {
      this.modalData.showModal = false
      this.firstFlag = false
    },
    confirmModal() {
      this.modalData.showModal = false
      this.firstFlag = false
      this.$emit('confirm-modal', this.modalData.status)
    }
  },
  mounted() {
    document.addEventListener('click', this.focusoutBtn)
  },
  watch: {
    'modalData.showModal' () {
      document.body.style.overflow = this.modalData.showModal ? 'hidden' : ''
    }
  }
}
</script>

<style scoped lang="scss">
.component-modal {
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

          .icon-close {
            font-size: 30px;
            cursor: pointer;
          }
        }

        .modal-detail {
          margin-right: 38px;
          margin-left: 38px;
          padding-top: 30px;

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
          
          button {
            margin: auto;
            width: 150px;
            height: 65px;
            border-radius: 10px;
            border: 0;
          }

          .group-name {
            display: flex;
            align-items: center;
            justify-content: center;

            .image-icon {
              color: #ffffff;
              font-size: 30px;
              margin-right: 15px;
            }

            .name {
              color: #ffffff;
              font-size: 24px;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}
</style>
