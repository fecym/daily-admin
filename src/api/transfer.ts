import request from '@/utils/request'
const API = '/api/transfer'

export const createTransferRecord = (data: object) =>
  request({
    url: API + '/create/record',
    method: 'POST',
    data
  })

export const updateTransferRecord = (data: object) =>
  request({
    url: API + '/update/record',
    method: 'POST',
    data
  })

export const getTransferList = (params?: object) =>
  request({
    url: API + '/get/list',
    method: 'GET',
    params
  })

export const getTransferInfo = (params?: object) =>
  request({
    url: API + '/get/transfer/info',
    method: 'GET',
    params
  })

export const getAllTransferRecords = (params?: object) =>
  request({
    url: API + '/get/all/list',
    method: 'GET',
    params
  })
