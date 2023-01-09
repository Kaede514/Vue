<template>
    <div class="home">
        <h2>Home中的内容</h2>
        <div class="detail">
            <div class="top">
                <router-link to="/home/message" active-class="active">Message</router-link>
                <router-link to="/home/news" active-class="active">News</router-link>
            </div>
            <div class="bottom">
                <!-- include中配置要缓存的组件名，若不配置include，默认全部缓存 -->
                <keep-alive include="News">
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        // 通过路由规则，进入该组件之前被调用
        beforeRouteEnter(to, from, next) {
            console.log('beforeRouteEnter...');
            next();
        },
        // 通过路由规则，离开该组件之前被调用
        beforeRouteLeave(to, from, next) {
            console.log('beforeRouteLeave...');
            next();
        }
    }
</script>

<style scoped lang="less">
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #aaa;
        border-radius: 4px;
        
        h2 {
            margin-bottom: 10px;
        }
        .detail {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 200px;
            
            .top {
                display: flex;
                border: 1px solid #ccc;
                border-radius: 4px;
                overflow: hidden;
    
                a {
                    text-decoration: none;
                    width: 100px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    color: #333;
                }
                .active {
                    background-color: #409EFF;
                }
            }
            .bottom {
                margin-bottom: 5px;
            }
        }
    }
</style>
