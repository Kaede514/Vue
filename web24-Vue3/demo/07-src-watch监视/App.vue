<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++;msg+='!'">点击加1</button>
    <h2>msg：{{msg}}</h2>
    <hr/>
    <h2>人的信息：{{person.name}} {{person.age}}</h2>
    <h2>宠物的信息：{{person.pet.name}} {{person.pet.age}}</h2>
    <button @click="person.age++;person.pet.age++">点击年龄加1</button>
</template>

<script>
    import {ref, reactive, watch} from "vue"

    export default {
        name: 'App',
        setup() {
            let sum = ref(0)
            let msg = ref('hello');
            let person = reactive({
                name: 'kaede', age: 20,
                pet: {name: 'grass', age: 3}
            });
            
            // 监视ref所定义的一个响应式数据
            watch(sum, (newVal, oldVal) => {
                console.log('newVal = ' + newVal + '  oldVal = ' + oldVal);
            }, {immediate: true});
            
            // 监视ref所定义的多个响应式数据
            /* watch(sum, (newVal, oldVal) => {
                console.log('newVal = ' + newVal + '  oldVal = ' + oldVal);
            });
            watch(msg, (newVal, oldVal) => {
                console.log('newVal = ' + newVal + '  oldVal = ' + oldVal);
            }); */
            watch([sum, msg], (newVal, oldVal) => {
                console.log('newVal = ', newVal, '  oldVal = ', oldVal);
            });
            
            //监视reactive所定义的一个响应式数据
            // 此处无法正确获取oldValue，且强制开启了深度监视，deep配置无效
            watch(person, (newVal, oldVal) => {
                console.log('newVal = ', newVal, '  oldVal = ', oldVal);
            }, {deep: false});
    
            //监视reactive所定义的一个响应式数据的属性，需要使用函数才可以使deep配置生效
            watch(() => person.pet, (newVal, oldVal) => {
                console.log('watch person.pet...');
                console.log('newVal = ', newVal, '  oldVal = ', oldVal);
            });
            
            return {
                sum, msg, person
            };
        }
    }
</script>
