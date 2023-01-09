<template>
    <div class="wrapper">
        <Category title="美食" :listData="foods">
            <img slot="center" src="./assets/1.jpg" alt="">
            <a slot="footer" href="#">更多美食</a>
        </Category>
        <Category title="游戏" :listData="games">
            <a slot="footer" href="#">单击游戏</a>
            <a slot="footer" href="#">网络游戏</a>
        </Category>
        <Category title="电影" :listData="films">
            <video slot="center" src="./assets/恋ひ恋ふ縁.mp4" controls></video>
            <!-- <template slot="footer"> -->
            <!-- template标签中可以使用v-slot:xx写法 -->
            <template v-slot:footer>
                <div style="display: flex;justify-content: space-evenly">
                    <a href="#">经典</a>
                    <a href="#">热门</a>
                    <a href="#">推荐</a>
                </div>
                <h4>欢迎前来观影</h4>
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
