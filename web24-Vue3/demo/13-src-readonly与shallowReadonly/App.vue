<template>
    <h2>人的信息：{{person.name}} {{person.age}}</h2>
    <h2>宠物的信息：{{person.pet.name}} {{person.pet.age}}</h2>
    <button @click="person.age++">点击人的年龄加1</button>
    <button @click="person.pet.age++">点击宠物的年龄加1</button>
</template>

<script>
    import {reactive, readonly} from "vue"

    export default {
        name: 'App',
        setup() {
            // 此处没必要写reactive，但是有一种情况是使用别人提供的响应式组件
            // 但又不能改，此时可以用readonly
            let person = reactive({
                name: 'kaede', age: 20,
                pet: {name: 'grass', age: 3}
            });
            person = readonly(person);
        
            return {
                person
            };
        }
    }
</script>
