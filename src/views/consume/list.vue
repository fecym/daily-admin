<!--
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-07-06 20:35:32
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-11-09 17:22:07
 -->
<template>
  <article class="consume-list public-page">
    <section class="serach mb20">
      <el-form
        :inline="true"
        :model="searchQuery"
        class="demo-form-inline"
      >
        <el-form-item label="消费时间">
          <el-date-picker
            v-model="searchQuery.dateArr"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd hh:mm:ss"
          />
        </el-form-item>
      </el-form>
      <div class="search-btn">
        <el-button
          type="primary"
          @click="search"
        >
          查询
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-plus"
          @click="add"
        >
          新增
        </el-button>
      </div>
    </section>
    <list-echarts
      ref="list-charts"
      :consume-info="consumeInfo"
      :current-month="currentMonthInfo"
    />
    <section class="table">
      <el-table
        ref="singleTable"
        :data="list"
        border
        min-height="400"
        max-height="400"
        style="width: 100%;"
        highlight-current-row
        :default-sort="{prop: 'date', order: 'descending'}"
        show-summary
        :summary-method="getSummaries"
        @row-click="checkedRow"
      >
        <el-table-column
          type="index"
          :index="indexMethod"
          label="序号"
          align="center"
          width="50"
        />
        <el-table-column
          v-for="(item, idx) in tableConfigList"
          :key="idx"
          :prop="item.prop"
          align="center"
          :label="item.label"
          :width="item.width || ''"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <span
              v-if="item.time"
              class="modify-btn"
              @click="showDetails(scope.row)"
            >{{ scope.row[item.prop] }}</span>
            <p
              v-else
              class="link"
              @click="showDialogInfo(scope.row[item.details], item.title, scope.row[item.prop])"
            >
              <span>￥</span>
              <span
                :class="{
                  'price': scope.row[item.prop] !== '0.00'
                }"
              >{{ scope.row[item.prop] }}</span>
            </p>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <section class="pagination">
      <el-pagination
        :current-page="searchQuery.curPage"
        :page-sizes="PAGE_SIZES"
        :page-size="searchQuery.pageSize"
        :total="totalRow"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </section>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogFormVisible"
    >
      <section class="info">
        <p
          v-for="(item, idx) in dialogInfoList"
          :key="idx"
          class="info-item"
        >
          {{ idx + 1 }}. {{ item }}
        </p>
      </section>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">
          原来这么花的
        </el-button>
        <el-button
          type="primary"
          @click="dialogFormVisible = false"
        >
          我已了解
        </el-button>
      </div>
    </el-dialog>
  </article>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { IConsumeState } from '@/store/modules/consume'
import { getConsumeList, getCurrentMonthList } from '@/api/consume'
import ListEcharts from './components/list-echarts.vue'
import tableConfig from './components/table.config'
import { parseTime } from '@/utils'
import { ITableConfig, IQuery } from './components/types'
import { numberToFixed2 } from './components/tableHelper'
import { PAGE_SIZES } from '@/utils/constant'

@Component({ components: { ListEcharts } })
export default class ConsumeList extends Vue {
  get PAGE_SIZES() {
    return PAGE_SIZES
  }

  private searchQuery: IQuery = {
    dateArr: null,
    startAt: null,
    endAt: null,
    curPage: 1,
    pageSize: 30
  }

  private tableConfigList: Array<ITableConfig> = tableConfig

  public table: HTMLDivElement | any = null
  private mounted() {
    const timeRange: any = this.$route.query.timeRange
    this.searchQuery.dateArr = timeRange && JSON.parse(timeRange)
    this.table = this.$refs.singleTable as HTMLDivElement
    this.getList()
  }

  // 统计相关
  private totalRow = 1
  private list: IConsumeInfo[] = []
  private consumeInfo: IConsumeInfo | object = {}
  private currentMonthInfo: IConsumeInfo | object = {}
  private checkedRow(row: IConsumeInfo) {
    this.consumeInfo = row
    this.$nextTick(() => {
      // @ts-ignore
      this.$refs['list-charts'].initEcharts()
    })
  }

  private indexMethod(idx: number) {
    return idx + 1 + (this.searchQuery.curPage - 1) * this.searchQuery.pageSize
  }

  private getList() {
    this.searchQuery.startAt = this.searchQuery.dateArr
      ? this.searchQuery.dateArr[0]
      : null
    this.searchQuery.endAt = this.searchQuery.dateArr
      ? this.searchQuery.dateArr[1]
      : null
    getConsumeList(this.searchQuery).then((res: any) => {
      this.list = res.list && res.list.map((item: any) => numberToFixed2(item))
      if (!this.list || !this.list.length) return
      // 设置高亮
      this.table.setCurrentRow(this.list[0])
      this.totalRow = res.total
      this.consumeInfo = this.list[0]
      // 请求当月消费
      this.getCurrentMonth()
    })
  }

  private getCurrentMonth() {
    getCurrentMonthList().then((res: any) => {
      if (!res.statistics) return
      this.currentMonthInfo = numberToFixed2(res.statistics)
      // console.log(this.currentMonthInfo)
      this.$nextTick(() => {
        // @ts-ignore
        this.$refs['list-charts'].initEcharts()
      })
    })
  }

  private search() {
    this.getList()
  }

  // 分页
  private handleSizeChange(val: number) {
    this.searchQuery.pageSize = val
    this.search()
  }

  private handleCurrentChange(val: number) {
    this.searchQuery.curPage = val
    this.search()
  }

  // dialog数据
  private dialogFormVisible = false
  private dialogInfoList: string[] = []
  private dialogTitle = ''
  private showDialogInfo(info: string, title: string, price: number | string) {
    console.log(price, info, title)
    this.dialogInfoList = info ? JSON.parse(info) : []
    this.dialogTitle = title
    if (this.dialogInfoList.length && price !== '0.00') {
      this.dialogFormVisible = true
    }
  }

  // 去详情页
  private showDetails(row: IConsumeInfo) {
    console.log('ConsumeList -> showDetails -> row', row)
    localStorage.setItem('consume-details', JSON.stringify(row))
    this.$router.push({
      name: 'consume-details',
      query: { id: row.id as string }
    })
  }

  // 新增数据
  private add() {
    this.$router.push({ name: 'consume-details' })
  }

  // 表格合计行
  private getSummaries(param: any) {
    const { columns, data } = param
    const sums: string[] | number[] = []
    columns.forEach((column: any, index: number) => {
      if (index === 0) {
        sums[index] = '合计'
        return
      }
      const values = data.map((item: any) => Number(item[column.property]))
      if (!values.every((value: number) => isNaN(value))) {
        sums[index] = values.reduce((prev: any, curr: any) => {
          const value = Number(curr)
          if (!isNaN(value)) {
            return prev + curr
          } else {
            return prev
          }
        }, 0)
        sums[index] = '￥' + (sums[index] as number).toFixed(2)
      } else {
        sums[index] = parseTime(new Date()) as string
      }
    })
    return sums
  }
}
</script>

<style lang="scss" scoped>
.consume-list {
  position: relative;
  padding-bottom: 10px;
  height: calc(100vh - 50px);
  .el-form-item {
    margin-bottom: 0;
  }
  .link {
    margin: 0;
    cursor: pointer;
    .price {
      color: #409eff;
    }
  }
  .info-item {
    text-indent: 2em;
  }
  .serach {
    display: flex;
    align-items: center;
    div.search-btn {
      margin-left: 20px;
    }
  }
  .total-expenditure {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  .pagination {
    text-align: center;
    margin-top: 20px;
    // position: absolute;
    // left: 50%;
    // bottom: 10px;
    // transform: translateX(-50%);
  }
}
</style>
