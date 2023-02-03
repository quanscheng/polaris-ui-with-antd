import { handleProxyToast } from '@/utils/handleProxyToast'
import axios from 'axios'
import Cookies from 'js-cookie'

const { REACT_APP_API_ORIGIN } = process.env

const api = axios.create({
  baseURL: REACT_APP_API_ORIGIN,
})

// 请求拦截
const handleRequest = (config) => {
  const token = Cookies.get('Authorization')
  // 拦截器统一注入token, 作为其他自定义headers的扩展
  config.headers = {
    Authorization: token,
    ...config.headers,
  }

  return config
}
// 请求错误
const handleRequestErr = (error) => {
  return Promise.reject(error)
}

// 响应拦截
const handleResponse = (response) => {
  return response.data
}
// 相应错误
const handleResponseErr = (error) => {
  handleProxyToast(error?.response?.data?.message)
  return Promise.reject(error)
}

// use
api.interceptors.request.use(handleRequest, handleRequestErr)
api.interceptors.response.use(handleResponse, handleResponseErr)

export { api }
