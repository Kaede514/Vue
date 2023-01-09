<template>
    <div class="app">
        <h2>App组件</h2>
        <Child></Child>
    </div>
</template>

<script>
    import Child from "./components/Child"

    export default {
        name: 'App',
        components: {Child},
        setup() {
        
        }
    }
</script>

<style>
    .app {
        padding: 10px;
        background-color: pink;
    }
</style>
