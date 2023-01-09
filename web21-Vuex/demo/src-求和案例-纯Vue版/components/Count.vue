<template>
    <div>
        <h2>当前求和为：{{sum}}</h2>
        <select v-model.number="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等1s再加</button>
    </div>
</template>

<script>
    export default {
        name: "Count",
        data() {
            return {
                sum: 0,
                number: 1
            }
        },
        methods: {
            increment() {
                this.sum += this.number;
            },
            decrement() {
                this.sum -= this.number;
            },
            incrementOdd() {
                if (this.sum % 2) this.sum += this.number;
            },
            incrementWait() {
                setTimeout(() => {
                    this.sum += this.number;
                }, 1000);
            }
        }
    }
</script>

<style scoped lang="less">
    button {
        margin-left: 5px;
    }
</style>