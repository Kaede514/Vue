<template>
    <h2>App组件</h2>
    <h2>姓名：{{name}}</h2>
    <!-- 模板中不需要.value，会自动读取 -->
    <h2>年龄：{{age}}</h2>
    <button @click="addAge">年龄加1</button>
    <h2>宠物：{{pet.name}} {{pet.age}}</h2>
    <button @click="changePet">改变宠物</button>
    <ul>
        <li v-for="(h, index) in hobbies" :key="index">{{h}}</li>
    </ul>
    <button @click="changeHobby">改变爱好</button>
</template>

<script>
    import {h, ref} from 'vue'

    export default {
        name: 'App',
        setup() {
            // 数据
            let name = ref('kaede');
            let age = ref(20);
            let pet = ref({name: 'grass', age: 3});
            let hobbies= ref(['anime', 'game']);
            
            // 方法
            function addAge() {
                console.log(age);
                name = '';
                age.value++;
            };
            function changePet() {
                console.log(pet.value);
                pet.value.age++;
            };
            function changeHobby() {
                console.log(hobbies.value);
                hobbies.value[0] = 'comic';
            }
    
            // 返回一个对象(常用)
            return {
                name, age, addAge, pet, hobbies, changePet, changeHobby
            };
            // 返回一个渲染函数
            // return () => h('h1', 'h1标签内容');
        }
    }
</script>

<style>

</style>
