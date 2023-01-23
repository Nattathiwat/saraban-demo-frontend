
<template>
  <div class="other">
    <div>
      <h2 class="name">Loading</h2>
      <!-- conponent loading -->
      <cpn-loading :show="showLoading" />
      <button class="btn btn-primary mt-3" @click="show()">show loading 2s</button>
    </div>
    <div class="mt-5">
      <h2 class="name mt-5">sweetalert2</h2>
      <button class="btn btn-primary mt-3 mb-2" @click="sweetalert2()">show sweetalert2</button>
      <br>
      <a href="https://sweetalert2.github.io/">sweetalert2</a>
    </div>
    <div class="mt-5">
      <h2 class="name mt-5">modal</h2>
      <button class="btn btn-primary mt-3 mb-2" @click="show2()">show modal vue</button>
      <!-- conponent modal -->
      <cpn-modal :modalData="modalData" />
      <br>

      <!-- Modal bootstrap -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        show modal bootstrap
      </button>
      <br>
      <a href="https://getbootstrap.com/docs/5.3/components/modal/">bootstrap modal</a>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'other',
  data() {
    return {
      showLoading: false,
      modalData: {
        showModal: false,
        btnClose: true,
        btnCancel: true,
        btnConfirm: true,
        btnSave: true,
        title: 'title',
        message: 'message'
      },
    }
  },
  methods: {
    show() {
      this.showLoading = true
      setTimeout(() => {
        this.showLoading = false
      }, 2000);
    },
    show2() {
      this.modalData.showModal = true
    },
    sweetalert2() {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        confirmButtonColor: '#0d6efd',
        confirmButtonText: 'Yes, delete it!',
        showCancelButton: true,
        cancelButtonColor: '#7066e0',
        cancelButtonText: 'No, cancel!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  }
}
</script>
<style lang="scss">
  .other {
    width: 100%;
    height: 100%;
    min-width: 800px;
    min-height: 200px;
    border-radius: 15px;
    box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);
    background-color: #fff;
    border: 0px;
    padding: 22px 29px;
        
    .group-input {
      margin-bottom: 22px;

      .name {
        margin-bottom: 5px;
      }
    }
  }
</style>
