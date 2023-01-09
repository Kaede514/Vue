<template>
    <div class="stu">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStuName">点击发送姓名给App</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        props: ['getStuName'],
        data() {
            return {
                name: '张三',
                sex: '男'
            }
        },
        methods: {
            sendStuName() {
                this.getStuName(this.name);
            }
        }
    }
</script>

<style scoped>
    .stu {
        background-color: pink;
    }
</style>
