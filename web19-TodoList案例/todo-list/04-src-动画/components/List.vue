<template>
    <ul class="todo-main">
        <transition-group name="todo" appear>
            <Item v-for="todo in todoList" :key="todo.id" :todo="todo"></Item>
        </transition-group>
    </ul>
</template>

<script>
    import Item from "./Item";

    export default {
        name: "List",
        props: ['todoList'],
        components: {
            Item
        }
    }
</script>

<style scoped lang="less">
    @keyframes anime1 {
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
    }
    
    /*main*/
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }
    
    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>