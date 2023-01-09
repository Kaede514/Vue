<template>
    <!-- 组件的结构 -->
    <div class="stu">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    // 组件交互相关代码
    /* export default {
        student: Vue.extend({
            data() {
                return {
                    name: '张三',
                    sex: '男'
                }
            }
        })
    } */
    /* export default Vue.extend({
        data() {
            return {
                name: '张三',
                sex: '男'
            }
        }
    }) */
    // Vue.extend({})可简写为{}
    export default {
        // 给组件起名
        name: 'Student',
        data() {
            return {
                name: '张三',
                sex: '男'
            }
        }
    }
</script>

<style>
    /* 组件的样式 */
    .stu {
        background-color: pink;
    }
</style>
