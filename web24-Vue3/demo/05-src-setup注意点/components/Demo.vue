<template>
    <h1>{{msg}}</h1>
    <button @click="sayHello">showHelloMsg</button>
    <slot></slot>
</template>

<script>
    export default {
        name: "Demo",
        props: ['msg'],
        // 对绑定的自定义事件进行声明，否则会出现警告
        emits: ['hello'],
        setup(props, context) {
            console.log('setup...');
            console.log(this);
            console.log(props);
            console.log(context.attrs);
            console.log(context.emit);
            console.log(context.slots);
            
            function sayHello() {
                context.emit('hello', 'kaede');
            }
            
            return {
                sayHello
            }
        },
        beforeCreate() {
            console.log('beforeCreate...');
        }
    }
</script>

<style scoped lang="less">

</style>