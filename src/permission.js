// 登录鉴权

// to(去哪里),from（从哪里来）,next（是否进入）

// 引入路由
import router from "./router"
// 引入vuex
import store from "./store"

// 定义白名单
const whiteList=['/login','/404','/401']



router.beforeEach((to, from, next) => {
  console.log(store.getters.token)
    if(store.getters.token){
      if(to.path=='/login'){
        next('/')
      }else{
        next()
      }
    }else{
      // 查找不到返回-1，大于-1是白名单
      if(whiteList.indexOf(to.path)>-1){
        next()
      }else{
        next('/login')
      }
    }
})
