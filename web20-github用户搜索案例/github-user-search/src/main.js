// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入Axios
import axios from 'axios'

Vue.config.productionTip = false
// 设置基础URL
axios.defaults.baseURL = 'https://api.github.com'
// 将Axios放到Vue的原型上，方便全局使用
Vue.prototype.$http = axios

// 创建Vue实例对象
new Vue({
    // 将App组件放入容器中
    render: h => h(App),
    // 安装全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
}).$mount('#app')
