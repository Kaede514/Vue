// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
    // 将App组件放入容器中
    render: h => h(App)
}).$mount('#app')
