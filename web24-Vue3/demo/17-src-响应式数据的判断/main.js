// 引入的不再是Vue构造函数，而是名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象并挂载(类似与Vue2中的vm，但比vm更加轻量)
createApp(App).mount('#app')
