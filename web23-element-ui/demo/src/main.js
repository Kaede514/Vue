// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui'
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'

// 按需引入组件，样式会自动引入
import {Button, Row, DatePicker} from "element-ui"

Vue.config.productionTip = false
// 应用ElementUI
// Vue.use(ElementUI)
// 注册全局组件，参数分别为组件名和组件
Vue.component(Button.name , Button)
Vue.component('el-row', Row)
Vue.component(DatePicker.name, DatePicker)

// 创建Vue实例对象
new Vue({
    // 将App组件放入容器中
    render: h => h(App)
}).$mount('#app')
