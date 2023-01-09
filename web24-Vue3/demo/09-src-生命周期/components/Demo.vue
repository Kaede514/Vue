<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点击加1</button>
</template>

<script>
    import {onBeforeMount, onMounted, ref} from "vue";

    export default {
        name: "Demo",
        setup() {
            let sum = ref(0);
            
            // 通过组合API的形式使用生命周期钩子
            console.log('setup...');
            onBeforeMount(() => {
                console.log('onBeforeMount...');
            });
            onMounted(() => {
                console.log('onMounted...');
            });
            
            return {sum};
        },
        // 通过配置项的形式使用生命周期钩子
        beforeCreate() {
            console.log('beforeCreate...');
        },
        created() {
            console.log('created...');
        },
        beforeMount() {
            console.log('beforeMount...');
        },
        mounted() {
            console.log('mounted...');
        },
        beforeUnmount() {
            console.log('beforeUnmount...');
        },
        unmounted() {
            console.log('unmounted...');
        }
    }
</script>
