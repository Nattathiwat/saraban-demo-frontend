
<template>
  <div class="table">
    <h2 class="name mb-4">table Component</h2>
    <cpn-table  :columns="columns"
                :data="data"
                :pagination="true"
                 />

    <cpn-pagination :page="pagination.page"
                    :total="pagination.total"
                    :rows-per-page="pagination.perPage"
                    @pageChange="pageChange"
                    />

    <h2 class="name mb-4 mt-4">table standard</h2>
    <div class="table-standard">
      <table class="table-view">
        <thead class="thead">
          <tr class="thead-row">
            <th class="col1">วันที่</th>
            <th class="col2">ประเภท</th>
            <th class="col3">เรื่องประกาศ</th>
            <th class="col4">หน่วยงานที่นำส่ง</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr class="tbody-row" v-for="(item, index) in data" :key="index">
            <td class="col1">{{item.date}}</td>
            <td class="col2">{{item.type}}</td>
            <td class="col3">{{item.title}}</td>
            <td class="col4">{{item.src}}</td>
          </tr>
          <tr class="tbody-row" v-if="data.length == 0">
            <td colspan="4">ไม่มีข้อมูล</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'page-table',
  data() {
    return {
      pagination: {
        page: 7,
        total: 20,
        perPage: 5
      },
      columns: [{
          style: 'min-width: 200px; width: 20%;',
          name: 'วันที่',
          key: 'date'
        }, {
          style: 'min-width: 200px; width: 20%;',
          name: 'ประเภท',
          key: 'type'
        }, {
          style: 'min-width: 300px; width: 30%; text-align: left;',
          name: 'เรื่องประกาศ',
          key: 'title'
        }, {
          style: 'min-width: 300px; width: 30%; text-align: left;',
          name: 'หน่วยงานที่นำส่ง',
          key: 'src'
        }
      ],
      data: [{
          date: '11/11/2556',
          type: 'ประเภท1',
          title: 'เรื่องประกาศ1',
          src: 'หน่วยงานที่นำส่ง1'
        }, {
          date: '11/11/2556',
          type: 'ประเภท2',
          title: 'เรื่องประกาศ2',
          src: 'หน่วยงานที่นำส่ง2'
        }, {
          date: '11/11/2556',
          type: 'ประเภท3',
          title: 'เรื่องประกาศ3',
          src: 'หน่วยงานที่นำส่ง3'
        }
      ]
    }
  },
  methods: {
    pageChange(data) {
      this.pagination.page = data
      console.log('pageChange', this.pagination.page, data)
    }
  }
}
</script>
<style lang="scss">
  .table {
    width: 100%;
    height: 100%;
    min-width: 800px;
    min-height: 200px;
    border-radius: 15px;
    box-shadow: 7.4px 9.5px 13px 0 rgb(137 148 169 / 14%);
    background-color: #fff;
    border: 0px;
    padding: 22px 29px;
    
    .table-standard {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 26px 30px;
      padding-top: 0;
      overflow: auto;
      margin-bottom: 1px;

      table tbody tr:nth-child(odd) {
        background-color: #ffffff;
      }

      table tbody tr:nth-child(even) {
        background-color: #f1f5fa;
      }

      .table-view {
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
            min-width: 200px;
            width: 20%;
            padding-left: 28px !important;
          }

          .col2 {
            min-width: 200px;
            width: 20%;
          }

          .col3 {
            min-width: 300px;
            width: 30%;
          }

          .col4 {
            min-width: 300px;
            width: 30%;
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

            .col2, .col3, .col4 {
              text-align: left;
            }

            .col1 {
              padding-left: 28px;
            }

            .col4 {
              padding-right: 28px;
            }
          }
        }
      }
      
    }
  }
</style>
