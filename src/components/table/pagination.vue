<template>
  <div class="component-pagination" v-show="total>0">
		<div class="view-page">
			แสดงผล
			<select name="cars" v-model="pageSize"  class="page-size" @change="pageSizeHandleBlur(pageSize)">
				<option v-for="(item, index) in totalArr" :key="index" :value="item">{{item}}</option>
			</select>
			จากทั้งหมด
			{{total}}
		</div>
    <Paginate
      v-model="pageActive"
      :page-count="lastPage"
      :page-range="3"
      :margin-pages="1"
      :click-handler="clickCallback"
      :prev-text="'ก่อนหน้า'"
      :next-text="'ถัดไป'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </Paginate>

  </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";

export default {
  name: 'component-pagination',
  data() {
    return {
      pageActive: this.page,
      pageSize: this.perPage,
			totalArr: [],
      pageSizeTotal: 10,
    }
  },
  components: {
    Paginate
  },
  props: ['page', 'total', 'perPage', 'lastPage'],
  // props: {
  //   page: {
  //     type: Number,
  //     default: () => 1,
  //   },
  //   total: {
  //     type: Number,
  //     default: () => 0,
  //   },
  //   perPage: {
  //     type: Number,
  //     default: () => 0,
  //   },
  //   lastPage: {
  //     type: Number,
  //     default: () => 0,
  //   }
  // },
  methods: {
    pageSizeHandleBlur() {
			let newData = {
				page: 1,
				perPage: this.pageSize
			}
      this.$emit('pageChange', newData)
    },
    clickCallback (pageNum) {
			let newData = {
				page: pageNum,
				perPage: this.pageSize
			}
      this.$emit('pageChange', newData)
    },
    setPages() {
      this.pageActive = this.page ? parseInt(this.page) : 1
      this.pageSize = this.perPage ? parseInt(this.perPage) : 50
      this.totalArr = []
			if (this.total < this.pageSizeTotal) {
				this.totalArr.push(this.pageSizeTotal)
			} else {
				for (let index = 1; index <= this.total; index++) {
					if (index % this.pageSizeTotal == 0) {
						this.totalArr.push(index)
					}
				}
				if (this.total % this.pageSizeTotal != 0) {
					this.totalArr.push((this.totalArr[this.totalArr.length - 1]) + this.pageSizeTotal)
				}
			}
    }
  },
  mounted () {
		this.setPages();
	},
  watch: {
    'total'() {
			this.setPages();
		},
		'perPage'() {
			this.setPages();
		},
		'lastPage'() {
			this.setPages();
		},
		'page'() {
			this.setPages();
		}
  }
}
</script>

<style lang="scss">
  .component-pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .view-page {
			font-size: 16px;
			font-weight: 500;
			color: #3c4858;

			.page-size {
				width: 117px;
				height: 35px;
				margin: 0 17px 0 13px;
				// padding: 11px 9px 11px 20px;
				padding-left: 12px;
				border: solid 1px #c1cfe3;
				border-radius: 5px;
				background-color: #fff;
				font-size: 16px;
				font-weight: 600;
				color: #3c4858;
			}

			.page-size:focus {
				outline: none;
				box-shadow: 0px 0px;
			}
		}

    *, ::after, ::before {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
    }

    #components-app {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      
      > table {
        border: 2px solid rgba(#444, 50%);
        border-radius: 5px;
        cell-padding: 0;
        border-spacing: 0;
        
        > thead {
            border-bottom: 1px solid rgba(#444, 50%);
            > tr > th {
                padding: 10px 12px;
                margin-top: -4px;
                
                &:not(:last-child) {
                    border-right: 1px solid #ddd;
                }
            }
        }
        
        > tbody {
            > tr {
                &:nth-child(odd) {
                    td {
                        background-color: #ddd;
                    }
                }
                
                > td {
                    padding: 6px 5px;
                    
                    &:not(last-child) {
                        border-right: 1px solid #ddd;
                    }
                }
            }
        }
      }
    }

    ul.pagination {
      display: flex;
      padding-left: 0;
      list-style: none;
      border-radius: .25rem;
      justify-content: flex-end;
      margin-top: 20px;

      li.page-item {
        padding: 0px;
        margin: 0;

        a.page-link {
            cursor: pointer;
            min-width: 41px;
            height: 41px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            padding: 0 12px;
            color: #15466e;
        }
            
        &.active >
        a.page-link {
            color: #fff;
            cursor: pointer;
            border-color: #15466e;
            background-color: #15466e;
        }

        a:focus {
          box-shadow: none;
        }
      }
      li.disabled {
        a.page-link {
          color: rgba(21, 70, 110, 0.53);
        }
      }
    }
  }
</style>
