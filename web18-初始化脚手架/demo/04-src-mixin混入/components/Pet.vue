<template>
    <div>
        <h2>宠物姓名：{{name}}</h2>
        <h2>宠物年龄：{{age}}</h2>
        <button @click="showName">点击展示姓名</button>
    </div>
</template>

<script>
    import {mixin} from '../mixin'
    
    export default {
        name: 'Pet',
        data() {
            return {
                name: '小草',
                age: 3
            }
        },
        /* methods: {
            showName() {
                alert(this.name);
            }
        } */
        mixins: [mixin]
    }
</script>
