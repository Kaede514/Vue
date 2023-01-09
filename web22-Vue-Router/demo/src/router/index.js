// 该文件用于创建整个应用的路由器
import  VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"
import Message from "../pages/Message"
import News from "../pages/News"
import Detail from "@/pages/Detail";

// 创建并暴露路由器
const router = new VueRouter({
    mode: 'history',
    routes: [
        // 一级路由
        // 使用meta配置项配置路由源信息
        {path: '/about', component: About, meta: {isAuth: true, title: '关于'}},
        {path: '/home', component: Home, meta: {title: '主页'},
            // 独享路由守卫，路由器进行规则对比时进入之前被调用
            beforeEnter(to, from, next) {
                console.log('beforeEnter...');
                // 放行
                next();
            },
            // 二级路由，path中不要加/，会自动加
            children: [
                {path: 'message', component: Message, meta: {title: '消息'},
                    children: [
                        {path: 'detail', component: Detail, meta: {title: '详情'}}
                    ]
                },
                {path: 'news', component: News, meta: {title: '新闻'}}
            ]
        }
    ]
})

// 全局前置路由守卫，初始化和每次路由切换前被调用
router.beforeEach((to, from, next) => {
    console.log('router.beforeEach...');
    console.log(from);
    console.log(to);
    if (to.meta.isAuth) {
        if (to.query.a === '1') {
            next();
        } else {
            alert('无权查看');
        }
    } else {
        // 放行
        next();
    }
})
// 全局后置路由守卫，初始化和每次路由切换后被调用
router.afterEach((to, from) => {
    console.log('router.afterEach...');
    // /下无法直接配置meta，为undefined，可通过或运算符配置默认标题
    document.title = to.meta.title || 'demo';
})

export default router
    