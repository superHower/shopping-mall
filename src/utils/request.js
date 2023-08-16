import store from '@/store'
import axios from 'axios'
import { Toast } from 'vant'

// 1. 创建 axios 实例 (避免污染原始的 axios 实例)
const instance = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000
})

// 2. 请求拦截器
instance.interceptors.request.use(function (config) {
  Toast.loading({
    message: '加载中...',
    forbidClick: true, // 禁止背景点击 - 节流处理 - 防止多次请求
    loadingType: 'spinner', // 配置loading图标
    duration: 0 // 不会自动消失
  })

  // 只要有token，就在请求时携带，便于请求需要授权的接口
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }

  return config
}, function (error) {
  return Promise.reject(error)
})

// 3. 响应拦截器
instance.interceptors.response.use(function (response) {
  const res = response.data // 默认axios会多包装一层data

  if (res.status !== 200) { // 2xx 状态码 - 服务器响应成功
    Toast(res.message)
    return Promise.reject(res.message) // 抛出一个错误的promise
  } else { // 正确，清除loading效果
    Toast.clear()
  }
  return res
}, function (error) { // 超出2xx 状态码 - 服务器响应失败
  return Promise.reject(error)
})

// 导出配置好的实例
export default instance
