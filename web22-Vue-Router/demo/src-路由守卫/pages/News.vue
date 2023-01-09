<template>
    <div>
        <ul>
            <li :style="{opacity}">欢迎学习Vue</li>
            <li>new1 <input type="text"></li>
            <li>new2 <input type="text"></li>
            <li>new3 <input type="text"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "News",
        data() {
            return {
                opacity: 1
            }
        },
        // 当路由组件被缓存时不会销毁
        /* mounted() {
            this.timer = setInterval(() => {
                this.opacity -= 0.01;
                if (this.opacity <= 0) this.opacity = 1;
            }, 16);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        } */
        // 路由组件独有的生命周期钩子
        // 激活钩子，切到该组件时调用
        activated() {
            this.timer = setInterval(() => {
                this.opacity -= 0.01;
                if (this.opacity <= 0) this.opacity = 1;
            }, 16);
        },
        // 失活钩子，切走到别的组件时调用
        deactivated() {
            clearInterval(this.timer);
        }
    }
</script>

<style scoped lang="less">
    input {
        width: 140px;
    }
</style>
