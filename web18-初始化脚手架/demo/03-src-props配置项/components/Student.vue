<template>
    <div class="stu">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{myAge + 10}}</h2>
        <h2>学生爱好：{{hobby}}</h2>
        <button @click="updateAge">点击年龄加1</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                // props中的配置先于data
                myAge: this.age
            }
        },
        // 简单声明接收，未传入则为undefined
        // props: ['age', 'sex']
        // 接收时对数据进行类型限制，类型不匹配则报错
        /* props: {
            age: Number,
            sex: String
        } */
        // 接收时对数据进行类型限制、默认值的指定和必要性的限制
        props: {
            age: {
                type: Number,   // 类型
            },
            sex: {
                type: String,
                required: true  // 是否必需
            },
            hobby: {
                default: '听音乐'  // 未传时的默认值
            }
        },
        methods: {
            updateAge() {
                this.myAge++;
            }
        }
    }
</script>

<style>
    .stu {
        background-color: pink;
    }
</style>
