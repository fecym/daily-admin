/*
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-07-06 20:35:32
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-07-06 20:35:32
 */
import request from '@/utils/request'
const API = '/api/consume'
export const getConsumeList = (params?: object) =>
  request({
    url: API + '/findConsumeList',
    method: 'GET',
    params
  })

export const getCurrentMonthList = (params?: object) =>
  request({
    url: API + '/get/currentMonthStatistics',
    method: 'GET',
    params
  })

// 新增消费记录
export const addConsumeRecord = (data: object) =>
  request({
    url: API + '/add/consumeRecord',
    method: 'POST',
    data
  })

// 更新消费记录
export const updateConsumeInfo = (data: object) =>
  request({
    url: API + '/update/consumeInfo',
    method: 'POST',
    data
  })

// 获取首页图表数据
export const getEchartsInfo = (params?: object) =>
  request({
    url: API + '/get/hometEchartsInfo',
    method: 'GET',
    params
  })

// 获取汇总数据
export const getSummaryAnalyzeData = () =>
  request({
    url: API + '/summary/monthAmounts',
    method: 'GET'
  })
