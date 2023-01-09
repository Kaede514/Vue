<template>
    <div class="todo-footer" v-show="this.todoList.length">
        <label>
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span><span>已完成{{completed}}</span> / 全部{{todoList.length}}</span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: "TodoFooter",
        props: ['todoList', 'checkAllTodo', 'clearAllTodo'],
        computed: {
            completed() {
                // reduce方法做条件统计
                return this.todoList.reduce((pre, todo) => todo.completed ? pre+1 : pre, 0);
            },
            isAll: {
                get() {
                    return this.completed === this.todoList.length;
                },
                set(value) {
                    this.$emit('checkAllTodo', value);
                }
            }
        },
        methods: {
            /* checkAll(e) {
                this.checkAllTodo(e.target.checked);
            } */
            clearAll() {
                this.$emit('clearAllTodo');
            }
        }
    }
</script>

<style scoped lang="less">
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
        
        label {
            display: inline-block;
            margin-right: 20px;
            cursor: pointer;
    
            input {
                position: relative;
                top: -1px;
                vertical-align: middle;
                margin-right: 5px;
            }
        }
        button {
            float: right;
            margin-top: 5px;
        }
    }
</style>