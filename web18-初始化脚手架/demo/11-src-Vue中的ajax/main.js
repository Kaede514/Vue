// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入Axios
import axios from 'axios';

// 关闭Vue的生产提示
Vue.config.productionTip = false
// 将Axios放到Vue的原型上，方便全局使用
// 设置基础URL
// axios.defaults.baseURL = 'http://rap2api.taobao.org'
axios.defaults.baseURL = 'http://localhost:8088'
Vue.prototype.$http = axios

// 创建Vue实例对象
new Vue({
    // 将App组件放入容器中
    render: h => h(App)
}).$mount('#app')