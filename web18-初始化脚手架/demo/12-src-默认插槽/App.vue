<template>
    <div class="wrapper">
        <Category title="美食" :listData="foods">
            <img src="./assets/1.jpg" alt="">
        </Category>
        <Category title="游戏" :listData="games"></Category>
        <Category title="电影" :listData="films">
            <video src="./assets/恋ひ恋ふ縁.mp4" controls></video>
        </Category>
    </div>
</template>

<script>
    import Category from "./components/Category"

    export default {
        name: "App",
        components: {
            Category
        },
        data() {
            return {
                foods: ['火锅', '烧烤', '小龙虾', '柠檬水'],
                games: ['DDLC', '君彼女', '近月', '素晴日'],
                films: ['film1', 'film2', 'film3', 'film4']
            }
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
