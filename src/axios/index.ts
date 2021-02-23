/* eslint-disable default-param-last */
import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'

class Axios {
  timeout: number;
  baseURL: string; // TODO
  withCredentials: boolean;
  headers: object;
  instance: AxiosInstance;

  constructor () {
    this.timeout = 1000
    // this.baseURL = 'https://www.fastmock.site/mock/c9158f30b6bdc106c2cd2d07130e1676'
    this.baseURL = 'http://hjwu.ga'
    this.withCredentials = true
    this.headers = { 'Content-Type': 'application/json' }
    this.instance = this.createInstance()
    this.setInterceptors()
  }

  // 创建实例
  createInstance () {
    return axios.create({
      timeout: this.timeout,
      baseURL: this.baseURL,
      withCredentials: this.withCredentials,
      headers: this.headers
    })
  }

  // 设置拦截器
  setInterceptors = () => {
    this.instance.interceptors.request.use(
      request => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = localStorage.getItem('token')
        token && (request.headers.Authorization = token)
        return request
      },
      error => {
        return Promise.reject(error)
      })

    // 响应拦截器 我想要取的数据要通过response.data.data才能取到，但是use方法的返回值固定是这个类型，那么我不能直接返回response.data.data TODO
    this.instance.interceptors.response.use((response: AxiosResponse<any>): Promise<AxiosResponse<any>> => { // 响应拦截器
      if (response.status === 200) {
        return Promise.resolve(response.data.data)
      }
      return Promise.reject(response)
    }, (error) => {
      if (error.response) { // 常见响应错误码处理
        switch (error.response.status) {
          // 401: 未登录
          // 未登录则跳转登录页面，并携带当前页面的路径
          // 在登录成功后返回当前页面，这一步需要在登录页操作。
          case 401:
            // this.$router.replace({
            //   path: '/login',
            //   query: { redirect: router.currentRoute.fullPath }
            // });
            break
          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
          case 403:
            // Toast({
            //   message: '登录过期，请重新登录',
            //   duration: 1000,
            //   forbidClick: true
            // });
            // 清除token
            localStorage.removeItem('token')
            // store.commit('loginSuccess', null);
            // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
            // setTimeout(() => {
            //   router.replace({
            //     path: '/login',
            //     query: {
            //       redirect: router.currentRoute.fullPath
            //     }
            //   });
            // }, 1000);
            break
          // 404请求不存在
          case 404:
            // Toast({
            //   message: '网络请求不存在',
            //   duration: 1500,
            //   forbidClick: true
            // })
            break
          // 其他错误，直接抛出错误提示
          default:
          // Toast({
          //   message: error.response.data.message,
          //   duration: 1500,
          //   forbidClick: true
          // })
        }
        return Promise.reject(error.response)
      }
      // 断网
      if (!window.navigator.online) { // 断网处理
        // todo: jump to offline page
        return -1
      }
      return Promise.reject(error)
    })
  }

  // get
  get (url: string, params = {}, throwError?: Function): AxiosPromise<any> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url,
      params: {
        _t: Date.now(), // 添加时间戳
        ...params
      }
    }
    return this.instance(config)
  }

  post (url: string, params = {}, throwError?: Function): AxiosPromise<any> {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      data: params
    }
    return this.instance(config)
  }

  put (url: string, params = {}, throwError?: Function): AxiosPromise<any> {
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url,
      data: params
    }
    return this.instance(config)
  }

  delete (url: string, params = {}, throwError?: Function): AxiosPromise<any> {
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url,
      data: params
    }
    return this.instance(config)
  }
}

// 暴露一个Axios实例对象，为什么不能直接暴露类，直接使用类的方法:
// 1.因为直接使用类无法调用构造函数生成this.instance,那么调用类的方法酒会报错，我猜想声明一个静态属性应该可以解决这个问题，这样相当于每次使用默认导出的axios
// 2.这样每次调用的都是Axios类生成的新的实例对象，每次也都创建了新的axios对象，这样使得程序更有扩展性。对于多个服务，这种方式更好，可以设置不同置的拦截器和不同的的响应格式。
export default new Axios()
