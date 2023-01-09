<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点击加1</button>
    <h2>当前点击时鼠标的坐标为 ({{point.x}}, {{point.y}})</h2>
</template>

<script>
    import {ref} from "vue"
    import usePoint from "../hooks/usePoint"

    export default {
        name: "Demo",
        setup() {
            let sum = ref(0);
            let point = usePoint();
            return {sum, point};
        }
    }
</script>
