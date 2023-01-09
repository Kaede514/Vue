<template>
    <!-- <transition name="todo" appear> -->
        <li>
            <label>
                <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)"/>
                <span v-show="!todo.isEdit">{{todo.title}}</span>
                <input type="text" :value="todo.title" v-show="todo.isEdit"
                       @blur="handleBlur(todo, $event)" @keydown.enter="handleBlur(todo, $event)" ref="ipt">
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
            <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
        </li>
    <!-- </transition> -->
</template>

<script>
    export default {
        name: "Item",
        props: ['todo'],
        methods: {
            handleCheck(id) {
                // 通知App组件将对应todo对象的completed值取反
                this.$bus.$emit('checkTodo', id);
            },
            handleDelete(id) {
                // 通知App组件删除对应的todo对象
                if(confirm('确定删除吗')) this.$bus.$emit('deleteTodo', id);
            },
            handleEdit(todo) {
                // 当前修改props里的属性是为了熟悉写法，以后可以定义一个临时变量
                // todo.isEdit = true;
                if (todo.hasOwnProperty('isEdit')) {
                    todo.isEdit = true;
                } else {
                    this.$set(todo, 'isEdit', true);
                }
                // 此时模板还未重新解析，input框处于隐藏状态，获取焦点无效
                // this.$refs.ipt.focus();
                // 让输入框获取焦点
                this.$nextTick(() => {
                    this.$refs.ipt.focus();
                });
            },
            handleBlur(todo, e) {
                todo.isEdit = false;
                if (!e.target.value.trim()) return alert('待办事项不能为空');
                this.$bus.$emit('updateTodo', todo.id, e.target.value);
            }
        }
    }
</script>

<style scoped lang="less">
    /* @keyframes anime1 {
        from {
            transform: translateX(50%);
        }
        to {
            transform: translateX(0);
        }
    }
    
    .todo-enter-active {
        animation: anime1 0.8s;
    }
    .todo-leave-active {
        animation: anime1 0.8s reverse;
    } */
    
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