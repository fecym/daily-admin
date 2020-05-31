import request from '@/utils/request'
const API = '/api/summary'
export const getBlogVisit = (params?: object) =>
  request({
    url: API + '/blog/visit',
    method: 'GET',
    params
  })

export const getConsumeTotalAmountByWeek = (params?: object) =>
  request({
    url: API + '/consume/current/week',
    method: 'GET',
    params
  })

export const getConsumeTotalAmountByYear = (params?: object) =>
  request({
    url: API + '/consume/current/year',
    method: 'GET',
    params
  })

export const getConsumeTotalAmountByMonth = (params?: object) =>
  request({
    url: API + '/consume/current/month',
    method: 'GET',
    params
  })

export const getConsumeRecordByCurrentWeek = () =>
  request({
    url: API + '/consume/week/record',
    method: 'GET'
  })

export const consumeRecordByLast7Day = () =>
  request({
    url: API + '/consume/last7/record',
    method: 'GET'
  })
