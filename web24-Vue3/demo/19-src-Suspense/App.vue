<template>
    <div class="app">
        <h2>App组件</h2>
        <!-- <Child></Child> -->
        <Suspense>
            <template v-slot:default>
                <Child></Child>
            </template>
            <template v-slot:fallback>
                <h3>稍等，加载中...</h3>
            </template>
        </Suspense>
    </div>
</template>

<script>
    // 静态引入
    // import Child from "./components/Child"
    import {defineAsyncComponent} from "vue";
    // 动态引入/异步引入
    const Child = defineAsyncComponent(() => import('./components/Child'))

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
