import Layout from '@/layout/index.vue'

export default {
  path: '/transfer',
  component: Layout,
  redirect: '/transfer/record',
  // 转账管理
  meta: { title: 'transfer-accounts', icon: 'summary' },
  children: [
    {
      path: 'record',
      name: 'transfer-list',
      component: () =>
        import(
          /* webpackChunkName: "transfer-accounts" */ '@/views/transfer-accounts/index.vue'
        ),
      meta: { title: 'transfer-accounts', icon: 'summary', showParent: true }
    },
    {
      // path: ":id(\\d+)",
      path: 'details',
      name: 'transfer-details',
      component: () =>
        import(
          /* webpackChunkName: "transfer-details" */ '@/views/transfer-accounts/details.vue'
        ),
      // props: true,
      meta: { title: 'transfer-details', hidden: true }
    },
    {
      // path: ":id(\\d+)",
      path: 'timeline',
      name: 'transfer-timeline',
      component: () =>
        import(
          /* webpackChunkName: "transfer-timeline" */ '@/views/transfer-accounts/timeline.vue'
        ),
      // props: true,
      meta: { title: 'transfer-timeline', icon: 'timeline', showParent: true }
    }
  ]
}
