import request from '@/utils/request'

export const login = (username: string, password: string) =>
  request({
    url: '/api/user/login',
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
  return {
    data: {
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      introduction: '',
      ...userInfo
    }
  }
}

export const updateInfo = (data: object) =>
  request({
    url: '/api/user/update/userInfo',
    method: 'POST',
    data
  })

export const updatePassword = (data: object) =>
  request({
    url: '/api/user/update/password',
    method: 'POST',
    data
  })

export const getAccounts = (params?: object) =>
  request({
    url: '/api/user/get/accounts',
    method: 'GET',
    params
  })

export const createAccounts = (data: object) =>
  request({
    url: '/api/user/add/account',
    method: 'POST',
    data
  })

export const logout = () =>
  request({
    url: '/user/logout',
    method: 'post'
  })
