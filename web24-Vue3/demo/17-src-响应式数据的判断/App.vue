<template>

</template>

<script>
    import {isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref} from "vue"

    export default {
        name: 'App',
        setup() {
            let person = ref({
                name: 'kaede', age: 20,
                pet: {name: 'grass', age: 3}
            });
            let person2 = reactive({
                name: 'kaede', age: 20,
                pet: {name: 'grass', age: 3}
            });
            let person3 = readonly(person2);
    
            console.log(isRef(person));
            console.log(isReactive(person));
            console.log(isReadonly(person3));
            console.log(isProxy(person));
            console.log(isProxy(person3));
        }
    }
</script>
