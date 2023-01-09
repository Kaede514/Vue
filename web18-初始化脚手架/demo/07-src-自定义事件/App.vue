<template>
    <div>
        <h2 v-show="name">宠物姓名：{{name}}</h2>
        <!-- 通过父组件给子组件传递函数类型props实现子给父传递数据 -->
        <Student :getStuName="getStuName"></Student>
        
        <!-- 通过父组件给子组件绑定自定义事件实现子给父传递数据 -->
        <!-- 方式一 -->
        <!-- <Pet @kaede="getPetName"></Pet> -->
        <!-- 方式二 -->
        <!-- 原生DOM事件写在组件标签上默认为自定义事件，.native表示为原生DOM事件，会把事件交给组件最外层的元素 -->
        <Pet ref="pet" @click.native.self="show"></Pet>
    </div>
</template>

<script>
    import Student from "./components/Student";
    import Pet from "./components/Pet";
    
    export default {
        name: "App",
        components: {
            Student, Pet
        },
        data() {
            return {name: ''}
        },
        methods: {
            getStuName(name) {
                console.log('getStuName = ' + name);
            },
            getPetName(name) {
                // 方式二-1，this指向App
                this.name = name;
                console.log('getPetName = ' + name);
            },
            show() {
                alert(this.name);
            }
        },
        mounted() {
            // 方式二(更加灵活)
            this.$refs.pet.$on('kaede', this.getPetName);
            // 事件只触发一次
            // this.$refs.pet.$once('kaede', this.getPetName);
            // 1s后绑定事件
            /* setTimeout(() => {
                this.$refs.pet.$on('kaede', this.getPetName);
            }, 1000); */
            /* this.$refs.pet.$on('kaede', function (name) {
                // 方式二-2，this指向事件调用者Pet
                this.name = name;
                console.log('getPetName = ' + name);
            }); */
            /* this.$refs.pet.$on('kaede', name => {
                // 方式二-3，this指向App
                this.name = name;
                console.log('getPetName = ' + name);
            }); */
        }
    }
</script>
