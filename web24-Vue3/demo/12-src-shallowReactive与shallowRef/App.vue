<template>
    <h2>人的信息：{{person.name}} {{person.age}}</h2>
    <h2>宠物的信息：{{person.pet.name}} {{person.pet.age}}</h2>
    <button @click="person.age++">点击人的年龄加1</button>
    <button @click="person.pet.age++">点击宠物的年龄加1</button>
</template>

<script>
    import {shallowReactive} from "vue"

    export default {
        name: 'App',
        setup() {
            let person = shallowReactive({
                name: 'kaede', age: 20,
                pet: {name: 'grass', age: 3}
            });
        
            return {
                person
            };
        }
    }
</script>
