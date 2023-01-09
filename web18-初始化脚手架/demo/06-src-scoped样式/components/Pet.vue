<template>
    <div class="demo">
        <h2>宠物姓名：{{name}}</h2>
        <h2>宠物年龄：{{age}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Pet',
        data() {
            return {
                name: '小草',
                age: 3
            }
        }
    }
</script>

<style scoped lang="less">
    .demo {
        background-color: orange;
        h2 {
            color: #2c8585;
        }
    }
</style>
