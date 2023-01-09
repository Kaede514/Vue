// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 也可以安装全局事件总线
/* const Demo = Vue.extend({});
const demo = new Demo();
Vue.prototype.x = demo; */

// 创建Vue实例对象
new Vue({
    // 将App组件放入容器中
    render: h => h(App),
    beforeCreate() {
        // 安装全局事件总线
        Vue.prototype.$bus = this;
    }
}).$mount('#app')