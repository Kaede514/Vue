<template>
    <Demo @hello="showHelloMsg" msg="hello">
        <h2>插槽slot</h2>
    </Demo>
</template>

<script>
    import Demo from "./components/Demo"

    export default {
        name: 'App',
        components: {Demo},
        setup() {
            function showHelloMsg(val) {
                alert('hello ' + val);
            }
            
            return {
                showHelloMsg
            }
        }
    }
</script>
