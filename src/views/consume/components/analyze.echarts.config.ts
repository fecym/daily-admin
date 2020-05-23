import echarts from 'echarts'
export default {
  title: {
    text: '消费分析',
    // subtext: '每月消费统计折线图，get消费最高的，给出优化建议',
    left: '40'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    },
    formatter: '时间：{b} <br/> 金额：￥{c}'
  },
  xAxis: {
    show: true,
    data: [],
    triggerEvent: true
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      textStyle: {
        color: '#999'
      }
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: {
    type: 'bar',
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      },
      emphasis: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#2378f7' },
          { offset: 0.7, color: '#2378f7' },
          { offset: 1, color: '#83bff6' }
        ])
      }
    },
    data: []
  }
}

// Enable data zoom when user click bar.
// var zoomSize = 6;
// myChart.on("click", function(params) {
//   console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
//   myChart.dispatchAction({
//     type: "dataZoom",
//     startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
//     endValue:
//       dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
//   });
// });
