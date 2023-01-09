<template>
    <div class="wrapper">
        <Category title="美食">
            <template scope="theData">
                <ul>
                    <li v-for="(item, index) in theData.foods" :key="index">{{item}}</li>
                </ul>
            </template>
        </Category>
        <Category title="美食">
            <!-- <template scope="theData"> -->
            <!-- 解构赋值 -->
            <template scope="{foods}">
                <ol>
                    <li v-for="(item, index) in foods" :key="index">{{item}}</li>
                </ol>
            </template>
        </Category>
        <Category title="美食">
            <template slot-scope="theData">
                <h3 v-for="(item, index) in theData.foods" :key="index">{{item}}</h3>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from "./components/Category"

    export default {
        name: "App",
        components: {
            Category
        }
    }
</script>

<style scoped lang="less">
    .wrapper {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 800px;
        
        img, video {
            width: 100%;
        }
    }
</style>
