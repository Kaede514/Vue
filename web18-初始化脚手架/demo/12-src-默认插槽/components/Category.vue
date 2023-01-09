<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽，等着组件的使用者进行填充 -->
        <!-- 可以在内部指定默认值，当未传入具体结构时会出现 -->
        <slot>
            <ul>
                <li v-for="(item, index) in listData" :key="index">{{item}}</li>
            </ul>
        </slot>
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