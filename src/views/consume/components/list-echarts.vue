<!--
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-07-12 21:15:59
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-11-09 15:13:16
 -->
<template>
  <section
    v-if="isShowEcharts"
    class="chart"
  >
    <div
      ref="leftChart"
      class="chart-height"
    />
    <div
      ref="rightChart"
      class="chart-height"
    />
  </section>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import echarts, { ECharts } from 'echarts'
import { leftChartsOption, rightChartsOption } from './list.echarts'
@Component
export default class ListEcharts extends Vue {
  @Prop({ default: false }) private consumeInfo!: IConsumeInfo
  @Prop({ default: false }) private currentMonth!: IConsumeInfo

  private isShowEcharts = false
  // 两个图表
  public echart1: ECharts | null | object = {}
  public echart2: ECharts | null | object = {}
  public leftChart: HTMLCanvasElement | null = null
  public rightChart: HTMLCanvasElement | null = null
  private initEcharts() {
    if (!this.consumeInfo) {
      this.isShowEcharts = false
      return
    }
    // console.log(this.consumeInfo)
    this.isShowEcharts = true
    const leftData = [
      { name: '餐饮', value: this.consumeInfo.repastPrice },
      this.consumeInfo.vehiclePrice !== '0.00'
        ? { name: '出行', value: this.consumeInfo.vehiclePrice }
        : undefined,
      this.consumeInfo.snacksPrice !== '0.00'
        ? { name: '零食', value: this.consumeInfo.snacksPrice }
        : undefined,
      this.consumeInfo.transferAccounts !== '0.00'
        ? { name: '转账', value: this.consumeInfo.transferAccounts }
        : undefined,
      this.consumeInfo.tripPrice !== '0.00'
        ? { name: '旅游', value: this.consumeInfo.tripPrice }
        : undefined,
      this.consumeInfo.lifePrice !== '0.00'
        ? { name: '生活用品', value: this.consumeInfo.lifePrice }
        : undefined,
      this.consumeInfo.cosmeticPrice !== '0.00'
        ? { name: '化妆品', value: this.consumeInfo.cosmeticPrice }
        : undefined,
      this.consumeInfo.shoppingPrice !== '0.00'
        ? { name: '购物', value: this.consumeInfo.shoppingPrice }
        : undefined,
      this.consumeInfo.otherPrice !== '0.00'
        ? { name: '其他', value: this.consumeInfo.otherPrice }
        : undefined
    ]
    const rightData = [
      { name: '餐饮', value: this.currentMonth.repastPrice },
      { name: '出行', value: this.currentMonth.vehiclePrice },
      { name: '零食', value: this.currentMonth.snacksPrice },
      { name: '转账', value: this.currentMonth.transferAccounts },
      { name: '旅游', value: this.currentMonth.tripPrice },
      { name: '生活用品', value: this.currentMonth.lifePrice },
      { name: '化妆品', value: this.currentMonth.cosmeticPrice },
      { name: '购物', value: this.currentMonth.shoppingPrice },
      { name: '其他', value: this.currentMonth.otherPrice }
    ]
    // @ts-ignore
    leftChartsOption.series[0].data = leftData
    // @ts-ignore
    rightChartsOption.series[0].data = rightData
    // @ts-ignore
    rightChartsOption.title.text = `当月消费：${this.currentMonth.totalAmount}`
    // Vue中DOM更新是异步的，所以我们要把他们放到下一栈执行
    this.$nextTick(() => {
      // 赋值元素
      this.leftChart = this.$refs.leftChart as HTMLCanvasElement
      this.rightChart = this.$refs.rightChart as HTMLCanvasElement
      this.echart1 = echarts.init(this.leftChart)
      this.echart2 = echarts.init(this.rightChart)
      ;(this.echart1 as ECharts).setOption(leftChartsOption)
      ;(this.echart2 as ECharts).setOption(rightChartsOption)
    })
  }

  private dealEchartsData(data: number) {
    return data.toFixed(2)
  }
}
</script>
<style lang="scss" scoped>
.chart {
  margin: 20px 0;
  margin-bottom: 0px;
  display: flex;
  // justify-content: space-around;
  flex-wrap: wrap;
  // align-items: center;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  div {
    // padding: 20px 0;
    box-sizing: border-box;
    width: 40%;
    height: inherit;
  }
  .chart-height {
    height: calc(44vh - 110px);
  }
}
</style>
