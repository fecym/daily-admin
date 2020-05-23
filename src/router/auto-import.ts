/*
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-10-13 13:42:28
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-10-13 13:46:35
 */
const requireAll = (context: any) => context.keys().map(context)
const routes = require.context('./modules', false, /\.ts$/)
// export default requireAll(routes).map((route: any) => route.default)
// 兼容数组形式的路由格式
export default requireAll(routes).reduce((prev: any, next: any) => prev.concat(next.default), [])
