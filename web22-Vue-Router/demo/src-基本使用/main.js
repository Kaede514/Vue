// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入Vue-Router
import VueRouter from "vue-router"
// 引入路由器
import router from "./router"

Vue.config.productionTip = false
// 使用插件
Vue.use(VueRouter)

// 创建Vue实例对象
new Vue({
    // 将App组件放入容器中
    render: h => h(App),
    router
}).$mount('#app')
