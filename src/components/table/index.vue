<template>
  <div class="component-table">
    <table class="table-view">
      <thead class="thead">
        <tr class="thead-row">
          <th v-for="(column, indexColumn) in columns" :key="indexColumn" :style="column.style">
            {{column.name}}
          </th>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr class="tbody-row" v-for="(item, indexData) in data" :key="indexData">
          <td v-for="(column, indexColumn) in columns" :key="indexColumn"  :style="column.style">
            {{item[column.key]}}
          </td>
        </tr>
        <tr class="tbody-row" v-if="data.length == 0">
          <td :colspan="columns.length">ไม่มีข้อมูล</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'component-table',
  data() {
    return {
    }
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    }, 
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
  },
  mounted() {
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
  .component-table {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
      }

      .tbody {
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
        }
      }
    }
    
  }
</style>
