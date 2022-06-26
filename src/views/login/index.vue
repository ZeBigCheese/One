<template>
  <div class="login-container">

    <el-form>

      <!-- title -->
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <!-- 用户名 -->
      <el-form-item>
        <el-input placeholder="username" type="text">
           <i slot="prefix" class="el-icon-user-solid"></i>
        </el-input>
      </el-form-item>

      <!-- 密码 -->
       <el-form-item>
        <el-input placeholder="password" type="password">
           <i slot="prefix" class="el-icon-user-solid"></i>
           <i slot="suffix" class="el-icon-user-solid"></i>
        </el-input>
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

<style></style>
