<template>
    <div class="child">
        <h2>Child组件</h2>
        <Son></Son>
    </div>
</template>

<script>
    import Son from "./Son";

    export default {
        name: "Child",
        components: {Son}
    }
</script>

<style scoped lang="less">
    .child {
        padding: 10px;
        background-color: orange;
    }
</style>