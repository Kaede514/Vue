<template>
    <div>
        <!-- <h2>当前求和为：{{$store.state.sum}}</h2> -->
        <!-- <h2>当前求和放大10倍后为：{{$store.getters.bigSum}}</h2> -->
        <h2>当前求和为：{{sum}}</h2>
        <h2>当前求和放大10倍后为：{{bigSum}}</h2>
        <select v-model.number="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <!-- <button @click="increment">+</button> -->
        <!-- <button @click="decrement">-</button> -->
        <button @click="increment(number)">+</button>
        <button @click="decrement(number)">-</button>
        <!-- <button @click="incrementOdd">当前求和为奇数再加</button> -->
        <!-- <button @click="incrementWait">等1s再加</button> -->
        <button @click="incrementOdd(number)">当前求和为奇数再加</button>
        <button @click="incrementWait(number)">等1s再加</button>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

    export default {
        name: "Count",
        data() {
            return {
                number: 1
            }
        },
        methods: {
            /* increment() {
                this.$store.commit('INC', this.number);
            },
            decrement() {
                this.$store.commit('DEC', this.number);
            }, */
            // 借助mapMutations生成对应的方法，方法中会调用commit联系mutations(对象写法)
            // 方法中所需的参数需在使用时传入，否则默认传入事件对象
            ...mapMutations({increment: 'INC', decrement: 'DEC'}),
            // 借助mapMutations生成对应的方法，方法中会调用commit联系mutations(数组写法)
            // ...mapMutations(['INC', 'DEC'])
            /* incrementOdd() {
                this.$store.dispatch('incOdd', this.number);
            },
            incrementWait() {
                this.$store.dispatch('incWait', this.number);
            } */
            // 借助mapActions生成对应的方法，方法中会调用dispatch联系actions(对象写法)
            // 方法中所需的参数需在使用时传入，否则默认传入事件对象
            ...mapActions({incrementOdd: 'incOdd', incrementWait: 'incWait'})
            // 借助mapActions生成对应的方法，方法中会调用dispatch联系actions(数组写法)
            // ...mapActions(['incOdd', 'incWait'])
        },
        computed: {
            // sum() {return this.$store.state.sum;},
            // bigSum() {return this.$store.getters.bigSum;}
            // 借助mapState生成计算属性，从state中读取数据(对象写法)
            ...mapState({sum: 'sum'}),
            // 借助mapGetters生成计算属性，从getter中读取数据(简写写法，数组写法)
            ...mapGetters(['bigSum'])
        }
    }
</script>

<style scoped lang="less">
    button {
        margin-left: 5px;
    }
</style>
