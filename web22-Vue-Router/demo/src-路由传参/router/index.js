// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"
import Message from "../pages/Message"
import News from "../pages/News"
import Detail from "@/pages/Detail";

// 创建并暴露路由器
export default new VueRouter({
    routes: [
        // 一级路由
        {path: '/about', component: About},
        {path: '/home', component: Home,
            // 二级路由，path中不要加/，会自动加
            children: [
                {path: 'message', component: Message,
                    children: [
                        // 命名路由
                        // {name: 'detail', path: 'detail', component: Detail}
                        // 添加路由的params参数所需的占位符
                        {name: 'detail', path: 'detail/:id/:title', component: Detail,
                            // props默认为false，若为true则会把该路由组件收到的所有params参数以props的形式传入
                            props: true
                            // 函数式写法，所返回对象中的每一组k-v都会通过props属性传入
                            /* props(route) {
                                return {id: route.params.id, title: route.params.title};
                            } */
                        }
                    ]
                },
                {path: 'news', component: News}
            ]
        }
    ]
})
    