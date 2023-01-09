<template>
    <div class="stu">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="showName">点击展示姓名</button>
    </div>
</template>

<script>
    // 引入混合
    import {mixin, mixin2} from '../mixin'
    
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                // 混合中的data、methods同名配置以组件的配置的优先
                sex: '男'
            }
        },
        /* methods: {
            showName() {
                alert(this.name);
            }
        } */
        mixins: [mixin, mixin2],
        // 混合中的生命周期钩子和组件中的都会生效，混合中的先生效
        mounted() {
            console.log('Student mounted...');
        }
    }
</script>

<style>
    .stu {
        background-color: pink;
    }
</style>
