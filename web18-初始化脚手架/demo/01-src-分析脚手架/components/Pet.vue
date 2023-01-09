<template>
    <div>
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
