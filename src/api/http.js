import axios from 'axios'
import store from '@/store'
// import * as types from '@/store/mutation-types'
import router from '@/router'

// axios 配置
axios.defaults.timeout = 25000
//axios.defaults.headers.common["content-type"]="multipart/form-data"
axios.defaults.baseURL = '/'
// axios.defaults.baseURL = '/users/'
// axios.defaults.baseURL = 'http://172.83.154.37:3000/'

// http request 拦截器
axios.interceptors.request.use(function (config) {
return config
}, function (err) {
return Promise.reject(err)
})

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break

        case 401:
          err.message = '未授权，请登录'
//           401 清除token信息并跳转到登录页面
					if(store.state.user.login){
						store.commit(types.LOGOUT)
						router.replace({
							path:"/",
							query: {redirect: encodeURIComponent(router.currentRoute.fullPath)}
						})
					};
          break

        case 403:
          err.message = '拒绝访问'
          break

        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`
          break

        case 408:
          err.message = '请求超时'
          break

        case 500:
          err.message = '服务器内部错误'
          break

        case 501:
          err.message = '服务未实现'
          break

        case 502:
          err.message = '网关错误'
          break

        case 503:
          err.message = '服务不可用'
          break

        case 504:
          err.message = '网关超时'
          break

        case 505:
          err.message = 'HTTP版本不受支持'
          break

        default:
      }
    }

    return Promise.reject(err)
  })

export default axios