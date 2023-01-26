<template>
  <div class="user-inex">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <img src="@/assets/images/icon/users-cog-duotone.svg" alt="" class="icon-users-cog">
            <div class="name">ผู้ใช้งาน</div>
            <button type="button" class="add-user" @click="addClick()">
              <div class="group-image">
                <img src="@/assets/images/icon/plus-circle-duotone.svg" alt="" class="icon-plus">
                เพิ่มผู้ใช้งาน
              </div>
            </button>
          </div>
          <div class="group-end">
            <div class="search">
              <cpn-input  v-model="data.search"
                          name="search"
                          type="search"
                          :searchFlag="true"
                          @search="search()"
                          placeholder="กรุณากรอกข้อมูลที่ต้องการค้นหา" />
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="group-body">
          <table class="table-user-inex">
            <thead class="thead">
              <tr class="thead-row">
                <th class="col1">ไอดี</th>
                <th class="col2">ชื่อ-นามสกุล</th>
                <th class="col3">หน่วยงาน</th>
                <th class="col4">ชื่อผู้ใช้งาน</th>
                <th class="col5">Email</th>
                <th class="col6">สิทธิ์</th>
                <th class="col7">เครื่องมือ</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="tbody-row" v-for="(item, index) in data.table" :key="index">
                <td class="col1">{{item.id}}</td>
                <td class="col2">{{item.fname}}  {{item.lname}}</td>
                <td class="col3">{{item.department_name}}</td>
                <td class="col4">{{item.username}}</td>
                <td class="col5">{{item.email}}</td>
                <td class="col6">
                  <div class="group-col6">
                    <span class="span" v-bind:class="item.permission_id == 1 ? 'admin1' : item.permission_id == 2 ? 'admin2' : ''">
                      <img v-show="item.permission_id == 1" src="@/assets/images/icon/user-crown-duotone.svg" alt="" class="icon-user-crown">
                      <img v-show="item.permission_id == 2" src="@/assets/images/icon/badge-sheriff-duotone.svg" alt="" class="icon-badge-sheriff">
                      {{item.permission_name}}
                    </span>
                    <div class="col6-detail" v-show="item.permission_id != 1 && item.permission_id != 2 && item.levelDesc != ''">{{item.levelDesc}}
                      <div class="image-size"></div>
                    </div>
                  </div>
                </td>
                <td class="col7">
                  <div class="group-icon">
                    <img @click="editClick(item)" src="@/assets/images/icon/pencil-alt-duotone.svg" alt="" class="image-pencil pointer">
                    <img @click="deleteClick(item)" src="@/assets/images/icon/trash-alt-duotone.svg" alt="" class="image-trash pointer">
                  </div>
                </td>
              </tr>
              <tr class="tbody-row" v-if="data.table.length == 0">
                <td colspan="7">ไม่มีข้อมูล</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="group-footer">
          <cpn-pagination :page="data.page"
                          :total="data.total"
                          :lastPage="data.lastPage"
                          :perPage="data.perPage"
                          @pageChange="pageChange"
                    />
        </div>
      </div>
    </div>
    <cpn-modal-alert :modalAlert="modalAlert"/>
    <cpn-loading :show="showLoading"/>
  </div>
</template>
<script>
export default {
  name: 'user-inex',
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: '',
        message: ''
      },
      showLoading: false,
      data: {
        search: '',
        table: [],
        page: 1,
        total: 0,
        lastPage: 0,
        perPage: 50,
      },
    }
  },
  methods: {
    addClick() {
      this.$router.push({ 
        name: 'user-create',
      }).catch(()=>{});
    },
    editClick(item) {
      this.$router.push({ 
        name: 'user-edit',
        params: {id: item.id}
      }).catch(()=>{});
    },
    pageChange(data) {
      this.data.perPage = data.perPage
      this.data.page = data.page
      this.apiUser()
    },
    search() {
      this.data.status = true
      this.data.perPage = 50
      this.data.page = 1
      this.apiUser()
    },
    apiUser() {
      this.data.table = []
      // this.data.table = [{
      //     "id": 5968,
      //     "name": "ไกรกฤษฏิ์ หินันท์ชัย",
      //     "username": "kraikrit.pkm",
      //     "email": "kraikrit@samudjodkodmhai.com",
      //     "position": "ผู้ทดสอบ",
      //     "division_name": " กองบริหารงานสารสนเทศ ",
      //     "group_name": "เจ้าหน้าที่บริษัท",
      //     "department": "INTERNAL",
      //     "department_id": 0,
      //     "department_name": "",
      //     "permission_id": 1,
      //     "permission_name": "User Admin",
      //     "roles": []
      // }]
      // this.data.page = 1
      // this.data.lastPage = 1
      // this.data.total = 1
      
      this.showLoading = true
      this.axios.get('/user' , {
        // params: {
        //   headers: {
        //   'Content-Type': "application/json"
        // }
        // }
      })
      .then((response) => {
        this.showLoading = false
        response.data.data.filter(row => {
          //row.permission_id = row.role_id
          // row.roles.filter((row2, index) => {
          //   row.levelDesc += (row2.role_name + (row.roles.length == (index+1) ? '' : ', '))  
        })
        this.data.table = response.data.data
      })
      .catch((error) => {
        this.showLoading = false
        this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
      })
    },
    deleteClick(data) {
      let _this = this
      this.modalAlert = {
        showModal: true,
        type: 'confirm',
        title: `คุณยืนยันการลบผู้ใช้งาน`,
        message: `“${data.name}” ใช่หรือไม่`,
        confirm: true,
        msgSuccess: true,
        afterPressAgree() {
          // _this.showLoading = true
          // _this.axios.delete(`/v1/master_data/division/${data.id}`)
          // .then(() => { 
          //   _this.showLoading = false
            _this.modalAlert = {
              showModal: true,
              type: 'success',
              title: 'ทำการลบผู้ใช้งานสำเร็จแล้ว',
              msgSuccess: true,
              afterPressAgree() {
                _this.apiUser()
              }
            }
          // })
          // .catch((error) => {
          //   _this.showLoading = false
          //   _this.modalAlert = {showModal: true, type: 'error', title: 'Error', message: error.response.data.message}
          // })
        }
      }
    },
  },
  mounted() {
    this.apiUser()
  },
}

</script>
<style lang="scss">
  .user-inex {
    .group-overflow {
      // overflow: auto;
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
      padding-bottom: 22px;

      .group-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 22px 29px;

        .group-first {
          display: flex;
          align-items: center;

          .icon-users-cog {
            width: 46px;
            height: 32px;
            margin-right: 16px;
            color: #0f3a64;
          }

          .name {
            color: #1a456b;
            font-weight: bold;
            font-size: 18px;
          }

          .add-user {
            height: 46px;
            border: 0;
            border-radius: 5px;
            background-color: #007773;
            font-size: 18px;
            font-weight: 500;
            color: #ffffff;
            margin-left: 35px;
            padding: 0 25px 0 21px;

            .group-image {
              display: flex;
              align-items: center;
              justify-content: center;

              .icon-plus {
                width: 24px;
                height: 24px;
                margin-right: 17px;
              }
            }
          }
        }

        .group-end {
          display: flex;

          .date {
            margin-right: 25px;
            width: 230px;
          }

          .search {
            min-width: 480px;
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

      .group-body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 26px 30px;
        overflow: auto;
        margin-bottom: 1px;

        table tbody tr:nth-child(odd) {
          background-color: #ffffff;
        }

        table tbody tr:nth-child(even) {
          background-color: #f1f5fa;
        }

        .table-user-inex {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0px;
          border-radius: 5px;
          border: solid 1px #c1cfe3;
          background-color: #fff;
          overflow: hidden;
          
          .thead {
            .thead-row {
              font-weight: bold;
              font-size: 18px;
              color: #333333;
              height: 71px;

              th {
                border-bottom: solid 1px #c1cfe3;
                padding: 0 10px;
                text-align: center !important;
              }
            }

            .col1 {
              min-width: 250px;
              width: 15%;
              padding-left: 28px !important;
            }

            .col2 {
              min-width: 170px;
              width: 15%;
            }

            .col3 {
              min-width: 170px;
              width: 15%;
            }

            .col4 {
              min-width: 170px;
              width: 15%;
            }

            .col5 {
              min-width: 170px;
              width: 15%;
            }

            .col6 {
              min-width: 170px;
              width: 15%;
            }

            .col7 {
              min-width: 170px;
              width: 15%;
              padding-right: 28px !important;
            }
          }

          .tbody {
            .color-tr {
              background-color: #f1f5fa;
            }

            .tbody-row {
              width: 100%;
              height: 70px;
              text-align: center;
              color: #333333;
              border-bottom: 0px;
              font-weight: 500;
              font-size: 18px;

              td {
                padding: 0 10px;
              }

              .text-left {
                text-align: left;
              }

              .col1 {
                padding-left: 28px;
              }

              .col9 {
                padding-left: 28px !important;
              }

              .col6 {
                .group-col6 {
                  text-align: left;
                  position: relative;
                  height: 100%;
                  display: flex;
                  align-items: center;

                  .col6-detail {
                    width: 250px;
                    color: #fff;
                    position: absolute;
                    top: 40px;
                    left: 50%;
                    transform: translate(-50%, 0px);
                    padding: 19px 18px 16px 18px;
                    display: none;
                    font-size: 16px;
                    font-weight: 500;
                    text-align: left;
                    z-index: 1;
                    background-color: #15466e;
                    border-radius: 9px;

                    .image-size {
                      position: absolute;
                      left: 50%;
                      z-index: -1;
                      top: -5px;
                      width: 22px;
                      height: 22px;
                      background-color: #15466e;
                      -ms-transform: rotate(45deg);
                      transform: rotate(45deg);
                      margin-left: -11px;
                    }
                  }
                }
              }

              .col6 .group-col6 {
                float: left;

                .icon-user-crown {
                  width: 19px;
                  height: 21px;
                  margin-right: 8px;
                }

                .icon-badge-sheriff {
                  width: 20px;
                  height: 23px;
                  margin-right: 7px;
                }

                .admin1 {
                  height: 34px;
                  padding: 8px 10px 8px 10px;
                  border-radius: 8px;
                  background-color: #fae4e7;
                  font-size: 18px;
                  font-weight: 500;
                  color: #f94859;
                  display: flex;
                  align-items: center;
                }

                .admin2 {
                  height: 34px;
                  padding: 8px 10px 8px 10px;
                  border-radius: 8px;
                  background-color: #d2eae9;
                  font-size: 18px;
                  font-weight: 500;
                  color: #007773;
                  display: flex;
                  align-items: center;
                }
              }

              .col6 .group-col6:hover{
                .col6-detail{
                  display: block;
                }
              }

              .col7 {
                padding-right: 28px;

                .group-icon {
                  display: flex;
                  height: 70px;
                  align-items: center;
                  justify-content: center;

                  .image-pencil {
                    width: 21px;
                    height: 21px;
                    margin-right: 28px;
                  }

                  .image-trash {
                    width: 20px;
                    height: 23px;
                  }
                }
              }
            }
          }
        }
      }

      .group-footer {
        margin: 0px 29px;
      }
    }
  }
</style>