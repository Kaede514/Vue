<template>
    <div class="son">
        <h2>Son组件</h2>
        <Dialog></Dialog>
    </div>
</template>

<script>
    import Dialog from "./Dialog";

    export default {
        name: "Son",
        components: {Dialog}
    }
</script>

<style scoped lang="less">
    .son {
        padding: 10px;
        background-color: #409EFF;
    }
</style>