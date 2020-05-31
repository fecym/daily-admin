import { EChartOption } from 'echarts'

export default {
  title: {
    text: '',
    top: -4.5,
    left: 5,
    textStyle: {
      color: '#008ACD',
      fontSize: 13,
      fontWeight: 'lighter'
    }
  },
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    boundaryGap: false,
    axisTick: {
      show: false
    }
  },
  grid: {
    left: 10,
    right: 10,
    bottom: 20,
    top: 30,
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    },
    padding: 8
  },
  yAxis: {
    axisTick: {
      show: false
    }
  },
  legend: {
    data: []
  },
  series: []
} as EChartOption<EChartOption.SeriesLine>
