<template>
  <el-row
    :gutter="40"
    class="panel-group"
  >
    <el-col
      :xs="12"
      :sm="12"
      :lg="6"
      class="card-panel-col"
    >
      <div
        class="card-panel"
        @click="handleSetLineChartData('blogVisitis')"
      >
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon
            name="peoples"
            class="card-panel-icon"
          />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            博客访问量
          </div>
          <count-to
            :start-val="0"
            :end-val="totalVisits"
            :duration="2600"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col
      :xs="12"
      :sm="12"
      :lg="6"
      class="card-panel-col"
    >
      <div
        class="card-panel"
        @click="handleSetLineChartData('task')"
      >
        <div class="card-panel-icon-wrapper icon-task">
          <svg-icon
            name="task"
            class="card-panel-icon"
          />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            当月完成任务量
          </div>
          <count-to
            :start-val="0"
            :end-val="360"
            :duration="3000"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col
      :xs="12"
      :sm="12"
      :lg="6"
      class="card-panel-col"
    >
      <div
        class="card-panel"
        @click="handleSetLineChartData('consumeMonth')"
      >
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon
            name="summary"
            class="card-panel-icon"
          />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            当月消费金额
          </div>
          <count-to
            :start-val="0"
            :end-val="totalMonthAmount"
            :duration="3200"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col
      :xs="12"
      :sm="12"
      :lg="6"
      class="card-panel-col"
    >
      <div
        class="card-panel"
        @click="handleSetLineChartData('consumeYear')"
      >
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon
            name="money"
            class="card-panel-icon"
          />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            年度消费金额
          </div>
          <count-to
            :start-val="0"
            :end-val="totalYearAmount"
            :duration="3600"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CountTo from 'vue-count-to'
import { BLOG_URL } from '@/utils/constant'
// import { getBlogSummaryInfo } from '@/api/blog'
import {
  getBlogVisit,
  getConsumeTotalAmountByYear,
  getConsumeTotalAmountByMonth
} from '@/api/summary'

@Component({
  name: 'PanelGroup',
  components: {
    CountTo
  }
})
export default class extends Vue {
  private handleSetLineChartData(type: string) {
    this.$emit('handleSetLineChartData', type)
    const clickMap: IObject = {
      blogVisitis: () => window.open(BLOG_URL, '_blank'),
      task: () => false,
      consumeMonth: () => this.$router.push({ name: 'consume-list' }),
      consumeYear: () => false
    }
    clickMap[type]()
  }

  private created() {
    this.initPanelData()
  }

  private totalVisits = 0
  private totalYearAmount = 0
  private totalMonthAmount = 0
  private async initPanelData() {
    try {
      const results: any = await Promise.all([
        getBlogVisit(),
        getConsumeTotalAmountByYear(),
        getConsumeTotalAmountByMonth()
      ])
      this.totalVisits = results[0].totalVisits as number
      this.totalYearAmount = results[1].totalAmount as number
      this.totalMonthAmount = results[2].totalAmount as number
    } catch (error) {
      console.log('extends -> initPanelData -> error', error)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-task {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-task {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
