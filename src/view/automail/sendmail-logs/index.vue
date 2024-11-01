<template>
  <div class="automail-sendmail-logs">
    <div class="group-overflow">
      <div class="detail">
        <div class="group-head">
          <div class="group-first">
            <i class="bi bi-envelope icon-envelope"></i>
            <div class="name">บันทึกการส่งอีเมลอัตโนมัติ</div>
          </div>
        </div>
        <div class="line"></div>
        <Form @submit="apiSendmailLogs" @invalid-submit="onInvalidSubmit">
          <div class="group-detail">
            <div class="group-between">
              <div class="group-input">
                <div class="name">ทะเบียน</div>
                <cpn-select
                  v-model="data.regis_id"
                  name="regis_id"
                  :optionSelect="optionSelect.regis_id"
                  placeholder="กรุณาระบุ"
                />
              </div>
              <div class="group-input">
                <div class="name">เลขออก สลค.</div>
                <cpn-input
                  v-model="data.book_out_document_number"
                  name="book_out_document_number"
                  placeholder="กรุณาระบุ"
                />
              </div>
              <div class="group-input">
                <div class="name">ความเร่งด่วน</div>
                <cpn-select
                  v-model="data.speed_id"
                  name="speed_id"
                  :optionSelect="optionSelect.speed_id"
                  placeholder="กรุณาระบุ"
                />
              </div>
            </div>
            <div class="group-input">
              <div class="name">ชื่อเรื่อง</div>
              <cpn-input v-model="data.subject" name="subject" placeholder="กรุณาระบุ" />
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">กอง/สำนัก</div>
                <cpn-autoComplete
                  v-model="data.mnst_id"
                  name="mnst_id"
                  :optionSelect="optionSelect.mnst_id"
                  @keyup="keyupSubministry($event)"
                  placeholder="เลือกกอง/สำนัก"
                />
              </div>
              <div class="group-input">
                <div class="name">ถึง</div>
                <cpn-autoComplete
                  v-model="data.department_dest_id"
                  name="department_dest_id"
                  :optionSelect="optionSelect.department_dest_id"
                  @keyup="keyupDepartment($event)"
                  placeholder="เลือกหน่วยงานปลายทาง"
                />
              </div>
            </div>
            <div class="group-input">
              <div class="name">ลงวันที่ตั้งแต่ - ถึง</div>
              <cpn-datepickerRange
                v-model="data.as_of_date"
                name="as_of_date"
                placeholder="เลือกวันที่ - ถึงวันที่"
              />
            </div>
            <div class="group-between">
              <div class="group-input">
                <div class="name">ส่งถึง (TO)</div>
                <cpn-input v-model="data.to" name="to" placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">สำเนาถึง (Cc)</div>
                <cpn-input v-model="data.cc" name="cc" placeholder="กรุณาระบุ" />
              </div>
              <div class="group-input">
                <div class="name">สำเนาลับถึง (Bcc)</div>
                <cpn-input v-model="data.bcc" name="bcc" placeholder="กรุณาระบุ" />
              </div>
            </div>
            <div class="group-input">
              <div class="name">วันที่ส่งตั้งแต่ - ถึง</div>
              <cpn-datepickerRange
                v-model="data.send_date"
                name="send_date"
                placeholder="เลือกวันที่ - ถึงวันที่"
              />
            </div>
            <div class="group-button">
              <div class="button-left">
                <button type="button" class="button-warning" @click="cancelClick()">
                  <i class="bi bi-arrow-clockwise icon-clockwise"></i>
                  ล้างการค้นหา
                </button>
              </div>
              <div class="button-right">
                <button type="submit" class="button-search">
                  <i class="bi bi-search icon-search"></i>
                  ค้นหา
                </button>
              </div>
            </div>
          </div>
        </Form>
        <div class="line"></div>
        <div class="group-body">
          <table class="table-automail-sendmail-logs">
            <thead class="thead">
              <tr class="thead-row">
                <th class="col1">ลำดับ</th>
                <th class="col2">สถานะ</th>
                <th class="col3">วันและเวลาที่ส่ง</th>
                <th class="col4">เลขที่หนังสือส่งออก</th>
                <th class="col5">ทะเบียนหนังสือ</th>
                <th class="col6">ความเร่งด่วน</th>
                <th class="col7">ชื่อเรื่อง</th>
                <th class="col8">ลงวันที่</th>
                <th class="col9">จาก</th>
                <th class="col10">ถึง</th>
                <th class="col11">To</th>
                <th class="col12">Cc</th>
                <th class="col13">Bcc</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="tbody-row" v-for="(item, index) in data.table" :key="index">
                <td class="col1">{{ index + 1 + data.perPage * (data.page - 1) }}</td>
                <td class="col2">{{ item.status_name }}</td>
                <td class="col3">{{ item.send_date }}</td>
                <td class="col4" @click="detail_click(item)">
                  {{ item.book_out_document_number }}
                </td>
                <td class="col5">{{ item.book_regis_name }}</td>
                <td class="col6">{{ item.speed_name }}</td>
                <td class="col7">{{ item.subject }}</td>
                <td class="col8">{{ item.as_of_date }}</td>
                <td class="col9">{{ item.from }}</td>
                <td class="col10">{{ item.department_dest_name }}</td>
                <td class="col11">{{ item.to }}</td>
                <td class="col12">{{ item.cc }}</td>
                <td class="col13">{{ item.bcc }}</td>
              </tr>
              <tr class="tbody-row" v-if="data.table.length == 0">
                <td colspan="13">ไม่มีข้อมูล</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="group-footer">
          <cpn-pagination
            :page="data.page"
            :total="data.total"
            :lastPage="data.lastPage"
            :perPage="data.perPage"
            @pageChange="pageChange"
          />
        </div>
      </div>
    </div>
    <cpn-modal-alert :modalAlert="modalAlert" />
    <cpn-loading :show="showLoading" />
  </div>
</template>
<script>
export default {
  name: "automail-sendmail-logs",
  data() {
    return {
      modalAlert: {
        showModal: false,
        title: "",
        message: "",
      },
      showLoading: false,
      data: {
        regis_id: "",
        book_out_document_number: "",
        speed_id: "",
        subject: "",
        mnst_id: "",
        department_dest_id: "",
        as_of_date: "",
        to: "",
        cc: "",
        bcc: "",
        send_date: "",
        table: [],
        page: 1,
        total: 0,
        lastPage: 0,
        perPage: 10,
      },
      optionSelect: {
        regis_id: [],
        speed_id: [],
        mnst_id: [],
        department_dest_id: [],
      },
    };
  },
  methods: {
    detail_click(item) {
      this.$router
        .push({
          name: "subministry-work.booking-out-edit",
          params: { id: item.book_id },
        })
        .catch(() => {});
    },
    cancelClick() {
      this.data.regis_id = "";
      this.data.book_out_document_number = "";
      this.data.speed_id = "";
      this.data.subject = "";
      this.data.mnst_id = "";
      this.data.department_dest_id = "";
      this.data.as_of_date = "";
      this.data.to = "";
      this.data.cc = "";
      this.data.bcc = "";
      this.data.send_date = "";
      this.data.perPage = 10;
      this.data.page = 1;
      this.apiSendmailLogs();
    },
    pageChange(data) {
      this.data.perPage = data.perPage;
      this.data.page = data.page;
      this.apiSendmailLogs();
    },
    apiSendmailLogs() {
      this.data.table = [];
      this.showLoading = true;
      this.axios
        .get("/book-out-external/email-history", {
          params: {
            regis_id: this.data.regis_id,
            book_out_document_number: this.data.book_out_document_number,
            speed_id: this.data.speed_id,
            subject: this.data.subject,
            mnst_id: this.data.mnst_id,
            department_dest_id: this.data.department_dest_id,
            as_of_date_from: this.data?.as_of_date[0],
            as_of_date_to: this.data?.as_of_date[1],
            to: this.data.to,
            cc: this.data.cc,
            bcc: this.data.bcc,
            send_date_from: this.data?.send_date[0],
            send_date_to: this.data?.send_date[1],
            page_size: this.data.perPage,
            page: this.data.page,
          },
        })
        .then((response) => {
          this.showLoading = false;
          response.data.data.meta.filter((row) => (row.disabled = true));
          this.data.table = response.data.data.meta;
          this.data.total = response.data.data.total;
          this.data.lastPage = Math.ceil(this.data.total / this.data.perPage);
        })
        .catch((error) => {
          this.showLoading = false;
          this.modalAlert = {
            showModal: true,
            type: "error",
            title: "Error",
            message: error.response.data.message,
          };
        });
    },
    keyupDepartment(e) {
      this.optionSelect.department_dest_id = [];
      this.axios
        .get("/master-data/department", {
          params: {
            keyword: e.target.value,
          },
        })
        .then((response) => {
          if (response.data.data) {
            response.data.data.filter((item) => {
              item.value = item.id;
              item.name = item.department_full_name;
              return item;
            });
            this.optionSelect.department_dest_id = response.data.data;
          }
        });
    },
    keyupSubministry(e) {
      this.optionSelect.mnst_id = [];
      this.axios
        .get("/master-data/subministry", {
          params: {
            keyword: e.target.value,
          },
        })
        .then((response) => {
          if (response.data.data) {
            response.data.data.filter((item) => {
              item.value = item.id;
              return item;
            });
            this.optionSelect.mnst_id = response.data.data;
          }
        });
    },
    api_master() {
      this.showLoading = true;
      const request1 = this.axios.get(`/master-data/book-category`, {
        params: {
          book_type: 2,
        },
      });
      const request2 = this.axios.get(`/master-data/speed`);
      const request3 = this.axios.get(`/master-data/subministry`);
      const request4 = this.axios.get(`/master-data/department`);

      this.axios
        .all([request1, request2, request3, request4])
        .then(
          this.axios.spread((...responses) => {
            this.showLoading = false;
            const response1 = responses[0];
            const response2 = responses[1];
            const response3 = responses[2];
            const response4 = responses[3];

            response1.data.data.filter((row) => {
              row.value = row.id;
              row.name = row.desc;
              return row;
            });
            response2.data.data.filter((row) => {
              row.value = row.id;
              row.name = row.desc;
              return row;
            });
            response3.data.data.filter((item) => {
              item.value = item.id;
              return item;
            });
            response4.data.data.filter((item) => {
              item.value = item.id;
              item.name = item.department_full_name;
              return item;
            });

            this.optionSelect.regis_id = response1.data.data;
            this.optionSelect.speed_id = response2.data.data;
            this.optionSelect.mnst_id = response3.data.data;
            this.optionSelect.department_dest_id = response4.data.data;

            this.apiSendmailLogs();
          })
        )
        .catch((error) => {
          this.showLoading = false;
          this.modalAlert = {
            showModal: true,
            type: "error",
            title: "Error",
            message: error.response.data.message,
          };
        });
    },
  },
  mounted() {
    this.data.page = this.$route.query?.page || this.data.page;
    this.data.perPage = this.$route.query?.perPage || this.data.perPage;
    this.api_master();
  },
};
</script>
<style lang="scss">
.automail-sendmail-logs {
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
    }

    .group-detail {
      padding: 20px 23px;

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

      .group-button {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 10px;

        .button-left {
          .button-warning {
            width: 160px;
          }
        }

        .button-right {
          display: flex;
          margin-left: 10px;

          .button-search {
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
            margin-left: -5px;
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

        .icon-clockwise {
          font-size: 22px;
          margin-right: 10px;
        }

        .icon-search {
          font-size: 20px;
          margin-right: 10px;
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

      .table-automail-sendmail-logs {
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
            font-size: 16px;
            color: #333333;
            height: 71px;

            th {
              border-bottom: solid 1px #c1cfe3;
              padding: 0 10px;
              text-align: center !important;
            }
          }

          .col1 {
            min-width: 80px;
            max-width: 80px;
            width: 0%;
            padding-left: 28px !important;
          }

          .col2 {
            min-width: 100px;
            max-width: 100px;
            width: 0%;
          }

          .col3 {
            min-width: 180px;
            max-width: 180px;
            width: 0%;
          }

          .col4 {
            min-width: 180px;
            max-width: 180px;
            width: 0%;
          }

          .col5 {
            min-width: 250px;
            max-width: 250px;
            width: 0%;
          }

          .col6 {
            min-width: 150px;
            max-width: 150px;
            width: 0%;
          }

          .col7 {
            min-width: 250px;
            width: 10%;
          }

          .col8 {
            min-width: 180px;
            max-width: 180px;
            width: 0%;
          }

          .col9 {
            min-width: 150px;
            max-width: 150px;
            width: 0%;
          }

          .col10 {
            min-width: 150px;
            max-width: 150px;
            width: 0%;
          }

          .col11 {
            min-width: 250px;
            width: 15%;
          }

          .col12 {
            min-width: 250px;
            width: 15%;
          }

          .col13 {
            min-width: 250px;
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
            font-size: 16px;

            td {
              padding: 0 10px;
            }

            .col3,
            .col5,
            .col7,
            .col8,
            .col9,
            .col10,
            .col11,
            .col12,
            .col13 {
              text-align: left;
            }

            .col4 {
              color: #15466e;
              text-decoration: underline;
              cursor: pointer;
            }

            .col1 {
              padding-left: 28px;
            }

            .col13 {
              padding-right: 28px;
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
