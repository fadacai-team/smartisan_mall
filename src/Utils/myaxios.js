import axios from 'axios'
const instance = axios.create({
    baseURL:'https://shopapi.smartisan.com/',
    timeout:1000
})
// 请求 @todo 登录之后的 auth_token 要附带在 config.data 里面
instance.interceptors.request.use(function(config){
    return config
},function(error){
    return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(function(response){
    return response.data
},function(error){
    return Promise.reject(error)
})


export default instance