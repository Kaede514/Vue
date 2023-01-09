<template>
    <div>
        <!-- <h2>当前求和为：{{countAbout.sum}}</h2> -->
        <h2>当前求和为：{{sum}}</h2>
        <h2>当前求和放大10倍后为：{{bigSum}}</h2>
        <select v-model.number="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(number)">+</button>
        <button @click="decrement(number)">-</button>
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
            ...mapMutations('countAbout', {increment: 'INC', decrement: 'DEC'}),
            ...mapActions('countAbout', {incrementOdd: 'incOdd', incrementWait: 'incWait'})
        },
        computed: {
            // ...mapState(['countAbout']),
            // 需先开启命名空间
            ...mapState('countAbout', {sum: 'sum'}),
            ...mapGetters('countAbout', ['bigSum'])
        }
    }
</script>

<style scoped lang="less">
    button {
        margin-left: 5px;
    }
</style>
