<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot name="center">
            <ul>
                <li v-for="(item, index) in listData" :key="index">{{item}}</li>
            </ul>
        </slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    export default {
        name: "Category",
        props: ['listData', 'title']
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