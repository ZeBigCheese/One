<template>
  <div class="login-container">

    <el-form class="login-form">

      <!-- title -->
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <!-- 用户名 -->
      <el-form-item>
        <i class="el-icon-user-solid"></i>
        <el-input placeholder="username" type="text">
        </el-input>
      </el-form-item>

      <!-- 密码 -->
       <el-form-item>
        <i class="el-icon-user-solid"></i>
        <el-input placeholder="password" type="password"></el-input>
        <i class="el-icon-user-solid showPwd"></i>
      </el-form-item>

      <!-- 登录 -->
      <el-form-item>
        <el-button type="primary" style="width:100%">登录</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
export default {};
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
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
