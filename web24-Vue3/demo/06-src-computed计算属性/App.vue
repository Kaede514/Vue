<template>
    <h2>姓名：{{person.fullName}}</h2>
    全名：<input type="text" v-model="person.fullName">
</template>

<script>
    import {reactive, computed} from "vue"

    export default {
        name: 'App',
        setup() {
            let person = reactive({
                firstName: '张',
                lastName: '三'
            });
            
            // 计算属性(简写，未考虑计算属性被修改的情况)
            // person.fullName = computed(() => person.firstName + person.lastName);
            person.fullName = computed({
                get() {return person.firstName + '-' + person.lastName},
                set(value) {
                    const nameArr = value.split('-');
                    person.firstName = nameArr[0];
                    person.lastName = nameArr[1];
                }
            });
            
            
            return {
                person
            };
        }
    }
</script>
