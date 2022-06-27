<template>
  <div class="login-container">

    <el-form class="login-form" :rules="loginRules"  :model="loginForm">

      <!-- title -->
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <!-- 用户名 -->
      <el-form-item prop="username">
        <i class="el-icon-user-solid"></i>
        <el-input v-model.trim="loginForm.username" placeholder="username" type="text">
        </el-input>
      </el-form-item>

      <!-- 密码 -->
       <el-form-item prop="password">
        <i class="el-icon-lock"></i>
        <el-input 
        v-model.trim="loginForm.password" 
        placeholder="password" 
        :type="passwordType">
        </el-input>
        <i v-if="this.passwordType=='password'" class="el-icon-view showPwd" @click="onChangePwdType"></i>
        <span v-else class="iconfont icon-biyan showPwd" @click="onChangePwdType"></span>
      </el-form-item>

      <!-- 登录 -->
      <el-form-item>
        <el-button type="primary" style="width:100%">登录</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>



<script>
import App from '@/App.vue';
export default {
  components: { App },
  data() {
     var validatePassword = (rule, value, callback) => {
        if(value.length<6){
          callback(new Error('密码不能小于6位'));
        }else{
          callback()
        }
      }
    return {
      // 自定义密码效验
      loginForm:{
        username:"super-admin",
        password:"123456",
      },
      loginRules: {
          username: [
            { required: true, message: '用户名为必填项', trigger: 'blur' },
          ],
          password: [
           { validator: validatePassword, trigger: 'blur' }
          ],
        },
        // 定义password
        passwordType:'password'
    }
  },
  methods: {
    onChangePwdType(){
      this.passwordType=this.passwordType=='password'?'text':'password'
    }
  },
};
</script>




<style scoped lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

// 大盒子
.login-container{
  width: 100%;
  height: 100%;
  background-color: $bg;
  overflow: hidden;
  // 表单盒子
  .login-form{
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    padding: 160px 35px 0;
    overflow: hidden;
    // 每个input框
    ::v-deep .el-form-item{
      border: 1px solid rgba(225,225,225,0.1);
      border-radius: 5px;
      color: #454545;
      background: rgba(0,0,0,0.1);
      // input
      .el-input{
        display: inline-block;
        height: 47px;
        width: 85%;
        input{
          background: transparent;
          outline: none;
          border: 0;
          -webkit-appearance: none;
          border-radius: 0px;
          padding: 12px 5px 12px 15px;
          color: $light_gray;
          height: 47px;
          caret-color: $cursor;//设置光标的颜色
        }
      }
    }
    .title-container{
      position: relative;
      .title{
        font-size: 26px;
        color: $light_gray;
        text-align: center;
        margin: 0 auto 40px auto;
      }
    }
  }
  .showPwd{
    position: absolute;
    right: 13px;
    top: 15px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .el-icon-user-solid{
    padding-left: 10px;
  }
  .el-icon-lock{
    padding-left: 10px;
  }
}
</style>
