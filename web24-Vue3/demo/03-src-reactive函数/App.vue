<template>
    <h2>宠物：{{pet.name.fname + pet.name.lname}} {{pet.age}}</h2>
    <button @click="changePet">改变宠物</button>
    <ul>
        <li v-for="(h, index) in hobbies" :key="index">{{h}}</li>
    </ul>
    <button @click="changeHobby">改变爱好</button>
</template>

<script>
    import {reactive} from 'vue'

    export default {
        name: 'App',
        setup() {
            // 数据
            let pet = reactive({name: {fname: 'gra', lname: 'ss'}, age: 3});
            let hobbies= reactive(['anime', 'game']);
            
            // 方法
            function changePet() {
                console.log(pet);
                pet.name.lname = 'de';
                pet.age++;
            };
            function changeHobby() {
                console.log(hobbies);
                hobbies[0] = 'comic';
            }
    
            return {
                pet, hobbies, changePet, changeHobby
            };
        }
    }
</script>
