<template>
    <div>
        <Student></Student>
        <Pet></Pet>
    </div>
</template>

<script>
    // 引入组件，脚手架中.vue后缀可以省略
    import Student from "./Student.vue";
    import Pet from "./Pet";
    
    export default {
        name: "App",
        // 注册组件
        components: {
            Student,
            Pet
        }
    }
</script>
