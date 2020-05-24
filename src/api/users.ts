import request from '@/utils/request'
import { isValidURL } from '@/utils/validate'
import { DEFAULT_AVATAR } from '@/utils/constant'

const API = '/api/user'

export const login = (username: string, password: string) =>
  request({
    url: API + '/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })

export const getUserInfo = () => {
  const userInfo = JSON.parse(
    window.sessionStorage.getItem('userInfo') as string
  )
  const avatar = DEFAULT_AVATAR
  userInfo.avatar = isValidURL(userInfo.headPic) ? userInfo.headPic : avatar
  return {
    data: {
      avatar,
      introduction: '',
      ...userInfo
    }
  }
}

export const updateInfo = (data: object) =>
  request({
    url: API + '/update/userInfo',
    method: 'POST',
    data
  })

export const updatePassword = (data: object) =>
  request({
    url: API + '/update/password',
    method: 'POST',
    data
  })

export const getAccounts = (params?: object) =>
  request({
    url: API + '/get/accounts',
    method: 'GET',
    params
  })

export const createAccounts = (data: object) =>
  request({
    url: API + '/add/account',
    method: 'POST',
    data
  })

export const switchGuide = (data: object) =>
  request({
    url: API + '/switch/guide',
    method: 'POST',
    data
  })

export const logout = () =>
  request({
    url: '/user/logout',
    method: 'post'
  })
