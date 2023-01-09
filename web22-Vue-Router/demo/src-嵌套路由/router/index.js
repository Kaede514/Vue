// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"
import Message from "../pages/Message"
import News from "../pages/News"

// 创建并暴露路由器
export default new VueRouter({
    routes: [
        // 一级路由
        {path: '/about', component: About},
        {path: '/home', component: Home,
            // 二级路由，path中不要加/，会自动加
            children: [
                {path: 'message', component: Message},
                {path: 'news', component: News}
            ]
        }
    ]
})
    