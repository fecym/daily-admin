<!--
 * @Description: 按月消费
 * @Author: chengyuming
 * @Date: 2019-08-11 18:32:16
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-08-11 20:21:01
 -->
<template>
  <main class="analyze-charts-statistics">
    <!-- <pre>{{ monthlyFee }}</pre> -->
    <div
      id="analyze-charts"
      ref="analyze-charts"
    />
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getSummaryAnalyzeData } from '@/api/consume'
import { numberToFixed2Number, formatPrice } from './components/tableHelper'
import echarts, { ECharts } from 'echarts'
import analyzeEchartsOptions from './components/analyze.echarts.config'
@Component
export default class SummaryAnalyze extends Vue {
  private analyzeEcharts: ECharts | object | null = null;
  private analyzeEchartsEl: HTMLCanvasElement | null = null;
  private monthlyFee: any = [];
  private getSummaryAnalyzeData() {
    getSummaryAnalyzeData().then((data: any) => {
      this.monthlyFee = data.map((item: IObject) => numberToFixed2Number(item))
      this.initEcharts()
    })
  }

  private mounted() {
    this.getSummaryAnalyzeData()
  }

  private initEcharts() {
    console.log(this.monthlyFee)
    this.analyzeEchartsEl = this.$refs['analyze-charts'] as HTMLCanvasElement
    this.analyzeEcharts = echarts.init(this.analyzeEchartsEl)
    const dataAxis: string[] = []
    const data: any = []
    // let maxAmount: number = 0
    let totalAmount = 0
    this.monthlyFee.forEach((item: { amount: number, monthlyFee: string }) => {
      dataAxis.push(item.monthlyFee)
      const obj = {
        name: item.monthlyFee,
        value: item.amount
      }
      totalAmount += item.amount
      data.push(obj)
    })
    // 设置x轴
    // @ts-ignore
    analyzeEchartsOptions.xAxis.data = dataAxis
    // @ts-ignore
    analyzeEchartsOptions.series.data = data
    // @ts-ignore
    analyzeEchartsOptions.title.subtext = `自统计以来总消费：${formatPrice(totalAmount)} 元`
    // @ts-ignore
    ;(this.analyzeEcharts as ECharts).setOption(analyzeEchartsOptions)
    // @ts-ignore
    this.analyzeEcharts.on('click', (params: any) => {
      const timeRange: string = JSON.stringify(this.getMonthlongByMonth(params.data.name))
      this.$router.push({ name: 'consume-list', query: { timeRange } })
    })
  }

  private getMonthlongByMonth(month: string): string[] {
    const time = '00:00:00'
    const endDay = this.getMonthLength(month)
    return [`${month}-01 ${time}`, `${month}-${endDay} ${time}`]
  }

  private getMonthLength(month: string) {
    const d = new Date(month)
    const year = d.getFullYear()
    const _month = d.getMonth() + 1
    return new Date(year, _month, 0).getDate()
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.analyze-charts-statistics {
  #analyze-charts {
    padding: 20px;
    margin-bottom: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: calc(100vh - 50px);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
}
</style>
