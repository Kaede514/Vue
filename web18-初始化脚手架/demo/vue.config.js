const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            // page的入口
            entry: 'src/main.js'
        }
    },
    devServer: {
        // 端口号
        port: 8088,
        // 开启代理服务器(方式一)，告诉代理服务器要将请求转发给谁
        // proxy: 'http://rap2api.taobao.org'
        // 开启代理服务器(方式二)
        proxy: {
            // 请求前缀，匹配时使用代理服务器转发
            '/app': {
                target: 'http://rap2api.taobao.org',
                // 重写路径，key是正则匹配条件，value是转换后的字符串
                // pathRewrite: {'^/app': ''},
                // 用于支持websocket，默认为true
                // ws: true,
                // 用于控制请求头中的host值，是否和请求的服务器端口一致，默认为true
                // changeOrigin: true
            }
        }
    },
    // 关闭语法检查
    lintOnSave: false
})
