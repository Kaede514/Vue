<template>
    <h2>人的信息：{{name}} {{age}}</h2>
    <h2>宠物的信息：{{pet.name}} {{pet.age}}</h2>
    <button @click="age++">点击人的年龄加1</button>
    <button @click="pet.age++">点击宠物的年龄加1</button>
</template>

<script>
    import {reactive, toRef, toRefs} from "vue"

    export default {
        name: 'App',
        setup() {
            let person = reactive({
                name: 'kaede', age: 20,
                pet: {name: 'grass', age: 3}
            });
            let petAge = toRef(person.pet, 'age');
            console.log(petAge);
            let x = toRefs(person);
            console.log(x);
        
            return {
                // person,
                // name: toRef(person, 'name')
                ...x
            };
        }
    }
</script>
