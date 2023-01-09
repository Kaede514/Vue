<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search"
                   v-model="keyWord" @keyup.enter="searchUsers"/>
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                keyWord: ''
            }
        },
        methods: {
            searchUsers() {
                if (!this.keyWord.trim()) return;
                // 请求前更新数据
                this.$bus.$emit('updateListData',
                    {isFirst: false, isLoading: true, errorMsg: '', userList: []}
                );
                this.$http.get(`/search/users?q=${this.keyWord}`).then(resp => {
                    // 请求成功后更新数据
                    this.$bus.$emit('updateListData',
                        {isLoading: false, errorMsg: '', userList: resp.data.items}
                    );
                }, error => {
                    // 请求失败后更新数据
                    this.$bus.$emit('updateListData',
                        {isLoading: false, errorMsg: error.message, userList: []}
                    );
                });
            }
        }
    }
</script>

<style scoped lang="less">

</style>
