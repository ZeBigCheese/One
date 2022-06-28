import axios from "axios";
import md5 from "md5"
import { Loading } from "element-ui";
import { Message } from 'element-ui';

console.log(process.env.VUE_APP_BASE_API)
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000,
});


// 添加请求拦截器
service.interceptors.request.use(function (config) {
  const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});



// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('响应拦截器',response.data)
  // 解构出success  message data code
  let {success,message,data,code}=response.data
  if(success){
    Message.success(message)
    return data
  }else{
    Message.error(message)
    return Promise.reject(new Error (message))
  }

  return response;
}, function (error) {
  // 对响应错误做点什么
  Message.error(error.message)
  return Promise.reject(error);
});




// 获取icode、
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

// 导出
export default service