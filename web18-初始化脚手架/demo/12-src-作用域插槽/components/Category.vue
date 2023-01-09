<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :foods="foods"></slot>
    </div>
</template>

<script>
    export default {
        name: "Category",
        props: ['title'],
        data() {
            return {
                foods: ['火锅', '烧烤', '小龙虾', '柠檬水']
            }
        }
    }
</script>

<style scoped lang="less">
    .category {
        background-color: pink;
        width: 200px;
        height: 300px;
        
        h3 {
            text-align: center;
            background-color: orange;
        }
    }
</style>