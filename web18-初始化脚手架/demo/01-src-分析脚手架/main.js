// 引入Vue
import Vue from 'vue'
// 引入完整版Vue
// import Vue from 'vue/dist/vue.min.js'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
    // 将App组件放入容器中
    /* render(createElement) {
        // 创建具体的元素
        return createElement(App);
    } */
    render: h => h(App)
    // template: `<App></App>`,
    // components: {App}
}).$mount('#app')