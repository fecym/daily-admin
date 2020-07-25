import Layout from '@/layout/index.vue'

export default {
  path: '/file',
  component: Layout,
  redirect: '/file/list',
  // 转账管理
  meta: { title: 'transfer-accounts', icon: 'summary' },
  children: [
    {
      path: 'list',
      name: 'file-list',
      component: () =>
        import(
          /* webpackChunkName: "file-list" */ '@/views/file-system/list.vue'
        ),
      meta: { title: 'file-list', icon: 'file-dir', showParent: true }
    }
  ]
}
