<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)"/>
            <!-- 如下代码也能完成功能，但不建议这样写，修改了props，有点违反原则 -->
            <!-- <input type="checkbox" v-model="todo.completed"/> -->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name: "Item",
        props: ['todo', 'checkTodo', 'deleteTodo'],
        methods: {
            handleCheck(id) {
                // 通知App组件将对应todo对象的completed值取反
                this.checkTodo(id);
            },
            handleDelete(id) {
                // 通知App组件删除对应的todo对象
                if(confirm('确定删除吗')) this.deleteTodo(id);
            }
        }
    }
</script>

<style scoped lang="less">
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    
        label {
            float: left;
            cursor: pointer;
    
            li input {
                vertical-align: middle;
                margin-right: 6px;
                position: relative;
                top: -1px;
            }
        }
        button {
            float: right;
            display: none;
            margin-top: 3px;
        }
        &:before {
            content: initial;
        }
        &:last-child {
            border-bottom: none;
        }
        &:hover {
            background-color: #eee;
        }
        &:hover button {
            display: block;
        }
    }
</style>