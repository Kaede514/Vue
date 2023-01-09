<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 动画 -->
        <transition appear>
            <h2 v-show="isShow">Hello1</h2>
        </transition>
        <transition name="a1" appear>
            <h2 v-show="isShow">Hello2</h2>
        </transition>
        <!-- 过渡 -->
        <transition-group name="a2" appear>
            <h3 v-show="isShow" key="1">Hello3</h3>
            <h3 v-show="!isShow" key="2">Hello4</h3>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: "Anime",
        data() {
            return {
                isShow: true
            }
        }
    }
</script>

<style scoped lang="less">
    h2 {
        background-color: pink;
    }
    
    @keyframes anime1 {
        from {
            transform: translateX(-200px);
        }
        to {
            transform: translateX(0);
        }
    }
    
    .v-enter-active {
        animation: anime1 1s;
    }
    .v-leave-active {
        animation: anime1 1s reverse;
    }
    
    .a1-enter-active {
        animation: anime1 0.5s;
    }
    .a1-leave-active {
        animation: anime1 0.5s reverse;
    }
    
    h3 {
        background-color: pink;
    }
    .a2-enter-active, .a2-leave-active {
        transition: all 1s;
    }
    // 进入的起点，离开的终点
    .a2-enter, .a2-leave-to {
        transform: translateX(-400px);
    }
    // 进入的终点，离开的起点
    .a2-enter-to, .a2-leave {
        transform: translateX(0);
    }
</style>