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

export const getFileList = (params?: object) =>
  request({
    url: FILE_API + '/get/list',
    method: 'GET',
    params
  })

export const deleteFile = (params?: object) =>
  request({
    url: FILE_API + '/delete',
    method: 'POST',
    params
  })
