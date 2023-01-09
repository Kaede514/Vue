<template>
    <button @click="sayHello">点击问候</button>
</template>

<script>
import {getCurrentInstance, inject} from "vue";

    export default {
        name: 'App',
        setup() {
            const appContext = getCurrentInstance().appContext;
            let name = inject('name');
            function sayHello() {
                appContext.config.globalProperties.hello(name);
            }
            
            return {sayHello};
        }
    }
</script>
