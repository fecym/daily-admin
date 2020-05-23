/*
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-10-23 21:32:33
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-10-23 23:20:34
 */
import { EChartOption, EChartsResponsiveOption } from 'echarts'

export const leftChartsOption: EChartOption | EChartsResponsiveOption = {
  title: {
    text: '当天消费',
    textStyle: {
      // fontWeight: 'normal',
      fontSize: 16
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/> {b} : ￥{c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    type: 'plain',
    icon: 'circle',
    right: '20',
    top: 'middle',
    data: [
      '餐饮',
      '出行',
      '零食',
      '转账',
      '旅游',
      '生活用品',
      '化妆品',
      '购物',
      '其他'
    ]
  },
  series: [
    {
      name: '每日消费统计',
      type: 'pie',
      radius: '75%',
      center: ['40%', '50%'],
      label: {
        normal: {
          show: true,
          formatter: '{b}'
          // position: 'inside'
        },
        lableLine: {
          normal: { show: false },
          emphasis: { show: true }
        },
        emphasis: { show: true }
      },
      data: [],
      animation: true,
      animationType: 'scale',
      animationEasing: 'elasticOut'
    }
  ],
  color: [
    '#F2637B',
    '#FAD337',
    '#00FF00',
    '#3AA0FF',
    '#80aa00',
    '#f22fEE',
    '#B6A2DE',
    '#912CEE',
    '#4DCB73',
    '#2EC7C9'
  ]
}
export const rightChartsOption: EChartOption | EChartsResponsiveOption = {
  title: {
    text: '当月消费',
    textStyle: {
      fontSize: 16
      // fontWeight: 'normal'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/> {b}: ￥{c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    right: '15',
    top: 'middle',
    data: [
      '餐饮',
      '出行',
      '零食',
      '转账',
      '旅游',
      '生活用品',
      '化妆品',
      '购物',
      '其他'
    ]
  },
  series: [
    {
      name: '当月消费',
      type: 'pie',
      radius: ['60%', '80%'],
      center: ['40%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          formatter: '{b} {c}',
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '16',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: true
        }
      },
      data: [],
      animation: true,
      animationType: 'scale',
      animationEasing: 'elasticOut'
    }
  ],
  color: [
    '#912CEE',
    '#00FF00',
    '#FAD337',
    '#f22fEE',
    '#3AA0FF',
    '#4DCB73',
    '#F2637B',
    '#80aa00',
    '#B6A2DE',
    '#2EC7C9'
  ]
}
