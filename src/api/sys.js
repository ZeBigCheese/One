// 引入axios，请求文件
import request from "@/utils/request"

// 登录接口
export const login=(data)=>{
  // return 是为了能够在其他页面进入的时候能够通过 .then的方式接收到请求的数据
  return request({
    url:"/sys/login",
    method:"POST",
    data
  })
}