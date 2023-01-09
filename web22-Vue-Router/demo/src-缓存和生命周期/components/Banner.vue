<template>
    <div>
        <h1>Vue Router Demo</h1>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="go">Go</button>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        methods: {
            back() {
                // 后退
                this.$router.back();
            },
            forward() {
                // 前进
                this.$router.forward();
            },
            go() {
                // 参数为n，正数n表示连续前进n步，负数n表示连续后退n步
                this.$router.go(-2);
            }
        }
    }
</script>

<style scoped lang="less">
    h1 {
        text-align: center;
        margin-bottom: 20px;
    }
</style>