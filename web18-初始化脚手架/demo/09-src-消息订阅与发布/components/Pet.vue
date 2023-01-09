<template>
    <div>
        <h2>宠物姓名：{{name}}</h2>
        <h2>宠物年龄：{{age}}</h2>
        <button @click="sendPetName">将宠物姓名传递给学生</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js';

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
                pubsub.publish('hello', this.name);
            }
        }
    }
</script>
