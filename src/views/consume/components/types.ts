/*
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-11-09 14:46:35
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-11-09 14:53:11
 */
export interface ITableConfig {
  label: string
  prop: string
  // 是否是时间
  time?: boolean
  width?: string | number
  // 弹框展示标题
  title?: string
  // 消费详情字段
  details?: string
}

export interface IQuery {
  dateArr: [string, string] | null
  startAt: string | null | undefined
  endAt: string | null | undefined
  curPage: number
  pageSize: number
}
