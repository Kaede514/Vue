<template>
    <div>
        <h2>宠物姓名：{{name}}</h2>
        <h2>宠物年龄：{{age}}</h2>
        <button @click="sendPetName">点击发送姓名给App</button>
        <button @click="unbind">解绑事件</button>
        <button @click="death">销毁Pet组件</button>
    </div>
</template>

<script>
    export default {
        name: 'Pet',
        data() {
            return {
                name: '小草',
                age: 3
            }
        },
        methods: {
            sendPetName() {
                // 触发Pet组件实例身上的kaede事件
                this.$emit('kaede', this.name);
            },
            unbind() {
                // 解绑单个自定义事件
                // this.$off('kaede');
                // 解绑多个自定义事件
                // this.$off(['kaede']);
                // 解绑所有自定义事件
                this.$off();
            },
            death() {
                // 销毁当前Pet组件实例，销毁后该实例的自定义事件全部失效
                this.$destroy();
            }
        }
    }
</script>
