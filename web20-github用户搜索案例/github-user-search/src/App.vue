<template>
    <div class="container">
        <Search></Search>
        <List></List>
    </div>
</template>

<script>
    // 直接引入会做严格检查，引入的文件中若使用了不存在的资源会报错
    // 此时可以放在public文件夹中，然后在index.html中进行引入
    // import './assets/css/bootstrap.css';
    import Search from "./components/Search";
    import List from "./components/List";
    
    export default {
        name: 'App',
        components: {
            Search, List
        }
    }
</script>

<style>

</style>
