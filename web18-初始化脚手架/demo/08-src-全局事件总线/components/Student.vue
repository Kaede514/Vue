<template>
    <div class="stu">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                sex: '男'
            }
        },
        mounted() {
            this.$bus.$on('hello', data => {
                console.log('Student中data = ' + data);
            })
        },
        beforeDestroy() {
            // 组件销毁时，其身上的自定义事件也会解绑，但此处是给$bus绑定的事件
            // 此组件销毁后，不会解绑$bus上的自定义事件，会占用资源，故需在销毁前解绑事件
            this.$bus.$off('hello');
        }
    }
</script>

<style scoped>
    .stu {
        background-color: pink;
    }
</style>
