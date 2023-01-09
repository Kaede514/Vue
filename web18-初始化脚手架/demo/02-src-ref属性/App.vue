<template>
    <div>
        <Student ref="stu" id="stu"></Student>
        <h2 v-text="msg" ref="title"></h2>
        <button @click="showDOM">点击输出上方DOM元素</button>
    </div>
</template>

<script>
    import Student from "./components/Student";
    
    export default {
        name: "App",
        components: {
            Student
        },
        data() {
            return {
                msg: 'hello'
            }
        },
        methods: {
            showDOM() {
                // 真实DOM元素
                console.log(this.$refs);
                console.log(this.$refs.title);
                // 组件实例对象
                console.log(this.$refs.stu);
                console.log(document.querySelector('#stu'));
            }
        }
    }
</script>
