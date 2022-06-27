const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  devServer:{
    open:false,
    port:9999,
    proxy:{
      '/api':{
        target:'https://imooc-admin.lgdsunday.club/prod-api',
        changeOrigin:true,
        pathRewrite:{'^/api':''}
      }
    }
  }
});
