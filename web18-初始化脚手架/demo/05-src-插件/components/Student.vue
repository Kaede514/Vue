<template>
    <div class="stu">
        <h2>学生姓名：{{name | mySlice}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：<span v-big2="age"></span></h2>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三abcdef',
                age: 16
            }
        },
        mounted() {
            this.hello();
        }
    }
</script>

<style>
    .stu {
        background-color: pink;
    }
</style>
