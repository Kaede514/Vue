<template>
    <div class="app">
        <h2>App组件，{{person.name}} {{person.age}}</h2>
        <Child></Child>
    </div>
</template>

<script>
    import Child from "./components/Child"
    import {provide, reactive} from "vue";

    export default {
        name: 'App',
        components: {Child},
        setup() {
            let person = reactive({
                name: 'kaede', age: 20,
                pet: {name: 'grass', age: 3}
            });
            // 给后代组件传递数据
            provide('pet', person.pet);
            
            return {person};
        }
    }
</script>

<style>
    .app {
        padding: 10px;
        background-color: pink;
    }
</style>
