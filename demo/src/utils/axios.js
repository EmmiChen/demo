import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.headers.common['X-Requested-With'] = ' XMLHttpRequest '
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'
// 增加ie兼容，防止get接口被缓存
axios.defaults.headers.common['Pragma'] = 'no-cache'
axios.defaults.headers.common['Cache-Control'] = 'no-cache'

// 记录正在进行的请求
const pending = {}

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

/**
  * 失败回调
  * 接口报错，验证是否登陆，失败则触发全局的登出并转到登陆页面
  * @param {object} response 返回参数
  */
function responseDoError (err) {
  const {
    data = {},
    status
  } = err.response || {}
  const message = data && data.message
  if (status === 500) {
    Message.error({ message: message || '接口超时' })
  }
  if (status === 401) {
    // 告知主工程，登陆超时，触发主工程弹窗提示
    window.parent.postMessage(JSON.stringify({ method: 'login', timeout: new Date().getTime() }), '*')
  }
  if (err) console.log(err, message)
  return Promise.reject(err)
}
// 特殊的sys 的 getBaseDataList没有code
function responseDo (res) {
  const { code, message } = res.data
  if (code && code !== 200 && message) Message.error({ message })
  return res.data
}

/**
 * 修改请求配置并返回
 * @param {object} config 请求配置
 * @returns
 */
function requestConfig (config) {
  // 开发模式，加指定服务端请求头参数
  if (sysConfig['prefer-service-zone']) {
    config.headers.common['prefer-service-zone'] = sysConfig['prefer-service-zone']
  }
  // 标记当前请求唯一标识
  const requestData = encodeURIComponent(config.url + JSON.stringify(config.data))
  // 发送请求之前，拦截重复请求(即当前正在进行的相同请求)
  if (pending[requestData]) {
    pending[requestData]('请勿重复请求')
  }
  delete pending[requestData]
  config.cancelToken = new axios.CancelToken((c) => {
    pending[requestData] = c
  })
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) config.headers.common.accessToken = accessToken
  return config
}

const _axios = axios.create(config)

// Add a request interceptor
_axios.interceptors.request.use(config => requestConfig(config),
  (error) => Promise.reject(error)
)

axios.interceptors.request.use(config => requestConfig(config),
  (error) => Promise.reject(error)
)

// Add a response interceptor
_axios.interceptors.response.use((response) => responseDo(response), (error) => responseDoError(error)
)

axios.interceptors.response.use((response) => responseDo(response), (error) => responseDoError(error)
)

Vue.prototype.$axios = _axios
