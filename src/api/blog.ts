import request from '@/utils/request'
const API = '/api/blog'
export const getBlogSummaryInfo = (params?: object) =>
  request({
    url: API + '/summary',
    method: 'GET',
    params
  })
