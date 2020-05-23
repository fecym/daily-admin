import axios from 'axios'
import { Message, MessageBox, Loading } from 'element-ui'

import { UserModule } from '@/store/modules/user'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000
  // withCredentials: true // send cookies when cross-domain requests
})
let loading: any = {}

// Request interceptors
service.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    if (UserModule.token) {
      config.headers.Authorization = 'Bearer ' + UserModule.token
    }
    loading = Loading.service({
      text: '拼命加载中...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.8)'
    })
    return config
  },
  (error) => {
    loading.close && loading.close()
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    loading.close && loading.close()
    const res = response.data
    if (res.code === 200) {
      return res.data
    } else {
      return Promise.reject(res)
    }
  },
  (error) => {
    loading.close && loading.close()
    if (error.response && (error.response.status === 402 || error.response.status === 401)) {
      MessageBox.confirm(
        '你已被登出，可以取消继续留在该页面，或者重新登录',
        '确定登出',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        UserModule.LogOut().then(() => {
          location.reload() // To prevent bugs from vue-router
        })
      })
    } else {
      Message({
        message: error.response.data.msg || error,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error.response)
    }
  }
)

export default service
