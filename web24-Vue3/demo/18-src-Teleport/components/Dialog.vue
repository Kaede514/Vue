<template>
    <div>
        <button @click="isShow = true">点击弹窗</button>
        <!-- to中可以写选择器 -->
        <teleport to="body">
            <div class="mask" v-if="isShow">
                <div class="dialog">
                    <h3>弹窗中的内容</h3>
                    <button @click="isShow = false">关闭弹窗</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
    import {ref} from "vue";

    export default {
        name: "Dialog",
        setup() {
            let isShow = ref(false);
            return {isShow};
        }
    }
</script>

<style scoped lang="less">
    .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(200, 200, 200, 0.5);
        
        .dialog {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 200px;
            background-color: #4cae4c;
        }
    }
</style>