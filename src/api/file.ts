import request from '@/utils/request'
export const FILE_API = '/api/file'

export const uploadFile = (data?: object) =>
  request({
    url: FILE_API + '/upload',
    method: 'POST',
    data
  })

export const downloadFile = (params?: object) =>
  request({
    url: FILE_API + '/download',
    method: 'GET',
    params
  })
