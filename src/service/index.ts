import ApiRequest from './request'

const apiRequest = new ApiRequest({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: import.meta.env.VITE_TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      //携带token拦截
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('请求拦截失败')
      return error
    },
    responseInterceptor: (res) => {
      console.log('响应拦截成功')
      return res
    },
    responseInterceptorCatch: (error) => {
      console.log('响应拦截失败')
      return error
    }
  }
})

export default apiRequest
