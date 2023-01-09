<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="animate__animated animate__bounce" appear
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp">
            <h2 v-show="isShow">Hello</h2>
        </transition>
    </div>
</template>

<script>
    import 'animate.css';

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
</style>