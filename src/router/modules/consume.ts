/*
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-06-09 22:10:12
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-11-09 17:20:32
 */
import Layout from '@/layout/index.vue'

export default {
  path: '/consume',
  component: Layout,
  redirect: '/consume/list',
  // 消费管理
  meta: { title: 'payment', icon: 'consumptions' },
  children: [
    {
      path: 'list',
      name: 'consume-list',
      component: () => import(/* webpackChunkName: "consume-list" */ '@/views/consume/list.vue'),
      // 消费记录
      meta: { title: 'consume-record', icon: 'consume', showParent: true }
    },
    {
      path: 'details',
      name: 'consume-details',
      component: () => import(/* webpackChunkName: "consume-details" */ '@/views/consume/details.vue'),
      // 消费详情
      meta: { title: 'consume-details', hidden: true }
    },
    {
      path: 'analyze',
      name: 'analyze',
      component: () => import(/* webpackChunkName: "monthly-statistics" */ '@/views/consume/analyze.vue'),
      // 消费分分析
      meta: { title: 'consume-statistics', icon: 'analyze' }
    }
    // monthly-statistics
  ]
}
