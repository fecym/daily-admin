<template>
  <div
    :class="className"
    :style="{height: height, width: width}"
  />
</template>

<script lang="ts">
import echarts from 'echarts'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import ResizeMixin from '@/components/Charts/mixins/resize'

export interface ILineChartData {
  expectedData: number[]
  actualData: number[]
}

@Component({
  name: 'LineChart'
})
export default class extends mixins(ResizeMixin) {
  // @Prop({ required: true }) private chartData!: ILineChartData
  @Prop({ required: true }) private data!: any
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '350px' }) private height!: string

  // @Watch('chartData', { deep: true })
  // private onChartDataChange(value: ILineChartData) {
  //   this.setOptions(value)
  // }

   @Watch('data', { deep: true })
  private onChartDataChange(value: any) {
    this.setOptions(value)
  }

   mounted() {
     this.$nextTick(() => {
       this.initChart()
     })
   }

   beforeDestroy() {
     if (!this.chart) {
       return
     }
     this.chart.dispose()
     this.chart = null
   }

   private initChart() {
     this.chart = echarts.init(this.$el as HTMLDivElement, 'macarons')
     this.setOptions(this.data)
   }

   private setOptions(chartData: any) {
     if (this.chart) {
       this.chart.setOption(chartData)
     }
   }
}
</script>
