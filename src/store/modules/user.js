import {login} from "../../api/sys"
import md5 from "md5"
import {setItem,getItem} from "../../utils/storage"
import {TOKEN} from "../../constant/index"

export default{
    namespaced:true,
    state:()=>({
      token: getItem(TOKEN) || ""
    }),

 mutations:{
  //  定义setToken方法
    setToken(state,token){
      state.token=token
      setItem(TOKEN,token)
    }
},

 actions:{
  // login方法
  // 两个参数 commit 载荷userInfo
    login({commit},userInfo){
      // userInfo里面结构出用户名和密码
      let {username,password}=userInfo;
      // return new Promise判断成功或者失败 
      return new Promise((resolve,reject)=>{
        // 调用登录接口
        // response接收到成功后的数据
         login({username,password:md5(password)}).then(response=>{
          // console.log(response)
          // 请求到的token在response里
          commit('setToken',response.token)
          // 返回成功的结果
          resolve()
          // 返回失败的结果
        }).catch(error=>{
          reject()
        })
      })
    }
},
}



