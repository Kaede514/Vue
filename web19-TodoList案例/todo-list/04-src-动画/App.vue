<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <TodoHeader @addTodo="addTodo"></TodoHeader>
            <List :todoList="todoList"></List>
            <TodoFooter :todoList="todoList" @checkAllTodo="checkAllTodo"
                        @clearAllTodo="clearAllTodo"></TodoFooter>
        </div>
    </div>
</template>

<script>
    import TodoHeader from "./components/TodoHeader";
    import List from "./components/List";
    import TodoFooter from "./components/TodoFooter";

    export default {
        name: 'App',
        components: {
            TodoHeader, List, TodoFooter
        },
        data() {
            return {
                // TodoHeader无法将数据传给List，故todoList需要放在App中
                todoList: []
            }
        },
        methods: {
            // 添加一个todo
            addTodo(todo) {
                this.todoList.unshift(todo);
            },
            // 勾选或取消勾选一个todo
            checkTodo(id) {
                this.todoList.forEach((todo) => {
                    if (todo.id === id) todo.completed = !todo.completed;
                });
            },
            // 删除一个todo
            deleteTodo(id) {
                this.todoList = this.todoList.filter((todo) => todo.id !== id);
            },
            // 全选或取消全选
            checkAllTodo(done) {
                this.todoList.forEach((todo) => todo.completed = done);
            },
            // 清除所有已经完成的todo
            clearAllTodo() {
                if(confirm('确定删除已完成的任务吗'))
                    this.todoList = this.todoList.filter((todo) => !todo.completed);
            },
            // 修改一个todo
            updateTodo(id, title) {
                this.todoList.forEach((todo) => {
                    if(todo.id === id) todo.title = title;
                });
            }
        },
        watch: {
            todoList: {
                deep: true,
                handler(val) {
                    localStorage.setItem('todoList', JSON.stringify(val));
                }
            }
        },
        mounted() {
            this.todoList = JSON.parse(localStorage.getItem('todoList')) || [];
            this.$bus.$on('checkTodo', this.checkTodo);
            this.$bus.$on('deleteTodo', this.deleteTodo);
            this.$bus.$on('updateTodo', this.updateTodo);
        },
        beforeDestroy() {
            this.$bus.off(['checkTodo', 'deleteTodo', 'updateTodo']);
        }
    }
</script>

<style lang="less">
    /*base*/
    body {
        background: #fff;
    }
    
    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        
        &:focus {
            outline: none;
        }
    }
    
    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
        
        &:hover {
            color: #fff;
            background-color: #bd362f;
        }
    }
    
    .btn-edit {
        margin-right: 5px;
        color: #fff;
        background-color: #409EFF;
        border: 1px solid #2a84e1;
    
        &:hover {
            color: #fff;
            background-color: #409EFF;
        }
    }
    
    .todo-container {
        width: 600px;
        margin: 0 auto;
        
        .todo-wrap {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
    }
</style>
