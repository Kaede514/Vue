<template>
    <div>
        <h1>Vue Router Demo</h1>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        mounted() {
            console.log(this);
        }
    }
</script>

<style scoped lang="less">
    h1 {
        text-align: center;
        margin-bottom: 20px;
    }
</style>