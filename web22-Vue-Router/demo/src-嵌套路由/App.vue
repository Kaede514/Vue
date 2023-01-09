<template>
    <div class="wrapper">
        <Banner></Banner>
        <!-- 原始html中使用a标签实现页面的跳转 -->
        <!-- <a href="">Home</a> -->
        <!-- <a href="">About</a> -->
        <!-- Vue中借助router-link实现路由的切换，router-link会被转为a标签 -->
        <div class="content">
            <div class="left">
                <router-link to="/home" active-class="active">Home</router-link>
                <router-link to="/about" active-class="active">About</router-link>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from "./components/Banner";;
    
    export default {
        name: "App",
        components: {
            Banner
        }
    }
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .wrapper {
        margin: 40px auto;
        width: 600px;
        
        .content {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            height: 200px;
            border: 1px solid #aaa;
            border-radius: 4px;
        
            .left {
                display: flex;
                flex-direction: column;
                width: 100px;
                height: 80px;
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
            .right {
                width: 400px;
            }
        }
    }
</style>