<template>
    <div class="stu">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js';

    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                sex: '男'
            }
        },
        mounted() {
            // 订阅消息(第一个参数习惯用_作为占位符，因为一般用不到)
            this.pubId = pubsub.subscribe('hello', (_, data) => {
                console.log('Student中...', _, data);
            });
        },
        beforeDestroy() {
            // 取消订阅
            pubsub.unsubscribe(this.pubId);
        }
    }
</script>

<style scoped>
    .stu {
        background-color: pink;
    }
</style>
