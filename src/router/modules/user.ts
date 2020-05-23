/*
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-06-08 13:23:30
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-06-08 13:23:30
 */
import Layout from '@/layout/index.vue'
export default {
  path: '/user',
  component: Layout,
  redirect: '/user/info',
  // 用户管理
  meta: { title: 'user-mgt', icon: 'user-mgt' },
  children: [
    {
      path: 'user-info',
      name: 'userInfo',
      component: () => import(/* webpackChunkName: "userInfo" */ '@/views/user/userInfo.vue'),
      // 个人设置
      meta: { title: 'user-settings', icon: 'usersettings', showParent: true }
    },
    {
      path: 'account-mgt',
      name: 'account-mgt',
      component: () => import(/* webpackChunkName: "account-mgt" */ '@/views/user/account-mgt.vue'),
      // 账户管理
      meta: { title: 'account', icon: 'user', roles: [2] }
    }
  ]
}
