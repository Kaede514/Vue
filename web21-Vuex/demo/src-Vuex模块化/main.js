// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入vuex，在脚手架中写import时，vue会扫描文件中所有的import语句
// 并将所有的import语句按照编写代码的顺序汇总到文件顶部
// import Vuex from 'vuex'
// 引入store，默认找的是index文件
// import store from './store/index'
import store from './store'

Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
    // 将App组件放入容器中
    render: h => h(App),
    store
}).$mount('#app')
