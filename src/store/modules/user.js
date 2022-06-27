import {login} from "../../api/sys"
import md5 from "md5"


const state={
    
};

const mutations={
   
};

const actions={
  // login方法
  // 两个参数 context 载荷userInfo
    login(context,userInfo){
      // userInfo里面结构出用户名和密码
      let {username,password}=userInfo;
      // return new Promise判断成功或者失败 
      return new Promise((resolve,reject)=>{
        // 调用登录接口
        // response接收到成功后的数据
         login({username,password:md5(password)}).then(response=>{
          console.log(response)
          // 返回成功的结果
          resolve()
          // 返回失败的结果
        }).catch(error=>{
          reject()
        })
      })
    }
};

const getters={

};

export default{
  state,mutations,actions,getters
}