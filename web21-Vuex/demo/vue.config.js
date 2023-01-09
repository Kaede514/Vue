const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查
  lintOnSave: false,
  devServer: {
    // 指定端口号，默认为8080
    port: 8088
  }
})
