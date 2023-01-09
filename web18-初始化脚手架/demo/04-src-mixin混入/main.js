// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// import {mixin, mixin2} from "./mixin";

// 关闭Vue的生产提示
Vue.config.productionTip = false
// Vue.mixin(mixin)
// Vue.mixin(mixin2)

// 创建Vue实例对象
new Vue({
    // 将App组件放入容器中
    render: h => h(App)
}).$mount('#app')