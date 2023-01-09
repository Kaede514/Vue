<template>
    <div class="detail">
        <hr/>
        <ul>
            <!-- <li>消息编号：{{$route.query.id}}</li> -->
            <!-- <li>消息标题：{{$route.query.title}}</li> -->
            <!-- <li>消息编号：{{$route.params.id}}</li> -->
            <!-- <li>消息标题：{{$route.params.title}}</li> -->
            <li>消息编号：{{id}}</li>
            <li>消息标题：{{title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        props: ['id', 'title']
    }
</script>

<style scoped lang="less">
    .detail {
        position: relative;
    
        ul {
            margin-top: 16px;
        }
        hr {
            position: absolute;
            top: -8px;
            left: -20px;
            width: 160px;
        }
    }
</style>
