<template>
    <div class="son">
        <h2>Son组件，{{pet.name}} {{pet.age}}</h2>
    </div>
</template>

<script>
    import {inject} from "vue";

    export default {
        name: "Son",
        setup() {
            let pet = inject('pet');
            return {pet};
        }
    }
</script>

<style scoped lang="less">
    .son {
        background-color: #409EFF;
    }
</style>