<template>
    <div>
        <!-- 默认传入的是字符串 -->
        <Student sex="男" age="18"></Student>
        <!-- 加了:后，双引号中会当作js表达式解析 -->
        <Student sex="女" :age="16"></Student>
    </div>
</template>

<script>
    import Student from "./components/Student";
    
    export default {
        name: "App",
        components: {
            Student
        }
    }
</script>
