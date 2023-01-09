<template>
    <div>
        <!-- 展示用户列表 -->
        <div class="row" v-show="info.userList.length">
            <div class="card" v-for="user in info.userList" :key="user.login">
                <a :href="user.html_url" target="_blank">
                    <img :src="user.avatar_url" style='width: 100px'/>
                </a>
                <p class="card-text">{{user.login}}</p>
            </div>
        </div>
        <!-- 展示欢迎词 -->
        <h1 v-show="info.isFirst">欢迎使用！</h1>
        <!-- 展示加载中 -->
        <h1 v-show="info.isLoading">加载中...</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="info.errorMsg">请求出错：{{info.errorMsg}}</h1>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                info: {
                    userList: [],
                    isFirst: true,
                    isLoading: false,
                    errorMsg: ''
                }
            }
        },
        mounted() {
            this.$bus.$on('updateListData', dataObj => {
                // 直接写的话isFirst为undefined，解析后为false，不影响功能
                // this.info = dataObj;
                this.info = {...this.info, ...dataObj};
            });
        }
    }
</script>

<style scoped lang="less">
    .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }
    
    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    
        img {
            margin-bottom: .75rem;
            border-radius: 100px;
        }
    }
    
    .card-text {
        font-size: 85%;
    }
</style>
