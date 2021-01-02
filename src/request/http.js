import axios from 'axios'
const http = axios.create({
  baseUrl: '',
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606891400760514154070017"}'
  }
})

// 请求拦截
http.interceptors.request.use(config => {
  return config
})

// 响应拦截
http.interceptors.response.use(res => {
  if (res.status === 200) {
    return res
  }
})

export default http
